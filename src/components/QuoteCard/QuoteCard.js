"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var quotes_1 = require("../../data/quotes");
require("./QuoteCard.css");
var QuoteCard = function () {
    var _a = (0, react_1.useState)(null), quote = _a[0], setQuote = _a[1];
    (0, react_1.useEffect)(function () {
        setQuote((0, quotes_1.getQuoteOfTheDay)());
    }, []);
    if (!quote)
        return null;
    return (<div className="quote-card">
            <div className="quote-icon">💡</div>
            <blockquote className="quote-text">
                "{quote.text}"
            </blockquote>
            <div className="quote-author">— {quote.author}</div>
            <div className="quote-label">Quote of the Day</div>
        </div>);
};
exports.default = QuoteCard;
