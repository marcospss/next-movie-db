import { NextPage } from 'next';

import { useFetchMovie } from './../fecth-data/movie';
import Layout from '@components/Layout';
import Grid from '@components/Grid';
import { MovieResults } from '@models/movie';

const IndexPage: NextPage<MovieResults> = () => {
  const { popular, error } = useFetchMovie();
  return (
    <Layout title="The Movie Database (TMDb) | Is a community built movie and TV database.">
      <Grid {...popular} />
    </Layout>
  );
};

export default IndexPage;
