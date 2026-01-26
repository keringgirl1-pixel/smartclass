import './XPBar.css';

interface XPBarProps {
    currentXP?: number;
    xpToNextLevel?: number;
    level?: number;
}

const XPBar = ({ currentXP = 0, xpToNextLevel = 100, level = 1 }: XPBarProps) => {
    const progress = (currentXP / xpToNextLevel) * 100;

    return (
        <div className="xp-bar-container">
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
                <div
                    className="xp-bar-fill"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                >
                    <div className="xp-bar-shine"></div>
                </div>
            </div>
        </div>
    );
};

export default XPBar;
