import Slider from "components/slider";
import VolumeIcon from "./icons/volume-icon";
import VolumeMuteIcon from "./icons/volume-mute-icon";
import useVolumeControler from "./use-volume-controler";
import style from "./style.module.css";

function VolumeControler() {
  const { muted, volume, toggleMuted, volumeHandler } = useVolumeControler();

  return (
    <div className={style["volume-controler"]}>
      <button onClick={toggleMuted}>
        {muted ? <VolumeMuteIcon /> : <VolumeIcon />}
      </button>
      <Slider
        type="range"
        step={0.01}
        min={0}
        max={1}
        value={volume}
        onChange={volumeHandler}
      />
    </div>
  );
}

export default VolumeControler;
