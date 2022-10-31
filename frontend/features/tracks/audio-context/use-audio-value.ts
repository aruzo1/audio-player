import { useEffect, useState } from "react";
import client from "fetch/client";
import { ITrack } from "../types";

function useAudioValue(audioElement?: HTMLAudioElement) {
  const [track, setTrack] = useState<ITrack>();
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(Infinity);

  useEffect(() => {
    if (!audioElement) return;

    const storedVolume = localStorage.getItem("volume");
    if (storedVolume) {
      setVolume(+storedVolume);
      audioElement.volume = +storedVolume;
    }

    const storedTrackId = localStorage.getItem("trackId");
    if (storedTrackId) {
      client.get<ITrack>(`tracks/${storedTrackId}`).then((res) => {
        setTrack(res.data);
        audioElement.src = res.data.trackUrl;
      });
    }

    const timeListener = () => setCurrentTime(audioElement.currentTime);
    const metadataListener = () => setDuration(audioElement.duration);
    const endedListener = () => audio.playPrevOrNext(true);

    audioElement.addEventListener("timeupdate", timeListener);
    audioElement.addEventListener("loadedmetadata", metadataListener);
    audioElement.addEventListener("ended", endedListener);

    return () => {
      audioElement.removeEventListener("timeupdate", timeListener);
      audioElement.removeEventListener("loadedmetadata", metadataListener);
      audioElement.removeEventListener("ended", endedListener);
    };
  }, [audioElement]);

  const audio = {
    playing,
    volume,
    muted,
    currentTime,
    duration,
    togglePlaying() {
      if (playing) audioElement?.pause();
      else audioElement?.play();

      setPlaying((prev) => !prev);
    },
    changeTrack(track: ITrack) {
      setTrack(track);
      setPlaying(true);

      if (audioElement) {
        audioElement.src = track.trackUrl;
        audioElement?.play();
      }
    },
    playPrevOrNext(next?: boolean) {
      setTrack((prev) => {
        if (prev) {
          client
            .get<ITrack>(`tracks/${prev.id}/${next ? "next" : "prev"}`)
            .then((res) => {
              this.changeTrack(res.data);

              localStorage.setItem("trackId", res.data.id + "");
            });
        }

        return prev;
      });
    },
    changeVolume(volume: number) {
      setVolume(volume);
      setMuted(false);

      if (audioElement) audioElement.volume = volume;
      localStorage.setItem("volume", volume + "");
    },
    toggleMuted() {
      setMuted((prev) => !prev);

      if (!audioElement) return;
      if (muted) audioElement.volume = volume;
      else audioElement.volume = 0;
    },
    changeCurrentTime(time: number) {
      setCurrentTime(time);

      if (audioElement) audioElement.currentTime = time;
    },
  };

  return { audio, track };
}

export default useAudioValue;
