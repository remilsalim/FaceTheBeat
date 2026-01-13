import { useState, useEffect } from 'react';
import WebcamFeed from './components/WebcamFeed';
import MusicPlayer from './components/MusicPlayer';
import MoodSelector from './components/MoodSelector';
import { MOOD_CONFIG } from './constants';
import './App.css';

function App() {
    const [mood, setMood] = useState('neutral');
    const [confidence, setConfidence] = useState(0);
    const [isAuto, setIsAuto] = useState(true);

    const handleEmotionDetect = ({ mood: newMood, confidence: newConfidence }) => {
        if (isAuto) {
            setMood(prev => {
                if (prev !== newMood) return newMood;
                return prev;
            });
            setConfidence(newConfidence);
        }
    };

    const currentConfig = MOOD_CONFIG[mood] || MOOD_CONFIG.neutral;

    return (
        <div className="app-wrapper" style={{ '--dynamic-bg': currentConfig.color }}>
            <header>
                <h1>Face The Beat</h1>
                <p className="subtitle">Music that matches your mood, powered by AI.</p>
            </header>

            <main className="content">
                <div className="left-panel">
                    <WebcamFeed isAuto={isAuto} onEmotionDetect={handleEmotionDetect} />
                    <MoodSelector
                        currentMood={mood}
                        confidence={confidence}
                        onMoodChange={(m) => {
                            setMood(m);
                            setConfidence(100); // Manual pick is 100% intentional
                            setIsAuto(false);
                        }}
                        isAuto={isAuto}
                        onToggleAuto={() => setIsAuto(!isAuto)}
                    />
                </div>

                <div className="right-panel">
                    <MusicPlayer mood={mood} />
                </div>
            </main>

            <footer>
                <p className="privacy-note">
                    🔒 <strong>Privacy:</strong> Everything runs locally in your browser. No video, images, or data are stored or sent to any server.
                </p>
            </footer>
        </div>
    );
}

export default App;
