import React from 'react'
import {IMovieProps} from '../interfaces/movie'
import { AiOutlineHeart } from 'react-icons/ai'

interface IMoviesProps {
    movies: IMovieProps[];
    showMobileMenu: boolean;
    setCurrentMovie: React.Dispatch<React.SetStateAction<IMovieProps | null>>;
}

export const MovieList = ({movies, showMobileMenu, setCurrentMovie}: IMoviesProps) => {

    return (
        <div className={`movies-sidebar ${showMobileMenu ? 'show' : ''}`}>
            <h2>Movies</h2>
            <div className="movies-list">
                {movies.map((movie, idx) => {
                    return <div key={`movie_${idx}`} className="movie-preview" onClick={() => {setCurrentMovie(movie)}}>
                                <div className="movie-info">
                                    <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
                                    <h5>{movie.director}</h5>
                                </div>
                                <div className="movie-favorite-toggle">
                                    <AiOutlineHeart />
                                </div>
                            </div>
                })}
            </div>
        </div>
    )
}
