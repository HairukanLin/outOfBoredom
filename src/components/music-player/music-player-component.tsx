"use client";

import {
    albumCount,
    albumIdToName,
    Color,
    MusicPlayerConfig,
} from "@/types/MusicPlayerConfig";
import styles from "@/components-style/music-player-component.module.css";
import {IMusicAlbumService, OfflineMusicAlbumService} from "@/services/MusicAlbumService";
import MusicPlayerHeaderComponent from "@/components/music-player/music-player-header-component";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import MusicPlayerTrackListComponent from "@/components/music-player/music-player-track-list-component";


const albumService: IMusicAlbumService = new OfflineMusicAlbumService();

type MusicPlayerProps = {
    albumIndex: number;
    setAlbumIndex: Dispatch<SetStateAction<number>>;
};

export default function MusicPlayerComponent({albumIndex, setAlbumIndex}: MusicPlayerProps) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const albumConfig: MusicPlayerConfig = albumService.getAlbum(albumIdToName(albumIndex))
    const headerColor = albumConfig.headerPlayerMainColor ?? Color.DARK_RED;
    const tracksColor = albumConfig.tracksPlayerColor ?? Color.LIGHT_PINK;

    const audioRef = useRef<HTMLAudioElement>(null);

    // undefined (not "") when there's no track — an empty src makes the
    // browser try to reload the page itself as audio.
    const currentTrackPath = albumConfig.tracks.at(currentTrackIndex)?.url;

    // Keep the <audio> element in sync with React state.
    // Re-runs whenever play/pause is toggled or the current track (src) changes.
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying && currentTrackPath) {
            // play() returns a promise that rejects if the browser blocks autoplay
            audio.play().catch(() => setIsPlaying(false));
        } else {
            audio.pause();
        }
    }, [isPlaying, currentTrackPath]);

    const switchAlbum = (step: number) => {
        setCurrentTrackIndex(0);
        setAlbumIndex(prev => (prev + step + albumCount()) % albumCount());
    };

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
                <audio
                    ref={audioRef}
                    src={currentTrackPath}
                    preload="none"
                    onEnded={() => setIsPlaying(false)}
                />
                <MusicPlayerTrackListComponent tracks={albumConfig.tracks} trackColors={tracksColor}
                                               currentIndex={currentTrackIndex} setAlbumIndex={setCurrentTrackIndex}/>
            </div>

        </>
    );
}
