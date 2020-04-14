import instance from '@settings/axios';
import { paramsDefault } from 'settings/api';
import { TvResults, TvDetails } from 'models/tv';

export class Tv {
  discover({ sortBy = 'popularity.desc', page = 1 }) {
    return instance.get<TvResults>(`/discover/tv?${paramsDefault}&page=${page}&sort_by=${sortBy}&timezone=America%2FNew_York&include_null_first_air_dates=false`);
  }

  search({ query, page = 1 }) {
    return instance.get<TvResults>(`/search/tv?${paramsDefault}&page=${page}&query=${query}&include_adult=false`);
  }

  details({ tvId }) {
    return instance.get<TvDetails>(`/tv/${tvId}?${paramsDefault}`);
  }

  recommendations({ tvId, page = 1 }) {
    return instance.get<TvResults>(`/tv/${tvId}/recommendations?${paramsDefault}&page=${page}`);
  }

  similar({ tvId, page = 1 }) {
    return instance.get<TvResults>(`/tv/${tvId}/similar?${paramsDefault}&page=${page}`);
  }

  airingToday({ page = 1 }) {
    return instance.get<TvResults>(`/tv/airing_today?${paramsDefault}&page=${page}`);
  }

  onTheAir({ page = 1 }) {
    return instance.get<TvResults>(`/tv/on_the_air?${paramsDefault}&page=${page}`);
  }

  popular({ page = 1 }) {
    return instance.get<TvResults>(`/tv/popular?${paramsDefault}&page=${page}`);
  }

  topRated({ page = 1 }) {
    return instance.get<TvResults>(`/tv/top_rated?${paramsDefault}&page=${page}`);
  }
}
