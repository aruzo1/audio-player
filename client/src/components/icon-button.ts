import styled from "styled-components";
import theme from "styles/theme";

const IconButton = styled.button`
  cursor: pointer;
  color: #fff;
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.neutral[300]};
  }
`;

export default IconButton;
