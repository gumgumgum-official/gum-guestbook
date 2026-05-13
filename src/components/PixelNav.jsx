import { Link, useLocation } from "@tanstack/react-router";

const items = [
  { to: "/", label: "홈" },
  { to: "/guestbook", label: "방명록" },
  { to: "/", label: "교환일기", disabled: true },
  { to: "/", label: "갤러리", disabled: true },
  { to: "/", label: "다이어리", disabled: true },
];

export default function PixelNav() {
  const { pathname } = useLocation();
  return (
    <nav className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-[var(--pink-deep)]">
        <span className="text-2xl">♥</span>
        <span className="text-lg font-bold">삐삐홈</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it, i) => {
          const active = pathname === it.to && !it.disabled;
          if (it.disabled) {
            return (
              <span key={i} className="pixel-pill cursor-not-allowed text-xs opacity-60">
                {it.label}
              </span>
            );
          }
          return (
            <Link
              key={i}
              to={it.to}
              className={`pixel-pill text-xs ${active ? "pixel-pill-active" : ""}`}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
