import { useState, useEffect } from 'react';

import { Movie } from 'services/Movies';
import { MovieResults } from 'models/movie';

const movies = new Movie();

async function fetchPopular() {
  try {
    const popularResponse = await movies.popular({ page: 1 });
    return popularResponse.data;
  } catch (error) {
    return error;
  }
}

export function useFetchMovie() {
  const [error, setError] = useState(false);
  const [popular, setPopular] = useState<MovieResults>();
  useEffect(() => {
    fetchPopular()
    .then((popular: MovieResults) => setPopular(popular))
    .catch(error => setError(error));
  }, []);
  return { popular, error };
}
