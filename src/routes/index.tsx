import { createFileRoute } from "@tanstack/react-router";
import BrowserFrame from "@/components/BrowserFrame";
import PixelNav from "@/components/PixelNav";
import PinkBanner from "@/components/PinkBanner";
import NoteCard from "@/components/NoteCard";
import ProfileCard from "@/components/home/ProfileCard";
import TodayCard from "@/components/home/TodayCard";
import MusicPlayer from "@/components/home/MusicPlayer";
import PixelRoom from "@/components/home/PixelRoom";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "삐삐홈 — 픽셀 미니홈피" },
      { name: "description", content: "픽셀 감성 Y2K 미니 홈페이지. 삐삐의 작은 방에 놀러오세요." },
      { property: "og:title", content: "삐삐홈 — 픽셀 미니홈피" },
      { property: "og:description", content: "픽셀 감성 Y2K 미니 홈페이지." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <BrowserFrame url="https://ppippi.home/">
      <PixelNav />

      <div className="grid gap-4 md:grid-cols-[280px_1fr]">
        {/* Left column */}
        <div className="space-y-4">
          <ProfileCard />
          <TodayCard />
          <MusicPlayer />
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <PixelRoom />

          <div className="grid gap-4 sm:grid-cols-2">
            <NoteCard rotate={-2}>
              <div className="text-[11px] font-bold text-[var(--pink-deep)]">★ 이 이야기의 주인공</div>
              <p className="mt-1 text-xs">
                삐삐는 픽셀 마을에 사는 작은 친구예요. 책과 노을과 따뜻한 코코아를 좋아합니다.
              </p>
            </NoteCard>
            <NoteCard rotate={2}>
              <div className="text-[11px] font-bold text-[var(--pink-deep)]">★ 오늘의 속마음</div>
              <p className="mt-1 text-xs">
                "조금 느려도 괜찮아. 오늘도 한 걸음." 작은 다짐을 적어두고 가요 ♥
              </p>
            </NoteCard>
          </div>

          <div className="pixel-card-sm p-3">
            <div className="mb-2 text-[11px] font-bold text-[var(--pink-deep)]">📌 NOTICE</div>
            <ul className="space-y-1 text-xs">
              <li>· 5/13 — 새 다이어리 페이지 준비중!</li>
              <li>· 5/10 — 방명록 한마디 남겨주세요 ♥</li>
              <li>· 5/03 — 봄맞이 픽셀 룸 새단장 완료</li>
            </ul>
          </div>
        </div>
      </div>

      <PinkBanner>오늘도 놀러와줘서 고마워요. 좋은 하루 보내세요!</PinkBanner>
    </BrowserFrame>
  );
}
