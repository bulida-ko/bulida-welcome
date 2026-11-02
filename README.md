# bulida-welcome

불리다가 만든 토스 미니앱 소개 화면. 미니앱이 전면광고 대신 가끔 띄운다.
iframe 이 아니라 JS 모듈 하나를 import 해서 앱 화면 위에 바로 그린다. 빌드·의존성 없음.

```
bulida-welcome.js   ★ 전부 (소개 내용 · 화면 · 동작). 앱 추가·문구 수정은 맨 위 BULIDA_APPS 만
index.html          로컬 미리보기
```

## 화면 구성

| 장 | 내용 |
|---|---|
| 첫 장 | 띄운 앱 이름을 짚는 제목 + 앱 목록(오퍼월). 앱마다 받을 수 있는 토스포인트를 배지로 보여 주고, 누르면 그 앱 장으로 간다 |
| 앱 장 | 위는 앱 색으로 채운 광고 영역(아이콘·이름·tagline), 아래 시트에 토스포인트 티켓 · 특징 · 이동 버튼 · 다음 앱 예고 |
| 마지막 장 | 앱 아이콘 묶음 + 인사 + 5초 카운트다운 후 자동으로 닫힘 |

화면 아래 진행 막대는 지금까지 본 장을 채운다. 티켓·배지의 금액은 `reward` 의 첫 `{중괄호}` 를 그대로 쓴다.

화면은 Shadow DOM 안에 그려서 미니앱의 CSS 와 서로 영향을 주지 않는다 (React·Godot·Unity 웹 빌드 공통).

## 미니앱에 붙이기

두 가지 중 하나.

**① 파일 복사** — `bulida-welcome.js` 를 앱 소스에 넣고 import. 소개 내용이 바뀌면 앱마다 다시 복사·배포해야 한다.

```js
import { openURL } from "@apps-in-toss/web-framework";
import { showBulidaWelcome } from "./bulida-welcome.js";

// 전면광고를 띄우던 자리에서 (얼마나 자주 띄울지는 앱이 정한다)
showBulidaWelcome({ from: "minigolf", openURL });
```

**② Pages 에서 바로 import** — 이 저장소만 고치면 모든 앱에 반영된다.

```js
import { openURL } from "@apps-in-toss/web-framework";

const WELCOME_URL = "https://bulida-ko.github.io/bulida-welcome/bulida-welcome.js";

const { showBulidaWelcome } = await import(/* @vite-ignore */ WELCOME_URL);
showBulidaWelcome({ from: "minigolf", openURL });
```

네트워크가 안 되면 `import()` 가 실패하니 `try/catch` 로 감싸고 그냥 넘어가면 된다.

### 옵션

| 옵션 | 내용 |
|---|---|
| `from` | 띄운 앱의 appName. 첫 장에서 이 앱을 짧게 소개하고, 나머지 목록에서는 빠진다 |
| `openURL` | `@apps-in-toss/web-framework` 의 `openURL`. 이동 버튼에서 `openURL("intoss://<appName>")` 을 부른다. 없으면 `location.href` |
| `onClose(reason)` | 닫힌 뒤 호출. `"close"` (자동·Esc·직접 닫기) 또는 `"open"` (다른 앱으로 이동) |
| `onSlide({ index, appName })` | 장이 바뀔 때. 로그용 |
| `apps` | 목록을 바꿔 끼울 때만. 기본은 `BULIDA_APPS` |

반환값은 직접 닫는 함수. 이미 떠 있을 때 다시 부르면 새로 띄우지 않고 그 닫기 함수를 돌려준다.

닫기 버튼은 없다. 마지막 장("오늘도 '불리다'와 함께 …")에 닿으면 5초 뒤 닫히고, 그 전에 앞 장으로 돌아가면 취소된다.

## 소개 고치기

`BULIDA_APPS` 배열 한 칸이 슬라이드 한 장이다. 배열 순서대로 나온다. 토스포인트를 주는 앱을 앞에, 금액이 큰 순서로 둔다.
문구는 토스체(해요체, 짧게, 받는 사람 입장)로 쓴다.

| 필드 | 내용 |
|---|---|
| `appName` | 콘솔 appName. 이동 링크 `intoss://<appName>` 과 `from` 비교에 쓰인다 |
| `title` | 앱 이름 |
| `kind` | `"game"` 이면 "게임", `"app"` 이면 "앱" 배지 |
| `icon` | 아이콘 URL (콘솔 아이콘 `static.toss.im/...` 그대로) |
| `color` | 배지·버튼·배경 그라데이션 색 |
| `reward` | 토스포인트를 주는 앱만. 카드 맨 위에 나오는 문장. `{최대 300원}` 처럼 중괄호 안은 강조, `\n` 은 줄바꿈 |
| `tagline` | 큰 한 줄 소개. `\n` 으로 줄바꿈 (두 줄, 줄당 12자 안팎이 보기 좋다) |
| `points` | 특징 2~3개 (한 줄에 들어가게 20자 안쪽) |
| `cta` | 이동 버튼 문구 |

## 확인할 것

- `openURL("intoss://<appName>")` 이 토스 앱 안에서 다른 미니앱을 여는지 실기기에서 확인. 안 되면 공유 링크(`getTossShareLink`)로 바꾼다.
- ② 방식이면 외부 도메인 스크립트 로드가 앱인토스 웹뷰·검수에서 허용되는지.

## 로컬 확인

```bash
python3 -m http.server 8000
open "http://localhost:8000/?from=minigolf"
```

데스크톱에선 ←/→ 키로 넘기고 Esc 로 닫는다. 닫힌 뒤 "다시 띄우기" 로 다시 열 수 있다.
