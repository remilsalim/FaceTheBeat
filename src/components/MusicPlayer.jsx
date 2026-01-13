import React, { useState, useEffect } from 'react';
import { MOOD_CONFIG } from '../constants';
import { Music, ExternalLink, RotateCcw } from 'lucide-react';

const MusicPlayer = ({ mood }) => {
    const config = MOOD_CONFIG[mood] || MOOD_CONFIG.neutral;
    const [visibleSongs, setVisibleSongs] = useState([]);

    // Function to get random subset of songs
    const getRandomSongs = (pool, count = 6) => {
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        if (config.songs) {
            setVisibleSongs(getRandomSongs(config.songs));
        }
    }, [mood]);

    const handleRefresh = () => {
        if (config.songs) {
            setVisibleSongs(getRandomSongs(config.songs));
        }
    };

    return (
        <div className="music-player-container">
            <div className="player-message-row">
                <h2>{config.message}</h2>
            </div>

            <div className="suggestions-list glass">
                <div className="suggestions-header">
                    <div className="header-left">
                        <Music size={20} />
                        <h3>Mood Suggestions</h3>
                    </div>
                    <button className="refresh-btn" onClick={handleRefresh} title="Shuffle Current Mood">
                        <RotateCcw size={18} />
                    </button>
                </div>
                <div className="songs-grid">
                    {visibleSongs.map((song, index) => (
                        <div key={`${mood}-${index}-${song.title}`} className="song-card animate-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <div className="song-info">
                                <span className="song-title">{song.title}</span>
                                <span className="song-artist">{song.artist}</span>
                            </div>
                            <a
                                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(song.title + ' ' + song.artist + ' Malayalam Song')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-btn"
                                title="Search on YouTube"
                            >
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
