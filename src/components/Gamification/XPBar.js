"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./XPBar.css");
var XPBar = function (_a) {
    var _b = _a.currentXP, currentXP = _b === void 0 ? 0 : _b, _c = _a.xpToNextLevel, xpToNextLevel = _c === void 0 ? 100 : _c, _d = _a.level, level = _d === void 0 ? 1 : _d;
    var progress = (currentXP / xpToNextLevel) * 100;
    return (<div className="xp-bar-container">
            <div className="xp-header">
                <div className="level-badge">
                    <span className="level-label">Level</span>
                    <span className="level-number">{level}</span>
                </div>
                <div className="xp-text">
                    <span className="xp-current">{currentXP}</span>
                    <span className="xp-separator">/</span>
                    <span className="xp-total">{xpToNextLevel}</span>
                    <span className="xp-label">XP</span>
                </div>
            </div>
            <div className="xp-bar-track">
                <div className="xp-bar-fill" style={{ width: "".concat(Math.min(progress, 100), "%") }}>
                    <div className="xp-bar-shine"></div>
                </div>
            </div>
        </div>);
};
exports.default = XPBar;
