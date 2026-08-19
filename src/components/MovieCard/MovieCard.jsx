import './MovieCard.css';

function MovieCard({
  movie,
  onSelectMovie,
  watchlist,
  onToggleWatchlist,
}) {
  if (!movie) return null;
  const isFavorite = watchlist?.some(
  (item) => item.id === movie.id
);

  const {
    title,
    year,
    genre,
    rating,
    poster,
  } = movie;

  return (
    <article className="movie-card">
      <button
        className="movie-card__button"
        type="button"
        onClick={() => onSelectMovie(movie)}
        aria-label={`View details for ${title}`}
      >
        <div className="movie-card__image-wrapper">
          <img
            className="movie-card__image"
            src={poster}
            alt={`${title} movie poster`}
            loading="lazy"
            decoding="async"
            width="300"
            height="450"
          />

          <span className="movie-card__rating">
            <span aria-hidden="true">★</span> {rating}
          </span>
        </div>

        <div className="movie-card__content">
          <h3 className="movie-card__title">{title}</h3>

          <div className="movie-card__meta">
            <span>{year}</span>
            <span aria-hidden="true">•</span>
            <span>{genre}</span>
          </div>
        </div>
      </button>
       <button
        className={`movie-card__watchlist ${
          isFavorite ? 'movie-card__watchlist--active' : ''
        }`}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onToggleWatchlist(movie);
        }}
        title={
          isFavorite
            ? 'Remove from Watchlist'
            : 'Add to Watchlist'
        }
        aria-label={
          isFavorite
            ? `Remove ${title} from watchlist`
            : `Add ${title} to watchlist`
        }
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </article>
  );
}

export default MovieCard;
