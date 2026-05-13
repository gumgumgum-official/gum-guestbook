export default function MusicPlayer() {
  return (
    <div className="pixel-card-sm p-3">
      <div className="mb-1 text-[11px] font-bold text-[var(--pink-deep)]">♪ MUSIC</div>
      <div className="flex items-center gap-2">
        <button className="grid h-7 w-7 place-items-center rounded-full border-2 border-[var(--pink-deep)] bg-[var(--pink-mid)] text-white">
          ▶
        </button>
        <div className="flex-1 truncate text-xs">Pixel Dreams — 8bit Café</div>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full border border-[var(--pink-deep)] bg-white">
        <div className="h-full w-1/3 rounded-full bg-[var(--pink-deep)]" />
      </div>
    </div>
  );
}
