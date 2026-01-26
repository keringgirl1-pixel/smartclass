"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./StreakTracker.css");
var StreakTracker = function (_a) {
    var _b = _a.currentStreak, currentStreak = _b === void 0 ? 0 : _b, _c = _a.longestStreak, longestStreak = _c === void 0 ? 0 : _c;
    var _d = (0, react_1.useState)(false), isAnimating = _d[0], setIsAnimating = _d[1];
    (0, react_1.useEffect)(function () {
        if (currentStreak > 0) {
            setIsAnimating(true);
            var timer_1 = setTimeout(function () { return setIsAnimating(false); }, 1500);
            return function () { return clearTimeout(timer_1); };
        }
    }, [currentStreak]);
    return (<div className="streak-tracker">
            <div className="streak-main">
                <div className={"streak-flame ".concat(isAnimating ? 'animate-flame' : '')}>
                    🔥
                </div>
                <div className="streak-info">
                    <div className="streak-count">{currentStreak}</div>
                    <div className="streak-label">Day Streak</div>
                </div>
            </div>
            {longestStreak > 0 && (<div className="streak-record">
                    <span className="record-label">Best:</span>
                    <span className="record-value">{longestStreak} days</span>
                </div>)}
        </div>);
};
exports.default = StreakTracker;
