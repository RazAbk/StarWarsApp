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

    return (
        <div className={`movies-sidebar ${showMobileMenu ? 'show' : ''}`}>
            <h2>Movies</h2>
            <div className="movies-list">
                {movies.map((movie, idx) => {
                    return <div key={`movie_${idx}`} className="movie-preview" onClick={() => {handleClick(movie)}}>
                                <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
                                <h5>{movie.director}</h5>
                            </div>
                })}
            </div>
        </div>
    )
}
