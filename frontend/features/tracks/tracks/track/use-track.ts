import { useRef } from "react";
import useAudio from "features/tracks/audio-context";
import { ITrack } from "features/tracks/types";
import useDisclosure from "components/disclosure/use-disclosure";
import useClickOutside from "hooks/use-click-outside";

function useTrack(track: ITrack) {
  const { audio, track: playingTrack } = useAudio()!;
  const menu = useDisclosure();
  const menuRef = useRef(null);
  useClickOutside(menuRef, menu.close);

  const toggleTrack = () => {
    if (playingTrack?.id === track.id) audio.togglePlaying();
    else audio.changeTrack(track);
  };

  return {
    playing: playingTrack?.id === track.id && audio.playing,
    toggleTrack,
    menu,
    menuRef,
  };
}

export default useTrack;
