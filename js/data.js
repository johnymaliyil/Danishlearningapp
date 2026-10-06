// All exam content lives here. Add new past-paper material by appending
// objects to READING, WRITING, SPEAKING_MONO, SPEAKING_DIALOG or WORDS.
// Question types: "mc" (multiple choice), "tf" (Rigtigt / Forkert / Står ikke i teksten),
// "match" (match each item to one option).

window.PD2 = {};

PD2.READING = [
  {
    id: "r1",
    title: "Flere børn cykler til skole",
    kind: "Avisartikel",
    level: 1,
    text: `I Vestby Kommune er antallet af børn, der cykler til skole, steget med 30 procent på to år. Det viser en ny undersøgelse fra kommunen. Årsagen er især de nye cykelstier, som blev bygget i 2024 langs de største veje.

"Før turde mange forældre ikke lade deres børn cykle alene, fordi der var meget trafik," siger skoleleder Mette Holm fra Vestby Skole. "Nu er vejene meget mere sikre, og det kan vi tydeligt mærke."

Kommunen har også startet projektet "Cyklende Fredag", hvor de klasser, der cykler mest, kan vinde en udflugt. Projektet har været en stor succes, og i år deltager 12 skoler.

Ikke alle er dog tilfredse. Nogle bilister klager over, at der er blevet mindre plads til parkering. Kommunen vil derfor undersøge, om der kan laves en ny parkeringsplads ved stationen næste år.`,
    questions: [
      { type: "mc", q: "Hvor meget er antallet af børn, der cykler til skole, steget?", options: ["13 procent", "30 procent", "3 procent"], answer: 1 },
      { type: "mc", q: "Hvorfor cykler flere børn til skole?", options: ["Der er bygget nye cykelstier.", "Busserne er blevet dyrere.", "Skolen har købt cykler til eleverne."], answer: 0 },
      { type: "tf", q: "Mette Holm er borgmester i Vestby.", answer: "F" },
      { type: "tf", q: "De klasser, der cykler mest, kan vinde en udflugt.", answer: "R" },
      { type: "tf", q: "Den nye parkeringsplads ved stationen bliver bygget i år.", answer: "F" },
      { type: "tf", q: "Projektet \"Cyklende Fredag\" koster kommunen to millioner kroner.", answer: "S" }
    ]
  },
  {
    id: "r2",
    title: "Information til beboerne",
    kind: "Brev fra boligforening",
    level: 1,
    text: `Kære beboere

Vi skal renovere vinduerne i alle lejligheder i blok B og C. Arbejdet starter mandag den 3. marts og forventes at tage seks uger.

Håndværkerne kommer ind i lejlighederne mellem kl. 7.30 og 15.00. Hvis du ikke er hjemme, skal du aflevere en nøgle på kontoret senest fredag den 28. februar. Kontoret har åbent mandag til torsdag kl. 9-12 og torsdag også kl. 16-18.

Husk at fjerne planter, gardiner og andre ting fra vindueskarmene, før håndværkerne kommer. Der kan være støv og larm, mens arbejdet står på, og vi beklager ulejligheden.

Har du spørgsmål, er du velkommen til at skrive til os på kontor@boligvest.dk eller ringe på 70 20 30 40.

Med venlig hilsen
Boligforeningen Vest`,
    questions: [
      { type: "mc", q: "Hvornår skal man aflevere sin nøgle, hvis man ikke er hjemme?", options: ["Senest fredag den 28. februar", "Mandag den 3. marts", "Når håndværkerne kommer"], answer: 0 },
      { type: "mc", q: "Hvornår kan man komme på kontoret om eftermiddagen?", options: ["Mandag kl. 16-18", "Torsdag kl. 16-18", "Hver dag kl. 15"], answer: 1 },
      { type: "tf", q: "Arbejdet tager cirka halvanden måned.", answer: "R" },
      { type: "tf", q: "Beboerne skal selv betale for de nye vinduer.", answer: "S" },
      { type: "tf", q: "Man skal fjerne ting fra vindueskarmene.", answer: "R" }
    ]
  },
  {
    id: "r3",
    title: "Hvilken annonce passer?",
    kind: "Opslag på biblioteket – match",
    level: 2,
    text: `A. Svømmehold for voksne begyndere. Tirsdage kl. 19-20 i Vestby Svømmehal. Lær at svømme i dit eget tempo. Pris: 450 kr. for 10 gange.

B. Sprogcafé på biblioteket. Hver onsdag kl. 16-18 kan du øve dansk med frivillige. Gratis – ingen tilmelding.

C. Brugt barnevogn sælges. Pæn stand. 800 kr. Ring til Lise på 22 33 44 55.

D. Fællesspisning i medborgerhuset. Første fredag i måneden. Voksne 40 kr., børn under 12 år spiser gratis.

E. Lektiehjælp for skoleelever i 4.-9. klasse. Mandag og torsdag kl. 15-17 på Vestby Bibliotek. Gratis.

F. Løbeklub søger nye medlemmer. Vi løber søndag morgen kl. 9 fra parken. Alle niveauer er velkomne.`,
    questions: [
      {
        type: "match",
        q: "Find den annonce, der passer til hver person. Én annonce bliver ikke brugt.",
        options: ["A", "B", "C", "D", "E", "F"],
        items: [
          { text: "Amir vil gerne tale mere dansk, men han har ikke mange penge.", answer: "B" },
          { text: "Sofia skal have en baby til sommer og mangler udstyr.", answer: "C" },
          { text: "Jonas er 35 år og har aldrig lært at svømme.", answer: "A" },
          { text: "Familien Hansen vil gerne møde naboerne og spise sammen med andre.", answer: "D" },
          { text: "Leilas søn går i 6. klasse og har svært ved matematik.", answer: "E" }
        ]
      }
    ]
  },
  {
    id: "r4",
    title: "Danskerne og hjemmearbejde",
    kind: "Avisartikel",
    level: 2,
    text: `Efter coronapandemien arbejder mange danskere stadig hjemme en eller to dage om ugen. Ifølge en undersøgelse fra 2025 siger 6 ud af 10 kontoransatte, at de er gladere for deres job, når de kan arbejde hjemmefra en del af tiden.

De fleste nævner, at de sparer tid på transport og får mere tid til familien. "Jeg bruger normalt to timer om dagen i toget. Når jeg arbejder hjemme, kan jeg hente mine børn tidligt," fortæller Sara Jensen, der er ingeniør.

Men hjemmearbejde har også ulemper. Mange savner deres kolleger, og nogle synes, det er svært at stoppe med at arbejde om aftenen, når computeren står på køkkenbordet. Eksperter anbefaler derfor, at man har faste arbejdstider og et særskilt sted at arbejde i hjemmet.

Flere virksomheder har nu indført regler om, at medarbejderne skal være på kontoret mindst tre dage om ugen. Det skal sikre, at kollegerne stadig ser hinanden og samarbejder godt.`,
    questions: [
      { type: "mc", q: "Hvor mange kontoransatte er gladere for deres job, når de kan arbejde hjemme?", options: ["3 ud af 10", "6 ud af 10", "Alle"], answer: 1 },
      { type: "mc", q: "Hvad er en fordel ved hjemmearbejde for Sara Jensen?", options: ["Hun tjener flere penge.", "Hun ser flere kolleger.", "Hun kan hente sine børn tidligt."], answer: 2 },
      { type: "mc", q: "Hvad anbefaler eksperterne?", options: ["Faste arbejdstider og et særskilt sted at arbejde", "At man arbejder om aftenen", "At man køber en ny computer"], answer: 0 },
      { type: "tf", q: "Nogle virksomheder kræver, at medarbejderne er på kontoret mindst tre dage om ugen.", answer: "R" },
      { type: "tf", q: "Sara Jensen er lærer.", answer: "F" },
      { type: "tf", q: "Sara Jensen arbejder hjemme tre dage om ugen.", answer: "S" }
    ]
  },
  {
    id: "r5",
    title: "Lægevagten",
    kind: "Informationstekst",
    level: 1,
    text: `Lægevagten – når din egen læge har lukket

Hvis du bliver syg om aftenen, om natten eller i weekenden, og det ikke kan vente til næste hverdag, skal du ringe til Lægevagten. Telefonnummeret står på dit sundhedskort (det gule kort).

Du skal altid ringe, før du tager til Lægevagten. En læge vil tale med dig i telefonen og vurdere, om du skal komme ind, have et hjemmebesøg eller blot have gode råd.

Husk at have dit sundhedskort klar, når du ringer. Ved livstruende sygdom eller ulykker skal du altid ringe 112.`,
    questions: [
      { type: "mc", q: "Hvornår skal man ringe til Lægevagten?", options: ["Når man vil bestille tid hos sin egen læge", "Når ens egen læge har lukket, og det ikke kan vente", "Når man skal forny en recept"], answer: 1 },
      { type: "tf", q: "Man kan bare møde op på Lægevagten uden at ringe først.", answer: "F" },
      { type: "tf", q: "Telefonnummeret til Lægevagten står på sundhedskortet.", answer: "R" },
      { type: "mc", q: "Hvad skal man gøre ved en alvorlig ulykke?", options: ["Ringe til Lægevagten", "Vente til næste hverdag", "Ringe 112"], answer: 2 }
    ]
  }
];

PD2.WRITING = [
  {
    id: "w1",
    delprove: 1,
    title: "Afbud til en fest",
    kind: "Kort mail",
    minWords: 50, maxWords: 80,
    situation: "Din nabo Peter har inviteret dig til sin 40-års fødselsdag på lørdag. Du kan ikke komme. Skriv en mail til Peter.",
    points: ["Tak for invitationen", "Forklar, hvorfor du ikke kan komme", "Foreslå, at I mødes en anden dag"],
    phrases: ["Tusind tak for invitationen.", "Desværre kan jeg ikke komme, fordi …", "Hvad med at vi …?", "Jeg håber, du får en dejlig dag.", "Mange hilsner"],
    model: `Hej Peter

Tusind tak for invitationen til din fødselsdag. Desværre kan jeg ikke komme, fordi min mor har fødselsdag samme dag, og jeg skal besøge hende i Aarhus.

Hvad med at vi drikker en kop kaffe sammen i næste uge? Jeg har fri onsdag eftermiddag.

Jeg håber, du får en rigtig dejlig fest!

Mange hilsner
Ali`
  },
  {
    id: "w2",
    delprove: 1,
    title: "Klage over en jakke",
    kind: "Klage til webbutik",
    minWords: 120, maxWords: 180,
    situation: "Du har købt en vinterjakke i webbutikken TøjNet. Da du åbnede pakken, var lynlåsen i stykker. Skriv en mail til butikken.",
    points: ["Hvad du har købt, og hvornår", "Hvad problemet er", "Hvad du gerne vil have butikken til at gøre", "Hvordan butikken kan kontakte dig"],
    phrases: ["Jeg skriver til jer, fordi …", "Den 12. oktober bestilte jeg …", "Desværre opdagede jeg, at …", "Jeg vil gerne have pengene tilbage / en ny jakke.", "Jeg ser frem til at høre fra jer.", "Med venlig hilsen"],
    model: `Kære TøjNet

Jeg skriver til jer, fordi jeg har et problem med en jakke, som jeg har købt hos jer.

Den 12. oktober bestilte jeg en sort vinterjakke i størrelse M. Ordrenummeret er 45821. Pakken kom i går, men da jeg prøvede jakken, opdagede jeg, at lynlåsen var i stykker. Den kan slet ikke lukkes, så jeg kan ikke bruge jakken.

Jeg er meget skuffet, fordi jeg har brug for jakken nu, hvor det er blevet koldt. Derfor vil jeg gerne have en ny jakke så hurtigt som muligt. Hvis I ikke har flere i min størrelse, vil jeg gerne have pengene tilbage.

I kan kontakte mig på denne mail eller ringe til mig på 28 45 67 89. Jeg har tid alle hverdage efter kl. 16.

Jeg ser frem til at høre fra jer.

Med venlig hilsen
Maria Lopez`
  },
  {
    id: "w3",
    delprove: 1,
    title: "Syg fra sprogskolen",
    kind: "Mail til din lærer",
    minWords: 60, maxWords: 100,
    situation: "Du er blevet syg og kan ikke komme i sprogskole i næste uge. Skriv en mail til din lærer, Hanne.",
    points: ["Fortæl, at du er syg, og hvor længe", "Spørg, hvilke lektier du skal lave", "Spørg om datoen for prøven"],
    phrases: ["Jeg er desværre blevet syg.", "Lægen siger, at jeg skal blive hjemme i …", "Kan du fortælle mig, hvilke lektier …?", "Jeg vil også gerne vide, hvornår …", "På forhånd tak"],
    model: `Kære Hanne

Jeg er desværre blevet syg med influenza, og lægen siger, at jeg skal blive hjemme hele næste uge. Derfor kan jeg ikke komme til undervisningen.

Kan du fortælle mig, hvilke lektier jeg skal lave, så jeg ikke kommer bagud? Jeg vil også gerne vide, hvornår vi skal til prøve, fordi jeg gerne vil forberede mig godt.

På forhånd tak for hjælpen.

Venlig hilsen
Tran`
  },
  {
    id: "w4",
    delprove: 2,
    title: "En tradition fra mit land",
    kind: "Fortællende tekst",
    minWords: 150, maxWords: 200,
    situation: "Skriv en tekst til sprogskolens blad om en fest eller tradition fra dit hjemland.",
    points: ["Hvilken fest eller tradition det er", "Hvordan man fejrer den", "Hvad du bedst kan lide ved den", "Sammenlign med en dansk fest eller tradition"],
    phrases: ["I mit land fejrer vi …", "Om morgenen / Om aftenen …", "Det bedste ved festen er, at …", "I Danmark derimod …", "Både … og …", "Til sidst vil jeg sige, at …"],
    model: `Nytår i Iran

I mit land fejrer vi nytår den 20. eller 21. marts, når foråret begynder. Festen hedder Nowruz og varer i 13 dage.

Før festen gør alle familier rent i hele huset, og man køber nyt tøj. På bordet stiller vi syv ting, som begynder med bogstavet "s" på persisk, for eksempel æbler, hvidløg og eddike. De betyder sundhed, kærlighed og et godt liv.

I de første dage besøger vi familie og venner. De ældste i familien får besøg først, og børnene får ofte penge i gave. Det bedste ved Nowruz er, at hele familien er samlet, og at alle er glade.

I Danmark fejrer man nytår den 31. december med fyrværkeri, og man ser dronningens eller kongens tale. Begge fester handler om at starte på en frisk, men Nowruz er meget længere, og den handler mere om familien.

Til sidst vil jeg sige, at jeg nu fejrer begge nytår, og det er jeg glad for.`
  },
  {
    id: "w5",
    delprove: 1,
    title: "Ansøgning: Butiksmedarbejder",
    kind: "Jobansøgning",
    minWords: 120, maxWords: 180,
    situation: "Supermarkedet FriskKøb søger en butiksmedarbejder 25 timer om ugen. Skriv en kort ansøgning.",
    points: ["Præsenter dig selv", "Fortæl om din erfaring", "Forklar, hvorfor du gerne vil have jobbet", "Skriv, hvornår du kan starte"],
    phrases: ["Jeg har set jeres annonce på …", "Jeg hedder … og er … år.", "Jeg har erfaring med …", "Jeg er god til at …", "Jeg kan starte den …", "Jeg håber at høre fra jer."],
    model: `Kære FriskKøb

Jeg har set jeres annonce på Jobindex, og jeg vil gerne søge jobbet som butiksmedarbejder.

Jeg hedder Ahmed, er 32 år og bor i Odense med min kone og to børn. Jeg kom til Danmark for tre år siden, og jeg går på Sprogcenter Odense.

I mit hjemland arbejdede jeg i fem år i en købmandsbutik. Jeg fyldte varer op, arbejdede ved kassen og hjalp kunderne. Jeg er god til at arbejde hurtigt og ordentligt, og jeg kan godt lide at tale med mennesker.

Jeg vil gerne have jobbet, fordi jeg vil bruge mit danske hver dag og lære mere om danske kunder. Desuden passer 25 timer om ugen godt til min familie.

Jeg kan starte den 1. november.

Jeg håber at høre fra jer.

Med venlig hilsen
Ahmed Karimi
Tlf. 31 22 44 66`
  },
  {
    id: "w6",
    delprove: 2,
    title: "Hjemmearbejde – godt eller skidt?",
    kind: "Debatindlæg",
    minWords: 150, maxWords: 200,
    situation: "Mange danskere arbejder hjemme en eller flere dage om ugen. Skriv et indlæg til en avis, hvor du fortæller, hvad du mener om hjemmearbejde.",
    points: ["Fortæl om dine egne erfaringer eller nogen, du kender", "Beskriv fordele ved hjemmearbejde", "Beskriv ulemper ved hjemmearbejde", "Skriv, hvad du selv mener, og begrund det"],
    phrases: ["Jeg mener, at …", "Efter min mening …", "En fordel er, at …", "På den anden side …", "Derudover …", "Alt i alt synes jeg, at …"],
    model: `Hjemmearbejde – ja tak, men ikke hver dag

I dag arbejder mange danskere hjemme en del af ugen. Min mand er it-konsulent, og han arbejder hjemme to dage om ugen. Jeg kan se, at det både har fordele og ulemper.

En stor fordel er, at man sparer tid på transport. Min mand bruger normalt en time i bil hver vej, men når han arbejder hjemme, kan han hente børnene i børnehaven og lave aftensmad. Derudover kan mange koncentrere sig bedre, fordi der er mere ro end på et kontor.

På den anden side kan man føle sig ensom, hvis man altid sidder alene. Man savner at snakke med sine kolleger i frokostpausen, og det kan være sværere at samarbejde. Nogle har også svært ved at holde fri, fordi computeren altid er i nærheden.

Efter min mening er det bedst at blande. Hvis man arbejder hjemme en eller to dage om ugen, får man det bedste fra begge verdener. Alt i alt synes jeg, at arbejdspladserne skal give de ansatte lov til at vælge selv.`
  },
  {
    id: "w7",
    delprove: 2,
    title: "By eller land?",
    kind: "Holdningstekst",
    minWords: 150, maxWords: 200,
    situation: "Sprogskolens blad har et tema om bolig. Skriv en tekst om, hvor du helst vil bo: i en stor by eller på landet.",
    points: ["Beskriv, hvor du bor nu", "Fortæl, hvordan du boede i dit hjemland", "Beskriv fordele og ulemper ved at bo i byen og på landet", "Skriv, hvor du helst vil bo, og hvorfor"],
    phrases: ["Lige nu bor jeg …", "Da jeg boede i …", "Både … og …", "Til gengæld …", "Hvis jeg kunne vælge, ville jeg …", "Derfor …"],
    model: `Mit drømmested

Lige nu bor jeg i en lejlighed på tredje sal i Odense sammen med min datter. Vi bor tæt på centrum, og vi kan gå til både skole, arbejde og indkøb.

Da jeg boede i Syrien, boede jeg i en lille landsby med min store familie. Vi havde et hus med en have, hvor vi dyrkede tomater og agurker, og alle kendte hinanden.

Der er fordele ved begge steder. I byen er der mange muligheder, for eksempel biografer, cafeer og gode busforbindelser. Til gengæld er der meget trafik og larm, og lejlighederne er dyre. På landet er der frisk luft, ro og mere plads, men man har næsten altid brug for en bil, og der kan være langt til arbejde.

Hvis jeg kunne vælge, ville jeg bo i et lille hus lidt uden for byen. Så kan min datter lege i haven, og vi kan stadig cykle ind til byen. Derfor drømmer jeg om at flytte, når jeg har fået fast arbejde.`
  }
];

// PD2.SPEAKING_MONO (presentation topics) is defined in data-pd2-extra.js.

PD2.SPEAKING_DIALOG = [
  {
    id: "d1", title: "Planlæg en fest",
    situation: "Du og din kollega (eksaminator) skal planlægge en afskedsfest for en kollega på arbejdet. I skal blive enige om dato, sted, mad og gave.",
    lines: [
      "Hej! Nå, vi skal jo planlægge festen for Lone. Hvornår synes du, vi skal holde den?",
      "Okay. Hvor skal vi holde festen? Her på arbejdet eller på en restaurant?",
      "Hvad med maden? Hvad skal vi spise?",
      "Vi skal også købe en gave. Har du en god idé?",
      "Hvor mange penge skal hver person give?",
      "Godt. Hvem sender invitationen ud?"
    ],
    phrases: ["Hvad synes du om …?", "Jeg foreslår, at …", "Det er en god idé.", "Jeg er ikke helt enig, fordi …", "Skal vi ikke …?", "Så er vi enige."]
  },
  {
    id: "d2", title: "Køb en brugt cykel",
    situation: "Du har set en annonce om en brugt cykel. Eksaminator er sælgeren. Spørg om cyklen, og prøv at få en god pris.",
    lines: [
      "Hej, det er Lars. Du ringer om cyklen?",
      "Ja, den er fem år gammel. Hvad vil du gerne vide om den?",
      "Den koster 1.200 kroner.",
      "Hmm, hvor meget vil du give for den?",
      "Okay, det kan vi godt gøre. Hvornår vil du komme og se den?",
      "Det passer fint. Hvordan vil du betale?"
    ],
    phrases: ["Jeg ringer angående …", "Er der noget i stykker?", "Kan du gå lidt ned i pris?", "Hvad siger du til … kroner?", "Kan jeg betale med MobilePay?"]
  },
  {
    id: "d3", title: "Bestil tid hos lægen",
    situation: "Du ringer til lægen, fordi du har haft ondt i ryggen i to uger. Eksaminator er sekretær hos lægen.",
    lines: [
      "Lægehuset, det er Karin. Hvad kan jeg hjælpe med?",
      "Hvad er dit CPR-nummer?",
      "Hvad drejer det sig om?",
      "Hvor længe har du haft det sådan?",
      "Lægen har en tid på torsdag kl. 10.15. Kan du det?",
      "Er der andet, jeg kan hjælpe med?"
    ],
    phrases: ["Jeg vil gerne bestille en tid.", "Jeg har ondt i …", "Det har varet i …", "Har I en tid tidligere?", "Det passer mig fint.", "Tak for hjælpen."]
  },
  {
    id: "d4", title: "Planlæg en udflugt",
    situation: "Du og en ven (eksaminator) vil tage på en dagstur sammen i weekenden. I skal blive enige om, hvor I tager hen, hvordan I kommer derhen, og hvad I tager med.",
    lines: [
      "Hej! Skal vi lave noget sammen i weekenden?",
      "Hvor skal vi tage hen? Til stranden, skoven eller en by?",
      "Hvordan kommer vi derhen?",
      "Hvad skal vi tage med?",
      "Hvad gør vi, hvis det regner?",
      "Hvornår mødes vi?"
    ],
    phrases: ["Jeg har lyst til at …", "Hvad med at …?", "Det lyder hyggeligt!", "Jeg vil hellere …", "Hvis det regner, kan vi …"]
  }
];

PD2.WORDS = [
  ["en bolig", "a home / housing"], ["at ansøge", "to apply"], ["en erfaring", "an experience"], ["en kollega", "a colleague"],
  ["at aflyse", "to cancel"], ["en aftale", "an appointment / agreement"], ["at klage", "to complain"], ["en kvittering", "a receipt"],
  ["en udflugt", "a trip / excursion"], ["at fejre", "to celebrate"], ["en undersøgelse", "a study / survey"], ["at anbefale", "to recommend"],
  ["en ulempe", "a disadvantage"], ["en fordel", "an advantage"], ["sikker", "safe / sure"], ["tilfreds", "satisfied"],
  ["at savne", "to miss (someone)"], ["en håndværker", "a craftsman / workman"], ["at aflevere", "to hand in / deliver"], ["en lejlighed", "an apartment"],
  ["en nabo", "a neighbour"], ["at tilmelde sig", "to sign up"], ["gratis", "free (of charge)"], ["et sundhedskort", "a health insurance card"],
  ["at forny", "to renew"], ["en ansat", "an employee"], ["at samarbejde", "to cooperate"], ["en vane", "a habit"],
  ["at foreslå", "to suggest"], ["enig", "in agreement"], ["desværre", "unfortunately"], ["desuden", "furthermore"],
  ["derfor", "therefore"], ["selvom", "even though"], ["ifølge", "according to"], ["en hverdag", "a weekday / everyday life"],
  ["at beklage", "to apologise / regret"], ["en ordre", "an order"], ["skuffet", "disappointed"], ["at forberede sig", "to prepare oneself"]
];

// Words counted as "binding words" in the writing coach.
PD2.CONNECTORS = ["fordi", "men", "derfor", "selvom", "når", "hvis", "så", "desuden", "også", "først", "derefter", "bagefter", "til sidst", "for eksempel", "både", "eller", "da", "mens", "endelig", "alligevel", "på den anden side", "derudover"];
