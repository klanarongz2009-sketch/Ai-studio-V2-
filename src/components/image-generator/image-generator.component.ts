
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslationService } from '../../services/translation.service';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-image-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGeneratorComponent {
  translationService = inject(TranslationService);
  geminiService = inject(GeminiService);
  t = this.translationService.t;

  prompt = signal('');
  generatedImage = signal<string | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);

  async onGenerate() {
    const currentPrompt = this.prompt();
    if (!currentPrompt || this.isLoading()) return;

    this.isLoading.set(true);
    this.error.set(null);
    this.generatedImage.set(null);

    try {
      const imageUrl = await this.geminiService.generateImage(currentPrompt);
      this.generatedImage.set(imageUrl);
    } catch (e: any) {
      this.error.set(e.message || 'An unknown error occurred.');
    } finally {
      this.isLoading.set(false);
    }
  }

  onClear() {
    this.prompt.set('');
    this.generatedImage.set(null);
    this.error.set(null);
    this.isLoading.set(false);
  }

  isGenerateDisabled(): boolean {
    return this.isLoading() || this.prompt().trim().length === 0;
  }
}
