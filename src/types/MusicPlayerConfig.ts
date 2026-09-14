export type Track = {
  trackName: string;
  url: string;
};

export type MusicPlayerConfig = {
  albumTitle: string;
  tracks: Track[];
};

export type Icon = {
  album: AlbumName;
  onPlay: () => void;              // no args, no return
};


export enum AlbumName {
  NO_AMB_WHAT = "No ambition whatsoever",
  TRULY_SORRY = "Trying to be truly sorry",
  NO_AMB_WHAT_REDUX = "No ambition whatsoever - Redux",
  FALLING_FOR_U = "Falling for you",
}

// Numeric version — members line up 1:1 with AlbumName (0–3)
export enum AlbumId {
  NO_AMB_WHAT,        // 0
  TRULY_SORRY,        // 1
  NO_AMB_WHAT_REDUX,  // 2
  FALLING_FOR_U,      // 3
}

export function albumNameToString(album: AlbumName): string {
  return album;
}

// Number of albums — derived from the enum so nothing breaks when a new album is added
export function albumCount(): number {
  return Object.keys(AlbumName).length;
}

// AlbumName ("No ambition whatsoever") -> AlbumId (0)
export function albumNameToId(album: AlbumName): AlbumId {
  return albumIndex[album];
}

// AlbumId (0) -> AlbumName ("No ambition whatsoever")
export function albumIdToName(id: AlbumId): AlbumName {
  return Object.values(AlbumName)[id];
}

const albumIndex: Record<AlbumName, AlbumId> = {
  [AlbumName.NO_AMB_WHAT]: AlbumId.NO_AMB_WHAT,
  [AlbumName.TRULY_SORRY]: AlbumId.TRULY_SORRY,
  [AlbumName.NO_AMB_WHAT_REDUX]: AlbumId.NO_AMB_WHAT_REDUX,
  [AlbumName.FALLING_FOR_U]: AlbumId.FALLING_FOR_U,
};
