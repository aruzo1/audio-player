import styled from "styled-components";
import theme from "styles/theme";

export const StyledVolumeControler = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;

  @media (max-width: ${theme.devices.md}) {
    display: none;
  }

  & > input {
    width: 6rem;
    margin-left: 1rem;
  }
`;
