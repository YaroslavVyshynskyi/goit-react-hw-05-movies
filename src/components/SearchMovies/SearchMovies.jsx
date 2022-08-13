import { getMoviesBySearchQuery } from "api";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query");
    
    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        const fetchMovies = async () => { 
            const result = await getMoviesBySearchQuery(searchQuery);
            setMovies(result);
        }
        fetchMovies();
    }, [searchQuery])

    const handleInputSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.searchMovie.value });
        form.reset();
    };

    return (
        <div className="trending-movies__container">
            <form className="SearchForm" onSubmit={handleInputSubmit}>
                <input
                    className="SearchForm__input"
                    name="searchMovie"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder={searchQuery || "Search movies"}
                />
                <button type="submit" className="SearchForm__button">
                    Search
                </button>
            </form>
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

export default SearchMovies;