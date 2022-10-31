import { useEffect, useState } from "react";
import useAudio from "features/tracks/audio-context";

function useProgressBar() {
  const { audio } = useAudio()!;
  const [virtualTime, setVirtualTime] = useState(audio.currentTime);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    if (!holding) setVirtualTime(audio.currentTime);
  }, [audio.currentTime, holding]);

  const currentTimeHandler = () => {
    setHolding(false);
    audio.changeCurrentTime(virtualTime);
  };

  return {
    virtualTime,
    duration: audio.duration,
    setVirtualTime,
    setHolding,
    currentTimeHandler,
  };
}

export default useProgressBar;
