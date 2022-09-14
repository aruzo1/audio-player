import { useAudio } from "../audio-context";
import ProgressBar from "./progress-bar";
import style from "./style.module.css";
import TrackInfo from "./track-info";

function ControlBar() {
  const { track } = useAudio()!;

  return (
    <div className={style["control-bar"]}>
      <TrackInfo track={track} />
      <ProgressBar />
    </div>
  );
}

export default ControlBar;
