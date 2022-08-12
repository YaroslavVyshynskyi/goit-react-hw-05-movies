import React from "react";
import PropTypes from "prop-types";

const GetTrendingMovies = (movies) => { 
    return (
        <div className="trending-movies__container">
            <h1 className="trending-movies__title">Trending today</h1>   
            <ul className="trending-movies__list">
                {movies.map((movie) => {
                    return (
                        <li kei={id} className="trending-movies__item">
                            <span className="trending-movies__name">${movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default GetTrendingMovies;

GetTrendingMovies.PropTypes = {
    movies: PropTypes.arrayOf(title: PropTypes.string.isRequired).isRequired,
};    