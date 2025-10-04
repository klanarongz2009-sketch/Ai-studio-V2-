import { effect, Injectable, signal } from '@angular/core';
import { Language } from '../models/translation.model';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  theme = signal<Theme>('dark');
  language = signal<Language>('th');
  soundEnabled = signal<boolean>(true);

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      if (currentTheme === 'light') {
        document.body.classList.add('theme-light');
      } else {
        document.body.classList.remove('theme-light');
      }
      localStorage.setItem('app-theme', currentTheme);
    });

    effect(() => {
        const currentLanguage = this.language();
        localStorage.setItem('app-language', currentLanguage);
    });

    effect(() => {
      const sounds = this.soundEnabled();
      localStorage.setItem('app-sound-enabled', JSON.stringify(sounds));
    });
  }

  init() {
    const savedTheme = localStorage.getItem('app-theme') as Theme | null;
    if (savedTheme) {
      this.theme.set(savedTheme);
    }

    const savedLang = localStorage.getItem('app-language') as Language | null;
    if (savedLang) {
      this.language.set(savedLang);
    }

    const savedSound = localStorage.getItem('app-sound-enabled');
    if (savedSound) {
      this.soundEnabled.set(JSON.parse(savedSound));
    }
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }

  setLanguage(language: Language) {
    this.language.set(language);
  }

  setSoundEnabled(enabled: boolean) {
    this.soundEnabled.set(enabled);
  }
}
