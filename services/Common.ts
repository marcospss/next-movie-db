import instance from '@settings/axios';
import { paramsDefault } from '@settings/api';
import { Genres, Credits } from '@models/common';
import { params } from '@models/api';

export class Common {
  genre({ mediaType }: params) {
    return instance.get<Genres>(`/genre/${mediaType}/list?${paramsDefault}`);
  }

  credits({ mediaType, mediaId }: params) {
    return instance.get<Credits>(`/${mediaType}/${mediaId}/credits?${paramsDefault}`);
  }
}
