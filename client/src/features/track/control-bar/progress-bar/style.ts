import styled from "styled-components";
import Typography from "components/typography";
import theme from "styles/theme";

export const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: ${theme.devices.md}) {
    display: none;
  }
`;

export const CurrentTime = styled(Typography)`
  min-width: 3rem;
  text-align: end;
`;

export const Duration = styled(Typography)`
  min-width: 3rem;
`;
