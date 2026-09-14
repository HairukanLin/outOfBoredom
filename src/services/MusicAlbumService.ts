import {AlbumName, albumNameToString, MusicPlayerConfig, Track} from "@/types/MusicPlayerConfig";

export interface IMusicAlbumService {
  getAlbum(albumName: AlbumName): MusicPlayerConfig;
}

const noAmbWhatTracks: Track[] = [
  { trackName: "It started", url: "" },
  { trackName: "Nicest girl out there", url: "" },
  { trackName: "Still going", url: "" },
  { trackName: "Maybe now", url: "" },
  { trackName: "Undecided and one sided", url: "" },
  { trackName: "You and me", url: "" },
  { trackName: "Hate", url: "" },
  { trackName: "Home", url: "" },
  { trackName: "I think, its summer", url: "" },
  { trackName: "No ambition whatsoever", url: "" },
];

const trulySorryTracks: Track[] = [
  { trackName: "an opening an ending", url: "" },
  { trackName: "red flags (Pia)", url: "" },
  { trackName: "sailing (Kim)", url: "" },
  { trackName: "vogelfrei (Beatrix)", url: "" },
  { trackName: "flowers (Anna)", url: "" },
  { trackName: "the king (Eve)", url: "" },
  { trackName: "doubt (Mia)", url: "" },
  { trackName: "burning (Xenia)", url: "" },
  { trackName: "trying to be truly sorry", url: "" },
  { trackName: "an ending an opening (Dream)", url: "" },
];

const noAmbWhatReduxTracks: Track[] = [
  { trackName: "It started - Redux", url: "" },
  { trackName: "Nicest girl out there - Redux", url: "" },
  { trackName: "Still going - Redux", url: "" },
  { trackName: "Maybe now - Redux", url: "" },
  { trackName: "Tidal wave - Redux", url: "" },
  { trackName: "You and me - Redux", url: "" },
  { trackName: "Hate - Redux", url: "" },
  { trackName: "Home - Redux", url: "" },
  { trackName: "Summer - Redux", url: "" },
  { trackName: "No ambition whatsoever - Redux", url: "" },
];

export class OfflineMusicAlbumService implements IMusicAlbumService {
  public getAlbum(albumName: AlbumName): MusicPlayerConfig {
    switch (albumName) {
      case AlbumName.NO_AMB_WHAT:
        return { albumTitle: albumNameToString(albumName), tracks: noAmbWhatTracks };
      case AlbumName.TRULY_SORRY:
        return { albumTitle: albumNameToString(albumName), tracks: trulySorryTracks };
      case AlbumName.NO_AMB_WHAT_REDUX:
        return { albumTitle: albumNameToString(albumName), tracks: noAmbWhatReduxTracks };
      case AlbumName.FALLING_FOR_U:
        return { albumTitle: albumNameToString(albumName), tracks: [] };
    }
  }
}
