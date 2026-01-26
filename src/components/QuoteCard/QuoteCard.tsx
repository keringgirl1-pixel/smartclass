import { useState, useEffect } from 'react';
import { getQuoteOfTheDay } from '../../data/quotes';
import type { Quote } from '../../data/quotes';
import './QuoteCard.css';

const QuoteCard = () => {
    const [quote, setQuote] = useState<Quote | null>(null);

    useEffect(() => {
        setQuote(getQuoteOfTheDay());
    }, []);

    if (!quote) return null;

    return (
        <div className="quote-card">
            <div className="quote-icon">💡</div>
            <blockquote className="quote-text">
                "{quote.text}"
            </blockquote>
            <div className="quote-author">— {quote.author}</div>
            <div className="quote-label">Quote of the Day</div>
        </div>
    );
};

export default QuoteCard;
