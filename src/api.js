import axios from 'axios';

const KEY = '9c85c2414d8624d6e18c2da3e97d3f7e';
const URL = 'https://api.themoviedb.org/3';
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

const getTrendingMovies = async () => {
  const result = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
  console.log(result.data.results);
  return result.data.results;
};
// /movie/{movie_id}
const getMovieDetails = async movieId => {
  if (!movieId) {
    return null;
  }
  const result = await axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);
  console.log(result.data);
  return result.data;
};

// https://api.themoviedb.org/3/search/movie?api_key=9c85c2414d8624d6e18c2da3e97d3f7e&query=cars
const getMoviesBySearchQuery = async searchQuery => {
  if (!searchQuery) {
    return [];
  }
  const result = await axios.get(
    `${URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  console.log(result.data.results);
  return result;
};

export { getTrendingMovies, getMovieDetails, getMoviesBySearchQuery };
