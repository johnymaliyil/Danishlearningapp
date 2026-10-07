// Prøve i Dansk 2, november-december 2013 – transcribed from the exam papers.
// Included: læseforståelse opgave 1-5, skriftlig fremstilling and the oral pictures
// for delprøve 2 (illustrations by Niels Roland, cropped from the picture sheets).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 nov.-dec. 2013";

  const pizzas = [
    [1, "Pomona Speciel", "Med tomat, ost, skinke, kebab, peperoni og jalapenos", "69,00", "89,00", "138,00"],
    [2, "Vesuvio", "Med tomat, ost og skinke", "54,00", "74,00", "108,00"],
    [3, "Parma", "Med tomat, ost, skinke og peperoni", "64,00", "84,00", "128,00"],
    [4, "Olympia", "Med tomat, ost, skinke og bacon", "59,00", "79,00", "118,00"],
    [5, "Arnakke", "Med tomat, ost, skinke og kebab", "64,00", "84,00", "128,00"],
    [6, "Capricciosa", "Med tomat, ost, skinke og champignon", "59,00", "79,00", "118,00"],
    [7, "Quatrostagioni", "Med tomat, ost, skinke, champignon og rejer", "64,00", "84,00", "128,00"],
    [8, "Hawaii", "Med tomat, ost, skinke og ananas", "59,00", "79,00", "118,00"],
    [9, "Amerikano", "Med tomat, ost, skinke, peperoni, kebab og paprika", "69,00", "89,00", "138,00"],
    [10, "Mama Mia", "Med tomat, ost, skinke og gorgonzola", "59,00", "79,00", "118,00"],
    [11, "Napoli", "Med tomat, ost, skinke og rejer", "59,00", "79,00", "118,00"],
    [12, "Italiano", "Med tomat, ost, kødsauce og løg", "59,00", "79,00", "118,00"],
    [13, "Labella", "Med tomat, ost, peperoni, bacon, paprika, æg og løg", "69,00", "89,00", "138,00"],
    [14, "FCK", "Med tomat, ost, kebab og løg", "59,00", "79,00", "118,00"],
    [15, "Margherita", "Med tomat og ost", "44,00", "64,00", "88,00"],
    [16, "Sivas", "Med tomat, ost, kebab, champignon, gorgonzola og løg", "69,00", "89,00", "138,00"],
    [17, "Roma", "Med tomat, ost, kebab, oliven og peperoni", "69,00", "89,00", "138,00"],
    [18, "Peperoni", "Med tomat, ost og peperoni", "54,00", "74,00", "108,00"],
    [19, "Zeyno", "Med tomat, ost, hjemmelavet bøf, champignon og løg", "65,00", "85,00", "130,00"],
    [20, "Matador Lux", "Med tomat, ost, 2 stk. oksefilet, champignon og bearnaisesauce", "85,00", "105,00", "170,00"],
    [21, "Vipperød Speciel", "Med tomat, ost, 1 stk. oksefilet, champignon, hvidløg og bearnaise", "70,00", "90,00", "140,00"],
    [22, "Milano", "Med tomat, ost, skinke, champignon, peperoni og jalapenos", "74,00", "94,00", "148,00"],
    [23, "Miami", "Med tomat, ost, skinke, kødsauce og paprika", "64,00", "84,00", "128,00"],
    [24, "Venus", "Med tomat, ost, kebab, kylling, paprika, hvidløg", "64,00", "84,00", "128,00"],
    [25, "Pizza Mix", "Med tomat, ost, skinke, kødsauce, kebab og champignon", "74,00", "94,00", "148,00"],
    [26, "Ibos", "Med tomat, ost, spaghetti og kødsauce", "59,00", "79,00", "118,00"],
    [27, "Amore", "Med tomat, ost, kebab, champignon, løg og chili", "64,00", "84,00", "128,00"],
    [28, "Osmans", "Med tomat, ost, kebab, champignon, bearnaisesauce og jalapenos", "69,00", "89,00", "138,00"],
    [29, "Alt godt fra havet", "Med tomat, ost, muslinger, tun, rejer og hvidløg", "69,00", "89,00", "138,00"],
    [30, "Torino", "Med tomat, ost, kylling, skinke og ananas", "64,00", "84,00", "128,00"]
  ];

  const opg1 = {
    id: "p13n-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvem kan man høre i Brenderup Kirke?\" – Poul Dissing.",
    sections: [
      {
        heading: "Menukort fra Pizza Pomona",
        cards: pizzas.map(([n, name, what, alm, deep, fam]) => ({ title: `${n}. ${name}`, body: `${what}\nAlm. ${alm} · Deep pan ${deep} · Fam. ${fam}` }))
      },
      {
        heading: "Det sker på Fyn",
        cards: [
          { title: "Foredrag", body: "3/2: 2012 – Når tiden ophører. v/Helene Flendt. Solvognen – kunst og filosoficenter – kr. 110,-\n14/2: Foredrag med Niels Brinch. First Hotel Grand – kr. 230,- (studerende kr. 180,-)\n18/2: Foredrag – Clairvoyance – Astro – Show. Odense Congress Center – kr. 120,-\n21/2: Joan Ørting \"Vær åben\". Restaurant Næsbyhoved Skov – kr. 220,-\n24/2: Magi og Videnskab. v/Steen Landsy. Solvognen – kunst og filosoficenter – kr. 110,-\n9/3: Kvantefysik – Atomernes vilde verden. v/Holger Bech Nielsen. Solvognen – kunst og filosoficenter – kr. 130,-\n16/3: På jagt efter jordens tvilling. v/Anja C. Andersen. Solvognen – kunst og filosoficenter – kr. 130,-\n28/3: Lisbet Dahl. Ferritslev Fritidshus – kr. 160,-" },
          { title: "Oplevelser", body: "21/1: Spring for brysterne. Middelfart Ridecenter – kr. 999,-\n(…)" },
          { title: "Koncert (januar-marts)", body: "21/1: Nytårskoncert 2012. Lillebæltshallerne, Middelfart – kr. 275,-\n27/1: Lillian Boutte. Brenderup Højskole – kr. 90,-/kr. 170,-\n29/1: Nytårskoncert 2012. Ferritslev Fritidshus – kr. 95,-\n3/2: Hawkeye + Hoe. Langtved Forsamlingshus, Ullerslev – kr. 235,-\n4/2: Otterup Rock. Otterup Bowlingcenter – kr. 299,-\n5/2: Odense Banden. Magasinet – kr. 210,-\n10/2: The Sands Family. Foderstoffen, Ringe – kr. 170,-\n10/2: Middle East Peace Orchestra. Brenderup Højskole – kr. 190,-\n10/2: Sanne Salomonsen. Odense Idrætshal – kr. 320,-\n12/2: Dansk Slagerparade 2012. Ferritslev Fritidshus – kr. 265,-\n16/2: Povl Dissing. Foderstoffen, Ringe – kr. 290,-\n18/2: Kristian Lilholt. Odense Congress Center – kr. 120,-\n1/3: Handplugged – partyband. Næsby Hallen – kr. 110,-\n2/3: Rock It. Ferritslev Fritidshus – kr. 260,-\n2/3: H.P. Lange Trio. Brenderup Højskole – kr. 160,-\n3/3: Palle Mikkelborg Trio. Foderstoffen – kr. 180,-\n9/3: Nik og Jay. Odense Idrætshal – kr. 320,-\n10/3: Vagabonderne på Bakkegården m. dans. Langtved Forsamlingshus, Ullerslev – kr. 235,-\n11/3-13/3: Vagabonderne på Bakkegården. Langtved Forsamlingshus, Ullerslev – kr. 90,-\n17/3: Zididada. Foderstoffen, Ringe – kr. 210,-\n18/3: Melodi Grand Prix Show 2012. Ferritslev Fritidshus – kr. 285,-\n20/3: Fredericia Concert Band. Middelfart Salen, Kulturøen – kr. 60,-\n23/3: Magtens Korridorer. Borgerforeningen – kr. 200,-\n23/3: Dodo and The Dodos. Båring Skole – kr. 200,-\n30/3: Dissing, Dissing, Las og Dissing. Langtved Forsamlingshus – kr. 285,-\n30/3: Støttekoncert Rynke Rock. Posten – kr. 300,-" },
          { title: "Koncert (april-november)", body: "13/4: The Blue Van. Foderstoffen, Ringe – kr. 200,-\n15/4: Inviolata. Brenderup Højskole – kr. 150,-\n21/4: De 3. kgl. Tenorer. Ferritslev Fritidshus – kr. 250,-\n21/4: Den Røde Tråd. Foderstoffen, Ringe – kr. 180,-\n26/4: Henriette Bonde Hansen. Foderstoffen, Ringe – kr. 200,-\n29/4: Povl Dissing. Brenderup Kirke – kr. 250,-\n4/5: Danser med Drenge. Odense Idrætshal – kr. 290,-\n26/5: Faaborg Sommerrock 2012. Cirkuspladsen, Faaborg – kr. 305,-\n30/5: Runrig. Den Fynske Landsby – kr. 360,-\n8/6: Status Quo. Den Fynske Landsby – kr. 420,-\n22/6: Billy Cross Band. Foderstoffen, Ringe – kr. 190,-\n22/6: TV2. Den Fynske Landsby – kr. 350,-\n30/6: Katie Melua. Den Fynske Landsby – kr. 615,-\n18/7: Stig Rossen og Vennerne. Hasmark Strand Camping – kr. 160,- (inkl. spisning kr. 309,-)\n25/7: Birthe Kjær. Hasmark Strand Camping – kr. 160,- (inkl. spisning kr. 309,-)\n1/8: Brødrene Olsen. Hasmark Strand Camping – kr. 160,- (inkl. spisning kr. 309,-)\n24/8: Kim Larsen. Den Fynske Landsby – kr. 350,-\n31/8: Lars Lilholt. Den Fynske Landsby – kr. 295,-\n21/9: Basix. Brenderup Højskole – kr. 190,-\n16-17/11: Firserne Forever. Magasinet – kr. 275,-/kr. 305,-" },
          { title: "Dans/spisning", body: "21/1: Dinnershow. Otterup Hotel – kr. 409,-\n4/2: Sir Henry and his Butlers + Night R. Ferritslev Fritidshus – kr. 325,-\n10/2: Elvis and The Devils. Nyboe kro + Selskabslokaler, Årslev, buffet inkl. vin – kr. 509,-\n10/2: Kandis med spisning. Vissenbjerghallerne – kr. 360,-/kr. 220,-\n16/3: Bjørn + Okay. Inkl. menu og dans. Ferritslev Fritidshus – kr. 325,-\n23/3: Kandis. Dans og spisning. Kauslunde Kro – kr. 258,-\n30/3: Sweethearts med Pernille Højmark. Kauslunde Kro – kr. 258,-\n14/4: Party i Provinsen. Forårsfest med menu, Avnslevhallen, Nyborg – kr. 285,-\n20/4: Thorleifs. Kauslunde Kro – kr. 258,-\n1/6: Kandis. Dans og spisning. Kauslunde Kro – kr. 258,-\n2/6: Blå Fest i Korup. Korup Hallen – kr. 335,-\n6/7: På Slaget 12. Kauslunde Kro – kr. 258,-\n31/8: Kandis. Dans og spisning. Kauslunde Kro – kr. 258,-" }
        ],
        source: "Kilde: Ugeavisen Odense, d. 17/1 2012."
      },
      {
        heading: "Legepladser i Horsens Kommune",
        cards: [
          { title: "Bygholm Sø campingplads", body: "Lille legeplads på campingpladsen med bl.a. rutsjebane, balancebom, gynger og sandkasse. Toilet findes bag restaurant. Åbent i sommerhalvåret. Attraktivt beliggende på nordsiden af Bygholm Sø, hvorfra der er gode turmuligheder til bl.a. Grønhøj Jættestue og Lovby Kirketomt." },
          { title: "Bygholm Park legeplads", body: "Stort legeområde indrettet i del af parken. Gynger, vippe, svævebane, shelter, bøgelabyrint, \"amfi-teater\", bålplads, sandkasse, borde/bænke og meget mere. Nyeste tiltag er en motionsslange, hvor du kan få styrket musklerne og balancen. Toilet findes bag stilleplads. Åbent i sommerhalvåret i dagtimerne. Søer med ænder og broer. \"Slangebjerg\" med rester af Erik Menveds Borg. Smuk landskabelig park med mange gamle træer. Tæt forbindelse til banegård og midtbyen." },
          { title: "Vestergades legeplads", body: "Lille legeplads i Vestbykvarteret. Svævebane, bøgelabyrint, sandkasse, gynger, terrasse, toilet/pusleplads. Toilet åbent i sommerhalvåret i dagtimerne. Hyggelig atmosfære med store træer." },
          { title: "Tordenskjoldsgades legeplads", body: "Opholdsplads i Vestbyen for unge og for de voksne, der stadig leger. Skaterbane, multibane, beachvolleybane, sjove legeredskaber, grillplads, mange siddemuligheder." },
          { title: "Caroline Amalie-lunden", body: "Lille legeplads for de mindste indrettet i del af parken. Pavillonbygning med bænke og borde og toilet/pusleplads. Rundt i \"Lunden\" er der yderligere placeret legeredskaber. Toilet forefindes og er åbent i sommerhalvåret i dagtimerne. Smuk gammel bypark med friluftsscene og Horsens Museum og Horsens Kunstmuseum som nærmeste naboer." },
          { title: "Horsens Sygehus", body: "Plænen bag sygehuset. Springvand og små vandrender. Populært udflugtsmål uden dog at være en decideret legeplads." },
          { title: "Rytterkildedalen", body: "Ny og spændende legeplads med fine \"legeskulpturer\". Placeret langs et vandløb og beliggende i et smukt terræn i den østlige bydel." },
          { title: "Lystbådehavnen", body: "Lille legeplads på grønt område på lystbådehavnen. Toilet forefindes og er åbent hele året.\nAktivplads på havnen ved Havnesporet: Solbeskinnet opholdsplads vest for lystbådehavnen med borde-bænke og områder til boldspil, pannabane, beachhåndbold og basket. Her er også store skulpturelle sten, som man kan tage fat om på vej fra lystbådehavnen til centrum." },
          { title: "Husodde", body: "Lille legeplads med gynger på strandområdet foran Husodde Campingplads." },
          { title: "Grusdalsvej, Egebjerg", body: "Lille legeplads for småbørn med gode opholdsmuligheder." },
          { title: "P. C. Jensensvej, Hovedgård", body: "Ny og solid legeplads med karrusel, klatrestativ, stor sandkasse, bålplads, plads til boldspil og hyggelig skov bagved." },
          { title: "Legeplads i parken i Brædstrup", body: "I parken i Brædstrup er der leg for både store og små. En sandkasse med legehuse og balanceline, edderkopperutsjebane ved tennisbanerne samt balanceredskab og hængekøje.\nFor de lidt ældre er der et motionsredskab i den nordlige del af parken, når man passerer forbi på sin gå- eller løbetur. Legeredskaberne er fordelt på 3-4 steder i parken, som danner en hyggelig ramme til leg og motion med sine mange gamle træer, stier og grønne plæner." },
          { title: "Østbirk Legeplads", body: "Legeplads med gynger, rutsjebane og sandkasse. Legepladsen ligger ved naturstien Horsens-Silkeborg og bliver vedligeholdt af Borgerforeningen." },
          { title: "Legeplads ved Slotsskolen", body: "Stor ny dejlig legeplads/motionsområde til Slotsskolen med klatreredskaber, gynger, motionsredskaber og store, åbne grønne områder i let kuperet terræn med plads til boldspil og fysisk udfoldelse.\nLegepladsen er åben for offentligheden uden for skolens åbningstid. I skoletiden er området primært beregnet for skolens elever. Legepladsen er planlagt som et friareal for skolen og som en kvarterslegeplads for Vestbyens borgere, og der er adgang fra Fussingsvej og Hede Nielsens Vej." }
        ],
        source: "Kilde: www.horsenskom.dk"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvad koster det at komme til Blå Fest i Korup?", accept: ["335 kr", "335", "kr 335", "335 kroner", "kr 335-", "335-", "335 kr.", "kr. 335,-", "kr 335,-", "335,-", "trehundrede og femogtredive kroner"] },
      { type: "short", n: 2, q: "Hvor kan man høre Nik og Jay?", accept: ["odense idrætshal", "i odense idrætshal", "odense idrætshallen", "idrætshallen i odense", "i odense", "odense"] },
      { type: "short", n: 3, q: "På hvilken legeplads er der en grillplads?", accept: ["tordenskjoldsgades legeplads", "tordenskjoldsgade", "tordenskjoldsgades", "tordenskjoldsgade legeplads", "legepladsen i tordenskjoldsgade"] },
      { type: "short", n: 4, q: "På hvilken legeplads er der et toilet, der har åbent hele året?", accept: ["lystbådehavnen", "på lystbådehavnen", "legepladsen på lystbådehavnen", "lystbådehavnens legeplads", "lystbadehavnen"] },
      { type: "short", n: 5, q: "Hvor mange pizzaer er der hvidløg på?", accept: ["3", "tre", "3 pizzaer", "tre pizzaer", "21 24 og 29", "nr 21 24 og 29"] },
      { type: "short", n: 6, q: "Koster en Napoli og en Amore det samme?", accept: ["nej", "nej napoli koster 59 og amore koster 64", "nej amore er dyrere", "nej napoli er billigere", "nej det gør de ikke", "nej de koster ikke det samme"] }
    ]
  };

  const opg2 = {
    id: "p13n-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Læsekurser", body: "Lektie- og eksamenshjælp. Alle fag, alle aldre\n■■■■■■\n41 67 57 93 / 42 22 26 16\nwww.studyhouse.dk" },
          { title: "B – Ferielukket", body: "Klinikken er lukket i uge 8.\nVed brug for akut behandling henviser vi til vores kolleger i Himmerslev\ntlf. 82 44 35 10.\n■■■■■■" },
          { title: "C", body: "■■■■■■\n5&60 FERIE sender Dem af sted\nRing – Vi sender Dem vort farvestrålende sommerkatalog. I år fyldt med mange nyheder.\nVi er ikke som de andre …\nSkørringe Turistbusser I/S\nSkørringevej 27. 4930 Maribo. Tlf. 54 60 80 12\nTelefontid: Man.-fre. kl. 9-15.\nOBS: Alle kan deltage – uanset alder\n5&60 FERIE" },
          { title: "D", body: "■■■■■■\nTil efterårets mange fester søger vi\n• serveringspersonale • kok som afløser\nStruer Vandrerhjem\nFjordvejen 12 · Tlf. 9785 5313 · 2027 3407 · 2032 3407\nwww.struer-vandrerhjem.dk\nEt hyggeligt sted at mødes …" },
          { title: "E", body: "■■■■■■\nVesterhavsrugbrød: Kun 20,-\nLangtidshævet russisk landbrød: Kun 20,-\nWienerbrødsstang med creme: Kun 25,-\nCenterbageren.dk\nRungsted Bytorv (i SuperBest) · Tlf. 47 72 23 06" },
          { title: "F", body: "■■■■■■\n• Få glæde af servicefradrag\n• Alt i tømrer- og snedkerarbejde udføres\n• Tag, vinduer og døre\nTKJ BYG ApS\nAgerskovvej 7. 8362 Hørning. Tlf. 86 92 35 11" },
          { title: "G – Lær at danse folkedans", body: "■■■■■■\n10 x 2 timer – Pris: 325 kr.\nAlle kan lære det!\nKom med din partner eller alene, der er altid en dansepartner til dig.\nStart: Tirsdag d. 17. januar kl. 19.30-21.30\nI Østre Skoles nye musiklokale, Grenaa\nInfo/tilmelding: Danseleder Karen Lindballe, tlf. 86325602\nMusik: en lille spillemandsgruppe" },
          { title: "H", body: "■■■■■■\nGæstgivergården\nFredag 31. dec. kl. 20-01\nMusik: Jan og co. spiller op til dans på årets sidste dag\nIndgang 110,-/Medlemskort 100,-. Min. 30 år\n46291311\nKøb billetter senest 13. dec.\nPris 400,- inkl. spisning. Efter kl. 21.00: 150,-" },
          { title: "I – Højvangens Genbrug", body: "Højvangens Torv 8 · 8660 Skanderborg\n■■■■■■\nVi har åbent:\nTorsdag og fredag kl. 13-17. Lørdag kl. 10-13.\nVi tager med tak imod møbler, porcelæn, glas, billeder, beklædning, legetøj, bøger etc.\nRing 8695 0513 – 8652 1002 – 8657 2200\nKirkens Korshær · Skanderborg Y's Mens Club\nwww.genbrugskanderborg.dk" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Erfarne lærere", answer: "A", example: true },
          { n: 7, text: "Din lokale håndværker", answer: "F" },
          { n: 8, text: "Kom godt ind i det nye år!", answer: "H" },
          { n: 9, text: "Lægerne i Lynghaven", answer: "B" },
          { n: 10, text: "Kursus for begyndere", answer: "G" },
          { n: 11, text: "Weekendarbejde", answer: "D" },
          { n: 12, text: "Go' tur!", answer: "C" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p13n-3", group: G, real: true,
    title: "Opgave 3 – Kat kommer hjem efter tre år",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Karen Jensen bor i en lille by lidt nord for Randers. For tre år siden blev hendes kat Mons væk. Hun lukkede den ud i haven om morgenen, [[0]] da det blev aften, kom den ikke hjem igen.

Karen spurgte efter katten hos sine naboer, men der var [[13]], der havde set den. Så satte hun plakater med et billede af Mons op i hele byen. Et par uger efter var der en mand fra Randers, der ringede til hende. På vejen foran sit hus havde han nogle dage før fundet en [[14]] kat, der lignede Mons. Den var blevet kørt ned af en bil. Dengang vidste han ikke, hvis kat det var, så han begravede den i sin have, og han så desværre først plakaterne med Mons bagefter. Karen var [[15]] ked af at høre, at Mons var død. Men hun syntes også, at det var rart at vide, hvad der var sket med [[16]] kat.

Onsdag den 27. september i år blev Karen derfor meget overrasket, da hun ville gå ud i [[17]] for at drikke morgenkaffe. På terrassen sad Mons nemlig! Da Karen åbnede døren, gik den ind i [[18]] og lagde sig på sin gamle plads på sofaen.

Ingen ved, hvor Mons var henne i de tre år, den ikke var hos Karen Jensen. Der er heller ikke nogen, der ved, [[19]] det var for en kat, manden fra Randers begravede i sin have. Men det var helt sikkert [[20]] Karens kat Mons!`,
    questions: [
      {
        type: "gaps",
        bank: ["men", "hans", "fordi", "død", "mange", "hvad", "ikke", "ingen", "bange", "hendes", "haven", "også", "selvfølgelig", "stuen"].map(w => ({ key: w, text: w })),
        example: { 0: "men" },
        answers: { 13: "ingen", 14: "død", 15: "selvfølgelig", 16: "hendes", 17: "haven", 18: "stuen", 19: "hvad", 20: "ikke" }
      }
    ]
  };

  const opg4 = {
    id: "p13n-4", group: G, real: true,
    title: "Opgave 4 – Svend ordner næsten alt ude og inde",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Svend er udlært murer og har været ansat i et byggefirma i ti år. Men det er dårlige tider for byggebranchen, så nu har han startet sit eget lille enmandsfirma. Han hjælper folk med stort og småt både ude og inde.

**0.** Engang var Svend ansat i et byggefirma som murer. Her kunne han ikke selv bestemme, hvad han skulle lave. En dag mistede han sit job, fordi det gik dårligt for firmaet. Nu har han sit eget firma, hvor han selv bestemmer alt. Det går stadig dårligt for Svends gamle firma. [[0]].

**21.** Svend tilbyder at klare forskellige opgaver for folk med hus og have. Han maler og reparerer inde og ude. Han udskifter vinduer og døre, og hvis der er faldet en tagsten ned, sætter han en ny op. Han ordner have og meget andet. Svend elsker sit nye arbejde og synes, at alle opgaver er spændende. Der er kun én ting, han ikke kan lide ved at være selvstændig, nemlig papirarbejdet. [[21]]. For der skal skrives regninger ud, og alt det der med skat og moms skal ordnes. Men det skal man jo, når man har et firma.

**22.** Mange af Svends kunder er ældre mennesker. Da de var yngre, lavede de selv de små reparationer i huset. De passede også selv deres have, men det har de ikke kræfter til mere. Så de er glade for, at de har lært Svend at kende. Han laver nemlig et godt stykke arbejde. [[22]]. Så skal de ikke gå og vente i ugevis, hvis der er et eller andet, der ikke fungerer.

**23.** Svend har mest at lave fra marts til oktober, for i den periode er der meget havearbejde. Om foråret ordner han folks haver og planter nye blomster. Om sommeren klipper han hæk og passer blomster og grøntsager. Så han har virkelig travlt i den periode. Og det kan han godt lide. [[23]]. Men han er også glad for, at han har mindre travlt fra november til februar, så han kan slappe lidt af indimellem. Om efteråret er der igen hække, der skal klippes, eller træer, der skal beskæres.

**24.** Vinterhalvåret er nemlig en mere stille periode, fordi der ikke er noget havearbejde. Men han får flere og flere kunder, der skal have lavet noget ved deres hus. Han får også kunder længere og længere væk fra, hvor han bor. Det giver en del kørsel. [[24]]. For han kommer rundt i landet og ser mange forskellige steder og møder nye mennesker. Så han siger aldrig nej, hvis han ellers tror, det er en opgave, han kan klare.

**25.** Svend ser meget lyst på fremtiden som direktør, håndværker og gartner i sit eget lille enmandsfirma. Han synes, han har fået et langt bedre liv, end han havde før. For eksempel kan han tilmelde sig et kursus på teknisk skole, hvis han finder et rigtig godt et. Og der er stadig ting, han har brug for at lære. For eksempel vil han gerne lære at lave fine gulve af træ. [[25]]. På den måde kan han også blive Svend, der ordner alt ude og inde.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Men det gør det ikke for Svend." },
          { key: "B", text: "For så kan han tage endnu flere opgaver." },
          { key: "C", text: "Og han kommer næsten altid med det samme." },
          { key: "D", text: "Men det har han ikke brug for." },
          { key: "E", text: "Men det synes han er spændende." },
          { key: "F", text: "Den slags siger han nej til." },
          { key: "G", text: "For så tjener han mange penge." },
          { key: "H", text: "Og det tager lang tid at lave." }
        ],
        example: { 0: "A" },
        answers: { 21: "H", 22: "C", 23: "G", 24: "E", 25: "B" }
      }
    ]
  };

  const opg5 = {
    id: "p13n-5", group: G, real: true,
    title: "Opgave 5 – Interview med Mette",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Mette – sygeplejerske på børneafdelingen",
        cards: [
          { title: "A", body: "Det kan jeg svare meget præcist på, for i næste måned er det nemlig et år siden, jeg startede her på børneafdelingen. Jeg blev færdig med min uddannelse i juni sidste år, og så fik jeg job som sygeplejerske her lige efter." },
          { title: "B", body: "Det lyder måske lidt mærkeligt, men jeg arbejder! Mens jeg studerede, arbejdede jeg også frivilligt på en café for mennesker med psykiske problemer. Og det gør jeg stadig et par timer hver anden uge. Men ellers slapper jeg bare af derhjemme eller går i biografen og på café og sådan noget." },
          { title: "C", body: "Altså, lige nu vil jeg svare ja, helt sikkert, for jeg er så glad for at være her, og mine kolleger er rigtig søde. Men måske skifter jeg mening om et par år, når jeg selv får børn. Her skal vi nemlig alle sammen have nattevagt somme tider, og nattevagter passer ikke så godt til et familieliv." },
          { title: "D", body: "Der er faktisk flere gode ting ved det. For eksempel har jeg jo somme tider fri, når alle andre arbejder. Og så kan jeg købe ind og gå til frisøren og sådan noget i fred og ro. Men det er også lidt irriterende, at man ikke altid ved helt præcist, hvornår man skal arbejde, og hvornår man har fri." },
          { title: "E", body: "Ja, det er jeg helt sikker på. Jeg elsker børn! Men lige nu er det vigtigt for mig at få noget mere erfaring som sygeplejerske. Det er jo kun et år siden, jeg blev færdig med min uddannelse, og jeg har stadig meget at lære. Så jeg venter nok lige et par år med at blive mor." },
          { title: "F", body: "De fleste børn har vist mange forskellige drømme og planer, og det havde jeg også. Jeg ville gerne være læge, men jeg ville også gerne være frisør. Og popsanger, tror jeg. Men det var først, da jeg var færdig med gymnasiet, jeg besluttede, at jeg ville søge ind på sygeplejeskolen." },
          { title: "G", body: "Det tror jeg, de fleste sygeplejersker synes, for vi har meget travlt hver dag, og vi har et stort ansvar. Så ja, det er det, og jeg kan godt være meget træt og have ondt i hovedet efter en lang dag. Men heldigvis er der også mange positive ting ved jobbet, der gør, at man alligevel kan klare det." },
          { title: "H", body: "Faktisk er der kun en ting. Blodprøver på små børn. Man kan forklare store børn, hvorfor man skal tage en blodprøve på dem. Men helt små børn kan ikke forstå det. Og det er altså ikke sjovt at skulle stikke i sådan en lille én, der græder. Det gør ondt inde i mig hver gang." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvor længe har du arbejdet som sygeplejerske?", answer: "A", example: true },
          { n: 26, text: "Hvad synes du om at have skiftende arbejdstider?", answer: "D" },
          { n: 27, text: "Vil du altid arbejde på børneafdelingen?", answer: "C" },
          { n: 28, text: "Er det et stressende job?", answer: "G" },
          { n: 29, text: "Hvad laver du i din fritid?", answer: "B" },
          { n: 30, text: "Er der noget ved dit arbejde, du ikke kan lide?", answer: "H" }
        ]
      }
    ]
  };

  // Real sets newest first: 2020, 2019, 2018, 2016, 2014, 2013 nov.-dec., 2013 maj-juni, 2012.
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 maj-juni 2013");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling nov.-dec. 2013 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2013);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w13na", delprove: 1, real: true, year: 2013,
      title: "A: Et opslag om en ny lejlighed (nov.-dec. 2013)",
      kind: "Prøveopgave · opslag",
      minWords: 80, maxWords: 150,
      situation: "Du vil flytte. Du søger en ny lejlighed. Skriv opslaget. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv", "Hvorfor du har brug for en ny lejlighed", "Hvad slags lejlighed du gerne vil have, og hvor den skal ligge", "Hvordan du kan kontaktes"],
      phrases: ["Lejlighed søges!", "Jeg hedder … og er … år.", "Jeg har brug for en ny lejlighed, fordi …", "Jeg søger en lejlighed med … værelser", "Den må gerne ligge tæt på …", "Ring eller skriv til mig på …"],
      model: `Lejlighed søges!

Hej! Jeg hedder Ana, jeg er 32 år og kommer fra Portugal. Jeg bor sammen med min mand og vores søn på fire år. Jeg arbejder som sygehjælper på plejehjemmet Solgården, og jeg går til dansk om aftenen.

Lige nu bor vi i en lille toværelses lejlighed på 50 kvadratmeter. Vi venter en baby til foråret, så vi har brug for mere plads. Desuden har vi langt til arbejde og børnehave.

Vi søger en lejlighed med tre eller fire værelser og gerne en altan eller en lille have. Den må højst koste 7.000 kr. om måneden. Den skal gerne ligge i Viby eller tæt på centrum, så vi kan cykle på arbejde, og der skal være en børnehave i nærheden.

Hvis du har en lejlighed til os, eller hvis du kender nogen, der har, må du meget gerne ringe til mig på 26 48 91 37 eller skrive til ana.silva@mail.dk.

På forhånd tak!

Venlig hilsen
Ana Silva`
    },
    {
      id: "w13nb", delprove: 1, real: true, year: 2013,
      title: "B: En klage til en restaurant (nov.-dec. 2013)",
      kind: "Prøveopgave · klage",
      minWords: 80, maxWords: 150,
      situation: "Du har været på restaurant. Du blev syg af maden. Du vil skrive en klage til restauranten. Skriv klagen. Du skal begynde og afslutte klagen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvorfor du skriver", "Hvornår du var på restauranten", "Hvad du spiste, og hvordan du havde det bagefter", "Hvad du synes, restauranten skal gøre"],
      phrases: ["Kære Restaurant …", "Jeg skriver til jer, fordi …", "Jeg var hos jer lørdag den …", "Jeg bestilte …", "Om natten fik jeg ondt i maven og …", "Jeg synes, at I bør …"],
      model: `Kære Restaurant Havblik

Jeg skriver til jer, fordi jeg blev syg efter et besøg på jeres restaurant, og det er jeg meget utilfreds med.

Jeg var hos jer lørdag den 9. november sammen med min kone. Vi fejrede vores bryllupsdag og havde bestilt bord kl. 19.

Til forret spiste jeg rejecocktail, og til hovedret fik jeg jeres stegte fisk med kartofler og sauce. Fisken smagte lidt mærkeligt, men jeg tænkte ikke så meget over det. Om natten fik jeg ondt i maven og kastede op flere gange. Jeg var syg i to dage og kunne ikke gå på arbejde. Min kone, som spiste kylling, havde det fint.

Jeg synes, at I skal undersøge, om jeres fisk er frisk nok, så det ikke sker for andre gæster. Desuden synes jeg, at I skal betale pengene for min middag tilbage. Den kostede 285 kr.

Jeg håber at høre fra jer snart.

Med venlig hilsen
Karim Haddad
Tlf. 31 75 24 60`
    },
    {
      id: "w13nc", delprove: 2, real: true, year: 2013,
      title: "En e-mail om din butik (nov.-dec. 2013)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Jesper. I e-mailen skriver han bl.a.: \"… Jeg har hørt, at du har åbnet en butik. Det lyder vel nok spændende. Men jeg har også hørt, at du har lidt problemer med den unge mand, du har ansat til at hjælpe dig i butikken. Vil du godt skrive og fortælle lidt om din butik, og hvad det er for problemer, du har med den unge mand …\" Skriv et svar til Jesper. Du skal skrive minimum 100 ord.",
      points: ["Fortæl om din butik (hvad du sælger, hvor den ligger)", "Fortæl om den unge mand, du har ansat", "Fortæl, hvilke problemer du har med ham", "Fortæl, hvad du vil gøre ved problemerne"],
      phrases: ["Hej Jesper", "Tak for din mail.", "Min butik ligger …, og vi sælger …", "Jeg har ansat en ung mand, der hedder …", "Problemet er, at han …", "Kh / Mange hilsner"],
      model: `Hej Jesper

Tak for din mail. Ja, det er rigtigt. For tre måneder siden åbnede jeg en lille grøntsagsbutik på Vestergade midt i byen. Vi sælger frugt, grøntsager, krydderier og te fra mange forskellige lande. Det går faktisk godt, og jeg har allerede mange faste kunder.

Fordi der er så meget at lave, har jeg ansat en ung mand, der hedder Mikkel. Han er 19 år og rigtig god til at snakke med kunderne. Men der er desværre nogle problemer. Han kommer tit for sent om morgenen, og nogle gange ringer han først en time efter, at han skulle være mødt. Desuden står han ofte og kigger på sin mobiltelefon, når der er kunder i butikken.

Jeg har tænkt mig at tage en alvorlig snak med ham i næste uge. Hvis det ikke bliver bedre, må jeg finde en anden.

Kom forbi butikken, næste gang du er i byen!

Mange hilsner
Hassan`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven nov.-dec. 2013 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2, november-december 2013)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p13n-a", title: "Aktive ældre", real: true, year: 2013,
      pictures: [
        { img: "images/pd2-2013-nd/aktive-aeldre-1.jpg", credit, alt: "Ældre mennesker træner i et motionscenter på motionscykel og løbebånd og drikker vand bagefter", words: ["motionscenter", "løbebånd", "motionscykel", "svede", "holde sig i form"] },
        { img: "images/pd2-2013-nd/aktive-aeldre-2.jpg", credit, alt: "Ældre mennesker på et computerkursus, hvor en underviser hjælper en kvinde ved computeren", words: ["computerkursus", "underviser", "skærm", "printer", "lære noget nyt"] }
      ],
      interview: [
        "Hvad laver de ældre mennesker på billedet?",
        "Kender du nogle ældre mennesker, der er aktive? Hvad laver de?",
        "Hvad vil du selv lave, når du bliver pensionist?",
        "Hvordan lever ældre mennesker i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Min mormor er 80 år og går til gymnastik hver uge. Kender du også ældre, der er så aktive?" },
        { who: "partner", say: "Jeg synes, ældre mennesker skal lære at bruge computer og internet. Hvad synes du?" },
        { who: "mediator", say: "Hvad laver ældre mennesker typisk i deres fritid i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, det er vigtigt for ældre at være sammen med andre mennesker. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, samfundet kan gøre for, at ældre kan holde sig aktive?" }
      ],
      phrases: ["På billedet kan jeg se …", "De ældre er ved at …", "Min bedstemor/bedstefar …", "Når jeg bliver pensionist, vil jeg …", "I mit hjemland bor de ældre tit …", "Hvad med dig?"]
    },
    {
      id: "p13n-b", title: "Gaver", real: true, year: 2013,
      pictures: [
        { img: "images/pd2-2013-nd/gaver-1.jpg", credit, alt: "En familie juleaften omkring juletræet, hvor børnene pakker gaver op, og en mand tager billeder", words: ["juleaften", "juletræ", "pakke gaver op", "familien", "glæde sig"] },
        { img: "images/pd2-2013-nd/gaver-2.jpg", credit, alt: "En kvinde på hospitalet med sin nyfødte baby får besøg af to veninder med blomster og en gave", words: ["hospitalet", "baby", "på besøg", "blomster", "give en gave"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvornår giver du gaver, og hvem giver du gaver til?",
        "Hvad er den bedste gave, du har fået?",
        "Hvornår giver man gaver i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg bruger altid mange penge på julegaver. Gør du også det?" },
        { who: "partner", say: "Jeg synes, at pengegaver er kedelige. Hvad synes du?" },
        { who: "mediator", say: "Hvad giver man typisk, når man besøger nogen, der har fået en baby i jeres hjemlande?" },
        { who: "partner", say: "Jeg kan bedst lide at få gaver, som folk selv har lavet. Hvad med dig?" },
        { who: "mediator", say: "Hvad synes I generelt er en god gave?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det ligner juleaften", "Jeg giver gaver til …", "Den bedste gave, jeg har fået, var …", "Hos os giver man gaver, når …", "Er du enig?"]
    },
    {
      id: "p13n-c", title: "Penge", real: true, year: 2013,
      pictures: [
        { img: "images/pd2-2013-nd/penge-1.jpg", credit, alt: "Et par i en elektronikbutik, hvor en sælger viser et stort fladskærms-tv frem, og kvinden ser skeptisk ud", words: ["elektronikbutik", "fjernsyn", "sælger", "dyrt", "spare penge"] },
        { img: "images/pd2-2013-nd/penge-2.jpg", credit, alt: "En mor viser en kjole frem i en genbrugsbutik, men datteren står sur med armene over kors", words: ["genbrugsbutik", "kjole", "billigt", "brugt tøj", "sur"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvad bruger du dine penge på?",
        "Er du god til at spare penge? Hvorfor eller hvorfor ikke?",
        "Køber du nogle gange brugte ting? Hvorfor eller hvorfor ikke?"
      ],
      talk: [
        { who: "partner", say: "Jeg køber altid det nyeste elektronik, selvom det er dyrt. Gør du også det?" },
        { who: "partner", say: "Jeg synes, det er en god idé at købe tøj i genbrugsbutikker. Hvad synes du?" },
        { who: "mediator", say: "Hvad bruger man typisk mange penge på i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at mange unge bruger for mange penge. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at spare penge?" }
      ],
      phrases: ["På billedet kan jeg se …", "Kvinden ser ud til at …", "Jeg bruger de fleste af mine penge på …", "Jeg prøver at spare op til …", "Det er (ikke) vigtigt for mig, at …", "Hvad med dig?"]
    }
  );
})();
