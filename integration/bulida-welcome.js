// 미니앱 쪽에 붙이는 코드. 프레임워크 없이 동작한다 (React·Godot·Unity 웹 빌드 공통).
//
//   import { openURL } from "@apps-in-toss/web-framework";
//   import { showBulidaWelcome } from "./bulida-welcome";
//
//   // 전면광고를 띄우던 자리에서 (얼마나 자주 띄울지는 앱이 정한다)
//   showBulidaWelcome({ from: "minigolf", openURL });
//
// 페이지는 마지막 장에서 2초 뒤 스스로 close 를 보낸다.

const PAGE_URL = "https://bulida-ko.github.io/bulida-welcome/";
const PAGE_ORIGIN = new URL(PAGE_URL).origin;

/**
 * 전체 화면 iframe 으로 소개 페이지를 띄운다.
 * @param {{ from: string, openURL: (url: string) => unknown, onClose?: (reason: "close" | "open") => void }} opts
 * @returns {() => void} 직접 닫을 때 쓰는 함수
 */
export function showBulidaWelcome({ from, openURL, onClose }) {
  const frame = document.createElement("iframe");
  frame.src = `${PAGE_URL}?from=${encodeURIComponent(from)}`;
  frame.title = "불리다 미니앱 소개";
  frame.setAttribute(
    "style",
    "position:fixed;inset:0;width:100vw;height:100vh;height:100dvh;border:0;z-index:2147483647;background:#fff",
  );

  let closed = false;
  function close(reason) {
    if (closed) return;
    closed = true;
    window.removeEventListener("message", onMessage);
    frame.remove();
    onClose?.(reason);
  }

  function onMessage(e) {
    if (e.origin !== PAGE_ORIGIN || e.source !== frame.contentWindow) return;
    const msg = e.data;
    if (!msg || msg.source !== "bulida-welcome") return;

    if (msg.type === "close") close("close");
    if (msg.type === "open" && typeof msg.url === "string" && msg.url.startsWith("intoss://")) {
      openURL(msg.url);
      close("open");
    }
  }

  window.addEventListener("message", onMessage);
  document.body.appendChild(frame);
  return () => close("close");
}
