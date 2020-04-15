import { NextPage } from 'next';

import { Movie } from '@services/Movies';
import { MovieResults } from '@models/movie';
// import { useFetchMoviePopular } from '@fetch-data/movie';
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

IndexPage.getInitialProps = async () => {
  const popularResponse = await movies.popular({ page: 1 });
  return {
    popular: popularResponse.data,
  };
};

export default IndexPage;
