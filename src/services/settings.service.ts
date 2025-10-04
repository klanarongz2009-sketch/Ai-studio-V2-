import { effect, Injectable, signal } from '@angular/core';
import { Language } from '../models/translation.model';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  theme = signal<Theme>('dark');
  language = signal<Language>('th');

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
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }

  setLanguage(language: Language) {
    this.language.set(language);
  }
}
