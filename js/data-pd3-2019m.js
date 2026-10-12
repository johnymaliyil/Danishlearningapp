// Prøve i Dansk 3, maj-juni 2019 (sommer 2019) – læseforståelse, skriftlig fremstilling and
// mundtlig kommunikation (delprøve 2), transcribed from the exam papers:
// Læseforståelse 1: opgavehæfte produktionsnr. 15 and teksthæfte "Danske musikfestivaler" nr. 14;
// Læseforståelse 2: teksthæfte nr. 16 and opgavehæfte nr. 17; skriftlig fremstilling nr. 18;
// picture sheets for mundtlig kommunikation nr. 20 (cropped into images/pd3-2019m/; the sheets do not
// name the illustrator, and the captions printed above the pictures are used as captions) and the
// censor- og eksaminatorhæfte for the oral exam (nr. 21).
// The reading answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur (sommerterminen 2019): delprøve 1 item 3 also accepts
// "(Man kan tjekke ind ved et) særligt indtjekningssted (ved området)", and item 10 also accepts
// "Nye (typer) festivaldeltagere". Delprøve 2A and 2B: no comments from the forcensur.
// Every item in this session has exactly one correct answer in the key (no multi-answer items).
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures and logos from the teksthæfte are left out (they are not needed for any answer).
// Læseforståelse 2 has delprøve 2A (7 × multiple choice, two texts) and 2B (8 × A-D gaps).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points.
// Omregningstabel (sommer 2019): 37-35 = 12, 34-31 = 10, 30-26 = 7, 25-22 = 4, 21-19 = 02, 18-10 = 00, 9-0 = -3.
// The app scores every question as 1, so 2A counts half as much here as at the exam.
// Kept as printed: "bornolmere" (teksthæfte, Søbadet), "overføre penge va sin mobiltelefon" (2A tekst 2),
// the missing full stop after option C in 2A question 6, "Hun skriverr blandt andet" (skriftlig
// fremstilling, delprøve 1) and "udenfor klasselokalerne" (2B list).
// The writing task wording, the friend's e-mail, the oral questions and the chart labels are copied
// from the papers; the chart values are read off the bar chart (ca.-values). All model answers are our
// own (the papers have none).

(function () {
  const G = "PD3 maj-juni 2019";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const musikfestivaler = {
    id: "pd3-19m-1", group: G, real: true,
    title: "Delprøve 1 – Danske musikfestivaler",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i teksthæftet Danske Musikfestivaler. Brug indholdsfortegnelsen. Svar præcist og så kort som muligt på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Musikfestivaler før og nu
   Musikfestival – en tradition i Danmark … side 3
   Nye typer af musikfestivaler … side 3
Tre forskellige musikfestivaler
   Skagen Festival … side 5
   Langelandsfestival … side 6
   Smukfest … side 7
Donationer til velgørenhed
   Roskilde Festival-gruppen … side 10
   Smukfonden … side 10
Fire indtryk af musikfestivaler … side 11
Kilder

**MUSIKFESTIVALER FØR OG NU**

**Musikfestival – en tradition i Danmark**

Mange danskere tager hvert år på musikfestival. Der er mange, der har det som en tradition, og mange bruger det som en god lejlighed til at være sammen med venner eller familie.

Der er mange forskellige danske musikfestivaler. Den nok mest kendte er Roskilde Festival, der hvert år finder sted på Roskilde Dyrskueplads. Roskilde Festival er den største musikfestival i Danmark – faktisk i Nordeuropa – med en kapacitet på 130.000 publikummer og frivillige. Roskilde Festival blev afholdt første gang i sommeren 1971 og er sammen med Skagen Festival Danmarks ældste.

De første, største og traditionelle danske musikfestivaler er blevet til under inspiration fra de første store udenlandske musikfestivaler, blandt andet den berømte amerikanske Woodstockfestival i 1969. Langt de fleste musikfestivaler er store, årlige begivenheder. Mange af dem bliver ofte hurtigt udsolgt, og det får mange til at købe billet i god tid, selvom festivalen måske endnu ikke har annonceret, hvilke navne der skal spille på den kommende festival.

**Musikfestivaler for alle**

Musikfestivaler har tidligere fokuseret mest på et publikum i den unge generation, men i dag tiltrækker festivalerne folk i alle aldre. De forskellige musikfestivaler er ofte rettet mod en bestemt målgruppe eller et publikum til en særlig musikalsk genre. Der findes fx musikfestivaler med fokus på opera, andre med fokus på elektronisk musik og andre igen med fokus på heavy metal – spektret er stort. Men langt de fleste musikfestivaler har en blanding af pop og rock, spillet af kendte og nyere solister og bands.

**Store og små arrangementer**

De fleste musikfestivaler er store udendørsarrangementer med open air-koncerter, boder med salg af mad og drikke og mulighed for at overnatte i fx telt eller campingvogn. Der er store musikfestivaler, der varer op til en uge, men også mindre dagsfestivaler. Musikfestivalerne løber hen over sommeren, men sommeren i Danmark er ofte meget omskiftelig, så de fleste musikfestivaler har været afholdt i både strålende solskin og styrtende regn.

Der er stor forskel på, hvad det koster at købe billetter til de forskellige musikfestivaler, men det er generelt sådan, at jo længere en festival varer og jo større navne, der spiller, jo dyrere er det at komme ind. På de store festivaler er budgettet til at betale de optrædende musikere på mange millioner kroner. Mange musikfestivaler skaber alligevel et overskud, som de efterfølgende uddeler til forskellige former for velgørende formål.

**Nye typer af musikfestivaler**

Det er attraktivt for en by eller et område at have en musikfestival, da der som regel er en positiv stemning forbundet med disse. Derfor kan byer, der har en kendt musikfestival, trække turister til, og derfor bliver der fra både byer og koncertarrangørers side gjort en indsats for at etablere nye musikfestivaler. Således er der inden for de senere år opstået en række nye musikfestivaler, der for at blive kendte prøver at skille sig ud fra de traditionelle typer af musikfestivaler. Heartland Festival på Fyn og NorthSide i Aarhus er eksempler på dette.

**Heartland Festival**

Heartland Festival afholdes i slotsparken ved Egeskov på Sydfyn. Den fandt sted første gang i 2016, og den adskiller sig fra andre festivaler ved at fokusere på meget mere end blot musik. Heartland Festival kombinerer den traditionelle form for musikfestival med en række temaer og arrangementer, der taler til flere sanser. Den ønsker derved at tiltrække nye typer af festivaldeltagere.

Festivalen har et bredt program med danske og internationale musiknavne, madkunst og live-samtaler, hvor kendte mennesker diskuterer forskellige emner. Herudover kan man også opleve installationer og anden samtidskunst, som står i kontrast til de historiske omgivelser på Egeskov Slot. Man kan også få mad af høj kvalitet. Man kan blandt andet få en såkaldt Heartland Banquet, der er en tre-retters menu tilberedt med nogle af de bedste fynske råvarer.

**NorthSide**

NorthSide er en byfestival, der finder sted på det grønne område Ådalen tæt på Aarhus centrum. Det er en festival uden overnatning og camping. På festivalen spiller hvert år en lang række nye danske og udenlandske bands. Festivalen fokuserer især på moderne musik. Desuden er festivalen kendt for sin grønne profil.

I samarbejde med festivalens partnere bliver der i markedsføringen fokuseret specielt på bæredygtighed, blandt andet inden for energiforbrug, salg af drikke- og madvarer, affaldssortering og merchandise. Blandt de store succeshistorier fra festivalen i 2017 var indfrielsen af målet om at kunne præsentere et 100 % økologisk menukort på tværs af hele festivalen, inklusive bespisning af frivillige og musikere. Kaffen var som tidligere udelukkende økologisk og Fair Trade, og som noget nyt var al vin og bobler også 100 % økologisk. Samlet set var 98 % af drikkevarerne (inkl. øl og spiritus) økologiske.

Der er ingen bilparkering i forbindelse med NorthSide, så man må gå, cykle eller tage offentlig transport, hvis man vil til festival. NorthSide vil gerne sørge for, at publikummer, der kommer cyklende til festivalen, har et sted at parkere cyklen. Derfor etableres området BikeSide hvert år i samarbejde med Aarhus Cykelby. Her er der mulighed for cykelparkering, mens man er til festival, og der er også mulighed for at få et cykeltjek. På den måde er cyklen sikker og køreklar, når man vil hjem fra festivalen. I 2016 husede BikeSide omkring 10.000 cykler.

**TRE FORSKELLIGE MUSIKFESTIVALER**

**Skagen Festival**

**Tid og sted**

I mange år afholdtes Skagen Festival i den sidste weekend i juni under navnet Skagen Visefestival, men i 1989 ændredes navnet til slet og ret Skagen Festival. Som konsekvens af at skolerne flyttede sommerferien, afholdes festivalen nu i den første weekend i juli. Festivalen bliver afholdt på forskellige steder i byens kulturinstitutioner og i telte, der hvert år bliver sat op til lejligheden.

**Profil og historie**

Skagen Festival er en international folkemusikfestival. Festivalen har gennem årene tilpasset sig den udvikling, som denne musikgenre har gennemgået, så der i dag spilles folkemusik i alle varianter: folk, folk/rock, jazz, visesang, roots, blues og meget andet.

Skagen Festival blev første gang afholdt i 1971 og er dermed Danmarks ældste musikfestival. De første koncerter fandt sted i ”Tuxens Villa”, opkaldt efter fyrstemaleren Laurits Tuxen (1853-1927), med deltagelse af fortrinsvis norske og danske folkemusikere. Da der blev for lidt plads i villaen, flyttede festivalen ind i Skagen Badminton- og Tennishaller. Et af spillestederne er nu også Skagen Kultur- og Fritidscenter. I 1996 valgte festivalens ledelse at flytte en stor del af festivalen til et klitområde syd for Skagen, men allerede i 2003 var festivalen tilbage i de gamle lokaler i byen, samtidig med at udvidelse af spillesteder i telte på havnen og ved Kulturhus Kappelborg kom til.

**Overnatning/camping**

Under Skagen Festival vokser byens indbyggertal enormt. Så det er en god ide at være tidligt ude, hvis man vil sikre sig overnatning.

Skagen Festival indgår i et samarbejde med Fonden Skagen Stadion. Der er etableret en ny Skagen Stadion Festival Camp på fodboldbanerne ved Skagen Stadion, kun 15 minutters gang fra Festivalens scener på Skagen Kultur- & Fritidscenter, Havnen og ved Kappelborg. Det er ikke blot tæt på, det er også med gode faciliteter, da man som gæst på Skagen Stadion Festival Camp får fri adgang til bade- og toiletfaciliteterne i Skagen Stadions hovedbygning.

Det eneste krav for at kunne booke sig ind på campingpladsen i festivaldagene er, at man har købt mindst én forsalgsbillet til en af festivalens koncerter i Skagen Kultur- & Fritidscenter, i Kulturhus Kappelborg eller på Havnescenen. I festival-dagene kan ledige pladser på campingpladsen købes ved at møde frem i Kulturhus Kappelborg. Billetkravet gælder dog ikke børn under 12 år.

**Den Danske Folkemusikpris**

På Skagen Festival uddeles Den Danske Folkemusikpris. Den blev indstiftet i 1995 i et samarbejde mellem Skagen Festival og Danmarks Radio i Aalborg i forbindelse med festivalens 25 års jubilæum. I 2007 trådte TV2/Nord til som samarbejdspartner, da radioen stoppede med samarbejdet af sparegrunde. Det var også for at spare penge, at TV2/Nord i 2014 stoppede med samarbejdet og blev erstattet af Spar Nord Skagen.

Prisen består af et indrammet dokument, en check på 20.000 kr. og et nutidigt kunstværk, fremstillet af en kunstner fra Skagen. Det er festivalens bestyrelse, der vælger årets prismodtager, og overrækkelsen sker oftest i forbindelse med søndagens afslutningskoncert.

**Langelandsfestival**

**Tid og sted**

Langelandsfestival finder sted hvert år i skolernes sommerferie i juli måned og varer en uge. Festivalen bliver i daglig tale både kaldt ’Danmarks største havefest’ og ’Danmarks største familiefestival’.

Langelandsfestival er en festival, som henvender sig specielt til familier, og dette er med til at skabe en helt særlig stemning. De smukke omgivelser på Rue Mark i udkanten af Rudkøbing på Langeland med strand og marker er også medvirkende til, at Langelandsfestival har sit eget unikke miljø.

**Profil og historie**

Festivalens gæster er primært børnefamilier, og der er mere end 8.000 børn på festivalen. Festivalen markedsføres med sloganet ”Alle er glade” og ”100 % familiefestival”.

I 1991 så grundlæggeren af Langelandsfestival et smukt areal i udkanten af Rudkøbing, hvor mark, strand og vand blev forenet. Efter en aften på bakken med rødvin og kølige pilsnere, hvor aftensolen på smukkeste vis gik direkte ned i det Sydfynske Øhav, var ideen til festivalen undfanget. Ambitionerne var høje, men de første år var der nærmest flere venner og hjælpere på festivalen, end der var betalende gæster. Den tid er forbi. Langelandsfestival har på fineste måde manifesteret sig som Danmarks største familiefestival. Her samles flere generationer i en hel uge, hvor hygge og fællesskab er i højsædet.

Efter festivalen tager familier hjem med en masse gode minder, som kan findes frem i løbet af de mørke vintermåneder, og derfor er den for tusindvis af familier blevet en fast del af sommerferien. Musikfestivalen forsøger at holde fast i traditionerne, men er ikke bange for at prøve nye ting af. Den har som mål, at den også i fremtiden vil kunne kalde sig Danmarks største familiefestival og leve op til sloganet ”100 % familiefestival”.

**Billet og HandicapCamp til gæsten med et handicap**

Langelandsfestival er en begivenhed, som alle kan være en del af. Derfor har man taget en række initiativer, som skal gøre det nemmere for en gæst med et handicap.

**En speciel billettype til gæsten med et handicap**

Som et led i festivalens ambition om at gøre Langelandsfestival tilgængelig for alle tilbyder man, at gæster med et handicap kan købe en speciel billettype. Billetten er for dem, der ikke har mulighed for at deltage i festivalen uden at have en ledsager med. Billetten hedder Disabled with Companion Festival Pass og koster det samme som en standardbillet. For at kunne købe denne specielle billet, skal man have et gyldigt ledsagerkort med på festivalen. Hvis ikke man har et sådant kort med, vil ens ledsager ikke blive lukket ind.

**Indtjekning i HandicapCamp**

Det er nemt at komme til HandicapCamp, der har sin egen dedikerede indkørsel. Hvis man har købt et Disabled with Companion Festival Pass får man adgang til at bo i HandicapCamp, der er et område forbeholdt gæster med et handicap og deres ledsagere. Man kan tjekke ind ved et særligt indtjekningssted ved området. Dette initiativ er taget for at gøre ankomsten for gæsten med et handicap så let og uproblematisk som muligt. Dog kan man også vælge at tjekke ind ved det officielle indtjekningssted, der hedder Laden.

**Børneland**

Festivalens Børneland er et af de tiltag, som under hele festivalen står klar med oplevelser og underholdning for børn i alle aldre. De mange frivillige Børnepassere i Børneland er klar til at hjælpe med at passe børnene, og har man spørgsmål, kan man i Børne-info få svar på næsten alt.

Børneland er ligeså stort som fire fodboldbaner tilsammen og har sin helt egen stemning, der gør området både sikkert og sjovt for alle festivalgæster. Det koster ikke noget at komme ind, og alt hvad man kan prøve i Børneland er gratis. I festivalens første fire dage kan børnene lege på legepladsen, som er den del af Børneland, der har hoppepuder, cykelbaner og masser af familiesjov. Onsdag kl. 10.00 åbner Børneland for alle sine aktiviteter, som alle vil være åbne hver dag i festivalens sidste fire dage.

I Børneland er der også en cafe, hvor børn og forældre kan købe mad og drikke. Øl og anden alkohol er ikke tilladt i Børneland, så der er en bænk, hvor forældre kan drikke ud, inden de kommer ind.

**Smukfest**

**Tid og sted**

Smukfest hed tidligere Skanderborg Festival og kalder sig selv Danmarks Smukkeste Festival. Den foregår i bøgeskoven omkring søerne i Skanderborg Dyrehave. Som udgangspunkt afholdes den i 2. weekend i august og i dagene op til.

**Profil og historie**

Smukfest fokuserer fortrinsvis på dansk musik med både kommende talenter og grupper samt gamle kendinge, men der kommer også altid et par store udenlandske navne og giver koncert. Festivalen blev afholdt første gang i 1980, og det er blevet en tradition, at der i jubilæumsårene er store jubilæumskoncerter med sange og optrædende, der tidligere har været en succes på festivalen.

**Boformer og campingområder**

Smukfest tilbyder en række forskellige måder at bo på. Man kan tage sit eget telt med og lave en sjov lejr, eller man kan tilkøbe en festivalbolig. Alle med gyldigt partout- eller endagsarmbånd til Smukfest (dog undtaget søndagsarmbåndet) kan tage telt med hjemmefra og slå det op, hvor der er plads på campingområderne til formålet. De hedder bl.a. Skovlunden, Banerne, Kærligheden og Roligheden. På campingområdet har Smukfest også et socialt og kulturelt projekt ved navn Menneskeligheden. På dette område kan man bo sammen med andre, man ikke kender i forvejen. Her er der plads til 48 sovende, og man kan ansøge om en soveplads til området. Den eneste pris er, at man skal bidrage til fællesskabet.

Man kan også vælge at tilkøbe en festivalbolig. De fleste køber og bor i gode kvalitetstelte, som er slået op på forhånd og dermed sikrer, at man får en bestemt plads uden stress. Nogle få er heldige nok til at få fingre i de mere specielle boformer som CanSleep, Tenthouse, Tipier m.m.

**Billetkøb og Smukfest-konto**

Når man skal have adgang til Smukfest, så skal man have et armbånd på. På armbåndet sidder der en chip, som man bipper sig ind med på de elektroniske standere ved indgangene. For at få et armbånd, skal man købe billet til Smukfest, og for at kunne gøre det, skal man have en Smukfest-konto. Billetten er nemlig et digitalt produkt på ens Smukfest-konto. Det er smart, hvis ens armbånd fx bliver stjålet eller bliver væk. Hvis man tidligere har købt billet, har man sikkert allerede en konto. Når man har gennemført oprettelsen af en Smukfest-konto, modtager man som ny bruger af Smukfest-konto en e-mail med kvittering for oprettelsen fra Smukfest. Senest 12 timer efter man har gennemført sit billetkøb, vil man modtage en kvittering på e-mail. Denne e-mail er ikke en adgangsgivende billet, men blot en kvittering for købet. Skulle disse e-mails udeblive, kan man kontakte support@smukfest.dk Når man har den digitale billet på sin Smukfest-konto, er man sikret et armbånd, der giver adgang til Smukfest. Armbåndet sendes til den postadresse, som man opgiver ved billetkøbet.

**Betaling med Cashless**

På Smukfest bipper man sig ind med den chip, der sidder i ens armbånd. I tilfælde af tyveri kan den spærres nemt og smart. Men chippen kan også benyttes til betaling; det hedder Cashless. Ved at benytte chippen i boder og barer, kan man på sin Cashless App hele tiden følge sin saldo (og se hvor man var om aftenen, hvis hukommelsen er hullet!). Når en konto er oprettet og knyttet til chiparmbåndet, er det nemt at overføre penge til armbåndet via Smukfest-appen.

Man bestemmer selv, hvordan man vil have sit overblik. Det er op til én selv, om man eksempelvis vil flytte 300 kr. over på armbåndet ad gangen, eller om man vil sætte kontoen til auto-top-up. Auto-top-up forbinder ens almindelige betalingskort med ens Smukfest-konto. Så vil ens armbånd automatisk få indbetalt det beløb, man har angivet, når saldoen kommer under 50 kr. Transaktionen er gebyrfri.

Cashless-kontoen har automatisk udbetaling. Det betyder, at hvis man ikke har brugt alle de penge, man har sat ind på sin konto, så kan man vælge, at de ubrugte penge automatisk overføres til ens almindelige bankkonto. Denne transaktion bliver lavet den 18. august, og det kan tage op til fem bankdage, før pengene er på ens almindelige konto igen. Man skal være opmærksom på, at der er et gebyr på 5 kr. for transaktionen.

Fra januar vil der blive trukket et månedligt gebyr på 25 kr. fra Cashless-konti, hvor der stadig står penge. Det er ikke noget man gør af grådighed, men Smukfest er ikke en bank og må derfor ikke ligge inde med gæsternes penge efter festivalen, derfor dette gebyr.

**Søbadet**

Smukfest er en af Danmarks mest mangfoldige festivaler – her er der både unge og ældre, direktører og studerende, jyder, københavnere og bornolmere. Derfor finder man også mange forskellige oplevelser i en række forskellige kategorier og for enhver smag i skoven.

Ved Søbadet er der en række oplevelser at tage sig til, blandt andet kan man helt gratis sejle en tur på Skanderborg Sø.

I 2016 kom der en ny, smuk restaurant i søen. Man kan ikke uden videre komme ud til denne nye og stemningsfulde restaurant midt ude på vandet ved Søbadet. Man kan som gæst kun komme derud ved at stå på en tømmerflåde og selv hive og sejle sig derover, inden man kan få lov til at smage alle de lækre retter.

Søbadet var mobilfri zone i 2017. Hos Telia kunne man aflevere sin telefon i Mobilhotellet, hvor der stod folk klar til at give den en opladning og en let rengøring. Imens kunne man som gæst gå rundt med et polaroidkamera og blot samtale og være til stede.

**DONATIONER TIL VELGØRENHED**

**Roskilde Festival-gruppen**

**Roskilde Festival er nonprofit**

Roskilde Festival er nonprofit. Det betyder, at hele overskuddet efter hver festival doneres til velgørenhed. Det sker gennem Roskilde Festival-gruppen, som består af Foreningen Roskilde Festival og Fonden Roskilde Festival. De har en fælles donationspolitik. På Roskilde Festival-gruppens hjemmeside står bl.a.:
”Vi støtter humanitært, velgørende, almennyttigt og kulturelt arbejde med særligt fokus på børn, unge og kultur.”

Roskilde Festival-gruppen donerer hvert år både mindre beløb til fritidsaktiviteter, der engagerer børn og unge i lokalområdet, og større beløb til velgørende organisationer, sociale projekter, NGO’er og nødhjælp i ind- og udland. De donerer ikke kun penge. De udvikler også projekter sammen med modtageren, og på den måde donerer de også viden og erfaringer. For at sikre sammenhængen imellem Roskilde Festival-gruppens værdier og donationerne opsøger og udpeger gruppen selv initiativer og projekter, der skal støttes, og modtager derfor ikke donationsansøgninger.

Siden 1971 har Roskilde Festival genereret over 40 mio. EUR til Læger uden Grænser, Amnesty International, Red Barnet, WWF og mange flere organisationer.

**Smukfonden**

**Smukfest donerer 20 % af overskuddet til Smukfonden**

I 2014 godkendte Skanderborg Festivalklubs generalforsamling opstarten af Smukfonden. Formålet med fonden er at støtte initiativer, der afhjælper udsathed og ensomhed, fortrinsvis blandt unge. Det økonomiske grundlag kommer fra Smukfest, der hvert år donerer 20 % af overskuddet til Smukfonden. Siden opstarten er der givet støtte til knap 100 projekter. Smukfonden har sin egen hjemmeside, www.smukfonden.dk, hvor man både kan læse om fonden, søge om støtte og læse om alle de tidligere projekter, der er blevet støttet. På fondens hjemmeside står bl.a. følgende kriterier:
”- Vi arbejder for at afhjælpe udsathed og ensomhed.
- Vi støtter kun initiativer i Danmark.
- Vi tildeler fortrinsvist støtte til projekter rettet mod unge.”

Ansøgningsfristerne ligger fast d. 1. december og d. 15. maj. Alle ansøgninger, der modtages inden 1. december, vil blive behandlet og uddelt i perioden frem til og med festivalklubbens generalforsamling i januar, mens alle ansøgninger, der modtages inden d. 15. maj, vil blive behandlet og uddelt op til festivalen i august.

Smukfonden indsamler løbende afrapporteringer og feedback fra sine støttemodtagere. Hvis man modtager støtte, skal man derfor være klar til at skrive en kort tekst om, hvordan projektet er forløbet, som fonden kan bruge på sin hjemmeside.

**FIRE INDTRYK AF MUSIKFESTIVALER**

**Årets højdepunkt**

Af Peter L.

Dette var mit syvende år på Roskilde Festival, og hvert år har været en kæmpe fest med glade mennesker, fantastiske koncerter, spændende mad og drikke og bare den skønneste stemning! Det er ret dyrt at købe en billet til alle dagene, så dengang jeg var studerende og på SU, plejede jeg at arbejde frivilligt på festivalen, fordi man så kommer gratis ind. Nu er jeg færdig med studierne, og i år er det så første år, jeg kunne købe en billet og ikke skulle arbejde. Jeg havde derfor tid til at høre koncerter med de veletablerede og kendte navne, som jeg plejer, men i år havde jeg bestemt mig for også at lytte til nye bands, hvilket jeg heldigvis nåede. Og det var en ny og god oplevelse, og derfor var det alle pengene værd at købe billetten i år. Jeg glæder mig allerede til næste år, hvor jeg helt sikkert køber en billet igen.

**En smuk festivalplads**

Af Sofie M. J.

I år besøgte min mand og jeg Smukfest på den sidste dag, der var åbent. Det var en super god oplevelse, for der er skønt og hyggeligt i bøgeskoven i Skanderborg. Festivalpladsen er altid flot dekoreret med lamper i træerne, og boderne med mad og drikke er sat op med respekt for skoven, der også skal være smuk efter festivalen. Da det var den sidste dag, så var dele af festivalpladsen dog lukket, men det gjorde bestemt ikke noget, for der var rigeligt med madsteder, barer og toiletter – og så en masse god musik.

Det kan nævnes, at vores søn var der hele ugen, og alt fungerede perfekt, og der var fuld gang i den på Kærligheden, der er de unges campingområde.

**Med lige fra starten**

Af Jesper B.

Jeg er en garvet festivalgænger. Jeg var med til at starte det, der dengang hed Skagen Visefestival i 1971, og jeg har været på festivalen hvert år lige siden, så jeg er nok en af de danskere, der har været flest år til musikfestival. Det jeg godt kan lide er, at man kan gå fra scene til scene og høre forskellige kunstnere. Og man kan være sikker på, at man hvert år får hørt noget nyt og ofte overraskende musik.

**Festival for første gang**

Af Erika D.

Jeg har ikke haft lyst til at tage på festival, fordi jeg ikke gider sove i telt i flere dage, men den nyere aarhusianske musikfestival NorthSide er en byfestival, hvor man ikke overnatter, så den har jeg længe gerne villet til. I mange år skulle jeg altid til eksamen i juni, hvor festivalen finder sted, så jeg har ikke tidligere haft tid til at tage af sted. Men sidste år kunne jeg dog finde tid til det, og jeg havde en fantastisk oplevelse. Jeg er dybt imponeret over, hvor godt arrangementet fungerer logistisk i forhold til, at så mange mennesker skal til koncert, købe mad og drikke og på toilet. Musikken var vidunderlig, og til den allersidste koncert søndag aften med Radiohead mødte jeg ovenikøbet en sød fyr. Det regnede helt vildt, og selvom han var så sød at holde sin regnjakke over mig, så blev vi simpelthen så våde. Vi dansede, sang og grinede i regnen og blev helt forelskede. I dag er vi kærester.

Kilder: Teksterne er bearbejdede versioner af tekst og informationer hentet fra følgende hjemmesider (pr. 23.03.18): roskilde-festival.dk, skagenfestival.dk, langelandsfestival.dk, smukfest.dk, roskildefestivalgruppen.dk, smukfonden.dk og wikipedia.org.`,
    questions: [
      // Søg informationer under 'Tre forskellige musikfestivaler'
      { type: "short", n: 1, q: "(Tre forskellige musikfestivaler) Hvilke dage har Langelandsfestivals Børneland åbent for alle sine aktiviteter?",
        accept: uniq(combos(["", "i", "de", "det er", "børneland har åbent", "børneland er åbent", "åbent", "alle aktiviteter er åbne"], ["festivalens sidste fire dage", "de sidste fire dage", "sidste fire dage", "de sidste 4 dage", "festivalens sidste 4 dage", "sidste 4 dage"], ["", "onsdag til lørdag", "fra onsdag til lørdag", "fra onsdag"])
          .concat(combos(["", "fra", "åbent fra", "hver dag fra"], ["onsdag til lørdag", "onsdag lørdag"]))) },
      { type: "short", n: 2, q: "(Tre forskellige musikfestivaler) På Langelandsfestival kan man købe en speciel billet, hvis man har et handicap. Hvad skal man fremvise på festivalen for at kunne købe denne specielle billet?",
        accept: uniq(combos(["", "man skal fremvise", "man skal vise", "fremvise", "vise", "man skal have", "de skal vise"], ["et gyldigt ledsagerkort", "gyldigt ledsagerkort", "et ledsagerkort", "ledsagerkort", "sit ledsagerkort", "et gyldigt ledsager kort", "ledsager kort"])) },
      // 3: the forcensur also accepts "(Man kan tjekke ind ved et) særligt indtjekningssted (ved området)".
      { type: "short", n: 3, q: "(Tre forskellige musikfestivaler) På Langelandsfestival er der et officielt indtjekningssted. Hvor kan man også tjekke ind, hvis man skal bo i HandicapCamp?",
        accept: uniq(combos(["", "man kan tjekke ind", "man kan også tjekke ind", "de kan tjekke ind", "tjekke ind"], ["ved et særligt indtjekningssted", "et særligt indtjekningssted", "særligt indtjekningssted", "særlige indtjekningssted", "ved et specielt indtjekningssted", "et specielt indtjekningssted"], ["", "ved området", "ved handicapcamp", "i handicapcamp", "på området"])) },
      { type: "short", n: 4, q: "(Tre forskellige musikfestivaler) På Smukfest er der forskellige boformer og campingområder. Hvad hedder det område, man kan søge om en soveplads til?",
        accept: uniq(combos(["", "det hedder", "området hedder", "det er", "på"], ["menneskeligheden"])) },
      { type: "short", n: 5, q: "(Tre forskellige musikfestivaler) Modtager man ved billetkøb til Smukfest sin billet via e-mail? Svar ’ja’ eller ’nej’.",
        accept: uniq(combos(["nej"], ["", "det gør man ikke", "man modtager kun en kvittering", "kun en kvittering", "man får kun en kvittering", "man får en kvittering", "man får en kvittering på e-mail", "billetten er digital på smukfest-kontoen", "armbåndet sendes med posten"])) },
      { type: "short", n: 6, q: "(Tre forskellige musikfestivaler) Under Skagen Festival kan man campere på den nye Skagen Stadion Festival Camp. Hvor kan man i festivaldagene købe ledige pladser på campingpladsen?",
        accept: uniq(combos(["", "i", "ved", "ved at møde frem i", "man kan købe dem i", "de kan købes i"], ["kulturhus kappelborg", "kappelborg", "kulturhuset kappelborg"])) },
      { type: "short", n: 7, q: "(Tre forskellige musikfestivaler) Skagen Festival har været afholdt på forskellige tidspunkter. Hvorfor afholdes festivalen nu i den første weekend i juli?",
        accept: uniq(combos(["", "fordi", "som konsekvens af at", "på grund af at", "det er fordi"], ["skolerne flyttede sommerferien", "skolerne har flyttet sommerferien", "skolerne flyttede deres sommerferie", "skolerne har flyttet deres sommerferie", "skolernes sommerferie blev flyttet", "skolernes sommerferie er blevet flyttet", "skolerne har sommerferie der", "skolerne har sommerferie", "skolerne har sommerferie på det tidspunkt", "det er skolernes sommerferie", "børnene har sommerferie"])
          .concat(combos(["", "på grund af", "pga"], ["skolernes sommerferie", "sommerferien", "flytningen af skolernes sommerferie"]))) },
      { type: "short", n: 8, q: "(Tre forskellige musikfestivaler) Skagen Festival samarbejder med andre om at uddele Den Danske Folkemusikpris. Hvad var årsagen til, at TV2/Nord i 2014 stoppede med samarbejdet?",
        accept: uniq(combos(["", "af", "pga", "på grund af", "det var af", "det var på grund af"], ["sparegrunde"])
          .concat(combos(["", "for at", "de ville", "fordi de ville", "det var for at", "de skulle", "fordi de skulle", "fordi de måtte"], ["spare penge", "spare på pengene"]))) },
      // Søg informationer under 'Musikfestivaler før og nu'
      { type: "short", n: 9, q: "(Musikfestivaler før og nu) Hvad tilbyder NorthSide sine cyklende gæster på området BikeSide? Nævn to ting.",
        accept: uniq(combos(["", "de tilbyder", "man kan få", "der er", "mulighed for", "de tilbyder mulighed for"], ["cykelparkering og cykeltjek", "cykeltjek og cykelparkering", "cykelparkering og et cykeltjek", "cykelparkering og at få et cykeltjek", "cykelparkering mens man er til festival og et cykeltjek", "cykelparkering mens man er til festival og at få et cykeltjek", "cykelparkering cykeltjek", "parkering af cyklen og cykeltjek", "parkering og cykeltjek", "et sted at parkere cyklen og et cykeltjek", "cykel parkering og cykel tjek"])) },
      // 10: the forcensur also accepts "Nye (typer) festivaldeltagere".
      { type: "short", n: 10, q: "(Musikfestivaler før og nu) Hvem ønsker Heartland Festival at tiltrække ved at kombinere musik, madkunst og live-samtaler?",
        accept: uniq(combos(["", "den ønsker at tiltrække", "de ønsker at tiltrække", "festivalen ønsker at tiltrække", "at tiltrække"], ["nye typer festivaldeltagere", "nye typer af festivaldeltagere", "nye festivaldeltagere", "nye typer festivalgæster", "nye typer af festivalgæster", "nye festivalgæster", "nye typer af gæster", "nye typer gæster"])) },
      // Søg informationer under 'Donationer til velgørenhed'
      { type: "short", n: 11, q: "(Donationer til velgørenhed) Man kan søge støtte hos Smukfonden. Hvornår er der ansøgningsfrist, hvis man vil have sin ansøgning behandlet op til festivalen i august?",
        accept: uniq(combos(["", "inden", "inden d.", "d.", "den", "senest", "før", "det er", "fristen er"], ["15. maj", "15 maj", "den 15. maj"])) },
      { type: "short", n: 12, q: "(Donationer til velgørenhed) Hvordan donerer Roskilde Festival-gruppen udover penge også viden og erfaringer til velgørenhed?",
        accept: uniq(combos(["de udvikler", "de udvikler også", "ved at udvikle", "ved at de udvikler", "gruppen udvikler", "udvikler", "udvikler også", "de laver", "ved at lave"], ["projekter", "projekter sammen med modtageren", "projekter sammen med modtagerne", "projekter med modtageren", "projekter med modtagerne"])
          .concat(["projekter sammen med modtageren", "projekter sammen med modtagerne", "gennem projekter sammen med modtageren", "de laver projekter sammen med modtagerne"])) },
      // Søg informationer under 'Fire indtryk af musikfestivaler'
      { type: "short", n: 13, q: "(Fire indtryk af musikfestivaler) Sidste år var Erika på musikfestivalen NorthSide for første gang. Hvorfor har hun ikke haft tid til at tage af sted tidligere?",
        accept: uniq(combos(["", "hun skulle til", "fordi hun skulle til", "hun skulle altid til", "fordi hun altid skulle til", "hun havde", "fordi hun havde", "hun var til", "på grund af"], ["eksamen", "eksamen i juni", "eksamener", "eksamener i juni", "eksamen i juni hvor festivalen finder sted"])) },
      { type: "short", n: 14, q: "(Fire indtryk af musikfestivaler) For Peter er Roskilde Festival årets højdepunkt. Hvad var en ny og god oplevelse for ham i år?",
        accept: uniq(combos(["", "at", "det var at", "han", "at han kunne", "at han", "han nåede at"], ["lytte til nye bands", "høre nye bands", "lyttede til nye bands", "hørte nye bands", "lytte til nye bands hvilket han nåede", "nye bands"])) },
      { type: "short", n: 15, q: "(Fire indtryk af musikfestivaler) Sofie synes, der er en smuk festivalplads på Smukfest, men hvorfor var dele af festivalpladsen lukket, da hun besøgte festivalen?",
        accept: uniq(combos(["", "det var", "fordi det var", "da det var", "hun kom", "fordi hun kom", "hun var der", "fordi hun var der", "fordi hun var der på", "hun var der på", "hun besøgte festivalen", "fordi hun besøgte festivalen"], ["den sidste dag", "sidste dag", "festivalens sidste dag", "på den sidste dag", "den sidste dag der var åbent"])) }
    ]
  };

  const velgoerenhed = {
    id: "pd3-19m-2", group: G, real: true,
    title: "Delprøve 2A – Velgørenhed",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 45,
    instruction: "Læs teksterne Karen og Niels giver tid og penge til velgørenhed og Danske velgørende organisationer går nye veje. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1**

**Karen og Niels giver tid og penge til velgørenhed**

Mange danskere støtter velgørende formål med enten penge, tid eller noget helt tredje. Karen Pedersen fra Fyn er én af dem. Hun donerer et fast beløb hver måned til Red Barnet. Red Barnet er en international organisation, der hjælper børn i forskellige lande på både kort og langt sigt. De yder nødhjælp, når katastrofer og konflikter rammer verdens børn, og de bekæmper børnearbejde og fattigdom i hele verden. Red Barnet har også en dansk afdeling, der støtter udsatte børn herhjemme. Det kan for eksempel være børn fra familier, der har brug for økonomisk eller social hjælp.

”Idéen om at arbejde bredt, så de støtter både ude og hjemme, betyder meget for mig, fordi hjælp til børn efter min mening ikke har nationale grænser. Der er heldigvis mange meget professionelle organisationer, der ligesom Red Barnet hjælper børn i nød,” siger Karen Pedersen og fortsætter: ”Jeg er sikker på, at det er godt, at der er flere forskellige organisationer, der støtter på hver deres måde. Så kan de nå flest mulige af de børn, der har brug for hjælp. Nogle af mine gode venner har altid betalt til Børns Vilkår, som er en dansk organisation, der støtter udsatte børn og unge i Danmark, der har det hårdt økonomisk eller socialt. Det synes jeg bestemt også er meget sympatisk.”

Karen Pedersen arbejder som pædagog, mens hendes mand, Niels Pedersen, gik på pension for to år siden. Det har betydet, at Niels nu, lige som sin kone, er en fast støtte af velgørenhed. Dog støtter han ikke med penge, men med tid. Han arbejder i en genbrugsbutik i Odense to gange om ugen. Han synes, den personlige indsats er vigtig. Han kan sagtens få tiden til at gå, selvom han ikke er på arbejdsmarkedet længere, men alligevel er han glad for at komme i genbrugsbutikken:

”Jeg er glad for at kunne gøre noget for de mennesker, der kommer her, som ikke har ret mange penge til forbrug. Og nu, hvor jeg ikke skal af sted på arbejde hver dag, kan jeg også sagtens passe det ind i min hverdag med to dage om ugen i genbrugsbutikken. Og min kone synes også, det er fint – hun er jo alligevel på arbejde,” siger Niels Pedersen.

Karen og Niels Pedersen er således faste støtter af velgørenhed, men de ser også det årlige tv-show Danmarks Indsamling, som de store velgørende organisationer står bag. Her er musik og kendte mennesker, der tager telefonen, med til, at folk får lyst til at ringe ind og give penge – mange endda ganske store beløb.

”Vi lever i en tryg hverdag i Danmark, hvor vi ikke oplever alvorlige naturkatastrofer eller humanitære katastrofer som krig og hungersnød. Vi er også vant til, at der er et velfærdssamfund, der tager sig af folk. Det er derfor vigtigt med disse store indsamlinger, så folk kan få øjnene op for, at mange mennesker i verden lever i stor nød og har brug for hjælp,” siger Karen Pedersen, mens Niels nikker bekræftende og tilføjer: ”Jeg tror faktisk også, der er folk, der normalt ikke giver penge, som giver penge til disse shows.”

Karen og Niels Pedersen er bevidste om, hvor godt de har det i forhold til mange andre mennesker i verden, og det er vigtigt for dem, at vi i Danmark hjælper folk, der ikke er så heldige som os.

**Tekst 2**

**Danske velgørende organisationer går nye veje**
**Danskerne giver flere og flere penge til velgørenhed. De velgørende organisationers strategier og markedsføring samt et nyere skattefradrag er nogle af årsagerne.**

Opgørelser viser, at danskerne giver flere og flere penge til velgørenhed. Mange giver penge direkte til for eksempel forskning i sygdomme som kræft. Andre giver penge til at beskytte natur og miljø. Mange mennesker vælger også at give penge til humanitære formål, for eksempel til nødhjælp ved krige og naturkatastrofer.

**Der skal mere til end et tv-show**
Nogle af de største internationale velgørende organisationer i Danmark er Dansk Røde Kors, Red Barnet og Dansk Flygtningehjælp. De arbejder alle med humanitære formål. De står sammen med ni andre bag det årlige tv-show Danmarks Indsamling, hvor folk kan ringe ind og donere penge. Når der er store tv-shows med indsamling, betyder det, at der kommer fokus på, at der er stort behov for nødhjælp i verden. Alene gennem disse indsamlinger, der blev afholdt første gang i februar 2007, har danskerne givet mere end en milliard kroner.

Tv-shows er en effektiv måde at samle penge ind på, fordi disse shows kan nå mange mennesker. Det er dog langt fra alle danskere, man kan få til at give penge på den måde. Det hænger blandt andet sammen med, at vi lever i et velfærdssamfund, hvor vi betaler de fælles udgifter over skatten og dermed er vant til, at vi via det offentlige hjælper dem, der har behov for det. Nogle mener således ikke, at vi herudover også skal give støtte som individuelle borgere.

Men der er ifølge de velgørende organisationer brug for mange flere penge, end det offentlige system har råd til. Organisationerne har derfor en stor opgave i at fortælle danskerne, at der er hårdt brug for mere hjælp. Hvis det lykkes at få mange til at donere lidt, så vil mange små beløb blive til en stor sum penge. Organisationerne kan ud over at arrangere tv-shows blandt andet ringe til folk eller lave husindsamlinger for at samle penge ind. I nyere tid har de fleste organisationer også taget de sociale medier i brug.

**Nye initiativer giver flere penge**
Hver organisation må som udgangspunkt holde én husindsamling i hele landet om året. Traditionelt melder mange frivillige sig her til at gå fra dør til dør hos private og samle ind. De frivillige kan her tale personligt med folk og forklare formålet med at give penge. I de senere år er husindsamlinger med succes blevet suppleret med såkaldte facere. Det er personer, som går ud på gaderne og henvender sig til folk på offentlige steder for enten at få medlemmer eller kontante bidrag.

Flere organisationer har også fået et samarbejde med supermarkeder. Her kan folk via et tryk på en knap på flaskeautomaterne donere panten fra deres tomme flasker til velgørenhed i stedet for selv at få pengene.

I de senere år er det blevet mere og mere almindeligt at betale udgifter og overføre penge va sin mobiltelefon – især via sms og mobilepay. Det har også været medvirkende til, at flere har doneret penge til de velgørende organisationer. Overførsel via sin mobiltelefon er også mere praktisk for folk, der måske har gode intentioner om at donere penge, men ikke får taget sig sammen til at gøre det på computeren.

**Fradrag i skat for velgørenhed**
En anden væsentlig årsag til, at danskerne giver flere penge til velgørenhed kan være, at man kan få skattefradrag for bidragene. Siden 2012 har man kunnet trække selv de mindste donationer til velgørenhed fra i skat. En undersøgelse fra 2015 viser, at mere end hver fjerde dansker fik fradrag i skat for at give gaver til foreninger eller organisationer. Måske fordi det er blevet forholdsvis nemt at få fradrag for sine donationer. Man skal blot give den godkendte organisation, som man har doneret penge til, sit cpr.-nummer, så kontakter organisationen selv Skat.

De velgørende organisationer har siden 2012 oplyst borgerne om, at fradraget eksisterer, og at det er meget nemt at få. Men selvom fradraget har eksisteret i flere år, er det stadig ikke alle, der er klar over det. Dermed har organisationerne stadig en vigtig opgave med at informere borgerne om, at ordningen findes.

**Kvinder og mænd donerer forskelligt**
Der findes mange undersøgelser af, hvem der giver penge til velgørenhed. Fx viser det sig, at der er markant flere kvinder end mænd, der giver penge, når der er indsamling. Det er også kvinderne, der påvirkes mest af de budskaber, der bliver omtalt og får stor opmærksomhed i medierne i forbindelse med nationale indsamlinger.

Kvindernes engagement skyldes ikke mindst, at organisationerne bag de seneste indsamlinger har haft fokus på områder som moderskab og børn. I 2017 var temaet for eksempel ”Intet barn må sulte”. Kampagnen skulle skaffe penge til, at børn kunne få mad og udvikle sig. Med temaer om moderskab og børn har de velgørende organisationer således rettet sig mere direkte mod især kvindernes opmærksomhed i deres markedsføring. Og det ser ud til at have virket efter hensigten.

En opgørelse over, hvem der donerede penge i 2015, viser dog, at mænd i gennemsnit giver større beløb end kvinder – nemlig 2.427 kr. mod 2.034 kr. pr. kvinde. Men samlet set er der flere kvinder, der donerer penge end mænd. Organisationerne vil gerne øge antallet af mandlige donorer, samtidig med at de holder fast i de kvindelige donorer. Det er der også en forventning om vil ske, blandt andet fordi organisationerne også vil begynde at lave kampagner rettet mod mændene.`,
    questions: [
      { type: "mc", n: 1, q: "Tekst 1: Hvad nævner Karen Pedersen som en væsentlig årsag til, at hun har valgt at støtte børn gennem Red Barnet frem for en anden organisation?",
        options: ["Red Barnet støtter både børn i udlandet og i Danmark.", "Red Barnet giver både social og økonomisk hjælp til børn.", "Red Barnet arbejder mere professionelt end andre organisationer."], answer: 0 },
      { type: "mc", n: 2, q: "Tekst 1: Hvad er ifølge teksten en af grundene til, at Niels Pedersen nu arbejder som frivillig?",
        options: ["Han har fået bedre tid, end han havde tidligere.", "Han vil gerne lære nye mennesker at kende.", "Hans kone synes, at han skal gøre det."], answer: 0 },
      { type: "mc", n: 3, q: "Tekst 1: Hvad nævner Karen og Niels Pedersen som en særlig fordel ved et stort tv-show som Danmarks Indsamling?",
        options: ["Det kan få faste støtter af velgørenhed til at donere større beløb.", "Det kan skabe opmærksomhed om, at der er brug for humanitær hjælp.", "Det kan sikre, at mennesker der lever i nød, får tilstrækkelig humanitær støtte."], answer: 1 },
      { type: "mc", n: 4, q: "Tekst 2: Hvilken grund nævnes der i teksten til, at nogle danskere ikke giver penge til velgørenhed?",
        options: ["De mener ikke, at det er enkeltpersoners ansvar at give penge til nødhjælp.", "De mener ikke, at pengene bliver givet til de mennesker, der har mest brug for dem.", "De mener ikke, at deres støtte kan bidrage væsentligt til at hjælpe mennesker i nød."], answer: 0 },
      { type: "mc", n: 5, q: "Tekst 2: Hvilket af følgende initiativer for at få flere mennesker til at donere penge nævnes i teksten?",
        options: ["De velgørende organisationer har lavet kampagner for betaling via telefon.", "Hver velgørende organisation har holdt mere end én national husindsamling om året.", "De velgørende organisationer har taget personlig kontakt til og talt med flere mennesker."], answer: 2 },
      { type: "mc", n: 6, q: "Tekst 2: Hvilken af følgende grunde nævnes der i teksten til, at mange danskere får fradrag for donationer til velgørenhed?",
        options: ["Organisationerne har været gode til at oplyse borgerne om, hvor meget de kan trække fra i skat.", "Flere og flere danskere kontakter Skat og oplyser om deres donation til velgørenhed.", "Man skal som bidragyder ikke selv have besvær med at trække fradraget til velgørenhed fra i skat"], answer: 2 },
      { type: "mc", n: 7, q: "Tekst 2: Hvad vil de velgørende organisationer ifølge teksten satse på i deres markedsføring i fremtiden?",
        options: ["De vil satse på, at temaerne i de enkelte kampagner retter sig lige meget mod kvinder og mænd.", "De vil i deres kampagner satse på nye temaer, som de forventer mænd er særligt optagede af.", "De vil satse på de samme temaer, men øge antallet af kampagner for at få flere mænd til at donere penge."], answer: 1 }
    ]
  };

  const frafald = {
    id: "pd3-19m-3", group: G, real: true,
    title: "Delprøve 2B – Mange unge gennemfører ikke studiet",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Mange unge gennemfører ikke studiet. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Mange unge gennemfører ikke studiet**
**Tusindvis af unge begynder på en uddannelse hvert år, og de fleste gennemfører studierne og får deres eksamen. Der er [[0]] mange, der opgiver undervejs og ikke færdiggør uddannelsen.**

For to år siden flyttede den nu 22-årige Anne Puggaard til Odense fra København for at læse matematik på Syddansk Universitet. Hun var glad for at komme ind på studiet og fik hurtigt et godt studiejob i en boghandel. Det gik dog ikke helt, som hun havde forventet på studiet, for hun fik problemer med at følge med. Hun arbejdede [[1]] alt for meget, og hun mødte ofte dårligt forberedt til undervisningen, fordi hun ikke havde tid nok til at læse. [[2]] kendte hun ikke så mange af de andre og følte sig ikke som en del af det sociale liv på studiet. Hun følte sig modløs og stresset, og nogle dage havde hun slet ikke energi til at møde op.

Der kan være flere [[3]] frafald. For den unge kan det være et personligt nederlag, og for samfundet er det dyrt med en spildt studieplads. Desuden kommer nogle unge aldrig i gang med en ny uddannelse igen, og det kan begrænse deres muligheder på jobmarkedet.

Der er lavet en del undersøgelser af, hvorfor nogle ikke færdiggør deres uddannelse. Det er forskelligt fra studie til studie, men en typisk [[4]], at de studerende springer fra deres studier er, at de har svært ved at følge med på grund af niveauet og derfor ikke føler sig dygtige nok. Det kan også være et problem, hvis de studerende ikke lærer hinanden godt at kende fra starten. For at undgå frafald er det vigtigt, at der ikke kun er fokus på det faglige, for [[5]] betyder meget for motivation og trivsel. Det er Anne et godt eksempel på. Hvis man som Anne ikke får et godt netværk fra starten, kan man komme til at mangle støtte fra sine studiekammerater senere hen.

Uddannelsesstederne spiller en vigtig rolle for at [[6]] frafaldet. Ved at tilbyde vejledning kan de hjælpe de studerende med deres problemer, før de bliver for store. Det er dog de studerendes eget ansvar selv at søge hjælp i tide, og det gjorde Anne, der [[7]] fik problemer på studiet. Efter samtaler med en studievejleder er der sket flere ændringer i hendes liv, så hun nu har mod på at fortsætte. Studievejlederen har hjulpet hende med at finde en god læsegruppe, som hun har det rigtig godt med. Hun er begyndt at løbe, da det giver hende energi. Hun har også fundet en billigere bolig, så hun ikke skal arbejde så meget, og det har løst de [[8]] problemer, hun havde, fordi hun har fået mere tid til at studere og nu kan følge med. Med alle ændringerne har Anne Puggaard igen fået mod på at studere, og hun trives i dag på matematikstudiet.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["heldigvis", "imidlertid", "nemlig", "ligeledes"],
        2: ["Samtidig", "Alligevel", "Omvendt", "Derimod"],
        3: ["grunde til", "former for", "konsekvenser af", "eksempler på"],
        4: ["ulempe ved", "holdning til", "reaktion på", "årsag til"],
        5: ["resultaterne", "undervisningen", "studiejobbet", "fællesskabet"],
        6: ["forebygge", "vurdere", "dokumentere", "registrere"],
        7: ["til gengæld", "som nævnt", "tværtimod", "desuden"],
        8: ["faglige", "sociale", "fysiske", "økonomiske"]
      },
      example: { 0: "med andre ord" },
      answers: { 1: "nemlig", 2: "Samtidig", 3: "konsekvenser af", 4: "årsag til", 5: "fællesskabet", 6: "forebygge", 7: "som nævnt", 8: "økonomiske" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(musikfestivaler, velgoerenhed, frafald);

  const X = PD2.EXAMS.pd3;
  const SESSION = "Maj-juni 2019";

  // ---------- Skriftlig fremstilling maj-juni 2019 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-19m-w1", delprove: 1, real: true, year: 2019, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (maj-juni 2019)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en e-mail fra din ven Sofie, der arbejder som kommunikationsmedarbejder i et stort firma. Hun er glad for jobbet, men hun arbejder meget. Hun skriverr blandt andet: " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Tak for sidst, det var meget hyggeligt at have besøg af dig. Og hvor lyder det spændende, at du har meldt dig til maraton i Berlin næste år. «Hvordan går det med træningen?» " +
        "Som vi talte om, er jeg meget glad for mit nye job. Men jeg arbejder over 40 timer om ugen, og nu har min chef spurgt, om jeg vil være projektleder på et nyt projekt. Det er en stor chance for mig, men det betyder også mere overarbejde, så jeg ved ikke, om jeg skal sige ja. «Hvad synes du, jeg skal gøre?» " +
        "«Jeg vil også lige høre, hvordan du synes, det er at tage toget til arbejde hver dag?» Jeg er nemlig så træt af at sidde i kø på motorvejen hver dag – og måske kunne jeg undvære bilen. " +
        "Angående det sommerhus på Bornholm, som vi snakkede om at leje, så kunne vi måske leje det en uge i juli. «Hvad siger du til det?» ...\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Tak for sidst, det var meget hyggeligt at have besøg af dig. Og hvor lyder det spændende, at du har meldt dig til maraton i Berlin næste år. Hvordan går det med træningen?\n\n" +
        "Som vi talte om, er jeg meget glad for mit nye job. Men jeg arbejder over 40 timer om ugen, og nu har min chef spurgt, om jeg vil være projektleder på et nyt projekt. Det er en stor chance for mig, men det betyder også mere overarbejde, så jeg ved ikke, om jeg skal sige ja. Hvad synes du, jeg skal gøre?\n\n" +
        "Jeg vil også lige høre, hvordan du synes, det er at tage toget til arbejde hver dag? Jeg er nemlig så træt af at sidde i kø på motorvejen hver dag – og måske kunne jeg undvære bilen.\n\n" +
        "Angående det sommerhus på Bornholm, som vi snakkede om at leje, så kunne vi måske leje det en uge i juli. Hvad siger du til det? ...",
      underlined: [
        "Hvordan går det med træningen?",
        "Hvad synes du, jeg skal gøre?",
        "Jeg vil også lige høre, hvordan du synes, det er at tage toget til arbejde hver dag?",
        "Hvad siger du til det?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvordan går det med træningen? (til maraton i Berlin)",
        "Understreget: Hvad synes du, jeg skal gøre? (om at blive projektleder)",
        "Understreget: Jeg vil også lige høre, hvordan du synes, det er at tage toget til arbejde hver dag?",
        "Understreget: Hvad siger du til det? (at leje sommerhuset på Bornholm en uge i juli)",
        "Foreslå, at I mødes og snakker mere om jeres ferieplaner."
      ],
      phrases: ["Tak for din mail.", "Du spørger, hvordan det går med træningen.", "Hvis jeg var dig, ville jeg …", "Med hensyn til …", "Jeg er rigtig glad for at tage toget, fordi …", "En uge i juli passer mig fint.", "Skal vi ikke mødes og snakke mere om vores ferieplaner?", "Kærlig hilsen"],
      model: `Hej Sofie

Tak for din mail. Det var også rigtig hyggeligt at besøge dig. Du spørger, hvordan det går med træningen. Det går faktisk godt. Jeg løber fire gange om ugen, og i søndags løb jeg 25 kilometer uden problemer. Jeg glæder mig meget til Berlin!

Hvis jeg var dig, ville jeg sige ja til at blive projektleder. Det er en stor chance, og du bliver sikkert rigtig god til det. Men tal med din chef om arbejdstiden, før du siger ja. Måske kan en kollega overtage nogle af dine andre opgaver, så du ikke skal arbejde endnu mere.

Jeg er meget glad for at tage toget til arbejde. Jeg kan læse eller slappe af, og jeg kommer aldrig stresset på arbejde. Det er også billigere end at have bil, så jeg tror, at du sagtens kan undvære den.

Sommerhuset på Bornholm lyder dejligt, og en uge i juli passer mig fint. Skal vi ikke mødes en aften i næste uge og snakke mere om vores ferieplaner?

Kærlig hilsen
Anna`
    },
    {
      id: "pd3-19m-w2a", delprove: 2, real: true, year: 2019, session: SESSION,
      title: "2A: Kviklån (maj-juni 2019)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Kviklån¹. " +
        "Andel af befolkningen der optager kviklån – fordelt på erhvervsmæssig status. " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): I arbejde ca. 4,2 % · Arbejdsløse ca. 6,8 % · På pension eller sygedagpenge ca. 11,5 %. " +
        "Kilde: https://www.kfst.dk/media/2779/20150701-markedet-for-kviklaan-opdateret-juli-2015.pdf. " +
        "¹ Kviklån er lån, man kan tage hurtigt via private lånefirmaer. Kviklån skal normalt betales tilbage indenfor få måneder og har relativt høje renter. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2019m/kviklaan-diagram.png",
      imageAlt: "Søjlediagram: Andel af befolkningen der optager kviklån – fordelt på erhvervsmæssig status. I arbejde ca. 4,2 %, arbejdsløse ca. 6,8 %, på pension eller sygedagpenge ca. 11,5 %.",
      chart: {
        title: "Andel af befolkningen der optager kviklån – fordelt på erhvervsmæssig status",
        unit: "%", approx: true,
        source: "https://www.kfst.dk/media/2779/20150701-markedet-for-kviklaan-opdateret-juli-2015.pdf",
        bars: [
          { label: "I arbejde", value: 4.2 },
          { label: "Arbejdsløse", value: 6.8 },
          { label: "På pension eller sygedagpenge", value: 11.5 }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til en eller flere af de forskelle, diagrammet viser.",
        "I 2017 blev det ved lov vedtaget, at der skal gå 48 timer, før en borger kan få udbetalt et kviklån. Vurder, om det er statens ansvar at begrænse de private lånefirmaers muligheder for at tilbyde forbrugerne kviklån. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor stor en andel af …", "Andelen er mindst blandt …", "Blandt dem, der er …, er den højest med ca. … %.", "En årsag til forskellene kan være, at …", "Efter min mening er det statens ansvar at …", "For det første … For det andet …", "På den anden side …", "Alt i alt mener jeg, at …"],
      model: `Kviklån – hvem har ansvaret?

Diagrammet viser, hvor stor en andel af befolkningen der optager kviklån, fordelt på erhvervsmæssig status. Andelen er mindst blandt dem, der er i arbejde, nemlig ca. 4 %. Blandt de arbejdsløse er den ca. 7 %, og blandt dem, der er på pension eller sygedagpenge, er den højest med ca. 11,5 %. Den er altså næsten tre gange så stor som blandt dem, der er i arbejde.

En årsag til forskellene kan være, at pensionister, syge og arbejdsløse ofte har en lav indkomst. Når der kommer en uventet regning, fx fra tandlægen, har de måske ingen opsparing, og banken vil ikke altid give dem et almindeligt lån. Så kan et kviklån virke som den eneste løsning.

Efter min mening er det statens ansvar at begrænse lånefirmaernes muligheder. For det første er renterne meget høje, og mange forbrugere forstår ikke, hvor dyrt lånet bliver. For det andet går det ud over de svageste borgere, som i forvejen har få penge. Hvis de ikke kan betale tilbage, ender de i en gældsfælde, og det kan føre til stress og sygdom. Det koster også samfundet penge. Derfor synes jeg, at reglen om de 48 timer er god, fordi man får tid til at tænke sig om.

På den anden side er voksne mennesker selv ansvarlige for deres økonomi, og staten skal ikke bestemme alt. Nogle har brug for penge hurtigt, og et forbud kunne få dem til at låne penge på ulovlige måder.

Alt i alt mener jeg, at staten har et ansvar for at beskytte forbrugerne, men det er også vigtigt, at skolerne lærer de unge om privatøkonomi.`
    },
    {
      id: "pd3-19m-w2b", delprove: 2, real: true, year: 2019, session: SESSION,
      title: "2B: Uro i timerne i folkeskolen (maj-juni 2019)",
      kind: "Prøveopgave · holdninger og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Uro i timerne i folkeskolen. " +
        "Der er mange, der mener, at der er for meget uro i timerne i folkeskolen, og at det går ud over børnenes læring. Der er forskellige holdninger til, hvordan man kan skabe mere ro i timerne. Her er der nogle synspunkter: " +
        "• Mere af undervisningen skal foregå udenfor klasselokalerne. • Eleverne skal være med til at bestemme indholdet i undervisningen. • Der skal være mere udenadslære. • Lærerne skal sende urolige elever uden for døren. • Lærerne skal uddannes bedre i at skabe respekt. • Urolige elever skal gå i mindre klasser med andre urolige elever. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Mere af undervisningen skal foregå udenfor klasselokalerne.", "Eleverne skal være med til at bestemme indholdet i undervisningen.", "Der skal være mere udenadslære.", "Lærerne skal sende urolige elever uden for døren.", "Lærerne skal uddannes bedre i at skabe respekt.", "Urolige elever skal gå i mindre klasser med andre urolige elever."],
      points: [
        "Fortæl kort om dine egne erfaringer med uro i timerne, da du gik i skole.",
        "Kommentér et eller to af synspunkterne fra listen.",
        "Vurder, om det er forældrenes, lærernes eller skolens ansvar at skabe mere ro i timerne i folkeskolen. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Da jeg gik i skole i …, var der …", "Jeg er enig i, at …, fordi …", "Til gengæld er jeg uenig i, at …", "Efter min mening er det både … og …", "… har det største ansvar for …", "Hvis …, bliver det svært at …", "Derfor synes jeg, at …", "Alt i alt mener jeg, at …"],
      model: `Ro i klassen – hvis ansvar?

Da jeg gik i skole i mit hjemland, var der sjældent uro i timerne. Lærerne var meget strenge, og vi rejste os op, når de kom ind i klassen. Hvis nogen snakkede, fik de skældud eller ekstra lektier. Jeg lærte meget, men jeg turde ikke stille spørgsmål.

Jeg er enig i, at mere af undervisningen skal foregå uden for klasselokalerne. Mange børn har svært ved at sidde stille i mange timer, og når de kan bevæge sig, bliver de mere rolige og koncentrerede. Til gengæld er jeg uenig i, at urolige elever skal gå i mindre klasser med andre urolige elever. Så får de ingen gode rollemodeller, og de kan føle sig udstødt.

Efter min mening er det både forældrenes, lærernes og skolens ansvar at skabe ro i timerne. Forældrene har det største ansvar for børnenes opdragelse. De skal lære dem at respektere voksne og kammerater, og de skal sørge for, at børnene sover nok og ikke bruger mobilen hele aftenen. Lærerne har ansvaret i selve timen. De skal forberede spændende undervisning, sætte klare regler og være konsekvente. Skolen skal give lærerne gode rammer, fx mindre klasser, efteruddannelse og hjælp fra en pædagog, når der er elever med særlige behov.

Hvis forældrene, lærerne og skolen ikke samarbejder, bliver det svært at skabe ro. Derfor synes jeg, at de skal holde møder og blive enige om fælles regler. Alt i alt mener jeg, at ansvaret skal deles, men at forældrene skal lægge grunden derhjemme.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål maj-juni 2019 ----------
  // q = the obligatory question; follow = the suggested follow-up question. The intro is the examiner's
  // opening sentence from the booklet (emne A has "Her er to billeder", B and C "Her er der to billeder").
  // The captions are the titles printed above the pictures on the picture sheet.
  // Emne B also exists (with other model answers) in data-pd3-oral.js as pd3-o-arbejde-og-arbejdstid-2019m.
  const credit = "Illustration (fra Prøve i Dansk 3, maj-juni 2019)";
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-19m-o-a", title: "Transportformer", session: SESSION, year: 2019, real: true, credit,
      intro: "Her er to billeder, der viser nogle situationer, der handler om emnet ’Transportformer’.",
      pictures: [
        { file: "images/pd3-2019m/transportformer-1.jpg", caption: "Flere el-cykler i trafikken", credit,
          alt: "Tre personer cykler på en cykelsti ved en vej uden for byen. En ung kvinde på en almindelig cykel med kurv sveder og kæmper sig frem, mens en ung kvinde, der taler i mobiltelefon, og en ældre mand kører let forbi hende på elcykler (markeret med et lyn). På vejen ved siden af kører der biler.",
          words: ["en elcykel", "en almindelig cykel", "en cykelsti", "at svede", "at overhale"] },
        { file: "images/pd3-2019m/transportformer-2.jpg", caption: "Mere plads til cyklister og fodgængere", credit,
          alt: "En gade i en by bliver bygget om. Vejarbejdere lægger fliser til et bredt fortov og en ny cykelsti, en gravko graver ved husene, og der står afspærringer, et vejarbejdsskilt og et skilt med 30 km/t. Kørebanen er blevet smallere, og der er et vejbump.",
          words: ["et vejarbejde", "et fortov", "en cykelsti", "en fodgænger", "at gøre vejen smallere"] }
      ],
      first: {
        A: {
          q: "Der er flere og flere danskere, både unge og gamle, der køber en elcykel i stedet for en almindelig cykel. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved, at flere og flere danskere køber en elcykel i stedet for en almindelig cykel – fx for trafiksikkerheden eller sundheden? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, der er flere grunde. Med en elcykel kan man cykle langt uden at blive svedig, så mange bruger den til at cykle på arbejde i stedet for at tage bilen. Det er især praktisk, hvis man bor langt fra arbejdet, eller hvis der er mange bakker. Ældre mennesker kan også blive ved med at cykle, selvom de ikke har så mange kræfter. Desuden er det billigere end at køre bil og bedre for miljøet.",
          followAnswer: "Ja, der kan godt være nogle problemer. Elcykler kører hurtigt, og andre trafikanter kan have svært ved at vurdere farten. Især ældre kan komme alvorligt til skade, hvis de mister kontrollen. På cykelstierne kan der også opstå farlige situationer, når elcykler overhaler almindelige cykler. Med hensyn til sundheden får man lidt mindre motion end på en almindelig cykel. Men hvis elcyklen erstatter bilen, er den alligevel en fordel for sundheden."
        },
        B: {
          q: "Der er nogle, der mener, at der skal være mere plads til fodgængere og cyklister i de større byer. Hvorfor tror du, de mener det?",
          follow: "Mener du, der kan være nogen problemer ved at give mere plads til fodgængere og cyklister i de større byer? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, de mener det, fordi der er for meget trafik og forurening i de store byer. Hvis der er bedre plads til cyklister og fodgængere, vil flere lade bilen stå, og så bliver luften renere, og der bliver mindre støj. Det bliver også mere sikkert at færdes i byen, især for børn og ældre. Desuden bliver byen hyggeligere, når der er brede fortove, træer og bænke i stedet for parkerede biler.",
          followAnswer: "Ja, der kan være nogle problemer. Når vejene bliver smallere, kommer der flere bilkøer, og det kan gå ud over håndværkere, varebiler og folk, der er afhængige af bilen. Butikkerne kan også miste kunder, hvis der bliver færre parkeringspladser. Desuden koster ombygningen mange penge, og vejarbejdet skaber kaos i lang tid. Men jeg synes alligevel, at fordelene er størst, især hvis den offentlige transport bliver bedre samtidig."
        }
      },
      second: {
        q: "Der er nogle, der mener, at der skal investeres i hurtigtog i hele landet. Hvilke fordele og ulemper mener du, der kan være ved det – fx for miljøet?",
        follow: "Tror du, det vil være bedre at investere i flere motorveje end i hurtigtog i hele landet? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at hurtigtog kan få flere til at tage toget i stedet for bilen eller flyet, fordi rejsetiden bliver kortere. Det er godt for miljøet, fordi tog udleder mindre CO2 per passager. Det bliver også lettere at bo i én by og arbejde i en anden. En ulempe er, at det er meget dyrt at bygge nye skinner, og byggeriet kan ødelægge naturen. Desuden får små byer måske ingen station, hvis togene kun stopper i de store byer.",
        followAnswer: "Nej, det tror jeg ikke. Flere motorveje giver bare mere trafik, og så kommer der hurtigt kø igen. Biler forurener også mere end tog, og det passer dårligt med, at vi skal nedsætte CO2-udslippet. I toget kan man arbejde eller læse, mens man rejser. Men i nogle landområder, hvor der ikke er nogen jernbane, kan det godt være nødvendigt med bedre veje. Derfor skal man mest investere i tog, men ikke glemme vejene helt."
      },
      conclusion: ""
    },
    {
      id: "pd3-19m-o-b", title: "Arbejde og arbejdstid", session: SESSION, year: 2019, real: true, credit,
      intro: "Her er der to billeder, der viser nogle situationer, der handler om emnet ’Arbejde og arbejdstid’.",
      pictures: [
        { file: "images/pd3-2019m/arbejde-og-arbejdstid-1.jpg", caption: "Deltidsarbejde", credit,
          alt: "På et storrumskontor sidder flere medarbejdere ved deres computere. En kvinde i frakke står ved døren med sin taske ved fødderne og vinker farvel, selvom uret på væggen kun viser omkring klokken to. To kolleger vinker tilbage.",
          words: ["at arbejde på deltid", "at gå tidligt hjem", "et kontor", "en kollega", "at vinke farvel"] },
        { file: "images/pd3-2019m/arbejde-og-arbejdstid-2.jpg", caption: "Arbejdsmails og fritid", credit,
          alt: "To mænd fisker ved en sø ude i naturen. En tredje mand i gummistøvler står lidt væk fra dem og skriver på sin mobiltelefon i stedet for at fiske.",
          words: ["at fiske", "fritid", "at tjekke sine arbejdsmails", "en mobiltelefon", "at være på"] }
      ],
      first: {
        A: {
          q: "Nogle mennesker vælger i perioder at arbejde på deltid. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for folks karrieremuligheder, at de i perioder arbejder på deltid?",
          answer: "Jeg tror, mange vælger deltid i perioder, fordi de har brug for mere tid til familien, fx når de har små børn. Andre skal passe en syg forælder eller tager en uddannelse ved siden af jobbet. Nogle går også ned i tid, fordi de er ved at blive stressede og har brug for at komme sig. Og ældre medarbejdere vælger måske deltid de sidste år før pensionen, så overgangen bliver lettere.",
          followAnswer: "Jeg tror, det kan gøre det sværere at gøre karriere. Når man er mindre på arbejdspladsen, går man glip af møder og vigtige opgaver, og chefen vælger måske en anden, når der skal findes en ny leder. Man får også lavere løn og mindre i pension. Men hvis det kun er i en kort periode, behøver det ikke at betyde så meget. Mange arbejdspladser er i dag mere fleksible end tidligere."
        },
        B: {
          q: "Nogle mennesker tjekker deres arbejdsmails om aftenen eller i weekenden. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for folks karrieremuligheder, at de tjekker arbejdsmails om aftenen eller i weekenden?",
          answer: "Jeg tror, nogle gør det, fordi de vil have overblik og være forberedte, når de møder på arbejde næste dag. Andre føler, at chefen eller kunderne forventer et hurtigt svar. Med en smartphone har man jo altid sine mails med sig, så det er let lige at kigge. Nogle er også meget glade for deres job og synes ikke, at det er et problem. Men for andre bliver det en dårlig vane, som de har svært ved at stoppe.",
          followAnswer: "Jeg tror, det kan hjælpe karrieren lidt på kort sigt, fordi chefen ser, at man er engageret og altid kan nås. Måske får man de spændende opgaver eller en forfremmelse. Men på længere sigt kan det skade, hvis man aldrig holder fri. Man kan blive stresset og træt, og så laver man flere fejl. Jeg tror, det er vigtigere for karrieren, at man gør et godt stykke arbejde i arbejdstiden."
        }
      },
      second: {
        q: "Nogle mennesker mener, at den almindelige arbejdstid skal sættes ned til 30 timer om ugen. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Tror du, at en 30 timers arbejdsuge vil betyde, at arbejdet bliver bedre fordelt mellem folk? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at folk får mere tid til familien, motion og frivilligt arbejde, og måske bliver færre syge af stress. Det kan spare samfundet penge i sundhedsvæsenet. En anden fordel er, at nogle arbejdsløse måske kan få et job. En ulempe er, at der bliver produceret mindre, og så falder skatteindtægterne. Der mangler også allerede arbejdskraft i fx sundhedssektoren, og det problem ville blive større. Derfor tror jeg, det bliver svært at betale for velfærden.",
        followAnswer: "Det tror jeg kun delvist. I teorien kan arbejdet blive fordelt på flere personer, så nogle af de arbejdsløse kan få et job. Men i praksis har de arbejdsløse ikke altid de kvalifikationer, som virksomhederne mangler. En sygeplejerske eller en ingeniør kan man ikke bare erstatte med en tilfældig person. Mange virksomheder vil nok også bare bede de ansatte om at arbejde hurtigere. Derfor tror jeg ikke, at det løser problemet med arbejdsløshed."
      },
      conclusion: ""
    },
    {
      id: "pd3-19m-o-c", title: "Kultur", session: SESSION, year: 2019, real: true, credit,
      intro: "Her er der to billeder, der viser nogle situationer, der handler om emnet ’Kultur’.",
      pictures: [
        { file: "images/pd3-2019m/kultur-1.jpg", caption: "Brugerbetaling på museer", credit,
          alt: "En kø af mennesker går ind ad døren til et moderne museum med et vikingeskib på facaden. Foran indgangen står et skilt med priserne: voksne 130 kr, børn 0 kr, studerende 100 kr.",
          words: ["et museum", "en entré", "at stå i kø", "gratis for børn", "en studierabat"] },
        { file: "images/pd3-2019m/kultur-2.jpg", caption: "Gratis adgang til biblioteker", credit,
          alt: "Et stort bibliotek med mange reoler fulde af bøger. Nogle mennesker står ved skranken eller sidder ved computere, en mand kigger på bøger på en hylde, en mor og en lille pige går gennem biblioteket, og to mænd sidder og læser aviser ved et lille bord.",
          words: ["et bibliotek", "at låne bøger", "en reol", "at læse avis", "en skranke"] }
      ],
      first: {
        A: {
          q: "Nogle danskere mener, at det skal være gratis at gå på museum. Hvorfor tror du, de mener det?",
          follow: "Hvad tror du, det betyder for folks interesse for kunst og kultur, at det ikke er gratis at gå på museum?",
          answer: "Jeg tror, de mener det, fordi kunst og kultur skal være for alle og ikke kun for dem, der har råd. For en familie kan det blive dyrt at gå på museum, når en voksen betaler 130 kroner. Hvis det var gratis, ville flere komme, også folk, der normalt ikke går på museum, og man kunne bare kigge forbi en halv time. Museerne får desuden penge fra staten, så nogle synes, at man allerede har betalt over skatten.",
          followAnswer: "Jeg tror, det betyder, at nogle mennesker mister interessen eller aldrig får den. Hvis man ikke har så mange penge, vælger man andre ting, og så kommer man måske aldrig på museum. Det gælder især unge og familier med lav indkomst. Men på den anden side er de mennesker, der virkelig interesserer sig for kunst, nok villige til at betale. Og mange museer har gratis dage eller årskort, så problemet er ikke så stort."
        },
        B: {
          q: "I Danmark er det gratis at bruge bibliotekerne. Hvorfor tror du, det er det?",
          follow: "Hvad tror du, det betyder for folks interesse for at læse, at det er gratis at låne bøger på bibliotekerne?",
          answer: "Jeg tror, det er gratis, fordi det er vigtigt for et demokrati, at alle har adgang til viden og information. Alle skal kunne læse bøger, aviser og blade, uanset hvor mange penge de har. Biblioteket hjælper også børn med at lære at læse, og det er godt for deres uddannelse. Desuden er biblioteket et sted, hvor man kan bruge en computer, få hjælp og møde andre mennesker. Derfor betaler vi det over skatten.",
          followAnswer: "Jeg tror, det betyder, at flere mennesker læser. Når det er gratis, kan man prøve en ny forfatter uden at bruge penge, og hvis man ikke kan lide bogen, afleverer man den bare igen. Især børn og studerende låner mange bøger. Min datter låner fx fem bøger hver uge på biblioteket. Men i dag bruger mange mennesker mere tid på mobilen end på bøger, så gratis bøger alene kan ikke få alle til at læse."
        }
      },
      second: {
        q: "Flere kommuner bruger penge på dyre kulturhuse med kulturtilbud som fx teater, dans, musik og udstillinger. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Mener du, at en kommune skal bruge penge på kulturhuse, eller bør en kommune prioritere andre kulturtilbud eller andre områder som fx ældrepleje og uddannelse? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at et kulturhus samler mange tilbud ét sted, så borgerne kan gå til koncert, se teater eller besøge en udstilling uden at rejse til en stor by. Det kan gøre kommunen mere attraktiv, så flere familier vil flytte dertil. Det giver også liv i byen og et sted, hvor folk kan mødes. En ulempe er, at det koster rigtig mange penge både at bygge og drive huset. De penge kunne måske bruges bedre på skoler eller ældrepleje.",
        followAnswer: "Jeg mener, at en kommune først og fremmest skal sørge for, at ældreplejen og skolerne fungerer godt. Det er det, borgerne har mest brug for i hverdagen. Men kultur er også vigtig for livskvaliteten, og derfor skal man ikke spare den helt væk. Måske kan kommunen bruge de bygninger, den allerede har, fx skoler og biblioteker, til kulturtilbud i stedet for at bygge et dyrt kulturhus. Så får man både god velfærd og kultur."
      },
      conclusion: ""
    }
  );
})();
