import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslationService } from '../../services/translation.service';
import { GeminiService } from '../../services/gemini.service';
import { SoundService } from '../../services/sound.service';
import { CloseIconComponent } from '../icons/close-icon.component';

@Component({
  selector: 'app-image-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, CloseIconComponent],
  templateUrl: './image-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGeneratorComponent {
  translationService = inject(TranslationService);
  geminiService = inject(GeminiService);
  soundService = inject(SoundService);
  t = this.translationService.t;

  prompt = signal('');
  generatedImage = signal<string | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);

  // New state for ideas modal
  isIdeasModalOpen = signal(false);
  isFetchingIdeas = signal(false);
  ideas = signal<string[]>([]);
  ideasError = signal<string | null>(null);

  async onGenerate() {
    const currentPrompt = this.prompt();
    if (!currentPrompt || this.isLoading()) return;
    
    this.soundService.playSound('click');
    this.isLoading.set(true);
    this.error.set(null);
    this.generatedImage.set(null);

    try {
      const imageUrl = await this.geminiService.generateImage(currentPrompt);
      this.generatedImage.set(imageUrl);
      this.soundService.playSound('success');
    } catch (e: any) {
      this.error.set(e.message || 'An unknown error occurred.');
      this.soundService.playSound('error');
    } finally {
      this.isLoading.set(false);
    }
  }

  onClear() {
    this.soundService.playSound('click');
    this.prompt.set('');
    this.generatedImage.set(null);
    this.error.set(null);
    this.isLoading.set(false);
  }

  isGenerateDisabled(): boolean {
    return this.isLoading() || this.prompt().trim().length === 0;
  }

  async getIdeas() {
    if (this.isFetchingIdeas()) return;
    
    this.soundService.playSound('open');
    this.isIdeasModalOpen.set(true);
    this.isFetchingIdeas.set(true);
    this.ideasError.set(null);
    this.ideas.set([]);

    try {
      const ideaList = await this.geminiService.generatePromptIdeas();
      this.ideas.set(ideaList);
    } catch (e: any) {
      this.ideasError.set(e.message || 'An unknown error occurred.');
      this.soundService.playSound('error');
    } finally {
      this.isFetchingIdeas.set(false);
    }
  }

  selectIdea(idea: string) {
    this.soundService.playSound('click');
    this.prompt.set(idea);
    this.closeIdeasModal();
  }

  closeIdeasModal() {
    this.soundService.playSound('close');
    this.isIdeasModalOpen.set(false);
  }
}
