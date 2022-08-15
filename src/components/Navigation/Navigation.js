import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Aktuelle Aufgaben</StyledLink>
      <StyledLink to="all">Alle Aufgaben</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;

  margin: 10px;
  z-index: 1;
  font-size: var(--fontsize-medium);
`;

const StyledLink = styled(Link)`
  flex: 1;
  background: var(--color-highlight);
  text-decoration: none;
  color: white;
  padding: 10px;
  display: grid;
  place-items: center;
`;