import React, { useState } from 'react';
import axios from 'axios';
import Loader from './Loader/Loader'

const KEY = "9c85c2414d8624d6e18c2da3e97d3f7e";
export const App = () => {
  const [movies, setMovies] = useState([]);

    const fetchMovie = async (search, page = 1) => {
    const result = await axios.get(
      // `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${itemsPerPage}`
      `https://api.themoviedb.org/3/movie/550?api_key=${KEY}`
    )
    return { movies: result.data.hits, totalImages: result.data.totalHits };
  };
  
  return (
    <div>
    
    </div>
  );
};
