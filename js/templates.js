// Skabeloner (templates) for PD2 skriftlig fremstilling.
// Each text type has one fixed frame to learn by heart: the same opening, the same
// paragraph starters and the same ending every time. The PD2 model answers below
// are written to follow their template word for word, so the fixed phrases (`marks`)
// can be highlighted in them and practised in the "Lær udenad" exercise.
// In `skeleton`, [square brackets] are the parts you fill in yourself.

PD2.TEMPLATES = {
  ven: {
    ico: "💌", name: "E-mail til en ven",
    use: "Delprøve 2: svar på en mail fra en ven (Anders, Lukas, Marie …). Også korte mails til en ven eller nabo.",
    skeleton: `Hej [navn]

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om [emnet], og det vil jeg gerne fortælle dig lidt om.

For det første [punkt 1 …]

Derudover [punkt 2 og 3 …]

Til sidst vil jeg sige, at [punkt 4 …]

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
[dit navn]`,
    marks: ["Tak for din mail.", "Det var dejligt at høre fra dig.", "Jeg håber, at du har det godt.", "Jeg har det fint.", "Du spørger om", "og det vil jeg gerne fortælle dig lidt om.", "For det første", "Derudover", "Til sidst vil jeg sige, at", "Jeg glæder mig til at høre fra dig.", "Vi ses snart!", "Mange hilsner"],
    tip: "Husk: \"Jeg håber, at du har det godt\" – med \"at\" og komma, og verbet efter \"du\". Efter \"For det første\" og \"Derudover\" kommer verbet før subjektet: \"For det første var jeg …\", \"Derudover er det …\"."
  },
  klage: {
    ico: "😠", name: "Klage",
    use: "Delprøve 1: klage til en boligforening, en butik, en restaurant eller et firma.",
    skeleton: `Kære [firma / boligforening]

Jeg skriver til jer, fordi jeg vil klage over [problemet].

Det drejer sig om [hvad, hvor og hvornår …]

Problemet er, at [hvad der er galt …]

Jeg har allerede [hvad du selv har gjort …]

Derfor vil jeg gerne bede jer om at [hvad de skal gøre …]

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
[dit navn]
[adresse / telefonnummer]`,
    marks: ["Jeg skriver til jer, fordi jeg vil klage over", "Det drejer sig om", "Problemet er, at", "Jeg har allerede", "Derfor vil jeg gerne bede jer om at", "Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.", "Med venlig hilsen"],
    tip: "En klage er høflig, men tydelig. Skriv \"I\" og \"jer\" til et firma – og husk at skrive, hvordan de kan kontakte dig."
  },
  ansoegning: {
    ico: "💼", name: "Jobansøgning",
    use: "Delprøve 1: ansøgning om et job, du har set i en annonce.",
    skeleton: `Kære [firma]

Jeg har set jeres jobannonce [i avisen / på jobnet.dk], og jeg vil gerne søge stillingen som [job].

Jeg hedder [navn], og jeg er [alder] år. [Lidt om dig selv …]

Jeg har erfaring med [erfaring …]

Jeg tror, at jeg vil være god til jobbet, fordi [dine gode egenskaber …]

I kan kontakte mig på [telefon / e-mail].

Jeg håber, at I vil invitere mig til en samtale. Jeg ser frem til at høre fra jer.

Med venlig hilsen
[dit navn]`,
    marks: ["Jeg har set jeres jobannonce", "og jeg vil gerne søge stillingen som", "Jeg hedder", "Jeg har erfaring med", "Jeg tror, at jeg vil være god til jobbet, fordi", "I kan kontakte mig på", "Jeg håber, at I vil invitere mig til en samtale.", "Jeg ser frem til at høre fra jer.", "Med venlig hilsen"],
    tip: "Skriv om dig selv, din erfaring og hvorfor du passer til jobbet – i den rækkefølge."
  },
  institution: {
    ico: "🏫", name: "Mail til en lærer, skole eller kommune",
    use: "Korte, høflige mails, hvor du giver besked eller spørger om noget.",
    skeleton: `Kære [navn / skole]

Jeg skriver til [dig / jer], fordi [grunden …]

Kan [du / I] fortælle mig, [dit første spørgsmål]?

Jeg vil også gerne vide, [dit næste spørgsmål].

På forhånd tak for hjælpen. Jeg ser frem til at høre fra [dig / jer].

Venlig hilsen
[dit navn]`,
    marks: ["Jeg skriver til", "Jeg vil også gerne vide", "På forhånd tak for hjælpen.", "Jeg ser frem til at høre fra", "Venlig hilsen"],
    tip: "Skriv \"dig\" til én person (din lærer) og \"jer\" til en skole eller et kontor."
  },
  anbefaling: {
    ico: "⭐", name: "Anbefaling",
    use: "Delprøve 1: anbefal et hotel, en restaurant, en film, en skole …",
    skeleton: `[Navn] – kan varmt anbefales!

Jeg vil gerne anbefale [navn], som ligger [hvor].

[Beskriv det: hvad du så, spiste, oplevede …] Det bedste ved [stedet] er, at [ … ]

Desuden [noget mere godt …]

Jeg vil anbefale [det], fordi [grunden]. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
[dit navn]`,
    marks: ["– kan varmt anbefales!", "Jeg vil gerne anbefale", "Det bedste ved", "Desuden", "Jeg vil anbefale", "Prøv det selv – du bliver ikke skuffet!", "Venlig hilsen"],
    tip: "Brug mange positive adjektiver: dejlig, lækker, hyggelig, venlig, ren, billig."
  },
  opslag: {
    ico: "📌", name: "Opslag / efterlysning",
    use: "Delprøve 1: opslag på sprogskolen eller i opgangen, en efterlysning i avisen, \"værelse til leje\", \"lejlighed søges\" …",
    skeleton: `[Kort overskrift]!

Hej alle sammen

Jeg hedder [navn], og jeg skriver, fordi [grunden].

[Detaljer: hvad, hvor, hvornår, pris …]

[Flere detaljer …]

Hvis du [er interesseret / vil med / har set noget], så ring eller skriv til mig på [telefon] senest [dato].

På forhånd tak!

Mange hilsner
[dit navn]`,
    marks: ["Hej alle sammen", "Jeg hedder", "og jeg skriver, fordi", "så ring eller skriv til mig på", "På forhånd tak!", "Mange hilsner"],
    tip: "Overskriften skal fange læseren: \"Kom med på tur!\", \"Lejlighed søges!\", \"Vidner søges!\"."
  },
  jobannonce: {
    ico: "📢", name: "Jobannonce",
    use: "Delprøve 1: du søger en medarbejder til din butik eller dit firma.",
    skeleton: `[Job] søges!

Vi søger en [job] til [firma], som ligger [hvor].

Om os: [hvad I sælger / laver, åbningstider …]

Dine opgaver bliver at [opgaver …]

Vi forventer, at du [kvalifikationer …]

Arbejdstiden er [timer / dage].

Hvis du er interesseret, så send en ansøgning til [e-mail] senest [dato].

Vi glæder os til at høre fra dig!

Med venlig hilsen
[dit navn], ejer`,
    marks: ["søges!", "Vi søger en", "Om os:", "Dine opgaver bliver at", "Vi forventer, at du", "Arbejdstiden er", "Hvis du er interesseret, så send en ansøgning til", "Vi glæder os til at høre fra dig!", "Med venlig hilsen"],
    tip: "En annonce skrives med \"vi\" om firmaet og \"du\" om den nye medarbejder."
  },
  takkebrev: {
    ico: "💐", name: "Takkebrev",
    use: "Delprøve 1: tak for en praktik, en fest, hjælp …",
    skeleton: `Kære alle i [sted]

Tusind tak for [en god tid hos jer]. [Lidt mere …]

Jeg har lært [hvad du lærte …]

Jeg kommer til at savne [hvad / hvem …]

Nu skal jeg [dine planer …]

Endnu en gang tusind tak for alt. Jeg håber, at vi ses snart!

Mange hilsner
[dit navn]`,
    marks: ["Kære alle i", "Tusind tak for", "Jeg har lært", "Jeg kommer til at savne", "Nu skal jeg", "Endnu en gang tusind tak for alt.", "Jeg håber, at vi ses snart!", "Mange hilsner"],
    tip: "\"Jeg kommer til at savne …\" er en god vending, der passer i mange tekster."
  },
  holdning: {
    ico: "🗞️", name: "Tekst til et blad eller en avis",
    use: "Fortællende tekster og holdningstekster: fx et godt job, by eller land, en tradition fra dit land.",
    skeleton: `[Overskrift]

I denne tekst vil jeg skrive om [emnet].

Først vil jeg fortælle om mine egne erfaringer. [Dig selv / dit land …]

For det første [en fordel / et råd …] For det andet [en til …]

På den ene side [ … ] På den anden side [ … ]

Alt i alt mener jeg, at [din mening].

[dit navn]`,
    marks: ["I denne tekst vil jeg skrive om", "Først vil jeg fortælle", "For det første", "For det andet", "På den ene side", "På den anden side", "Alt i alt mener jeg, at"],
    tip: "\"På den ene side … På den anden side …\" viser både fordele og ulemper – det giver point for organisering."
  },

  // ---------- PD1 (A2): short and simple ----------
  pd1sms: {
    ico: "📱", name: "Sms til en ven",
    use: "PD1: en kort besked til en ven, fx et afbud eller en aftale.",
    skeleton: `Hej [navn]

Undskyld, men [beskeden …]

Kan du [spørgsmål eller forslag]?

Vi ses!

Hilsen [dit navn]`,
    marks: ["Undskyld, men", "Kan du", "Vi ses!", "Hilsen"],
    tip: "En sms er kort. Skriv kun det vigtigste – men husk hilsen i starten og slutningen."
  },
  pd1mail: {
    ico: "✉️", name: "Mail til skolen eller læreren",
    use: "PD1: en kort, høflig mail, fx når dit barn er sygt.",
    skeleton: `Kære [navn]

Jeg skriver, fordi [grunden].

[Mere information …]

Jeg tror, [hvornår …]

Hav en god dag.

Venlig hilsen
[dit navn]`,
    marks: ["Jeg skriver, fordi", "Jeg tror,", "Hav en god dag.", "Venlig hilsen"],
    tip: "Skriv \"Kære …\" til en lærer – det er høfligt og helt normalt på dansk."
  },
  pd1annonce: {
    ico: "🏷️", name: "Annonce: noget til salg",
    use: "PD1: sælg en ting på opslagstavlen eller på nettet.",
    skeleton: `[Ting] sælges!

Jeg sælger [ting]. Den / Det er [farve, størrelse, alder].

Pris: [pris] kr.

Ring eller skriv til [navn] på [telefon].`,
    marks: ["sælges!", "Jeg sælger", "Pris:", "Ring eller skriv til"],
    tip: "\"Den\" om en-ord (en sofa → den), \"det\" om et-ord (et bord → det)."
  },
  pd1tekst: {
    ico: "📝", name: "Kort tekst om dig selv",
    use: "PD1: en kort tekst om din familie, din dag, din bolig …",
    skeleton: `[Overskrift]

Jeg vil fortælle om [emnet].

Først vil jeg fortælle [om / hvem / hvor …]. [Punkt 1 …]

Så vil jeg fortælle [ … ]. [Punkt 2 …]

Til sidst vil jeg fortælle [ … ]. [Punkt 3 …]

Det bedste er, at [ … ]. Jeg er glad for [ … ].`,
    marks: ["Jeg vil fortælle om", "Først vil jeg fortælle", "Så vil jeg fortælle", "Til sidst vil jeg fortælle", "Det bedste er, at", "Jeg er glad for"],
    tip: "Ét afsnit for hvert punkt i opgaven. Så glemmer du ingen af punkterne."
  },

  // ---------- PD3 (B2): formal and argumentative ----------
  pd3klage: {
    ico: "🏛️", name: "Formel klage",
    use: "PD3: en klage til en kommune, en myndighed eller et firma.",
    skeleton: `Til [modtager]

Vedrørende: [emnet]

Jeg henvender mig, fordi [problemet].

[Hvad, hvornår, hvor længe …]

Det har betydet, at [konsekvenserne for dig …]

Jeg har forståelse for, at [ … ]. Men jeg finder det ikke rimeligt, at [ … ].

Jeg skal derfor anmode om, at [dit konkrete forslag].

Jeg ser frem til jeres svar.

Med venlig hilsen
[dit navn]
[adresse]`,
    marks: ["Vedrørende:", "Jeg henvender mig, fordi", "Det har betydet, at", "Jeg har forståelse for, at", "Men jeg finder det ikke rimeligt, at", "Jeg skal derfor anmode om, at", "Jeg ser frem til jeres svar.", "Med venlig hilsen"],
    tip: "\"Jeg har forståelse for … Men …\" viser, at du er saglig og ser begge sider – det gør klagen stærkere."
  },
  pd3ansoegning: {
    ico: "💼", name: "Jobansøgning (formel)",
    use: "PD3: ansøgning om et job, der kræver uddannelse og erfaring.",
    skeleton: `Ansøgning om stillingen som [job]

Med stor interesse har jeg læst jeres stillingsopslag [hvor], og jeg søger hermed stillingen som [job]. [Hvorfor du søger …]

Jeg er uddannet [uddannelse] og har [antal] års erfaring med [ … ].

I mit nuværende job [ … ]

Jeg er kendt for at være [egenskaber], og jeg vil kunne bidrage med [ … ].

Jeg ser frem til at uddybe min ansøgning ved en personlig samtale.

Med venlig hilsen
[dit navn]`,
    marks: ["Ansøgning om stillingen som", "Med stor interesse har jeg læst jeres stillingsopslag", "og jeg søger hermed stillingen som", "Jeg er uddannet", "I mit nuværende job", "Jeg er kendt for at være", "og jeg vil kunne bidrage med", "Jeg ser frem til at uddybe min ansøgning ved en personlig samtale.", "Med venlig hilsen"],
    tip: "Giv konkrete eksempler på din erfaring – tal og resultater overbeviser mere end store ord."
  },
  pd3debat: {
    ico: "📣", name: "Læserbrev / debatindlæg",
    use: "PD3: argumenter for eller imod et forslag i en avis.",
    skeleton: `[Overskrift med din holdning]

[Kort om sagen.] Spørgsmålet er, om [ … ]. Jeg mener, at [din holdning].

For det første [argument 1 + eksempel …]

For det andet [argument 2 + eksempel …]

Modstanderne vil måske hævde, at [modargument]. Det er rigtigt, at [ … ], men [dit svar …]

Sammenfattende mener jeg, at [konklusion]. Derfor foreslår jeg, at [forslag].

[dit navn, by]`,
    marks: ["Spørgsmålet er, om", "Jeg mener, at", "For det første", "For det andet", "Modstanderne vil måske hævde, at", "Det er rigtigt, at", "Sammenfattende mener jeg, at", "Derfor foreslår jeg, at"],
    tip: "Et stærkt indlæg nævner modargumentet – og svarer på det. Brug \"Det er rigtigt, at …, men …\"."
  },
  pd3sammenlign: {
    ico: "⚖️", name: "Sammenlignende tekst",
    use: "PD3: sammenlign to lande, systemer eller måder at leve på.",
    skeleton: `[Overskrift]

I denne artikel vil jeg sammenligne [A] med [B].

I [A] [beskriv A …]

I modsætning til det [beskriv B …]

En fordel ved [ … ] er, at [ … ]. Til gengæld [ … ]

Ligesom i [ … ] [en lighed …]

Efter min mening kunne [A og B] lære af hinanden. [Hvad og hvordan …]

[dit navn]`,
    marks: ["I denne artikel vil jeg sammenligne", "I modsætning til det", "En fordel ved", "Til gengæld", "Ligesom i", "Efter min mening kunne", "lære af hinanden"],
    tip: "Ord til sammenligning: i modsætning til, til gengæld, ligesom, begge, mens, derimod."
  }
};

// Which template each writing task uses (PD2 first, then PD1 and PD3).
PD2.TEMPLATE_FOR = {
  pd1sms: ["pd1-w1"],
  pd1mail: ["pd1-w2"],
  pd1annonce: ["pd1-w3"],
  pd1tekst: ["pd1-w4", "pd1-w5"],
  pd3klage: ["pd3-w1"],
  pd3ansoegning: ["pd3-w2"],
  pd3debat: ["pd3-w3", "pd3-w4"],
  pd3sammenlign: ["pd3-w5"],
  ven: ["w22mc", "w23mc", "w18mc", "w15mc", "w12nc", "w17mc", "w16mc", "w20c", "w19c", "w18c", "w16c", "w14nc", "w14c", "w13nc", "w13c", "w12c", "w1", "w9"],
  klage: ["w22ma", "w12na", "w19a", "w13nb", "w12b", "w2"],
  ansoegning: ["w23mb", "w15mb", "w16mb", "w14b", "w5"],
  institution: ["w3", "w8"],
  anbefaling: ["w17ma", "w16ma", "w19b", "w18a", "w14na", "w13b"],
  opslag: ["w23ma", "w18mb", "w15ma", "w12nb", "w20a", "w20b", "w16a", "w16b", "w14nb", "w13na", "w13a", "w12a"],
  jobannonce: ["w18b"],
  takkebrev: ["w22mb", "w18ma", "w14a"],
  holdning: ["w17mb", "w4", "w6", "w7", "w10", "w11"]
};

// Model answers that follow their template exactly.
PD2.TEMPLATE_MODELS = {
  // ---------- E-mail til en ven ----------
  w19c: `Hej Anders

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om mit kursus, og det vil jeg gerne fortælle dig lidt om.

For det første var jeg på et førstehjælpskursus hos Røde Kors i Odense. Kurset varede to lørdage, og vi var 14 deltagere.

Derudover lærte vi en masse nyttige ting. Vi øvede hjertemassage på en dukke, og vi lærte, hvad man skal gøre, hvis et barn får noget galt i halsen. Instruktøren var dygtig og meget tålmodig.

Til sidst vil jeg sige, at jeg synes, kurset var rigtig godt, fordi jeg nu føler mig mere tryg. Jeg kan varmt anbefale det til dig, især fordi du har små børn.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Fatima`,
  w18c: `Hej Lukas

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om, hvad der har overrasket mig i Danmark, og det vil jeg gerne fortælle dig lidt om.

For det første blev jeg overrasket over, at så mange danskere cykler. Folk cykler på arbejde hele året, også når det regner og blæser. I mit hjemland kører næsten alle i bil eller bus.

Derudover er danskerne meget præcise. Hvis man er inviteret kl. 18, skal man komme kl. 18 og ikke en time senere, som vi gør derhjemme. Det synes jeg faktisk er en god ting.

Til sidst vil jeg sige, at jeg stadig har svært ved det mørke vejr om vinteren. Men jeg elsker de lange, lyse sommeraftener.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Mira`,
  w16c: `Hej Louise

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om, hvorfor jeg vil skifte arbejde, og det vil jeg gerne fortælle dig lidt om.

For det første arbejder jeg lige nu som lagermedarbejder i et stort firma. Jeg har været der i fire år, og jeg har gode kolleger.

Derudover er arbejdet det samme hver dag, og jeg har fået ondt i ryggen af at løfte de tunge kasser. Jeg arbejder også tit om aftenen, så jeg ser ikke så meget til mine børn. Derfor vil jeg gerne skifte.

Til sidst vil jeg sige, at jeg drømmer om et job, hvor jeg kan arbejde med mennesker, fx på et plejehjem. Jeg er begyndt på et kursus om aftenen, og jeg har allerede søgt to job.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Omar`,
  w14nc: `Hej Marie

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om min nye fritidsinteresse, og det vil jeg gerne fortælle dig lidt om.

For det første er jeg begyndt at spille badminton. Jeg spiller i en klub i Vejle hver tirsdag og torsdag aften sammen med min kollega Sara.

Derudover er jeg rigtig glad for det, fordi det er sjovt og giver god motion. Jeg har fået mere energi, og jeg sover meget bedre om natten. Jeg har også fået nye venner i klubben.

Til sidst vil jeg sige, at du er meget velkommen til at komme med en tirsdag og prøve. Hvad laver du selv i din fritid?

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Leila`,
  w14c: `Hej Daniel

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om, hvordan jeg har lært dansk, og det vil jeg gerne fortælle dig lidt om.

For det første gik jeg på sprogskole fire dage om ugen i tre år. Udtalen var det sværeste, fordi danskerne "sluger" mange bogstaver.

Derudover hjalp det mig meget at tale dansk med mine kolleger og naboer. Jeg så også danske tv-serier med danske undertekster.

Til sidst vil jeg sige, at din fætter skal tale dansk hver dag, også selvom han laver fejl. Han kan også melde sig ind i en forening, så han møder nye mennesker.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Ahmed`,
  w13nc: `Hej Jesper

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om min butik og den unge mand, og det vil jeg gerne fortælle dig lidt om.

For det første har jeg åbnet en lille grøntsagsbutik på Nørregade i Aarhus. Jeg sælger frugt, grøntsager og krydderier fra mange lande.

Derudover har jeg ansat en ung mand, der hedder Mikkel. Han er 19 år og er god til at snakke med kunderne. Men der er nogle problemer. Han kommer tit for sent om morgenen, og han bruger meget tid på sin mobiltelefon.

Til sidst vil jeg sige, at jeg vil tale med ham på mandag. Jeg vil forklare, at han skal komme til tiden, og at mobilen skal blive i lommen. Hvis det ikke hjælper, må jeg finde en ny medarbejder.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Hassan`,
  w13c: `Hej Lars

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om vores familiefest, og det vil jeg gerne fortælle dig lidt om.

For det første var det min fars 70-års fødselsdag. Festen blev holdt i et forsamlingshus uden for Odense, og vi var 60 gæster. Hele familien var med, og nogle kom helt fra Tyrkiet.

Derudover spiste vi en dejlig buffet med lam, ris og salater, og til dessert fik vi lagkage. Bagefter holdt vi taler, og vi dansede til langt ud på natten.

Til sidst vil jeg sige, at jeg bedst kunne lide, at hele familien var samlet. Min far var så glad!

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Bilal`,
  w12c: `Hej Thomas

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om, hvordan det var at flytte til Danmark, og det vil jeg gerne fortælle dig lidt om.

For det første vil jeg sige tillykke med dit nye arbejde! Det er rigtig spændende.

Derudover var det svært for mig at komme hertil, fordi jeg ikke kendte nogen, og jeg forstod ikke sproget. Det hjalp mig meget at gå på sprogskole og at få en dansk kollega, som hjalp mig.

Til sidst vil jeg sige, at du skal lære lidt af sproget og prøve at møde nye mennesker. Så bliver det meget nemmere.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Karim`,
  w1: `Hej Peter

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Tak for invitationen til din 40-års fødselsdag. Jeg vil rigtig gerne komme, men desværre kan jeg ikke, fordi min søster bliver gift samme dag.

Kan vi ikke mødes en anden dag og drikke en kop kaffe? Jeg giver kagen!

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Ali`,
  w9: `Hej Inge

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt.

Tusind tak, fordi du passede min kat og tømte min postkasse, mens jeg var på hospitalet. Det var virkelig sødt af dig.

Jeg er kommet hjem, og jeg har det meget bedre nu.

Som tak vil jeg gerne invitere dig på middag hos mig på lørdag kl. 18. Jeg laver min bedste kyllingeret!

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Hassan`,

  // ---------- Klage ----------
  w19a: `Kære Boligforeningen Engparken

Jeg skriver til jer, fordi jeg vil klage over min nabos hund.

Det drejer sig om min nabo, Kim Larsen, som bor ved siden af mig på 2. sal i Engparken 12 i Vejle. Han har en stor hund, som gør hele dagen, når han er på arbejde.

Problemet er, at hunden gør så højt, at jeg ikke kan sove, når jeg har haft nattevagt. Desuden samler Kim ikke op efter hunden på græsplænen, hvor børnene leger.

Jeg har allerede talt med Kim to gange, men det har ikke hjulpet.

Derfor vil jeg gerne bede jer om at tale med ham og minde ham om husordenen.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Sara Ahmadi
Engparken 12, 2. tv.`,
  w13nb: `Kære Restaurant Havblik

Jeg skriver til jer, fordi jeg vil klage over den mad, jeg fik hos jer.

Det drejer sig om lørdag den 9. november, hvor jeg spiste middag hos jer sammen med min kone. Vi fik begge to fiskesuppe og bagefter kylling med kartofler.

Problemet er, at vi blev syge samme nat. Vi kastede op og havde ondt i maven i to dage, og jeg kunne ikke gå på arbejde om mandagen.

Jeg har allerede ringet til jer, men ingen tog telefonen.

Derfor vil jeg gerne bede jer om at betale vores penge tilbage og om at tjekke, om fisken var frisk.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Karim Haddad
Tlf. 31 75 24 60`,
  w12b: `Kære Kvik Ombygning

Jeg skriver til jer, fordi jeg vil klage over det arbejde, jeres håndværkere har lavet i min lejlighed.

Det drejer sig om ugen fra den 2. til den 6. april, hvor jeres håndværkere skulle lave et nyt badeværelse og male mit køkken.

Problemet er, at arbejdet ikke er lavet ordentligt. Der løber vand ud på gulvet, når jeg tager bad, og der er malingpletter på køkkengulvet. Håndværkerne kom også for sent hver dag.

Jeg har allerede ringet til jeres kontor to gange, men ingen er kommet for at se på det.

Derfor vil jeg gerne bede jer om at sende en håndværker, som kan reparere badeværelset og fjerne pletterne, uden at det koster mig noget.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Maria Hansen
Tlf. 28 11 22 33`,
  w2: `Kære TøjNet

Jeg skriver til jer, fordi jeg vil klage over en vinterjakke, som jeg har købt hos jer.

Det drejer sig om en sort dunjakke i størrelse M, som jeg bestilte på jeres hjemmeside den 3. november. Ordrenummeret er 45821, og jakken kostede 899 kr.

Problemet er, at lynlåsen var i stykker, da jeg åbnede pakken. Jeg kan ikke lukke jakken, og derfor kan jeg ikke bruge den, nu hvor det er blevet koldt.

Jeg har allerede prøvet at ringe til jeres kundeservice, men jeg kunne ikke komme igennem.

Derfor vil jeg gerne bede jer om at sende mig en ny jakke så hurtigt som muligt. Hvis I ikke har flere jakker, vil jeg gerne have mine penge tilbage.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Maria Lopez
Tlf. 26 45 78 90`,

  // ---------- Jobansøgning ----------
  w14b: `Kære kantinen på Roskilde Sygehus

Jeg har set jeres jobannonce i avisen, og jeg vil gerne søge stillingen som kantinemedarbejder.

Jeg hedder Samir Haddad, og jeg er 34 år. Jeg er gift og har to børn. Jeg elsker at lave mad, og jeg kan godt lide at arbejde sammen med andre.

Jeg har erfaring med at arbejde i et køkken. I tre år arbejdede jeg i kantinen på et stort kontor, hvor jeg lavede salater og varme retter og tog opvasken.

Jeg tror, at jeg vil være god til jobbet, fordi jeg er stabil, arbejder hurtigt og altid holder køkkenet rent.

I kan kontakte mig på telefon 52 34 67 89.

Jeg håber, at I vil invitere mig til en samtale. Jeg ser frem til at høre fra jer.

Med venlig hilsen
Samir Haddad`,
  w5: `Kære FriskKøb

Jeg har set jeres jobannonce på jobnet.dk, og jeg vil gerne søge stillingen som butiksmedarbejder 25 timer om ugen.

Jeg hedder Ahmed Karimi, og jeg er 29 år. Jeg bor i Vestby sammen med min kone og vores datter, og jeg har gået på sprogskole i tre år.

Jeg har erfaring med at arbejde i en butik. I mit hjemland arbejdede jeg i fem år i min onkels supermarked, hvor jeg fyldte varer op, sad ved kassen og hjalp kunderne.

Jeg tror, at jeg vil være god til jobbet, fordi jeg er venlig, stabil og god til at samarbejde. Jeg vil gerne have jobbet, fordi jeg kan lide at møde mennesker og tale dansk hver dag.

Jeg kan starte den 1. marts. I kan kontakte mig på telefon 31 22 44 66.

Jeg håber, at I vil invitere mig til en samtale. Jeg ser frem til at høre fra jer.

Med venlig hilsen
Ahmed Karimi`,

  // ---------- Mail til en lærer, skole eller kommune ----------
  w3: `Kære Hanne

Jeg skriver til dig, fordi jeg desværre er blevet syg. Jeg har influenza, og lægen siger, at jeg skal blive hjemme hele næste uge.

Kan du fortælle mig, hvilke lektier jeg skal lave, mens jeg er hjemme? Så kan jeg følge med i undervisningen.

Jeg vil også gerne vide, hvilken dato prøven er.

På forhånd tak for hjælpen. Jeg ser frem til at høre fra dig.

Venlig hilsen
Tran`,
  w8: `Kære Vestby Aftenskole

Jeg skriver til jer, fordi jeg har set, at I har et kursus i "Dansk madlavning". Jeg er meget interesseret, fordi jeg gerne vil lære at lave dansk mad til min familie.

Kan I fortælle mig, hvornår og hvor kurset foregår?

Jeg vil også gerne vide, hvad kurset koster, og om maden er med i prisen. Til sidst vil jeg gerne spørge, hvordan jeg tilmelder mig.

På forhånd tak for hjælpen. Jeg ser frem til at høre fra jer.

Venlig hilsen
Leyla Amini`,

  // ---------- Anbefaling ----------
  w19b: `Hotel Strandly – kan varmt anbefales!

Jeg vil gerne anbefale Hotel Strandly, som ligger lige ved stranden i Skagen. Jeg boede der en uge i juli sammen med min familie.

Værelserne er store, lyse og meget rene, og fra vores altan kunne vi se havet. Det bedste ved hotellet er morgenmaden. Der er en stor buffet med frisk brød, frugt, æg og god kaffe.

Desuden er personalet utrolig venligt og hjælpsomt. De gav os gode tips til udflugter, og de hjalp altid med et smil.

Jeg vil anbefale hotellet, fordi det har en dejlig beliggenhed, og fordi man føler sig velkommen. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Ali og familie`,
  w18a: `Sprogcenter Midt – kan varmt anbefales!

Jeg vil gerne anbefale Sprogcenter Midt, som ligger på Banegårdsgade 12 i Viborg, kun fem minutters gang fra banegården.

Undervisningen er god og varieret. Vi taler meget sammen i små grupper, og lærerne er dygtige og tålmodige. Det bedste ved skolen er, at lokalerne er lyse og moderne, og der er computere i alle klasser.

Desuden kan man købe kaffe og billige sandwich i kantinen i pauserne. Man kan også låne bøger i biblioteket eller spille bordtennis med de andre elever.

Jeg vil anbefale skolen, fordi jeg har lært meget dansk på kort tid, og fordi der er en rigtig god stemning. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Ahmad, elev på modul 4`,
  w14na: `"Den hundredårige" – kan varmt anbefales!

Jeg vil gerne anbefale filmen "Den hundredårige der kravlede ud ad vinduet og forsvandt". Det er en svensk komedie fra 2013.

Filmen handler om Allan, som fylder 100 år. Han har ikke lyst til at holde fødselsdag på plejehjemmet, så han kravler ud ad vinduet og stikker af. På sin rejse oplever han mange sjove og skøre ting.

Det bedste ved filmen er, at den er meget sjov, men også lidt rørende. Desuden er skuespillerne rigtig gode.

Jeg vil anbefale filmen, fordi man griner hele tiden. Man kan låne den på DVD på biblioteket. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Maria fra hold 3`,
  w13b: `Trattoria Luna – kan varmt anbefales!

Jeg vil gerne anbefale Trattoria Luna, som ligger på Vestergade 8 i Aarhus. Jeg var der sidste lørdag sammen med min mand.

Vi spiste en lækker pizza og en pasta med rejer, og til dessert fik vi tiramisu. Det kostede 380 kr. for os begge to med drikkevarer, og det synes jeg er en fin pris.

Det bedste ved restauranten er tjenerne. De var søde og hurtige, og de hjalp os med at vælge en god vin.

Desuden er restauranten hyggelig med levende lys og italiensk musik.

Jeg vil anbefale Trattoria Luna, fordi maden er god, og priserne er rimelige. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Leila, hold 3B`,

  // ---------- Opslag / efterlysning ----------
  w16a: `Kom med på tur til København!

Hej alle sammen

Jeg hedder Nadia, og jeg skriver, fordi jeg gerne vil arrangere en tur for vores hold lørdag den 8. april. Vi har lært meget om danske seværdigheder, og det ville være sjovt at se dem sammen.

Vi tager toget fra Roskilde kl. 9.15. I København skal vi se Den Lille Havfrue og Amalienborg, og bagefter sejler vi en tur i kanalerne.

Det koster 250 kr. at deltage. Togbillet, kanalrundfart og frokost er med i prisen.

Hvis du vil med, så ring eller skriv til mig på 22 33 44 55 senest fredag den 31. marts.

På forhånd tak!

Mange hilsner
Nadia`,
  w16b: `Værelse til leje i Aalborg!

Hej alle sammen

Jeg hedder Leila, og jeg skriver, fordi jeg gerne vil leje et værelse ud i min lejlighed på Vesterbro i Aalborg.

Værelset er 16 m² og har udsigt over parken. Lejligheden er på 95 m² og har et stort køkken, en hyggelig stue og en altan, som vi deler.

Huslejen er 3.200 kr. om måneden inklusive varme, vand og internet.

Jeg er 34 år, arbejder som laborant og er ikke-ryger. Jeg vil gerne leje værelset ud, fordi lejligheden er for stor til mig alene.

Hvis du er interesseret, så ring eller skriv til mig på 27 38 49 50.

På forhånd tak!

Mange hilsner
Leila`,
  w14nb: `Vidner søges!

Hej alle sammen

Jeg hedder Ahmed Karimi, og jeg skriver, fordi en bil kørte ind i min bil og derefter kørte væk.

Det skete lørdag den 15. november ca. kl. 14 på parkeringspladsen ved Føtex i Holstebro.

Det var en lille rød bil, måske en Toyota, med en hvid tagboks. Den fik en bule på højre side.

Min bil fik en stor bule i døren, og baglygten gik i stykker. Det koster mange penge at reparere, og derfor vil jeg gerne i kontakt med bilens ejer.

Hvis du har set noget, så ring eller skriv til mig på 41 22 33 44.

På forhånd tak!

Mange hilsner
Ahmed Karimi`,
  w13na: `Lejlighed søges!

Hej alle sammen

Jeg hedder Ana Silva, og jeg skriver, fordi jeg søger en ny lejlighed.

Jeg er 32 år og arbejder som sygeplejerske på hospitalet. Jeg bor sammen med min datter på 6 år.

Vi har brug for en ny lejlighed, fordi vores lejlighed kun har ét værelse, og min datter skal snart begynde i skole. Hun skal have sit eget værelse.

Jeg vil gerne have en lejlighed med to værelser og gerne en altan. Den skal helst ligge i Odense tæt på en skole, og huslejen må højst være 6.000 kr. om måneden.

Hvis du kender en lejlighed, så ring eller skriv til mig på 28 47 19 36.

På forhånd tak!

Mange hilsner
Ana Silva`,
  w13a: `Musikere søges!

Hej alle sammen

Jeg hedder Diego, og jeg skriver, fordi jeg gerne vil finde nogen at spille musik sammen med.

Jeg er 28 år og kommer fra Chile. Jeg har spillet guitar i ti år, og jeg elsker rock og latinamerikansk musik.

Jeg har spillet i et band i mit hjemland, og jeg savner at spille sammen med andre. Det er meget sjovere end at spille alene.

Vi kan øve i kælderen her i opgangen hver onsdag aften fra kl. 19 til 21. Der er plads til trommer og forstærkere.

Hvis du spiller et instrument eller synger, så ring eller skriv til mig på 30 12 45 67.

På forhånd tak!

Mange hilsner
Diego, 2. tv.`,
  w12a: `Tur i skoven for hele opgangen!

Hej alle sammen

Jeg hedder Amir, og jeg skriver, fordi jeg gerne vil arrangere en tur ud i naturen for os, der bor i opgang 12.

Vi skal til Rold Skov søndag den 14. maj. Vi mødes foran opgangen kl. 10 og kører sammen i biler.

På turen skal vi gå fem kilometer, se på fugle og spise madpakker ved søen. Børnene kan lege og samle kogler.

Husk at tage gode sko og regntøj på, og tag en madpakke og noget at drikke med.

Hvis du vil med, så ring eller skriv til mig på 22 44 66 88 senest onsdag den 10. maj.

På forhånd tak!

Mange hilsner
Amir, 3. th.`,

  // ---------- Jobannonce ----------
  w18b: `Butiksmedarbejder søges!

Vi søger en butiksmedarbejder til Grøn & Frisk, som ligger på Algade 22 midt i Roskilde.

Om os: Vi er en lille grøntsagsbutik, der sælger økologiske frugter og grøntsager, brød og ost fra lokale producenter. Vi har åbent mandag-fredag kl. 9-18 og lørdag kl. 9-14.

Dine opgaver bliver at betjene kunderne, sidde ved kassen, pakke varer ud og holde butikken pæn og ren.

Vi forventer, at du er glad, venlig og god til at tale med kunderne. Du skal tale og forstå dansk.

Arbejdstiden er 30 timer om ugen, og du skal arbejde hver anden lørdag.

Hvis du er interesseret, så send en ansøgning til job@groenogfrisk.dk senest den 15. januar.

Vi glæder os til at høre fra dig!

Med venlig hilsen
Sofia Hansen, ejer`,

  // ---------- Takkebrev ----------
  w14a: `Kære alle i Børnehaven Solstrålen

Tusind tak for en rigtig god tid hos jer. Jeg har været så glad for mine otte uger i praktik.

Jeg har lært meget om, hvordan man taler med børn, og hvordan man hjælper dem, når de er kede af det. Jeg har også lært mange nye danske ord og sange.

Jeg kommer til at savne børnene og alle de sjove timer på legepladsen. Jeg kommer også til at savne vores hyggelige frokoster i personalestuen.

Nu skal jeg tilbage på skolen og gøre min uddannelse færdig. Jeg vil gerne komme på besøg til jeres sommerfest i juni.

Endnu en gang tusind tak for alt. Jeg håber, at vi ses snart!

Mange hilsner
Fatima`,

  // ---------- Tekst til et blad eller en avis ----------
  w4: `Nytår i Iran – Nowruz

I denne tekst vil jeg skrive om Nowruz, som er nytår i Iran.

Først vil jeg fortælle, hvad Nowruz er. Vi fejrer nytår den 20. eller 21. marts, når foråret begynder. Festen varer i 13 dage, og de fleste har fri fra skole og arbejde.

For det første gør vi rent i hele huset, og vi køber nyt tøj. For det andet dækker vi et bord med syv ting, som begynder med bogstavet "s", fx æbler og hvidløg. De betyder held og sundhed. Vi besøger også familien og spiser god mad sammen. Det, jeg bedst kan lide ved Nowruz, er, at hele familien er samlet og har tid til hinanden.

På den ene side minder Nowruz lidt om dansk jul, fordi familien er sammen, og man giver gaver. På den anden side fejrer danskerne nytår om vinteren med fyrværkeri og champagne.

Alt i alt mener jeg, at begge fester er dejlige, og nu fejrer jeg både dansk nytår og Nowruz.

Reza`,
  w6: `Hjemmearbejde – ja tak, men ikke hver dag

I denne tekst vil jeg skrive om hjemmearbejde.

Først vil jeg fortælle om mine egne erfaringer. Jeg arbejder som bogholder, og de sidste par år har jeg arbejdet hjemme to dage om ugen.

For det første er der mange fordele ved hjemmearbejde. Man sparer tid og penge på transport, og det er nemmere at koncentrere sig, fordi der er ro. For det andet er det lettere at nå at hente børnene.

På den ene side er det dejligt at arbejde hjemme. På den anden side kan man føle sig ensom, fordi man ikke ser sine kolleger. Det kan også være svært at holde fri, når computeren står i stuen.

Alt i alt mener jeg, at det er bedst at blande. Hvis man arbejder hjemme en eller to dage om ugen, får man det bedste fra begge verdener. Derfor synes jeg, at de ansatte selv skal have lov til at vælge.

Lina`,
  w7: `Mit drømmested

I denne tekst vil jeg skrive om, hvor jeg helst vil bo.

Først vil jeg fortælle om mine egne erfaringer. Jeg bor i en lejlighed på tredje sal midt i Odense sammen med min datter. I mit hjemland boede jeg i et stort hus på landet med min familie, og vi havde en stor have med frugttræer.

For det første er der mange fordele ved at bo i byen. Der er kort til arbejde, skole og butikker, og der sker altid noget. For det andet er der gode busser, så man behøver ikke en bil.

På den ene side er byen praktisk. På den anden side er der meget larm og trafik, og der er ikke så meget natur. På landet er der ro og frisk luft, men man skal køre langt for at handle.

Alt i alt mener jeg, at det bedste er et lille hus lidt uden for byen. Så kan min datter lege i haven, og vi kan stadig cykle ind til byen.

Hana`,
  w10: `Et godt job

I denne tekst vil jeg skrive om, hvad et godt job er for mig.

Først vil jeg fortælle om mine egne erfaringer. Jeg arbejder som rengøringsassistent på et kontor. Jeg har gode kolleger, men arbejdet er hårdt for ryggen.

For det første skal et godt job være spændende, så man lærer noget nyt. For det andet er det vigtigt med søde kolleger og en chef, der lytter.

På den ene side er en god løn vigtig, fordi man skal kunne betale husleje og mad. På den anden side er arbejdsmiljøet vigtigst for mig, fordi man er på arbejde mange timer hver dag. Hvis man ikke trives på arbejdet, bliver man syg og ked af det.

Alt i alt mener jeg, at et godt job er et job, hvor man har det godt med sine kolleger. Mit drømmejob er at blive sygeplejerske, fordi jeg gerne vil hjælpe andre mennesker.

Yonas`,
  w11: `Små ændringer giver store besparelser

I denne tekst vil jeg skrive om, hvordan man kan spare penge i hverdagen.

Først vil jeg fortælle om mine egne erfaringer. Min familie laver en madplan hver søndag, og vi handler kun ind én gang om ugen. Så køber vi ikke ting, vi ikke har brug for.

For det første er mit gode råd, at man skal sammenligne priser og købe varer på tilbud. For det andet kan man spare rigtig meget ved at slukke lyset og tage kortere bade.

På den ene side er det smart at købe brugte ting, fx tøj og møbler, fordi de er billige og gode for miljøet. På den anden side kan brugte ting gå hurtigere i stykker, og der er ingen garanti.

Alt i alt mener jeg, at det vigtigste er at planlægge. Hvis man har overblik over sine penge, kan små ændringer give store besparelser.

Amal`,

  // ---------- PD1 ----------
  "pd1-w1": `Hej Jonas

Undskyld, men jeg kan ikke komme til fodbold i aften. Min søn er syg, og jeg skal passe ham.

Kan du spille på torsdag i stedet? Jeg har fri kl. 16.

Vi ses!

Hilsen Ali`,
  "pd1-w2": `Kære Karen

Jeg skriver, fordi min datter Amina er syg i dag. Hun går i 2.B.

Hun har feber og ondt i halsen, så hun skal blive hjemme.

Jeg tror, hun kommer i skole igen på torsdag.

Hav en god dag.

Venlig hilsen
Fatima`,
  "pd1-w3": `Sofa sælges!

Jeg sælger min grå sofa til tre personer. Den er fem år gammel og i god stand. Den er 2 meter lang.

Pris: 800 kr. Du skal selv hente den.

Ring eller skriv til Maria på 22 33 44 55.`,
  "pd1-w4": `Min familie

Jeg vil fortælle om min familie.

Først vil jeg fortælle, hvem vi er. Min familie består af min mand, mine to børn og mig. Min søn hedder Adam, og han er otte år. Min datter hedder Lina, og hun er fem år.

Så vil jeg fortælle, hvor vi bor. Vi bor i en lejlighed i Aalborg med tre værelser og en lille altan.

Til sidst vil jeg fortælle, hvad vi laver sammen. I weekenden går vi tit en tur i parken, eller vi besøger mine forældre. Om aftenen spiser vi altid sammen.

Det bedste er, at vi griner meget sammen. Jeg er glad for min familie.`,
  "pd1-w5": `Min dag

Jeg vil fortælle om en almindelig dag i mit liv.

Først vil jeg fortælle om morgenen. Jeg står op kl. 6.30. Jeg drikker en kop te og spiser morgenmad med mine børn. Kl. 7.45 cykler jeg på arbejde. Jeg arbejder i et køkken på et plejehjem.

Så vil jeg fortælle om eftermiddagen. Jeg henter børnene, og bagefter handler vi ind. Så laver jeg aftensmad.

Til sidst vil jeg fortælle om aftenen. Jeg laver lektier til sprogskolen, og jeg ser lidt tv. Jeg går i seng kl. 22.

Det bedste er, at vi er sammen hele familien om aftenen. Jeg er glad for min dag.`,

  // ---------- PD3 ----------
  "pd3-w1": `Til Teknik og Miljø, Vestby Kommune

Vedrørende: Støj fra byggeriet på Søndergade 12

Jeg henvender mig, fordi byggeriet ved siden af min lejlighed på Søndergade 14 giver store problemer for mig og mine naboer.

Siden den 1. marts er arbejdet startet hver morgen kl. 6, og de seneste tre lørdage har der også været boret og banket fra morgen til aften. Larmen fra maskinerne er så kraftig, at vi hverken kan sove eller tale sammen indendørs.

Det har betydet, at min søn på to år vågner hver morgen længe før tid, og at jeg selv er træt, når jeg møder på arbejde. Flere af mine naboer, som arbejder om natten, har det endnu sværere.

Jeg har forståelse for, at byggeriet skal gøres færdigt. Men jeg finder det ikke rimeligt, at der larmes så tidligt og i weekenden.

Jeg skal derfor anmode om, at kommunen undersøger sagen og sørger for, at arbejdet tidligst starter kl. 7 på hverdage og ikke foregår i weekenden.

Jeg ser frem til jeres svar.

Med venlig hilsen
Nadia Rahimi
Søndergade 14, 2. tv.`,
  "pd3-w2": `Ansøgning om stillingen som kommunikationsmedarbejder

Med stor interesse har jeg læst jeres stillingsopslag på jobportalen, og jeg søger hermed stillingen som kommunikationsmedarbejder. Jeg brænder for at gøre information let at forstå, og jeg ved, hvor vigtigt det er, at beboerne føler sig hørt.

Jeg er uddannet journalist med en kandidatgrad fra universitetet i Teheran og har fem års erfaring fra en lokal avis. Siden jeg kom til Danmark i 2021, har jeg desuden været frivillig redaktør på et nyhedsbrev for en forening med over 500 medlemmer. Her skriver jeg artikler, opdaterer hjemmesiden og laver opslag på sociale medier.

I mit nuværende job som kundeservicemedarbejder har jeg lært at håndtere henvendelser fra mange forskellige mennesker, også når de er utilfredse. Jeg taler dansk, engelsk og persisk, hvilket kan være en fordel i jeres boligområder, hvor mange beboere har en anden baggrund end dansk.

Jeg er kendt for at være struktureret og nysgerrig, og jeg vil kunne bidrage med klare tekster og en god dialog med beboerne. Jeg arbejder godt både selvstændigt og i teams, og jeg er ikke bange for at ringe på en dør eller stille mig op til et beboermøde.

Jeg ser frem til at uddybe min ansøgning ved en personlig samtale.

Med venlig hilsen
Reza Ahmadi`,
  "pd3-w3": `Gratis busser er en god investering

Forslaget om at gøre den offentlige transport gratis har skabt stor debat her i byen. Spørgsmålet er, om det er pengene værd. Jeg mener, at det er en god idé, og jeg vil gerne forklare hvorfor.

For det første vil gratis transport få flere til at lade bilen stå. Det vil mindske trafikken i myldretiden og reducere CO2-udslippet. Hvis vi mener det alvorligt med den grønne omstilling, må vi gøre det klimavenlige valg til det nemmeste valg. Et godt eksempel er Tallinn i Estland, hvor den offentlige transport har været gratis for byens indbyggere siden 2013, og hvor flere nu tager bussen.

For det andet er transport en stor udgift for mange familier. En studerende eller en pensionist med en lille indkomst kan i dag bruge flere hundrede kroner om måneden på buskort. Gratis transport vil give dem større frihed til at tage på arbejde, besøge familie og deltage i fritidsaktiviteter. Det handler om lige muligheder for alle.

Modstanderne vil måske hævde, at det bliver for dyrt for kommunen, og at pengene skal findes andre steder, for eksempel i ældreplejen. Det er rigtigt, at forslaget koster penge, men billetsystemer, kontrol og administration koster også meget. Desuden sparer samfundet penge, når der kommer færre trafikuheld og mindre luftforurening.

Sammenfattende mener jeg, at gratis offentlig transport er en investering i både klimaet og et mere lige samfund. Derfor foreslår jeg, at byrådet i det mindste starter med et forsøg i et par år, så vi kan se, om det virker.

Mohammed Saleh, Vestby`,
  "pd3-w4": `Ja til mobilfri skoletid

I dag har næsten alle elever fra 4. klasse og opefter en smartphone i lommen. Mange lærere fortæller, at telefonerne forstyrrer undervisningen, og at eleverne sidder med skærmen i frikvartererne i stedet for at lege eller tale sammen. Spørgsmålet er, om mobiltelefoner bør forbydes i hele skoletiden. Jeg mener, at et forbud er en god idé.

For det første giver et forbud eleverne ro til at koncentrere sig. Min datter fortæller, at hun føler sig presset til hele tiden at svare på beskeder, også mens hun er i skole. Flere undersøgelser viser desuden, at elever lærer mere, når telefonen ikke ligger på bordet.

For det andet får børnene mulighed for at være sammen uden en skærm imellem sig. Frikvartererne bliver igen tid til leg, bevægelse og samtale. Mange børn bruger allerede flere timer om dagen foran en skærm derhjemme, så skolen bør være et frirum.

Modstanderne vil måske hævde, at telefonen også kan bruges fornuftigt, for eksempel til at søge information eller lave video i undervisningen. Det er rigtigt, at telefonen kan være et nyttigt redskab, men skolen har computere, som kan bruges til det samme. Nogle forældre er også bekymrede for, at de ikke kan få fat i deres barn, men skolen har en telefon på kontoret.

Sammenfattende mener jeg, at fordelene ved et forbud er større end ulemperne. Derfor foreslår jeg, at telefonerne bliver låst inde i et skab om morgenen og først udleveres, når skoledagen er slut. Det er en enkel løsning, som allerede bruges på flere skoler med gode resultater.

Lise Hansen, forælder`,
  "pd3-w5": `To skoler – to tankegange

I denne artikel vil jeg sammenligne skolen i mit hjemland, Ukraine, med den danske skole.

I Ukraine sidder eleverne på rækker, og læreren taler det meste af tiden. Man lægger stor vægt på faglig viden, og eleverne lærer meget udenad og har mange prøver. Disciplinen er streng, og det er sjældent, at eleverne arbejder sammen i grupper.

I modsætning til det fokuserer den danske skole på samarbejde, selvstændighed og trivsel. Børnene arbejder i grupper, og de kalder læreren ved fornavn. Min søn lærer at diskutere og at give sin mening til kende, og han glæder sig til at komme i skole.

En fordel ved det ukrainske system er, at børnene får et solidt grundlag i fag som matematik og fysik. Til gengæld er der ikke så meget plads til at stille spørgsmål eller være kreativ. I Danmark savner jeg dog nogle gange, at der bliver stillet lidt flere krav, især i matematik.

Ligesom i Danmark er uddannelse gratis i Ukraine, og begge lande ser uddannelse som vejen til et godt liv. Men i Danmark kan man også få SU, mens man studerer, og det gør det lettere for unge fra fattige familier at tage en lang uddannelse.

Efter min mening kunne de to lande lære af hinanden. Den danske skole kunne være mere ambitiøs fagligt, mens den ukrainske skole kunne give eleverne mere frihed og ansvar. Det bedste ville være en skole, hvor børnene både lærer meget og har det godt. Så ville flere børn få lyst til at lære.

Olena Kovalenko`
};

// Attach the template and the template model answer to each writing task in every exam.
(function () {
  const all = PD2.EXAMS ? Object.values(PD2.EXAMS).flatMap(E => E.WRITING) : PD2.WRITING;
  Object.entries(PD2.TEMPLATE_FOR).forEach(([tpl, ids]) => ids.forEach(id => {
    const w = all.find(x => x.id === id);
    if (!w) return;
    w.tpl = tpl;
    if (PD2.TEMPLATE_MODELS[id]) w.model = PD2.TEMPLATE_MODELS[id];
  }));
  Object.entries(PD2.TEMPLATES).forEach(([id, t]) => { t.id = id; });
})();
