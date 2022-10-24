import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/theme";
import Container from "components/container";
import HStack from "components/h-stack";
import Logo from "./logo";
import SearchBar from "./search-bar";

const StyledNavbar = styled.nav`
  padding: 1rem 0;
  background: ${theme.colors.neutral[800]};
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <HStack justify="space-between">
          <Link to="/">
            <Logo />
          </Link>

          <SearchBar />
        </HStack>
      </Container>
    </StyledNavbar>
  );
}

export default Navbar;
