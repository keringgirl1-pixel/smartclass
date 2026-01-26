import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Translator.css';

const Translator = () => {
    const [isActive, setIsActive] = useState(false);
    const [translatedText, setTranslatedText] = useState('');

    const toggleCamera = () => {
        setIsActive(!isActive);
        if (!isActive) {
            // Simulate translation
            setTimeout(() => {
                setTranslatedText('Marché Central - Central Market');
            }, 1500);
        } else {
            setTranslatedText('');
        }
    };

    return (
        <div className="translator-page">
            <div className="translator-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        ← Home
                    </Link>
                    <h1 className="page-title">
                        <span className="gradient-text">Live Translator</span>
                    </h1>
                    <p className="page-subtitle">Camera-based instant translation</p>
                </div>
            </div>

            <div className="container">
                <div className="translator-content">
                    <div className="camera-container">
                        <div className={`camera-view ${isActive ? 'camera-active' : ''}`}>
                            {!isActive ? (
                                <div className="camera-placeholder">
                                    <div className="camera-icon">📸</div>
                                    <p className="camera-text">Tap to activate camera</p>
                                </div>
                            ) : (
                                <div className="camera-feed">
                                    <div className="scan-line"></div>
                                    <div className="camera-overlay">
                                        <div className="focus-frame"></div>
                                    </div>
                                    {translatedText && (
                                        <div className="translation-overlay animate-fade-in">
                                            <div className="translation-box">
                                                <p className="translation-text">{translatedText}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <button
                            className={`camera-button ${isActive ? 'camera-button-active' : ''}`}
                            onClick={toggleCamera}
                        >
                            {isActive ? '⏹️ Stop Camera' : '📷 Start Camera'}
                        </button>
                    </div>

                    <div className="translator-features">
                        <div className="feature-card">
                            <div className="feature-icon">🌍</div>
                            <h4 className="feature-title">Multi-Language</h4>
                            <p className="feature-description">
                                French, English, Arabic, Portuguese
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h4 className="feature-title">Instant Translation</h4>
                            <p className="feature-description">
                                Real-time text recognition
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💾</div>
                            <h4 className="feature-title">Save History</h4>
                            <p className="feature-description">
                                Keep your translations
                            </p>
                        </div>
                    </div>

                    <div className="translation-history">
                        <h3 className="section-title">Recent Translations</h3>
                        <div className="history-list">
                            <div className="history-item">
                                <div className="history-icon">📄</div>
                                <div className="history-content">
                                    <p className="history-original">Prix: 5000 CFA</p>
                                    <p className="history-translated">Price: 5000 CFA</p>
                                </div>
                                <div className="history-time">2 min ago</div>
                            </div>
                            <div className="history-item">
                                <div className="history-icon">📄</div>
                                <div className="history-content">
                                    <p className="history-original">Ouvert 9h-18h</p>
                                    <p className="history-translated">Open 9am-6pm</p>
                                </div>
                                <div className="history-time">5 min ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Translator;
