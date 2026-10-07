// PD3: two practice sets in the format of the Danskuddannelse 3, modul 4 module test (reading):
// opgave 1 = gap text with four choices per gap, opgave 2 = find the missing sentence,
// opgave 3 = open gaps (write one word), opgave 4 = six short texts with multiple choice.
// All texts, questions and answers were written for DanskKlar; nothing is copied from test papers.

(function () {
  const sets = [];
  const words = list => list;

  // ---------- Øvesæt 1 ----------
  const G1 = "Modul 4-format · øvesæt 1";
  sets.push(
    {
      id: "pd3-m1-1", group: G1,
      title: "Opgave 1 – Cykelpendling i Danmark",
      kind: "Vælg det rigtige ord (A-D)",
      level: 3, minutes: 10,
      instruction: "Læs teksten. I teksten mangler der otte ord/udtryk (1-8). Vælg det ord/udtryk, der passer til hvert hul. Se eksemplet (0).",
      text: `Hver dag cykler hundredtusindvis af danskere på arbejde, og for mange er cyklen simpelthen det mest [[0]] transportmiddel. I København cykler omkring halvdelen af alle, der skal på arbejde eller uddannelse, og tallet er [[1]] stigende.

Der er flere grunde til, at så mange vælger cyklen. For det første er det billigt, og man slipper for at [[2]] efter en parkeringsplads. For det andet er cykling en nem måde at få motion på i en travl hverdag. Undersøgelser viser, at folk, der cykler til arbejde, i gennemsnit har [[3]] sygedage end dem, der kører i bil.

[[4]] har kommunerne gjort meget for at gøre det lettere at cykle. Der er bygget cykelstier, cykelbroer og såkaldte supercykelstier, hvor man kan cykle langt uden at skulle holde for rødt lys. Det gør det muligt at pendle længere [[5]], især hvis man har en elcykel.

Men der er også udfordringer. Om vinteren kan det være koldt og glat, og mange [[6]] cyklen og tager bussen i stedet. [[7]] klager nogle cyklister over, at der er for mange cykler på stierne i myldretiden, så det kan være svært at komme frem.

Alligevel er de fleste enige om, at cyklen er en vigtig del af løsningen på byernes trafikproblemer. [[8]] skal der bygges endnu flere cykelstier i de kommende år.`,
      questions: [{
        type: "gaps",
        choices: {
          1: words(["fortsat", "aldrig", "sjældent", "næppe"]),
          2: words(["lede", "vente", "betale", "glæde sig"]),
          3: words(["flere", "færre", "længere", "bedre"]),
          4: words(["Samtidig", "Derimod", "Tværtimod", "Alligevel"]),
          5: words(["afstande", "veje", "tider", "priser"]),
          6: words(["opgiver", "køber", "reparerer", "foretrækker"]),
          7: words(["Desuden", "Derfor", "Derimod", "Fordi"]),
          8: words(["Derfor", "Desværre", "Selvom", "Fordi"])
        },
        example: { 0: "praktiske" },
        answers: { 1: "fortsat", 2: "lede", 3: "færre", 4: "Samtidig", 5: "afstande", 6: "opgiver", 7: "Desuden", 8: "Derfor" }
      }]
    },
    {
      id: "pd3-m1-2", group: G1,
      title: "Opgave 2 – Fra bankassistent til bager",
      kind: "Find sætningen (A-H)",
      level: 3, minutes: 15,
      instruction: "Læs teksten. I hvert afsnit er der et hul, hvor der mangler en sætning. Find den sætning (A-H), der passer bedst i hvert afsnit (1-5). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
      text: `Mette Holm er 42 år og ejer et lille bageri i Svendborg. Men sådan har det ikke altid været. [[0]]. Hun sad bag en computer otte timer om dagen og rådgav kunder om lån og opsparing.

**1.** Mette var glad for sine kolleger, men hun følte, at arbejdet blev mere og mere ensformigt. [[1]]. Hun bagte brød til hele familien i weekenden, og hendes kanelsnegle var berømte blandt venner og naboer.

**2.** For seks år siden besluttede hun at tage springet. Hun sagde sit job op og begyndte på en uddannelse som bager. [[2]]. Hun var den ældste på holdet og skulle lære at arbejde sammen med unge på 18-19 år.

**3.** Efter uddannelsen fik Mette job i et stort bageri i Odense. Hun mødte kl. 4 om morgenen og lærte at bage store mængder på kort tid. [[3]]. Men hun drømte stadig om at få sit eget sted.

**4.** For to år siden fandt hun et ledigt butikslokale i Svendborg. [[4]]. Hun lånte penge i banken – hos sine gamle kolleger – og åbnede bageriet "Mettes Ovn".

**5.** I dag har bageriet fire ansatte og mange faste kunder. Mette arbejder mere end nogensinde, men hun fortryder ikke sit valg. [[5]]. "Jeg glæder mig til at komme på arbejde hver eneste dag," siger hun.`,
      questions: [{
        type: "gaps",
        bank: [
          { key: "A", text: "I 15 år arbejdede hun nemlig i en bank" },
          { key: "B", text: "Arbejdstiderne var hårde, men hun lærte utrolig meget" },
          { key: "C", text: "Til gengæld havde hun altid elsket at bage" },
          { key: "D", text: "Det var en stor omvæltning at blive elev igen" },
          { key: "E", text: "Lokalet lå perfekt midt i gågaden" },
          { key: "F", text: "For nu laver hun noget, hun virkelig brænder for" },
          { key: "G", text: "Hun har aldrig kunnet lide at bage" },
          { key: "H", text: "Derfor flyttede hun tilbage til banken" }
        ],
        example: { 0: "A" },
        answers: { 1: "C", 2: "D", 3: "B", 4: "E", 5: "F" }
      }]
    },
    {
      id: "pd3-m1-3", group: G1,
      title: "Opgave 3 – Sara fortæller om sin madplan",
      kind: "Skriv det ord, der mangler",
      level: 3, minutes: 15,
      instruction: "Læs teksten. Der mangler 10 ord (1-10). Skriv et ord, der passer. Du skal kun skrive ét ord i hvert hul.",
      text: `Før i tiden handlede jeg ind næsten hver dag efter arbejde. Jeg gik bare rundt i supermarkedet og købte det, jeg havde lyst [[1]]. Det kostede mange penge, og vi smed alt for meget mad [[2]].

For et år siden begyndte jeg at lave en madplan. Hver søndag sætter jeg mig ned [[3]] min mand, og så bestemmer vi, hvad vi skal spise i den kommende uge. Bagefter skriver jeg en indkøbsliste, og så handler vi kun ind én gang [[4]] ugen.

Det har gjort en stor forskel. For det første bruger vi [[5]] penge på mad end før – cirka 1.000 kr. mindre om måneden. For det [[6]] smider vi næsten ingen mad ud længere, fordi vi kun køber det, vi har brug for.

Selvfølgelig er der også ulemper. Det kræver lidt planlægning, og nogle gange har jeg slet ikke lyst [[7]] den ret, der står på planen. [[8]] bytter vi bare rundt på dagene.

Jeg kan varmt anbefale en madplan til alle, der gerne [[9]] spare tid og penge. Det er nemmere, [[10]] man tror.`,
      questions: [{
        type: "gaps", open: true,
        answers: { 1: ["til"], 2: ["ud"], 3: ["med"], 4: ["om"], 5: ["mindre", "færre"], 6: ["andet"], 7: ["til"], 8: ["så", "da"], 9: ["vil"], 10: ["end"] }
      }]
    },
    {
      id: "pd3-m1-4", group: G1,
      title: "Opgave 4 – Seks små tekster",
      kind: "Vælg det rigtige svar (A-C)",
      level: 3, minutes: 15,
      instruction: "Læs de seks små tekster (1-6). Vælg det svar (A-C), der passer til teksten.",
      sections: [{
        heading: "Seks små tekster",
        cards: [
          { title: "1. Lån og aflevering", body: "Du kan låne bøger i 30 dage. Hvis ingen har reserveret bogen, kan du forny lånet to gange via appen eller på biblioteket. Afleverer du for sent, skal du betale et gebyr på 20 kr. pr. bog efter 7 dage. Gebyret stiger efter 30 dage." },
          { title: "2. Sms", body: "Hej Lars\nJeg står ved indgangen til biografen, men jeg kan ikke se dig. Jeg har købt billetterne, så du skal bare komme direkte ind i sal 3. Filmen starter om ti minutter.\nHilsen Maja" },
          { title: "3. Medlemskab i FitNord", body: "Dit medlemskab koster 249 kr. om måneden og har ingen bindingsperiode. Du kan opsige det med en måneds varsel til udgangen af en måned. Det første besøg er gratis, og du får en introduktion til maskinerne af en af vores instruktører." },
          { title: "4. Spar på varmen", body: "Skru ned for varmen om natten, og når du ikke er hjemme. Hver grad, du sænker temperaturen, sparer cirka 5 % af varmeregningen. Luft ud i 5-10 minutter med åbne vinduer et par gange om dagen i stedet for at have et vindue på klem hele dagen." },
          { title: "5. Parkering med app", body: "Når du parkerer, starter du parkeringen i appen og vælger den zone, du holder i. Du betaler kun for den tid, du faktisk holder parkeret. Husk at stoppe parkeringen, når du kører. Glemmer du det, stopper appen automatisk efter 24 timer." },
          { title: "6. Hentning af medicin", body: "Når din læge har sendt en recept, kan du hente medicinen på alle apoteker i Danmark. Husk dit sundhedskort. Hvis en anden skal hente medicinen for dig, skal personen have dit sundhedskort med eller en fuldmagt fra dig." }
        ]
      }],
      questions: [
        { type: "mc", n: 1, q: "Tekst 1: Hvad er rigtigt?", options: ["Du kan altid forny et lån.", "Du kan forny et lån, hvis ingen venter på bogen.", "Du betaler gebyr fra første dag, du er for sent."], answer: 1 },
        { type: "mc", n: 2, q: "Tekst 2: Hvad er rigtigt?", options: ["Lars skal købe billetterne.", "Maja er gået hjem.", "Lars skal gå direkte ind i sal 3."], answer: 2 },
        { type: "mc", n: 3, q: "Tekst 3: Hvad er rigtigt?", options: ["Du skal være medlem i mindst et år.", "Du kan opsige dit medlemskab fra den ene dag til den anden.", "Du kan prøve centret gratis første gang."], answer: 2 },
        { type: "mc", n: 4, q: "Tekst 4: Hvad er rigtigt?", options: ["Det er bedst at have et vindue lidt åbent hele dagen.", "Du kan spare penge ved at sænke temperaturen.", "Du skal holde den samme temperatur hele døgnet."], answer: 1 },
        { type: "mc", n: 5, q: "Tekst 5: Hvad er rigtigt?", options: ["Du betaler for en hel dag, uanset hvor længe du holder parkeret.", "Du skal selv stoppe parkeringen, når du kører.", "Appen finder selv den rigtige zone."], answer: 1 },
        { type: "mc", n: 6, q: "Tekst 6: Hvad er rigtigt?", options: ["Du kan kun hente medicinen på ét bestemt apotek.", "En anden kan hente din medicin, hvis personen har dit sundhedskort eller en fuldmagt.", "Du skal have recepten med på papir."], answer: 1 }
      ]
    }
  );

  // ---------- Øvesæt 2 ----------
  const G2 = "Modul 4-format · øvesæt 2";
  sets.push(
    {
      id: "pd3-m2-1", group: G2,
      title: "Opgave 1 – Genbrug af tøj",
      kind: "Vælg det rigtige ord (A-D)",
      level: 3, minutes: 10,
      instruction: "Læs teksten. I teksten mangler der otte ord/udtryk (1-8). Vælg det ord/udtryk, der passer til hvert hul. Se eksemplet (0).",
      text: `Danskerne køber mere tøj end nogensinde, men en stor del af det bliver kun brugt [[0]] gange. Det er et problem for miljøet, fordi produktionen af tøj bruger store [[1]] af vand og energi.

Derfor er flere og flere begyndt at købe brugt tøj. Genbrugsbutikker og apps, hvor man kan sælge sit tøj til andre, er blevet meget [[2]] de seneste år – især blandt unge.

Der er mange fordele ved at købe brugt. Det er billigere, og man kan ofte finde tøj af god kvalitet til en [[3]] af prisen. [[4]] er det en måde at finde unikt tøj på, som ingen andre har.

Men genbrug løser ikke hele problemet. Hvis man køber brugt tøj, [[5]] man samtidig bliver ved med at købe meget nyt, bliver det samlede forbrug ikke mindre. Eksperterne [[6]] derfor, at det vigtigste er at købe mindre tøj og bruge det længere.

En god idé er at reparere tøjet, [[7]] det går i stykker, i stedet for at smide det ud. [[8]] kan man bytte tøj med venner eller familie.`,
      questions: [{
        type: "gaps",
        choices: {
          1: words(["mængder", "størrelser", "priser", "pladser"]),
          2: words(["populære", "dyre", "sjældne", "kedelige"]),
          3: words(["brøkdel", "halvdel", "del", "rest"]),
          4: words(["Desuden", "Derimod", "Alligevel", "Ellers"]),
          5: words(["mens", "fordi", "så", "da"]),
          6: words(["anbefaler", "forbyder", "glemmer", "tvivler"]),
          7: words(["når", "fordi", "før", "selvom"]),
          8: words(["Endelig", "Derfor", "Tværtimod", "Men"])
        },
        example: { 0: "få" },
        answers: { 1: "mængder", 2: "populære", 3: "brøkdel", 4: "Desuden", 5: "mens", 6: "anbefaler", 7: "når", 8: "Endelig" }
      }]
    },
    {
      id: "pd3-m2-2", group: G2,
      title: "Opgave 2 – Ali er frivillig træner",
      kind: "Find sætningen (A-H)",
      level: 3, minutes: 15,
      instruction: "Læs teksten. I hvert afsnit er der et hul, hvor der mangler en sætning. Find den sætning (A-H), der passer bedst i hvert afsnit (1-5). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
      text: `Ali Hassan er 29 år og arbejder til daglig som elektriker i Aarhus. [[0]]. To gange om ugen træner han et fodboldhold for drenge på 10-12 år.

**1.** Ali begyndte selv at spille fodbold, da han kom til Danmark som tiårig. Han kunne ikke tale dansk, og han havde ingen venner. [[1]]. "Fodbold var mit første danske sprog," siger han og griner.

**2.** For fire år siden spurgte klubben, om han ville hjælpe med at træne de yngste spillere. [[2]]. Han ville gerne give noget tilbage til den klub, der havde hjulpet ham så meget.

**3.** Ali bruger mange timer på klubben. Ud over træningen kører han til kampe i weekenden og planlægger træningen om aftenen. [[3]]. Hans kæreste synes nogle gange, at han er for lidt hjemme.

**4.** For Ali handler fodbold om mere end at vinde. [[4]]. Han lægger stor vægt på, at alle drenge får lov at spille, også dem, der ikke er så gode.

**5.** Næste år vil Ali tage et trænerkursus. [[5]]. Men det vigtigste for ham er stadig, at drengene har det sjovt.`,
      questions: [{
        type: "gaps",
        bank: [
          { key: "A", text: "Men i sin fritid er han noget helt andet: fodboldtræner" },
          { key: "B", text: "Men på fodboldbanen var det lige meget" },
          { key: "C", text: "Det sagde han ja til med det samme" },
          { key: "D", text: "Det er faktisk næsten et halvt job ved siden af hans rigtige arbejde" },
          { key: "E", text: "Det handler om fællesskab, respekt og at lære at tabe" },
          { key: "F", text: "Så kan han blive en endnu bedre træner" },
          { key: "G", text: "Han har aldrig selv spillet fodbold" },
          { key: "H", text: "Derfor stoppede han som træner sidste år" }
        ],
        example: { 0: "A" },
        answers: { 1: "B", 2: "C", 3: "D", 4: "E", 5: "F" }
      }]
    },
    {
      id: "pd3-m2-3", group: G2,
      title: "Opgave 3 – Ahmed fortæller om at arbejde hjemme",
      kind: "Skriv det ord, der mangler",
      level: 3, minutes: 15,
      instruction: "Læs teksten. Der mangler 10 ord (1-10). Skriv et ord, der passer. Du skal kun skrive ét ord i hvert hul.",
      text: `Siden coronatiden har jeg arbejdet hjemme to dage om ugen. I starten syntes jeg, det var fantastisk. Jeg sparede en time [[1]] transport hver dag, og jeg kunne arbejde i ro og fred uden afbrydelser.

Men efter et stykke tid begyndte jeg [[2]] savne mine kolleger. Det er hyggeligt at drikke en kop kaffe sammen [[3]] snakke om løst og fast. Det kan man ikke gøre over en skærm på samme måde.

Jeg har også lært, at det er vigtigt at holde fast i en rutine. Jeg står op på samme tid, [[4]] jeg plejer, og jeg sætter mig ved mit skrivebord kl. 8. Når klokken er 16, slukker jeg computeren, [[5]] jeg ikke arbejder hele aftenen.

[[6]] mig er den bedste løsning en blanding. To dage hjemme giver ro [[7]] koncentration, og tre dage på kontoret giver fællesskab og nye idéer. Jeg tror, at mange [[8]] mine kolleger har det på samme måde.

Hvis man selv kan vælge, synes jeg, [[9]] man skal prøve begge dele og finde ud af, hvad der passer [[10]] en selv.`,
      questions: [{
        type: "gaps", open: true,
        answers: { 1: ["på"], 2: ["at"], 3: ["og"], 4: ["som"], 5: ["så"], 6: ["for"], 7: ["og"], 8: ["af"], 9: ["at"], 10: ["til"] }
      }]
    },
    {
      id: "pd3-m2-4", group: G2,
      title: "Opgave 4 – Seks små tekster",
      kind: "Vælg det rigtige svar (A-C)",
      level: 3, minutes: 15,
      instruction: "Læs de seks små tekster (1-6). Vælg det svar (A-C), der passer til teksten.",
      sections: [{
        heading: "Seks små tekster",
        cards: [
          { title: "1. Billetter til tog", body: "Køber du din billet i appen, skal den være købt, før du stiger på toget. Har du ikke en gyldig billet, kan du få en kontrolafgift på 750 kr. Børn under 12 år rejser gratis sammen med en voksen." },
          { title: "2. Opslag i opgangen", body: "Kære naboer\nVi holder fødselsdag for vores datter på lørdag fra kl. 14 til 18. Der kan komme lidt larm fra haven. Undskyld på forhånd!\nHilsen familien Jensen, nr. 7" },
          { title: "3. Besked fra skolen", body: "Kære forældre\nPå torsdag tager klassen på udflugt til Naturcenteret. Bussen kører fra skolen kl. 8.15 og er tilbage kl. 14. Husk madpakke, drikkedunk og tøj efter vejret. Turen er gratis." },
          { title: "4. Sådan bestiller du tid", body: "Du kan bestille tid hos lægen via appen eller ved at ringe mellem kl. 8 og 9. Har du brug for akut hjælp uden for åbningstiden, skal du ringe til lægevagten." },
          { title: "5. Returret", body: "Du har 30 dages returret på alle varer. Varen skal være ubrugt og i original emballage. Husk kvitteringen. Udsalgsvarer kan ikke returneres." },
          { title: "6. Sms fra en kollega", body: "Hej Sanne\nMødet i morgen er flyttet fra kl. 10 til kl. 13, fordi chefen skal til tandlæge om formiddagen. Vi holder det stadig i mødelokale 2.\nMvh Peter" }
        ]
      }],
      questions: [
        { type: "mc", n: 1, q: "Tekst 1: Hvad er rigtigt?", options: ["Du kan købe billetten i toget.", "Børn under 12 år skal altid have billet.", "Du skal købe billetten, før du stiger på."], answer: 2 },
        { type: "mc", n: 2, q: "Tekst 2: Hvad er rigtigt?", options: ["Familien Jensen inviterer naboerne til fest.", "Familien Jensen advarer om, at der kan blive larm.", "Festen varer hele natten."], answer: 1 },
        { type: "mc", n: 3, q: "Tekst 3: Hvad er rigtigt?", options: ["Børnene får frokost på Naturcenteret.", "Forældrene skal betale for turen.", "Børnene skal have madpakke med."], answer: 2 },
        { type: "mc", n: 4, q: "Tekst 4: Hvad er rigtigt?", options: ["Du kan kun bestille tid ved at ringe.", "Uden for åbningstiden skal du ringe til lægevagten, hvis det er akut.", "Telefonen er åben hele dagen."], answer: 1 },
        { type: "mc", n: 5, q: "Tekst 5: Hvad er rigtigt?", options: ["Du kan returnere udsalgsvarer.", "Du skal have kvitteringen med.", "Du kan returnere brugte varer."], answer: 1 },
        { type: "mc", n: 6, q: "Tekst 6: Hvad er rigtigt?", options: ["Mødet er aflyst.", "Mødet skal holdes et andet sted.", "Mødet starter senere end planlagt."], answer: 2 }
      ]
    }
  );

  // ---------- Øvesæt 3 ----------
  const G3 = "Modul 4-format · øvesæt 3";
  sets.push(
    {
      id: "pd3-m3-1", group: G3,
      title: "Opgave 1 – Frivilligt arbejde i Danmark",
      kind: "Vælg det rigtige ord (A-D)",
      level: 3, minutes: 10,
      instruction: "Læs teksten. I teksten mangler der otte ord/udtryk (1-8). Vælg det ord/udtryk, der passer til hvert hul. Se eksemplet (0).",
      text: `Omkring 40 procent af alle voksne danskere laver frivilligt arbejde. De træner børn i sportsklubber, hjælper ældre med indkøb eller [[0]] i genbrugsbutikker. Det frivillige arbejde er en vigtig del af det danske samfund, og mange foreninger ville slet ikke kunne [[1]] uden de frivillige.

Hvorfor bruger så mange mennesker deres fritid på at arbejde gratis? Undersøgelser viser, at de fleste gør det, fordi de gerne vil [[2]] andre. Men mange nævner også, at det er sjovt, og at de møder nye mennesker. [[3]] kan frivilligt arbejde give erfaring, som man kan bruge, når man søger job.

For mennesker, der er nye i Danmark, kan frivilligt arbejde være en god [[4]] til at lære sproget og forstå den danske kultur. Man taler dansk i praksis og får et netværk, som det [[5]] kan være svært at få.

Der er dog også udfordringer. Mange foreninger har svært ved at finde nok frivillige, [[6]] især unge mennesker har travlt med uddannelse og job. [[7]] er det blevet mere almindeligt at være frivillig i kortere perioder, fx til en festival eller et enkelt arrangement.

Uanset hvordan man gør det, er der næppe tvivl om, at frivilligt arbejde gør en stor [[8]] – både for dem, der hjælper, og for dem, der bliver hjulpet.`,
      questions: [{
        type: "gaps",
        choices: {
          1: words(["eksistere", "betale", "flytte", "lukke"]),
          2: words(["hjælpe", "undgå", "glemme", "kritisere"]),
          3: words(["Desuden", "Derimod", "Tværtimod", "Ellers"]),
          4: words(["vej", "grund", "pris", "regel"]),
          5: words(["ellers", "aldrig", "derfor", "tit"]),
          6: words(["fordi", "selvom", "hvis", "mens"]),
          7: words(["Til gengæld", "Desværre", "Selvfølgelig", "Altså"]),
          8: words(["forskel", "fejl", "skade", "larm"])
        },
        example: { 0: "arbejder" },
        answers: { 1: "eksistere", 2: "hjælpe", 3: "Desuden", 4: "vej", 5: "ellers", 6: "fordi", 7: "Til gengæld", 8: "forskel" }
      }]
    },
    {
      id: "pd3-m3-2", group: G3,
      title: "Opgave 2 – Rania blev sygeplejerske i Danmark",
      kind: "Find sætningen (A-H)",
      level: 3, minutes: 15,
      instruction: "Læs teksten. I hvert afsnit er der et hul, hvor der mangler en sætning. Find den sætning (A-H), der passer bedst i hvert afsnit (1-5). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
      text: `Rania er 34 år og arbejder som sygeplejerske på Aalborg Universitetshospital. [[0]]. Dengang kunne hun ikke et ord dansk.

**1.** De første år gik Rania på sprogskole fire dage om ugen. Det var svært, især udtalen. [[1]]. Hun så danske tv-serier med undertekster og talte med naboerne, når hun kunne.

**2.** I sit hjemland havde Rania arbejdet som sygeplejerske i fem år. [[2]]. Hun skulle tage flere kurser og bestå en sprogprøve, før hun måtte arbejde som sygeplejerske i Danmark.

**3.** Mens hun læste til prøverne, arbejdede hun som social- og sundhedshjælper på et plejehjem. [[3]]. Hun lærte mange ord, som man ikke lærer på sprogskolen, og hun fik gode kolleger.

**4.** I dag arbejder Rania på en afdeling for hjertepatienter. [[4]]. Nogle gange taler hun også arabisk med patienter, der ikke forstår dansk så godt.

**5.** Rania er stolt af, hvad hun har nået. [[5]]. "Man skal bare ikke give op," siger hun.`,
      questions: [{
        type: "gaps",
        bank: [
          { key: "A", text: "Hun kom til Danmark for ti år siden" },
          { key: "B", text: "Men hun øvede sig hver eneste dag" },
          { key: "C", text: "Alligevel blev hendes uddannelse ikke godkendt med det samme" },
          { key: "D", text: "Det job var en stor hjælp for hendes dansk" },
          { key: "E", text: "Hun har travlt, men hun elsker sit arbejde" },
          { key: "F", text: "Og hun håber, at andre kan blive inspireret af hendes historie" },
          { key: "G", text: "Derfor flyttede hun tilbage til sit hjemland" },
          { key: "H", text: "Hun har aldrig arbejdet på et hospital" }
        ],
        example: { 0: "A" },
        answers: { 1: "B", 2: "C", 3: "D", 4: "E", 5: "F" }
      }]
    },
    {
      id: "pd3-m3-3", group: G3,
      title: "Opgave 3 – Maria fortæller om sin nye bolig",
      kind: "Skriv det ord, der mangler",
      level: 3, minutes: 15,
      instruction: "Læs teksten. Der mangler 10 ord (1-10). Skriv et ord, der passer. Du skal kun skrive ét ord i hvert hul.",
      text: `Sidste år flyttede jeg og min familie fra en lille lejlighed i centrum [[1]] et rækkehus i en forstad. Vi havde længe drømt om at få en have, og [[2]] børnene blev større, blev lejligheden for lille.

Der er mange fordele [[3]] at bo i forstaden. Huset er større, og det er meget roligere end i byen. Børnene kan lege udenfor, og der er kun fem minutter [[4]] skolen.

[[5]] der er også ulemper. Vi har længere til arbejde, og jeg bruger næsten en time om dagen [[6]] transport. Vi har også været nødt til at købe en bil mere, og det koster mange penge.

Alligevel er vi glade [[7]] at være flyttet. Vi har fået nye naboer, som er meget søde, og om sommeren spiser vi tit sammen i [[8]] haver. Det sociale fællesskab er meget [[9]] end i lejligheden, hvor vi ikke kendte nogen.

Hvis jeg skulle vælge igen, ville jeg gøre præcis det [[10]].`,
      questions: [{
        type: "gaps", open: true,
        answers: { 1: ["til"], 2: ["da"], 3: ["ved"], 4: ["til"], 5: ["men"], 6: ["på"], 7: ["for"], 8: ["vores", "hinandens"], 9: ["større", "bedre", "stærkere"], 10: ["samme"] }
      }]
    },
    {
      id: "pd3-m3-4", group: G3,
      title: "Opgave 4 – Seks små tekster",
      kind: "Vælg det rigtige svar (A-C)",
      level: 3, minutes: 15,
      instruction: "Læs de seks små tekster (1-6). Vælg det svar (A-C), der passer til teksten.",
      sections: [{
        heading: "Seks små tekster",
        cards: [
          { title: "1. Affaldssortering", body: "Fra 1. januar skal alle husstande sortere madaffald i den grønne spand. Spanden tømmes hver anden uge. Poser til madaffald kan hentes gratis i Kvickly og på genbrugspladsen." },
          { title: "2. Sms", body: "Hej mor\nToget er forsinket, så jeg når ikke hjem til aftensmad. Gem lidt mad til mig, så spiser jeg, når jeg kommer.\nKnus Emma" },
          { title: "3. Svømmehallen", body: "På grund af renovering er svømmehallen lukket fra 1. til 21. august. Udendørsbassinet er åbent som normalt. Har du årskort, forlænges det automatisk med tre uger." },
          { title: "4. Påmindelse fra tandlægen", body: "Husk din tid hos tandlægen tirsdag kl. 14.30. Hvis du er forhindret, skal du melde afbud senest 24 timer før. Ellers skal du betale et gebyr på 250 kr." },
          { title: "5. Jobannonce", body: "Vi søger en lagermedarbejder 30 timer om ugen. Du skal kunne løfte tunge ting og have truckcertifikat. Erfaring er en fordel, men ikke et krav." },
          { title: "6. Mail fra udlejeren", body: "Kære beboere\nMandag den 3. marts bliver der lukket for vandet mellem kl. 9 og 12 på grund af en reparation. Vi beklager ulejligheden.\nVenlig hilsen Boligselskabet" }
        ]
      }],
      questions: [
        { type: "mc", n: 1, q: "Tekst 1: Hvad er rigtigt?", options: ["Madaffald skal i den grønne spand.", "Spanden tømmes hver uge.", "Poserne til madaffald koster penge."], answer: 0 },
        { type: "mc", n: 2, q: "Tekst 2: Hvad er rigtigt?", options: ["Emma kommer ikke hjem i aften.", "Emma vil gerne have mad, når hun kommer hjem.", "Emma har allerede spist."], answer: 1 },
        { type: "mc", n: 3, q: "Tekst 3: Hvad er rigtigt?", options: ["Hele svømmehallen er lukket i hele august.", "Årskort bliver forlænget uden ekstra betaling.", "Udendørsbassinet er lukket."], answer: 1 },
        { type: "mc", n: 4, q: "Tekst 4: Hvad er rigtigt?", options: ["Du kan ikke flytte din tid.", "Du skal betale et gebyr, hvis du melder afbud for sent.", "Din tid er om onsdagen."], answer: 1 },
        { type: "mc", n: 5, q: "Tekst 5: Hvad er rigtigt?", options: ["Du skal have erfaring.", "Jobbet er på fuld tid.", "Du skal have truckcertifikat."], answer: 2 },
        { type: "mc", n: 6, q: "Tekst 6: Hvad er rigtigt?", options: ["Der er ikke vand hele mandagen.", "Der er ikke vand mandag formiddag.", "Beboerne skal selv reparere rørene."], answer: 1 }
      ]
    }
  );

  // First in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(...sets);
})();
