import { API_KEY } from "./constant";

export const upcomingMoviesUrl = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const topRatedMovies = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const popularTvShows = `tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
