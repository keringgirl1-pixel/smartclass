"use strict";
// Audio service for text-to-speech using ElevenLabs API
// With fallback to browser speech synthesis
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioService = void 0;
var AudioService = /** @class */ (function () {
    function AudioService(config) {
        this.apiKey = null;
        this.audioCache = new Map();
        this.useElevenLabs = false;
        // ElevenLabs voice IDs for different languages
        this.voiceMap = {
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
        // Check for API key in environment or config
        this.apiKey = (config === null || config === void 0 ? void 0 : config.apiKey) || import.meta.env.VITE_ELEVENLABS_API_KEY || null;
        this.useElevenLabs = !!this.apiKey;
        // Load cached audio from localStorage
        this.loadCache();
    }
    /**
     * Generate audio for text using ElevenLabs or browser speech
     */
    AudioService.prototype.generateAudio = function (text_1) {
        return __awaiter(this, arguments, void 0, function (text, language) {
            var cacheKey, audioUrl, error_1;
            if (language === void 0) { language = 'english'; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = "".concat(language, "_").concat(text);
                        // Check cache first
                        if (this.audioCache.has(cacheKey)) {
                            return [2 /*return*/, this.audioCache.get(cacheKey)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        audioUrl = null;
                        if (!this.useElevenLabs) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.generateWithElevenLabs(text, language)];
                    case 2:
                        audioUrl = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.generateWithBrowserSpeech(text, language)];
                    case 4:
                        audioUrl = _a.sent();
                        _a.label = 5;
                    case 5:
                        // Cache the result
                        if (audioUrl) {
                            this.audioCache.set(cacheKey, audioUrl);
                            this.saveCache();
                        }
                        return [2 /*return*/, audioUrl];
                    case 6:
                        error_1 = _a.sent();
                        console.error('Audio generation failed:', error_1);
                        // Fallback to browser speech if ElevenLabs fails
                        if (this.useElevenLabs) {
                            return [2 /*return*/, this.generateWithBrowserSpeech(text, language)];
                        }
                        return [2 /*return*/, null];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Generate audio using ElevenLabs API
     */
    AudioService.prototype.generateWithElevenLabs = function (text, language) {
        return __awaiter(this, void 0, void 0, function () {
            var voiceInfo, url, response, audioBlob, audioUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.apiKey) {
                            throw new Error('ElevenLabs API key not configured');
                        }
                        voiceInfo = this.voiceMap[language] || this.voiceMap.english;
                        url = "https://api.elevenlabs.io/v1/text-to-speech/".concat(voiceInfo.voiceId);
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'audio/mpeg',
                                    'Content-Type': 'application/json',
                                    'xi-api-key': this.apiKey,
                                },
                                body: JSON.stringify({
                                    text: text,
                                    model_id: 'eleven_multilingual_v2',
                                    voice_settings: {
                                        stability: 0.5,
                                        similarity_boost: 0.75,
                                    },
                                }),
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("ElevenLabs API error: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        audioBlob = _a.sent();
                        audioUrl = URL.createObjectURL(audioBlob);
                        return [2 /*return*/, audioUrl];
                }
            });
        });
    };
    /**
     * Generate audio using browser's Speech Synthesis API (free fallback)
     */
    AudioService.prototype.generateWithBrowserSpeech = function (text, language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (!('speechSynthesis' in window)) {
                            console.warn('Speech synthesis not supported');
                            resolve(null);
                            return;
                        }
                        var utterance = new SpeechSynthesisUtterance(text);
                        // Map language to browser speech codes
                        var langCodeMap = {
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
                    })];
            });
        });
    };
    /**
     * Play audio from URL or use browser speech
     */
    AudioService.prototype.play = function (audioUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (audioUrl === 'browser_speech') {
                    // Audio already played via browser speech
                    return [2 /*return*/];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var audio = new Audio(audioUrl);
                        audio.onended = function () { return resolve(); };
                        audio.onerror = function () { return reject(new Error('Audio playback failed')); };
                        audio.play().catch(reject);
                    })];
            });
        });
    };
    /**
     * Save cache to localStorage
     */
    AudioService.prototype.saveCache = function () {
        try {
            var cacheData = JSON.stringify(Array.from(this.audioCache.entries()));
            localStorage.setItem('audioCache', cacheData);
        }
        catch (error) {
            console.warn('Failed to save audio cache:', error);
        }
    };
    /**
     * Load cache from localStorage
     */
    AudioService.prototype.loadCache = function () {
        try {
            var cacheData = localStorage.getItem('audioCache');
            if (cacheData) {
                var entries = JSON.parse(cacheData);
                this.audioCache = new Map(entries);
            }
        }
        catch (error) {
            console.warn('Failed to load audio cache:', error);
        }
    };
    /**
     * Clear audio cache
     */
    AudioService.prototype.clearCache = function () {
        this.audioCache.clear();
        localStorage.removeItem('audioCache');
    };
    /**
     * Check if ElevenLabs is available
     */
    AudioService.prototype.isElevenLabsEnabled = function () {
        return this.useElevenLabs;
    };
    /**
     * Get supported voices for a language
     */
    AudioService.prototype.getVoiceInfo = function (language) {
        return this.voiceMap[language] || this.voiceMap.english;
    };
    return AudioService;
}());
// Export singleton instance
exports.audioService = new AudioService();
exports.default = exports.audioService;
