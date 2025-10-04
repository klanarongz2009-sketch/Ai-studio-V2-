
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  templateUrl: './ai-chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiChatComponent {
  translationService = inject(TranslationService);
  t = this.translationService.t;
}
