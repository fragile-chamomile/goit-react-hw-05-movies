const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c2c68d4c5f4a0e58e471bacc42f1ea44';

//список самых популярных фильмов на сегодня
export const trendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const movies = response.json();
  return movies;
};

// поиск кинофильма по ключевому слову
export const searchMovies = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  const movies = response.json();
  return movies;
};

// запрос полной информации о фильме
export const movieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const movies = response.json();
  return movies;
};

// запрос информации о актёрском составе
export const movieCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const movies = response.json();
  return movies;
};

// запрос обзоров
export const movieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const movies = response.json();
  return movies;
};
