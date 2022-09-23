import styled from "styled-components";
import { devices } from "./theme";

export const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

export const Main = styled.main`
  max-width: ${devices.xl};
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  overflow-y: auto;
`;
