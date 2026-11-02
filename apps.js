// 소개할 미니앱 목록. 소개 문구는 여기만 고치면 된다.
// 배열 순서 = 슬라이드 순서. 페이지를 띄운 앱(?from=appName)은 목록에서 빠진다.
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
window.BULIDA_APPS = [
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
