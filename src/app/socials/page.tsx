import LinkTreeComponent from "@/components/link-tree-component";
import BackgroundImageComponent from "@/components/background-image";
import { AlbumId, MusicPlayerConfig } from "@/types/MusicPlayerConfig";

const newAlbumIndex = AlbumId.FALLING_FOR_U

export default function SocialPage() {
    return (
        <>
            <BackgroundImageComponent albumIndex={newAlbumIndex}/>
            <LinkTreeComponent/>
            </>
    );
}
