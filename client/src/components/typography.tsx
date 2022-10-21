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
    font-size: 14px;
    font-weight: 300;
    color: ${theme.colors.neutral[300]};
  `,
  error: css`
    font-size: 14px;
    font-weight: 300;
    color: ${theme.colors.danger[600]};
  `,
};

const truncateStyle = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface Props {
  variant?: keyof typeof variants;
  truncate?: boolean;
}

const Typography = styled.p<Props>`
  font-weight: 600;
  ${({ variant }) => variants[variant || "p"]}
  ${({ truncate }) => truncate && truncateStyle}
`;

export default Typography;
