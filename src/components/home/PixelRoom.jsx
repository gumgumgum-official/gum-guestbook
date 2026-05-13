import room from "@/assets/pixel-room.png";
import rainbow from "@/assets/pixel-rainbow.png";
import stars from "@/assets/pixel-stars.png";

export default function PixelRoom() {
  return (
    <div className="relative pixel-card p-4 overflow-hidden">
      <img
        src={stars}
        alt=""
        aria-hidden
        className="pixel pointer-events-none absolute -top-4 -right-2 w-32 opacity-80"
      />
      <img
        src={rainbow}
        alt=""
        aria-hidden
        className="pixel pointer-events-none absolute -left-4 -bottom-4 w-28 opacity-90"
      />
      <img
        src={room}
        alt="삐삐의 방"
        className="pixel relative z-10 mx-auto block h-auto w-full max-w-md"
        width={1024}
        height={1024}
      />
    </div>
  );
}
