import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  list-style: none;
`;

export const Image = styled.img`
  display: block;
  width: 250px;
  height: auto;
`;

export const Name = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 8px;
`;
