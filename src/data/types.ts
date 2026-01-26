export interface Vocabulary {
    word: string;
    translation: string;
    pronunciation?: string;
    audio?: string;
}

export interface Phrase {
    phrase: string;
    translation: string;
    context: string;
    pronunciation?: string;
}

export interface Grammar {
    topic: string;
    explanation: string;
    examples: string[];
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correct: number;
    explanation?: string;
}

export interface Lesson {
    id: string;
    day: number;
    language: 'french' | 'english' | 'spanish' | 'portuguese' | 'german' | 'italian' | 'russian' | 'chinese' | 'japanese' | 'arabic';
    level: 'beginner' | 'intermediate' | 'advanced';
    title: string;
    description: string;
    vocabulary: Vocabulary[];
    phrases: Phrase[];
    grammar?: Grammar;
    quiz: QuizQuestion[];
    roleplayScenario?: string;
    culturalNote?: string;
    xp: number;
    duration: string;
    completed?: boolean;
    locked?: boolean;
}

export type Language = 'french' | 'portuguese' | 'arabic' | 'english' | 'chinese' | 'russian' | 'spanish' | 'italian' | 'japanese' | 'german';
export type Level = 'beginner' | 'intermediate' | 'advanced';

