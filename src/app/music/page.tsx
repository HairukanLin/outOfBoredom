"use client";

import {useState} from "react";
import MusicPlayerComponent from "@/components/music-player-component";
import styles from "../page.module.css";


export default function MusicPage() {
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState<number>(0);

    return (
        <>
                <MusicPlayerComponent albumIndex={currentAlbumIndex} setAlbumIndex={setCurrentAlbumIndex}/>
        </>
    );
}
