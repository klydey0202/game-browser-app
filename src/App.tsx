import React, { useState, useEffect, useMemo } from 'react';
import { Game } from './types';
import { fetchGames } from './api/games';
import GameList from './components/GameList';
import Search from './components/Search';
import CategorySelector from './components/CategorySelector';
import ProviderFilter from './components/ProviderFilter';
import Carousel from './components/Carousel';
import FavoritesList from './components/FavoritesList';
import './App.css'

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedProvider, setSelectedProvider] = useState('ALL');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const fetchedGames = await fetchGames();
        setGames(fetchedGames);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load games, Please try again later.');
        setIsLoading(false);
      }
    };

    loadGames();
  }, [])

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || game.category === selectedCategory;
      const matchesProvider = selectedProvider === 'ALL' || game.provider === selectedProvider;
      return matchesSearch && matchesCategory && matchesProvider
    });
  }, [games, searchTerm, selectedCategory, selectedProvider]);

  const filteredFavorites = useMemo(() => {
    return filteredGames.filter((game) => favorites.includes(game.id));
  }, [filteredGames, favorites]);

  const toggleFavorite = (gameId: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(gameId)
        ? prevFavorites.filter((id) => id !== gameId)
        : [...prevFavorites, gameId]
    );
  }

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  }

  if (isLoading) return <div className='text-center mt-[50px] text-[18px]'>Loading. . .</div>
  if (error) return <div className="text-center mt-[50px] text-[18px]">{error}</div>

  return (
    <div className='max-w-[480px] m-auto p-[20px]'>
      <Carousel />
      <Search onSearch={setSearchTerm} />
      <CategorySelector onSelectCategory={setSelectedCategory} />
      <ProviderFilter onSelectProvider={setSelectedProvider} />
      <div className='mb-5'>
        <button onClick={toggleShowFavorites} className='w-full p-[10px] mb-[20px] rounded-md bg-green-500 text-white border-none cursor-pointer'>
          {showFavorites ? 'Show All Games' : 'Show Favorites'}
        </button>
      </div>

      {showFavorites ? (
        <FavoritesList
          games={filteredFavorites}
          onToggleFavorite={toggleFavorite}
        />
      ) : (
        <GameList
          games={filteredGames}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  )
}

export default App;