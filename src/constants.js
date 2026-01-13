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
        songs: [
            { title: 'Jimikki Kammal', artist: 'Velipadinte Pusthakam' },
            { title: 'Kudukku', artist: 'Love Action Drama' },
            { title: 'Karutha Penne', artist: 'Thenmavin Kombathu' },
            { title: 'Thaalatherichavar', artist: 'Romancham' },
            { title: 'Scene Mone', artist: 'Romancham' },
            { title: 'Malare Ninne', artist: 'Premam' },
            { title: 'Aasa Kooda', artist: 'Sushin Shyam' },
            { title: 'Shinkari Melam', artist: 'Classic' },
            { title: 'Lajjavathiye', artist: '4 The People' },
            { title: 'Sundari Laila', artist: '2018' },
            { title: 'Ollulleru', artist: 'Ajagajantharam' },
            { title: 'Pistah', artist: 'Neram' },
            { title: 'Maanam Thudukkanu', artist: 'Aaraattu' },
            { title: 'Jaana Mere Jaana', artist: 'Jukebox' },
            { title: 'Enne Thallendamma', artist: 'Thallumaala' },
            { title: 'Ole Mele', artist: 'Thallumaala' },
        ],
        message: 'Unka smile cute aark!!',
        color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        icon: 'Sun',
    },
    sad: {
        songs: [
            { title: 'Nee Himamazhayayi', artist: 'Edakkad Battalion 06' },
            { title: 'Akasham Pole', artist: 'Bheeshma Parvam' },
            { title: 'Azhalinte Azhangalil', artist: 'Ayalum Njanum Thammil' },
            { title: 'Mazhaye', artist: 'James & Alice' },
            { title: 'Poomaname', artist: 'Nirakkoottu' },
            { title: 'Khaalbinakame', artist: 'Meow' },
            { title: 'Nilave', artist: 'Spanish Masala' },
            { title: 'Mele Mevum', artist: 'Classic' },
            { title: 'Aakasham Pole', artist: 'Melody' },
            { title: 'Amme Nee Aranennu', artist: 'Soulful' },
            { title: 'Mazhamegham', artist: 'Rainy Mix' },
            { title: 'Lost Love', artist: 'Abhilasham' },
            { title: 'En Uyire', artist: 'Melody' },
            { title: 'Aayiram Chiraathukal', artist: '2018' },
            { title: 'Thoraathe (Reprise)', artist: 'Sad Version' },
        ],
        message: 'Entha moone depression aano...',
        color: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
        icon: 'CloudRain',
    },
    angry: {
        songs: [
            { title: 'Bheeshma Parvam Theme', artist: 'Sushin Shyam' },
            { title: 'Lucifer Theme', artist: 'Deepak Dev' },
            { title: 'Aaraattu Theme', artist: 'Rahul Raj' },
            { title: 'Pala Palli', artist: 'Kaduva' },
            { title: 'Ranam Title Track', artist: 'Jakes Bejoy' },
            { title: 'Thee jwalakal', artist: 'Angamaly Diaries' },
            { title: 'Manjabi', artist: 'Mass' },
            { title: 'Rukmangadhavidhi', artist: 'Rap' },
            { title: 'Unstoppable', artist: 'Energy' },
            { title: 'Bheeshma Be Notorious', artist: 'Mass' },
            { title: 'Aatuthottil', artist: 'Mass Beats' },
            { title: 'Kallu Kudiyan Anthem', artist: 'Classic Mass' },
            { title: 'Pokkiri Raja Theme', artist: 'Pokkiri Raja' },
            { title: 'Pulimurugan Theme', artist: 'Pulimurugan' },
            { title: 'Kammattipaadam Theme', artist: 'Kammattipaadam' },
        ],
        message: 'Uff nee scene aada uvve!!',
        color: 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)',
        icon: 'Zap',
    },
    surprised: {
        songs: [
            { title: 'Kudukku', artist: 'Love Action Drama' },
            { title: 'Thattassery Koottam', artist: 'Upbeat' },
            { title: 'Chinnu Chinnu', artist: 'Ramji Rao Speaking' },
            { title: 'Appalaale', artist: 'Kanthari' },
            { title: 'Entammante jimikki kammal', artist: 'Hit' },
            { title: 'Aasa Kooda', artist: 'Surprise Mix' },
            { title: 'Thara-dhritha-pulakithan', artist: 'Upbeat' },
            { title: 'Mera Naam Shaji Theme', artist: 'Fun' },
            { title: 'Kannil Ente', artist: 'Maheshinte Prathikaaram' },
            { title: 'Oru Naal', artist: 'Big B' },
            { title: 'Chundari Penne', artist: 'Charlie' },
            { title: 'Pularikalo', artist: 'Kappela' },
            { title: 'Kannadi Koodum Kootti', artist: 'Kunjikoonan' },
            { title: 'Pattum Paranjum', artist: 'Njan Prakashan' },
            { title: 'Poomuthole', artist: 'Joseph' },
            { title: 'Manjal Prasadavum', artist: 'Nakhakshathangal' },
        ],
        message: 'Ada Gommale!!',
        color: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
        icon: 'Sparkles',
    },
    neutral: {
        songs: [
            { title: 'Thoraathe', artist: 'Nitin K Siva' },
            { title: 'Pinneyum Pinneyum', artist: 'Krishnagudiyil Oru Pranayakalathu' },
            { title: 'Vathilil', artist: 'Ustad Hotel' },
            { title: 'Eeran Kaattu', artist: 'January Oru Orma' },
            { title: 'Ethra Neramaayi', artist: 'Chill Mix' },
            { title: 'Sundari', artist: 'Hebah' },
            { title: 'Poomuthole', artist: 'Joseph' },
            { title: 'Mizhiyil Mayanhadhi', artist: 'Chill' },
            { title: 'Pavizha Mazhaye', artist: 'Athiran' },
            { title: 'Pranayam', artist: 'Relax' },
            { title: 'Olichirikkaan Vallikkudilonnu', artist: 'Aramana Vettile Athidikal' },
            { title: 'Manjal Prasadavum', artist: 'Nakhakshathangal' },
            { title: 'Oru Kari Mukilin', artist: 'Vettam' },
            { title: 'Kaathirunnu Kaathirunnu', artist: 'Ennu Ninte Moideen' },
            { title: 'Mounam Swaramayi', artist: 'Aayushkalam' },
        ],
        message: 'Neeyara friends filmile Jayaramo??',
        color: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        icon: 'Leaf',
    },
};
