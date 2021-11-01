import axios from "axios"
import { localStorageService } from "./local-storage.service"
import { IMovieProps } from "../interfaces/movie"

export const movieService = {
    getMovies,
    toggleFavorite
}

const API_URL = 'https://swapi.dev/api/films'
const MOVIES_KEY = 'sw_movies'

async function getMovies() {
    let moviesCache = localStorageService.load(MOVIES_KEY) || []
    
    // Return movies from local storage cache
    if(moviesCache && moviesCache.length > 0) return moviesCache
    
    // Return movies from api call
    try{
        const movies = await axios.get(API_URL)
        
        moviesCache = movies.data.results
        localStorageService.save(MOVIES_KEY, moviesCache)
        
        return moviesCache
    } catch(err) {
        console.log('error while getting movies:', err)
    }
}
function toggleFavorite(episodeId: number){
    const moviesCache = localStorageService.load(MOVIES_KEY) || []
    const idx = moviesCache.findIndex((movie: IMovieProps) => movie.episode_id === episodeId)

    moviesCache[idx].isFavorite = !moviesCache[idx].isFavorite

    localStorageService.save(MOVIES_KEY, moviesCache)
    return {movies: moviesCache, currentMovie: moviesCache[idx]}
}