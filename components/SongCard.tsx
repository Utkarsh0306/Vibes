interface SongCardProps {
  title: string;
  artist: string;
  duration: string;
}

export default function SongCard(props: SongCardProps) {
  return (
    <div className="song-card flex items-center gap-4 p-4 border rounded-lg shadow-md">
      <div className="album-art-placeholder">Cover Art</div>
      <div className="mx-auto flex items-center gap-4">
        <h3>{props.title}</h3>
        <h4>{props.artist}</h4>
        <p>{props.duration}</p>
      </div>
    </div>
  );
}