import { useEffect, useMemo, useRef, useState } from "react";
import { useAudio } from "features/track/audio-context";
import { ITrack } from "features/track/types";
import useForceUpdate from "hooks/use-force-update";
import useDisclosure from "components/disclosure/use-disclosure";
import useClickOutside from "hooks/use-click-outside";

function useTrack(track: ITrack) {
  const { audio, track: playingTrack, changeTrack } = useAudio()!;
  const forceUpdate = useForceUpdate();
  const menuDisclosure = useDisclosure();
  const menuRef = useRef(null);
  useClickOutside(menuRef, menuDisclosure.close);
  const [hovering, setHovering] = useState(false);
  const hoveringListener = useMemo(
    () => ({
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
    }),
    [setHovering]
  );

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
    menu: {
      disclosure: menuDisclosure,
      ref: menuRef,
    },
    hovering,
    hoveringListener,
  };
}

export default useTrack;
