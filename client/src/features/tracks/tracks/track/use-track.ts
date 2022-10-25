import { useEffect, useRef } from "react";
import useAudio from "features/tracks/audio-context";
import { ITrack } from "features/tracks/types";
import useForceUpdate from "hooks/use-force-update";
import useDisclosure from "components/disclosure/use-disclosure";
import useClickOutside from "hooks/use-click-outside";

function useTrack(track: ITrack) {
  const { audio, track: playingTrack, changeTrack } = useAudio()!;
  const forceUpdate = useForceUpdate();
  const menu = useDisclosure();
  const menuRef = useRef(null);
  useClickOutside(menuRef, menu.close);

  useEffect(() => {
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
    };
  }, [audio, forceUpdate]);

  function toggleTrack() {
    if (track.id !== playingTrack?.id) {
      changeTrack(track);
      audio.play();
    } else if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  return {
    playing: !audio.paused && track.id === playingTrack?.id,
    toggleTrack,
    menu,
    menuRef,
  };
}

export default useTrack;
