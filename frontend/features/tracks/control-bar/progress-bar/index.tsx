import Slider from "components/slider";
import formatSeconds from "helpers/format-seconds";
import {
  StyledProgressBar,
  ProgressBarTime,
  ProgressBarDuration,
} from "./style";
import useProgressBar from "./use-progress-bar";

function ProgressBar() {
  const {
    virtualTime,
    duration,
    setVirtualTime,
    setHolding,
    currentTimeHandler,
  } = useProgressBar();

  return (
    <StyledProgressBar>
      <ProgressBarTime as="span" variant="h5">
        {formatSeconds(virtualTime)}
      </ProgressBarTime>

      <Slider
        max={duration}
        value={virtualTime}
        onChange={(e) => setVirtualTime(+e.currentTarget.value)}
        onMouseDown={() => setHolding(true)}
        onMouseUp={currentTimeHandler}
      />

      <ProgressBarDuration as="span" variant="h5">
        {formatSeconds(duration)}
      </ProgressBarDuration>
    </StyledProgressBar>
  );
}

export default ProgressBar;
