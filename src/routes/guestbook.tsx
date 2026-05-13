import { createFileRoute } from "@tanstack/react-router";
import BrowserFrame from "@/components/BrowserFrame";
import PixelNav from "@/components/PixelNav";
import PinkBanner from "@/components/PinkBanner";
import GuestbookForm from "@/components/guestbook/GuestbookForm";
import GuestbookEntry from "@/components/guestbook/GuestbookEntry";

export const Route = createFileRoute("/guestbook")({
  head: () => ({
    meta: [
      { title: "방명록 — 삐삐홈" },
      { name: "description", content: "삐삐홈 방명록. 짧은 인사를 남겨주세요." },
      { property: "og:title", content: "방명록 — 삐삐홈" },
      { property: "og:description", content: "삐삐에게 한마디 ♥" },
    ],
  }),
  component: Guestbook,
});

const entries = [
  {
    name: "또또",
    date: "2026.05.12",
    message: "삐삐야~ 오늘도 놀러왔어! 방 너무 귀여워 ♥",
    rotate: -2,
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
    rotate: 2,
  },
  {
    name: "별이",
    date: "2026.05.06",
    message: "방 새단장 완전 취향저격! 또 올게요 ★",
    rotate: -2,
  },
  {
    name: "콩콩",
    date: "2026.05.02",
    message: "프로필 그림 너무 귀여움 ㅠㅠ 잘 보고 가요",
    rotate: 1,
  },
];

function Guestbook() {
  return (
    <BrowserFrame url="https://ppippi.home/guestbook">
      <PixelNav />

      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-xl font-bold text-[var(--pink-deep)]">✎ 방명록</h1>
        <span className="text-xs text-[var(--muted-foreground)]">
          총 <b className="text-[var(--pink-deep)]">{entries.length}</b>개의 메시지
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <GuestbookForm />
          <div className="pixel-card-sm p-3 text-[11px] leading-relaxed">
            <b className="text-[var(--pink-deep)]">RULES ♥</b>
            <ul className="mt-1 space-y-1">
              <li>· 따뜻한 말 한마디만 남겨주세요</li>
              <li>· 광고/도배는 살포시 삭제됩니다</li>
              <li>· 비밀글 기능은 준비중이에요</li>
            </ul>
          </div>
        </div>

        <div className="max-h-[520px] space-y-4 overflow-y-auto pr-2">
          {entries.map((e, i) => (
            <GuestbookEntry key={i} {...e} />
          ))}
        </div>
      </div>

      <PinkBanner>한마디 남겨주시면 삐삐가 답방 갈게요 ♥</PinkBanner>
    </BrowserFrame>
  );
}
