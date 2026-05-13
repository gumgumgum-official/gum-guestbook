export default function PinkBanner({ children }) {
  return (
    <div className="banner-gradient mt-6 flex items-center justify-center gap-2 rounded-full border-2 border-[var(--pink-deep)] px-4 py-2 text-center text-sm text-white shadow-[var(--shadow-pop-sm)]">
      <span>♥</span>
      <span>{children}</span>
      <span>♥</span>
    </div>
  );
}
