import React from 'react';
import Link from 'next/link';

import { Section, Figure } from './styles';
import { MovieResults } from '@models/movie';
// https://www.themoviedb.org/movie/278-the-shawshank-redemption?language=en-US
const Grid: React.FC<MovieResults> = ({ results }) => (
  <Section>
    {results &&
      results.map(item => (
        <Link href={`/movie/${item.id}`}>
            <Figure key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title} />
                <figcaption>{item.title}</figcaption>
            </Figure>
        </Link>
      ))}
  </Section>
);

export default Grid;
