// Prøve i Dansk 3, november-december 2022 – læseforståelse, transcribed from the exam papers
// (Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Vikinger før og nu" nr. 14;
// Læseforståelse 2: opgavehæfte nr. 17 and teksthæfte nr. 16).
// The answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur (delprøve 1 item 9: "Man kan (som tilskuer) føle med dem (og le ad dem)"
// is also accepted; delprøve 3 item 8: option C "Derudover" is also accepted, so both C and D score as right).
// We first worked out every answer from the texts ourselves; they all matched the official key.
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle
// (a slash in the key = and/or, words in brackets = optional).
// Pictures and logos from the tekstsamling are left out (their captions are not needed for any answer).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 3 × 2, 2B = 5 × 2, delprøve 3 = 8 × 1 → 39 points.
// Omregningstabel vinter 2022: 39-38 = 12, 37-34 = 10, 33-29 = 7, 28-24 = 4, 23-21 = 02, 20-10 = 00, 9-0 = -3.
// The app scores every question as 1, so 2A/2B count half as much here as at the exam.

(function () {
  const G = "PD3 nov.-dec. 2022";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const vikinger = {
    id: "pd3-22n-1", group: G, real: true,
    title: "Delprøve 1 – Vikinger før og nu",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Vikinger før og nu. Brug indholdsfortegnelsen. Svar præcist og kort på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Arven fra vikingerne … 3
Tre vikingeattraktioner … 5
   Ribe VikingeCenter … 5
   Vikingeskibsmuseet i Roskilde … 6
   Vikingeborgen Trelleborg … 7
Film og tv med vikingetema … 8
Vikinger som varemærke … 10
Tre danskere fortæller om deres forhold til vikinger … 11

**ARVEN FRA VIKINGERNE**

På vikingernes tid (ca. 800-1050) var der ikke noget, der hed stater. Dette begreb opstod først omkring 1500-tallet. Men i vikingetiden var der dog en central magt i form af skiftende konger. Dele af det, som vi i dag opfatter som karakteristisk for en stat, var også til stede i vikingetidens Danmark: Danmark havde én befolkning (danerne), det danske territorium var nogenlunde velafgrænset, kongen kunne opkræve skat, og der blev anlagt store, centralt koordinerede forsvarsværker som fx Dannevirke.

**Vikingemotiver som symboler i dag**
Vikingerne har sat deres aftryk på den danske nationalfølelse, og referencer til vikinger ses hyppigt i dansk kultur og på nationale symboler. Fx har det danske pas et motiv fra den store Jellingsten, da den betragtes som Danmarks dåbsattest. På den måde er danskhed og vikingetid kædet sammen. Vikingerne er blevet en fast del af den danske kultur og hverdag. Man kan fx se vikinger optræde som symbol på pakninger med leverpostej. Det siger noget om, hvor folkelige vikingerne er i dag. Vikinger og vikingetidens genstande bliver ofte brugt som symboler på styrke. Styrke anses som en meget positiv egenskab, og nogle danskere vælger derfor at få tatoveret motiver af vikingegenstande fra vikingetiden. Tatoveringer af den slags er bl.a. populære hos danske soldater.

Når Danmark skal brande sig i udlandet, så bliver der også ofte brugt vikinger, og turistorganisationen VisitDanmark ser vikingerne som et stort historisk aktiv til at få flere til at interessere sig for Danmark.

**Vikingetiden og det danske samfund i dag**
Vikingernes handelsrelationer og militære samarbejde var præget af stor indbyrdes tillid. Det kendetegner også blandt andet det danske samfund i dag.

”Én af de vigtigste grunde til, at Norden er blevet så rigt i en kold, ufrugtbar udkant af verden er, at vi har et højere tillidsniveau end praktisk talt alle andre områder af verden,” siger Christian Bjørnskov, lektor og ph.d. fra Handelshøjskolen i Aarhus. Han forsker i tillid og forklarer, at vikingernes tillid til hinanden blandt andet betød, at en sælger i Ribe roligt kunne sende en vare af sted med skib til Reykjavik i Island, som han først fik betaling for, når skibet returnerede.

**Vikingeaktiviteter: Kultur og tro**
Vikingeaktiviteter er blevet populære som turistattraktioner rundt om i Danmark. For nogle danskere er vikingekulturen faktisk også blevet en hobby. Ved Moesgaard Museum ved Aarhus er der fx hvert år en stor vikingefestival. Vikingeentusiaster fra hele verden optræder med deres kunnen inden for våbenbrug, ridning, kunsthåndværk, dagligvarer og madlavning, og kampene, vikingeentusiasterne udkæmper, er kendt som det uofficielle VM i vikingekamp. Og i Roskilde har Vikingeskibsmuseet et bådelav, hvor medlemmerne sejler i rekonstruerede vikingeskibe.

Det er ikke kun vikingernes kultur, der er meget fokus på i nutiden. Vikingernes religion asa-troen praktiseres også af en gruppe danskere i dag. I asatrossamfundet Forn Sidr dyrkes de nordiske vikingeguder. Kirkeministeriet i Danmark har godkendt dette som et officielt trossamfund.

Kilde: Let bearbejdet efter https://faktalink.dk/titelliste/vikinger/arven-fra-vikingerne, hentet 1. marts 2021.

**TRE VIKINGEATTRAKTIONER**

**Ribe VikingeCenter**

**Kort om Ribe VikingeCenter**
Ribe ligger ved Nationalpark Vadehavet, 50 km nord for den dansk-tyske grænse. Ribe blev grundlagt af vikingerne for 1300 år siden og er Danmarks og Nordens ældste stadig eksisterende by.

Ribe VikingeCenter, som er en rekonstruktion af vikingetidens Ribe, blev etableret i 1992. Her kan man opleve tre vikingemiljøer: Markedspladsen anno 710, Ribe By anno 825 samt Storgården med tilhørende bygninger anno 980. Vikingemiljøerne viser udviklingen gennem vikingetiden. Rekonstruktionerne er udført i tæt samarbejde med Den antikvariske Samling i Ribe, og derfor kan Ribe VikingeCenter fremvise miljøer, som man mener ser ud præcis som i vikingetiden.

Ribe VikingeCenter har åbent fra maj til slutningen af oktober. Vikingemarkedet er årets største event og finder altid sted den første uge i maj. Hele sæsonen kan publikum opleve arbejdende vikinger, falkonershow, bueskydning, islænderheste og adskillige prøv-selv-aktiviteter.

Kilde: Bearbejdet efter https://www.ribevikingecenter.dk/da/presse.aspx, hentet 1. august 2021.

**Vikingemad til alle tider**
Ribe VikingeCenter sætter fokus på vikingernes råvarer og madtraditioner og gør samtidig op med forestillingen om, at vikingemad skulle være besværlig og kedelig.

Ingen ved ganske vist, hvordan vikingernes mad smagte, da der ikke er bevaret opskrifter fra den tid. Arkæologiske udgravninger giver os dog et godt billede af, hvilke råvarer der var tilgængelige i vikingetiden. Således står vi i dag med en lang historisk og sæsonbetonet råvareliste, for årstiderne og den nære, vilde natur spillede helt sikkert en rolle. Der er ikke noget, der tyder på, at vikingernes kost altid bestod af grød, ærter og tørret fisk.

Kilde: Bearbejdet efter https://www.ribevikingecenter.dk/da/viden/vikingemad-til-alle-tider.aspx, hentet 1. maj 2021.

**Vikingeskibsmuseet i Roskilde**

**Vikingeskibsmuseet og vikingeskibene**
Vikingeskibsmuseet i Roskilde udstiller blandt andet fem verdensberømte vikingeskibe og har særligt fokus på vikingetid, skibe, søfart og bådebygningskultur.

Museet er kendt for det enestående samspil mellem de fem originale vikingeskibe kaldet Skuldelevskibene, som man kan opleve i Vikingeskibshallen, og museets levende formidlingsmiljø på museumsøen, hvor man kan opleve arbejdet med at rekonstruere vikingeskibe, fremragende bådebygning og specialiserede, maritime håndværk.

På museet mødes fortællinger om vores maritime forhistorie i levende rammer, hvor museumsgæsterne inddrages i historien gennem dialog og aktiv deltagelse.

Vikingeskibsmuseet ligger smukt ned til Roskilde Fjord og består af Vikingeskibshallen, museumsøen med bådeværft, værksteder og Café Knarr, der serverer Ny Nordisk Vikingemad, samt museumshavnen med nordiske træbåde og forskellige rekonstruerede vikingeskibe. Museet tiltrækker gæster fra hele verden og er samtidig et vigtigt samlingssted og et rekreativt område med et rigt udbud af aktiviteter og arrangementer for både børn og voksne, hvilket gør et besøg på Vikingeskibsmuseet til noget helt særligt året rundt.

**Nyt Vikingeskibsmuseum på vej**
I 2026 skal et nyt Vikingeskibsmuseum stå færdigt. Det nye museum skal sikre de fem Skuldelevskibe mod klimaforandringer, og samtidig skal museets udstillinger og faciliteter bringes op til nutidige standarder. Vikingeskibsmuseet vil holde åbent, helt frem til det nye museum står klar.

Kilde: Bearbejdet efter https://www.vikingeskibsmuseet.dk/, hentet 1. april 2021.

**Vikingeborgen Trelleborg**

**En af fem 1000 år gamle vikingeborge**
Ét af de steder, hvor vikingetiden kan opleves på tætteste hold, er på Vikingeborgen Trelleborg nær Slagelse i Vestsjælland. I et naturskønt område ligger én af vikingernes store ringborge. Trelleborg blev bygget omkring år 980 af Kong Harald Blåtand.

Trelleborg er en del af vikingetidens militære magtsystem. Der kendes fire andre borge, som tydeligt er opført på samme tid og efter samme model som Trelleborg, nemlig Aggersborg på nordsiden af Limfjorden, Fyrkat ved Hobro, Nonnebakken i Odense og Borgring ved Køge. Af disse er Aggersborg den største, mens Trelleborg er langt den bedst bevarede og i øvrigt den eneste med en befæstet forborg.

**Gå i vikingernes fodspor**
Man kan få mere at vide om kongeborgen ved at besøge museet på Trelleborg. Her giver modeller, arkæologiske fund og rekonstruktioner et levende indtryk af Trelleborgs historie, beboerne og borgens funktion. Man kan opleve vikingernes liv på tæt hold i den rekonstruerede landsby, Slagløse. Museet tilbyder i påsken, hele sommersæsonen og efterårsferien et væld af aktiviteter, opvisninger og events. Prøv selv kræfter med vikingernes håndværk og daglige gøremål, og oplev stemningen omkring madbålet.

Kilde: Bearbejdet efter https://natmus.dk/museer-og-slotte/trelleborg/trelleborgs-historie/, hentet 1. april 2021.

**FILM OG TV MED VIKINGETEMA**

**Valhalla – tegnefilm**
Tegnefilmen Valhalla havde premiere i 1986. Den var med sit budget på 30 millioner kroner på det tidspunkt den dyreste danske film. Den er baseret på tegner og instruktør Peter Madsens tegneserie-univers af samme navn.

Historien handler om to menneskebørn Tjalfe og Røskva, der får besøg af vikingeguderne Thor og Loke, som senere følger dem til gudernes verden, Asgård, hvor de møder det drilagtige væsen Quark. Hele flokken tager til Udgård, hvor de dyster mod onde jætter, der bruger magi til at vinde over dem.

De originale vikingeinspirerede tegninger står godt til fortællingerne fra den nordiske mytologi, der er ramme i filmen. Kendte danske skuespillere har lagt stemme til de forskellige figurer, hvilket gør, at blandt andet de forskellige nordiske guder træder i karakter. I tegnefilmen bliver myterne gjort lettilgængelige, blandt andet ved at vikingernes guder bliver gjort menneskelige, så man kan identificere sig med dem. I filmen er guderne charmerende – men de er også luddovne, arrige og uretfærdige, og fordi de har så mange menneskelige træk, kan man som tilskuer føle med dem og le ad dem.

**Jul i Valhal – tv-julekalender**
I december 2005 sendte TV 2 for første gang julekalenderen Jul i Valhal. Her fik man indblik i vikingernes guder og den nordiske mytologi, for julekalenderen handler om vennerne Jonas og Sofie, der sammen rejser fra Midgård, menneskenes verden, til Asgård, vikingegudernes verden, og Udgård, hvor de onde jætter holder til. Jul i Valhal bragte den nordiske mytologi ind i vores moderne verden, for den gav os ikke kun indblik i traditionelle emner som mytologi, venskab og julestemning, men gav os også en række gode moderne popsange, vi stadig kan synge med på.

Det mødte kritik blandt nogle, at manuskriptforfatterne valgte at gøre guderne både fjollede og humoristiske – de fleste seere og især børnene var dog begejstrede for karaktererne. Jul i Valhal blev endda den julekalender med det største seertal i perioden 2000 til 2010. Gennemsnitligt så hele 1.232.000 seere med hver aften, når et nyt afsnit af julekalenderen blev vist. Julekalenderen blev vist på TV 2 i Norge i 2006 og blev genudsendt på TV 2 i Danmark i 2012. Den er ikke sendt som julekalender siden, men den kan ses på Netflix etc.

**Far til fire og vikingerne – familiefilm**
Far til fire og vikingerne er endnu en film om Onkel Anders, faren og de fire børn med Lille Per i centrum. Den er fra 2020 og intet mindre end film nummer 20 i den folkelige serie, siden den første havde premiere i 1953.

Handlingen er som altid til at overskue. Der er krise i den velkendte familie, og det bliver besluttet, at de alle skal i familieterapi – inklusive Onkel Anders. Familien skal leve som vikinger i en uge, så de tager til et familieterapisted, som er virkelighedens Ravnsborg, der er en vikingeborg, der er blevet rekonstrueret af den kendte designer Jim Lyngvild. Her er filmen indspillet, og her begynder terapeuternes selvopfundne vikingeøvelser, der skal lære familien at samarbejde. Det hele har ikke meget med vikinger at gøre, men historien om familien, der til sidst igen finder sammen, er god familieunderholdning.

**Vikings – tv-serie**
Den stort anlagte tv-serie, der havde premiere i 2013, tager udgangspunkt i historien om sagnhelten Regnar Lodbrog, som er bonde til daglig. Regnar har visioner om at rejse vestpå som kriger på et togt til England. Vennen Floke er en dygtig bådebygger, der længe har arbejdet på en ny type båd, nemlig langbåden, der kan gøre det muligt for vikingerne at krydse Nordsøen.

Vikings er den første store tv-serie, som har fokus på vikingetiden, og der er tænkt grundigt over at forholde sig til historiske fakta for at give noget, der ligner en autentisk oplevelse. Selvom elementer fra vikingetiden bliver vist med en relativ historisk præcision, er der dog tale om en fri tilgang til den originale historie, og serien tager sig en del kunstneriske friheder. Fx tales der engelsk, selvom historien foregår i Skandinavien, men skuespillerne forsøger at tale med nordisk accent for at få serien til at virke mere autentisk. Man kan vælge at se dette som et plus, men taler man et nordisk sprog, er det tydeligt at høre, at det nok ikke er blevet undersøgt, hvordan en nordisk accent faktisk lyder, og derfor er accenterne lidt for skiftende til at være troværdige.

**VIKINGER SOM VAREMÆRKE**

**VIKING-blyanter**
Portrætteringen af vikinger har længe været populær i reklamer og logoer. De er brugt i markedsføringen af så forskellige varer som pølser, ølflasker, sportshold, leverpostej, flyrejser og tændstikker. Fra 1914 har man kunnet finde dem på blyanter, da tændstikfabrikken H.E. Gosch oprettede en afdeling med blyanter kaldet VIKING, en afdeling, som i dag er udvidet med oliekridt, farvekridt m.m.

VIKING er et eksempel på et firma, der har brugt vikinger både i firmaets navn og i det kunstneriske udtryk, som virksomheden benytter sig af. Således er der både på indpakningen af blyanterne, på firmaets andre produkter og på firmaets hjemmeside afbilledet et vikingeskib og forskellige kunstneriske symboler fra vikingetiden. VIKING bruger vikinger kommercielt, og navnet og designet giver et indtryk af produkter, der er solide og holdbare.

**Vikingemotiver på fødevarer**
Vikinger benyttes også til markedsføring i logoerne for Stryhn’s og GØL. Vikingen i de to logoer adskiller sig imidlertid markant. Til venstre ses vikingen fra Stryhn’s Leverpostej: venlig, ufarlig og måske endda hyggelig. Dens modsætning ses til højre. Det er varemærket for GØL, der er en dansk pølsefabrik. Her står vikingen rank og udstråler barskhed og styrke – egenskaber, der igen er blevet populære i den seneste tids historiebrug af vikinger. Men begge er eksempler på kommerciel brug, hvor vikingen bliver brugt til at reklamere for og sælge et produkt.

Eksemplerne har det til fælles, at de bruger vikingen som et symbol på noget trygt, noget vi kender, og noget som vi kan stole på. I begge logoer findes den hjelm med horn, som vi i dag straks forbinder med vikinger, selvom det er historisk ukorrekt. Selvom arkæologer og historikere i mere end 100 år har været klar over, at vikingernes hjelme ikke havde horn, lever myten om det altså videre i bedste velgående – blandt andet gennem kommerciel markedsføring som i Stryhn’s og GØLs produkter.

Kilde: Bearbejdet efter https://danmarkshistorien.dk/leksikon-og-kilder/vis/materiale/historiebrug-af-vikingetiden, hentet 1. marts 2021.

**TRE DANSKERE FORTÆLLER OM DERES FORHOLD TIL VIKINGER**

**Marcela Morena, 38 år**
Jeg er kommet til Danmark som voksen. I mit hjemland, Brasilien, hørte jeg om vikingerne i skolen. Jeg fik egentlig det indtryk, at vikingerne var nogle farlige barbarer, men efter jeg er kommet til Danmark, har jeg fået en meget større forståelse for vikinger ved at gå på museer, læse om dem og lære om dem på sprogskolen.

Jeg er især begejstret for, at vi i dag gennem skriftlige kilder og arkæologiske udgravninger ved meget om kvindens rolle i samfundet dengang. På nogle sociale områder var der en form for ligestilling i vikingetiden. Der er ingen tvivl om, at kvinder ikke havde så meget politisk magt dengang, men der er alligevel meget, der tyder på, at kvinder både var selvstændige og havde rettigheder. Jeg er meget interesseret i ligestilling og vil derfor gerne læse de gamle sagaer, som udover at være gode fortællinger kan give mig mere viden om dette.

**Julia Puggaard, 12 år**
Jeg har haft om vikingetiden i skolen. Alle elever fra 3. til 6. klasse havde nemlig en emneuge, som vi kaldte ”Vi var vikinger”. Det var rigtigt spændende. Lærerne fortalte historier fra den nordiske mytologi, og vi legede også nogle af vikingernes lege og lavede vikingemad. Og så lærte jeg rigtig meget om vikingerne, og hvad de har betydet for mange ting.

Fx lærte vi om, at mange af de danske navne på ugedage og steder ligner navne på de nordiske guder. Jeg vidste godt, at de nordiske vikinger blandt andet kunne sejle til England, hvor de handlede, og at mange af dem faktisk også blev der. Men nu har jeg også lært, at der faktisk er mange nordiske låneord i det engelske sprog. Og det er sjovt at tænke på, at der for så mange år siden var folk, der rejste og flyttede mellem landene.

**Asbjørn Asgaard, 52 år**
Jeg er vikingeentusiast. Jeg laver håndværk, der er inspireret af vikingernes produktioner. Det er blandt andet smykker, knive og tekstiler. Jeg rejser rundt til vikingemarkeder og vikingefestivaler, hvor jeg viser mine varer frem og fortæller om baggrunden for og produktionen af dem – og så sælger jeg dem selvfølgelig.

Jeg er begejstret for både de naturlige materialer som tekstiler, træ og jern, som blev brugt i vikingetiden, og for de teknikker, som de gamle vikinger brugte til at bearbejde materialerne og fremstille deres produkter med. Når jeg fx farver tekstiler, så bruger jeg plantefarver, og det betyder, at det bliver en meget miljøvenlig proces. Det var naturligt for vikingerne at have denne produktionsform, og den er jeg ret begejstret for. Jeg tror, vi generelt kan lære meget af vikingerne.`,
    questions: [
      // Søg informationer under Tre vikingeattraktioner
      { type: "short", n: 1, q: "(Tre vikingeattraktioner) Hvorfra har Ribe VikingeCenter viden om, hvilke råvarer der indgik i vikingernes mad?",
        accept: uniq(combos(["", "fra", "fra de", "gennem", "fra nogle", "ved"], ["", "arkæologiske"], ["udgravninger", "udgravningerne", "udgravning"])) },
      { type: "short", n: 2, q: "(Tre vikingeattraktioner) Hvad hedder det sted på Vikingeskibsmuseet, hvor man kan opleve originale vikingeskibe?",
        accept: uniq(combos(["", "i", "det hedder", "stedet hedder"], ["vikingeskibshallen", "vikingeskibshal"])) },
      { type: "short", n: 3, q: "(Tre vikingeattraktioner) Hvad fremhæves ved vikingeborgen Trelleborg, udover at den har en forborg?",
        accept: uniq(combos(["", "det er", "den er", "at den er", "at det er"], ["", "den", "langt den"], ["bedst bevarede", "bedst bevaret"], ["", "borg", "vikingeborg", "af borgene", "af de fem borge", "af vikingeborgene"])
          .concat(combos(["", "at den er", "den er"], ["", "langt"], ["bedre bevaret end de andre borge", "den bedst bevarede af de fem vikingeborge"]))) },
      // Søg informationer under Vikinger som varemærke
      { type: "short", n: 4, q: "(Vikinger som varemærke) Hvad ønsker VIKING at signalere om deres produkter ved at bruge vikinger i deres varemærke?",
        accept: uniq(combos(["", "at det er", "at de er", "at produkterne er", "de er", "det er", "at deres produkter er", "at"], ["holdbare", "solide", "solide og holdbare", "holdbare og solide"], ["", "produkter"])
          .concat(combos(["", "et indtryk af", "at det er"], ["solide og holdbare produkter", "produkter der er solide og holdbare", "produkter der er holdbare og solide", "holdbare produkter", "solide produkter"]))) },
      { type: "short", n: 5, q: "(Vikinger som varemærke) Hvad er historisk ukorrekt ved hjelmene i logoerne for Stryhn’s og GØL?",
        accept: uniq(combos(["", "hjelmene har", "de har", "at hjelmene har", "at de har", "der er", "de har", "at der er"], ["horn", "horn på"])
          .concat(["hornene", "at de har horn på", "vikingernes hjelme havde ikke horn", "vikingehjelme havde ikke horn", "vikingernes hjelme havde ikke horn på", "at vikingernes hjelme ikke havde horn", "hjelmen med horn", "hjelme med horn", "der er horn på hjelmene", "hjelmene har horn men vikingernes hjelme havde ikke horn"])) },
      // Søg informationer under Arven fra vikingerne
      { type: "short", n: 6, q: "(Arven fra vikingerne) Nogle danskere får tatoveret motiver fra vikingetiden. Hvilken egenskab ønsker de at vise med disse tatoveringer?",
        accept: uniq(combos(["", "deres", "at de har", "at vise"], ["styrke"]).concat(["at de er stærke", "de er stærke", "styrke som en positiv egenskab"])) },
      { type: "short", n: 7, q: "(Arven fra vikingerne) Hvad er konkurrencerne ved Moesgaard Museum i vikingeaktiviteter som våbenbrug og ridning kendt som?",
        accept: uniq(combos(["", "det", "de er kendt som det", "det er"], ["", "uofficielle"], ["vm i vikingekamp", "verdensmesterskab i vikingekamp", "verdensmesterskabet i vikingekamp", "vm i vikingekampe"])) },
      { type: "short", n: 8, q: "(Arven fra vikingerne) Hvad er navnet på det officielt godkendte asatrossamfund, der dyrker vikingernes guder?",
        accept: ["forn sidr", "asatrossamfundet forn sidr", "det hedder forn sidr", "forn sidr asatrossamfund", "det er forn sidr"] },
      // Søg informationer under Film og tv med vikingetema
      { type: "short", n: 9, q: "(Film og tv med vikingetema) Hvorfor er vikingernes guder i filmen Valhalla gjort menneskelige?",
        accept: uniq(combos(["", "så", "for at", "fordi", "så at"], ["man kan identificere sig med dem", "man kan identificere sig med guderne", "man kan identificere sig med dem og myterne bliver lettilgængelige", "tilskuerne kan identificere sig med dem", "seerne kan identificere sig med dem", "publikum kan identificere sig med dem"])
          .concat(combos(["", "for at", "så de kan"], ["gøre myterne lettilgængelige", "gøre myterne lettere tilgængelige", "gøre myterne lette at forstå"]))
          .concat(combos(["", "så", "så at"], ["myterne bliver lettilgængelige", "myterne bliver lettere tilgængelige"]))
          .concat(combos(["", "så", "for at", "fordi"], ["man kan føle med dem", "man som tilskuer kan føle med dem", "man kan føle med dem og le ad dem", "man som tilskuer kan føle med dem og le ad dem", "man kan som tilskuer føle med dem", "man kan som tilskuer føle med dem og le ad dem"]))
          .concat(["man kan identificere sig med dem", "for at man kan identificere sig med dem"])) },
      { type: "short", n: 10, q: "(Film og tv med vikingetema) Hvornår blev Jul i Valhal genudsendt på dansk TV 2?",
        accept: ["2012", "i 2012", "i år 2012", "år 2012", "i december 2012", "december 2012"] },
      { type: "short", n: 11, q: "(Film og tv med vikingetema) Hvad hedder den rekonstruerede vikingeborg, hvor Far til fire og vikingerne er indspillet?",
        accept: ["ravnsborg", "den hedder ravnsborg", "ravnsborg vikingeborg", "vikingeborgen ravnsborg", "på ravnsborg", "det hedder ravnsborg"] },
      { type: "short", n: 12, q: "(Film og tv med vikingetema) Hvordan forsøger skuespillerne at tale engelsk for at få tv-serien Vikings til at virke mere autentisk?",
        accept: uniq(combos(["", "med", "de taler med", "de forsøger at tale med", "de prøver at tale med", "ved at tale med", "de taler engelsk med", "med en"], ["", "nordisk", "en nordisk", "skandinavisk", "en skandinavisk"], ["accent"])) },
      // Søg informationer under Tre danskere fortæller om deres forhold til vikinger
      { type: "short", n: 13, q: "(Tre danskere fortæller om deres forhold til vikinger) Hvad er Marcela Morena især glad for at lære mere om ved at læse gamle sagaer?",
        accept: uniq(combos(["", "om"], ["ligestilling", "ligestillingen", "ligestilling i vikingetiden", "ligestilling dengang", "ligestillingen i vikingetiden",
          "kvindens rolle", "kvindens rolle i samfundet", "kvindens rolle i samfundet dengang", "kvindens rolle i vikingetiden", "kvinders rolle", "kvinders rolle i samfundet", "kvindernes rolle", "kvindernes rolle i samfundet", "kvindernes rolle i vikingetiden",
          "kvinder og ligestilling", "ligestilling og kvindens rolle i samfundet"])
          .concat(combos(["", "at", "om at"], ["kvinder", "kvinderne"], ["var selvstændige", "havde rettigheder", "var selvstændige og havde rettigheder", "både var selvstændige og havde rettigheder"]))) },
      { type: "short", n: 14, q: "(Tre danskere fortæller om deres forhold til vikinger) Hvad har Julia Puggaard lært om vikingernes betydning for det engelske sprog?",
        accept: uniq(combos(["", "at", "at der er", "der er", "de har givet"], ["", "mange"], ["", "nordiske"], ["låneord"], ["", "i det engelske sprog", "i engelsk", "på engelsk", "i det engelske"])
          .concat(combos(["", "at"], ["engelsk har mange nordiske låneord", "der er mange nordiske låneord på engelsk", "engelsk har lånt mange ord fra de nordiske sprog", "mange engelske ord kommer fra nordisk"]))) },
      { type: "short", n: 15, q: "(Tre danskere fortæller om deres forhold til vikinger) Hvor sælger Asbjørn Asgaard sine varer?",
        accept: uniq(combos(["", "på", "han sælger dem på", "til"], ["vikingemarkeder", "vikingefestivaler", "vikingemarkeder og vikingefestivaler", "vikingemarkeder og festivaler", "vikingemarkeder og vikingefestivaler", "vikingemarkeder eller vikingefestivaler", "vikingemarkeder og -festivaler", "vikingemarkeder og  festivaler", "vikingefestivaler og vikingemarkeder", "vikingemarked", "vikingefestival", "et vikingemarked", "en vikingefestival"])) }
    ]
  };

  const selvstaendig = {
    id: "pd3-22n-2", group: G, real: true,
    title: "Delprøve 2A – Livet som selvstændig",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Livet som selvstændig. Herunder er der 3 spørgsmål til teksten. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A, 2B og 3 – varer i alt 65 minutter.)",
    text: `**Livet som selvstændig**

For mange er det at være selvstændig ikke bare et job – det er en livsstil. Det indebærer stor frihed og meget indflydelse, men det indebærer også ofte en vis usikkerhed og lange arbejdsdage.

Anders Bang på 39 er uddannet møbelsnedker og har etableret sit eget værksted i udkanten af Aalborg. ”Møbelsnedker er mit drømmejob. Simpelthen!” fortæller han. ”På den måde kan jeg kombinere mine interesser for design og håndværk.”

Men der skulle gå nogle år, inden han for alvor fik mulighed for at arbejde med sit fag. ”Da jeg var færdiguddannet, fik jeg et job på et værksted nede i Støvring, men det levede ikke rigtig op til mine forventninger.” Anders havde venlige kolleger, en udmærket chef og en rimelig løn. Det var mere opgaverne, der var nogle andre, end han havde håbet. ”Efterhånden er der ikke særlig mange, der bestiller håndlavede møbler, så for det meste lavede vi almindeligt tømrerarbejde. Vi skiftede tag på gamle ejendomme, satte køkkener op og den slags,” siger Anders. Derfor valgte han til sidst at starte sit eget snedkerværksted. ”I modsætning til de fleste andre værksteder, satser jeg ikke på nye møbler. I stedet køber jeg gamle unikke møbler på loppemarkeder og sætter dem i stand.”

Anders Bangs værksted går godt, og han har masser at lave. ”Der er virkelig salg i gamle istandsatte møbler, så det er efterhånden blevet en god forretning for mig, hvor jeg tjener godt.” Han fandt også hurtigt ud af, at det er rigtigt rart at være sin egen chef og selv kunne bestemme. ”Selvom det ikke var grunden til, at jeg startede min egen virksomhed, har jeg med tiden fundet ud af, at jeg har det rigtigt godt med selv at kunne bestemme, hvilke opgaver jeg vil løse, og hvornår jeg gør det.”

Susan Nielsen på 54 er også selvstændig, men hun er i en helt anden branche. ”I mange år var jeg ansat som jobkonsulent i kommunen. På mange måder var det et rigtig godt job, men jeg trængte til nogle nye udfordringer.” Sideløbende med sit arbejde havde hun taget en diplom-uddannelse som coach med speciale i konflikthåndtering, og den uddannelse ville hun gerne bruge. Efter knap femten gode år som jobkonsulent valgte hun nu livet som selvstændig, og det har hun bestemt ikke fortrudt. ”Det var ikke så svært at starte op, som mange frygter – jeg troede også selv, at det var lidt mere indviklet, end det faktisk er,” fortæller hun. ”Man skal egentlig bare have et CVR-nummer, som er en slags CPR-nummer for virksomheder, og så er man i gang.”

”Nu arbejder jeg så med at løse alle mulige slags konflikter, store som små,” siger hun. ”Det kan være mindre konflikter i en haveforening, men det kan også være større konflikter, fx problemer med kommunikationen i det offentlige,” siger Susan.

Selvom Susan havde taget en diplomuddannelse som coach og generelt forberedt sig godt til livet som selvstændig, så var der alligevel noget, der kom bag på hende. ”Da jeg fortalte på min gamle arbejdsplads, at jeg ville være selvstændig, mødte jeg en enorm støtte. Det havde jeg overhovedet ikke forventet. De ønskede mig alt mulig held og lykke med projektet, og det betød meget for mig. Jeg havde jo trods alt været glad for at være der og sprang nu ud i noget helt ukendt.”

Det viste sig, at der ikke er så mange coaches med speciale i konflikter. ”Der er mange coaches med speciale i stress, men konflikthåndtering er ikke lige så almindeligt. Og det var jo en fordel for mig, da jeg skulle etablere mig på markedet.”

Nu har både Anders og Susan været selvstændige i nogle år. Ingen af dem har fortrudt det, men havde de vidst, hvad de ved i dag, er der flere ting, de ville have gjort anderledes. ”Jeg vidste en hel masse om træ,” begynder Anders. ”Jeg vidste også noget om formgivning og design. Men jeg vidste altså ikke særlig meget om den administrative del af det at have sin egen virksomhed. Der er moms, skat, fradrag, regnskaber.” Derfor ville han i dag have taget et kursus i iværksætteri og være fortsat i sit gamle job, indtil han havde fået opbygget sin virksomhed. ”Det var hårdt i den første tid med alt det nye, jeg skulle finde ud af og den manglende faste indkomst. Både min familie og jeg var forberedt på, at jeg nok ville få meget at se til i den første tid, så de tog heldigvis det hele pænt.”

Susan følte sig egentlig godt klædt på til opgaven, men det skulle vise sig, at det kom til at gå lidt ud over familien at blive selvstændig. ”Det var virkelig meget mit eget projekt. Det var min tid, mine kunder, mine penge. Jeg er bange for, at mine halvstore døtre følte sig lidt oversete i den periode. Og min mand for den sags skyld. Jeg ville i dag helt sikkert have involveret min familie mere på forhånd.” Som ny selvstændig oplevede Susan, at hun var nødt til at prioritere arbejdet over alt andet i en periode, fordi hun skulle opbygge et netværk for overhovedet at få en indtægt. ”Jeg ville i dag ikke have sagt mit job op i kommunen, inden jeg havde opbygget et vist netværk og fået nogle opgaver.” Men det har alligevel været det hele værd for Susan, der har fået plads til familie og venner igen. ”Jeg kan kun anbefale andre, der som mig kan lide nye udfordringer og et selvstændigt arbejdsliv med ansvar, at springe ud i det og blive selvstændig.”`,
    questions: [
      { type: "mc", n: 1, q: "Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Anders Bang blev iværksætter?",
        options: ["Han ville gerne have mulighed for at tjene nogle flere penge.", "Han ville gerne arbejde med noget, han var uddannet til.", "Han ville gerne selv bestemme over sin arbejdsdag."], answer: 1 },
      { type: "mc", n: 2, q: "Hvad har især været overraskende for Susan Nielsen i forbindelse med at blive selvstændig?",
        options: ["At det var så relativt nemt at oprette sit eget firma.", "At hendes gamle kolleger bakkede hende så stærkt op.", "At hun egentlig ikke har så mange konkurrenter."], answer: 1 },
      { type: "mc", n: 3, q: "Hvad ville både Anders og Susan gøre anderledes i dag, hvis de skulle starte forfra som selvstændige?",
        options: ["De ville tage et kursus i, hvad man skal være opmærksom på som iværksætter, så man er godt forberedt.", "De ville involvere deres familier mere i starten, så de kunne bakke op om, at arbejdet havde førsteprioritet i en periode.", "De ville beholde deres tidligere arbejde i en overgangsperiode, indtil de havde fået tilstrækkeligt med kunder i deres egen virksomhed."], answer: 2 }
    ]
  };

  const ivaerksaetteri = {
    id: "pd3-22n-3", group: G, real: true,
    title: "Delprøve 2B – Iværksætteri",
    kind: "Læseforståelse 2 · indsæt de manglende tekstdele (A-G)",
    level: 3, minutes: 25,
    instruction: "Læs teksten Iværksætteri. I teksten er der fjernet fem tekstdele. Dette er angivet med tallene 1-5. Herunder findes de fem tekstdele samt to ekstra, der ikke passer i teksten. Tekstdelene er angivet A, B, C, D, E, F og G. Vælg bogstavet for den tekstdel, der passer ind i teksten det sted, der er markeret med tallet. Hvert bogstav må kun bruges én gang. Der gives 2 point for hvert korrekt svar.",
    text: `**Iværksætteri**

Der er lønmodtagere, der foretrækker et almindeligt arbejde fra ni til fem og med fast løn en gang om måneden. Og så er der dem, der gerne vil starte deres egen virksomhed. Frem for at arbejde 37 timer om ugen for en arbejdsgiver et sted, hvor man måske ikke har særlig meget indflydelse eller selvbestemmelse, vil de gerne være iværksættere.

[[1]]

Indtil virksomheden kører så godt, at man kan ansætte nogle medarbejdere, må man selv stå for det hele. Der er produkter, der skal udvikles, og produkterne skal præsenteres for et marked. Der skal laves regnskab, så man har helt styr på indtægter og udgifter. Og der er kun en selv til at besvare telefonopkald og e-mails. Derfor er det nok de færreste iværksættere, der kan nøjes med at arbejde 37 timer om ugen. Og hvor en almindelig lønmodtager har ret til mindst fem ugers ferie om året, der må en iværksætter selv spare op og sætte tid af. Hvis det overhovedet er muligt.

[[2]]

Der er ikke nogen, der definerer ens arbejdsopgaver, og der er ikke nogen, der bestemmer, hvor og hvornår man arbejder. Desuden får man rig mulighed for at være kreativ. Det produkt, man sælger, kan man udforme fuldstændig, som man vil. Man behøver ikke at gå på kompromis med noget. Endelig får man mulighed for at beskæftige sig med lige præcis det, man har lyst til. For mange iværksættere er det svært at skelne mellem arbejde og fritid, fordi de arbejder med netop det, de interesserer sig for. Det er et privilegium, som ikke alle lønmodtagere har.

Og iværksætterne er vigtigere, end man lige skulle tro. Nogle mennesker tror, at det er firmaer som fx Mærsk og Novo Nordisk, der er de absolut vigtigste i dansk erhvervsliv, dels fordi de beskæftiger mange mennesker, dels fordi de bidrager med mange penge til statskassen.

[[3]]

Der er ikke nogen tvivl om, at de udgør en meget vigtig del af dansk økonomi. De er med til at skabe vækst, og de hjælper med at finansiere det dyre danske velfærdssamfund, som langt de fleste danskere gerne vil beholde. Derfor er det en god idé at være mere opmærksom på de unge iværksættere. Det mener i hvert fald Dansk Erhverv. Dansk Erhverv er en magtfuld interesseorganisation, der på forskellige måder arbejder for at gøre det lettere at drive virksomhed i Danmark.

[[4]]

I rapporten Verdens Bedste Iværksætterland fra 2021 giver de en lang række gode råd om, hvad der skal til for at gøre det lettere at drive virksomhed i Danmark. Fælles for alle disse råd er, at de er meget konkrete. Fx anbefaler de, at børn og unge undervises i iværksætteri i skolen. De fleste har en idé om, hvordan det er at være lønmodtager, når de forlader skolen. Desværre er der ikke lige så mange, der ved, hvordan man bliver selvstændig og får sin egen forretning op at køre. Det er på mange måder noget helt andet. Der har bare ikke været samme tradition for at undervise i det. Et andet råd handler om, hvordan en ny iværksætter kan rejse penge til at starte sin egen virksomhed. I dag er det sådan, at bankerne er tvunget til at stille en masse krav til en iværksætter, før de vil låne vedkommende penge. Man skal blandt andet kunne fremvise regnskaber for flere år og dokumentere, at man kan tjene penge. Desuden skal man stille økonomisk sikkerhed, fx med en ejerbolig. De krav er der mange iværksættere, der ikke kan leve op til. Og kan de ikke det, så kan de ikke låne penge. Dansk Erhverv mener, at bankerne skal have lov til at løbe en større risiko, hvis de har stor tillid til en ny iværksætter. Men det er desværre ikke tilladt, sådan som lovgivningen ser ud i dag. Et tredje råd handler om, hvordan man kan skaffe flere kunder til nye virksomheder. Uden kunder, ingen virksomhed. Dansk Erhverv foreslår, at den offentlige sektor skal handle mere hos de små og mellemstore virksomheder.

[[5]]

Og det vil helt sikkert skaffe flere kunder til de unge, håbefulde iværksættere.`,
    questions: [{
      type: "gaps",
      bank: [
        { key: "A", text: "Det er ganske enkelt svært at finde kvalificeret arbejdskraft. 25 % af de adspurgte har svaret, at det er den primære årsag til, at virksomheden ikke er vokset mere, end den er." },
        { key: "B", text: "Men det, der kunne lyde som en masse ulemper, er der imidlertid andre, der ser positivt på. For det, at man er alene om sin virksomhed, betyder også, at man er sin egen chef." },
        { key: "C", text: "Faktisk mener de, at både staten, regionerne og kommunerne i 2025 skal lægge 60 % af alle deres indkøb i små og mellemstore virksomheder. Det er væsentlig mere end i dag." },
        { key: "D", text: "Enkelte har nok urealistiske drømme om hurtig succes og hurtige penge, men de fleste ved godt, at det at starte sit eget først og fremmest er hårdt arbejde." },
        { key: "E", text: "Er der penge nok på kontoen? Er der en, der kan tage over, hvis den enkelte iværksætter er på ferie eller er sygemeldt? Der er nok at overveje, før man går i gang." },
        { key: "F", text: "Det betyder blandt andet, at de forsøger at påvirke politikerne, så den lovgivning, der bliver vedtaget, er en fordel for det private erhvervsliv." },
        { key: "G", text: "Man må dog ikke overse de små og mellemstore virksomheder. De har samlet set over 800.000 fuldtidsansatte, hvilket svarer til næsten 40 % af alle fuldtidsansatte i Danmark." }
      ],
      answers: { 1: "D", 2: "B", 3: "G", 4: "F", 5: "C" }
    }]
  };

  const fritiden = {
    id: "pd3-22n-4", group: G, real: true,
    title: "Delprøve 3 – Danskerne er aktive i fritiden",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Danskerne er aktive i fritiden. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Danskerne er aktive i fritiden**

Vores forhold til fritidsaktiviteter og deres betydning for vores identitet og selvopfattelse har ændret sig gennem tiderne. [[0]] dyrker vi i dag fritiden på en helt anden måde end tidligere.

Undersøgelser viser, at danskerne i gennemsnit har seks timers fritid om dagen, hvor de ikke er på arbejde, køber ind eller gør rent. Ca. fem af disse timer går med det, der kaldes de passive fritidsaktiviteter. Det kan [[1]] være aktiviteter som at hygge med familien, se fjernsyn eller læse. De aktive fritidsaktiviteter som hobbyer og motion bruges der i gennemsnit en time på pr. dag.

Nogle bruger både meget energi og mange penge på den aktive fritid. Det gælder også dem, der er meget ambitiøse på jobbet. Der er for eksempel en del travle topchefer, som træner til maratonløb eller ironman, og som bruger mere tid på den aktive fritid end gennemsnittet, selvom man kunne tro, at de på grund af deres meget lange arbejdsdag i højere grad end andre [[2]] at slappe af.

Men dette er netop ikke tilfældet. For uanset job [[3]] de fleste, at de ved at være fysisk aktive faktisk får mere energi og overskud i hverdagen. Det lader derfor til at give god mening at være aktiv i sin fritid, da det giver energi til andet end blot at flade ud på sofaen efter arbejde. Hvis man er aktiv sammen med andre, kan det også have en positiv effekt på humøret, fordi vi som mennesker er afhængige af at have sociale relationer og indgå i fællesskaber med andre for at have det godt [[4]].

Når mange prioriterer at dyrke den aktive fritid ret intensivt, kan det være [[5]], at vores hobbyer i dag spiller en vigtigere rolle for os end tidligere. Det mener Henrik Byager, der er livsstilsekspert:

”De er en del af vores identitet, livshistorie og den måde, vi opfatter os selv på. Så når vi dyrker en hobby, skal det gøres ordentligt,”¹ siger han.

Lykke L. Pedersen er forsker på Nationalmuseet, og hun er enig i, at fritiden spiller en ny rolle. Hun mener, at vi i stigende grad ’professionaliserer’ fritiden ved at tage elementer fra arbejdslivets præstationskultur med over i fritiden:

”I dag er vores hverdag fyldt med krav om, at vi skal præstere. Vi skal ikke længere bare løbe, det skal være på den helt rigtige måde,”² siger hun.

At hobbyer i dag i høj grad er med til at definere, hvem vi er, er [[6]] tidligere tiders opfattelse af fritidsaktiviteter, hvor hobbyer ikke havde andet formål end at være sjove og afslappende aktiviteter efter arbejdstid og i weekenden.

Måske er professionaliseringen af fritiden også grunden til, at vi oftere [[7]] vores fritidsinteresser i dag. Det er nemlig sådan, at man tidligere ofte havde det samme job og den samme hobby hele livet. I dag går man i højere grad videre til det næste, når noget nyt dukker op. [[8]] er vi generelt mere åbne overfor at prøve noget nyt, end vi var tidligere.

¹ Lokalavisen, 3. juni 2018: Vi er europamestre i at dyrke hobbyer. Hentet 10. januar 2021.
² Kristeligt Dagblad, 6. maj 2019: Vores fritidsinteresser er gået fra uforpligtende tidsfordriv til præstationsræs. Hentet 10. januar 2021.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["eksempelvis", "desuden", "heldigvis", "alligevel"],
        2: ["har tid til", "har mulighed for", "har behov for", "har evner til"],
        3: ["beklager", "oplever", "afviser", "fortryder"],
        4: ["kulturelt set", "fysisk set", "mentalt set", "arbejdsmæssigt set"],
        5: ["en kontrast til", "en modstand mod", "en advarsel om", "en konsekvens af"],
        6: ["i overensstemmelse med", "typisk for", "forskelligt fra", "karakteristisk for"],
        7: ["omtaler", "udskifter", "idylliserer", "klager over"],
        8: ["På den anden side", "Omvendt", "Derudover", "Med andre ord"]
      },
      example: { 0: "Til gengæld" },
      answers: { 1: "eksempelvis", 2: "har behov for", 3: "oplever", 4: "mentalt set", 5: "en konsekvens af", 6: "forskelligt fra", 7: "udskifter", 8: ["Med andre ord", "Derudover"] }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(vikinger, selvstaendig, ivaerksaetteri, fritiden);
})();

// Prøve i Dansk 3, november-december 2022 – skriftlig fremstilling and mundtlig kommunikation (delprøve 2).
// Transcribed from the exam papers: skriftlig fremstilling (produktionsnr. 18), the picture sheets for
// mundtlig kommunikation (illustrations by Niels Roland, cropped into images/pd3-2022n/) and the
// censor- og eksaminatorhæfte for the oral exam (produktionsnr. 21), which gives the examiner's
// introduction, the obligatory questions and the suggested follow-up questions (this booklet has no
// "Forslag til indledning" per situation, so q is the obligatory question alone, word for word –
// including the booklet's spelling "gymnasielever" in emne A, spørgsmål B).
// Task wording, the friend's e-mail, the questions and the chart labels are copied from the papers.
// The chart values are read off the bar chart (ca.-values, measured on a 300 dpi scan). All model answers
// are our own (the papers have none).

(function () {
  const X = PD2.EXAMS.pd3;
  const SESSION = "November-december 2022";

  // ---------- Skriftlig fremstilling november-december 2022 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-22n-w1", delprove: 1, real: true, year: 2022, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (nov.-dec. 2022)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din gode ven Claus, der for nylig har fået et nyt job. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Tak for sidst. Jeg håber, du havde en god ferie. «Hvordan var det så at vandre i bjergene?» " +
        "Jeg er rigtig glad for mit nye job. Jeg har dog det problem, at der er meget larm på kontoret, hvor jeg arbejder. Vi sidder over 20 personer i samme rum, og især to af mine kolleger snakker meget sammen. Jeg overvejer at sige til dem, at det forstyrrer mig. «Synes du, jeg skal gøre det?» " +
        "Mange af mine nye kolleger bliver tit en time eller to efter arbejde om fredagen og drikker en øl eller sodavand. Jeg vil egentlig helst bare hjem og holde weekend. «Tror du, det er vigtigt, at jeg alligevel bliver?» " +
        "Vi skal jo snart til Steens 30-års fødselsdag og har aftalt at give en gave sammen. «Men hvad skal vi egentlig give ham?» …\" " +
        "Opgave: Skriv et svar.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Tak for sidst. Jeg håber, du havde en god ferie. Hvordan var det så at vandre i bjergene?\n\n" +
        "Jeg er rigtig glad for mit nye job. Jeg har dog det problem, at der er meget larm på kontoret, hvor jeg arbejder. Vi sidder over 20 personer i samme rum, og især to af mine kolleger snakker meget sammen. Jeg overvejer at sige til dem, at det forstyrrer mig. Synes du, jeg skal gøre det?\n\n" +
        "Mange af mine nye kolleger bliver tit en time eller to efter arbejde om fredagen og drikker en øl eller sodavand. Jeg vil egentlig helst bare hjem og holde weekend. Tror du, det er vigtigt, at jeg alligevel bliver?\n\n" +
        "Vi skal jo snart til Steens 30-års fødselsdag og har aftalt at give en gave sammen. Men hvad skal vi egentlig give ham? …",
      underlined: [
        "Hvordan var det så at vandre i bjergene?",
        "Synes du, jeg skal gøre det?",
        "Tror du, det er vigtigt, at jeg alligevel bliver?",
        "Men hvad skal vi egentlig give ham?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvordan var det så at vandre i bjergene?",
        "Understreget: Synes du, jeg skal gøre det?",
        "Understreget: Tror du, det er vigtigt, at jeg alligevel bliver?",
        "Understreget: Men hvad skal vi egentlig give ham?",
        "Foreslå, at I mødes, så du kan høre mere om Claus’ nye job."
      ],
      phrases: ["Tak for din mail.", "Du spørger, hvordan det var at …", "Jeg synes, du skal …", "Hvad angår fredagsbaren, …", "Hvis jeg var dig, ville jeg …", "Med hensyn til gaven …", "Skal vi ikke mødes og …?", "Mange hilsner"],
      model: `Hej Claus

Tak for din mail. Det var dejligt at høre fra dig, og tillykke igen med det nye job.

Ferien var fantastisk. Vi vandrede i bjergene i Norge i en uge, og selvom det var hårdt at gå op ad de stejle stier, var udsigten det hele værd.

Jeg forstår godt, at larmen forstyrrer dig. Jeg synes, du skal sige det til dine kolleger, men på en venlig måde. Du kan jo spørge, om de vil snakke lidt lavere eller gå ud i køkkenet, når de snakker om andet end arbejde.

Hvad angår fredagsbaren, synes jeg faktisk, det er en god idé at blive en gang imellem, i hvert fald i starten. Så lærer du dine nye kolleger bedre at kende. Men du behøver ikke at blive hver fredag.

Med hensyn til gaven tænkte jeg, at vi kunne give Steen en oplevelse, fx billetter til en koncert. Han elsker jo musik.

Skal vi ikke mødes til en kop kaffe i næste uge? Så kan du fortælle mig mere om dit nye job.

Mange hilsner
Sara`
    },
    {
      id: "pd3-22n-w2a", delprove: 2, real: true, year: 2022, session: SESSION,
      title: "2A: Udenlandsk arbejdskraft i Danmark (nov.-dec. 2022)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Udenlandsk arbejdskraft i Danmark. " +
        "Diagram: Antal udenlandske statsborgere med lønindkomst i Danmark (søjler: Antal personer). " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): 2012 ca. 250.000 · 2013 ca. 265.000 · 2014 ca. 285.000 · 2015 ca. 310.000 · " +
        "2016 ca. 340.000 · 2017 ca. 360.000 · 2018 ca. 385.000 · 2019 ca. 400.000 · 2020 knap 400.000 (en anelse lavere end 2019). " +
        "Kilde: www.jobindsats.dk. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2022n/udenlandsk-arbejdskraft-diagram.png",
      imageAlt: "Søjlediagram: Antal udenlandske statsborgere med lønindkomst i Danmark 2012-2020. Tallet stiger hvert år fra ca. 250.000 i 2012 til ca. 400.000 i 2019 og ligger på knap 400.000 i 2020.",
      chart: {
        title: "Antal udenlandske statsborgere med lønindkomst i Danmark",
        unit: "personer", approx: true,
        source: "www.jobindsats.dk",
        bars: [
          { label: "2012", value: 250000 },
          { label: "2013", value: 265000 },
          { label: "2014", value: 285000 },
          { label: "2015", value: 310000 },
          { label: "2016", value: 340000 },
          { label: "2017", value: 360000 },
          { label: "2018", value: 385000 },
          { label: "2019", value: 400000 },
          { label: "2020", value: 397000 }
        ]
      },
      points: [
        "Beskriv kort, hvad diagrammet viser.",
        "Fortæl, hvilke årsager der kan være til den udvikling, diagrammet viser?",
        "Vurdér, hvad udenlandsk arbejdskraft vil betyde for det danske samfund i fremtiden. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor mange …", "Antallet er steget fra ca. … til ca. …", "Fra 2019 til 2020 …", "En årsag kan være, at …", "For det første … For det andet …", "Efter min mening vil …", "Der er dog også udfordringer.", "Samlet set mener jeg, at …"],
      model: `Udenlandsk arbejdskraft – en nødvendighed for Danmark

Diagrammet viser, hvor mange udenlandske statsborgere der havde lønindkomst i Danmark fra 2012 til 2020. Antallet steg hvert år fra ca. 250.000 personer i 2012 til ca. 400.000 i 2019. Det svarer til en stigning på ca. 60 %. Fra 2019 til 2020 er tallet stort set uændret.

Der kan være flere årsager til udviklingen. For det første gik det godt for dansk økonomi i årene efter finanskrisen, og virksomhederne manglede arbejdskraft, fx inden for byggeri, landbrug og it. For det andet er det let for borgere fra andre EU-lande at arbejde i Danmark, og lønnen er højere her end i mange østeuropæiske lande. At stigningen stopper i 2020, skyldes sandsynligvis coronapandemien, hvor grænserne blev lukket, og mange mistede deres job.

Efter min mening vil udenlandsk arbejdskraft blive endnu vigtigere for det danske samfund i fremtiden. Danskerne bliver ældre, og der bliver færre i den arbejdsdygtige alder. Hvis vi ikke får hjælp udefra, vil der mangle medarbejdere på plejehjem, hospitaler og byggepladser. Udenlandske medarbejdere betaler desuden skat og er med til at finansiere velfærdssamfundet.

Der er dog også udfordringer. Nogle arbejdsgivere udnytter udenlandske medarbejdere og giver dem lavere løn og dårligere vilkår end danskerne. Den slags social dumping skal bekæmpes, så den ikke presser lønningerne ned for alle. Derudover er det vigtigt, at de udenlandske medarbejdere lærer dansk og bliver en del af fællesskabet, hvis de bliver her i mange år. Ellers risikerer vi, at de lever isoleret fra resten af samfundet.

Samlet set mener jeg, at udenlandsk arbejdskraft er en fordel for Danmark, men det kræver, at vi tager godt imod de nye medarbejdere og sikrer ordentlige forhold for alle.`
    },
    {
      id: "pd3-22n-w2b", delprove: 2, real: true, year: 2022, session: SESSION,
      title: "2B: Trivsel på arbejdspladsen (nov.-dec. 2022)",
      kind: "Prøveopgave · faktorer og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Trivsel på arbejdspladsen. " +
        "Der er forskellige faktorer, der kan påvirke trivslen enten positivt eller negativt på en arbejdsplads. " +
        "Her er nogle eksempler: " +
        "• Mulighed for at arbejde hjemmefra • Mulighed for at gøre karriere • Mulighed for at få bonus • Ledelsesstil • Omorganisering i virksomheden • Sikkerhed i ansættelsen. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Mulighed for at arbejde hjemmefra", "Mulighed for at gøre karriere", "Mulighed for at få bonus", "Ledelsesstil", "Omorganisering i virksomheden", "Sikkerhed i ansættelsen"],
      points: [
        "Fortæl kort om et arbejde, som du, eller én du kender, har været glad for.",
        "Kommenter én eller to af faktorerne fra listen.",
        "Vurdér, om gode kolleger eller udfordrende arbejdsopgaver er vigtigst for, om man trives på en arbejdsplads. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Jeg vil fortælle om …", "Han/hun var glad for jobbet, fordi …", "Ledelsesstil har stor betydning for …", "Muligheden for at … kan også …", "Jeg mener, at … er vigtigst.", "På den anden side …", "Det viser tydeligt, at …", "Alt i alt mener jeg, at …"],
      model: `Gode kolleger gør hverdagen lettere

Min mand arbejdede i flere år som lagerarbejder i en mellemstor virksomhed i Odense, og det var et job, han var rigtig glad for. Arbejdet var fysisk hårdt, men han havde søde kolleger, og chefen lyttede altid til medarbejdernes forslag. Hver fredag spiste de morgenmad sammen, og han fortæller stadig om, hvor godt sammenholdet var.

Ledelsesstil har efter min mening stor betydning for trivslen. En leder, der stoler på sine medarbejdere og giver dem ansvar, får glade og motiverede medarbejdere. Omvendt kan en chef, der vil kontrollere alt, skabe stress og dårlig stemning. Muligheden for at arbejde hjemmefra kan også øge trivslen, fordi det bliver lettere at få arbejde og familieliv til at hænge sammen. Men hvis man arbejder hjemme for meget, kan man føle sig ensom.

Er gode kolleger eller udfordrende arbejdsopgaver vigtigst for trivslen? Jeg mener, at gode kolleger er vigtigst. Vi tilbringer mange timer på arbejdet hver uge, og hvis man ikke har det godt med de mennesker, man arbejder sammen med, hjælper det ikke, at opgaverne er spændende. Gode kolleger hjælper hinanden, når der er travlt, og de gør det sjovere at gå på arbejde, også når opgaverne er kedelige. Det viser min mands historie tydeligt.

På den anden side kan man også miste motivationen, hvis man laver det samme hver dag i mange år. Udfordrende opgaver giver mulighed for at lære nyt og udvikle sig, og det er især vigtigt for unge medarbejdere, der gerne vil gøre karriere. Hvis de keder sig, begynder de måske at søge andre job.

Alt i alt mener jeg, at begge dele er vigtige, men at de gode kolleger vejer tungest. Udfordrende opgaver kan man ofte selv være med til at skabe, men et godt arbejdsmiljø kræver, at alle bidrager.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål november-december 2022 ----------
  // q = the booklet's obligatory question (word for word); follow = the suggested follow-up question(s).
  // The picture sheet's own captions are the captions.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, november-december 2022)";
  const intro = emne => `Her er der to billeder, som viser nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-22n-o-a", title: "At gå i gymnasiet", session: SESSION, year: 2022, real: true, credit,
      intro: intro("At gå i gymnasiet"),
      pictures: [
        { file: "images/pd3-2022n/at-gaa-i-gymnasiet-1.jpg", caption: "Topkarakterer i gymnasiet", credit,
          alt: "En gymnasieelev sidder sent om aftenen ved sit skrivebord og skriver en fysikrapport, mens hun tænker på, at hun fik 12 for sin spanskaflevering.",
          words: ["en topkarakter", "en aflevering", "en rapport", "at præstere", "et præstationspres"] },
        { file: "images/pd3-2022n/at-gaa-i-gymnasiet-2.jpg", caption: "Fritidsjob i gymnasiet", credit,
          alt: "Til venstre gaber en træt elev i timen, mens klassekammeraterne arbejder i grupper; til højre arbejder den samme unge mand ved kassen i et supermarked.",
          words: ["et fritidsjob", "en kassemedarbejder", "et supermarked", "at være træt", "at tjene penge"] }
      ],
      first: {
        A: {
          q: "Nogle gymnasieelever er kun tilfredse med sig selv, hvis de får topkarakterer i alle fag. Hvorfor tror du, det er sådan?",
          follow: "Kan der være nogen problemer ved, at man kun er tilfreds med sig selv, hvis man får topkarakterer i alle fag? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det især skyldes, at mange unge føler et stort pres. Hvis man vil ind på en populær uddannelse som medicin eller psykologi, skal man have et meget højt karaktergennemsnit. Desuden sammenligner de unge sig hele tiden med hinanden, også på de sociale medier, hvor alle kun viser deres succeser. Nogle forældre forventer også meget af deres børn. Til sidst bliver karaktererne en måde at måle sit eget værd på, og så føles et syvtal pludselig som en fiasko.",
          followAnswer: "Ja, det kan der bestemt. Hvis man kun er tilfreds med topkarakterer, bliver man aldrig rigtig glad, for ingen kan få 12 i alt hele tiden. Mange perfektionistiske elever får stress, sover for lidt og mister lysten til at lære, ligesom pigen på billedet, der sidder og arbejder midt om natten. Desuden kan de miste deres sociale liv, fordi de ikke har tid til venner og fritidsinteresser. Det er vigtigt at lære, at det er i orden at lave fejl."
        },
        B: {
          q: "Nogle gymnasieelever vælger at have et fritidsjob, mens de går i gymnasiet. Hvorfor tror du, de vælger det?",
          follow: "Kan der være nogen problemer ved at have et fritidsjob, mens man går i gymnasiet? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, de fleste gør det for at tjene deres egne penge. Unge vil gerne købe tøj, gå i byen eller spare op til en rejse eller et kørekort, og de vil ikke altid spørge deres forældre. Et fritidsjob giver også erfaring og ansvar. Man lærer at møde til tiden og at tale med kunder, og det ser godt ud på et CV senere. Desuden kan man få nye venner på arbejdspladsen, for eksempel i et supermarked.",
          followAnswer: "Ja, det kan der godt, hvis man arbejder for mange timer. Så bliver man træt og har svært ved at koncentrere sig i skolen, ligesom drengen på billedet, der gaber i timen. Lektierne bliver måske ikke lavet, og karaktererne kan falde. Men hvis man kun arbejder nogle få timer om ugen, synes jeg, det er en god idé. Det handler om at finde en god balance mellem skole, arbejde og fritid."
        }
      },
      second: {
        q: "Der er flere unge, der tager en gymnasieuddannelse, end unge, der tager en erhvervsuddannelse som fx elektriker, tømrer eller murer. Hvilke fordele og ulemper mener du, der kan være ved det for det danske samfund?",
        follow: "Hvorfor tror du, mange foretrækker en gymnasieuddannelse, selvom der mangler folk med en erhvervsuddannelse i Danmark?",
        answer: "En fordel er, at mange unge får en bred almen uddannelse, og at flere kan læse videre til fx ingeniør, lærer eller læge. Det er vigtigt i et land, der lever af viden. En stor ulempe er dog, at der mangler faglærte. Det kan være svært at få fat i en elektriker eller en tømrer, og byggerier bliver forsinkede og dyrere. Desuden ender nogle studenter med en uddannelse, som der ikke er brug for på arbejdsmarkedet.",
        followAnswer: "Jeg tror, det handler om status. Mange forældre og unge synes, at gymnasiet er finere end en erhvervsuddannelse, og at man får flere muligheder bagefter. Når man er femten år, ved man ofte ikke, hvad man vil, og så udskyder man valget ved at gå i gymnasiet. Desuden har gymnasiet et stærkt socialt liv med fester og fællesskab. Erhvervsskolerne burde fortælle mere om, at faglærte kan tjene godt og endda starte deres eget firma."
      },
      conclusion: ""
    },
    {
      id: "pd3-22n-o-b", title: "Tilflytning til de større byer", session: SESSION, year: 2022, real: true, credit,
      intro: intro("Tilflytning til de større byer"),
      pictures: [
        { file: "images/pd3-2022n/tilflytning-til-de-stoerre-byer-1.jpg", caption: "At flytte til en større by som ung", credit,
          alt: "Til venstre sidder en ung pige med høretelefoner i en liggestol foran et hus og kigger på sin mobil; til højre går to unge kvinder gennem en livlig bygade med caféer, butikker og en erhvervsskole.",
          words: ["at flytte hjemmefra", "en provinsby", "en storby", "en uddannelse", "et byliv"] },
        { file: "images/pd3-2022n/tilflytning-til-de-stoerre-byer-2.jpg", caption: "At flytte fra hus til lejlighed som ældre", credit,
          alt: "Til venstre drikker et ældre par kaffe i haven foran deres hus på landet med køer på marken bag dem; til højre kommer de ud fra en biograf i en by med butikker, læger og et busstoppested.",
          words: ["et ældre par", "en landsby", "en lejlighed", "kort afstand til", "et busstoppested"] }
      ],
      first: {
        A: {
          q: "Mange unge fra mindre byer flytter til en af de større byer i Danmark, når de flytter hjemmefra. Hvorfor tror du, de gør det?",
          follow: "Mener du, der kan være nogen problemer ved, at mange unge fra mindre byer flytter til en af de større byer i Danmark, når de flytter hjemmefra? Hvorfor?/Hvorfor ikke?",
          answer: "Den vigtigste grund er nok uddannelse. De fleste universiteter og mange erhvervsskoler ligger i de store byer, så de unge er nødt til at flytte for at studere. Derudover er der flere jobmuligheder og et meget større kulturliv med caféer, koncerter og sport. I en lille by kender alle hinanden, og det kan føles kedeligt, når man er tyve år. I storbyen kan de unge møde mange nye mennesker og bestemme mere over deres eget liv.",
          followAnswer: "Ja, det mener jeg. For de små byer er det et problem, at de unge forsvinder, for så bliver befolkningen ældre, og der kommer færre børn i skolerne. Måske lukker skolen og butikkerne, og så bliver byen endnu mindre attraktiv. For de unge selv kan det være dyrt at bo i en storby, og det kan være svært at finde en bolig. Nogle føler sig også ensomme i begyndelsen, fordi familien og de gamle venner bor langt væk."
        },
        B: {
          q: "Der er nogen, der vælger at flytte fra en landsby til en større by, når de bliver ældre. Hvorfor tror du, de vælger det?",
          follow: "Hvad tror du, det betyder for ældres livskvalitet at bo i en større by i stedet for en landsby?",
          answer: "Jeg tror, mange ældre synes, at huset og haven bliver for store at passe, når børnene er flyttet hjemmefra, og kræfterne bliver mindre. I en lejlighed i byen er der mindre arbejde. Desuden er det praktisk at have kort afstand til læge, apotek og butikker, især hvis man ikke længere kan køre bil. I en landsby kører bussen måske kun et par gange om dagen. Nogle flytter også for at komme tættere på deres børn og børnebørn.",
          followAnswer: "Jeg tror, det kan betyde meget for livskvaliteten. I en større by kan ældre klare sig selv længere, fordi alt er tæt på. De kan gå i biografen, til foredrag eller på café, sådan som parret på billedet gør, og så bliver de ikke så ensomme. Til gengæld kan nogle savne naturen, roen og naboerne i landsbyen, som de måske har kendt i mange år. Det er ikke let at skabe et nyt netværk, når man er gammel."
        }
      },
      second: {
        q: "Generelt er der i Danmark en tendens til, at flere og flere flytter fra de mindre byer til de større byer. Hvilke fordele og ulemper mener du, der kan være ved det for de små lokalsamfund og for de større byer?",
        follow: "Mener du, det offentlige skal støtte små lokalsamfund, fx ved at sikre, at der er skoler og indkøbsmuligheder? Hvorfor?/Hvorfor ikke?",
        answer: "For de større byer er det en fordel, at der kommer flere indbyggere, som betaler skat og skaber liv i butikker og restauranter. Virksomhederne kan også lettere finde arbejdskraft. En ulempe er, at boligpriserne stiger, og at der bliver mere trafik og trængsel. For de små lokalsamfund er det mest en ulempe, fordi skoler, butikker og busruter lukker. Til gengæld bliver husene billige, og det kan tiltrække børnefamilier, der gerne vil have mere plads og ro.",
        followAnswer: "Ja, det mener jeg, i hvert fald til en vis grad. Alle borgere betaler skat, og derfor bør alle også have en skole og en butik inden for en rimelig afstand. Hvis skolen lukker, flytter børnefamilierne, og så dør landsbyen langsomt. Men det offentlige kan ikke holde liv i alle små byer for enhver pris. Derfor synes jeg, at man kan samle nogle tilbud, fx med en fælles skole for flere landsbyer og gode busforbindelser."
      },
      conclusion: ""
    },
    {
      id: "pd3-22n-o-c", title: "At skifte job", session: SESSION, year: 2022, real: true, credit,
      intro: intro("At skifte job"),
      pictures: [
        { file: "images/pd3-2022n/at-skifte-job-1.jpg", caption: "At skifte job som nyuddannet", credit,
          alt: "Til venstre sidder en ung mand ved sit skrivebord på et kontor og læser et papir; til højre er han til jobsamtale, hvor arbejdsgiveren har hans jobansøgning i hånden.",
          words: ["en nyuddannet", "en jobansøgning", "en jobsamtale", "en arbejdsgiver", "erfaring"] },
        { file: "images/pd3-2022n/at-skifte-job-2.jpg", caption: "At skifte til et nyt job på samme arbejdsplads", credit,
          alt: "Til venstre arbejder en kvinde som laborant i et laboratorium; til højre præsenterer hun som leder nye produktionsmål for sine kolleger på et møde.",
          words: ["et laboratorium", "en laborant", "en intern stilling", "en leder", "nye produktionsmål"] }
      ],
      first: {
        A: {
          q: "Nyuddannede skifter oftere job end folk med mange års erfaring. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for de nyuddannedes arbejdsliv, at de oftere skifter job?",
          answer: "Jeg tror, det er, fordi nyuddannede stadig er ved at finde ud af, hvad de godt kan lide. Det første job er ofte ikke drømmejobbet, men en måde at få erfaring på. Når de har fået et par års erfaring, kan de søge bedre stillinger med højere løn. Desuden har unge sjældent børn, hus og bil, så det er lettere for dem at flytte eller tage en risiko. Folk med mange års erfaring er mere etablerede og trygge der, hvor de er.",
          followAnswer: "Jeg tror, det betyder, at de lærer meget på kort tid. De prøver forskellige arbejdspladser og opgaver, og de får et stort netværk, som kan hjælpe dem senere. Ofte stiger lønnen også, fordi man kan forhandle, når man skifter job. Ulempen er, at de måske aldrig når at gå i dybden med opgaverne, og at det kan være stressende hele tiden at være ny. Nogle arbejdsgivere synes også, at et CV med mange korte job ser lidt ustabilt ud."
        },
        B: {
          q: "Der er nogen, der vælger at skifte til et nyt job på samme arbejdsplads. Hvorfor tror du, de vælger det?",
          follow: "Mener du, der kan være nogen problemer ved at skifte til et nyt job på samme arbejdsplads? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, mange gerne vil have nye udfordringer uden at miste de gode ting ved deres arbejdsplads. De kender allerede kollegerne, kulturen og systemerne, og det er trygt. Samtidig kan de udvikle sig og få mere ansvar og en højere løn, ligesom kvinden på billedet, der er gået fra at være laborant til at være leder. For virksomheden er det også en fordel, fordi den beholder en medarbejder, der kender firmaet godt.",
          followAnswer: "Ja, det kan der godt være. Hvis man bliver chef for sine tidligere kolleger, kan det være svært at skulle bestemme over dem, man før drak kaffe og sladrede med. Nogle kolleger bliver måske også misundelige, hvis de selv har søgt stillingen. Derudover kan det være svært at slippe sine gamle opgaver, fordi folk bliver ved med at spørge én om hjælp. Men hvis man er åben og tydelig om sin nye rolle, kan problemerne som regel løses."
        }
      },
      second: {
        q: "I Danmark er der generelt flere, der skifter job i løbet af deres arbejdsliv end i mange andre lande. Hvilke fordele og ulemper mener du, der kan være ved det for de danske virksomheder?",
        follow: "Tror du, det er vigtigere for en virksomhed at få nye medarbejdere med nye ideer end at beholde erfarne medarbejdere? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at virksomhederne hele tiden får nye medarbejdere med nye ideer og erfaringer fra andre arbejdspladser. Det kan gøre dem mere innovative. Det er også lettere at finde den rette person, når mange er villige til at skifte. En ulempe er, at det koster mange penge at rekruttere og oplære nye medarbejdere. Når en erfaren medarbejder stopper, forsvinder der også viden, og kunderne kan blive utilfredse, hvis de hele tiden skal tale med en ny person.",
        followAnswer: "Nej, det tror jeg ikke. Jeg mener, at en virksomhed har brug for begge dele. De erfarne medarbejdere kender produkterne, kunderne og de fejl, man har lavet før, og de kan oplære de nye. De nye medarbejdere kan til gengæld se tingene med friske øjne og stille spørgsmål til gamle vaner. Den bedste arbejdsplads er efter min mening en blanding af unge og ældre, hvor man lærer af hinanden."
      },
      conclusion: ""
    }
  );
})();
