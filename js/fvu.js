// FVU-dansk trin 1–4: sample tasks (reading + spelling/language) in the style of the FVU tests.
// Written for DanskKlar – not official test material. More tasks will be added.
window.PD2 = window.PD2 || {};
PD2.FVU = [
  {
    trin: 1,
    level: "Korte, enkle tekster om hverdagen",
    texts: [{
      title: "Sara",
      body: "Mit navn er Sara. Jeg bor i Odense med min mand og vores to børn. Hver morgen cykler jeg på arbejde. Jeg arbejder i en børnehave. Om eftermiddagen henter jeg børnene. Om lørdagen handler vi ind i Netto, og om søndagen besøger vi min mor."
    }],
    qs: [
      { q: "Hvor bor Sara?", o: ["I Aarhus", "I Odense", "I København"], a: 1, why: "Teksten siger: \"Jeg bor i Odense\"." },
      { q: "Hvordan kommer Sara på arbejde?", o: ["Hun tager bussen", "Hun kører bil", "Hun cykler"], a: 2, why: "\"Hver morgen cykler jeg på arbejde.\"" },
      { q: "Hvor arbejder Sara?", o: ["I en børnehave", "I Netto", "På et hospital"], a: 0, why: "\"Jeg arbejder i en børnehave.\" Netto er der, hvor familien handler." },
      { q: "Hvad gør familien om søndagen?", o: ["De handler ind", "De besøger Saras mor", "De cykler en tur"], a: 1, why: "\"om søndagen besøger vi min mor\". Indkøb er om lørdagen." },
      { q: "Hvor mange børn har Sara?", o: ["Et barn", "To børn", "Tre børn"], a: 1, why: "\"med min mand og vores to børn\"." }
    ],
    lang: [
      { q: "Hvilket ord er stavet rigtigt?", o: ["skolle", "skole", "sgole"], a: 1, why: "Skole staves med ét l: en skole." },
      { q: "Hvilket ord er stavet rigtigt?", o: ["morgen", "moren", "morjen"], a: 0, why: "Morgen staves med rg, selv om man ikke hører g'et." },
      { q: "Vælg det rigtige ord: Jeg ___ i Odense.", o: ["bor", "bore", "boet"], a: 0, why: "I nutid hedder det jeg bor." },
      { q: "Hvilket ord er stavet rigtigt?", o: ["spisser", "spieser", "spiser"], a: 2, why: "Spiser staves med ét s: han spiser." }
    ]
  },
  {
    trin: 2,
    level: "Opslag, beskeder og korte praktiske tekster",
    texts: [{
      title: "Opslag på skolen",
      body: "LOPPEMARKED I SKOLEGÅRDEN\nLørdag den 12. maj kl. 10–14\n\nKom og køb brugt tøj, legetøj og bøger. Der er kaffe og kage i kantinen.\nVil du have en bod? En bod koster 50 kr. Skriv til Lone på 22 33 44 55 senest torsdag den 10. maj.\nHvis det regner, flytter vi ind i gymnastiksalen.\nAlle penge fra kaffe og kage går til 5. klasses lejrskole."
    }],
    qs: [
      { q: "Hvad koster det at have en bod?", o: ["10 kr.", "50 kr.", "Det er gratis"], a: 1, why: "\"En bod koster 50 kr.\"" },
      { q: "Hvornår skal man senest skrive til Lone?", o: ["Torsdag den 10. maj", "Lørdag den 12. maj", "Fredag den 11. maj"], a: 0, why: "\"senest torsdag den 10. maj\". Lørdag er selve loppemarkedet." },
      { q: "Hvor er loppemarkedet, hvis det regner?", o: ["I kantinen", "I skolegården", "I gymnastiksalen"], a: 2, why: "\"Hvis det regner, flytter vi ind i gymnastiksalen.\"" },
      { q: "Hvad bliver pengene fra kaffe og kage brugt til?", o: ["Nye bøger til skolen", "5. klasses lejrskole", "Legetøj til børnehaven"], a: 1, why: "\"Alle penge fra kaffe og kage går til 5. klasses lejrskole.\"" },
      { q: "Hvad er opslaget mest?", o: ["En invitation", "En regning", "En klage"], a: 0, why: "Opslaget inviterer folk til at komme og købe eller sælge – det er en invitation." }
    ],
    lang: [
      { q: "Hvilket ord er stavet rigtigt?", o: ["tårsdag", "torsdag", "torsdaw"], a: 1, why: "Ugedagen staves torsdag (efter guden Thor)." },
      { q: "Hvilket ord er stavet rigtigt?", o: ["spændende", "spænende", "spendene"], a: 0, why: "Spændende: spænd + ende – husk d'et." },
      { q: "Vælg det rigtige ord: I går ___ jeg en bog på loppemarkedet.", o: ["køber", "købte", "købe"], a: 1, why: "I går = datid. Købe → købte." },
      { q: "Vælg det rigtige ord: Der er mange ___ i skolegården.", o: ["barn", "børn", "barne"], a: 1, why: "Et barn – mange børn (uregelmæssigt flertal)." }
    ]
  },
  {
    trin: 3,
    level: "Længere tekster: artikler og information",
    texts: [{
      title: "Flere cykler til arbejde",
      body: "Flere og flere danskere vælger cyklen, når de skal på arbejde. Det viser en ny undersøgelse. Især i de store byer er cyklen populær, fordi det ofte går hurtigere end at sidde i kø i bilen.\n\nMange fortæller også, at de får det bedre af at cykle. \"Jeg får motion, og jeg slapper af på vej hjem,\" siger Ahmed på 42 år, som cykler 8 kilometer hver vej.\n\nPå landet ser det anderledes ud. Her er der ofte langt til arbejdet, og bussen kører sjældent. Derfor bruger de fleste stadig bilen. Kommunerne vil gerne have flere til at cykle og bygger derfor nye cykelstier."
    }],
    qs: [
      { q: "Hvorfor er cyklen populær i de store byer?", o: ["Fordi det er gratis at parkere", "Fordi det ofte går hurtigere end bilen", "Fordi bussen er dyr"], a: 1, why: "\"fordi det ofte går hurtigere end at sidde i kø i bilen\"." },
      { q: "Hvad betyder det, at Ahmed \"slapper af\"?", o: ["Han bliver træt", "Han bliver rolig og afslappet", "Han kører langsomt"], a: 1, why: "At slappe af = at hvile sig og blive rolig." },
      { q: "Hvor langt cykler Ahmed i alt om dagen?", o: ["8 km", "16 km", "42 km"], a: 1, why: "8 km hver vej – ud og hjem – giver 16 km. 42 er hans alder." },
      { q: "Hvorfor bruger de fleste på landet bilen?", o: ["Der er langt, og bussen kører sjældent", "De kan ikke lide at cykle", "Der er ingen veje"], a: 0, why: "\"Her er der ofte langt til arbejdet, og bussen kører sjældent. Derfor bruger de fleste stadig bilen.\"" },
      { q: "Hvad gør kommunerne?", o: ["De sætter prisen på bussen ned", "De bygger nye cykelstier", "De forbyder biler i byen"], a: 1, why: "\"bygger derfor nye cykelstier\"." },
      { q: "Hvad handler teksten mest om?", o: ["Ahmeds arbejde", "Forskellen på cykling i byen og på landet", "Hvordan man reparerer en cykel"], a: 1, why: "Teksten sammenligner byen, hvor mange cykler, med landet, hvor de fleste kører bil." }
    ],
    lang: [
      { q: "Vælg det rigtige ord: Jeg er ___ klokken fem.", o: ["hjem", "hjemme", "hjemmet"], a: 1, why: "Hjemme = sted (være hjemme). Hjem = retning (gå hjem)." },
      { q: "Vælg det rigtige ord: Han ___ hurtigt i går.", o: ["cyklede", "cyklet", "cykler"], a: 0, why: "I går = datid: cykle → cyklede. Cyklet bruges efter har: har cyklet." },
      { q: "Hvilket ord er stavet rigtigt?", o: ["undersøgelse", "undersøgelce", "undersøkelse"], a: 0, why: "Undersøge + -else = undersøgelse." },
      { q: "Vælg det rigtige ord: Det er ___ at cykle end at køre bil.", o: ["sund", "sundere", "sundest"], a: 1, why: "Sammenligning med end kræver komparativ: sund – sundere – sundest." }
    ]
  },
  {
    trin: 4,
    level: "Svære tekster: holdninger, debat og at læse mellem linjerne",
    texts: [{
      title: "Læserbrev: Giv børnene deres fritid tilbage",
      body: "Mine børn har en kalender, der er mere fyldt end min egen. Mandag er det svømning, tirsdag fodbold, onsdag musikskole – og sådan fortsætter det. Jeg er ikke i tvivl om, at vi forældre mener det godt. Vi vil give børnene de bedste muligheder. Men måske giver vi dem i virkeligheden for lidt af det vigtigste: tid til at kede sig.\n\nForskere peger på, at børn, som har tid til fri leg, bliver bedre til at løse problemer og finde på nye idéer. Når voksne planlægger hele dagen, lærer børnene ikke selv at tage initiativ.\n\nJeg foreslår ikke, at vi stopper alle fritidsaktiviteter. Men lad os vælge én eller to – og lade resten af ugen være fri. Kedsomhed er ikke farlig. Den er starten på fantasi.\n\nMette Holm, mor til tre"
    }],
    qs: [
      { q: "Hvad er Mette Holms hovedpointe?", o: ["Børn skal stoppe med al sport", "Børn har brug for mere fri tid uden planer", "Forældre skal bruge flere penge på aktiviteter"], a: 1, why: "Hun vil \"give børnene deres fritid tilbage\" og lade resten af ugen være fri – men ikke stoppe alt." },
      { q: "Hvad mener hun med \"tid til at kede sig\"?", o: ["At børn skal have det dårligt", "At børn skal have tid uden aktiviteter, hvor de selv finder på noget", "At skolen er kedelig"], a: 1, why: "Hun siger, at kedsomhed er \"starten på fantasi\" – børn finder selv på noget, når de ikke har planer." },
      { q: "Hvordan bruger hun forskning i teksten?", o: ["Til at vise, at hun tager fejl", "Til at støtte sin holdning", "Til at sælge et produkt"], a: 1, why: "Forskerne siger, at fri leg gør børn bedre til at løse problemer – det støtter hendes holdning." },
      { q: "Hvad foreslår hun konkret?", o: ["At børn vælger én eller to aktiviteter", "At alle aktiviteter forbydes", "At børn kun må lege i weekenden"], a: 0, why: "\"lad os vælge én eller to – og lade resten af ugen være fri\"." },
      { q: "Hvilken slags tekst er det?", o: ["En nyhedsartikel", "Et læserbrev, hvor en person argumenterer", "En brugsanvisning"], a: 1, why: "Teksten er skrevet af en læser, er i jeg-form og argumenterer for en holdning – det er et læserbrev." },
      { q: "Hvad betyder \"at tage initiativ\"?", o: ["Selv at begynde på noget", "At vente på andre", "At få en pause"], a: 0, why: "At tage initiativ = selv at gå i gang med noget uden at blive bedt om det." }
    ],
    lang: [
      { q: "Vælg det rigtige ord: Hun vil gerne ___ mere dansk.", o: ["lære", "lærer", "lærte"], a: 0, why: "Efter vil, kan, skal, må, gerne vil står verbet i navneform: vil lære." },
      { q: "Vælg det rigtige ord: Peter tog ___ cykel og kørte hjem. (Peters egen cykel)", o: ["hans", "sin", "sit"], a: 1, why: "Sin bruges, når cyklen tilhører grundleddet (Peter). Hans ville betyde en anden mands cykel. Sit bruges ved et-ord." },
      { q: "Hvilket ord er stavet rigtigt?", o: ["kedsomhed", "kedsommhed", "kedsumhed"], a: 0, why: "Kedsom + -hed = kedsomhed (ét m)." },
      { q: "Hvor skal kommaet stå? (Nyt komma)", o: ["Jeg tror, at børn har brug for fri tid.", "Jeg tror at, børn har brug for fri tid.", "Jeg, tror at børn har brug for fri tid."], a: 0, why: "Med nyt komma sættes komma foran en ledsætning: \"Jeg tror, at …\"." }
    ]
  }
];
