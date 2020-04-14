import instance from 'settings/axios';
import { paramsDefault } from 'settings/api';
import { MovieResults, MoviesDetails } from 'models/movie';

export class Movie {
  discover({ sortBy = 'popularity.desc', page = 1 }) {
    return instance.get<MovieResults>(`/discover/movie?${paramsDefault}&page=${page}&sort_by=${sortBy}&include_adult=false&include_video=false`);
  }

  search({ query, page = 1 }) {
    return instance.get<MovieResults>(`/search/movie?${paramsDefault}&page=${page}&query=${query}&include_adult=false`);
  }

  details({ movieId }) {
    return instance.get<MoviesDetails>(`/movie/${movieId}?${paramsDefault}`);
  }

  recommendations({ movieId, page = 1 }) {
    return instance.get<MovieResults>(`/movie/${movieId}/recommendations?${paramsDefault}&page=${page}`);
  }

  similar({ movieId, page = 1 }) {
    return instance.get<MovieResults>(`/movie/${movieId}/similar?${paramsDefault}&page=${page}`);
  }

  nowPlaying({ page = 1 }) {
    return instance.get<MovieResults>(`/movie/now_playing?${paramsDefault}&page=${page}`);
  }

  popular({ page = 1 }) {
    return instance.get<MovieResults>(`/movie/popular?${paramsDefault}&page=${page}`);
  }

  topRated({ page = 1 }) {
    return instance.get<MovieResults>(`/movie/top_rated?${paramsDefault}&page=${page}`);
  }

  upcoming({ page = 1 }) {
    return instance.get<MovieResults>(`/movie/upcoming?${paramsDefault}&page=${page}`);
  }
}
