import styled from "styled-components";

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 999px;

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
`;
