import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import Loader from 'components/Loader/Loader';
import {
  Wrapper,
  Section,
  Title,
  Image,
  Info,
  Text,
  GoBackBtn,
  NavItem,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  const IMG_URL = 'https://images.tmdb.org/t/p/w500';

  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <main>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      <Wrapper>
        <GoBackBtn onClick={goBack} type="button">
          Go back
        </GoBackBtn>
        {movie && (
          <Section>
            <Image src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
            <div>
              <Title>{movie.original_title}</Title>
              <Info>
                Release date
                <Text>{movie.release_date}</Text>
              </Info>
              <Info>
                Rating
                <Text>{movie.vote_average.toFixed(1)}</Text>
              </Info>
              <Info>
                Overview <Text>{movie.overview}</Text>
              </Info>
            </div>
          </Section>
        )}
      </Wrapper>

      <NavItem to="cast">Casts</NavItem>
      <NavItem to="reviews">Reviews</NavItem>
      <Outlet />
    </main>
  );
}
