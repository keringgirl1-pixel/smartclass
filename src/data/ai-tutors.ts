// AI Tutor data - personalities, avatars, and scenarios

export interface AITutor {
    id: string;
    name: string;
    avatar: string;
    personality: string;
    description: string;
    languages: string[];
    style: 'professional' | 'friendly' | 'casual' | 'strict';
    accent?: string;
}

export const aiTutors: AITutor[] = [
    {
        id: 'sophie',
        name: 'Sophie',
        avatar: '👩‍🏫',
        personality: 'Patient and encouraging',
        description: 'A friendly teacher who loves helping beginners',
        languages: ['french', 'english'],
        style: 'friendly',
        accent: 'Parisian French'
    },
    {
        id: 'carlos',
        name: 'Carlos',
        avatar: '👨‍💼',
        personality: 'Professional and structured',
        description: 'Business-focused tutor for professional conversations',
        languages: ['spanish', 'english', 'portuguese'],
        style: 'professional',
        accent: 'Latin American'
    },
    {
        id: 'amina',
        name: 'Amina',
        avatar: '👩‍💻',
        personality: 'Fun and energetic',
        description: 'Makes learning feel like chatting with a friend',
        languages: ['french', 'arabic', 'english'],
        style: 'casual',
        accent: 'West African French'
    },
    {
        id: 'david',
        name: 'David',
        avatar: '👨‍🎓',
        personality: 'Detail-oriented and thorough',
        description: 'Focuses on grammar and pronunciation accuracy',
        languages: ['english', 'german'],
        style: 'strict',
    },
    {
        id: 'maria',
        name: 'Maria',
        avatar: '👩‍🍳',
        personality: 'Warm and conversational',
        description: 'Teaches through real-life scenarios and stories',
        languages: ['spanish', 'italian', 'portuguese'],
        style: 'friendly',
        accent: 'European'
    },
    {
        id: 'wei',
        name: 'Wei',
        avatar: '👨‍🏫',
        personality: 'Systematic and clear',
        description: 'Great at explaining Chinese tones and characters',
        languages: ['chinese', 'english'],
        style: 'professional',
    },
    {
        id: 'yuki',
        name: 'Yuki',
        avatar: '👩‍🎨',
        personality: 'Creative and patient',
        description: 'Makes Japanese fun with cultural context',
        languages: ['japanese', 'english'],
        style: 'friendly',
    },
    {
        id: 'ivan',
        name: 'Ivan',
        avatar: '👨‍🔬',
        personality: 'Precise and methodical',
        description: 'Expert in Russian grammar and vocabulary building',
        languages: ['russian', 'english'],
        style: 'professional',
    },
];

export interface ConversationScenario {
    id: string;
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    icon: string;
    situation: string;
    goal: string;
    keywords: string[];
    persona?: string;
    mission?: string;
}

export const scenarios: ConversationScenario[] = [
    // Beginner Scenarios
    {
        id: 'greeting',
        title: 'First Conversation',
        description: 'Basic greetings and introductions',
        difficulty: 'beginner',
        icon: '👋',
        situation: 'Meeting someone for the first time',
        goal: 'Practice introducing yourself',
        keywords: ['hello', 'name', 'nice to meet you', 'how are you']
    },
    {
        id: 'market',
        title: 'At the Market',
        description: 'Shopping and bargaining',
        difficulty: 'beginner',
        icon: '🛍️',
        situation: 'Buying items at a local market',
        goal: 'Learn to ask prices and negotiate',
        keywords: ['price', 'how much', 'too expensive', 'discount']
    },
    {
        id: 'restaurant',
        title: 'Restaurant Order',
        description: 'Ordering food and drinks',
        difficulty: 'beginner',
        icon: '🍽️',
        situation: 'Dining at a restaurant',
        goal: 'Order a meal confidently',
        keywords: ['menu', 'order', 'water', 'bill', 'delicious']
    },
    {
        id: 'directions',
        title: 'Asking Directions',
        description: 'Finding your way around',
        difficulty: 'beginner',
        icon: '🗺️',
        situation: 'Lost in a new city',
        goal: 'Ask for and understand directions',
        keywords: ['where', 'left', 'right', 'straight', 'near']
    },

    // Intermediate Scenarios
    {
        id: 'hotel',
        title: 'Hotel Check-in',
        description: 'Checking into accommodation',
        difficulty: 'intermediate',
        icon: '🏨',
        situation: 'Arriving at a hotel',
        goal: 'Complete check-in process',
        keywords: ['reservation', 'room', 'key', 'breakfast', 'checkout']
    },
    {
        id: 'business',
        title: 'Business Meeting',
        description: 'Professional conversation',
        difficulty: 'intermediate',
        icon: '💼',
        situation: 'Meeting with business partners',
        goal: 'Discuss business matters professionally',
        keywords: ['proposal', 'contract', 'delivery', 'payment', 'agreement']
    },

    // Advanced Scenarios
    {
        id: 'negotiation',
        title: 'Trade Negotiation',
        description: 'Business deal discussion',
        difficulty: 'advanced',
        icon: '🤝',
        situation: 'Negotiating import/export terms',
        goal: 'Reach a business agreement',
        keywords: ['quantity', 'price', 'terms', 'delivery', 'contract']
    },

    // PERSONA-BASED SCENARIOS

    // Student Persona
    {
        id: 'thesis-defense',
        title: 'Defending My Thesis',
        description: 'Academic defense in French',
        difficulty: 'advanced',
        icon: '🎓',
        situation: 'Presenting your thesis to a professor',
        goal: 'Defend your research and impress the committee',
        keywords: ['research', 'methodology', 'results', 'conclusion', 'academic'],
        persona: 'Student',
        mission: 'Convince the Professor to grant you the study visa by successfully defending your thesis in French'
    },
    {
        id: 'scholarship-interview',
        title: 'The Scholarship Interview',
        description: 'Applying for study opportunity',
        difficulty: 'advanced',
        icon: '📚',
        situation: 'Interview with scholarship committee',
        goal: 'Secure the scholarship',
        keywords: ['motivation', 'goals', 'achievements', 'future plans', 'academic excellence'],
        persona: 'Student',
        mission: 'Convince the Professor to grant you the study visa'
    },

    // Government Worker Persona
    {
        id: 'minister-briefing',
        title: 'Briefing a Minister',
        description: 'Present trade deal to officials',
        difficulty: 'advanced',
        icon: '🏛️',
        situation: 'Preparing a briefing on a trade deal',
        goal: 'Clearly communicate diplomatic matters',
        keywords: ['policy', 'agreement', 'bilateral', 'protocol', 'diplomatic'],
        persona: 'Government Worker',
        mission: 'Brief the Minister on a complex trade deal with clarity and precision'
    },
    {
        id: 'border-protocol',
        title: 'The Border Protocol',
        description: 'Coordinate ECOWAS transit',
        difficulty: 'intermediate',
        icon: '🛂',
        situation: 'Working with customs officials',
        goal: 'Speed up border procedures',
        keywords: ['customs', 'documentation', 'clearance', 'ECOWAS', 'transit'],
        persona: 'Government Worker',
        mission: 'Coordinate with a customs official to speed up ECOWAS transit'
    },

    // Entrepreneur Persona
    {
        id: 'factory-floor',
        title: 'The Factory Floor',
        description: 'Negotiate bulk order in Mandarin',
        difficulty: 'advanced',
        icon: '🏭',
        situation: 'Meeting supplier in Guangzhou factory',
        goal: 'Negotiate better terms',
        keywords: ['units', 'discount', 'bulk order', 'quality', 'delivery time'],
        persona: 'Entrepreneur',
        mission: 'Negotiate a 15% discount on 1,000 units with a supplier in Guangzhou'
    },
    {
        id: 'logistics-call',
        title: 'Logistics Coordination',
        description: 'Organize international shipping',
        difficulty: 'intermediate',
        icon: '📦',
        situation: 'Coordinating with freight company',
        goal: 'Arrange efficient shipping',
        keywords: ['shipping', 'container', 'port', 'customs clearance', 'timeline'],
        persona: 'Entrepreneur',
        mission: 'Arrange cost-effective shipping for your product line'
    },
    {
        id: 'tech-pitch',
        title: 'The Tech Pitch',
        description: 'Present startup to investors',
        difficulty: 'advanced',
        icon: '💡',
        situation: 'Pitching your tech solution',
        goal: 'Secure investment',
        keywords: ['innovation', 'market', 'scalability', 'revenue', 'investment'],
        persona: 'Entrepreneur',
        mission: 'Convince investors to fund your African tech startup'
    },
];

export default { aiTutors, scenarios };
