import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';

function MovieGrid({
  movies,
  onSelectMovie,
  watchlist,
  onToggleWatchlist,
}) {
  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelectMovie={onSelectMovie}
          watchlist={watchlist}
          onToggleWatchlist={onToggleWatchlist}
        />
      ))}
    </section>
  );
}

export default MovieGrid;
