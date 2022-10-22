import styled from "styled-components";
import theme from "styles/theme";

export const StyledSlider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: ${theme.radius.full};
  cursor: pointer;
  background-color: ${theme.colors.neutral[700]};
  background-image: linear-gradient(#fff, #fff);
  background-repeat: no-repeat;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    border-radius: ${theme.radius.full};
    -webkit-appearance: none;
    appearance: none;
  }
  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    border: none;
    background: transparent;
  }

  &:hover::-webkit-slider-thumb {
    background: #fff;
  }
  &:hover::-moz-range-thumb {
    background: #fff;
  }

  &:hover {
    background-image: linear-gradient(
      ${theme.colors.brand[600]},
      ${theme.colors.brand[600]}
    );
  }
`;
