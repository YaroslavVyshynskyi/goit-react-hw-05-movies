import React from 'react';  
import PropTypes from "prop-types"

const MovieDetails = (movie) => {
    return (
        <div className="movie-details__container">
            <div className="movie-details__poster">
                <img src = "${movie.poster_path}" alt="${movie.title}" />
            </div>
            <span className='back__link'>Go back</span>
            <div className="movie-details__info">
                <h1 className="movie__title">${movie.title}</h1>
                <p className='movie-details__text'>User Score: </p>
                <h2 className='movie-details__title'>Overview</h2>
                <p className='movie-details__text'>${movie.overview}</p>
                <h2 className='movie-details__title'>Genres</h2>
                <p className='movie-details__text'>${movie.genre_ids}</p>
            </div>
        </div>
    )  
};

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        genre_ids: PropTypes.arrayOf.isRequired
    }).isRequired
}

export default MovieDetails;