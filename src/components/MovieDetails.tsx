import React from 'react'

interface IMovieDetailsProps {
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MovieDetails = ({setMobileMenu}: IMovieDetailsProps) => {

    const toggleMobileMenu = () => {
        setMobileMenu(prevState => !prevState)
    }

    return (
        <div className="movie-details">
            <button className="mobile-hamburger-btn" onClick={toggleMobileMenu}>open</button>
            MovieDetails
        </div>
    )
}
