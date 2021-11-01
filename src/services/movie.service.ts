import axios from "axios"
import { localStorageService } from "./local-storage.service"

export const movieService = {
    getMovies
}

const API_URL = 'https://swapi.dev/api/films'
const MOVIES_KEY = 'sw_movies'
// const FAVOURITE_MOVIES_KEY = 'sw_fav_movies'

async function getMovies() {
    let moviesCache = localStorageService.load(MOVIES_KEY) || []

    // Return movies from local storage cache
    console.log('cache call')
    if(moviesCache && moviesCache.length > 0) return moviesCache
    
    // Return movies from api call
    try{
        const movies = await axios.get(API_URL)
        
        moviesCache = movies.data.results
        localStorageService.save(MOVIES_KEY, moviesCache)
        
        console.log('api call')
        return moviesCache
    } catch(err) {
        console.log('error while getting movies:', err)
    }
}