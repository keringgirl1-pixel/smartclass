import { useState, useEffect } from 'react';
import './StreakTracker.css';

interface StreakTrackerProps {
    currentStreak?: number;
    longestStreak?: number;
}

const StreakTracker = ({ currentStreak = 0, longestStreak = 0 }: StreakTrackerProps) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (currentStreak > 0) {
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [currentStreak]);

    return (
        <div className="streak-tracker">
            <div className="streak-main">
                <div className={`streak-flame ${isAnimating ? 'animate-flame' : ''}`}>
                    🔥
                </div>
                <div className="streak-info">
                    <div className="streak-count">{currentStreak}</div>
                    <div className="streak-label">Day Streak</div>
                </div>
            </div>
            {longestStreak > 0 && (
                <div className="streak-record">
                    <span className="record-label">Best:</span>
                    <span className="record-value">{longestStreak} days</span>
                </div>
            )}
        </div>
    );
};

export default StreakTracker;
