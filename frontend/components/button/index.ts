import Spinner from "components/spinner";
import styled, { css } from "styled-components";
import theme from "styles/theme";
import UnstyledButton from "./unstyled-button";

const variants = {
  brand: css`
    border-color: ${theme.colors.brand[500]};
    background: ${theme.colors.brand[600]};

    &:hover {
      background: ${theme.colors.brand[500]};
    }
  `,
  neutral: css`
    border-color: ${theme.colors.neutral[700]};
    background: ${theme.colors.neutral[800]};

    &:hover {
      background: ${theme.colors.neutral[700]};
    }
  `,
};

const sizes = {
  sm: css`
    padding: 0.25rem 0.5rem;
  `,
  md: css`
    padding: 0.5rem 1rem;
  `,
  lg: css`
    padding: 0.75rem 1.5rem;
  `,
};

interface StyledProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  full?: boolean;
  loading?: boolean;
}

const Button = styled(UnstyledButton)<StyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ full }) => (full ? "100%" : "max-content")};
  max-width: 100%;
  padding: 0.5rem 1rem;
  border-radius: ${theme.radius.default};
  font-weight: 600;
  word-break: break-all;
  cursor: pointer;
  transition: background-color ${theme.transition};
  gap: 0.5rem;
  ${({ loading }) => loading && `color: transparent;`}

  &:disabled {
    cursor: not-allowed;
  }

  & > svg {
    min-width: max-content;
  }

  ${({ variant }) => variants[variant || "neutral"]}
  ${({ size }) => sizes[size || "md"]}
`;

export const ButtonSpinner = styled(Spinner)`
  position: absolute;
`;

export default Button;
