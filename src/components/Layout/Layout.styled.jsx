import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  padding: 1rem 0 1rem 1rem;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.3);
`;

export const StyledNavLink = styled(NavLink)`
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
