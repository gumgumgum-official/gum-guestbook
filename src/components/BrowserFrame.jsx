export default function BrowserFrame({ children, url = "https://ppippi.home/" }) {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-2 py-4 sm:py-8">
      <div className="pixel-card overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b-2 border-[var(--pink-deep)] bg-[var(--pink-mid)] px-3 py-2">
          <div className="flex items-center gap-2 text-white">
            <span>♥</span>
            <span className="text-sm">ppippi's mini home</span>
          </div>
          <div className="flex gap-1.5">
            <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-[var(--pink-deep)] bg-white text-[10px] text-[var(--pink-deep)]">_</span>
            <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-[var(--pink-deep)] bg-white text-[10px] text-[var(--pink-deep)]">□</span>
            <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-[var(--pink-deep)] bg-[var(--pink-deep)] text-[10px] text-white">✕</span>
          </div>
        </div>
        {/* URL bar */}
        <div className="flex items-center gap-2 border-b-2 border-[var(--pink-deep)] bg-[#fff0f6] px-3 py-1.5">
          <span className="text-[var(--pink-deep)]">←</span>
          <span className="text-[var(--pink-deep)]">→</span>
          <span className="text-[var(--pink-deep)]">⟳</span>
          <div className="ml-2 flex-1 truncate rounded-full border-2 border-[var(--pink-deep)] bg-white px-3 py-1 text-xs text-[var(--pink-deep)]">
            🔒 {url}
          </div>
          <span className="text-[var(--pink-deep)]">★</span>
        </div>
        <div className="bg-[#fff5fa]/60 p-4 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
