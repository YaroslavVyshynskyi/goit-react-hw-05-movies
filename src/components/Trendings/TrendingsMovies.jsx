import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "api";
import css from "./TrendingsMovies.module.css"

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
        <div className={css.trendingMovies__container}>
            <h1 className={css.trendingMovies__title}>Trending today</h1>   
            <ul className={css.trendingMovies__list}>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className={css.trendingMovies__item}>
                            <Link to={`movies/${movie.id}`} className={css.trendingMovies__name}>{movie.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default TrendingsMovies;
