
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-ai-zone',
  standalone: true,
  templateUrl: './ai-zone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiZoneComponent {
  translationService = inject(TranslationService);
  t = this.translationService.t;
}
