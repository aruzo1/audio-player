export interface ITrack {
  id: number;
  genreId: number;
  title: string;
  author: string;
  trackUrl: string;
  coverUrl: string;
}

export interface ICrateTrack {
  title: string;
  author: string;
  track: File;
  cover: File;
  genreId: number;
}

export interface IUpdateTrack {
  title: string;
  author: string;
  genreId: number;
}
