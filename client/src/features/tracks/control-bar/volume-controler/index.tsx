import Slider from "components/slider";
import IconButton from "components/icon-button";
import VolumeIcon from "./icons/volume-icon";
import VolumeMuteIcon from "./icons/volume-mute-icon";
import useVolumeControler from "./use-volume-controler";
import { StyledVolumeControler } from "./style";

function VolumeControler() {
  const { muted, volume, toggleMuted, volumeHandler } = useVolumeControler();

  return (
    <StyledVolumeControler>
      <IconButton onClick={toggleMuted}>
        {muted ? <VolumeMuteIcon /> : <VolumeIcon />}
      </IconButton>
      <Slider
        type="range"
        step={0.01}
        min={0}
        max={1}
        value={volume}
        onChange={volumeHandler}
      />
    </StyledVolumeControler>
  );
}

export default VolumeControler;
