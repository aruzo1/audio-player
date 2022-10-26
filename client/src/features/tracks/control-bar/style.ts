import styled from "styled-components";
import theme from "styles/theme";
import Container from "components/container";

export const StyledControlBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  background: ${theme.colors.neutral[800]};
  animation: slide-up ${theme.transition};

  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const ControlBarContainer = styled(Container)`
  display: flex;
  gap: 2rem;

  @media (max-width: ${theme.devices.md}) {
    justify-content: space-between;
  }
`;
