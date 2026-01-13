import React from 'react';
import { MOOD_CONFIG } from '../constants';
import { Sun, CloudRain, Zap, Sparkles, Leaf, Camera, CameraOff } from 'lucide-react';

const icons = {
    Sun,
    CloudRain,
    Zap,
    Sparkles,
    Leaf,
};

const MoodSelector = ({ currentMood, onMoodChange, isAuto, onToggleAuto }) => {
    return (
        <div className="mood-selector glass">
            <div className="selector-header">
                <h3>Current Mood: <span className="highlight">{currentMood.toUpperCase()}</span></h3>
                <button
                    className={`toggle-btn ${isAuto ? 'active' : ''}`}
                    onClick={onToggleAuto}
                    title={isAuto ? "Disable Auto-detect" : "Enable Auto-detect"}
                >
                    {isAuto ? <Camera size={20} /> : <CameraOff size={20} />}
                    <span>{isAuto ? 'AI Active' : 'AI Paused'}</span>
                </button>
            </div>

            <div className="mood-buttons">
                {Object.entries(MOOD_CONFIG).map(([key, value]) => {
                    const IconComponent = icons[value.icon];
                    return (
                        <button
                            key={key}
                            className={`mood-btn ${currentMood === key ? 'active' : ''}`}
                            onClick={() => onMoodChange(key)}
                            style={{ '--mood-color': value.color }}
                        >
                            <IconComponent size={24} />
                            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default MoodSelector;
