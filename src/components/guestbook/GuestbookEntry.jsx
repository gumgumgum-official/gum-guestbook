export default function GuestbookEntry({ name, date, message, rotate = 0 }) {
  return (
    <div className="note-paper w-full p-4" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="mb-2 flex items-center justify-between text-[11px] text-[var(--pink-deep)]">
        <span className="font-bold">♥ {name}</span>
        <span>{date}</span>
      </div>
      <p className="text-xs leading-relaxed">{message}</p>
    </div>
  );
}
