"use client";

import {useState} from "react";
import MusicPlayerComponent from "@/components/music-player/music-player-component";

export default function MusicPage() {
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState<number>(0);

    return (
        <MusicPlayerComponent albumIndex={currentAlbumIndex} setAlbumIndex={setCurrentAlbumIndex}/>
    );
}
