import { useEffect } from "react";
import useForceUpdate from "hooks/use-force-update";
import { useAudio } from "features/track/audio-context";

function useButtons() {
  const forceUpdate = useForceUpdate();
  const { audio } = useAudio()!;

  useEffect(() => {
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
    };
  }, [audio, forceUpdate]);

  return {
    play: () => audio.play(),
    pause: () => audio.pause(),
    playing: !audio.paused,
  };
}

export default useButtons;
