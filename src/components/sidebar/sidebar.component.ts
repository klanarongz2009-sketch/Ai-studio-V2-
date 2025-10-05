import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page } from '../../app.component';
import { TranslationService } from '../../services/translation.service';
import { SoundService } from '../../services/sound.service';
import { ImageIconComponent } from '../icons/image-icon.component';
import { VideoIconComponent } from '../icons/video-icon.component';
import { GalleryIconComponent } from '../icons/gallery-icon.component';
import { AiZoneIconComponent } from '../icons/ai-zone-icon.component';
import { ChatIconComponent } from '../icons/chat-icon.component';
import { MusicIconComponent } from '../icons/music-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ImageIconComponent, VideoIconComponent, MusicIconComponent, GalleryIconComponent, AiZoneIconComponent, ChatIconComponent],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  translationService = inject(TranslationService);
  soundService = inject(SoundService);
  t = this.translationService.t;

  isOpen = input.required<boolean>();
  activePage = input.required<Page>();
  closeSidebar = output<void>();
  navigate = output<Page>();

  onNavigate(page: Page) {
    this.soundService.playSound('navigate');
    this.navigate.emit(page);
  }
}