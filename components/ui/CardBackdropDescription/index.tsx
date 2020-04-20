import React, { FC } from 'react';
import Link from 'next/link';

import { Card, Figure, Overview, LearnMore } from './styles';
import ImagePlaceholder from '../ImagePlaceholder';
import imageApi from '@settings/imageApi';

type CardProps = {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  mediaType: string;
};

const CardBackdropDescription: FC<CardProps> = ({
    id, backdrop_path, title, overview, mediaType,
}) => {
  const { secure_base_url, backdrop_sizes } = imageApi;
  const processedOverview = overview.length > 160 ? `${overview.substring(0, 156)}...` : overview;
  return (
    <Card>
          <Figure>
            {backdrop_path ? (
              <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
                <a>
                  <img
                    src={`${secure_base_url}${backdrop_sizes.w300}${backdrop_path}`}
                    alt={title}
                  />
                </a>
              </Link>
            ) : (
              <ImagePlaceholder />
            )}
            <figcaption>{title}</figcaption>
          </Figure>
      <Overview>{processedOverview}</Overview>
      <LearnMore>
        <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
          <a>Learn More</a>
        </Link>
      </LearnMore>
    </Card>
  );
};

export default CardBackdropDescription;
