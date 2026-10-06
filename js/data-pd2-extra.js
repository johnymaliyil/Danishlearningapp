// More PD2 practice material, written for DanskKlar in the formats of the real exam
// (May–June 2020 reading set and the oral examiners' booklet). Nothing here is
// copied from the exam papers; the three 2020 oral topics are used as titles only.

// ---------- Mundtlig delprøve 1: præsentation (ca. 1½ min) + opfølgende interview (ca. 3½ min) ----------
// Follow-up question types from the examiners' booklet:
// opklarende, uddybende, begrundelse, generalisering.
PD2.SPEAKING_MONO = [
  {
    id: "m1", title: "Fritid og hobbyer",
    points: ["Hvad laver du i din fritid?", "Hvor ofte, og med hvem?", "Hvad lavede du i din fritid i dit hjemland?", "Hvad vil du gerne prøve i fremtiden?"],
    followUp: [
      { t: "opklarende", q: "Du fortalte om din fritid. Vil du ikke forklare lidt nærmere, hvad du helst laver?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om, hvordan du begyndte med din hobby?" },
      { t: "begrundelse", q: "Hvordan kan det være, at du har valgt netop den hobby?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på fritid i Danmark og i dit hjemland?" }
    ]
  },
  {
    id: "m2", title: "Mad og madvaner",
    points: ["Hvad spiser du til morgenmad, frokost og aftensmad?", "Hvem laver mad hjemme hos dig?", "Hvilken ret fra dit hjemland kan du bedst lide?", "Hvad synes du om dansk mad?"],
    followUp: [
      { t: "opklarende", q: "Du nævnte en ret fra dit hjemland. Vil du ikke forklare lidt nærmere, hvordan man laver den?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om, hvordan I spiser sammen i din familie?" },
      { t: "begrundelse", q: "Hvordan kan det være, at du godt kan lide netop den mad?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på danske madvaner og madvanerne i dit hjemland?" }
    ]
  },
  {
    id: "m3", title: "Arbejde og uddannelse",
    points: ["Hvad arbejder eller studerer du med nu?", "Hvad lavede du i dit hjemland?", "Hvad er dit drømmejob?", "Hvad skal du gøre for at få det job?"],
    followUp: [
      { t: "opklarende", q: "Du fortalte om dit arbejde. Vil du ikke forklare lidt nærmere, hvad du laver på en almindelig dag?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om dit drømmejob?" },
      { t: "begrundelse", q: "Hvordan kan det være, at du gerne vil arbejde med netop det?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på at arbejde i Danmark og i dit hjemland?" }
    ]
  },
  {
    id: "m4", title: "Bolig",
    points: ["Hvor bor du nu, og hvordan ser din bolig ud?", "Hvad kan du lide ved dit kvarter?", "Hvordan boede du i dit hjemland?", "Hvor vil du helst bo i fremtiden – by eller land?"],
    followUp: [
      { t: "opklarende", q: "Du beskrev dit kvarter. Vil du ikke forklare lidt nærmere, hvad der ligger i nærheden?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om, hvordan du boede i dit hjemland?" },
      { t: "begrundelse", q: "Hvordan kan det være, at du helst vil bo der i fremtiden?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på at bo i en by og på landet?" }
    ]
  },
  {
    id: "m5", title: "Sundhed og motion",
    points: ["Hvad gør du for at holde dig sund?", "Dyrker du sport eller motion?", "Hvordan er det danske sundhedssystem?", "Hvad er sundt og usundt for dig?"],
    followUp: [
      { t: "opklarende", q: "Du nævnte motion. Vil du ikke forklare lidt nærmere, hvad du laver, og hvor tit?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om dine erfaringer med lægen i Danmark?" },
      { t: "begrundelse", q: "Hvordan kan det være, at det er vigtigt for dig at leve sundt?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på sundhedssystemet i Danmark og i dit hjemland?" }
    ]
  },
  {
    id: "m6", title: "Ferie og rejser",
    points: ["Hvor har du været på ferie?", "Hvad kan du lide at lave på ferie?", "Hvordan holder man ferie i dit hjemland?", "Hvor vil du gerne rejse hen en dag?"],
    followUp: [
      { t: "opklarende", q: "Du fortalte om en ferie. Vil du ikke forklare lidt nærmere, hvad I lavede?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om det sted, du drømmer om at rejse til?" },
      { t: "begrundelse", q: "Hvordan kan det være, at du helst vil holde ferie på den måde?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på, hvordan danskerne og folk i dit hjemland holder ferie?" }
    ]
  },
  {
    id: "m7", title: "Familie og traditioner",
    points: ["Fortæl om din familie.", "Hvilke traditioner har I i din familie?", "Hvordan fejrer I fødselsdage?", "Hvilke danske traditioner kender du?"],
    followUp: [
      { t: "opklarende", q: "Du nævnte en tradition. Vil du ikke forklare lidt nærmere, hvad man gør?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om, hvordan I fejrer fødselsdage?" },
      { t: "begrundelse", q: "Hvordan kan det være, at den tradition er så vigtig for dig?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på familielivet i Danmark og i dit hjemland?" }
    ]
  },
  {
    id: "m8", title: "Transport",
    points: ["Hvordan kommer du rundt i hverdagen?", "Hvad er fordele og ulemper ved bil, bus og cykel?", "Hvordan var transport i dit hjemland?", "Hvad synes du om offentlig transport i Danmark?"],
    followUp: [
      { t: "opklarende", q: "Du sagde, hvordan du kommer på arbejde. Vil du ikke forklare lidt nærmere, hvor lang tid det tager?" },
      { t: "uddybende", q: "Kan du ikke fortælle lidt mere om transport i dit hjemland?" },
      { t: "begrundelse", q: "Hvordan kan det være, at du foretrækker den måde at komme rundt på?" },
      { t: "generalisering", q: "Hvad synes du generelt, forskellen er på at have bil i Danmark og i dit hjemland?" }
    ]
  }
];

// ---------- Mundtlig delprøve 2: billede + interview (ca. 3 min) og samtale (ca. 4 min) ----------
// In the exam each candidate gets a photo. Here the photo is an illustrated scene card.
PD2.SPEAKING_PICTURE = [
  {
    id: "p1", title: "Gæster", real: true,
    pictures: [
      { scene: "🏠 🎂 ☕ 🍰\n👵 👴 👨‍👩‍👧", words: ["fødselsdag", "kaffe og kage", "bedsteforældre", "stuen", "hyggeligt"] },
      { scene: "🍕 🥤 🎶\n👫 👬 🛋️", words: ["venner", "fest", "pizza", "musik", "sofaen"] }
    ],
    interview: [
      "Hvad tror du, personerne på billedet fejrer?",
      "Hvor tit får du gæster?",
      "Hvad serverer du, når du får gæster?",
      "Hvordan er det at være gæst i Danmark sammenlignet med dit hjemland?"
    ],
    talk: [
      { who: "partner", say: "Jeg elsker at få gæster, men det kan godt blive dyrt. Hvad gør du for at holde det billigt?" },
      { who: "partner", say: "Hos mig kommer folk bare forbi uden at ringe først. Hvad synes du om det?" },
      { who: "mediator", say: "Hvordan er det med gæster i jeres hjemlande? Er der en forskel?" },
      { who: "partner", say: "Jeg synes, danskerne planlægger alting lang tid i forvejen. Er du enig?" },
      { who: "mediator", say: "Hvad synes I generelt er vigtigst, når man inviterer gæster?" }
    ],
    phrases: ["På billedet kan jeg se …", "I forgrunden / i baggrunden …", "Det ser ud som om …", "Hos os er det sådan, at …", "Jeg er enig, fordi …", "Hvad med dig?"]
  },
  {
    id: "p2", title: "Et godt job", real: true,
    pictures: [
      { scene: "🏥 👩‍⚕️ 🩺\n🛏️ 🧓 🕗", words: ["sygeplejerske", "hospital", "patient", "nattevagt", "omsorg"] },
      { scene: "🏢 👨‍💻 💻\n☕ 📊 🪴", words: ["kontor", "computer", "møde", "kolleger", "skrivebord"] }
    ],
    interview: [
      "Hvad tror du, personen synes om sit arbejde?",
      "Hvad arbejder du med nu, eller hvad vil du gerne arbejde med?",
      "Hvad er vigtigst for dig: en høj løn eller gode kolleger?",
      "Hvordan finder man et job i Danmark?"
    ],
    talk: [
      { who: "partner", say: "For mig er et godt job et job, hvor jeg kan hjælpe andre mennesker. Hvad er et godt job for dig?" },
      { who: "partner", say: "Jeg vil hellere have en lav løn og gode kolleger end en høj løn og et dårligt arbejdsmiljø. Hvad med dig?" },
      { who: "mediator", say: "Er det let eller svært at få et job i Danmark, når man kommer fra et andet land?" },
      { who: "partner", say: "Jeg tror, sproget er det vigtigste for at få et job. Er du enig?" },
      { who: "mediator", say: "Hvad synes I generelt, arbejdsgiverne kan gøre for at få gode medarbejdere?" }
    ],
    phrases: ["Personen på billedet arbejder som …", "Det ser ud til, at …", "For mig er det vigtigt, at …", "En fordel ved … er …", "Det kommer an på …", "Hvad synes du?"]
  },
  {
    id: "p3", title: "At spare penge i hverdagen", real: true,
    pictures: [
      { scene: "🛒 🏷️ 🥕\n🥖 🧾 💰", words: ["supermarked", "tilbud", "indkøbsliste", "kvittering", "billigt"] },
      { scene: "🚲 ♻️ 👕\n🧥 🏪 💶", words: ["genbrugsbutik", "brugt tøj", "cykel", "genbrug", "pris"] }
    ],
    interview: [
      "Hvad laver personen på billedet, tror du?",
      "Hvordan prøver du selv at spare penge?",
      "Hvad bruger du flest penge på hver måned?",
      "Køber du nogle gange brugte ting? Hvorfor eller hvorfor ikke?"
    ],
    talk: [
      { who: "partner", say: "Jeg skriver altid en indkøbsliste, så jeg ikke køber for meget. Gør du også det?" },
      { who: "partner", say: "Jeg køber næsten alt mit tøj i genbrugsbutikker. Hvad synes du om det?" },
      { who: "mediator", say: "Er det dyrere at leve i Danmark end i jeres hjemlande?" },
      { who: "partner", say: "Jeg synes, at børn skal lære at spare op, når de er små. Hvad mener du?" },
      { who: "mediator", say: "Hvad synes I generelt er den bedste måde at spare penge på?" }
    ],
    phrases: ["På billedet ser jeg …", "Jeg tror, at personen …", "Jeg prøver at …", "Det er dyrt at …", "På den ene side … på den anden side …", "Enig – og desuden …"]
  },
  {
    id: "p4", title: "Transport i hverdagen",
    pictures: [
      { scene: "🚏 🚌 🌧️\n🧑‍🤝‍🧑 ☂️ ⏰", words: ["busstoppested", "regn", "paraply", "vente", "forsinket"] },
      { scene: "🚴‍♀️ 🚴 🛣️\n🌳 ☀️ 🏙️", words: ["cykelsti", "cyklister", "solskin", "byen", "motion"] }
    ],
    interview: [
      "Hvordan tror du, personerne har det?",
      "Hvordan kommer du på arbejde eller i skole?",
      "Hvad synes du om at cykle om vinteren?",
      "Hvad kunne gøre den offentlige transport bedre?"
    ],
    talk: [
      { who: "partner", say: "Jeg cykler hver dag, også når det regner. Gør du også det?" },
      { who: "partner", say: "Jeg synes, bussen er alt for dyr. Hvad synes du?" },
      { who: "mediator", say: "Hvordan var transporten i jeres hjemlande sammenlignet med Danmark?" },
      { who: "partner", say: "Jeg tror, der skal være færre biler i byerne. Er du enig?" },
      { who: "mediator", say: "Hvad synes I generelt, politikerne skal gøre for transporten?" }
    ],
    phrases: ["Det ser ud til at være …", "De venter på …", "Jeg foretrækker at …", "Det tager … minutter", "Jeg er ikke helt enig, fordi …", "Hvad med dig?"]
  },
  {
    id: "p5", title: "Sundhed og motion",
    pictures: [
      { scene: "🏃‍♀️ 🏃 🌲\n🌳 ⌚ 💧", words: ["løbe", "skoven", "løbetur", "ur", "vand"] },
      { scene: "🥗 🍎 🥦\n🍽️ 👨‍👩‍👦 😋", words: ["sund mad", "grøntsager", "frugt", "aftensmad", "familien"] }
    ],
    interview: [
      "Hvad tror du, personerne gør for at være sunde?",
      "Hvad gør du selv for at holde dig i form?",
      "Spiser du sundere i Danmark end i dit hjemland?",
      "Hvor tit dyrker du motion?"
    ],
    talk: [
      { who: "partner", say: "Jeg går til fitness tre gange om ugen. Hvad laver du for at holde dig i form?" },
      { who: "partner", say: "Jeg synes, sund mad er for dyr i Danmark. Er du enig?" },
      { who: "mediator", say: "Hvordan taler man om sundhed i jeres hjemlande?" },
      { who: "partner", say: "Jeg tror, man skal starte med at lære børn om sund mad i skolen. Hvad tror du?" },
      { who: "mediator", say: "Hvad synes I generelt er det vigtigste for at leve sundt?" }
    ],
    phrases: ["På billedet kan man se …", "De ser ud til at …", "Jeg prøver at …", "Det er vigtigt at …", "Jeg tror, at …", "Det har du ret i."]
  },
  {
    id: "p6", title: "Ferie",
    pictures: [
      { scene: "🏖️ ⛱️ 🌞\n👨‍👩‍👦 🏐 🍦", words: ["stranden", "parasol", "solskin", "familie", "is"] },
      { scene: "⛺ 🏕️ 🌲\n🔥 🎒 🌙", words: ["telt", "camping", "bål", "rygsæk", "aften"] }
    ],
    interview: [
      "Hvordan tror du, personerne har det på billedet?",
      "Hvad kan du bedst lide at lave på ferie?",
      "Hvor har du holdt ferie i Danmark?",
      "Holder du helst ferie hjemme eller i udlandet?"
    ],
    talk: [
      { who: "partner", say: "Jeg synes, den bedste ferie er ved stranden. Hvad synes du?" },
      { who: "partner", say: "Jeg har aldrig prøvet at bo i telt. Har du?" },
      { who: "mediator", say: "Hvordan holder man typisk ferie i jeres hjemlande?" },
      { who: "partner", say: "Jeg tror, mange danskere holder ferie i udlandet, fordi vejret er dårligt her. Er du enig?" },
      { who: "mediator", say: "Hvad synes I generelt, en god ferie skal indeholde?" }
    ],
    phrases: ["Billedet viser …", "Det ligner …", "Personerne er …", "Jeg kan bedst lide …", "Jeg er enig, men …", "Hvad med dig?"]
  }
];

// ---------- Læsning: øvesæt i samme format som prøven (opgave 1, 3, 4 og 5) ----------
(function () {
  const A = "Øvesæt A – samme format som prøven";
  const B = "Øvesæt B – samme format som prøven";

  PD2.READING.push(
    {
      id: "pd2-a1", group: A,
      title: "Opgave 1 – Kulturhus og lejligheder",
      kind: "Find informationen · kort svar",
      level: 2, minutes: 25,
      instruction: "Læs teksterne. Skriv svaret (navnet på holdet eller adressen) på linjen.",
      sections: [
        {
          heading: "Vestby Kulturhus – Hold i efteråret",
          cards: [
            { title: "Syning for begyndere", body: "Lær at sy dit eget tøj. Vi har symaskiner, som du kan låne. Torsdag kl. 18-20. Pris: 600 kr. for 8 gange." },
            { title: "Fotografi med mobilen", body: "Tag bedre billeder med din telefon. Vi går ture i byen og lærer om lys og motiver. Onsdag kl. 17-19. Pris: 450 kr." },
            { title: "Dansk madlavning", body: "Lav klassiske danske retter som frikadeller og æblekage. Vi spiser sammen til sidst. Mandag kl. 17-21. Pris: 900 kr. inklusive råvarer." },
            { title: "Skak for alle", body: "Både børn og voksne er velkomne. Gratis – men husk at tilmelde dig. Lørdag kl. 10-12." },
            { title: "Guitar for voksne", body: "Du skal selv have en guitar med. Undervisningen foregår på små hold med højst seks deltagere. Tirsdag kl. 19-20.30. Pris: 1.100 kr." },
            { title: "Strikkecafé", body: "Kom og strik sammen med andre i hyggelige omgivelser. Kaffe og kage koster 20 kr. Du behøver ikke at tilmelde dig. Fredag kl. 14-16." }
          ]
        },
        {
          heading: "Lejligheder til leje i Horsens",
          cards: [
            { title: "Søndergade 8, 3. th.", body: "To værelser tæt på gågaden. Der er ingen elevator. Husdyr er ikke tilladt.", facts: "58 m² · Husleje: 6.200 kr." },
            { title: "Fjordvej 21, st. tv.", body: "Tre værelser i stueetagen med egen lille have. Hund og kat er velkomne.", facts: "85 m² · Husleje: 8.900 kr." },
            { title: "Banegårdsgade 4, 2. tv.", body: "Et værelse lige ved banegården. Perfekt til studerende og pendlere.", facts: "40 m² · Husleje: 4.800 kr." },
            { title: "Skovbrynet 12, 1. th.", body: "Fire værelser og altan med udsigt over skoven. Der er elevator i opgangen.", facts: "110 m² · Husleje: 11.500 kr." },
            { title: "Havnefronten 3, 5. sal", body: "Tre værelser med udsigt over havnen. Parkering i kælderen.", facts: "95 m² · Husleje: 12.900 kr." },
            { title: "Elmegade 30, 2. th.", body: "To værelser med nyt køkken. Fælles vaskeri i kælderen.", facts: "65 m² · Husleje: 6.900 kr." }
          ]
        }
      ],
      questions: [
        { type: "short", n: 1, q: "Mohammed vil gerne lære at lave den mad, som danskerne spiser. Hvilket hold skal han vælge?", accept: ["dansk madlavning", "madlavning"] },
        { type: "short", n: 2, q: "Grace vil gerne møde andre mennesker, men hun vil ikke tilmelde sig et hold. Hvor skal hun gå hen?", accept: ["strikkecafé", "strikkecafe", "strikkecaféen"] },
        { type: "short", n: 3, q: "Peter og hans søn på ti år vil gerne lave noget gratis sammen i weekenden. Hvilket hold passer til dem?", accept: ["skak for alle", "skak"] },
        { type: "short", n: 4, q: "Familien Larsen har en hund og vil gerne have en have. Hvilken lejlighed passer til dem?", accept: ["fjordvej 21", "fjordvej"] },
        { type: "short", n: 5, q: "Thomas tager toget på arbejde hver dag og har ikke mange penge. Hvilken lejlighed passer til ham?", accept: ["banegårdsgade 4", "banegårdsgade"] },
        { type: "short", n: 6, q: "Ane er 78 år og kan ikke gå på trapper. Hun vil gerne bo tæt på naturen. Hvilken lejlighed passer til hende?", accept: ["skovbrynet 12", "skovbrynet"] }
      ]
    },
    {
      id: "pd2-a3", group: A,
      title: "Opgave 3 – Lone begynder at løbe",
      kind: "Udfyld hullerne",
      level: 2, minutes: 20,
      instruction: "Læs teksten. Vælg de ord (13-20), der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
      text: `Lone er 45 år og arbejder på et kontor, hvor hun sidder ned det meste af dagen. Hun følte sig ofte træt, og hun havde [[0]] haft lyst til at begynde at dyrke motion.

Sidste forår meldte hun sig ind i en løbeklub. De første gange var det meget [[13]], og hun kunne kun løbe i fem minutter ad gangen. Men træneren var rigtig god til at [[14]] hende, og hun fik hurtigt nye venner i klubben.

Nu løber Lone tre gange om ugen. Hun løber [[15]] om morgenen, før hun tager på arbejde, fordi der er så stille i byen på det tidspunkt. Om lørdagen løber hun sammen med klubben, og [[16]] drikker de kaffe sammen.

Lone har det meget [[17]] nu. Hun sover bedre, og hun er ikke så træt om eftermiddagen. Hun har også tabt fem kilo, [[18]] det var ikke det vigtigste for hende.

Til september skal hun løbe sit første halvmaraton. Hun er lidt [[19]], men hun glæder sig også. "Hvis jeg kan, så kan alle," siger hun og [[20]].`,
      questions: [
        {
          type: "gaps",
          bank: ["længe", "hårdt", "opmuntre", "helst", "bagefter", "bedre", "men", "nervøs", "smiler", "værre", "aldrig", "fordi", "dyr", "sjældent"].map(w => ({ key: w, text: w })),
          example: { 0: "længe" },
          answers: { 13: "hårdt", 14: "opmuntre", 15: "helst", 16: "bagefter", 17: "bedre", 18: "men", 19: "nervøs", 20: "smiler" }
        }
      ]
    },
    {
      id: "pd2-a4", group: A,
      title: "Opgave 4 – Samiras frisørsalon",
      kind: "Find sætningen",
      level: 3, minutes: 20,
      instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
      text: `Samira Haddad er 34 år og kom til Danmark fra Libanon for ti år siden. I dag har hun sin egen frisørsalon i Kolding.

**0.** I Libanon arbejdede Samira som frisør i mange år. Da hun kom til Danmark, kunne hun ikke tale dansk, og hun fik job som rengøringsassistent. [[0]]. Hun savnede at klippe hår og tale med kunderne.

**21.** Samira begyndte på sprogskole om aftenen, og efter tre år bestod hun Prøve i Dansk 2. [[21]]. Her lærte hun både om dansk hårpleje og om, hvordan man driver en forretning.

**22.** Efter uddannelsen fik hun job i en stor salon i Kolding centrum. Hun var glad for sine kolleger, men lønnen var lav, og arbejdstiderne var lange. [[22]]. Hun ville gerne bestemme selv.

**23.** Det var dog ikke let at starte en virksomhed. Samira skulle låne penge, og hun skulle finde et lokale. [[23]]. Til sidst hjalp en erhvervsrådgiver fra kommunen hende med at lave en god forretningsplan.

**24.** I marts sidste år åbnede Samira endelig sin egen salon. De første måneder kom der ikke mange kunder. [[24]]. Hun lavede en side på Facebook og gav rabat til nye kunder.

**25.** I dag har salonen travlt, og Samira har ansat to medarbejdere. [[25]]. "Jeg vil gerne vise andre kvinder, at det kan lade sig gøre," siger hun.`,
      questions: [
        {
          type: "gaps",
          bank: [
            { key: "A", text: "Men hun var ikke glad for arbejdet." },
            { key: "B", text: "Hun drømmer nu om at åbne en salon mere." },
            { key: "C", text: "Kunderne klagede over, at priserne var for høje." },
            { key: "D", text: "Derefter tog hun en frisøruddannelse på erhvervsskolen." },
            { key: "E", text: "Den første bank sagde nej til at låne hende penge." },
            { key: "F", text: "Hun besluttede derfor at flytte tilbage til Libanon." },
            { key: "G", text: "Derfor måtte hun finde nye måder at skaffe kunder på." },
            { key: "H", text: "Alligevel drømte hun om noget mere." }
          ],
          example: { 0: "A" },
          answers: { 21: "D", 22: "H", 23: "E", 24: "G", 25: "B" }
        }
      ]
    },
    {
      id: "pd2-a5", group: A,
      title: "Opgave 5 – Interview med Birthe",
      kind: "Match spørgsmål og svar",
      level: 3, minutes: 20,
      instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
      text: "Birthe på 49 er sygeplejerske på et stort hospital. Hun arbejder næsten kun om natten.",
      sections: [
        {
          heading: "Interview med Birthe – sygeplejerske på nattevagt",
          cards: [
            { title: "A", sub: "Eksempel", body: "I næsten 25 år. Jeg blev færdiguddannet i 1999 og har arbejdet på det samme hospital siden. De sidste ti år har jeg mest haft nattevagter." },
            { title: "B", body: "Det er, når vi har travlt, og der kun er to sygeplejersker på hele afdelingen. Så kan jeg ikke nå at tale ordentligt med patienterne, og det går mig på." },
            { title: "C", body: "Jeg sover fra kl. 8 om morgenen til kl. 15. Det kræver, at der er helt mørkt og stille, så jeg har mørklægningsgardiner og ørepropper. Min familie ved, at de ikke må forstyrre mig." },
            { title: "D", body: "Nej, faktisk ikke. Om natten er der en helt særlig ro på hospitalet. Der er ingen besøgende og færre møder, og man arbejder tættere sammen med de få kolleger, der er på arbejde." },
            { title: "E", body: "At jeg kan gøre en forskel. Mange patienter er bange om natten, og når jeg sætter mig hos dem og holder dem i hånden, kan jeg mærke, at de falder til ro." },
            { title: "F", body: "Jeg spiser et let måltid ved midnat, typisk en salat eller en suppe, og så drikker jeg rigtig meget te. Kaffe holder jeg op med at drikke efter kl. 2, ellers kan jeg ikke sove bagefter." },
            { title: "G", body: "Ja, det er nok det sværeste. Når mine venner holder fest om lørdagen, skal jeg ofte på arbejde. Men jeg har lært at planlægge mit sociale liv lang tid i forvejen." },
            { title: "H", body: "Min datter vil gerne være læge, og hun har været med mig på arbejde en enkelt gang. Hun synes, det var spændende, men hun vil helst arbejde om dagen." }
          ]
        }
      ],
      questions: [
        {
          type: "match",
          q: "Hvilket afsnit svarer på spørgsmålet?",
          options: ["B", "C", "D", "E", "F", "G", "H"],
          items: [
            { n: 0, text: "Hvor længe har du været sygeplejerske?", answer: "A", example: true },
            { n: 26, text: "Hvad er det bedste ved dit arbejde?", answer: "E" },
            { n: 27, text: "Hvordan får du sovet nok?", answer: "C" },
            { n: 28, text: "Savner du at arbejde om dagen?", answer: "D" },
            { n: 29, text: "Hvad er det værste ved dit arbejde?", answer: "B" },
            { n: 30, text: "Er det svært at have et socialt liv ved siden af?", answer: "G" }
          ]
        }
      ]
    },

    {
      id: "pd2-b1", group: B,
      title: "Opgave 1 – Weekend i Aarhus",
      kind: "Find informationen · kort svar",
      level: 2, minutes: 20,
      instruction: "Læs teksterne. Skriv svaret (navnet på stedet) på linjen.",
      sections: [
        {
          heading: "Weekendtilbud i Aarhus",
          cards: [
            { title: "Den Gamle By", body: "Frilandsmuseum med gamle huse og butikker fra forskellige tider. Børn under 18 år kommer gratis ind. Åbent hver dag kl. 10-17." },
            { title: "ARoS", body: "Kunstmuseum med en stor regnbue på taget, hvor man kan gå rundt og se ud over hele byen. Café og restaurant i huset." },
            { title: "Moesgaard Museum", body: "Museum om historie og arkæologi lidt uden for byen. Man kan gå op på taget, som er dækket af græs. Bus 18 kører helt derhen." },
            { title: "Dokk1", body: "Byens store bibliotek ved havnen. Gratis adgang, legeområde for børn og mange stille læsepladser." },
            { title: "Tivoli Friheden", body: "Forlystelsespark med karruseller og koncerter om sommeren. Lukket om vinteren." },
            { title: "Botanisk Have", body: "Gratis park med væksthuse, hvor man kan se tropiske planter. Perfekt til en picnic." },
            { title: "Aarhus Ø Havnebad", body: "Udendørs svømmebad i havnen. Gratis og åbent fra juni til august. Der er altid en livredder til stede." },
            { title: "Marselisborg Dyrehave", body: "Skov syd for byen, hvor man kan fodre hjorte med gulerødder og æbler. Gratis." }
          ]
        }
      ],
      questions: [
        { type: "short", n: 1, q: "Amina vil gerne bade udendørs om sommeren. Hvor skal hun tage hen?", accept: ["aarhus ø havnebad", "havnebad", "havnebadet", "aarhus ø"] },
        { type: "short", n: 2, q: "Familien Nguyen vil vise deres børn, hvordan man levede i gamle dage. Hvor skal de tage hen?", accept: ["den gamle by", "gamle by"] },
        { type: "short", n: 3, q: "Jonas vil gerne se kunst og samtidig have en flot udsigt over byen. Hvor skal han tage hen?", accept: ["aros"] },
        { type: "short", n: 4, q: "Leila vil gerne læse i fred og ro, og det må ikke koste noget. Hvor skal hun tage hen?", accept: ["dokk1", "dokk 1"] },
        { type: "short", n: 5, q: "Pernille vil gerne se dyr i naturen sammen med sine børn. Hvor skal hun tage hen?", accept: ["marselisborg dyrehave", "dyrehaven", "marselisborg"] },
        { type: "short", n: 6, q: "Sam interesserer sig for planter fra varme lande. Hvor skal han tage hen?", accept: ["botanisk have", "botanisk"] }
      ]
    },
    {
      id: "pd2-b3", group: B,
      title: "Opgave 3 – Familien flytter til Viborg",
      kind: "Udfyld hullerne",
      level: 2, minutes: 20,
      instruction: "Læs teksten. Vælg de ord (13-20), der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
      text: `Sidste sommer flyttede familien Rossi fra København til Viborg. Faren, Marco, havde fået nyt arbejde [[0]] en virksomhed i byen.

I starten var det [[13]] for børnene. De savnede deres gamle venner, og de kendte ingen på den nye skole. Men efter et par uger [[14]] Sofia på ni år en veninde, som boede på samme vej.

Familien bor nu i et hus med en stor have. Det er [[15]] end lejligheden i København, og huslejen er meget lavere. Marco cykler på arbejde, [[16]] det kun tager ti minutter.

Moren, Giulia, var bekymret for, om hun kunne finde arbejde. Hun er uddannet sygeplejerske, og heldigvis [[17]] der mangel på sygeplejersker i hele Danmark. Hun fik job på hospitalet efter kun en måned.

Det [[18]], familien savner, er de mange caféer og restauranter i København. "Her lukker alt tidligt," siger Giulia og griner. Men de er glade for [[19]] og den friske luft. "Vi har slet ikke [[20]] beslutningen," siger Marco.`,
      questions: [
        {
          type: "gaps",
          bank: ["på", "svært", "fik", "større", "fordi", "er", "eneste", "naturen", "fortrudt", "sjovt", "selvom", "trafikken", "købt", "havde"].map(w => ({ key: w, text: w })),
          example: { 0: "på" },
          answers: { 13: "svært", 14: "fik", 15: "større", 16: "fordi", 17: "er", 18: "eneste", 19: "naturen", 20: "fortrudt" }
        }
      ]
    },
    {
      id: "pd2-b4", group: B,
      title: "Opgave 4 – Mads og kolonihaven",
      kind: "Find sætningen",
      level: 3, minutes: 20,
      instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
      text: `Mads Kristensen er 41 år og bor i en lejlighed på Nørrebro i København med sin kone og deres to børn.

**0.** Familien har ikke nogen have, og børnene leger mest indenfor. [[0]]. Derfor begyndte Mads at kigge efter en kolonihave uden for byen.

**21.** Det viste sig at være svært. Der var lange ventelister til næsten alle haveforeninger. [[21]]. Men så fik han et tip fra en kollega om en have, der var til salg i Brøndby.

**22.** Haven var stor, men huset var gammelt og i dårlig stand. [[22]]. Mads besluttede alligevel at købe det, fordi han kunne se mulighederne.

**23.** Hele foråret brugte familien weekenderne på at sætte huset i stand. [[23]]. Til gengæld lærte de at male, lægge tag og bygge en terrasse.

**24.** Nu tilbringer familien næsten hele sommeren i kolonihaven. Børnene leger med naboernes børn, og de har fået høns. [[24]]. Han synes, det smager meget bedre end det, man køber i supermarkedet.

**25.** Mads mener, at kolonihaven har gjort familien gladere. [[25]]. "Vi snakker mere sammen, når der ikke er nogen skærme," siger han.`,
      questions: [
        {
          type: "gaps",
          bank: [
            { key: "A", text: "Det var Mads ikke så glad for." },
            { key: "B", text: "Der er hverken internet eller tv i huset." },
            { key: "C", text: "Familien flyttede derfor ud af lejligheden." },
            { key: "D", text: "Nogle steder skulle man vente mere end ti år." },
            { key: "E", text: "Mads dyrker også sine egne grøntsager." },
            { key: "F", text: "Taget var utæt, og vinduerne var rådne." },
            { key: "G", text: "Kollegaen havde selv en have i samme forening." },
            { key: "H", text: "Det var hårdt arbejde, og nogle gange havde de lyst til at give op." }
          ],
          example: { 0: "A" },
          answers: { 21: "D", 22: "F", 23: "H", 24: "E", 25: "B" }
        }
      ]
    },
    {
      id: "pd2-b5", group: B,
      title: "Opgave 5 – Interview med Kasper",
      kind: "Match spørgsmål og svar",
      level: 3, minutes: 20,
      instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
      text: "Kasper på 44 er buschauffør i Aalborg. Han kører både bybusser og regionale busser.",
      sections: [
        {
          heading: "Interview med Kasper – buschauffør",
          cards: [
            { title: "A", sub: "Eksempel", body: "I otte år. Før det var jeg tømrer, men jeg fik problemer med ryggen og måtte finde et andet arbejde. Kommunen hjalp mig med at tage kørekort til bus." },
            { title: "B", body: "Det må være de mange mennesker. Jeg møder alle slags passagerer – skolebørn, studerende og pensionister – og mange af dem kender mig efterhånden og siger hej." },
            { title: "C", body: "Nej, slet ikke. Jeg kører både om morgenen, om eftermiddagen og om aftenen, og det skifter fra uge til uge. Det kan være svært at få familielivet til at hænge sammen." },
            { title: "D", body: "Når passagererne er utilfredse og råber ad mig, fordi bussen er forsinket. Det er sjældent min skyld, men det er mig, de møder." },
            { title: "E", body: "Jeg prøver at blive rolig og forklare situationen. Hvis det bliver for slemt, kan jeg kontakte kontrolcentret, men det er kun sket to gange." },
            { title: "F", body: "Om vinteren er der glatte veje og sne. Så skal man køre meget forsigtigt, og man kan ikke altid overholde køreplanen." },
            { title: "G", body: "Nej, det tror jeg ikke. Om få år kommer der sikkert selvkørende busser, men jeg tror stadig, at der skal være et menneske med, som kan hjælpe passagererne." },
            { title: "H", body: "Jeg kunne godt tænke mig at blive instruktør og lære nye chauffører at køre bus. Det kræver et kursus, som jeg håber at starte på næste år." }
          ]
        }
      ],
      questions: [
        {
          type: "match",
          q: "Hvilket afsnit svarer på spørgsmålet?",
          options: ["B", "C", "D", "E", "F", "G", "H"],
          items: [
            { n: 0, text: "Hvor længe har du kørt bus?", answer: "A", example: true },
            { n: 26, text: "Hvad er det bedste ved dit job?", answer: "B" },
            { n: 27, text: "Har du faste arbejdstider?", answer: "C" },
            { n: 28, text: "Hvad er det værste ved dit job?", answer: "D" },
            { n: 29, text: "Hvad gør du, hvis en passager bliver vred?", answer: "E" },
            { n: 30, text: "Hvad er dine planer for fremtiden?", answer: "H" }
          ]
        }
      ]
    }
  );

  // ---------- Skrivning: flere opgaver ----------
  PD2.WRITING.push(
    {
      id: "w8", delprove: 1,
      title: "Spørgsmål om et kursus",
      kind: "Mail til aftenskolen",
      minWords: 80, maxWords: 120,
      situation: "Du har set, at aftenskolen har et kursus i \"Dansk madlavning\". Skriv en mail til aftenskolen.",
      points: ["Fortæl, hvorfor du er interesseret i kurset", "Spørg, hvornår og hvor kurset foregår", "Spørg, hvad det koster, og om prisen er med mad", "Spørg, hvordan du tilmelder dig"],
      phrases: ["Jeg har set på jeres hjemmeside, at …", "Jeg er meget interesseret i …", "Kan I fortælle mig, hvornår …?", "Jeg vil også gerne vide, om …", "Hvordan tilmelder man sig?", "På forhånd tak for svaret."],
      model: `Kære Vestby Aftenskole

Jeg har set på jeres hjemmeside, at I har et kursus i dansk madlavning, og jeg er meget interesseret. Jeg har boet i Danmark i to år, og jeg vil gerne lære at lave de retter, som mine danske kolleger taler om, for eksempel frikadeller og risalamande.

Kan I fortælle mig, hvilken dag kurset er, og hvor det foregår? Jeg arbejder til kl. 16, så det skal helst være om aftenen.

Jeg vil også gerne vide, hvad kurset koster, og om prisen er med mad.

Til sidst vil jeg spørge, hvordan man tilmelder sig.

På forhånd tak for svaret.

Venlig hilsen
Leyla Amini`
    },
    {
      id: "w9", delprove: 1,
      title: "Tak for hjælpen",
      kind: "Mail til en nabo",
      minWords: 60, maxWords: 100,
      situation: "Du har været på hospitalet i en uge. Din nabo, Inge, har passet din kat og tømt din postkasse. Skriv en mail til Inge.",
      points: ["Sig tak for hjælpen", "Fortæl, hvordan du har det nu", "Inviter Inge på noget som tak"],
      phrases: ["Kære Inge", "Tusind tak, fordi du …", "Jeg har det meget bedre nu.", "Som tak vil jeg gerne invitere dig …", "Passer det dig på …?", "Mange hilsner"],
      model: `Kære Inge

Tusind tak, fordi du passede Mis og tømte min postkasse, mens jeg var på hospitalet. Det var en stor hjælp, og jeg var glad for at vide, at Mis havde det godt.

Jeg har det meget bedre nu. Lægen siger, at jeg skal tage den med ro et par uger, men jeg må godt gå korte ture.

Som tak vil jeg gerne invitere dig på kaffe og hjemmebagt kage. Passer det dig på søndag kl. 15?

Mange hilsner
Hassan`
    },
    {
      id: "w10", delprove: 2,
      title: "Et godt job",
      kind: "Holdningstekst",
      minWords: 150, maxWords: 200,
      situation: "Sprogskolens blad har et tema om arbejde. Skriv en tekst om, hvad et godt job er for dig.",
      points: ["Fortæl om et job, du har haft, eller har nu", "Beskriv, hvad der gør et job godt", "Skriv, om løn eller arbejdsmiljø er vigtigst for dig, og hvorfor", "Fortæl om dit drømmejob"],
      phrases: ["For mig er et godt job …", "Det vigtigste er, at …", "Jeg har tidligere arbejdet som …", "Selvom lønnen er vigtig, …", "Mit drømmejob er …", "Alt i alt …"],
      model: `Et godt job

Lige nu arbejder jeg som køkkenmedhjælper på et plejehjem. Før jeg kom til Danmark, var jeg lærer i Eritrea i seks år.

For mig er et godt job et job, hvor man føler, at man gør en forskel. På plejehjemmet laver jeg mad til de ældre, og de siger tit tak, når maden smager godt. Det gør mig glad.

Gode kolleger er også meget vigtige. Hvis man har det godt med sine kolleger, er det sjovere at gå på arbejde, og man lærer mere. Selvom lønnen er vigtig, vil jeg hellere have en lidt lavere løn og et godt arbejdsmiljø end omvendt.

Mit drømmejob er at blive lærer igen, også her i Danmark. Derfor læser jeg dansk om aftenen, og næste år vil jeg søge ind på læreruddannelsen.

Alt i alt synes jeg, at et godt job giver både penge, glæde og mulighed for at udvikle sig.

Yonas`
    },
    {
      id: "w11", delprove: 2,
      title: "At spare penge i hverdagen",
      kind: "Holdningstekst",
      minWords: 150, maxWords: 200,
      situation: "Mange familier synes, at det er blevet dyrere at leve. Skriv en tekst til din lokalavis om, hvordan man kan spare penge i hverdagen.",
      points: ["Fortæl, hvordan du selv sparer penge", "Giv mindst to gode råd", "Skriv om fordele og ulemper ved at købe brugte ting", "Skriv, hvad du mener, er det vigtigste"],
      phrases: ["Det er blevet dyrere at …", "Et godt råd er at …", "For eksempel …", "En fordel ved … er, at …", "Til gengæld …", "Det vigtigste er efter min mening …"],
      model: `Små ændringer giver store besparelser

Det er blevet dyrere at købe mad, el og varme. I min familie har vi derfor lavet nogle små ændringer, som hjælper meget.

Et godt råd er at planlægge ugens måltider og skrive en indkøbsliste. Så køber man kun det, man har brug for, og man smider mindre mad ud. Vi handler også ind én gang om ugen i stedet for hver dag.

Et andet råd er at købe brugt. Vi køber næsten alt børnetøj i genbrugsbutikker eller på nettet. En fordel ved det er, at det er meget billigere, og at det er godt for miljøet. Til gengæld kan det tage lang tid at finde det rigtige, og man kan ikke altid få den størrelse, man skal bruge.

Vi har også skiftet bilen ud med cykler. Det sparer penge til benzin, og vi får motion.

Det vigtigste er efter min mening at tale sammen i familien om, hvad man bruger penge på. Så bliver det lettere at sige nej til de ting, man ikke har brug for.

Amal`
    }
  );
})();
