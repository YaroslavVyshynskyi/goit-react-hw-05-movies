// import React, { useState } from 'react';
// import axios from 'axios';
// import Loader from './Loader/Loader'
import { getTrendingMovies, getMovieDetails, getMoviesBySearchQuery } from "../api"

export const App = () => {
  // const [movies, setMovies] = useState([]);

  getMoviesBySearchQuery("cats");

  return (
    <div>
    
    </div>
  );
};
