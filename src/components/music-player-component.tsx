import {MusicPlayerConfig} from "@/types/MusicPlayerConfig";

export default function MusicPlayerComponent({ config }: { config: MusicPlayerConfig }) {
    return (
        <>
            <p>{config.albumTitle}</p>
            <p></p>
            <p>PLAY</p>
        </>
    );
}