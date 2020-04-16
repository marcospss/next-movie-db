import React from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { Figure } from './styles';

import { Movie } from '@services/Movies';
import { MoviesDetails } from '@models/movie';
import { StatusErrors } from '@models/api';

import LoaderAnimation from '@components/LoaderAnimation';
// import { useFetchMoviePopular } from '@libs/movie';

const movies = new Movie();

type DetailsProps = {
  details: MoviesDetails;
  error: StatusErrors;
};

const Details: NextPage<DetailsProps> = ({ details }) => {
  return (
    <>
      {!details && <LoaderAnimation />}
      <h1>{details.title}</h1>
      <p>{details.overview}</p>
      <figure>
        <img src={`https://image.tmdb.org/t/p/w92${details.poster_path}`} alt={details.title} />
        <figcaption>{details.title}</figcaption>
      </figure>
    </>
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
