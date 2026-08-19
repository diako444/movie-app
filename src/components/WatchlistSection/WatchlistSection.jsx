import MovieGrid from '../MovieGrid/MovieGrid';
import './WatchlistSection.css';

function WatchlistSection({
  movies,
  watchlist,
  onToggleWatchlist,
}) {
  // Do not display an empty section.
  if (movies.length === 0) {
    return null;
  }

  return (
    <section className="watchlist-section" aria-labelledby="watchlist-title">
      <div className="watchlist-section__header">
        <div>
          <p className="watchlist-section__eyebrow">YOUR COLLECTION</p>

          <h2 id="watchlist-title" className="watchlist-section__title">
            <span aria-hidden="true">♥</span> My Watchlist
          </h2>
        </div>

        <span className="watchlist-section__count">
          {movies.length} {movies.length === 1 ? 'movie' : 'movies'}
        </span>
      </div>

      <MovieGrid
        movies={movies}
        watchlist={watchlist}
        onToggleWatchlist={onToggleWatchlist}
      />
    </section>
  );
}

export default WatchlistSection;