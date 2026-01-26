"use strict";
// AI Service for conversation and language feedback
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiService = void 0;
var AIService = /** @class */ (function () {
    function AIService() {
        this.apiKey = null;
        this.provider = 'openai';
        this.conversationHistory = [];
        this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || null;
        this.provider = import.meta.env.VITE_AI_PROVIDER || 'openai';
    }
    /**
     * Start a new conversation with context
     */
    AIService.prototype.startConversation = function (context) {
        this.conversationHistory = [];
        // Create system prompt based on context
        var systemPrompt = this.createSystemPrompt(context);
        this.conversationHistory.push({
            role: 'system',
            content: systemPrompt,
        });
    };
    /**
     * Send a message and get AI response
     */
    AIService.prototype.sendMessage = function (userMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.apiKey) {
                            // Return mock response if no API key
                            return [2 /*return*/, this.getMockResponse(userMessage)];
                        }
                        // Add user message to history
                        this.conversationHistory.push({
                            role: 'user',
                            content: userMessage,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.callAI()];
                    case 2:
                        response = _a.sent();
                        // Add assistant response to history
                        this.conversationHistory.push({
                            role: 'assistant',
                            content: response,
                        });
                        return [2 /*return*/, response];
                    case 3:
                        error_1 = _a.sent();
                        console.error('AI service error:', error_1);
                        return [2 /*return*/, 'I apologize, but I\'m having trouble right now. Please try again.'];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get grammar and pronunciation feedback
     */
    AIService.prototype.getFeedback = function (userInput, language) {
        return __awaiter(this, void 0, void 0, function () {
            var feedbackPrompt, response, feedback, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.apiKey) {
                            return [2 /*return*/, {
                                    corrections: [],
                                    suggestions: ['Keep practicing!'],
                                    pronunciation: [],
                                }];
                        }
                        feedbackPrompt = "Analyze this ".concat(language, " sentence: \"").concat(userInput, "\"\n    \nProvide:\n1. Grammar corrections (if any)\n2. Vocabulary suggestions for improvement\n3. Pronunciation tips\n\nFormat as JSON.");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.callAI([
                                { role: 'user', content: feedbackPrompt }
                            ])];
                    case 2:
                        response = _a.sent();
                        feedback = JSON.parse(response);
                        return [2 /*return*/, feedback];
                    case 3:
                        error_2 = _a.sent();
                        console.error('Feedback error:', error_2);
                        return [2 /*return*/, {
                                corrections: [],
                                suggestions: [],
                                pronunciation: [],
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create system prompt based on context
     */
    AIService.prototype.createSystemPrompt = function (context) {
        var language = context.language, scenario = context.scenario, userLevel = context.userLevel, tutorPersonality = context.tutorPersonality;
        return "You are a ".concat(language, " language tutor with a ").concat(tutorPersonality, " teaching style.\n\nYour student is at a ").concat(userLevel, " level and wants to practice the following scenario: ").concat(scenario, ".\n\nGuidelines:\n1. Respond primarily in ").concat(language, ", but provide English explanations when needed\n2. Adapt your language complexity to the ").concat(userLevel, " level\n3. Correct mistakes gently and provide better alternatives\n4. Ask follow-up questions to keep the conversation going\n5. Provide cultural context when relevant\n6. Be encouraging and supportive\n7. Use simple vocabulary for beginners, more complex for advanced\n8. Keep responses concise (2-3 sentences max)\n\nStart by greeting the student and introducing the scenario.");
    };
    /**
     * Call OpenAI or Claude API
     */
    AIService.prototype.callAI = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var messagesToSend;
            return __generator(this, function (_a) {
                messagesToSend = messages || this.conversationHistory;
                if (this.provider === 'openai') {
                    return [2 /*return*/, this.callOpenAI(messagesToSend)];
                }
                else {
                    return [2 /*return*/, this.callClaude(messagesToSend)];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Call OpenAI API
     */
    AIService.prototype.callOpenAI = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://api.openai.com/v1/chat/completions', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer ".concat(this.apiKey),
                            },
                            body: JSON.stringify({
                                model: 'gpt-3.5-turbo',
                                messages: messages,
                                temperature: 0.7,
                                max_tokens: 150,
                            }),
                        })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("OpenAI API error: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.choices[0].message.content];
                }
            });
        });
    };
    /**
     * Call Claude API (Anthropic)
     */
    AIService.prototype.callClaude = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var systemMessage, conversationMessages, response, data;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        systemMessage = ((_a = messages.find(function (m) { return m.role === 'system'; })) === null || _a === void 0 ? void 0 : _a.content) || '';
                        conversationMessages = messages.filter(function (m) { return m.role !== 'system'; });
                        return [4 /*yield*/, fetch('https://api.anthropic.com/v1/messages', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': this.apiKey,
                                    'anthropic-version': '2023-06-01',
                                },
                                body: JSON.stringify({
                                    model: 'claude-3-sonnet-20240229',
                                    max_tokens: 150,
                                    system: systemMessage,
                                    messages: conversationMessages,
                                }),
                            })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) {
                            throw new Error("Claude API error: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _b.sent();
                        return [2 /*return*/, data.content[0].text];
                }
            });
        });
    };
    /**
     * Mock response for testing without API key
     */
    AIService.prototype.getMockResponse = function (userMessage) {
        var responses = [
            "Bonjour! Comment allez-vous? (Hello! How are you?)",
            "Très bien! Continuez comme ça. (Very good! Keep it up.)",
            "Puis-je vous aider? (Can I help you?)",
            "C'est combien? (How much is it?)",
            "Excellent! Votre prononciation s'améliore. (Excellent! Your pronunciation is improving.)",
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    };
    /**
     * Get conversation history
     */
    AIService.prototype.getHistory = function () {
        return this.conversationHistory;
    };
    /**
     * Clear conversation history
     */
    AIService.prototype.clearHistory = function () {
        this.conversationHistory = [];
    };
    /**
     * Check if AI is available
     */
    AIService.prototype.isAvailable = function () {
        return !!this.apiKey;
    };
    return AIService;
}());
// Export singleton instance
exports.aiService = new AIService();
exports.default = exports.aiService;
