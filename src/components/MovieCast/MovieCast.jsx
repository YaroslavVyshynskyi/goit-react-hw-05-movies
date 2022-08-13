import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovieCredits } from "api";

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
        <div className="cast-container">
            <ul className="cast-list">
                {cast.map((actor) => {
                    const imgUrl = actor.profile_path ? `http://image.tmdb.org/t/p/w500/${actor.profile_path}` : IMAGE_PLACEHOLDER;
                    return (
                        <li key={actor.id} className="cast-item">
                            <img src={imgUrl} alt={actor.name} />
                            <p className="cast-actor">{actor.name}</p>
                            <p className="cats-character">Character: {actor.character}</p>
                        </li>
                    )
                })}    
            </ul>
        </div >
    )
};
    
export default MovieCast