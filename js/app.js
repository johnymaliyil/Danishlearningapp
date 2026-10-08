(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const app = $("#app");
  const APP_VERSION = "40"; // keep in step with ?v= in index.html and VERSION in sw.js
  // Feedback is e-mailed via FormSubmit (formsubmit.co). After activation the address can be
  // replaced by the random alias FormSubmit sends. Leave empty to hide the feedback form.
  const FEEDBACK_TO = "johnyaj.sap@gmail.com";
  // Ko-fi page name (ko-fi.com/<name>). Leave empty to hide the support buttons.
  const KOFI = "annaos";
  const kofiBtn = (cls = "btn ghost sm") => KOFI
    ? `<a class="${cls} kofi" href="https://ko-fi.com/${encodeURIComponent(KOFI)}" target="_blank" rel="noopener"><span class="cup" aria-hidden="true"><i></i><i></i><i></i>☕</span> Støt DanskKlar</a>` : "";

  // ---------- Storage ----------
  const KEY = "pd2-trainer-v1";
  const today = () => new Date().toISOString().slice(0, 10);
  const blank = () => ({ exam: "pd2", xp: 0, xpDay: { date: today(), xp: 0 }, streak: 0, lastDay: null, badges: [], reading: {}, writing: {}, speaking: { sessions: 0, seconds: 0, done: {} }, words: { best: 0 }, games: { best: {}, played: {} }, vocab: { b: {}, h: {}, dir: "da", say: false }, grammar: {}, mistakes: { reading: {}, grammar: {} }, exams: [], plan: { date: "" }, today: { date: "" } });
  let S = blank();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) S = Object.assign(blank(), JSON.parse(raw));
  } catch (e) { /* storage blocked: progress lives in memory only */ }
  if (!PD2.EXAMS[S.exam]) S.exam = "pd2";
  S.games = Object.assign({ best: {}, played: {} }, S.games); // older saves
  S.vocab = Object.assign({ b: {}, h: {}, dir: "da", say: false }, S.vocab);
  S.grammar = S.grammar || {};
  S.mistakes = Object.assign({ reading: {}, grammar: {} }, S.mistakes);
  S.exams = S.exams || [];
  S.plan = Object.assign({ date: "" }, S.plan);
  S.today = S.today || { date: "" };
  if (S.words && S.words.best !== undefined && S.words.pd2 === undefined) S.words.pd2 = S.words.best; // older saves
  const EX = () => PD2.EXAMS[S.exam];
  // Find an item by id in the current exam, or switch to the exam that has it (e.g. a shared link).
  function findItem(list, id) {
    const here = (EX()[list] || []).find(x => x.id === id);
    if (here) return here;
    for (const k of Object.keys(PD2.EXAMS)) {
      const it = (PD2.EXAMS[k][list] || []).find(x => x.id === id);
      if (it) { S.exam = k; save(); renderStats(); return it; }
    }
    return null;
  }
  const META = () => PD2.EXAM_META[S.exam];
  const wordBest = () => (S.words[S.exam] || 0);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };

  // ---------- Helpers ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtTime = s => { s = Math.max(0, Math.round(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => String(s).toLowerCase().replace(/[.,!?"'’”“\-–]/g, " ").replace(/\s+/g, " ").trim();
  const countWords = t => (t.trim().match(/[A-Za-zÆØÅæøåÄÖÜäöüé0-9]+(?:[-'][A-Za-zÆØÅæøå0-9]+)*/g) || []).length;

  // Paragraphs, **bold**, and [[n]] gap markers.
  function fmtText(text, gap) {
    return text.split(/\n\s*\n/).map(p => {
      let h = esc(p).replace(/\n/g, "<br>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      h = h.replace(/\[\[(\d+)\]\]/g, (_, n) => gap ? gap(+n) : "____");
      return `<p>${h}</p>`;
    }).join("");
  }

  // ---------- Gamification ----------
  const LEVELS = ["Nybegynder", "Øvede", "Ordsamler", "Sætningsbygger", "Læsehest", "Skrivekarl", "Snakkemester", "Danskekspert", "Prøveklar", "Dansk legende"];
  const XP_PER_LEVEL = 150;
  const level = () => Math.floor(S.xp / XP_PER_LEVEL) + 1;
  const levelName = l => LEVELS[Math.min(l - 1, LEVELS.length - 1)];
  const DAILY_GOAL = 60;

  const BADGES = [
    { id: "first_read", ico: "📖", name: "Første læsning" },
    { id: "perfect", ico: "💯", name: "Fejlfri" },
    { id: "exam2020", ico: "🏛️", name: "Alle rigtige læseprøver" },
    { id: "first_write", ico: "✍️", name: "Første tekst" },
    { id: "wordsmith", ico: "🖋️", name: "Ordsmed (150+ ord)" },
    { id: "first_speak", ico: "🎤", name: "Første tale" },
    { id: "dialog", ico: "💬", name: "Samtalepartner" },
    { id: "allround", ico: "🌈", name: "Alsidig" },
    { id: "hunter", ico: "⚡", name: "Ordjæger (15+)" },
    { id: "streak3", ico: "🔥", name: "3 dage i træk" },
    { id: "streak7", ico: "🚀", name: "7 dage i træk" },
    { id: "level5", ico: "👑", name: "Niveau 5" },
    { id: "gamer", ico: "🎮", name: "Spilleglad (5 spil)" },
    { id: "ordle", ico: "🔤", name: "Ordle-mester" },
    { id: "builder", ico: "🧩", name: "Ordstilling uden fejl" },
    { id: "template", ico: "📋", name: "Skabelon udenad" },
    { id: "vocab100", ico: "📚", name: "100 ord lært" },
    { id: "vocab1000", ico: "🎓", name: "1.000 ord lært" },
    { id: "grammar", ico: "📐", name: "Alle grammatiklektioner" }
  ];

  function touchDay() {
    const d = today();
    if (S.xpDay.date !== d) S.xpDay = { date: d, xp: 0 };
    if (S.lastDay === d) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak = S.lastDay === y ? S.streak + 1 : 1;
    S.lastDay = d;
    if (S.streak >= 3) award("streak3");
    if (S.streak >= 7) award("streak7");
  }

  // What was practised today (used by the study plan).
  function bump(kind) {
    const d = today();
    if (S.today.date !== d) S.today = { date: d };
    S.today[kind] = (S.today[kind] || 0) + 1;
    save();
  }
  const todayCount = kind => (S.today.date === today() ? S.today[kind] || 0 : 0);

  function addXP(n, why) {
    if (n <= 0) return;
    touchDay();
    const before = level();
    S.xp += n;
    S.xpDay.xp += n;
    toast(`+${n} XP${why ? " · " + why : ""}`);
    if (level() > before) {
      toast(`🎉 Niveau ${level()}: ${levelName(level())}!`, true);
      confetti();
    }
    if (level() >= 5) award("level5");
    const r = Object.keys(S.reading).length, w = Object.keys(S.writing).some(k => S.writing[k].best), s = S.speaking.sessions;
    if (r && w && s) award("allround");
    save();
    renderStats();
  }

  function award(id) {
    if (S.badges.includes(id)) return;
    S.badges.push(id);
    const b = BADGES.find(x => x.id === id);
    toast(`${b.ico} Nyt badge: ${b.name}`, true);
    confetti();
    save();
  }

  function toast(msg, gold) {
    const t = document.createElement("div");
    t.className = "toast" + (gold ? " gold" : "");
    t.textContent = msg;
    $("#toasts").appendChild(t);
    setTimeout(() => t.remove(), 3100);
  }

  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = $("#confetti"), ctx = c.getContext("2d");
    c.width = innerWidth; c.height = innerHeight;
    const colors = ["#c8102e", "#ffffff", "#fbbf24", "#2563eb", "#059669", "#7c3aed"];
    const ps = Array.from({ length: 140 }, () => ({
      x: c.width / 2 + (Math.random() - .5) * 200, y: c.height * .35,
      vx: (Math.random() - .5) * 14, vy: Math.random() * -12 - 4,
      s: Math.random() * 7 + 4, r: Math.random() * 6, vr: (Math.random() - .5) * .3, col: colors[Math.floor(Math.random() * colors.length)]
    }));
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, c.width, c.height);
      ps.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vy += .35; p.vx *= .99; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.col;
        ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore();
      });
      if (++f < 150) requestAnimationFrame(tick); else ctx.clearRect(0, 0, c.width, c.height);
    })();
  }

  function examButtons() {
    return Object.keys(PD2.EXAMS).sort().map(k => {
      const m = PD2.EXAM_META[k];
      return `<button type="button" data-exam="${k}" aria-pressed="${k === S.exam}" title="${esc(m.full)} (niveau ${m.cefr})">${m.name}</button>`;
    }).join("");
  }
  function setExam(k) {
    if (!PD2.EXAMS[k] || k === S.exam) return;
    S.exam = k; save();
    toast(`Du træner nu ${PD2.EXAM_META[k].full} (${PD2.EXAM_META[k].cefr})`);
    // An item from the old exam does not exist in the new one, so go up to its list.
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    const target = parts[0] && parts.length > 1 ? "#/" + parts[0] : null;
    renderStats();
    if (target && target !== location.hash) location.hash = target; else route();
  }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-exam]");
    if (b) setExam(b.dataset.exam);
  });

  function renderStats() {
    $("#topstats").innerHTML = `
      <span class="examsw" role="group" aria-label="Vælg prøve">${examButtons()}</span>
      <span class="pill" title="Dage i træk">🔥 ${S.streak}</span>
      <span class="pill" title="Niveau ${level()}">⭐ ${S.xp} XP</span>
      ${KOFI ? `<a class="pill kofi-pill" href="https://ko-fi.com/${encodeURIComponent(KOFI)}" target="_blank" rel="noopener" title="Støt DanskKlar på Ko-fi" aria-label="Støt DanskKlar på Ko-fi"><span class="cup" aria-hidden="true"><i></i><i></i><i></i>☕</span><span class="kofi-txt"> Støt</span></a>` : ""}`;
  }

  // ---------- Timers (cleared on navigation) ----------
  let cleanups = [];
  const onLeave = fn => cleanups.push(fn);
  // Interval timers are tagged so a view can stop its clocks without dropping recorder cleanups.
  function every(ms, fn) {
    const id = setInterval(fn, ms);
    const stop = () => clearInterval(id);
    stop.isTimer = true;
    cleanups.push(stop);
    return id;
  }
  function clearTimers() {
    const keep = [];
    cleanups.forEach(fn => { if (fn.isTimer) fn(); else keep.push(fn); });
    cleanups = keep;
  }

  // ---------- Speech ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let daVoice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    daVoice = vs.find(v => /^da(-|_|$)/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, onend, rate) {
    if (!("speechSynthesis" in window)) { onend && onend(); return false; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "da-DK"; u.rate = rate || 0.92;
    if (daVoice) u.voice = daVoice;
    if (onend) u.onend = onend;
    speechSynthesis.speak(u);
    return true;
  }

  // Microphone recorder + live transcript
  function makeRecorder(transcriptEl) {
    let rec = null, chunks = [], stream = null, recog = null, finalText = "", url = null;
    const api = {
      active: false,
      get text() { return finalText.trim(); },
      async start() {
        finalText = ""; chunks = [];
        if (url) { URL.revokeObjectURL(url); url = null; }
        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          rec = new MediaRecorder(stream);
          rec.ondataavailable = e => e.data.size && chunks.push(e.data);
          rec.start();
        } catch (e) {
          toast("Mikrofonen kunne ikke startes – du kan stadig øve uden optagelse.");
          rec = null;
        }
        if (SR) {
          recog = new SR();
          recog.lang = "da-DK"; recog.continuous = true; recog.interimResults = true;
          recog.onresult = ev => {
            let interim = "";
            for (let i = ev.resultIndex; i < ev.results.length; i++) {
              const r = ev.results[i];
              if (r.isFinal) finalText += r[0].transcript + " "; else interim += r[0].transcript;
            }
            if (transcriptEl) transcriptEl.innerHTML = esc(finalText) + (interim ? `<i>${esc(interim)}</i>` : "") || "<i>Lytter …</i>";
          };
          recog.onend = () => { if (api.active) { try { recog.start(); } catch (e) { /* already running */ } } };
          try { recog.start(); } catch (e) { recog = null; }
        }
        if (transcriptEl) transcriptEl.innerHTML = SR ? "<i>Lytter … tal dansk!</i>" : "<i>Live-tekst virker kun i Chrome/Edge. Optagelsen kører stadig.</i>";
        api.active = true;
      },
      stop() {
        return new Promise(res => {
          api.active = false;
          if (recog) { try { recog.stop(); } catch (e) { /* ignore */ } recog = null; }
          if (!rec) { res(null); return; }
          rec.onstop = () => {
            stream.getTracks().forEach(t => t.stop());
            url = chunks.length ? URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/webm" })) : null;
            res(url);
          };
          rec.stop();
        });
      }
    };
    onLeave(() => { if (api.active) api.stop(); });
    return api;
  }

  // ---------- Router ----------
  const routes = [
    [/^\/?$/, home],
    [/^\/start$/, startScreen],
    [/^\/reading$/, readingList],
    [/^\/reading\/([\w-]+)$/, readingItem],
    [/^\/writing$/, writingList],
    [/^\/writing\/skabeloner(?:\/(\w+))?$/, templatesPage],
    [/^\/writing\/([\w-]+)$/, writingItem],
    [/^\/speaking$/, speakingList],
    [/^\/speaking\/sim(?:\/(\w+))?$/, speakingSim],
    [/^\/speaking\/mono\/([\w-]+)$/, speakingMono],
    [/^\/speaking\/dialog\/([\w-]+)$/, speakingDialog],
    [/^\/speaking\/picture\/([\w-]+)$/, speakingPicture],
    [/^\/words$/, wordsGame],
    [/^\/games$/, gamesHub],
    [/^\/games\/vocab\/(\d+)$/, n => vocabGame().setPage(+n - 1)],
    [/^\/games\/(\w+)$/, gameRoute],
    [/^\/grammar$/, grammarList],
    [/^\/grammar\/drill\/(\w+)$/, drillPage],
    [/^\/grammar\/([\w-]+)$/, grammarLesson],
    [/^\/ordbog$/, dictionaryPage],
    [/^\/exam$/, examPage],
    [/^\/plan$/, planPage],
    [/^\/mistakes$/, mistakesPage],
    [/^\/about$/, about],
    [/^\/legal$/, legalPage],
    [/^\/feedback(?:\/([1-5]))?$/, feedbackPage]
  ];
  let lastPath = "/";
  function route() {
    cleanups.forEach(fn => { try { fn(); } catch (e) { /* ignore */ } });
    cleanups = [];
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const path = location.hash.replace(/^#/, "") || "/";
    if (!path.startsWith("/feedback")) lastPath = path;
    const section = path.split("/")[1] || "";
    const navSection = section === "words" ? "games" : section;
    $$(".nav a").forEach(a => a.classList.toggle("active", a.dataset.nav === navSection));
    document.body.classList.toggle("starting", section === "start");
    for (const [re, fn] of routes) {
      const m = path.match(re);
      if (m) { fn(...m.slice(1)); window.scrollTo(0, 0); app.focus({ preventScroll: true }); return; }
    }
    home();
  }
  addEventListener("hashchange", route);

  // ---------- Install as app (PWA) ----------
  let installPrompt = null;
  const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    installPrompt = e;
    $$("[data-install]").forEach(b => b.hidden = false);
  });
  addEventListener("appinstalled", () => {
    installPrompt = null;
    $$("[data-install]").forEach(b => b.hidden = true);
    toast("📲 DanskKlar er installeret!", true);
  });
  // Shown when the browser offers installation, or on iPhone/iPad where it is done from the Share menu.
  function installButton() {
    if (isStandalone()) return "";
    const show = installPrompt || isIOS();
    return `<button type="button" class="btn ghost sm" data-install ${show ? "" : "hidden"}>📲 Installér app</button>`;
  }
  document.addEventListener("click", async e => {
    const b = e.target.closest("[data-install]");
    if (!b) return;
    if (installPrompt) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === "accepted") installPrompt = null;
      return;
    }
    const box = b.parentElement.parentElement.querySelector(".install-help");
    if (box) { box.remove(); return; }
    const help = document.createElement("div");
    help.className = "install-help";
    help.innerHTML = `<b>Sådan installerer du DanskKlar på iPhone og iPad</b>
      <ol><li>Tryk på <b>Del</b>-knappen (firkanten med pilen) nederst i Safari.</li>
      <li>Vælg <b>Føj til hjemmeskærm</b>.</li>
      <li>Tryk på <b>Tilføj</b>. Nu ligger DanskKlar på din hjemmeskærm.</li></ol>`;
    b.parentElement.after(help);
  });
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { /* app still works online */ }));
  }

  // ---------- Start: choose exam ----------
  // Shown when the app is opened (once per browser session) and from "Skift prøve".
  const CHOSEN = "pd-chosen";
  function markChosen() { try { sessionStorage.setItem(CHOSEN, "1"); } catch (e) { /* ignore */ } }
  function hasChosen() { try { return sessionStorage.getItem(CHOSEN) === "1"; } catch (e) { return false; } }

  function startScreen() {
    const icons = { pd1: "🌱", pd2: "🌿", pd3: "🌳" };
    const cards = Object.keys(PD2.EXAMS).sort().map(k => {
      const m = PD2.EXAM_META[k], E = PD2.EXAMS[k];
      const items = E.READING.concat(E.WRITING, E.SPEAKING_MONO, E.SPEAKING_DIALOG, E.SPEAKING_PICTURE || []);
      const done = items.filter(x => S.reading[x.id] || (S.writing[x.id] && S.writing[x.id].best) || S.speaking.done[x.id]).length;
      const last = k === S.exam && S.examPicked;
      return `<button type="button" class="exam-card ${k}" data-start="${k}">
        <span class="ec-top"><span class="ec-ico" aria-hidden="true">${icons[k] || "📘"}</span><span class="ec-cefr">Niveau ${m.cefr}</span></span>
        <span class="ec-name">${m.name}</span>
        <span class="ec-full">${esc(m.full)}</span>
        <span class="ec-tag">${esc(m.tagline)}</span>
        <span class="bar"><i style="width:${items.length ? done / items.length * 100 : 0}%"></i></span>
        <span class="ec-prog">${done}/${items.length} øvelser klaret${last ? " · <b>sidst brugt</b>" : ""}</span>
      </button>`;
    }).join("");
    app.innerHTML = `
      <section class="start">
        <div class="start-head">
          <span class="flag big" aria-hidden="true"></span>
          <h1>Velkommen til DanskKlar</h1>
          <p class="muted">Hvilken prøve vil du træne til? Du kan altid skifte senere.</p>
        </div>
        <div class="exam-cards">${cards}</div>
        <p class="small muted start-foot">Ved du ikke, hvilken prøve du skal til? PD1 er den letteste og PD3 den sværeste. Spørg din sprogskole.</p>
        <div><div class="start-install">${installButton()}</div></div>
      </section>`;
    $$("[data-start]").forEach(b => b.onclick = () => {
      const k = b.dataset.start;
      markChosen();
      S.exam = k; S.examPicked = true; save(); renderStats();
      location.hash = "#/";
    });
  }

  // ---------- Home ----------
  const TIPS = [
    "Læs spørgsmålene først – så ved du, hvad du skal kigge efter i teksten.",
    "Ved \"find sætningen\": læs sætningen efter hullet. Den afslører ofte svaret (fx \"Derfor …\" eller \"Men …\").",
    "Ved udfyld-hullerne: tjek ordklassen. Står der \"lidt ___ end\", skal der være et adjektiv i komparativ (mindre/større).",
    "Brug bindeord som fordi, derfor, selvom og desuden. Det giver point for kohæsion.",
    "Husk inversion: \"I weekenden spiser jeg …\" – verbet står på plads 2.",
    "Svar på ALLE punkter i skriveopgaven. Instruktionen skal være fulgt.",
    "Til mundtlig: det er okay at sige \"Det ved jeg ikke helt, men jeg tror …\". Bliv ved med at tale!",
    "Skriv en hilsen og en afslutning i mails: \"Kære …\" og \"Venlig hilsen\"."
  ];

  function readingProgress() {
    const done = EX().READING.filter(r => S.reading[r.id]).length;
    return [done, EX().READING.length];
  }
  function writingProgress() {
    const done = EX().WRITING.filter(w => S.writing[w.id] && S.writing[w.id].best).length;
    return [done, EX().WRITING.length];
  }
  function speakingProgress() {
    const items = EX().SPEAKING_MONO.concat(EX().SPEAKING_DIALOG, EX().SPEAKING_PICTURE || []);
    return [items.filter(x => S.speaking.done[x.id]).length, items.length];
  }

  function home() {
    touchDay(); save(); renderStats();
    const l = level(), into = S.xp % XP_PER_LEVEL, pct = into / XP_PER_LEVEL;
    const C = 2 * Math.PI * 52;
    const goalPct = Math.min(1, S.xpDay.xp / DAILY_GOAL);
    const [rd, rt] = readingProgress(), [wd, wt] = writingProgress(), [sd, st] = speakingProgress();
    const tip = TIPS[new Date().getDate() % TIPS.length];
    app.innerHTML = `
      <section class="hero">
        <div style="position:relative;z-index:1">
          <h1>Hej! Klar til ${META().name}? 🇩🇰</h1>
          <p>Træn de tre dele af ${META().full} (niveau ${META().cefr}): læsning, skrivning og tale. Saml XP, hold din streak og lås badges op.</p>
          <div class="examsw big" role="group" aria-label="Vælg prøve">${examButtons()}</div>
          <div class="row">
            <span class="pill">🔥 ${S.streak} ${S.streak === 1 ? "dag" : "dage"} i træk</span>
            <span class="pill">🎯 Dagens mål: ${S.xpDay.xp}/${DAILY_GOAL} XP ${goalPct >= 1 ? "✅" : ""}</span>
          </div>
        </div>
        <div class="ring" role="img" aria-label="Niveau ${l}, ${into} af ${XP_PER_LEVEL} XP">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="12"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round"
              stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}"/>
          </svg>
          <div class="lbl"><div>Niv. ${l}<small>${esc(levelName(l))}</small></div></div>
        </div>
      </section>

      ${(() => { const st = planStatus(); return `<a class="card plan-banner" href="#/plan">
        <span class="pb-ico">📅</span><span class="pb-meta"><b>${esc(countdownText())}</b>
        <span class="small muted">${S.plan.date ? `Dagens plan: ${st.done}/${st.items.length} klaret` : "Lav en prøveplan med opgaver til hver dag"}</span></span>
        <span class="bar pb-bar"><i style="width:${st.items.length ? st.done / st.items.length * 100 : 0}%"></i></span></a>`; })()}

      <div class="grid grid-3" style="margin-top:20px">
        ${taskCard("read", "#/reading", "📖", "Læsning", META().readingIntro.split(". ")[0].replace(/\.$/, "") + ".", rd, rt, "opgaver løst")}
        ${taskCard("write", "#/writing", "✍️", "Skrivning", META().writingIntro, wd, wt, "tekster bedømt")}
        ${taskCard("speak", "#/speaking", "🗣️", "Tale", "Monolog og dialog med timer, optagelse og oplæsning.", sd, st, "emner øvet")}
      </div>

      <div class="grid grid-2" style="margin-top:16px">
        ${S.exam === "pd2" ? `<a class="task read" href="#/exam">
          <span class="emoji">📝</span>
          <h2>Prøvesimulering</h2>
          <p class="muted" style="margin:0">Tag en hel skriftlig prøve med tid og få et anslået resultat.${S.exams.length ? ` Sidst: <b>${S.exams[0].score}/${S.exams[0].total}</b> (${esc(S.exams[0].grade)}).` : ""}</p>
        </a>` : ""}
        <a class="task read" href="#/ordbog">
          <span class="emoji">🔎</span>
          <h2>Ordbog</h2>
          <p class="muted" style="margin:0">Slå danske og engelske ord op – med udtale – og gem svære ord til Ordtræneren.</p>
        </a>
        <a class="task write" href="#/mistakes">
          <span class="emoji">❌</span>
          <h2>Mine fejl</h2>
          <p class="muted" style="margin:0">${mistakeCount() ? `Du har <b>${mistakeCount()}</b> fejl at øve. Lav dem igen, til de sidder.` : "Her samles dine forkerte svar, så du kan øve dem igen."}</p>
        </a>
        <a class="task words" href="#/games/vocab">
          <span class="emoji">📚</span>
          <h2>Ordtræner</h2>
          <p class="muted" style="margin:0">Lær over 5.000 ord fra prøverne. Du har lært <b>${vLearnedCount()}</b> ord.</p>
        </a>
        <a class="task read" href="#/grammar">
          <span class="emoji">📐</span>
          <h2>Grammatik</h2>
          <p class="muted" style="margin:0">${PD2.GRAMMAR.length} korte lektioner for begyndere: ordstilling, inversion, spørgsmål, bindeord, tillægsord og verber – med øvelser.</p>
        </a>
        <a class="task words" href="#/games">
          <span class="emoji">🎮</span>
          <h2>Spil & leg</h2>
          <p class="muted" style="margin:0">${GAMES.length} sjove spil: Ordtræner, Ordjagt, Vendespil, Ordle, En eller et?, Byg sætningen, Lyt og skriv, Bøj verbet og Talemåder.</p>
        </a>
        <div class="card">
          <h3>💡 Dagens tip</h3>
          <p style="margin:0">${esc(tip)}</p>
        </div>
      </div>

      <section style="margin-top:24px">
        <h2>🏅 Badges <span class="muted small">${S.badges.length}/${BADGES.length}</span></h2>
        <div class="badges">
          ${BADGES.map(b => `<div class="badge ${S.badges.includes(b.id) ? "got" : ""}"><span class="b-ico">${b.ico}</span>${esc(b.name)}</div>`).join("")}
        </div>
      </section>

      ${FEEDBACK_TO && !S.rated && !S.rateHide && S.xp >= 50 ? `<div class="card rate-card" id="rateCard">
        <div><b>⭐ Hvad synes du om DanskKlar?</b><div class="small muted">Tryk på en stjerne – det tager kun et øjeblik.</div></div>
        <div class="stars">${[1, 2, 3, 4, 5].map(n => `<a class="star-btn" href="#/feedback/${n}" aria-label="${n} stjerne${n > 1 ? "r" : ""}">★</a>`).join("")}</div>
        <button class="btn ghost sm" id="rateHide">Ikke nu</button></div>` : ""}

      <p style="margin-top:24px" class="row">
        <a class="btn ghost sm" href="#/start">🔁 Skift prøve</a>
        ${installButton()}
        <a class="btn ghost sm" href="#/about">ℹ️ Om ${META().name}-prøven</a>
        ${FEEDBACK_TO ? `<a class="btn ghost sm" href="#/feedback">⭐ Bedøm / giv feedback</a>` : ""}
        ${kofiBtn()}
        <a class="btn ghost sm" href="#/legal">⚖️ Privatliv og vilkår</a>
        <span class="spacer"></span>
        <button class="btn ghost sm" id="reset">Nulstil fremskridt</button>
      </p>
      <p class="small muted" style="text-align:right;margin-top:6px">DanskKlar version ${APP_VERSION}</p>`;
    const rh = $("#rateHide");
    if (rh) rh.onclick = () => { S.rateHide = true; save(); $("#rateCard").remove(); };
    // Two-step button instead of confirm(): dialogs are blocked in some embedded viewers.
    $("#reset").onclick = e => {
      const b = e.currentTarget;
      if (!b.dataset.armed) { b.dataset.armed = "1"; b.textContent = "Sikker? Klik igen for at slette alt"; return; }
      S = blank(); save(); route(); renderStats();
    };
  }

  function taskCard(cls, href, emoji, title, desc, done, total, unit) {
    return `<a class="task ${cls}" href="${href}">
      <span class="emoji">${emoji}</span>
      <h2>${title}</h2>
      <p class="muted">${desc}</p>
      <div class="bar"><i style="width:${total ? (done / total) * 100 : 0}%"></i></div>
      <p class="small muted" style="margin:6px 0 0">${done}/${total} ${unit}</p>
    </a>`;
  }

  // ---------- Reading ----------
  function readingList() {
    const groups = {};
    const practice = S.exam === "pd2" ? "Ekstra øvelser" : `Øvelser på ${META().name}-niveau`;
    EX().READING.forEach(r => { const g = r.group || practice; (groups[g] = groups[g] || []).push(r); });
    const rank = items => items[0].real ? 0 : items[0].group ? 1 : 2;
    const ordered = Object.entries(groups).sort((a, b) => rank(a[1]) - rank(b[1]));
    app.innerHTML = `
      <h1>📖 Læsning <span class="tag">${META().name} · ${META().cefr}</span></h1>
      <p class="muted">${esc(META().readingIntro)}</p>
      ${ordered.map(([g, items]) => `
        <h2 style="margin-top:24px">${items[0].real ? '<span class="tag real">Rigtig prøve</span> ' : ""}${esc(g)}</h2>
        <div class="stack">
          ${items.map(r => {
            const res = S.reading[r.id];
            const sc = res ? `<span class="score-badge ${res.best === res.total ? "full" : ""}">${res.best}/${res.total}</span>` : `<span class="score-badge">Ny</span>`;
            return `<a class="list-item" href="#/reading/${r.id}">
              <span class="ico">${r.real ? "🏛️" : r.group ? "📝" : "📰"}</span>
              <span class="meta"><b>${esc(r.title)}</b><span class="small muted">${esc(r.kind)}${r.minutes ? ` · ca. ${r.minutes} min` : ""} · <span class="stars">${"★".repeat(r.level || 1)}${"☆".repeat(3 - (r.level || 1))}</span></span></span>
              ${sc}
            </a>`;
          }).join("")}
        </div>`).join("")}`;
  }

  // exam (optional): { header: () => html, done: (score, total) => {} } – used by the mock exam.
  function readingItem(id, exam) {
    const r = findItem("READING", id);
    if (!r) return readingList();
    const answers = {}; // key -> value
    let checked = false;
    const gapQ = r.questions.find(q => q.type === "gaps");
    const exampleKeys = gapQ ? Object.values(gapQ.example || {}) : [];
    const gapOptions = gapQ && gapQ.bank ? gapQ.bank.map(b => b.key).filter(k => !exampleKeys.includes(k)) : [];

    // Three kinds of gap task: one shared word/sentence bank (bank), own A-D choices per gap (choices),
    // or an open gap where you write one word yourself (open; answers are lists of accepted words).
    const gapHtml = n => {
      if (!gapQ) return "____";
      if (gapQ.example && gapQ.example[n] !== undefined) return `<span class="gap-label">(${n})</span><span class="example-fill">${esc(gapQ.example[n])}</span>`;
      if (gapQ.open) return `<span class="gap-label">(${n})</span><input class="gap open" data-key="g${n}" aria-label="Hul ${n}" autocomplete="off" autocapitalize="off" spellcheck="false">`;
      const opts = gapQ.choices ? gapQ.choices[n] : gapOptions;
      return `<span class="gap-label">(${n})</span><select class="gap" data-key="g${n}" aria-label="Hul ${n}"><option value="">…</option>${opts.map(o => `<option>${esc(o)}</option>`).join("")}</select>`;
    };

    const sectionsHtml = (r.sections || []).map(sec => `
      <h3 class="sec-h">${esc(sec.heading)}</h3>
      <div class="mini-cards">${sec.cards.map(c => `
        <div class="mini-card"><h4>${esc(c.title)}</h4>${c.sub ? `<div class="sub">${esc(c.sub)}</div>` : ""}${esc(c.body)}${c.facts ? `<div class="facts">${esc(c.facts)}</div>` : ""}</div>`).join("")}
      </div>${sec.source ? `<p class="small muted" style="margin-top:8px">${esc(sec.source)}</p>` : ""}`).join("");

    // Gap tasks: the word/sentence bank sits above the text so it stays in view while choosing.
    const solo = r.questions.every(q => q.type === "gaps");
    const bankHtml = gapQ && gapQ.bank ? `<div class="bankbox ${gapQ.bank.every(b => b.key === b.text) ? "" : "sentences"}">
        <b class="small">${gapQ.bank.every(b => b.key === b.text) ? "Ord i rammen" : "Sætninger"}</b>
        ${gapQ.bank.every(b => b.key === b.text)
          ? `<div class="bank used" id="bank">${gapQ.bank.map(b => `<span data-w="${esc(b.key)}" class="${exampleKeys.includes(b.key) ? "used" : ""}">${esc(b.text)}</span>`).join("")}</div>`
          : `<div class="sentence-bank">${gapQ.bank.map(b => `<div><b>${esc(b.key)}</b>${esc(b.text)}${exampleKeys.includes(b.key) ? ' <span class="tag">eksempel</span>' : ""}</div>`).join("")}</div>`}
      </div>` : "";

    let qn = 0;
    const qHtml = r.questions.map((q, qi) => {
      if (q.type === "gaps") return `<div class="fb" id="fb-gaps"></div>`;
      if (q.type === "match") {
        return `<div class="q"><div class="qtext">${esc(q.q)}</div><div class="match">
          ${q.items.map((it, ii) => `<div class="mrow">
            <span>${it.n !== undefined ? `<span class="num">${it.n}</span>` : ""}${esc(it.text)}</span>
            ${it.example ? `<span class="example-fill" style="text-align:center">${esc(it.answer)}</span>` :
              `<select data-key="m${qi}-${ii}" aria-label="Svar"><option value="">…</option>${q.options.map(o => `<option>${esc(o)}</option>`).join("")}</select>`}
          </div><div class="fb" id="fb-m${qi}-${ii}"></div>`).join("")}
        </div></div>`;
      }
      qn++;
      const num = q.n !== undefined ? q.n : qn;
      const head = `<div class="qtext"><span class="num">${num}</span>${esc(q.q)} ${q.extra ? '<span class="tag">ekstra</span>' : ""}</div>`;
      if (q.type === "mc") {
        return `<div class="q">${head}<div class="choices">${q.options.map((o, oi) =>
          `<button class="choice" data-key="q${qi}" data-val="${oi}"><span class="key">${"abc"[oi] || oi + 1}</span>${esc(o)}</button>`).join("")}</div><div class="fb" id="fb-q${qi}"></div></div>`;
      }
      if (q.type === "tf") {
        return `<div class="q">${head}<div class="tf">${[["R", "Rigtigt"], ["F", "Forkert"], ["S", "Står ikke i teksten"]].map(([v, l]) =>
          `<button class="choice" data-key="q${qi}" data-val="${v}">${l}</button>`).join("")}</div><div class="fb" id="fb-q${qi}"></div></div>`;
      }
      if (q.type === "short") {
        return `<div class="q">${head}<input class="short" data-key="q${qi}" autocomplete="off" placeholder="Skriv dit svar …"><div class="fb" id="fb-q${qi}"></div></div>`;
      }
      return "";
    }).join("");

    app.innerHTML = `
      ${exam ? exam.header() : `<a class="back" href="#/reading">← Alle læseopgaver</a>`}
      <div class="row"><h1 style="margin:0">${esc(r.title)}</h1></div>
      <p class="muted">${r.real ? `<span class="tag real">Rigtig prøve · ${esc(r.group.replace("PD2 ", ""))}</span> ` : ""}${esc(r.kind)}</p>
      ${exam ? "" : `<div class="row" style="margin-bottom:16px">
        ${r.minutes ? `<button class="btn ghost sm" id="timerBtn">⏱️ Start prøvetid (${r.minutes} min)</button><span class="timer" id="timer"></span>` : ""}
      </div>`}
      <div class="reader ${solo ? "solo" : ""}">
        <div class="card text">
          ${r.instruction ? `<div class="instruction">${esc(r.instruction)}</div>` : ""}
          ${exam ? "" : readingEnBtn(r, "text")}
          ${r.note ? `<p class="note" style="margin-top:10px">${esc(r.note)}</p>` : ""}
          ${bankHtml}
          <div style="margin-top:14px">${r.text ? fmtText(r.text, gapHtml) : ""}${sectionsHtml}</div>
        </div>
        <div class="card">
          ${solo ? "" : `<div class="row" style="justify-content:space-between;align-items:center"><h2 style="margin:0">Spørgsmål</h2>${exam ? "" : readingEnBtn(r, "q")}</div>`}
          ${qHtml}
          <div class="row" style="margin-top:18px">
            <button class="btn read" id="check">${exam ? "Aflevér og gå videre →" : "Tjek svar"}</button>
            <button class="btn ghost" id="retry" hidden>Prøv igen</button>
          </div>
          <div id="result" style="margin-top:16px"></div>
        </div>
      </div>`;

    // Interactions
    $$(".choice[data-key]").forEach(b => b.onclick = () => {
      if (checked) return;
      const k = b.dataset.key;
      answers[k] = b.dataset.val;
      $$(`.choice[data-key="${k}"]`).forEach(x => x.classList.toggle("sel", x === b));
    });
    $$("select[data-key], input.short, input.gap").forEach(el => el.oninput = () => {
      answers[el.dataset.key] = el.value;
      if (el.classList.contains("gap")) markBank();
    });
    function markBank() {
      const bank = $("#bank");
      if (!bank) return;
      const used = new Set(exampleKeys.concat($$("select.gap").map(s => s.value).filter(Boolean)));
      bank.classList.add("used");
      $$("span", bank).forEach(s => s.classList.toggle("used", used.has(s.dataset.w)));
    }

    const timerBtn = $("#timerBtn");
    if (timerBtn) timerBtn.onclick = () => {
      let left = r.minutes * 60;
      timerBtn.disabled = true;
      const t = $("#timer");
      t.textContent = fmtTime(left);
      every(1000, () => {
        left--;
        t.textContent = left > 0 ? fmtTime(left) : "Tiden er gået!";
        t.classList.toggle("low", left < 120);
        if (left === 0) toast("⏰ Tiden er gået – tjek dine svar!");
      });
    };

    $("#check").onclick = () => {
      checked = true;
      let score = 0, total = 0, mainScore = 0, mainTotal = 0;
      const tally = (ok, extra) => { total++; if (ok) score++; if (!extra) { mainTotal++; if (ok) mainScore++; } };
      const wrongItems = []; // for "Mine fejl"
      r.questions.forEach((q, qi) => {
        if (q.type === "gaps") {
          let wrong = [];
          Object.entries(q.answers).forEach(([n, a]) => {
            const sel = $(`[data-key="g${n}"]`);
            const ok = q.open ? [].concat(a).some(x => norm(x) === norm(sel.value)) : sel.value === a;
            sel.classList.add(ok ? "ok" : "bad"); sel.disabled = true;
            if (!ok) { wrong.push(`(${n}) ${[].concat(a)[0]}`); wrongItems.push({ q: `Hul ${n}`, a: [].concat(a)[0] }); }
            tally(ok);
          });
          const fb = $("#fb-gaps");
          fb.className = "fb " + (wrong.length ? "bad" : "ok");
          fb.textContent = wrong.length ? "Rigtige svar: " + wrong.join(", ") : "Alle huller er rigtige!";
        } else if (q.type === "match") {
          q.items.forEach((it, ii) => {
            if (it.example) return;
            const sel = $(`select[data-key="m${qi}-${ii}"]`);
            const ok = sel.value === it.answer;
            sel.classList.add(ok ? "ok" : "bad"); sel.disabled = true;
            const fb = $(`#fb-m${qi}-${ii}`);
            if (!ok) { fb.className = "fb bad"; fb.textContent = `Rigtigt svar: ${it.answer}`; wrongItems.push({ q: (it.n !== undefined ? it.n + ". " : "") + it.text, a: it.answer }); }
            tally(ok);
          });
        } else {
          const v = answers["q" + qi];
          const fb = $(`#fb-q${qi}`);
          let ok, correctText;
          if (q.type === "mc") { ok = String(v) === String(q.answer); correctText = q.options[q.answer]; }
          else if (q.type === "tf") { ok = v === q.answer; correctText = { R: "Rigtigt", F: "Forkert", S: "Står ikke i teksten" }[q.answer]; }
          else { ok = !!v && q.accept.some(a => norm(v) === norm(a)); correctText = q.accept[0].replace(/\b\p{L}/u, c => c.toUpperCase()); }
          if (q.type === "short") { const inp = $(`input[data-key="q${qi}"]`); inp.classList.add(ok ? "ok" : "bad"); inp.disabled = true; }
          $$(`.choice[data-key="q${qi}"]`).forEach(b => {
            const isAns = q.type === "mc" ? +b.dataset.val === q.answer : b.dataset.val === q.answer;
            if (isAns) b.classList.add("ok"); else if (b.classList.contains("sel")) b.classList.add("bad");
          });
          fb.className = "fb " + (ok ? "ok" : "bad");
          fb.textContent = ok ? "✓ Rigtigt" : `✗ Rigtigt svar: ${correctText}`;
          if (!ok) wrongItems.push({ q: (q.n !== undefined ? q.n + ". " : "") + q.q, a: correctText });
          tally(ok, q.extra);
        }
      });

      if (wrongItems.length) S.mistakes.reading[r.id] = { date: today(), items: wrongItems.slice(0, 15) };
      else delete S.mistakes.reading[r.id];
      bump("reading");
      if (exam) { save(); exam.done(mainScore, mainTotal); return; }
      const prev = S.reading[r.id];
      const isNewBest = !prev || score > prev.best;
      S.reading[r.id] = { best: Math.max(score, prev ? prev.best : 0), total };
      touchDay();
      award("first_read");
      if (score === total) { award("perfect"); confetti(); }
      const xp = isNewBest ? score * 10 - (prev ? prev.best * 10 : 0) + 10 : 5;
      addXP(xp, isNewBest ? "læsning" : "repetition");
      const real = PD2.EXAMS.pd2.READING.filter(x => x.group && x.group.startsWith("PD2"));
      if (real.every(x => S.reading[x.id])) award("exam2020");
      save();

      const pct = score / total;
      const msg = pct === 1 ? "Perfekt! 🎉" : pct >= .8 ? "Rigtig flot! 💪" : pct >= .5 ? "Godt gået – læs fejlene igennem. 👍" : "Godt forsøg! Prøv igen. 🌱";
      $("#result").innerHTML = `<div class="result">
        <div class="big">${score}/${total}</div>
        ${mainTotal !== total ? `<p class="small muted">Prøvespørgsmål: ${mainScore}/${mainTotal} · ekstra: ${score - mainScore}/${total - mainTotal}</p>` : ""}
        <p style="margin:0;font-weight:800">${msg}</p></div>`;
      $("#check").hidden = true;
      $("#retry").hidden = false;
      $("#result").scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    $("#retry").onclick = () => readingItem(id);
  }

  // ---------- Writing ----------
  // EN buttons open a pop-up with an English translation (writing tasks, model answers, reading tasks).
  const taskEnBtn = w => PD2.TASK_EN && PD2.TASK_EN[w.id]
    ? `<button class="btn ghost sm task-en-btn" data-task-en="${esc(w.id)}" aria-haspopup="dialog">🇬🇧 EN</button>` : "";
  const allWriting = () => Object.values(PD2.EXAMS).flatMap(e => e.WRITING);
  function openEnPop(title, bodyHtml) {
    closeTaskEn();
    const box = document.createElement("div");
    box.className = "pop-overlay"; box.id = "taskEnPop";
    box.innerHTML = `<div class="pop" role="dialog" aria-modal="true" aria-label="English translation" lang="en">
        <button class="pop-x" aria-label="Close">✕</button>
        <h3>🇬🇧 ${esc(title)}</h3>${bodyHtml}
        <div class="row" style="justify-content:flex-end"><button class="btn write sm pop-ok">OK</button></div>
      </div>`;
    document.body.appendChild(box);
    box.onclick = e => { if (e.target === box || e.target.closest(".pop-x,.pop-ok")) closeTaskEn(); };
    $(".pop-ok", box).focus();
  }
  const enParas = t => t.split(/\n\s*\n/).map(p => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("");
  function showTaskEn(id) {
    const w = allWriting().find(x => x.id === id), t = PD2.TASK_EN[id];
    if (t) openEnPop(`${w ? w.title : "Task"} – in English`, `<p>${esc(t.s)}</p>
        <h4>You must write about:</h4><ul>${t.p.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`);
  }
  function showModelEn(id) {
    const w = allWriting().find(x => x.id === id), en = PD2.MODEL_EN && PD2.MODEL_EN[id];
    if (en) openEnPop(`${w ? w.title : ""} – model answer in English`, `<div class="pop-model">${enParas(en)}</div>`);
  }
  // Reading: part "text" = instruction + text/sections, part "q" = the questions.
  function showReadingEn(id, part) {
    const r = Object.values(PD2.EXAMS).flatMap(e => e.READING).find(x => x.id === id), t = PD2.READING_EN && PD2.READING_EN[id];
    if (!r || !t) return;
    const gapsEn = s => esc(s).replace(/\[\[(\d+)\]\]/g, '<b class="gap-en">($1) ____</b>');
    if (part === "text") {
      const secs = (t.sections || []).map(sec => `<h4>${esc(sec.heading || "")}</h4>${(sec.cards || []).map(c =>
        `<div class="pop-card"><b>${esc(c.title || "")}</b>${c.sub ? `<div class="small muted">${esc(c.sub)}</div>` : ""}<div>${esc(c.body || "")}</div>${c.facts ? `<div class="small">${esc(c.facts)}</div>` : ""}</div>`).join("")}`).join("");
      const text = t.text ? t.text.split(/\n\s*\n/).map(p => `<p>${gapsEn(p).replace(/\n/g, "<br>")}</p>`).join("") : "";
      openEnPop(`${t.title || r.title} – text in English`, `${t.instruction ? `<p class="pop-instr">${esc(t.instruction)}</p>` : ""}${text}${secs}`);
    } else {
      let qn = 0;
      const items = r.questions.map((q, i) => {
        const e = (t.questions || [])[i] || {};
        if (q.type === "gaps") return "";
        if (q.type === "match") return `<li class="pop-q"><b>${esc(e.q || "")}</b><ul>${(e.items || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul></li>`;
        qn++;
        const num = q.n !== undefined ? q.n : qn;
        const opts = e.options ? `<ol type="a">${e.options.map(o => `<li>${esc(o)}</li>`).join("")}</ol>`
          : q.type === "tf" ? `<div class="small muted">True / False / Not in the text</div>` : "";
        return `<li class="pop-q" value="${num}">${esc(e.q || "")}${opts}</li>`;
      }).join("");
      openEnPop(`${t.title || r.title} – questions in English`, items ? `<ol class="pop-qs">${items}</ol>` : `<p>${esc(t.instruction || "")}</p>`);
    }
  }
  const readingEnBtn = (r, part) => PD2.READING_EN && PD2.READING_EN[r.id]
    ? `<button class="btn ghost sm task-en-btn" data-reading-en="${esc(r.id)}" data-part="${part}" aria-haspopup="dialog">🇬🇧 EN</button>` : "";
  function closeTaskEn() { const b = $("#taskEnPop"); if (b) b.remove(); }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-task-en],[data-model-en],[data-reading-en]");
    if (!b) return;
    e.preventDefault();
    if (b.dataset.taskEn) showTaskEn(b.dataset.taskEn);
    else if (b.dataset.modelEn) showModelEn(b.dataset.modelEn);
    else showReadingEn(b.dataset.readingEn, b.dataset.part);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeTaskEn(); });
  window.addEventListener("hashchange", closeTaskEn);

  function writingList() {
    const by = d => EX().WRITING.filter(w => w.delprove === d);
    const item = w => {
      const res = S.writing[w.id];
      const sc = res && res.best ? `<span class="score-badge full">${res.best}</span>` : res && res.draft ? `<span class="score-badge">Kladde</span>` : `<span class="score-badge">Ny</span>`;
      return `<a class="list-item" href="#/writing/${w.id}">
        <span class="ico">${w.real ? "🏛️" : w.delprove === 1 ? "✉️" : "📝"}</span>
        <span class="meta"><b>${esc(w.title)}</b>${w.real ? ' <span class="tag real">Rigtig prøve</span>' : ""}<span class="small muted">${esc(w.kind)} · ${w.minWords}-${w.maxWords} ord</span></span>${sc}</a>`;
    };
    app.innerHTML = `
      <h1>✍️ Skrivning <span class="tag">${META().name} · ${META().cefr}</span></h1>
      <p class="muted">Skriv din tekst, få live-feedback fra skrivecoachen, og bedøm dig selv med de samme kriterier som censor bruger.
      Ordantallene er vejledende øvemål. Følg altid instruktionen på din egen prøve.</p>
      ${EX().WRITING.some(w => w.tpl) ? `<a class="task write tpl-link" href="#/writing/skabeloner">
        <span class="emoji">📋</span>
        <h2>Skabeloner – lær dem udenad</h2>
        <p class="muted" style="margin:0">Én fast start, faste afsnit og én fast slutning til hver teksttype: ${esc(Object.values(PD2.TEMPLATES).filter(t => EX().WRITING.some(w => w.tpl === t.id)).map(t => t.name.toLowerCase()).join(", "))}. Lær dem, så skriver du hurtigere og sikrere til prøven.</p>
      </a>` : ""}
      ${[1, 2].map(d => `
        <h2 style="margin-top:22px">${esc(META().writingParts[d])}</h2>
        <div class="stack">${by(d).map(item).join("")}</div>`).join("")}`;
  }

  const GREET = /^\s*(hej|kære|til|goddag|dav|hejsa)\b/i;
  const CLOSE = /(hilsen|mvh|kh\b|knus|vh\b)/i;
  const isLetter = w => /mail|klage|ansøgning|brev|afbud/i.test(w.kind + " " + w.title);

  function analyse(text, w) {
    const words = countWords(text);
    const sentences = text.split(/[.!?]+(?:\s|$)/).map(s => s.trim()).filter(s => countWords(s) > 0);
    const paras = text.split(/\n\s*\n/).filter(p => p.trim()).length;
    const lower = " " + text.toLowerCase().replace(/[^a-zæøå\s]/g, " ").replace(/\s+/g, " ") + " ";
    const conns = PD2.CONNECTORS.filter(c => lower.includes(" " + c + " "));
    const capErr = (text.match(/[.!?]\s+[a-zæøå]/g) || []).length;
    const jegStarts = sentences.filter(s => /^jeg\b/i.test(s)).length;
    const avg = sentences.length ? words / sentences.length : 0;
    const checks = [];
    const inRange = words >= w.minWords && words <= w.maxWords;
    checks.push([inRange ? "ok" : words < w.minWords ? "warn" : "warn", inRange ? `Ordantal: ${words} – perfekt!` : words < w.minWords ? `Ordantal: ${words} – skriv mindst ${w.minWords}.` : `Ordantal: ${words} – lidt for langt (mål: ${w.maxWords}).`]);
    if (isLetter(w)) {
      checks.push([GREET.test(text) ? "ok" : "warn", GREET.test(text) ? "Du starter med en hilsen." : "Start med en hilsen, fx \"Kære …\" eller \"Hej …\"."]);
      checks.push([CLOSE.test(text.slice(-80)) ? "ok" : "warn", CLOSE.test(text.slice(-80)) ? "Du slutter med en hilsen." : "Slut af med fx \"Venlig hilsen\" og dit navn."]);
    }
    checks.push([conns.length >= 4 ? "ok" : "warn", conns.length >= 4 ? `Godt med bindeord (${conns.length} forskellige).` : `Brug flere bindeord (${conns.length} fundet). Prøv fordi, derfor, selvom, desuden.`]);
    if (words > 40) {
      checks.push([paras >= 3 ? "ok" : "warn", paras >= 3 ? `${paras} afsnit – god struktur.` : "Del teksten op i afsnit (lav en tom linje mellem afsnit)."]);
      checks.push([capErr === 0 ? "ok" : "warn", capErr === 0 ? "Store bogstaver efter punktum ser fine ud." : `${capErr} sted(er) mangler stort bogstav efter punktum.`]);
      if (sentences.length >= 4) checks.push([jegStarts / sentences.length <= .4 ? "ok" : "warn", jegStarts / sentences.length <= .4 ? "God variation i sætningsstarter." : "Mange sætninger starter med \"Jeg\". Prøv inversion: \"I weekenden spiser jeg …\"."]);
      checks.push([avg <= 22 ? "ok" : "warn", avg <= 22 ? `Sætningslængde: ca. ${Math.round(avg)} ord – fint.` : "Dine sætninger er meget lange. Del nogle af dem op."]);
    }
    const tpl = w.tpl && PD2.TEMPLATES[w.tpl];
    if (tpl && words > 20) {
      const low = text.toLowerCase(), used = tpl.marks.filter(m => low.includes(m.toLowerCase())).length;
      const enough = used >= Math.ceil(tpl.marks.length * 0.6);
      checks.push([enough ? "ok" : "warn", enough ? `Skabelonen: du bruger ${used} af ${tpl.marks.length} faste vendinger.` : `Skabelonen: ${used} af ${tpl.marks.length} faste vendinger. Tryk på "Vis skabelon" og brug den faste start og slutning.`]);
    }
    return { words, conns, checks };
  }

  const RUBRIC = {
    1: [["Instruktionen fulgt", "instr"], ["Pragmatisk færdighed", "s"], ["Diskursiv færdighed", "s"], ["Ordvalg", "s"], ["Syntaks", "s"], ["Morfologi", "s"], ["Retskrivning", "s"]],
    2: [["Instruktionen fulgt", "instr"], ["Pragmatisk færdighed", "s"], ["Retorisk organisering", "s"], ["Kohærens", "s"], ["Kohæsion", "s"], ["Ordvalg", "s"], ["Syntaks", "s"], ["Morfologi", "s"], ["Retskrivning", "s"]]
  };
  const RUBRIC_HELP = {
    "Pragmatisk færdighed": "Når teksten sit formål? Passer tonen til modtageren?",
    "Diskursiv færdighed": "Hænger teksten sammen, og er den let at følge?",
    "Retorisk organisering": "Indledning, midte og afslutning? Afsnit?",
    "Kohærens": "Er der en rød tråd i indholdet?",
    "Kohæsion": "Bruger du bindeord og henvisninger (den, det, derfor)?",
    "Ordvalg": "Passende og varierede ord?",
    "Syntaks": "Ordstilling: inversion, ledsætninger, placering af ikke.",
    "Morfologi": "Bøjning: en/et, flertal, verbernes tider.",
    "Retskrivning": "Stavning og tegnsætning."
  };
  const SCALE = ["Ringe", "Acceptabel", "God", "Særdeles god"];
  const INSTR = [["Nej", 0], ["Delvis", 1.5], ["Ja", 3]];
  function toGrade(a) {
    if (a >= 2.75) return "12"; if (a >= 2.3) return "10"; if (a >= 1.8) return "7";
    if (a >= 1.3) return "4"; if (a >= 0.9) return "02"; if (a >= 0.4) return "00"; return "-3";
  }

  function writingItem(id) {
    const w = findItem("WRITING", id);
    if (!w) return writingList();
    const st = S.writing[w.id] = S.writing[w.id] || { draft: "", ticks: [] };
    st.ticks = st.ticks || [];
    app.innerHTML = `
      <a class="back" href="#/writing">← Alle skriveopgaver</a>
      <h1>${esc(w.title)}</h1>
      <p class="muted">${w.real ? `<span class="tag real">Rigtig prøveopgave${w.set ? ` · Sæt ${w.set}` : ""}</span> ` : ""}<span class="tag">Delprøve ${w.delprove}</span> ${esc(w.kind)} · mål: ${w.minWords}-${w.maxWords} ord</p>
      <div class="writer">
        <div class="stack">
          <div class="card">
            <div class="instruction" style="background:var(--write-soft)">${esc(w.situation)}</div>
            <h3 style="margin-top:14px">Du skal skrive om:</h3>
            ${w.points.map((p, i) => `<label class="tick"><input type="checkbox" data-tick="${i}" ${st.ticks.includes(i) ? "checked" : ""}> <span>${esc(p)}</span></label>`).join("")}
            ${taskEnBtn(w)}
          </div>
          <div class="card">
            <div class="row" style="margin-bottom:8px">
              <b id="wc">0 ord</b><span class="spacer"></span>
              <button class="btn ghost sm" id="wtimer">⏱️ Start ${META().writingMinutes || 30} min</button><span class="timer" id="wtime"></span>
            </div>
            <div class="wordbar" style="margin-bottom:12px"><div class="zone" id="zone"></div><div class="fill" id="fill"></div></div>
            <textarea class="editor" id="editor" spellcheck="true" lang="da" placeholder="Skriv din tekst her …">${esc(st.draft || "")}</textarea>
            <div class="row" style="margin-top:12px">
              <button class="btn write" id="grade">Bedøm min tekst</button>
              ${w.tpl ? `<button class="btn ghost" id="showTpl">📋 Vis skabelon</button>` : ""}
              <button class="btn ghost" id="showModel">👀 Vis modelsvar</button>
              <span class="spacer"></span>
              <span class="small muted" id="saved"></span>
            </div>
          </div>
          <div id="tplBox"></div>
          <div id="gradeBox"></div>
          <div id="modelBox"></div>
        </div>
        <div class="stack">
          <div class="card">
            <h3>🧑‍🏫 Skrivecoach</h3>
            <ul class="checks" id="checks"></ul>
          </div>
          <div class="card">
            <h3>🔗 Bindeord du har brugt</h3>
            <div class="chips" id="conns"></div>
          </div>
          <div class="card">
            <h3>💬 Nyttige vendinger</h3>
            <p class="small muted">Klik for at indsætte i teksten.</p>
            <div class="chips">${w.phrases.map(p => `<button class="chip" data-phrase="${esc(p)}">${esc(p)}</button>`).join("")}</div>
          </div>
        </div>
      </div>`;

    const ed = $("#editor");
    const zone = $("#zone"), fill = $("#fill");
    const maxScale = w.maxWords * 1.25;
    zone.style.left = (w.minWords / maxScale * 100) + "%";
    zone.style.width = ((w.maxWords - w.minWords) / maxScale * 100) + "%";
    let saveT;
    function update() {
      const a = analyse(ed.value, w);
      $("#wc").textContent = `${a.words} ord`;
      fill.style.width = Math.min(100, a.words / maxScale * 100) + "%";
      $("#checks").innerHTML = a.checks.map(([k, t]) => `<li><span class="i">${k === "ok" ? "✅" : "💡"}</span><span>${esc(t)}</span></li>`).join("");
      $("#conns").innerHTML = PD2.CONNECTORS.slice(0, 16).map(c => `<span class="chip ${a.conns.includes(c) ? "on" : ""}">${esc(c)}</span>`).join("");
      clearTimeout(saveT);
      saveT = setTimeout(() => { st.draft = ed.value; save(); const sv = $("#saved"); if (sv) sv.textContent = "Kladde gemt ✓"; }, 500);
    }
    ed.oninput = update;
    update();
    onLeave(() => { clearTimeout(saveT); st.draft = ed.value; save(); });

    $$("[data-tick]").forEach(cb => cb.onchange = () => {
      const i = +cb.dataset.tick;
      st.ticks = cb.checked ? [...new Set(st.ticks.concat(i))] : st.ticks.filter(x => x !== i);
      save();
    });
    $$("[data-phrase]").forEach(b => b.onclick = () => {
      const p = b.dataset.phrase, s = ed.selectionStart, e = ed.selectionEnd;
      const before = ed.value.slice(0, s);
      const pad = before && !/\s$/.test(before) ? " " : "";
      ed.value = before + pad + p + " " + ed.value.slice(e);
      ed.focus();
      ed.selectionStart = ed.selectionEnd = s + pad.length + p.length + 1;
      update();
    });

    $("#wtimer").onclick = () => {
      let left = (META().writingMinutes || 30) * 60;
      $("#wtimer").disabled = true;
      every(1000, () => {
        left--;
        const t = $("#wtime");
        t.textContent = left > 0 ? fmtTime(left) : "Tiden er gået!";
        t.classList.toggle("low", left < 300);
      });
    };

    const tpl = w.tpl && PD2.TEMPLATES[w.tpl];
    // Sample answer and template are hidden until asked for; the buttons toggle them.
    $("#showModel").onclick = e => {
      const box = $("#modelBox"), b = e.currentTarget;
      if (box.innerHTML) { box.innerHTML = ""; b.textContent = "👀 Vis modelsvar"; return; }
      box.innerHTML = `<div class="card"><h3>Modelsvar <span class="muted small">(${countWords(w.model)} ord)</span></h3>
        ${tpl ? `<p class="small muted">Følger skabelonen <b>${esc(tpl.name)}</b>. <mark class="fixed">Markeret</mark> = faste vendinger, som du kan lære udenad.</p>` : ""}
        ${PD2.MODEL_EN && PD2.MODEL_EN[w.id] ? `<div class="row" style="margin-bottom:10px"><button class="btn ghost sm" id="showTr">🇬🇧 Vis oversættelse</button><button class="btn ghost sm" data-model-en="${esc(w.id)}" aria-haspopup="dialog">🇬🇧 EN</button></div>` : ""}
        <div class="model" id="modelText">${tpl ? markFixed(w.model, tpl) : esc(w.model)}</div></div>`;
      const trb = $("#showTr");
      if (trb) trb.onclick = () => {
        const mt = $("#modelText"), on = mt.classList.toggle("paired");
        trb.textContent = on ? "🇩🇰 Kun dansk" : "🇬🇧 Vis oversættelse";
        if (!on) { mt.innerHTML = tpl ? markFixed(w.model, tpl) : esc(w.model); return; }
        // Paragraph by paragraph: Danish on the left, English on the right (stacked on phones).
        const da = w.model.split(/\n\s*\n/), en = PD2.MODEL_EN[w.id].split(/\n\s*\n/);
        mt.innerHTML = da.map((p, i) => `<div class="pair"><div class="pda">${tpl ? markFixed(p, tpl) : esc(p)}</div><div class="pen" lang="en">${esc(en[i] || "")}</div></div>`).join("");
      };
      b.textContent = "🙈 Skjul modelsvar";
      box.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    const tb = $("#showTpl");
    if (tb) tb.onclick = () => {
      const box = $("#tplBox");
      if (box.innerHTML) { box.innerHTML = ""; tb.textContent = "📋 Vis skabelon"; return; }
      box.innerHTML = `<div class="card">
        <h3>${tpl.ico} Skabelon: ${esc(tpl.name)}</h3>
        <p class="small muted">Det markerede er fast – det skriver du hver gang. <span class="ph">Det i felterne</span> udfylder du selv.</p>
        <div class="model tpl">${skeletonHtml(tpl)}</div>
        <p class="small" style="margin-top:10px">💡 ${esc(tpl.tip)}</p>
        <div class="row" style="margin-top:10px">
          <button class="btn write sm" id="useTpl">✍️ Indsæt skabelonen i teksten</button>
          <a class="btn ghost sm" href="#/writing/skabeloner/${tpl.id}">🧠 Lær den udenad</a>
        </div></div>`;
      tb.textContent = "🙈 Skjul skabelon";
      $("#useTpl").onclick = e => {
        const b = e.currentTarget;
        if (ed.value.trim() && !b.dataset.armed) { b.dataset.armed = "1"; b.textContent = "Din tekst bliver erstattet – klik igen"; return; }
        ed.value = tpl.skeleton.replace(/\[[^\]]*\]/g, "…");
        update(); ed.focus(); ed.selectionStart = ed.selectionEnd = 0;
        ed.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      box.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    $("#grade").onclick = () => {
      const words = countWords(ed.value);
      if (words < 15) { toast("Skriv lidt mere, før du bedømmer teksten."); return; }
      const rows = RUBRIC[w.delprove];
      const vals = {};
      const allTicked = st.ticks.length === w.points.length;
      vals[0] = allTicked ? 3 : st.ticks.length ? 1.5 : null;
      $("#gradeBox").innerHTML = `<div class="card">
        <h3>📋 Bedøm dig selv – som censor</h3>
        <p class="small muted">Læs din tekst igen og vær ærlig. Kriterierne er de samme som på censors bedømmerark.</p>
        <div class="rubric">${rows.map(([name, kind], i) => `
          <div class="rrow"><div><b>${esc(name)}</b>${RUBRIC_HELP[name] ? `<div class="small muted">${esc(RUBRIC_HELP[name])}</div>` : ""}</div>
          <div class="seg" data-row="${i}">${(kind === "instr" ? INSTR : SCALE.map((l, v) => [l, v])).map(([l, v]) =>
            `<button data-v="${v}" class="${vals[i] === v ? "on" : ""}">${esc(l)}</button>`).join("")}</div></div>`).join("")}
        </div>
        <div class="row" style="margin-top:14px"><button class="btn write" id="calc">Beregn karakter</button></div>
        <div id="gradeOut"></div>
      </div>`;
      $$(".seg").forEach(seg => $$("button", seg).forEach(b => b.onclick = () => {
        vals[+seg.dataset.row] = +b.dataset.v;
        $$("button", seg).forEach(x => x.classList.toggle("on", x === b));
      }));
      $("#calc").onclick = () => {
        bump("writing");
        const filled = rows.map((_, i) => vals[i]);
        if (filled.some(v => v === undefined || v === null)) { toast("Vælg en vurdering i alle rækker."); return; }
        const instr = filled[0], rest = filled.slice(1);
        let avg = rest.reduce((a, b) => a + b, 0) / rest.length;
        if (instr < 3) avg = Math.min(avg, instr === 0 ? 0.5 : 1.8); // instructions not followed caps the grade
        const g = toGrade(avg);
        $("#gradeOut").innerHTML = `<div class="result" style="margin-top:14px"><div class="grade">${g}</div>
          <p style="margin:6px 0 0;font-weight:800">Dit skøn på 7-trins-skalaen</p>
          <p class="small muted" style="margin:4px 0 0">Kun et groft skøn – få gerne din lærer til at læse teksten.</p></div>`;
        const first = !st.best;
        st.best = g; st.words = words; st.draft = ed.value; save();
        award("first_write");
        if (words >= 150) award("wordsmith");
        addXP(first ? 40 + Math.min(40, Math.floor(words / 5)) : 10, "skrivning");
        if (+g >= 7 || g === "12" || g === "10") confetti();
      };
      $("#gradeBox").scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  // ---------- Speaking ----------
  function speakingList() {
    const mono = EX().SPEAKING_MONO, dia = EX().SPEAKING_DIALOG, pics = EX().SPEAKING_PICTURE || [];
    const done = id => S.speaking.done[id] ? '<span class="score-badge full">✓</span>' : "";
    const realTag = p => p.real ? ` <span class="tag real">Emne fra prøven${p.set ? ` · Sæt ${p.set}` : ""}</span>` : "";
    const monoList = mono.map(m => `<a class="list-item" href="#/speaking/mono/${m.id}">
        <span class="ico">🎤</span><span class="meta"><b>${esc(m.title)}</b><span class="small muted">${m.points.length} stikord · ${m.followUp.length} spørgsmål</span></span>${done(m.id)}</a>`).join("");
    const picList = pics.map(p => `<a class="list-item" href="#/speaking/picture/${p.id}">
        <span class="ico">🖼️</span><span class="meta"><b>${esc(p.title)}</b>${realTag(p)}<span class="small muted">Billede · ${p.interview.length} spørgsmål · samtale</span></span>${done(p.id)}</a>`).join("");
    const diaList = dia.map(d => `<a class="list-item" href="#/speaking/dialog/${d.id}">
        <span class="ico">💬</span><span class="meta"><b>${esc(d.title)}</b><span class="small muted">${d.lines.length} replikker</span></span>${done(d.id)}</a>`).join("");
    const examFormat = pics.length > 0;
    app.innerHTML = `
      <h1>🗣️ Tale <span class="tag">${META().name} · ${META().cefr}</span></h1>
      ${pics.length ? `<a class="task speak" href="#/speaking/sim" style="display:block;margin:10px 0 18px">
        <span class="emoji">🎬</span><h2>Mundtlig prøvesimulering</h2>
        <p class="muted" style="margin:0">Begge delprøver lige efter hinanden: præsentation med spørgsmål og billede med samtale.</p></a>` : ""}
      <p class="muted">Øv dig i at tale frit. Appen kan læse spørgsmål op på dansk, optage dig og skrive det, du siger, så du kan høre og læse det bagefter.
      Live-tekst virker bedst i Chrome eller Edge.</p>
      <div class="card" style="margin-top:16px;text-align:center">
        <h2>🎲 Træk et emne</h2>
        <div class="wheel" id="wheel">Klar?</div>
        <button class="btn speak" id="spin">Træk et tilfældigt emne</button>
      </div>
      ${examFormat ? `
        <h2 style="margin-top:24px">Delprøve 1 · Præsentation og interview</h2>
        <p class="small muted">Som til prøven: Præsenter et emne i ca. 1½ minut ud fra dine egne stikord. Derefter stiller eksaminator opfølgende spørgsmål (ca. 3½ minut).</p>
        <div class="grid grid-2">${monoList}</div>
        <h2 style="margin-top:24px">Delprøve 2 · Billede og samtale</h2>
        <p class="small muted">Som til prøven: Se på billedet i ½ minut, beskriv det, og svar på spørgsmål (ca. 3 minutter). Derefter en samtale med en anden prøvedeltager (ca. 4 minutter).</p>
        <div class="grid grid-2">${picList}</div>
        <h2 style="margin-top:24px">Ekstra · Rollespil</h2>
        <p class="small muted">Eksaminator siger en replik. Du svarer. I skal blive enige.</p>
        <div class="grid grid-2">${diaList}</div>` : `
        <h2 style="margin-top:24px">Monolog + samtale</h2>
        <p class="small muted">Forbered dig, tal om emnet, og svar på opfølgende spørgsmål.</p>
        <div class="grid grid-2">${monoList}</div>
        <h2 style="margin-top:24px">Dialog</h2>
        <p class="small muted">Eksaminator siger en replik. Du svarer. I skal blive enige.</p>
        <div class="grid grid-2">${diaList}</div>`}
      <p class="small muted" style="margin-top:20px">I alt har du øvet ${S.speaking.sessions} gange og talt i ${Math.round(S.speaking.seconds / 60)} minutter.</p>`;
    $("#spin").onclick = () => {
      const wheel = $("#wheel"), btn = $("#spin");
      btn.disabled = true; wheel.classList.add("spin");
      let i = 0;
      const pool = mono.map(m => ["mono", m]).concat(pics.map(p => ["picture", p]));
      const [kind, pick] = pool[Math.floor(Math.random() * pool.length)];
      const id = setInterval(() => {
        wheel.textContent = pool[i++ % pool.length][1].title;
        if (i > 14) {
          clearInterval(id); wheel.classList.remove("spin"); wheel.textContent = "🎯 " + pick.title;
          setTimeout(() => { location.hash = `#/speaking/${kind}/${pick.id}`; }, 900);
        }
      }, 90);
      onLeave(() => clearInterval(id));
    };
  }

  // Oral self-assessment, using the criteria on the PD2 oral grading sheet.
  const Q4 = [["Ringe", 0], ["Acceptabel", 1], ["God", 2], ["Særdeles god", 3]];
  const ADQ = [["Ikke adækvat", 0], ["Delvis adækvat", 1], ["Stort set adækvat", 2], ["Adækvat", 3]];
  const REP = [["Ikke mulig", 0], ["Megen", 1], ["Nogen", 2], ["Ingen", 3]];
  const ORAL_RUBRIC = {
    1: [
      ["Opbygning og sammenhæng", "Har præsentationen en begyndelse, en midte og en slutning?", Q4],
      ["Udtale", "Er du let at forstå?", Q4],
      ["Besvarer spørgsmål", "Svarer du på det, eksaminator spørger om, og forklarer du nok?", ADQ],
      ["Reparation", "Hvor meget skal lytteren gætte, hvad du mener? (Ingen = let at forstå)", REP],
      ["Ordvalg", "Passende og varierede ord?", ADQ],
      ["Syntaks", "Ordstilling: inversion, ledsætninger, placering af ikke.", Q4],
      ["Morfologi", "Bøjning: en/et, flertal, verbernes tider.", Q4]
    ],
    2: [
      ["Beskrivelse af billedet", "Fik du beskrevet personer, sted og handling?", [["Ikke dækkende", 0], ["Nogenlunde", 1.5], ["Dækkende", 3]]],
      ["Besvarer spørgsmål", "Udtrykker og begrunder du dine synspunkter?", ADQ],
      ["Forstår samtalepartneren", "Hvor tit skulle du have spørgsmålet gentaget?", REP],
      ["Holder samtalen i gang", "Stiller du selv spørgsmål og bygger videre på det, den anden siger?", [["Slet ikke", 0], ["Stort set ikke", 1], ["Nogenlunde", 2], ["I høj grad", 3]]],
      ["Ordvalg", "Passende og varierede ord?", ADQ],
      ["Syntaks", "Ordstilling: inversion, ledsætninger, placering af ikke.", Q4],
      ["Morfologi", "Bøjning: en/et, flertal, verbernes tider.", Q4],
      ["Udtale", "Er du let at forstå?", Q4]
    ]
  };
  function oralRubric(part) {
    const rows = ORAL_RUBRIC[part], vals = {};
    const box = document.createElement("div");
    box.className = "oral-rubric";
    box.innerHTML = `<h3 style="margin-top:20px">📋 Bedøm dig selv – som censor</h3>
      <p class="small muted">Lyt til din optagelse, og vær ærlig. Kriterierne er de samme som på censors bedømmerark til den mundtlige prøve.</p>
      <div class="rubric" style="text-align:left">${rows.map(([name, help, opts], i) => `
        <div class="rrow"><div><b>${esc(name)}</b><div class="small muted">${esc(help)}</div></div>
        <div class="seg" data-row="${i}">${opts.map(([l, v]) => `<button type="button" data-v="${v}">${esc(l)}</button>`).join("")}</div></div>`).join("")}
      </div>
      <div class="row" style="justify-content:center;margin-top:14px"><button type="button" class="btn speak" data-calc>Beregn karakter</button></div>
      <div data-out></div>`;
    $$(".seg", box).forEach(seg => $$("button", seg).forEach(b => b.onclick = () => {
      vals[+seg.dataset.row] = +b.dataset.v;
      $$("button", seg).forEach(x => x.classList.toggle("on", x === b));
    }));
    $("[data-calc]", box).onclick = () => {
      if (rows.some((_, i) => vals[i] === undefined)) { toast("Vælg en vurdering i alle rækker."); return; }
      const avg = rows.reduce((a, _, i) => a + vals[i], 0) / rows.length;
      const g = toGrade(avg);
      $("[data-out]", box).innerHTML = `<div class="result" style="margin-top:14px"><div class="grade" style="color:var(--speak)">${g}</div>
        <p style="margin:6px 0 0;font-weight:800">Dit skøn på 7-trins-skalaen</p>
        <p class="small muted" style="margin:4px 0 0">Kun et groft skøn – øv gerne med en lærer eller en ven.</p></div>`;
      if (["12", "10", "7"].includes(g)) confetti();
    };
    return box;
  }

  function finishSpeaking(id, seconds, isDialog) {
    S.speaking.sessions++;
    bump("speaking");
    S.speaking.seconds += Math.round(seconds);
    const first = !S.speaking.done[id];
    S.speaking.done[id] = true;
    award("first_speak");
    if (isDialog) award("dialog");
    addXP(first ? 50 : 20, "tale");
    confetti();
  }

  function speakingMono(id) {
    const m = findItem("SPEAKING_MONO", id);
    if (!m) return speakingList();
    let prepMin = 3, talkMin = (META().talkSeconds || 180) / 60;
    const fmtMin = v => String(v).replace(".5", ",5");
    const FQ = { opklarende: "Opklarende spørgsmål", uddybende: "Uddybende spørgsmål", begrundelse: "Begrund dit svar", generalisering: "Generelt spørgsmål" };
    const qText = f => typeof f === "string" ? f : f.q;
    let phase = "setup", qi = 0, talked = 0;
    const steps = ["Forbered", "Tal", "Spørgsmål", "Feedback"];
    let rec = null, audioUrl = null, transcript = "";

    function shell(inner, stepIdx) {
      app.innerHTML = `
        <a class="back" href="#/speaking">← Alle taleopgaver</a>
        <h1>🎤 ${esc(m.title)}</h1>
        <div class="card stage">
          <div class="steps">${steps.map((s, i) => `<span class="${i === stepIdx ? "on" : i < stepIdx ? "done" : ""}">${i + 1}. ${s}</span>`).join("")}</div>
          ${inner}
        </div>`;
    }

    function setup() {
      shell(`
        <span class="phase">Klar, parat …</span>
        <h2 style="margin-top:12px">Du skal tale om: ${esc(m.title)}</h2>
        <ul class="points-list">${m.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        <div class="row" style="justify-content:center;margin:18px 0;gap:24px">
          <span>Forberedelse: <span class="stepper"><button data-a="prep" data-d="-1" aria-label="Mindre">−</button><b id="prep">${prepMin}</b> min<button data-a="prep" data-d="1" aria-label="Mere">+</button></span></span>
          <span>Taletid: <span class="stepper"><button data-a="talk" data-d="-1" aria-label="Mindre">−</button><b id="talk">${fmtMin(talkMin)}</b> min<button data-a="talk" data-d="1" aria-label="Mere">+</button></span></span>
        </div>
        ${META().talkSeconds ? `<p class="small muted">Til prøven: præsentation i ca. 1½ minut. Du må bruge stikord, men ikke læse op fra en tekst.</p>` : ""}
        <button class="btn speak" id="go">Start forberedelse</button>
        <button class="btn ghost" id="skip">Spring over – tal nu</button>`, 0);
      $$(".stepper button").forEach(b => b.onclick = () => {
        if (b.dataset.a === "prep") prepMin = Math.max(0, Math.min(15, prepMin + +b.dataset.d));
        else talkMin = Math.max(0.5, Math.min(10, talkMin + b.dataset.d * 0.5));
        $("#prep").textContent = prepMin; $("#talk").textContent = fmtMin(talkMin);
      });
      $("#go").onclick = prep;
      $("#skip").onclick = talk;
    }

    function prep() {
      let left = prepMin * 60;
      shell(`
        <span class="phase">Forberedelse</span>
        <div class="clock" id="clock">${fmtTime(left)}</div>
        <ul class="points-list">${m.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        <p class="small muted" style="margin-top:12px">Skriv stikord – ikke hele sætninger.</p>
        <textarea class="editor" id="notes" style="min-height:120px;max-width:560px" placeholder="Mine stikord …"></textarea>
        <div style="margin-top:12px"><button class="btn speak" id="ready">Jeg er klar – start taletid</button></div>`, 0);
      if (left === 0) return talk();
      every(1000, () => {
        left--;
        const c = $("#clock"); if (c) c.textContent = fmtTime(left);
        if (left <= 0) talk();
      });
      $("#ready").onclick = talk;
    }

    let notes = "";
    async function talk() {
      if (phase === "talk") return;
      const n = $("#notes"); if (n) notes = n.value;
      clearTimers();
      phase = "talk";
      let left = talkMin * 60;
      const start = Date.now();
      shell(`
        <span class="phase">Tal om emnet</span>
        <div class="clock" id="clock">${fmtTime(left)}</div>
        ${notes ? `<div class="note" style="max-width:560px;margin:0 auto 12px;text-align:left;white-space:pre-wrap">${esc(notes)}</div>` : `<ul class="points-list">${m.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`}
        <div class="transcript" id="tr" style="max-width:560px;margin:12px auto"></div>
        <button class="btn rec on" id="stop">⏹ Færdig</button>`, 1);
      rec = makeRecorder($("#tr"));
      await rec.start();
      every(1000, () => {
        left--;
        const c = $("#clock");
        if (c) { c.textContent = fmtTime(Math.abs(left)); c.classList.toggle("timer", true); c.classList.toggle("low", left < 0); }
        if (left === 0) toast("⏰ Taletiden er gået – afslut din sidste sætning.");
      });
      $("#stop").onclick = async () => {
        talked += (Date.now() - start) / 1000;
        clearTimers();
        audioUrl = await rec.stop();
        transcript = rec.text;
        followUps();
      };
    }

    function followUps() {
      phase = "follow";
      const f = m.followUp[qi], q = qText(f);
      shell(`
        <span class="phase">${f.t ? esc(FQ[f.t]) : "Eksaminator spørger"}</span>
        <div class="dots" style="margin:12px 0">${m.followUp.map((_, i) => `<i class="${i <= qi ? "on" : ""}"></i>`).join("")}</div>
        <div class="bubble">🧑‍🏫 ${esc(q)}</div>
        <div class="row" style="justify-content:center;margin-top:16px">
          <button class="btn ghost sm" id="say">🔊 Hør igen</button>
        </div>
        <div class="transcript" id="tr" style="max-width:560px;margin:12px auto"><i>Tryk på mikrofonen og svar.</i></div>
        <div class="row" style="justify-content:center">
          <button class="btn rec" id="mic">🎙️ Svar</button>
          <button class="btn speak" id="next">${qi < m.followUp.length - 1 ? "Næste spørgsmål →" : "Afslut"}</button>
        </div>`, 2);
      speak(q);
      $("#say").onclick = () => speak(q);
      let r2 = null, t0 = 0;
      $("#mic").onclick = async () => {
        const b = $("#mic");
        if (!r2) { r2 = makeRecorder($("#tr")); await r2.start(); t0 = Date.now(); b.classList.add("on"); b.textContent = "⏹ Stop"; }
        else { talked += (Date.now() - t0) / 1000; await r2.stop(); r2 = null; b.classList.remove("on"); b.textContent = "🎙️ Svar igen"; }
      };
      $("#next").onclick = async () => {
        if (r2) { talked += (Date.now() - t0) / 1000; await r2.stop(); }
        if (qi < m.followUp.length - 1) { qi++; followUps(); } else feedback();
      };
    }

    function feedback() {
      phase = "done";
      const words = countWords(transcript);
      const wpm = talked > 0 && words ? Math.round(words / (talked / 60)) : 0;
      shell(`
        <span class="phase">Godt klaret! 🎉</span>
        <h2 style="margin-top:12px">Din præstation</h2>
        <div class="row" style="justify-content:center;gap:12px;margin:10px 0 16px">
          <span class="pill">⏱️ ${fmtTime(talked)} talt</span>
          ${words ? `<span class="pill">💬 ${words} ord</span><span class="pill">🏃 ${wpm} ord/min</span>` : ""}
        </div>
        ${audioUrl ? `<p><b>Hør din monolog:</b></p><audio controls src="${audioUrl}" style="width:100%;max-width:480px"></audio>` : ""}
        ${transcript ? `<details class="info" style="max-width:560px;margin:14px auto;text-align:left"><summary>Læs hvad du sagde</summary><div class="transcript">${esc(transcript)}</div></details>` : ""}
        <h3 style="margin-top:18px">Hvordan gik det?</h3>
        <div class="rate" id="rate">${["😟", "😐", "🙂", "😄", "🤩"].map((e, i) => `<button data-r="${i}" aria-label="${i + 1} af 5">${e}</button>`).join("")}</div>
        <ul class="points-list small" style="margin-top:14px">
          <li>Talte jeg om alle stikord?</li>
          <li>Brugte jeg bindeord som fordi, men, derfor?</li>
          <li>Gav jeg eksempler fra mit eget liv?</li>
          <li>Holdt jeg mig i gang, også når jeg manglede et ord?</li>
        </ul>
        <div class="row" style="justify-content:center;margin-top:16px">
          <button class="btn speak" id="again">Øv igen</button>
          <a class="btn ghost" href="#/speaking">Nyt emne</a>
        </div>`, 3);
      finishSpeaking(m.id, talked);
      $$("#rate button").forEach(b => b.onclick = () => $$("#rate button").forEach(x => x.classList.toggle("on", +x.dataset.r <= +b.dataset.r)));
      $("#again").onclick = () => speakingMono(id);
      $(".stage").appendChild(oralRubric(1));
      simNext("mono", m.id);
    }

    setup();
  }

  // Delprøve 2: look at a picture (½ min), describe it, answer questions, then talk with a partner.
  function speakingPicture(id) {
    const p = findItem("SPEAKING_PICTURE", id);
    if (!p) return speakingList();
    const steps = ["Se billedet", "Beskriv", "Spørgsmål", "Samtale", "Feedback"];
    let pic = null, talked = 0, qi = 0, ti = 0, rec = null, t0 = 0, audioUrl = null;

    function shell(inner, stepIdx) {
      app.innerHTML = `
        <a class="back" href="#/speaking">← Alle taleopgaver</a>
        <h1>🖼️ ${esc(p.title)}${p.real ? ` <span class="tag real">Emne fra prøven${p.set ? ` · Sæt ${p.set}` : ""}</span>` : ""}</h1>
        <div class="grid" style="grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:20px" id="pl">
          <div class="card stage">
            <div class="steps">${steps.map((s, i) => `<span class="${i === stepIdx ? "on" : i < stepIdx ? "done" : ""}">${i + 1}. ${s}</span>`).join("")}</div>
            ${inner}
          </div>
          <div class="card">
            <h3>💬 Nyttige vendinger</h3>
            <div class="chips">${p.phrases.map(x => `<span class="chip">${esc(x)}</span>`).join("")}</div>
            ${pic ? `<details class="info" style="margin-top:14px"><summary>💡 Ord du kan bruge om billedet</summary><div class="chips">${pic.words.map(w => `<span class="chip">${esc(w)}</span>`).join("")}</div></details>` : ""}
          </div>
        </div>`;
      if (innerWidth < 900) $("#pl").style.gridTemplateColumns = "1fr";
    }
    const picture = () => pic.img
      ? `<figure class="photo"><img src="${esc(pic.img)}" alt="${esc(pic.alt || "Billede til opgaven")}"><figcaption>${esc(pic.credit || "")}</figcaption></figure>`
      : `<div class="picture" role="img" aria-label="Billede til opgaven">${esc(pic.scene).replace(/\n/g, "<br>")}</div>`;

    // A mic button that records one answer; returns the transcript when stopped.
    function micControls(onNext, nextLabel) {
      const mic = $("#mic");
      mic.onclick = async () => {
        if (!rec) { rec = makeRecorder($("#tr")); await rec.start(); t0 = Date.now(); mic.classList.add("on"); mic.textContent = "⏹ Stop"; }
        else { talked += (Date.now() - t0) / 1000; const u = await rec.stop(); if (u) audioUrl = u; rec = null; mic.classList.remove("on"); mic.textContent = "🎙️ Svar igen"; }
      };
      $("#next").textContent = nextLabel;
      $("#next").onclick = async () => {
        if (rec) { talked += (Date.now() - t0) / 1000; const u = await rec.stop(); if (u) audioUrl = u; rec = null; }
        onNext();
      };
    }
    const answerBox = `<div class="transcript" id="tr" style="max-width:560px;margin:14px auto"><i>Tryk på mikrofonen og svar.</i></div>
      <div class="row" style="justify-content:center"><button class="btn rec" id="mic">🎙️ Svar</button><button class="btn speak" id="next"></button></div>`;

    function choose() {
      shell(`
        <span class="phase">Emne: ${esc(p.title)}</span>
        <p style="max-width:560px;margin:14px auto">Til prøven får hver prøvedeltager sit eget billede. Vælg et billede. Du får ½ minut til at se på det, før samtalen begynder.</p>
        <div class="row" style="justify-content:center">${p.pictures.map((_, i) => `<button class="btn speak" data-pic="${i}">Billede ${i + 1}</button>`).join("")}</div>`, 0);
      $$("[data-pic]").forEach(b => b.onclick = () => { pic = p.pictures[+b.dataset.pic]; look(); });
    }
    function look() {
      let left = 30;
      shell(`
        <span class="phase">Se på billedet</span>
        <div class="clock" id="clock" style="font-size:2.4rem">${fmtTime(left)}</div>
        ${picture()}
        <p class="small muted">Tænk over: Hvem? Hvor? Hvad laver de? Hvordan har de det?</p>
        <button class="btn speak" id="ready">Jeg er klar</button>`, 0);
      every(1000, () => { left--; const c = $("#clock"); if (c) c.textContent = fmtTime(Math.max(0, left)); if (left <= 0) describe(); });
      $("#ready").onclick = describe;
    }
    function describe() {
      clearTimers();
      const q = "Vil du beskrive billedet? Hvad kan du se?";
      shell(`
        <span class="phase">Beskriv billedet</span>
        ${picture()}
        <div class="bubble">🧑‍🏫 ${esc(q)}</div>
        ${answerBox}`, 1);
      speak(q);
      micControls(() => { qi = 0; interview(); }, "Videre til spørgsmål →");
    }
    function interview() {
      const q = p.interview[qi];
      shell(`
        <span class="phase">Eksaminator spørger</span>
        ${picture()}
        <div class="dots" style="margin:12px 0">${p.interview.map((_, i) => `<i class="${i <= qi ? "on" : ""}"></i>`).join("")}</div>
        <div class="bubble">🧑‍🏫 ${esc(q)}</div>
        <div class="row" style="justify-content:center;margin-top:10px"><button class="btn ghost sm" id="say">🔊 Hør igen</button></div>
        ${answerBox}`, 2);
      speak(q);
      $("#say").onclick = () => speak(q);
      micControls(() => { if (qi < p.interview.length - 1) { qi++; interview(); } else { ti = 0; talk(); } },
        qi < p.interview.length - 1 ? "Næste spørgsmål →" : "Videre til samtalen →");
    }
    function talk() {
      const line = p.talk[ti];
      const who = line.who === "partner" ? "👤 Din samtalepartner" : "🧑‍🏫 Eksaminator";
      shell(`
        <span class="phase">Samtale med en anden prøvedeltager</span>
        <p class="small muted" style="max-width:560px;margin:10px auto">Til prøven taler du med den anden prøvedeltager. Svar, giv din mening med en begrundelse, og stil gerne et spørgsmål tilbage.</p>
        <div class="dots" style="margin:12px 0">${p.talk.map((_, i) => `<i class="${i <= ti ? "on" : ""}"></i>`).join("")}</div>
        <div class="bubble"><span class="small muted">${who}</span><br>${esc(line.say)}</div>
        <div class="row" style="justify-content:center;margin-top:10px"><button class="btn ghost sm" id="say">🔊 Hør igen</button></div>
        ${answerBox}`, 3);
      speak(line.say);
      $("#say").onclick = () => speak(line.say);
      micControls(() => { if (ti < p.talk.length - 1) { ti++; talk(); } else feedback(); },
        ti < p.talk.length - 1 ? "Næste →" : "Afslut");
    }
    function feedback() {
      shell(`
        <span class="phase">Godt klaret! 🎉</span>
        <div class="row" style="justify-content:center;gap:12px;margin:12px 0 16px"><span class="pill">⏱️ ${fmtTime(talked)} talt</span></div>
        ${audioUrl ? `<p><b>Hør dit sidste svar:</b></p><audio controls src="${audioUrl}" style="width:100%;max-width:480px"></audio>` : ""}
        <ul class="points-list small" style="margin-top:14px">
          <li>Beskrev jeg både personer, sted og hvad der sker?</li>
          <li>Begrundede jeg mine meninger med "fordi …"?</li>
          <li>Stillede jeg selv spørgsmål til min samtalepartner?</li>
          <li>Gik jeg fra mine egne erfaringer til mere generelle synspunkter?</li>
        </ul>
        <div class="row" style="justify-content:center;margin-top:16px">
          <button class="btn speak" id="again">Øv igen</button>
          <a class="btn ghost" href="#/speaking">Nyt emne</a>
        </div>`, 4);
      finishSpeaking(p.id, talked, true);
      $("#again").onclick = () => speakingPicture(id);
      $(".stage").appendChild(oralRubric(2));
      simNext("pic", p.id);
    }
    choose();
  }

  function speakingDialog(id) {
    const d = findItem("SPEAKING_DIALOG", id);
    if (!d) return speakingList();
    let i = -1, talked = 0, rec = null, t0 = 0;
    const log = [];

    function render() {
      app.innerHTML = `
        <a class="back" href="#/speaking">← Alle taleopgaver</a>
        <h1>💬 ${esc(d.title)}</h1>
        <div class="grid" style="grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:20px" id="dl">
          <div class="card stage">
            ${i < 0 ? `
              <span class="phase">Situationen</span>
              <p style="font-size:1.1rem;font-weight:700;max-width:560px;margin:14px auto">${esc(d.situation)}</p>
              <button class="btn speak" id="start">Start samtalen</button>` :
              i >= d.lines.length ? `
              <span class="phase">Samtalen er slut 🎉</span>
              <p style="margin-top:12px">Du har svaret på ${d.lines.length} replikker og talt i ${fmtTime(talked)}.</p>
              <p class="small muted">Tip: Prøv igen og giv længere svar med en begrundelse – "… fordi …".</p>
              <div class="row" style="justify-content:center"><button class="btn speak" id="again">Øv igen</button><a class="btn ghost" href="#/speaking">Ny opgave</a></div>` : `
              <div class="dots" style="margin-bottom:14px">${d.lines.map((_, k) => `<i class="${k <= i ? "on" : ""}"></i>`).join("")}</div>
              <div class="bubble">🧑‍🏫 ${esc(d.lines[i])}</div>
              <div class="row" style="justify-content:center;margin-top:12px"><button class="btn ghost sm" id="say">🔊 Hør igen</button></div>
              <div class="transcript" id="tr" style="max-width:560px;margin:14px auto"><i>Tryk på mikrofonen og svar.</i></div>
              <div class="row" style="justify-content:center">
                <button class="btn rec" id="mic">🎙️ Svar</button>
                <button class="btn speak" id="next">${i < d.lines.length - 1 ? "Næste replik →" : "Afslut"}</button>
              </div>`}
            ${log.length ? `<details class="info" style="max-width:560px;margin:18px auto 0;text-align:left"><summary>Samtalen indtil nu</summary>
              ${log.map(([q, a]) => `<div class="bubble small" style="margin:8px 0">${esc(q)}</div>${a ? `<div class="bubble me small" style="margin:8px 0">${esc(a)}</div>` : ""}`).join("")}</details>` : ""}
          </div>
          <div class="card">
            <h3>💬 Nyttige vendinger</h3>
            <div class="chips">${d.phrases.map(p => `<span class="chip">${esc(p)}</span>`).join("")}</div>
            <p class="small muted" style="margin-top:12px">Husk: spørg også eksaminator om hans eller hendes mening – "Hvad synes du?"</p>
          </div>
        </div>`;
      if (innerWidth < 900) $("#dl").style.gridTemplateColumns = "1fr";
      const st = $("#start"); if (st) st.onclick = () => { i = 0; render(); speak(d.lines[0]); };
      const ag = $("#again"); if (ag) ag.onclick = () => speakingDialog(id);
      const say = $("#say"); if (say) say.onclick = () => speak(d.lines[i]);
      const mic = $("#mic");
      if (mic) mic.onclick = async () => {
        if (!rec) { rec = makeRecorder($("#tr")); await rec.start(); t0 = Date.now(); mic.classList.add("on"); mic.textContent = "⏹ Stop"; }
        else { talked += (Date.now() - t0) / 1000; await rec.stop(); mic.classList.remove("on"); mic.textContent = "🎙️ Svar igen"; }
      };
      const nx = $("#next");
      if (nx) nx.onclick = async () => {
        let ans = "";
        if (rec) { if (rec.active) { talked += (Date.now() - t0) / 1000; await rec.stop(); } ans = rec.text; rec = null; }
        log.push([d.lines[i], ans]);
        i++;
        render();
        if (i < d.lines.length) speak(d.lines[i]);
        else finishSpeaking(d.id, talked, true);
      };
    }
    render();
  }

  // ---------- Words game ----------
  function wordsGame() {
    let dir = "da";
    function intro() {
      app.innerHTML = `
        <a class="back" href="#/games">← Alle spil</a>
        <h1>⚡ Ordjagt</h1>
        <p class="muted">Ord fra ${META().name}-opgaverne. Du har 60 sekunder – svar rigtigt i træk for at få combo-bonus!</p>
        <div class="card stage">
          <div class="word-big">🏆 ${wordBest()}</div>
          <p class="muted">Din rekord</p>
          <div class="row" style="justify-content:center;margin:12px 0">
            <button class="chip ${dir === "da" ? "on" : ""}" data-dir="da">Dansk → engelsk</button>
            <button class="chip ${dir === "en" ? "on" : ""}" data-dir="en">Engelsk → dansk</button>
          </div>
          <button class="btn words" id="go">Start!</button>
        </div>`;
      $$("[data-dir]").forEach(b => b.onclick = () => { dir = b.dataset.dir; intro(); });
      $("#go").onclick = play;
    }
    function play() {
      let left = 60, score = 0, combo = 0, deck = shuffle(EX().WORDS), idx = 0, locked = false;
      app.innerHTML = `
        <h1>⚡ Ordjagt</h1>
        <div class="card stage">
          <div class="row" style="justify-content:space-between"><span class="pill">⏱️ <span id="t">60</span>s</span><span class="pill">✅ <span id="s">0</span></span></div>
          <div class="word-big" id="w"></div>
          <div class="combo" id="c"></div>
          <div class="answers" id="a"></div>
        </div>`;
      function next() {
        if (idx >= deck.length) { deck = shuffle(EX().WORDS); idx = 0; }
        const [da, en] = deck[idx++];
        const [ask, ans] = dir === "da" ? [da, en] : [en, da];
        const pool = shuffle(EX().WORDS.filter(w => w[0] !== da)).slice(0, 3).map(w => dir === "da" ? w[1] : w[0]);
        const opts = shuffle(pool.concat(ans));
        $("#w").textContent = ask;
        $("#w").lang = dir === "da" ? "da" : "en";
        $("#a").lang = dir === "da" ? "en" : "da";
        $("#a").innerHTML = opts.map(o => `<button class="choice" data-o="${esc(o)}">${esc(o)}</button>`).join("");
        locked = false;
        $$("#a .choice").forEach(b => b.onclick = () => {
          if (locked) return; locked = true;
          const ok = b.dataset.o === ans;
          b.classList.add(ok ? "ok" : "bad");
          if (!ok) $$("#a .choice").find(x => x.dataset.o === ans).classList.add("ok");
          if (ok) { combo++; score += combo >= 3 ? 2 : 1; } else combo = 0;
          $("#s").textContent = score;
          $("#c").textContent = combo >= 3 ? `🔥 Combo x${combo} – dobbelt point!` : "";
          setTimeout(next, ok ? 280 : 900);
        });
      }
      next();
      every(1000, () => {
        left--;
        const t = $("#t"); if (t) t.textContent = left;
        if (left <= 0) done();
      });
      function done() {
        clearTimers();
        const record = score > wordBest();
        if (record) S.words[S.exam] = score;
        if (score >= 15) award("hunter");
        markPlayed("words");
        addXP(score * 2, "ordjagt");
        if (record && score > 0) confetti();
        app.innerHTML = `
          <h1>⚡ Ordjagt</h1>
          <div class="card stage">
            <div class="word-big">${score}</div>
            <p style="font-weight:800">${record ? "🏆 Ny rekord!" : `Rekord: ${wordBest()}`}</p>
            <div class="row" style="justify-content:center"><button class="btn words" id="again">Spil igen</button><a class="btn ghost" href="#/games">Alle spil</a></div>
          </div>`;
        $("#again").onclick = play;
      }
    }
    intro();
  }

  // ---------- Exam preparation: study plan, my mistakes, mock exam, oral simulation ----------
  // The official point-to-grade table is set per exam after the exam, so this is only an estimate.
  const GRADES = [[0.9, "12"], [0.78, "10"], [0.62, "7"], [0.5, "4"], [0.4, "02"], [0.2, "00"], [0, "-3"]];
  const estGrade = pct => GRADES.find(([p]) => pct >= p)[1];
  const dayNo = d => Math.round(new Date(d + "T00:00:00").getTime() / 864e5);
  const daysUntil = d => (d ? dayNo(d) - dayNo(today()) : null);
  const findAny = (list, id) => { for (const k of Object.keys(PD2.EXAMS)) { const x = (PD2.EXAMS[k][list] || []).find(i => i.id === id); if (x) return x; } return null; };
  const mistakeCount = () => Object.keys(S.mistakes.reading).length + Object.keys(S.mistakes.grammar).length + Object.keys(S.vocab.h).length;

  // ----- Min prøveplan -----
  function planItems() {
    const days = daysUntil(S.plan.date), idx = dayNo(today());
    const items = [];
    const pick = (list, isDone) => list.find(x => !isDone(x)) || list[idx % list.length];
    if (S.exam === "pd2" && days !== null && days >= 1 && days <= 14 && days % 3 === 1)
      items.push({ ico: "📝", text: "Prøvesimulering: hele den skriftlige prøve", kind: "exam", href: "#/exam" });
    const r = pick(EX().READING, x => S.reading[x.id]);
    if (r) items.push({ ico: "📖", text: `Læs: ${r.title}`, kind: "reading", href: `#/reading/${r.id}` });
    items.push({ ico: "📚", text: "Ordtræner: én runde (10 ord)", kind: "vocab", href: "#/games/vocab" });
    const g = pick(PD2.GRAMMAR, x => { const b = gramBest(x.id); return b && b.score === b.total; });
    items.push({ ico: "📐", text: `Grammatik: ${g.title}`, kind: "grammar", href: `#/grammar/${g.id}` });
    const mono = EX().SPEAKING_MONO.map(m => ({ x: m, href: `#/speaking/mono/${m.id}` }));
    const pics = (EX().SPEAKING_PICTURE || []).map(p => ({ x: p, href: `#/speaking/picture/${p.id}` }));
    const sp = pick(idx % 2 ? pics.concat(mono) : mono.concat(pics), s => S.speaking.done[s.x.id]);
    if (sp) items.push({ ico: "🗣️", text: `Tal: ${sp.x.title}`, kind: "speaking", href: sp.href });
    if (idx % 2 === 0) {
      const w = pick(EX().WRITING, x => S.writing[x.id] && S.writing[x.id].best);
      if (w) items.push({ ico: "✍️", text: `Skriv og bedøm: ${w.title}`, kind: "writing", href: `#/writing/${w.id}` });
    }
    if (mistakeCount()) items.push({ ico: "❌", text: "Gennemgå dine fejl", kind: "mistakes", href: "#/mistakes" });
    items.forEach(it => { it.done = todayCount(it.kind) > 0; });
    return items;
  }
  function planStatus() {
    const items = planItems(), done = items.filter(i => i.done).length;
    if (done === items.length && items.length) {
      S.plan.log = S.plan.log || {};
      if (!S.plan.log[today()]) { S.plan.log[today()] = true; save(); addXP(30, "dagens plan"); }
    }
    return { items, done };
  }
  const countdownText = () => {
    const d = daysUntil(S.plan.date);
    if (d === null) return "Sæt din prøvedato";
    if (d > 1) return `${d} dage til prøven`;
    if (d === 1) return "Prøven er i morgen!";
    if (d === 0) return "I dag er prøvedagen – held og lykke! 🍀";
    return "Prøven er overstået – sæt en ny dato";
  };

  function planPage() {
    const d = daysUntil(S.plan.date);
    const { items, done } = planStatus();
    const tip = d === null ? "Sæt din prøvedato, så tilpasser planen sig, jo tættere du kommer på prøven."
      : d > 30 ? "Fokus nu: ordforråd og grammatik. Små daglige skridt giver mest."
      : d > 7 ? "Øv alle tre dele hver uge, og skriv mindst to tekster om ugen."
      : d >= 1 ? "Sidste uge: lav prøvesimuleringer, gennemgå dine fejl, og sov godt."
      : "";
    const log = S.plan.log || {};
    const week = Array.from({ length: 7 }, (_, i) => { const t = new Date(Date.now() - (6 - i) * 864e5).toISOString().slice(0, 10); return { t, ok: !!log[t] }; });
    app.innerHTML = `
      <a class="back" href="#/">← Forside</a>
      <h1>📅 Min prøveplan <span class="tag">${META().name}</span></h1>
      <div class="card stage">
        <div class="word-big" style="font-size:clamp(1.6rem,6vw,2.4rem)">${esc(countdownText())}</div>
        <label class="row" style="justify-content:center;gap:8px">Min prøvedato:
          <input type="date" id="planDate" value="${esc(S.plan.date)}" class="short" style="width:auto;padding:6px 10px"></label>
        ${tip ? `<p class="muted" style="margin-bottom:0">💡 ${esc(tip)}</p>` : ""}
      </div>
      <h2 style="margin-top:22px">I dag <span class="muted small">${done}/${items.length} klaret</span></h2>
      <div class="bar" style="margin-bottom:12px"><i style="width:${items.length ? done / items.length * 100 : 0}%"></i></div>
      <div class="stack">${items.map(it => `<a class="list-item plan-item ${it.done ? "done" : ""}" href="${it.href}">
          <span class="ico">${it.ico}</span><span class="meta"><b>${esc(it.text)}</b></span>
          <span class="score-badge ${it.done ? "full" : ""}">${it.done ? "✓" : "Start"}</span></a>`).join("")}</div>
      ${done === items.length && items.length ? `<p class="card" style="margin-top:12px;font-weight:800">🎉 Dagens plan er klaret! Kom igen i morgen.</p>` : ""}
      <h2 style="margin-top:22px">De sidste 7 dage</h2>
      <div class="week">${week.map(w => `<span class="${w.ok ? "ok" : ""}" title="${w.t}">${["S", "M", "T", "O", "T", "F", "L"][new Date(w.t + "T00:00:00").getDay()]}</span>`).join("")}</div>
      <p class="small muted">Planen ændrer sig hver dag og vælger opgaver, du ikke har lavet endnu. Opgaverne bliver krydset af automatisk, når du laver dem.</p>`;
    $("#planDate").onchange = e => { S.plan.date = e.target.value; save(); planPage(); };
  }

  // ----- Mine fejl -----
  function mistakesPage() {
    bump("mistakes");
    const rd = Object.entries(S.mistakes.reading).map(([id, m]) => ({ r: findAny("READING", id), m })).filter(x => x.r);
    const gr = Object.entries(S.mistakes.grammar).map(([id, m]) => ({ g: PD2.GRAMMAR.find(x => x.id === id), m })).filter(x => x.g);
    const hard = Object.keys(S.vocab.h).length;
    const list = items => `<ul class="mistakes">${items.map(it => `<li><span>${esc(it.q)}</span> <b>→ ${esc(it.a)}</b></li>`).join("")}</ul>`;
    app.innerHTML = `
      <a class="back" href="#/">← Forside</a>
      <h1>❌ Mine fejl</h1>
      <p class="muted">Her samles de spørgsmål, du har svaret forkert på. Lav opgaven igen – når du får alt rigtigt, forsvinder den fra listen.</p>
      ${!rd.length && !gr.length && !hard ? `<div class="card stage"><div class="word-big">🎉</div><p style="font-weight:800">Ingen fejl lige nu. Flot!</p></div>` : ""}
      ${rd.length ? `<h2>📖 Læsning <span class="muted small">${rd.length} opgaver</span></h2>
        <div class="stack">${rd.map(({ r, m }) => `<div class="card">
          <div class="row"><b>${esc(r.title)}</b>${r.group ? `<span class="tag">${esc(r.group)}</span>` : ""}<span class="spacer"></span>
          <a class="btn read sm" href="#/reading/${r.id}">Prøv igen</a></div>${list(m.items)}</div>`).join("")}</div>` : ""}
      ${gr.length ? `<h2 style="margin-top:20px">📐 Grammatik <span class="muted small">${gr.length} lektioner</span></h2>
        <div class="stack">${gr.map(({ g, m }) => `<div class="card">
          <div class="row"><b>${g.ico} ${esc(g.title)}</b><span class="spacer"></span><a class="btn write sm" href="#/grammar/${g.id}">Prøv igen</a></div>${list(m.items)}</div>`).join("")}</div>` : ""}
      ${hard ? `<h2 style="margin-top:20px">📚 Svære ord</h2>
        <div class="card row"><span><b>${hard}</b> ord, du har svaret forkert på i Ordtræneren.</span><span class="spacer"></span>
        <a class="btn words sm" href="#/games/vocab">Øv de svære ord</a></div>` : ""}
      ${rd.length || gr.length ? `<p style="margin-top:20px"><button class="btn ghost sm" id="clearMistakes">Ryd listen</button></p>` : ""}`;
    const c = $("#clearMistakes");
    if (c) c.onclick = () => {
      if (!c.dataset.armed) { c.dataset.armed = "1"; c.textContent = "Sikker? Klik igen"; return; }
      S.mistakes = { reading: {}, grammar: {} }; save(); mistakesPage();
    };
  }

  // ----- Prøvesimulering (mock written exam, PD2) -----
  let MOCK = null;
  function mockSets() {
    const g = {};
    PD2.EXAMS.pd2.READING.filter(r => r.real).forEach(r => (g[r.group] = g[r.group] || []).push(r));
    return Object.entries(g).filter(([, rs]) => rs.length >= 5).map(([name, rs]) => {
      const reading = rs.slice().sort((a, b) => a.id.localeCompare(b.id));
      const wp = reading[0].id.replace(/^p/, "w").replace(/-\d+$/, "");
      const writing = PD2.EXAMS.pd2.WRITING.filter(w => new RegExp(`^${wp}[abc]$`).test(w.id));
      return { name, reading, writing };
    });
  }
  const MOCK_MIN = { d1: 30, d2: 60, w: 90 };
  const MOCK_NAME = { d1: "Læseforståelse 1", d2: "Læseforståelse 2", w: "Skriftlig fremstilling" };
  function mockClock() {
    const el = $("#mockClock");
    if (!el || !MOCK) return;
    const st = MOCK.steps[MOCK.step], part = st && st.part;
    if (!part || !MOCK.start[part]) return;
    const left = MOCK_MIN[part] * 60 - (Date.now() - MOCK.start[part]) / 1000;
    el.textContent = left >= 0 ? `⏱️ ${fmtTime(left)} tilbage` : `⏰ +${fmtTime(-left)} over tiden`;
    el.classList.toggle("over", left < 0);
    el.classList.toggle("low", left >= 0 && left < 300);
  }
  function mockHeader() {
    const st = MOCK.steps[MOCK.step];
    const readSteps = MOCK.steps.filter(s => s.type === "reading"), k = readSteps.indexOf(st);
    return `<div class="mock-bar">
      <b>📝 Prøvesimulering · ${esc(MOCK.set.name)}</b>
      <span class="pill">${MOCK_NAME[st.part]}${k >= 0 ? ` · opgave ${k + 1}/${readSteps.length}` : ""}</span>
      <span class="pill" id="mockClock"></span><span class="spacer"></span>
      <button class="btn ghost sm" id="mockQuit">Afbryd</button></div>`;
  }
  function mockBind() {
    mockClock();
    const q = $("#mockQuit");
    if (q) q.onclick = () => {
      if (!q.dataset.armed) { q.dataset.armed = "1"; q.textContent = "Sikker? Klik igen"; return; }
      MOCK = null; examPage();
    };
  }
  function mockStep() {
    const st = MOCK.steps[MOCK.step];
    if (st.part && !MOCK.start[st.part]) MOCK.start[st.part] = Date.now();
    if (!MOCK.ticking) { MOCK.ticking = true; every(1000, mockClock); onLeave(() => { if (MOCK) MOCK.ticking = false; }); }
    if (st.type === "reading") {
      readingItem(st.id, {
        header: mockHeader,
        done: (score, total) => {
          MOCK.results.push({ id: st.id, part: st.part, score, total });
          if (!MOCK.steps[MOCK.step + 1] || MOCK.steps[MOCK.step + 1].part !== st.part) MOCK.end[st.part] = Date.now();
          MOCK.step++; mockStep(); window.scrollTo(0, 0);
        }
      });
      mockBind();
    } else if (st.type === "writing") mockWriting();
    else mockResult();
  }
  function mockWriting() {
    const d1 = MOCK.set.writing.filter(w => w.delprove === 1), d2 = MOCK.set.writing.find(w => w.delprove === 2);
    MOCK.texts = MOCK.texts || { choice: d1[0] && d1[0].id, t1: "", t2: "" };
    const task = w => `<div class="instruction" style="background:var(--write-soft)">${esc(w.situation)}</div>
      <ul class="points-list small">${w.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>${taskEnBtn(w)}`;
    app.innerHTML = `${mockHeader()}
      <h1>✍️ Skriftlig fremstilling</h1>
      <p class="muted">Du har 1½ time til begge delprøver. Vælg opgave A eller B i delprøve 1, og skriv derefter delprøve 2. Til den rigtige prøve skriver du i hånden – og du må bruge ordbøger.</p>
      <div class="card">
        <h2>Delprøve 1</h2>
        <div class="row" style="margin-bottom:10px">${d1.map(w => `<button class="chip ${MOCK.texts.choice === w.id ? "on" : ""}" data-choose="${w.id}">${esc(w.title)}</button>`).join("")}</div>
        ${d1.filter(w => w.id === MOCK.texts.choice).map(task).join("")}
        <textarea class="editor" id="mw1" lang="da" spellcheck="false" placeholder="Skriv din tekst her …">${esc(MOCK.texts.t1)}</textarea>
        <p class="small muted" id="mw1c"></p>
      </div>
      ${d2 ? `<div class="card" style="margin-top:16px">
        <h2>Delprøve 2: ${esc(d2.title)}</h2>${task(d2)}
        <textarea class="editor" id="mw2" lang="da" spellcheck="false" placeholder="Skriv din e-mail her …">${esc(MOCK.texts.t2)}</textarea>
        <p class="small muted" id="mw2c"></p>
      </div>` : ""}
      <div class="row" style="margin-top:16px"><button class="btn write" id="mwDone">Aflevér og se resultatet →</button></div>`;
    mockBind();
    const w1 = d1.find(w => w.id === MOCK.texts.choice);
    const count = () => {
      MOCK.texts.t1 = $("#mw1").value; if ($("#mw2")) MOCK.texts.t2 = $("#mw2").value;
      $("#mw1c").textContent = `${countWords(MOCK.texts.t1)} ord (mål: ${w1.minWords}-${w1.maxWords})`;
      if (d2) $("#mw2c").textContent = `${countWords(MOCK.texts.t2)} ord (mindst ${d2.minWords})`;
    };
    $$("#mw1, #mw2").forEach(t => t.oninput = count);
    count();
    $$("[data-choose]").forEach(b => b.onclick = () => { count(); MOCK.texts.choice = b.dataset.choose; mockWriting(); });
    $("#mwDone").onclick = () => { count(); MOCK.end.w = Date.now(); MOCK.step++; mockStep(); window.scrollTo(0, 0); };
  }
  function mockResult() {
    const res = MOCK.results, score = res.reduce((a, r) => a + r.score, 0), total = res.reduce((a, r) => a + r.total, 0);
    const pct = total ? score / total : 0, grade = estGrade(pct);
    const used = p => MOCK.start[p] && MOCK.end[p] ? Math.round((MOCK.end[p] - MOCK.start[p]) / 60000) : null;
    if (!MOCK.saved) {
      MOCK.saved = true;
      S.exams.unshift({ date: today(), set: MOCK.set.name, score, total, grade, writing: MOCK.withWriting });
      S.exams = S.exams.slice(0, 20);
      bump("exam"); addXP(50, "prøvesimulering"); save();
      if (+grade >= 7 || grade === "10" || grade === "12") confetti();
    }
    const written = MOCK.withWriting ? [[MOCK.texts.choice, MOCK.texts.t1], [(MOCK.set.writing.find(w => w.delprove === 2) || {}).id, MOCK.texts.t2]]
      .filter(([id]) => id).map(([id, text]) => ({ w: PD2.EXAMS.pd2.WRITING.find(x => x.id === id), text })) : [];
    app.innerHTML = `
      <a class="back" href="#/exam">← Prøvesimulering</a>
      <h1>📝 Dit resultat · ${esc(MOCK.set.name)}</h1>
      <div class="card stage">
        <div class="word-big">${score}/${total}</div>
        <p style="font-weight:800;margin:0">Læseforståelse · anslået karakter: <span class="grade-pill ${["02", "00", "-3"].includes(grade) && grade !== "02" ? "fail" : ""}">${grade}</span></p>
        <p class="small muted">Karakteren er et skøn. Til den rigtige prøve fastsættes omregningen fra point til karakter for hver prøve. 02 eller derover er bestået.</p>
      </div>
      <div class="card" style="margin-top:16px">
        <table class="simple"><tr><th>Opgave</th><th>Point</th></tr>
          ${res.map(r => `<tr><td>${esc(findAny("READING", r.id).title)}</td><td><b>${r.score}</b>/${r.total}</td></tr>`).join("")}
        </table>
        <p class="small muted" style="margin-bottom:0">Tid brugt: ${["d1", "d2"].map(p => used(p) !== null ? `${MOCK_NAME[p]} ${used(p)} af ${MOCK_MIN[p]} min` : "").filter(Boolean).join(" · ")}</p>
      </div>
      ${written.map(({ w, text }) => {
        const a = analyse(text, w);
        return `<div class="card" style="margin-top:16px">
          <h3>✍️ ${esc(w.title)}</h3>
          <ul class="checks">${a.checks.map(([k, t]) => `<li><span class="i">${k === "ok" ? "✅" : "💡"}</span><span>${esc(t)}</span></li>`).join("")}</ul>
          <button class="btn write sm" data-assess="${w.id}">Bedøm teksten og se modelsvaret →</button>
        </div>`;
      }).join("")}
      <div class="row" style="margin-top:16px">
        <button class="btn read" id="mockAgain">Ny prøvesimulering</button>
        <a class="btn ghost" href="#/mistakes">Se dine fejl</a>
      </div>`;
    $$("[data-assess]").forEach(b => b.onclick = () => {
      const id = b.dataset.assess, text = written.find(x => x.w.id === id).text;
      S.writing[id] = Object.assign(S.writing[id] || { ticks: [] }, { draft: text }); save();
      location.hash = `#/writing/${id}`;
    });
    $("#mockAgain").onclick = () => { MOCK = null; examPage(); };
  }
  function examPage() {
    if (MOCK && MOCK.steps[MOCK.step]) return mockStep();
    if (S.exam !== "pd2") {
      app.innerHTML = `<a class="back" href="#/">← Forside</a><h1>📝 Prøvesimulering</h1>
        <div class="card"><p>Prøvesimuleringen bruger rigtige prøvesæt fra PD2.</p><button class="btn read" id="toPd2">Skift til PD2</button></div>`;
      $("#toPd2").onclick = () => { S.exam = "pd2"; save(); renderStats(); examPage(); };
      return;
    }
    const sets = mockSets();
    app.innerHTML = `
      <a class="back" href="#/">← Forside</a>
      <h1>📝 Prøvesimulering</h1>
      <p class="muted">Tag en hel skriftlig PD2-prøve under prøvelignende forhold: med tid, uden facit undervejs og med et anslået resultat til sidst.</p>
      <div class="card">
        <table class="simple"><tr><th>Del</th><th>Opgaver</th><th>Tid</th></tr>
          <tr><td>Læseforståelse 1</td><td>Opgave 1-2</td><td>30 min</td></tr>
          <tr><td>Læseforståelse 2</td><td>Opgave 3-5</td><td>60 min</td></tr>
          <tr><td>Skriftlig fremstilling</td><td>Delprøve 1 (A eller B) + delprøve 2</td><td>1½ time</td></tr>
        </table>
        <label class="row" style="margin-top:14px;gap:8px">Prøvesæt:
          <select id="mockSet" class="short" style="width:auto;padding:8px">
            <option value="">🎲 Tilfældigt</option>${sets.map((s, i) => `<option value="${i}">${esc(s.name)}</option>`).join("")}
          </select></label>
        <label class="tick" style="margin-top:8px"><input type="checkbox" id="mockWrite" checked> <span>Med skriftlig fremstilling (hele prøven, ca. 3 timer)</span></label>
        <p class="small muted">Tip: Sæt dig et roligt sted, sluk telefonen, og lad være med at kigge i bøger under læseforståelsen – ligesom til prøven.</p>
        <button class="btn read" id="mockStart">Start prøven</button>
      </div>
      ${S.exams.length ? `<h2 style="margin-top:22px">Dine tidligere simuleringer</h2>
        <div class="card"><table class="simple"><tr><th>Dato</th><th>Prøvesæt</th><th>Point</th><th>Karakter</th></tr>
        ${S.exams.map(e => `<tr><td>${esc(e.date)}</td><td>${esc(e.set)}</td><td>${e.score}/${e.total}</td><td><b>${esc(e.grade)}</b></td></tr>`).join("")}</table></div>` : ""}`;
    $("#mockStart").onclick = () => {
      const v = $("#mockSet").value, set = v === "" ? sets[Math.floor(Math.random() * sets.length)] : sets[+v];
      const withWriting = $("#mockWrite").checked && set.writing.length > 0;
      const steps = set.reading.map((r, i) => ({ type: "reading", id: r.id, part: i < 2 ? "d1" : "d2" }));
      if (withWriting) steps.push({ type: "writing", part: "w" });
      steps.push({ type: "result" });
      MOCK = { set, withWriting, steps, step: 0, results: [], start: {}, end: {} };
      mockStep(); window.scrollTo(0, 0);
    };
  }

  // ----- Mundtlig prøvesimulering -----
  let SIM = null;
  function speakingSim(arg) {
    const pics = EX().SPEAKING_PICTURE || [], monos = EX().SPEAKING_MONO;
    if (arg === "done") {
      app.innerHTML = `<a class="back" href="#/speaking">← Alle taleopgaver</a>
        <div class="card stage"><div class="word-big">🎉</div>
        <h1>Du har gennemført en hel mundtlig prøve!</h1>
        <ul class="points-list" style="text-align:left;max-width:520px;margin:12px auto">
          <li>Talte du sammenhængende i ca. 1½ minut i delprøve 1?</li>
          <li>Svarede du på eksaminators spørgsmål med eksempler og begrundelser?</li>
          <li>Beskrev du billedet og sagde din mening i delprøve 2?</li>
          <li>Stillede du også spørgsmål i samtalen?</li>
        </ul>
        <div class="row" style="justify-content:center"><a class="btn speak" href="#/speaking/sim">Ny simulering</a><a class="btn ghost" href="#/speaking">Alle taleopgaver</a></div></div>`;
      return;
    }
    if (!pics.length) {
      app.innerHTML = `<a class="back" href="#/speaking">← Alle taleopgaver</a><h1>🎬 Mundtlig prøvesimulering</h1>
        <div class="card"><p>Simuleringen bruger PD2-prøvens to delprøver. Skift til PD2 for at prøve den.</p></div>`;
      return;
    }
    const rnd = a => a[Math.floor(Math.random() * a.length)];
    const real = pics.filter(p => p.real);
    let mono = rnd(monos), pic = rnd(real.length ? real : pics);
    const draw = () => {
      app.innerHTML = `<a class="back" href="#/speaking">← Alle taleopgaver</a>
        <h1>🎬 Mundtlig prøvesimulering</h1>
        <p class="muted">Gennemfør begge delprøver lige efter hinanden – som til den rigtige prøve. Find et roligt sted, og sig svarene højt.</p>
        <div class="card">
          <table class="simple"><tr><th>Delprøve</th><th>Indhold</th><th>Emne</th></tr>
            <tr><td>1</td><td>Præsentation af et emne (ca. 1½ min.) og spørgsmål fra eksaminator</td><td><b>${esc(mono.title)}</b></td></tr>
            <tr><td>2</td><td>Beskriv et billede, svar på spørgsmål, og tal med den anden deltager</td><td><b>${esc(pic.title)}</b></td></tr>
          </table>
          <div class="row" style="margin-top:14px"><button class="btn speak" id="simStart">Start delprøve 1</button><button class="btn ghost" id="simShuffle">🎲 Andre emner</button></div>
          <p class="small muted">Til den rigtige prøve vælger og forbereder du selv emnet til delprøve 1 hjemmefra.</p>
        </div>`;
      $("#simShuffle").onclick = () => { mono = rnd(monos); pic = rnd(real.length ? real : pics); draw(); };
      $("#simStart").onclick = () => { SIM = { step: 1, mono: mono.id, pic: pic.id }; location.hash = `#/speaking/mono/${mono.id}`; };
    };
    draw();
  }
  function simNext(kind, id) {
    if (!SIM) return;
    const box = document.createElement("div");
    box.className = "sim-next";
    if (kind === "mono" && SIM.step === 1 && SIM.mono === id) {
      const p = findAny("SPEAKING_PICTURE", SIM.pic);
      box.innerHTML = `<b>🎬 Delprøve 1 er færdig.</b> Næste: delprøve 2 – billede og samtale om "${esc(p.title)}".
        <button class="btn speak sm" id="simGo">Videre til delprøve 2 →</button>`;
      $(".stage").prepend(box);
      $("#simGo").onclick = () => { SIM.step = 2; location.hash = `#/speaking/picture/${SIM.pic}`; };
    } else if (kind === "pic" && SIM.step === 2 && SIM.pic === id) {
      box.innerHTML = `<b>🎬 Delprøve 2 er færdig.</b> <button class="btn speak sm" id="simGo">Afslut prøvesimuleringen →</button>`;
      $(".stage").prepend(box);
      $("#simGo").onclick = () => { SIM = null; addXP(40, "mundtlig simulering"); location.hash = "#/speaking/sim/done"; };
    }
  }

  // ---------- Ordbog (Danish-English dictionary built from the hover glossary) ----------
  let dictCache = null;
  function dictEntries() {
    if (dictCache) return dictCache;
    const seen = new Set();
    dictCache = PD2.GLOSSARY_RAW.split("\n").map(l => { const i = l.indexOf("="); return i > 0 ? [l.slice(0, i).trim(), l.slice(i + 1).trim()] : null; })
      .filter(e => e && e[0].length > 1 && !/^\(a name|^\((a )?name/i.test(e[1]) && !seen.has(e[0]) && seen.add(e[0]))
      .map(([da, en]) => ({ da, en, enL: en.toLowerCase() }));
    return dictCache;
  }
  // Lets you type "ae", "oe", "aa" for æ, ø, å.
  const dkFold = s => s.toLowerCase().trim().replace(/ae/g, "æ").replace(/oe/g, "ø").replace(/aa/g, "å");
  function dictSearch(q) {
    q = q.toLowerCase().trim();
    if (!q) return [];
    const qs = [...new Set([q, dkFold(q)])], ranked = [];
    const enWord = new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z]|$)`);
    dictEntries().forEach(e => {
      let r = 0;
      if (qs.includes(e.da)) r = 100;
      else if (qs.some(x => e.da.startsWith(x))) r = 80 - Math.min(30, e.da.length);
      else if (enWord.test(e.enL)) r = 60 - Math.min(30, e.enL.length / 2);
      else if (qs.some(x => x.length > 2 && e.da.includes(x))) r = 30;
      else if (q.length > 2 && e.enL.includes(q)) r = 20;
      if (r) ranked.push([r, e]);
    });
    return ranked.sort((a, b) => b[0] - a[0] || a[1].da.length - b[1].da.length).slice(0, 60).map(x => x[1]);
  }
  function dictionaryPage() {
    app.innerHTML = `
      <h1>🔎 Ordbog <span class="tag">dansk ⇄ engelsk</span></h1>
      <p class="muted">Søg på et dansk eller et engelsk ord. Ordbogen har ${fmtN(dictEntries().length)} ord og bøjninger fra prøveteksterne og appen. Tryk 🔊 for at høre ordet, og ⭐ for at øve det i Ordtræneren.</p>
      <div class="card">
        <input class="short dict-search" id="dq" type="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Skriv et ord, fx hus, arbejde eller house …" aria-label="Søg i ordbogen">
        <p class="small muted" style="margin:8px 0 0">Tip: Du kan skrive ae, oe og aa i stedet for æ, ø og å.</p>
      </div>
      <div id="dres" class="card dict-res" style="margin-top:14px" hidden></div>`;
    const inp = $("#dq"), out = $("#dres");
    const render = () => {
      const q = inp.value, res = dictSearch(q);
      try { sessionStorage.setItem("dict-q", q); } catch (e) { /* ignore */ }
      out.hidden = !q.trim();
      if (!q.trim()) return;
      out.innerHTML = res.length ? res.map(e => `<div class="vrow">
          <button class="say" data-say="${esc(e.da)}" aria-label="Hør ${esc(e.da)}">🔊</button>
          <b class="no-tr">${esc(e.da)}</b><span lang="en">${esc(e.en)}</span>
          <button class="star ${S.vocab.h[e.da] ? "on" : ""}" data-star="${esc(e.da)}" title="Øv ordet i Ordtræneren">⭐</button></div>`).join("")
        : `<p class="muted" style="margin:0">Ingen ord fundet for "${esc(q)}". Prøv grundformen, fx "spise" i stedet for "spiste".</p>`;
      $$("[data-say]", out).forEach(b => b.onclick = () => speak(b.dataset.say));
      $$("[data-star]", out).forEach(b => b.onclick = () => {
        const w = b.dataset.star;
        if (S.vocab.h[w]) delete S.vocab.h[w]; else { S.vocab.h[w] = 1; toast(`⭐ "${w}" er føjet til dine svære ord`); }
        b.classList.toggle("on", !!S.vocab.h[w]); save();
      });
    };
    let t;
    inp.oninput = () => { clearTimeout(t); t = setTimeout(render, 120); };
    try { inp.value = sessionStorage.getItem("dict-q") || ""; } catch (e) { /* ignore */ }
    render();
    inp.focus();
  }

  // ---------- Grammatik ----------
  const GP = { S: "subjekt", V: "verbum", O: "objekt", A: "tid / sted", N: "ikke, altid …", C: "bindeord / spørgeord" };
  // "[S|Jeg] [V|spiser]" → colour-coded spans.
  const gramHtml = s => esc(s).replace(/\[([SVOANC])\|([^\]]+)\]/g, (_, k, t) => `<span class="gp ${k}" title="${GP[k]}">${t}</span>`);
  const gramLegend = () => `<div class="gp-legend">${Object.entries(GP).map(([k, n]) => `<span class="gp ${k}">${n}</span>`).join("")}</div>`;
  const gramBest = id => S.grammar[id];
  // English hints in brackets, e.g. "(because)" or "billig (cheap)", are marked as English.
  const enParens = s => esc(s).replace(/\(([^)]*)\)/g, '(<span lang="en">$1</span>)');

  function grammarList() {
    const L = PD2.GRAMMAR;
    app.innerHTML = `
      <h1>📐 Grammatik <span class="tag">for begyndere</span></h1>
      <p class="muted">Korte lektioner om, hvordan man bygger danske sætninger: subjekt og verbum, inversion, spørgsmål, bindeord, navneord, tillægsord og meget mere. Hver lektion har forklaringer på dansk og engelsk, farvede eksempler og øvelser.</p>
      <div class="card"><b class="small">Farverne i eksemplerne</b>${gramLegend()}</div>
      <h2 style="margin-top:22px">🏋️ Øvebank – træn så meget du vil</h2>
      <p class="muted small" style="margin-top:-4px">Nye opgaver hver gang: byg sætninger, flyt ikke, vælg bindeord og bøj ord. Med forklaring og farver efter hvert svar.</p>
      <div class="grid grid-2 drills">${Object.entries(DRILL_INFO).map(([k, d]) => `<a class="task read" href="#/grammar/drill/${k}">
          <span class="emoji">${d.ico}</span><h2>${esc(d.name)}</h2>
          <p class="muted small" lang="en" style="margin:0">${esc(d.en)}</p>
          ${S.drills && S.drills[k] ? `<span class="pill" style="margin-top:8px">🏆 ${S.drills[k]}/10</span>` : ""}</a>`).join("")}</div>
      <h2 style="margin-top:22px">📚 Lektioner</h2>
      <div class="stack" style="margin-top:8px">
        ${L.map((g, i) => {
          const b = gramBest(g.id);
          return `<a class="list-item" href="#/grammar/${g.id}">
            <span class="ico">${g.ico}</span>
            <span class="meta"><b>${i + 1}. ${esc(g.title)}</b><span class="small muted" lang="en">${esc(g.en)}</span></span>
            ${b ? `<span class="score-badge ${b.score === b.total ? "full" : ""}">${b.score}/${b.total}</span>` : `<span class="score-badge">Ny</span>`}
          </a>`;
        }).join("")}
      </div>`;
  }

  function grammarLesson(id) {
    const L = PD2.GRAMMAR, idx = L.findIndex(g => g.id === id), g = L[idx];
    if (!g) return grammarList();
    const prev = L[idx - 1], next = L[idx + 1];
    const exs = g.ex.map(e => e.t === "mc" ? Object.assign({}, e, { opts: shuffle(e.o.map((o, i) => ({ o, ok: i === e.a }))) }) : e);
    app.innerHTML = `
      <a class="back" href="#/grammar">← Alle lektioner</a>
      <h1>${g.ico} ${esc(g.title)}</h1>
      <p class="muted" lang="en" style="margin-top:-6px">${esc(g.en)}</p>
      <div class="card">
        <p style="margin-top:0">${esc(g.intro)}</p>
        <p class="small muted" lang="en" style="margin-bottom:0">🇬🇧 ${esc(g.introEn)}</p>
      </div>
      ${g.rules.map(r => `<div class="card gram-rule">
        <h2>${esc(r.h)}</h2>
        <p>${esc(r.da)}</p>
        <p class="small muted" lang="en">🇬🇧 ${esc(r.en)}</p>
        ${r.ex ? `<div class="gram-ex">${r.ex.map(([da, en]) => `<div class="gram-line"><button class="say" data-say="${esc(da.replace(/\[[A-Z]\|([^\]]+)\]/g, "$1"))}" aria-label="Hør sætningen">🔊</button><div><div class="gram-da">${gramHtml(da)}</div><div class="small muted" lang="en">${esc(en)}</div></div></div>`).join("")}</div>` : ""}
        ${r.table ? `<div class="table-wrap"><table class="simple gram-table"><tr>${r.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr>${r.table.rows.map(row => `<tr>${row.map((c, ci) => r.table.head[ci] === "English" ? `<td lang="en">${esc(c)}</td>` : `<td>${enParens(c)}</td>`).join("")}</tr>`).join("")}</table></div>` : ""}
      </div>`).join("")}
      ${g.rules.some(r => r.ex) ? `<div class="card"><b class="small">Farverne</b>${gramLegend()}</div>` : ""}
      <h2 style="margin-top:24px">✏️ Øv dig</h2>
      <div class="card"><div class="gram-exs">${exs.map((e, i) => exHtml(e, i)).join("")}</div></div>
      <div id="gramRes"></div>
      <div class="row" style="margin-top:16px">
        ${prev ? `<a class="btn ghost sm" href="#/grammar/${prev.id}">← ${esc(prev.title)}</a>` : ""}
        <span class="spacer"></span>
        ${next ? `<a class="btn ghost sm" href="#/grammar/${next.id}">${esc(next.title)} →</a>` : ""}
      </div>`;

    function exHtml(e, i) {
      const q = (e.en ? `<span lang="en">${esc(e.q)}</span>` : enParens(e.q || "")).replace(/___/g, '<span class="blank">____</span>');
      if (e.t === "mc") return `<div class="q" data-ex="${i}"><div class="qtext"><span class="num">${i + 1}</span>${q}</div>
        <div class="choices gram-choices">${e.opts.map((o, k) => `<button class="choice no-tr" data-k="${k}">${esc(o.o)}</button>`).join("")}</div><div class="gram-fb"></div></div>`;
      if (e.t === "type") return `<div class="q" data-ex="${i}"><div class="qtext"><span class="num">${i + 1}</span>${q}</div>
        <div class="row"><input class="short gram-in" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Dit svar" style="max-width:320px"><button class="btn ghost sm" data-chk>Tjek</button></div><div class="gram-fb"></div></div>`;
      return `<div class="q" data-ex="${i}"><div class="qtext"><span class="num">${i + 1}</span>Byg sætningen: <span class="muted" lang="en">${esc(e.en)}</span>${e.hint ? ` <span class="small muted">· ${esc(e.hint)}</span>` : ""}</div>
        <div class="tiles answer" data-ans></div><div class="tiles" data-bank></div>
        <div class="row"><button class="btn ghost sm" data-chk disabled>Tjek</button><button class="btn ghost sm" data-clr>Ryd</button></div><div class="gram-fb"></div></div>`;
    }

    const done = {};
    function mark(i, ok, html) {
      if (done[i] !== undefined) return;
      done[i] = ok;
      const box = $(`[data-ex="${i}"] .gram-fb`);
      box.innerHTML = `<p>${ok ? "✅ Rigtigt!" : "❌ Ikke helt."} ${html || ""}</p>${exs[i].why ? `<p class="small muted" lang="en">💡 ${esc(exs[i].why)}</p>` : ""}`;
      if (Object.keys(done).length === exs.length) finish();
    }
    exs.forEach((e, i) => {
      const root = $(`[data-ex="${i}"]`);
      if (e.t === "mc") {
        $$(".choice", root).forEach(b => b.onclick = () => {
          if (done[i] !== undefined) return;
          const o = e.opts[+b.dataset.k];
          b.classList.add(o.ok ? "ok" : "bad");
          if (!o.ok) $$(".choice", root).find(x => e.opts[+x.dataset.k].ok).classList.add("ok");
          mark(i, o.ok);
        });
      } else if (e.t === "type") {
        const inp = $(".gram-in", root);
        const check = () => {
          if (done[i] !== undefined || !inp.value.trim()) return;
          const ok = e.a.some(a => norm(a) === norm(inp.value));
          inp.classList.add(ok ? "ok" : "bad");
          inp.disabled = true;
          mark(i, ok, ok ? "" : `Svaret er: <b>${esc(e.a[0])}</b>`);
        };
        $("[data-chk]", root).onclick = check;
        inp.onkeydown = ev => { if (ev.key === "Enter") { ev.preventDefault(); check(); } };
      } else {
        const words = e.da.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);
        words[0] = words[0].toLowerCase();
        let tiles = words.map((w, k) => ({ w, k }));
        for (let k = 0; k < 6; k++) { tiles = shuffle(tiles); if (tiles.some((t, j) => t.k !== j)) break; }
        const placed = [], ans = $("[data-ans]", root), bank = $("[data-bank]", root), chk = $("[data-chk]", root);
        const draw = () => {
          ans.innerHTML = placed.map((t, k) => `<button class="tile" data-p="${k}">${esc(t.w)}</button>`).join("");
          bank.innerHTML = tiles.map((t, k) => placed.includes(t) ? "" : `<button class="tile" data-b="${k}">${esc(t.w)}</button>`).join("");
          $$("[data-p]", ans).forEach(b => b.onclick = () => { if (done[i] === undefined) { placed.splice(+b.dataset.p, 1); draw(); } });
          $$("[data-b]", bank).forEach(b => b.onclick = () => { if (done[i] === undefined) { placed.push(tiles[+b.dataset.b]); draw(); } });
          chk.disabled = placed.length !== tiles.length || done[i] !== undefined;
        };
        draw();
        $("[data-clr]", root).onclick = () => { if (done[i] === undefined) { placed.length = 0; draw(); } };
        chk.onclick = () => {
          const mine = norm(placed.map(t => t.w).join(" "));
          const ok = [e.da].concat(e.alt || []).some(a => norm(a) === mine);
          ans.classList.add(ok ? "ok" : "bad");
          chk.disabled = true;
          mark(i, ok, `<b>${esc(e.da)}</b>`);
        };
      }
    });
    $$("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));

    function finish() {
      const score = Object.values(done).filter(Boolean).length, total = exs.length;
      const wrongs = exs.map((e, i) => done[i] ? null : { q: e.q || e.da, a: e.t === "mc" ? e.o[e.a] : e.t === "type" ? e.a[0] : e.da }).filter(Boolean);
      if (wrongs.length) S.mistakes.grammar[g.id] = { date: today(), items: wrongs }; else delete S.mistakes.grammar[g.id];
      bump("grammar");
      const old = gramBest(g.id);
      if (!old || score > old.score) S.grammar[g.id] = { score, total };
      save();
      addXP(score * 2, "grammatik");
      if (score === total) confetti();
      if (PD2.GRAMMAR.every(x => gramBest(x.id))) award("grammar");
      $("#gramRes").innerHTML = `<div class="card stage" style="margin-top:16px">
        <div class="word-big">${score}/${total}</div>
        <p style="font-weight:800">${score === total ? "🎉 Perfekt!" : score >= total * 0.75 ? "👏 Flot klaret!" : "Læs reglerne igen, og prøv en gang til."}</p>
        <div class="row" style="justify-content:center">
          <button class="btn write" id="gramAgain">Prøv igen</button>
          ${next ? `<a class="btn ghost" href="#/grammar/${next.id}">Næste lektion →</a>` : `<a class="btn ghost" href="#/grammar">Alle lektioner</a>`}
        </div></div>`;
      $("#gramAgain").onclick = () => { grammarLesson(g.id); window.scrollTo(0, 0); };
    }
  }

  // ---------- Øvebank: endless generated grammar drills ----------
  const DRILL_INFO = {
    inversion: { ico: "🔄", name: "Inversion: verbet på plads 2", en: "Inversion: the verb in second place",
      rule: "Når sætningen begynder med fx en tid (i dag, i går, om morgenen) eller derfor/heldigvis, kommer verbet lige efter – og så subjektet.",
      ruleEn: "When the sentence starts with a time (i dag, i går …) or derfor/heldigvis, the verb comes next – then the subject." },
    adverb: { ico: "🚫", name: "Ikke, altid, aldrig …", en: "Where to put ikke, altid, aldrig …",
      rule: "Hovedsætning: verbum + ikke. Med inversion: verbum + subjekt + ikke. Efter fordi, at, hvis …: subjekt + ikke + verbum.",
      ruleEn: "Main clause: verb + ikke. With inversion: verb + subject + ikke. After fordi, at, hvis …: subject + ikke + verb." },
    conj: { ico: "🔗", name: "Bindeord", en: "Conjunctions",
      rule: "og, men, eller, så, for binder to hovedsætninger. fordi, selvom, hvis, når, da, mens, at, om starter en ledsætning.",
      ruleEn: "og, men, eller, så, for join two main clauses. fordi, selvom, hvis, når, da, mens, at, om start a subordinate clause." },
    adj: { ico: "🎨", name: "Tillægsord: stor, stort, store", en: "Adjective endings",
      rule: "en + tillægsord (en stor bil). et + tillægsord + t (et stort hus). den/det + tillægsord + e (den store bil, det store hus).",
      ruleEn: "en-words: no ending. et-words: add -t. After den/det: add -e." },
    verb: { ico: "⏰", name: "Verbets tid: nu, i går, har …", en: "Verb tenses",
      rule: "Nu → nutid (spiser). I går → datid (spiste). har/er + førnutid (har spist, er gået).",
      ruleEn: "Now → present (spiser). Yesterday → past (spiste). har/er + past participle (har spist, er gået)." }
  };
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const pickOne = a => a[Math.floor(Math.random() * a.length)];
  const restRole = r => /^(til|på|hjemme|ind)\b/.test(r) ? "A" : "O";

  function drillQuestion(type) {
    const D = PD2.DRILLS;
    const [subj, subjEn] = pickOne(D.subjects), act = pickOne(D.acts);
    const [, pres, past, aux, part, rest, actEn] = act;
    const R = restRole(rest);
    if (type === "inversion") {
      const isPast = Math.random() < .35;
      const [start, startEn] = pickOne(isPast ? D.pastStarters : D.nowStarters), verb = isPast ? past : pres;
      return {
        kind: "order",
        prompt: `Skriv sætningen, så den begynder med <b>»${esc(cap(start))}«</b>:<div class="drill-base">${esc(cap(subj))} ${esc(verb)} ${esc(rest)}.</div>`,
        chunks: [start, verb, subj, rest], answers: [[start, verb, subj, rest]],
        markup: `[A|${cap(start)}] [V|${verb}] [S|${subj}] [${R}|${rest}].`,
        en: `${cap(startEn)} ${subjEn} ${isPast ? "(past) " : ""}${actEn}.`
      };
    }
    if (type === "adverb") {
      const pattern = pickOne(["main", "inv", "sub"]);
      const [adv, advEn] = pattern === "sub" ? pickOne(D.adverbs.slice(0, 3)) : pickOne(D.adverbs);
      if (pattern === "main") return {
        kind: "order",
        prompt: `Sæt <b>»${esc(adv)}«</b> ind på den rigtige plads:<div class="drill-base">${esc(cap(subj))} ${esc(pres)} ${esc(rest)}.</div>`,
        chunks: [subj, pres, adv, rest], answers: [[subj, pres, adv, rest]],
        markup: `[S|${cap(subj)}] [V|${pres}] [N|${adv}] [${R}|${rest}].`, en: `${cap(subjEn)} ${advEn} ${actEn}.`
      };
      if (pattern === "inv") {
        const [start, startEn] = pickOne(D.nowStarters.filter(s => s[0] !== "derfor" && s[0] !== "heldigvis"));
        return {
          kind: "order",
          prompt: `Begynd med <b>»${esc(cap(start))}«</b>, og sæt <b>»${esc(adv)}«</b> ind:<div class="drill-base">${esc(cap(subj))} ${esc(pres)} ${esc(rest)}.</div>`,
          chunks: [start, pres, subj, adv, rest], answers: [[start, pres, subj, adv, rest]],
          markup: `[A|${cap(start)}] [V|${pres}] [S|${subj}] [N|${adv}] [${R}|${rest}].`, en: `${cap(startEn)} ${subjEn} ${advEn} ${actEn}.`
        };
      }
      const [main, mainEn] = pickOne(D.becauseMain);
      return {
        kind: "order",
        prompt: `Gør sætningen færdig med <b>»fordi«</b>:<div class="drill-base">${esc(main)}, … (${esc(subj)} ${esc(pres)} ${esc(adv)} ${esc(rest)})</div>`,
        lead: `${main},`,
        chunks: ["fordi", subj, adv, pres, rest], answers: [["fordi", subj, adv, pres, rest]],
        markup: `${main}, [C|fordi] [S|${subj}] [N|${adv}] [V|${pres}] [${R}|${rest}].`, en: `${mainEn}, because ${subjEn} ${advEn} ${actEn}.`
      };
    }
    if (type === "conj") {
      const [s, a, en] = pickOne(D.conj);
      const capd = /^___/.test(s), norm1 = a.toLowerCase();
      const opts = shuffle([norm1].concat(shuffle(D.conjWords.filter(w => w !== norm1)).slice(0, 3))).map(w => capd ? cap(w) : w);
      return {
        kind: "mc", prompt: `Vælg det bindeord, der passer:<div class="drill-base">${esc(s).replace("___", '<span class="blank">____</span>')}</div>`,
        options: opts, answer: a,
        markup: s.replace("___", `[C|${a}]`), en, why: `${a} =`, whyEn: D.conjEn[norm1]
      };
    }
    if (type === "adj") {
      const [base, tForm, eForm, adjEn] = pickOne(D.adjs), [g, noun, nounEn] = pickOne(D.adjNouns);
      const def = Math.random() < .45, art = def ? (g === "en" ? "den" : "det") : g;
      const answer = def ? eForm : g === "et" ? tForm : base;
      return {
        kind: "mc", prompt: `Skriv tillægsordet <b>»${esc(base)}«</b> i den rigtige form:<div class="drill-base">${art} <span class="blank">____</span> ${esc(noun)}</div>`,
        options: shuffle([...new Set([base, tForm, eForm])]), answer,
        markup: `[O|${art} ${answer} ${noun}]`, en: `${def ? "the" : "a"} ${adjEn} ${nounEn}`,
        why: def ? `Efter ${art} får tillægsordet altid -e.` : g === "et" ? `${noun} er et et-ord, så tillægsordet får -t.` : `${noun} er et en-ord, så tillægsordet har ingen endelse.`
      };
    }
    // verb tenses
    const tense = pickOne(["now", "past", "perfect"]);
    const options = shuffle([...new Set([pres, past, part])]);
    if (tense === "now") return {
      kind: "mc", prompt: `Vælg den rigtige form af <b>»at ${esc(act[0])}«</b>:<div class="drill-base">Nu <span class="blank">____</span> ${esc(subj)} ${esc(rest)}.</div>`,
      options, answer: pres, markup: `[A|Nu] [V|${pres}] [S|${subj}] [${R}|${rest}].`, en: `Now ${subjEn} ${actEn}.`, why: "Nu → nutid (-r)."
    };
    if (tense === "past") return {
      kind: "mc", prompt: `Vælg den rigtige form af <b>»at ${esc(act[0])}«</b>:<div class="drill-base">I går <span class="blank">____</span> ${esc(subj)} ${esc(rest)}.</div>`,
      options, answer: past, markup: `[A|I går] [V|${past}] [S|${subj}] [${R}|${rest}].`, en: `Yesterday ${subjEn} (past) ${actEn}.`, why: "I går → datid."
    };
    return {
      kind: "mc", prompt: `Vælg den rigtige form af <b>»at ${esc(act[0])}«</b>:<div class="drill-base">${esc(cap(subj))} ${aux} <span class="blank">____</span> ${esc(rest)}.</div>`,
      options, answer: part, markup: `[S|${cap(subj)}] [V|${aux} ${part}] [${R}|${rest}].`, en: `${cap(subjEn)} ${aux === "er" ? "has" : "has/have"} (done): ${actEn}.`, why: `${aux} + førnutid: ${aux} ${part}.`
    };
  }

  function drillPage(type) {
    const info = DRILL_INFO[type];
    if (!info) return grammarList();
    const ROUND = 10;
    let n = 0, score = 0, streak = 0;
    S.drills = S.drills || {};
    function show() {
      const q = drillQuestion(type);
      app.innerHTML = `
        <a class="back" href="#/grammar">← Grammatik</a>
        <h1>${info.ico} ${esc(info.name)}</h1>
        <details class="card drill-rule"><summary><b>💡 Reglen</b> <span class="muted small">(tryk for at vise)</span></summary>
          <p>${esc(info.rule)}</p><p class="small muted" lang="en">🇬🇧 ${esc(info.ruleEn)}</p>${gramLegend()}</details>
        <div class="card stage" style="margin-top:12px">
          <div class="row" style="justify-content:space-between"><span class="pill">${n + 1}/${ROUND}</span><span class="pill">✅ ${score}${streak >= 3 ? ` · 🔥 ${streak}` : ""}</span></div>
          <div class="drill-q">${q.prompt}</div>
          <div id="dw"></div>
          <div id="dfb" class="quiz-after"></div>
        </div>`;
      const fb = ok => {
        if (ok) { score++; streak++; } else streak = 0;
        $("#dfb").innerHTML = `<p>${ok ? "✅ Rigtigt!" : "❌ Ikke helt. Sådan skal det være:"}</p>
          <p class="gram-da">${gramHtml(q.markup)}</p>
          <p class="small muted" lang="en">${esc(q.en)}</p>
          ${q.why ? `<p class="small">💡 ${esc(q.why)}${q.whyEn ? ` <span lang="en">${esc(q.whyEn)}</span>` : ""}</p>` : ""}
          <button class="btn write" id="dnext">${n + 1 < ROUND ? "Næste →" : "Se resultat"}</button>`;
        $("#dnext").focus();
        $("#dnext").onclick = () => { n++; if (n < ROUND) show(); else finish(); };
      };
      const w = $("#dw");
      if (q.kind === "mc") {
        w.innerHTML = `<div class="answers no-tr">${q.options.map(o => `<button class="choice" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
        let locked = false;
        $$(".choice", w).forEach(b => b.onclick = () => {
          if (locked) return; locked = true;
          const ok = b.dataset.o === q.answer;
          b.classList.add(ok ? "ok" : "bad");
          if (!ok) $$(".choice", w).find(x => x.dataset.o === q.answer).classList.add("ok");
          fb(ok);
        });
      } else {
        let tiles = q.chunks.map((t, i) => ({ t, i }));
        for (let k = 0; k < 6; k++) { tiles = shuffle(tiles); if (tiles.some((x, j) => x.i !== j)) break; }
        const placed = [];
        w.innerHTML = `${q.lead ? `<p class="drill-lead">${esc(q.lead)}</p>` : ""}<div class="tiles answer" id="dans"></div><div class="tiles" id="dbank"></div>
          <div class="row" style="justify-content:center;margin-top:10px"><button class="btn write" id="dchk" disabled>Tjek</button><button class="btn ghost" id="dclr">Ryd</button></div>`;
        let done = false;
        const draw = () => {
          $("#dans").innerHTML = placed.map((x, k) => `<button class="tile" data-p="${k}">${esc(x.t)}</button>`).join("");
          $("#dbank").innerHTML = tiles.map((x, k) => placed.includes(x) ? "" : `<button class="tile" data-b="${k}">${esc(x.t)}</button>`).join("");
          $$("#dans .tile").forEach(b => b.onclick = () => { if (!done) { placed.splice(+b.dataset.p, 1); draw(); } });
          $$("#dbank .tile").forEach(b => b.onclick = () => { if (!done) { placed.push(tiles[+b.dataset.b]); draw(); } });
          $("#dchk").disabled = done || placed.length !== tiles.length;
        };
        draw();
        $("#dclr").onclick = () => { if (!done) { placed.length = 0; draw(); } };
        $("#dchk").onclick = () => {
          done = true;
          const mine = norm(placed.map(x => x.t).join(" "));
          const ok = q.answers.some(a => norm(a.join(" ")) === mine);
          $("#dans").classList.add(ok ? "ok" : "bad");
          $("#dchk").disabled = true;
          fb(ok);
        };
      }
    }
    function finish() {
      const best = S.drills[type] || 0;
      if (score > best) S.drills[type] = score;
      bump("grammar"); save();
      addXP(score * 2, "øvebank");
      if (score === ROUND) confetti();
      app.innerHTML = `<a class="back" href="#/grammar">← Grammatik</a>
        <h1>${info.ico} ${esc(info.name)}</h1>
        <div class="card stage"><div class="word-big">${score}/${ROUND}</div>
          <p style="font-weight:800">${score === ROUND ? "🎉 Perfekt!" : score >= 7 ? "👏 Flot!" : "Øvelse gør mester – prøv en runde til."}${score > best && best ? " 🏆 Ny rekord!" : ""}</p>
          <div class="row" style="justify-content:center"><button class="btn write" id="dagain">Ny runde</button><a class="btn ghost" href="#/grammar">Grammatik</a></div></div>`;
      $("#dagain").onclick = () => { n = 0; score = 0; streak = 0; show(); };
      $("#dagain").focus();
    }
    show();
  }

  // ---------- Skabeloner (writing templates) ----------
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Escapes the text and highlights the template's fixed phrases.
  function markFixed(text, tpl) {
    const re = new RegExp(tpl.marks.map(m => reEsc(esc(m))).sort((a, b) => b.length - a.length).join("|"), "g");
    return esc(text).replace(re, m => `<mark class="fixed">${m}</mark>`);
  }
  const skeletonHtml = tpl => markFixed(tpl.skeleton, tpl).replace(/\[([^\]]*)\]/g, '<span class="ph">$1</span>');

  function templatesPage(openId) {
    // A link to another exam's template (e.g. shared) switches to that exam.
    if (openId && !EX().WRITING.some(w => w.tpl === openId)) {
      const k = Object.keys(PD2.EXAMS).find(x => PD2.EXAMS[x].WRITING.some(w => w.tpl === openId));
      if (k) { S.exam = k; save(); renderStats(); }
    }
    // Only the templates used by the chosen exam's writing tasks.
    const tasks = EX().WRITING, T = {};
    Object.values(PD2.TEMPLATES).forEach(t => { if (tasks.some(w => w.tpl === t.id)) T[t.id] = t; });
    app.innerHTML = `
      <a class="back" href="#/writing">← Alle skriveopgaver</a>
      <h1>📋 Skabeloner til skrivning <span class="tag">${META().name} · ${META().cefr}</span></h1>
      <div class="card">
        <p style="margin-top:0">Til prøven skal du begynde og afslutte teksten på en passende måde. Lær én fast skabelon til hver teksttype, så har du altid starten, afsnittene og slutningen klar – og kan bruge tiden på indholdet.</p>
        <ol class="small" style="margin-bottom:0">
          <li>Tryk på <b>Vis skabelon</b> og læs den højt (🔊).</li>
          <li>Øv de faste vendinger med <b>🧠 Lær udenad</b>, indtil du kan dem.</li>
          <li>Skriv en af opgaverne og brug skabelonen. Modelsvarene følger skabelonen ord for ord.</li>
        </ol>
        <p class="small muted" style="margin-bottom:0">Skabelonerne passer til ${META().name}. Skift prøve øverst for at se skabelonerne til de andre prøver.</p>
      </div>
      <div class="stack" style="margin-top:16px">
        ${Object.values(T).map(t => {
          const ts = tasks.filter(w => w.tpl === t.id);
          return `<div class="card tpl-card" id="tpl-${t.id}">
            <h2 style="margin:0 0 4px">${t.ico} ${esc(t.name)}</h2>
            <p class="muted small" style="margin:0 0 8px">${esc(t.use)}</p>
            <div class="chips">${ts.map(w => `<a class="chip" href="#/writing/${w.id}">${esc(w.title)}</a>`).join("")}</div>
            <div class="row" style="margin-top:12px">
              <button class="btn ghost sm" data-show="${t.id}">📋 Vis skabelon</button>
              <button class="btn ghost sm" data-say="${t.id}">🔊 Læs op</button>
              <button class="btn write sm" data-learn="${t.id}">🧠 Lær udenad</button>
            </div>
            <div class="tpl-body" data-body="${t.id}"></div>
          </div>`;
        }).join("")}
      </div>`;
    const body = id => $(`[data-body="${id}"]`);
    function show(id) {
      const t = T[id], b = body(id);
      if (b.dataset.mode === "show") { b.innerHTML = ""; b.dataset.mode = ""; return; }
      b.dataset.mode = "show";
      b.innerHTML = `<p class="small muted" style="margin-top:12px"><mark class="fixed">Markeret</mark> = fast, lær det udenad. <span class="ph">Felter</span> = udfyld selv.</p>
        <div class="model tpl">${skeletonHtml(t)}</div><p class="small" style="margin-top:10px">💡 ${esc(t.tip)}</p>`;
    }
    function learn(id, level) {
      const t = T[id], b = body(id);
      level = level || 1;
      b.dataset.mode = "learn";
      let k = 0;
      const lines = t.marks.map(m => {
        let wi = 0;
        return m.split(/(\s+)/).map(tok => {
          const mm = tok.match(/^([^A-Za-zÆØÅæøå]*)([A-Za-zÆØÅæøå-]{2,})([^A-Za-zÆØÅæøå]*)$/);
          if (!mm) return esc(tok);
          const hide = level === 3 || (level === 2 ? wi % 3 !== 2 : wi % 3 === 1);
          wi++;
          if (!hide) return esc(tok);
          return `${esc(mm[1])}<input class="cl no-tr" data-a="${esc(mm[2])}" data-k="${k++}" size="${Math.max(3, mm[2].length)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Manglende ord">${esc(mm[3])}`;
        }).join("");
      });
      b.innerHTML = `<div class="row" style="margin-top:12px">
          ${[[1, "Let"], [2, "Mellem"], [3, "Svær"]].map(([l, n]) => `<button class="chip ${l === level ? "on" : ""}" data-lvl="${l}">${n}</button>`).join("")}
          <span class="small muted">Skriv de ord, der mangler.</span>
        </div>
        <div class="cloze">${lines.map(l => `<p class="cloze-line">${l}</p>`).join("")}</div>
        <div class="row"><button class="btn write sm" data-check>Tjek</button><span class="cl-res" aria-live="polite"></span></div>`;
      $$("[data-lvl]", b).forEach(c => c.onclick = () => learn(id, +c.dataset.lvl));
      const ins = $$("input.cl", b);
      ins.forEach((inp, i) => inp.onkeydown = e => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (ins[i + 1]) ins[i + 1].focus(); else $("[data-check]", b).click();
      });
      if (ins[0]) ins[0].focus({ preventScroll: true });
      let rewarded = false;
      $("[data-check]", b).onclick = () => {
        let ok = 0;
        ins.forEach(inp => {
          const good = inp.value.trim().toLowerCase() === inp.dataset.a.toLowerCase();
          inp.classList.toggle("ok", good); inp.classList.toggle("bad", !good);
          const nx = inp.nextElementSibling;
          if (nx && nx.classList.contains("cl-ans")) nx.remove();
          if (!good) inp.insertAdjacentHTML("afterend", `<span class="cl-ans">${esc(inp.dataset.a)}</span>`);
          if (good) ok++;
        });
        $(".cl-res", b).textContent = ok === ins.length ? `🎉 Alle ${ok} rigtige!` : `${ok} af ${ins.length} rigtige. Prøv igen!`;
        if (!rewarded && ok) { rewarded = true; addXP(Math.min(25, ok), "skabelon"); }
        if (ok === ins.length && level === 3) { award("template"); confetti(); }
      };
    }
    $$("[data-show]").forEach(x => x.onclick = () => show(x.dataset.show));
    $$("[data-learn]").forEach(x => x.onclick = () => learn(x.dataset.learn));
    $$("[data-say]").forEach(x => x.onclick = () => speak(T[x.dataset.say].skeleton.replace(/\[[^\]]*\]/g, ", ")));
    if (openId && T[openId]) {
      learn(openId);
      $(`#tpl-${openId}`).scrollIntoView({ block: "start" });
    }
  }

  // ---------- Games ("Spil & leg") ----------
  const GD = () => PD2.GAMES;
  const lines = txt => txt.split("\n").map(l => l.trim()).filter(Boolean);
  const NOUNS = () => lines(GD().NOUNS).map(l => { const [w, en] = l.split("="); const [g, ...n] = w.split(" "); return { g, w: n.join(" "), en }; });
  const VERBS = () => lines(GD().VERBS).map(l => l.split("|"));
  const ORDLE = () => lines(GD().ORDLE).map(l => l.split("="));
  // perExam: the content (and so the record) depends on the chosen exam. lower: fewer is better.
  const GAMES = [
    { id: "vocab", ico: "📚", name: "Ordtræner", desc: "Lær over 5.000 danske ord: vælg den rigtige engelske betydning. Ord, du har svært ved, kommer igen, indtil du kan dem.", unit: "ord lært" },
    { id: "words", href: "#/words", ico: "⚡", name: "Ordjagt", desc: "60 sekunder. Hvor mange ord kan du nå?", perExam: true, unit: "point" },
    { id: "memory", ico: "🃏", name: "Vendespil", desc: "Vend kortene og find parrene: det danske ord og den engelske betydning.", perExam: true, lower: true, unit: "træk" },
    { id: "ordle", ico: "🔤", name: "Ordle", desc: "Gæt et dansk ord på fem bogstaver. Du har seks forsøg.", unit: "vundet" },
    { id: "gender", ico: "🎯", name: "En eller et?", desc: "Hurtigt nu: hedder det en eller et? Du har 45 sekunder.", unit: "point" },
    { id: "order", ico: "🧩", name: "Byg sætningen", desc: "Sæt ordene i den rigtige rækkefølge. Husk: verbet står på plads 2!", perExam: true, unit: "rigtige" },
    { id: "dictation", ico: "🎧", name: "Lyt og skriv", desc: "Hør en sætning og skriv den. Træner både lytning og stavning.", perExam: true, unit: "%" },
    { id: "verbs", ico: "🔁", name: "Bøj verbet", desc: "Nutid, datid og førnutid af de vigtigste verber.", unit: "rigtige" },
    { id: "idioms", ico: "💬", name: "Talemåder", desc: "Hvad betyder \"Der er ingen ko på isen\"? Lær sjove danske udtryk.", unit: "rigtige" }
  ];
  const gameInfo = id => GAMES.find(g => g.id === id);
  const bestKey = id => (gameInfo(id).perExam ? id + ":" + S.exam : id);
  const gameBest = id => (id === "words" ? wordBest() || undefined : id === "vocab" ? vLearnedCount() || undefined : S.games.best[bestKey(id)]);
  const gameHead = g => `<a class="back" href="#/games">← Alle spil</a><h1>${g.ico} ${g.name}</h1>`;

  function markPlayed(id) {
    S.games.played[id] = (S.games.played[id] || 0) + 1;
    if (Object.keys(S.games.played).length >= 5) award("gamer");
    save();
  }
  // Saves the score; returns true when it beats the old record.
  function recordGame(id, score) {
    const g = gameInfo(id), k = bestKey(id), old = S.games.best[k];
    const better = old === undefined || (g.lower ? score < old : score > old);
    if (better) S.games.best[k] = score;
    markPlayed(id);
    return better && old !== undefined;
  }
  function gameOver(g, big, line, again, extra) {
    app.innerHTML = `${gameHead(g)}
      <div class="card stage">
        <div class="word-big">${big}</div>
        <p style="font-weight:800">${line}</p>
        ${extra || ""}
        <div class="row" style="justify-content:center;margin-top:12px"><button class="btn words" id="again">Spil igen</button><a class="btn ghost" href="#/games">Alle spil</a></div>
      </div>`;
    $("#again").onclick = again;
    $("#again").focus();
  }
  const recordLine = (rec, id) => rec ? "🏆 Ny rekord!" : (gameBest(id) !== undefined ? `Rekord: ${gameBest(id)} ${gameInfo(id).unit}` : "");

  function gamesHub() {
    app.innerHTML = `
      <a class="back" href="#/">← Forside</a>
      <h1>🎮 Spil & leg</h1>
      <p class="muted">Sjove små spil, der træner ordforråd, grammatik, lytning og stavning. Alle spil giver XP. Spillene med ${META().name}-ikonet følger den prøve, du har valgt.</p>
      <div class="grid grid-2 games">
        ${GAMES.map(g => {
          const b = gameBest(g.id);
          return `<a class="task words" href="${g.href || "#/games/" + g.id}">
            <span class="emoji">${g.ico}</span>
            <h2>${g.name}</h2>
            <p class="muted">${esc(g.desc)}</p>
            <span class="row">${g.perExam ? `<span class="pill">${META().name}</span>` : ""}${b !== undefined ? `<span class="pill">🏆 ${b} ${g.unit}</span>` : ""}</span>
          </a>`;
        }).join("")}
      </div>`;
  }

  function gameRoute(id) {
    const fn = { vocab: () => vocabGame().home(), memory: memoryGame, ordle: ordleGame, gender: genderGame, order: orderGame, dictation: dictationGame, verbs: verbsGame, idioms: idiomsGame }[id];
    (fn || gamesHub)();
  }

  // Shared multiple-choice round used by Bøj verbet and Talemåder.
  // makeQ(n) returns { prompt, options, answer, after }.
  function quiz(g, rounds, makeQ, onDone) {
    let n = 0, score = 0;
    function show() {
      const q = makeQ(n);
      app.innerHTML = `${gameHead(g)}
        <div class="card stage">
          <div class="row" style="justify-content:space-between"><span class="pill">${n + 1}/${rounds}</span><span class="pill">✅ ${score}</span></div>
          ${q.prompt}
          <div class="answers${q.noTr ? " no-tr" : ""}"${q.lang ? ` lang="${q.lang}"` : ""}>${q.options.map(o => `<button class="choice" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>
          <div id="after" class="quiz-after"></div>
        </div>`;
      let locked = false;
      $$(".answers .choice").forEach(b => b.onclick = () => {
        if (locked) return;
        locked = true;
        const ok = b.dataset.o === q.answer;
        b.classList.add(ok ? "ok" : "bad");
        if (!ok) $$(".answers .choice").find(x => x.dataset.o === q.answer).classList.add("ok");
        if (ok) score++;
        $("#after").innerHTML = `<p>${ok ? "✅ Rigtigt!" : "❌ Ikke helt."} ${q.after}</p>
          <button class="btn words" id="nx">${n + 1 < rounds ? "Næste →" : "Se resultat"}</button>`;
        $("#nx").focus();
        $("#nx").onclick = () => { n++; if (n < rounds) show(); else onDone(score); };
      });
    }
    show();
  }

  // 📚 Ordtræner: every word in the hover dictionary as a multiple-choice drill,
  // ordered so the words used most in the exam texts come first.
  const VOCAB_SET = 50, LEARNED = 3, VOCAB_ROUND = 10;
  let vocabCache = null;
  const meaningOf = v => v.replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
  function vocabList() {
    if (vocabCache) return vocabCache;
    const freq = new Map();
    (JSON.stringify(PD2.EXAMS).toLowerCase().match(/[a-zæøåé]+(?:-[a-zæøåé]+)*/g) || []).forEach(t => freq.set(t, (freq.get(t) || 0) + 1));
    const seen = new Set(), list = [];
    PD2.GLOSSARY_RAW.split("\n").forEach((line, i) => {
      const k = line.indexOf("=");
      if (k < 1) return;
      const w = line.slice(0, k).trim(), v = line.slice(k + 1).trim(), m = meaningOf(v);
      // Skip names, English titles, and entries whose "meaning" is the word itself.
      if (seen.has(w) || w.length < 2 || !/^[a-zæøåé][a-zæøåé-]*$/.test(w) || /^\(/.test(v) || /a name|english/i.test(v) || !m || m.toLowerCase() === w) return;
      seen.add(w);
      list.push({ w, v, m, f: freq.get(w) || 0, i });
    });
    list.sort((a, b) => b.f - a.f || a.i - b.i);
    list.forEach((x, n) => { x.n = n; });
    return (vocabCache = list);
  }
  const vBox = w => S.vocab.b[w] || 0;
  const vLearned = w => vBox(w) >= LEARNED;
  const vLearnedCount = () => Object.values(S.vocab.b).filter(b => b >= LEARNED).length;
  const vSets = () => { const l = vocabList(), out = []; for (let i = 0; i < l.length; i += VOCAB_SET) out.push(l.slice(i, i + VOCAB_SET)); return out; };
  const fmtN = n => n.toLocaleString("da-DK");

  function vocabGame() {
    const g = gameInfo("vocab");
    function home() {
      const sets = vSets(), total = vocabList().length, learned = vLearnedCount();
      const hard = Object.keys(S.vocab.h).length;
      const next = sets.findIndex(s => s.some(x => !vLearned(x.w)));
      app.innerHTML = `${gameHead(g)}
        <p class="muted">Vælg den rigtige betydning. Et ord er <b>lært</b>, når du har svaret rigtigt ${LEARNED} gange i træk. Ord, du svarer forkert på, kommer på listen over svære ord, indtil du kan dem. Ordene i sæt 1 er dem, der bruges mest i prøveteksterne.</p>
        <div class="card stage">
          <div class="word-big">${fmtN(learned)} <span class="muted" style="font-size:.45em">/ ${fmtN(total)} ord lært</span></div>
          <div class="bar" style="max-width:520px;margin:0 auto 14px"><i style="width:${learned / total * 100}%"></i></div>
          <div class="row" style="justify-content:center;margin-bottom:12px">
            <button class="chip ${S.vocab.dir === "da" ? "on" : ""}" data-vdir="da">Dansk → engelsk</button>
            <button class="chip ${S.vocab.dir === "en" ? "on" : ""}" data-vdir="en">Engelsk → dansk</button>
            <button class="chip ${S.vocab.say ? "on" : ""}" id="vsay">🔊 Læs ordene op</button>
          </div>
          <div class="row" style="justify-content:center">
            ${next >= 0 ? `<button class="btn words" data-play="set:${next}">▶ Fortsæt med sæt ${next + 1}</button>` : ""}
            <button class="btn ghost" data-play="hard" ${hard ? "" : "disabled"}>🔁 Svære ord (${hard})</button>
            <button class="btn ghost" data-play="review" ${learned >= 4 ? "" : "disabled"}>🎲 Gentag lærte ord</button>
          </div>
        </div>
        <h2 style="margin-top:22px">Ordsæt <span class="muted small">${sets.length} sæt à ${VOCAB_SET} ord</span></h2>
        <p class="small muted">Tryk på et sæt for at se og høre ordene, før du øver dem.</p>
        <div class="vsets">${sets.map((s, i) => {
          const d = s.filter(x => vLearned(x.w)).length;
          return `<a class="vset ${d === s.length ? "done" : ""}" href="#/games/vocab/${i + 1}">
            <b>Sæt ${i + 1}</b><span class="small muted no-tr">${esc(s[0].w)} …</span>
            <span class="bar"><i style="width:${d / s.length * 100}%"></i></span><span class="small">${d}/${s.length}</span></a>`;
        }).join("")}</div>`;
      $$("[data-vdir]").forEach(b => b.onclick = () => { S.vocab.dir = b.dataset.vdir; save(); home(); });
      $("#vsay").onclick = () => { S.vocab.say = !S.vocab.say; save(); home(); };
      $$("[data-play]").forEach(b => b.onclick = () => play(b.dataset.play));
    }
    function setPage(si) {
      const s = vSets()[si];
      if (!s) return home();
      const d = s.filter(x => vLearned(x.w)).length;
      app.innerHTML = `<a class="back" href="#/games/vocab">← Ordtræner</a>
        <h1>📚 Sæt ${si + 1} <span class="tag">${d}/${s.length} lært</span></h1>
        <p class="muted">Læs ordene og tryk på 🔊 for at høre dem. Når du er klar, så start øvelsen.</p>
        <div class="row" style="margin-bottom:14px"><button class="btn words" data-play="set:${si}">▶ Øv sæt ${si + 1}</button>
          ${si > 0 ? `<a class="btn ghost sm" href="#/games/vocab/${si}">← Sæt ${si}</a>` : ""}
          ${si + 1 < vSets().length ? `<a class="btn ghost sm" href="#/games/vocab/${si + 2}">Sæt ${si + 2} →</a>` : ""}</div>
        <div class="card vlist">${s.map(x => `<div class="vrow">
            <button class="say" data-say="${esc(x.w)}" aria-label="Hør ${esc(x.w)}">🔊</button>
            <b class="no-tr">${esc(x.w)}</b>
            <span lang="en">${esc(x.v)}</span>
            <span class="vmark">${vLearned(x.w) ? "✅" : vBox(x.w) ? "•".repeat(vBox(x.w)) : ""}</span>
          </div>`).join("")}</div>`;
      $$("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
      $$("[data-play]").forEach(b => b.onclick = () => play(b.dataset.play));
    }
    function pickWords(kind) {
      const all = vocabList();
      if (kind === "hard") return shuffle(all.filter(x => S.vocab.h[x.w])).slice(0, VOCAB_ROUND);
      if (kind === "review") return shuffle(all.filter(x => vLearned(x.w))).slice(0, VOCAB_ROUND);
      // Mostly words already in progress (so they come back until learned), plus a few new ones.
      const s = vSets()[+kind.split(":")[1]] || [];
      const busy = shuffle(s.filter(x => vBox(x.w) > 0 && !vLearned(x.w))).sort((a, b) => vBox(b.w) - vBox(a.w)).slice(0, 7);
      const fresh = shuffle(s.filter(x => !vBox(x.w)));
      const done = shuffle(s.filter(x => vLearned(x.w)));
      return shuffle(busy.concat(fresh).slice(0, VOCAB_ROUND).concat(done).slice(0, VOCAB_ROUND));
    }
    // Three wrong options of similar frequency, never with the same meaning as the answer.
    function distractors(x) {
      const all = vocabList(), out = [], used = new Set([x.m.toLowerCase()]);
      for (let tries = 0; out.length < 3 && tries < 200; tries++) {
        const span = tries < 60 ? 300 : all.length;
        const y = all[Math.max(0, Math.min(all.length - 1, x.n + Math.floor((Math.random() - 0.5) * 2 * span)))];
        if (y === x || used.has(y.m.toLowerCase()) || out.some(o => o.w === y.w)) continue;
        used.add(y.m.toLowerCase());
        out.push(y);
      }
      return out;
    }
    function play(kind) {
      const words = pickWords(kind);
      if (!words.length) { toast("Der er ingen ord at øve her endnu."); return home(); }
      const dir = S.vocab.dir, results = [];
      let n = 0, score = 0, locked = false, cur, advance = null;
      const before = vLearnedCount();
      const onKey = e => {
        if (!$("#vq")) return;
        if (/^[1-4]$/.test(e.key) && !locked) { const b = $$("#vq .choice")[+e.key - 1]; if (b) b.click(); }
        else if (e.key === "Enter" && advance) { e.preventDefault(); advance(); }
      };
      document.addEventListener("keydown", onKey);
      onLeave(() => document.removeEventListener("keydown", onKey));
      function show() {
        cur = words[n];
        const opts = shuffle([cur].concat(distractors(cur)));
        locked = false; advance = null;
        app.innerHTML = `${gameHead(g)}
          <div class="card stage no-tr" id="vq">
            <div class="row" style="justify-content:space-between"><span class="pill">${n + 1}/${words.length}</span><span class="pill">✅ ${score}</span></div>
            <div class="word-big" ${dir === "en" ? 'lang="en"' : ""}>${esc(dir === "da" ? cur.w : cur.m)}</div>
            ${dir === "da" ? `<button class="btn ghost sm" id="vhear">🔊 Hør ordet</button>` : ""}
            <p class="muted small">${dir === "da" ? "Hvad betyder ordet på engelsk?" : "Hvad hedder det på dansk?"}</p>
            <div class="answers"${dir === "da" ? ' lang="en"' : ""}>${opts.map((o, i) => `<button class="choice" data-w="${esc(o.w)}"><span class="key">${i + 1}</span>${esc(dir === "da" ? o.m : o.w)}</button>`).join("")}</div>
            <div id="vfb" class="quiz-after"></div>
          </div>`;
        const hear = $("#vhear"); if (hear) hear.onclick = () => speak(cur.w);
        if (dir === "da" && S.vocab.say) speak(cur.w);
        $$("#vq .choice").forEach(b => b.onclick = () => answer(b, opts));
      }
      function answer(b, opts) {
        if (locked) return;
        locked = true;
        const pick = opts.find(o => o.w === b.dataset.w), ok = pick === cur;
        b.classList.add(ok ? "ok" : "bad");
        if (!ok) $(`#vq .choice[data-w="${CSS.escape(cur.w)}"]`).classList.add("ok");
        if (ok) {
          score++;
          S.vocab.b[cur.w] = vBox(cur.w) + 1;
          if (vLearned(cur.w)) delete S.vocab.h[cur.w];
        } else {
          S.vocab.b[cur.w] = 0;
          S.vocab.h[cur.w] = 1;
        }
        save();
        results.push({ x: cur, ok });
        if (dir === "en" && S.vocab.say) speak(cur.w);
        advance = () => { advance = null; n++; if (n < words.length) show(); else finish(); };
        $("#vfb").innerHTML = `<p>${ok ? "✅" : "❌"} <b>${esc(cur.w)}</b> = <span lang="en">${esc(cur.v)}</span>${vLearned(cur.w) ? " · <b>lært!</b> ⭐" : ""}</p>
          ${ok ? "" : `<button class="btn words" id="vnext">Næste →</button>`}`;
        if (ok) { const at = n; setTimeout(() => { if (advance && n === at && $("#vq")) advance(); }, 1100); }
        else { $("#vnext").onclick = () => advance && advance(); $("#vnext").focus(); }
      }
      function finish() {
        document.removeEventListener("keydown", onKey);
        const now = vLearnedCount(), gained = Math.max(0, now - before);
        markPlayed("vocab");
        bump("vocab");
        addXP(score + gained * 2, "ordtræner");
        if (now >= 100) award("vocab100");
        if (now >= 1000) award("vocab1000");
        if (score === words.length) confetti();
        app.innerHTML = `${gameHead(g)}
          <div class="card stage">
            <div class="word-big">${score}/${words.length}</div>
            <p style="font-weight:800">${gained ? `⭐ ${gained} nye ord lært!` : score === words.length ? "Fejlfrit!" : "Godt øvet – ordene kommer igen."} I alt ${fmtN(now)} ord lært.</p>
            <div class="vlist small" style="text-align:left;max-width:620px;margin:12px auto">${results.map(r => `<div class="vrow">
              <button class="say" data-say="${esc(r.x.w)}" aria-label="Hør ${esc(r.x.w)}">🔊</button>
              <b class="no-tr">${esc(r.x.w)}</b><span lang="en">${esc(r.x.v)}</span><span class="vmark">${r.ok ? "✅" : "❌"}</span></div>`).join("")}</div>
            <div class="row" style="justify-content:center;margin-top:12px">
              <button class="btn words" id="again">Næste runde</button>
              <button class="btn ghost" id="vhome">Alle ordsæt</button>
            </div>
          </div>`;
        $$("[data-say]").forEach(x => x.onclick = () => speak(x.dataset.say));
        $("#again").onclick = () => play(kind);
        $("#vhome").onclick = () => { if (location.hash === "#/games/vocab") home(); else location.hash = "#/games/vocab"; };
        $("#again").focus();
      }
      show();
    }
    return { home, setPage };
  }

  // 🃏 Vendespil
  function memoryGame() {
    const g = gameInfo("memory"), PAIRS = 6;
    function start() {
      const pairs = shuffle(EX().WORDS).slice(0, PAIRS);
      const cards = shuffle(pairs.flatMap(([da, en], i) => [{ i, t: da, lang: "da" }, { i, t: en, lang: "en" }]));
      let first = null, lock = false, moves = 0, found = 0;
      app.innerHTML = `${gameHead(g)}
        <p class="muted">Vend to kort ad gangen. Find det danske ord og dets engelske betydning – med så få træk som muligt.</p>
        <div class="row" style="justify-content:center;margin-bottom:12px"><span class="pill">🔄 <span id="mv">0</span> træk</span><span class="pill">✅ <span id="fd">0</span>/${PAIRS} par</span></div>
        <div class="memory">${cards.map(c => `<button class="mcard" data-i="${c.i}" aria-label="Skjult kort"><span class="front no-tr" lang="${c.lang}">${esc(c.t)}</span></button>`).join("")}</div>`;
      $$(".mcard").forEach(b => b.onclick = () => {
        if (lock || b.classList.contains("up")) return;
        b.classList.add("up");
        b.setAttribute("aria-label", b.textContent);
        if (!first) { first = b; return; }
        moves++;
        $("#mv").textContent = moves;
        if (first.dataset.i === b.dataset.i) {
          first.classList.add("done"); b.classList.add("done");
          first = null; found++;
          $("#fd").textContent = found;
          if (found === PAIRS) setTimeout(() => finish(moves, pairs), 600);
        } else {
          lock = true;
          const a = first; first = null;
          setTimeout(() => { a.classList.remove("up"); b.classList.remove("up"); a.setAttribute("aria-label", "Skjult kort"); b.setAttribute("aria-label", "Skjult kort"); lock = false; }, 900);
        }
      });
    }
    function finish(moves, pairs) {
      if (!$(".memory")) return; // left the game meanwhile
      const rec = recordGame("memory", moves);
      addXP(Math.max(5, 30 - (moves - PAIRS) * 2), "vendespil");
      if (rec) confetti();
      gameOver(g, `${moves} træk`, recordLine(rec, "memory"), start,
        `<div class="chips" style="justify-content:center">${pairs.map(([da, en]) => `<span class="chip">${esc(da)} = <span lang="en">${esc(en)}</span></span>`).join("")}</div>`);
    }
    start();
  }

  // 🔤 Ordle
  function ordleGame() {
    const g = gameInfo("ordle"), KB = ["qwertyuiopå", "asdfghjklæø", "zxcvbnm"];
    let target, en, rows, cur, over;
    function start() {
      const list = ORDLE();
      [target, en] = list[Math.floor(Math.random() * list.length)];
      rows = []; cur = ""; over = false;
      app.innerHTML = `${gameHead(g)}
        <p class="muted">Gæt et dansk ord på fem bogstaver. Efter hvert gæt viser farverne, hvor tæt du er: <b class="okey">grøn</b> = rigtigt bogstav på rigtigt sted, <b class="nkey">gul</b> = bogstavet er med, men et andet sted, grå = bogstavet er ikke med.</p>
        <div class="ordle no-tr" id="board" aria-live="polite"></div>
        <div class="ordle-msg" id="omsg"></div>
        <div class="kb no-tr" id="kb"></div>`;
      draw();
    }
    function mark(guess) {
      const res = Array(5).fill("no"), t = [...target], used = Array(5).fill(false), gs = [...guess];
      gs.forEach((c, i) => { if (c === t[i]) { res[i] = "hit"; used[i] = true; } });
      gs.forEach((c, i) => {
        if (res[i] === "hit") return;
        const j = t.findIndex((x, k) => !used[k] && x === c);
        if (j >= 0) { res[i] = "near"; used[j] = true; }
      });
      return res;
    }
    function draw() {
      const all = over ? rows : rows.concat([{ w: cur, r: null }]);
      let html = "";
      for (let i = 0; i < 6; i++) {
        const row = all[i] || { w: "", r: null }, ch = [...row.w];
        html += `<div class="orow">${[0, 1, 2, 3, 4].map(k => `<span class="otile ${row.r ? row.r[k] : ch[k] ? "typed" : ""}">${ch[k] ? esc(ch[k].toUpperCase()) : ""}</span>`).join("")}</div>`;
      }
      $("#board").innerHTML = html;
      const state = {};
      rows.forEach(r => [...r.w].forEach((c, k) => {
        const s = r.r[k];
        state[c] = state[c] === "hit" || s === "hit" ? "hit" : state[c] === "near" || s === "near" ? "near" : "no";
      }));
      $("#kb").innerHTML = KB.map((line, li) => `<div class="kbrow">
        ${li === 2 ? `<button class="kkey wide" data-key="enter">Gæt</button>` : ""}
        ${[...line].map(c => `<button class="kkey ${state[c] || ""}" data-key="${c}">${c.toUpperCase()}</button>`).join("")}
        ${li === 2 ? `<button class="kkey wide" data-key="back" aria-label="Slet">⌫</button>` : ""}</div>`).join("");
      $$("#kb .kkey").forEach(b => b.onclick = () => press(b.dataset.key));
    }
    function msg(t) { $("#omsg").innerHTML = t; }
    function press(k) {
      if (over || !$("#board")) return;
      msg("");
      if (k === "back") cur = cur.slice(0, -1);
      else if (k === "enter") {
        if (cur.length < 5) { msg("Ordet skal have fem bogstaver."); return; }
        rows.push({ w: cur, r: mark(cur) });
        const won = cur === target;
        cur = "";
        if (won || rows.length === 6) return end(won);
      } else if (cur.length < 5) cur += k;
      draw();
    }
    function end(won) {
      over = true;
      draw();
      markPlayed("ordle");
      if (won) {
        S.games.best.ordle = (S.games.best.ordle || 0) + 1;
        save();
        award("ordle");
        addXP(30 - (rows.length - 1) * 4, "ordle");
        confetti();
      }
      msg(`${won ? ["🤯 Genialt!", "🌟 Fantastisk!", "🎉 Flot!", "👏 Godt gået!", "😅 Det var tæt på!", "😮‍💨 Puha, i sidste forsøg!"][rows.length - 1] : "😢 Ikke denne gang."}
        Ordet var <b>${esc(target.toUpperCase())}</b> <span lang="en">(${esc(en)})</span>.
        <div class="row" style="justify-content:center;margin-top:10px"><button class="btn words" id="again">Nyt ord</button><a class="btn ghost" href="#/games">Alle spil</a></div>`);
      $("#again").onclick = start;
    }
    const onKey = e => {
      if (e.ctrlKey || e.metaKey || e.altKey || !$("#board")) return;
      const k = e.key.toLowerCase();
      if (k === "enter") { e.preventDefault(); press("enter"); }
      else if (k === "backspace") press("back");
      else if (/^[a-zæøå]$/.test(k)) press(k);
    };
    document.addEventListener("keydown", onKey);
    onLeave(() => document.removeEventListener("keydown", onKey));
    start();
  }

  // 🎯 En eller et?
  function genderGame() {
    const g = gameInfo("gender"), SECS = 45;
    function intro() {
      app.innerHTML = `${gameHead(g)}
        <div class="card stage">
          <div class="word-big">🏆 ${gameBest("gender") || 0}</div>
          <p class="muted">Din rekord</p>
          <p>Du har ${SECS} sekunder. Tryk <b>en</b> eller <b>et</b> – eller brug piletasterne ← og →. Tre rigtige i træk giver dobbelt point.</p>
          <button class="btn words" id="go">Start!</button>
        </div>`;
      $("#go").onclick = play;
    }
    function play() {
      let left = SECS, score = 0, combo = 0, deck = shuffle(NOUNS()), idx = 0, locked = false, cur;
      app.innerHTML = `${gameHead(g)}
        <div class="card stage">
          <div class="row" style="justify-content:space-between"><span class="pill">⏱️ <span id="t">${SECS}</span>s</span><span class="pill">✅ <span id="s">0</span></span></div>
          <div class="word-big" id="w"></div>
          <div class="combo" id="c"></div>
          <div class="answers"><button class="choice" data-g="en">en</button><button class="choice" data-g="et">et</button></div>
          <p class="small muted" id="fb" style="min-height:1.6em;margin-top:12px"></p>
        </div>`;
      function next() {
        if (idx >= deck.length) { deck = shuffle(NOUNS()); idx = 0; }
        cur = deck[idx++];
        $("#w").textContent = cur.w;
        $$(".answers .choice").forEach(b => b.classList.remove("ok", "bad"));
        locked = false;
      }
      function pick(gg) {
        if (locked || left <= 0) return;
        locked = true;
        const ok = gg === cur.g;
        $(`.choice[data-g="${gg}"]`).classList.add(ok ? "ok" : "bad");
        if (!ok) $(`.choice[data-g="${cur.g}"]`).classList.add("ok");
        if (ok) { combo++; score += combo >= 3 ? 2 : 1; } else combo = 0;
        $("#s").textContent = score;
        $("#c").textContent = combo >= 3 ? `🔥 Combo x${combo} – dobbelt point!` : "";
        $("#fb").innerHTML = `${ok ? "✅" : "❌"} ${cur.g} ${esc(cur.w)} – <span lang="en">${esc(cur.en)}</span>`;
        setTimeout(next, ok ? 300 : 1000);
      }
      $$(".answers .choice").forEach(b => b.onclick = () => pick(b.dataset.g));
      const onKey = e => { if (e.key === "ArrowLeft") pick("en"); else if (e.key === "ArrowRight") pick("et"); };
      document.addEventListener("keydown", onKey);
      onLeave(() => document.removeEventListener("keydown", onKey));
      next();
      every(1000, () => {
        left--;
        const t = $("#t"); if (t) t.textContent = left;
        if (left <= 0) done();
      });
      function done() {
        clearTimers();
        document.removeEventListener("keydown", onKey);
        const rec = recordGame("gender", score);
        addXP(score * 2, "en eller et");
        if (rec) confetti();
        gameOver(g, score, recordLine(rec, "gender"), play,
          `<p class="small muted">Tip: De fleste danske navneord (ca. 75 %) er en-ord. Lær altid ordet sammen med en eller et.</p>`);
      }
    }
    intro();
  }

  // 🧩 Byg sætningen
  function orderGame() {
    const g = gameInfo("order"), ROUNDS = 6;
    let list, n, score;
    const clean = s => s.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);
    function start() {
      list = shuffle(GD().ORDER[S.exam] || GD().ORDER.pd2).slice(0, ROUNDS);
      n = 0; score = 0;
      show();
    }
    function show() {
      const s = list[n], words = clean(s.da);
      words[0] = words[0].toLowerCase();
      let tiles = words.map((w, i) => ({ w, i }));
      for (let k = 0; k < 6; k++) { tiles = shuffle(tiles); if (tiles.some((t, i) => t.i !== i)) break; }
      const placed = [];
      app.innerHTML = `${gameHead(g)}
        <div class="card stage">
          <div class="row" style="justify-content:space-between"><span class="pill">${n + 1}/${ROUNDS}</span><span class="pill">✅ ${score}</span></div>
          <p class="muted">Tryk på ordene i den rigtige rækkefølge. Tryk på et ord i sætningen for at fjerne det igen.</p>
          <div class="tiles answer" id="ans" aria-label="Din sætning"></div>
          <div class="tiles" id="bank"></div>
          <div class="row" style="justify-content:center;margin-top:12px"><button class="btn words" id="chk" disabled>Tjek</button><button class="btn ghost" id="clr">Ryd</button></div>
          <div id="after" class="quiz-after"></div>
        </div>`;
      function draw() {
        $("#ans").innerHTML = placed.map((t, k) => `<button class="tile" data-k="${k}">${esc(t.w)}</button>`).join("");
        $("#bank").innerHTML = tiles.map((t, k) => placed.includes(t) ? "" : `<button class="tile" data-b="${k}">${esc(t.w)}</button>`).join("");
        $$("#ans .tile").forEach(b => b.onclick = () => { placed.splice(+b.dataset.k, 1); draw(); });
        $$("#bank .tile").forEach(b => b.onclick = () => { placed.push(tiles[+b.dataset.b]); draw(); });
        $("#chk").disabled = placed.length !== tiles.length;
      }
      draw();
      $("#clr").onclick = () => { placed.length = 0; draw(); };
      $("#chk").onclick = () => {
        const mine = norm(placed.map(t => t.w).join(" "));
        const ok = [s.da].concat(s.alt || []).some(a => norm(a) === mine);
        if (ok) score++;
        $("#ans").classList.add(ok ? "ok" : "bad");
        $$("#ans .tile, #bank .tile").forEach(b => b.disabled = true);
        $("#chk").remove(); $("#clr").remove();
        $("#after").innerHTML = `<p>${ok ? "✅ Rigtigt!" : "❌ Ikke helt. Sådan kan det skrives:"}</p>
          <p class="big-sentence">${esc(s.da)}</p>
          ${s.alt && !ok ? `<p class="small muted">Eller: ${s.alt.map(esc).join(" / ")}</p>` : ""}
          <p class="small muted" lang="en">${esc(s.en)}</p>
          <button class="btn words" id="nx">${n + 1 < ROUNDS ? "Næste →" : "Se resultat"}</button>`;
        $("#nx").focus();
        $("#nx").onclick = () => { n++; if (n < ROUNDS) show(); else finish(); };
      };
    }
    function finish() {
      const rec = recordGame("order", score);
      addXP(score * 5, "byg sætningen");
      if (score === ROUNDS) { award("builder"); confetti(); }
      gameOver(g, `${score}/${ROUNDS}`, recordLine(rec, "order"), start,
        `<p class="small muted">Husk reglen: I en hovedsætning står verbet altid på plads 2 – også når sætningen begynder med fx "I dag" eller "Om morgenen".</p>`);
    }
    start();
  }

  // 🎧 Lyt og skriv
  function dictationGame() {
    const g = gameInfo("dictation"), ROUNDS = 5;
    let list, n, total;
    const toks = s => norm(s).split(" ").filter(Boolean);
    function start() {
      list = shuffle(GD().DICTATION[S.exam] || GD().DICTATION.pd2).slice(0, ROUNDS);
      n = 0; total = 0;
      show();
    }
    function show() {
      const s = list[n];
      const canSpeak = "speechSynthesis" in window;
      app.innerHTML = `${gameHead(g)}
        <div class="card stage">
          <div class="row" style="justify-content:space-between"><span class="pill">${n + 1}/${ROUNDS}</span><span class="pill">🎯 ${Math.round(total / Math.max(1, n) * 100)} %</span></div>
          <div class="row" style="justify-content:center;margin:12px 0"><button class="btn words" id="play">🔊 Hør sætningen</button><button class="btn ghost" id="slow">🐢 Langsomt</button></div>
          ${!canSpeak ? `<p class="small muted">Din browser kan ikke læse op. Tryk på "Vis sætningen" og øv dig i at skrive den af.</p>`
            : !daVoice ? `<p class="small muted">Tip: Hvis udtalen lyder forkert, har din enhed måske ingen dansk stemme. Den kan tit tilføjes under sprogindstillingerne.</p>` : ""}
          <input class="short dict" id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Skriv det, du hører …" aria-label="Skriv sætningen">
          <div class="row" style="justify-content:center;margin-top:12px"><button class="btn words" id="chk">Tjek</button><button class="btn ghost sm" id="reveal">Vis sætningen</button></div>
          <div id="after" class="quiz-after"></div>
        </div>`;
      $("#play").onclick = () => speak(s.da);
      $("#slow").onclick = () => speak(s.da, null, 0.6);
      $("#inp").focus();
      setTimeout(() => { if ($("#inp")) speak(s.da); }, 400);
      let checked = false;
      const check = given => {
        if (checked) return;
        checked = true;
        const want = toks(s.da), got = toks(given);
        // Longest common subsequence: which words of the sentence were written correctly.
        const L = Array.from({ length: want.length + 1 }, () => Array(got.length + 1).fill(0));
        for (let i = want.length - 1; i >= 0; i--) for (let j = got.length - 1; j >= 0; j--)
          L[i][j] = want[i] === got[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
        const hit = new Set();
        for (let i = 0, j = 0; i < want.length && j < got.length;) {
          if (want[i] === got[j]) { hit.add(i); i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++;
        }
        const extra = Math.max(0, got.length - hit.size);
        const part = Math.max(0, (hit.size - extra * 0.5) / want.length);
        total += part;
        const shown = s.da.split(/\s+/);
        $("#inp").disabled = true;
        $("#inp").classList.add(part === 1 ? "ok" : "bad");
        $("#chk").remove(); $("#reveal").remove();
        $("#after").innerHTML = `<p>${part === 1 ? "✅ Helt rigtigt!" : `Du fik ${hit.size} af ${want.length} ord rigtigt.`}</p>
          <p class="big-sentence">${shown.map((w, i) => `<span class="dw ${hit.has(i) ? "ok" : "miss"}">${esc(w)}</span>`).join(" ")}</p>
          <p class="small muted" lang="en">${esc(s.en)}</p>
          <button class="btn words" id="nx">${n + 1 < ROUNDS ? "Næste →" : "Se resultat"}</button>`;
        $("#nx").focus();
        $("#nx").onclick = () => { n++; if (n < ROUNDS) show(); else finish(); };
      };
      $("#chk").onclick = () => check($("#inp").value);
      $("#reveal").onclick = () => check("");
      $("#inp").onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); check($("#inp").value); } };
    }
    function finish() {
      const pct = Math.round(total / ROUNDS * 100);
      const rec = recordGame("dictation", pct);
      addXP(Math.round(pct / 4), "lyt og skriv");
      if (rec || pct === 100) confetti();
      gameOver(g, `${pct} %`, recordLine(rec, "dictation"), start);
    }
    start();
  }

  // 🔁 Bøj verbet
  function verbsGame() {
    const g = gameInfo("verbs"), ROUNDS = 10;
    const TENSES = [null, ["nutid", "I dag …"], ["datid", "I går …"], ["førnutid", "Jeg har/er …"]];
    function start() {
      const verbs = shuffle(VERBS()).slice(0, ROUNDS);
      quiz(g, ROUNDS, n => {
        const v = verbs[n], t = 1 + Math.floor(Math.random() * 3), answer = v[t];
        const inf = v[0].replace(/^at /, ""), stem = inf.replace(/e$/, "");
        const wrong = {
          1: [stem + "er", inf, v[2]],
          2: [stem + "ede", stem + "te", inf + "de", v[1]],
          3: ["har " + stem + "et", "har " + stem + "t", v[3].startsWith("har") ? v[3].replace(/^har/, "er") : v[3].replace(/^er/, "har"), "har " + v[2]]
        }[t];
        const options = shuffle([answer].concat(shuffle(wrong.filter((w, i, a) => w !== answer && a.indexOf(w) === i)).slice(0, 3)));
        return {
          prompt: `<div class="word-big">${esc(v[0])}</div><p>Hvad er <b>${TENSES[t][0]}</b>? <span class="muted">(${TENSES[t][1]})</span></p>`,
          options, answer, noTr: true, // hovering an option would give the answer away
          after: `<b>${esc(v[0])} – ${esc(v[1])} – ${esc(v[2])} – ${esc(v[3])}</b> <span class="muted" lang="en">(${esc(v[4])})</span>`
        };
      }, score => {
        const rec = recordGame("verbs", score);
        addXP(score * 3, "bøj verbet");
        if (rec || score === ROUNDS) confetti();
        gameOver(g, `${score}/${ROUNDS}`, recordLine(rec, "verbs"), start,
          `<p class="small muted">Mange af de vigtigste verber er uregelmæssige. Lær dem i rækker: gå – går – gik – er gået.</p>`);
      });
    }
    start();
  }

  // 💬 Talemåder
  function idiomsGame() {
    const g = gameInfo("idioms"), ROUNDS = 8;
    function start() {
      const all = GD().IDIOMS, picks = shuffle(all).slice(0, ROUNDS);
      quiz(g, ROUNDS, n => {
        const d = picks[n];
        const others = shuffle(all.filter(x => x !== d)).slice(0, 2).map(x => x.en);
        return {
          prompt: `<p class="idiom">"${esc(d.da)}"</p><p class="muted">Hvad betyder det?</p>`,
          options: shuffle([d.en].concat(others)), answer: d.en, lang: "en",
          after: `<span class="muted">Ordret:</span> <i lang="en">${esc(d.lit)}</i>`
        };
      }, score => {
        const rec = recordGame("idioms", score);
        addXP(score * 3, "talemåder");
        if (rec || score === ROUNDS) confetti();
        gameOver(g, `${score}/${ROUNDS}`, recordLine(rec, "idioms"), start,
          `<p class="small muted">Prøv at bruge en talemåde i din næste mundtlige øvelse – det imponerer!</p>`);
      });
    }
    start();
  }

  // ---------- About ----------
  // ---------- Feedback ----------
  const STAR_WORDS = ["", "Dårlig", "Ikke så god", "OK", "God", "Fantastisk"];
  function feedbackPage(preStars) {
    if (!FEEDBACK_TO) { location.hash = "#/"; return; }
    const from = lastPath;
    let stars = +preStars || 0;
    app.innerHTML = `
      <a class="back" href="#/">← Forside</a>
      <h1>💬 Feedback og bedømmelse</h1>
      <p class="muted">Giv appen stjerner, og fortæl os gerne, hvad der er godt, eller hvad der kan blive bedre. Har du fundet en fejl eller en forkert oversættelse? Skriv gerne på dansk eller engelsk.</p>
      <form class="card stack fb-form" id="fbForm">
        <div><b>Hvad synes du om DanskKlar?</b>
          <div class="stars" role="radiogroup" aria-label="Bedømmelse">${[1, 2, 3, 4, 5].map(n => `<button type="button" class="star-btn" role="radio" data-star="${n}" aria-label="${n} stjerne${n > 1 ? "r" : ""}">★</button>`).join("")}
          <span class="small muted" id="starTxt"></span></div></div>
        <label>Hvad drejer det sig om?
          <select id="fbType"><option>💡 Idé / ønske</option><option>🐞 Fejl i appen</option><option>📝 Fejl i en opgave eller oversættelse</option><option>❤️ Ros</option><option>Andet</option></select></label>
        <label>Din besked <span class="muted small" id="msgReq">(påkrævet)</span>
          <textarea id="fbMsg" rows="6" maxlength="4000" placeholder="Skriv her …"></textarea></label>
        <label>Dit navn <span class="muted small">(valgfrit)</span><input id="fbName" autocomplete="name" maxlength="100"></label>
        <label>Din e-mail <span class="muted small">(valgfrit – hvis du vil have svar)</span><input id="fbMail" type="email" autocomplete="email" maxlength="200"></label>
        <input type="checkbox" id="fbBot" tabindex="-1" autocomplete="off" style="display:none">
        <div class="row"><button class="btn write" id="fbSend" type="submit">Send feedback</button><span class="small muted" id="fbStatus" role="status"></span></div>
        <p class="small muted">Vi sender kun det, du skriver her, plus hvilken prøve og side du kom fra. Se <a href="#/legal">privatlivspolitikken</a>.</p>
      </form>`;
    const drawStars = () => {
      $$(".star-btn").forEach(b => { const on = +b.dataset.star <= stars; b.classList.toggle("on", on); b.setAttribute("aria-checked", +b.dataset.star === stars); });
      $("#starTxt").textContent = stars ? `${stars}/5 – ${STAR_WORDS[stars]}` : "Tryk på en stjerne";
      $("#msgReq").textContent = stars ? "(valgfrit)" : "(påkrævet, hvis du ikke giver stjerner)";
      if (stars && !$("#fbMsg").value.trim() && $("#fbType").selectedIndex === 0) $("#fbType").value = stars >= 4 ? "❤️ Ros" : "💡 Idé / ønske";
    };
    $$(".star-btn").forEach(b => b.onclick = () => { stars = +b.dataset.star; drawStars(); });
    drawStars();
    $("#fbForm").onsubmit = async e => {
      e.preventDefault();
      const msg = $("#fbMsg").value.trim(), st = $("#fbStatus"), btn = $("#fbSend");
      if (!msg && !stars) { st.textContent = "Giv stjerner eller skriv en besked først."; return; }
      if ($("#fbBot").checked) return;
      btn.disabled = true; st.textContent = "Sender …";
      try {
        const mail = $("#fbMail").value.trim(), body = {
          _subject: stars ? `DanskKlar bedømmelse: ${"★".repeat(stars)}${"☆".repeat(5 - stars)} (${stars}/5)` : `DanskKlar feedback: ${$("#fbType").value}`,
          _template: "table", _captcha: "false",
          Stjerner: stars ? `${"★".repeat(stars)}${"☆".repeat(5 - stars)} ${stars}/5 – ${STAR_WORDS[stars]}` : "(ingen)",
          Navn: $("#fbName").value.trim() || "(ikke oplyst)", Emne: $("#fbType").value, Besked: msg || "(ingen besked)",
          Prøve: S.exam.toUpperCase(), Side: "#" + from, Version: APP_VERSION
        };
        if (mail) { body.email = mail; body._replyto = mail; }
        const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(FEEDBACK_TO)}`, {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(body)
        });
        const j = await res.json().catch(() => ({}));
        if (!res.ok || String(j.success) === "false") throw new Error(j.message || res.status);
        if (stars) { S.rated = stars; save(); }
        app.innerHTML = `<a class="back" href="#/">← Forside</a><div class="card stage" style="margin-top:16px">
          <div class="word-big">🙏</div><p style="font-weight:800">Tak for din feedback!</p>
          <p class="muted">Den er sendt. Vi læser alle beskeder.</p>
          ${KOFI ? `<p class="small muted">Kan du lide appen? DanskKlar er gratis og uden reklamer – du kan give en kop kaffe, hvis du har lyst.</p>` : ""}
          <div class="row" style="justify-content:center"><a class="btn write" href="#/">Til forsiden</a>${kofiBtn("btn ghost")}</div></div>`;
      } catch (err) {
        btn.disabled = false;
        st.textContent = navigator.onLine === false ? "Du er offline – prøv igen, når du har internet." : "Det lykkedes ikke at sende. Prøv igen om lidt.";
      }
    };
  }

  // ---------- Privatliv, vilkår og ophavsret ----------
  const LEGAL_UPDATED = "8. oktober 2026";
  // Name of the private person behind DanskKlar (data controller). Empty = "the private person behind DanskKlar".
  const LEGAL_OWNER = "";
  function legalPage() {
    const en = t => `<p class="small muted" lang="en">🇬🇧 ${t}</p>`;
    const mail = FEEDBACK_TO ? `<a href="mailto:${esc(FEEDBACK_TO)}">${esc(FEEDBACK_TO)}</a>` : "";
    app.innerHTML = `
      <a class="back" href="#/">← Forside</a>
      <h1>⚖️ Privatliv, vilkår og ophavsret</h1>
      <p class="muted">Senest opdateret: ${LEGAL_UPDATED}</p>
      <nav class="chips legal-toc" aria-label="Indhold">
        <a class="chip" href="#/legal" data-jump="lg-om">Hvem står bag</a><a class="chip" href="#/legal" data-jump="lg-priv">Privatlivspolitik</a>
        <a class="chip" href="#/legal" data-jump="lg-cookies">Cookies</a><a class="chip" href="#/legal" data-jump="lg-vilkaar">Vilkår</a>
        <a class="chip" href="#/legal" data-jump="lg-ophav">Ophavsret</a><a class="chip" href="#/legal" data-jump="lg-ai">AI og indhold</a>
        <a class="chip" href="#/legal" data-jump="lg-a11y">Tilgængelighed</a><a class="chip" href="#/legal" data-jump="lg-kontakt">Kontakt</a></nav>
      <div class="stack legal">
        <div class="card" id="lg-om"><h2>Hvem står bag DanskKlar?</h2>
          <p>DanskKlar (danskklar.com) er et gratis privat projekt, der hjælper med at øve til Prøve i Dansk 1, 2 og 3. Der er ingen reklamer, ingen betalte funktioner, og du skal ikke oprette en konto. Frivillige bidrag via Ko-fi bruges kun til at dække udgifter (fx domæne) og til at lave flere øvelser – alt indhold er gratis for alle, uanset om man giver noget.</p>
          <p>DanskKlar er <b>ikke</b> en officiel side og har ingen forbindelse til Styrelsen for International Rekruttering og Integration (SIRI), Uddannelses- og Forskningsministeriet, sprogcentrene eller andre, der laver eller afholder prøverne.</p>
          ${en("DanskKlar is a free private project to practise for the Danish language exams PD1–PD3. No ads, no paid features, no accounts. Voluntary Ko-fi contributions only cover costs (e.g. the domain) and new exercises; all content stays free for everyone. It is not an official site and is not affiliated with SIRI, the Ministry or any language school.")}</div>

        <div class="card" id="lg-priv"><h2>Privatlivspolitik</h2>
          <h3>Dataansvarlig</h3>
          <p>Dataansvarlig for de få oplysninger, DanskKlar modtager (kun feedback, som du selv sender), er ${LEGAL_OWNER ? `<b>${esc(LEGAL_OWNER)}</b>, privatperson og ejer af DanskKlar` : "privatpersonen bag DanskKlar"}${FEEDBACK_TO ? `, e-mail ${mail}` : ""}.</p>
          <h3>Dine data bliver på din enhed</h3>
          <p>Dit fremskridt (XP, svar, kladder, fejl, prøveplan, ord du har lært, indstillinger) gemmes kun i din egen browser (localStorage) på din enhed. Det bliver ikke sendt til os eller andre. Du kan slette det når som helst med <b>Nulstil fremskridt</b> på forsiden eller ved at rydde browserens data for danskklar.com.</p>
          <h3>Vi indsamler ikke data om dig</h3>
          <p>Vi bruger ingen statistik- eller sporingsværktøjer, ingen reklamenetværk og ingen sociale-medie-knapper, der sporer dig. Skrifttypen ligger på vores egen server, så din browser ikke kontakter Google for at hente den.</p>
          <h3>Feedback og bedømmelse</h3>
          <p>Hvis du sender feedback eller en bedømmelse, sendes det, du skriver (stjerner, emne, besked og – hvis du vil – navn og e-mail), sammen med valgt prøve, den side du kom fra og appens version, til os som en e-mail. Det sker gennem tjenesten <b>FormSubmit</b> (formsubmit.co), som videresender beskeden; den kan blive behandlet på servere uden for EU. Vi bruger kun oplysningerne til at forbedre appen og til at svare dig, hvis du har skrevet din e-mail. Grundlaget er dit samtykke, når du trykker <i>Send</i> (GDPR art. 6, stk. 1, litra a). Vi sletter beskederne, når de ikke længere er relevante, og senest efter 2 år. Skriv ikke følsomme personoplysninger i beskeden.</p>
          <h3>Tale og mikrofon</h3>
          <p>Når du optager dig selv i taleøvelserne, bliver lydoptagelsen kun i din browser og bliver ikke gemt eller sendt til os. <b>Live-tekst</b> (tale til tekst) bruger browserens indbyggede talegenkendelse; i fx Chrome og Edge kan lyden blive sendt til browserproducentens (Google/Microsoft) server for at blive lavet om til tekst. Oplæsning af tekst bruger browserens egne stemmer. Mikrofonen bruges kun, når du selv trykker på optag.</p>
          <h3>Links til andre sider</h3>
          <p>Knappen <b>☕ Støt DanskKlar</b> åbner Ko-fi (ko-fi.com) i et nyt vindue. Først når du klikker, gælder Ko-fis egne vilkår og privatlivspolitik. Betalinger håndteres af Ko-fi og deres betalingsudbydere – vi ser ikke dine betalingsoplysninger. Siden hostes på GitHub Pages, og domænet går gennem Cloudflare; som alle webservere kan de registrere tekniske oplysninger som IP-adresse i deres logfiler for at levere og beskytte siden.</p>
          <h3>Modtagere og databehandlere</h3>
          <ul>
            <li><b>FormSubmit</b> (formsubmit.co) – videresender feedback som e-mail.</li>
            <li><b>Google (Gmail)</b> – e-mailkontoen, som feedback modtages i.</li>
            <li><b>GitHub Pages</b> (GitHub Inc.) – hosting af appens filer.</li>
            <li><b>Cloudflare</b> – domæne (DNS) og beskyttelse af siden.</li>
          </ul>
          <p>Nogle af dem er placeret i USA. Overførsel sker på grundlag af EU-Kommissionens standardkontraktbestemmelser og/eller EU-U.S. Data Privacy Framework, som tjenesterne selv angiver. Vi sælger eller deler aldrig oplysninger med andre.</p>
          <h3>Børn</h3>
          <p>Alle kan bruge DanskKlar uden at give personoplysninger. Er du under 15 år, så spørg en forælder, før du skriver dit navn eller din e-mail i feedback-formularen.</p>
          <h3>Sikkerhed</h3>
          <p>Siden bruger kun krypteret forbindelse (HTTPS). Da dit fremskridt kun ligger i din browser, er det beskyttet af din egen enhed – brug ikke DanskKlar på en delt computer, hvis du ikke vil have, at andre ser dine svar.</p>
          <h3>Dine rettigheder</h3>
          <p>Du har ret til at få indsigt i, rette og slette de oplysninger, du har sendt til os, til at få dem udleveret (dataportabilitet), til at gøre indsigelse og til at trække dit samtykke tilbage. Vi svarer senest inden for 1 måned. Skriv til os (se Kontakt). Du kan også klage til <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener">Datatilsynet</a>.</p>
          ${en("Data controller: " + (LEGAL_OWNER || "the private person behind DanskKlar") + (FEEDBACK_TO ? " (" + FEEDBACK_TO + ")" : "") + ". Recipients/processors: FormSubmit, Google (Gmail), GitHub Pages, Cloudflare – some in the USA, under EU standard contractual clauses / the EU-US Data Privacy Framework; we never sell or share data. Under-15s should ask a parent before entering their name or e-mail. HTTPS only. You may also request a copy of your data and object; we reply within 1 month.")}
          ${en("Your progress is stored only in your own browser (localStorage) and never sent to us. We use no analytics, tracking or ads, and the font is self-hosted. Feedback/ratings you choose to send (and your name/e-mail if you add them) are e-mailed to us via FormSubmit, possibly processed outside the EU, based on your consent; we use them only to improve the app or reply, and delete them within 2 years. Voice recordings stay in your browser; live captions use the browser's speech recognition, which in Chrome/Edge may send audio to Google/Microsoft. The Ko-fi button opens ko-fi.com, which has its own terms; we never see payment details. Hosting is GitHub Pages behind Cloudflare, which may log technical data such as IP addresses. You may request access, correction or deletion and complain to Datatilsynet.")}</div>

        <div class="card" id="lg-cookies"><h2>Cookies</h2>
          <p>DanskKlar bruger <b>ingen cookies</b>. Appen gemmer kun dit eget fremskridt og dine indstillinger lokalt i browseren (localStorage/sessionStorage), og det er nødvendigt for, at appen virker. Derfor er der ingen cookie-banner.</p>
          <p>Når appen er installeret eller har været brugt, gemmer browseren også appens filer (service worker), så den virker uden internet.</p>
          ${en("No cookies are used. Only your own progress and settings are kept in local browser storage, which the app needs to work, plus an offline copy of the app's files.")}</div>

        <div class="card" id="lg-vilkaar"><h2>Vilkår for brug</h2>
          <ul>
            <li>DanskKlar er gratis og må bruges til personlig forberedelse og i undervisning.</li>
            <li>Indholdet er lavet med omhu, men vi kan ikke garantere, at alt er korrekt eller opdateret. Modelsvar, skabeloner, oversættelser, karakterer og vurderinger er vejledende og <b>ikke</b> en officiel bedømmelse. Tjek altid de gældende regler for prøven hos dit sprogcenter eller på uim.dk.</li>
            <li>Brug af appen sker på eget ansvar. Vi er ikke ansvarlige for resultatet af en prøve eller for tab af fremskridt, der kun er gemt i din browser.</li>
            <li>Appen kan blive ændret, sat på pause eller lukket uden varsel.</li>
            <li>Bidrag via Ko-fi er frivillige gaver og giver ikke ret til ydelser.</li>
            <li>Det er ikke tilladt at kopiere DanskKlars eget indhold til kommercielle formål uden tilladelse.</li>
            <li>Feedback, du sender, må vi bruge til at rette fejl og forbedre appen – uden at offentliggøre dit navn.</li>
            <li>Brug ikke appen til at forsøge at snyde ved en prøve. Ved prøven gælder prøvens egne regler.</li>
            <li>Vi kan opdatere disse vilkår og privatlivspolitikken. Datoen øverst viser den seneste ændring; væsentlige ændringer bliver nævnt i appen.</li>
            <li>Dansk ret gælder, og eventuelle tvister afgøres ved de danske domstole. Det ændrer ikke ved dine rettigheder som forbruger efter lovgivningen i dit eget land.</li>
          </ul>
          ${en("Feedback may be used to improve the app without publishing your name. Do not use the app to cheat in an exam. These terms may be updated (see the date at the top). Danish law applies; Danish courts decide disputes, without limiting your consumer rights in your own country.")}
          ${en("Free for personal study and teaching. Content is made with care but without guarantee; model answers, translations and grade estimates are guidance only, not an official assessment. Use at your own risk; we are not liable for exam results or lost local progress. The app may change or close without notice. Ko-fi contributions are voluntary gifts. DanskKlar's own content may not be reused commercially without permission.")}</div>

        <div class="card" id="lg-ophav"><h2>Ophavsret</h2>
          <p><b>Tidligere prøveopgaver:</b> Opgaverne mærket <b>Rigtig prøve</b> stammer fra tidligere Prøve i Dansk-prøver, som myndighederne har offentliggjort som øvemateriale. Ophavsretten tilhører prøvernes ophavsmænd. Tegningerne til de mundtlige opgaver er lavet af Niels Roland, og læseteksterne har de kilder, der står ved hver opgave. De bruges her gratis og kun til øvebrug – de ligger aldrig bag betaling, og frivillige bidrag via Ko-fi er ikke betaling for dem.</p>
          <p><b>PD3-modultests:</b> Sættene i stil med DU3-modultests indeholder nye tekster skrevet til DanskKlar – de er ikke kopier af forlagets materiale.</p>
          <p><b>DanskKlars eget indhold</b> – modelsvar, skabeloner, oversættelser, øvesæt, grammatik, øvebank, spil, ordtræner, ordbog og appens kode og design – © ${new Date().getFullYear()} DanskKlar.</p>
          <p><b>Skrifttype:</b> Nunito, SIL Open Font License 1.1.</p>
          <p><b>Er du rettighedshaver?</b> Hvis du mener, at noget materiale ikke må være her, så skriv til os (se Kontakt) med en beskrivelse af materialet. Så fjerner vi det hurtigst muligt.</p>
          <p class="small"><a href="#/about">Se også Kilder og ophavsret under Om prøven →</a></p>
          ${en("Tasks marked “Rigtig prøve” are past Prøve i Dansk exams published by the authorities as practice material; copyright stays with their makers (oral illustrations by Niels Roland; reading texts credited per task), used here free of charge for practice only – never behind payment, and Ko-fi contributions are not payment for them. The PD3 module-test-style sets contain new texts written for DanskKlar. All other content and the app itself © DanskKlar. Font: Nunito (SIL OFL 1.1). Rights holders can contact us and we will remove material promptly.")}</div>

        <div class="card" id="lg-ai"><h2>AI og indhold</h2>
          <p>En del af DanskKlars indhold – fx modelsvar, oversættelser, forklaringer og øvesæt – er lavet med hjælp fra AI-værktøjer og derefter gennemgået. Der kan alligevel være fejl. Finder du en, så <a href="#/feedback">skriv til os</a>, så retter vi den. Vurderingen af dine tekster i appen er automatiske tjek af fx længde og bindeord – ikke en bedømmelse fra en censor.</p>
          ${en("Parts of the content (model answers, translations, explanations, practice sets) were made with the help of AI tools and then reviewed; mistakes can still occur – please report them. The writing feedback is an automatic check (length, linking words etc.), not an examiner's assessment.")}</div>

        <div class="card" id="lg-a11y"><h2>Tilgængelighed</h2>
          <p>Vi vil gerne have, at alle kan bruge DanskKlar. Appen kan bruges med tastatur, virker på telefon og computer, følger mørk tilstand og har engelsk oversættelse og oplæsning. Opgavebilleder fra de rigtige prøver har ikke altid en fuld tekstbeskrivelse. Har du problemer med at bruge appen, så <a href="#/feedback">skriv til os</a>.</p>
          ${en("We aim for everyone to be able to use DanskKlar: keyboard use, phone and desktop, dark mode, English translations and read-aloud. Pictures from the real exams do not always have a full text description. Please tell us about any accessibility problems.")}</div>

        <div class="card" id="lg-kontakt"><h2>Kontakt</h2>
          <p>Spørgsmål om privatliv, ophavsret eller appen: ${FEEDBACK_TO ? `brug <a href="#/feedback">feedback-formularen</a> eller skriv til ${mail}` : `<a href="https://github.com/johnymaliyil/Danishlearningapp/issues" target="_blank" rel="noopener">skriv til os her</a>`}.</p>
          ${en("Questions about privacy, copyright or the app: use the feedback form" + (FEEDBACK_TO ? " or e-mail " + FEEDBACK_TO : "") + ".")}</div>
      </div>`;
    $$(".legal-toc [data-jump]").forEach(a => a.onclick = e => { e.preventDefault(); const t = document.getElementById(a.dataset.jump); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
  }

  function about() {
    app.innerHTML = `
      <a class="back" href="#/">← Forside</a>
      <h1>ℹ️ Om ${esc(META().full)}</h1>
      <div class="examsw big" role="group" aria-label="Vælg prøve" style="margin-bottom:16px">${examButtons()}</div>
      <div class="stack">
        <div class="card">${META().about}</div>
        <div class="card">
          <h2>Niveauerne</h2>
          <table class="simple">
            <tr><th>Prøve</th><th>Niveau (CEFR)</th><th>Kort sagt</th></tr>
            ${Object.keys(PD2.EXAM_META).sort().map(k => `<tr><td><b>${PD2.EXAM_META[k].name}</b></td><td>${PD2.EXAM_META[k].cefr}</td><td>${esc(PD2.EXAM_META[k].tagline)}</td></tr>`).join("")}
          </table>
        </div>
        <div class="card">
          <h2>🗣️ Mundtlig prøve</h2>
          <p>Taleøvelserne i appen træner både at tale sammenhængende om et emne og at føre en dialog. Tjek de præcise regler og tider for din egen prøve hos din sprogskole.</p>
        </div>
        ${S.exam === "pd2" ? `<div class="card" id="proevedagen">
          <h2>📅 Prøvedagen</h2>
          <ul class="points-list">
            <li>Tag gyldigt billed-ID med, fx pas, kørekort eller opholdskort.</li>
            <li>Kom i god tid – gerne en halv time før.</li>
            <li>Den skriftlige prøve skrives i hånden på papir. Tag en kuglepen med, og øv dig i at skrive i hånden.</li>
            <li>Til læseforståelse er der ingen hjælpemidler. Til skriftlig fremstilling må du bruge ordbøger.</li>
            <li>Sluk mobiltelefonen.</li>
          </ul>
          <h3>⏱️ Tidsplan for den skriftlige prøve</h3>
          <table class="simple"><tr><th>Del</th><th>Opgaver</th><th>Tid</th><th>Hjælpemidler</th></tr>
            <tr><td>Læseforståelse 1</td><td>1-2</td><td>30 min</td><td>Ingen</td></tr>
            <tr><td>Læseforståelse 2</td><td>3-5</td><td>60 min</td><td>Ingen</td></tr>
            <tr><td>Skriftlig fremstilling</td><td>Delprøve 1 + 2</td><td>1½ time</td><td>Ordbøger</td></tr>
          </table>
          <h3>🎯 Gode råd</h3>
          <ul class="points-list">
            <li><b>Læsning:</b> Læs spørgsmålene først. Brug ikke for lang tid på ét spørgsmål, og svar på alle – der er ingen minuspoint for forkerte svar. I opgave 1 skal svaret være kort og præcist.</li>
            <li><b>Skrivning:</b> Brug 5 minutter på at planlægge. Svar på alle punkterne i opgaven. Brug din skabelon til start og slutning. Tæl ordene, og læs teksten igennem til sidst.</li>
            <li><b>Mundtlig:</b> Forbered dit emne hjemme med stikord – ikke en tekst, du læser op. Tal roligt, giv eksempler, og stil også spørgsmål til den anden deltager.</li>
          </ul>
          <h3>⚠️ Typiske fejl</h3>
          <ul class="points-list">
            <li>Teksten mangler en hilsen i starten eller slutningen.</li>
            <li>Et af punkterne i skriveopgaven er glemt.</li>
            <li>For få ord i e-mailen (mindst 100).</li>
            <li>Verbet står ikke på plads 2: "I dag jeg arbejder" i stedet for "I dag arbejder jeg".</li>
            <li>For lange svar i læseopgave 1, med ekstra ord, der ikke hører til svaret.</li>
          </ul>
          <div class="row" style="margin-top:12px">
            <a class="btn read sm" href="#/exam">📝 Prøvesimulering</a>
            <a class="btn speak sm" href="#/speaking/sim">🎬 Mundtlig simulering</a>
            <a class="btn ghost sm" href="#/plan">📅 Min prøveplan</a>
          </div>
        </div>` : ""}
        ${KOFI ? `<div class="card" id="stoet"><h2>☕ Støt DanskKlar</h2>
          <p>DanskKlar er gratis og uden reklamer. Hvis appen hjælper dig, kan du give en kop kaffe på Ko-fi – det hjælper med at betale for domænet og med at lave flere opgaver. Det er helt frivilligt.</p>
          <p>${kofiBtn("btn write")}</p></div>` : ""}
        <div class="card" id="kilder">
          <h2>📚 Kilder og ophavsret</h2>
          <p>Opgaverne, der er mærket <b>Rigtig prøve</b>, kommer fra tidligere prøver i Prøve i Dansk, som de danske myndigheder har offentliggjort som øvemateriale. Ophavsretten tilhører dem, der har lavet prøverne. Tegningerne til de mundtlige opgaver er lavet af <b>Niels Roland</b>, og teksterne i læseopgaverne har deres egne kilder, som står ved hver opgave.</p>
          <p>Alt andet er lavet til DanskKlar: modelsvar, skabeloner, oversættelser, øvesæt, grammatik, spil og ordtræner.</p>
          <p>DanskKlar er gratis, uden reklamer og bruges kun til at øve sig til prøverne. Er du rettighedshaver og ønsker, at noget bliver fjernet, så <a href="https://github.com/johnymaliyil/Danishlearningapp/issues" target="_blank" rel="noopener">skriv til os her</a>. Så fjerner vi det hurtigst muligt.</p>
          <p class="small muted" lang="en">🇬🇧 Tasks marked "Rigtig prøve" come from past Prøve i Dansk exams that the Danish authorities have published as practice material; the copyright belongs to their makers. The oral illustrations are by Niels Roland, and the reading texts keep their own sources, listed with each task. Everything else (model answers, templates, translations, practice sets, grammar, games and the word trainer) was made for DanskKlar. DanskKlar is free and non-commercial. If you are a rights holder and want something removed, please contact us via the link above and it will be taken down promptly.</p>
        </div>
        <p class="small muted">DanskKlar er et uofficielt øveprogram og har ingen forbindelse til de myndigheder, der afholder prøverne. Læs mere under <a href="#/legal">⚖️ Privatliv, vilkår og ophavsret</a>.</p>
      </div>`;
  }

  // ---------- Boot ----------
  $("#footYear").textContent = new Date().getFullYear();
  // Footer shortcuts to a section of the legal page.
  $$(".site-foot [data-legal]").forEach(l => l.onclick = e => {
    e.preventDefault();
    const go = () => { const t = document.getElementById(l.dataset.legal); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); };
    if (location.hash === "#/legal") go(); else { location.hash = "#/legal"; setTimeout(go, 80); }
  });
  touchDay(); save(); renderStats();
  const opening = location.hash.replace(/^#\/?/, "");
  if (!hasChosen() && opening === "") location.replace("#/start");
  else markChosen();
  route();
})();
