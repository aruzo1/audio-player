import styled from "styled-components";
import theme from "styles/theme";

export const StyledControlBar = styled.div`
  background: ${theme.colors.neutral[800]};
`;

export const ControlBarContainer = styled.div`
  display: flex;
  max-width: ${theme.devices.xl};
  width: 100%;
  gap: 2rem;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${theme.devices.md}) {
    justify-content: space-between;
  }
`;
