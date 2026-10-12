// Past PD3 exams are shown as numbered sets ("Sæt 1" = oldest) instead of by year, like PD2 (js/sets.js).
// One fixed list of sessions, so a set keeps its number for reading, writing and oral, and new sessions
// are simply added at the end. Runs after all PD3 data files.
(function () {
  const E = PD2.EXAMS.pd3;
  if (!E) return;
  const SESSIONS = ["2018m", "2018n", "2019m", "2019n", "2020m", "2020n", "2021m", "2021n", "2022m", "2022n", "2023m", "2023n", "2024m"];
  const code = (year, txt) => year && txt ? `${year}${/nov|dec|vinter/i.test(txt) ? "n" : "m"}` : null;
  const fromText = txt => { const m = /(20\d\d)/.exec(txt || ""); return m ? code(m[1], txt) : null; };
  const setOf = c => { const i = SESSIONS.indexOf(c); return i < 0 ? null : i + 1; };
  const stripYear = t => t.replace(/\s*\((?:[a-zæøå.\- ]*)?(?:19|20)\d\d\)\s*$/i, "");
  const credit = c => c.replace(/\s*\(fra Prøve i Dansk 3[^)]*\)/, " (fra Prøve i Dansk 3)");

  E.READING.forEach(r => {
    if (!r.real || !/^PD3 /.test(r.group || "")) return;
    const n = setOf(fromText(r.group));
    if (n) { r.set = n; r.group = `PD3 Sæt ${n}`; }
  });
  E.WRITING.forEach(w => {
    if (!w.real) return;
    const n = setOf(code(w.year, w.session) || fromText(w.title));
    if (!n) return;
    w.set = n;
    w.title = `${stripYear(w.title)} (Sæt ${n})`;
  });
  (E.SPEAKING_TOPIC || []).forEach(t => {
    const n = setOf(code(t.year, t.session) || fromText(t.session));
    if (!n) return;
    t.set = n;
    t.session = `Sæt ${n}`;
    (function walk(o) {
      if (Array.isArray(o)) o.forEach(walk);
      else if (o && typeof o === "object") Object.keys(o).forEach(k => {
        if (k === "credit" && typeof o[k] === "string") o[k] = credit(o[k]); else walk(o[k]);
      });
    })(t);
  });

  // Ascending: Sæt 1 first, then the practice items in their original order.
  const ordered = list => list.filter(x => x.set).sort((a, b) => a.set - b.set).concat(list.filter(x => !x.set));
  [E.READING, E.WRITING, E.SPEAKING_TOPIC || []].forEach(list => { const o = ordered(list); list.length = 0; list.push(...o); });
})();
