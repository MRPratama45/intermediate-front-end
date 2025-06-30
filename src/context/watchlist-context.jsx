import { createContext, useState } from 'react';

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  const addToWatchlist = (movie) => {
    if (!watchlist.some(item => item.id === movie.id)) {
      const newWatchlist = [...watchlist, movie];
      setWatchlist(newWatchlist);
      localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
      alert(`Film ${movie.title} berhasil ditambahkan ke daftar saya`);
    }
  };

  const removeFromWatchlist = (movieId) => {
    const newWatchlist = watchlist.filter(item => item.id !== movieId);
    setWatchlist(newWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    alert(`Film berhasil dihapus dari daftar saya`);
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};