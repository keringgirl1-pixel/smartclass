"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var ai_tutors_1 = require("../data/ai-tutors");
var aiService_1 = require("../services/aiService");
require("./AITutor.css");
var AITutor = function () {
    var _a = (0, react_1.useState)(ai_tutors_1.aiTutors[0]), selectedTutor = _a[0], setSelectedTutor = _a[1];
    var _b = (0, react_1.useState)(ai_tutors_1.scenarios[0]), selectedScenario = _b[0], setSelectedScenario = _b[1];
    var _c = (0, react_1.useState)('french'), selectedLanguage = _c[0], setSelectedLanguage = _c[1];
    var _d = (0, react_1.useState)(false), isConversationStarted = _d[0], setIsConversationStarted = _d[1];
    var _e = (0, react_1.useState)([]), messages = _e[0], setMessages = _e[1];
    var _f = (0, react_1.useState)(''), inputMessage = _f[0], setInputMessage = _f[1];
    var _g = (0, react_1.useState)(false), isLoading = _g[0], setIsLoading = _g[1];
    var startConversation = function () {
        aiService_1.default.startConversation({
            language: selectedLanguage,
            scenario: selectedScenario.situation,
            userLevel: 'beginner',
            tutorPersonality: selectedTutor.personality,
        });
        setIsConversationStarted(true);
        setMessages([]);
        // Get initial greeting from AI
        handleAIGreeting();
    };
    var handleAIGreeting = function () { return __awaiter(void 0, void 0, void 0, function () {
        var greeting, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, aiService_1.default.sendMessage('Hello')];
                case 2:
                    greeting = _a.sent();
                    setMessages([{ role: 'assistant', content: greeting }]);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error getting greeting:', error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var sendMessage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userMsg, response_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!inputMessage.trim() || isLoading)
                        return [2 /*return*/];
                    userMsg = inputMessage.trim();
                    setInputMessage('');
                    // Add user message to chat
                    setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [{ role: 'user', content: userMsg }], false); });
                    // Get AI response
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, aiService_1.default.sendMessage(userMsg)];
                case 2:
                    response_1 = _a.sent();
                    setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [{ role: 'assistant', content: response_1 }], false); });
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error sending message:', error_2);
                    setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [
                        { role: 'assistant', content: 'Sorry, I had trouble understanding. Can you try again?' },
                    ], false); });
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleKeyPress = function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    if (!isConversationStarted) {
        return (<div className="ai-tutor-page">
                <div className="ai-tutor-header">
                    <div className="container">
                        <react_router_dom_1.Link to="/home" className="back-link">
                            ← Home
                        </react_router_dom_1.Link>
                        <h1 className="page-title">
                            <span className="gradient-text">AI Language Tutors</span>
                        </h1>
                        <p className="page-subtitle">Practice conversations with AI tutors</p>
                    </div>
                </div>

                <div className="container">
                    <div className="ai-tutor-setup">
                        {/* Tutor Selection */}
                        <section className="setup-section">
                            <h2 className="setup-heading">👤 Choose Your Tutor</h2>
                            <div className="tutors-grid">
                                {ai_tutors_1.aiTutors.map(function (tutor) { return (<div key={tutor.id} className={"tutor-card ".concat(selectedTutor.id === tutor.id ? 'selected' : '')} onClick={function () { return setSelectedTutor(tutor); }}>
                                        <div className="tutor-avatar">{tutor.avatar}</div>
                                        <h3 className="tutor-name">{tutor.name}</h3>
                                        <p className="tutor-personality">{tutor.personality}</p>
                                        <p className="tutor-description">{tutor.description}</p>
                                        <div className="tutor-languages">
                                            {tutor.languages.map(function (lang) { return (<span key={lang} className="language-badge">
                                                    {lang}
                                                </span>); })}
                                        </div>
                                        {tutor.accent && <p className="tutor-accent">✨ {tutor.accent}</p>}
                                    </div>); })}
                            </div>
                        </section>

                        {/* Scenario Selection */}
                        <section className="setup-section">
                            <h2 className="setup-heading">🎭 Choose a Scenario</h2>
                            <div className="scenarios-grid">
                                {ai_tutors_1.scenarios.map(function (scenario) { return (<div key={scenario.id} className={"scenario-card ".concat(selectedScenario.id === scenario.id ? 'selected' : '')} onClick={function () { return setSelectedScenario(scenario); }}>
                                        <div className="scenario-icon">{scenario.icon}</div>
                                        <h3 className="scenario-title">{scenario.title}</h3>
                                        <p className="scenario-description">{scenario.description}</p>
                                        {scenario.persona && (<div className="scenario-persona">👤 {scenario.persona}</div>)}
                                        {scenario.mission && (<div className="scenario-mission">🎯 {scenario.mission}</div>)}
                                        <div className="scenario-difficulty">{scenario.difficulty}</div>
                                    </div>); })}
                            </div>
                        </section>

                        {/* Start Button */}
                        <div className="start-conversation">
                            <button className="btn btn-primary btn-lg" onClick={startConversation}>
                                Start Conversation with {selectedTutor.name}
                            </button>
                            {!aiService_1.default.isAvailable() && (<p className="api-warning">
                                    💡 AI API not configured - using practice mode with sample responses
                                </p>)}
                        </div>
                    </div>
                </div>
            </div>);
    }
    // Conversation View
    return (<div className="ai-tutor-page conversation-mode">
            <div className="conversation-header">
                <react_router_dom_1.Link to="/home" className="back-link">
                    ← Home
                </react_router_dom_1.Link>
                <div className="active-tutor">
                    <div className="tutor-avatar-small">{selectedTutor.avatar}</div>
                    <div>
                        <div className="tutor-name-small">{selectedTutor.name}</div>
                        <div className="scenario-name-small">{selectedScenario.title}</div>
                    </div>
                </div>
                <button className="btn btn-secondary" onClick={function () { return setIsConversationStarted(false); }}>
                    New Conversation
                </button>
            </div>

            <div className="conversation-container">
                <div className="messages-area">
                    {messages.map(function (msg, index) { return (<div key={index} className={"message ".concat(msg.role)}>
                            {msg.role === 'assistant' && (<div className="message-avatar">{selectedTutor.avatar}</div>)}
                            <div className="message-content">{msg.content}</div>
                        </div>); })}
                    {isLoading && (<div className="message assistant">
                            <div className="message-avatar">{selectedTutor.avatar}</div>
                            <div className="message-content typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>)}
                </div>

                <div className="input-area">
                    <input type="text" className="message-input" placeholder={"Type your message in ".concat(selectedLanguage, "...")} value={inputMessage} onChange={function (e) { return setInputMessage(e.target.value); }} onKeyPress={handleKeyPress} disabled={isLoading}/>
                    <button className="btn btn-primary send-button" onClick={sendMessage} disabled={!inputMessage.trim() || isLoading}>
                        Send
                    </button>
                </div>
            </div>
        </div>);
};
exports.default = AITutor;
