import {albumCount, albumIdToName, AlbumName, albumNameToId, MusicPlayerConfig, Track} from "@/types/MusicPlayerConfig";
import styles from "@/components-style/music-player-component.module.css";
import {IMusicAlbumService, OfflineMusicAlbumService} from "@/services/MusicAlbumService";
import IConButtonComponent from "@/components/icon-button-component";
import {Dispatch, SetStateAction} from "react";


const albumService: IMusicAlbumService = new OfflineMusicAlbumService();

type MusicPlayerProps = {
    albumIndex: number;
    setAlbumIndex: Dispatch<SetStateAction<number>>;
};

export default function MusicPlayerComponent({albumIndex, setAlbumIndex}: MusicPlayerProps) {
    const albumConfig: MusicPlayerConfig = albumService.getAlbum(albumIdToName(albumIndex))
    return (
        <>
            <div className={`${styles.divMusicPlayer} `}>
                <div className={styles.divAlbumSwitcherHeader}>
                    <IConButtonComponent iconConfig={{
                        iconURL: "/backPlayer.svg",
                        onPressed: () => setAlbumIndex(prev => (prev - 1 + albumCount()) % albumCount()),
                    }} />
                    <p className={styles.title}>{albumConfig.albumTitle}</p>
                    <IConButtonComponent iconConfig={{
                        iconURL: "/forwardPlayer.svg",
                        onPressed: () => setAlbumIndex(prev => (prev + 1) % albumCount()),
                    }} />
                </div>
                <p className={styles.playButton} >PLAY</p>
                <div className={`${styles.bottomLeft} ${styles.bottomLeftFont}`}>
                    <ul className={styles.trackList}>
                        {albumConfig.tracks.map((track: Track) => {
                            return (<li>  {track.trackName} </li>)
                        })}
                    </ul>
                </div>
            </div>

        </>
    );
}
