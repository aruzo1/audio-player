import styled from "styled-components";
import { colors, devices } from "styles/theme";

export const StyledControlBar = styled.div`
  background: ${colors.neutral[800]};
`;

export const ControlBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  max-width: ${devices.xl};
  width: 100%;
  gap: 1rem;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${devices.sm}) {
    display: flex;
  }
`;
