import PlayButton from "components/play-button";
import IconButton from "components/icon-button";
import NextIcon from "./icons/next-icon";
import PrevIcon from "./icons/prev-icon";
import HStack from "components/h-stack";
import useAudio from "features/tracks/audio-context";

function Buttons() {
  const { audio } = useAudio()!;

  return (
    <HStack gap="1rem">
      <IconButton onClick={() => audio.playPrevOrNext()}>
        <PrevIcon />
      </IconButton>

      <PlayButton playing={audio.playing} onClick={audio.togglePlaying} />

      <IconButton onClick={() => audio.playPrevOrNext(true)}>
        <NextIcon />
      </IconButton>
    </HStack>
  );
}

export default Buttons;
