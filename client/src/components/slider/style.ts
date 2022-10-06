import styled from "styled-components";
import { colors } from "styles/theme";

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 999px;
  background: ${colors.neutral[700]};
  background-image: linear-gradient(#fff, #fff);
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 1rem;
    width: 1rem;
    border-radius: 999px;
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
      ${colors.brand[200]},
      ${colors.brand[200]}
    );
  }
`;
