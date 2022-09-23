import styled from "styled-components";
import { devices } from "styles/theme";

export const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 1rem;

  @media (max-width: ${devices.sm}) {
    display: none;
  }
`;

export const CurrentTime = styled.span`
  min-width: 3rem;
  text-align: end;
`;

export const Duration = styled.span`
  min-width: 3rem;
`;
