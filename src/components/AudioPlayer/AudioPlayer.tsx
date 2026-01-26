import { useState } from 'react';
import audioService from '../../services/audioService';
import './AudioPlayer.css';

interface AudioPlayerProps {
    text: string;
    language: string;
    size?: 'small' | 'medium' | 'large';
    autoPlay?: boolean;
}

const AudioPlayer = ({ text, language, size = 'medium', autoPlay = false }: AudioPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePlay = async () => {
        if (isPlaying || isLoading) return;

        setIsLoading(true);
        setError(null);

        try {
            const audioUrl = await audioService.generateAudio(text, language);

            if (audioUrl) {
                setIsPlaying(true);
                await audioService.play(audioUrl);
                setIsPlaying(false);
            } else {
                setError('Audio not available');
            }
        } catch (err) {
            console.error('Audio playback error:', err);
            setError('Playback failed');
            setIsPlaying(false);
        } finally {
            setIsLoading(false);
        }
    };

    // Auto-play on mount if requested
    useState(() => {
        if (autoPlay) {
            handlePlay();
        }
    });

    const sizeClasses = {
        small: 'audio-player-small',
        medium: 'audio-player-medium',
        large: 'audio-player-large',
    };

    return (
        <button
            className={`audio-player ${sizeClasses[size]} ${isPlaying ? 'playing' : ''} ${isLoading ? 'loading' : ''
                }`}
            onClick={handlePlay}
            disabled={isLoading || isPlaying}
            title="Play pronunciation"
        >
            {isLoading ? (
                <span className="audio-icon">⏳</span>
            ) : isPlaying ? (
                <span className="audio-icon">🔊</span>
            ) : error ? (
                <span className="audio-icon">❌</span>
            ) : (
                <span className="audio-icon">🔊</span>
            )}
        </button>
    );
};

export default AudioPlayer;
