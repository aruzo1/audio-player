import styled from "styled-components";
import theme from "styles/theme";

export const TextField = styled.input`
  padding: 1rem;
  border: 1px solid ${theme.colors.neutral[700]};
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
  outline: none;
`;
