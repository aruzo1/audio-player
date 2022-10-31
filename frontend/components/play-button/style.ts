import styled, { css } from "styled-components";
import theme from "styles/theme";

const variants = {
  brand: css`
    background: ${theme.colors.brand[600]};

    &:hover {
      background: ${theme.colors.brand[500]};
    }
  `,
  neutral: css`
    background: ${theme.colors.neutral[700]};

    &:hover {
      background: ${theme.colors.neutral[600]};
    }
  `,
};

interface Props {
  variant?: keyof typeof variants;
}

export const StyledPlayButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: ${theme.radius.full};
  transition: background-color ${theme.transition};

  ${({ variant }) => variants[variant || "neutral"]}
`;
