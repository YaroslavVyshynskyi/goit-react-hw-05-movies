import axios from 'axios';

const KEY = '9c85c2414d8624d6e18c2da3e97d3f7e';
const URL = 'https://api.themoviedb.org/3';

const getTrendingMovies = async () => {
  const result = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
  return result.data.results;
};

const getMoviesBySearchQuery = async searchQuery => {
  if (!searchQuery) {
    return [];
  }
  const result = await axios.get(
    `${URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  return result.data.results;
};

const getMovieDetails = async movieId => {
  if (!movieId) {
    return null;
  }
  const result = await axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);
  return result.data;
};

const getMovieCredits = async movieId => {
  if (!movieId) {
    return null;
  }
  const result = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
  return result.data.cast;
};

const getMovieReviews = async movieId => {
  if (!movieId) {
    return null;
  }
  const result = await axios.get(
    `${URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return result.data.results;
};

export {
  getTrendingMovies,
  getMovieDetails,
  getMoviesBySearchQuery,
  getMovieCredits,
  getMovieReviews,
};
