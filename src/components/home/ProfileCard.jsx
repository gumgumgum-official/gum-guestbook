import character from "@/assets/pixel-character.png";

export default function ProfileCard() {
  return (
    <div className="pixel-card p-4">
      <div className="overflow-hidden rounded-lg border-2 border-[var(--pink-deep)] bg-[var(--pink-soft)]">
        <img
          src={character}
          alt="삐삐 프로필"
          className="pixel mx-auto block h-auto w-full"
          width={512}
          height={512}
        />
      </div>
      <div className="mt-3 text-center">
        <div className="text-base font-bold text-[var(--pink-deep)]">♥ 삐삐 ♥</div>
        <p className="mt-1 text-xs leading-relaxed text-[var(--foreground)]">
          내 방에 온 걸 환영해~♥<br />
          픽셀 세상의 작은 기록장이에요.
        </p>
      </div>
      <div className="mt-3 flex justify-between rounded-md border-2 border-[var(--pink-deep)] bg-white px-3 py-1.5 text-[11px] text-[var(--pink-deep)]">
        <span>TODAY <b>23</b></span>
        <span>TOTAL <b>1,287</b></span>
      </div>
    </div>
  );
}
