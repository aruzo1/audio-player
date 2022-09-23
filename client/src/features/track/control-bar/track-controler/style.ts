import styled from "styled-components";
import { devices } from "styles/theme";

export const StyledTrackControler = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  @media (max-width: ${devices.sm}) {
    justify-self: end;
    justify-content: center;
  }
`;
