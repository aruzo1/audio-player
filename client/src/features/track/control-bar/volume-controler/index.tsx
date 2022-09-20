import Slider from "components/slider";
import VolumeIcon from "./volume-icon";
import useVolumeControler from "./use-volume-controler";
import style from "./style.module.css";

function VolumeControler() {
  const { volume, volumeHandler } = useVolumeControler();

  return (
    <div className={style["volume-controler"]}>
      <VolumeIcon />
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
