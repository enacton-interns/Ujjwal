const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjliMTVlYjU5ZDdmYzlmNTA2NDEyMGU4OWE1N2QwZSIsIm5iZiI6MTc1Mzc3MzQ2MS40MDgsInN1YiI6IjY4ODg3NTk1MDFmN2QwMjQzODhhNzdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5LlJRScHQiHKxBe6QyR4LR5C3nWOmEWQ9Q6ZeA6wDRw";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, options);
  return response.json();
};

export const fetchTopRatedMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/top_rated`, options);
  return response.json();
};

export const fetchUpcomingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/upcoming`, options);
  return response.json();
};

export const fetchPlayingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing`, options);
  return response.json();
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}`, options);
  return response.json();
};
export const fetchSearchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(
    query
  )}&include_adult=false`;
  const res = await fetch(url, options);
  return res.json();
};
