import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "api";

const TrendingsMovies = () => { 
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => { 
            const result = await getTrendingMovies();
            setMovies(result);
        }
        fetchMovies();
    }, [])

    return (
        <div className="trending-movies__container">
            <h1 className="trending-movies__title">Trending today</h1>   
            <ul className="trending-movies__list">
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className="trending-movies__item">
                            <Link to={`movies/${movie.id}`} className="trending-movies__name">{movie.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default TrendingsMovies;
