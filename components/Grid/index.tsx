import React, { FC } from 'react';
import Link from 'next/link';

import { MovieResults } from '@models/movie';
const mediaType = 'movie';
// https://www.themoviedb.org/movie/278-the-shawshank-redemption?language=en-US
const Grid: FC<MovieResults> = ({ results }) => (
  <section>
    {results &&
      results.map(item => (
        <Link href="/movie/[mediaId]" as={`/movie/${item.id}`} key={item.id}>
            <figure>
                <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title} />
                <figcaption>{item.title}</figcaption>
            </figure>
        </Link>
      ))}
  </section>
);

export default Grid;
