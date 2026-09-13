import Link from "next/link";
import "../components-style/nav-bar-style.css"

export default function NavBarComponent() {
    return  (
    <ul className="nav-elem">
        <li><Link className="socials" href="/socials">socials</Link></li>
        <li><Link className="music" href="/music">music</Link></li>
    </ul>
    );
}