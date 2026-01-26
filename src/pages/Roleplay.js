"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Roleplay.css");
var Roleplay = function () {
    var _a = (0, react_1.useState)(null), selectedScenario = _a[0], setSelectedScenario = _a[1];
    var _b = (0, react_1.useState)([]), messages = _b[0], setMessages = _b[1];
    var _c = (0, react_1.useState)(''), inputValue = _c[0], setInputValue = _c[1];
    var _d = (0, react_1.useState)(0), stars = _d[0], setStars = _d[1];
    var _e = (0, react_1.useState)('Easy'), difficulty = _e[0], setDifficulty = _e[1];
    var scenarios = [
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
    var startScenario = function (scenarioId) {
        setSelectedScenario(scenarioId);
        var scenario = scenarios.find(function (s) { return s.id === scenarioId; });
        setMessages([
            {
                id: '1',
                sender: 'ai',
                text: scenarioId === 'market'
                    ? "Bonjour! Welcome to my market stall. These beautiful fabrics are 5000 CFA each. Interested?"
                    : scenarioId === 'wholesale'
                        ? "Good morning! I see you're interested in bulk orders. For 100 units, I can offer 450,000 CFA."
                        : "Welcome! I understand you want to import goods from Côte d'Ivoire. Let's discuss the terms.",
                timestamp: new Date(),
            },
        ]);
        setStars(0);
    };
    var sendMessage = function () {
        if (!inputValue.trim())
            return;
        var userMessage = {
            id: Date.now().toString(),
            sender: 'user',
            text: inputValue,
            timestamp: new Date(),
        };
        setMessages(__spreadArray(__spreadArray([], messages, true), [userMessage], false));
        // Simulate AI response
        setTimeout(function () {
            var aiResponses = [
                "Ah, you drive a hard bargain! Let me think about that...",
                "I can see you know your business. How about we meet in the middle?",
                "That's a fair point. What if I throw in free delivery?",
                "Excellent negotiation! I accept your offer. 🤝",
            ];
            var aiMessage = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
                timestamp: new Date(),
            };
            setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [aiMessage], false); });
            // Award stars based on message count
            if (messages.length >= 6) {
                setStars(3);
            }
            else if (messages.length >= 4) {
                setStars(2);
            }
            else if (messages.length >= 2) {
                setStars(1);
            }
        }, 1000);
        setInputValue('');
    };
    var endScenario = function () {
        setSelectedScenario(null);
        setMessages([]);
        setStars(0);
    };
    if (selectedScenario) {
        var scenario = scenarios.find(function (s) { return s.id === selectedScenario; });
        return (<div className="roleplay-active">
                <div className="roleplay-header">
                    <div className="container">
                        <div className="header-top">
                            <button className="back-button" onClick={endScenario}>
                                ← End Scenario
                            </button>
                            <div className="scenario-info">
                                <span className="scenario-icon">{scenario === null || scenario === void 0 ? void 0 : scenario.icon}</span>
                                <span className="scenario-title">{scenario === null || scenario === void 0 ? void 0 : scenario.title}</span>
                            </div>
                            <div className="scenario-stars">
                                {[1, 2, 3].map(function (star) { return (<span key={star} className={"star ".concat(star <= stars ? 'star-filled' : '')}>
                                        ⭐
                                    </span>); })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-container">
                    <div className="chat-messages">
                        {messages.map(function (message) { return (<div key={message.id} className={"message message-".concat(message.sender, " animate-fade-in")}>
                                <div className="message-avatar">
                                    {message.sender === 'ai' ? '👤' : '😊'}
                                </div>
                                <div className="message-bubble">
                                    <p className="message-text">{message.text}</p>
                                </div>
                            </div>); })}
                    </div>

                    <div className="chat-input-container">
                        <div className="quick-replies">
                            <button className="quick-reply" onClick={function () {
                return setInputValue("That's too expensive. Can you lower the price?");
            }}>
                                💰 Negotiate Price
                            </button>
                            <button className="quick-reply" onClick={function () { return setInputValue('Can I see the quality first?'); }}>
                                🔍 Check Quality
                            </button>
                            <button className="quick-reply" onClick={function () {
                return setInputValue('What if I buy in bulk? Any discount?');
            }}>
                                📦 Bulk Discount
                            </button>
                        </div>

                        <div className="chat-input-box">
                            <input type="text" className="chat-input" placeholder="Type your response..." value={inputValue} onChange={function (e) { return setInputValue(e.target.value); }} onKeyPress={function (e) { return e.key === 'Enter' && sendMessage(); }}/>
                            <button className="send-button" onClick={sendMessage}>
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>);
    }
    return (<div className="roleplay-page">
            <div className="roleplay-header">
                <div className="container">
                    <react_router_dom_1.Link to="/" className="back-link">
                        ← Home
                    </react_router_dom_1.Link>
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
                        {['Easy', 'Medium', 'Hard'].map(function (level) { return (<button key={level} className={"difficulty-btn ".concat(difficulty === level ? 'difficulty-active' : '')} onClick={function () { return setDifficulty(level); }}>
                                {level}
                            </button>); })}
                    </div>
                </div>

                <div className="scenarios-grid">
                    {scenarios.map(function (scenario, index) { return (<div key={scenario.id} className="scenario-card animate-fade-in" style={{ animationDelay: "".concat(index * 0.1, "s") }} onClick={function () { return startScenario(scenario.id); }}>
                            <div className="scenario-icon-large">{scenario.icon}</div>
                            <h3 className="scenario-card-title">{scenario.title}</h3>
                            <p className="scenario-description">{scenario.description}</p>
                            <div className="scenario-meta">
                                <span className="scenario-difficulty">{scenario.difficulty}</span>
                                <span className="scenario-xp">+{scenario.xp} XP</span>
                            </div>
                            <button className="btn btn-primary">Start Scenario</button>
                        </div>); })}
                </div>
            </div>
        </div>);
};
exports.default = Roleplay;
