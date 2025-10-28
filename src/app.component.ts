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
import { SettingsComponent } from './components/settings/settings.component';
import { MaintenanceInfoComponent } from './components/beta-info/beta-info.component';
import { MusicGeneratorComponent } from './components/music-generator/music-generator.component';
import { ChatInfoComponent } from './components/chat-info/chat-info.component';

export type Page = 'imageGenerator' | 'videoGenerator' | 'musicGenerator' | 'aiChat';

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
    SettingsComponent,
    MaintenanceInfoComponent,
    ChatInfoComponent,
  ],
})
export class AppComponent {
  settingsService = inject(SettingsService);
  translationService = inject(TranslationService);
  soundService = inject(SoundService);

  isSidebarOpen = signal(false);
  isSettingsOpen = signal(false);
  isMaintenanceInfoOpen = signal(false);
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

  openMaintenanceInfo() {
    this.isSettingsOpen.set(false);
    this.isMaintenanceInfoOpen.set(true);
    this.soundService.playSound('open');
  }

  closeMaintenanceInfo() {
    this.isMaintenanceInfoOpen.set(false);
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