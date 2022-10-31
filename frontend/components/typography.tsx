import styled, { css } from "styled-components";
import theme from "styles/theme";

const variants = {
  h1: css`
    font-size: 38px;
  `,
  h2: css`
    font-size: 30px;
  `,
  h3: css`
    font-size: 24px;
  `,
  h4: css`
    font-size: 20px;
  `,
  h5: css`
    font-size: 16px;
  `,
  p: css`
    color: ${theme.colors.neutral[300]};
    font-weight: 300;
    font-size: 14px;
  `,
  danger: css`
    color: ${theme.colors.danger[600]};
    font-weight: 300;
    font-size: 14px;
  `,
};

const truncateStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const skeletonStyle = css`
  width: 25rem;
  max-width: 100%;
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
  ${theme.animations.pulse}

  &:empty::before {
    content: "";
    display: inline-block;
  }
`;

interface Props {
  variant?: keyof typeof variants;
  truncate?: boolean;
  skeleton?: boolean;
}

const Typography = styled.p<Props>`
  font-weight: 600;
  ${({ variant }) => variants[variant || "p"]}
  ${({ truncate }) => truncate && truncateStyle}
  ${({ skeleton }) => skeleton && skeletonStyle}
`;

export default Typography;
