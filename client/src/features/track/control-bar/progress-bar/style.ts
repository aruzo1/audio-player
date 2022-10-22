import styled from "styled-components";
import Typography from "components/typography";
import theme from "styles/theme";

export const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: ${theme.devices.md}) {
    display: none;
  }
`;

export const ProgressBarTime = styled(Typography)`
  min-width: 3rem;
  text-align: end;
`;

export const ProgressBarDuration = styled(Typography)`
  min-width: 3rem;
`;
