
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService } from './services/settings.service';
import { TranslationService } from './services/translation.service';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageGeneratorComponent } from './components/image-generator/image-generator.component';
import { AiChatComponent } from './components/ai-chat/ai-chat.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AiZoneComponent } from './components/ai-zone/ai-zone.component';
import { SettingsComponent } from './components/settings/settings.component';

export type Page = 'imageGenerator' | 'gallery' | 'aiZone' | 'aiChat';

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
    AiChatComponent,
    GalleryComponent,
    AiZoneComponent,
    SettingsComponent
  ],
})
export class AppComponent {
  settingsService = inject(SettingsService);
  translationService = inject(TranslationService);

  isSidebarOpen = signal(false);
  isSettingsOpen = signal(false);
  activePage = signal<Page>('imageGenerator');

  constructor() {
    // Initialize services to load settings and translations
    this.settingsService.init();
    this.translationService.init(this.settingsService.language());
  }
  
  changePage(page: Page) {
    this.activePage.set(page);
    this.isSidebarOpen.set(false);
  }
}
