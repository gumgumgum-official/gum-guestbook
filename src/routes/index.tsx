import { createFileRoute } from "@tanstack/react-router";
import BrowserFrame from "@/components/BrowserFrame";
import PixelNav from "@/components/PixelNav";
import ProfileCard from "@/components/home/ProfileCard";
import TodayCard from "@/components/home/TodayCard";
import MusicPlayer from "@/components/home/MusicPlayer";
import GuestbookForm from "@/components/guestbook/GuestbookForm";
import GuestbookEntry from "@/components/guestbook/GuestbookEntry";

export const Route = createFileRoute("/")({
  component: Home,
});

const entries = [
  {
    name: "또또",
    date: "2026.05.12",
    message: "삐삐야~ 오늘도 놀러왔어! 방 너무 귀여워 ♥",
    rotate: -1,
  },
  {
    name: "민지",
    date: "2026.05.11",
    message: "픽셀 음악 너무 좋다… 플레이리스트 공유 가능?",
    rotate: 1,
  },
  {
    name: "초코",
    date: "2026.05.10",
    message: "오늘의 한마디 보고 위로 받고 가요. 고마워요 :)",
    rotate: -1,
  },
  {
    name: "루루",
    date: "2026.05.08",
    message: "교환일기 페이지도 빨리 열어줘~ 기다리는중!",
    rotate: 1,
  },
];

function Home() {
  return (
    <BrowserFrame url="https://ppippi.home/">
      <PixelNav />

      <div className="grid gap-4 md:grid-cols-[280px_minmax(0,1fr)]">
        {/* Left column */}
        <div className="space-y-4">
          <ProfileCard />
          <TodayCard />
          <MusicPlayer />
        </div>

        {/* Right column */}
        <div className="min-w-0 space-y-4">
          <div className="pixel-card p-4 sm:p-6">
            <div className="mb-4 flex items-end justify-between border-b-2 border-dashed border-[var(--pink-deep)] pb-2">
              <h2 className="text-lg font-bold text-[var(--pink-deep)]">✎ 방명록</h2>
              <span className="text-[11px] text-[var(--muted-foreground)]">
                총 <b className="text-[var(--pink-deep)]">{entries.length}</b>개의 메시지
              </span>
            </div>

            <GuestbookForm />

            <div className="mt-5 max-h-[430px] space-y-3 overflow-y-auto pr-2">
              {entries.map((e, i) => (
                <GuestbookEntry key={i} {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <PinkBanner>오늘도 놀러와줘서 고마워요. 좋은 하루 보내세요!</PinkBanner> */}
    </BrowserFrame>
  );
}
