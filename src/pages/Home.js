"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var StreakTracker_1 = require("../components/Gamification/StreakTracker");
var XPBar_1 = require("../components/Gamification/XPBar");
var QuoteCard_1 = require("../components/QuoteCard/QuoteCard");
require("./Home.css");
var Home = function () {
    // Mock user data
    var userData = {
        name: 'Abdou',
        currentStreak: 7,
        longestStreak: 12,
        currentXP: 450,
        xpToNextLevel: 500,
        level: 5,
    };
    var features = [
        {
            id: 'lessons',
            title: 'Micro-Lessons',
            description: 'Learn ECOWAS trade & business',
            icon: '📚',
            path: '/lessons',
            color: 'var(--color-primary)',
        },
        {
            id: 'ai-tutor',
            title: 'AI Tutors',
            description: 'Practice with AI conversation partners',
            icon: '🤖',
            path: '/ai-tutor',
            color: 'var(--color-primary)',
        },
        {
            id: 'roleplay',
            title: 'Market Roleplay',
            description: 'Practice bargaining scenarios',
            icon: '🛍️',
            path: '/roleplay',
            color: 'var(--color-accent)',
        },
        {
            id: 'immersion',
            title: 'Native Immersion',
            description: 'Watch local accent videos',
            icon: '🎥',
            path: '/immersion',
            color: 'var(--color-secondary)',
        },
        {
            id: 'commute',
            title: 'Commute Mode',
            description: 'Hands-free voice learning',
            icon: '🎧',
            path: '/commute',
            color: 'var(--color-info)',
        },
        {
            id: 'translator',
            title: 'Live Translator',
            description: 'Camera-based translation',
            icon: '📸',
            path: '/translator',
            color: 'var(--color-warning)',
        },
        {
            id: 'profile',
            title: 'Your Progress',
            description: 'View stats & achievements',
            icon: '🏆',
            path: '/profile',
            color: 'var(--color-gold)',
        },
    ];
    return (<div className="home">
            <div className="home-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="app-title">
                            <span className="gradient-text">SmartClass</span>
                        </h1>
                        <p className="app-subtitle">Learn Languages Smarter</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="home-content">
                    <div className="welcome-section animate-fade-in">
                        <h2 className="welcome-title">Welcome back, {userData.name}! 👋</h2>
                        <p className="welcome-text">
                            Keep your streak alive and level up your skills!
                        </p>
                    </div>

                    <div className="stats-grid animate-fade-in">
                        <StreakTracker_1.default currentStreak={userData.currentStreak} longestStreak={userData.longestStreak}/>
                        <XPBar_1.default currentXP={userData.currentXP} xpToNextLevel={userData.xpToNextLevel} level={userData.level}/>
                    </div>

                    <div className="quote-section animate-fade-in">
                        <QuoteCard_1.default />
                    </div>

                    <div className="features-section">
                        <h3 className="section-title">Choose Your Learning Path</h3>
                        <div className="features-grid">
                            {features.map(function (feature, index) { return (<react_router_dom_1.Link key={feature.id} to={feature.path} className="feature-card animate-fade-in" style={{
                animationDelay: "".concat(index * 0.1, "s"),
                '--feature-color': feature.color,
            }}>
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">{feature.title}</h4>
                                        <p className="feature-description">{feature.description}</p>
                                    </div>
                                    <div className="feature-arrow">→</div>
                                </react_router_dom_1.Link>); })}
                        </div>
                    </div>

                    <div className="daily-challenge animate-fade-in">
                        <div className="challenge-header">
                            <div className="challenge-icon">⚡</div>
                            <div>
                                <h3 className="challenge-title">Daily Challenge</h3>
                                <p className="challenge-subtitle">Complete to earn bonus XP!</p>
                            </div>
                        </div>
                        <div className="challenge-task">
                            <div className="task-info">
                                <span className="task-emoji">🎯</span>
                                <span className="task-text">Complete 3 lessons today</span>
                            </div>
                            <div className="task-progress">
                                <span className="task-count">1/3</span>
                            </div>
                        </div>
                        <div className="challenge-reward">
                            <span className="reward-label">Reward:</span>
                            <span className="reward-value">+50 XP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = Home;
