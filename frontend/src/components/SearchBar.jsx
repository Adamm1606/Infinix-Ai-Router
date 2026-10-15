import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.getElementById('main-content')?.scrollTop || 0;
      setScrolled(scrollTop > 50);
    };

    const mainContent = document.getElementById('main-content');
    mainContent?.addEventListener('scroll', handleScroll);

    return () => mainContent?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <div
      className={`sticky top-0 z-10 transition-all duration-300 ${
        scrolled ? 'bg-[#0f0f0f] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-4 px-8 py-4">
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b3b3b3]"
              size={20}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you want to listen to?"
              className="w-full bg-white text-black rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
