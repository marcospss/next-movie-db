import React from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Link from 'next/link';

import Layout from '@components/Layout';
import { Movie } from '@services/Movies';
import { MoviesDetails } from '@models/movie';
import { StatusErrors } from '@models/api';
import imageApi from '@settings/imageApi';

import {
  Wrapper,
  Article,
  Backdrop,
  Header,
  GoBackHome,
  Poster,
  Title,
  Info,
  Category,
  Rating,
  Overview,
  Similar,
  Recommendations,
} from './styles';
// import { useFetchMoviePopular } from '@libs/movie';

const movies = new Movie();

type DetailsProps = {
  details: MoviesDetails;
  error: StatusErrors;
};

const Details: NextPage<DetailsProps> = ({ details }) => {
  const { secure_base_url, backdrop_sizes, poster_sizes } = imageApi;
  const genres = details && details.genres && details.genres.map(genre => genre.name).join(' | ');
  return (
    <Layout>
      <Wrapper>
        <Article>
          <GoBackHome>
            <Link href="/">Back Home</Link>
          </GoBackHome>
          <Backdrop>
            <img
              src={`${secure_base_url}${backdrop_sizes.w780}${details.backdrop_path}`}
              alt={details.title}
            />
          </Backdrop>
          <Header>
            <Poster>
              <img
                src={`${secure_base_url}${poster_sizes.w154}${details.poster_path}`}
                alt={details.title}
              />
            </Poster>
            <Info>
              <Title>{details.title}</Title>
              <Category>{genres}</Category>
              <Rating>{details.vote_average}</Rating>
            </Info>
          </Header>
          <Overview>{details.overview}</Overview>
          <Similar>
            <h2>Similar</h2>
          </Similar>
        </Article>
        <Recommendations>
          <h2>Recommendations</h2>
        </Recommendations>
      </Wrapper>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    fallback: false,
    paths: [],
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const mediaId = params?.mediaId;
    const detailsResponse = await movies.details({ mediaId });
    return {
      props: {
        details: detailsResponse.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error?.response?.data,
      },
    };
  }
};

export default Details;
