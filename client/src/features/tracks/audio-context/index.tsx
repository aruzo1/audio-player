import { createContext, ReactNode, useContext } from "react";
import useAudioValue from "./use-audio-value";

type Context = ReturnType<typeof useAudioValue> | null;

const AudioContext = createContext<Context>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const value = useAudioValue();

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

export default function useAudio() {
  return useContext(AudioContext);
}
