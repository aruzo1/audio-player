import { ComponentProps, RefObject, useMemo } from "react";
import { StyledSlider } from "./style";

interface Props extends ComponentProps<"input"> {
  max: number;
  value: number;
  ref?: RefObject<HTMLInputElement>;
}

function Slider(props: Props) {
  const { value, max } = props;
  const percent = useMemo(() => (value / max) * 100, [value, max]);

  return (
    <StyledSlider
      {...props}
      style={{ backgroundSize: `${percent}% 100%` }}
      type="range"
    />
  );
}

export default Slider;
