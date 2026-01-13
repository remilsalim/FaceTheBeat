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

const MoodSelector = ({ currentMood, confidence, onMoodChange, isAuto, onToggleAuto }) => {
    return (
        <div className="mood-selector glass">
            <div className="selector-header">
                <div className="mood-info">
                    <h3>Current Mood: <span className="highlight">{currentMood.toUpperCase()}</span></h3>
                    {confidence > 0 && (
                        <div className="confidence-container">
                            <div className="confidence-label">Intensity: {confidence}%</div>
                            <div className="confidence-bar-bg">
                                <div
                                    className="confidence-bar-fill"
                                    style={{
                                        width: `${confidence}%`,
                                        background: MOOD_CONFIG[currentMood]?.color || 'white'
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
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
