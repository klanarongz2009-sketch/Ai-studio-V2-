import { ChangeDetectionStrategy, Component, inject, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { GeminiService, MusicGenerationResult } from '../../services/gemini.service';
import { SoundService } from '../../services/sound.service';
import { MusicSynthesisService } from '../../services/music-synthesis.service';

@Component({
  selector: 'app-music-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './music-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicGeneratorComponent implements OnDestroy {
  translationService = inject(TranslationService);
  geminiService = inject(GeminiService);
  soundService = inject(SoundService);
  musicSynthesisService = inject(MusicSynthesisService);
  t = this.translationService.t;

  prompt = signal('');
  generatedMusic = signal<MusicGenerationResult | null>(null);
  generatedAudioUrl = signal<string | null>(null);
  isLoading = signal(false);
  loadingStep = signal<'description' | 'synthesis' | ''>('');
  error = signal<string | null>(null);
  isSpeaking = signal(false);
  private utterance: SpeechSynthesisUtterance | null = null;

  async onGenerate() {
    const currentPrompt = this.prompt();
    if (!currentPrompt || this.isLoading()) return;
    
    this.soundService.playSound('click');
    this.isLoading.set(true);
    this.error.set(null);
    this.generatedMusic.set(null);
    window.speechSynthesis.cancel();
    
    // Clean up previous audio URL to prevent memory leaks
    if (this.generatedAudioUrl()) {
      URL.revokeObjectURL(this.generatedAudioUrl()!);
      this.generatedAudioUrl.set(null);
    }

    try {
      // Step 1: Generate music description with Gemini
      this.loadingStep.set('description');
      const musicData = await this.geminiService.generateMusicDescription(currentPrompt);
      this.generatedMusic.set(musicData);

      // Step 2: Synthesize a new audio track based on the theme
      this.loadingStep.set('synthesis');
      const audioBlob = await this.musicSynthesisService.generateElectronicTrack();
      
      const url = URL.createObjectURL(audioBlob);
      this.generatedAudioUrl.set(url);
      
      this.soundService.playSound('success');
    } catch (e: any) {
      this.error.set(e.message || 'An unknown error occurred.');
      this.soundService.playSound('error');
    } finally {
      this.isLoading.set(false);
      this.loadingStep.set('');
    }
  }

  onClear() {
    this.soundService.playSound('click');
    this.prompt.set('');
    this.generatedMusic.set(null);
    if (this.generatedAudioUrl()) {
      URL.revokeObjectURL(this.generatedAudioUrl()!);
      this.generatedAudioUrl.set(null);
    }
    this.error.set(null);
    this.isLoading.set(false);
    window.speechSynthesis.cancel();
  }

  isGenerateDisabled(): boolean {
    return this.isLoading() || this.prompt().trim().length === 0;
  }
  
  speakLyrics() {
    if (!this.generatedMusic()?.lyrics?.trim()) return;

    if (this.isSpeaking()) {
      window.speechSynthesis.cancel();
      // onend will fire, setting isSpeaking to false
      return;
    }
    
    this.soundService.playSound('click');

    this.utterance = new SpeechSynthesisUtterance(this.generatedMusic()!.lyrics);
    // The Gemini prompt for lyrics is in English, so we use an English voice.
    this.utterance.lang = 'en-US';
    this.utterance.pitch = 0.8; // Lower pitch for a more robotic feel
    this.utterance.rate = 0.9;  // Slightly slower rate

    this.utterance.onstart = () => {
      this.isSpeaking.set(true);
    };

    this.utterance.onend = () => {
      this.isSpeaking.set(false);
      this.utterance = null;
    };
    
    this.utterance.onerror = (event) => {
        console.error('SpeechSynthesis Error', event.error);
        this.isSpeaking.set(false);
        this.error.set(`Speech synthesis failed: ${event.error}`);
        this.soundService.playSound('error');
    };

    window.speechSynthesis.speak(this.utterance);
  }

  ngOnDestroy() {
    // Ensure the object URL is revoked when the component is destroyed
    if (this.generatedAudioUrl()) {
      URL.revokeObjectURL(this.generatedAudioUrl()!);
    }
    // Stop any speech synthesis in progress
    window.speechSynthesis.cancel();
  }
}
