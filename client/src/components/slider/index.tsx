import { ComponentProps, useEffect, useRef } from "react";
import { StyledSlider } from "./style";

interface Props extends ComponentProps<"input"> {
  max: number;
  value: number;
}

function Slider(props: Props) {
  const { value, max } = props;
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const percent = (value / max) * 100;
      sliderRef.current.style.backgroundSize = `${percent}% 100%`;
    }
  }, [value, max]);

  return <StyledSlider {...props} type="range" ref={sliderRef} />;
}

export default Slider;
