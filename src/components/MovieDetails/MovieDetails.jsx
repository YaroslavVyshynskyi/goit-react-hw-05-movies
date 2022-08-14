import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import { getMovieDetails } from 'api';
import css from "./MovieDetails.module.css"

const IMAGE_PLACEHOLDER = "https://cdn.vectorstock.com/i/1000x1000/60/33/film-clip-black-silhouette-icon-vector-20326033.webp"

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        if (!movieId) {
            return
        }
        const fetchMovie = async () => {
            const result = await getMovieDetails(movieId);
            setMovie(result);
        }
        fetchMovie();
    }, [movieId])

    const releaseYear = new Date(movie.release_date).getFullYear();
    const movieGenres = (movie.genres || []).map(({ name }) => {
        return name;
    })

    const imgUrl = movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : IMAGE_PLACEHOLDER;

    return (
        <div className={css.movieDetails__container}>
            <Link to="/" className={css.back__link}>Go back</Link>
            <div className={css.movieDetails__wrap}>
                <div className={css.movieDetails__poster}>
                    <img src={imgUrl} alt={movie.title} className={css.movie__poster} />
                </div>
                <div className={css.movieDetails__info}>
                    <h1 className={css.movie__title}>{movie.title} ({releaseYear})</h1>
                    <p className={css.movieDetails__text}>User Score: {Math.round(movie.vote_average * 10)}%</p>
                    <h2 className={css.movieDetails__title}>Overview</h2>
                    <p className={css.movieDetails__text}>{movie.overview}</p>
                    <h2 className={css.movieDetails__title}>Genres</h2>
                    <p className={css.movieDetails__text}>{movieGenres.join(", ")}</p>
                </div>
            </div>
            <div className={css.movieAdditionalInfo__container}>
                <h2 className={css.movieAdditionalInfo__title}>Additional information</h2>
                <ul className={css.movieAdditionalInfo__list}>
                    <li className={css.movieAdditionalInfo__item}>
                        <Link to="cast" className={css.movieAdditionalInfo__link}>Cast</Link>
                    </li>
                    <li className={css.movieAdditionalInfo__item}>
                        <Link to="reviews" className={css.movieAdditionalInfo__link}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
};

export default MovieDetails;