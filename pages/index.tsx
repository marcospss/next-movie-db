import { NextPage, GetStaticProps } from 'next';

import { Movie } from '@services/Movies';
import { MovieResults } from '@models/movie';
// import { useFetchMoviePopular } from '@libs/movie';
import Layout from '@components/Layout';
import Grid from '@components/Grid';

type HomeProps = {
  popular: MovieResults;
  error?: object;
};

const movies = new Movie();

const IndexPage: NextPage<HomeProps> = ({ popular }) => {
  // const { popular, error } = useFetchMoviePopular();
  return (
    <Layout title="The Movie Database (TMDb) | Is a community built movie and TV database.">
      <Grid {...popular} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const popularResponse = await movies.popular({ page: 1 });
  return {
    props: {
      popular: popularResponse.data,
    },
  };
};

export default IndexPage;
