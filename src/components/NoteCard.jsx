export default function NoteCard({ children, rotate = -2, className = "" }) {
  return (
    <div
      className={`note-paper p-4 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
