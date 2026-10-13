import SongCard from "@/components/SongCard";
export default function Page() {
  const songs = [
    { id: 1,title: "Starboy", artist: "The Weeknd", duration: "3:50" },
    { id: 2,title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { id: 3,title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" }
  ];
  return (
    <div>
      {songs.map((song) => (
        <SongCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ))}
    </div>
  );
}