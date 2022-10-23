import { FormEvent, useEffect, useState } from "react";
import useForceUpdate from "hooks/use-force-update";
import useAudio from "features/tracks/audio-context";

function useVolumeControler() {
  const forceUpdate = useForceUpdate();
  const { audio } = useAudio()!;
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const storedVolume = localStorage.getItem("volume");
    if (storedVolume) audio.volume = parseFloat(storedVolume);

    audio.addEventListener("volumechange", forceUpdate);
    return () => audio.removeEventListener("volumechange", forceUpdate);
  }, [audio, forceUpdate]);

  function toggleMuted() {
    if (muted) audio.volume = parseFloat(localStorage.getItem("volume") || "0");
    else audio.volume = 0;

    setMuted(!muted);
  }

  function volumeHandler(e: FormEvent<HTMLInputElement>) {
    const volume = parseFloat(e.currentTarget.value);

    audio.volume = volume;
    localStorage.setItem("volume", volume.toString());
  }

  return { muted, toggleMuted, volume: audio.volume, volumeHandler };
}

export default useVolumeControler;
