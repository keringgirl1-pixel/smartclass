// Audio service for text-to-speech using ElevenLabs API
// With fallback to browser speech synthesis

interface AudioConfig {
    apiKey?: string;
    voiceId?: string;
    useCache?: boolean;
}

interface VoiceMap {
    [language: string]: {
        voiceId: string;
        name: string;
    };
}

class AudioService {
    private apiKey: string | null = null;
    private audioCache: Map<string, string> = new Map();
    private useElevenLabs: boolean = false;

    // ElevenLabs voice IDs for different languages
    private voiceMap: VoiceMap = {
        english: { voiceId: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah' }, // Female English
        french: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' }, // Male multilingual
        spanish: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
        portuguese: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
        german: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
        italian: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
        chinese: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
        japanese: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
        russian: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
        arabic: { voiceId: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
    };

    constructor(config?: AudioConfig) {
        // Check for API key in environment or config
        this.apiKey = config?.apiKey || import.meta.env.VITE_ELEVENLABS_API_KEY || null;
        this.useElevenLabs = !!this.apiKey;

        // Load cached audio from localStorage
        this.loadCache();
    }

    /**
     * Generate audio for text using ElevenLabs or browser speech
     */
    async generateAudio(
        text: string,
        language: string = 'english'
    ): Promise<string | null> {
        const cacheKey = `${language}_${text}`;

        // Check cache first
        if (this.audioCache.has(cacheKey)) {
            return this.audioCache.get(cacheKey)!;
        }

        try {
            let audioUrl: string | null = null;

            if (this.useElevenLabs) {
                audioUrl = await this.generateWithElevenLabs(text, language);
            } else {
                audioUrl = await this.generateWithBrowserSpeech(text, language);
            }

            // Cache the result
            if (audioUrl) {
                this.audioCache.set(cacheKey, audioUrl);
                this.saveCache();
            }

            return audioUrl;
        } catch (error) {
            console.error('Audio generation failed:', error);

            // Fallback to browser speech if ElevenLabs fails
            if (this.useElevenLabs) {
                return this.generateWithBrowserSpeech(text, language);
            }

            return null;
        }
    }

    /**
     * Generate audio using ElevenLabs API
     */
    private async generateWithElevenLabs(
        text: string,
        language: string
    ): Promise<string | null> {
        if (!this.apiKey) {
            throw new Error('ElevenLabs API key not configured');
        }

        const voiceInfo = this.voiceMap[language] || this.voiceMap.english;
        const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceInfo.voiceId}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': this.apiKey,
            },
            body: JSON.stringify({
                text,
                model_id: 'eleven_multilingual_v2',
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`ElevenLabs API error: ${response.status}`);
        }

        // Convert response to blob and create object URL
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);

        return audioUrl;
    }

    /**
     * Generate audio using browser's Speech Synthesis API (free fallback)
     */
    private async generateWithBrowserSpeech(
        text: string,
        language: string
    ): Promise<string | null> {
        return new Promise((resolve) => {
            if (!('speechSynthesis' in window)) {
                console.warn('Speech synthesis not supported');
                resolve(null);
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);

            // Map language to browser speech codes
            const langCodeMap: { [key: string]: string } = {
                english: 'en-US',
                french: 'fr-FR',
                spanish: 'es-ES',
                portuguese: 'pt-PT',
                german: 'de-DE',
                italian: 'it-IT',
                chinese: 'zh-CN',
                japanese: 'ja-JP',
                russian: 'ru-RU',
                arabic: 'ar-SA',
            };

            utterance.lang = langCodeMap[language] || 'en-US';
            utterance.rate = 0.9; // Slightly slower for learning
            utterance.pitch = 1.0;

            // Browser speech synthesis doesn't return audio URL
            // We'll play it directly and return a marker
            window.speechSynthesis.speak(utterance);

            // Return a special marker to indicate browser speech was used
            resolve('browser_speech');
        });
    }

    /**
     * Play audio from URL or use browser speech
     */
    async play(audioUrl: string): Promise<void> {
        if (audioUrl === 'browser_speech') {
            // Audio already played via browser speech
            return;
        }

        return new Promise((resolve, reject) => {
            const audio = new Audio(audioUrl);

            audio.onended = () => resolve();
            audio.onerror = () => reject(new Error('Audio playback failed'));

            audio.play().catch(reject);
        });
    }

    /**
     * Save cache to localStorage
     */
    private saveCache(): void {
        try {
            const cacheData = JSON.stringify(Array.from(this.audioCache.entries()));
            localStorage.setItem('audioCache', cacheData);
        } catch (error) {
            console.warn('Failed to save audio cache:', error);
        }
    }

    /**
     * Load cache from localStorage
     */
    private loadCache(): void {
        try {
            const cacheData = localStorage.getItem('audioCache');
            if (cacheData) {
                const entries = JSON.parse(cacheData);
                this.audioCache = new Map(entries);
            }
        } catch (error) {
            console.warn('Failed to load audio cache:', error);
        }
    }

    /**
     * Clear audio cache
     */
    clearCache(): void {
        this.audioCache.clear();
        localStorage.removeItem('audioCache');
    }

    /**
     * Check if ElevenLabs is available
     */
    isElevenLabsEnabled(): boolean {
        return this.useElevenLabs;
    }

    /**
     * Get supported voices for a language
     */
    getVoiceInfo(language: string) {
        return this.voiceMap[language] || this.voiceMap.english;
    }
}

// Export singleton instance
export const audioService = new AudioService();
export default audioService;
