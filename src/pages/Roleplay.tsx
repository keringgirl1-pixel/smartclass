import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Roleplay.css';

interface Message {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    timestamp: Date;
}

const Roleplay = () => {
    const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [stars, setStars] = useState(0);
    const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');

    const scenarios = [
        {
            id: 'market',
            title: 'Market Bargaining',
            description: 'Negotiate prices at a local market',
            icon: '🛍️',
            difficulty: 'Easy',
            xp: 75,
        },
        {
            id: 'wholesale',
            title: 'Wholesale Deal',
            description: 'Negotiate bulk purchase terms',
            icon: '📦',
            difficulty: 'Medium',
            xp: 125,
        },
        {
            id: 'import',
            title: 'Import Negotiation',
            description: 'Discuss cross-border trade terms',
            icon: '🚢',
            difficulty: 'Hard',
            xp: 200,
        },
    ];

    const startScenario = (scenarioId: string) => {
        setSelectedScenario(scenarioId);
        const scenario = scenarios.find((s) => s.id === scenarioId);
        setMessages([
            {
                id: '1',
                sender: 'ai',
                text:
                    scenarioId === 'market'
                        ? "Bonjour! Welcome to my market stall. These beautiful fabrics are 5000 CFA each. Interested?"
                        : scenarioId === 'wholesale'
                            ? "Good morning! I see you're interested in bulk orders. For 100 units, I can offer 450,000 CFA."
                            : "Welcome! I understand you want to import goods from Côte d'Ivoire. Let's discuss the terms.",
                timestamp: new Date(),
            },
        ]);
        setStars(0);
    };

    const sendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: inputValue,
            timestamp: new Date(),
        };

        setMessages([...messages, userMessage]);

        // Simulate AI response
        setTimeout(() => {
            const aiResponses = [
                "Ah, you drive a hard bargain! Let me think about that...",
                "I can see you know your business. How about we meet in the middle?",
                "That's a fair point. What if I throw in free delivery?",
                "Excellent negotiation! I accept your offer. 🤝",
            ];

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);

            // Award stars based on message count
            if (messages.length >= 6) {
                setStars(3);
            } else if (messages.length >= 4) {
                setStars(2);
            } else if (messages.length >= 2) {
                setStars(1);
            }
        }, 1000);

        setInputValue('');
    };

    const endScenario = () => {
        setSelectedScenario(null);
        setMessages([]);
        setStars(0);
    };

    if (selectedScenario) {
        const scenario = scenarios.find((s) => s.id === selectedScenario);

        return (
            <div className="roleplay-active">
                <div className="roleplay-header">
                    <div className="container">
                        <div className="header-top">
                            <button className="back-button" onClick={endScenario}>
                                ← End Scenario
                            </button>
                            <div className="scenario-info">
                                <span className="scenario-icon">{scenario?.icon}</span>
                                <span className="scenario-title">{scenario?.title}</span>
                            </div>
                            <div className="scenario-stars">
                                {[1, 2, 3].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${star <= stars ? 'star-filled' : ''}`}
                                    >
                                        ⭐
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-container">
                    <div className="chat-messages">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`message message-${message.sender} animate-fade-in`}
                            >
                                <div className="message-avatar">
                                    {message.sender === 'ai' ? '👤' : '😊'}
                                </div>
                                <div className="message-bubble">
                                    <p className="message-text">{message.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chat-input-container">
                        <div className="quick-replies">
                            <button
                                className="quick-reply"
                                onClick={() =>
                                    setInputValue("That's too expensive. Can you lower the price?")
                                }
                            >
                                💰 Negotiate Price
                            </button>
                            <button
                                className="quick-reply"
                                onClick={() => setInputValue('Can I see the quality first?')}
                            >
                                🔍 Check Quality
                            </button>
                            <button
                                className="quick-reply"
                                onClick={() =>
                                    setInputValue('What if I buy in bulk? Any discount?')
                                }
                            >
                                📦 Bulk Discount
                            </button>
                        </div>

                        <div className="chat-input-box">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Type your response..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            />
                            <button className="send-button" onClick={sendMessage}>
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="roleplay-page">
            <div className="roleplay-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        ← Home
                    </Link>
                    <h1 className="page-title">
                        <span className="gradient-text">Market Roleplay</span>
                    </h1>
                    <p className="page-subtitle">Practice your bargaining skills</p>
                </div>
            </div>

            <div className="container">
                <div className="difficulty-selector">
                    <h3 className="selector-title">Select Difficulty</h3>
                    <div className="difficulty-buttons">
                        {['Easy', 'Medium', 'Hard'].map((level) => (
                            <button
                                key={level}
                                className={`difficulty-btn ${difficulty === level ? 'difficulty-active' : ''
                                    }`}
                                onClick={() => setDifficulty(level as typeof difficulty)}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="scenarios-grid">
                    {scenarios.map((scenario, index) => (
                        <div
                            key={scenario.id}
                            className="scenario-card animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => startScenario(scenario.id)}
                        >
                            <div className="scenario-icon-large">{scenario.icon}</div>
                            <h3 className="scenario-card-title">{scenario.title}</h3>
                            <p className="scenario-description">{scenario.description}</p>
                            <div className="scenario-meta">
                                <span className="scenario-difficulty">{scenario.difficulty}</span>
                                <span className="scenario-xp">+{scenario.xp} XP</span>
                            </div>
                            <button className="btn btn-primary">Start Scenario</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roleplay;
