import axios from 'axios';

const KEY = 'ef600613e6bfa5a468c80238f192e03f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const data = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
  return data;
};

export const getSearchMovies = async query => {
  const data = await axios.get(
    `${BASE_URL}trending/movie?api_key=${KEY}&query=${query}`
  );
  return data;
};

export const getMovieDetails = async movieID => {
  const data = await axios.get(`${BASE_URL}trending/${movieID}?api_key=${KEY}`);
  return data;
};

export const getMovieCasts = async movieID => {
  const data = await axios.get(
    `${BASE_URL}trending/${movieID}/credits?api_key=${KEY}`
  );
  return data;
};

export const getMovieReviews = async movieID => {
  const data = await axios.get(
    `${BASE_URL}trending/${movieID}/reviews?api_key=${KEY}`
  );
  return data;
};
