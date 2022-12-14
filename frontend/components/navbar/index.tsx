import Link from "next/link";
import styled from "styled-components";
import theme from "styles/theme";
import Container from "components/container";
import HStack from "components/h-stack";
import Logo from "./logo";
import SearchBar from "./search-bar";

const StyledNavbar = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background: ${theme.colors.neutral[800]};
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <HStack justify="space-between">
          <Link href="/">
            <Logo />
          </Link>

          <SearchBar />
        </HStack>
      </Container>
    </StyledNavbar>
  );
}

export default Navbar;
