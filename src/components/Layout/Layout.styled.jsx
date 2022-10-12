import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: #fafafa;
  padding: 20px;
  box-shadow: 0 5px 7px rgba(51, 51, 51, 0.23);
`;

export const NavBlock = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const NavItem = styled(NavLink)`
  padding: 7px 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #fafafa;
  background-color: #a7051e;
  border: none;
  border-radius: 3px;

  &.active {
    text-decoration: underline;
  }
  :hover {
    background-color: #db2944;
  }
`;
