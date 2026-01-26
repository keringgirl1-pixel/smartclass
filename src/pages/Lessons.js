"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Lessons.css");
var all_lessons_1 = require("../data/lessons/all-lessons");
var AudioPlayer_1 = require("../components/AudioPlayer/AudioPlayer");
var Lessons = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)('french'), selectedLanguage = _a[0], setSelectedLanguage = _a[1];
    var _b = (0, react_1.useState)('beginner'), selectedLevel = _b[0], setSelectedLevel = _b[1];
    var _c = (0, react_1.useState)([]), lessons = _c[0], setLessons = _c[1];
    var _d = (0, react_1.useState)(null), selectedLesson = _d[0], setSelectedLesson = _d[1];
    var _e = (0, react_1.useState)(0), currentQuizIndex = _e[0], setCurrentQuizIndex = _e[1];
    var _f = (0, react_1.useState)(true), showVocabulary = _f[0], setShowVocabulary = _f[1];
    (0, react_1.useEffect)(function () {
        var savedLang = localStorage.getItem('selectedLanguage') || 'french';
        var savedLevel = localStorage.getItem('selectedLevel') || 'beginner';
        setSelectedLanguage(savedLang);
        setSelectedLevel(savedLevel);
    }, []);
    (0, react_1.useEffect)(function () {
        var filtered = all_lessons_1.default.filter(function (lesson) { return lesson.language === selectedLanguage && lesson.level === selectedLevel; });
        setLessons(filtered);
    }, [selectedLanguage, selectedLevel]);
    var languages = [
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
    var handleStartLesson = function (lesson) {
        if (!lesson.locked) {
            setSelectedLesson(lesson);
            setCurrentQuizIndex(0);
            setShowVocabulary(true);
        }
    };
    var handleNextQuiz = function () {
        if (selectedLesson && currentQuizIndex < selectedLesson.quiz.length - 1) {
            setCurrentQuizIndex(currentQuizIndex + 1);
        }
    };
    var completedCount = lessons.filter(function (l) { return l.completed; }).length;
    var totalXP = lessons.filter(function (l) { return l.completed; }).reduce(function (sum, l) { return sum + l.xp; }, 0);
    if (selectedLesson) {
        return (<div className="lesson-player">
                <div className="lesson-player-header">
                    <button className="back-button" onClick={function () { return setSelectedLesson(null); }}>
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

                        {showVocabulary ? (<div className="lesson-slide-content">
                                <div className="vocabulary-section">
                                    <h3 className="section-subtitle">📚 Vocabulary</h3>
                                    <div className="vocabulary-list">
                                        {selectedLesson.vocabulary.map(function (vocab, index) { return (<div key={index} className="vocabulary-item">
                                                {vocab.pronunciation && (<div className="vocab-pronunciation">
                                                        <AudioPlayer_1.default text={vocab.word} language={selectedLesson.language} size="small"/>
                                                        <span className="pronunciation-text">
                                                            {vocab.pronunciation}
                                                        </span>
                                                    </div>)}
                                                <div className="vocab-word">{vocab.word}</div>
                                                <div className="vocab-translation">
                                                    = {vocab.translation}
                                                </div>
                                            </div>); })}
                                    </div>
                                </div>

                                <div className="phrases-section">
                                    <h3 className="section-subtitle">💬 Useful Phrases</h3>
                                    <div className="phrases-list">
                                        {selectedLesson.phrases.map(function (phrase, index) { return (<div key={index} className="phrase-item">
                                                {phrase.pronunciation && (<div className="phrase-pronunciation">
                                                        <AudioPlayer_1.default text={phrase.phrase} language={selectedLesson.language} size="small"/>
                                                        <span className="pronunciation-text">
                                                            {phrase.pronunciation}
                                                        </span>
                                                    </div>)}
                                                <div className="phrase-text">{phrase.phrase}</div>
                                                <div className="phrase-translation">
                                                    = {phrase.translation}
                                                </div>
                                                <div className="phrase-context">📌 {phrase.context}</div>
                                            </div>); })}
                                    </div>
                                </div>

                                {selectedLesson.culturalNote && (<div className="cultural-note">
                                        <div className="note-icon">💡</div>
                                        <div className="note-content">
                                            <h4 className="note-title">Cultural Note</h4>
                                            <p className="note-text">{selectedLesson.culturalNote}</p>
                                        </div>
                                    </div>)}

                                <div className="lesson-actions">
                                    <button className="btn btn-primary btn-lg" onClick={function () { return setShowVocabulary(false); }}>
                                        Take Quiz →
                                    </button>
                                </div>
                            </div>) : (<div className="lesson-slide-content">
                                <div className="lesson-quiz">
                                    <h3 className="quiz-title">
                                        Question {currentQuizIndex + 1} of {selectedLesson.quiz.length}
                                    </h3>
                                    <p className="quiz-question">
                                        {selectedLesson.quiz[currentQuizIndex].question}
                                    </p>
                                    <div className="quiz-options">
                                        {selectedLesson.quiz[currentQuizIndex].options.map(function (option, index) { return (<button key={index} className={"quiz-option ".concat(index === selectedLesson.quiz[currentQuizIndex].correct
                        ? 'quiz-option-correct'
                        : '')}>
                                                {option}
                                            </button>); })}
                                    </div>
                                </div>

                                <div className="lesson-actions">
                                    {currentQuizIndex < selectedLesson.quiz.length - 1 ? (<button className="btn btn-primary btn-lg" onClick={handleNextQuiz}>
                                            Next Question →
                                        </button>) : (<button className="btn btn-success btn-lg" onClick={function () { return setSelectedLesson(null); }}>
                                            Complete Lesson ✓
                                        </button>)}
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>);
    }
    return (<div className="lessons-page">
            <div className="lessons-header">
                <div className="container">
                    <react_router_dom_1.Link to="/" className="back-link">
                        ← Home
                    </react_router_dom_1.Link>
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
                            {languages.map(function (lang) { return (<button key={lang.id} className={"language-tab ".concat(selectedLanguage === lang.id ? 'tab-active' : '')} onClick={function () {
                setSelectedLanguage(lang.id);
                localStorage.setItem('selectedLanguage', lang.id);
            }}>
                                    <span className="tab-flag">{lang.flag}</span>
                                    <span className="tab-name">{lang.name}</span>
                                </button>); })}
                        </div>
                        <button className="change-language-btn" onClick={function () { return navigate('/language-selection'); }}>
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
                        {lessons.length > 0 ? (lessons.map(function (lesson, index) { return (<div key={lesson.id} className={"lesson-card ".concat(lesson.locked ? 'lesson-locked' : '', " ").concat(lesson.completed ? 'lesson-completed' : '', " animate-fade-in")} style={{ animationDelay: "".concat(index * 0.05, "s") }} onClick={function () { return handleStartLesson(lesson); }}>
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
                                        {!lesson.locked && !lesson.completed && (<span className="status-icon">▶️</span>)}
                                    </div>
                                </div>); })) : (<div className="no-lessons">
                                <p className="no-lessons-text">
                                    No lessons available for this language yet. More coming soon!
                                </p>
                                <button className="btn btn-primary" onClick={function () { return navigate('/language-selection'); }}>
                                    Choose Another Language
                                </button>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = Lessons;
