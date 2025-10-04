
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ai-zone-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" class="w-6 h-6">
      <path d="M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3Z"/>
      <path d="M5 3L6 5"/>
      <path d="M19 21L18 19"/>
      <path d="M3 19L5 18"/>
      <path d="M21 5L19 6"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiZoneIconComponent {}
