import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovieReviews } from "api";
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return
        }
        const fetchMovieReviews = async () => {
            const result = await getMovieReviews(movieId);
            setReviews(result);
        }
        fetchMovieReviews();
    }, [movieId]);

    return (
        <div className={css.reviews__container}>
            {reviews.length ?
                < ul className={css.reviews__list}>
                    {reviews.map((review) => {
                        return (
                            <li key={review.id} className={css.reviews__item}>
                                <p className={css.reviews__author}>Author: {review.author}</p>
                                <p className={css.reviews__text}>{review.content}</p>
                            </li>
                        )
                    })}
                </ul>
                : "We don`t have any reviews for this movie"
            }
        </div >
    )
};

export default MovieReviews;