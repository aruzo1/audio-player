import { useAudio } from "../audio-context";
import TrackControler from "./track-controler";
import style from "./style.module.css";
import TrackInfo from "./track-info";
import VolumeControler from "./volume-controler";

function ControlBar() {
  const { track } = useAudio()!;

  return (
    <div className={style["control-bar"]}>
      <TrackInfo track={track} />
      <TrackControler />
      <VolumeControler />
    </div>
  );
}

export default ControlBar;
