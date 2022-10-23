import styled from "styled-components";
import theme from "styles/theme";
import arrowDown from "./arrow-down.svg"

export const StyledSelectField = styled.select`
  padding: 1rem;
  border-radius: ${theme.radius.default};
  outline: none;
  background: ${theme.colors.neutral[800]} no-repeat;
  background-image: url(${arrowDown});
  background-position-x: 95%;
  background-position-y: 50%;
`;
