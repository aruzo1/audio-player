import { dateService } from "services/date-service";
import useProgressBar from "./use-progress-bar";

function ProgressBar() {
  const { duration, currentTime, currentTimeHandler } = useProgressBar();

  return (
    <div>
      <span>{dateService.formatSeconds(currentTime)}</span>
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={currentTimeHandler}
      />
      <span>{dateService.formatSeconds(duration)}</span>
    </div>
  );
}

export default ProgressBar;
