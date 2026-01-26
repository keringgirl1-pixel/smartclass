// AI Service for conversation and language feedback

interface AIMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface ConversationContext {
    language: string;
    scenario: string;
    userLevel: 'beginner' | 'intermediate' | 'advanced';
    tutorPersonality: string;
}

class AIService {
    private apiKey: string | null = null;
    private provider: 'openai' | 'claude' = 'openai';
    private conversationHistory: AIMessage[] = [];

    constructor() {
        this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || null;
        this.provider = (import.meta.env.VITE_AI_PROVIDER as 'openai' | 'claude') || 'openai';
    }

    /**
     * Start a new conversation with context
     */
    startConversation(context: ConversationContext): void {
        this.conversationHistory = [];

        // Create system prompt based on context
        const systemPrompt = this.createSystemPrompt(context);
        this.conversationHistory.push({
            role: 'system',
            content: systemPrompt,
        });
    }

    /**
     * Send a message and get AI response
     */
    async sendMessage(userMessage: string): Promise<string> {
        if (!this.apiKey) {
            // Return mock response if no API key
            return this.getMockResponse(userMessage);
        }

        // Add user message to history
        this.conversationHistory.push({
            role: 'user',
            content: userMessage,
        });

        try {
            const response = await this.callAI();

            // Add assistant response to history
            this.conversationHistory.push({
                role: 'assistant',
                content: response,
            });

            return response;
        } catch (error) {
            console.error('AI service error:', error);
            return 'I apologize, but I\'m having trouble right now. Please try again.';
        }
    }

    /**
     * Get grammar and pronunciation feedback
     */
    async getFeedback(userInput: string, language: string): Promise<{
        corrections: string[];
        suggestions: string[];
        pronunciation: string[];
    }> {
        if (!this.apiKey) {
            return {
                corrections: [],
                suggestions: ['Keep practicing!'],
                pronunciation: [],
            };
        }

        const feedbackPrompt = `Analyze this ${language} sentence: "${userInput}"
    
Provide:
1. Grammar corrections (if any)
2. Vocabulary suggestions for improvement
3. Pronunciation tips

Format as JSON.`;

        try {
            const response = await this.callAI([
                { role: 'user', content: feedbackPrompt }
            ]);

            // Parse JSON response
            const feedback = JSON.parse(response);
            return feedback;
        } catch (error) {
            console.error('Feedback error:', error);
            return {
                corrections: [],
                suggestions: [],
                pronunciation: [],
            };
        }
    }

    /**
     * Create system prompt based on context
     */
    private createSystemPrompt(context: ConversationContext): string {
        const { language, scenario, userLevel, tutorPersonality } = context;

        return `You are a ${language} language tutor with a ${tutorPersonality} teaching style.

Your student is at a ${userLevel} level and wants to practice the following scenario: ${scenario}.

Guidelines:
1. Respond primarily in ${language}, but provide English explanations when needed
2. Adapt your language complexity to the ${userLevel} level
3. Correct mistakes gently and provide better alternatives
4. Ask follow-up questions to keep the conversation going
5. Provide cultural context when relevant
6. Be encouraging and supportive
7. Use simple vocabulary for beginners, more complex for advanced
8. Keep responses concise (2-3 sentences max)

Start by greeting the student and introducing the scenario.`;
    }

    /**
     * Call OpenAI or Claude API
     */
    private async callAI(messages?: AIMessage[]): Promise<string> {
        const messagesToSend = messages || this.conversationHistory;

        if (this.provider === 'openai') {
            return this.callOpenAI(messagesToSend);
        } else {
            return this.callClaude(messagesToSend);
        }
    }

    /**
     * Call OpenAI API
     */
    private async callOpenAI(messages: AIMessage[]): Promise<string> {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: messages,
                temperature: 0.7,
                max_tokens: 150,
            }),
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    /**
     * Call Claude API (Anthropic)
     */
    private async callClaude(messages: AIMessage[]): Promise<string> {
        // Extract system message
        const systemMessage = messages.find(m => m.role === 'system')?.content || '';
        const conversationMessages = messages.filter(m => m.role !== 'system');

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey!,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
                model: 'claude-3-sonnet-20240229',
                max_tokens: 150,
                system: systemMessage,
                messages: conversationMessages,
            }),
        });

        if (!response.ok) {
            throw new Error(`Claude API error: ${response.status}`);
        }

        const data = await response.json();
        return data.content[0].text;
    }

    /**
     * Mock response for testing without API key
     */
    private getMockResponse(userMessage: string): string {
        const responses = [
            "Bonjour! Comment allez-vous? (Hello! How are you?)",
            "Très bien! Continuez comme ça. (Very good! Keep it up.)",
            "Puis-je vous aider? (Can I help you?)",
            "C'est combien? (How much is it?)",
            "Excellent! Votre prononciation s'améliore. (Excellent! Your pronunciation is improving.)",
        ];

        return responses[Math.floor(Math.random() * responses.length)];
    }

    /**
     * Get conversation history
     */
    getHistory(): AIMessage[] {
        return this.conversationHistory;
    }

    /**
     * Clear conversation history
     */
    clearHistory(): void {
        this.conversationHistory = [];
    }

    /**
     * Check if AI is available
     */
    isAvailable(): boolean {
        return !!this.apiKey;
    }
}

// Export singleton instance
export const aiService = new AIService();
export default aiService;
