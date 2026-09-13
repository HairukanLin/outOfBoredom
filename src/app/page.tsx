import MusicPlayerComponent from "@/components/music-player-component";
import {MusicPlayerConfig} from "@/types/MusicPlayerConfig";

export default function Home() {
    const test:MusicPlayerConfig = {
        tracks : [],
        albumTitle : "Home",
    }
  return (
      <>
        <p>hi</p>
          <MusicPlayerComponent config={test}/>
      </>
  );
}
