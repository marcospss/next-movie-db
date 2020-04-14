import instance from '@settings/axios';
import { paramsDefault } from '@settings/api';
import { Genres, Credits } from '@models/common';

export class Common {
  genre({ mediaType }) {
    return instance.get<Genres>(`/genre/${mediaType}/list?${paramsDefault}`);
  }

  credits({ mediaType, mediaId }) {
    return instance.get<Credits>(`/${mediaType}/${mediaId}/credits?${paramsDefault}`);
  }
}
