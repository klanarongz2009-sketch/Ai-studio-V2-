import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MusicSynthesisService {

  async generateElectronicTrack(): Promise<Blob> {
    const duration = 15; // 15 seconds
    const sampleRate = 44100;
    const offlineCtx = new OfflineAudioContext(2, sampleRate * duration, sampleRate);

    // --- Melody Generation ---
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00]; 
    const waveforms: OscillatorType[] = ['square', 'sawtooth', 'sine'];
    let melodyTime = 0.1;
    
    while (melodyTime < duration - 0.5) {
      const noteFreq = scale[Math.floor(Math.random() * scale.length)] * (Math.random() < 0.3 ? 2 : 1);
      const noteDuration = (Math.floor(Math.random() * 3) + 1) * 0.125;
      const waveType = waveforms[Math.floor(Math.random() * waveforms.length)];

      const oscillator = offlineCtx.createOscillator();
      oscillator.type = waveType;
      oscillator.frequency.setValueAtTime(noteFreq, melodyTime);

      const gain = offlineCtx.createGain();
      gain.gain.setValueAtTime(0, melodyTime);
      gain.gain.linearRampToValueAtTime(0.2, melodyTime + 0.01); 
      gain.gain.exponentialRampToValueAtTime(0.01, melodyTime + noteDuration);

      oscillator.connect(gain);
      gain.connect(offlineCtx.destination);
      
      oscillator.start(melodyTime);
      oscillator.stop(melodyTime + noteDuration);

      melodyTime += noteDuration;
    }
    
    // --- Bassline Generation ---
    const bassNotes = [scale[0]/2, scale[3]/2, scale[5]/2, scale[0]/4];
    let bassTime = 0.1;
    let beat = 0;
    while(bassTime < duration - 0.5) {
        const bassFreq = bassNotes[beat % bassNotes.length];
        const bassDuration = 0.25; // Quarter notes

        const bassOsc = offlineCtx.createOscillator();
        bassOsc.type = 'sine';
        bassOsc.frequency.setValueAtTime(bassFreq, bassTime);

        const bassGain = offlineCtx.createGain();
        bassGain.gain.setValueAtTime(0, bassTime);
        bassGain.gain.linearRampToValueAtTime(0.3, bassTime + 0.02);
        bassGain.gain.linearRampToValueAtTime(0, bassTime + bassDuration);

        bassOsc.connect(bassGain);
        bassGain.connect(offlineCtx.destination);
        
        bassOsc.start(bassTime);
        bassOsc.stop(bassTime + bassDuration);

        bassTime += 0.5; // Eighth note rests between bass notes
        beat++;
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
