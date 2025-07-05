import { useState, useEffect } from "react";
import movieData from "../data/movieData";
import "../styles.scss";

const Watchlist = () => {
  const [watchlistIds, setWatchlistIds] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlistIds(stored);
  }, []);

  useEffect(() => {
    const filtered = movieData.filter((movie) => watchlistIds.includes(movie._id));
    setWatchlist(filtered);
  }, [watchlistIds]);

  const removeFromWatchlist = (id) => {
    const updated = watchlistIds.filter((wid) => wid !== id);
    setWatchlistIds(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1 className="title">🎥 İzleme Listem</h1>
      {watchlist.length === 0 ? (
        <p>Henüz izleme listeniz boş.</p>
      ) : (
        <div className="grid">
          {watchlist.map((movie) => (
            <div key={movie._id} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <div className="movie-info">
                
                <h2>{movie.title} ({movie.year})</h2>
                <p>{movie.genre.join(", ")}</p>
                <button onClick={() => removeFromWatchlist(movie._id)}>Listeden Kaldır</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
