import { ComponentProps, useEffect, useRef } from "react";
import style from "./style.module.css";

interface Props extends ComponentProps<"input"> {
  min: number;
  max: number;
  value: number;
}

function Slider(props: Props) {
  const { value, max } = props;
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const percent = (value / max) * 100 + "%";
      sliderRef.current.style.background = `linear-gradient(to right, #fff ${percent}, var(--neutral-300) ${percent})`;
    }
  }, [value, max]);

  return (
    <input ref={sliderRef} className={style.slider} type="range" {...props} />
  );
}

export default Slider;
