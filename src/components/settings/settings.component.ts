import { ChangeDetectionStrategy, Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, Theme } from '../../services/settings.service';
import { TranslationService } from '../../services/translation.service';
import { SoundService } from '../../services/sound.service';
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
  soundService = inject(SoundService);
  t = this.translationService.t;

  closeSettings = output<void>();
  openBetaInfo = output<void>();

  currentTheme = this.settingsService.theme;
  currentLanguage = this.settingsService.language;

  setTheme(theme: Theme) {
    this.soundService.playSound('click');
    this.settingsService.setTheme(theme);
  }

  setLanguage(language: Language) {
    this.soundService.playSound('click');
    this.settingsService.setLanguage(language);
    this.translationService.setLanguage(language);
  }

  onOpenBetaInfo() {
    this.soundService.playSound('click');
    this.openBetaInfo.emit();
  }

  onClose() {
    this.soundService.playSound('click');
    this.closeSettings.emit();
  }
}