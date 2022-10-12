import { nanoid } from 'nanoid';
import { Author } from './Reviews.styled';

export const ReviewItem = ({ review }) => {
  return review.map(({ author, content }) => {
    return (
      <li key={nanoid()}>
        <Author>Author: {author}</Author>
        <p>{content}</p>
      </li>
    );
  });
};
