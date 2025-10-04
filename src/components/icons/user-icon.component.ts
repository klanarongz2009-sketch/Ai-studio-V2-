import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" class="w-full h-full text-text-inverted">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIconComponent {}