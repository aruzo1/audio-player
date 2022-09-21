export interface ITrack {
  id: number;
  title: string;
  author: string;
  trackUrl: string;
  coverUrl: string;
}

export interface ICrateTrackDTO {
  title: string;
  author: string;
  track: File;
  cover: File;
}

export interface IAudioContext {
  audio: HTMLAudioElement;
  track: ITrack | undefined;
  changeTrack: (track: ITrack) => void;
}

export interface ITracksContext {
  tracks: ITrack[];
  addTrack: (track: ITrack) => void;
}
