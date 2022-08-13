import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import { getMovieDetails } from 'api';

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
        <div className="movie-details__container">
            <Link to="/" className='back__link'>Go back</Link>
            <div className="movie-details__poster">
                <img src = {imgUrl} alt={movie.title} />
            </div>
            <div className="movie-details__info">
                <h1 className="movie__title">{movie.title} ({releaseYear})</h1>
                <p className='movie-details__text'>User Score: {Math.round(movie.vote_average*10)}%</p>
                <h2 className='movie-details__title'>Overview</h2>
                <p className='movie-details__text'>{movie.overview}</p>
                <h2 className='movie-details__title'>Genres</h2>
                <p className='movie-details__text'>{movieGenres.join(", ")}</p>
            </div>
            <div className="movie-additional-info__container">
                <h2 className='movie-details__title'>Additional information</h2>
                <Link to="cast" className="movie-additional-info__link">Cast</Link>
                <Link to="reviews" className="movie-additional-info__link">Reviews</Link>
            </div> 
            <Outlet/>
        </div>
    )  
};

export default MovieDetails;