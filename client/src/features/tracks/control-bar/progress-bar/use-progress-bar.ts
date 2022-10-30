import { FormEvent, useEffect, useState } from "react";
import useForceUpdate from "hooks/use-force-update";
import useAudio from "features/tracks/audio-context";

function useProgressBar() {
  const forceUpdate = useForceUpdate();
  const { audio } = useAudio()!;
  const [currentTime, setCurrentTime] = useState(audio.currentTime);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    function timeUpdateListener() {
      if (!holding) setCurrentTime(audio.currentTime);
    }

    audio.addEventListener("loadedmetadata", forceUpdate);
    audio.addEventListener("timeupdate", timeUpdateListener);

    return () => {
      audio.removeEventListener("loadedmetadata", forceUpdate);
      audio.removeEventListener("timeupdate", timeUpdateListener);
    };
  }, [audio, forceUpdate, holding]);

  function toggleHolding() {
    setHolding(!holding);
  }
  function currentTimeHandler(e: FormEvent<HTMLInputElement>) {
    setCurrentTime(+e.currentTarget.value);
  }
  function audioCurrentTimeHandler(e: FormEvent<HTMLInputElement>) {
    toggleHolding();
    audio.currentTime = +e.currentTarget.value;
  }

  return {
    duration: audio.duration,
    currentTime,
    toggleHolding,
    audioCurrentTimeHandler,
    currentTimeHandler,
  };
}

export default useProgressBar;
