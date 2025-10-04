import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ai-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" class="w-full h-full text-text-inverted">
      <rect x="2" y="8" width="20" height="12" rx="2"></rect>
      <path d="M6 4h12"></path>
      <path d="M12 4v4"></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
      <path d="M11 18h2"></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiIconComponent {}