import React from 'react'
import {IMovieProps} from '../interfaces/movie'


interface IMoviesProps {
    movies: IMovieProps[];
    showMobileMenu: boolean;
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentMovie: React.Dispatch<React.SetStateAction<IMovieProps | null>>;
}

export const MovieList = ({movies, showMobileMenu, setMobileMenu, setCurrentMovie}: IMoviesProps) => {

    const handleClick = (movie: IMovieProps) => {
        setCurrentMovie(movie)
        setMobileMenu(false)
    }

    const myFavoriteMovies = movies.filter(movie => movie.isFavorite)
    const otherMovies = movies.filter(movie => !movie.isFavorite)

    return (
        <div className={`movies-sidebar ${showMobileMenu ? 'show' : ''}`}>
            <h2>Movies</h2>
            <div className="movies-list">
                {myFavoriteMovies.length > 0 && <p>My favorites</p>}
                {myFavoriteMovies.map((movie, idx) => {
                    return <div key={`movie_${idx}`} className="movie-preview" onClick={() => {handleClick(movie)}}>
                                <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
                                <h5>{movie.director}</h5>
                            </div>
                })}

                {(otherMovies.length > 0 && myFavoriteMovies.length > 0) && <p>Movies</p>}
                {otherMovies.map((movie, idx) => {
                    return <div key={`movie_${idx}`} className="movie-preview" onClick={() => {handleClick(movie)}}>
                                <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
                                <h5>{movie.director}</h5>
                            </div>
                })}
            </div>
        </div>
    )
}
