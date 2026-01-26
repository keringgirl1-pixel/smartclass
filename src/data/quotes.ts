// Inspirational quotes for language learners

export interface Quote {
    text: string;
    author: string;
    category: 'goals' | 'dreams' | 'perseverance' | 'discipline' | 'achievement' | 'focus';
}

export const inspirationalQuotes: Quote[] = [
    // Goals
    {
        text: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupéry",
        category: 'goals'
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: 'goals'
    },
    {
        text: "Set your goals high, and don't stop till you get there.",
        author: "Bo Jackson",
        category: 'goals'
    },

    // Dreams & Achievement
    {
        text: "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney",
        category: 'dreams'
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        category: 'dreams'
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: 'achievement'
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: 'achievement'
    },

    // Perseverance
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        category: 'perseverance'
    },
    {
        text: "Perseverance is not a long race; it is many short races one after the other.",
        author: "Walter Elliot",
        category: 'perseverance'
    },
    {
        text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        author: "Vince Lombardi",
        category: 'perseverance'
    },
    {
        text: "Fall seven times, stand up eight.",
        author: "Japanese Proverb",
        category: 'perseverance'
    },
    {
        text: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius",
        category: 'perseverance'
    },

    // Discipline
    {
        text: "Discipline is the bridge between goals and accomplishment.",
        author: "Jim Rohn",
        category: 'discipline'
    },
    {
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
        category: 'discipline'
    },
    {
        text: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
        author: "Dwayne Johnson",
        category: 'discipline'
    },
    {
        text: "Small daily improvements over time lead to stunning results.",
        author: "Robin Sharma",
        category: 'discipline'
    },

    // Focus
    {
        text: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
        author: "Alexander Graham Bell",
        category: 'focus'
    },
    {
        text: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee",
        category: 'focus'
    },
    {
        text: "Focus on being productive instead of busy.",
        author: "Tim Ferriss",
        category: 'focus'
    },

    // Price of Success
    {
        text: "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
        author: "Vince Lombardi",
        category: 'achievement'
    },
    {
        text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell",
        category: 'achievement'
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett",
        category: 'achievement'
    },

    // Keep Moving Forward
    {
        text: "Even if you fall on your face, you're still moving forward.",
        author: "Victor Kiam",
        category: 'perseverance'
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        category: 'perseverance'
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: 'perseverance'
    },
    {
        text: "Success is stumbling from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
        category: 'perseverance'
    },

    // Language Learning Specific
    {
        text: "One language sets you in a corridor for life. Two languages open every door along the way.",
        author: "Frank Smith",
        category: 'dreams'
    },
    {
        text: "To have another language is to possess a second soul.",
        author: "Charlemagne",
        category: 'achievement'
    },
    {
        text: "The limits of my language mean the limits of my world.",
        author: "Ludwig Wittgenstein",
        category: 'goals'
    },
];

/**
 * Get a random quote
 */
export function getRandomQuote(): Quote {
    return inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
}

/**
 * Get quote by category
 */
export function getQuoteByCategory(category: Quote['category']): Quote {
    const filtered = inspirationalQuotes.filter(q => q.category === category);
    return filtered[Math.floor(Math.random() * filtered.length)];
}

/**
 * Get quote of the day (consistent for the day)
 */
export function getQuoteOfTheDay(): Quote {
    const today = new Date().toDateString();
    const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % inspirationalQuotes.length;
    return inspirationalQuotes[index];
}

export default inspirationalQuotes;
