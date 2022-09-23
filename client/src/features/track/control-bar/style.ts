import styled from "styled-components";
import { colors, devices } from "styles/theme";

export const StyledControlBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  background: ${colors.neutral[400]};

  @media (max-width: ${devices.sm}) {
    display: flex;
  }
`;
