import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const WebcamFeed = ({ isAuto, onEmotionDetect }) => {
    const videoRef = useRef(null);
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadModels = async () => {
            try {
                const MODEL_URL = '/models';
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                ]);
                setModelsLoaded(true);
                startVideo();
            } catch (err) {
                console.error("Error loading models:", err);
                setError("Failed to load AI models. Please refresh.");
            }
        };

        loadModels();
    }, []);

    const startVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err) => {
                console.error("Error accessing webcam:", err);
                setError("Webcam access denied. Please enable it to use AI features.");
            });
    };

    useEffect(() => {
        let interval;
        if (modelsLoaded && isAuto && videoRef.current) {
            interval = setInterval(async () => {
                if (videoRef.current) {
                    const detections = await faceapi
                        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                        .withFaceExpressions();

                    if (detections && detections.length > 0) {
                        const expressions = detections[0].expressions;
                        // Get the expression with the highest probability
                        const [primaryEmotion, confidence] = Object.entries(expressions).reduce((a, b) => (a[1] > b[1] ? a : b));

                        // Map face-api emotions to our internal moods
                        let mappedMood = primaryEmotion;
                        if (primaryEmotion === 'disgusted') mappedMood = 'angry';
                        if (primaryEmotion === 'fearful') mappedMood = 'surprised';

                        // We only care about happy, sad, angry, surprised, neutral
                        const validMoods = ['happy', 'sad', 'angry', 'surprised', 'neutral'];
                        if (validMoods.includes(mappedMood)) {
                            onEmotionDetect({
                                mood: mappedMood,
                                confidence: Math.round(confidence * 100)
                            });
                        }
                    }
                }
            }, 800); // 0.8s interval for smoother live updates
        }

        return () => clearInterval(interval);
    }, [modelsLoaded, isAuto, onEmotionDetect]);

    return (
        <div className="webcam-container glass">
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        onPlay={() => console.log("Video started")}
                        className="webcam-feed"
                    />
                    {!modelsLoaded && <div className="loader">Loading AI Models...</div>}
                </>
            )}
        </div>
    );
};

export default WebcamFeed;
