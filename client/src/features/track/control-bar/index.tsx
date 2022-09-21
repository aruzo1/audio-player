import { useAudio } from "../audio-context";
import TrackInfo from "./track-info";
import TrackControler from "./track-controler";
import VolumeControler from "./volume-controler";
import style from "./style.module.css";

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
