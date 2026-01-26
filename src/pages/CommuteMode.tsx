import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommuteMode.css';

const CommuteMode = () => {
    const [isListening, setIsListening] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(
        "What is the main purpose of ECOWAS?"
    );

    const toggleListening = () => {
        setIsListening(!isListening);
    };

    return (
        <div className="commute-page">
            <div className="commute-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        ← Home
                    </Link>
                    <h1 className="page-title">
                        <span className="gradient-text">Commute Mode</span>
                    </h1>
                    <p className="page-subtitle">Hands-free learning on the go</p>
                </div>
            </div>

            <div className="container">
                <div className="commute-content">
                    <div className="voice-indicator">
                        <div className={`voice-circle ${isListening ? 'listening' : ''}`}>
                            <div className="voice-icon">🎧</div>
                        </div>
                        <p className="voice-status">
                            {isListening ? 'Listening...' : 'Tap to activate'}
                        </p>
                    </div>

                    <div className="current-question">
                        <div className="question-icon">💬</div>
                        <p className="question-text">{currentQuestion}</p>
                    </div>

                    <button
                        className={`voice-button ${isListening ? 'voice-active' : ''}`}
                        onClick={toggleListening}
                    >
                        {isListening ? '🛑 Stop' : '🎤 Start Voice Mode'}
                    </button>

                    <div className="commute-features">
                        <div className="feature-item">
                            <div className="feature-icon">👂</div>
                            <div className="feature-text">
                                <h4>Listen & Respond</h4>
                                <p>Answer questions using your voice</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🚗</div>
                            <div className="feature-text">
                                <h4>Perfect for Commute</h4>
                                <p>Learn while driving or walking</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">📈</div>
                            <div className="feature-text">
                                <h4>Track Progress</h4>
                                <p>Earn XP even on the go</p>
                            </div>
                        </div>
                    </div>

                    <div className="safety-notice">
                        <div className="notice-icon">⚠️</div>
                        <p className="notice-text">
                            <strong>Safety First:</strong> Always prioritize road safety. Use
                            voice mode only when it's safe to do so.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommuteMode;
