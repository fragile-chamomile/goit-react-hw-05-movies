import { NavLink, Outlet } from 'react-router-dom';
import { Nav } from './Layout.styled';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  text-decoration-line: none;
  font-size: 20px;
  font-weight: 500;

  &:first-of-type {
    margin-right: 20px;
  }

  &.active {
    color: red;
  }
`;

const Layout = () => {
  return (
    <div>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
