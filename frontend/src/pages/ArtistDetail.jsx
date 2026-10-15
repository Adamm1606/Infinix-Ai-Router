import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockArtists, mockSongs, mockAlbums } from '../mockData';
import { Play, Shuffle } from 'lucide-react';

const ArtistDetail = ({ onPlaySong }) => {
  const { id } = useParams();
  const artist = mockArtists.find((a) => a.id === id);

  if (!artist) {
    return <div className="text-white">Artist not found</div>;
  }

  const artistSongs = mockSongs.filter((song) => artist.topSongs.includes(song.id));
  const artistAlbums = mockAlbums.filter((album) => album.artist === artist.name);

  return (
    <div className="pb-32">
      {/* Artist Header */}
      <div className="flex items-end gap-6 mb-8 bg-gradient-to-b from-[#333333] to-transparent p-8 rounded-lg">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-48 h-48 rounded-full shadow-2xl"
        />
        <div>
          <p className="text-sm font-semibold text-white mb-2">ARTIST</p>
          <h1 className="text-white text-6xl font-bold mb-4">{artist.name}</h1>
          <p className="text-white text-lg">{artist.followers} followers</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mb-8">
        <button
          className="bg-green-500 hover:bg-green-400 text-black rounded-full p-4 transition-all hover:scale-105"
          onClick={() => artistSongs.length > 0 && onPlaySong(artistSongs[0])}
        >
          <Play size={24} className="fill-black" />
        </button>
        <button className="border border-[#b3b3b3] text-[#b3b3b3] hover:text-white hover:border-white rounded-full p-3 transition-colors">
          <Shuffle size={24} />
        </button>
      </div>

      {/* Popular Tracks */}
      <section className="mb-12">
        <h2 className="text-white text-2xl font-bold mb-4">Popular</h2>
        <div className="space-y-2">
          {artistSongs.map((song, index) => (
            <div
              key={song.id}
              className="flex items-center gap-4 p-3 rounded hover:bg-[#282828] transition-colors cursor-pointer group"
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

      {/* Albums */}
      <section>
        <h2 className="text-white text-2xl font-bold mb-4">Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {artistAlbums.map((album) => (
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
              <p className="text-[#b3b3b3] text-sm">{album.year}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistDetail;
