"use client";

import styles from "@/components-style/music-player-component.module.css";
import IConButtonComponent from "@/components/icon-button-component";
import {Color} from "@/types/MusicPlayerConfig";

type MusicPlayerHeaderProps = {
    albumTitle: string;
    currentTrackName?: string;
    headerColor: string;
    onPrevious: () => void;
    onNext: () => void;
};

// Pick the colored SVG pair that matches the header color
function playerIcons(headerColor: string): { back: string; forward: string } {
    switch (headerColor) {
        case Color.LIGHT_PINK:
            return { back: "/backPlayerPink.svg", forward: "/forwardPlayerPink.svg" };
        case Color.DARK_RED:
            return { back: "/backPlayerDarkRed.svg", forward: "/forwardPlayerDarkRed.svg" };
        case Color.LIGHT_GREEN:
            return { back: "/backPlayerGreen.svg", forward: "/forwardPlayerGreen.svg" };
        case Color.LIGHT_BLACK:
            return { back: "/backPlayerBlack.svg", forward: "/forwardPlayerBlack.svg" };
        case Color.WHITE:
            return { back: "/backPlayerWhite.svg", forward: "/forwardPlayerWhite.svg" };
        default:
            return { back: "/backPlayer.svg", forward: "/forwardPlayer.svg" };
    }
}

export default function MusicPlayerHeaderComponent({
    albumTitle,
    currentTrackName,
    headerColor,
    onPrevious,
    onNext,
}: MusicPlayerHeaderProps) {
    const icons = playerIcons(headerColor);

    return (
        <>
            <div className={styles.divAlbumSwitcherHeader}>
                <IConButtonComponent iconConfig={{
                    iconURL: icons.back,
                    onPressed: onPrevious,
                }} />
                <p className={styles.title} style={{color: headerColor}}>{albumTitle}</p>
                <IConButtonComponent iconConfig={{
                    iconURL: icons.forward,
                    onPressed: onNext,
                }} />
            </div>
            <p style={{color: headerColor}}>{currentTrackName}</p>

        </>
    );
}
