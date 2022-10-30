import styled from "styled-components";
import theme from "styles/theme";

const Spinner = styled.div<{ size?: string }>`
  border: 3px solid #fff;
  border-top-color: rgba(255, 255, 255, 0.25);
  border-radius: ${theme.radius.full};
  ${({ size }) => `width: ${size};`}
  ${({ size }) => `height: ${size};`}
  ${theme.animations.spin}
`;

export default Spinner;
