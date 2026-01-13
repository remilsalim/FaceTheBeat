import React from 'react';
import { MOOD_CONFIG } from '../constants';

const MusicPlayer = ({ mood }) => {
    const config = MOOD_CONFIG[mood] || MOOD_CONFIG.neutral;

    return (
        <div className="music-player-container">
            <div className="player-message">
                <h2>{config.message}</h2>
            </div>
            <div className="video-container glass">
                <iframe
                    width="100%"
                    height="315"
                    src={config.playlist}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default MusicPlayer;
