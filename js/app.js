(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const app = $("#app");

  // ---------- Storage ----------
  const KEY = "pd2-trainer-v1";
  const today = () => new Date().toISOString().slice(0, 10);
  const blank = () => ({ exam: "pd2", xp: 0, xpDay: { date: today(), xp: 0 }, streak: 0, lastDay: null, badges: [], reading: {}, writing: {}, speaking: { sessions: 0, seconds: 0, done: {} }, words: { best: 0 } });
  let S = blank();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) S = Object.assign(blank(), JSON.parse(raw));
  } catch (e) { /* storage blocked: progress lives in memory only */ }
  if (!PD2.EXAMS[S.exam]) S.exam = "pd2";
  if (S.words && S.words.best !== undefined && S.words.pd2 === undefined) S.words.pd2 = S.words.best; // older saves
  const EX = () => PD2.EXAMS[S.exam];
  // Find an item by id in the current exam, or switch to the exam that has it (e.g. a shared link).
  function findItem(list, id) {
    const here = EX()[list].find(x => x.id === id);
    if (here) return here;
    for (const k of Object.keys(PD2.EXAMS)) {
      const it = PD2.EXAMS[k][list].find(x => x.id === id);
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
    { id: "exam2020", ico: "🏛️", name: "Prøvesæt 2020" },
    { id: "first_write", ico: "✍️", name: "Første tekst" },
    { id: "wordsmith", ico: "🖋️", name: "Ordsmed (150+ ord)" },
    { id: "first_speak", ico: "🎤", name: "Første tale" },
    { id: "dialog", ico: "💬", name: "Samtalepartner" },
    { id: "allround", ico: "🌈", name: "Alsidig" },
    { id: "hunter", ico: "⚡", name: "Ordjæger (15+)" },
    { id: "streak3", ico: "🔥", name: "3 dage i træk" },
    { id: "streak7", ico: "🚀", name: "7 dage i træk" },
    { id: "level5", ico: "👑", name: "Niveau 5" }
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
      <span class="pill" title="Niveau ${level()}">⭐ ${S.xp} XP</span>`;
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
  function speak(text, onend) {
    if (!("speechSynthesis" in window)) { onend && onend(); return false; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "da-DK"; u.rate = 0.92;
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
    [/^\/writing\/([\w-]+)$/, writingItem],
    [/^\/speaking$/, speakingList],
    [/^\/speaking\/mono\/([\w-]+)$/, speakingMono],
    [/^\/speaking\/dialog\/([\w-]+)$/, speakingDialog],
    [/^\/words$/, wordsGame],
    [/^\/about$/, about]
  ];
  function route() {
    cleanups.forEach(fn => { try { fn(); } catch (e) { /* ignore */ } });
    cleanups = [];
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const path = location.hash.replace(/^#/, "") || "/";
    const section = path.split("/")[1] || "";
    $$(".nav a").forEach(a => a.classList.toggle("active", a.dataset.nav === section));
    document.body.classList.toggle("starting", section === "start");
    for (const [re, fn] of routes) {
      const m = path.match(re);
      if (m) { fn(...m.slice(1)); window.scrollTo(0, 0); app.focus({ preventScroll: true }); return; }
    }
    home();
  }
  addEventListener("hashchange", route);

  // ---------- Start: choose exam ----------
  // Shown when the app is opened (once per browser session) and from "Skift prøve".
  const CHOSEN = "pd-chosen";
  function markChosen() { try { sessionStorage.setItem(CHOSEN, "1"); } catch (e) { /* ignore */ } }
  function hasChosen() { try { return sessionStorage.getItem(CHOSEN) === "1"; } catch (e) { return false; } }

  function startScreen() {
    const icons = { pd1: "🌱", pd2: "🌿", pd3: "🌳" };
    const cards = Object.keys(PD2.EXAMS).sort().map(k => {
      const m = PD2.EXAM_META[k], E = PD2.EXAMS[k];
      const items = E.READING.concat(E.WRITING, E.SPEAKING_MONO, E.SPEAKING_DIALOG);
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
    const all = EX().SPEAKING_MONO.length + EX().SPEAKING_DIALOG.length;
    return [EX().SPEAKING_MONO.concat(EX().SPEAKING_DIALOG).filter(x => S.speaking.done[x.id]).length, all];
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

      <div class="grid grid-3" style="margin-top:20px">
        ${taskCard("read", "#/reading", "📖", "Læsning", META().readingIntro.split(". ")[0].replace(/\.$/, "") + ".", rd, rt, "opgaver løst")}
        ${taskCard("write", "#/writing", "✍️", "Skrivning", META().writingIntro, wd, wt, "tekster bedømt")}
        ${taskCard("speak", "#/speaking", "🗣️", "Tale", "Monolog og dialog med timer, optagelse og oplæsning.", sd, st, "emner øvet")}
      </div>

      <div class="grid grid-2" style="margin-top:16px">
        <a class="task words" href="#/words">
          <span class="emoji">⚡</span>
          <h2>Ordjagt</h2>
          <p class="muted" style="margin:0">60 sekunder. Hvor mange ord kan du nå? Rekord: <b>${wordBest()}</b></p>
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

      <p style="margin-top:24px" class="row">
        <a class="btn ghost sm" href="#/start">🔁 Skift prøve</a>
        <a class="btn ghost sm" href="#/about">ℹ️ Om ${META().name}-prøven</a>
        <span class="spacer"></span>
        <button class="btn ghost sm" id="reset">Nulstil fremskridt</button>
      </p>`;
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
    app.innerHTML = `
      <h1>📖 Læsning <span class="tag">${META().name} · ${META().cefr}</span></h1>
      <p class="muted">${esc(META().readingIntro)}</p>
      ${Object.entries(groups).map(([g, items]) => `
        <h2 style="margin-top:24px">${items[0].group ? '<span class="tag real">Rigtig prøve</span> ' : ""}${esc(g)}</h2>
        <div class="stack">
          ${items.map(r => {
            const res = S.reading[r.id];
            const sc = res ? `<span class="score-badge ${res.best === res.total ? "full" : ""}">${res.best}/${res.total}</span>` : `<span class="score-badge">Ny</span>`;
            return `<a class="list-item" href="#/reading/${r.id}">
              <span class="ico">${r.group ? "🏛️" : "📰"}</span>
              <span class="meta"><b>${esc(r.title)}</b><span class="small muted">${esc(r.kind)}${r.minutes ? ` · ca. ${r.minutes} min` : ""} · <span class="stars">${"★".repeat(r.level || 1)}${"☆".repeat(3 - (r.level || 1))}</span></span></span>
              ${sc}
            </a>`;
          }).join("")}
        </div>`).join("")}`;
  }

  function readingItem(id) {
    const r = findItem("READING", id);
    if (!r) return readingList();
    const answers = {}; // key -> value
    let checked = false;
    const gapQ = r.questions.find(q => q.type === "gaps");
    const exampleKeys = gapQ ? Object.values(gapQ.example || {}) : [];
    const gapOptions = gapQ ? gapQ.bank.map(b => b.key).filter(k => !exampleKeys.includes(k)) : [];

    const gapHtml = n => {
      if (!gapQ) return "____";
      if (gapQ.example && gapQ.example[n] !== undefined) return `<span class="gap-label">(${n})</span><span class="example-fill">${esc(gapQ.example[n])}</span>`;
      return `<span class="gap-label">(${n})</span><select class="gap" data-key="g${n}" aria-label="Hul ${n}"><option value="">…</option>${gapOptions.map(o => `<option>${esc(o)}</option>`).join("")}</select>`;
    };

    const sectionsHtml = (r.sections || []).map(sec => `
      <h3 class="sec-h">${esc(sec.heading)}</h3>
      <div class="mini-cards">${sec.cards.map(c => `
        <div class="mini-card"><h4>${esc(c.title)}</h4>${c.sub ? `<div class="sub">${esc(c.sub)}</div>` : ""}${esc(c.body)}${c.facts ? `<div class="facts">${esc(c.facts)}</div>` : ""}</div>`).join("")}
      </div>${sec.source ? `<p class="small muted" style="margin-top:8px">${esc(sec.source)}</p>` : ""}`).join("");

    // Gap tasks: the word/sentence bank sits above the text so it stays in view while choosing.
    const solo = r.questions.every(q => q.type === "gaps");
    const bankHtml = gapQ ? `<div class="bankbox ${gapQ.bank.every(b => b.key === b.text) ? "" : "sentences"}">
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
      <a class="back" href="#/reading">← Alle læseopgaver</a>
      <div class="row"><h1 style="margin:0">${esc(r.title)}</h1></div>
      <p class="muted">${r.group ? '<span class="tag real">Rigtig prøve</span> ' : ""}${esc(r.kind)}</p>
      <div class="row" style="margin-bottom:16px">
        ${r.minutes ? `<button class="btn ghost sm" id="timerBtn">⏱️ Start prøvetid (${r.minutes} min)</button><span class="timer" id="timer"></span>` : ""}
      </div>
      <div class="reader ${solo ? "solo" : ""}">
        <div class="card text">
          ${r.instruction ? `<div class="instruction">${esc(r.instruction)}</div>` : ""}
          ${r.note ? `<p class="note" style="margin-top:10px">${esc(r.note)}</p>` : ""}
          ${bankHtml}
          <div style="margin-top:14px">${r.text ? fmtText(r.text, gapHtml) : ""}${sectionsHtml}</div>
        </div>
        <div class="card">
          ${solo ? "" : "<h2>Spørgsmål</h2>"}
          ${qHtml}
          <div class="row" style="margin-top:18px">
            <button class="btn read" id="check">Tjek svar</button>
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
    $$("select[data-key], input.short").forEach(el => el.oninput = () => {
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
      r.questions.forEach((q, qi) => {
        if (q.type === "gaps") {
          let wrong = [];
          Object.entries(q.answers).forEach(([n, a]) => {
            const sel = $(`select[data-key="g${n}"]`);
            const ok = sel.value === a;
            sel.classList.add(ok ? "ok" : "bad"); sel.disabled = true;
            if (!ok) wrong.push(`(${n}) ${a}`);
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
            if (!ok) { fb.className = "fb bad"; fb.textContent = `Rigtigt svar: ${it.answer}`; }
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
          tally(ok, q.extra);
        }
      });

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
  function writingList() {
    const by = d => EX().WRITING.filter(w => w.delprove === d);
    const item = w => {
      const res = S.writing[w.id];
      const sc = res && res.best ? `<span class="score-badge full">${res.best}</span>` : res && res.draft ? `<span class="score-badge">Kladde</span>` : `<span class="score-badge">Ny</span>`;
      return `<a class="list-item" href="#/writing/${w.id}">
        <span class="ico">${w.delprove === 1 ? "✉️" : "📝"}</span>
        <span class="meta"><b>${esc(w.title)}</b><span class="small muted">${esc(w.kind)} · ${w.minWords}-${w.maxWords} ord</span></span>${sc}</a>`;
    };
    app.innerHTML = `
      <h1>✍️ Skrivning <span class="tag">${META().name} · ${META().cefr}</span></h1>
      <p class="muted">Skriv din tekst, få live-feedback fra skrivecoachen, og bedøm dig selv med de samme kriterier som censor bruger.
      Ordantallene er vejledende øvemål. Følg altid instruktionen på din egen prøve.</p>
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
      <p class="muted"><span class="tag">Delprøve ${w.delprove}</span> ${esc(w.kind)} · mål: ${w.minWords}-${w.maxWords} ord</p>
      <div class="writer">
        <div class="stack">
          <div class="card">
            <div class="instruction" style="background:var(--write-soft)">${esc(w.situation)}</div>
            <h3 style="margin-top:14px">Du skal skrive om:</h3>
            ${w.points.map((p, i) => `<label class="tick"><input type="checkbox" data-tick="${i}" ${st.ticks.includes(i) ? "checked" : ""}> <span>${esc(p)}</span></label>`).join("")}
          </div>
          <div class="card">
            <div class="row" style="margin-bottom:8px">
              <b id="wc">0 ord</b><span class="spacer"></span>
              <button class="btn ghost sm" id="wtimer">⏱️ Start 30 min</button><span class="timer" id="wtime"></span>
            </div>
            <div class="wordbar" style="margin-bottom:12px"><div class="zone" id="zone"></div><div class="fill" id="fill"></div></div>
            <textarea class="editor" id="editor" spellcheck="true" lang="da" placeholder="Skriv din tekst her …">${esc(st.draft || "")}</textarea>
            <div class="row" style="margin-top:12px">
              <button class="btn write" id="grade">Bedøm min tekst</button>
              <button class="btn ghost" id="showModel">👀 Se modelsvar</button>
              <span class="spacer"></span>
              <span class="small muted" id="saved"></span>
            </div>
          </div>
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
      let left = 30 * 60;
      $("#wtimer").disabled = true;
      every(1000, () => {
        left--;
        const t = $("#wtime");
        t.textContent = left > 0 ? fmtTime(left) : "Tiden er gået!";
        t.classList.toggle("low", left < 300);
      });
    };

    $("#showModel").onclick = e => {
      const box = $("#modelBox"), b = e.currentTarget;
      if (box.innerHTML) { box.innerHTML = ""; return; }
      if (countWords(ed.value) < 20 && !b.dataset.armed) {
        b.dataset.armed = "1";
        b.textContent = "Prøv selv først! Klik igen for at se det";
        return;
      }
      box.innerHTML = `<div class="card"><h3>Modelsvar <span class="muted small">(${countWords(w.model)} ord)</span></h3><div class="model">${esc(w.model)}</div></div>`;
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
    const mono = EX().SPEAKING_MONO, dia = EX().SPEAKING_DIALOG;
    app.innerHTML = `
      <h1>🗣️ Tale <span class="tag">${META().name} · ${META().cefr}</span></h1>
      <p class="muted">Øv dig i at tale frit. Appen kan læse spørgsmål op på dansk, optage dig og skrive det, du siger, så du kan høre og læse det bagefter.
      Live-tekst virker bedst i Chrome eller Edge.</p>
      <div class="card" style="margin-top:16px;text-align:center">
        <h2>🎲 Træk et emne</h2>
        <div class="wheel" id="wheel">Klar?</div>
        <button class="btn speak" id="spin">Træk et tilfældigt emne</button>
      </div>
      <h2 style="margin-top:24px">Monolog + samtale</h2>
      <p class="small muted">Forbered dig, tal om emnet, og svar på opfølgende spørgsmål.</p>
      <div class="grid grid-2">${mono.map(m => `<a class="list-item" href="#/speaking/mono/${m.id}">
        <span class="ico">🎤</span><span class="meta"><b>${esc(m.title)}</b><span class="small muted">${m.points.length} stikord · ${m.followUp.length} spørgsmål</span></span>
        ${S.speaking.done[m.id] ? '<span class="score-badge full">✓</span>' : ""}</a>`).join("")}</div>
      <h2 style="margin-top:24px">Dialog</h2>
      <p class="small muted">Eksaminator siger en replik. Du svarer. I skal blive enige.</p>
      <div class="grid grid-2">${dia.map(d => `<a class="list-item" href="#/speaking/dialog/${d.id}">
        <span class="ico">💬</span><span class="meta"><b>${esc(d.title)}</b><span class="small muted">${d.lines.length} replikker</span></span>
        ${S.speaking.done[d.id] ? '<span class="score-badge full">✓</span>' : ""}</a>`).join("")}</div>
      <p class="small muted" style="margin-top:20px">I alt har du øvet ${S.speaking.sessions} gange og talt i ${Math.round(S.speaking.seconds / 60)} minutter.</p>`;
    $("#spin").onclick = () => {
      const wheel = $("#wheel"), btn = $("#spin");
      btn.disabled = true; wheel.classList.add("spin");
      let i = 0;
      const pick = mono[Math.floor(Math.random() * mono.length)];
      const id = setInterval(() => {
        wheel.textContent = mono[i++ % mono.length].title;
        if (i > 14) {
          clearInterval(id); wheel.classList.remove("spin"); wheel.textContent = "🎯 " + pick.title;
          setTimeout(() => { location.hash = "#/speaking/mono/" + pick.id; }, 900);
        }
      }, 90);
      onLeave(() => clearInterval(id));
    };
  }

  function finishSpeaking(id, seconds, isDialog) {
    S.speaking.sessions++;
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
    let prepMin = 3, talkMin = 3;
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
          <span>Taletid: <span class="stepper"><button data-a="talk" data-d="-1" aria-label="Mindre">−</button><b id="talk">${talkMin}</b> min<button data-a="talk" data-d="1" aria-label="Mere">+</button></span></span>
        </div>
        <button class="btn speak" id="go">Start forberedelse</button>
        <button class="btn ghost" id="skip">Spring over – tal nu</button>`, 0);
      $$(".stepper button").forEach(b => b.onclick = () => {
        if (b.dataset.a === "prep") prepMin = Math.max(0, Math.min(15, prepMin + +b.dataset.d));
        else talkMin = Math.max(1, Math.min(10, talkMin + +b.dataset.d));
        $("#prep").textContent = prepMin; $("#talk").textContent = talkMin;
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
      const q = m.followUp[qi];
      shell(`
        <span class="phase">Eksaminator spørger</span>
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
    }

    setup();
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
        save();
        addXP(score * 2, "ordjagt");
        if (record && score > 0) confetti();
        app.innerHTML = `
          <h1>⚡ Ordjagt</h1>
          <div class="card stage">
            <div class="word-big">${score}</div>
            <p style="font-weight:800">${record ? "🏆 Ny rekord!" : `Rekord: ${wordBest()}`}</p>
            <div class="row" style="justify-content:center"><button class="btn words" id="again">Spil igen</button><a class="btn ghost" href="#/">Til forsiden</a></div>
          </div>`;
        $("#again").onclick = play;
      }
    }
    intro();
  }

  // ---------- About ----------
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
        <p class="small muted">DanskKlar er et uofficielt øveprogram og har ingen forbindelse til de myndigheder, der afholder prøverne.</p>
      </div>`;
  }

  // ---------- Boot ----------
  touchDay(); save(); renderStats();
  const opening = location.hash.replace(/^#\/?/, "");
  if (!hasChosen() && opening === "") location.replace("#/start");
  else markChosen();
  route();
})();
