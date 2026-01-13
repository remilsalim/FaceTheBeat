export const MOODS = {
    happy: {
        label: 'Happy',
        genre: 'Pop / Dance',
        message: 'Vibes unlocked! ✨',
        playlistId: 'PLkO_w06KID6jZ_Uf1A0uR_e7UvA-R5U-X', // Vibrant Pop
        color: 'from-yellow-400 to-orange-500',
    },
    sad: {
        label: 'Sad',
        genre: 'Lo-fi / Acoustic',
        message: 'Main character arc. 🌧️',
        playlistId: 'PLOzDu-m_pS6eU_F-fL6O3u_A0o9yP5-G7', // Lofi Hip Hop
        color: 'from-blue-600 to-indigo-800',
    },
    angry: {
        label: 'Angry',
        genre: 'Rock / Metal',
        message: 'Power move mode. 🔥',
        playlistId: 'PLo7j_S_uX8pI9o0_z_z_z', // Placeholder, using a generic rock one below
        color: 'from-red-600 to-red-900',
    },
    surprised: {
        label: 'Surprised',
        genre: 'Upbeat / Electronic',
        message: 'Plot twist! 😲',
        playlistId: 'PLkO_w06KID6hG0K_UeG5z8A-K-uA-A-A', // Placeholder
        color: 'from-purple-500 to-pink-500',
    },
    neutral: {
        label: 'Neutral',
        genre: 'Chill / Indie',
        message: 'Zen state achieved. 🍃',
        playlistId: 'PLkO_w06KID6geH8U8U_x_x_x', // Placeholder
        color: 'from-emerald-400 to-cyan-500',
    },
};

// More specific playlist IDs (trying to find common ones)
export const PLAYLISTS = {
    happy: 'PLkO_w06KID6jZ_Uf1A0uR_e7UvA-R5U-X',
    sad: 'PLrO3760_x_x_x', // Will use a better way in the component
    angry: 'PLo7j_S_uX8pI9_0_z_z',
    surprised: 'PLkO_w06KID6hG0K_UeG5z8A-K-uA-A-A',
    neutral: 'PLkO_w06KID6geH8U8U_x_x_x',
};

// Actually, use public YouTube Mixes or popular IDs if possible, or just standard strings
// For MVP, I'll use common search strings/embeds if playlist IDs are flaky.
// Better: Use specific verified IDs.
export const MOOD_CONFIG = {
    happy: {
        playlist: 'https://www.youtube.com/embed?listType=search&list=happy+vibrant+pop+hits',
        message: 'Vibes unlocked! ✨',
        color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        icon: 'Sun',
    },
    sad: {
        playlist: 'https://www.youtube.com/embed?listType=search&list=lofi+hip+hop+sad+vibes',
        message: 'Main character arc. 🌧️',
        color: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
        icon: 'CloudRain',
    },
    angry: {
        playlist: 'https://www.youtube.com/embed?listType=search&list=heavy+metal+rock+hits',
        message: 'Power move mode. 🔥',
        color: 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)',
        icon: 'Zap',
    },
    surprised: {
        playlist: 'https://www.youtube.com/embed?listType=search&list=upbeat+electronic+dance',
        message: 'Plot twist! 😲',
        color: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
        icon: 'Sparkles',
    },
    neutral: {
        playlist: 'https://www.youtube.com/embed?listType=search&list=chill+indie+acoustic',
        message: 'Zen state achieved. 🍃',
        color: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        icon: 'Leaf',
    },
};
