import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { MovieItem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <MovieItem key={nanoid()}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </MovieItem>
      ))}
    </ul>
  );
};
