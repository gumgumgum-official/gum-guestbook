# Y2K 미니홈피 클론 — 홈 + 방명록 (JavaScript)

원본(yumismyhome.com)의 **비주얼 언어**(핑크 파스텔, 픽셀 폰트, 윈도우 창 프레임, 별·구름·무지개 장식, 둥근 카드, 이중 그림자, 그라데이션)를 동일하게 재현. 콘텐츠는 가상의 캐릭터, 일러스트는 새로 생성.

## 언어: JavaScript (.jsx)

신규 컴포넌트와 라우트 파일은 모두 **`.jsx`로 작성** (TypeScript 미사용). 기존 템플릿의 router/root 파일은 그대로 두되, 내가 만드는 모든 파일은 JS. 타입 어노테이션·인터페이스 사용 안 함.

> 참고: TanStack Start 템플릿이 TS 기반이라 `routeTree.gen.ts`나 기존 셸 파일은 자동 생성/유지됩니다. 내가 추가하는 코드만 JS로 작성합니다.

## 페이지 구조

- `/` → `src/routes/index.jsx` (홈)
- `/guestbook` → `src/routes/guestbook.jsx` (방명록)

## 홈 페이지 레이아웃

```
┌─ 가짜 브라우저 창 (♥ 타이틀바, _ □ ✕, URL바) ────────┐
│  [♥ 픽셀 워드마크]      [홈][교환일기][방명록]...    │
│   ┌─ 프로필 카드 ─┐                                  │
│   │ 캐릭터 사진     │   ★ 무지개 + 구름 장식         │
│   │ 환영 메시지     │   ★ isometric 핑크 룸 (AI)    │
│   │ TODAY/TOTAL    │                                │
│   ├─ TODAY is.. ─┤   ┌─ 우측 메모 노트 (회전) ─┐    │
│   ├─ 음악 플레이어 ┤   │ "이 이야기의 주인공"   │    │
│   └────────────┘   │ "캐릭터의 속마음" ...   │    │
│                       └────────────────────┘    │
│            [핑크 그라데이션 알림 배너]                │
└──────────────────────────────────────────────────┘
```

## 방명록 페이지

같은 창 프레임 + 네비. 상단에 작성 폼(이름 + 메시지 + 남기기 버튼) — UI만, 클릭 시 토스트만. 하단에 더미 글 5~6개 (살짝 회전된 노트 카드).

## 디자인 시스템 (`src/styles.css`)

`oklch` 토큰 추가:
- `--background`: 핑크→하늘색 대각 그라데이션 (`#ffd9e8 → #c9e7ff`)
- `--card`: 연핑크
- `--primary`: 비비드 핑크 (`#ff5fa2`)
- `--accent`: 라벤더, 노랑(별)
- `--border`: 진핑크 외곽선 (모든 카드 2px solid)
- `--shadow-pop`: `4px 4px 0 #ff5fa2` (픽셀 그림자)
- `--gradient-card`, `--gradient-banner`
- `--radius`: `1rem`

## 픽셀 폰트 (무료 한글)

- 본문/제목: **Galmuri11** (CDN @font-face)
- 영문 액센트: **Press Start 2P** (Google Fonts)
- `src/styles.css`에 `@font-face` + body 기본 폰트로 적용

## 컴포넌트 구조 (모두 .jsx)

```
src/
  components/
    BrowserFrame.jsx     ← 윈도우 창 프레임
    PixelNav.jsx          ← 알약형 핑크 네비
    PixelCard.jsx          ← 외곽선 + 그림자 카드 베이스
    NoteCard.jsx           ← 회전된 노트 종이
    PinkBanner.jsx        ← 하단 그라데이션 알림
    home/
      ProfileCard.jsx
      TodayCard.jsx
      MusicPlayer.jsx     ← UI만
      PixelRoom.jsx        ← AI 생성 이미지 표시
      Decorations.jsx     ← 별/구름 SVG
    guestbook/
      GuestbookForm.jsx
      GuestbookEntry.jsx
  routes/
    index.jsx
    guestbook.jsx
```

## AI 생성 에셋 (`src/assets/`, premium 품질)

- `pixel-room.png` — isometric 핑크 침실 (transparent)
- `pixel-character.jpg` — 가상 캐릭터 픽셀 초상
- `pixel-rainbow.png` — 무지개 + 구름 (transparent)
- `pixel-stars.png` — 노란 픽셀 별 세트 (transparent)

## 가상 콘텐츠

- 캐릭터: "삐삐"
- 환영: "내 방에 온 걸 환영해~♥"
- TODAY is: "오늘은 책 읽는 날 📚"
- 음악: "Pixel Dreams - 8bit Café"
- 방명록 더미 5~6개

## 작업 순서

1. 디자인 토큰 + 픽셀 폰트 (`src/styles.css`)
2. AI 이미지 4종 생성
3. 공통 컴포넌트 (`BrowserFrame`, `PixelNav`, `PixelCard`, `NoteCard`)
4. 홈 라우트 (`/`)
5. 방명록 라우트 (`/guestbook`)
6. 모바일(약 600px) 세로 스택 대응
