import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Container, Header, NavBlock, NavItem } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header>
        <NavBlock>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </NavBlock>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
