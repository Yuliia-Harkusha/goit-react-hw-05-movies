import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </main>
  );
}
