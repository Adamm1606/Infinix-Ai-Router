import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockSongs, mockAlbums, mockArtists } from '../mockData';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const SearchResults = ({ onPlaySong }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredSongs = mockSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  const filteredAlbums = mockAlbums.filter(
    (album) =>
      album.title.toLowerCase().includes(query.toLowerCase()) ||
      album.artist.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArtists = mockArtists.filter((artist) =>
    artist.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!query) {
    return (
      <div className="pb-32">
        <h1 className="text-white text-4xl font-bold mb-8">Search</h1>
        <p className="text-[#b3b3b3]">Search for songs, albums, or artists</p>
      </div>
    );
  }

  return (
    <div className="pb-32">
      <h1 className="text-white text-4xl font-bold mb-8">Search results for "{query}"</h1>

      {/* Songs */}
      {filteredSongs.length > 0 && (
        <section className="mb-12">
          <h2 className="text-white text-2xl font-bold mb-4">Songs</h2>
          <div className="bg-[#181818] rounded-lg">
            {filteredSongs.map((song, index) => (
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
                <p className="text-[#b3b3b3] text-sm">{song.duration}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Artists */}
      {filteredArtists.length > 0 && (
        <section className="mb-12">
          <h2 className="text-white text-2xl font-bold mb-4">Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredArtists.map((artist) => (
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
      )}

      {/* Albums */}
      {filteredAlbums.length > 0 && (
        <section>
          <h2 className="text-white text-2xl font-bold mb-4">Albums</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredAlbums.map((album) => (
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
                <p className="text-[#b3b3b3] text-sm">{album.artist}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {filteredSongs.length === 0 &&
        filteredAlbums.length === 0 &&
        filteredArtists.length === 0 && (
          <p className="text-[#b3b3b3]">No results found for "{query}"</p>
        )}
    </div>
  );
};

export default SearchResults;
