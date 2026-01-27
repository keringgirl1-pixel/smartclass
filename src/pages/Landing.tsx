import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import './Landing.css';

const Landing = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: '🌍',
            title: t('features.lessons'),
            description: t('features.lessonsDesc'),
        },
        {
            icon: '🎯',
            title: t('features.gamification'),
            description: t('features.gamificationDesc'),
        },
        {
            icon: '🤖',
            title: t('features.ai'),
            description: t('features.aiDesc'),
        },
        {
            icon: '🎧',
            title: 'Commute Mode',
            description: 'Learn hands-free while traveling',
        },
        {
            icon: '📸',
            title: 'Live Translator',
            description: 'Point your camera at signs and get translations',
        },
        {
            icon: '🎤',
            title: t('features.audio'),
            description: t('features.audioDesc'),
        },
    ];

    const stats = [
        { value: '10', label: 'Languages' },
        { value: '300+', label: 'Lessons' },
        { value: '30-Day', label: 'Courses' },
        { value: 'Free', label: 'Forever' },
    ];

    return (
        <div className="landing-page">
            {/* Language Selector at top */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="language-selector-wrapper">
                        <LanguageSelector variant="dropdown" />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="title-main">{t('app.name')}</span>
                            <span className="title-sub">{t('app.tagline')}</span>
                        </h1>
                        <p className="hero-description">
                            {t('hero.subtitle')}
                        </p>
                        <div className="hero-actions">
                            <Link to="/signup" className="btn btn-primary btn-hero">
                                {t('hero.cta')}
                            </Link>
                            <Link to="/login" className="btn btn-secondary btn-hero">
                                {t('hero.login')}
                            </Link>
                        </div>
                        <div className="hero-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
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
                    <h2 className="section-heading">{t('features.title')}</h2>
                    <p className="section-subheading">
                        The best language learning features, all in one place
                    </p>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="landing-feature-card animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="landing-feature-icon">{feature.icon}</div>
                                <h3 className="landing-feature-title">{feature.title}</h3>
                                <p className="landing-feature-description">{feature.description}</p>
                            </div>
                        ))}
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
                            <h3 className="step-title">{t('home.chooseLanguage')}</h3>
                            <p className="step-description">
                                Select from 10 languages including French, English, Spanish, and Chinese
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3 className="step-title">{t('lessons.start')}</h3>
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
                                Complete 30-day courses to reach fluency in real-world scenarios
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
                            Join thousands of learners mastering languages
                        </p>
                        <Link to="/signup" className="btn btn-primary btn-cta">
                            {t('hero.cta')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="landing-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <h3 className="footer-logo">{t('app.name')}</h3>
                            <p className="footer-tagline">{t('app.tagline')}</p>
                        </div>
                        <div className="footer-links">
                            <Link to="/about">About</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/terms">Terms</Link>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2026 SmartClass. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
