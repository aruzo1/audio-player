import PlayButton from "components/play-button";
import IconButton from "components/icon-button";
import NextIcon from "./icons/next-icon";
import PrevIcon from "./icons/prev-icon";
import useButtons from "./use-buttons";
import { StyledButtons } from "./style";

function Buttons() {
  const { playing, toggle, playPrevOrNext } = useButtons();

  return (
    <StyledButtons>
      <IconButton onClick={() => playPrevOrNext()}>
        <PrevIcon />
      </IconButton>

      <PlayButton playing={playing} onClick={toggle} />

      <IconButton onClick={() => playPrevOrNext(true)}>
        <NextIcon />
      </IconButton>
    </StyledButtons>
  );
}

export default Buttons;
