import { Link } from 'react-router-dom';
import StreakTracker from '../components/Gamification/StreakTracker';
import XPBar from '../components/Gamification/XPBar';
import './Profile.css';

const Profile = () => {
    const userData = {
        name: 'Abdou',
        currentStreak: 7,
        longestStreak: 12,
        currentXP: 450,
        xpToNextLevel: 500,
        level: 5,
        totalXP: 2450,
        lessonsCompleted: 12,
        hoursLearned: 8.5,
    };

    const achievements = [
        { id: 1, name: 'First Steps', icon: '👣', unlocked: true },
        { id: 2, name: '7-Day Streak', icon: '🔥', unlocked: true },
        { id: 3, name: 'Market Master', icon: '🛍️', unlocked: true },
        { id: 4, name: 'Polyglot', icon: '🌍', unlocked: false },
        { id: 5, name: 'Speed Learner', icon: '⚡', unlocked: false },
        { id: 6, name: 'Perfect Score', icon: '💯', unlocked: false },
    ];

    const leaderboard = [
        { rank: 1, name: 'Amina K.', xp: 5240, avatar: '👩' },
        { rank: 2, name: 'Kwame A.', xp: 4890, avatar: '👨' },
        { rank: 3, name: 'Fatou S.', xp: 3120, avatar: '👩' },
        { rank: 4, name: 'You (Abdou)', xp: 2450, avatar: '😊', isCurrentUser: true },
        { rank: 5, name: 'Ibrahim D.', xp: 2100, avatar: '👨' },
    ];

    const shareAchievement = () => {
        const text = `🔥 I'm on a ${userData.currentStreak}-day streak on SmartClass! Join me in learning West African trade & business. #SmartClass #ECOWAS`;
        // In a real app, this would open share dialog
        alert(`Share: ${text}`);
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        ← Home
                    </Link>
                    <div className="profile-hero">
                        <div className="profile-avatar">😊</div>
                        <h1 className="profile-name">{userData.name}</h1>
                        <p className="profile-title">Level {userData.level} Learner</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="profile-content">
                    <div className="stats-section">
                        <h2 className="section-title">Your Progress</h2>
                        <div className="stats-grid">
                            <StreakTracker
                                currentStreak={userData.currentStreak}
                                longestStreak={userData.longestStreak}
                            />
                            <XPBar
                                currentXP={userData.currentXP}
                                xpToNextLevel={userData.xpToNextLevel}
                                level={userData.level}
                            />
                        </div>

                        <div className="stats-cards">
                            <div className="stat-card">
                                <div className="stat-icon">📚</div>
                                <div className="stat-value">{userData.lessonsCompleted}</div>
                                <div className="stat-label">Lessons Completed</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">⏱️</div>
                                <div className="stat-value">{userData.hoursLearned}h</div>
                                <div className="stat-label">Hours Learned</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">⭐</div>
                                <div className="stat-value">{userData.totalXP}</div>
                                <div className="stat-label">Total XP</div>
                            </div>
                        </div>
                    </div>

                    <div className="achievements-section">
                        <h2 className="section-title">Achievements</h2>
                        <div className="achievements-grid">
                            {achievements.map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className={`achievement-badge ${achievement.unlocked ? 'achievement-unlocked' : 'achievement-locked'
                                        }`}
                                >
                                    <div className="achievement-icon">{achievement.icon}</div>
                                    <p className="achievement-name">{achievement.name}</p>
                                    {achievement.unlocked && (
                                        <div className="achievement-checkmark">✓</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="leaderboard-section">
                        <h2 className="section-title">Leaderboard</h2>
                        <div className="leaderboard-tabs">
                            <button className="tab-btn tab-active">Weekly</button>
                            <button className="tab-btn">Monthly</button>
                            <button className="tab-btn">All Time</button>
                        </div>
                        <div className="leaderboard-list">
                            {leaderboard.map((entry) => (
                                <div
                                    key={entry.rank}
                                    className={`leaderboard-entry ${entry.isCurrentUser ? 'leaderboard-current-user' : ''
                                        }`}
                                >
                                    <div className="entry-rank">
                                        {entry.rank <= 3 ? (
                                            <span className="rank-medal">
                                                {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                                            </span>
                                        ) : (
                                            <span className="rank-number">{entry.rank}</span>
                                        )}
                                    </div>
                                    <div className="entry-avatar">{entry.avatar}</div>
                                    <div className="entry-name">{entry.name}</div>
                                    <div className="entry-xp">{entry.xp.toLocaleString()} XP</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="share-section">
                        <h2 className="section-title">Share Your Progress</h2>
                        <div className="share-card">
                            <div className="share-preview">
                                <div className="share-icon">🔥</div>
                                <p className="share-text">
                                    I'm on a {userData.currentStreak}-day streak!
                                </p>
                            </div>
                            <div className="share-buttons">
                                <button className="share-btn whatsapp" onClick={shareAchievement}>
                                    <span className="btn-icon">📱</span>
                                    WhatsApp
                                </button>
                                <button className="share-btn twitter" onClick={shareAchievement}>
                                    <span className="btn-icon">🐦</span>
                                    Twitter
                                </button>
                                <button className="share-btn facebook" onClick={shareAchievement}>
                                    <span className="btn-icon">📘</span>
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
