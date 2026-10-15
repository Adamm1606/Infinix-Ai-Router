export const mockSongs = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/4NRXx6U8ABQ',
    lyrics: 'I been tryin\' to call\nI been on my own for long enough\nMaybe you can show me how to love, maybe\nI\'m going through withdrawals\nYou don\'t even have to do too much\nYou can turn me on with just a touch, baby'
  },
  {
    id: '2',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: 'Divide',
    duration: '3:53',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8',
    lyrics: 'The club isn\'t the best place to find a lover\nSo the bar is where I go\nMe and my friends at the table doing shots\nDrinking fast and then we talk slow'
  },
  {
    id: '3',
    title: 'Starboy',
    artist: 'The Weeknd',
    album: 'Starboy',
    duration: '3:50',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/34Na4j8AVgA',
    lyrics: 'I\'m tryna put you in the worst mood, ah\nP1 cleaner than your church shoes, ah\nMilli point two just to hurt you, ah\nAll red Lamb\' just to tease you, ah'
  },
  {
    id: '4',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    album: 'Divide',
    duration: '4:23',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
    lyrics: 'I found a love for me\nDarling, just dive right in and follow my lead\nWell, I found a girl, beautiful and sweet\nOh, I never knew you were the someone waiting for me'
  },
  {
    id: '5',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/TUVcZfQe-Kw',
    lyrics: 'If you wanna run away with me, I know a galaxy\nAnd I can take you for a ride\nI had a premonition that we fell into a rhythm\nWhere the music don\'t stop for life'
  },
  {
    id: '6',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:35',
    coverUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/XXYlFuWEuKI',
    lyrics: 'I saw you dancing in a crowded room\nYou look so happy when I\'m not with you\nBut then you saw me, caught you by surprise\nA single teardrop falling from your eye'
  },
  {
    id: '7',
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    album: 'X',
    duration: '4:41',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/lp-EO5I60KA',
    lyrics: 'When your legs don\'t work like they used to before\nAnd I can\'t sweep you off of your feet\nWill your mouth still remember the taste of my love?\nWill your eyes still smile from your cheeks?'
  },
  {
    id: '8',
    title: 'Don\'t Start Now',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:03',
    coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/oygrmJFKYZY',
    lyrics: 'If you don\'t wanna see me dancing with somebody\nIf you wanna believe that anything could stop me\nDon\'t show up, don\'t come out\nDon\'t start caring about me now'
  }
];

export const mockArtists = [
  {
    id: '1',
    name: 'The Weeknd',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    followers: '45M',
    topSongs: ['1', '3', '6']
  },
  {
    id: '2',
    name: 'Ed Sheeran',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=500&fit=crop',
    followers: '32M',
    topSongs: ['2', '4', '7']
  },
  {
    id: '3',
    name: 'Dua Lipa',
    imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop',
    followers: '28M',
    topSongs: ['5', '8']
  }
];

export const mockAlbums = [
  {
    id: '1',
    title: 'After Hours',
    artist: 'The Weeknd',
    year: '2020',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    songs: ['1', '6']
  },
  {
    id: '2',
    title: 'Divide',
    artist: 'Ed Sheeran',
    year: '2017',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    songs: ['2', '4']
  },
  {
    id: '3',
    title: 'Starboy',
    artist: 'The Weeknd',
    year: '2016',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    songs: ['3']
  },
  {
    id: '4',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    year: '2020',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    songs: ['5', '8']
  },
  {
    id: '5',
    title: 'X',
    artist: 'Ed Sheeran',
    year: '2014',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    songs: ['7']
  }
];

export const mockPlaylists = [
  {
    id: '1',
    title: 'Chill Vibes',
    description: 'Relax and unwind with these smooth tracks',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    songs: ['1', '4', '5', '7']
  },
  {
    id: '2',
    title: 'Party Mix',
    description: 'Turn up the volume and dance all night',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    songs: ['3', '5', '8']
  },
  {
    id: '3',
    title: 'Workout Beats',
    description: 'Pump up your energy with high tempo hits',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    songs: ['2', '3', '8']
  }
];
