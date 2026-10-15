import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
  Music,
  Video,
  FileText,
} from 'lucide-react';

const MusicPlayer = ({ currentSong, isPlaying, onPlayPause }) => {
  const [playerMode, setPlayerMode] = useState('music'); // music, video, lyrics
  const [volume, setVolume] = useState(70);

  if (!currentSong) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-3 z-50">
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center gap-4 flex-1">
            <img
              src={currentSong.coverUrl}
              alt={currentSong.title}
              className="w-14 h-14 rounded"
            />
            <div>
              <p className="text-white text-sm font-semibold">{currentSong.title}</p>
              <p className="text-[#b3b3b3] text-xs">{currentSong.artist}</p>
            </div>
            <button className="text-[#b3b3b3] hover:text-white transition-colors ml-4">
              <Heart size={20} />
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center gap-4 mb-2">
              <button className="text-[#b3b3b3] hover:text-white transition-colors">
                <Shuffle size={20} />
              </button>
              <button className="text-[#b3b3b3] hover:text-white transition-colors">
                <SkipBack size={24} />
              </button>
              <button
                onClick={onPlayPause}
                className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}
              </button>
              <button className="text-[#b3b3b3] hover:text-white transition-colors">
                <SkipForward size={24} />
              </button>
              <button className="text-[#b3b3b3] hover:text-white transition-colors">
                <Repeat size={20} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full max-w-xl">
              <span className="text-xs text-[#b3b3b3]">0:00</span>
              <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full overflow-hidden">
                <div className="h-full bg-white w-1/3 rounded-full"></div>
              </div>
              <span className="text-xs text-[#b3b3b3]">{currentSong.duration}</span>
            </div>
          </div>

          {/* Volume & Mode Controls */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Player Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setPlayerMode('music')}
                className={`p-2 rounded transition-colors ${
                  playerMode === 'music' ? 'bg-[#282828] text-white' : 'text-[#b3b3b3] hover:text-white'
                }`}
                title="Music Mode"
              >
                <Music size={20} />
              </button>
              <button
                onClick={() => setPlayerMode('video')}
                className={`p-2 rounded transition-colors ${
                  playerMode === 'video' ? 'bg-[#282828] text-white' : 'text-[#b3b3b3] hover:text-white'
                }`}
                title="Video Mode"
              >
                <Video size={20} />
              </button>
              <button
                onClick={() => setPlayerMode('lyrics')}
                className={`p-2 rounded transition-colors ${
                  playerMode === 'lyrics' ? 'bg-[#282828] text-white' : 'text-[#b3b3b3] hover:text-white'
                }`}
                title="Lyrics Mode"
              >
                <FileText size={20} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Volume2 size={20} className="text-[#b3b3b3]" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-24 h-1 bg-[#4d4d4d] rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, white ${volume}%, #4d4d4d ${volume}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Extended Player View */}
      {playerMode !== 'music' && (
        <div className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center">
          <div className="w-full h-full max-w-6xl p-8">
            {playerMode === 'video' && (
              <div className="w-full h-full flex items-center justify-center">
                <iframe
                  width="100%"
                  height="80%"
                  src={currentSong.videoUrl}
                  title={currentSong.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}

            {playerMode === 'lyrics' && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img
                  src={currentSong.coverUrl}
                  alt={currentSong.title}
                  className="w-64 h-64 rounded-lg mb-8"
                />
                <div className="text-center max-w-2xl">
                  <h2 className="text-white text-3xl font-bold mb-2">{currentSong.title}</h2>
                  <p className="text-[#b3b3b3] text-xl mb-8">{currentSong.artist}</p>
                  <div className="text-white text-lg leading-relaxed whitespace-pre-line">
                    {currentSong.lyrics}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Import Heart icon properly
import { Heart } from 'lucide-react';

export default MusicPlayer;
