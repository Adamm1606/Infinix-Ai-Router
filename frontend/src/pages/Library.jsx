import React from 'react';
import { mockAlbums, mockSongs } from '../mockData';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Library = ({ onPlaySong }) => {
  return (
    <div className="pb-32">
      <h1 className="text-white text-4xl font-bold mb-8">Your Library</h1>

      {/* Albums Section */}
      <section className="mb-12">
        <h2 className="text-white text-2xl font-bold mb-4">Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockAlbums.map((album) => (
            <Link
              key={album.id}
              to={`/album/${album.id}`}
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-all group"
            >
              <div className="relative mb-4">
                <img
                  src={album.coverUrl}
                  alt={album.title}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                  <Play size={20} className="text-black fill-black" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-1 truncate">{album.title}</h3>
              <p className="text-[#b3b3b3] text-sm">{album.artist} • {album.year}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* All Songs */}
      <section>
        <h2 className="text-white text-2xl font-bold mb-4">All Songs</h2>
        <div className="bg-[#181818] rounded-lg">
          {mockSongs.map((song, index) => (
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
              <img src={song.coverUrl} alt={song.title} className="w-10 h-10 rounded" />
              <div className="flex-1">
                <p className="text-white font-semibold">{song.title}</p>
                <p className="text-[#b3b3b3] text-sm">{song.artist}</p>
              </div>
              <p className="text-[#b3b3b3] text-sm">{song.album}</p>
              <p className="text-[#b3b3b3] text-sm">{song.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Library;
