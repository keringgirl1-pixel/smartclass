import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { aiTutors, scenarios } from '../data/ai-tutors';
import aiService from '../services/aiService';
import audioService from '../services/audioService';
import './AITutor.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    audioUrl?: string;
}

// Add strict types for Speech Recognition
interface SpeechRecognitionEvent {
    results: {
        [key: number]: {
            [key: number]: {
                transcript: string;
            };
        };
        length: number;
    };
}

interface SpeechRecognitionErrorEvent {
    error: string;
    message: string;
}

interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start(): void;
    stop(): void;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: SpeechRecognitionErrorEvent) => void;
    onend: () => void;
}

interface SpeechRecognitionConstructor {
    new(): SpeechRecognition;
}

declare global {
    interface Window {
        SpeechRecognition: SpeechRecognitionConstructor;
        webkitSpeechRecognition: SpeechRecognitionConstructor;
    }
}

const AITutor = () => {
    const [selectedTutor, setSelectedTutor] = useState(aiTutors[0]);
    const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
    const [selectedLanguage, setSelectedLanguage] = useState('french');
    const [isConversationStarted, setIsConversationStarted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initialize speech recognition
    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;

            // Set language based on selection
            const langMap: Record<string, string> = {
                french: 'fr-FR',
                english: 'en-US',
                spanish: 'es-ES',
                portuguese: 'pt-PT',
                german: 'de-DE',
                italian: 'it-IT',
                chinese: 'zh-CN',
                japanese: 'ja-JP',
                russian: 'ru-RU',
                arabic: 'ar-SA',
            };
            recognitionRef.current.lang = langMap[selectedLanguage] || 'en-US';

            recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
                const transcript = event.results[0][0].transcript;
                setInputMessage(transcript);
                setIsRecording(false);
            };

            recognitionRef.current.onerror = () => {
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                setIsRecording(false);
            };
        }
    }, [selectedLanguage]);

    const startConversation = () => {
        aiService.startConversation({
            language: selectedLanguage,
            scenario: selectedScenario.situation,
            userLevel: 'beginner',
            tutorPersonality: selectedTutor.personality,
        });

        setIsConversationStarted(true);
        setMessages([]);

        // Get initial greeting from AI
        handleAIGreeting();
    };

    const handleAIGreeting = async () => {
        setIsLoading(true);
        try {
            const greeting = await aiService.sendMessage('Hello, please introduce yourself and start our practice session.');
            const newMessage: Message = { role: 'assistant', content: greeting };

            // Generate voice for greeting
            if (voiceEnabled) {
                try {
                    const audioUrl = await audioService.generateAudio(greeting, selectedLanguage);
                    if (audioUrl) {
                        newMessage.audioUrl = audioUrl;
                        // Auto-play greeting
                        playAudio(audioUrl);
                    }
                } catch (e) {
                    console.log('Voice generation skipped:', e);
                }
            }

            setMessages([newMessage]);
        } catch (error) {
            console.error('Error getting greeting:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const playAudio = async (audioUrl: string) => {
        if (audioUrl === 'browser_speech') return;

        setIsPlayingAudio(true);
        try {
            await audioService.play(audioUrl);
        } catch (e) {
            console.error('Audio playback error:', e);
        } finally {
            setIsPlayingAudio(false);
        }
    };

    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMsg = inputMessage.trim();
        setInputMessage('');

        // Add user message to chat
        setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);

        // Get AI response
        setIsLoading(true);
        try {
            const response = await aiService.sendMessage(userMsg);
            const newMessage: Message = { role: 'assistant', content: response };

            // Generate voice for response
            if (voiceEnabled) {
                try {
                    const audioUrl = await audioService.generateAudio(response, selectedLanguage);
                    if (audioUrl) {
                        newMessage.audioUrl = audioUrl;
                        // Auto-play response
                        playAudio(audioUrl);
                    }
                } catch (e) {
                    console.log('Voice generation skipped:', e);
                }
            }

            setMessages((prev) => [...prev, newMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, I had trouble understanding. Can you try again?' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const startVoiceInput = () => {
        if (!recognitionRef.current) {
            alert('Voice input is not supported in this browser. Please use Chrome or Edge.');
            return;
        }

        setIsRecording(true);
        recognitionRef.current.start();
    };

    const stopVoiceInput = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        setIsRecording(false);
    };

    const languages = [
        { code: 'french', name: 'French', flag: '🇫🇷' },
        { code: 'english', name: 'English', flag: '🇬🇧' },
        { code: 'spanish', name: 'Spanish', flag: '🇪🇸' },
        { code: 'portuguese', name: 'Portuguese', flag: '🇵🇹' },
        { code: 'german', name: 'German', flag: '🇩🇪' },
        { code: 'italian', name: 'Italian', flag: '🇮🇹' },
        { code: 'chinese', name: 'Chinese', flag: '🇨🇳' },
        { code: 'japanese', name: 'Japanese', flag: '🇯🇵' },
        { code: 'russian', name: 'Russian', flag: '🇷🇺' },
        { code: 'arabic', name: 'Arabic', flag: '🇸🇦' },
    ];

    if (!isConversationStarted) {
        return (
            <div className="ai-tutor-page">
                <div className="ai-tutor-header">
                    <div className="container">
                        <Link to="/home" className="back-link">
                            ← Home
                        </Link>
                        <h1 className="page-title">
                            <span className="gradient-text">AI Language Tutors</span>
                        </h1>
                        <p className="page-subtitle">Practice conversations with AI tutors using voice chat</p>
                    </div>
                </div>

                <div className="container">
                    <div className="ai-tutor-setup">
                        {/* Language Selection */}
                        <section className="setup-section">
                            <h2 className="setup-heading">🌍 Choose Language to Practice</h2>
                            <div className="language-chips">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`language-chip ${selectedLanguage === lang.code ? 'selected' : ''}`}
                                        onClick={() => setSelectedLanguage(lang.code)}
                                    >
                                        <span className="chip-flag">{lang.flag}</span>
                                        <span className="chip-name">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Tutor Selection */}
                        <section className="setup-section">
                            <h2 className="setup-heading">👤 Choose Your Tutor</h2>
                            <div className="tutors-grid">
                                {aiTutors.map((tutor) => (
                                    <div
                                        key={tutor.id}
                                        className={`tutor-card ${selectedTutor.id === tutor.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedTutor(tutor)}
                                    >
                                        <div className="tutor-avatar">{tutor.avatar}</div>
                                        <h3 className="tutor-name">{tutor.name}</h3>
                                        <p className="tutor-personality">{tutor.personality}</p>
                                        <p className="tutor-description">{tutor.description}</p>
                                        <div className="tutor-languages">
                                            {tutor.languages.map((lang) => (
                                                <span key={lang} className="language-badge">
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                        {tutor.accent && <p className="tutor-accent">✨ {tutor.accent}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Scenario Selection */}
                        <section className="setup-section">
                            <h2 className="setup-heading">🎭 Choose a Scenario</h2>
                            <div className="scenarios-grid">
                                {scenarios.map((scenario) => (
                                    <div
                                        key={scenario.id}
                                        className={`scenario-card ${selectedScenario.id === scenario.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedScenario(scenario)}
                                    >
                                        <div className="scenario-icon">{scenario.icon}</div>
                                        <h3 className="scenario-title">{scenario.title}</h3>
                                        <p className="scenario-description">{scenario.description}</p>
                                        {scenario.persona && (
                                            <div className="scenario-persona">👤 {scenario.persona}</div>
                                        )}
                                        {scenario.mission && (
                                            <div className="scenario-mission">🎯 {scenario.mission}</div>
                                        )}
                                        <div className="scenario-difficulty">{scenario.difficulty}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Voice Settings */}
                        <section className="setup-section voice-settings">
                            <h2 className="setup-heading">🔊 Voice Settings</h2>
                            <label className="voice-toggle">
                                <input
                                    type="checkbox"
                                    checked={voiceEnabled}
                                    onChange={(e) => setVoiceEnabled(e.target.checked)}
                                />
                                <span className="toggle-label">
                                    {voiceEnabled ? '🔊 Voice Responses ON' : '🔇 Voice Responses OFF'}
                                </span>
                            </label>
                            <p className="voice-info">
                                {audioService.isElevenLabsEnabled()
                                    ? '✨ ElevenLabs HD voices enabled'
                                    : '💡 Using browser voices (add ElevenLabs API key for HD voices)'}
                            </p>
                        </section>

                        {/* Start Button */}
                        <div className="start-conversation">
                            <button className="btn btn-primary btn-lg" onClick={startConversation}>
                                🎙️ Start Voice Conversation with {selectedTutor.name}
                            </button>
                            {!aiService.isAvailable() && (
                                <p className="api-warning">
                                    💡 AI API not configured - using practice mode with sample responses
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Conversation View
    return (
        <div className="ai-tutor-page conversation-mode">
            <div className="conversation-header">
                <Link to="/home" className="back-link">
                    ← Home
                </Link>
                <div className="active-tutor">
                    <div className="tutor-avatar-small">{selectedTutor.avatar}</div>
                    <div>
                        <div className="tutor-name-small">{selectedTutor.name}</div>
                        <div className="scenario-name-small">{selectedScenario.title}</div>
                    </div>
                </div>
                <div className="header-controls">
                    <button
                        className={`voice-toggle-btn ${voiceEnabled ? 'active' : ''}`}
                        onClick={() => setVoiceEnabled(!voiceEnabled)}
                        title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
                    >
                        {voiceEnabled ? '🔊' : '🔇'}
                    </button>
                    <button className="btn btn-secondary" onClick={() => setIsConversationStarted(false)}>
                        New Conversation
                    </button>
                </div>
            </div>

            <div className="conversation-container">
                <div className="messages-area">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.role}`}>
                            {msg.role === 'assistant' && (
                                <div className="message-avatar">{selectedTutor.avatar}</div>
                            )}
                            <div className="message-bubble">
                                <div className="message-content">{msg.content}</div>
                                {msg.role === 'assistant' && msg.audioUrl && (
                                    <button
                                        className="replay-audio-btn"
                                        onClick={() => playAudio(msg.audioUrl!)}
                                        disabled={isPlayingAudio}
                                    >
                                        {isPlayingAudio ? '⏳' : '🔊'} Replay
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message assistant">
                            <div className="message-avatar">{selectedTutor.avatar}</div>
                            <div className="message-bubble">
                                <div className="message-content typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="input-area">
                    <button
                        className={`voice-input-btn ${isRecording ? 'recording' : ''}`}
                        onClick={isRecording ? stopVoiceInput : startVoiceInput}
                        disabled={isLoading}
                    >
                        {isRecording ? '🔴 Stop' : '🎙️'}
                    </button>
                    <input
                        type="text"
                        className="message-input"
                        placeholder={isRecording ? 'Listening...' : `Type or speak your message in ${selectedLanguage}...`}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isLoading || isRecording}
                    />
                    <button
                        className="btn btn-primary send-button"
                        onClick={sendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};


export default AITutor;
