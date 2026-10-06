// Prøve i Dansk 2, maj-juni 2013 – transcribed from the scanned exam papers.
// Included: læseforståelse opgave 1-5, skriftlig fremstilling and the oral pictures
// for delprøve 2 (illustrations by Niels Roland, cropped from the scans).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 maj-juni 2013";
  const books = [
    ["Rådhusklatreren", "af Kim Blæsbjerg", "Fabulerende familiekrønike fra det 20. århundrede med William Lundstrøm, hans forfædre tre generationer tilbage og historien som omdrejningspunkt.", "Udgivet: 2007 · Forlag: Valby: Borgen · Sidetal: 385"],
    ["Engelshjerte", "af Maria Helleberg", "Som ganske ung forelsker Anne Sophie Reventlow sig i kong Frederik IV. Han gifter sig med hende til venstre hånd, og senere bliver hun dronning af Danmark.", "Udgivet: 2010 · Forlag: Samleren · Sidetal: 283"],
    ["Kvinden fra Alexandria", "af Lars Bonnevie", "Historisk roman om begivenhederne i Alexandria i året 415 efter Kristus, hvor gnidningerne mellem kristne, jøder og hedninge er ved at føre til borgerkrig.", "Udgivet: 2002 · Forlag: Per Kofod · Sidetal: 264"],
    ["Hollænderen", "af Hugo Hørlych Karlsen", "En gammel sømand vender i 1657 hjem til Sønderho på Fanø for at opsøge sin ungdoms elskede.", "Udgivet: 2008 · Forlag: Hovedland · Sidetal: 160"],
    ["Worm", "af Carl Jørgen Carlsen", "Den fantasifulde og kunstnerisk begavede Peter Worm kommer i 1835 til København for at finde lykken, men i guldalderens København er arbejdsløsheden stor.", "Udgivet: 2005 · Forlag: Holkenfeldt 3 · Sidetal: 325"],
    ["Vi, de druknede", "af Carsten Jensen", "En beretning om 4 generationer af sømænd fra skipperbyen Marstal i det 19. århundrede, som satte livet på spil på verdenshavene, og om konsekvenserne for de efterladte.", "Udgivet: 2006 · Forlag: Gyldendal · Sidetal: 693"],
    ["Zarens dværg", "af Peter Fogtdal", "Dværgen Sørine Bentsdatter hyres til at underholde ved Peter den Stores besøg i Danmark 1716 og foræres efterfølgende til zaren, der tager hende med til Rusland.", "Udgivet: 2006 · Forlag: People's Press · Sidetal: 281"],
    ["Sankt Agathes nat", "af Gunnar Jensen", "Året er 1259. Kristoffer den Første og Margrete Sambiria – kaldet Sprænghest – krones som konge og dronning af Danmark, men andre gør krav på tronen, og år med vold, drab og borgerkrig følger.", "Udgivet: 2001 · Forlag: Højbjerg: Hovedland · Sidetal: 202"],
    ["Druknehuset", "af Maria Helleberg", "Historisk roman – Storpolitik og småkårsfolk mødes i København i 1807, da den norske betjent Evensen sættes på sagen om et vådt lig, der er placeret på finansminister Ernst Schimmelmanns dørtrin.", "Udgivet: 2008 · Forlag: Samleren · Sidetal: 398"],
    ["Signe", "af Lars Johansson", "I 1940'erne møder danske Signe Gondrup sit livs kærlighed. Han er tysker og bliver i 1945 stemplet som krigsforbryder.", "Udgivet: 2006 · Forlag: Gyldendal · Sidetal: 592"],
    ["Healeren: en romersk beretning", "af Erik Juul Clausen", "Rygter om en omrejsende healer får kejser Tiberius til at sende forfatteren Publius Naso og hans hustru Clodia til Palæstina.", "Udgivet: 2002 · Forlag: Hovedland · Sidetal: 413"],
    ["Lysets tøven", "af Mogens Lehmann", "Historisk roman om astronomen Ole Rømer, hans arbejde for den franske konge, hvor han opdager lysets tøven, og hans liv i Danmark, hvor han tilkaldes af Christian V.", "Udgivet: 2001 · Forlag: Rosenkilde · Sidetal: 312"],
    ["Vor Frues sorte søndag", "af Birgitte Jørkov", "Enken og købmanden Elne Jeps er en personlighed i 1400-tallets Helsingør. Sammen med munken og bygmesteren Johan finder hun både kærligheden og løsningen på en forsvunden formue.", "Udgivet: 2001 · Forlag: Højbjerg: Hovedland · Sidetal: 256"],
    ["Ingeborg: dansk prinsesse, dronning af Frankrig", "af Niels Levinsen", "Historisk roman om den danske prinsesse Ingeborg (ca. 1175-1236), der blev fransk dronning, men kom i unåde hos kongen og tilbragte tyve år i fangenskab, inden Filip August genindsatte hende på tronen.", "Udgivet: 2001 · Forlag: Holkenfeldt 3 · Sidetal: 164"],
    ["Noget fremmed", "af Lars Kjædegaard", "Den invalide krigsveteran Rasmus vender i 1864 tilbage til Helsingør, en by under voldsom forvandling, hvor den gamle overklasse er i konflikt med et nyt jødisk handelsborgerskab.", "Udgivet: 2004 · Forlag: Lindhardt og Ringhof · Sidetal: 330"],
    ["Den amerikanske sømand", "af Karsten Lund", "En skibbruden amerikaner gør sin redningsmand, den driftige fiskerkone Ane, gravid – og forsvinder sporløst.", "Udgivet: 2007 · Forlag: Gyldendal · Sidetal: 324"],
    ["Madonna-maleren", "af Jette Kjærboe", "Antonio kommer i 1160 til Sjælland for at udsmykke en landsbykirke og forelsker sig i herremandens Ingegerd. Deres unge kærlighed får tragiske følger, men efter mange år følger hævnen.", "Udgivet: 2001 · Forlag: Gyldendal · Sidetal: 205"],
    ["Purpur", "af Vibeke Løkkeberg", "Purpurfarversken Anna bliver gift med Pave Pius' livvagt og befinder sig i magtens centrum, indtil inkvisitionen rækker sine fangarme ud efter hende.", "Udgivet: 2003 · Forlag: Hovedland · Sidetal: 253"],
    ["Den lukkede bog", "af Jette A. Kaarsbøl", "En ensom kvinde fortæller i 1933 om et spændende, men svært liv. Det begyndte i 1870'erne med ægteskabet med den karismatiske fødselslæge Frederik Faber og mødet med tidens kulturpersonligheder.", "Udgivet: 2005 · Forlag: Gyldendal · Sidetal: 534"],
    ["Ragnhilds saga", "af Lone Mikkelsen", "Ragnhild Skjaldedatter lever i den sene vikingetid og er meget bevidst om slægten og de gamle guders betydning.", "Udgivet: 2010 · Forlag: Samleren · Sidetal: 205"]
  ];

  const opg1 = {
    id: "p13-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvad var Tøjhusgades gamle navn?\" – Bag Slottet.",
    sections: [
      {
        heading: "Gamle gader – nye navne",
        cards: [
          { title: "Om listen", body: "Listen er udarbejdet fra ældre kilder og dækker tiden frem til 1931. Vær opmærksom på, at gader og veje kan have ændret navn siden da.\nGammelt navn – år – nyt navn" },
          { title: "A", body: "Aagade (del af) – 1897 – Aaboulevarden (del af)\nAalekistevej (nordre del) – 1927 – Slotsherrensvej\nAbsalonsgade (Sundbyerne) – 1901 – Kurlandsgade\nAdelersborggade – 1925 – Landskronagade (del af)\nAdelgade (del af) – 1926 – Gammelvagt\nAdolphsensgade – 1925 – Taasingegade\nAhorns Allé – 1901 – Samosvej\nAkademigade – 1869 – Fredericiagade (del af)\nAldershvilevej – 1926 – Willumsvej\nAlfred Sørensens Allé – 1925 – Ætnavej\nAmagerbro – 1902 – Amagerbrogade (v. Chr.havn)\nAmagervej – 1890 – Amagerbrogade (del af)\nJ. Andersens Parcelvej – 1889 – Solbjergvej\nAntoniestræde – 1901 – Antonigade\nAsylgade (Valby) – 1914 – Ll. Skolegade" },
          { title: "B (1)", body: "Backers Allé – 1924 – Livornovej\nBadevej – 1886 – Knudsgade (1907: Eskildsgade)\nBag Børsen – 1869 – Slotsholmsgade\nBag Hovedvagten – 1874 – gaden nedlagt og bebygget\nBag Slottet – 1825 – Tøjhusgade\nBag Søndermarken – 1903 – Sdr. Fasanvej (syd f. Roskildev.)\nBagergade – 1915 – Blaagaards Plads (del af)\nBaggesens Allé – 1926 – Katholmvej\nBakkegaardsvej (Vesterbro) – 1883 – Ny Carlsberg Vej\nBakkegaardsvej (Brønshøj) – 1927 – Næsbyholmvej (del af)\nBalsamgade – 1897 – Olfert Fischers Gade (del af)\nBangs Anlæg – 1869 – Peter Bangsvej (del af)\nBarkmøllevej (også Blegdamsvej) – 1858 – Guldbergsgade\nBatterivej – 1886 – Viborggade\nBenkogerivej – 1917 – Dalslandsgade (del af)\nBennekevej – 1928 – Gyritegade\nBeringsgade – 1907 – Jens Munksgade\nBernstorffsvej (Frd.berg) – 1928 – Danasvej (del af)" },
          { title: "B (2)", body: "Bianco Lunos Sideallé – 1879 – Grundtvigsvej\nBispebjerg Sidevej – 1922 – nedlagt\nBjarkes Allé – 1928 – Lotusvej\nBjørnegade – 1900 – Fredericiagade (64-82)\nBlaagaards Brogade – 1862 – Evaldsgade\nBlaagaards Korsvej – 1859 – Korsgade\nBlaagaards Slotsgade – 1858 – Slotsgade\nBlaagaardsvej (Blaagaards Langvej) – 1859 – Blaagaardsgade\nBlaagaards Østergade – 1859 – Vesselsgade\nBlaastjernevej – 1924 – Andemosevej\nBiancogade – 1869 – Fredericiagade (del af)\nBlegedamsstræde – 1928 – Irmingersgade\nLl. Blegdamsvej (Nørrebro) – 1858 – Guldbergsgade\nLl. Blegdamsvej (Østerbro) – 1930 – Paa Blegdammen\nBringstrupvej – 1928 – Islevhusvej (del af)\nBryggerlængen – 1897 – Olfert Fischers gade (del af)\nBrynhildes Allé – 1926 – Stenlandsvej\nLl. Brøndstræde – 1910 – nedlagt\nSt. Brøndstræde – 1909 – nedlagt\nBygaards Allé – 1926 – Børglumvej (del af)\nBülowsvej (Sundbyerne) – 1901 – Finlandsgade" }
        ],
        source: "Kilde: Gamle gader – nye navne / www.sa.dk"
      },
      {
        heading: "Historiske romaner",
        cards: books.map(([t, a, b, f]) => ({ title: t, sub: a, body: b, facts: f })),
        source: "Kilde: Litteratursiden.dk – Historiske romaner"
      },
      {
        heading: "Ikast-Brande Kommune – Bus- og regionalruter",
        cards: [
          { title: "Busruter", body: "Rute 170: Ejstrupholm - Rørbæk Sø - Nr. Snede - Hampen - St. Thorlund - Ejstrupholm\nRute 171: Ikast - Tulstrup - Faurholt - Munklinde\nRute 172: Ikast - Bording - Engesvang - Pårup - Christianshede\nRute 173: Bording Skole\nRute 174: Bording Skole - Bording Kirkeby - Munklinde - Agerskov - Stubkær - Bording Kirkeby - Bording\nRute 175: Nordre Skole\nRute 176: Engesvang - Bording - Christianshede\nRute 177 - 178 - 179: Bording - Engesvang - Bording\nRute 180: Isenvad Skole - Vestre Skole\nRute 181: Nr. Snede - Klovborg - Boest - Gl. Hampen\nRute 182: Ikast - Gludsted - Hampen - Nr. Snede - Klovborg\nRute 184: Nr. Snede - Klovborg - Nr. Snede\nRute 185: Ejstrupholm - Gludsted - Ejstrupholm\nRute 186: Ejstrupholm - Hygild (10-11)\nRute 190: Ikast - Ejstrupholm - Brande - Uhre - Blåhøj\nRute 191: Brande - Ejstrupholm - Nr. Snede - Klovborg\nRute 192: Uhre - Blåhøj\nRute 193: Brande - Uhre - Brande\nRute 195: Brande - Blåhøj - Brande\nRute 196: Brande - Drantum - Dørslund - Brande" },
          { title: "Regionalruter", body: "Rute 11: Herning - Arnborg - Skarrild - Karstoft\nRute 19: Herning - Hammerum - Fasterholt\nRute 116: Horsens - Nr. Snede - Herning\nRute 130: Ikast - Hammerum - Gjellerup - Sunds - Ilskov\nRute 372: Simmel - Møbjerg - Engebæk - Sønder Omme\nRute 508: Thyregod - Tørring\nRute 509: Ejstrupholm - Nr. Snede - Brædstrup\nRute 913X: Aarhus - Silkeborg - Grindsted - Esbjerg\nRute 926X: Thisted - Nykøbing - Skive - Viborg - Vejle\nRute 952X: (Hvide Sande) - Ringkøbing - Herning - Aarhus" }
        ],
        source: "Kilde: Ikast-Brande Kommune / Bus og tog"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvad var Lotusvejs gamle navn?", accept: ["bjarkes allé", "bjarkes alle", "bjarkes"] },
      { type: "short", n: 2, q: "Hvad hedder den bog, der handler om fiskerkonen Ane?", accept: ["den amerikanske sømand", "amerikanske sømand"] },
      { type: "short", n: 3, q: "Hvad hedder den bog, der foregår på Fanø?", accept: ["hollænderen"] },
      { type: "short", n: 4, q: "Hvad hedder den bog, der foregår i 1864?", accept: ["noget fremmed"] },
      { type: "short", n: 5, q: "Hvilken busrute kører til Boest?", accept: ["rute 181", "181", "busrute 181", "linje 181"] },
      { type: "short", n: 6, q: "Hvor mange busruter kører til Gludsted?", accept: ["2", "to", "2 busruter", "to busruter", "2 ruter", "to ruter", "rute 182 og 185", "182 og 185"] }
    ]
  };

  const opg2 = {
    id: "p13-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", sub: "Eksempel", body: "[ A: ______ ]\nVi har alt i foder og tilbehør til hest, hund, kat, krybdyr, fisk og gnaver.\nFaste lave priser og med daglige ekstra gode tilbud.\nwww.atd-shoppen.dk" },
          { title: "B", body: "[ B: ______ ]\nAndelsbolig 85 m² i naturskønt område nær Ryds Å sælges.\n3 værelser, have på 3 sider, p-plads og redskabsskur – beliggende Villestoftehaven 243.\nAndel: 295.000 kr. og mdl. ydelse 4.197 kr.\nTlf. 28 34 64 86" },
          { title: "C", body: "Forårsrejse til Holland\n5 dages bustur. Vi skal se tulipanmarker, blomsterauktioner, Amsterdam og meget andet.\n[ C: ______ ]\nBestil på tlf. 36 44 79 00.\nPF Rejser" },
          { title: "D", body: "[ D: ______ ]\nStart mandag d. 27. februar 2012\nBIL · TAXA · MOTORCYKEL · TRAKTOR\nPC-undervisning\nJØRN SKØDT\nJasminvej 1, Grenaa\nTlf. 86 30 09 03" },
          { title: "E", body: "[ E: ______ ]\nEr du medlem her, får du specielle tilbud før alle andre.\nTilmeld dig ved at sende en SMS med teksten \"Apollo\" til tlf. 25 25 70 71.\nHvis du ønsker at framelde denne service igen, sender du blot en SMS med teksten Afmeld til tlf. 25 25 70 71." },
          { title: "F", body: "[ F: ______ ]\nVi søger en dygtig, handy mand m/k, der\n• kan arbejde selvstændigt • kan samarbejde med mange • kan bruge værktøj • har ordenssans • kan lide at have travlt • kan lide at lave noget forskelligt, næsten hver dag • har kørekort\nInteresseret, kig ind på vores hjemmeside: www.lindogravnholt.dk og send en kortfattet mail til os: job@lindogravnholt.dk\nAnsøgningsfrist 27. september 2011\nLind & Ravnholt ApS · Arresøvej 5 b · 8240 Risskov" },
          { title: "G", body: "[ G: ______ ]\nHar du verdens sødeste kat, hund eller papegøje?\nSend et foto af dit kæledyr til Lokalavisen, så er du med i konkurrencen om en tur til New York for to personer inkl. hotel.\nfoto@la.mail.dk" },
          { title: "H", body: "[ H: ______ ]\nNy Nordisk Hverdagsmad giver dig inspiration til at bruge vilde urter og bær til grøntsager, fisk og fjerkræ i køkkenet i hverdagen. Udkommer d. 14/11.\nPris: 79,95." },
          { title: "I", body: "[ I: ______ ]\nStort udvalg af lækre retter til rimelige priser. Julefrokost, familiemiddag, bryllup eller konfirmation: Vi hjælper dig med at sammensætte den helt rigtige menu. Ring og få et tilbud.\nMøllers Kælder – tlf. 41 09 82 15\nDu ringer – vi bringer." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Alt til dyr", answer: "A", example: true },
          { n: 7, text: "Din vej til kørekort", answer: "D" },
          { n: 8, text: "Mad til din fest", answer: "I" },
          { n: 9, text: "Hvorfor leje – når du kan eje?", answer: "B" },
          { n: 10, text: "Pris pr. person: 4.098 kr.", answer: "C" },
          { n: 11, text: "Ja, så mangler vi folk igen!", answer: "F" },
          { n: 12, text: "Vind en rejse!", answer: "G" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p13-3", group: G, real: true,
    title: "Opgave 3 – Høflig tyv",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Vælg de ord (13-20), der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `En tyv lukkede sig selv ind i et sommerhus i Vestjylland en varm sommerlørdag. Der var ingen hjemme, for den familie, der boede i huset, var gået ned til stranden for at bade i det [[0]] vejr.

Det var temmelig [[13]] for tyven at komme ind. Nøglen lå nemlig under en lille, flad sten lige ved siden af hoveddøren, så tyven fandt den næsten med det samme.

Da familien kom hjem fra strandturen, kunne de [[14]], at de havde haft en gæst. Et dyrt kamera og en pung med lidt penge og et dankort var væk. De ringede med det samme til deres bank og spærrede dankortet, så tyven ikke kunne [[15]] det. Der manglede [[16]] noget mad i køleskabet og en øl. Tyven havde åbenbart spist frokost. Men han havde ikke rodet i køkkenet, og han havde vasket op efter sig. På spisebordet lå der et stykke papir, [[17]] der stod "Tak for mad!"

Familien syntes, det var lidt sjovt, at det var en høflig tyv, der havde været på besøg. Men de var kede af, at han havde [[18]] kameraet med alle deres feriebilleder. Men et par dage efter kom der et brev med en cd og en lille seddel. På cd'en var deres feriebilleder. På sedlen stod der bare "Tak for lån!" De blev [[19]] over at få billederne tilbage. Og det lille brev fik dem til at smile, [[20]] det var sådan en høflig tyv.`,
    questions: [
      {
        type: "gaps",
        bank: ["ikke", "let", "fordi", "bruge", "hvor", "dejlige", "glemt", "også", "sure", "svært", "taget", "selvom", "glade", "se"].map(w => ({ key: w, text: w })),
        example: { 0: "dejlige" },
        answers: { 13: "let", 14: "se", 15: "bruge", 16: "også", 17: "hvor", 18: "taget", 19: "glade", 20: "fordi" }
      }
    ]
  };

  const opg4 = {
    id: "p13-4", group: G, real: true,
    title: "Opgave 4 – Ung mor",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Sara Jensen lever et liv, der er meget anderledes end hendes veninders. Hun blev nemlig mor, da hun kun var 17 år gammel.

**0.** I dag er Sara 19 år, og hun bor sammen med sin søn Noah i en lejlighed i Sønderborg. Sara er ikke kæreste med Noahs far, men han bor i nærheden, og Noah er hos ham hver anden weekend. Saras forældre bor heller ikke langt væk. [[0]]. Det er rart for hende at vide, at hun altid kan ringe til dem og bede dem om at kigge forbi, hvis hun har brug for det.

**21.** En typisk dag for Sara begynder tidligt om morgenen. Vækkeuret ringer kl. 6.15, og så er der en time, til at hun og Noah skal ud ad døren. Sara går i bad og gør morgenmaden klar, inden hun vækker Noah. Han skal have tøj på, og han skal have morgenmad, men han vil altid meget hellere lege. [[21]]. Så bliver Sara lidt stresset. Men de når alligevel altid det hele, så Sara kan aflevere Noah i vuggestuen kl. 7.30.

**22.** Når Sara har afleveret Noah, tager hun i skole. Hun er startet på uddannelsen til social- og sundhedshjælper for et par måneder siden. Hun er glad for at gå i skole, og hun er meget koncentreret, mens hun er der. [[22]]. Hun tjekker selvfølgelig sin telefon i pauserne, for vuggestuen skal have mulighed for at ringe til hende, hvis han bliver syg. Men ellers er det vigtigste for hende at lære noget, når hun er i skole.

**23.** Saras klassekammerater går tit på café efter skole. Men de spørger hende ikke, om hun vil med, for de ved, at hun siger nej. Sara vil selvfølgelig gerne være sammen med sine venner fra skolen, men hun skal nå at rydde op og vaske tøj, inden hun henter Noah. For når Noah kommer hjem fra vuggestue, skal hun hele tiden holde øje med, hvad han laver, og så kan hun ikke lave ret meget andet. [[23]]. Det kan hendes klassekammerater heldigvis godt forstå.

**24.** Når Sara og Noah har spist aftensmad, ser de børne-tv, læser historier og synger sammen. Sara putter også tit Noah i bad, før han skal i seng. Men det er altid vigtigt for Sara, at han sover hurtigt. Hun skal nemlig lave lektier, og hvis Noah er vågen, kan hun ikke koncentrere sig. Og så er hun nødt til at læse om natten, når han endelig sover, og det er rigtig hårdt. [[24]]. Så for det meste får hun sin nattesøvn.

**25.** Der er mange, der spørger Sara, om hun er ked af, at hun har fået et barn så tidligt. Men det er hun ikke. Hun kan selvfølgelig godt mærke, at hun har en travl hverdag, og hun er tit træt. [[25]]. For selvom det er et stort arbejde at passe Noah, er glæden ved at have ham meget større. Han er en dejlig lille dreng, som tit giver sin mor et stort knus, og det giver hende altid ny energi.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Og det er Sara glad for." },
          { key: "B", text: "Men det betyder ikke noget." },
          { key: "C", text: "Det er svært, fordi hun savner ham." },
          { key: "D", text: "De hygger sig altid." },
          { key: "E", text: "Derfor kan hun ikke tage med." },
          { key: "F", text: "Og det er der ikke tid til." },
          { key: "G", text: "Hun har næsten ikke tid til at tænke på Noah." },
          { key: "H", text: "Men det sker heldigvis ikke så tit." }
        ],
        example: { 0: "A" },
        answers: { 21: "F", 22: "G", 23: "E", 24: "H", 25: "B" }
      }
    ]
  };

  const opg5 = {
    id: "p13-5", group: G, real: true,
    title: "Opgave 5 – Interview med Tine",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Tine – frisør i Odense",
        cards: [
          { title: "A", sub: "Eksempel", body: "Ja, hvad skal jeg sige? Jeg kan godt lide at bruge mine hænder, og jeg kan godt lide at arbejde med mennesker og at gøre dem glade. Og folk de bliver bare så glade, når deres hår sidder godt. Så det var nok de tre ting tilsammen, der gjorde, at jeg valgte lige præcis det her fag." },
          { title: "B", body: "At man somme tider ikke kan sove, fordi man tænker på penge. Altså har man nu kunder nok, og tjener man nok? Man har jo mange udgifter. Man skal betale husleje. Man skylder banken penge. Man skal købe nye ting. Det kan alt sammen godt gøre en nervøs." },
          { title: "C", body: "Det ved jeg ikke rigtig. Så skal jeg tjene rigtig mange penge. Og jeg vil jo også gerne have tid til dem derhjemme. Pludselig er børnene voksne. Så tror jeg nu nok, jeg vil blive ked af, at jeg har brugt al min tid på jobbet. Men måske senere, når børnene er større." },
          { title: "D", body: "Det er svært at sige, for der er så meget. Men måske, at jeg efterhånden har en hel del faste kunder. De bliver næsten en slags venner, for som frisør snakker man jo meget med kunderne. Man snakker om, hvad man går og laver, og hvad man tænker og mener om alt muligt. Det er både spændende og dejligt." },
          { title: "E", body: "Både ja og nej. Jeg har lange arbejdsdage, så jeg er meget væk. Det er selvfølgelig ikke så populært. Men jeg er næsten aldrig sur, for mit job gør mig glad, og det giver energi til også at være aktiv derhjemme. Jeg er for eksempel næsten altid parat til at spille et spil med børnene eller bage en lækker kage. Så nu tror jeg faktisk, at det er okay, at jeg er temmelig meget væk." },
          { title: "F", body: "Ja, altså, man skal jo være god til at fortælle folk, hvad de skal gøre. Og man skal forstå, at folk er forskellige, og at det faktisk er godt. Og så skal man vise dem, at man er en glad og venlig person. Det gør simpelthen, at der ikke bliver så mange problemer." },
          { title: "G", body: "Det er hårdt, men det er også sjovt. Det er hårdt, at man hele tiden skal tænke på penge, og det skal man. For der er rigtig mange frisører, så man skal sørge for at holde på kunderne. Men det er sjovt, fordi man selv bygger noget op." },
          { title: "H", body: "Jeg har jo salon inde midt i byen, så her kommer mange forskellige slags mennesker. Her kommer både helt unge og pensionister. Børn kommer her også, selv de helt små. Og så kommer der selvfølgelig også mennesker på min egen alder. Altså sådan nogle på en 30-40 år." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor er du blevet frisør?", answer: "A", example: true },
          { n: 26, text: "Hvordan er det at have egen salon?", answer: "G" },
          { n: 27, text: "Hvad slags kunder har du?", answer: "H" },
          { n: 28, text: "Er der noget ved dit job, du ikke kan lide?", answer: "B" },
          { n: 29, text: "Hvad kan du bedst lide ved dit job?", answer: "D" },
          { n: 30, text: "Er din familie glad for, at du er frisør?", answer: "E" }
        ]
      }
    ]
  };

  // Real sets newest first: 2020, 2019, 2013, 2012.
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 maj 2012");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling 2013 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2012);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w13a", delprove: 1, real: true, year: 2013,
      title: "A: Et opslag (2013)",
      kind: "Prøveopgave · opslag om en musikgruppe",
      minWords: 80, maxWords: 150,
      situation: "Du spiller guitar. Du vil gerne finde nogen at spille musik sammen med i en gruppe. Du vil skrive et opslag. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv og din interesse for musik", "Hvorfor du gerne vil finde nogen at spille sammen med", "Hvor, hvornår og hvordan gruppen kan øve", "Hvordan du kan kontaktes"],
      phrases: ["Musikere søges!", "Jeg hedder … og har spillet guitar i … år.", "Jeg kan bedst lide at spille …", "Vi kan øve …", "Skriv eller ring til mig på …", "Jeg glæder mig til at høre fra dig!"],
      model: `Musikere søges!

Hej! Jeg hedder Diego, jeg er 28 år og bor her i opgangen. Jeg har spillet guitar, siden jeg var 12 år, og jeg kan bedst lide rock og latinamerikansk musik.

Før jeg kom til Danmark, spillede jeg i et band med mine venner, og det savner jeg meget. Det er sjovere at spille sammen med andre end alene, og man lærer meget af hinanden. Derfor vil jeg gerne finde nogen, der vil starte en gruppe med mig. Jeg mangler især en trommeslager og en sanger.

Vi kan øve i kælderen på kulturhuset, hvor man kan leje et øvelokale for 50 kr. i timen. Jeg foreslår, at vi mødes én aften om ugen, for eksempel torsdag kl. 19-21.

Hvis du er interesseret, kan du ringe eller skrive til mig på 31 42 53 64.

Jeg glæder mig til at høre fra dig!

Diego, 2. tv.`
    },
    {
      id: "w13b", delprove: 1, real: true, year: 2013,
      title: "B: En anbefaling (2013)",
      kind: "Prøveopgave · anbefaling af en restaurant",
      minWords: 80, maxWords: 150,
      situation: "Du har været på en god restaurant og vil skrive en anbefaling til skolebladet og fortælle om dit besøg på restauranten. Du skal begynde og afslutte anbefalingen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvad restauranten hedder, og hvor den ligger", "Hvad du spiste, og hvad det kostede", "Hvad du synes om tjenerne på restauranten", "Hvorfor du gerne vil anbefale restauranten til andre"],
      phrases: ["Jeg vil gerne anbefale …", "Restauranten ligger …", "Til forret / hovedret / dessert fik jeg …", "Det kostede …", "Tjenerne var …", "Jeg kan varmt anbefale …"],
      model: `En aften på Trattoria Luna

Sidste fredag var jeg på restauranten Trattoria Luna sammen med tre venner fra sprogskolen. Restauranten ligger på Torvet, lige ved siden af biblioteket.

Til forret fik vi brød med olivenolie og tomater, og til hovedret spiste jeg en pasta med laks og spinat. Den var virkelig lækker. Til dessert delte vi en stor tiramisu. Det kostede 245 kr. pr. person med en sodavand, og det synes jeg er en god pris for så god mad.

Tjenerne var meget venlige og hurtige. De talte langsomt, da de hørte, at vi lærer dansk, og de forklarede, hvad der var i retterne.

Jeg vil gerne anbefale Trattoria Luna, fordi maden er god, priserne er rimelige, og der er en hyggelig stemning. Det er et godt sted at fejre en fødselsdag eller en bestået prøve!

Venlig hilsen
Leila, hold 3B`
    },
    {
      id: "w13c", delprove: 2, real: true, year: 2013,
      title: "En e-mail om en familiefest (2013)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Lars. Han skriver bl.a.: \"Og så har du været til stor fest i din familie, ved jeg. Vil du godt fortælle om den fest? Jeg elsker jo fester, som du ved.\" Skriv et svar til Lars. Du skal skrive minimum 100 ord.",
      points: ["Hvilken fest det var, og hvor den blev holdt", "Hvem der var med", "Hvad I spiste og lavede", "Hvad du bedst kunne lide ved festen"],
      phrases: ["Hej Lars", "Tak for din mail.", "Det var min … bryllup / fødselsdag.", "Vi var cirka … gæster.", "Det bedste ved festen var …", "Mange hilsner"],
      model: `Hej Lars

Tak for din mail. Ja, jeg har været til en stor fest. Det var min lillesøsters bryllup, og festen blev holdt i et selskabslokale i Aarhus.

Vi var cirka 150 gæster. Hele min familie var der, også min onkel og tante, som kom helt fra Pakistan. Jeg havde ikke set dem i fem år, så det var en stor glæde.

Vi spiste en masse dejlig mad – ris, kylling, lam og mange slags søde kager. Bagefter dansede vi til sent om natten, og børnene legede udenfor i haven.

Det bedste ved festen var, at alle var så glade, og at min søster så så lykkelig ud. Jeg har mange billeder, som jeg kan vise dig, næste gang vi ses.

Mange hilsner
Bilal`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven 2013 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2, maj-juni 2013)";
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p12", title: "Søskende", real: true, year: 2013,
      pictures: [
        { img: "images/pd2-2013/soeskende-1.jpg", credit, alt: "Søskende i en stue: en storesøster læser for de små, og to børn spiller brætspil", words: ["storesøster", "lillebror", "læse højt", "brætspil", "stuen"] },
        { img: "images/pd2-2013/soeskende-2.jpg", credit, alt: "En familie i en legetøjsbutik, hvor en dreng trækker i sin far", words: ["legetøjsbutik", "tilbud", "indkøbsvogn", "drengen", "forældrene"] }
      ],
      interview: [
        "Hvad laver børnene på billedet?",
        "Har du selv søskende? Fortæl om dem.",
        "Hvordan var det at vokse op med eller uden søskende?",
        "Hvor mange børn er der typisk i en familie i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg har fem søskende, så der var altid nogen at lege med. Hvordan var det hos dig?" },
        { who: "partner", say: "Jeg synes, at de ældste børn skal hjælpe med at passe de små. Er du enig?" },
        { who: "mediator", say: "Får man flere eller færre børn i jeres hjemlande end i Danmark?" },
        { who: "partner", say: "Jeg tror, det er sundt for børn at have søskende. Hvad tror du?" },
        { who: "mediator", say: "Hvad synes I generelt er fordelene og ulemperne ved store familier?" }
      ],
      phrases: ["På billedet kan jeg se …", "Den store pige er ved at …", "Jeg har … søskende.", "Da jeg var barn, …", "Det er en fordel, at …", "Hvad med dig?"]
    },
    {
      id: "p13", title: "By eller land", real: true, year: 2013,
      pictures: [
        { img: "images/pd2-2013/by-land-1.jpg", credit, alt: "En travl gade i en by med supermarked, kiosk og restaurant", words: ["byen", "gaden", "supermarked", "kiosk", "restaurant"] },
        { img: "images/pd2-2013/by-land-2.jpg", credit, alt: "Et hus på landet med en køkkenhave og høns", words: ["på landet", "huset", "køkkenhave", "høns", "naturen"] }
      ],
      interview: [
        "Hvad kan man se og gøre det sted, billedet viser?",
        "Bor du i en by eller på landet?",
        "Hvad kan du bedst lide ved det sted, du bor?",
        "Hvor boede du i dit hjemland – i en by eller på landet?"
      ],
      talk: [
        { who: "partner", say: "Jeg vil helst bo i byen, fordi der er så meget at lave. Hvad med dig?" },
        { who: "partner", say: "Jeg synes, det er bedre for børn at vokse op på landet. Er du enig?" },
        { who: "mediator", say: "Flytter mange mennesker fra landet til byen i jeres hjemlande?" },
        { who: "partner", say: "På landet skal man næsten altid have bil. Er det et problem, synes du?" },
        { who: "mediator", say: "Hvad synes I generelt er det bedste sted at bo, når man er gammel?" }
      ],
      phrases: ["Billedet viser …", "Der er mange …", "Jeg bor …", "En fordel ved at bo i byen er …", "Til gengæld er der …", "Det kommer an på …"]
    },
    {
      id: "p14", title: "Hjælpsomhed", real: true, year: 2013,
      pictures: [
        { img: "images/pd2-2013/hjaelpsomhed-1.jpg", credit, alt: "En fyldt bus, hvor en ældre dame med stok står op", words: ["bussen", "fyldt", "ældre dame", "stok", "tilbyde sin plads"] },
        { img: "images/pd2-2013/hjaelpsomhed-2.jpg", credit, alt: "En perron på en station, hvor folk bærer tunge kufferter", words: ["perron", "toget", "kufferter", "tung bagage", "hjælpe"] }
      ],
      interview: [
        "Hvad sker der på billedet? Hvem kunne have brug for hjælp?",
        "Hvornår har du sidst hjulpet en fremmed?",
        "Hvornår har en fremmed hjulpet dig?",
        "Er folk hjælpsomme i Danmark, synes du?"
      ],
      talk: [
        { who: "partner", say: "Jeg rejser mig altid for ældre mennesker i bussen. Gør du også det?" },
        { who: "partner", say: "Jeg synes, at danskerne er gode til at hjælpe, hvis man spørger dem. Er du enig?" },
        { who: "mediator", say: "Hjælper man fremmede mere eller mindre i jeres hjemlande end i Danmark?" },
        { who: "partner", say: "Nogle gange tør jeg ikke hjælpe, fordi jeg er bange for at gøre noget forkert. Kender du det?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at få folk til at hjælpe hinanden mere?" }
      ],
      phrases: ["På billedet kan man se …", "Den gamle dame har brug for …", "Jeg ville …", "Engang hjalp jeg …", "Hos os er det sådan, at …", "Hvad ville du gøre?"]
    }
  );
})();
