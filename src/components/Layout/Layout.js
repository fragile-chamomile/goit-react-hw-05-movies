import { Outlet } from 'react-router-dom';
import { Nav, StyledNavLink } from './Layout.styled';

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
