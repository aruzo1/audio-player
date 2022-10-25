import Slider from "components/slider";
import formatSeconds from "helpers/format-seconds";
import useProgressBar from "./use-progress-bar";
import {
  StyledProgressBar,
  ProgressBarTime,
  ProgressBarDuration,
} from "./style";

function ProgressBar() {
  const { duration, currentTime, currentTimeHandler } = useProgressBar();

  return (
    <StyledProgressBar>
      <ProgressBarTime as="span" variant="h5">
        {formatSeconds(currentTime)}
      </ProgressBarTime>

      <Slider
        max={duration || 1}
        value={currentTime}
        onChange={currentTimeHandler}
      />

      <ProgressBarDuration as="span" variant="h5">
        {formatSeconds(duration)}
      </ProgressBarDuration>
    </StyledProgressBar>
  );
}

export default ProgressBar;
