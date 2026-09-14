"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../components-style/nav-bar-style.css"

export default function NavBarComponent() {
    const pathname = usePathname();

    return  (
    <ul className="nav-elem">
        <li><Link className={pathname === "/socials" ? "active" : ""} href="/socials">socials</Link></li>
        <li><Link className={pathname === "/music" ? "active" : ""} href="/music">music</Link></li>
    </ul>
    );
}
