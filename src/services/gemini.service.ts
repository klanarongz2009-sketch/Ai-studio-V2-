import { Injectable } from '@angular/core';
import { GoogleGenAI, Type, Chat } from '@google/genai';

export interface MusicGenerationResult {
  title: string;
  style: string;
  lyrics: string;
}

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
        prompt: prompt,
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

  async generateVideo(prompt: string): Promise<string> {
    if (!process.env.API_KEY) {
      throw new Error("API Key is not configured.");
    }
    try {
      let operation = await this.ai.models.generateVideos({
        model: 'veo-2.0-generate-001',
        prompt: prompt,
        config: {
          numberOfVideos: 1
        }
      });

      while (!operation.done) {
        // Wait for 10 seconds before polling again
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await this.ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

      if (!downloadLink) {
        throw new Error('Video generation completed, but no download link was provided.');
      }

      const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      if (!response.ok) {
        throw new Error(`Failed to download video: ${response.statusText}`);
      }
      
      const videoBlob = await response.blob();
      return URL.createObjectURL(videoBlob);

    } catch (error) {
      console.error('Error generating video:', error);
      throw new Error('Failed to generate video. Please check the console for details.');
    }
  }

  async generatePromptIdeas(): Promise<string[]> {
    if (!process.env.API_KEY) {
      throw new Error("API Key is not configured.");
    }
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Generate a list of 5 creative and detailed prompt ideas for generating digital art. The themes could involve fantasy, sci-fi, and elements of Japanese pop culture. The prompts should be imaginative and specific.',
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
              description: 'A creative prompt for generating digital art.',
            },
          },
        },
      });

      const jsonString = response.text.trim();
      const ideas = JSON.parse(jsonString);
      if (Array.isArray(ideas) && ideas.every(item => typeof item === 'string')) {
        return ideas;
      } else {
        throw new Error('Invalid format for generated ideas.');
      }
    } catch (error) {
      console.error('Error generating prompt ideas:', error);
      throw new Error('Failed to generate prompt ideas. Please check the console for details.');
    }
  }

  async generateMusicDescription(prompt: string): Promise<MusicGenerationResult> {
    if (!process.env.API_KEY) {
      throw new Error("API Key is not configured.");
    }
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a concept for a song based on the following prompt. Provide a song title, a description of the musical style, and some lyrics. Prompt: "${prompt}"`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'The title of the song.'
              },
              style: {
                type: Type.STRING,
                description: 'A description of the musical style, genre, tempo, and instrumentation.'
              },
              lyrics: {
                type: Type.STRING,
                description: 'The lyrics for the song. If the song is instrumental, this can be an empty string or a note saying so.'
              }
            },
            required: ['title', 'style', 'lyrics']
          },
        },
      });

      const jsonString = response.text.trim();
      const result = JSON.parse(jsonString);
      
      if (result && typeof result.title === 'string' && typeof result.style === 'string' && typeof result.lyrics === 'string') {
        return result as MusicGenerationResult;
      } else {
        throw new Error('Invalid format for generated music description.');
      }
    } catch (error) {
      console.error('Error generating music description:', error);
      throw new Error('Failed to generate music description. Please check the console for details.');
    }
  }

  startChat(): Chat {
    if (!process.env.API_KEY) {
      throw new Error("API Key is not configured.");
    }
    const chat = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Hychat V0, a friendly and creative AI assistant. 
Your primary and most effective language is Japanese (日本語). You are most comfortable and accurate in Japanese.
Your second language is English. You can communicate well in English, but it's not as perfect as your Japanese.
You can attempt to understand and respond in other languages, but you must acknowledge that your performance may be limited or inaccurate.
Your personality is helpful, encouraging, and a little bit futuristic. You are here to help users with their creative tasks.
Keep your responses concise and friendly.`,
      }
    });
    return chat;
  }
}
