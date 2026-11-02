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
    reward: "월드의 별을 다 모을 때마다\n토스포인트를 {최대 500원}까지 드려요",
    tagline: "퍼즐을 풀어서\n동물 친구들을 구해 주세요",
    points: ["귀여운 동물들이 기다리고 있어요", "스테이지마다 새로운 미션이 나와요", "잠깐씩 가볍게 즐길 수 있어요"],
    cta: "레오의 친구들 구하러 가기",
  },
  {
    appName: "koreanchessmaster",
    title: "삼고초려 장기의 신",
    kind: "game",
    icon: "https://static.toss.im/appsintoss/38941/81e19af1-8cee-4ec3-b2c1-bd918214db7a.png",
    color: "#B5532E",
    reward: "삼국지 장수와 겨뤄서 이기면\n토스포인트를 {최대 300원} 받을 수 있어요",
    tagline: "AI와 한 판 두고\n내 장기 급수를 알아보세요",
    points: ["18급부터 9단까지 실력을 매겨 드려요", "내 급수에 맞는 상대와 둘 수 있어요", "둔 수를 하나하나 다시 짚어 드려요"],
    cta: "삼국지 인물과 장기 두러 가기",
  },
  {
    appName: "coinpusher",
    title: "밀다 보니 커피 한 잔",
    kind: "app",
    icon: "https://static.toss.im/appsintoss/38941/979c2247-4eb5-4976-a9db-c91f39a22eee.png",
    color: "#8B5A3C",
    reward: "무료로 드리는 200코인을 놓기만해도\n토스포인트 {10원}을 바로 드려요",
    tagline: "코인을 밀다 보면\n진짜 커피 한 잔이 생겨요",
    points: ["진짜처럼 손맛 있는 코인 푸셔예요", "떨어진 코인은 차곡차곡 쌓여요", "모은 코인으로 커피쿠폰을 받을 수 있어요"],
    cta: "코인 밀러 가기",
  },
  {
    appName: "beattaptap",
    title: "비트탭",
    kind: "game",
    icon: "https://static.toss.im/appsintoss/38941/live-managed-v1-bc314343-c485-4349-a3d2-d1d0f009fed8.png",
    color: "#7B4DFF",
    reward: "오늘의 곡을 끝까지 하면\n토스포인트를 매일 {최대 4원}씩 드려요",
    tagline: "음악에 맞춰\n떨어지는 동작을 따라 해 보세요",
    points: ["박자에 맞춰 손가락으로 톡톡 쳐요", "내 폰에 맞게 박자를 맞춰 드려요", "곡마다 최고 기록에 도전할 수 있어요"],
    cta: "비트탭 하러 가기",
  },
  {
    appName: "minigolf",
    title: "3분 미니골프",
    kind: "game",
    icon: "https://static.toss.im/appsintoss/38941/live-managed-v1-45224996-3ab8-4179-ac44-b74e7d2223be.png",
    color: "#2FA35B",
    reward: "오늘의 3홀만 다 쳐도\n토스포인트 {2원}이 매일 쌓여요",
    tagline: "하루 3분이면\n라운드를 끝낼 수 있어요",
    points: ["코스가 매일 새로 바뀌어요", "매일 들어오면 새 공과 멀리건을 드려요", "지난 코스도 다시 쳐 볼 수 있어요"],
    cta: "오늘의 코스 치러 가기",
  },
  {
    appName: "jubjubinfo",
    title: "업앤다운",
    kind: "app",
    icon: "https://static.toss.im/appsintoss/38941/live-managed-v1-9295ed7b-30c3-44d9-8d00-9511d72fb0ee.png",
    color: "#655DFF",
    reward: "오늘 국장의 이 종목!\n오를지 내릴지 맞추면 토스포인트 {2원}을 드려요",
    points: ["하루에 7번의 라운드, 라운드당 3종목이 준비돼요", "26년차 투자전문가와 AI가 들려주는 팟캐스트를 무료로 들어요", "주식관련 서적 1페이지만 읽어도 토스포인트를 받아요"],
    cta: "이 종목, 오를지 내릴지 맞추기",
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
  background: #000;
  --safe-b: env(safe-area-inset-bottom, 0px);
  --safe-t: env(safe-area-inset-top, 0px);
  --text: #191f28;
  --sub: #4e5968;
  --muted: #8b95a1;
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Noto Sans KR", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  -webkit-text-size-adjust: 100%;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }

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
  background: #fff;
}

/* 넘어가는 동안 카드가 살짝 작아졌다가 돌아온다 (스크롤 위치로 --p 갱신) */
.card {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: calc(56px + var(--safe-t)) 24px calc(var(--safe-b) + 32px);
  transform: scale(calc(1 - var(--p, 0) * 0.08));
  border-radius: calc(var(--p, 0) * 28px);
  will-change: transform;
}

/* ── 앱 소개 슬라이드 ── */
.app-card {
  background:
    radial-gradient(120% 70% at 50% 0%, color-mix(in srgb, var(--c) 32%, #fff) 0%, #fff 70%);
}

.app-kind {
  align-self: flex-start;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  color: var(--c);
  background: color-mix(in srgb, var(--c) 14%, #fff);
}

.app-hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 18px;
  min-height: 0;
}

.app-icon {
  width: min(36vw, 150px, 17vh);
  aspect-ratio: 1;
  border-radius: 28%;
  object-fit: cover;
  box-shadow: 0 18px 40px color-mix(in srgb, var(--c) 35%, transparent);
  background: #f2f4f6;
}

.app-title { font-size: 16px; font-weight: 700; color: var(--sub); }

.app-tagline {
  font-size: clamp(24px, 7vw, 30px);
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.02em;
  white-space: pre-line;
}

/* 토스포인트 안내 (카드 맨 위) */
.app-reward {
  margin-top: 14px;
  padding: 16px 18px;
  border-radius: 18px;
  background: color-mix(in srgb, var(--c) 12%, #fff);
  border: 1px solid color-mix(in srgb, var(--c) 22%, #fff);
  font-size: 17px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--text);
  white-space: pre-line;
  word-break: keep-all;
}
.app-reward strong { color: var(--c); font-weight: 800; }

.app-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}
.app-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 16px;
  background: #f9fafb;
  font-size: 15px;
  font-weight: 600;
  color: var(--sub);
}
.app-points li::before {
  content: "";
  flex: 0 0 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--c);
}

.cta {
  width: 100%;
  height: 56px;
  border-radius: 16px;
  background: var(--c);
  color: #fff;
  font-size: 17px;
  font-weight: 700;
}
.cta:active { filter: brightness(0.92); }

/* ── 첫 장 ── */
.intro-card { background: linear-gradient(180deg, #f2f6ff 0%, #fff 60%); }

.intro-head { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 14px; min-height: 0; }

/* 지금 보고 있는 앱 */
.intro-now {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
  padding: 14px 16px;
  border-radius: 18px;
  background: color-mix(in srgb, var(--c) 10%, #fff);
  border: 1px solid color-mix(in srgb, var(--c) 20%, #fff);
}
.intro-now img {
  flex: 0 0 56px;
  height: 56px;
  border-radius: 16px;
  background: #f2f4f6;
}
.intro-now-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.intro-now-text strong { font-size: 17px; font-weight: 800; }
.intro-now-tagline { font-size: 13px; color: var(--sub); line-height: 1.4; word-break: keep-all; }

.intro-title {
  font-size: clamp(22px, 6vw, 28px);
  word-break: keep-all;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.02em;
  white-space: pre-line;
}
.intro-promo {
  align-self: flex-start;
  padding: 10px 14px;
  border-radius: 12px;
  background: #e8f3ff;
  color: #1b64da;
  font-size: 17px;
  font-weight: 700;
}
.intro-promo strong { font-weight: 800; color: #3182f6; }

.intro-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px 8px;
  margin: 28px 0 8px;
}
.intro-grid button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--sub);
  line-height: 1.25;
  text-align: center;
  word-break: keep-all;
}
.intro-pic { position: relative; display: block; width: 100%; max-width: 64px; }
.intro-grid img {
  display: block;
  width: 100%;
  max-width: 64px;
  aspect-ratio: 1;
  border-radius: 28%;
  background: #f2f4f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.swipe-hint {
  align-self: center;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
  animation: nudge 1.6s ease-in-out infinite;
}
@keyframes nudge { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(8px); } }

/* ── 진행 점 ── */
.dots {
  position: absolute;
  top: calc(20px + var(--safe-t));
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  pointer-events: none;
}
.dots i {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.15);
  transition: width 0.25s, background 0.25s;
}
.dots i.on { width: 18px; background: rgba(0, 0, 0, 0.6); }

/* ── 마지막 장: 인사 후 자동으로 닫힘 ── */
.outro-card {
  justify-content: center;
  align-items: center;
  gap: 14px;
  text-align: center;
  background: linear-gradient(180deg, #f2f6ff 0%, #fff 70%);
}
.outro-title {
  font-size: clamp(22px, 6.4vw, 28px);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.02em;
  white-space: pre-line;
  word-break: keep-all;
}
.outro-sub { font-size: 15px; font-weight: 600; color: var(--muted); }
.outro-bar {
  width: 120px;
  height: 4px;
  margin-top: 6px;
  border-radius: 2px;
  background: #e5e8eb;
  overflow: hidden;
}
.outro-bar i { display: block; width: 0; height: 100%; background: #3182f6; }
.outro-card.closing .outro-bar i { animation: fill ${CLOSE_DELAY}ms linear forwards; }
@keyframes fill { to { width: 100%; } }

@media (prefers-reduced-motion: reduce) {
  .card { transform: none; border-radius: 0; }
  .swipe-hint { animation: none; }
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
  const dotsBox = el("div", "dots");
  dotsBox.setAttribute("aria-hidden", "true");
  root.append(track, dotsBox);

  let closeTimer = null;
  let closed = false;
  function close(reason = "close") {
    if (closed) return;
    closed = true;
    active = null;
    clearTimeout(closeTimer);
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

  // ── 렌더 ──
  function renderIntro() {
    const card = el("div", "card intro-card");
    const head = el("div", "intro-head");

    // 띄운 앱을 짧게 보여 주고, 그 앱을 만든 불리다의 다른 앱으로 이어 간다
    if (fromApp) {
      const now = el("div", "intro-now");
      now.style.setProperty("--c", fromApp.color);
      const img = el("img");
      img.src = fromApp.icon;
      img.alt = "";
      now.appendChild(img);
      const text = el("div", "intro-now-text");
      text.appendChild(el("strong", null, fromApp.title));
      if (fromApp.tagline) text.appendChild(el("span", "intro-now-tagline", fromApp.tagline.replace(/\n/g, " ")));
      now.appendChild(text);
      head.appendChild(now);
      head.appendChild(el("h1", "intro-title", "현재 즐기고 있는\n'" + fromApp.title + "'" + eulReul(fromApp.title) + " 만든\n불리다의 다른 앱을 소개할게요"));
    } else {
      head.appendChild(el("h1", "intro-title", "불리다가 만든\n미니앱을 소개할게요"));
    }
    // 토스포인트를 주는 앱이 있으면 제목 아래에 강조
    if (apps.some((a) => a.reward)) {
      const promo = el("p", "intro-promo");
      promo.append("즐기는 만큼 ", el("strong", null, "토스포인트"), "도 더 받아 보세요");
      head.appendChild(promo);
    }

    const grid = el("div", "intro-grid");
    apps.forEach((app, i) => {
      const b = el("button");
      b.type = "button";
      const pic = el("span", "intro-pic");
      const icon = el("img");
      icon.src = app.icon;
      icon.alt = "";
      pic.appendChild(icon);
      b.append(pic, el("span", null, app.title));
      b.addEventListener("click", () => goTo(i + 1));
      grid.appendChild(b);
    });
    head.appendChild(grid);

    card.append(head, el("div", "swipe-hint", "끝까지 넘기면 닫혀요 →"));
    return card;
  }

  function renderApp(app) {
    const card = el("div", "card app-card");
    card.style.setProperty("--c", app.color);

    card.appendChild(el("span", "app-kind", app.kind === "game" ? "게임" : "앱"));

    // 토스포인트 안내는 카드 맨 위에
    if (app.reward) {
      const reward = el("p", "app-reward");
      app.reward.split(/\{([^}]*)\}/).forEach((part, i) => {
        reward.append(i % 2 ? el("strong", null, part) : part);
      });
      card.appendChild(reward);
    }

    const hero = el("div", "app-hero");
    const icon = el("img", "app-icon");
    icon.src = app.icon;
    icon.alt = app.title + " 아이콘";
    icon.loading = "lazy";
    hero.append(icon, el("p", "app-title", app.title));
    if (app.tagline) hero.appendChild(el("h2", "app-tagline", app.tagline));
    card.appendChild(hero);

    const ul = el("ul", "app-points");
    (app.points || []).forEach((p) => ul.appendChild(el("li", null, p)));
    card.appendChild(ul);

    const cta = el("button", "cta", app.cta || app.title + " 바로가기");
    cta.type = "button";
    cta.addEventListener("click", () => openApp(app));
    card.appendChild(cta);
    return card;
  }

  function renderOutro() {
    const card = el("div", "card outro-card");
    card.appendChild(el("h2", "outro-title", "오늘도 '불리다'와 함께\n즐겁고 행복한 하루 되세요"));
    card.appendChild(el("p", "outro-sub", "잠시 후 자동으로 닫혀요"));
    const bar = el("div", "outro-bar");
    bar.appendChild(el("i"));
    card.appendChild(bar);
    return card;
  }

  const slides = [];
  function addSlide(card, label) {
    const s = el("section", "slide");
    s.setAttribute("aria-roledescription", "slide");
    s.setAttribute("aria-label", label);
    s.appendChild(card);
    track.appendChild(s);
    slides.push(s);
    dotsBox.appendChild(el("i"));
  }

  addSlide(renderIntro(), "소개");
  apps.forEach((app) => addSlide(renderApp(app), app.title));
  addSlide(renderOutro(), "인사");

  // 마지막 장에 머무르면 잠시 후 닫는다. 그 전에 앞으로 넘기면 취소
  function armAutoClose(on) {
    const outro = slides[slides.length - 1].firstChild;
    clearTimeout(closeTimer);
    closeTimer = null;
    outro.classList.toggle("closing", on);
    if (on) closeTimer = setTimeout(() => close("close"), CLOSE_DELAY);
  }

  // ── 스크롤 위치 → 진행 점, 카드 축소 효과 ──
  const dots = dotsBox.children;
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
      dots[current]?.classList.remove("on");
      dots[idx]?.classList.add("on");
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
