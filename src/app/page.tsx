import MusicPlayerComponent from "@/components/music-player-component";
import {MusicPlayerConfig} from "@/types/MusicPlayerConfig";

import NavBarComponent from "../components/nav-bar-component"

export default function Home() {
    const test:MusicPlayerConfig = {
        tracks : [],
        albumTitle : "Home",
    }
  return (

      <>
      <NavBarComponent/>
          <MusicPlayerComponent/>
      </>
  );
}
