import { NextPage, GetStaticProps } from 'next';

import { Movie } from '@services/Movies';
import { MovieResults } from '@models/movie';
// import { useFetchMoviePopular } from '@libs/movie';
import Layout from '@components/Layout';
import Grid from '@components/Grid';
import { StatusErrors } from '@models/api';

type HomeProps = {
  popular: MovieResults;
  error: StatusErrors;
};

const movies = new Movie();

const IndexPage: NextPage<HomeProps> = ({ popular, error }) => {
  // const { popular, error } = useFetchMoviePopular();
  // TODO: Fazer componete error
  return (
    <Layout title="The Movie Database (TMDb) | Is a community built movie and TV database.">
      {error && (
        <p>
          <span style={{ color: 'red' }}>Error:</span> {error.status_message}
        </p>
      )}
      <Grid {...popular} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const popularResponse = await movies.popular({ page: 1 });
    return {
      props: {
        popular: popularResponse.data,
      },
    };
  } catch (error) {
    return { props: { error: error?.response?.data } };
  }
};

export default IndexPage;
