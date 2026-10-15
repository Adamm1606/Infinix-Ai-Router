import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockAlbums, mockSongs } from '../mockData';
import { Play, Clock } from 'lucide-react';

const AlbumDetail = ({ onPlaySong }) => {
  const { id } = useParams();
  const album = mockAlbums.find((a) => a.id === id);

  if (!album) {
    return <div className="text-white">Album not found</div>;
  }

  const albumSongs = mockSongs.filter((song) => album.songs.includes(song.id));

  return (
    <div className="pb-32">
      {/* Album Header */}
      <div className="flex items-end gap-6 mb-8 bg-gradient-to-b from-[#444444] to-transparent p-8 rounded-lg">
        <img
          src={album.coverUrl}
          alt={album.title}
          className="w-48 h-48 rounded shadow-2xl"
        />
        <div>
          <p className="text-sm font-semibold text-white mb-2">ALBUM</p>
          <h1 className="text-white text-5xl font-bold mb-4">{album.title}</h1>
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold">{album.artist}</span>
            <span>•</span>
            <span>{album.year}</span>
            <span>•</span>
            <span>{albumSongs.length} songs</span>
          </div>
        </div>
      </div>

      {/* Play Button */}
      <div className="mb-6">
        <button
          className="bg-green-500 hover:bg-green-400 text-black rounded-full p-4 transition-all hover:scale-105"
          onClick={() => albumSongs.length > 0 && onPlaySong(albumSongs[0])}
        >
          <Play size={24} className="fill-black" />
        </button>
      </div>

      {/* Songs List */}
      <div className="bg-[#181818] rounded-lg">
        <div className="flex items-center gap-4 px-4 py-3 border-b border-[#282828] text-[#b3b3b3] text-sm">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">TITLE</span>
          <Clock size={16} />
        </div>
        {albumSongs.map((song, index) => (
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
            <div className="flex-1">
              <p className="text-white font-semibold">{song.title}</p>
              <p className="text-[#b3b3b3] text-sm">{song.artist}</p>
            </div>
            <p className="text-[#b3b3b3] text-sm">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
