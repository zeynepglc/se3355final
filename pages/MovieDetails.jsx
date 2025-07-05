import { useParams } from "react-router-dom";
import movieData from "../data/movieData";
import "../styles.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieData.find((m) => m._id === id);

  if (!movie) return <p>Film bulunamadı.</p>;

  return (
    <div className="container">
      <h1 className="title">{movie.title} ({movie.year})</h1>
      <img src={movie.poster} alt={movie.title} style={{ maxWidth: "300px" }} />
      <p><strong>🎭 Tür:</strong> {movie.genre.join(", ")}</p>
      <p><strong>🎬 Yönetmen:</strong> {movie.director}</p>
      <p><strong>⏱ Süre:</strong> {movie.duration}</p>
      <p><strong>⭐ Puan:</strong> {movie.rating}</p>
      <p><strong>📖 Açıklama:</strong> {movie.description}</p>
    </div>
  );
};

export default MovieDetails;
