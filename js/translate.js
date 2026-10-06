// Hover translator: point at any Danish word to see its English meaning.
// Works on all rendered text without wrapping words in spans: the word under
// the pointer is found with the browser's caret-from-point API.
// Touch devices: press and hold a word.
(function () {
  "use strict";

  const dict = new Map();
  PD2.GLOSSARY_RAW.split("\n").forEach(line => {
    const i = line.indexOf("=");
    if (i > 0) dict.set(line.slice(0, i).trim(), line.slice(i + 1).trim());
  });
  PD2.translate = w => lookup(w);

  const LETTER = /[A-Za-zÆØÅæøåÄÖÜäöüÉé-]/;
  const SKIP = "textarea, input, select, option, [lang='en'], .no-tr, #tr-tip";
  const PREF = "pd2-hover-translate";

  let enabled = true;
  try { enabled = localStorage.getItem(PREF) !== "off"; } catch (e) { /* default on */ }

  const tip = document.createElement("div");
  tip.id = "tr-tip";
  tip.setAttribute("role", "tooltip");
  tip.hidden = true;
  const mark = document.createElement("div");
  mark.id = "tr-mark";
  mark.hidden = true;
  document.body.append(mark, tip);

  function lookup(word) {
    const w = word.toLowerCase().replace(/^-+|-+$/g, "");
    if (!w) return null;
    if (dict.has(w)) return dict.get(w);
    // Hyphenated compounds: translate the parts we know.
    if (w.includes("-")) {
      const parts = w.split("-").filter(Boolean);
      const tr = parts.map(p => dict.get(p));
      if (tr.some(Boolean)) return parts.map((p, i) => tr[i] ? tr[i].split(" / ")[0] : p).join(" + ");
    }
    return null;
  }

  function caretAt(x, y) {
    if (document.caretPositionFromPoint) {
      const p = document.caretPositionFromPoint(x, y);
      return p && { node: p.offsetNode, offset: p.offset };
    }
    if (document.caretRangeFromPoint) {
      const r = document.caretRangeFromPoint(x, y);
      return r && { node: r.startContainer, offset: r.startOffset };
    }
    return null;
  }

  // Returns { word, rect } for the word under the point, or null.
  function wordAt(x, y) {
    const c = caretAt(x, y);
    if (!c || !c.node || c.node.nodeType !== Node.TEXT_NODE) return null;
    const el = c.node.parentElement;
    if (!el || el.closest(SKIP)) return null;
    const text = c.node.data;
    let s = c.offset, e = c.offset;
    while (s > 0 && LETTER.test(text[s - 1])) s--;
    while (e < text.length && LETTER.test(text[e])) e++;
    if (e <= s) return null;
    const range = document.createRange();
    range.setStart(c.node, s);
    range.setEnd(c.node, e);
    // The caret snaps to the nearest character, so confirm the pointer is really on the word.
    const rect = Array.from(range.getClientRects()).find(r => x >= r.left - 1 && x <= r.right + 1 && y >= r.top - 1 && y <= r.bottom + 1);
    if (!rect) return null;
    return { word: text.slice(s, e), rect };
  }

  let current = null;
  function show(hit) {
    const tr = lookup(hit.word);
    if (!tr) { hide(); return; }
    if (current !== hit.word || tip.hidden) {
      tip.innerHTML = "";
      const b = document.createElement("b");
      b.textContent = hit.word;
      const s = document.createElement("span");
      s.textContent = tr;
      tip.append(b, s);
      current = hit.word;
    }
    tip.hidden = false;
    mark.hidden = false;
    const r = hit.rect;
    Object.assign(mark.style, { left: r.left - 2 + "px", top: r.top - 1 + "px", width: r.width + 4 + "px", height: r.height + 2 + "px" });
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = r.left + r.width / 2 - tw / 2;
    left = Math.max(8, Math.min(left, innerWidth - tw - 8));
    let top = r.top - th - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }
  function hide() {
    tip.hidden = true;
    mark.hidden = true;
    current = null;
  }

  // Mouse: follow the pointer, one lookup per animation frame.
  let pending = null;
  document.addEventListener("mousemove", ev => {
    if (!enabled) return;
    if (!pending) requestAnimationFrame(() => {
      const p = pending; pending = null;
      const hit = wordAt(p.x, p.y);
      if (hit) show(hit); else hide();
    });
    pending = { x: ev.clientX, y: ev.clientY };
  }, { passive: true });
  document.addEventListener("mouseleave", hide);
  addEventListener("scroll", hide, { passive: true });
  addEventListener("hashchange", hide);
  // Clicks usually re-render the view under the pointer, so drop any stale tooltip.
  document.addEventListener("click", hide, true);
  // An image finishing loading can move the text away from under the tooltip.
  document.addEventListener("load", e => { if (e.target.tagName === "IMG") hide(); }, true);

  // Touch: press and hold a word.
  let holdTimer = null;
  document.addEventListener("touchstart", ev => {
    hide();
    if (!enabled || ev.touches.length !== 1) return;
    const t = ev.touches[0];
    holdTimer = setTimeout(() => {
      const hit = wordAt(t.clientX, t.clientY);
      if (hit) show(hit);
    }, 450);
  }, { passive: true });
  ["touchend", "touchmove", "touchcancel"].forEach(n => document.addEventListener(n, () => clearTimeout(holdTimer), { passive: true }));

  // On/off switch in the top bar.
  const btn = document.createElement("button");
  btn.className = "pill tr-toggle no-tr";
  btn.type = "button";
  const paint = () => {
    btn.innerHTML = `🇬🇧 <span class="tr-label">${enabled ? "EN til" : "EN fra"}</span>`;
    btn.setAttribute("aria-pressed", String(enabled));
    btn.title = enabled ? "English on hover is on. Click to turn it off." : "English on hover is off. Click to turn it on.";
  };
  btn.onclick = () => {
    enabled = !enabled;
    try { localStorage.setItem(PREF, enabled ? "on" : "off"); } catch (e) { /* ignore */ }
    if (!enabled) hide();
    paint();
  };
  paint();
  const stats = document.querySelector(".topbar");
  if (stats) stats.insertBefore(btn, document.querySelector("#topstats"));
})();
