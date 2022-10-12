import styled from "styled-components";
import theme from "styles/theme";

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: ${theme.radius.full};
  background-color: ${theme.colors.neutral[700]};
  background-image: linear-gradient(#fff, #fff);
  background-repeat: no-repeat;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 1rem;
    width: 1rem;
    border-radius: ${theme.radius.full};
  }
  &::-moz-range-thumb {
    border: none;
    height: 1rem;
    width: 1rem;
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
