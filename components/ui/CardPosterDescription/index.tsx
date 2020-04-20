import React, { FC } from 'react';
import Link from 'next/link';

import { Card, Poster, Content, Title, Overview, LearnMore } from './styles';
import ImagePlaceholder from '../ImagePlaceholder';
import imageApi from '@settings/imageApi';

type CardProps = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  mediaType: string;
};

const CardPosterDescription: React.FC<CardProps> = ({
    id, poster_path, title, overview, mediaType,
}) => {
  const { secure_base_url, poster_sizes } = imageApi;
  const Processedtitle = (title.length > 28) ? `${title.substring(0, 28)}...` : title;
  return (
    <Card>
      <Poster>
        {poster_path ? (
        <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
          <a>
            <img
              src={`${secure_base_url}${poster_sizes.w92}${poster_path}`}
              alt={title}
            />
          </a>
        </Link>
        ) : (
          <ImagePlaceholder />
        )}
      </Poster>
    <Content>
      <Title>{Processedtitle}</Title>
      <Overview>{overview}</Overview>
      <LearnMore>
        <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
          <a>Learn More</a>
        </Link>
      </LearnMore>
    </Content>
  </Card>
  );
};
export default CardPosterDescription;
