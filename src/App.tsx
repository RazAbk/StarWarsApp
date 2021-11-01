import React, { useEffect, useState } from 'react';
import { MovieDetails } from './components/MovieDetails';
import { MovieList } from './components/MovieList';
import { movieService } from './services/movie.service';
import { IMovieProps } from './interfaces/movie'
import { Screen } from './components/Screen';


function App() {

  const [movies, setMovies] = useState([])
  const [currentMovie, setCurrentMovie] = useState<IMovieProps | null >(null)
  const [showMobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    // Load movies
    const getMovies = async () => {
      const loadedMovies = await movieService.getMovies()
      setMovies(loadedMovies)
      setCurrentMovie(loadedMovies[0])
    }
    getMovies()
  }, [])

  return (
    <div className="starwars-app">
      <div className="app-container">
        <MovieList movies={movies} showMobileMenu={showMobileMenu} setCurrentMovie={setCurrentMovie} />
        <MovieDetails setMobileMenu={setMobileMenu} currentMovie={currentMovie} />
      </div>
      <Screen isOpen={showMobileMenu} exitScreen={setMobileMenu}/>
    </div>
  );
}

export default App;
