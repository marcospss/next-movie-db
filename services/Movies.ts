import instance from '@settings/axios';
import { paramsDefault } from '@settings/api';
import { MovieResults, MoviesDetails } from '@models/movie';
import { ParamsUrl } from '@models/api';

export class Movie {
  discover({ sortBy = 'popularity.desc', page = 1 }) {
    return instance.get<MovieResults>(`/discover/movie?${paramsDefault}&page=${page}&sort_by=${sortBy}&include_adult=false&include_video=false`);
  }

  search({ query, page = 1 }: ParamsUrl) {
    return instance.get<MovieResults>(`/search/movie?${paramsDefault}&page=${page}&query=${query}&include_adult=false`);
  }

  details({ mediaId }: ParamsUrl) {
    return instance.get<MoviesDetails>(`/movie/${mediaId}?${paramsDefault}`);
  }

  recommendations({ mediaId, page = 1 }: ParamsUrl) {
    return instance.get<MovieResults>(`/movie/${mediaId}/recommendations?${paramsDefault}&page=${page}`);
  }

  similar({ mediaId, page = 1 }: ParamsUrl) {
    return instance.get<MovieResults>(`/movie/${mediaId}/similar?${paramsDefault}&page=${page}`);
  }

  nowPlaying({ page = 1 }: ParamsUrl) {
    return instance.get<MovieResults>(`/movie/now_playing?${paramsDefault}&page=${page}`);
  }

  popular({ page = 1 }: ParamsUrl) {
    return instance.get<MovieResults>(`/movie/popular?${paramsDefault}&page=${page}`);
  }

  topRated({ page = 1 }: ParamsUrl) {
    return instance.get<MovieResults>(`/movie/top_rated?${paramsDefault}&page=${page}`);
  }

  upcoming({ page = 1 }: ParamsUrl) {
    return instance.get<MovieResults>(`/movie/upcoming?${paramsDefault}&page=${page}`);
  }
}
