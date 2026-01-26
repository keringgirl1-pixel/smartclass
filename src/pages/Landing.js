"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
require("./Landing.css");
var Landing = function () {
    var features = [
        {
            icon: '🌍',
            title: '10 Languages',
            description: 'Learn French, English, Spanish, Chinese, and more with West African context',
        },
        {
            icon: '🎯',
            title: 'Gamified Learning',
            description: 'Streaks, XP, levels, and achievements keep you motivated every day',
        },
        {
            icon: '🛍️',
            title: 'Real-World Practice',
            description: 'Market roleplay and business scenarios prepare you for actual conversations',
        },
        {
            icon: '🎧',
            title: 'Commute Mode',
            description: 'Learn hands-free while traveling with voice-based lessons',
        },
        {
            icon: '📸',
            title: 'Live Translator',
            description: 'Point your camera at signs and get instant translations',
        },
        {
            icon: '🏆',
            title: 'Track Progress',
            description: 'Compete on leaderboards and unlock achievements as you learn',
        },
    ];
    var stats = [
        { value: '10', label: 'Languages' },
        { value: '300+', label: 'Lessons' },
        { value: '30-Day', label: 'Courses' },
        { value: 'Free', label: 'Forever' },
    ];
    return (<div className="landing-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="title-main">SmartClass</span>
                            <span className="title-sub">Learn Languages Smarter</span>
                        </h1>
                        <p className="hero-description">
                            Master languages with bite-sized lessons, AI tutors, and real-world scenarios.
                            From casual conversations to professional negotiations.
                        </p>
                        <div className="hero-actions">
                            <react_router_dom_1.Link to="/signup" className="btn btn-primary btn-hero">
                                Get Started Free
                            </react_router_dom_1.Link>
                            <react_router_dom_1.Link to="/login" className="btn btn-secondary btn-hero">
                                I Have an Account
                            </react_router_dom_1.Link>
                        </div>
                        <div className="hero-stats">
                            {stats.map(function (stat, index) { return (<div key={index} className="stat-item">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>); })}
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-phone">
                            <div className="phone-screen">
                                <div className="screen-content">
                                    <div className="mini-streak">🔥 7-day streak!</div>
                                    <div className="mini-card">📚 Today's Lesson</div>
                                    <div className="mini-xp">⭐ +50 XP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="container">
                    <h2 className="section-heading">Everything You Need to Learn</h2>
                    <p className="section-subheading">
                        The best language learning features, all in one place
                    </p>
                    <div className="features-grid">
                        {features.map(function (feature, index) { return (<div key={index} className="landing-feature-card animate-fade-in" style={{ animationDelay: "".concat(index * 0.1, "s") }}>
                                <div className="landing-feature-icon">{feature.icon}</div>
                                <h3 className="landing-feature-title">{feature.title}</h3>
                                <p className="landing-feature-description">{feature.description}</p>
                            </div>); })}
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="how-it-works">
                <div className="container">
                    <h2 className="section-heading">How SmartClass Works</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3 className="step-title">Choose Your Language</h3>
                            <p className="step-description">
                                Select from 10 languages including French, English, Spanish, and Chinese
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3 className="step-title">Start Learning</h3>
                            <p className="step-description">
                                Bite-sized 5-10 minute lessons fit perfectly into your busy schedule
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3 className="step-title">Practice Daily</h3>
                            <p className="step-description">
                                Build streaks, earn XP, and unlock achievements as you progress
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h3 className="step-title">Master the Language</h3>
                            <p className="step-description">
                                Complete 30-day courses to reach fluency in real-world business scenarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Learning?</h2>
                        <p className="cta-description">
                            Join thousands of learners mastering languages for West African business
                        </p>
                        <react_router_dom_1.Link to="/signup" className="btn btn-primary btn-cta">
                            Start Learning Now - It's Free!
                        </react_router_dom_1.Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="landing-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <h3 className="footer-logo">SmartClass</h3>
                            <p className="footer-tagline">Learn Languages Smarter</p>
                        </div>
                        <div className="footer-links">
                            <react_router_dom_1.Link to="/about">About</react_router_dom_1.Link>
                            <react_router_dom_1.Link to="/privacy">Privacy</react_router_dom_1.Link>
                            <react_router_dom_1.Link to="/terms">Terms</react_router_dom_1.Link>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2026 SmartClass. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = Landing;
