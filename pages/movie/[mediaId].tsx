import React from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Link from 'next/link';

import Layout from '@components/Layout';
import { Movie } from '@services/Movies';
import { MoviesDetails, MovieResults } from '@models/movie';
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
  Runtime,
  Overview,
  SubTitle,
  Similar,
  Recommendations,
  Scroll,
} from './styles';
import CardPosterDescription from '@components/ui/CardPosterDescription';
import ImagePlaceholder from '@components/ui/ImagePlaceholder';
import Rating from '@components/ui/Rating';
// import { useFetchMoviePopular } from '@libs/movie';

const movies = new Movie();

type DetailsProps = {
  details: MoviesDetails;
  similar: MovieResults;
  recommendations: MovieResults;
  error: StatusErrors;
};

const countWords = (str: string) => {
  let resultsCount;
  resultsCount = str.replace(/(^\s*)|(\s*$)/gi, '');
  resultsCount = str.replace(/[ ]{2,}/gi, ' ');
  resultsCount = str.replace(/\n /, '\n');
  return resultsCount.split(' ').length;
};

const convertMinutesToTime = (data: number) => {
  if (!data) { return; }
  const minutes = data % 60;
  const hours = (data - minutes) / 60;
  const totalMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}h ${totalMinutes}m`;
};

const Details: NextPage<DetailsProps> = ({ details, similar, recommendations }) => {
  const { secure_base_url, backdrop_sizes, poster_sizes } = imageApi;
  const genres = details && details.genres && details.genres.map(genre => genre.name).join(' | ');
  const similarData = similar && similar.results;
  const recommendationsData = recommendations && recommendations.results;
  return (
    <Layout>
      <Wrapper>
        <Article>
          <GoBackHome>
            <Link href="/">
              <a>Back Home</a>
            </Link>
          </GoBackHome>
          <Backdrop>
            {details.backdrop_path ? (
              <img
                src={`${secure_base_url}${backdrop_sizes.w780}${details.backdrop_path}`}
                alt={details.title}
              />
            ) : (
              <ImagePlaceholder />
            )}
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
              <Rating voteAverage={details.vote_average} />
              <Runtime>Length: {details.runtime && convertMinutesToTime(details.runtime)}</Runtime>
            </Info>
          </Header>
          <Overview>{details.overview}</Overview>
          {similarData && !!similarData.length && (
            <Similar>
              <SubTitle>Similar</SubTitle>
              <Scroll height={350}>
                {similarData.map(item => (
                  <CardPosterDescription
                    key={item.id}
                    id={item.id}
                    poster_path={item.poster_path}
                    title={item.title}
                    overview={item.overview}
                    mediaType="movie"
                    hideOverflowTitle={false}
                  />
                ))}
              </Scroll>
            </Similar>
          )}
        </Article>
        {recommendationsData && !!recommendationsData.length && (
          <Recommendations>
            <SubTitle>Recommendations</SubTitle>
              <Scroll height={1050}>
              {recommendationsData.map(item => (
                <CardPosterDescription
                  key={item.id}
                  id={item.id}
                  poster_path={item.poster_path}
                  title={item.title}
                  overview={item.overview}
                  mediaType="movie"
                  hideOverflowTitle={true}
                />
              ))}
            </Scroll>
          </Recommendations>
        )}
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
    const similarResponse = await movies.similar({ mediaId });
    const recommendationsResponse = await movies.recommendations({ mediaId });
    return {
      props: {
        details: detailsResponse.data,
        similar: similarResponse.data,
        recommendations: recommendationsResponse.data,
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
