import { FormEvent, useEffect } from "react";
import useForceUpdate from "hooks/use-force-update";
import useAudio from "features/track/audio-context";

function useProgressBar() {
  const forceUpdate = useForceUpdate();
  const { audio } = useAudio()!;

  useEffect(() => {
    audio.addEventListener("loadedmetadata", forceUpdate);
    audio.addEventListener("timeupdate", forceUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", forceUpdate);
      audio.removeEventListener("timeupdate", forceUpdate);
    };
  }, [audio, forceUpdate]);

  function currentTimeHandler(e: FormEvent<HTMLInputElement>) {
    audio.currentTime = parseInt(e.currentTarget.value);
  }

  return {
    duration: audio.duration,
    currentTime: audio.currentTime,
    currentTimeHandler,
  };
}

export default useProgressBar;
