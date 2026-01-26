import type { Lesson } from '../types';

export const frenchBeginnerLessons: Lesson[] = [
    // Week 1: Foundation
    {
        id: 'fr-b-01',
        day: 1,
        language: 'french',
        level: 'beginner',
        title: 'Greetings & Introductions',
        description: 'Learn how to greet people and introduce yourself in French',
        duration: '5 min',
        xp: 50,
        vocabulary: [
            { word: 'Bonjour', translation: 'Hello/Good morning', pronunciation: 'bon-ZHOOR' },
            { word: 'Bonsoir', translation: 'Good evening', pronunciation: 'bon-SWAHR' },
            { word: 'Salut', translation: 'Hi (informal)', pronunciation: 'sa-LOO' },
            { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'oh ruh-VWAHR' },
            { word: 'Merci', translation: 'Thank you', pronunciation: 'mehr-SEE' },
            { word: 'S\'il vous plaît', translation: 'Please', pronunciation: 'seel voo PLEH' },
        ],
        phrases: [
            {
                phrase: 'Comment allez-vous?',
                translation: 'How are you? (formal)',
                context: 'Use with elders or in business',
                pronunciation: 'ko-mahn tah-lay VOO',
            },
            {
                phrase: 'Je m\'appelle...',
                translation: 'My name is...',
                context: 'Introducing yourself',
                pronunciation: 'zhuh ma-PELL',
            },
            {
                phrase: 'Enchanté(e)',
                translation: 'Nice to meet you',
                context: 'After introduction',
                pronunciation: 'ahn-shahn-TAY',
            },
        ],
        quiz: [
            {
                question: 'How do you say "Hello" in French?',
                options: ['Salut', 'Bonjour', 'Merci', 'Au revoir'],
                correct: 1,
            },
            {
                question: 'What does "Merci" mean?',
                options: ['Please', 'Goodbye', 'Thank you', 'Hello'],
                correct: 2,
            },
            {
                question: 'Which greeting is more formal?',
                options: ['Salut', 'Comment allez-vous?', 'Ça va?', 'Coucou'],
                correct: 1,
            },
        ],
        culturalNote: 'In West Africa, greetings are very important. Always greet people before starting a conversation, especially elders.',
    },
    {
        id: 'fr-b-02',
        day: 2,
        language: 'french',
        level: 'beginner',
        title: 'Numbers 1-20',
        description: 'Master counting from 1 to 20 in French',
        duration: '6 min',
        xp: 50,
        vocabulary: [
            { word: 'un', translation: '1', pronunciation: 'uhn' },
            { word: 'deux', translation: '2', pronunciation: 'duh' },
            { word: 'trois', translation: '3', pronunciation: 'twah' },
            { word: 'quatre', translation: '4', pronunciation: 'KAH-truh' },
            { word: 'cinq', translation: '5', pronunciation: 'sank' },
            { word: 'six', translation: '6', pronunciation: 'sees' },
            { word: 'sept', translation: '7', pronunciation: 'set' },
            { word: 'huit', translation: '8', pronunciation: 'weet' },
            { word: 'neuf', translation: '9', pronunciation: 'nuhf' },
            { word: 'dix', translation: '10', pronunciation: 'dees' },
            { word: 'vingt', translation: '20', pronunciation: 'van' },
        ],
        phrases: [
            {
                phrase: 'Combien ça coûte?',
                translation: 'How much does it cost?',
                context: 'Shopping at the market',
                pronunciation: 'kom-bee-an sa KOOT',
            },
            {
                phrase: 'J\'ai ... ans',
                translation: 'I am ... years old',
                context: 'Telling your age',
                pronunciation: 'zhay ... ahn',
            },
        ],
        quiz: [
            {
                question: 'What is "5" in French?',
                options: ['quatre', 'cinq', 'six', 'sept'],
                correct: 1,
            },
            {
                question: 'How do you say "10"?',
                options: ['neuf', 'dix', 'onze', 'douze'],
                correct: 1,
            },
        ],
        culturalNote: 'Numbers are essential for market bargaining in West Africa. Practice counting money in CFA francs!',
    },
    {
        id: 'fr-b-03',
        day: 3,
        language: 'french',
        level: 'beginner',
        title: 'Colors & Basic Objects',
        description: 'Learn colors and common objects around you',
        duration: '7 min',
        xp: 50,
        vocabulary: [
            { word: 'rouge', translation: 'red', pronunciation: 'roozh' },
            { word: 'bleu', translation: 'blue', pronunciation: 'bluh' },
            { word: 'vert', translation: 'green', pronunciation: 'vehr' },
            { word: 'jaune', translation: 'yellow', pronunciation: 'zhohn' },
            { word: 'noir', translation: 'black', pronunciation: 'nwahr' },
            { word: 'blanc', translation: 'white', pronunciation: 'blahn' },
            { word: 'orange', translation: 'orange', pronunciation: 'oh-RAHNZH' },
        ],
        phrases: [
            {
                phrase: 'Quelle couleur?',
                translation: 'What color?',
                context: 'Asking about fabric or item color',
                pronunciation: 'kell koo-LUHR',
            },
            {
                phrase: 'C\'est beau',
                translation: 'It\'s beautiful',
                context: 'Complimenting items at market',
                pronunciation: 'say boh',
            },
        ],
        quiz: [
            {
                question: 'What color is "rouge"?',
                options: ['Blue', 'Red', 'Green', 'Yellow'],
                correct: 1,
            },
            {
                question: 'How do you say "white" in French?',
                options: ['noir', 'blanc', 'vert', 'bleu'],
                correct: 1,
            },
        ],
        culturalNote: 'West African fabrics are known for vibrant colors. Knowing color names helps when shopping for traditional clothing!',
    },
    {
        id: 'fr-b-04',
        day: 4,
        language: 'french',
        level: 'beginner',
        title: 'Family Members',
        description: 'Talk about your family in French',
        duration: '6 min',
        xp: 50,
        vocabulary: [
            { word: 'père', translation: 'father', pronunciation: 'pehr' },
            { word: 'mère', translation: 'mother', pronunciation: 'mehr' },
            { word: 'frère', translation: 'brother', pronunciation: 'frehr' },
            { word: 'sœur', translation: 'sister', pronunciation: 'suhr' },
            { word: 'enfant', translation: 'child', pronunciation: 'ahn-FAHN' },
            { word: 'famille', translation: 'family', pronunciation: 'fa-MEE' },
        ],
        phrases: [
            {
                phrase: 'Voici ma famille',
                translation: 'This is my family',
                context: 'Introducing family',
                pronunciation: 'vwa-SEE ma fa-MEE',
            },
        ],
        quiz: [
            {
                question: 'What does "mère" mean?',
                options: ['Father', 'Mother', 'Sister', 'Brother'],
                correct: 1,
            },
        ],
        culturalNote: 'Family is central in West African culture. Extended family is very important!',
    },
    {
        id: 'fr-b-05',
        day: 5,
        language: 'french',
        level: 'beginner',
        title: 'Days of the Week',
        description: 'Learn the days of the week',
        duration: '5 min',
        xp: 50,
        vocabulary: [
            { word: 'lundi', translation: 'Monday', pronunciation: 'luhn-DEE' },
            { word: 'mardi', translation: 'Tuesday', pronunciation: 'mar-DEE' },
            { word: 'mercredi', translation: 'Wednesday', pronunciation: 'mehr-kruh-DEE' },
            { word: 'jeudi', translation: 'Thursday', pronunciation: 'zhuh-DEE' },
            { word: 'vendredi', translation: 'Friday', pronunciation: 'vahn-druh-DEE' },
            { word: 'samedi', translation: 'Saturday', pronunciation: 'sam-DEE' },
            { word: 'dimanche', translation: 'Sunday', pronunciation: 'dee-MAHNSH' },
        ],
        phrases: [
            {
                phrase: 'Quel jour sommes-nous?',
                translation: 'What day is it?',
                context: 'Asking the day',
                pronunciation: 'kell zhoor som NOO',
            },
        ],
        quiz: [
            {
                question: 'What is "Friday" in French?',
                options: ['jeudi', 'vendredi', 'samedi', 'dimanche'],
                correct: 1,
            },
        ],
    },
];

// Generate remaining 25 days with similar structure
// Days 6-30 would follow the curriculum plan
export default frenchBeginnerLessons;
