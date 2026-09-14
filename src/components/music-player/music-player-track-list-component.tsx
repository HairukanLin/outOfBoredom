import styles from "@/components-style/music-player-component.module.css";
import IConButtonComponent from "@/components/icon-button-component";
import {Track} from "@/types/MusicPlayerConfig";

type MusicPlayerTrackListProps = {
    tracks: Track[];
    trackColors: string
    currentIndex: number;
    setAlbumIndex: (value: number) => void;
};

export default function MusicPlayerTrackListComponent({tracks, trackColors, currentIndex, setAlbumIndex} :  MusicPlayerTrackListProps) {
    return (
        <div className={styles.bottomLeft} style={{ color: trackColors }}>
            <ul className={styles.trackList}>
                {tracks.map((track: Track, index: number) => {
                    if(currentIndex === index) {
                        return (<li key={index} className={styles.selectedTrackList} onClick={() => setAlbumIndex(index)}>
                            {track.trackName}
                        </li>)
                    } else {
                        return (<li key={index} className={styles.notSelectedTrackList} onClick={() => setAlbumIndex(index)}>  {track.trackName} </li>)
                    }
                })}
            </ul>
        </div>

    );
}
