import styled from "styled-components";
import theme from "styles/theme";

export const StyledTracks = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.devices.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${theme.devices.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.devices.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.devices.xs}) {
    grid-template-columns: 1fr;
  }
`;
