import styled, { css } from "styled-components";
import theme from "styles/theme";

const variants = {
  brand: css`
    background: ${theme.colors.brand[600]};
    border-color: ${theme.colors.brand[500]};

    &:hover {
      background: ${theme.colors.brand[500]};
    }
  `,
  neutral: css`
    background: ${theme.colors.neutral[800]};
    border-color: ${theme.colors.neutral[700]};

    &:hover {
      background: ${theme.colors.neutral[700]};
    }
  `,
};

export const StyledPlayButton = styled.button<{
  variant?: keyof typeof variants;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: ${theme.radius.full};
  transition: background-color ${theme.transition};
  border: 1px solid;

  ${({ variant }) => variants[variant || "neutral"]}
`;
