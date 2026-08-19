import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid/MovieGrid';
import { movies } from './data/movies';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return movies;

    return movies.filter((movie) => {
      const searchableText = `${movie.title} ${movie.genre} ${movie.year} ${movie.rating}`.toLowerCase();
      return searchableText.includes(query);
    });
  }, [searchTerm]);

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main>
        <Hero />
        <MovieGrid movies={filteredMovies} />
      </main>
    </>
  );
}

export default App;
