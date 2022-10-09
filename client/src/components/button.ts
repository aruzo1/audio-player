import styled, { css } from "styled-components";
import { borderRadius, colors, transition } from "styles/theme";

const variants = (variant = "neutral") =>
  ({
    brand: css`
      background: ${colors.brand[200]};
      &:hover {
        background: ${colors.brand[100]};
      }
    `,
    neutral: css`
      background: ${colors.neutral[800]};
      &:hover {
        background: ${colors.neutral[700]};
      }
    `,
  }[variant]);

export const Button = styled.button<{ variant?: "neutral" | "brand" }>`
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: ${borderRadius};
  background: ${colors.brand[200]};
  transition: background-color ${transition};

  &:hover {
    background: ${colors.brand[100]};
  }

  &:active {
    background: ${colors.brand[300]};
  }

  ${({ variant }) => variants(variant)}
`;
