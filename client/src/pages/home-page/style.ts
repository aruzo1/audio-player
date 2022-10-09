import styled from "styled-components";
import { devices } from "styles/theme";

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

export const Main = styled.main`
  overflow-y: auto;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: ${devices.xl};
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;
