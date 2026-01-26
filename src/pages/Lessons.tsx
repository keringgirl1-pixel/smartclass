import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Lessons.css';
import allBeginnerLessons from '../data/lessons/all-lessons';
import type { Lesson } from '../data/types';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';

const Lessons = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState<string>('french');
    const [selectedLevel, setSelectedLevel] = useState<string>('beginner');
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [showVocabulary, setShowVocabulary] = useState(true);

    useEffect(() => {
        const savedLang = localStorage.getItem('selectedLanguage') || 'french';
        const savedLevel = localStorage.getItem('selectedLevel') || 'beginner';
        setSelectedLanguage(savedLang);
        setSelectedLevel(savedLevel);
    }, []);

    useEffect(() => {
        const filtered = allBeginnerLessons.filter(
            (lesson) => lesson.language === selectedLanguage && lesson.level === selectedLevel
        );
        setLessons(filtered);
    }, [selectedLanguage, selectedLevel]);

    const languages = [
        { id: 'french', name: 'French', flag: '🇫🇷' },
        { id: 'portuguese', name: 'Portuguese', flag: '🇵🇹' },
        { id: 'arabic', name: 'Arabic', flag: '🇸🇦' },
        { id: 'chinese', name: 'Chinese', flag: '🇨🇳' },
        { id: 'russian', name: 'Russian', flag: '🇷🇺' },
        { id: 'spanish', name: 'Spanish', flag: '🇪🇸' },
        { id: 'italian', name: 'Italian', flag: '🇮🇹' },
        { id: 'japanese', name: 'Japanese', flag: '🇯🇵' },
        { id: 'german', name: 'German', flag: '🇩🇪' },
        { id: 'english', name: 'English', flag: '🇬🇧' },
    ];

    const handleStartLesson = (lesson: Lesson) => {
        if (!lesson.locked) {
            setSelectedLesson(lesson);
            setCurrentQuizIndex(0);
            setShowVocabulary(true);
        }
    };

    const handleNextQuiz = () => {
        if (selectedLesson && currentQuizIndex < selectedLesson.quiz.length - 1) {
            setCurrentQuizIndex(currentQuizIndex + 1);
        }
    };

    const completedCount = lessons.filter((l) => l.completed).length;
    const totalXP = lessons.filter((l) => l.completed).reduce((sum, l) => sum + l.xp, 0);

    if (selectedLesson) {
        return (
            <div className="lesson-player">
                <div className="lesson-player-header">
                    <button className="back-button" onClick={() => setSelectedLesson(null)}>
                        ← Back
                    </button>
                    <div className="lesson-progress-info">
                        <span className="lesson-day">Day {selectedLesson.day}/30</span>
                        <span className="lesson-xp-reward">+{selectedLesson.xp} XP</span>
                    </div>
                </div>

                <div className="lesson-content">
                    <div className="lesson-slide animate-fade-in">
                        <h2 className="lesson-slide-title">{selectedLesson.title}</h2>
                        <p className="lesson-slide-description">{selectedLesson.description}</p>

                        {showVocabulary ? (
                            <div className="lesson-slide-content">
                                <div className="vocabulary-section">
                                    <h3 className="section-subtitle">📚 Vocabulary</h3>
                                    <div className="vocabulary-list">
                                        {selectedLesson.vocabulary.map((vocab, index) => (
                                            <div key={index} className="vocabulary-item">
                                                {vocab.pronunciation && (
                                                    <div className="vocab-pronunciation">
                                                        <AudioPlayer
                                                            text={vocab.word}
                                                            language={selectedLesson.language}
                                                            size="small"
                                                        />
                                                        <span className="pronunciation-text">
                                                            {vocab.pronunciation}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="vocab-word">{vocab.word}</div>
                                                <div className="vocab-translation">
                                                    = {vocab.translation}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="phrases-section">
                                    <h3 className="section-subtitle">💬 Useful Phrases</h3>
                                    <div className="phrases-list">
                                        {selectedLesson.phrases.map((phrase, index) => (
                                            <div key={index} className="phrase-item">
                                                {phrase.pronunciation && (
                                                    <div className="phrase-pronunciation">
                                                        <AudioPlayer
                                                            text={phrase.phrase}
                                                            language={selectedLesson.language}
                                                            size="small"
                                                        />
                                                        <span className="pronunciation-text">
                                                            {phrase.pronunciation}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="phrase-text">{phrase.phrase}</div>
                                                <div className="phrase-translation">
                                                    = {phrase.translation}
                                                </div>
                                                <div className="phrase-context">📌 {phrase.context}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {selectedLesson.culturalNote && (
                                    <div className="cultural-note">
                                        <div className="note-icon">💡</div>
                                        <div className="note-content">
                                            <h4 className="note-title">Cultural Note</h4>
                                            <p className="note-text">{selectedLesson.culturalNote}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="lesson-actions">
                                    <button
                                        className="btn btn-primary btn-lg"
                                        onClick={() => setShowVocabulary(false)}
                                    >
                                        Take Quiz →
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="lesson-slide-content">
                                <div className="lesson-quiz">
                                    <h3 className="quiz-title">
                                        Question {currentQuizIndex + 1} of {selectedLesson.quiz.length}
                                    </h3>
                                    <p className="quiz-question">
                                        {selectedLesson.quiz[currentQuizIndex].question}
                                    </p>
                                    <div className="quiz-options">
                                        {selectedLesson.quiz[currentQuizIndex].options.map((option, index) => (
                                            <button
                                                key={index}
                                                className={`quiz-option ${index === selectedLesson.quiz[currentQuizIndex].correct
                                                    ? 'quiz-option-correct'
                                                    : ''
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="lesson-actions">
                                    {currentQuizIndex < selectedLesson.quiz.length - 1 ? (
                                        <button className="btn btn-primary btn-lg" onClick={handleNextQuiz}>
                                            Next Question →
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-success btn-lg"
                                            onClick={() => setSelectedLesson(null)}
                                        >
                                            Complete Lesson ✓
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="lessons-page">
            <div className="lessons-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        ← Home
                    </Link>
                    <h1 className="page-title">
                        <span className="gradient-text">Language Lessons</span>
                    </h1>
                    <p className="page-subtitle">30-day journey to fluency</p>
                </div>
            </div>

            <div className="container">
                <div className="lessons-content">
                    <div className="language-filter">
                        <h3 className="filter-title">Select Language</h3>
                        <div className="language-tabs">
                            {languages.map((lang) => (
                                <button
                                    key={lang.id}
                                    className={`language-tab ${selectedLanguage === lang.id ? 'tab-active' : ''
                                        }`}
                                    onClick={() => {
                                        setSelectedLanguage(lang.id);
                                        localStorage.setItem('selectedLanguage', lang.id);
                                    }}
                                >
                                    <span className="tab-flag">{lang.flag}</span>
                                    <span className="tab-name">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                        <button
                            className="change-language-btn"
                            onClick={() => navigate('/language-selection')}
                        >
                            Change Language/Level
                        </button>
                    </div>

                    <div className="lessons-stats">
                        <div className="stat-card">
                            <div className="stat-icon">📅</div>
                            <div className="stat-info">
                                <div className="stat-value">Day {completedCount + 1}</div>
                                <div className="stat-label">of 30</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">✅</div>
                            <div className="stat-info">
                                <div className="stat-value">{completedCount}</div>
                                <div className="stat-label">Completed</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">⭐</div>
                            <div className="stat-info">
                                <div className="stat-value">{totalXP}</div>
                                <div className="stat-label">Total XP</div>
                            </div>
                        </div>
                    </div>

                    <div className="lessons-list">
                        <h3 className="section-title">Your 30-Day Journey</h3>
                        {lessons.length > 0 ? (
                            lessons.map((lesson, index) => (
                                <div
                                    key={lesson.id}
                                    className={`lesson-card ${lesson.locked ? 'lesson-locked' : ''} ${lesson.completed ? 'lesson-completed' : ''
                                        } animate-fade-in`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                    onClick={() => handleStartLesson(lesson)}
                                >
                                    <div className="lesson-number">Day {lesson.day}</div>
                                    <div className="lesson-info">
                                        <h3 className="lesson-title">{lesson.title}</h3>
                                        <p className="lesson-description">{lesson.description}</p>
                                        <div className="lesson-meta">
                                            <span className="lesson-duration">⏱️ {lesson.duration}</span>
                                            <span className="lesson-xp">+{lesson.xp} XP</span>
                                        </div>
                                    </div>
                                    <div className="lesson-status">
                                        {lesson.locked && <span className="status-icon">🔒</span>}
                                        {lesson.completed && <span className="status-icon">✅</span>}
                                        {!lesson.locked && !lesson.completed && (
                                            <span className="status-icon">▶️</span>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-lessons">
                                <p className="no-lessons-text">
                                    No lessons available for this language yet. More coming soon!
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate('/language-selection')}
                                >
                                    Choose Another Language
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
