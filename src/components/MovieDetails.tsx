import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IMovieProps } from '../interfaces/movie'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface IMovieDetailsProps {
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
    currentMovie: IMovieProps | null;
    onToggleFavorite: (epidosId: number) => void;
}

export const MovieDetails = ({ setMobileMenu, currentMovie, onToggleFavorite }: IMovieDetailsProps) => {

    const toggleMobileMenu = () => {
        setMobileMenu(prevState => !prevState)
    }

    return (
        <>
            <GiHamburgerMenu className="mobile-hamburger-btn" onClick={toggleMobileMenu} />
            <div className="movie-details">
                <div className="background-image"></div>
                {currentMovie &&
                    <>
                        <div className="movie-details-top">
                            <h2>{currentMovie.title}</h2>
                            {
                                currentMovie.isFavorite ? 
                                <AiFillHeart className="favorite-icon" onClick={()=> {onToggleFavorite(currentMovie.episode_id)}} />
                                :
                                <AiOutlineHeart className="favorite-icon" onClick={()=> {onToggleFavorite(currentMovie.episode_id)}} />
                            }
                        </div>
                        <div className="movie-meta-info">
                            <h4>Director: {currentMovie.director}</h4>
                            <h4>Producer: {currentMovie.producer}</h4>
                            <h4>Release date: {currentMovie.release_date}</h4>
                        </div>
                        <p>{currentMovie.opening_crawl}</p>
                    </>
                }
            </div>
        </>
    )
}
