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

export interface IUpdateTrackDTO {
  title: string;
  author: string;
}

export interface ITrackFormInitialValues {
  title: string;
  author: string;
  track?: File;
  cover?: File;
}
