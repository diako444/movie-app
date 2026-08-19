import { useEffect } from 'react';
import './MovieDetailsModal.css';

function MovieDetailsModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const description =
    movie.description ||
    'No description is available for this movie yet.';

  return (
    <div
      className="movie-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="movie-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
      >
        <button
          className="movie-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close movie details"
        >
          ×
        </button>

        <div className="movie-modal__poster-container">
          <img
            className="movie-modal__poster"
            src={movie.image}
            alt={`${movie.title} movie poster`}
            width="500"
            height="750"
            decoding="async"
          />
        </div>

        <div className="movie-modal__info">
          <p className="movie-modal__eyebrow">Movie details</p>

          <h2 id="movie-modal-title" className="movie-modal__title">
            {movie.title}
          </h2>

          <div className="movie-modal__metadata">
            <span>{movie.year}</span>
            <span aria-hidden="true">•</span>
            <span>{movie.genre}</span>
            <span aria-hidden="true">•</span>
            <span className="movie-modal__rating">
              <span aria-hidden="true">★</span> {movie.rating}/10
            </span>
          </div>

          <p className="movie-modal__description">{description}</p>

          <button
            className="movie-modal__watch-button"
            type="button"
            onClick={() => window.alert(`"${movie.title}" added to your watchlist.`)}
          >
            + Add to Watchlist
          </button>
        </div>
      </section>
    </div>
  );
}

export default MovieDetailsModal;