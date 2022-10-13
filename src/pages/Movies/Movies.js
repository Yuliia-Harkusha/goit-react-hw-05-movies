import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { getSearchMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Form, Input, Button } from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await getSearchMovies(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [query]);

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase().trim());
    setSearchParams(search);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Enter a search request');
      return;
    }
    try {
      setIsLoading(true);
      const data = await getSearchMovies(search);
      setMovies(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          placeholder="Search movie"
        />
        <Button>
          <FaSearch fontSize={16} />
        </Button>
      </Form>
      <ul>
        {isLoading && <Loader />}
        {error && <p>Something went wrong</p>}
        {movies && <MoviesList movies={movies} />}
      </ul>
    </main>
  );
}
