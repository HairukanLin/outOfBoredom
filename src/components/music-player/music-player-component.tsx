import {
    albumCount,
    albumIdToName,
    AlbumName,
    albumNameToId,
    Color,
    MusicPlayerConfig,
    Track
} from "@/types/MusicPlayerConfig";
import styles from "@/components-style/music-player-component.module.css";
import {IMusicAlbumService, OfflineMusicAlbumService} from "@/services/MusicAlbumService";
import MusicPlayerHeaderComponent from "@/components/music-player/music-player-header-component";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import MusicPlayerTrackListComponent from "@/components/music-player/music-player-track-list-component";


const albumService: IMusicAlbumService = new OfflineMusicAlbumService();

type MusicPlayerProps = {
    albumIndex: number;
    setAlbumIndex: Dispatch<SetStateAction<number>>;
};

export default function MusicPlayerComponent({albumIndex, setAlbumIndex}: MusicPlayerProps) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const albumConfig: MusicPlayerConfig = albumService.getAlbum(albumIdToName(albumIndex))
    const headerColor = albumConfig.headerPlayerMainColor ?? Color.DARK_RED;
    const tracksColor = albumConfig.tracksPlayerColor ?? Color.LIGHT_PINK;

    const audioRef = useRef<HTMLAudioElement>(null);


    const switchAlbum = (step: number) => {
        setCurrentTrackIndex(0);
        setAlbumIndex(prev => (prev + step + albumCount()) % albumCount());
    };

    const currentTrackPath = albumConfig.tracks.at(currentTrackIndex)?.url ?? "";

    return (
        <>
            <div className={`${styles.divMusicPlayer} `}>
                <MusicPlayerHeaderComponent
                    albumTitle={albumConfig.albumTitle}
                    currentTrackName={albumConfig.tracks.at(currentTrackIndex)?.trackName}
                    headerColor={headerColor}
                    onPrevious={() => switchAlbum(-1)}
                    onNext={() => switchAlbum(1)}
                />
                <p
                    className={styles.playButton}
                    style={{color: headerColor}}
                    onClick={() => setIsPlaying(prev => !prev)}
                >
                    {isPlaying ? "STOP" : "PLAY"}
                </p>
                <audio ref={audioRef} src={currentTrackPath}></audio>
                <MusicPlayerTrackListComponent tracks={albumConfig.tracks} trackColors={tracksColor}
                                               currentIndex={currentTrackIndex} setAlbumIndex={setCurrentTrackIndex}/>
            </div>

        </>
    );

    function playSong(trackPath: string) {
        if(trackPath === "") {
            return;
        }
        audioRef.current?.play();


    }

    function stopSong() {
        audioRef.current?.pause();
        audioRef.current!.currentTime = 0;
    }
}

