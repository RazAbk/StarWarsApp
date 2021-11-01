import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IMovieProps } from '../interfaces/movie'
import { movieService } from '../services/movie.service'

interface IMovieDetailsProps {
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
    currentMovie: IMovieProps|null
}

export const MovieDetails = ({setMobileMenu, currentMovie}: IMovieDetailsProps) => {

    const toggleMobileMenu = () => {
        setMobileMenu(prevState => !prevState)
    }

    return (
        <div className="movie-details">
            <GiHamburgerMenu className="mobile-hamburger-btn" onClick={toggleMobileMenu}/>
            {currentMovie && currentMovie.title}
        </div>
    )
}
