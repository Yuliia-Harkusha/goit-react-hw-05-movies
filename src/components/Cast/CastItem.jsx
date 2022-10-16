import { nanoid } from 'nanoid';
import { Image, Name } from './Cast.styled';
// import img from '../image/notFoundImage.jpg';

const IMG_URL = 'https://images.tmdb.org/t/p/w500';

export const CastItem = ({ cast }) => {
  return cast.map(({ profile_path, original_name, character }) => {
    return (
      <li key={nanoid()}>
        {profile_path ? (
          <Image src={`${IMG_URL}${profile_path}`} alt={original_name} />
        ) : (
          <img
            src="https://sd.keepcalms.com/i-w600/meow-208.jpg"
            alt={original_name}
            width={250}
            height={375}
          />
        )}
        <Name>{original_name}</Name>
        <Name>Character: {character}</Name>
      </li>
    );
  });
};
