import { useEffect, useState } from "react";
import movieData from "../data/movieData";
import "../styles.scss";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  const addToWatchlist = (id) => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!stored.includes(id)) {
      const updated = [...stored, id];
      localStorage.setItem("watchlist", JSON.stringify(updated));
    }
  };

  return (
    <div className="container">
      <h1 className="title">🎬 Film Listesi</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie._id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h2>{movie.title} ({movie.year})</h2>
              <p><strong>🎭 Tür:</strong> {movie.genre.join(", ")}</p>
              <p><strong>⭐ Puan:</strong> {movie.rating}</p>
              <Link to={`/movie/${movie._id}`}>Detayları Gör</Link>
              <button onClick={() => addToWatchlist(movie._id)}>+ İzleme Listesine Ekle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
