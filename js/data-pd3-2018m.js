// Prøve i Dansk 3, maj-juni 2018 (sommer 2018) – læseforståelse, skriftlig fremstilling and
// mundtlig kommunikation (delprøve 2), transcribed from the exam papers:
// Læseforståelse 1: opgavehæfte produktionsnr. 15 and teksthæfte "Danske forlystelsesparker og
// jobmuligheder" nr. 14; Læseforståelse 2: teksthæfte nr. 16 and opgavehæfte nr. 17; skriftlig
// fremstilling nr. 18; picture sheets for mundtlig kommunikation nr. 20 (cropped into images/pd3-2018m/;
// the sheets have no captions and print "Illustration: ?????" instead of the illustrator's name) and the
// censor- og eksaminatorhæfte for the oral exam (nr. 21).
// The reading answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19).
// No forcensur and no omregningstabel for this session were available, and the censor booklet has no
// score table.
// Every item has exactly one correct answer in the key. Delprøve 1 item 15 asks for "mindst to" places:
// any two (or all three) of the three places in the key count as correct.
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures and logos from the teksthæfte are left out (they are not needed for any answer).
// Læseforståelse 2 has delprøve 2A (7 × multiple choice, two texts) and 2B (8 × A-D gaps).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points.
// The app scores every question as 1, so 2A counts half as much here as at the exam.
// Printing errors corrected in the app: "fælleskab" → "fællesskab" (Universe), "seniormedarbejdere.Vi"
// (missing space), "Som legoland-medarbejder" → "Legoland-medarbejder", "Næstved ungdomsskole" →
// "Næstved Ungdomsskole", "BonBon-land" (kilder) and "Job i Bonbon-Land" (opgave 13) → "BonBon-Land",
// ´kildemarked´ (accents used as quotes) → ’kildemarked’, the missing full stop after "Svar ’ja’ eller
// ’nej’" (opgave 3), "Karriere er lige så vigtigt som børn" (2A instruction; the text title has "vigtig"),
// the full stop after the heading "Kvindekvoter og lovgivning." and "periode”." → "periode.”" (2A),
// the lower-case choices for 2B hul 1, which starts a sentence, "Danmarks statistik" → "Danmarks
// Statistik" (2A source) and "førstegangs fædre" → "førstegangsfædre" in the chart legend (fixed in
// images/pd3-2018m/foraeldre-diagram.png, where the y-axis title "Alder" from the page was also added).
// Not in the app: the opgavehæfte for delprøve 1 has the footer "MAJ-JUNI 2017" on page 3, and the oral
// booklet's headings read "Andet obligatoriske spørgsmål".
// The writing task wording, the friend's e-mail, the oral questions and the chart labels are copied
// from the papers; the chart values are read off the line chart (ca.-values). All model answers are our
// own (the papers have none).
// The oral topics A (Frivilligt arbejde) and B (Sygefravær på arbejdspladsen) also exist, with other
// model answers and pictures in images/pd3-oral/, in data-pd3-oral.js (pd3-o-frivilligt-arbejde-2018m
// and pd3-o-sygefravaer-paa-arbejdspladsen-2018m).

(function () {
  const G = "PD3 maj-juni 2018";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  // Item 15: any two (or all three) of the three places, in any order, joined by "og" or a comma.
  const places = [
    ["turistbureauer", "på turistbureauer", "turistbureau", "et turistbureau", "turistkontorer"],
    ["hotel og konferencesteder", "på hotel og konferencesteder", "hoteller og konferencesteder", "på hoteller og konferencesteder", "hotel og konferencested", "hoteller", "på hoteller", "hotel", "på hotel", "et hotel", "konferencesteder"],
    ["museer og andre seværdigheder", "på museer og andre seværdigheder", "museer og seværdigheder", "museer", "på museer", "seværdigheder", "andre seværdigheder", "et museum"]
  ];
  const twoOrThree = () => {
    const out = [];
    [[0, 1], [0, 2], [1, 2]].forEach(([i, j]) => {
      [[i, j], [j, i]].forEach(([a, b]) => places[a].forEach(x => places[b].forEach(y => out.push(`${x} og ${y}`, `${x}, ${y}`))));
    });
    [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]].forEach(([a, b, c]) =>
      places[a].forEach(x => places[b].forEach(y => places[c].forEach(z => out.push(`${x}, ${y} og ${z}`, `${x} og ${y} og ${z}`)))));
    return out;
  };

  const forlystelsesparker = {
    id: "pd3-18m-1", group: G, real: true,
    title: "Delprøve 1 – Danske forlystelsesparker og jobmuligheder",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i teksthæftet Danske forlystelsesparker og jobmuligheder. Brug indholdsfortegnelsen. Svar præcist og så kort som muligt på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Forlystelsesparker før og nu
   Hvad er en forlystelsespark? … side 3
   Bakken – verdens ældste forlystelsespark … side 3
   Nyere forlystelsesparker … side 4
Job i udvalgte forlystelsesparker
   Tivoli … side 5
   Legoland … side 7
   Universe … side 9
Kurser der forbereder til job i en forlystelsespark
   Job i BonBon-Land … side 13
   Turisme og oplevelsesøkonomi på Niels Brock … side 13
Kilder

**FORLYSTELSESPARKER FØR OG NU**

**Hvad er en forlystelsespark?**

En forlystelsespark er betegnelsen for en tivolipark med forlystelser som for eksempel karruseller, rutsjebaner og lignende samt måske anden underholdning. Ordet bruges om fastliggende etablissementer. Stedernes oprindelse kan spores tilbage til middelalderens markeder, som foruden handlende tiltrak gøglere, musikanter og lignende. Af danske endnu eksisterende markeder af denne karakter kan nævnes Hjallerup Marked.

En forlystelsespark, som er baseret på ét eller flere temaer, kaldes en temapark. Et typisk eksempel på en temapark er Legoland.

**Bakken – verdens ældste forlystelsespark**

Dyrehavsbakken (i daglig tale kaldet Bakken) er verdens ældste eksisterende forlystelsespark. Den er grundlagt i 1583 og ligger i Dyrehaven ved Klampenborg ca. 10 km nord for København.

**Kildemarked**

Dyrehavsbakken opstod som ’kildemarked’ omkring Kirsten Piils hellige kilde, der ifølge traditionen blev fundet i 1583 og genopdaget i 1732. Kilden blev særlig besøgt omkring sankthans og Vor Frue dag (2. juli), som det også var skik ved andre kildemarkeder.

Af en beretning fra 1816 fremgår det, at stedet endnu på dette tidspunkt havde bevaret sin karakter af kildemarked. Af forlystelser var der nu også vokskabinet, gynger og karruseller samt en dansebod, og forskellige omrejsende gøglere og artister optrådte for publikum.

**Forlystelsessted med faste artister**

Dyrehavsbakken fik hård konkurrence, da Københavns Sommertivoli åbnede i 1843. Tivoli solgte frisk vand fra Kirsten Piils Kilde og overtog nogle af Dyrehavsbakkens dygtigste artister, bl.a. Niels Henrik Volkersen, der blev en populær Pjerrot-artist.

Pjerrot er en lidt enfoldig figur. Han er kendt for sin løse, hvide dragt, sit hvide ansigt, sin røde mund og den aflange hat.

I Tivoli udviklede Pjerrot sig til en folkekær godmodig klovn med et stænk af snuhed. Han blev hurtigt en fast del af Tivolis underholdning for et bredt publikum. På Bakken blev der derfor skabt en selvstændig Pjerrot, der især er beregnet for et børnepublikum, når han optræder med at trylle, synge, spille og spy ild.

**Varieté og cirkus**

I 1800-tallet blev der åbnet forskellige varietéer på Bakken. Brødrene Kronemanns Cirkus bød omkring århundredskiftet på en blanding af akrobatik og pantomime til musikledsagelse. Det blev 1918-57 videreført som Kramers Varieté, der var berømt for et internationalt artistprogram. Derudover har Cirkusrevyen siden 1935 hvert år givet forestillinger i et cirkustelt med kunstnere som Osvald Helmuth, Liva Weel, Dirch Passer og Lisbet Dahl. Cirkusrevyen er i dag den største danske revy. Den er berømt for fra begyndelsen at have haft traditionel underholdning med revystjerner og dansenumre, men i nyere tid er den især blevet berømt for parodier og politisk satire. Den populære revy bliver hvert år filmet og senere udsendt i TV.

Dyrehavsbakkens rutsjebane var ved åbningen i 1932 Europas største, i alt 987 m lang. Siden er mange andre forlystelser kommet til, bl.a. en vandrutsjebane i 1983. På Friluftsscenen er der artistoptræden og solister, og flere restaurationer har dans til levende musik.

I 2015 åbnede temaområdet Korsbæk på Bakken, hvis bygninger med butikker og restaurationer er bygget over den fiktive by Korsbæk fra tv-serien Matador.

**Nyere forlystelsesparker**

Branchen udvikler sig stadig på nye lokaliteter og med nye temaer. Ud over Dyrehavsbakken og Tivoli kan blandt større danske forlystelsesparker nævnes Legoland i Billund og BonBon-Land på Sjælland.

En række ferie-, oplevelses- og aktivitetscentre har efterhånden fået karakter af forlystelsesparker. Det gælder bl.a. Universe på Als.

**Universe**

Universe, der blev åbnet i foråret 2005 under navnet Danfoss Universe, ligger på Als i Sønderjylland. Det er en science park, og formålet med parken er at undervise børn og voksne i naturvidenskab, teknologi og iværksætteri.

Universe adskiller sig dermed fra andre forlystelsesparker ved, at læring er det bærende element for alle forlystelserne. Ideen med at etablere parken var at skabe en samling aktiviteter, hvor alle kan få en oplevelse og samtidig lære om naturvidenskabelige fænomener.

Blandt attraktionerne i Universe er dronebaner, 5D-rumrejser og flysimulatorer samt Den Blå Kube, hvor man kan få en rejse gennem fire af verdens største naturfænomener: gletsjer, gejser, vulkan og lyn.

**JOB I UDVALGTE FORLYSTELSESPARKER**

**Tivoli**

Tivoli er en arbejdsplads med flere end 1.800 kolleger fordelt på mange faggrupper og forretningsområder. Tivolis medarbejdere er lige så mangfoldige som gæsterne, der besøger os. Vi ansætter de bedste kandidater til vores ledige stillinger uanset alder, etnisk oprindelse og køn.

Fælles for Tivolis medarbejdere er engagement, stolthed og et udpræget servicegen. Vi arbejder alle med samme mål: at betage vores gæster.

**Tivoli som arbejdsplads**

Tivoli er både en forlystelsespark, en turistattraktion, en kulturinstitution og en moderne, kommerciel virksomhed med fokus på udvikling og vækst samt gæste- og medarbejdertilfredshed.

Vi driver restauranter, afholder koncerter, udvikler haveanlæg, bygger nyt, reparerer og vedligeholder ejendomme. Vi sælger, markedsfører og udvikler oplevelser og services i Tivoli. Vi synger, spiller, danser, koreograferer og meget, meget mere.

Derfor har vi dygtige medarbejdere inden for rigtig mange forskellige faggrupper. Vi har for eksempel tekniske projektledere, marketing- og økonomispecialister, sygeplejersker, scenografer, IT-medarbejdere, balletdansere, kokke og tjenere, skuespillere, håndværkere og direktører.

Vi er ca. 600 medarbejdere, som arbejder i Tivoli hele året rundt. Herudover er vi flere end 1.200 medarbejdere, som yder service til Havens gæster, når Tivoli er åben. Vores servicemedarbejdere giver gæsterne en ekstraordinær og betagende oplevelse ved at yde en fantastisk service. Således lever vi efter vores servicestrategi både internt og eksternt.

På listen over egenskaber for Tivolis medarbejdere er, at de skal være smilende, hjælpsomme, udadvendte, engagerede, kreative, fleksible, ansvarlige og handlekraftige.

Vi lægger vægt på mangfoldighed og er derfor stolte af, at vi har en medarbejdergruppe med folk i mange aldre og fra mange lande og med næsten lige mange kvinder og mænd.

**Tivoli søger servicemedarbejdere**

Tivoli søger løbende servicestjerner til de tre sæsoner: Sommer, Halloween og Jul i Tivoli. Vi foretrækker ansøgere, der har lyst til at arbejde i alle sæsoner.

Vi søger servicemedarbejdere til spisesteder, billetsalg og til arbejdet som kontrollør.

Servicemedarbejdere arbejder enten i indgangene med billetsalg, som kontrollør ved indgange og forlystelser eller på Tivolis restauranter og spisesteder. Du skal være fyldt 15 år for at arbejde i Tivoli, men det er kun Tivolis spisesteder, som ansætter medarbejdere under 18 år.

Vi forventer, at du kan arbejde i sæsonerne, og at du er indstillet på at holde din ferie, når Tivoli er lukket.

**Servicemedarbejdere i billetsalget**

Vi arbejder målrettet med salg og mersalg, og alle medarbejdere måles individuelt. Vi forventer ikke, at du er verdensmester i salg fra første dag, det vigtigste er, at du er dygtig til at aflæse gæsterne og deres behov. Dine kolleger og ledere hjælper og støtter dig i udviklingen, så du opbygger dine salgs- og servicekompetencer. Du er det første, tivoligæsten oplever af Tivoli, så du har et stort ansvar for at sikre en god begyndelse på Tivolituren.

**Hverdagen for servicemedarbejdere i billetsalget**

På de travle dage går der mellem 40.000 og 50.000 gæster ind i Tivoli. Du betjener ca. 3.000 af dem. Du er tålmodig, effektiv og charmerende. Du brænder for at sikre, at alle går fra dig med smil på læben og oplevelsen af at have fået det, de kom for – og lidt ekstra. Du arbejder i vores billethuse, i servicecenteret eller billetcenteret. Vagterne er på mellem 6 og 10 timer.

**Hvem kan søge?**

Aldersmæssigt er medarbejderne i billetsalget meget forskellige – dog skal du minimum være fyldt 20 år. Fælles for os er, at vi er velplejede, har glimt i øjet, er høflige og gør alt det, der skal til for at hjælpe gæsterne på bedste vis. Vi ansætter både medarbejdere på fuldtid og deltid.

**Særlige krav**

Vores gæster kommer fra mange forskellige egne af landet og fra udlandet. Det er derfor vigtigt, at du taler et tydeligt og godt dansk samt minimum et fremmedsprog. Det er en fordel, hvis du har salgserfaring fra butik eller har været ansat i rejsebranchen. Det er afgørende, at du har situationsfornemmelse, er rummelig og har god kulturforståelse. Du skal desuden kunne arbejde minimum to dage om ugen og altid hver anden fredag.

**Kontrollører på forlystelser**

Som kontrollør på forlystelserne er du en smilende, initiativrig og energisk person. Du kan lide at være udendørs i al slags vejr og tale med alle – store som små. Det er vigtigt, at du er tillidsvækkende, hjælpsom og god til at aflæse mennesker.

**Hverdagen for kontrollører på forlystelserne**

På travle dage går der rigtig mange gæster igennem de forskellige forlystelser. Du får alle til at føle sig velkomne og trygge. Du hilser, smiler og sikrer, at alle er fastspændt rigtigt – på en god og humørfyldt måde.

Du skal holde pause på præcis det tidspunkt, der er aftalt, så der hele tiden er en kollega på alle forlystelser. Forlystelserne skal åbne og lukke på det tidspunkt, gæsterne forventer det.

**Hvem kan søge?**

Kontrollørerne på Tivolis forlystelser har forskellig alder og baggrund. Det er vigtigt, at du er velplejet og har en venlig, indbydende fremtoning.

Fremfor alt er du kommunikerende og har god situationsfornemmelse.

**Særlige krav**

Det er en fordel, men ikke et krav, hvis du har baggrund som guide, har vejledt andre eller på anden måde har erfaring med at møde og servicere mange forskellige slags mennesker.

**Legoland**

Legoland er en virksomhed, som lever af at skabe uforglemmelige oplevelser for de mange børn og voksne, der hvert år besøger os.

Det er børnene, som er heltene i Legoland, så vores arbejde foregår i høj grad i børnehøjde. Vi er glade for at komme på arbejde, og vi har det sjovt sammen med børnene og alle vores dejlige kolleger.

Du er som Legoland-medarbejder en vigtig del af brandet og oplevelsen, du er en rollemodel for børnene, og du skaber sammen med gæsterne og dine kolleger den helt specielle kultur i Legoland.

**Legoland som arbejdsplads**

Som Legoland-medarbejder vil du blive en del af Danmarks sjoveste arbejdsplads, hvor hver dag byder på nye oplevelser i et internationalt miljø.

Ikke to dage er ens. Der er hver dag nye gæster, nye forventninger og nye udfordringer, som vi sammen skal prøve at løse og leve op til.

Vi ønsker at skabe motivation og muligheder for alle medarbejdere, så arbejdsforholdet kan fortsætte længst muligt med indhold og udvikling til gavn for såvel os som for dig.

**Arbejdstider**

Arbejdstiderne i Legoland er meget forskellige, da parken har åbent 7 dage om ugen i sæsonen, ligesom hotellet har åbent hele året rundt. Derfor må weekend- og aftenarbejde forventes i de fleste jobtyper. Man har dog altid mindst en hel fridag om ugen i sæsonen.

Hvor det er relevant, fremgår den daglige arbejdstid samt fridage af vagtplaner, der kan ses online derhjemmefra og minimum 4 uger frem.

**Sundheds- & sikkerhedspolitik**

Legoland har en sikkerheds- og sundhedspolitik, der fastslår, at målene for sundhed, sikkerhed og medarbejdernes velbefindende er lige så vigtige som målene for kommerciel succes og kundeservice. Der skal ikke herske tvivl om, at vi aldrig vil tillade, at profitovervejelser kommer til at overskygge definerede behov for eller krav om sundhed og sikkerhed. Som følge heraf er virksomhedens mål at sikre og opdatere de højeste og mest praktiske standarder for sundhed og sikkerhed i alle virksomhedens aktiviteter.

**Uniformsregler**

Vores uniformer i Legoland er et væsentligt bidrag til, at gæsterne opfatter os som professionelle medarbejdere. Der udleveres uniformer til de medarbejdere, der har direkte gæstekontakt. Gæsterne lægger mærke til dig, når du er i uniform, og det er et krav, at uniformsreglerne overholdes.

**Straffeattest**

For at blive ansat i Legoland ApS skal du aflevere en straffeattest inden 1. arbejdsdag. Straffeattesten skal hentes på en politistation af dig selv (medbring gyldigt ID ved afhentningen).

**Arbejdspladskulturen**

I Legoland bliver der gjort mange ting for at sikre, at alle medarbejdere er glade for at have Legoland som arbejdsplads.

**Sociale arrangementer**

En stor del af at trives godt på en arbejdsplads er, at det sociale miljø er på plads. I den forbindelse afholdes der mange forskellige arrangementer henover året.

Det sociale element står meget højt på agendaen, og eksempler på sådanne aftener er midtvejs- og lukkefest (spisning, underholdning og dans), quizaften, burger- og bio-aften, blinklysfest, store legedag, tur til Heide Park og gokart-tur. I løbet af sæsonen afholdes der mindst et arrangement hver måned, og der er mellem 50 og 750 deltagere pr. gang.

Vores personaleforening tilbyder virksomhedsbesøg, ture til andre forlystelser, spændende foredrag og årets julefrokost.

**Mangfoldighed**

Legoland er en mangfoldig arbejdsplads med medarbejdere og ledere med vidt forskellige baggrunde og kompetencer. Ikke kun i forhold til køn, alder og herkomst, men i lige så høj grad i forhold til uddannelse, erfaringer og personlighed.

I 2015 beskæftigede vi medarbejdere i alderen fra 15 til 80 år, vi havde mange forskellige nationaliteter ansat samt ansatte, der arbejdede under individuelle seniorordninger og diverse fleksjobaftaler.

**Seniorpolitik**

Legoland anser seniormedarbejdere som vigtige kultur- og værdibærere i virksomheden og har derfor et ønske om at rekruttere, fastholde og udvikle seniormedarbejdere. Vi ønsker at sikre, at overgangen fra et aktivt arbejdsliv til en pensionisttilværelse bliver en positiv oplevelse. Seniorforløbet skal derfor være planlagt således, at medarbejderne i god tid ved, hvordan den sidste tid på arbejdsmarkedet forløber, og hvornår arbejdskarrieren slutter. Vi ønsker, at seniorpolitikken skal medvirke til, at vores medarbejdere og Legoland-pensionister fortsat har lyst til at være gode ambassadører for Legoland.

**Pensionist**

Selv om du fratræder din stilling for at gå på pension, vil vi gerne bevare kontakten med dig.

Som Legoland-pensionist har du udover fortsat at have nogle personalegoder mulighed for at deltage i forskellige aktiviteter og udflugter, som arrangeres af et særligt pensionistråd.

**Job som sæsonmedarbejder**

I Legoland ansætter vi sæsonmedarbejdere fra januar med start omkring påske og fortsætter ansættelserne igennem hele vores åbningssæson.

Der ansættes medarbejdere i forskellige afdelinger på fuldtid, deltid, til weekendarbejde, til sommerferiejob og som afløser.

Når vi modtager din ansøgning, modtager du automatisk en bekræftelse på, at vi har modtaget din ansøgning. Har du ikke modtaget denne bekræftelse fra os inden for 2 arbejdsdage, er du meget velkommen til at kontakte os for at sikre, at vi har modtaget din ansøgning.

Din ansøgning vil gå direkte til den afdeling, som du har valgt som din første prioritet. Hvis den på det tidspunkt ikke har brug for flere medarbejdere sørges der for, at ansøgningen kommer videre til en eventuel 2. eller 3. prioritet.

Kvalificerede kandidater vil herefter blive kaldt til samtale med en leder fra den ønskede afdeling, hvor vi vil gennemgå en række praktiske ting med dig – det kan f.eks. være arbejdstid, løn, hygiejne og sikkerhedsmæssige forhold, vores forventninger til dig, uniformsregler og meget mere. Vær opmærksom på, at I godt kan være flere ansøgere sammen til denne del. Herefter følger en personlig samtale, hvor vi vil lære hinanden lidt bedre at kende, og hvor vi vil høre lidt mere om, hvorfor du gerne vil arbejde i Legoland.

Du vil få svar i løbet af kort tid efter samtalen. Er svaret positivt, modtager du hurtigst muligt din kontrakt med posten.

**Job som fastansat**

Når vi modtager en ansøgning, får du straks en bekræftelse på, at vi har modtaget din ansøgning, uanset om du har søgt en konkret stilling, eller du har søgt uopfordret.

**Indkaldelse til samtale**

Når vi indkalder til samtale, vil vi enten sende en mail eller ringe til dig.

**1. samtale**

De bedst egnede kandidater vil blive indkaldt til en samtale med den rekrutterende leder. Her vil du få en introduktion til Legoland og til jobbet. Her vil vi også få en mulighed for at høre mere om dig og dine kompetencer.

På baggrund af den første samtalerunde, vil vi typisk udvælge 2-3 kandidater, der skal gå videre til 2. samtale.

**2. samtale**

Inden 2. samtale vil du typisk blive bedt om på forhånd at udfylde en online personprofil, som vi tager udgangspunkt i til samtalen. Sammen med din ansøgning og dit CV er den med til at danne et billede af dig som person. Profilen er med til at give et fuldendt billede af dig som person og vil aldrig stå alene i en vurdering.

**Ansættelse og afslutning**

Når hele processen er afsluttet, ansættes den bedst egnede kandidat. Alle andre kandidater til jobbet vil få et tilbud om at blive stående i vores emnebank.

**Fortrolighed**

Du er sikret fuld fortrolighed, når du søger job i Legoland. Det er kun HR og de relevante parter fra den pågældende afdeling, der deltager i processen, der får kendskab til, at du har søgt job hos os.

**Universe**

I Universe kan hele familien have det sjovt, mens de bliver klogere på naturvidenskab, teknologi og iværksætteri.

Universe er en naturvidenskabelig oplevelsespark, hvor børn og voksne leger sig til viden om naturvidenskab og teknologi. Her kan du tumle fra det ene eksperiment og sjove naturfænomen til det andet. Du kan bygge vandraketter, grave med en rigtig gravemaskine, køre tohjulede segways og løfte en bil. Du kan også opleve fortællingen om, hvordan en af Danmarks største industrivirksomheder er blevet til.

**Nye medarbejdere er velkomne**

Når det danske forår melder sig, bliver dagene lysere, træerne springer ud, og Universe åbner igen til en forunderlig verden af gode oplevelser.

Derfor vender de fleste medarbejdere også tilbage for i venners lag igen at bruge sæsonen på at give vores gæster mindeværdige oplevelser i særklasse. Men hvert år er der også brug for nye ansigter, der kan springe i den grønne uniform og træde ind på holdet af engagerede medarbejdere.

Universe er en arbejdsplads, hvor vi vægter vores værdier og servicekultur højt som en naturlig del af vores hverdag. Derfor bliver der investeret meget i vores medarbejdere, hvilket blandt andet gøres via uddannelse inden ansættelse i Universe.

En sæson i Universe er præget af et helt unikt fællesskab, hvor det sociale vægter højt både på og uden for arbejde.

Som medarbejder i Universe er du:
   imødekommende og åben over for gæster og kollegaer
   frisk på at lære nye ting hele tiden
   god til at arbejde på et hold
   god til at håndtere travlhed

**Ansættelsen**

Universe ansætter cirka 100 sæsonmedarbejdere hvert år fra start marts og indtil slut oktober, hvor parken lukker.

I det følgende kan du læse mere om ansættelsesforløbet i Universe.

**Ansættelsesforløb for sæsonjob**

Du skal som ansøger til sæsonjob i Universe gøre følgende:

1. Udfyld ansøgningsskemaet og tilmeld dig Universes rekrutteringsworkshop.

2. Deltag i rekrutteringsworkshoppen i november.

3. Rekrutteringsworkshoppen afsluttes med en evaluering, hvor du vil blive informeret om, hvorvidt du er gået videre til næste uddannelsesforløb eller ej.

4. Hvis du går videre fra rekrutteringsworkshoppen, skal du efterfølgende på uddannelsesforløb 1 og 2 (U1 og U2). U1 og U2 forløber over 2 hele dage i januar. Deltagelse i rekrutteringsworkshoppen er derfor betinget af, at du kan deltage i U1- og U2-forløbet.

5. U1 og U2 afsluttes med en evaluering, hvor du vil blive informeret om, hvorvidt du bliver ansat som sæsonmedarbejder i Universe eller ej. Hvis du bliver ansat, skal du igennem uddannelsesforløb 3 (U3).

6. U3 er områdespecifik oplæring og vil finde sted i løbet af februar og marts. Du skal være til rådighed for vagter i Universe fra marts.

**Rekrutteringsworkshop**

Alle ansøgere til sæsonjob i Universe skal deltage i Universes rekrutteringsworkshop, som varer cirka 3 timer.

På rekrutteringsworkshoppen vil deltagerne blive klogere på Universe og hvilke forventninger, vi har til vores sæsonmedarbejdere. Dagen vil også byde på små, sjove og involverende øvelser, hvor deltagerne vil blive vurderet af nogle observatører. Deltagerne på rekrutteringsworkshoppen vil blive vurderet på deres præstation, mindset og engagement. Vurderingerne er afgørende for, om ansøgerne går videre i Universes ansættelsesforløb.

Rekrutteringsworkshoppen afsluttes med information om, hvilke ansøgere der går videre til uddannelsesforløb 1 og 2 (U1 og U2).

**Uddannelsesforløb 1 og 2 (U1 og U2)**

De ansøgere, der går videre fra rekrutteringsworkshoppen, bliver midlertidigt ansat og skal gennemgå U1 og U2, der er Universes basisuddannelsesforløb. U1 og U2 forløber over 2 hele dage, hvor deltagerne vil få meget mere viden om Universe.

På U1 og U2 vil deltagerne ligeledes blive vurderet af nogle observatører, hvor præstation, mindset og engagement har en afgørende rolle for, om deltagerne går videre i ansættelsesforløbet.

U1 og U2 afsluttes med information om, hvilke ansøgere der går videre til uddannelsesforløb 3 (U3). De ansøgere, der går videre til U3, vil blive ansat som sæsonmedarbejdere i Universe.

**Uddannelsesforløb 3 (U3)**

Uddannelsesforløb 3 (U3) er områdespecifik uddannelse, og først her starter den egentlige oplæring, som gør sæsonmedarbejdere i stand til at varetage vagter i parken.

Sæsonmedarbejdere vil blive ansat i Universe som en helhed og ikke tilknyttet en bestemt afdeling. Det betyder, at de kan komme til at varetage vagter i flere områder alt afhængigt af, hvilke kompetencer de vil blive lært op i.

U3 fastlægges efter U1 og U2 og kan forløbe over flere dage. Antallet af dage afhænger af, hvor mange kompetencer deltageren bliver oplært i. U3 finder sted i løbet af februar og marts måned.

**FAQ – Spørgsmål og svar**

Herunder finder du svar på de spørgsmål, vi oftest får stillet om sæsonarbejde i Universe.

**Hvor gammel skal jeg være for at arbejde i Universe?**
Betingelserne for at være sæsonansat i Universe er, at du er fyldt 18 år inden din første vagt.

**Hvad skal jeg medbringe før min første vagt?**
Du skal medbringe din straffeattest inden første vagt samt give dit samtykke til, at Universe må indhente oplysninger hos Rigspolitiet til det, der kaldes en børneattest.

**Skal jeg have et hygiejnebevis?**
Som sæsonansat i Universe er det et ansættelseskrav, at du har et hygiejnebevis. Hvis ikke du har et hygiejnebevis, vil du få dette af Universe.

**Hvad er lønnen for sæsonansatte?**
Lønvilkårene er fastlagt, jf. fællesoverenskomst imellem Dansk Industri & CO-industri og Fonden Universe Science Park.

**Hvornår kan jeg forvente at skulle arbejde?**
I din ansøgning skal du angive, hvornår du kan arbejde. Vores planlægning er afhængig af din fleksibilitet, og du forbedrer derfor dine chancer for at få et job i Universe, hvis du er åben for at arbejde i weekenderne, i for- og eftersæson samt på helligdage. Ligeledes har Universe allermest travlt i perioden slut juni til midt august, som vi også kalder for højsæsonen. I højsæsonen har vi brug for rigtig mange medarbejdere, og du kan derfor ikke forvente at få ferie i denne periode.

**Hvor mange bliver der ansat hvert år?**
Universe har brug for cirka 100 sæsonmedarbejdere hver sæson. Heraf vender cirka 50 medarbejdere tilbage, og vi har derfor brug for op til 50 nye medarbejdere i alle aldersgrupper fra 18 år og opefter.

**Hvor mange timer kan jeg forvente at arbejde?**
Som sæsonansat i Universe bliver du ikke garanteret et fast timeantal. Timeantallet vil variere alt efter din rådighed, og hvilke kompetencer du bliver lært op i.

Timeantallet vil endvidere variere afhængigt af travlhed og Universes åbningstider. I for- og eftersæsonen er der mindre travlt og færre åbningsdage. I højsæsonen har vi åbent alle ugens dage og har derfor brug for rigtig mange medarbejdere.

**KURSER DER FORBEREDER TIL JOB I EN FORLYSTELSESPARK**

**Job i BonBon-Land**

BonBon-Land har i samarbejde med Næstved Ungdomsskole sammensat et kursus, der ruster dig til en eventuel samtale i BonBon-Land. Det er dog ikke et krav for at blive ansat, at du gennemfører kurset.

**Klar til job 1 – Kursusbeskrivelse**

Vil du have et job, så prøv dette kursus. Du får hjælp til at skrive en god ansøgning, gøre det godt til selve samtalen og i det hele taget blive godt rustet til selve jobbet. Med dette kursus vil du øge dine chancer markant for at få netop dit drømmejob.

**Kurset består af tre faser:**

Fase 1 – Ansøgningen
Vi hjælper dig og giver råd om, hvordan du skriver en god ansøgning. Vi hjælper dig via samtaler med at sætte ord på netop dine kompetencer. Du får også hjælp med dit CV og ikke mindst opfølgning på ansøgningen.

Fase 2 – Samtalen
Vi hjælper dig med at finde frem til dine styrker og med, hvordan du giver et godt indtryk til samtalen. Du får også gode råd, så du vil føle dig mere sikker, når du træder ind ad døren.

Fase 3 – Klar til job
Vi giver dig mulighed for at afprøve nogle af de udfordringer, du vil møde som ny i job. Du vil blive mere bevidst om dine egne styrker og svagheder. Vi hjælper dig til at kunne tage ansvar, håndtere konflikter, samarbejde, være en god kollega og til i det hele taget at kunne glæde sig over at have et arbejde.

Næstved Ungdomsskole har et tæt samarbejde med BonBon-Land, så hvis du har gennemgået dette kursus, vil du forøge dine chancer markant for at få job i BonBon-Land.

**Turisme og oplevelsesøkonomi på Niels Brock**

Kunne du tænke dig en fremtid i en branche, der er i rivende udvikling, og er du god til at kommunikere med mennesker? I så fald er kursusforløbet Turisme og oplevelsesøkonomi et godt udgangspunkt for en spændende karriere.

På forløbet lærer du effektive metoder til at udvikle oplevelsesprodukter, yde optimal og målrettet rådgivning og service til turister og kunder og sælge turistprodukter. Du lærer også at rådgive og sælge, ligesom du får en opfriskning af dit engelsk – målrettet udenlandske turister.

**Jobmuligheder**

Turister er ikke bare de feriegæster, der kommer om sommeren, hvor de bor på hotel, campingplads eller for eksempel lejer et sommerhus. Året rundt er der fyldt med udenlandske besøgende. De kommer på konferencer, forretningsrejser, gourmetophold eller f.eks. for at se store internationale udstillinger, eller de er blot på en sviptur, så jobmulighederne er mange: Du kan for eksempel søge ansættelse i forlystelsesparker, på turistbureauer, på hotel og konferencesteder og på museer og andre seværdigheder, eller du kan arbejde med transport, guide af og salg til turister.

Du vil blive undervist af velkvalificerede undervisere, der har flere års erfaring i branchen på såvel operationelt niveau som på ledelsesniveau.

**Målgrupper**

Kursusforløbet retter sig primært mod AMU-målgruppen – dvs. personer med en uddannelsesbaggrund til og med erhvervsuddannelsesniveauet og nogen erfaring med administrative opgaver. Personer med en højere uddannelse kan også deltage på jobkurset, men er ikke berettiget til uddannelsesydelse.

**Forudsætninger**

Ingen.

**Specielle oplysninger**

Der udstedes kursusbevis efter gældende regler for Arbejdsmarkedsuddannelserne. Hvis du ønsker en mere detaljeret beskrivelse af de enkelte kurser, kan du finde dem på www.efteruddannelse.dk

**Tider**

Daglig undervisning i tiden 08:10-15:30. Visse dage kan være helt undervisningsfri. Vi tager forbehold for eventuelle ændringer i tider inden for kursusperioden, fagenes rækkefølge samt ændringer af lovmæssig art.

**Varighed**

21 dage.

**Pris**

11.172 kr.

**Kilder**

Bakken: www.bakken.dk · BonBon-Land: http://bonbonland.dk/ · Niels Brock: https://www.brock.dk/ · Tivoli: https://www.tivoli.dk/ · Legoland: https://www.legoland.dk · Universe: http://universe.dk/
Teksterne er redigeret og let omskrevet til prøveformål.`,
    questions: [
      // Søg informationer under 'Forlystelsesparker før og nu'
      { type: "short", n: 1, q: "(Forlystelsesparker før og nu) Bakken er i dag et forlystelsessted med faste artister. Hvilket publikum er Bakkens Pjerrot især beregnet for?",
        accept: uniq(combos(["", "for", "han er beregnet for", "han er især beregnet for", "den er beregnet for", "især for", "især"], ["et børnepublikum", "børnepublikum", "børnepublikummet", "børn", "et publikum af børn", "et publikum med børn"])) },
      { type: "short", n: 2, q: "(Forlystelsesparker før og nu) Bakken har gennem tiden haft forskellige varietéer og cirkusser. Hvad er Cirkusrevyen især blevet berømt for i nyere tid?",
        accept: uniq(combos(["", "for", "den er berømt for", "den er blevet berømt for", "den er især blevet berømt for", "for sine", "sine"], ["parodier og politisk satire", "parodier og satire", "parodier", "politisk satire", "satire", "politisk satire og parodier", "parodi og politisk satire", "parodier og politiske satire"])) },
      // Søg informationer under 'Job i udvalgte forlystelsesparker'
      { type: "short", n: 3, q: "(Job i udvalgte forlystelsesparker) Udleverer Legoland uniformer til alle deres medarbejdere? Svar ’ja’ eller ’nej’.",
        accept: uniq(combos(["nej"], ["", "kun til dem med direkte gæstekontakt", "kun til medarbejdere med direkte gæstekontakt", "kun til de medarbejdere der har direkte gæstekontakt", "det gør de ikke", "kun til nogle"])) },
      { type: "short", n: 4, q: "(Job i udvalgte forlystelsesparker) I Legoland skal man for at få job som fastansat igennem to samtaler. Hvad tager 2. samtale udgangspunkt i?",
        accept: uniq(combos(["", "i", "den tager udgangspunkt i", "samtalen tager udgangspunkt i", "2 samtale tager udgangspunkt i", "udgangspunkt i"], ["en personprofil", "personprofil", "personprofilen", "en online personprofil", "online personprofil", "den online personprofil", "ens online personprofil", "din online personprofil", "en online personprofil som man udfylder på forhånd", "en online personprofil som man har udfyldt på forhånd", "den personprofil man har udfyldt på forhånd", "en personprofil man udfylder online på forhånd", "personprofilen man har udfyldt online", "en personprofil der er udfyldt på forhånd", "den personprofil man har udfyldt online"])) },
      { type: "short", n: 5, q: "(Job i udvalgte forlystelsesparker) Der er sociale arrangementer i Legoland. Hvor ofte har man sådanne arrangementer i løbet af en sæson?",
        accept: uniq(combos(["", "mindst", "der er mindst", "man har mindst", "der afholdes mindst"], ["et arrangement hver måned", "ét arrangement hver måned", "et hver måned", "ét hver måned", "en gang om måneden", "én gang om måneden", "en gang hver måned", "én gang hver måned", "hver måned", "et om måneden", "ét om måneden", "et arrangement om måneden", "1 gang om måneden", "1 arrangement hver måned", "1 hver måned", "månedligt", "en gang i måneden", "én gang i måneden"])) },
      { type: "short", n: 6, q: "(Job i udvalgte forlystelsesparker) Tivoli søger servicemedarbejdere. Hvor gammel skal man minimum være for at blive ansat på Tivolis spisesteder?",
        accept: uniq(combos(["", "minimum", "mindst", "man skal være", "man skal minimum være", "man skal være fyldt", "fyldt", "man skal mindst være", "du skal være fyldt"], ["15", "15 år", "15 år gammel", "femten år", "femten"])) },
      { type: "short", n: 7, q: "(Job i udvalgte forlystelsesparker) Hvorfor mener man i Tivoli, at servicemedarbejdere i billetsalget har et stort ansvar for at sikre tivoligæsten en god begyndelse på Tivolituren?",
        accept: uniq(combos(["", "fordi", "fordi det er", "det er fordi"], ["du er det første", "de er det første", "man er det første", "servicemedarbejderne er det første", "de er de første", "de er den første"], ["tivoligæsten oplever", "gæsten oplever", "gæsterne oplever", "tivoligæsterne oplever", "tivoligæsten oplever af tivoli", "gæsten oplever af tivoli", "gæsterne oplever af tivoli", "tivoligæsterne oplever af tivoli", "gæsten møder", "gæsterne møder", "tivoligæsten møder", "gæsterne ser", "gæsten ser"])
          .concat(combos(["", "fordi"], ["det er dem gæsten møder først", "det er dem gæsterne møder først", "gæsterne møder dem først", "gæsten møder dem først", "de er det første gæsterne møder i tivoli"]))) },
      { type: "short", n: 8, q: "(Job i udvalgte forlystelsesparker) Tivoli har som arbejdsplads en medarbejdergruppe med folk i mange aldre og fra mange lande og med næsten lige mange kvinder og mænd. Hvorfor er man i Tivoli stolt af dét?",
        accept: uniq(combos(["", "fordi", "det er fordi"], ["vi lægger", "man lægger", "tivoli lægger", "de lægger", "de lægger stor", "man lægger stor", "tivoli lægger stor"], ["vægt på mangfoldighed", "vægt på mangfoldigheden"])
          .concat(combos(["", "fordi"], ["mangfoldighed er vigtig for dem", "mangfoldighed er vigtig for tivoli", "de synes mangfoldighed er vigtig", "de vægter mangfoldighed", "tivoli vægter mangfoldighed", "man vægter mangfoldighed"]))) },
      { type: "short", n: 9, q: "(Job i udvalgte forlystelsesparker) Hvad kræver Tivoli af kontrollørerne, så der er sikkerhed for, at der hele tiden er en kontrollør på alle forlystelserne?",
        accept: uniq(combos(["", "at", "de skal", "at de", "man skal", "at man", "du skal", "at du", "kontrollørerne skal", "at kontrollørerne"], ["holder", "holde", "holder sin", "holde sin", "holde deres", "holder deres", "holder din", "holde din", "holde ens"], ["pause"], ["på præcis det tidspunkt der er aftalt", "præcis på det tidspunkt der er aftalt", "på det tidspunkt der er aftalt", "på det aftalte tidspunkt", "på præcis det aftalte tidspunkt", "præcis på det aftalte tidspunkt", "præcis til den aftalte tid", "til den aftalte tid", "på præcis det tidspunkt som er aftalt"])
          .concat(combos(["", "at", "de skal", "at de", "man skal", "at man"], ["holde pauserne på de aftalte tidspunkter", "holder pauserne på de aftalte tidspunkter", "holde pause præcis når det er aftalt", "holder pause præcis når det er aftalt"]))
          .concat(combos(["", "at"], ["din pause holder du på præcis det tidspunkt der er aftalt", "ens pause holder man på præcis det tidspunkt der er aftalt", "pausen holdes på præcis det tidspunkt der er aftalt", "pausen skal holdes på præcis det tidspunkt der er aftalt", "pausen skal holdes på det aftalte tidspunkt"]))) },
      { type: "short", n: 10, q: "(Job i udvalgte forlystelsesparker) Universe investerer meget i nye medarbejdere, før de bliver ansat. Hvad investerer de blandt andet i?",
        accept: uniq(combos(["", "i", "de investerer i", "de investerer blandt andet i", "blandt andet i", "via", "gennem"], ["uddannelse", "uddannelse inden ansættelse", "uddannelse inden ansættelsen", "uddannelse før ansættelse", "uddannelse af medarbejderne", "uddannelse af nye medarbejdere", "uddannelsesforløb", "rekruttering", "rekrutteringsworkshop", "rekrutteringsworkshoppen", "en rekrutteringsworkshop", "rekrutteringsworkshops", "ansættelsesforløb", "ansættelsesforløbet", "et ansættelsesforløb", "uddannelse og rekruttering", "rekruttering og uddannelse", "uddannelse rekruttering og ansættelsesforløb", "uddannelse og ansættelsesforløb", "rekrutteringsworkshop og uddannelse", "uddannelse og rekrutteringsworkshop"])) },
      { type: "short", n: 11, q: "(Job i udvalgte forlystelsesparker) Man kan i Uddannelsesforløb 3 (U3) i Universe blive oplært til at varetage vagter i parken. Hvad afhænger længden af U3 af?",
        accept: uniq(combos(["", "af", "det afhænger af", "længden afhænger af", "den afhænger af", "antallet af dage afhænger af"], ["hvor mange", "hvilke"], ["kompetencer"], ["deltageren bliver oplært i", "deltagerne bliver oplært i", "man bliver oplært i", "de bliver oplært i", "du bliver oplært i", "deltageren skal oplæres i", "man skal oplæres i", "man skal læres op i", "man bliver lært op i", "deltageren bliver lært op i", "deltageren lærer", "man lærer"])
          .concat(combos(["", "af", "det afhænger af"], ["antallet af kompetencer", "antallet af kompetencer deltageren bliver oplært i", "antallet af kompetencer man bliver oplært i", "hvor mange og hvilke kompetencer deltageren bliver oplært i", "hvilke og hvor mange kompetencer deltageren bliver oplært i", "hvor mange kompetencer", "hvilke kompetencer"]))) },
      { type: "short", n: 12, q: "(Job i udvalgte forlystelsesparker) Under ’FAQ – Spørgsmål og svar’ om sæsonarbejde i Universe kan man få svar på, hvornår man kan forvente at skulle arbejde. I hvilken periode kan man ikke forvente at få ferie?",
        accept: uniq(combos(["", "i", "i perioden", "perioden", "fra", "i perioden fra", "man kan ikke få ferie i", "man kan ikke forvente at få ferie i"], ["højsæsonen", "slut juni til midt august", "højsæsonen slut juni til midt august", "højsæsonen fra slut juni til midt august", "slut juni til midt august højsæsonen", "slutningen af juni til midten af august", "højsæsonen i perioden slut juni til midt august", "sidst i juni til midt i august", "fra slut juni til midt august"])) },
      // Søg informationer under 'Kurser der forbereder til job i en forlystelsespark'
      { type: "short", n: 13, q: "(Kurser der forbereder til job i en forlystelsespark) ’Job i BonBon-Land’ er et kursus i 3 faser, der kan hjælpe én til en jobsamtale. I hvilken fase får man via samtaler hjælp til at sætte ord på sine kompetencer?",
        accept: uniq(combos(["", "i", "det er i", "det er"], ["fase 1", "fase 1 ansøgningen", "fase 1 – ansøgningen", "fase et", "fase 1 som hedder ansøgningen", "ansøgningen", "ansøgningsfasen", "første fase", "den første fase", "den første fase ansøgningen", "1 fase", "fase nr 1"])) },
      { type: "short", n: 14, q: "(Kurser der forbereder til job i en forlystelsespark) Kursusforløbet ’Turisme og oplevelsesøkonomi’ på Niels Brock har forskellige målgrupper. Hvilke personer i målgruppen kan ikke få uddannelsesydelse?",
        accept: uniq(combos(["", "det kan", "det er"], ["personer", "dem", "folk", "de", "mennesker", "deltagere"], ["med en højere uddannelse", "med højere uddannelse", "med en højere uddannelse kan ikke", "der har en højere uddannelse", "som har en højere uddannelse", "med en lang uddannelse", "med en videregående uddannelse"])
          .concat(["en højere uddannelse", "højere uddannelse", "højtuddannede", "højtuddannede personer"])) },
      { type: "short", n: 15, q: "(Kurser der forbereder til job i en forlystelsespark) Der er flere jobmuligheder efter kursusforløbet ’Turisme og oplevelsesøkonomi’. Hvilke steder udover forlystelsesparker nævnes som steder, hvor man kan søge ansættelse? Nævn mindst to.",
        accept: uniq([places[0][1] + ", " + places[1][1] + " og " + places[2][1]].concat(twoOrThree())) }
    ]
  };

  const ligestilling = {
    id: "pd3-18m-2", group: G, real: true,
    title: "Delprøve 2A – Ligestilling og lederjob",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 45,
    instruction: "Læs teksterne Karriere er lige så vigtig som børn og Dansk erhvervsliv mangler kvinder i toppen. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1**

**Karriere er lige så vigtig som børn**
**Tine Rasmussen er jurist og gift med Peter Nyborg, der også er jurist. De er lige blevet forældre, men mener godt, at man både kan gøre karriere og have børn – også som kvinde.**

Tine og Peter sidder hjemme i stuen, da avisens journalist kommer forbi til interview. Tine er på barsel med deres seks måneder gamle datter Sofie, men om en uge er det Peters tur. I modsætning til mange andre familier, hvor det kun er kvinden, der holder en længere orlov sammen med barnet, så er fordelingen mellem Tine og Peter mere lige, så Tine holder seks måneder og Peter fire måneder. Peter vil nemlig ikke forringe Tines muligheder for at gøre karriere, bare fordi hun er kvinde:

”Jeg vil ikke kalde mig feminist, men jeg går ind for, at kvinder skal have de samme muligheder for at gøre karriere som mænd, hvis de ønsker det. Og så skal traditioner ikke stå i vejen for, om det kan lade sig gøre. Jeg mener, at det bør være op til den enkelte familie at kunne vælge frit. Jeg vil meget gerne holde barsel, og jeg sætter stor pris på at have muligheden. Jeg har altid været glad for børn, og jeg vil ikke gå glip af det privilegium, det er at kunne bruge fire måneder sammen med Sofie,” siger Peter.

**Børn og karriere**
Både Tine og Peter har begge to hele tiden vidst, at de både vil have familie og karriere, og også at de vil deles om at holde orlov og passe børn. De mener ikke, at der er en modsætning mellem at være forældre og have ambitioner på arbejdet – det er blot et spørgsmål om planlægning og prioritering. Tine har heller ikke planer om at gå på deltid på noget tidspunkt, sådan som mange kvinder gør.

”Jeg har ikke noget imod, at kvinder vælger at gå på deltid, overhovedet ikke. Jeg synes, folk skal gøre, som det passer dem bedst, og for nogle familier er det den rigtige løsning. Men vi har valgt, at vi begge vil spille en lige stor rolle i familien såvel som på arbejdet, og jeg mener faktisk også, at det er godt for børn at komme i institution og få input fra andre børn og voksne lige fra starten. Jeg tror, jeg ville blive sur og bitter, hvis jeg skulle gå på deltid i stedet for at gøre karriere – mit mål er at blive partner og komme med i ledelsen. Derfor glæder det mig også, at Peter også gerne vil gå hjemme en periode.”

Tine og Peter har fuld tillid til de lokale daginstitutioner, og når de om nogle år efter planen er blevet partnere i hver deres advokatfirma, vil der måske også være råd til at få en au-pair. Hvis Sofie ikke kan få den ønskede institutionsplads med det samme, når Peter skal tilbage på arbejde, er det heller ikke det store problem. Så kan Peters mor heldigvis passe Sofie. De ser med andre ord ingen problemer, de ikke kan løse i fællesskab, hverken på kort eller langt sigt.

På Tines arbejdsplads er de meget positive overfor, at Tine ønsker at komme hurtigt tilbage på jobbet, og de er glade for, at hun er ambitiøs i forhold til at gøre karriere. På advokatkontoret vil de nemlig meget gerne have flere kvinder i toppen af ledelsen. Der mangler ikke kvinder blandt de ansatte generelt, men i den øverste ledelse er der kun få, og det er et problem. Der er nemlig meget potentiale i de yngre kvinder, og når de vælger en karriere som topleder fra, går firmaet glip af vigtige kompetencer. Samtidig er ca. halvdelen af klienterne kvinder, og derfor skal der også være en bedre balance mellem kvinder og mænd på topniveau på advokatkontoret, synes Mogens Krogh-Thomsen, der er den øverste chef på Tines arbejdsplads.

**Tekst 2**

**Dansk erhvervsliv mangler kvinder i toppen**

Selvom Danmark er et af de lande i verden med størst ligestilling, er der relativt få kvinder i toppen af dansk erhvervsliv. Antallet af kvindelige ledere i toppen af de største danske virksomheder er kun steget fra ca. 10 til 15 procent fra 1995 til 2015. Antallet af kvinder i bestyrelser er i samme periode steget fra 3 til 6 procent.

Det er overraskende, at det går så dårligt med ligestillingen i toppen af dansk erhvervsliv. Der er nemlig i Danmark en høj grad af frihed for både kvinder og mænd til at vælge den uddannelse, det arbejde og det liv, de ønsker.

Flere undersøgelser giver den forklaring, at kvinder ikke er så motiverede for at få en toppost som mænd. Der er dog kun få af undersøgelserne, der forsøger at forklare, hvorfor det er sådan. I disse undersøgelser fremgår det, at kvinders syn på ledelse er anderledes end mænds.

I mange virksomheder er der en udbredt maskulin og stereotyp opfattelse af, hvordan man skal være topleder. Man skal kunne markere sig og få sine synspunkter igennem. Det vil blandt andet sige, at man til møder skal være parat til at tage ordet og give udtryk for markante holdninger.

For mange kvinder er det svært at se sig selv som chef, hvis man skal være chef på denne måde. Det kan være én af grundene til, at der er færre kvinder end mænd, der går efter en toppost.

Men det er et problem. Der er nemlig i høj grad brug for kvinderne. Undersøgelser viser, at kvinder er bedre til at formulere sig tydeligt overfor medarbejderne, og de er også mere støttende. De er samtidig grundigere og kommer med flere nye ideer end deres mandlige kolleger. Det er klart, at det er noget, der er brug for i virksomhederne.

**Arven fra 1970’erne**
At der mangler kvinder i topledelserne i Danmark hænger altså blandt andet sammen med en traditionel og stereotyp opfattelse af rollen som topleder.

Det handler dog også om familiestruktur. I forbindelse med børnefødsler er det i langt de fleste familier kvinden, der tager en lang orlov og ikke manden. Det gør hun, selvom det har vist sig, at det betyder meget for hendes karrieremuligheder efter barselsorloven.

Når mange danske kvinder alligevel vælger at tage en lang barselsorlov, hænger det til dels sammen med kvindernes vej ud på arbejdsmarkedet i 1970’erne. Kvinderne kom i stort tal til at arbejde i omsorgsfag som sygeplejerske og pædagog. Inden for disse fag, hvor kvinderne var i overtal, var det almindeligt, at kvinderne gik hjemme i en længere periode med børnene.

I dag arbejder kvinder indenfor mange andre fag, og de har gode job med karrieremuligheder. De har dog taget den lange barselsorlov med sig, og de er måske hjemme på orlov i op til et år. Hvis man som medarbejder er væk fra arbejdet så længe, kan det sende et signal til arbejdsgiveren om, at man ikke er ambitiøs og engageret. Hvis man derimod deles mere lige i familien, viser man, at der er opbakning hjemmefra, og det påvirker de positive forventninger til kvinden.

**Kvindekvoter og lovgivning**
I flere lande har man forsøgt sig med kvoter og lovgivning for at gøre noget ved problemet med for få kvinder i toplederjob.

I Norge indførte man som det første land i verden i 2006 kvoter for andelen af kvinder i bestyrelser i store virksomheder. I Danmark har man også diskuteret kvoteordninger, men der har aldrig været politisk stemning for den norske model. Et vigtigt argument er, at man ikke skal se på ansøgeres køn, men udelukkende på deres kvalifikationer. Det er et argument, der i høj grad støttes af kvinder, som ikke vil vælges til et job på grund af deres køn.

Alligevel er der en erkendelse af, at der er brug for at gøre noget. I 2012 vedtog Folketinget en lov, som forpligtede de 1.200 største danske virksomheder til at lave planer for at få flere kvindelige topledere. Med loven forsøgte man at motivere virksomhederne til at få flere kvinder i topledelserne uden at bruge tvang.

Indtil nu har lovgivningen dog kun haft en ringe effekt. Af en rapport lavet af Institut for Menneskerettigheder i 2016 fremgår det, at kun halvdelen af virksomhederne lever op til forpligtelserne i loven. Kvindekvoterne i Norge har heller ikke haft den ønskede effekt. Der er kommet flere kvinder ind i bestyrelserne i de store firmaer, men der er ikke kommet væsentligt flere kvindelige topledere.

**Lederrollen skal nytænkes**
For at få flere kvinder i toppen af dansk erhvervsliv er det ikke tilstrækkeligt, at man blot opfordrer flere kvinder til at søge et lederjob. Der skal også ske en ændring i opfattelsen af lederrollen. De nuværende ledelser må erkende, at der er brug for kvindernes kompetencer. Derudover skal de også have mod til at ansætte nogen, der er anderledes end dem selv. Ledergrupper med medlemmer af samme køn og holdninger kan nemlig nogle gange nå frem til en beslutning ved blot at kigge på hinanden. Det føles både trygt og giver en fornemmelse af at være handlekraftig og effektiv, men det er ikke nødvendigvis god ledelse.

Der er brug for mere klarhed omkring, hvad det vil sige at være en dygtig topleder, og hvordan arbejdslivet kan indrettes. De fleste er klar over, at et toplederjob er godt lønnet og forbundet med høj status. Det er også velkendt, at et toplederjob kræver et stort engagement og mange arbejdstimer.

Men virksomhederne skal også være bedre til at fortælle, at man i mange toplederjob selv kan styre arbejdstiden og nogle gange arbejde hjemmefra. Dermed kan et job som topleder også være med til at gøre det lettere at kombinere job og familieliv.

Det er vigtigt, at virksomhederne bliver dygtigere til at se og anerkende kvindernes potentialer. Det er ikke blot vigtigt for ligestillingen generelt, men i høj grad også for virksomhederne.`,
    questions: [
      { type: "mc", n: 1, q: "Tekst 1: Hvilken holdning svarer bedst til det, som Peter Nyborg giver udtryk for?",
        options: ["Kvinder bør generelt holde en kortere orlov, så mænd får mere tid sammen med deres helt små børn.", "Der er normer i samfundet, der generelt gør det sværere for mange kvinder at gøre karriere.", "Det er statens ansvar at få mænd til at tage en længere orlov, så kvinder får bedre muligheder for at gøre karriere."], answer: 1 },
      { type: "mc", n: 2, q: "Tekst 1: Hvilket synspunkt giver Tine Rasmussen blandt andet udtryk for?",
        options: ["Det er vigtigt, at fædrene spiller en større rolle i børneopdragelsen, når børnene er helt små.", "Det kan i nogle familier være et godt valg, at kvinden vælger at arbejde på deltid.", "Det er generelt bedst for et parforhold, at kvinden også har gode muligheder for at gøre karriere."], answer: 1 },
      { type: "mc", n: 3, q: "Tekst 1: Hvordan foretrækker Tine og Peter, at Sofie skal passes, lige når Peter skal tilbage på arbejde?",
        options: ["Af en au-pair.", "Af sin farmor.", "I en vuggestue."], answer: 2 },
      { type: "mc", n: 4, q: "Tekst 2: Der er forskellige årsager til, at der er så få kvindelige topledere i Danmark. Hvilken af følgende årsager er nævnt i teksten?",
        options: ["Kvinder har ikke let ved at identificere sig med den klassiske rolle som topleder.", "Kvinder har en anden ledelsesstil, end den som virksomhederne har brug for.", "Mænd er generelt mere engagerede i deres arbejde, end kvinder er."], answer: 0 },
      { type: "mc", n: 5, q: "Tekst 2: Der er flere årsager til, at kvinder i forbindelse med barsel tager en længere orlov end mænd, selvom de har et job med karrieremuligheder. Hvilken af følgende årsager er nævnt i teksten?",
        options: ["Der eksisterer nogle traditioner for lang orlov, der stammer fra kvindefagene.", "Kvinder er fortsat ikke lige så ambitiøse og engagerede i deres arbejde som mænd.", "Det er ikke fuldt ud accepteret i samfundet, at mænd tager en lige så lang orlov som kvinder."], answer: 0 },
      { type: "mc", n: 6, q: "Tekst 2: Kvinder har forskellige holdninger til kvoteordninger. Hvilken af følgende er nævnt i teksten?",
        options: ["Kvoteordninger er et enkelt og effektivt middel, hvis man ønsker hurtigt at øge andelen af kvindelige ledere i danske virksomheder.", "Kvoteordninger er uhensigtsmæssige, da kun kompetencer bør tages i betragtning, når virksomheder ansætter nye ledere.", "Kvoteordninger er ikke nødvendige, da det er mere effektivt at motivere virksomhederne end at tvinge dem."], answer: 1 },
      { type: "mc", n: 7, q: "Tekst 2: Virksomhederne kan få flere kvindelige topledere på flere måder. Hvilken måde nævnes i teksten?",
        options: ["Virksomhederne kan forfremme flere af deres kvindelige medarbejdere til stillinger i topledelsen.", "Virksomhederne kan tilbyde deres kvindelige medarbejdere særligt gode lønforhold.", "Virksomhederne kan gøre det klart, at et job som topleder medfører fleksibilitet i forhold til arbejdstid og arbejdssted."], answer: 2 }
    ]
  };

  const boligmangel = {
    id: "pd3-18m-3", group: G, real: true,
    title: "Delprøve 2B – Boligmangel i byerne",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Boligmangel i byerne. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Boligmangel i byerne**

Byerne tiltrækker alle aldersgrupper, og det bliver mere og mere [[0]] for blandt andet studerende at finde en bolig i de store byer, fordi boligpriserne er så høje. Der er samtidig mange regler for nyt boligbyggeri, så det er dyrt for byggefirmaerne at bygge billige boliger.

Indbyggertallet og behovet for flere boliger stiger i de større byer, og det samme gør boligpriserne, særligt i København. Der bliver nemlig flere indbyggere i København, dels fordi der dør færre københavnere, end der bliver født, dels fordi der flytter folk til udefra – både unge og ældre. [[1]] gør privat udlejning til turister situationen endnu sværere for de unge. Turister er nemlig villige til at betale en meget høj pris pr. døgn og [[2]] er, at prisen på lejeboliger stiger endnu mere. Det er en tendens, der efterhånden kan mærkes i alle de større byer, og det [[3]], at det næsten er en umulig opgave for nye studerende at få tag over hovedet i byerne, fordi de ikke har råd til at bo her. Det er lettere udenfor de store byer, og cheføkonom i BRF-kredit Ulrikke Egelund mener derfor, at de unge bliver nødt til at justere deres forventninger til deres nye boligs [[4]]:

”Selvfølgelig ville det være fantastisk at kunne bo i gåafstand fra sit studie og de bedste cafeer, men vi må være realistiske. (…) København er en storby. Det er en dyr storby. Og boligmarkedet er ikke til, at man bare lige kan få den fede lejlighed tæt på Kongens Nytorv”¹, siger hun.

I Danmarks næststørste by Aarhus er det [[5]] svært for unge studerende at finde en bolig, der er til at betale. Her tilbydes de studerende midlertidige boliger i skurvogne, som man ellers normalt finder ved byggepladser. Det er dog ikke en særlig god løsning for de studerende, så de flytter, hvis de kan få en bedre bolig.

Men det er svært at finde en god og billig bolig. Det vil [[6]] være bedst for de boligløse unge i alle landets større byer, hvis der bliver bygget flere nye og billige boliger. Hvis det skal kunne betale sig for byggefirmaerne at starte et byggeri, kan det dog være nødvendigt, at kommunerne [[7]] reglerne for nybyggerier. Frank Jensen, overborgmester i København, foreslår fx, at de nye boliger ikke skal have et bestemt antal parkeringspladser. Det er ellers lige nu et krav til nyt byggeri:

”Det er selvfølgelig også vigtigt at have p-pladser, men vi skal også placere dem, hvor der er behov. Og der, hvor vi bygger ungdomsboliger, der er behovet mindre”², siger han.

Der er uenighed på Rådhuset om, hvorvidt der må bygges nye boliger uden parkeringspladser, men Frank Jensen [[8]], at der skal være lige så mange parkeringspladser ved ungdomsboliger som ved andre typer af boliger. For ham er det vigtigere, at København giver plads til unge med et lille budget, end at der er et bestemt antal parkeringspladser.

¹ Politiken den 30.10.2013, Alvorlig boligmangel fratager Københavns unge kollegiepladser.
² Berlingske Tidende den 9.4.2014, København baner vej for flere ungdomsboliger.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["Derimod", "Til gengæld", "Derudover", "I stedet"],
        2: ["forudsætningen", "hensigten", "konsekvensen", "forklaringen"],
        3: ["sikrer", "betyder", "forudsætter", "skyldes"],
        4: ["beliggenhed", "husleje", "størrelse", "indretning"],
        5: ["ligeledes", "som nævnt", "trods alt", "omvendt"],
        6: ["desuden", "sjældent", "derfor", "alligevel"],
        7: ["følger", "overholder", "strammer", "ændrer"],
        8: ["foreslår", "afviser", "accepterer", "forklarer"]
      },
      example: { 0: "vanskeligt" },
      answers: { 1: "Derudover", 2: "konsekvensen", 3: "betyder", 4: "beliggenhed", 5: "ligeledes", 6: "derfor", 7: "ændrer", 8: "afviser" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(forlystelsesparker, ligestilling, boligmangel);

  const X = PD2.EXAMS.pd3;
  const SESSION = "Maj-juni 2018";

  // ---------- Skriftlig fremstilling maj-juni 2018 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-18m-w1", delprove: 1, real: true, year: 2018, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (maj-juni 2018)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din ven Sofie, der bor i en lejlighed, hvor huslejen er steget. Hun overvejer derfor at leje et værelse ud for at få råd til at blive boende. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Nu har alle lejlighederne i vores opgang fået fine badeværelser og nye køkkener. Det er dejligt med nyt bad og køkken, men desværre er huslejen steget, så jeg overvejer at leje mit lille arbejdsværelse ud til en studerende – hvis det altså ikke er for besværligt. «Hvordan var det for dig, da du havde en lejer boende?» " +
        "Jeg kan selvfølgelig også prøve at finde en mindre lejlighed med en billigere husleje. «Synes du, det er en bedre idé?» " +
        "Jeg håber, I er glade for jeres nye hus. Det må være dejligt med en have og masser af plads. «Men hvordan er det at have fået langt til arbejde?» Jeg tænker faktisk selv på at flytte udenfor byen på et tidspunkt, men foreløbig passer det mig godt at bo her. " +
        "Det må også være godt for børnene med egne værelser, nye omgivelser og nye venner. «Hvordan har de haft det med at flytte?»...\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Nu har alle lejlighederne i vores opgang fået fine badeværelser og nye køkkener. Det er dejligt med nyt bad og køkken, men desværre er huslejen steget, så jeg overvejer at leje mit lille arbejdsværelse ud til en studerende – hvis det altså ikke er for besværligt. Hvordan var det for dig, da du havde en lejer boende?\n\n" +
        "Jeg kan selvfølgelig også prøve at finde en mindre lejlighed med en billigere husleje. Synes du, det er en bedre idé?\n\n" +
        "Jeg håber, I er glade for jeres nye hus. Det må være dejligt med en have og masser af plads. Men hvordan er det at have fået langt til arbejde? Jeg tænker faktisk selv på at flytte udenfor byen på et tidspunkt, men foreløbig passer det mig godt at bo her.\n\n" +
        "Det må også være godt for børnene med egne værelser, nye omgivelser og nye venner. Hvordan har de haft det med at flytte?...",
      underlined: [
        "Hvordan var det for dig, da du havde en lejer boende?",
        "Synes du, det er en bedre idé?",
        "Men hvordan er det at have fået langt til arbejde?",
        "Hvordan har de haft det med at flytte?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvordan var det for dig, da du havde en lejer boende?",
        "Understreget: Synes du, det er en bedre idé? (at finde en mindre lejlighed med en billigere husleje)",
        "Understreget: Men hvordan er det at have fået langt til arbejde?",
        "Understreget: Hvordan har de haft det med at flytte? (børnene)",
        "Foreslå, at Sofie kommer på besøg hos jer."
      ],
      phrases: ["Tak for din mail.", "Du spørger, hvordan det var at have en lejer boende.", "Hvis jeg var dig, ville jeg …", "Med hensyn til …", "Det har været en stor omstilling at …", "Børnene har haft det …", "Har du ikke lyst til at komme på besøg …?", "Kærlig hilsen"],
      model: `Hej Sofie

Tak for din mail. Det lyder dejligt med nyt bad og køkken, men ærgerligt med huslejen.

Du spørger, hvordan det var at have en lejer boende. Det var faktisk en god oplevelse. Min lejer var en sød studerende, som var stille og ryddelig. Vi lavede en kontrakt med klare regler om rengøring og gæster, og så gik det fint. Det eneste, jeg savnede, var lidt mere privatliv.

Hvis jeg var dig, ville jeg ikke finde en mindre lejlighed. Du er jo så glad for din lejlighed og dit kvarter, og det er både dyrt og besværligt at flytte. Prøv hellere med en lejer først.

Vi er rigtig glade for huset, men det har været en stor omstilling at få langt til arbejde. Jeg kører 45 minutter hver vej, men jeg hører lydbøger i bilen, så det går.

Børnene havde det lidt svært i starten, men nu har de fået nye venner i skolen, og de elsker deres egne værelser.

Har du ikke lyst til at komme på besøg en weekend snart? Så kan du se huset og haven.

Kærlig hilsen
Maria`
    },
    {
      id: "pd3-18m-w2a", delprove: 2, real: true, year: 2018, session: SESSION,
      title: "2A: Forældre for første gang (maj-juni 2018)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Forældre for første gang. " +
        "Gennemsnitsalderen for førstegangsfødende kvinder og førstegangsfædre i perioden 1988-2015. Linjediagram med to linjer: gennemsnitsalder for førstegangsfødende kvinder (blå) og gennemsnitsalder for førstegangsfædre (grøn). " +
        "Linjerne (aflæst fra diagrammet, ca.-tal i år, kvinder / fædre): 1988 26,0 / 28,6 · 1991 26,6 / 29,1 · 1994 27,1 / 29,6 · 1997 27,6 / 30,1 · 2000 28,1 / 30,6 · " +
        "2003 28,6 / 31,0 · 2006 28,9 / 31,3 · 2009 29,0 / 31,3 · 2012 29,0 / 31,4 · 2015 29,1 / 31,3. " +
        "Kilde: Danmarks Statistik. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2018m/foraeldre-diagram.png",
      imageAlt: "Linjediagram: Gennemsnitsalderen for førstegangsfødende kvinder og førstegangsfædre i perioden 1988-2015 (alder i år, kvinder / fædre). 1988: ca. 26,0 / 28,6. 1991: 26,6 / 29,1. 1994: 27,1 / 29,6. 1997: 27,6 / 30,1. 2000: 28,1 / 30,6. 2003: 28,6 / 31,0. 2006: 28,9 / 31,3. 2009: 29,0 / 31,3. 2012: 29,0 / 31,4. 2015: 29,1 / 31,3. Begge linjer stiger jævnt frem til ca. 2006 og flader derefter ud.",
      chart: {
        type: "line",
        title: "Gennemsnitsalderen for førstegangsfødende kvinder og førstegangsfædre i perioden 1988-2015",
        unit: "år", approx: true,
        source: "Danmarks Statistik",
        series: ["Gennemsnitsalder for førstegangsfødende kvinder", "Gennemsnitsalder for førstegangsfædre"],
        groups: [
          { label: "1988", values: [26.0, 28.6] },
          { label: "1991", values: [26.6, 29.1] },
          { label: "1994", values: [27.1, 29.6] },
          { label: "1997", values: [27.6, 30.1] },
          { label: "2000", values: [28.1, 30.6] },
          { label: "2003", values: [28.6, 31.0] },
          { label: "2006", values: [28.9, 31.3] },
          { label: "2009", values: [29.0, 31.3] },
          { label: "2012", values: [29.0, 31.4] },
          { label: "2015", values: [29.1, 31.3] }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til den udvikling, diagrammet viser.",
        "Vurder fordele og ulemper ved at vente med at få børn, til man er i slutningen af 30’erne, fordi man har ambitioner om at gøre karriere, inden man får børn."
      ],
      phrases: ["Diagrammet viser gennemsnitsalderen for …", "I 1988 var … i gennemsnit ca. … år.", "Frem til ca. 2006 steg alderen jævnt, og siden …", "Fædrene er hele perioden ca. … år ældre end …", "En årsag til udviklingen kan være, at …", "En fordel ved at vente er, at …", "En stor ulempe er dog, at …", "Efter min mening …"],
      model: `Forældre senere og senere

Diagrammet viser gennemsnitsalderen for førstegangsfødende kvinder og førstegangsfædre i perioden 1988-2015. Begge linjer stiger. I 1988 var kvinderne i gennemsnit ca. 26 år, når de fik deres første barn, mens fædrene var ca. 28,5 år. Frem til ca. 2006 steg alderen jævnt, og siden har den næsten ligget stille. I 2015 var kvinderne ca. 29 år og fædrene ca. 31 år. Fædrene er altså i hele perioden ca. to år ældre end mødrene.

Der kan være flere årsager til udviklingen. Mange tager i dag en lang uddannelse, og de vil gerne have et fast job og en god bolig, før de får børn. Desuden rejser mange unge ud i verden, og de vil gerne opleve noget, inden de stifter familie. Prævention gør det også lettere at bestemme, hvornår man vil have børn.

Der er både fordele og ulemper ved at vente med at få børn, til man er i slutningen af 30’erne. En fordel er, at man har nået at gøre karriere og har en bedre økonomi. Man er måske også mere moden og rolig som forælder. En stor ulempe er dog, at det kan være svært at blive gravid, når man er over 35 år. Nogle må have hjælp på en fertilitetsklinik, og nogle får aldrig de børn, de ønsker sig. Desuden har man mindre energi, og bedsteforældrene er ældre og kan ikke hjælpe så meget.

Efter min mening er det ikke en god idé at vente for længe. Man kan godt gøre karriere med små børn, hvis man deler orloven og arbejdet derhjemme ligeligt.`
    },
    {
      id: "pd3-18m-w2b", delprove: 2, real: true, year: 2018, session: SESSION,
      title: "2B: Digitalisering (maj-juni 2018)",
      kind: "Prøveopgave · holdninger og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Digitalisering. " +
        "Samfundet bliver mere og mere digitaliseret, og der er forskellige opfattelser af, hvilke konsekvenser det har for borgerne. Her er der nogle synspunkter: " +
        "• Digitalisering gør det let og hurtigt at komme i kontakt med offentlige myndigheder. • Digitalisering gør det praktisk og enkelt at overføre eller modtage penge. • Digitalisering i folkeskolen gør det lettere for forældre at følge med i børnenes skolegang. • Digitalisering i sundhedssektoren medfører, at personalet har mindre kontakt med patienterne. • Digitalisering og selvbetjening i det offentlige stiller ældre borgere dårligere. • Digitalisering gør det nemmere for it-kriminelle at stjæle og bruge personlige oplysninger. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Digitalisering gør det let og hurtigt at komme i kontakt med offentlige myndigheder.", "Digitalisering gør det praktisk og enkelt at overføre eller modtage penge.", "Digitalisering i folkeskolen gør det lettere for forældre at følge med i børnenes skolegang.", "Digitalisering i sundhedssektoren medfører, at personalet har mindre kontakt med patienterne.", "Digitalisering og selvbetjening i det offentlige stiller ældre borgere dårligere.", "Digitalisering gør det nemmere for it-kriminelle at stjæle og bruge personlige oplysninger."],
      points: [
        "Fortæl kort om dine egne erfaringer med digitalisering.",
        "Kommentér et eller to af synspunkterne fra listen.",
        "Vurdér, hvilken betydning øget digitalisering vil få for borgernes trivsel i fremtiden. Begrund dine synspunkter."
      ],
      phrases: ["Jeg har mange gode erfaringer med …", "Da jeg kom til Danmark, …", "Jeg er enig i, at …", "Til gengæld …", "På den ene side tror jeg, at …", "På den anden side kan …", "Desuden …", "Alt i alt tror jeg, at …"],
      model: `Digitalisering – på godt og ondt

Jeg har mange gode erfaringer med digitalisering. Jeg bruger MitID, e-Boks og netbank hver uge, og jeg kan for eksempel bestille tid hos lægen på min telefon. Da jeg kom til Danmark, var det svært at forstå alle de digitale systemer, men nu sparer de mig for meget tid.

Jeg er enig i, at digitalisering gør det praktisk og enkelt at overføre eller modtage penge. Med MobilePay kan man betale en ven tilbage på få sekunder. Til gengæld er jeg også enig i, at selvbetjening i det offentlige stiller ældre borgere dårligere. Min nabo er 82 år, og hun har ingen computer. Hun bliver frustreret, når hun skal søge om noget hos kommunen, fordi det hele foregår på nettet.

Hvilken betydning vil øget digitalisering få for borgernes trivsel i fremtiden? På den ene side tror jeg, at mange vil få en lettere hverdag. Man kan arbejde hjemmefra, tale med lægen over video og ordne papirarbejdet om aftenen. Det giver mere tid til familien og fritiden. På den anden side kan digitaliseringen føre til ensomhed og stress. Hvis man kun har kontakt med myndighederne gennem en skærm, mister man den personlige kontakt, og mange føler, at de altid skal være online. Desuden er mange bange for, at it-kriminelle stjæler deres personlige oplysninger.

Alt i alt tror jeg, at digitaliseringen vil forbedre trivslen for de fleste, men samfundet skal huske dem, der ikke kan følge med. Derfor skal der altid være mulighed for at tale med et rigtigt menneske.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål maj-juni 2018 ----------
  // q = the obligatory question; follow = the suggested follow-up question. The intro is the examiner's
  // opening sentence from the booklet. The picture sheets have no captions.
  // Emne A and B also exist (with other model answers) in data-pd3-oral.js as pd3-o-frivilligt-arbejde-2018m
  // and pd3-o-sygefravaer-paa-arbejdspladsen-2018m.
  const credit = "Illustration (fra Prøve i Dansk 3, maj-juni 2018)";
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-18m-o-a", title: "Frivilligt arbejde", session: SESSION, year: 2018, real: true, credit,
      intro: "Her er der to billeder, som viser nogle situationer, der handler om emnet ’Frivilligt arbejde’.",
      pictures: [
        { file: "images/pd3-2018m/frivilligt-arbejde-1.jpg", caption: "", credit,
          alt: "En ung kvinde i sportstøj træner et hold piger i håndbold i en sportshal. Hun fløjter i en fløjte og peger, mens pigerne spiller foran et mål.",
          words: ["en frivillig træner", "en sportshal", "håndbold", "at fløjte", "et hold"] },
        { file: "images/pd3-2018m/frivilligt-arbejde-2.jpg", caption: "", credit,
          alt: "Ældre frivillige hjælper børn og unge med lektier ved nogle borde i et bibliotek. På væggen hænger et skilt med ordet ’Lektiehjælp’.",
          words: ["lektiehjælp", "en frivillig", "et bibliotek", "at hjælpe med lektier", "en pensionist"] }
      ],
      first: {
        A: {
          q: "Nogle studerende bruger tid på at lave frivilligt ulønnet arbejde, selvom de også har travlt med deres studier. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for studerendes fremtidige jobmuligheder, at de laver frivilligt arbejde?",
          answer: "Jeg tror, mange studerende laver frivilligt arbejde, fordi det giver mening at hjælpe andre. Studiet er ofte meget teoretisk, og som frivillig kan man bruge det, man lærer, i praksis. Nogle vil også gerne møde nye mennesker og få et netværk uden for universitetet. Desuden ser det godt ud på et CV. Jeg kender en medicinstuderende, der er frivillig træner i en håndboldklub. Hun siger, at det er den bedste pause fra bøgerne.",
          followAnswer: "Jeg tror, det kan forbedre deres jobmuligheder. Arbejdsgivere kan se, at man er engageret og kan tage ansvar, også når man har travlt. Man lærer at samarbejde, løse konflikter og planlægge sin tid, og det er vigtige kompetencer på alle arbejdspladser. Hvis man fx har været leder af en lektiecafé, har man gode eksempler at fortælle om til en jobsamtale. Man kan også få kontakter, som senere kan hjælpe én med at finde et job."
        },
        B: {
          q: "Nogle danskere laver frivilligt ulønnet arbejde, når de er gået på pension. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for pensionisters livskvalitet, at de laver frivilligt ulønnet arbejde?",
          answer: "Jeg tror, mange pensionister laver frivilligt arbejde, fordi de stadig har masser af energi og erfaring. Når man stopper på arbejdet, mister man både sine kolleger og en fast rytme i hverdagen. Som frivillig får man igen noget at stå op til, og man føler sig nyttig. Mange vil også gerne give noget tilbage til samfundet. På billedet ser man fx nogle ældre, der hjælper børn og unge med lektier på et bibliotek.",
          followAnswer: "Jeg tror, det betyder meget for deres livskvalitet. Ensomhed er et stort problem for mange ældre, og frivilligt arbejde giver kontakt til andre mennesker i alle aldre. Man føler sig værdsat og har noget at glæde sig til. Samtidig holder man sig både fysisk og mentalt i gang. Undersøgelser viser også, at aktive ældre ofte er sundere. Derfor tror jeg, at frivilligt arbejde er godt for både pensionisterne og samfundet."
        }
      },
      second: {
        q: "På mange institutioner, fx plejehjem, skoler og museer, bruger man frivillige udover den professionelle arbejdskraft. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Hvilke typer af frivilligt arbejde mener du er mest nyttige for et velfærdssamfund som det danske? Hvorfor?",
        answer: "En fordel er, at de frivillige kan give tid og nærvær, som personalet ofte ikke har. En frivillig kan fx gå en tur med en beboer på plejehjemmet eller læse højt for børnene på skolen. Det giver en bedre hverdag for mange mennesker. En ulempe er, at frivillige ikke har den samme uddannelse som de ansatte, og man kan ikke stille de samme krav til dem. Desuden kan kommunerne fristes til at spare på personalet.",
        followAnswer: "Jeg mener, at de mest nyttige typer af frivilligt arbejde er dem, der handler om fællesskab og omsorg. Det kan være besøgsvenner til ensomme ældre, lektiehjælp til børn eller trænere i sportsklubber. Den slags opgaver kræver ikke en lang uddannelse, men de gør en stor forskel for den enkelte. Staten kan betale for pleje og undervisning, men den kan ikke købe venskab og nærvær. Derfor er frivillige en vigtig del af velfærdssamfundet."
      },
      conclusion: ""
    },
    {
      id: "pd3-18m-o-b", title: "Sygefravær på arbejdspladsen", session: SESSION, year: 2018, real: true, credit,
      intro: "Her er der to billeder, som viser nogle situationer, der handler om emnet ’Sygefravær på arbejdspladsen’.",
      pictures: [
        { file: "images/pd3-2018m/sygefravaer-paa-arbejdspladsen-1.jpg", caption: "", credit,
          alt: "En forkølet kvinde med halstørklæde sidder ved sit skrivebord på et kontor og pudser næse. På skærmen står der ’Deadline’, og på bordet og gulvet ligger brugte papirlommetørklæder og piller. To kolleger og en mand med et papir kigger hen på hende.",
          words: ["at være forkølet", "en deadline", "at smitte", "et papirlommetørklæde", "et kontor"] },
        { file: "images/pd3-2018m/sygefravaer-paa-arbejdspladsen-2.jpg", caption: "", credit,
          alt: "En syg mand i morgenkåbe og hjemmesko sidder i sit køkken med en kop te og ringer i telefon. I taleboblen står der: ’Jeg kommer ikke på arbejde i dag.’",
          words: ["at melde sig syg", "en morgenkåbe", "at ringe til chefen", "at blive hjemme", "at have feber"] }
      ],
      first: {
        A: {
          q: "Nogle mennesker går sommetider på arbejde, selvom de er forkølede. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for ens forhold til kollegerne, at man nogle gange går på arbejde, selvom man er forkølet?",
          answer: "Jeg tror, mange går på arbejde med en forkølelse, fordi de ikke vil svigte deres kolleger. Hvis man bliver hjemme, skal de andre måske lave ens opgaver, og det kan give dårlig samvittighed. Nogle har også en vigtig deadline ligesom kvinden på billedet. Andre er bange for, at chefen synes, de er dovne. Desuden føler man sig ofte ikke rigtig syg, når man bare er lidt forkølet.",
          followAnswer: "Det kan gå begge veje. Nogle kolleger synes, det er flot og pligtopfyldende, at man møder op, når der er travlt. Men mange bliver irriterede, fordi de ikke vil smittes. Hvis halvdelen af afdelingen bliver syg på grund af én person, er det jo ikke en fordel for nogen. Jeg synes derfor, at man bør blive hjemme eller arbejde hjemmefra, hvis man hoster og nyser meget. Så tager man hensyn til de andre."
        },
        B: {
          q: "Pædagoger og sygehjælpere har et højere sygefravær end ingeniører og konsulenter. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for ens forhold til kollegerne, at man har et højt sygefravær?",
          answer: "Jeg tror, det skyldes, at pædagoger og sygehjælpere har et fysisk hårdt arbejde. De løfter meget og har tæt kontakt med børn eller patienter, så de bliver oftere smittet med sygdomme. Mange steder er der også for lidt personale, og det kan give stress og nedslidning. En ingeniør eller en konsulent kan derimod tit arbejde hjemmefra, hvis han føler sig lidt sløj. Derfor bliver han ikke registreret som syg.",
          followAnswer: "Jeg tror, et højt sygefravær kan skabe problemer i forholdet til kollegerne. Når én person ofte er væk, får de andre mere arbejde, og så kan der opstå irritation og sladder. Det gælder især i job, hvor arbejdet ikke kan vente, fx i en børnehave. Men hvis kollegerne kender årsagen, for eksempel en kronisk sygdom, viser de som regel forståelse. Derfor synes jeg, det er en god idé at være åben om det."
        }
      },
      second: {
        q: "Nogle virksomheder gør meget for at reducere de ansattes sygefravær. Virksomhederne tilbyder for eksempel gratis lægetjek og rådgivning om kost og motion. Hvilke fordele og ulemper mener du, der kan være ved, at de gør det?",
        follow: "Synes du, at det er i orden, at en virksomhed blander sig i de ansattes livsstil, eller bør ens livsstil være en privat sag? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at medarbejderne kan opdage helbredsproblemer i tide, fx forhøjet blodtryk. Hvis de spiser sundere og motionerer mere, bliver de sjældnere syge, og det sparer virksomheden for mange penge. Det viser også, at firmaet passer på sine ansatte. En ulempe er, at nogle kan føle, at chefen blander sig i deres privatliv. Desuden hjælper det ikke, hvis sygefraværet i virkeligheden skyldes stress eller et dårligt arbejdsmiljø.",
        followAnswer: "Jeg synes, det er i orden, så længe virksomheden kun giver tilbud og ikke stiller krav. Hvis firmaet tilbyder en frugtordning eller et motionsrum, kan man selv vælge, om man vil bruge det. Men hvis chefen begynder at kommentere, hvad man spiser, eller hvor meget man vejer, går det for langt. Det, man laver i sin fritid, er efter min mening en privat sag. Der skal være en klar grænse mellem arbejde og privatliv."
      },
      conclusion: ""
    },
    {
      id: "pd3-18m-o-c", title: "Medier", session: SESSION, year: 2018, real: true, credit,
      intro: "Her er der to billeder, som viser nogle situationer, der handler om emnet ’Medier’.",
      pictures: [
        { file: "images/pd3-2018m/medier-1.jpg", caption: "", credit,
          alt: "En ældre mand kommer ud fra en kiosk og læser i en avis. Ved siden af kiosken står en ung mand med høretelefoner og kigger på sin mobiltelefon, og en ung kvinde går forbi og kigger også på sin mobil.",
          words: ["en kiosk", "en avis", "en mobiltelefon", "høretelefoner", "at læse nyheder"] },
        { file: "images/pd3-2018m/medier-2.jpg", caption: "", credit,
          alt: "Et par sidder ved morgenbordet. Manden skriver på en bærbar computer med en blog, og kvinden læser nyheder på en tablet. På bordet står kaffe og morgenmad.",
          words: ["et morgenbord", "en blog", "en tablet", "en bærbar computer", "en netavis"] }
      ],
      first: {
        A: {
          q: "Færre og færre danskere køber og læser avis. Hvorfor tror du, det er sådan?",
          follow: "Kan der efter din mening være nogen problemer ved, at færre og færre danskere køber og læser avis? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, færre køber avis, fordi man kan læse nyhederne gratis på nettet og på mobilen. Nyhederne på internettet bliver opdateret hele tiden, mens en papiravis allerede er gammel, når den kommer. Mange unge er slet ikke vant til at læse en avis på papir. Desuden er et abonnement ret dyrt. På billedet ser man fx en ældre mand med en avis, mens de unge kigger på deres mobiltelefoner.",
          followAnswer: "Ja, det tror jeg. Aviserne mister penge, og så har de råd til færre journalister. Det kan gå ud over den grundige og kritiske journalistik, som er vigtig i et demokrati. På nettet læser mange kun overskrifter, og der er også mange falske nyheder. Til gengæld kan man sige, at det er godt for miljøet, at der bliver brugt mindre papir. Mange aviser har heldigvis også en netavis, som man kan abonnere på."
        },
        B: {
          q: "Flere og flere danskere får deres nyheder gennem online-medier. Hvorfor tror du, det er sådan?",
          follow: "Kan der efter din mening være nogen problemer ved, at flere og flere danskere får deres nyheder gennem online-medier? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det er sådan, fordi online-medier er hurtige og nemme at bruge. Man har altid sin mobil med, så man kan læse nyheder i bussen eller i frokostpausen. Nyhederne kommer, lige når der sker noget, og man kan ofte se videoer og skrive kommentarer. Mange online-medier er også gratis. Desuden får mange deres nyheder gennem Facebook og andre sociale medier, hvor vennerne deler artikler.",
          followAnswer: "Ja, der kan godt være nogle problemer. På nettet er det svært at vide, om en nyhed er sand, og falske nyheder kan sprede sig meget hurtigt. Mange læser også kun overskrifterne og ikke hele artiklen. Desuden viser de sociale medier os mest det, vi i forvejen er enige i. Så kan vi få et snævert syn på verden. Derfor er det vigtigt, at man lærer at være kritisk over for sine kilder."
        }
      },
      second: {
        q: "Med blogs og andre online-medier er det i dag nemmere for almindelige mennesker at deltage i den offentlige debat. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Hvad tror du, det betyder for demokratiet, at det i dag er nemmere for almindelige mennesker at deltage i den offentlige debat? Hvorfor?",
        answer: "En fordel er, at alle kan komme til orde, ikke kun politikere og journalister. Almindelige mennesker kan fortælle om deres egne erfaringer, fx med sundhedsvæsenet, og det kan sætte fokus på vigtige problemer. Debatten bliver mere mangfoldig. En ulempe er, at tonen på nettet tit er hård, og nogle mennesker bliver chikaneret. Der bliver også spredt mange forkerte oplysninger, fordi ingen kontrollerer, hvad folk skriver på deres blogs.",
        followAnswer: "Jeg tror, det overvejende er godt for demokratiet. Når flere mennesker deltager i debatten, får politikerne bedre indblik i, hvad borgerne mener. Unge, som ikke læser avis, kan også blive engageret i politik gennem nettet. Men det kræver, at debatten foregår på en ordentlig måde. Hvis folk kun råber ad hinanden eller spreder løgne, kan det skade demokratiet. Derfor skal vi alle tage ansvar for tonen i debatten."
      },
      conclusion: ""
    }
  );
})();
