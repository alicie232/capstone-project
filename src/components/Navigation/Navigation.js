import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">
        <img src="./assets/icons/button-home.svg" alt="home" />
      </StyledLink>
      <StyledLink to="today">
        <img src="./assets/icons/button-today.svg" alt="today" />
      </StyledLink>
      <StyledLink to="all">
        <img src="./assets/icons/button-all.svg" alt="all" />
      </StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 1;
  font-size: var(--fontsize-medium);
`;
const StyledLink = styled(NavLink)`
  flex: 1;
  background: #333;
  text-decoration: none;
  color: white;
  padding: 10px;
  display: grid;
  place-items: center;
  &.active {
    background-color: #c1e4f0;
    color: #333;
  }
`;
