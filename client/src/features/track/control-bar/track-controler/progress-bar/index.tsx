import Slider from "components/slider";
import { dateService } from "services/date-service";
import useProgressBar from "./use-progress-bar";
import style from "./style.module.css";

function ProgressBar() {
  const { duration, currentTime, currentTimeHandler } = useProgressBar();

  return (
    <div className={style["progress-bar"]}>
      <span className={style.start}>
        {dateService.formatSeconds(currentTime)}
      </span>
      <Slider
        min={0}
        max={duration || 60}
        value={currentTime}
        onChange={currentTimeHandler}
      />
      <span className={style.end}>{dateService.formatSeconds(duration)}</span>
    </div>
  );
}

export default ProgressBar;
