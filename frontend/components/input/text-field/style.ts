import styled from "styled-components";
import theme from "styles/theme";

export const StyledTextField = styled.input`
  padding: 1rem;
  border-radius: ${theme.radius.default};
  outline: none;
  background: ${theme.colors.neutral[800]};
`;
