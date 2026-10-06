// Prøve i Dansk 1 (niveau ca. A2) – original practice material in the exam's style.
// No official PD1 papers are included yet; add a real set as its own file like data-2020.js.
PD2.EXAMS = PD2.EXAMS || {};

PD2.EXAMS.pd1 = {
  READING: [
    {
      id: "pd1-r1",
      title: "Gårdfest i opgangen",
      kind: "Opslag",
      level: 1,
      minutes: 10,
      text: `Kære naboer

Lørdag den 14. september holder vi gårdfest fra kl. 15 til 21. Alle i opgangen er velkomne – også børn.

Vi tænder grillen kl. 17. Tag selv mad med til grillen. Foreningen giver kaffe, saftevand og kage.

Vi har brug for hjælp til at stille borde og stole op kl. 13. Skriv dit navn på listen nedenfor, hvis du kan hjælpe.

Hvis det regner, holder vi festen i kælderen.

Mange hilsner
Festudvalget`,
      questions: [
        { type: "mc", q: "Hvornår starter festen?", options: ["Kl. 13", "Kl. 15", "Kl. 17"], answer: 1 },
        { type: "mc", q: "Hvad skal man selv tage med?", options: ["Kaffe", "Kage", "Mad til grillen"], answer: 2 },
        { type: "tf", q: "Børn må ikke komme til festen.", answer: "F" },
        { type: "tf", q: "Festen er i kælderen, hvis det regner.", answer: "R" },
        { type: "tf", q: "Festudvalget har købt øl til festen.", answer: "S" }
      ]
    },
    {
      id: "pd1-r2",
      title: "Hvem skal hvorhen?",
      kind: "Små annoncer – match",
      level: 1,
      minutes: 10,
      text: `A. Tandlæge Nørrebro. Nye patienter er velkomne. Ring på 33 12 34 56.

B. Cykelværksted. Vi reparerer din cykel samme dag. Åbent mandag-fredag kl. 8-17.

C. Dansk for begyndere. Mandag og onsdag aften. Gratis.

D. Babysvømning for børn fra 3 til 12 måneder. Søndag formiddag.

E. Loppemarked i skolegården. Lørdag kl. 10-14. Køb og sælg brugte ting.

F. Frisør. Klip uden tidsbestilling. Herreklip 200 kr.`,
      questions: [
        {
          type: "match",
          q: "Find den annonce, der passer til hver person. Én annonce bliver ikke brugt.",
          options: ["A", "B", "C", "D", "E", "F"],
          items: [
            { text: "Omar har ondt i en tand.", answer: "A" },
            { text: "Mia vil gerne svømme med sin datter på seks måneder.", answer: "D" },
            { text: "Karim har fået et fladt dæk på sin cykel.", answer: "B" },
            { text: "Lene vil gerne købe billigt legetøj til sine børn.", answer: "E" },
            { text: "Ivan er lige kommet til Danmark og vil lære dansk.", answer: "C" }
          ]
        }
      ]
    },
    {
      id: "pd1-r3",
      title: "En sms fra Sofie",
      kind: "Sms",
      level: 1,
      minutes: 5,
      text: `Hej Nadia!

Tak for i går. Jeg har glemt min blå paraply hjemme hos dig. Den står ved døren. Kan du tage den med på arbejde i morgen? Jeg kommer først kl. 10, fordi jeg skal til lægen kl. 8.30.

Vi ses!
Knus Sofie`,
      questions: [
        { type: "mc", q: "Hvad har Sofie glemt?", options: ["Sin taske", "Sin paraply", "Sin telefon"], answer: 1 },
        { type: "short", q: "Hvilken farve har paraplyen?", accept: ["blå", "den er blå"] },
        { type: "short", q: "Hvad tid skal Sofie til lægen?", accept: ["8.30", "kl. 8.30", "8:30", "kl. 8:30", "halv ni"] },
        { type: "tf", q: "Sofie kommer på arbejde kl. 8.30.", answer: "F" }
      ]
    },
    {
      id: "pd1-r4",
      title: "Min weekend",
      kind: "Udfyld hullerne",
      level: 2,
      minutes: 10,
      instruction: "Læs teksten. Vælg det ord, der mangler i hvert hul. Der er tre ord, du ikke skal bruge.",
      text: `I lørdags [[0]] jeg tidligt op. Jeg spiste morgenmad [[1]] min familie. Bagefter cyklede vi [[2]] stranden.

Vejret var dejligt, og [[3]] skinnede. Vi badede og spiste is. Om aftenen var vi meget [[4]], så vi gik tidligt i seng.

Søndag [[5]] det hele dagen, så vi blev hjemme og så film.`,
      questions: [
        {
          type: "gaps",
          bank: ["stod", "med", "til", "solen", "trætte", "regnede", "købte", "under", "hurtig"].map(w => ({ key: w, text: w })),
          example: { 0: "stod" },
          answers: { 1: "med", 2: "til", 3: "solen", 4: "trætte", 5: "regnede" }
        }
      ]
    }
  ],

  WRITING: [
    {
      id: "pd1-w1", delprove: 1,
      title: "Afbud til fodbold",
      kind: "Sms til en ven",
      minWords: 30, maxWords: 50,
      situation: "Du skal spille fodbold med din ven Jonas i aften, men du kan ikke komme. Skriv en sms til Jonas.",
      points: ["Sig undskyld", "Skriv, hvorfor du ikke kan komme", "Foreslå en anden dag"],
      phrases: ["Hej Jonas", "Undskyld, men …", "Jeg kan ikke komme, fordi …", "Kan du på torsdag?", "Hilsen"],
      model: `Hej Jonas

Undskyld, men jeg kan ikke komme til fodbold i aften. Min søn er syg, og jeg skal passe ham.

Kan du spille på torsdag i stedet? Jeg har fri kl. 16.

Hilsen Ali`
    },
    {
      id: "pd1-w2", delprove: 1,
      title: "Mit barn er sygt",
      kind: "Mail til skolen",
      minWords: 40, maxWords: 60,
      situation: "Din datter er syg og kan ikke komme i skole. Skriv en mail til hendes lærer, Karen.",
      points: ["Skriv barnets navn og klasse", "Skriv, hvad der er galt", "Skriv, hvornår barnet kommer i skole igen"],
      phrases: ["Kære Karen", "Min datter … går i … klasse.", "Hun har feber og ondt i …", "Hun kommer igen på …", "Venlig hilsen"],
      model: `Kære Karen

Min datter Amina går i 2.B. Hun er syg i dag. Hun har feber og ondt i halsen, så hun skal blive hjemme.

Jeg tror, hun kommer i skole igen på torsdag.

Venlig hilsen
Fatima`
    },
    {
      id: "pd1-w3", delprove: 1,
      title: "Sofa til salg",
      kind: "Annonce",
      minWords: 30, maxWords: 50,
      situation: "Du vil sælge din gamle sofa. Skriv en annonce til opslagstavlen i supermarkedet.",
      points: ["Beskriv sofaen (farve, størrelse, alder)", "Skriv prisen", "Skriv, hvordan man kan kontakte dig"],
      phrases: ["Sofa sælges", "Den er …", "Pris: … kr.", "Ring eller skriv til …"],
      model: `Sofa sælges

Grå sofa til tre personer. Den er fem år gammel og i god stand. Den er 2 meter lang.

Pris: 800 kr.

Du skal selv hente den. Ring eller skriv til Maria på 22 33 44 55.`
    },
    {
      id: "pd1-w4", delprove: 2,
      title: "Min familie",
      kind: "Kort tekst",
      minWords: 80, maxWords: 120,
      situation: "Skriv en tekst om din familie til sprogskolens blad.",
      points: ["Hvem er der i din familie?", "Hvor bor I?", "Hvad laver I sammen?", "Hvad kan du bedst lide ved din familie?"],
      phrases: ["Min familie består af …", "Vi bor i …", "I weekenden …", "Vi kan godt lide at …", "Det bedste ved …"],
      model: `Min familie

Min familie består af min mand, mine to børn og mig. Min søn hedder Adam, og han er otte år. Min datter hedder Lina, og hun er fem år.

Vi bor i en lejlighed i Aalborg. Lejligheden har tre værelser og en lille altan.

I weekenden går vi tit en tur i parken, eller vi besøger mine forældre. Om aftenen spiser vi altid sammen.

Det bedste ved min familie er, at vi griner meget sammen. Jeg er glad for min familie.`
    },
    {
      id: "pd1-w5", delprove: 2,
      title: "Min dag",
      kind: "Kort tekst",
      minWords: 80, maxWords: 120,
      situation: "Skriv om en almindelig dag i dit liv.",
      points: ["Hvad laver du om morgenen?", "Hvad laver du om eftermiddagen?", "Hvad laver du om aftenen?", "Hvad kan du bedst lide ved din dag?"],
      phrases: ["Jeg står op kl. …", "Først …", "Bagefter …", "Om aftenen …", "Jeg kan bedst lide …"],
      model: `Min dag

Jeg står op kl. 6.30. Først drikker jeg en kop te, og så spiser jeg morgenmad med mine børn. Kl. 7.45 cykler jeg på arbejde. Jeg arbejder i et køkken på et plejehjem.

Om eftermiddagen henter jeg børnene. Bagefter handler vi ind, og jeg laver aftensmad.

Om aftenen laver jeg lektier til sprogskolen, og jeg ser lidt tv. Jeg går i seng kl. 22.

Jeg kan bedst lide aftenen, fordi vi er sammen hele familien.`
    }
  ],

  SPEAKING_MONO: [
    {
      id: "pd1-m1", title: "Præsenter dig selv",
      points: ["Hvad hedder du, og hvor gammel er du?", "Hvor kommer du fra?", "Hvor bor du?", "Hvad laver du?"],
      followUp: ["Hvor længe har du boet i Danmark?", "Hvorfor lærer du dansk?", "Hvad kan du godt lide ved din by?"]
    },
    {
      id: "pd1-m2", title: "Mad og indkøb",
      points: ["Hvad spiser du til morgenmad?", "Hvor køber du ind?", "Hvad kan du godt lide at lave?", "Hvad er din livret?"],
      followUp: ["Hvad koster et brød i Danmark?", "Spiser du dansk mad?", "Hvem laver mad hjemme hos dig?"]
    },
    {
      id: "pd1-m3", title: "Min weekend",
      points: ["Hvad laver du i weekenden?", "Hvem er du sammen med?", "Hvad lavede du sidste weekend?", "Hvad skal du lave næste weekend?"],
      followUp: ["Kan du bedst lide lørdag eller søndag?", "Hvad laver du, når det regner?", "Går du tit i byen?"]
    },
    {
      id: "pd1-m4", title: "Vejret og årstiderne",
      points: ["Hvordan er vejret i dag?", "Hvilken årstid kan du bedst lide?", "Hvordan er vejret i dit hjemland?", "Hvad laver du om sommeren?"],
      followUp: ["Kan du lide sne?", "Hvad tager du på, når det er koldt?", "Er vejret i Danmark godt eller dårligt?"]
    },
    {
      id: "pd1-m5", title: "Min bolig",
      points: ["Bor du i et hus eller en lejlighed?", "Hvor mange værelser er der?", "Hvad er der i nærheden?", "Hvad kan du godt lide ved din bolig?"],
      followUp: ["Har du en have eller en altan?", "Kender du dine naboer?", "Hvor vil du gerne bo i fremtiden?"]
    },
    {
      id: "pd1-m6", title: "Fritid",
      points: ["Hvad laver du i din fritid?", "Dyrker du sport?", "Hvad lavede du i din fritid som barn?", "Hvad vil du gerne lære?"],
      followUp: ["Ser du tit tv?", "Læser du bøger?", "Hvad laver dine børn eller venner i deres fritid?"]
    }
  ],

  SPEAKING_DIALOG: [
    {
      id: "pd1-d1", title: "I bageren",
      situation: "Du er i bageren. Eksaminator er ekspedient. Køb brød og kage til din familie.",
      lines: [
        "Hej, hvad skulle det være?",
        "Ja, vi har både rugbrød og franskbrød. Hvilket vil du have?",
        "Skal det være skåret?",
        "Skal du have noget andet?",
        "Det bliver 68 kroner. Vil du betale med kort?",
        "Tak. Vil du have en pose?"
      ],
      phrases: ["Jeg vil gerne have …", "Hvad koster …?", "Ja tak.", "Nej tak, det var det hele.", "Kan jeg betale med kort?"]
    },
    {
      id: "pd1-d2", title: "Spørg om vej",
      situation: "Du skal til biblioteket, men du kan ikke finde vej. Eksaminator er en person på gaden.",
      lines: [
        "Ja, hvad kan jeg hjælpe med?",
        "Biblioteket? Skal du gå eller cykle?",
        "Okay. Du skal gå ligeud og så til venstre ved kirken. Har du forstået det?",
        "Det tager cirka ti minutter. Er der andet?",
        "Det var så lidt. Hav en god dag!"
      ],
      phrases: ["Undskyld, ved du, hvor … er?", "Er det langt herfra?", "Til højre eller til venstre?", "Kan du sige det igen?", "Tusind tak!"]
    },
    {
      id: "pd1-d3", title: "Ring til tandlægen",
      situation: "Du har en tid hos tandlægen i morgen, men du kan ikke komme. Ring og flyt tiden. Eksaminator er sekretær.",
      lines: [
        "Tandlægerne på Torvet, det er Hanne.",
        "Hvad er dit navn?",
        "Okay, jeg kan se din tid i morgen kl. 9. Hvorfor kan du ikke komme?",
        "Vi har en tid på fredag kl. 14. Passer det?",
        "Godt. Så ses vi på fredag. Farvel."
      ],
      phrases: ["Jeg har en tid i morgen.", "Jeg kan desværre ikke komme.", "Har I en anden tid?", "Det passer fint.", "Farvel."]
    }
  ],

  WORDS: [
    ["at stå op", "to get up"], ["morgenmad", "breakfast"], ["aftensmad", "dinner"], ["en lejlighed", "an apartment"],
    ["et værelse", "a room"], ["at handle", "to shop"], ["billig", "cheap"], ["dyr", "expensive"],
    ["en læge", "a doctor"], ["syg", "ill"], ["at hente", "to pick up"], ["en nabo", "a neighbour"],
    ["en uge", "a week"], ["i morgen", "tomorrow"], ["i går", "yesterday"], ["altid", "always"],
    ["aldrig", "never"], ["tit", "often"], ["at regne", "to rain"], ["varm", "warm"],
    ["kold", "cold"], ["en ven", "a friend"], ["glad", "happy"], ["træt", "tired"],
    ["at arbejde", "to work"], ["en cykel", "a bicycle"], ["en paraply", "an umbrella"], ["sammen", "together"],
    ["at glemme", "to forget"], ["til venstre", "to the left"], ["til højre", "to the right"], ["ligeud", "straight ahead"]
  ]
};
