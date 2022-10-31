import VolumeControler from "./volume-controler";
import ProgressBar from "./progress-bar";
import Buttons from "./buttons";
import Track from "./track";
import useControlBar from "./use-control-bar";
import { ControlBarContainer, StyledControlBar } from "./style";

function ControlBar() {
  const { track } = useControlBar();

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
