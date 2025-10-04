import { Injectable, inject } from '@angular/core';
import { SettingsService } from './settings.service';

export type SoundEffect = 'click' | 'success' | 'error' | 'open' | 'close' | 'navigate';

@Injectable({ providedIn: 'root' })
export class SoundService {
  private settingsService = inject(SettingsService);
  private audioCache = new Map<SoundEffect, HTMLAudioElement>();
  private isPreloading = false;

  private soundMap: Record<SoundEffect, string> = {
    click: 'https://aistudiocdn.com/sounds/click.wav',
    success: 'https://aistudiocdn.com/sounds/success.wav',
    error: 'https://aistudiocdn.com/sounds/error.wav',
    open: 'https://aistudiocdn.com/sounds/open.wav',
    close: 'https://aistudiocdn.com/sounds/close.wav',
    navigate: 'https://aistudiocdn.com/sounds/navigate.wav',
  };

  preload() {
    if (this.isPreloading || this.audioCache.size > 0) {
      return;
    }
    this.isPreloading = true;
    for (const key in this.soundMap) {
      const name = key as SoundEffect;
      const url = this.soundMap[name];
      const audio = new Audio(url);
      audio.preload = 'auto';
      this.audioCache.set(name, audio);
    }
    this.isPreloading = false;
  }

  playSound(name: SoundEffect) {
    if (!this.settingsService.soundEnabled()) {
      return;
    }
    
    const audio = this.audioCache.get(name);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => {
        // Autoplay may be blocked by the browser, which is a common issue.
        // We can log this for debugging but shouldn't treat it as a critical error.
        console.warn(`Could not play sound "${name}":`, error);
      });
    } else {
      console.warn(`Sound not found in cache: ${name}`);
    }
  }
}
