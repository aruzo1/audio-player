import useAudio from "../audio-context";
import Track from "./track";
import Buttons from "./buttons";
import ProgressBar from "./progress-bar";
import VolumeControler from "./volume-controler";
import { ControlBarContainer, StyledControlBar } from "./style";

function ControlBar() {
  const { track } = useAudio()!;

  if (!track) return null;

  return (
    <StyledControlBar>
      <ControlBarContainer>
        <Track track={track} />
        <Buttons />
        <ProgressBar />
        <VolumeControler />
      </ControlBarContainer>
    </StyledControlBar>
  );
}

export default ControlBar;
