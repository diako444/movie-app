import './MovieCard.css';

function MovieCard({ movie }) {
  const {
    title,
    poster,
    year,
    genre,
    rating,
  } = movie;

  return (
    <article className="movie-card">
      <div className="movie-card__image-wrapper">
        <img
          className="movie-card__image"
          src={poster}
          alt={`${title} movie poster`}
          loading="lazy"
          width="300"
          height="450"
        />

        <span className="movie-card__rating">
          ★ {rating}
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
    </article>
  );
}

export default MovieCard;
