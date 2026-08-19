import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";

function MovieGrid({ movies, onSelectMovie }) {

  if (!movies || movies.length === 0) {
    return (
      <p className="movie-grid__empty">
        No movies found. Try a different search.
      </p>
    );
  }

  return (
    <section className="movie-grid-section" aria-labelledby="movie-grid-title">
      <div className="movie-grid-section__header">
        <h2 id="movie-grid-title">Popular Movies</h2>
        <span>{movies.length} results</span>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelectMovie={onSelectMovie}
/>

        ))}
      </div>
    </section>
  );
}

export default MovieGrid;
