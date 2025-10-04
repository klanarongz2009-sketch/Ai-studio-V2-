
import { ChangeDetectionStrategy, Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { MenuIconComponent } from '../icons/menu-icon.component';
import { SettingsIconComponent } from '../icons/settings-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuIconComponent, SettingsIconComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  translationService = inject(TranslationService);
  t = this.translationService.t;
  
  toggleSidebar = output<void>();
  openSettings = output<void>();
}
