// Exam registry: one entry per exam level. Each exam's content lives in its own
// data file (data.js + data-2020.js for PD2, data-pd1.js, data-pd3.js).
PD2.EXAMS = PD2.EXAMS || {};

PD2.EXAMS.pd2 = {
  READING: PD2.READING,
  WRITING: PD2.WRITING,
  SPEAKING_MONO: PD2.SPEAKING_MONO,
  SPEAKING_DIALOG: PD2.SPEAKING_DIALOG,
  SPEAKING_PICTURE: PD2.SPEAKING_PICTURE,
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
    tagline: "Rigtige prøveopgaver fra 2012-2020 plus øvesæt i samme format.",
    readingIntro: "Fjorten rigtige prøvesæt fra 2012 til 2020 (2020 med de officielle svar, de andre med svar fundet ud fra teksterne) og to øvesæt i samme format. Til prøven tager delprøve 1 (opgave 1-2) 30 minutter og delprøve 2 (opgave 3-5) 60 minutter.",
    writingIntro: "Rigtige prøveopgaver fra 2012 til 2020 (12 prøvesæt) plus mails og holdningstekster med skrivecoach og bedømmelse.",
    writingMinutes: 45,
    talkSeconds: 90,
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
      <p>Til prøven har du <b>1½ time</b> til begge delprøver, og du må bruge <b>alle ordbøger</b>. I delprøve 1 vælger du mellem to opgaver (fx en klage eller en anbefaling). I delprøve 2 skriver du fx en e-mail på mindst 100 ord (tal fra prøven maj-juni 2019).</p>
      <p class="small muted">Karakter gives på 7-trins-skalaen: 12, 10, 7, 4, 02, 00, -3.</p>
      <h3>🗣️ Mundtlig kommunikation</h3>
      <p>Den mundtlige prøve tager man to og to. Niveauet ligger mellem B1 og B2.</p>
      <table class="simple">
        <tr><th>Delprøve</th><th>Indhold</th><th>Tid</th></tr>
        <tr><td>1</td><td><b>Præsentation</b> af et emne, du selv har valgt og forberedt (ca. 1½ min.). Du må bruge stikord, men ikke læse op. Derefter <b>opfølgende spørgsmål</b> fra eksaminator (ca. 3½ min.).</td><td>10 min. pr. par</td></tr>
        <tr><td>2</td><td>Du får et <b>billede</b> og ½ minut til at se på det. Du beskriver billedet og svarer på eksaminators spørgsmål (ca. 3 min.). Til sidst en <b>samtale</b> med den anden prøvedeltager om emnet (ca. 4 min.).</td><td>10 min. pr. par</td></tr>
      </table>
      <p class="small muted" style="margin-top:8px">Eksaminator stiller fire slags spørgsmål: opklarende ("Vil du ikke forklare det lidt nærmere?"), uddybende ("Kan du ikke fortælle lidt mere om det?"), spørgsmål om begrundelse ("Hvordan kan det så være, at …?") og om generalisering ("Hvad synes du så generelt, forskellen er på …?"). Emner til delprøve 2: 2012 Teknologi i hjemmet, Rygning, Frivilligt arbejde · nov.-dec. 2012 Venner, Transport, Mobiltelefoner · 2013 Søskende, By eller land, Hjælpsomhed · nov.-dec. 2013 Aktive ældre, Gaver, Penge · 2014 Fester, På tur, At flytte hjemmefra · nov.-dec. 2014 At være sammen med andre, Fritidsinteresser, Dyr · 2015 Morgen, Sund eller usund mad, At få danske venner · 2018 Fritid, Mad, Kolleger og klassekammerater · 2019 Husarbejde, At lære noget nyt som voksen, Transport til arbejde · 2020 Gæster, Et godt job, At spare penge i hverdagen.</p>`
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
