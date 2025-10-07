import { Injectable } from '@angular/core';

export type SoundEffect = 'click' | 'success' | 'error' | 'open' | 'close' | 'navigate';

@Injectable({ providedIn: 'root' })
export class SoundService {
  private soundData: Record<SoundEffect, string> = {
    click: 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABgAZGF0YQIAAAD//wA=',
    success: 'data:audio/wav;base64,UklGRqgCAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABgAZGF0YWoCABAJCwsUFRkaHiMkJyowNTg+REtUXWRrgoSQlJyqtcXK0tbb3uvz/f7/CgkPFSYwP0hUYW94g4uYo6q0v8zV3OPq9f3+AQ8cLT1HWW9/ipSen7LFzdXb4Ofs8/b6/gMbKEdag5eww8/c6fH5/wQdMEpgh7bL1uXu9vwBGD5ig8LP3Ovz+P8AFDtch8nZ5fP9/wE2fqzS5vX/ADJtsOby+gBCec3u/wBBeL3x/wB4',
    error: 'data:audio/wav;base64,UklGRrgCAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABgAZGF0YYQCAAB//f3+9vXy8O/u7ezr6ufm5OTk4+Lh4N/f3t3c29bV09LR0M/OzMvKycbExMDBv7y7uri3tra0s7GwsK2tp6SlpKOioqCfn56dm5qamJaVlZKSkpCOiIiGhoODg35+fX19fHx7e3t5eXl3d3d1dXVzc3NxcXFvb29sbGxqampoaGhgYGA/Pz09PTw8Ozo6OTk4ODg3NzY2NjU1NTQ0NDMzMzIyMjExMTAwLy8uLi0tLCwsKSopKCkoJygnJychISEgHx8eHh0dHBwcGxsZGRgYFxcWFhUVFBQUExMTDw8Ojo4ODg4NjY2NDQ0NDIyMjAwMCwsKCQgHBwcGBgUFBQQDAwEBAAAA',
    open: 'data:audio/wav;base64,UklGRlgEAABXQVZFZm10IBAAAAABAAIARKwAABCxAgAEABgAZGF0YQAEBgACAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A',
    // Re-using 'error' sound for 'close' and 'open' for 'navigate' for thematic consistency
    close: 'data:audio/wav;base64,UklGRrgCAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABgAZGF0YYQCAAB//f3+9vXy8O/u7ezr6ufm5OTk4+Lh4N/f3t3c29bV09LR0M/OzMvKycbExMDBv7y7uri3tra0s7GwsK2tp6SlpKOioqCfn56dm5qamJaVlZKSkpCOiIiGhoODg35+fX19fHx7e3t5eXl3d3d1dXVzc3NxcXFvb29sbGxqampoaGhgYGA/Pz09PTw8Ozo6OTk4ODg3NzY2NjU1NTQ0NDMzMzIyMjExMTAwLy8uLi0tLCwsKSopKCkoJygnJychISEgHx8eHh0dHBwcGxsZGRgYFxcWFhUVFBQUExMTDw8Ojo4ODg4NjY2NDQ0NDIyMjAwMCwsKCQgHBwcGBgUFBQQDAwEBAAAA',
    navigate: 'data:audio/wav;base64,UklGRlgEAABXQVZFZm10IBAAAAABAAIARKwAABCxAgAEABgAZGF0YQAEBgACAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A'
  };

  /**
   * This method is called during app initialization.
   * With the current 'fire-and-forget' audio playback approach, 
   * we don't need to pre-cache Audio elements. The browser handles
   * caching the underlying data URLs efficiently. This method is kept
   * for structural consistency and can be used for future preloading needs.
   */
  preload() {
    // Intentionally empty.
  }

  playSound(name: SoundEffect) {
    const soundSrc = this.soundData[name];
    if (soundSrc) {
      const audio = new Audio(soundSrc);
      audio.play().catch(error => {
        // The AbortError is a non-critical error that can occur if the user
        // navigates away or another action interrupts the sound playback
        // before it can start. We can safely ignore it to avoid cluttering
        // the console with benign errors.
        if (error.name !== 'AbortError') {
          console.error(`Could not play sound: ${name}`, error);
        }
      });
    } else {
      console.warn(`Sound not found: ${name}`);
    }
  }
}
