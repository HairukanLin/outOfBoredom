"use client";

import {useState} from "react";
import MusicPlayerComponent from "@/components/music-player/music-player-component";
import BackgroundImageComponent from "@/components/background-image";

export default function MusicPage() {
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState<number>(0);

    return (
        <>
        <BackgroundImageComponent albumIndex={currentAlbumIndex}/>
        <MusicPlayerComponent albumIndex={currentAlbumIndex} setAlbumIndex={setCurrentAlbumIndex}/>
        </>
    );
}
