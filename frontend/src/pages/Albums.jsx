import React from 'react';
import { mockAlbums } from '../mockData';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Albums = () => {
  return (
    <div className="pb-32">
      <h1 className="text-white text-4xl font-bold mb-8">All Albums</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
            <p className="text-[#b3b3b3] text-sm">
              {album.artist} • {album.year}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Albums;
