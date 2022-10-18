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

const Button = styled.button<{ variant?: keyof typeof variants }>`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: max-content;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: ${theme.radius.default};
  border: 1px solid;
  font-weight: 600;
  transition: background-color ${theme.transition};
  cursor: pointer;

  & > svg {
    min-width: max-content;
  }

  ${({ variant }) => variants[variant || "neutral"]}
`;

export default Button;
