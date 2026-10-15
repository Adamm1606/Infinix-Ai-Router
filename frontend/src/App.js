import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MusicPlayer from './components/MusicPlayer';
import Home from './pages/Home';
import Library from './pages/Library';
import ArtistDetail from './pages/ArtistDetail';
import AlbumDetail from './pages/AlbumDetail';
import SearchResults from './pages/SearchResults';
import PlaylistDetail from './pages/PlaylistDetail';
import Albums from './pages/Albums';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex h-screen bg-[#0f0f0f]">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <div
              id="main-content"
              className="flex-1 overflow-y-auto bg-[#0f0f0f] px-8 py-6"
            >
              <SearchBar />
              <Routes>
                <Route path="/" element={<Home onPlaySong={handlePlaySong} />} />
                <Route path="/library" element={<Library onPlaySong={handlePlaySong} />} />
                <Route path="/search" element={<SearchResults onPlaySong={handlePlaySong} />} />
                <Route path="/albums" element={<Albums />} />
                <Route
                  path="/artist/:id"
                  element={<ArtistDetail onPlaySong={handlePlaySong} />}
                />
                <Route
                  path="/album/:id"
                  element={<AlbumDetail onPlaySong={handlePlaySong} />}
                />
                <Route
                  path="/playlist/:id"
                  element={<PlaylistDetail onPlaySong={handlePlaySong} />}
                />
              </Routes>
            </div>
          </div>
        </div>
        <MusicPlayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
