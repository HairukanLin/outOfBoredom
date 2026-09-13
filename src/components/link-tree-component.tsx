import Link from "next/link";
import "../components-style/link-tree-style.css"

export default function LinkTreeComponent() {
    return  (
    <ul className="link-elem">
        <li><Link className="spotify" href="https://open.spotify.com/artist/6sUckbLOVyPwApRpE9NBST">spotify</Link></li>
        <li><Link className="youtube" href="https://www.youtube.com/channel/UCZkHS49pt0gL8fkIiCFDexA">youtube</Link></li>
        <li><Link className="appleMusic" href="https://music.apple.com/de/artist/out-of-boredom/1611638736">apple music</Link></li>
        <li><Link className="instagram" href="https://www.instagram.com/out_of_boredem/">instagram</Link></li>
        <li><Link className="tiktok" href="">tiktok</Link></li>
    </ul>
    );
}