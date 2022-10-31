import { createContext, ReactNode, useContext } from "react";
import ControlBar from "../control-bar";
import useAudioValue from "./use-audio-value";

type Context = ReturnType<typeof useAudioValue> | null;

export const AudioContext = createContext<Context>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const value = useAudioValue();

  return (
    <AudioContext.Provider value={value}>
      {children}
      {value.audio && <ControlBar />}
    </AudioContext.Provider>
  );
}

export default function useAudio() {
  return useContext(AudioContext);
}
