import PlayButton from "components/play-button";
import IconButton from "components/icon-button";
import NextIcon from "./icons/next-icon";
import PrevIcon from "./icons/prev-icon";
import useButtons from "./use-buttons";
import { StyledButtons } from "./style";

function Buttons() {
  const { playing, play, pause } = useButtons();

  return (
    <StyledButtons>
      <IconButton>
        <PrevIcon />
      </IconButton>
      <PlayButton playing={playing} onClick={playing ? pause : play} />
      <IconButton>
        <NextIcon />
      </IconButton>
    </StyledButtons>
  );
}

export default Buttons;
