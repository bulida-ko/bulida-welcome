(function () {
  "use strict";

  var MSG_SOURCE = "bulida-welcome";
  var ALL_APPS = window.BULIDA_APPS || [];
  var inIframe = window.parent !== window;

  // ── 어느 앱이 띄웠는지: ?from= → iframe 부모 오리진 → referrer ──
  // 미니앱 오리진은 https://<appName>.web.tossmini.com (콘솔 QR 은 private-web)
  function appNameFromHost(url) {
    try {
      var m = new URL(url).hostname.match(/^([a-z0-9-]+)\.(?:private-)?web\.tossmini\.com$/);
      return m ? m[1] : null;
    } catch (e) {
      return null;
    }
  }

  function detectFrom() {
    var q = new URLSearchParams(location.search).get("from");
    if (q) return q.trim();
    var ancestors = location.ancestorOrigins;
    if (ancestors && ancestors.length) {
      var a = appNameFromHost(ancestors[0]);
      if (a) return a;
    }
    return document.referrer ? appNameFromHost(document.referrer) : null;
  }

  var fromName = detectFrom();
  var fromApp = ALL_APPS.filter(function (a) { return a.appName === fromName; })[0] || null;
  var apps = ALL_APPS.filter(function (a) { return a.appName !== fromName; });

  // ── 부모 앱과 통신 ──
  function post(type, extra) {
    if (!inIframe) return false;
    var msg = { source: MSG_SOURCE, type: type, from: fromName };
    for (var k in extra) msg[k] = extra[k];
    window.parent.postMessage(msg, "*");
    return true;
  }

  function openApp(app) {
    var url = "intoss://" + app.appName;
    if (!post("open", { appName: app.appName, url: url })) location.href = url;
  }

  function close() {
    if (!post("close")) window.close();
  }

  // ── 렌더 ──
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // 받침 유무로 을/를
  function eulReul(word) {
    var code = word.charCodeAt(word.length - 1) - 0xac00;
    if (code < 0 || code > 11171) return word + "을(를)";
    return word + (code % 28 ? "을" : "를");
  }

  function renderIntro(goTo) {
    var card = el("div", "card intro-card");
    var head = el("div", "intro-head");

    // 띄운 앱을 짧게 보여 주고, 그 앱을 만든 불리다의 다른 앱으로 이어 간다
    if (fromApp) {
      var now = el("div", "intro-now");
      now.style.setProperty("--c", fromApp.color);
      var img = el("img");
      img.src = fromApp.icon;
      img.alt = "";
      now.appendChild(img);
      var text = el("div", "intro-now-text");
      text.appendChild(el("strong", null, fromApp.title));
      text.appendChild(el("span", "intro-now-tagline", fromApp.tagline.replace(/\n/g, " ")));
      now.appendChild(text);
      head.appendChild(now);
      head.appendChild(el("h1", "intro-title", "현재 즐기고 있는\n'" + fromApp.title + "'" + eulReul(fromApp.title).slice(fromApp.title.length) + " 만든\n불리다의 다른 앱을 소개할게요"));
    } else {
      head.appendChild(el("h1", "intro-title", "불리다가 만든\n미니앱을 소개할게요"));
    }
    // 토스포인트를 주는 앱이 있으면 제목 아래에 강조
    if (apps.some(function (a) { return a.reward; })) {
      var promo = el("p", "intro-promo");
      promo.appendChild(document.createTextNode("즐기는 만큼 "));
      promo.appendChild(el("strong", null, "토스포인트"));
      promo.appendChild(document.createTextNode("도 더 받아 보세요"));
      head.appendChild(promo);
    }

    var grid = el("div", "intro-grid");
    apps.forEach(function (app, i) {
      var b = el("button");
      b.type = "button";
      var pic = el("span", "intro-pic");
      var icon = el("img");
      icon.src = app.icon;
      icon.alt = "";
      pic.appendChild(icon);
      b.appendChild(pic);
      b.appendChild(el("span", null, app.title));
      b.addEventListener("click", function () { goTo(i + 1); });
      grid.appendChild(b);
    });
    head.appendChild(grid);

    card.appendChild(head);
    card.appendChild(el("div", "swipe-hint", "옆으로 넘겨 보세요 →"));
    return card;
  }

  function renderApp(app) {
    var card = el("div", "card app-card");
    card.style.setProperty("--c", app.color);

    card.appendChild(el("span", "app-kind", app.kind === "game" ? "게임" : "앱"));

    // 토스포인트 안내는 카드 맨 위에
    if (app.reward) {
      var reward = el("p", "app-reward");
      app.reward.split(/\{([^}]*)\}/).forEach(function (part, i) {
        reward.appendChild(i % 2 ? el("strong", null, part) : document.createTextNode(part));
      });
      card.appendChild(reward);
    }

    var hero = el("div", "app-hero");
    var icon = el("img", "app-icon");
    icon.src = app.icon;
    icon.alt = app.title + " 아이콘";
    icon.loading = "lazy";
    hero.appendChild(icon);
    hero.appendChild(el("p", "app-title", app.title));
    hero.appendChild(el("h2", "app-tagline", app.tagline));
    card.appendChild(hero);

    var ul = el("ul", "app-points");
    (app.points || []).forEach(function (p) { ul.appendChild(el("li", null, p)); });
    card.appendChild(ul);

    var cta = el("button", "cta", app.cta || app.title + " 바로가기");
    cta.type = "button";
    cta.addEventListener("click", function () { openApp(app); });
    card.appendChild(cta);
    return card;
  }

  function renderOutro() {
    var card = el("div", "card outro-card");
    card.appendChild(el("h2", "outro-title", "오늘도 '불리다'와 함께\n즐겁고 행복한 하루 되세요"));
    card.appendChild(el("p", "outro-sub", "잠시 후 자동으로 닫혀요"));
    var bar = el("div", "outro-bar");
    bar.appendChild(el("i"));
    card.appendChild(bar);
    return card;
  }

  var track = document.getElementById("track");
  var dotsBox = document.getElementById("dots");

  function goTo(i, smooth) {
    track.scrollTo({ left: i * track.clientWidth, behavior: smooth === false ? "auto" : "smooth" });
  }

  var slides = [];
  function addSlide(card, label) {
    var s = el("section", "slide");
    s.setAttribute("aria-roledescription", "slide");
    s.setAttribute("aria-label", label);
    s.appendChild(card);
    track.appendChild(s);
    slides.push(s);
    dotsBox.appendChild(el("i"));
  }

  addSlide(renderIntro(goTo), "소개");
  apps.forEach(function (app) { addSlide(renderApp(app), app.title); });
  addSlide(renderOutro(), "인사");

  // 마지막 장에 머무르면 잠시 후 닫는다. 그 전에 앞으로 넘기면 취소
  var CLOSE_DELAY = 2000;
  var closeTimer = null;
  function armAutoClose(on) {
    var outro = slides[slides.length - 1].firstChild;
    clearTimeout(closeTimer);
    closeTimer = null;
    outro.classList.toggle("closing", on);
    if (on) closeTimer = setTimeout(close, CLOSE_DELAY);
  }

  // ── 스크롤 위치 → 진행 점, 카드 축소 효과 ──
  var dots = dotsBox.children;
  var current = -1;
  var ticking = false;

  function update() {
    ticking = false;
    var w = track.clientWidth || 1;
    var pos = track.scrollLeft / w;
    for (var i = 0; i < slides.length; i++) {
      var p = Math.min(1, Math.abs(pos - i));
      slides[i].firstChild.style.setProperty("--p", p.toFixed(3));
    }
    var idx = Math.round(pos);
    if (idx !== current) {
      if (dots[current]) dots[current].classList.remove("on");
      if (dots[idx]) dots[idx].classList.add("on");
      current = idx;
      armAutoClose(idx === slides.length - 1);
      post("slide", { index: idx, appName: idx > 0 && apps[idx - 1] ? apps[idx - 1].appName : null });
    }
  }

  track.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener("resize", function () { goTo(current, false); });

  // 데스크톱 확인용
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") goTo(Math.min(current + 1, slides.length - 1));
    if (e.key === "ArrowLeft") goTo(Math.max(current - 1, 0));
    if (e.key === "Escape") close();
  });

  update();
  post("ready", { count: apps.length });
})();
