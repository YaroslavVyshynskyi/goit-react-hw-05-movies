import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovieReviews } from "api";

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
        <div className="reviews-container">
            {reviews.length ?
                < ul className="reviews-list">
                    {reviews.map((review) => {
                        return (
                            <li key={review.id} className="reviews-item">
                                <p className="reviews-author">Author: {review.author}</p>
                                <p className="cats-character">{review.content}</p>
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