import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovieCredits } from "api";
import css from "./MovieCast.module.css"

const IMAGE_PLACEHOLDER = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return
        }
        const fetchMovieCast = async () => {
            const result = await getMovieCredits(movieId);
            setCast(result);
        }
        fetchMovieCast();
    }, [movieId]);

    return (
        <div className={css.cast__container}>
            <ul className={css.cast__list}>
                {cast.map((actor) => {
                    const imgUrl = actor.profile_path ? `http://image.tmdb.org/t/p/w500/${actor.profile_path}` : IMAGE_PLACEHOLDER;
                    return (
                        <li key={actor.id} className={css.cast__item}>
                            <img src={imgUrl} alt={actor.name} className={css.actor__image} />
                            <p className={css.castActor__text}>{actor.name}</p>
                            <p className={css.castCharacter__text}>Character: {actor.character}</p>
                        </li>
                    )
                })}    
            </ul>
        </div >
    )
};
    
export default MovieCast