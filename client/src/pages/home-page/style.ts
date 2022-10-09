import styled from "styled-components";
import Container from "components/container";

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

export const Main = styled.main`
  overflow-y: auto;
`;

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
