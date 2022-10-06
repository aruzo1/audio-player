import styled, { css } from "styled-components";
import { colors, transition } from "styles/theme";

const variants = (variant = "neutral") =>
  ({
    brand: css`
      background: ${colors.brand[200]};
      &:hover {
        background: ${colors.brand[100]};
      }
    `,
    neutral: css`
      background: ${colors.neutral[700]};
      &:hover {
        background: ${colors.neutral[600]};
      }
    `,
  }[variant]);

export const StyledPlayButton = styled.button<{
  variant?: "brand" | "neutral";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 999px;
  transition: background-color ${transition};

  ${({ variant }) => variants(variant)}
`;
