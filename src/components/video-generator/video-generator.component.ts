
import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslationService } from '../../services/translation.service';
import { GeminiService } from '../../services/gemini.service';
import { SoundService } from '../../services/sound.service';

@Component({
  selector: 'app-video-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './video-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoGeneratorComponent implements OnDestroy {
  translationService = inject(TranslationService);
  geminiService = inject(GeminiService);
  soundService = inject(SoundService);
  t = this.translationService.t;

  prompt = signal('');
  generatedVideoUrl = signal<string | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);
  loadingMessage = signal('');
  private loadingInterval: any;

  async onGenerate() {
    const currentPrompt = this.prompt();
    if (!currentPrompt || this.isLoading()) return;
    
    this.soundService.playSound('click');
    this.isLoading.set(true);
    this.error.set(null);
    this.generatedVideoUrl.set(null);
    this.startLoadingMessages();

    try {
      const videoUrl = await this.geminiService.generateVideo(currentPrompt);
      this.generatedVideoUrl.set(videoUrl);
      this.soundService.playSound('success');
    } catch (e: any) {
      this.error.set(e.message || 'An unknown error occurred.');
      this.soundService.playSound('error');
    } finally {
      this.isLoading.set(false);
      this.stopLoadingMessages();
    }
  }

  onClear() {
    this.soundService.playSound('click');
    this.prompt.set('');
    this.generatedVideoUrl.set(null);
    this.error.set(null);
    this.isLoading.set(false);
  }

  isGenerateDisabled(): boolean {
    return this.isLoading() || this.prompt().trim().length === 0;
  }

  private startLoadingMessages() {
    // Note: t() can return string or array, we cast it here.
    const messages = this.t()('videoGenerator.loadingMessages') as unknown as string[];
    if (!messages || messages.length === 0) {
      this.loadingMessage.set(this.t()('videoGenerator.generating'));
      return;
    }
    let index = 0;
    this.loadingMessage.set(messages[index]);
    this.loadingInterval = setInterval(() => {
      index = (index + 1) % messages.length;
      this.loadingMessage.set(messages[index]);
    }, 5000);
  }

  private stopLoadingMessages() {
    if (this.loadingInterval) {
      clearInterval(this.loadingInterval);
      this.loadingInterval = null;
    }
  }

  ngOnDestroy() {
    // Clean up object URL and interval to prevent memory leaks
    if (this.generatedVideoUrl()) {
      URL.revokeObjectURL(this.generatedVideoUrl()!);
    }
    this.stopLoadingMessages();
  }
}
