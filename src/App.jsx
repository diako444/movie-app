import { useState, useMemo } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid/MovieGrid';
import { movies } from './data/movies';
import MovieDetailsModal from './components/MovieDetailsModal/MovieDetailsModal';

import './App.css';

const MOVIES_PER_PAGE = 8;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return movies;
    }

    return movies.filter((movie) => {
      const searchableText = [
        movie.title,
        movie.genre,
        movie.year,
        movie.rating,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

  const currentMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
    const endIndex = startIndex + MOVIES_PER_PAGE;

    return filteredMovies.slice(startIndex, endIndex);
  }, [filteredMovies, currentPage]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app">
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <main>
        <Hero />

        <MovieGrid
        movies={currentMovies}
        onSelectMovie={setSelectedMovie}
        />
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />


        {totalPages > 1 && (
          <nav className="pagination" aria-label="Movie pages">
            <button
              type="button"
              className="pagination__button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              Previous
            </button>

            <div className="pagination__pages">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    type="button"
                    key={pageNumber}
                    className={`pagination__button ${
                      currentPage === pageNumber
                        ? 'pagination__button--active'
                        : ''
                    }`}
                    onClick={() => goToPage(pageNumber)}
                    aria-current={
                      currentPage === pageNumber ? 'page' : undefined
                    }
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="pagination__button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              Next
            </button>
          </nav>
        )}
      </main>
    </div>
  );
}

export default App;
