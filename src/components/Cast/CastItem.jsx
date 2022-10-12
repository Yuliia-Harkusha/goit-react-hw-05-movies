import { nanoid } from 'nanoid';
import { Image, Name } from './Cast.styled';
const IMG_URL = 'https://images.tmdb.org/t/p/w500';

export const CastItem = ({ cast }) => {
  return cast.map(({ profile_path, original_name, character }) => {
    return (
      <li key={nanoid()}>
        <Image src={`${IMG_URL}${profile_path}`} alt={original_name} />
        <Name>{original_name}</Name>
        <Name>Character: {character}</Name>
      </li>
    );
  });
};
