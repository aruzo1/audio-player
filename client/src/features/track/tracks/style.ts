import styled from "styled-components";
import { devices } from "styles/theme";

export const StyledTracks = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: ${devices.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${devices.md}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${devices.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${devices.xs}) {
    grid-template-columns: 1fr;
  }
`;
