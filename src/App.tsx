import React, { useEffect, useState } from 'react';
import { MovieDetails } from './components/MovieDetails';
import { MovieList } from './components/MovieList';
import { movieService } from './services/movie.service';


function App() {

  const [movies, setMovies] = useState([])
  const [showMobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    // Load movies
    const getMovies = async () => {
      const loadedMovies = await movieService.getMovies()
      setMovies(loadedMovies)
    }
    getMovies()
  }, [])

  return (
    <div className="starwars-app">
      <div className="app-container">
        <MovieList movies={movies} showMobileMenu={showMobileMenu} />
        <MovieDetails setMobileMenu={setMobileMenu} />
      </div>
    </div>
  );
}

export default App;
