import Slider from "components/slider";
import IconButton from "components/icon-button";
import useAudio from "features/tracks/audio-context";
import VolumeIcon from "./icons/volume-icon";
import VolumeMuteIcon from "./icons/volume-mute-icon";
import { StyledVolumeControler } from "./style";

function VolumeControler() {
  const { audio } = useAudio()!;

  return (
    <StyledVolumeControler>
      <IconButton onClick={audio.toggleMuted}>
        {audio.muted ? <VolumeMuteIcon /> : <VolumeIcon />}
      </IconButton>
      <Slider
        type="range"
        step={0.01}
        min={0}
        max={1}
        value={audio.muted ? 0 : audio.volume}
        onChange={(e) => audio.changeVolume(+e.currentTarget.value)}
      />
    </StyledVolumeControler>
  );
}

export default VolumeControler;
