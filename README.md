# Face The Beat 🎶🤖

**Face The Beat** is an emotion-aware music discovery app that uses real-time AI to match Malayalam music to your facial expressions. Built with React and `face-api.js`, it offers a personalized and privacy-focused musical journey.

## ✨ Features

- **Real-Time Emotion Detection**: Analyzes your facial expressions every 1.5 seconds using local AI models (`face-api.js`).
- **Malayalam Music Library**: A vast collection of songs across all eras Classic Melodies (80s/90s), Nostalgic 2000s, and the latest Trending Hits (2020s).
- **Dynamic Suggestions**: Automatically refreshes a list of 5 curated song suggestions whenever your mood changes.
- **Privacy First**: All facial analysis happens locally in your browser. No video, images, or data are ever stored or sent to any server.
- **Manual Control**: Toggle AI detection on/off and manually choose your mood or shuffle suggestions.
- **Glassmorphism UI**: A sleek, modern interface with mood-reactive background gradients.

## 🛠️ Technology Stack

- **Frontend**: React (Vite + SWC)
- **AI/ML**: `face-api.js` (TensorFlow.js)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (Glassmorphism design)

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/remilsalim/FaceTheBeat.git
   cd FaceTheBeat
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Allow Webcam Access**: Open the app in your browser and grant camera permissions to start the AI vibe check!

## 📂 Project Structure

- `/src/components`: React components (`WebcamFeed`, `MusicPlayer`, `MoodSelector`).
- `/src/constants.js`: Mood-to-song mappings and UI messages.
- `/public/models`: Pre-trained weights for `face-api.js`.

## 🔒 Privacy Note
Face Analysis is performed entirely on the client-side. The app does not record or upload any visual data.

---
Made with ❤️ by Remil Salim


