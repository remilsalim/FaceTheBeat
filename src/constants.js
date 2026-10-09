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
            { title: "Jimikki Kammal", artist: "Vineeth Sreenivasan, Renjith Unni", genre: "Folk-pop / Dance" },
            { title: "Entammede Jimikki Kammal", artist: "Vineeth Sreenivasan, Renjith Unni", genre: "Folk-pop / Upbeat" },
            { title: "Appangal Embadum", artist: "Anna Katharina Valayil", genre: "Folk / Feel-good" },
            { title: "Pistah", artist: "Shabareesh Varma", genre: "Dance / Comedy" },
            { title: "Thudakkam Mangalyam", artist: "Vijay Yesudas, Sachin Warrier, Divya S. Menon", genre: "Folk-pop / Celebratory" },
            { title: "Kudukku", artist: "Vineeth Sreenivasan", genre: "Dance-pop" },
            { title: "Kalippu", artist: "Shabareesh Varma", genre: "Folk-rock / Upbeat" },
            { title: "Scene Contra", artist: "Shabareesh Varma", genre: "Rap / Folk-pop" },
            { title: "Parudeesa", artist: "Sreenath Bhasi", genre: "Rock / Energetic" },
            { title: "Illuminati", artist: "Dabzee", genre: "Rap / Dance" },
            { title: "Aaradhike", artist: "Sooraj Santhosh, Madhuvanthi Narayan", genre: "Romantic melody" },
            { title: "Malare", artist: "Vijay Yesudas", genre: "Romantic melody" },
            { title: "Pavizha Mazha", artist: "K. S. Harisankar", genre: "Romantic melody" },
            { title: "Darshana", artist: "Hesham Abdul Wahab, Darshana Rajendran", genre: "Romantic pop" },
            { title: "Onakka Munthiri", artist: "Divya Vineeth", genre: "Feel-good / Romantic pop" },
            { title: "Puthiyoru Pathayil", artist: "Nazriya Nazim, Sushin Shyam", genre: "Indie-pop / Melodic" },
            { title: "Uyiril Thodum", artist: "Sooraj Santhosh, Anne Amie", genre: "Romantic melody" },
            { title: "Cherathukal", artist: "Sithara Krishnakumar, Sushin Shyam", genre: "Soft melody" },
            { title: "Thane Pookum", artist: "K. S. Harisankar", genre: "Romantic melody" },
            { title: "Lailakame", artist: "Haricharan", genre: "Romantic pop" },
            { title: "Kannil", artist: "Sooraj Santhosh, Shweta Mohan", genre: "Romantic melody" },
            { title: "Uyarum", artist: "Gowry Lekshmi", genre: "Indie-pop / Uplifting" },
            { title: "Then Kiliye", artist: "Vineeth Sreenivasan", genre: "Feel-good melody" },
            { title: "Pularaan Neram", artist: "Sooraj Santhosh", genre: "Feel-good / Acoustic" },
            { title: "Kinavu Kondu", artist: "Rex Vijayan, Imam Majboor", genre: "Indie / Mellow" },
            { title: "Thaniye", artist: "Sushin Shyam", genre: "Indie-pop / Mellow" },
            { title: "Manickyachirakulla", artist: "Bijibal", genre: "Folk / Feel-good" },
            { title: "Olu", artist: "Sid Sriram", genre: "Romantic melody" },
            { title: "Maane", artist: "Gowry Lekshmi", genre: "Indie-pop" },
            { title: "Neela Nilave", artist: "Kapil Kapilan", genre: "Romantic pop" },
            { title: "Darling Darling", artist: "M. G. Sreekumar, Sujatha Mohan", genre: "Romantic pop" },
            { title: "Karimizhi Kuruviye", artist: "Devanand, Sujatha Mohan", genre: "Romantic melody" },
            { title: "Chingamasam Vannu Chernnal", artist: "Shankar Mahadevan, Rimi Tomy", genre: "Festive / Folk-pop" },
            { title: "Marannittumenthino", artist: "M. G. Sreekumar", genre: "Romantic melody" },
            { title: "Oru Rajamalli", artist: "M. G. Sreekumar", genre: "Romantic melody" },
            { title: "Pramadavanam", artist: "K. J. Yesudas", genre: "Classical / Devotional melody" },
            { title: "Devakanyaka", artist: "K. J. Yesudas", genre: "Romantic melody" },
            { title: "Ponnambili Pottum Thottu", artist: "M. G. Sreekumar, Sujatha Mohan", genre: "Romantic melody" },
            { title: "Aayiram Kannumayi", artist: "K. J. Yesudas, K. S. Chithra", genre: "Soft melody" },
            { title: "Poomaname", artist: "K. J. Yesudas", genre: "Romantic melody" },
            { title: "Maleyam Marodalinju", artist: "M. G. Sreekumar", genre: "Folk-pop" },
            { title: "Mizhiyariyaathe", artist: "Sujatha Mohan", genre: "Romantic melody" },
            { title: "Minnalvala", artist: "Artist credit to verify", genre: "Modern film song" },
            { title: "Aethu Kari Raavilum", artist: "Haricharan", genre: "Romantic melody" },
            { title: "Thattathin Marayathe", artist: "Sachin Warrier", genre: "Romantic pop" },
            { title: "Anuraga Vilochananayi", artist: "Shreya Ghoshal, V. Sreekumar", genre: "Romantic melody" },
            { title: "Mazhaye Thoomazhaye", artist: "Haricharan", genre: "Romantic melody" },
            { title: "Aalolam", artist: "Sithara Krishnakumar, Vineeth Sreenivasan", genre: "Feel-good melody" },
            { title: "Sreeraagamo", artist: "K. J. Yesudas", genre: "Classical / Melodic" },
            { title: "Enthavo", artist: "Sooraj Santhosh", genre: "Indie-pop / Feel-good" }
        ],
        message: 'ഉങ്ക സ്‌മൈൽ ക്യൂട്ട് ആർക്!!',
        color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        icon: 'Sun',
    },
    sad: {
        songs: [
            // Melancholy — 20 songs
            {
                title: "Nee Himamazhayayi",
                artist: "K. S. Harisankar, Nithya Mammen",
                genre: "Melancholic Melody",
                mood: "melancholy"
            },
            {
                title: "Azhalinte Azhangalil",
                artist: "Nikhil Mathew",
                genre: "Melancholic Melody",
                mood: "melancholy"
            },
            {
                title: "Mazhaye Mazhaye",
                artist: "Karthik, Abhaya Hiranmayi",
                genre: "Soft Melody",
                mood: "melancholy"
            },
            {
                title: "Aakasham Pole",
                artist: "Kapil Kapilan, Hamsika Iyer",
                genre: "Emotional Melody",
                mood: "melancholy"
            },
            {
                title: "Thaniye Mizhikal",
                artist: "Sooraj Santhosh, Vishnu Vijay",
                genre: "Melancholic Melody",
                mood: "melancholy"
            },
            {
                title: "Akale",
                artist: "Karthik",
                genre: "Soft Pop",
                mood: "melancholy"
            },
            // Verify exact recording and singer before publishing.
            {
                title: "Irul Veenurugum",
                artist: "",
                genre: "Melancholic Melody",
                mood: "melancholy"
            },
            {
                title: "Manju Mazha",
                artist: "",
                genre: "Soft Melody",
                mood: "melancholy"
            },
            {
                title: "Poonkaattinodum",
                artist: "K. J. Yesudas, S. Janaki",
                genre: "Nostalgic Melody",
                mood: "melancholy"
            },
            {
                title: "Nilaavil Ellame",
                artist: "",
                genre: "Dreamy Melody",
                mood: "melancholy"
            },
            {
                title: "Aayiram Chiraathukal",
                artist: "Shaan Rahman",
                genre: "Emotional Melody",
                mood: "melancholy"
            },
            {
                title: "Thoraathe",
                artist: "",
                genre: "Indie / Melancholic",
                mood: "melancholy"
            },
            {
                title: "Kadalkkaattin",
                artist: "",
                genre: "Soft Melody",
                mood: "melancholy"
            },
            {
                title: "Shyamambaram",
                artist: "",
                genre: "Melancholic Melody",
                mood: "melancholy"
            },
            {
                title: "Akalumbol",
                artist: "",
                genre: "Reflective Melody",
                mood: "melancholy"
            },
            {
                title: "Eeran Kaattu",
                artist: "",
                genre: "Soft Melody",
                mood: "melancholy"
            },
            {
                title: "Vathilil",
                artist: "Haricharan",
                genre: "Soft Melody",
                mood: "melancholy"
            },
            {
                title: "Mizhiyil",
                artist: "Shahabaz Aman",
                genre: "Indie / Melancholic",
                mood: "melancholy"
            },
            {
                title: "Kaathirunnu Kaathirunnu",
                artist: "",
                genre: "Emotional Melody",
                mood: "melancholy"
            },
            {
                title: "Mounam Swaramayi",
                artist: "",
                genre: "Nostalgic Melody",
                mood: "melancholy"
            },

            // Heartbreak — 20 songs
            {
                title: "Malare",
                artist: "Vijay Yesudas",
                genre: "Heartbreak Melody",
                mood: "heartbreak"
            },
            {
                title: "Kanneer Poovinte",
                artist: "M. G. Sreekumar",
                genre: "Heartbreak Classic",
                mood: "heartbreak"
            },
            {
                title: "Varuvaanillaarume",
                artist: "K. S. Chithra",
                genre: "Longing / Melody",
                mood: "heartbreak"
            },
            {
                title: "Ennu Varum Nee",
                artist: "",
                genre: "Longing Melody",
                mood: "heartbreak"
            },
            {
                title: "Marakkam",
                artist: "",
                genre: "Heartbreak Melody",
                mood: "heartbreak"
            },
            {
                title: "En Uyire",
                artist: "",
                genre: "Romantic Sad",
                mood: "heartbreak"
            },
            {
                title: "Khalbhinakame",
                artist: "",
                genre: "Romantic Melody",
                mood: "heartbreak"
            },
            {
                title: "Nilave",
                artist: "",
                genre: "Melancholic Pop",
                mood: "heartbreak"
            },
            {
                title: "En Jeevane",
                artist: "",
                genre: "Heartbreak Melody",
                mood: "heartbreak"
            },
            {
                title: "Akaleyanengilum",
                artist: "",
                genre: "Longing Melody",
                mood: "heartbreak"
            },
            {
                title: "Kathiripoo",
                artist: "",
                genre: "Romantic Sad",
                mood: "heartbreak"
            },
            {
                title: "Hrudaya Sakhi",
                artist: "",
                genre: "Heartbreak Melody",
                mood: "heartbreak"
            },
            {
                title: "Manju Kaalam",
                artist: "",
                genre: "Romantic Sad",
                mood: "heartbreak"
            },
            {
                title: "Thaniye",
                artist: "Sooraj Santhosh, Vishnu Vijay",
                genre: "Indie / Heartbreak",
                mood: "heartbreak"
            },
            {
                title: "Aaradhike",
                artist: "Sooraj Santhosh, Madhuvanthi Narayan",
                genre: "Romantic Melody",
                mood: "heartbreak"
            },
            {
                title: "Darshana",
                artist: "Hesham Abdul Wahab, Darshana Rajendran",
                genre: "Romantic Pop",
                mood: "heartbreak"
            },
            {
                title: "Puthiyoru Pathayil",
                artist: "",
                genre: "Indie Pop",
                mood: "heartbreak"
            },
            {
                title: "Lailakame",
                artist: "Haricharan",
                genre: "Romantic Pop",
                mood: "heartbreak"
            },
            {
                title: "Neela Nilave",
                artist: "Kapil Kapilan",
                genre: "Romantic Pop",
                mood: "heartbreak"
            },
            {
                title: "Jeevamshamayi",
                artist: "Shreya Ghoshal, Harisankar K. S.",
                genre: "Romantic Melody",
                mood: "heartbreak"
            },

            // Sad — 10 songs
            {
                title: "Poomuthole",
                artist: "Vijay Yesudas",
                genre: "Emotional / Family",
                mood: "sad"
            },
            {
                title: "Aatmavil",
                artist: "",
                genre: "Emotional Melody",
                mood: "sad"
            },
            {
                title: "Mele Mevum",
                artist: "",
                genre: "Soft Melody",
                mood: "sad"
            },
            {
                title: "Amme Nee Aranennu",
                artist: "",
                genre: "Emotional / Devotional",
                mood: "sad"
            },
            {
                title: "Gopike",
                artist: "",
                genre: "Nostalgic Melody",
                mood: "sad"
            },
            {
                title: "Kalippattamai",
                artist: "",
                genre: "Emotional Melody",
                mood: "sad"
            },
            {
                title: "Thaliraninjoru Kilimarathile",
                artist: "",
                genre: "Sad Melody",
                mood: "sad"
            },
            {
                title: "Mandhara Malaril",
                artist: "",
                genre: "Soft Melody",
                mood: "sad"
            },
            {
                title: "Neerume Kattum",
                artist: "",
                genre: "Melancholic Melody",
                mood: "sad"
            },
            {
                title: "Poomaname",
                artist: "",
                genre: "Nostalgic Melody",
                mood: "sad"
            }
        ],
        message: 'എന്താ മോനെ ഡിപ്രെഷൻ ആണോ...',
        color: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
        icon: 'CloudRain',
    },
    angry: {
        songs: [
            // Angry — rage, confrontation, aggressive energy
            {
                title: "Kalippu",
                artist: "Murali Gopy, Shabareesh Varma",
                genre: "Aggressive Rock / Soundtrack",
                mood: "angry"
            },
            {
                title: "Para Para",
                artist: "Anoop Mohandas",
                genre: "Aggressive Soundtrack",
                mood: "angry"
            },
            {
                title: "Mathapithakkale",
                artist: "Sushin Shyam",
                genre: "Dark / Experimental",
                mood: "angry"
            },
            {
                title: "Adholokam",
                artist: "Vipin Raveendran",
                genre: "Dark / Action Soundtrack",
                mood: "angry"
            },
            {
                title: "Kuthanthram",
                artist: "Vedan",
                genre: "Rap / Hip-Hop",
                mood: "angry"
            },
            {
                title: "The War Cry",
                artist: "Dabzee, Dopameen3",
                genre: "Aggressive Rap / Action",
                mood: "angry"
            },
            {
                title: "Habibi Drip",
                artist: "Dabzee",
                genre: "Rap / Hip-Hop",
                mood: "angry"
            },
            {
                title: "Ballaatha Jaathi",
                artist: "NJ, Rzee",
                genre: "Rap / Hip-Hop",
                mood: "angry"
            },
            {
                title: "Durga",
                artist: "Rzee",
                genre: "Aggressive Rap",
                mood: "angry"
            },
            {
                title: "Manavalan Thug",
                artist: "Dabzee, SA",
                genre: "Rap / Mass",
                mood: "angry"
            },

            // Rough — gritty rock, raw vocals, rebellious energy
            {
                title: "Fish Rock",
                artist: "Thaikkudam Bridge",
                genre: "Hard Rock",
                mood: "rough"
            },
            {
                title: "Urumbu",
                artist: "Thaikkudam Bridge",
                genre: "Alternative Rock",
                mood: "rough"
            },
            {
                title: "Navarasam",
                artist: "Thaikkudam Bridge",
                genre: "Progressive Rock",
                mood: "rough"
            },
            {
                title: "Aarachar",
                artist: "Thaikkudam Bridge",
                genre: "Progressive Rock",
                mood: "rough"
            },
            {
                title: "Chathe",
                artist: "Thaikkudam Bridge",
                genre: "Rock",
                mood: "rough"
            },
            {
                title: "Nada Nada",
                artist: "Avial",
                genre: "Alternative Rock",
                mood: "rough"
            },
            {
                title: "Ettam Pattu",
                artist: "Avial",
                genre: "Alternative Rock",
                mood: "rough"
            },
            {
                title: "Aadu Pambe",
                artist: "Avial",
                genre: "Alternative Rock",
                mood: "rough"
            },
            {
                title: "Aranda",
                artist: "Avial",
                genre: "Alternative Rock",
                mood: "rough"
            },
            {
                title: "Karukara",
                artist: "Avial",
                genre: "Alternative Rock",
                mood: "rough"
            },

            // Mass / intense — powerful beats and action energy
            {
                title: "Illuminati",
                artist: "Dabzee, Sushin Shyam",
                genre: "Rap / Mass",
                mood: "angry"
            },
            {
                title: "Galatta",
                artist: "Sushin Shyam",
                genre: "Electronic / Mass",
                mood: "angry"
            },
            {
                title: "Jaada",
                artist: "Sreenath Bhasi",
                genre: "Rap / Hip-Hop",
                mood: "rough"
            },
            {
                title: "Kannil Pettole",
                artist: "Irfana Hameed, Vishnu Vijay",
                genre: "Rap / Hip-Hop",
                mood: "angry"
            },
            {
                title: "The Devil's Arrival",
                artist: "Anand Sreeraj",
                genre: "Dark / Action Soundtrack",
                mood: "angry"
            }
        ],
        message: 'ഉഫ് നീ സീൻ ആട ഉവ്വേ!!',
        color: 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)',
        icon: 'Zap',
    },
    surprised: {
        songs: [
            // Surprise — quirky, unexpected, experimental
            {
                title: "Thetti",
                artist: "Neeraj Remesh",
                genre: "Experimental / Quirky",
                mood: "surprise"
            },
            {
                title: "Seythaante Cheytha",
                artist: "Vaikom Vijayalakshmi, Pradeep Palluruthy",
                genre: "Retro / Quirky",
                mood: "surprise"
            },
            {
                title: "Fish Rock",
                artist: "Thaikkudam Bridge",
                genre: "Experimental Rock",
                mood: "surprise"
            },
            {
                title: "Navarasam",
                artist: "Thaikkudam Bridge",
                genre: "Progressive Rock / Fusion",
                mood: "surprise"
            },
            {
                title: "Aarachar",
                artist: "Thaikkudam Bridge",
                genre: "Progressive Rock",
                mood: "surprise"
            },
            {
                title: "Urumbu",
                artist: "Thaikkudam Bridge",
                genre: "Alternative Rock",
                mood: "surprise"
            },
            {
                title: "Chekele",
                artist: "Avial",
                genre: "Alternative Rock / Folk",
                mood: "surprise"
            },
            {
                title: "Karukara",
                artist: "Avial",
                genre: "Alternative Rock",
                mood: "surprise"
            },
            {
                title: "Aadu Pambe",
                artist: "Avial",
                genre: "Folk Rock",
                mood: "surprise"
            },
            {
                title: "Kummati",
                artist: "6091",
                genre: "Experimental Indie",
                mood: "surprise"
            },
            {
                title: "Kalapila",
                artist: "Street Academics",
                genre: "Hip-Hop / Experimental",
                mood: "surprise"
            },
            {
                title: "Puttu Paattu",
                artist: "Thakara",
                genre: "Quirky Indie",
                mood: "surprise"
            },
            {
                title: "GVQ",
                artist: "Thakara",
                genre: "Experimental Indie",
                mood: "surprise"
            },
            {
                title: "Koothu over Coffee",
                artist: "Agam",
                genre: "Progressive Fusion",
                mood: "surprise"
            },
            {
                title: "Manavyalakinchara (Mist of Capricorn)",
                artist: "Agam",
                genre: "Carnatic Progressive Rock",
                mood: "surprise"
            },
            {
                title: "The Celestial Nymph (Manassi Dussaham)",
                artist: "Agam",
                genre: "Progressive Fusion",
                mood: "surprise"
            },
            {
                title: "MoFunk",
                artist: "Advaita",
                genre: "Funk / Fusion",
                mood: "surprise"
            },
            {
                title: "The Unexpected",
                artist: "Rahul Raj",
                genre: "Cinematic / Experimental",
                mood: "surprise"
            },
            {
                title: "The Shadow of Death",
                artist: "Justin Varghese",
                genre: "Dark Cinematic",
                mood: "surprise"
            },
            {
                title: "The Beginning",
                artist: "Christo Xavier, Atheena",
                genre: "Dark / Experimental Soundtrack",
                mood: "surprise"
            },
            {
                title: "Jathikathottam",
                artist: "Shaan Rahman, Vineeth Sreenivasan",
                genre: "Quirky Folk Pop",
                mood: "surprise"
            },
            {
                title: "Ashubha Mangalakari",
                artist: "Justin Varghese",
                genre: "Quirky / Experimental",
                mood: "surprise"
            },
            {
                title: "Vazhkai",
                artist: "Justin Varghese",
                genre: "Experimental / Indie",
                mood: "surprise"
            },
            {
                title: "Krodham",
                artist: "Down to Earth",
                genre: "Folk Rock",
                mood: "surprise"
            },
            {
                title: "Appozhum Paranjile",
                artist: "Thaikkudam Bridge",
                genre: "Folk / Experimental Fusion",
                mood: "surprise"
            }
        ],
        message: 'അട ഗോമ്മലെ!!',
        color: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
        icon: 'Sparkles',
    },
    neutral: {
        songs: [
            // Neutral — Malayalam instrumental / mellow tracks
            { title: "Maveli", artist: "K. L. Sreeram", genre: "Kerala Instrumental", mood: "neutral" },
            { title: "Vadakkanpattu", artist: "K. L. Sreeram", genre: "Folk Instrumental", mood: "neutral" },
            { title: "Kerala Folk", artist: "K. L. Sreeram", genre: "Folk Instrumental", mood: "neutral" },
            { title: "Vallomkali", artist: "K. L. Sreeram", genre: "Folk Instrumental", mood: "neutral" },
            { title: "Panchavadyam", artist: "K. L. Sreeram", genre: "Traditional Instrumental", mood: "neutral" },
            { title: "Techimandaram", artist: "K. L. Sreeram", genre: "Traditional Instrumental", mood: "neutral" },
            { title: "Kanyamariam", artist: "K. L. Sreeram", genre: "Instrumental", mood: "neutral" },
            { title: "Oppanapattu", artist: "K. L. Sreeram", genre: "Folk Instrumental", mood: "neutral" },
            { title: "Kaikottikali", artist: "K. L. Sreeram", genre: "Traditional Instrumental", mood: "neutral" },
            { title: "Harivarasanam (Instrumental)", artist: "Ranjin Raj", genre: "Instrumental", mood: "neutral" },

            // Instrumental film covers
            { title: "Pattil Ee Pattil (Instrumental)", artist: "Sreeram Gokul", genre: "Film Instrumental", mood: "neutral" },
            { title: "Swapnam Oru Chak (Instrumental)", artist: "Vaikom Vijayalakshmi", genre: "Film Instrumental", mood: "neutral" },
            { title: "Cham Cham (Instrumental)", artist: "C. S. Balasankar", genre: "Film Instrumental", mood: "neutral" },
            { title: "Kaatte Kaatte (Instrumental)", artist: "Vaikom Vijayalakshmi", genre: "Film Instrumental", mood: "neutral" },
            { title: "Aliyarude Omana Beevi (Instrumental)", artist: "Sharan Appus", genre: "Film Instrumental", mood: "neutral" },
            { title: "Thamapookavanathil (Instrumental)", artist: "Vaikom Vijayalakshmi", genre: "Film Instrumental", mood: "neutral" },
            { title: "Mazhathulli Palunkukal (Instrumental)", artist: "S. A. Swamy", genre: "Film Instrumental", mood: "neutral" },
            { title: "Naattumaviloru (Instrumental)", artist: "Vaikom Vijayalakshmi", genre: "Film Instrumental", mood: "neutral" },
            { title: "Premikkumbol (Instrumental)", artist: "Gautham Dravid", genre: "Film Instrumental", mood: "neutral" },
            { title: "Karukarekaruthoru (Instrumental)", artist: "Sharan Appus", genre: "Film Instrumental", mood: "neutral" },

            // Mellow Malayalam lo-fi
            { title: "Neela Nilave - Rainy Lofi", artist: "The Independeners, Kapil Kapilan", genre: "Lo-fi", mood: "neutral" },
            { title: "Pakaliravukal - Lofi", artist: "Ajx, Neha Nair", genre: "Lo-fi", mood: "neutral" },
            { title: "Kiliye Kiliye - Lofi", artist: "Alvin Bruno, S. Janaki", genre: "Lo-fi", mood: "neutral" },
            { title: "Jupiter Mazha (Lofi Flip)", artist: "blu sonic, Sruthi", genre: "Lo-fi", mood: "neutral" },
            { title: "Neelavana Cholayil - Ambient Lofi", artist: "Aelo, K. J. Yesudas, Gangai Amaran", genre: "Ambient Lo-fi", mood: "neutral" },
            { title: "Muthuchippi (Lofi)", artist: "Chris Wayne, Shaan Rahman, Sachin Warrier, Ramya Nambessan", genre: "Lo-fi", mood: "neutral" },
            { title: "Payye Veesum (Lofi)", artist: "Chris Wayne, Sachin Warrier, Ashwin Gopakumar, Sneha Warrier", genre: "Lo-fi", mood: "neutral" },
            { title: "Oru Pushpam Mathram - Lofi Cover", artist: "Akshay Nath M. S., Christy Aby Varghese", genre: "Lo-fi Cover", mood: "neutral" },
            { title: "Mizhiyoram - Ambient Lofi", artist: "Chris Wayne, S. Janaki", genre: "Ambient Lo-fi", mood: "neutral" },
            { title: "K For Krishna - Lofi", artist: "The Independeners, Aju Varghese", genre: "Lo-fi", mood: "neutral" },
            { title: "Nee Madhu Pakaru - Sleep Lofi", artist: "EternaLove, K. J. Yesudas", genre: "Sleep Lo-fi", mood: "neutral" },
            { title: "Aadivaa Kaatte - Chill Lofi", artist: "Ajx, S. Janaki", genre: "Chill Lo-fi", mood: "neutral" },
            { title: "Ormakal Verodum (Lofi)", artist: "", genre: "Lo-fi", mood: "neutral" },
            { title: "Ottamuri Vakkumayi - Lofi", artist: "Phèno, Pradeep Kumar", genre: "Lo-fi", mood: "neutral" },
            { title: "Alliyambal Kadavil - Ambient Lofi", artist: "Joyal MJ, K. J. Yesudas", genre: "Ambient Lo-fi", mood: "neutral" },
            { title: "Anuragaganam Pole - Lofi Chill", artist: "Alvin Bruno, P. Jayachandran", genre: "Chill Lo-fi", mood: "neutral" },
            { title: "Sita Kalyana - Ambient Lofi", artist: "Aelo, Akhila Anand, Akhil J. Chand, Jakes Bejoy", genre: "Ambient Lo-fi", mood: "neutral" },
            { title: "Doore Oru Mukilin - Chill Lofi Mix", artist: "Kael Produced, Charles Simon, Hesham Abdul Wahab, SMXI", genre: "Chill Lo-fi", mood: "neutral" },
            { title: "Ente Swapnathin - Ambient Lofi", artist: "Aelo, K. J. Yesudas", genre: "Ambient Lo-fi", mood: "neutral" },
            { title: "Ponnin Kanikkonna Wow Song (Lofi)", artist: "", genre: "Lo-fi", mood: "neutral" },

            // More instrumental / low-intensity options
            { title: "Ganapathi Thunayaruluka (Instrumental)", artist: "Ranjin Raj", genre: "Film Instrumental", mood: "neutral" },
            { title: "Ambadi Thumbi (Instrumental)", artist: "Ranjin Raj", genre: "Film Instrumental", mood: "neutral" },
            { title: "Nangeli Poove (Instrumental)", artist: "Ranjin Raj", genre: "Film Instrumental", mood: "neutral" },
            { title: "Onnam Padi Mele (Instrumental)", artist: "Ranjin Raj", genre: "Film Instrumental", mood: "neutral" },
            { title: "Kannadi Kavilathu (Instrumental Version)", artist: "", genre: "Film Instrumental", mood: "neutral" },
            { title: "Muhabathin Athar (Instrumental Version)", artist: "", genre: "Film Instrumental", mood: "neutral" },
            { title: "Violin Duo", artist: "", genre: "Instrumental", mood: "neutral" },
            { title: "Maya Murali (Instrumental)", artist: "", genre: "Instrumental", mood: "neutral" },
            { title: "Musical Wind", artist: "", genre: "Instrumental", mood: "neutral" },
            { title: "Veena Gaanam", artist: "", genre: "Veena Instrumental", mood: "neutral" }
        ],
        message: 'നീയാരാ  ഫ്രണ്ട്‌സ് ഫിലിമിലെ ജയറാമോ??',
        color: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        icon: 'Leaf',
    },
};
