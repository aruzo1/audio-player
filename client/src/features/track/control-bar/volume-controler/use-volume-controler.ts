import { FormEvent, useEffect } from "react";
import useForceUpdate from "hooks/use-force-update";
import { useAudio } from "features/track/audio-context";

function useVolumeControler() {
  const forceUpdate = useForceUpdate();
  const { audio } = useAudio()!;

  useEffect(() => {
    const storedVolume = localStorage.getItem("volume");

    if (storedVolume) {
      audio.volume = parseFloat(storedVolume);
    }

    audio.addEventListener("volumechange", forceUpdate);

    return () => audio.removeEventListener("volumechange", forceUpdate);
  }, [audio]);

  function volumeHandler(e: FormEvent<HTMLInputElement>) {
    const volume = parseFloat(e.currentTarget.value);

    audio.volume = volume;
    localStorage.setItem("volume", volume.toString());
  }

  return { volume: audio.volume, volumeHandler };
}

export default useVolumeControler;
