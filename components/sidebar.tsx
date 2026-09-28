export default function Sidebar() {

    const playlists = ["Coding", "Gym", "Road Trip", "Late night vibes"];
    const Navs = ["Home", "Search", "Library"];
    return <>
        <ul>
            {Navs.map((nav) => (
                <li key={nav}>{nav}</li>
            ))}
        </ul>
        <p>-------------------</p>
        <ul>
            {playlists.map((playlist) => (
                <li key={playlist}>{playlist}</li>
            ))}
        </ul>
        <br />
    </>
}