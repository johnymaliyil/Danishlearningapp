// Interface language (⚙️ → 🌐 Sprog / Language). Danish is the default.
// In English mode, the interface texts (menus, buttons, headings, help) are swapped using PD2.I18N.en.
// Exam material and the Danish being learned is never touched: texts, questions, tasks, model answers,
// word lists, games words etc. live inside the containers in SKIP, or are not in the dictionary.
(function () {
  "use strict";
  let lang = "da";
  try { lang = localStorage.getItem("dk-lang") || "da"; } catch (e) { /* ignore */ }
  const SKIP = 'script,style,textarea,input,select,.no-tr,[lang="en"],#tr-tip,.text,.instruction,.model,.pair,.bubble,.transcript,.tiles,.qtext,.drill-q,.word-big,.gram-da,.mini-card,.bank,.sentence-bank,.choices,.answers,.match select,.gram-marked,.gram-issues,.fw-list,.wl-table td,.dict-res,.vrow,.points-list,.tick span,.gp,.example-fill,select.gap,.ph,mark,.why,.pop-model,.pop-qs,[data-keep]';
  // UI bits that sit inside content containers.
  const ALLOW = ".freq-words summary,.freq-words > p,.bankbox > b,.why > b,.why-list summary,.drill-rule summary,.speech-check h3,.speech-check .pill,.speech-check > p,.tag,.score-badge,.num,.quiz-after > p > b:first-child";
  const skip = el => el.closest(SKIP) && !el.closest(ALLOW);
  const PATTERNS = [
    [/^Hør (.+)$/, "Listen: $1"], [/^Læs: (.+)$/, "Read: $1"], [/^Skriv og bedøm: (.+)$/, "Write and assess: $1"], [/^Tal: (.+)$/, "Speak: $1"]
  ];
  const NUM = /\d+(?:[.,]\d+)*/g;
  function tr(text, seg) {
    const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text), core = m[2].replace(/\s+/g, " ");
    if (!core || !/[A-Za-zÆØÅæøå]/.test(core)) return null;
    const D = (window.PD2 && PD2.I18N && PD2.I18N.en) || {};
    const nums = core.match(NUM) || [], key = core.replace(NUM, "{n}");
    let v = Object.prototype.hasOwnProperty.call(D, key) ? D[key] : null;
    if (v == null) {
      for (const [re, to] of PATTERNS) if (re.test(core)) { v = core.replace(re, to); return m[1] + v + m[3]; }
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
    if (lang !== "en" || !root) return;
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
  function start() {
    if (lang !== "en") return;
    document.documentElement.setAttribute("data-ui-lang", "en");
    translate(document.body);
    obs.observe(document.body, { childList: true, subtree: true });
  }
  window.DK_LANG = {
    get lang() { return lang; },
    set(l) { try { if (l === "da") localStorage.removeItem("dk-lang"); else localStorage.setItem("dk-lang", l); } catch (e) { /* ignore */ } location.reload(); },
    tr
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
