import { useState } from "react";

export default function GuestbookForm() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [toast, setToast] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    setToast("방명록에 메시지가 남겨졌어요 ♥ (UI 데모)");
    setName("");
    setMsg("");
    setTimeout(() => setToast(""), 2500);
  }

  return (
    <form onSubmit={onSubmit} className="pixel-card p-4 space-y-3">
      <div className="text-sm font-bold text-[var(--pink-deep)]">✎ 방명록 남기기</div>
      <input
        className="pixel-input w-full text-sm"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="pixel-input w-full text-sm"
        rows={3}
        placeholder="삐삐에게 한마디~ ♥"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[var(--muted-foreground)]">{msg.length}/200</span>
        <button type="submit" className="pixel-btn text-sm">남기기 ♥</button>
      </div>
      {toast && (
        <div className="rounded-md border-2 border-[var(--pink-deep)] bg-[var(--pink-soft)] px-3 py-2 text-xs text-[var(--pink-deep)]">
          {toast}
        </div>
      )}
    </form>
  );
}
