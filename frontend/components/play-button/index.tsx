import { ComponentProps, RefObject } from "react";
import PauseIcon from "./icons/pause-icon";
import PlayIcon from "./icons/play-icon";
import { StyledPlayButton } from "./style";

interface Props extends ComponentProps<"button"> {
  playing: boolean;
  variant?: "brand" | "neutral";
  ref?: RefObject<HTMLButtonElement>;
}

export function PlayButton({ playing, variant, ...props }: Props) {
  return (
    <StyledPlayButton {...props} variant={variant}>
      {playing ? <PauseIcon /> : <PlayIcon />}
    </StyledPlayButton>
  );
}

export default PlayButton;
