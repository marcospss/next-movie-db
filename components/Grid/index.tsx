import React, { FC } from 'react';

import { Section } from './styles';
import { MovieResults } from '@models/movie';
import CardBackdropDescription from '@components/ui/CardBackdropDescription';

const Grid: FC<MovieResults> = ({ results }) => {
  return (
    <Section>
      {results &&
        results.map(item => (
          <CardBackdropDescription
            key={item.id}
            id={item.id}
            backdrop_path={item.backdrop_path}
            title={item.title}
            overview={item.overview}
            mediaType="movie"
          />
        ))}
    </Section>
  );
};

export default Grid;
