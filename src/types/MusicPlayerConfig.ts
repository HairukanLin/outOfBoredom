export type Track = {
  trackName: string;
  url: string;
};

export type MusicPlayerConfig = {
  albumTitle: string;
  tracks: Track[];
};

export enum AlbumName {
  NO_AMB_WHAT = "No ambition whatsoever",
  TRULY_SORRY = "Trying to be truly sorry",
  NO_AMB_WHAT_REDUX = "No ambition whatsoever - Redux",
  FALLING_FOR_U = "Falling for you",
}

export function albumNameToString(album: AlbumName): string {
  return album;
}
