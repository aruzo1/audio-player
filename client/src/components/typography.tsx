import styled, { css } from "styled-components";
import theme from "styles/theme";

interface Props {
  variant?: keyof typeof variants;
  truncate?: boolean;
}

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
};

const truncateStyle = css`
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Typography = styled.p<Props>`
  width: fit-content;
  font-weight: 600;
  ${({ variant }) => variants[variant || "p"]}
  ${({ truncate }) => truncate && truncateStyle}
`;

export default Typography;
