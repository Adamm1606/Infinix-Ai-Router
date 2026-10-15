import React from 'react';
import { mockSongs, mockAlbums, mockArtists, mockPlaylists } from '../mockData';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Home = ({ onPlaySong }) => {
  return (
    <div className="pb-32">
      {/* Recently Played */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockSongs.slice(0, 4).map((song) => (
            <div
              key={song.id}
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-all group cursor-pointer"
              onClick={() => onPlaySong(song)}
            >
              <div className="relative mb-4">
                <img
                  src={song.coverUrl}
                  alt={song.title}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                  <Play size={20} className="text-black fill-black" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-1 truncate">{song.title}</h3>
              <p className="text-[#b3b3b3] text-sm truncate">{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Albums */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-2xl font-bold">Popular Albums</h2>
          <Link to="/albums" className="text-[#b3b3b3] hover:text-white text-sm font-semibold">
            See all
          </Link>
        </div>
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
              <p className="text-[#b3b3b3] text-sm truncate">{album.artist}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Artists */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-4">Featured Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockArtists.map((artist) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.id}`}
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-all text-center"
            >
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full aspect-square object-cover rounded-full mb-4"
              />
              <h3 className="text-white font-semibold mb-1 truncate">{artist.name}</h3>
              <p className="text-[#b3b3b3] text-sm">Artist</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Your Playlists */}
      <section>
        <h2 className="text-white text-2xl font-bold mb-4">Your Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockPlaylists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-all group"
            >
              <div className="relative mb-4">
                <img
                  src={playlist.coverUrl}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                  <Play size={20} className="text-black fill-black" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-1 truncate">{playlist.title}</h3>
              <p className="text-[#b3b3b3] text-sm line-clamp-2">{playlist.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
