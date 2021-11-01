import React from 'react'
import {IMovieProps} from '../interfaces/movie'

interface IMoviesProps {
    movies: IMovieProps[];
    showMobileMenu: boolean;
}

export const MovieList = ({movies, showMobileMenu}: IMoviesProps) => {

    return (
        <div className={`movies-sidebar ${showMobileMenu ? 'show' : ''}`}>
            <h2>Movies</h2>
            <div className="movies-list">
                {movies.map((movie, idx) => <p key={`movie_${idx}`}>{movie.title}</p>)}
            </div>
        </div>
    )
}
