import instance from '@settings/axios';
import { paramsDefault } from '@settings/api';
import { Genres, Credits } from '@models/common';
import { ParamsUrl } from '@models/api';

export class Common {
  genre({ mediaType }: ParamsUrl) {
    return instance.get<Genres>(`/genre/${mediaType}/list?${paramsDefault}`);
  }

  credits({ mediaType, mediaId }: ParamsUrl) {
    return instance.get<Credits>(`/${mediaType}/${mediaId}/credits?${paramsDefault}`);
  }
}
