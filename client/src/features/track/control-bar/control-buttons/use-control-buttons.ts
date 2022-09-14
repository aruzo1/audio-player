import { useEffect } from "react";
import useForceUpdate from "hooks/use-force-update";
import { useAudio } from "features/track/audio-context";

function useControlButtons() {
  const { audio } = useAudio()!;
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
    };
  }, [audio]);

  return {
    play: () => audio.play(),
    pause: () => audio.pause(),
    isPlaying: !audio.paused,
  };
}

export default useControlButtons;
