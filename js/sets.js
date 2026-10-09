// Past PD2 exams are shown as numbered sets ("Sæt 1" = oldest) instead of by year.
// Runs after all data files; it renames groups/titles and sorts lists by set number.
(function () {
  const SESSIONS = [
    // [set number, reading group, writing id prefix, picture ids]
    [1, "PD2 maj 2012", /^w12[abc]$/, ["p9", "p10", "p11"]],
    [2, "PD2 nov.-dec. 2012", /^w12n/, ["p12n-a", "p12n-b", "p12n-c"]],
    [3, "PD2 maj-juni 2013", /^w13[abc]$/, ["p12", "p13", "p14"]],
    [4, "PD2 nov.-dec. 2013", /^w13n/, ["p13n-a", "p13n-b", "p13n-c"]],
    [5, "PD2 maj-juni 2014", /^w14[abc]$/, ["p15", "p16", "p17"]],
    [6, "PD2 nov.-dec. 2014", /^w14n/, ["p14n-a", "p14n-b", "p14n-c"]],
    [7, "PD2 maj-juni 2015", /^w15m/, ["p15m-a", "p15m-b", "p15m-c"]],
    [8, "PD2 maj-juni 2016", /^w16m/, []],
    [9, "PD2 nov.-dec. 2016", /^w16[abc]$/, []],
    [10, "PD2 maj-juni 2017", /^w17m/, []],
    [11, "PD2 maj-juni 2018", /^w18m/, []],
    [12, "PD2 nov.-dec. 2018", /^w18[abc]$/, ["p18", "p19", "p20"]],
    [13, "PD2 maj-juni 2019", /^w19/, ["p4", "p7", "p8"]],
    [14, "PD2 maj-juni 2020", /^w20/, ["p1", "p2", "p3"]],
    [19, "PD2 maj-juni 2023", /^w23m/, ["p23m-a", "p23m-b", "p23m-c"]],
    [17, "PD2 maj-juni 2022", /^w22m/, ["p22m-a", "p22m-b", "p22m-c"]],
    [18, "PD2 nov.-dec. 2022", /^w22n/, ["p22n-a", "p22n-b", "p22n-c"]]
  ];
  PD2.SET_COUNT = SESSIONS.length;
  const E = PD2.EXAMS.pd2;
  const setName = n => `Sæt ${n}`;
  const stripYear = t => t.replace(/\s*\((?:[a-zæøå.\- ]*)?(?:19|20)\d\d\)\s*$/i, "");

  const byGroup = {};
  SESSIONS.forEach(([n, g]) => (byGroup[g] = n));
  E.READING.forEach(r => {
    const n = byGroup[r.group];
    if (n) { r.set = n; r.group = `PD2 ${setName(n)}`; }
  });

  E.WRITING.forEach(w => {
    const s = SESSIONS.find(([, , re]) => re.test(w.id));
    if (!s || !w.real) return;
    w.set = s[0];
    w.title = `${stripYear(w.title)} (${setName(s[0])})`;
  });

  const credit = c => c.replace(/\s*\(fra Prøve i Dansk 2[^)]*\)/, " (fra Prøve i Dansk 2)");
  E.SPEAKING_PICTURE.forEach(p => {
    const s = SESSIONS.find(([, , , ids]) => ids.includes(p.id));
    if (s) p.set = s[0];
    (function walk(o) {
      if (Array.isArray(o)) o.forEach(walk);
      else if (o && typeof o === "object") Object.keys(o).forEach(k => {
        if (k === "credit" && typeof o[k] === "string") o[k] = credit(o[k]); else walk(o[k]);
      });
    })(p);
  });

  // Ascending: Sæt 1 first, then the practice items in their original order.
  const ordered = list => list.filter(x => x.set).sort((a, b) => a.set - b.set).concat(list.filter(x => !x.set));
  [E.READING, E.WRITING, E.SPEAKING_PICTURE].forEach(list => { const o = ordered(list); list.length = 0; list.push(...o); });
})();
