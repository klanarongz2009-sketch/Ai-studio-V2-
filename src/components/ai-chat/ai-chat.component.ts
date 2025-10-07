import { afterNextRender, ChangeDetectionStrategy, Component, effect, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chat } from '@google/genai';

import { TranslationService } from '../../services/translation.service';
import { GeminiService } from '../../services/gemini.service';
import { SoundService } from '../../services/sound.service';

import { UserIconComponent } from '../icons/user-icon.component';
import { AiIconComponent } from '../icons/ai-icon.component';
import { RefreshIconComponent } from '../icons/refresh-icon.component';

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, UserIconComponent, AiIconComponent, RefreshIconComponent],
  templateUrl: './ai-chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiChatComponent implements OnInit {
  translationService = inject(TranslationService);
  geminiService = inject(GeminiService);
  soundService = inject(SoundService);
  t = this.translationService.t;

  messages = signal<ChatMessage[]>([]);
  userInput = signal('');
  isLoading = signal(false);
  error = signal<string | null>(null);
  
  private chat: Chat | null = null;
  private readonly CHAT_HISTORY_KEY = 'ai-chat-history';
  
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  constructor() {
    // This effect runs whenever messages change, scrolling to the bottom.
    effect(() => {
      if (this.messages() && this.chatContainer) {
        this.scrollToBottom();
      }
    });

    // This effect saves chat history to localStorage when loading is finished.
    effect(() => {
      if (!this.isLoading()) {
        const currentMessages = this.messages();
        // Avoid saving the initial state if it's just the welcome message
        if (currentMessages.length > 1 || 
           (currentMessages.length === 1 && currentMessages[0].content !== this.t()('aiChat.initialMessage'))) {
          try {
            localStorage.setItem(this.CHAT_HISTORY_KEY, JSON.stringify(currentMessages));
          } catch (e) {
            console.error('Failed to save chat history:', e);
          }
        }
      }
    });

    // This ensures the view is rendered before the initial scroll.
    afterNextRender(() => {
        this.scrollToBottom();
    });
  }

  ngOnInit() {
    try {
      this.chat = this.geminiService.startChat();
      this.loadChatHistory();
    } catch(e: any) {
      this.error.set(e.message || 'Failed to start chat session.');
    }
  }

  async sendMessage() {
    const userMessage = this.userInput().trim();
    if (!userMessage || this.isLoading() || !this.chat) return;

    this.soundService.playSound('click');
    
    this.messages.update(current => [...current, { role: 'user', content: userMessage }]);
    this.userInput.set('');
    this.isLoading.set(true);
    this.error.set(null);

    // Add a placeholder for the AI's streaming response
    this.messages.update(current => [...current, { role: 'model', content: '' }]);
    
    try {
      const stream = await this.chat.sendMessageStream({ message: userMessage });

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        this.messages.update(current => {
          const lastMessage = current[current.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.content += chunkText;
          }
          return [...current];
        });
      }
      this.soundService.playSound('success');

    } catch (e: any) {
      const errorMessage = e.message || 'An unknown error occurred.';
      this.error.set(errorMessage);
      this.messages.update(current => {
        const lastMessage = current[current.length - 1];
        if(lastMessage.role === 'model') {
            lastMessage.content = `Error: ${this.t()('outputDisplay.errorTitle')}`;
        }
        return [...current];
      });
      this.soundService.playSound('error');
    } finally {
      this.isLoading.set(false);
      this.scrollToBottom();
    }
  }

  clearChat() {
    if (this.isLoading()) return;

    this.soundService.playSound('click');
    
    try {
      localStorage.removeItem(this.CHAT_HISTORY_KEY);
      this.chat = this.geminiService.startChat(); // Re-initialize chat session
      this.messages.set([{
        role: 'model',
        content: this.t()('aiChat.initialMessage')
      }]);
      this.error.set(null);
      this.userInput.set('');
    } catch (e: any) {
      this.error.set(e.message || 'Failed to clear chat.');
      this.soundService.playSound('error');
    }
  }

  private loadChatHistory() {
    try {
        const savedHistory = localStorage.getItem(this.CHAT_HISTORY_KEY);
        if (savedHistory) {
            const parsedHistory = JSON.parse(savedHistory) as ChatMessage[];
            if (Array.isArray(parsedHistory) && parsedHistory.length > 0) {
                this.messages.set(parsedHistory);
                return;
            }
        }
    } catch (e) {
        console.error('Failed to load or parse chat history:', e);
        // If loading fails, we'll proceed to set the initial message.
    }

    this.messages.set([{
        role: 'model',
        content: this.t()('aiChat.initialMessage')
    }]);
  }

  private scrollToBottom(): void {
    try {
      if (this.chatContainer?.nativeElement) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Could not scroll to bottom:', err);
    }
  }
}