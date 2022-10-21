import Slider from "components/slider";
import formatSeconds from "helpers/format-seconds";
import useProgressBar from "./use-progress-bar";
import { CurrentTime, Duration, StyledProgressBar } from "./style";

function ProgressBar() {
  const { duration, currentTime, currentTimeHandler } = useProgressBar();

  return (
    <StyledProgressBar>
      <CurrentTime as="span" variant="h5">
        {formatSeconds(currentTime)}
      </CurrentTime>
      <Slider
        max={duration || 60}
        value={currentTime}
        onChange={currentTimeHandler}
      />
      <Duration as="span" variant="h5">
        {formatSeconds(duration)}
      </Duration>
    </StyledProgressBar>
  );
}

export default ProgressBar;
