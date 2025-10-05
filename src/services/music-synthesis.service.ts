import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MusicSynthesisService {

  async generateChiptuneTrack(): Promise<Blob> {
    const duration = 15; // 15 seconds
    const sampleRate = 44100;
    // Use OfflineAudioContext to render the audio in the background
    const offlineCtx = new OfflineAudioContext(2, sampleRate * duration, sampleRate);

    // --- Melody Generation ---
    // A simple C Major Pentatonic scale to make the random melody sound more musical
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 523.25*1.5, 523.25*2]; 
    let currentTime = 0.1;
    
    // Generate random notes until the track duration is filled
    while (currentTime < duration - 0.5) {
      // Pick a random note from the scale, sometimes an octave higher
      const noteFreq = scale[Math.floor(Math.random() * scale.length)] * (Math.random() < 0.25 ? 2 : 1);
      // Pick a random duration (eighth, quarter, or dotted eighth notes)
      const noteDuration = (Math.floor(Math.random() * 3) + 1) * 0.125;

      // Create an oscillator for the note's sound wave (square for chiptune)
      const oscillator = offlineCtx.createOscillator();
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(noteFreq, currentTime);

      // Use a GainNode to control the volume and create a percussive envelope
      const gain = offlineCtx.createGain();
      gain.gain.setValueAtTime(0, currentTime);
      gain.gain.linearRampToValueAtTime(0.25, currentTime + 0.01); // Quick attack
      gain.gain.linearRampToValueAtTime(0, currentTime + noteDuration); // Fast decay to zero

      oscillator.connect(gain);
      gain.connect(offlineCtx.destination);
      
      oscillator.start(currentTime);
      oscillator.stop(currentTime + noteDuration);

      currentTime += noteDuration;
    }

    const renderedBuffer = await offlineCtx.startRendering();
    return this.audioBufferToWav(renderedBuffer);
  }

  // Utility to convert the raw audio data (AudioBuffer) into a WAV file format (Blob)
  private audioBufferToWav(buffer: AudioBuffer): Blob {
    const numOfChan = buffer.numberOfChannels;
    const length = buffer.length * numOfChan * 2 + 44;
    const bufferArray = new ArrayBuffer(length);
    const view = new DataView(bufferArray);
    const channels = [];
    let offset = 0;

    const writeString = (view: DataView, offset: number, str: string) => {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    };

    // RIFF header
    writeString(view, offset, 'RIFF'); offset += 4;
    view.setUint32(offset, length - 8, true); offset += 4;
    writeString(view, offset, 'WAVE'); offset += 4;

    // fmt chunk
    writeString(view, offset, 'fmt '); offset += 4;
    view.setUint32(offset, 16, true); offset += 4; // chunk size
    view.setUint16(offset, 1, true); offset += 2; // format
    view.setUint16(offset, numOfChan, true); offset += 2;
    view.setUint32(offset, buffer.sampleRate, true); offset += 4;
    view.setUint32(offset, buffer.sampleRate * 2 * numOfChan, true); offset += 4; // byte rate
    view.setUint16(offset, numOfChan * 2, true); offset += 2; // block align
    view.setUint16(offset, 16, true); offset += 2; // bits per sample

    // data chunk
    writeString(view, offset, 'data'); offset += 4;
    view.setUint32(offset, length - offset - 4, true); offset += 4;

    for (let i = 0; i < buffer.numberOfChannels; i++) {
      channels.push(buffer.getChannelData(i));
    }

    let pos = 0;
    while (pos < buffer.length) {
      for (let i = 0; i < numOfChan; i++) {
        let sample = Math.max(-1, Math.min(1, channels[i][pos]));
        sample = (sample < 0 ? sample * 0x8000 : sample * 0x7FFF) | 0;
        view.setInt16(offset, sample, true);
        offset += 2;
      }
      pos++;
    }

    return new Blob([view], { type: 'audio/wav' });
  }
}