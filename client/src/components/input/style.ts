import styled from "styled-components";
import theme from "styles/theme";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  max-width: 100%;
  gap: 0.5rem;

  ::placeholder {
    color: ${theme.colors.neutral[500]};
  }
`;
