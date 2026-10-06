// Exam registry: one entry per exam level. Each exam's content lives in its own
// data file (data.js + data-2020.js for PD2, data-pd1.js, data-pd3.js).
PD2.EXAMS = PD2.EXAMS || {};

PD2.EXAMS.pd2 = {
  READING: PD2.READING,
  WRITING: PD2.WRITING,
  SPEAKING_MONO: PD2.SPEAKING_MONO,
  SPEAKING_DIALOG: PD2.SPEAKING_DIALOG,
  WORDS: PD2.WORDS
};

PD2.EXAM_META = {
  pd1: {
    name: "PD1",
    full: "Prøve i Dansk 1",
    cefr: "A2",
    tagline: "Hverdagsdansk: korte tekster, beskeder og enkle samtaler.",
    readingIntro: "Korte hverdagstekster: opslag, annoncer og beskeder.",
    writingIntro: "Korte beskeder og enkle tekster om dig selv og din hverdag.",
    writingParts: {
      1: "Korte beskeder · sms, mail, annonce",
      2: "Kort tekst · fortælle og beskrive"
    },
    about: `<p><b>Prøve i Dansk 1</b> er den første af de tre danskprøver. Den svarer til niveau <b>A2</b> i den fælles europæiske referenceramme (CEFR).</p>
      <p>Prøven tester, om du kan klare dig på dansk i hverdagen: forstå korte tekster som opslag, annoncer og beskeder, skrive enkle beskeder og korte tekster om dig selv, og tale om kendte emner som familie, bolig, arbejde og fritid.</p>`
  },
  pd2: {
    name: "PD2",
    full: "Prøve i Dansk 2",
    cefr: "B1",
    tagline: "Rigtige opgaver fra 2020 plus øvelser i læsning, skrivning og tale.",
    readingIntro: "Prøvesættet fra maj-juni 2020 har de officielle svar. Delprøve 2 (opgave 3-5) tager 60 minutter til prøven.",
    writingIntro: "Mails og holdningstekster med skrivecoach og bedømmelse.",
    writingParts: {
      1: "Delprøve 1 · give faktuelle informationer, fortælle, beskrive",
      2: "Delprøve 2 · fortælle, beskrive, udtrykke synspunkter"
    },
    about: `<p>Den skriftlige del af PD2 tester dansk på et niveau, der svarer til <b>B1 (Threshold)</b> i den fælles europæiske referenceramme (CEFR).</p>
      <h3>📖 Læseforståelse</h3>
      <table class="simple">
        <tr><th>Delprøve</th><th>Opgave</th><th>Type</th><th>Point</th></tr>
        <tr><td>1</td><td>1</td><td>Find informationer i korte tekster, svar kort</td><td>6</td></tr>
        <tr><td>1</td><td>2</td><td>Match (bogstav-svar)</td><td>6</td></tr>
        <tr><td>2</td><td>3</td><td>Udfyld hullerne med ord fra en ramme</td><td>8</td></tr>
        <tr><td>2</td><td>4</td><td>Find den sætning, der mangler i hvert afsnit</td><td>5</td></tr>
        <tr><td>2</td><td>5</td><td>Match spørgsmål med afsnit i et interview</td><td>5</td></tr>
      </table>
      <p class="small muted" style="margin-top:8px">I alt 30 point (tal fra prøven maj-juni 2020). Delprøve 2 varer 60 minutter, uden hjælpemidler. Pointene regnes om til en karakter.</p>
      <h3>✍️ Skriftlig fremstilling</h3>
      <p><b>Delprøve 1:</b> give faktuelle informationer, fortælle, beskrive.<br>
      <b>Delprøve 2:</b> fortælle, beskrive, udtrykke synspunkter.</p>
      <p>Censor vurderer: om instruktionen er fulgt, reparation (hvor let teksten er at forstå), pragmatisk færdighed, diskursiv færdighed
      (delprøve 2: retorisk organisering, kohærens og kohæsion) og lingvistisk færdighed (ordvalg, syntaks, morfologi, retskrivning).</p>
      <p class="small muted">Karakter gives på 7-trins-skalaen: 12, 10, 7, 4, 02, 00, -3.</p>`
  },
  pd3: {
    name: "PD3",
    full: "Prøve i Dansk 3",
    cefr: "B2",
    tagline: "Længere tekster, argumentation og diskussion af samfundsemner.",
    readingIntro: "Længere artikler, bindeord, tekstsammenhæng og holdninger.",
    writingIntro: "Formelle breve, ansøgninger og argumenterende tekster.",
    writingParts: {
      1: "Formelle tekster · klage, ansøgning",
      2: "Argumenterende tekster · læserbrev, debatindlæg, sammenligning"
    },
    about: `<p><b>Prøve i Dansk 3</b> er den sværeste af de tre danskprøver. Den svarer til niveau <b>B2</b> i den fælles europæiske referenceramme (CEFR).</p>
      <p>Prøven tester, om du kan forstå længere tekster om samfundsemner, skrive sammenhængende og argumenterende tekster, og diskutere og begrunde dine holdninger mundtligt.</p>
      <p class="small muted">PD3 bruges blandt andet som sprogkrav, når man søger om dansk statsborgerskab. Tjek altid de aktuelle regler.</p>`
  }
};
