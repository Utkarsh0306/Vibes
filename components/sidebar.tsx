import Link from "next/link";
export default function Sidebar() {

    const playlists = ["Coding", "Gym", "Road Trip", "Late night vibes"];
    const Navs = [
        { name: "Home", href: "/" },
        { name: "Search", href: "/search" },
        { name: "Library", href: "/library" }
    ];
    return <>
        <ul>
            {Navs.map((nav) => (
                <li key={nav.name}>
                    <Link href={nav.href}>{nav.name}</Link>
                </li>
            ))}
        </ul>
        <p>-------------------</p>
        <ul>
            {playlists.map((playlist) => (
                <li key={playlist}>
                    <Link href={`/playlists/${playlist}`}>{playlist}</Link>
                </li>
            ))}
        </ul>
        <br />
    </>
}