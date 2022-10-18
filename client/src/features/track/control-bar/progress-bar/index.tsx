import Slider from "components/slider";
import { dateService } from "services/date-service";
import useProgressBar from "./use-progress-bar";
import { CurrentTime, Duration, StyledProgressBar } from "./style";

function ProgressBar() {
  const { duration, currentTime, currentTimeHandler } = useProgressBar();

  return (
    <StyledProgressBar>
      <CurrentTime as="span" variant="h5">
        {dateService.formatSeconds(currentTime)}
      </CurrentTime>
      <Slider
        max={duration || 60}
        value={currentTime}
        onChange={currentTimeHandler}
      />
      <Duration as="span" variant="h5">
        {dateService.formatSeconds(duration)}
      </Duration>
    </StyledProgressBar>
  );
}

export default ProgressBar;