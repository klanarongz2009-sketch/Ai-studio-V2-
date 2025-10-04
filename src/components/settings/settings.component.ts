
import { ChangeDetectionStrategy, Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, Theme } from '../../services/settings.service';
import { TranslationService } from '../../services/translation.service';
import { Language } from '../../models/translation.model';
import { CloseIconComponent } from '../icons/close-icon.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, CloseIconComponent],
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  settingsService = inject(SettingsService);
  translationService = inject(TranslationService);
  t = this.translationService.t;

  closeSettings = output<void>();

  currentTheme = this.settingsService.theme;
  currentLanguage = this.settingsService.language;

  setTheme(theme: Theme) {
    this.settingsService.setTheme(theme);
  }

  setLanguage(language: Language) {
    this.settingsService.setLanguage(language);
    this.translationService.setLanguage(language);
  }
}
