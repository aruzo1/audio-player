import styled from "styled-components";
import theme from "styles/theme";
import Container from "components/container";

export const StyledControlBar = styled.div`
  padding: 1rem 0;
  background: ${theme.colors.neutral[800]};
`;

export const ControlBarContainer = styled(Container)`
  display: flex;
  gap: 2rem;

  @media (max-width: ${theme.devices.md}) {
    justify-content: space-between;
  }
`;
