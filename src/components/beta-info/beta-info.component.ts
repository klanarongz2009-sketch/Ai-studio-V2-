import { ChangeDetectionStrategy, Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { SoundService } from '../../services/sound.service';
import { CloseIconComponent } from '../icons/close-icon.component';

@Component({
  selector: 'app-maintenance-info',
  standalone: true,
  imports: [CommonModule, CloseIconComponent],
  templateUrl: './beta-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceInfoComponent {
  translationService = inject(TranslationService);
  soundService = inject(SoundService);
  t = this.translationService.t;

  close = output<void>();

  onClose() {
    this.soundService.playSound('click');
    this.close.emit();
  }
}