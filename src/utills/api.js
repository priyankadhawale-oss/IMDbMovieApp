const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = (page) =>
  fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());

export const fetchTopRatedMovies = (page) =>
  fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());

export const fetchUpcomingMovies = (page) =>
  fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());

export const fetchSearchedMovies = (query, page) =>
  fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  ).then((res) => res.json());

export const fetchMovieDetail = (id) =>
  fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    (res) => res.json()
  );

export const fetchMovieCast = (id) =>
  fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
