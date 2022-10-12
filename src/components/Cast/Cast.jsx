import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieCasts } from 'services/api';
import { CastItem } from './CastItem';
import { List } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      if (!id) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await getMovieCasts(id);
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <List>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      {cast && <CastItem cast={cast.cast} />}
    </List>
  );
}
