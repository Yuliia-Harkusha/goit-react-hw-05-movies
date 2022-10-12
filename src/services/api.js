import axios from 'axios';

const KEY = 'ef600613e6bfa5a468c80238f192e03f';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );
  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);
  return response.data;
};

export const getMovieCasts = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}`
  );
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}`
  );
  return response.data;
};
