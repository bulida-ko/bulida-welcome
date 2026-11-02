// 불리다 미니앱 소개. 미니앱이 import 해서 화면 위에 바로 띄운다 (iframe 없음, 의존성 없음).
//
//   import { openURL } from "@apps-in-toss/web-framework";
//   import { showBulidaWelcome } from "./bulida-welcome.js";
//
//   // 전면광고를 띄우던 자리에서 (얼마나 자주 띄울지는 앱이 정한다)
//   showBulidaWelcome({ from: "minigolf", openURL });
//
// 화면은 Shadow DOM 안에 그려서 앱의 CSS 와 서로 섞이지 않는다.
// 마지막 장에 닿으면 5초 뒤 스스로 닫힌다.

// ── ★ 소개할 미니앱 목록. 소개 문구는 여기만 고치면 된다 ──
// 배열 순서 = 슬라이드 순서. 띄운 앱(from)은 목록에서 빠진다.
// 문구는 토스체(해요체, 짧게, 받는 사람 입장에서)로 쓴다.
//
// appName   토스 콘솔의 appName. 이동 링크는 intoss://<appName>
// title     앱 이름
// kind      "app" | "game"
// icon      아이콘 이미지 URL
// color     슬라이드 대표 색 (버튼·배경 그라데이션)
// reward    토스포인트를 주는 앱만. 카드 맨 위에 나오는 문장
//           {중괄호} 안은 앱 색으로 강조, \n 은 줄바꿈 (줄당 16자 안쪽)
// tagline   한 줄 소개 (아이콘 아래 큰 글씨)
// points    특징 2~3개
// cta       이동 버튼 문구
export const BULIDA_APPS = [
  {
    appName: "leorescue",
    title: "레오의 구출작전",
    kind: "game",
    icon: "https://static.toss.im/appsintoss/38941/d6095109-647d-43ff-aa61-98d44e1d664a.png",
    color: "#F2994A",
    reward: "별을 다 모을 때마다\n토스포인트를 {500원}까지 드려요",
    tagline: "퍼즐을 풀어서\n동물 친구들을 구해 주세요",
    points: ["귀여운 동물들이 기다리고 있어요", "스테이지마다 새로운 미션이 나와요", "잠깐씩 가볍게 즐길 수 있어요"],
    cta: "레오의 친구들을 구하러 가봐요",
  },
  {
    appName: "koreanchessmaster",
    title: "삼고초려 장기의 신",
    kind: "game",
    icon: "https://static.toss.im/appsintoss/38941/81e19af1-8cee-4ec3-b2c1-bd918214db7a.png",
    color: "#B5532E",
    reward: "제갈량과 겨뤄 이기면\n토스포인트 {300원} 받을 수 있어요",
    tagline: "AI와 한 판 두고\n내 장기 급수를 알아보세요",
    points: ["18급부터 9단까지 실력을 매겨 드려요", "삼국지 등장인물과 장기 두고 토스포인트 받아요", "내 급수에 맞는 상대와 둘 수 있어요"],
    cta: "제갈선생, 장 받으시오!",
  },
  {
    appName: "beattaptap",
    title: "비트탭",
    kind: "game",
    icon: "https://static.toss.im/appsintoss/38941/live-managed-v1-bc314343-c485-4349-a3d2-d1d0f009fed8.png",
    color: "#7B4DFF",
    reward: "오늘의 곡을 플레이 하면\n토스포인트를 매일 {4원}씩 받아요",
    tagline: "음악에 맞춰\n떨어지는 색상의 패드를 터치해요",
    points: ["박자에 맞춰 손가락으로 탭 하거나 드래그", "내 폰에 맞게 박자를 맞춰 드려요", "곡마다 최고 기록에 도전할 수 있어요"],
    cta: "리듬에 맞춰 탭!",
  },
  {
    appName: "minigolf",
    title: "3분 미니골프",
    kind: "game",
    icon: "https://static.toss.im/appsintoss/38941/live-managed-v1-45224996-3ab8-4179-ac44-b74e7d2223be.png",
    color: "#2FA35B",
    reward: "오늘의 3홀만 쳐도\n토스포인트 {2원}이 매일 쌓여요",
    tagline: "하루 3분도 걸리지 않는\n라운딩을 즐겨봐요",
    points: ["코스가 매일 새로 바뀌어요", "매일 들어오면 새 공과 멀리건을 드려요", "지난 코스도 다시 쳐 볼 수 있어요"],
    cta: "오! 나이스 샷!",
  },
  {
    appName: "coinpusher",
    title: "밀다 보니 커피 한 잔",
    kind: "app",
    icon: "https://static.toss.im/appsintoss/38941/979c2247-4eb5-4976-a9db-c91f39a22eee.png",
    color: "#8B5A3C",
    reward: "무료 200코인을 놓기만 해도\n토스포인트 {10원}을 바로 받아요",
    tagline: "코인을 밀다 보면\n진짜 커피 한 잔이 생겨요",
    points: ["진짜처럼 손맛 있는 코인 푸셔예요", "떨어진 코인은 차곡차곡 쌓여요", "모은 코인으로 커피쿠폰을 받아요"],
    cta: "코인 밀고 커피쿠폰 받기",
  },
  {
    appName: "jubjubinfo",
    title: "업앤다운",
    kind: "app",
    icon: "https://static.toss.im/appsintoss/38941/live-managed-v1-9295ed7b-30c3-44d9-8d00-9511d72fb0ee.png",
    color: "#655DFF",
    reward: "주식투자하면 필수 앱!\n오를지 내릴지 맞추면 종목마다 토스포인트 {2원}을 드려요",
    points: ["하루에 대형주 21종목이 준비돼요", "25년차 투자전문가와 AI가 들려주는 팟캐스트가 무료에요", "무료 투자서적 1페이지만 읽어도 토스포인트를 받아요"],
    cta: "이 종목, 오를지 내릴지 맞춰보기",
  },
  // {
  //   appName: "coco",
  //   title: "코코 라이브",
  //   kind: "app",
  //   icon: "https://static.toss.im/appsintoss/38941/b7f750b4-8c1b-4897-8a20-813f31bb2dbe.png",
  //   color: "#E61031",
  //   tagline: "매장 가기 전에\n지금 상황을 확인해 보세요",
  //   points: ["매장 영업 정보를 실시간으로 보여 드려요", "매장에 있는 사람에게 물어볼 수 있어요", "주차장이 붐비는지 미리 알 수 있어요"],
  //   cta: "매장 정보 보러 가기",
  // },
  // {
  //   appName: "offmoney",
  //   title: "오프 머니",
  //   kind: "app",
  //   icon: "https://static.toss.im/appsintoss/38941/30a7a052-7dd9-42fa-a0b5-c9eb4cc87c1b.png",
  //   color: "#8E7CC3",
  //   tagline: "폰을 잠깐 내려놓으면\n포인트가 쌓여요",
  //   points: ["목표 시간을 채우면 포인트를 받아요", "빙고를 채우는 재미도 있어요", "모은 포인트는 쿠폰으로 바꿀 수 있어요"],
  //   cta: "오프 머니 하러 가기",
  // },
];

const CLOSE_DELAY = 5000;

// ── 화면 (Shadow DOM 안에만 적용된다) ──
const CSS = `
:host {
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  display: block;
  overflow: hidden;
  background: #101114;
  --safe-b: env(safe-area-inset-bottom, 0px);
  --safe-t: env(safe-area-inset-top, 0px);
  --text: #191f28;
  --sub: #4e5968;
  --muted: #8b95a1;
  --line: #f2f4f6;
  --toss: #3182f6;
  color: var(--text);
  font-family: "Toss Product Sans", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Noto Sans KR", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }
img { display: block; }

/* ── 슬라이드 트랙: 한 번 스와이프 = 한 장 ── */
.track {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.track::-webkit-scrollbar { display: none; }

.slide {
  position: relative;
  flex: 0 0 100%;
  height: 100%;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  overflow: hidden;
}

/* 넘어가는 동안 카드가 살짝 작아졌다가 돌아온다 (스크롤 위치로 --p 갱신) */
.card {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  transform: scale(calc(1 - var(--p, 0) * 0.08));
  border-radius: calc(var(--p, 0) * 32px);
  will-change: transform;
}

/* ── 진행 막대 (스토리처럼) ── */
.bars {
  position: absolute;
  top: calc(12px + var(--safe-t));
  left: 16px;
  right: 16px;
  display: flex;
  gap: 4px;
  pointer-events: none;
  --bar: rgba(25, 31, 40, 0.12);
  --bar-on: rgba(25, 31, 40, 0.75);
}
.bars.on-color { --bar: rgba(255, 255, 255, 0.3); --bar-on: #fff; }
.bars i {
  flex: 1;
  height: 3px;
  border-radius: 2px;
  background: var(--bar);
  overflow: hidden;
  transition: background 0.3s;
}
.bars i::after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  background: var(--bar-on);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease, background 0.3s;
}
.bars i.done::after { transform: scaleX(1); }

/* ── 토스포인트 동전 ── */
.coin {
  flex: none;
  display: inline-grid;
  place-items: center;
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  background: linear-gradient(160deg, #4f9bff, #1b64da);
  color: #fff;
  font-size: 1em;
  font-weight: 900;
  line-height: 1;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.15);
}
.coin::before { content: "P"; font-size: 0.62em; }

/* ── 첫 장: 오퍼월 ── */
.intro-card {
  padding: calc(44px + var(--safe-t)) 20px calc(var(--safe-b) + 20px);
  background:
    radial-gradient(90% 40% at 100% 0%, #e3eeff 0%, transparent 70%),
    radial-gradient(70% 30% at 0% 10%, #eef4ff 0%, transparent 70%),
    #fff;
}

.eyebrow {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px 6px 8px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(49, 130, 246, 0.14);
  font-size: 13px;
  font-weight: 700;
  color: var(--toss);
}
.eyebrow img { width: 20px; height: 20px; border-radius: 6px; }

.intro-title {
  margin-top: 14px;
  font-size: clamp(22px, 6.2vw, 27px);
  font-weight: 800;
  line-height: 1.36;
  letter-spacing: -0.025em;
  white-space: pre-line;
  word-break: keep-all;
}
.intro-title em { font-style: normal; color: var(--c, var(--toss)); }

.intro-promo {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 600;
  color: var(--sub);
}
.intro-promo strong { color: var(--toss); font-weight: 800; }

.offer-list {
  flex: 1;
  min-height: 0;
  margin: 18px -4px 0;
  padding: 4px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(#000 calc(100% - 28px), transparent);
  mask-image: linear-gradient(#000 calc(100% - 28px), transparent);
  padding-bottom: 24px;
}
.offer-list::-webkit-scrollbar { display: none; }

.offer {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px 12px 12px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: 0 4px 16px rgba(0, 20, 60, 0.05);
  text-align: left;
  transition: transform 0.15s;
}
.offer:active { transform: scale(0.98); background: #f9fafb; }
.offer img {
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 15px;
  background: #f2f4f6;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.offer-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.offer-text strong { font-size: 16px; font-weight: 700; letter-spacing: -0.01em; }
.offer-text span {
  font-size: 13px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.offer-pay {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 7px 10px 7px 8px;
  border-radius: 999px;
  background: #e8f3ff;
  color: #1b64da;
  font-size: 14px;
  font-weight: 800;
}
.offer-pay .coin { font-size: 15px; }
.offer-go { flex: none; width: 8px; height: 8px; border: solid #c5ccd4; border-width: 2px 2px 0 0; transform: rotate(45deg); margin-right: 4px; }

.intro-foot { margin-top: 14px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.intro-foot .cta { --c: var(--toss); }
.hint { font-size: 13px; font-weight: 600; color: var(--muted); }

/* ── 앱 소개 장: 위는 브랜드 색 광고, 아래는 혜택 시트 ── */
.app-hero {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: calc(48px + var(--safe-t)) 24px 44px;
  text-align: center;
  color: #fff;
  background:
    radial-gradient(70% 55% at 50% 38%, color-mix(in srgb, var(--c) 55%, #fff) 0%, transparent 70%),
    linear-gradient(165deg, color-mix(in srgb, var(--c) 92%, #fff) 0%, color-mix(in srgb, var(--c) 62%, #000) 100%);
  isolation: isolate;
}
/* 배경 장식 원 */
.app-hero::before,
.app-hero::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.16);
}
.app-hero::before { width: 120vw; height: 120vw; max-width: 560px; max-height: 560px; left: 50%; top: 42%; transform: translate(-50%, -50%); }
.app-hero::after { width: 78vw; height: 78vw; max-width: 360px; max-height: 360px; left: 50%; top: 42%; transform: translate(-50%, -50%); background: rgba(255, 255, 255, 0.06); }

.app-kind {
  position: absolute;
  top: calc(30px + var(--safe-t));
  left: 20px;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  font-size: 12px;
  font-weight: 700;
}

.app-icon {
  width: min(34vw, 132px, 16vh);
  aspect-ratio: 1;
  border-radius: 28%;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.35), 0 22px 44px rgba(0, 0, 0, 0.28);
  animation: float 3.2s ease-in-out infinite;
}
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }

.app-title { margin-top: 6px; font-size: 15px; font-weight: 700; opacity: 0.85; }
.app-tagline {
  font-size: clamp(22px, 6.6vw, 28px);
  font-weight: 800;
  line-height: 1.34;
  letter-spacing: -0.025em;
  white-space: pre-line;
  word-break: keep-all;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
}

.sheet {
  position: relative;
  flex: none;
  margin-top: -26px;
  padding: 22px 20px calc(var(--safe-b) + 14px);
  border-radius: 26px 26px 0 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 혜택 티켓 */
.ticket {
  position: relative;
  border-radius: 18px;
  background: color-mix(in srgb, var(--c) 8%, #fff);
  border: 1px solid color-mix(in srgb, var(--c) 20%, #fff);
}
.ticket-top { display: flex; align-items: center; gap: 12px; padding: 14px 16px 12px; }
.ticket-top .coin { font-size: 34px; }
.ticket-label { display: flex; flex-direction: column; gap: 1px; }
.ticket-label span { font-size: 12px; font-weight: 700; color: var(--muted); }
.ticket-label strong {
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: color-mix(in srgb, var(--c) 78%, #000);
}
.ticket-cut { position: relative; height: 0; margin: 0 14px; border-top: 1.5px dashed color-mix(in srgb, var(--c) 28%, #fff); }
.ticket-cut::before,
.ticket-cut::after {
  content: "";
  position: absolute;
  top: -9px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid color-mix(in srgb, var(--c) 20%, #fff);
}
.ticket-cut::before { left: -23px; clip-path: inset(0 0 0 50%); }
.ticket-cut::after { right: -23px; clip-path: inset(0 50% 0 0); }
.ticket-body {
  padding: 11px 16px 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--sub);
  white-space: pre-line;
  word-break: keep-all;
}
.ticket-body strong { color: color-mix(in srgb, var(--c) 78%, #000); font-weight: 800; }
.slide.is-on .ticket { animation: pop 0.5s cubic-bezier(0.2, 1.4, 0.4, 1) both; }
@keyframes pop { from { transform: scale(0.94); } to { transform: scale(1); } }

.app-points { list-style: none; display: flex; flex-direction: column; gap: 9px; padding: 0 2px; }
.app-points li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--sub);
  word-break: keep-all;
}
.app-points li::before {
  content: "";
  flex: none;
  width: 18px;
  height: 18px;
  margin-top: 1px;
  border-radius: 50%;
  background:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M5 9.2l2.6 2.6L13 6.5' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center / 100% no-repeat,
    var(--c);
}

.cta {
  position: relative;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 16px;
  background: var(--c);
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  overflow: hidden;
  box-shadow: 0 8px 20px color-mix(in srgb, var(--c) 35%, transparent);
  transition: transform 0.15s, filter 0.15s;
}
.cta:active { transform: scale(0.98); filter: brightness(0.92); }
.cta::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.35) 50%, transparent 65%);
  transform: translateX(-100%);
  animation: shine 3.2s ease-in-out 1s infinite;
}
@keyframes shine { 0%, 55% { transform: translateX(-100%); } 85%, 100% { transform: translateX(100%); } }
.cta-arrow { width: 8px; height: 8px; border: solid currentColor; border-width: 2px 2px 0 0; transform: rotate(45deg); }

.next {
  align-self: center;
  margin-top: -4px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
}
.next b { color: var(--sub); font-weight: 700; }

/* ── 마지막 장: 인사 후 자동으로 닫힘 ── */
.outro-card {
  justify-content: center;
  align-items: center;
  gap: 22px;
  padding: 24px;
  text-align: center;
  background:
    radial-gradient(80% 50% at 50% 30%, #e3eeff 0%, transparent 70%),
    #fff;
}
.outro-icons { display: flex; }
.outro-icons img {
  width: 52px;
  height: 52px;
  margin: 0 -7px;
  border-radius: 16px;
  border: 3px solid #fff;
  background: #f2f4f6;
  box-shadow: 0 6px 16px rgba(0, 20, 60, 0.12);
}
.outro-icons img:nth-child(odd) { transform: translateY(6px) rotate(-6deg); }
.outro-icons img:nth-child(even) { transform: rotate(6deg); }
.outro-title {
  font-size: clamp(22px, 6.4vw, 27px);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.025em;
  white-space: pre-line;
  word-break: keep-all;
}
.outro-title em { font-style: normal; color: var(--toss); }
.countdown { position: relative; width: 52px; height: 52px; }
.countdown svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.countdown circle { fill: none; stroke-width: 4; }
.countdown .bg { stroke: #e5e8eb; }
.countdown .fg { stroke: var(--toss); stroke-linecap: round; stroke-dasharray: 126; stroke-dashoffset: 126; }
.outro-card.closing .countdown .fg { animation: ring ${CLOSE_DELAY}ms linear forwards; }
@keyframes ring { to { stroke-dashoffset: 0; } }
.countdown b { position: absolute; inset: 0; display: grid; place-items: center; font-size: 17px; font-weight: 800; color: var(--toss); }
.outro-sub { margin-top: -10px; font-size: 14px; font-weight: 600; color: var(--muted); }

/* 작은 화면 (iPhone SE 등) */
@media (max-height: 700px) {
  .app-hero { gap: 8px; padding-bottom: 38px; }
  .app-icon { width: min(28vw, 104px, 15vh); }
  .sheet { gap: 12px; padding-top: 18px; }
  .ticket-top { padding: 10px 14px 8px; }
  .ticket-top .coin { font-size: 28px; }
  .ticket-label strong { font-size: 22px; }
  .ticket-body { padding: 8px 14px 10px; font-size: 13px; }
  .app-points { gap: 6px; }
  .app-points li { font-size: 14px; }
  .cta { height: 52px; }
}

@media (prefers-reduced-motion: reduce) {
  .card { transform: none; border-radius: 0; }
  .app-icon, .cta::after, .slide.is-on .ticket { animation: none; }
}
`;

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

// 받침 유무로 을/를
function eulReul(word) {
  const code = word.charCodeAt(word.length - 1) - 0xac00;
  if (code < 0 || code > 11171) return "을(를)";
  return code % 28 ? "을" : "를";
}

// reward 의 첫 {강조} 를 금액 배지로 쓴다
function rewardAmount(app) {
  const m = app.reward && app.reward.match(/\{([^}]*)\}/);
  return m ? m[1] : null;
}

function img(src, cls, alt = "") {
  const n = el("img", cls);
  n.src = src;
  n.alt = alt;
  n.decoding = "async";
  return n;
}

let active = null;

/**
 * 소개 화면을 띄운다. 이미 떠 있으면 그 화면의 닫기 함수를 돌려준다.
 * @param {{
 *   from?: string,
 *   openURL?: (url: string) => unknown,
 *   onClose?: (reason: "close" | "open") => void,
 *   onSlide?: (e: { index: number, appName: string | null }) => void,
 *   apps?: typeof BULIDA_APPS,
 * }} opts
 *   from     띄운 앱의 appName. 첫 장에 소개되고 목록에서 빠진다
 *   openURL  @apps-in-toss/web-framework 의 openURL. 없으면 location.href 로 이동
 * @returns {() => void} 직접 닫을 때 쓰는 함수
 */
export function showBulidaWelcome({ from, openURL, onClose, onSlide, apps: allApps = BULIDA_APPS } = {}) {
  if (active) return active;

  const fromApp = allApps.find((a) => a.appName === from) || null;
  const apps = allApps.filter((a) => a.appName !== from);

  const host = document.createElement("div");
  host.setAttribute("role", "dialog");
  host.setAttribute("aria-modal", "true");
  host.setAttribute("aria-label", "불리다 미니앱 소개");
  const root = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = CSS;
  root.appendChild(style);

  const track = el("div", "track");
  track.setAttribute("aria-roledescription", "carousel");
  const barsBox = el("div", "bars");
  barsBox.setAttribute("aria-hidden", "true");
  root.append(track, barsBox);

  let closeTimer = null;
  let tickTimer = null;
  let closed = false;
  function close(reason = "close") {
    if (closed) return;
    closed = true;
    active = null;
    clearTimeout(closeTimer);
    clearInterval(tickTimer);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("keydown", onKey);
    host.remove();
    onClose?.(reason);
  }

  function openApp(app) {
    const url = "intoss://" + app.appName;
    if (openURL) openURL(url);
    else location.href = url;
    close("open");
  }

  function goTo(i, smooth) {
    track.scrollTo({ left: i * track.clientWidth, behavior: smooth === false ? "auto" : "smooth" });
  }

  function cta(label, onClick) {
    const b = el("button", "cta");
    b.type = "button";
    b.append(label, el("i", "cta-arrow"));
    b.addEventListener("click", onClick);
    return b;
  }

  // ── 렌더 ──
  function renderIntro() {
    const card = el("div", "card intro-card");

    const eyebrow = el("div", "eyebrow");
    if (fromApp) eyebrow.appendChild(img(fromApp.icon));
    eyebrow.append(fromApp ? "불리다가 만든 앱" : "불리다 추천");
    card.appendChild(eyebrow);

    // 띄운 앱을 짚고, 그 앱을 만든 불리다의 다른 앱으로 이어 간다
    const title = el("h1", "intro-title");
    if (fromApp) {
      title.style.setProperty("--c", color(fromApp));
      title.append("현재 즐기고 있는\n", el("em", null, "'" + fromApp.title + "'"), eulReul(fromApp.title) + " 만든\n불리다의 다른 앱을 소개할게요");
    } else {
      title.textContent = "불리다가 만든\n미니앱을 소개할게요";
    }
    card.appendChild(title);

    // 토스포인트를 주는 앱이 있으면 제목 아래에 강조
    if (apps.some((a) => a.reward)) {
      const promo = el("p", "intro-promo");
      const words = el("span");
      words.append("즐기는 만큼 ", el("strong", null, "토스포인트"), "도 더 받아 보세요");
      promo.append(el("i", "coin"), words);
      card.appendChild(promo);
    }

    // 오퍼월: 앱마다 받을 수 있는 토스포인트를 한눈에
    const list = el("ul", "offer-list");
    apps.forEach((app, i) => {
      const li = el("li");
      const b = el("button", "offer");
      b.type = "button";
      b.appendChild(img(app.icon));
      const text = el("span", "offer-text");
      text.append(
        el("strong", null, app.title),
        el("span", null, app.tagline ? app.tagline.replace(/\n/g, " ") : app.kind === "game" ? "게임" : "앱"),
      );
      b.appendChild(text);
      const amount = rewardAmount(app);
      if (amount) {
        const pay = el("span", "offer-pay");
        pay.append(el("i", "coin"), amount);
        b.appendChild(pay);
      } else {
        b.appendChild(el("i", "offer-go"));
      }
      b.addEventListener("click", () => goTo(i + 1));
      li.appendChild(b);
      list.appendChild(li);
    });
    card.appendChild(list);

    const foot = el("div", "intro-foot");
    foot.append(cta("하나씩 둘러보기", () => goTo(1)), el("p", "hint", "끝까지 넘기면 닫혀요"));
    card.appendChild(foot);
    return card;
  }

  function renderApp(app, i) {
    const card = el("div", "card app-card");
    card.style.setProperty("--c", color(app));

    const hero = el("div", "app-hero");
    hero.appendChild(el("span", "app-kind", app.kind === "game" ? "게임" : "앱"));
    const icon = img(app.icon, "app-icon", app.title + " 아이콘");
    icon.loading = "lazy";
    hero.append(icon, el("p", "app-title", app.title));
    if (app.tagline) hero.appendChild(el("h2", "app-tagline", app.tagline));
    card.appendChild(hero);

    const sheet = el("div", "sheet");

    // 토스포인트 혜택은 티켓으로
    const amount = rewardAmount(app);
    if (amount) {
      const ticket = el("div", "ticket");
      const top = el("div", "ticket-top");
      const label = el("div", "ticket-label");
      label.append(el("span", null, "받을 수 있는 토스포인트"), el("strong", null, amount));
      top.append(el("i", "coin"), label);
      const body = el("p", "ticket-body");
      app.reward.split(/\{([^}]*)\}/).forEach((part, k) => {
        body.append(k % 2 ? el("strong", null, part) : part);
      });
      ticket.append(top, el("div", "ticket-cut"), body);
      sheet.appendChild(ticket);
    }

    const ul = el("ul", "app-points");
    (app.points || []).forEach((p) => ul.appendChild(el("li", null, p)));
    sheet.appendChild(ul);

    sheet.appendChild(cta(app.cta || app.title + " 바로가기", () => openApp(app)));

    // 다음 장 예고
    const nextApp = apps[i + 1];
    const next = el("button", "next");
    next.type = "button";
    if (nextApp) next.append("다음 · ", el("b", null, nextApp.title), " ›");
    else next.textContent = "마지막 앱이에요 · 넘기면 닫혀요";
    next.addEventListener("click", () => goTo(i + 2));
    sheet.appendChild(next);

    card.appendChild(sheet);
    return card;
  }

  let countNum;
  function renderOutro() {
    const card = el("div", "card outro-card");
    const icons = el("div", "outro-icons");
    allApps.slice(0, 5).forEach((a) => icons.appendChild(img(a.icon)));
    card.appendChild(icons);

    const title = el("h2", "outro-title");
    title.append("오늘도 ", el("em", null, "'불리다'"), "와 함께\n즐겁고 행복한 하루 되세요");
    card.appendChild(title);

    const ring = el("div", "countdown");
    ring.innerHTML = '<svg viewBox="0 0 48 48"><circle class="bg" cx="24" cy="24" r="20"/><circle class="fg" cx="24" cy="24" r="20"/></svg>';
    countNum = el("b", null, String(CLOSE_DELAY / 1000));
    ring.appendChild(countNum);
    card.append(ring, el("p", "outro-sub", "잠시 후 자동으로 닫혀요"));
    return card;
  }

  const slides = [];
  function addSlide(card, label, onColor) {
    const s = el("section", "slide");
    s.setAttribute("aria-roledescription", "slide");
    s.setAttribute("aria-label", label);
    s.dataset.onColor = onColor ? "1" : "";
    s.appendChild(card);
    track.appendChild(s);
    slides.push(s);
    barsBox.appendChild(el("i"));
  }

  addSlide(renderIntro(), "소개");
  apps.forEach((app, i) => addSlide(renderApp(app, i), app.title, true));
  addSlide(renderOutro(), "인사");

  // 마지막 장에 머무르면 잠시 후 닫는다. 그 전에 앞으로 넘기면 취소
  function armAutoClose(on) {
    const outro = slides[slides.length - 1].firstChild;
    clearTimeout(closeTimer);
    clearInterval(tickTimer);
    closeTimer = null;
    outro.classList.toggle("closing", on);
    countNum.textContent = String(CLOSE_DELAY / 1000);
    if (!on) return;
    const end = Date.now() + CLOSE_DELAY;
    tickTimer = setInterval(() => {
      countNum.textContent = String(Math.max(1, Math.ceil((end - Date.now()) / 1000)));
    }, 200);
    closeTimer = setTimeout(() => close("close"), CLOSE_DELAY);
  }

  // ── 스크롤 위치 → 진행 막대, 카드 축소 효과 ──
  const bars = barsBox.children;
  let current = -1;
  let ticking = false;

  function update() {
    ticking = false;
    if (closed) return;
    const w = track.clientWidth || 1;
    const pos = track.scrollLeft / w;
    for (let i = 0; i < slides.length; i++) {
      const p = Math.min(1, Math.abs(pos - i));
      slides[i].firstChild.style.setProperty("--p", p.toFixed(3));
    }
    const idx = Math.round(pos);
    if (idx !== current) {
      slides[current]?.classList.remove("is-on");
      slides[idx]?.classList.add("is-on");
      for (let i = 0; i < bars.length; i++) bars[i].classList.toggle("done", i <= idx);
      barsBox.classList.toggle("on-color", !!slides[idx]?.dataset.onColor);
      current = idx;
      armAutoClose(idx === slides.length - 1);
      onSlide?.({ index: idx, appName: idx > 0 && apps[idx - 1] ? apps[idx - 1].appName : null });
    }
  }

  function onResize() {
    goTo(current, false);
  }

  // 데스크톱 확인용
  function onKey(e) {
    if (e.key === "ArrowRight") goTo(Math.min(current + 1, slides.length - 1));
    else if (e.key === "ArrowLeft") goTo(Math.max(current - 1, 0));
    else if (e.key === "Escape") close("close");
    else return;
    e.stopPropagation();
  }

  track.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener("resize", onResize);
  window.addEventListener("keydown", onKey);

  document.body.appendChild(host);
  update();

  active = () => close("close");
  return active;
}

function color(app) {
  return app.color || "#3182f6";
}
