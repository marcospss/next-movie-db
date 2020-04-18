import React, { FC } from 'react';
import Link from 'next/link';

import { Section, Card, Figure, Overview, LearnMore, ImagePlaceholder } from './styles';
import { MovieResults } from '@models/movie';
import imageApi from '@settings/imageApi';

const Grid: FC<MovieResults> = ({ results }) => {
  const { secure_base_url, backdrop_sizes } = imageApi;
  return (
    <Section>
      {results &&
        results.map((item) => {
          const overview = (item.overview.length > 160)
          ? `${item.overview.substring(0, 156)}...`
          : item.overview;
          return (
            <Card key={item.id}>
              <Link href="/movie/[mediaId]" as={`/movie/${item.id}`}>
                <Figure>
                  {
                    item.backdrop_path
                    ? (<img
                      src={`${secure_base_url}${backdrop_sizes.w300}${item.backdrop_path}`}
                      alt={item.title}
                    />)
                    : (<ImagePlaceholder />)
                  }
                  <figcaption>{item.title}</figcaption>
                </Figure>
              </Link>
              <Overview>{overview}</Overview>
              <LearnMore>
                <Link href="/movie/[mediaId]" as={`/movie/${item.id}`}>
                  Learn More
                </Link>
              </LearnMore>
            </Card>
          );
        })}
    </Section>
  );
};

export default Grid;
