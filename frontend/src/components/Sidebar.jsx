import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { mockPlaylists } from '../mockData';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Library, label: 'Your Library', path: '/library' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-black h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold">Spotify</h1>
      </div>

      <nav className="flex-1 px-2">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#282828] text-white'
                    : 'text-[#b3b3b3] hover:text-white'
                }`}
              >
                <item.icon size={24} />
                <span className="font-semibold">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 px-4">
          <button className="flex items-center gap-4 text-[#b3b3b3] hover:text-white transition-colors">
            <Plus size={24} />
            <span className="font-semibold">Create Playlist</span>
          </button>
          <button className="flex items-center gap-4 text-[#b3b3b3] hover:text-white transition-colors mt-4">
            <Heart size={24} />
            <span className="font-semibold">Liked Songs</span>
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-[#282828]">
          <div className="px-4 space-y-3">
            {mockPlaylists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className="block text-[#b3b3b3] hover:text-white transition-colors text-sm"
              >
                {playlist.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
