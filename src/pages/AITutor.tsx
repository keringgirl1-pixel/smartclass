import { useState } from 'react';
import { Link } from 'react-router-dom';
import { aiTutors, scenarios } from '../data/ai-tutors';
import aiService from '../services/aiService';
import './AITutor.css';

const AITutor = () => {
    const [selectedTutor, setSelectedTutor] = useState(aiTutors[0]);
    const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
    const [selectedLanguage, setSelectedLanguage] = useState('french');
    const [isConversationStarted, setIsConversationStarted] = useState(false);
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
            const greeting = await aiService.sendMessage('Hello');
            setMessages([{ role: 'assistant', content: greeting }]);
        } catch (error) {
            console.error('Error getting greeting:', error);
        } finally {
            setIsLoading(false);
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
            setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
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
                        <p className="page-subtitle">Practice conversations with AI tutors</p>
                    </div>
                </div>

                <div className="container">
                    <div className="ai-tutor-setup">
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

                        {/* Start Button */}
                        <div className="start-conversation">
                            <button className="btn btn-primary btn-lg" onClick={startConversation}>
                                Start Conversation with {selectedTutor.name}
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
                <button className="btn btn-secondary" onClick={() => setIsConversationStarted(false)}>
                    New Conversation
                </button>
            </div>

            <div className="conversation-container">
                <div className="messages-area">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.role}`}>
                            {msg.role === 'assistant' && (
                                <div className="message-avatar">{selectedTutor.avatar}</div>
                            )}
                            <div className="message-content">{msg.content}</div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message assistant">
                            <div className="message-avatar">{selectedTutor.avatar}</div>
                            <div className="message-content typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="input-area">
                    <input
                        type="text"
                        className="message-input"
                        placeholder={`Type your message in ${selectedLanguage}...`}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isLoading}
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
