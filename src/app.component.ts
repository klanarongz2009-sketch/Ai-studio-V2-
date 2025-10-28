import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService } from './services/settings.service';
import { TranslationService } from './services/translation.service';
import { SoundService } from './services/sound.service';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageGeneratorComponent } from './components/image-generator/image-generator.component';
import { VideoGeneratorComponent } from './components/video-generator/video-generator.component';
import { AiChatComponent } from './components/ai-chat/ai-chat.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AiZoneComponent } from './components/ai-zone/ai-zone.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BetaInfoComponent } from './components/beta-info/beta-info.component';
import { MusicGeneratorComponent } from './components/music-generator/music-generator.component';
import { ChatInfoComponent } from './components/chat-info/chat-info.component';

export type Page = 'imageGenerator' | 'videoGenerator' | 'musicGenerator' | 'gallery' | 'aiZone' | 'aiChat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    ImageGeneratorComponent,
    VideoGeneratorComponent,
    MusicGeneratorComponent,
    AiChatComponent,
    GalleryComponent,
    AiZoneComponent,
    SettingsComponent,
    BetaInfoComponent,
    ChatInfoComponent,
  ],
})
export class AppComponent {
  settingsService = inject(SettingsService);
  translationService = inject(TranslationService);
  soundService = inject(SoundService);

  isSidebarOpen = signal(false);
  isSettingsOpen = signal(false);
  isBetaInfoOpen = signal(false);
  isChatInfoOpen = signal(false);
  activePage = signal<Page>('musicGenerator');

  constructor() {
    // Initialize services to load settings and translations
    this.settingsService.init();
    this.translationService.init(this.settingsService.language());
    this.soundService.preload();
  }
  
  changePage(page: Page) {
    this.activePage.set(page);
    this.isSidebarOpen.set(false);
  }

  toggleSidebar() {
    this.soundService.playSound(this.isSidebarOpen() ? 'close' : 'open');
    this.isSidebarOpen.update(v => !v);
  }

  openSettings() {
    this.isSettingsOpen.set(true);
    this.soundService.playSound('open');
  }

  closeSettings() {
    this.isSettingsOpen.set(false);
    this.soundService.playSound('close');
  }

  openBetaInfo() {
    this.isSettingsOpen.set(false);
    this.isBetaInfoOpen.set(true);
    this.soundService.playSound('open');
  }

  closeBetaInfo() {
    this.isBetaInfoOpen.set(false);
    this.soundService.playSound('close');
  }
  
  openChatInfo() {
    this.isChatInfoOpen.set(true);
    this.soundService.playSound('open');
  }

  closeChatInfo() {
    this.isChatInfoOpen.set(false);
    this.soundService.playSound('close');
  }
  
  closeSidebar() {
    if (this.isSidebarOpen()) {
      this.isSidebarOpen.set(false);
      this.soundService.playSound('close');
    }
  }
}
