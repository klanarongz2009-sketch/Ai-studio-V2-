
import { computed, Injectable, signal } from '@angular/core';
import { Language, translations } from '../models/translation.model';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLanguage = signal<Language>('en');

  // Expose a translator function `t` as a signal
  public t = computed(() => (key: string): string => {
    const lang = this.currentLanguage();
    const keyParts = key.split('.');
    let result: any = translations[lang];
    for (const part of keyParts) {
      if (result === undefined) {
        break;
      }
      result = result[part];
    }
    return result || key;
  });

  init(initialLanguage: Language) {
    this.setLanguage(initialLanguage);
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    document.documentElement.lang = lang;
  }
  
  getCurrentLanguage() {
    return this.currentLanguage();
  }
}
