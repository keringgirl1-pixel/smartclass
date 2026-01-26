"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBeginnerLessons = void 0;
// COMPLETE 30-day beginner courses for English and French
// Other languages have sample lessons
exports.allBeginnerLessons = [
    // ========== FRENCH - COMPLETE 30 DAYS ==========
    // WEEK 1: Foundation
    {
        id: 'fr-b-01', day: 1, language: 'french', level: 'beginner', title: 'Greetings & Introductions', description: 'Learn how to greet people and introduce yourself', duration: '5 min', xp: 50,
        vocabulary: [
            { word: 'Bonjour', translation: 'Hello/Good morning', pronunciation: 'bon-ZHOOR' },
            { word: 'Bonsoir', translation: 'Good evening', pronunciation: 'bon-SWAHR' },
            { word: 'Salut', translation: 'Hi (informal)', pronunciation: 'sa-LOO' },
            { word: 'Merci', translation: 'Thank you', pronunciation: 'mehr-SEE' },
            { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'oh ruh-VWAHR' },
        ],
        phrases: [
            { phrase: 'Comment allez-vous?', translation: 'How are you? (formal)', context: 'Formal greeting' },
            { phrase: 'Je m\'appelle...', translation: 'My name is...', context: 'Introduction' },
            { phrase: 'Enchanté(e)', translation: 'Nice to meet you', context: 'After introduction' },
        ],
        quiz: [
            { question: 'How do you say "Hello"?', options: ['Salut', 'Bonjour', 'Merci', 'Au revoir'], correct: 1 },
            { question: 'What does "Merci" mean?', options: ['Please', 'Goodbye', 'Thank you', 'Hello'], correct: 2 },
        ],
        culturalNote: 'In West Africa, greetings are very important. Always greet before speaking!',
    },
    {
        id: 'fr-b-02', day: 2, language: 'french', level: 'beginner', title: 'Numbers 1-20', description: 'Master counting from 1 to 20', duration: '6 min', xp: 50,
        vocabulary: [
            { word: 'un', translation: '1' }, { word: 'deux', translation: '2' }, { word: 'trois', translation: '3' },
            { word: 'quatre', translation: '4' }, { word: 'cinq', translation: '5' }, { word: 'six', translation: '6' },
            { word: 'sept', translation: '7' }, { word: 'huit', translation: '8' }, { word: 'neuf', translation: '9' },
            { word: 'dix', translation: '10' }, { word: 'vingt', translation: '20' },
        ],
        phrases: [
            { phrase: 'Combien ça coûte?', translation: 'How much?', context: 'Shopping' },
            { phrase: 'J\'ai ... ans', translation: 'I am ... years old', context: 'Age' },
        ],
        quiz: [
            { question: 'What is "5" in French?', options: ['quatre', 'cinq', 'six', 'sept'], correct: 1 },
            { question: 'How do you say "10"?', options: ['neuf', 'dix', 'onze', 'douze'], correct: 1 },
        ],
    },
    {
        id: 'fr-b-03', day: 3, language: 'french', level: 'beginner', title: 'Colors & Objects', description: 'Learn colors and common objects', duration: '7 min', xp: 50,
        vocabulary: [
            { word: 'rouge', translation: 'red' }, { word: 'bleu', translation: 'blue' }, { word: 'vert', translation: 'green' },
            { word: 'jaune', translation: 'yellow' }, { word: 'noir', translation: 'black' }, { word: 'blanc', translation: 'white' },
        ],
        phrases: [{ phrase: 'Quelle couleur?', translation: 'What color?', context: 'Shopping' }],
        quiz: [{ question: 'What color is "rouge"?', options: ['Blue', 'Red', 'Green', 'Yellow'], correct: 1 }],
    },
    {
        id: 'fr-b-04', day: 4, language: 'french', level: 'beginner', title: 'Family Members', description: 'Talk about your family', duration: '6 min', xp: 50,
        vocabulary: [
            { word: 'père', translation: 'father' }, { word: 'mère', translation: 'mother' },
            { word: 'frère', translation: 'brother' }, { word: 'sœur', translation: 'sister' },
            { word: 'famille', translation: 'family' }, { word: 'enfant', translation: 'child' },
        ],
        phrases: [{ phrase: 'Voici ma famille', translation: 'This is my family', context: 'Introduction' }],
        quiz: [{ question: 'What does "mère" mean?', options: ['Father', 'Mother', 'Sister', 'Brother'], correct: 1 }],
    },
    {
        id: 'fr-b-05', day: 5, language: 'french', level: 'beginner', title: 'Days of the Week', description: 'Learn the days', duration: '5 min', xp: 50,
        vocabulary: [
            { word: 'lundi', translation: 'Monday' }, { word: 'mardi', translation: 'Tuesday' },
            { word: 'mercredi', translation: 'Wednesday' }, { word: 'jeudi', translation: 'Thursday' },
            { word: 'vendredi', translation: 'Friday' }, { word: 'samedi', translation: 'Saturday' },
            { word: 'dimanche', translation: 'Sunday' },
        ],
        phrases: [{ phrase: 'Quel jour?', translation: 'What day?', context: 'Asking' }],
        quiz: [{ question: 'What is Friday?', options: ['jeudi', 'vendredi', 'samedi', 'dimanche'], correct: 1 }],
    },
    {
        id: 'fr-b-06', day: 6, language: 'french', level: 'beginner', title: 'Months & Seasons', description: 'Learn months and seasons', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'janvier', translation: 'January' }, { word: 'février', translation: 'February' },
            { word: 'printemps', translation: 'spring' }, { word: 'été', translation: 'summer' },
            { word: 'automne', translation: 'fall' }, { word: 'hiver', translation: 'winter' },
        ],
        phrases: [{ phrase: 'Quelle saison?', translation: 'What season?', context: 'Weather' }],
        quiz: [{ question: 'What is "summer"?', options: ['printemps', 'été', 'automne', 'hiver'], correct: 1 }],
    },
    {
        id: 'fr-b-07', day: 7, language: 'french', level: 'beginner', title: 'Week 1 Review', description: 'Review everything learned', duration: '10 min', xp: 75,
        vocabulary: [
            { word: 'révision', translation: 'review' }, { word: 'pratique', translation: 'practice' },
        ],
        phrases: [{ phrase: 'Je comprends', translation: 'I understand', context: 'Learning' }],
        quiz: [
            { question: 'How do you say "Thank you"?', options: ['Bonjour', 'Merci', 'Au revoir', 'Salut'], correct: 1 },
            { question: 'What is "3"?', options: ['deux', 'trois', 'quatre', 'cinq'], correct: 1 },
        ],
    },
    // WEEK 2: Daily Life
    {
        id: 'fr-b-08', day: 8, language: 'french', level: 'beginner', title: 'Food & Drinks', description: 'Common foods and beverages', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'pain', translation: 'bread' }, { word: 'eau', translation: 'water' },
            { word: 'riz', translation: 'rice' }, { word: 'poulet', translation: 'chicken' },
            { word: 'poisson', translation: 'fish' }, { word: 'café', translation: 'coffee' },
        ],
        phrases: [
            { phrase: 'Je voudrais...', translation: 'I would like...', context: 'Ordering' },
            { phrase: 'L\'addition, s\'il vous plaît', translation: 'The bill, please', context: 'Restaurant' },
        ],
        quiz: [{ question: '"Poulet" means?', options: ['Fish', 'Chicken', 'Rice', 'Bread'], correct: 1 }],
    },
    {
        id: 'fr-b-09', day: 9, language: 'french', level: 'beginner', title: 'At the Restaurant', description: 'Order food and drinks', duration: '8 min', xp: 65,
        vocabulary: [
            { word: 'menu', translation: 'menu' }, { word: 'entrée', translation: 'appetizer' },
            { word: 'plat', translation: 'main course' }, { word: 'dessert', translation: 'dessert' },
        ],
        phrases: [{ phrase: 'C\'est délicieux', translation: 'It\'s delicious', context: 'Compliment' }],
        quiz: [{ question: 'How do you ask for the bill?', options: ['Le menu', 'L\'addition', 'Le plat', 'L\'entrée'], correct: 1 }],
    },
    {
        id: 'fr-b-10', day: 10, language: 'french', level: 'beginner', title: 'Shopping Basics', description: 'Essential shopping phrases', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'magasin', translation: 'store' }, { word: 'marché', translation: 'market' },
            { word: 'acheter', translation: 'to buy' }, { word: 'vendre', translation: 'to sell' },
        ],
        phrases: [{ phrase: 'Je cherche...', translation: 'I\'m looking for...', context: 'Shopping' }],
        quiz: [{ question: '"Acheter" means?', options: ['To sell', 'To buy', 'Store', 'Market'], correct: 1 }],
    },
    {
        id: 'fr-b-11', day: 11, language: 'french', level: 'beginner', title: 'Clothing', description: 'Learn clothing vocabulary', duration: '8 min', xp: 65,
        vocabulary: [
            { word: 'chemise', translation: 'shirt' }, { word: 'pantalon', translation: 'pants' },
            { word: 'robe', translation: 'dress' }, { word: 'chaussures', translation: 'shoes' },
        ],
        phrases: [{ phrase: 'Quelle taille?', translation: 'What size?', context: 'Shopping' }],
        quiz: [{ question: '"Chaussures" means?', options: ['Shirt', 'Pants', 'Shoes', 'Dress'], correct: 2 }],
    },
    {
        id: 'fr-b-12', day: 12, language: 'french', level: 'beginner', title: 'Telling Time', description: 'Learn to tell time', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'heure', translation: 'hour/time' }, { word: 'minute', translation: 'minute' },
            { word: 'maintenant', translation: 'now' }, { word: 'tard', translation: 'late' },
        ],
        phrases: [{ phrase: 'Quelle heure est-il?', translation: 'What time is it?', context: 'Time' }],
        quiz: [{ question: 'How do you ask the time?', options: ['Quel jour?', 'Quelle heure?', 'Combien?', 'Où?'], correct: 1 }],
    },
    {
        id: 'fr-b-13', day: 13, language: 'french', level: 'beginner', title: 'Weather', description: 'Talk about weather', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'soleil', translation: 'sun' }, { word: 'pluie', translation: 'rain' },
            { word: 'chaud', translation: 'hot' }, { word: 'froid', translation: 'cold' },
        ],
        phrases: [{ phrase: 'Quel temps fait-il?', translation: 'What\'s the weather?', context: 'Weather' }],
        quiz: [{ question: '"Chaud" means?', options: ['Cold', 'Hot', 'Rain', 'Sun'], correct: 1 }],
    },
    {
        id: 'fr-b-14', day: 14, language: 'french', level: 'beginner', title: 'Week 2 Review', description: 'Review daily life vocabulary', duration: '10 min', xp: 75,
        vocabulary: [{ word: 'quotidien', translation: 'daily' }],
        phrases: [{ phrase: 'Je sais', translation: 'I know', context: 'Knowledge' }],
        quiz: [
            { question: '"Poulet" is?', options: ['Fish', 'Chicken', 'Bread', 'Water'], correct: 1 },
            { question: 'What\'s "to buy"?', options: ['vendre', 'acheter', 'magasin', 'marché'], correct: 1 },
        ],
    },
    // WEEK 3: Getting Around
    {
        id: 'fr-b-15', day: 15, language: 'french', level: 'beginner', title: 'Directions', description: 'Ask for and give directions', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'gauche', translation: 'left' }, { word: 'droite', translation: 'right' },
            { word: 'tout droit', translation: 'straight' }, { word: 'près', translation: 'near' },
        ],
        phrases: [{ phrase: 'Où est...?', translation: 'Where is...?', context: 'Directions' }],
        quiz: [{ question: '"Gauche" means?', options: ['Right', 'Left', 'Straight', 'Near'], correct: 1 }],
    },
    {
        id: 'fr-b-16', day: 16, language: 'french', level: 'beginner', title: 'Transportation', description: 'Modes of transport', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'voiture', translation: 'car' }, { word: 'bus', translation: 'bus' },
            { word: 'taxi', translation: 'taxi' }, { word: 'vélo', translation: 'bicycle' },
        ],
        phrases: [{ phrase: 'Je vais en...', translation: 'I go by...', context: 'Transport' }],
        quiz: [{ question: '"Voiture" means?', options: ['Bus', 'Car', 'Taxi', 'Bicycle'], correct: 1 }],
    },
    {
        id: 'fr-b-17', day: 17, language: 'french', level: 'beginner', title: 'At the Market', description: 'Shopping at local markets', duration: '9 min', xp: 75,
        vocabulary: [
            { word: 'marché', translation: 'market' }, { word: 'vendeur', translation: 'seller' },
            { word: 'prix', translation: 'price' }, { word: 'qualité', translation: 'quality' },
        ],
        phrases: [
            { phrase: 'C\'est combien?', translation: 'How much is it?', context: 'Market' },
            { phrase: 'C\'est trop cher', translation: 'It\'s too expensive', context: 'Bargaining' },
        ],
        quiz: [{ question: 'How do you say "price"?', options: ['marché', 'vendeur', 'prix', 'qualité'], correct: 2 }],
        roleplayScenario: 'market',
    },
    {
        id: 'fr-b-18', day: 18, language: 'french', level: 'beginner', title: 'Money & Prices', description: 'Handle money transactions', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'argent', translation: 'money' }, { word: 'franc CFA', translation: 'CFA franc' },
            { word: 'cher', translation: 'expensive' }, { word: 'bon marché', translation: 'cheap' },
        ],
        phrases: [{ phrase: 'Vous acceptez les cartes?', translation: 'Do you accept cards?', context: 'Payment' }],
        quiz: [{ question: '"Bon marché" means?', options: ['Expensive', 'Cheap', 'Money', 'Price'], correct: 1 }],
    },
    {
        id: 'fr-b-19', day: 19, language: 'french', level: 'beginner', title: 'Asking Questions', description: 'Master question words', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'qui', translation: 'who' }, { word: 'quoi', translation: 'what' },
            { word: 'où', translation: 'where' }, { word: 'quand', translation: 'when' },
            { word: 'pourquoi', translation: 'why' }, { word: 'comment', translation: 'how' },
        ],
        phrases: [{ phrase: 'Pourquoi pas?', translation: 'Why not?', context: 'Question' }],
        quiz: [{ question: '"Où" means?', options: ['Who', 'What', 'Where', 'When'], correct: 2 }],
    },
    {
        id: 'fr-b-20', day: 20, language: 'french', level: 'beginner', title: 'Common Verbs', description: 'Essential action words', duration: '9 min', xp: 75,
        vocabulary: [
            { word: 'aller', translation: 'to go' }, { word: 'venir', translation: 'to come' },
            { word: 'faire', translation: 'to do/make' }, { word: 'avoir', translation: 'to have' },
        ],
        phrases: [{ phrase: 'Je vais faire...', translation: 'I\'m going to do...', context: 'Future' }],
        quiz: [{ question: '"Aller" means?', options: ['To come', 'To go', 'To do', 'To have'], correct: 1 }],
    },
    {
        id: 'fr-b-21', day: 21, language: 'french', level: 'beginner', title: 'Week 3 Review', description: 'Review getting around', duration: '10 min', xp: 80,
        vocabulary: [{ word: 'voyager', translation: 'to travel' }],
        phrases: [{ phrase: 'Je peux vous aider?', translation: 'Can I help you?', context: 'Service' }],
        quiz: [
            { question: 'What\'s "left"?', options: ['droite', 'gauche', 'tout droit', 'près'], correct: 1 },
            { question: '"Où" means?', options: ['Who', 'What', 'Where', 'When'], correct: 2 },
        ],
    },
    // WEEK 4: Business Basics
    {
        id: 'fr-b-22', day: 22, language: 'french', level: 'beginner', title: 'Market Bargaining', description: 'Negotiate like a local', duration: '10 min', xp: 100,
        vocabulary: [
            { word: 'négocier', translation: 'to negotiate' }, { word: 'réduction', translation: 'discount' },
            { word: 'meilleur prix', translation: 'best price' },
        ],
        phrases: [
            { phrase: 'Vous pouvez baisser le prix?', translation: 'Can you lower the price?', context: 'Bargaining' },
            { phrase: 'C\'est mon dernier prix', translation: 'That\'s my final price', context: 'Selling' },
        ],
        quiz: [{ question: 'How do you ask for a discount?', options: ['C\'est cher', 'Réduction?', 'Merci', 'Au revoir'], correct: 1 }],
        roleplayScenario: 'market',
    },
    {
        id: 'fr-b-23', day: 23, language: 'french', level: 'beginner', title: 'Business Greetings', description: 'Professional introductions', duration: '8 min', xp: 80,
        vocabulary: [
            { word: 'entreprise', translation: 'business/company' }, { word: 'travail', translation: 'work' },
            { word: 'patron', translation: 'boss' }, { word: 'employé', translation: 'employee' },
        ],
        phrases: [{ phrase: 'Ravi de vous rencontrer', translation: 'Pleased to meet you', context: 'Business' }],
        quiz: [{ question: '"Entreprise" means?', options: ['Work', 'Boss', 'Company', 'Employee'], correct: 2 }],
    },
    {
        id: 'fr-b-24', day: 24, language: 'french', level: 'beginner', title: 'Trade Vocabulary', description: 'Essential business terms', duration: '9 min', xp: 90,
        vocabulary: [
            { word: 'import', translation: 'import' }, { word: 'export', translation: 'export' },
            { word: 'commande', translation: 'order' }, { word: 'livraison', translation: 'delivery' },
        ],
        phrases: [{ phrase: 'Je voudrais passer une commande', translation: 'I\'d like to place an order', context: 'Business' }],
        quiz: [{ question: '"Livraison" means?', options: ['Import', 'Export', 'Order', 'Delivery'], correct: 3 }],
    },
    {
        id: 'fr-b-25', day: 25, language: 'french', level: 'beginner', title: 'ECOWAS Introduction', description: 'Learn about West African trade', duration: '10 min', xp: 100,
        vocabulary: [
            { word: 'CEDEAO', translation: 'ECOWAS' }, { word: 'commerce', translation: 'trade' },
            { word: 'frontière', translation: 'border' }, { word: 'douane', translation: 'customs' },
        ],
        phrases: [{ phrase: 'Zone de libre-échange', translation: 'Free trade zone', context: 'ECOWAS' }],
        quiz: [{ question: '"Douane" means?', options: ['Border', 'Customs', 'Trade', 'Export'], correct: 1 }],
        culturalNote: 'ECOWAS facilitates trade between 15 West African countries!',
    },
    {
        id: 'fr-b-26', day: 26, language: 'french', level: 'beginner', title: 'Cross-Border Terms', description: 'International trade vocabulary', duration: '9 min', xp: 90,
        vocabulary: [
            { word: 'visa', translation: 'visa' }, { word: 'passeport', translation: 'passport' },
            { word: 'document', translation: 'document' }, { word: 'permis', translation: 'permit' },
        ],
        phrases: [{ phrase: 'Avez-vous les documents?', translation: 'Do you have the documents?', context: 'Border' }],
        quiz: [{ question: '"Passeport" means?', options: ['Visa', 'Passport', 'Document', 'Permit'], correct: 1 }],
    },
    {
        id: 'fr-b-27', day: 27, language: 'french', level: 'beginner', title: 'Large Numbers', description: 'Count hundreds and thousands', duration: '8 min', xp: 80,
        vocabulary: [
            { word: 'cent', translation: '100' }, { word: 'mille', translation: '1000' },
            { word: 'million', translation: 'million' },
        ],
        phrases: [{ phrase: 'Combien en tout?', translation: 'How much in total?', context: 'Business' }],
        quiz: [{ question: '"Mille" means?', options: ['100', '1000', 'Million', '10'], correct: 1 }],
    },
    {
        id: 'fr-b-28', day: 28, language: 'french', level: 'beginner', title: 'Business Phrases', description: 'Professional communication', duration: '9 min', xp: 90,
        vocabulary: [
            { word: 'accord', translation: 'agreement' }, { word: 'contrat', translation: 'contract' },
            { word: 'prix', translation: 'price' }, { word: 'quantité', translation: 'quantity' },
        ],
        phrases: [{ phrase: 'Nous avons un accord', translation: 'We have a deal', context: 'Business' }],
        quiz: [{ question: '"Contrat" means?', options: ['Agreement', 'Contract', 'Price', 'Quantity'], correct: 1 }],
    },
    {
        id: 'fr-b-29', day: 29, language: 'french', level: 'beginner', title: 'Final Review', description: 'Review all lessons', duration: '15 min', xp: 100,
        vocabulary: [{ word: 'révision finale', translation: 'final review' }],
        phrases: [{ phrase: 'Je suis prêt', translation: 'I\'m ready', context: 'Confidence' }],
        quiz: [
            { question: 'How do you say "Hello"?', options: ['Salut', 'Bonjour', 'Merci', 'Au revoir'], correct: 1 },
            { question: '"Acheter" means?', options: ['To sell', 'To buy', 'Store', 'Market'], correct: 1 },
            { question: 'What\'s "left"?', options: ['droite', 'gauche', 'tout droit', 'près'], correct: 1 },
        ],
    },
    {
        id: 'fr-b-30', day: 30, language: 'french', level: 'beginner', title: 'Beginner Assessment', description: 'Test your French skills', duration: '20 min', xp: 150,
        vocabulary: [{ word: 'examen', translation: 'exam' }, { word: 'succès', translation: 'success' }],
        phrases: [{ phrase: 'Je peux parler français!', translation: 'I can speak French!', context: 'Celebration' }],
        quiz: [
            { question: 'Translate: "Thank you very much"', options: ['Merci beaucoup', 'Au revoir', 'S\'il vous plaît', 'Bonjour'], correct: 0 },
            { question: 'What is "to negotiate"?', options: ['acheter', 'vendre', 'négocier', 'parler'], correct: 2 },
            { question: '"CEDEAO" refers to?', options: ['A city', 'ECOWAS', 'A language', 'A market'], correct: 1 },
        ],
        culturalNote: 'Congratulations! You\'ve completed the French beginner course!',
    },
    // ========== ENGLISH - COMPLETE 30 DAYS ==========
    // WEEK 1: Foundation
    {
        id: 'en-b-01', day: 1, language: 'english', level: 'beginner', title: 'Greetings & Introductions', description: 'Learn basic English greetings', duration: '5 min', xp: 50,
        vocabulary: [
            { word: 'Hello', translation: 'Bonjour' }, { word: 'Good morning', translation: 'Bon matin' },
            { word: 'Thank you', translation: 'Merci' }, { word: 'Goodbye', translation: 'Au revoir' },
        ],
        phrases: [
            { phrase: 'How are you?', translation: 'Comment allez-vous?', context: 'Greeting' },
            { phrase: 'My name is...', translation: 'Je m\'appelle...', context: 'Introduction' },
        ],
        quiz: [{ question: 'How do you greet someone?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 1 }],
    },
    {
        id: 'en-b-02', day: 2, language: 'english', level: 'beginner', title: 'Numbers 1-20', description: 'Count from 1 to 20', duration: '6 min', xp: 50,
        vocabulary: [
            { word: 'one', translation: 'un' }, { word: 'two', translation: 'deux' }, { word: 'three', translation: 'trois' },
            { word: 'five', translation: 'cinq' }, { word: 'ten', translation: 'dix' }, { word: 'twenty', translation: 'vingt' },
        ],
        phrases: [{ phrase: 'How much?', translation: 'Combien?', context: 'Shopping' }],
        quiz: [{ question: 'What is "5"?', options: ['four', 'five', 'six', 'seven'], correct: 1 }],
    },
    {
        id: 'en-b-03', day: 3, language: 'english', level: 'beginner', title: 'Colors', description: 'Learn basic colors', duration: '5 min', xp: 50,
        vocabulary: [
            { word: 'red', translation: 'rouge' }, { word: 'blue', translation: 'bleu' },
            { word: 'green', translation: 'vert' }, { word: 'yellow', translation: 'jaune' },
        ],
        phrases: [{ phrase: 'What color?', translation: 'Quelle couleur?', context: 'Description' }],
        quiz: [{ question: 'What is "red"?', options: ['bleu', 'rouge', 'vert', 'jaune'], correct: 1 }],
    },
    {
        id: 'en-b-04', day: 4, language: 'english', level: 'beginner', title: 'Family', description: 'Family members', duration: '6 min', xp: 50,
        vocabulary: [
            { word: 'father', translation: 'père' }, { word: 'mother', translation: 'mère' },
            { word: 'brother', translation: 'frère' }, { word: 'sister', translation: 'sœur' },
        ],
        phrases: [{ phrase: 'This is my family', translation: 'Voici ma famille', context: 'Introduction' }],
        quiz: [{ question: 'What is "mother"?', options: ['père', 'mère', 'frère', 'sœur'], correct: 1 }],
    },
    {
        id: 'en-b-05', day: 5, language: 'english', level: 'beginner', title: 'Days of the Week', description: 'Learn the days', duration: '5 min', xp: 50,
        vocabulary: [
            { word: 'Monday', translation: 'lundi' }, { word: 'Tuesday', translation: 'mardi' },
            { word: 'Wednesday', translation: 'mercredi' }, { word: 'Friday', translation: 'vendredi' },
        ],
        phrases: [{ phrase: 'What day is it?', translation: 'Quel jour?', context: 'Time' }],
        quiz: [{ question: 'What is "Friday"?', options: ['lundi', 'mardi', 'vendredi', 'samedi'], correct: 2 }],
    },
    {
        id: 'en-b-06', day: 6, language: 'english', level: 'beginner', title: 'Months & Seasons', description: 'Months and seasons', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'January', translation: 'janvier' }, { word: 'spring', translation: 'printemps' },
            { word: 'summer', translation: 'été' }, { word: 'winter', translation: 'hiver' },
        ],
        phrases: [{ phrase: 'What season?', translation: 'Quelle saison?', context: 'Weather' }],
        quiz: [{ question: 'What is "summer"?', options: ['printemps', 'été', 'automne', 'hiver'], correct: 1 }],
    },
    {
        id: 'en-b-07', day: 7, language: 'english', level: 'beginner', title: 'Week 1 Review', description: 'Review basics', duration: '10 min', xp: 75,
        vocabulary: [{ word: 'review', translation: 'révision' }],
        phrases: [{ phrase: 'I understand', translation: 'Je comprends', context: 'Learning' }],
        quiz: [
            { question: 'How do you say "Thank you"?', options: ['Hello', 'Thank you', 'Goodbye', 'Please'], correct: 1 },
        ],
    },
    // WEEK 2: Daily Life  
    {
        id: 'en-b-08', day: 8, language: 'english', level: 'beginner', title: 'Food & Drinks', description: 'Common foods', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'bread', translation: 'pain' }, { word: 'water', translation: 'eau' },
            { word: 'rice', translation: 'riz' }, { word: 'chicken', translation: 'poulet' },
        ],
        phrases: [{ phrase: 'I would like...', translation: 'Je voudrais...', context: 'Ordering' }],
        quiz: [{ question: 'What is "chicken"?', options: ['pain', 'poulet', 'riz', 'eau'], correct: 1 }],
    },
    {
        id: 'en-b-09', day: 9, language: 'english', level: 'beginner', title: 'At the Restaurant', description: 'Order food', duration: '8 min', xp: 65,
        vocabulary: [
            { word: 'menu', translation: 'menu' }, { word: 'appetizer', translation: 'entrée' },
            { word: 'dessert', translation: 'dessert' },
        ],
        phrases: [{ phrase: 'The bill, please', translation: 'L\'addition, s\'il vous plaît', context: 'Payment' }],
        quiz: [{ question: 'How do you ask for the bill?', options: ['Menu', 'Bill', 'Food', 'Drink'], correct: 1 }],
    },
    {
        id: 'en-b-10', day: 10, language: 'english', level: 'beginner', title: 'Shopping', description: 'Shopping phrases', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'store', translation: 'magasin' }, { word: 'market', translation: 'marché' },
            { word: 'buy', translation: 'acheter' }, { word: 'sell', translation: 'vendre' },
        ],
        phrases: [{ phrase: 'I\'m looking for...', translation: 'Je cherche...', context: 'Shopping' }],
        quiz: [{ question: 'What is "buy"?', options: ['vendre', 'acheter', 'magasin', 'marché'], correct: 1 }],
    },
    {
        id: 'en-b-11', day: 11, language: 'english', level: 'beginner', title: 'Clothing', description: 'Clothes vocabulary', duration: '8 min', xp: 65,
        vocabulary: [
            { word: 'shirt', translation: 'chemise' }, { word: 'pants', translation: 'pantalon' },
            { word: 'shoes', translation: 'chaussures' }, { word: 'dress', translation: 'robe' },
        ],
        phrases: [{ phrase: 'What size?', translation: 'Quelle taille?', context: 'Shopping' }],
        quiz: [{ question: 'What is "shoes"?', options: ['chemise', 'pantalon', 'chaussures', 'robe'], correct: 2 }],
    },
    {
        id: 'en-b-12', day: 12, language: 'english', level: 'beginner', title: 'Telling Time', description: 'Learn to tell time', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'hour', translation: 'heure' }, { word: 'minute', translation: 'minute' },
            { word: 'now', translation: 'maintenant' }, { word: 'late', translation: 'tard' },
        ],
        phrases: [{ phrase: 'What time is it?', translation: 'Quelle heure est-il?', context: 'Time' }],
        quiz: [{ question: 'How do you ask the time?', options: ['What day?', 'What time?', 'How much?', 'Where?'], correct: 1 }],
    },
    {
        id: 'en-b-13', day: 13, language: 'english', level: 'beginner', title: 'Weather', description: 'Weather vocabulary', duration: '7 min', xp: 60,
        vocabulary: [
            { word: 'sun', translation: 'soleil' }, { word: 'rain', translation: 'pluie' },
            { word: 'hot', translation: 'chaud' }, { word: 'cold', translation: 'froid' },
        ],
        phrases: [{ phrase: 'What\'s the weather?', translation: 'Quel temps fait-il?', context: 'Weather' }],
        quiz: [{ question: 'What is "hot"?', options: ['froid', 'chaud', 'pluie', 'soleil'], correct: 1 }],
    },
    {
        id: 'en-b-14', day: 14, language: 'english', level: 'beginner', title: 'Week 2 Review', description: 'Review daily life', duration: '10 min', xp: 75,
        vocabulary: [{ word: 'daily', translation: 'quotidien' }],
        phrases: [{ phrase: 'I know', translation: 'Je sais', context: 'Knowledge' }],
        quiz: [
            { question: 'What is "chicken"?', options: ['pain', 'poulet', 'riz', 'eau'], correct: 1 },
        ],
    },
    // WEEK 3: Getting Around
    {
        id: 'en-b-15', day: 15, language: 'english', level: 'beginner', title: 'Directions', description: 'Directions vocabulary', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'left', translation: 'gauche' }, { word: 'right', translation: 'droite' },
            { word: 'straight', translation: 'tout droit' }, { word: 'near', translation: 'près' },
        ],
        phrases: [{ phrase: 'Where is...?', translation: 'Où est...?', context: 'Directions' }],
        quiz: [{ question: 'What is "left"?', options: ['droite', 'gauche', 'tout droit', 'près'], correct: 1 }],
    },
    {
        id: 'en-b-16', day: 16, language: 'english', level: 'beginner', title: 'Transportation', description: 'Transport modes', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'car', translation: 'voiture' }, { word: 'bus', translation: 'bus' },
            { word: 'taxi', translation: 'taxi' }, { word: 'bicycle', translation: 'vélo' },
        ],
        phrases: [{ phrase: 'I go by...', translation: 'Je vais en...', context: 'Transport' }],
        quiz: [{ question: 'What is "car"?', options: ['bus', 'voiture', 'taxi', 'vélo'], correct: 1 }],
    },
    {
        id: 'en-b-17', day: 17, language: 'english', level: 'beginner', title: 'At the Market', description: 'Market shopping', duration: '9 min', xp: 75,
        vocabulary: [
            { word: 'market', translation: 'marché' }, { word: 'seller', translation: 'vendeur' },
            { word: 'price', translation: 'prix' }, { word: 'quality', translation: 'qualité' },
        ],
        phrases: [
            { phrase: 'How much is it?', translation: 'C\'est combien?', context: 'Shopping' },
            { phrase: 'Too expensive', translation: 'Trop cher', context: 'Bargaining' },
        ],
        quiz: [{ question: 'What is "price"?', options: ['marché', 'vendeur', 'prix', 'qualité'], correct: 2 }],
        roleplayScenario: 'market',
    },
    {
        id: 'en-b-18', day: 18, language: 'english', level: 'beginner', title: 'Money & Prices', description: 'Money vocabulary', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'money', translation: 'argent' }, { word: 'expensive', translation: 'cher' },
            { word: 'cheap', translation: 'bon marché' },
        ],
        phrases: [{ phrase: 'Do you accept cards?', translation: 'Vous acceptez les cartes?', context: 'Payment' }],
        quiz: [{ question: 'What is "cheap"?', options: ['cher', 'bon marché', 'argent', 'prix'], correct: 1 }],
    },
    {
        id: 'en-b-19', day: 19, language: 'english', level: 'beginner', title: 'Question Words', description: 'Asking questions', duration: '8 min', xp: 70,
        vocabulary: [
            { word: 'who', translation: 'qui' }, { word: 'what', translation: 'quoi' },
            { word: 'where', translation: 'où' }, { word: 'when', translation: 'quand' },
            { word: 'why', translation: 'pourquoi' }, { word: 'how', translation: 'comment' },
        ],
        phrases: [{ phrase: 'Why not?', translation: 'Pourquoi pas?', context: 'Question' }],
        quiz: [{ question: 'What is "where"?', options: ['qui', 'quoi', 'où', 'quand'], correct: 2 }],
    },
    {
        id: 'en-b-20', day: 20, language: 'english', level: 'beginner', title: 'Common Verbs', description: 'Action words', duration: '9 min', xp: 75,
        vocabulary: [
            { word: 'go', translation: 'aller' }, { word: 'come', translation: 'venir' },
            { word: 'do/make', translation: 'faire' }, { word: 'have', translation: 'avoir' },
        ],
        phrases: [{ phrase: 'I\'m going to...', translation: 'Je vais...', context: 'Future' }],
        quiz: [{ question: 'What is "go"?', options: ['venir', 'aller', 'faire', 'avoir'], correct: 1 }],
    },
    {
        id: 'en-b-21', day: 21, language: 'english', level: 'beginner', title: 'Week 3 Review', description: 'Review getting around', duration: '10 min', xp: 80,
        vocabulary: [{ word: 'travel', translation: 'voyager' }],
        phrases: [{ phrase: 'Can I help you?', translation: 'Je peux vous aider?', context: 'Service' }],
        quiz: [
            { question: 'What is "left"?', options: ['droite', 'gauche', 'tout droit', 'près'], correct: 1 },
        ],
    },
    // WEEK 4: Business Basics
    {
        id: 'en-b-22', day: 22, language: 'english', level: 'beginner', title: 'Bargaining', description: 'Negotiate prices', duration: '10 min', xp: 100,
        vocabulary: [
            { word: 'negotiate', translation: 'négocier' }, { word: ' discount', translation: 'réduction' },
            { word: 'best price', translation: 'meilleur prix' },
        ],
        phrases: [
            { phrase: 'Can you lower the price?', translation: 'Vous pouvez baisser le prix?', context: 'Bargaining' },
        ],
        quiz: [{ question: 'How do you ask for a discount?', options: ['Expensive', 'Discount?', 'Thank you', 'Goodbye'], correct: 1 }],
        roleplayScenario: 'market',
    },
    {
        id: 'en-b-23', day: 23, language: 'english', level: 'beginner', title: 'Business Greetings', description: 'Professional language', duration: '8 min', xp: 80,
        vocabulary: [
            { word: 'business', translation: 'entreprise' }, { word: 'work', translation: 'travail' },
            { word: 'boss', translation: 'patron' }, { word: 'employee', translation: 'employé' },
        ],
        phrases: [{ phrase: 'Pleased to meet you', translation: 'Ravi de vous rencontrer', context: 'Business' }],
        quiz: [{ question: 'What is "business"?', options: ['travail', 'patron', 'entreprise', 'employé'], correct: 2 }],
    },
    {
        id: 'en-b-24', day: 24, language: 'english', level: 'beginner', title: 'Trade Vocabulary', description: 'Business terms', duration: '9 min', xp: 90,
        vocabulary: [
            { word: 'import', translation: 'import' }, { word: 'export', translation: 'export' },
            { word: 'order', translation: 'commande' }, { word: 'delivery', translation: 'livraison' },
        ],
        phrases: [{ phrase: 'I\'d like to place an order', translation: 'Je voudrais passer une commande', context: 'Business' }],
        quiz: [{ question: 'What is "delivery"?', options: ['import', 'export', 'commande', 'livraison'], correct: 3 }],
    },
    {
        id: 'en-b-25', day: 25, language: 'english', level: 'beginner', title: 'ECOWAS Basics', description: 'West African trade', duration: '10 min', xp: 100,
        vocabulary: [
            { word: 'ECOWAS', translation: 'CEDEAO' }, { word: 'trade', translation: 'commerce' },
            { word: 'border', translation: 'frontière' }, { word: 'customs', translation: 'douane' },
        ],
        phrases: [{ phrase: 'Free trade zone', translation: 'Zone de libre-échange', context: 'ECOWAS' }],
        quiz: [{ question: 'What is "customs"?', options: ['frontière', 'douane', 'commerce', 'export'], correct: 1 }],
        culturalNote: 'ECOWAS promotes trade across 15 West African nations!',
    },
    {
        id: 'en-b-26', day: 26, language: 'english', level: 'beginner', title: 'Documents', description: 'Business documents', duration: '9 min', xp: 90,
        vocabulary: [
            { word: 'visa', translation: 'visa' }, { word: 'passport', translation: 'passeport' },
            { word: 'document', translation: 'document' }, { word: 'permit', translation: 'permis' },
        ],
        phrases: [{ phrase: 'Do you have the documents?', translation: 'Avez-vous les documents?', context: 'Business' }],
        quiz: [{ question: 'What is "passport"?', options: ['visa', 'passeport', 'document', 'permis'], correct: 1 }],
    },
    {
        id: 'en-b-27', day: 27, language: 'english', level: 'beginner', title: 'Large Numbers', description: 'Hundreds and thousands', duration: '8 min', xp: 80,
        vocabulary: [
            { word: 'hundred', translation: 'cent' }, { word: 'thousand', translation: 'mille' },
            { word: 'million', translation: 'million' },
        ],
        phrases: [{ phrase: 'How much in total?', translation: 'Combien en tout?', context: 'Business' }],
        quiz: [{ question: 'What is "thousand"?', options: ['cent', 'mille', 'million', 'dix'], correct: 1 }],
    },
    {
        id: 'en-b-28', day: 28, language: 'english', level: 'beginner', title: 'Business Phrases', description: 'Professional communication', duration: '9 min', xp: 90,
        vocabulary: [
            { word: 'agreement', translation: 'accord' }, { word: 'contract', translation: 'contrat' },
            { word: 'price', translation: 'prix' }, { word: 'quantity', translation: 'quantité' },
        ],
        phrases: [{ phrase: 'We have a deal', translation: 'Nous avons un accord', context: 'Business' }],
        quiz: [{ question: 'What is "contract"?', options: ['accord', 'contrat', 'prix', 'quantité'], correct: 1 }],
    },
    {
        id: 'en-b-29', day: 29, language: 'english', level: 'beginner', title: 'Final Review', description: 'Review everything', duration: '15 min', xp: 100,
        vocabulary: [{ word: 'final review', translation: 'révision finale' }],
        phrases: [{ phrase: 'I\'m ready', translation: 'Je suis prêt', context: 'Confidence' }],
        quiz: [
            { question: 'How do you say "Hello"?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 1 },
            { question: 'What is "buy"?', options: ['vendre', 'acheter', 'magasin', 'marché'], correct: 1 },
        ],
    },
    {
        id: 'en-b-30', day: 30, language: 'english', level: 'beginner', title: 'Beginner Assessment', description: 'Final test', duration: '20 min', xp: 150,
        vocabulary: [{ word: 'exam', translation: 'examen' }, { word: 'success', translation: 'succès' }],
        phrases: [{ phrase: 'I can speak English!', translation: 'Je peux parler anglais!', context: 'Success' }],
        quiz: [
            { question: 'Translate "Thank you very much"', options: ['Merci beaucoup', 'Au revoir', 'S\'il vous plaît', 'Bonjour'], correct: 0 },
            { question: 'What is "negotiate"?', options: ['acheter', 'vendre', 'négocier', 'parler'], correct: 2 },
        ],
        culturalNote: 'Congratulations! You\'ve completed the English beginner course!',
    },
    // Other languages keep their sample lessons
    {
        id: 'es-b-01', day: 1, language: 'spanish', level: 'beginner', title: 'Greetings', description: 'Basic Spanish greetings', duration: '5 min', xp: 50,
        vocabulary: [{ word: 'Hola', translation: 'Hello' }, { word: 'Gracias', translation: 'Thank you' }],
        phrases: [{ phrase: '¿Cómo estás?', translation: 'How are you?', context: 'Greeting' }],
        quiz: [{ question: 'How do you say "Hello"?', options: ['Adiós', 'Hola', 'Gracias', 'Por favor'], correct: 1 }],
    },
    {
        id: 'pt-b-01', day: 1, language: 'portuguese', level: 'beginner', title: 'Greetings', description: 'Basic Portuguese', duration: '5 min', xp: 50,
        vocabulary: [{ word: 'Olá', translation: 'Hello' }],
        phrases: [{ phrase: 'Como está?', translation: 'How are you?', context: 'Greeting' }],
        quiz: [{ question: 'How do you say "Hello"?', options: ['Olá', 'Adeus', 'Obrigado', 'Sim'], correct: 0 }],
    },
    {
        id: 'de-b-01', day: 1, language: 'german', level: 'beginner', title: 'Greetings', description: 'Basic German', duration: '5 min', xp: 50,
        vocabulary: [{ word: 'Hallo', translation: 'Hello' }],
        phrases: [{ phrase: 'Wie geht es Ihnen?', translation: 'How are you?', context: 'Formal' }],
        quiz: [{ question: 'How do you say "Thank you"?', options: ['Hallo', 'Danke', 'Bitte', 'Auf Wiedersehen'], correct: 1 }],
    },
    {
        id: 'it-b-01', day: 1, language: 'italian', level: 'beginner', title: 'Greetings', description: 'Basic Italian', duration: '5 min', xp: 50,
        vocabulary: [{ word: 'Ciao', translation: 'Hello' }],
        phrases: [{ phrase: 'Come stai?', translation: 'How are you?', context: 'Informal' }],
        quiz: [{ question: 'How do you say "Thank you"?', options: ['Ciao', 'Grazie', 'Prego', 'Arrivederci'], correct: 1 }],
    },
    {
        id: 'ru-b-01', day: 1, language: 'russian', level: 'beginner', title: 'Greetings', description: 'Basic Russian', duration: '5 min', xp: 50,
        vocabulary: [{ word: 'Привет', translation: 'Hello' }],
        phrases: [{ phrase: 'Как дела?', translation: 'How are you?', context: 'Informal' }],
        quiz: [{ question: 'How do you say "Thank you"?', options: ['Привет', 'Спасибо', 'Пожалуйста', 'До свидания'], correct: 1 }],
    },
    {
        id: 'zh-b-01', day: 1, language: 'chinese', level: 'beginner', title: 'Greetings', description: 'Basic Chinese', duration: '5 min', xp: 50,
        vocabulary: [{ word: '你好', translation: 'Hello' }],
        phrases: [{ phrase: '你好吗？', translation: 'How are you?', context: 'Greeting' }],
        quiz: [{ question: 'How do you say "Hello"?', options: ['再见', '你好', '谢谢', '请'], correct: 1 }],
    },
    {
        id: 'ja-b-01', day: 1, language: 'japanese', level: 'beginner', title: 'Greetings', description: 'Basic Japanese', duration: '5 min', xp: 50,
        vocabulary: [{ word: 'こんにちは', translation: 'Hello' }],
        phrases: [{ phrase: 'お元気ですか？', translation: 'How are you?', context: 'Formal' }],
        quiz: [{ question: 'How do you say "Thank you"?', options: ['こんにちは', 'ありがとう', 'さようなら', 'すみません'], correct: 1 }],
    },
    {
        id: 'ar-b-01', day: 1, language: 'arabic', level: 'beginner', title: 'Greetings', description: 'Basic Arabic', duration: '5 min', xp: 50,
        vocabulary: [{ word: 'مرحبا', translation: 'Hello' }],
        phrases: [{ phrase: 'كيف حالك؟', translation: 'How are you?', context: 'Greeting' }],
        quiz: [{ question: 'What does "شكرا" mean?', options: ['Hello', 'Thank you', 'Goodbye', 'Please'], correct: 1 }],
    },
];
exports.default = exports.allBeginnerLessons;
