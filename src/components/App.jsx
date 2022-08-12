// import React, { useState } from 'react';
// import axios from 'axios';
// import Loader from './Loader/Loader'
import { getTrendingMovies, getMovieDetails, getMoviesBySearchQuery, getMovieCredits, getMovieReviews } from "../api"

export const App = () => {
  // const [movies, setMovies] = useState([]);

  getTrendingMovies();

  return (
    <div>
    
    </div>
  );
};
