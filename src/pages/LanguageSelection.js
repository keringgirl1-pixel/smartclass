"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./LanguageSelection.css");
var LanguageSelection = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(null), selectedLanguage = _a[0], setSelectedLanguage = _a[1];
    var _b = (0, react_1.useState)('beginner'), selectedLevel = _b[0], setSelectedLevel = _b[1];
    var languages = [
        {
            id: 'french',
            name: 'French',
            nativeName: 'Français',
            flag: '🇫🇷',
            countries: 'Côte d\'Ivoire, Senegal, Mali, Burkina Faso',
            totalLessons: 90,
        },
        {
            id: 'portuguese',
            name: 'Portuguese',
            nativeName: 'Português',
            flag: '🇵🇹',
            countries: 'Guinea-Bissau, Cape Verde',
            totalLessons: 90,
        },
        {
            id: 'arabic',
            name: 'Arabic',
            nativeName: 'العربية',
            flag: '🇸🇦',
            countries: 'Mauritania, Niger, Chad',
            totalLessons: 90,
        },
        {
            id: 'chinese',
            name: 'Chinese',
            nativeName: '中文',
            flag: '🇨🇳',
            countries: 'Global business language',
            totalLessons: 90,
        },
        {
            id: 'russian',
            name: 'Russian',
            nativeName: 'Русский',
            flag: '🇷🇺',
            countries: 'International trade',
            totalLessons: 90,
        },
        {
            id: 'spanish',
            name: 'Spanish',
            nativeName: 'Español',
            flag: '🇪🇸',
            countries: 'Global communication',
            totalLessons: 90,
        },
        {
            id: 'italian',
            name: 'Italian',
            nativeName: 'Italiano',
            flag: '🇮🇹',
            countries: 'European business',
            totalLessons: 90,
        },
        {
            id: 'japanese',
            name: 'Japanese',
            nativeName: '日本語',
            flag: '🇯🇵',
            countries: 'Asian markets',
            totalLessons: 90,
        },
        {
            id: 'german',
            name: 'German',
            nativeName: 'Deutsch',
            flag: '🇩🇪',
            countries: 'European commerce',
            totalLessons: 90,
        },
        {
            id: 'english',
            name: 'English',
            nativeName: 'English',
            flag: '🇬🇧',
            countries: 'Nigeria, Ghana, Liberia, Sierra Leone',
            totalLessons: 90,
        },
    ];
    var levels = [
        {
            id: 'beginner',
            name: 'Beginner',
            description: '30 days - Start from scratch',
            icon: '🌱',
        },
        {
            id: 'intermediate',
            name: 'Intermediate',
            description: '30 days - Build conversation skills',
            icon: '🌿',
        },
        {
            id: 'advanced',
            name: 'Advanced',
            description: '30 days - Master business language',
            icon: '🌳',
        },
    ];
    var handleStart = function () {
        if (selectedLanguage) {
            // Store selection in localStorage
            localStorage.setItem('selectedLanguage', selectedLanguage);
            localStorage.setItem('selectedLevel', selectedLevel);
            navigate('/lessons');
        }
    };
    return (<div className="language-selection-page">
            <div className="selection-header">
                <div className="container">
                    <h1 className="page-title">
                        <span className="gradient-text">Choose Your Language</span>
                    </h1>
                    <p className="page-subtitle">
                        Start your West African language journey
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="selection-content">
                    <div className="language-section">
                        <h2 className="section-title">Select Language</h2>
                        <div className="languages-grid">
                            {languages.map(function (lang, index) { return (<div key={lang.id} className={"language-card ".concat(selectedLanguage === lang.id ? 'language-selected' : '', " animate-fade-in")} style={{ animationDelay: "".concat(index * 0.1, "s") }} onClick={function () { return setSelectedLanguage(lang.id); }}>
                                    <div className="language-flag">{lang.flag}</div>
                                    <h3 className="language-name">{lang.name}</h3>
                                    <p className="language-native">{lang.nativeName}</p>
                                    <p className="language-countries">{lang.countries}</p>
                                    <div className="language-stats">
                                        <span className="stat-item">
                                            📚 {lang.totalLessons} lessons
                                        </span>
                                    </div>
                                    {selectedLanguage === lang.id && (<div className="selected-checkmark">✓</div>)}
                                </div>); })}
                        </div>
                    </div>

                    {selectedLanguage && (<div className="level-section animate-fade-in">
                            <h2 className="section-title">Select Your Level</h2>
                            <div className="levels-grid">
                                {levels.map(function (level) { return (<div key={level.id} className={"level-card ".concat(selectedLevel === level.id ? 'level-selected' : '')} onClick={function () { return setSelectedLevel(level.id); }}>
                                        <div className="level-icon">{level.icon}</div>
                                        <h3 className="level-name">{level.name}</h3>
                                        <p className="level-description">{level.description}</p>
                                        {selectedLevel === level.id && (<div className="selected-checkmark">✓</div>)}
                                    </div>); })}
                            </div>
                        </div>)}

                    {selectedLanguage && (<div className="start-section animate-fade-in">
                            <div className="start-card">
                                <div className="start-info">
                                    <h3 className="start-title">Ready to Begin?</h3>
                                    <p className="start-description">
                                        You'll learn {selectedLanguage} at the {selectedLevel} level.
                                        Complete 30 days of lessons to unlock the next level!
                                    </p>
                                    <div className="start-features">
                                        <div className="feature-item">
                                            <span className="feature-icon">⏱️</span>
                                            <span className="feature-text">5-10 min per day</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="feature-icon">🎯</span>
                                            <span className="feature-text">Daily goals & streaks</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="feature-icon">⭐</span>
                                            <span className="feature-text">Earn XP & achievements</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-start" onClick={handleStart}>
                                    Start Learning →
                                </button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>);
};
exports.default = LanguageSelection;
