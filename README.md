# bulida-welcome

불리다가 만든 토스 미니앱 소개 페이지. 미니앱이 전면광고 대신 전체 화면 iframe 으로 가끔 띄운다.
빌드 없는 정적 페이지라 GitHub Pages 에 그대로 올리면 된다.

```
index.html   뼈대
style.css    화면
app.js       슬라이드·이동·부모 앱과 통신
apps.js      ★ 소개 내용. 앱 추가·문구 수정은 여기만
integration/bulida-welcome.js   미니앱 쪽에 붙이는 코드
```

## 소개 고치기

`apps.js` 의 배열 한 칸이 슬라이드 한 장이다. 배열 순서대로 나온다. 토스포인트를 주는 앱을 앞에, 금액이 큰 순서로 둔다.
문구는 토스체(해요체, 짧게, 받는 사람 입장)로 쓴다.

| 필드 | 내용 |
|---|---|
| `appName` | 콘솔 appName. 이동 링크 `intoss://<appName>` 과 `?from=` 비교에 쓰인다 |
| `title` | 앱 이름 |
| `kind` | `"game"` 이면 "게임", `"app"` 이면 "앱" 배지 |
| `icon` | 아이콘 URL (콘솔 아이콘 `static.toss.im/...` 그대로) |
| `color` | 배지·버튼·배경 그라데이션 색 |
| `reward` | 토스포인트를 주는 앱만. 카드 맨 위에 나오는 문장. `{최대 300원}` 처럼 중괄호 안은 강조, `\n` 은 줄바꿈 |
| `tagline` | 큰 한 줄 소개. `\n` 으로 줄바꿈 (두 줄, 줄당 12자 안팎이 보기 좋다) |
| `points` | 특징 2~3개 (한 줄에 들어가게 20자 안쪽) |
| `cta` | 이동 버튼 문구 |

첫 장은 자동으로 만들어진다. `?from=` 으로 띄운 앱을 알아내면 그 앱을 짧게 소개하고 "현재 즐기고 있는 '○○'을 만든 불리다의 다른 앱을 소개할게요" 와 함께
나머지 앱 아이콘을 보여 주고, 띄운 앱 자신의 슬라이드는 빠진다.

## 띄운 앱 알아내기

1. `?from=<appName>` (기본)
2. 없으면 iframe 부모 오리진 `location.ancestorOrigins[0]`
3. 그것도 없으면 `document.referrer`

2·3 은 미니앱 오리진 `https://<appName>.web.tossmini.com` (콘솔 QR 은 `private-web`) 에서 appName 을 뽑는다.

## 미니앱에 붙이기

`integration/bulida-welcome.js` 를 복사하고 `PAGE_URL` 을 실제 Pages 주소로 바꾼다.

```js
import { openURL } from "@apps-in-toss/web-framework";
import { showBulidaWelcome } from "./bulida-welcome";

// 얼마나 자주 띄울지는 앱이 정한다
showBulidaWelcome({ from: "minigolf", openURL });
```

페이지 → 부모 메시지 (`{ source: "bulida-welcome", type, from, ... }`):

| type | 언제 | 부모가 할 일 |
|---|---|---|
| `ready` | 로드 끝 | — |
| `slide` | 장이 바뀜 (`index`, `appName`) | 원하면 로그 |
| `open` | 이동 버튼 (`appName`, `url`) | `openURL(url)` 후 닫기 |
| `close` | 마지막 인사 장에서 2초 뒤 | iframe 제거 |

페이지에는 닫기 버튼이 없다. 마지막 장("오늘도 '불리다'와 함께 …")에 닿으면 2초 뒤 `close` 를 보내고,
그 전에 앞 장으로 돌아가면 취소된다.

## 확인할 것

- `openURL("intoss://<appName>")` 이 토스 앱 안에서 다른 미니앱을 여는지 실기기에서 확인. 안 되면 `open` 처리에서
  공유 링크(`getTossShareLink`)로 바꾼다.
- 외부 도메인 iframe 이 앱인토스 검수를 통과하는지.

## 로컬 확인

```bash
python3 -m http.server 8000
open "http://localhost:8000/?from=minigolf"
```

데스크톱에선 ←/→ 키로 넘기고 Esc 로 닫는다. 단독으로 열면 `window.close()` 가 막혀 마지막 장에서 그대로 남는다.
