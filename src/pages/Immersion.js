"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Immersion.css");
var Immersion = function () {
    var _a = (0, react_1.useState)('ivorian'), selectedAccent = _a[0], setSelectedAccent = _a[1];
    var _b = (0, react_1.useState)(0), currentVideo = _b[0], setCurrentVideo = _b[1];
    var accents = [
        { id: 'ivorian', name: 'Ivorian French', flag: '🇨🇮' },
        { id: 'senegalese', name: 'Senegalese French', flag: '🇸🇳' },
        { id: 'nigerian', name: 'Nigerian English', flag: '🇳🇬' },
        { id: 'ghanaian', name: 'Ghanaian English', flag: '🇬🇭' },
    ];
    var videos = [
        {
            id: 1,
            title: 'Market Conversation',
            accent: 'ivorian',
            duration: '2:30',
            thumbnail: '🎬',
        },
        {
            id: 2,
            title: 'Business Meeting',
            accent: 'senegalese',
            duration: '3:15',
            thumbnail: '🎬',
        },
        {
            id: 3,
            title: 'Street Interview',
            accent: 'nigerian',
            duration: '1:45',
            thumbnail: '🎬',
        },
    ];
    return (<div className="immersion-page">
            <div className="immersion-header">
                <div className="container">
                    <react_router_dom_1.Link to="/" className="back-link">
                        ← Home
                    </react_router_dom_1.Link>
                    <h1 className="page-title">
                        <span className="gradient-text">Native Immersion</span>
                    </h1>
                    <p className="page-subtitle">Experience authentic local accents</p>
                </div>
            </div>

            <div className="container">
                <div className="accent-selector">
                    <h3 className="selector-title">Select Accent</h3>
                    <div className="accent-buttons">
                        {accents.map(function (accent) { return (<button key={accent.id} className={"accent-btn ".concat(selectedAccent === accent.id ? 'accent-active' : '')} onClick={function () { return setSelectedAccent(accent.id); }}>
                                <span className="accent-flag">{accent.flag}</span>
                                <span className="accent-name">{accent.name}</span>
                            </button>); })}
                    </div>
                </div>

                <div className="video-player-container">
                    <div className="video-player">
                        <div className="video-placeholder">
                            <div className="play-icon">▶️</div>
                            <p className="video-title">{videos[currentVideo].title}</p>
                        </div>
                    </div>
                    <div className="video-controls">
                        <button className="control-btn">⏮️ Previous</button>
                        <button className="control-btn btn-primary">▶️ Play</button>
                        <button className="control-btn">⏭️ Next</button>
                    </div>
                </div>

                <div className="comprehension-quiz">
                    <h3 className="quiz-title">Comprehension Check</h3>
                    <p className="quiz-question">What was the main topic discussed?</p>
                    <div className="quiz-options">
                        <button className="quiz-option">Market prices</button>
                        <button className="quiz-option">Weather</button>
                        <button className="quiz-option">Transportation</button>
                    </div>
                </div>

                <div className="video-list">
                    <h3 className="section-title">More Videos</h3>
                    <div className="videos-grid">
                        {videos.map(function (video, index) { return (<div key={video.id} className="video-card animate-fade-in" style={{ animationDelay: "".concat(index * 0.1, "s") }} onClick={function () { return setCurrentVideo(index); }}>
                                <div className="video-thumbnail">{video.thumbnail}</div>
                                <div className="video-info">
                                    <h4 className="video-card-title">{video.title}</h4>
                                    <p className="video-duration">⏱️ {video.duration}</p>
                                </div>
                            </div>); })}
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = Immersion;
