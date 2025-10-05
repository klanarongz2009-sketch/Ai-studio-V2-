import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-music-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" class="w-6 h-6">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicIconComponent {}
