import './MovieCard.css';

function MovieCard({ movie, onSelectMovie }) {
  if (!movie) return null;

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
    </article>
  );
}

export default MovieCard;
