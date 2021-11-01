import React, { useEffect, useState } from 'react';
import { MovieDetails } from '../components/MovieDetails';
import { MovieList } from '../components/MovieList';
import { movieService } from '../services/movie.service';
import { IMovieProps } from '../interfaces/movie'
import { Screen } from '../components/Screen';


export function MoviesApp() {

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
  
  const onToggleFavorite = (episodeId: number) => {
    const data = movieService.toggleFavorite(episodeId)
    setMovies(data.movies)
    setCurrentMovie(data.currentMovie)
  }

  return (
    <div className="starwars-app">
      <div className="app-container">
        <MovieList movies={movies} showMobileMenu={showMobileMenu} setMobileMenu={setMobileMenu} setCurrentMovie={setCurrentMovie} />
        <MovieDetails setMobileMenu={setMobileMenu} currentMovie={currentMovie} onToggleFavorite={onToggleFavorite} />
      </div>
      <Screen isOpen={showMobileMenu} exitScreen={setMobileMenu}/>
    </div>
  );
}
