import styled from "styled-components";
import { devices } from "styles/theme";

export const StyledVolumeControler = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;

  @media (max-width: ${devices.sm}) {
    display: none;
  }

  & > input {
    width: 8rem;
    margin-left: 1rem;
  }
`;
