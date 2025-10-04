
import { Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    if (!process.env.API_KEY) {
      console.error("API_KEY environment variable not set.");
      // In a real app, you might want to handle this more gracefully.
    }
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  }

  async generateImage(prompt: string): Promise<string> {
    if (!process.env.API_KEY) {
      throw new Error("API Key is not configured.");
    }
    try {
      const response = await this.ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: `Pixel art, 8-bit, retro video game style. ${prompt}`,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: '1:1',
        },
      });

      if (response.generatedImages && response.generatedImages.length > 0) {
        const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
        return `data:image/png;base64,${base64ImageBytes}`;
      } else {
        throw new Error('No images were generated.');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      throw new Error('Failed to generate image. Please check the console for details.');
    }
  }
}
