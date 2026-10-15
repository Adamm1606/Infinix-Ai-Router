import React from 'react';
import { useParams } from 'react-router-dom';
import { mockPlaylists, mockSongs } from '../mockData';
import { Play, Clock } from 'lucide-react';

const PlaylistDetail = ({ onPlaySong }) => {
  const { id } = useParams();
  const playlist = mockPlaylists.find((p) => p.id === id);

  if (!playlist) {
    return <div className="text-white">Playlist not found</div>;
  }

  const playlistSongs = mockSongs.filter((song) => playlist.songs.includes(song.id));

  return (
    <div className="pb-32">
      {/* Playlist Header */}
      <div className="flex items-end gap-6 mb-8 bg-gradient-to-b from-[#505050] to-transparent p-8 rounded-lg">
        <img
          src={playlist.coverUrl}
          alt={playlist.title}
          className="w-48 h-48 rounded shadow-2xl"
        />
        <div>
          <p className="text-sm font-semibold text-white mb-2">PLAYLIST</p>
          <h1 className="text-white text-5xl font-bold mb-4">{playlist.title}</h1>
          <p className="text-white text-base mb-2">{playlist.description}</p>
          <p className="text-white text-sm">{playlistSongs.length} songs</p>
        </div>
      </div>

      {/* Play Button */}
      <div className="mb-6">
        <button
          className="bg-green-500 hover:bg-green-400 text-black rounded-full p-4 transition-all hover:scale-105"
          onClick={() => playlistSongs.length > 0 && onPlaySong(playlistSongs[0])}
        >
          <Play size={24} className="fill-black" />
        </button>
      </div>

      {/* Songs List */}
      <div className="bg-[#181818] rounded-lg">
        <div className="flex items-center gap-4 px-4 py-3 border-b border-[#282828] text-[#b3b3b3] text-sm">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">TITLE</span>
          <span className="w-32">ALBUM</span>
          <Clock size={16} />
        </div>
        {playlistSongs.map((song, index) => (
          <div
            key={song.id}
            className="flex items-center gap-4 p-4 hover:bg-[#282828] transition-colors cursor-pointer group"
            onClick={() => onPlaySong(song)}
          >
            <span className="text-[#b3b3b3] text-sm w-6 text-center group-hover:hidden">
              {index + 1}
            </span>
            <Play
              size={16}
              className="text-white hidden group-hover:block w-6 text-center"
            />
            <img src={song.coverUrl} alt={song.title} className="w-12 h-12 rounded" />
            <div className="flex-1">
              <p className="text-white font-semibold">{song.title}</p>
              <p className="text-[#b3b3b3] text-sm">{song.artist}</p>
            </div>
            <p className="text-[#b3b3b3] text-sm w-32 truncate">{song.album}</p>
            <p className="text-[#b3b3b3] text-sm">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;
