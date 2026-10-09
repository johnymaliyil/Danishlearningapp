// Interface language (⚙️ → 🌐 Sprog / Language). Danish is the default.
// In another language, the interface texts (menus, buttons, headings, help) are swapped using PD2.I18N[lang],
// loaded on demand from js/i18n-<lang>.js.
// Exam material and the Danish being learned is never touched: texts, questions, tasks, model answers,
// word lists, games words etc. live inside the containers in SKIP, or are not in the dictionary.
(function () {
  "use strict";
  const VER = ((document.currentScript && document.currentScript.src.match(/[?&]v=([\w.]+)/)) || [])[1] || "";
  const LANGS = ["en", "es", "uk", "pl", "ro", "tr"];
  let lang = "da";
  try { lang = localStorage.getItem("dk-lang") || "da"; } catch (e) { /* ignore */ }
  const SKIP = 'script,style,textarea,input,select,.no-tr,[lang="en"],#tr-tip,.text,.instruction,.model,.pair,.bubble,.transcript,.tiles,.qtext,.drill-q,.word-big,.gram-da,.mini-card,.bank,.sentence-bank,.choices,.answers,.match select,.gram-marked,.gram-issues,.fw-list,.wl-table td,.dict-res,.vrow,.points-list,.tick span,.gp,.example-fill,select.gap,.ph,mark,.why,.pop-model,.pop-qs,[data-keep]';
  // UI bits that sit inside content containers.
  const ALLOW = ".freq-words summary,.freq-words > p,.bankbox > b,.why > b,.why-list summary,.drill-rule summary,.speech-check h3,.speech-check .pill,.speech-check > p,.tag,.score-badge,.num,.quiz-after > p > b:first-child";
  const skip = el => el.closest(SKIP) && !el.closest(ALLOW);
  // Labels with a Danish word or title at the end: "Hør pris", "Læs: Opgave 3 …".
  const P = {
    en: ["Listen", "Read", "Write and assess", "Speak"], es: ["Escuchar", "Leer", "Escribir y evaluar", "Hablar"],
    uk: ["Слухати", "Читати", "Писати й оцінити", "Говорити"], pl: ["Posłuchaj", "Czytaj", "Napisz i oceń", "Mów"],
    ro: ["Ascultă", "Citește", "Scrie și evaluează", "Vorbește"], tr: ["Dinle", "Oku", "Yaz ve değerlendir", "Konuş"]
  };
  const patterns = () => { const w = P[lang] || P.en; return [[/^Hør (.+)$/, w[0] + ": $1"], [/^Læs: (.+)$/, w[1] + ": $1"], [/^Skriv og bedøm: (.+)$/, w[2] + ": $1"], [/^Tal: (.+)$/, w[3] + ": $1"]]; };
  const NUM = /\d+(?:[.,]\d+)*/g;
  function tr(text, seg) {
    const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text), core = m[2].replace(/\s+/g, " ");
    if (!core || !/[A-Za-zÆØÅæøå]/.test(core)) return null;
    const D = (window.PD2 && PD2.I18N && PD2.I18N[lang]) || {};
    const nums = core.match(NUM) || [], key = core.replace(NUM, "{n}");
    let v = Object.prototype.hasOwnProperty.call(D, key) ? D[key] : null;
    if (v == null) {
      for (const [re, to] of patterns()) if (re.test(core)) { v = core.replace(re, to); return m[1] + v + m[3]; }
      // Labels joined with " · ": translate each piece on its own.
      if (core.includes(" · ") && !seg) {
        // Longest run of pieces that the dictionary knows wins (e.g. "Prøveopgave · klage" + "mål: 80-150 ord").
        const parts = core.split(" · "), out = [];
        let any = false;
        for (let j = 0; j < parts.length;) {
          let done = false;
          for (let k = parts.length; k > j; k--) {
            const t = tr(parts.slice(j, k).join(" · "), true);
            if (t != null) { out.push(t.trim()); any = true; j = k; done = true; break; }
          }
          if (!done) { out.push(parts[j]); j++; }
        }
        return any ? m[1] + out.join(" · ") + m[3] : null;
      }
      return null;
    }
    let i = 0;
    v = v.replace(/\{n\}/g, () => (nums[i++] ?? ""));
    return v === core ? null : m[1] + v + m[3];
  }
  function translate(root) {
    if (lang === "da" || !root) return;
    if (root.nodeType === 3) { const el = root.parentElement; if (el && !skip(el)) { const t = tr(root.data); if (t != null) root.data = t; } return; }
    if (root.nodeType !== 1 || (root.closest(SKIP) && !root.querySelector(ALLOW) && !root.closest(ALLOW))) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = []; let n;
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(n => { const el = n.parentElement; if (!el || skip(el)) return; const t = tr(n.data); if (t != null) n.data = t; });
    const els = [root, ...root.querySelectorAll("[placeholder],[title],[aria-label]")];
    els.forEach(el => {
      if (!el.getAttribute || el.closest('.no-tr,[lang="en"],[data-keep]')) return;
      ["placeholder", "title", "aria-label"].forEach(a => { const v = el.getAttribute(a); if (v) { const t = tr(v); if (t != null) el.setAttribute(a, t.trim()); } });
    });
  }
  let queued = new Set(), scheduled = false;
  const flush = () => { scheduled = false; const list = [...queued]; queued = new Set(); list.forEach(translate); };
  const obs = new MutationObserver(muts => {
    muts.forEach(m => m.addedNodes.forEach(n => queued.add(n)));
    if (!scheduled) { scheduled = true; Promise.resolve().then(flush); }
  });
  function run() {
    document.documentElement.setAttribute("data-ui-lang", lang);
    translate(document.body);
    obs.observe(document.body, { childList: true, subtree: true });
  }
  function start() {
    if (!LANGS.includes(lang)) { lang = "da"; return; }
    if (window.PD2 && PD2.I18N && PD2.I18N[lang]) return run();
    const sc = document.createElement("script");
    sc.src = `js/i18n-${lang}.js${VER ? "?v=" + VER : ""}`;
    sc.onload = run;
    sc.onerror = () => { lang = "da"; };
    document.head.appendChild(sc);
  }
  window.DK_LANG = {
    get lang() { return lang; },
    langs: LANGS,
    set(l) { try { if (l === "da") localStorage.removeItem("dk-lang"); else localStorage.setItem("dk-lang", l); } catch (e) { /* ignore */ } location.reload(); },
    tr
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
