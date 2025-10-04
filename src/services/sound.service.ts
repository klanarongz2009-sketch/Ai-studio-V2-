import { Injectable } from '@angular/core';

export type SoundEffect = 'click' | 'success' | 'error' | 'open' | 'close' | 'navigate';

@Injectable({ providedIn: 'root' })
export class SoundService {
  preload() {
    // System does not support sound, do nothing.
  }

  playSound(name: SoundEffect) {
    // System does not support sound, do nothing.
  }
}
