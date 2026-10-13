// Prøve i Dansk 3, november-december 2018 (vinter 2018) – læseforståelse, skriftlig fremstilling and
// mundtlig kommunikation (delprøve 2), transcribed from the exam papers:
// Læseforståelse 1: opgavehæfte produktionsnr. 15 and teksthæfte "Højskoler i Danmark" nr. 14;
// Læseforståelse 2: teksthæfte nr. 16 and opgavehæfte nr. 17; skriftlig fremstilling nr. 18;
// picture sheets for mundtlig kommunikation nr. 20 (cropped into images/pd3-2018n/; the sheets do not
// name the illustrator, and the captions printed above the pictures are used as captions) and the
// censor- og eksaminatorhæfte for the oral exam (nr. 21).
// The reading answers are the official ones from the censor- og eksaminatorhæfte, skriftlig del
// (rettenøgler, nr. 19). No forcensur and no omregningstabel for vinter 2018 were available, so no
// forcensur corrections are included and there is no score table.
// Every item in this session has exactly one correct answer in the key (2A says "Sæt ét kryds";
// 2B has one letter per gap), so there are no multi-answer items.
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle (words in
// parentheses in the key are optional; a slash means "og"/"eller").
// Pictures and logos from the teksthæfte are left out (they are not needed for any answer).
// Læseforståelse 2 has delprøve 2A (7 × multiple choice, two texts) and 2B (8 × A-D gaps).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points.
// The app scores every question as 1, so 2A counts half as much here as at the exam.
// Printing errors corrected in the app: "ændret sig i igennem årtierne" → "ændret sig igennem årtierne"
// (teksthæfte, Folkehøjskolerne i dag), "højskolernes popularitet var på deres højeste" → "dens højeste"
// (Nye typer højskoler), "Det lykkede Lars" → "Det lykkedes Lars" (2A question 1, option A), "Testrup højskole"/"Testrup højskoles" → "Testrup Højskole"/"Testrup Højskoles"
// (the school's name, Testrup Højskole), "bort set fra at" → "bortset fra at" (2B, option 7B),
// "Afsluttende prøver i Folkeskolen" → "folkeskolen" (picture caption, emne C), the misplaced question mark in
// "… inden de begynder på en uddannelse? Hvorfor tror du, de vælger det?" → "uddannelse. Hvorfor …"
// (oral emne B, question B) and the missing comma in "når man afgør om unge" → "afgør, om" (oral emne C,
// follow-up to question B).
// The writing task wording, the friend's e-mail (underlined parts marked), the oral questions and the
// chart labels are copied from the papers; the chart values are read off the bar chart (ca.-values).
// All model answers are our own (the papers have none).

(function () {
  const G = "PD3 nov.-dec. 2018";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const hoejskoler = {
    id: "pd3-18n-1", group: G, real: true,
    title: "Delprøve 1 – Højskoler i Danmark",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i teksthæftet Højskoler i Danmark. Brug indholdsfortegnelsen. Svar præcist og så kort som muligt på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indholdsfortegnelse**

Højskolerne før og nu
   Hvad er en folkehøjskole? … side 3
   De første højskoler … side 3
   Højskolerne i moderne tid … side 4
Praktiske oplysninger om højskoleophold
   Generelt om højskoler … side 5
   Tilskud til højskoleophold … side 6
   Opholdsregler for udenlandske statsborgere i forbindelse med højskoleophold … side 7
Hvad oplever man på en højskole?
   Tre eksempler på danske højskoler … side 9
   Tidligere højskoleelever fortæller … side 11

**HØJSKOLERNE FØR OG NU**

**Hvad er en højskole?**

**Højskolernes identitet**
En folkehøjskole, ofte blot kaldet en højskole, er en kostskole, der giver mulighed for at fordybe sig i et fag og plads til personlig udvikling. Eleverne har undervisning, øver, læser, sover og spiser på højskolen i kursusforløb, der varer fra én uge til ti måneder. Den enkelte elev følger selvvalgt undervisning inden for fag som samfundsfag, humaniora, natur, kunst, idræt, musik m.m. – alt sammen sat ind i en bred kulturel og samfundsmæssig sammenhæng.

Højskolerne kalder det selv for "Menneskelig Talentudvikling". Det skal forstås som en udvikling og styrkelse af den almene dannelse og det aktive medborgerskab hos eleverne samtidig med en udvikling af den enkelte elevs eget talent – alt sammen hjulpet på vej af fællesskabet.

**Folkehøjskoler og andre højskoler**
Fælles for højskolerne er, at man skal være mindst 17½ år gammel for at starte (dog 16 år på ungdomshøjskoler), og at højskolerne normalt ikke tilbyder eksaminer. Det er for det meste unge mennesker, der søger ind på de længere kurser, og ældre og børnefamilier der søger ind på de kortere kurser. Prisen for kurser, der varer mere end 4 måneder, er i gennemsnit omkring 1.500 kr. om ugen inkl. kost og logi. De korte kurser ligger på omkring 4.500 kr. pr. uge. I prisen er der inkluderet et statstilskud.

Der er en lang række højskoler, som på trods af navnet ikke er folkehøjskoler. Det gælder fx handelshøjskoler, professionshøjskoler, Journalisthøjskolen og Tandlægehøjskolen, som alle er traditionelle uddannelsesinstitutioner, der tilbyder kompetencegivende eksaminer.

**De første højskoler**

**Grundtvig og folkehøjskolen**
Folkehøjskolerne var oprindeligt en dansk ide, der senere bredte sig til Norge, Sverige, Finland og til de danske immigranter i USA. Initiativet kom fra præsten N. F. S. Grundtvig, der betragtes som højskolernes far. Han ville styrke danskheden ved at uddanne folket og ønskede, at højskolen skulle være en ”skole for livet”, hvor alle danskere fra forskellige samfundsklasser kunne mødes og få deres uddannelse. Grundtvigs tanke var, at Danmarks historie, sprog, politiske system samt de danske sange skulle være det vigtigste i undervisningen. Udover disse centrale elementer skulle der også undervises i sproglige og matematiske emner, natur- og verdenshistorie.

**De to første højskoler**
Grundtvigs højskoletanker fik støtte fra den danske konge Christian den 8., og det blev derfor muligt at få den nødvendige tilladelse til at gennemføre projektet. Grundtvig havde oprindeligt tænkt, at den første højskole skulle ligge i Sorø på Midtsjælland, men sådan kom det ikke til at gå. I stedet blev den første højskole oprettet i Rødding i Sønderjylland med kongelig tilladelse d. 7. november 1844. Det var især sønner af storbønder og embedsmænd, som søgte til skolen. I 1851 åbnede Christen Kold, der var stærkt inspireret af Grundtvig, den anden danske folkehøjskole i Ryslinge på Fyn. Kold var den første til at afholde højskolekurser for kvinder, og det blev med tiden almindeligt for højskolerne at afholde kurser for mænd fra november til marts og kurser for kvinder fra maj til juli.

**Højskolernes første tid**
Kolds måde at administrere en skole på blev forbilledet for de mange folkehøjskoler, som blev oprettet efter Danmarks nederlag til Tyskland i krigen 1864. Krigen var indirekte skyld i, at mange nye højskoler blev grundlagt. Mange af de nye højskolers grundlæggere ønskede nemlig at hjælpe danskerne til at komme styrket ud af den tabte krig. Alene i året 1867 oprettedes 21 folkehøjskoler. Nogle af de mest fremtrædende folkehøjskoler var henholdsvis Askov i Sydjylland, Vallekilde på Nordvestsjælland og Testrup i Østjylland. Så godt som alle højskolefolk var på den tid inspirerede af Grundtvig, både i kirkelig og folkelig henseende. Det var hans tanker, der var grundlaget for måden, der blev undervist på.

**Højskolerne i moderne tid**

**Nye typer højskoler**
Samfundet udviklede sig, og det gjorde højskolerne også. I 1910 blev den første socialdemokratiske folkehøjskole oprettet i Esbjerg, og højskolens idé om folkeoplysning havde dermed bredt sig fra bønderne på landet til arbejderne i byerne. Siden da er der kommet mange flere højskoletyper til. I 1918 var der 63 statsgodkendte folkehøjskoler i Danmark, og i 1985, da højskolernes popularitet var på dens højeste, var der 107. Siden 1990’erne har højskolerne dog oplevet gradvist faldende popularitet, og i 2017 var antallet af danske folkehøjskoler nede på 68.

**Højskolesangbogen**
Den første højskolesangbog blev trykt i 1894, og sangbogen har lige siden været med til at præge højskoleopholdene. Eleverne benytter den til morgensang, og nogle steder indledes foredrag også med sang. Højskolesangbogen er delt op i en række temaer som fx Kærlighed, Sprog og Ånd og Frihed og Fællesskab.

Sangbogen bliver løbende opdateret med moderne sange og rummer i dag både klassiske kirkesalmer af Grundtvig og B.S. Ingemann og mere moderne popsange. Med tiden og i takt med globaliseringen er der udover danske og skandinaviske sange også blevet plads til både engelske og tyske sange.

Sangbogen har også fået stor udbredelse uden for højskoleverdenen og findes nu på de fleste skoler i Danmark og også i mange private hjem. Den er i dag Danmarks mest solgte sangbog og er udkommet i 18 forskellige udgaver.

**Folkehøjskolerne i dag**
Selvom højskolerne stadig ikke tilbyder eksaminer, og Grundtvig og Kolds idealer om den almene dannelse stadig fylder meget i højskoleverdenen, så har højskolerne bestemt også ændret sig igennem årtierne. Fx findes der i dag højskoler, der har specialiseret sig i sport og gymnastik, og andre der har særligt fokus på musik eller teater. Samtidig er der højskoler, der specialiserer sig i at tilbyde kurser, der direkte forbereder kursisterne på optagelsesprøver til videregående uddannelser på fx journalistuddannelsen eller politiskolen. Det kan synes lidt langt væk fra højskolernes oprindelige målsætninger om almen dannelse og styrkelse af danskheden, men som alt andet i livet har højskolerne også måttet følge med tiden. I dag eksisterer disse nye højskoleformer derfor side om side med højskoler, der stadig bekender sig til Grundtvigs tanker om at tilbyde folket en almen dannelse i dansk sprog, kultur og samfundsliv.

**PRAKTISKE OPLYSNINGER OM HØJSKOLEOPHOLD**

**Generelt om højskoler**

**Priser**
Højskolernes ugepris omfatter både undervisning, kost og logi. Så éns leveomkostninger behøver ikke at være ret høje, mens man er på højskole.

Mens man går på højskolen, har man derfor kun brug for lommepenge og penge til at dække evt. transport. Resten af éns behov sørger skolen for – og de allerfleste er rigtig godt tilfredse med forplejningen på de danske højskoler. Nedenfor kan man se en vejledende ugepris for et højskoleophold, men den enkelte højskole kan kontaktes for at få oplyst de præcise omkostninger ved det højskoleophold, man er interesseret i.

**Priser – lange kurser**
Det koster ca. 1.450 kr. om ugen at gå på højskole (dobbeltværelse). Prisen varierer fra skole til skole – fra ca. 1.000 kr. til 2.500 kr. om ugen – og kan være afhængig af fx fagudbud, materialer, studierejse m.m.

**Priser – korte kurser**
Det koster ca. 4.600 kr. at tage på et 1-uges kursus på en højskole, og ca. 6.500 kr. for 2-ugers kurser – men der kan være stor variation efter kursustype og årstid.

**Uddannelsesforberedelse**
En del højskoler tilbyder undervisning i fag, der forbereder til forskellige uddannelser.

Med fokus på et bestemt fagområde kan man ruste sig til at bestå optagelsesprøver eller kvalifikationskravene til forskellige uddannelser. Eksempler på dette er forberedelse til optagelsesprøven på Politiskolen, Danmarks Journalisthøjskole, kunstneriske og musiske uddannelser.

På nogle af de kunstneriske uddannelser består optagelsesprøven i, at ansøgeren præsenterer forskellige arbejder og skitser. Dette kan man forberede og blive bedre til gennem et højskoleophold.

**Det lærer man på en højskole**
At gå på højskole er at lære noget nyt hver dag. På en højskole er der ikke nogen skarp opdeling mellem undervisning og fritid. Man skal selv vælge, hvilke fag man vil have, og hvad man vil lære. Der er hverken et pensum eller karakterer, man skal leve op til. Alligevel vil man sikkert suge mere viden til sig, end man før har prøvet. Lærerne underviser i det, de brænder for og er derfor inspirerende og nærværende. De behandler eleverne som voksne mennesker og er også gode at tale med om studieretninger, eller om hvordan man kan bruge det, man er god til.

**Sådan bor du på en højskole**
De fleste synes, det er hyggeligt at bo på værelse sammen med en anden, men på næsten alle højskoler kan man også vælge at bo på sit eget værelse. Man skal ikke tænke på mad, den bliver lavet til eleverne hver dag og er med i prisen. Men man skal selv være med til at få højskolen til at fungere sammen med sine medstuderende. Man vil blive en del af et fællesskab, hvor man hjælper hinanden, respekterer hinanden og holder sammen.

**Korte og lange kurser**
Et langt ophold varer minimum 8 uger og helt op til 40 uger. På et langt ophold vælger man et par hovedfag og nogle sidefag. De lange kurser begynder som regel om foråret eller efteråret. De korte kurser varer typisk 1-2 uger og er normalt temabaserede. Der er ca. 1.500 forskellige korte kurser at vælge imellem året rundt. Mange vælger at tage af sted med venner eller familie, fordi det er en sjov og inspirerende måde at holde ferie på sammen.

**Tilskud til højskoleophold**

**Unge arbejdsløse**
Unge arbejdsløse kan søge om arbejdsløshedsdagpenge eller om uddannelsesgodtgørelse i forbindelse med et højskoleophold. Ledige under 25 år på dagpenge har mulighed for at komme på højskole med halve dagpenge inden for det første halve år af ledighedsperioden. Arbejdsløse på kontanthjælp kan søge om at komme på højskole som led i en handlingsplan eller aktiveringsplan.

Man skal henvende sig til en sagsbehandler i socialforvaltningen eller til beskæftigelsessekretariatet i sin kommune. Man skal stå til rådighed for arbejdsmarkedet, mens man er på højskole, og hjælpen skal være bevilget, inden man melder sig til en højskole.

**Tilskud til udlændinge**
Elever fra hele verden (undtaget danske statsborgere og elever fra Færøerne og Grønland) kan søge stipendium til et højskoleophold af mindst 8 ugers varighed. Hver højskole har fra staten fået tildelt en kvote, som den selv administrerer. Derfor skal udenlandske elever kontakte den højskole, de ønsker at gå på, for at høre om de giver stipendium.

**Erhvervsgrunduddannelse (egu) på højskole**
Unge under 30 år, der ikke umiddelbart kan gennemføre en ungdomsuddannelse, har mulighed for at tage på højskole som del af en erhvervsgrunduddannelse (egu).

Egu er en individuelt sammensat uddannelse af 2-3 års varighed. Uddannelsen består af praktikophold og mellem 20-40 ugers skoleophold. Forløbet bindes sammen af en uddannelsesplan, der udarbejdes af Ungdommens Uddannelsesvejledning (UU) eller bopælskommunens beskæftigelsessekretariat. Det er også muligt at få uddannelsesplanen udarbejdet på en erhvervsskole eller en produktionsskole. Alle kommuner har pligt til at tilbyde egu.

Et højskoleophold kan indgå som en del af egu-forløbets skoledel. Under opholdet følger eleverne højskolens almindelige undervisning. Eleverne modtager desuden vejledning om uddannelses- og erhvervsmuligheder. På nogle højskoler kan eleverne også komme i virksomhedsafklarende praktik samt følge undervisning på en erhvervsskole, mens de er på højskole. Eleverne modtager på baggrund af højskoleopholdet et gennemførelsesbevis, der beskriver mål og indhold for højskoleopholdet.

Under højskoleopholdet modtager eleven skoleydelse. Kommunerne har desuden mulighed for at dække udgifterne til egenbetaling. Udgifter i forbindelse med kost og logi betales normalt af eleven selv.

**Opholdsregler for udenlandske statsborgere ved højskoleophold**

**Regler for EU/EØS-borgere**
Normalt skal man som udlænding have opholdstilladelse for at gå på højskole i Danmark. Nordiske statsborgere er dog fritaget for dette.

Der gælder samme regler for udenlandske statsborgeres ophold i Danmark som højskoleelever som ved alt andet studierelateret ophold i landet.

For EU/EØS-borgere gælder, at man frit kan indrejse og opholde sig i landet i indtil 3 måneder. Varer opholdet ud over 3 måneder, skal man have et opholdsdokument, som man får ved at kontakte Statsforvaltningen. Med dette samt pas og nationalt identitetskort kan man i Borgerservice i højskolens kommune få tildelt CPR-nummer og et gult sygesikringskort. Dette kan man gøre, så snart man er kommet til landet.

En EU/EØS-borger skal kunne identificere sig og kunne bevise sit statsborgerskab.

**Regler for ikke-EU/EØS-borgere**
Statsborgere fra lande uden for EU/EØS, for hvem der gælder krav om ansøgning om opholdstilladelse, skal kunne dokumentere en række forhold, hvis de ønsker at gå på højskole i Danmark. For det første at man er optaget på en godkendt folkehøjskole og har betalt deltagergebyret. For det andet at man kan forsørge sig selv under opholdet. Man må nemlig ikke modtage offentlig hjælp til forsørgelse under opholdet i Danmark. Endelig skal man kunne dokumentere, at man kan tale enten dansk, svensk, norsk, engelsk eller tysk på et rimeligt niveau samt tale det sprog, som undervisningen gennemføres på.

**Elever med Working Holiday-visum**
Unge, der opholder sig i Danmark på et Working Holiday-visum, kan optages på en højskole uden at søge yderligere opholdstilladelse. Kursets start- og slutdato skal ligge inden for Working Holiday-visummets gyldighedsperiode. Danmark har Working Holiday-aftaler med følgende lande: Argentina, Australien, Canada, Chile, Japan, New Zealand og Sydkorea. Der kan gælde forskellige regler for statsborgere fra de forskellige lande.

**Opholdstilladelse og højskoleophold**
Som kursist på en folkehøjskole vil man som hovedregel få opholdstilladelse for kursets varighed. Man kan imidlertid søge om at få tilladelsen forlænget, dog højst til 18 måneder. De 18 måneder kan evt. bruges til flere kurser på forskellige højskoler, enten i umiddelbar forlængelse af hinanden eller til flere adskilte ophold.

Det er en forudsætning for opholdstilladelsen, at man er studieaktiv. Hvis man ikke er det, kan man miste opholdstilladelsen. Højskolen har pligt til at underrette Styrelsen for International Rekruttering og Integration, hvis en af deres udenlandske kursister ikke længere er studieaktiv.

Som kursist på en folkehøjskole har man ikke krav på at få sin familie med til Danmark. Der kan dog i særlige tilfælde gives opholdstilladelse til en ægtefælle, en samlever og hjemmeboende, mindreårige børn.

Hvis man har opholdstilladelse som kursist på en folkehøjskole, kan man ikke få en arbejdstilladelse. Man kan dog i nogle tilfælde få arbejdstilladelse, hvis særlige grunde taler for det, fx i forbindelse med et praktikophold.

Hvis man arbejder ulovligt uden at have en arbejdstilladelse, kan Styrelsen for International Rekruttering og Integration inddrage eller nægte at forlænge ens opholdstilladelse.

En opholdstilladelse skal som udgangspunkt være opnået inden indrejsen i Danmark. En ansøgning om opholdstilladelse indgives i ansøgerens hjemland, normalt ved en dansk repræsentation, dvs. en ambassade eller et generalkonsulat. I visse tilfælde kan en udlænding, som befinder sig i Danmark, dog indgive ansøgningen her i landet. Dette gælder f.eks. for en ansøger, der har lovligt ophold i Danmark på grundlag af en opholdstilladelse, et visum eller i medfør af EU-regler.

**Permanent opholdstilladelse**
Hvis man ønsker permanent opholdstilladelse i Danmark, kan et højskolekursus bidrage til at opnå 15 af de krævede 100 point.

**Gebyrer**
Der skal normalt betales et gebyr, for at man kan få sin sag behandlet i Styrelsen for International Rekruttering og Integration. Gebyret kan enten blive betalt af ansøgeren selv eller af en anden person, fx en person i Danmark. Gebyret er det samme som for øvrige studerende.

**Sagsbehandlingstid**
Det er vigtigt at søge om opholdstilladelse i god tid. Styrelsen for International Rekruttering og Integration har et udmeldt servicemål for behandlingen på 60 dage fra man i Styrelsen for International Rekruttering og Integration har modtaget alle nødvendige oplysninger. Men der er ingen garanti for, at behandlingen af ansøgningen ikke tager længere tid.

**HVAD OPLEVER MAN PÅ EN HØJSKOLE?**

**Tre eksempler på højskoler i Danmark**

**Testrup Højskole**

**Det frie akademi**
Testrup Højskole i Østjylland er en grundtvigiansk højskole med en historie, der går helt tilbage til 1866. Højskolen har taget tilnavnet ”Det frie akademi”. Med ’akademi’ vil skolen gerne signalere, at de tager fagene alvorligt og stræber efter faglig indsigt og fordybelse. ’Det frie’ skal til gengæld signalere, at der hverken er eksaminer eller nogen adgangsbegrænsning, så længe der er ledige pladser på de forskellige kurser. Det er et centralt princip for skolen, at det er den enkelte elevs egen motivation og begejstring, der skal være i fokus, da det er afgørende for et godt udbytte af undervisningen.

**En stærk elevforening**
Testrup Højskoles elevforening sørger for, at alle tidligere elever kan fastholde kontakten til Testrup – uanset hvor i verden de befinder sig. Samtidig muliggør elevforeningens hjemmeside kontakten til ens gamle højskolevenner. Elevforeningen udgiver Testrup Højskoles årsskrift og står for en række arrangementer året igennem: forårs- og efterårsweekenden, augustkurset og elevmødet.

Desuden har elevforeningen en fond, der kan støtte nye elever økonomisk under et højskoleophold.

Elevforeningens øverste myndighed er generalforsamlingen, som altid ligger lørdagen efter første søndag i august. Generalforsamlingen vælger elevforeningens bestyrelse, som står for foreningens arrangementer i løbet af året.

På www.testrupelev.dk har alle gamle elever mulighed for at følge elevforeningens arbejde. Det er også her, at tilmelding til diverse arrangementer i løbet af året finder sted.

**Oure Højskole**

**Professionel træneruddannelse**
På Oure Højskole på Fyn har man på sit højskoleophold mulighed for at deltage i en professionel træneruddannelse som fx fodboldtræner. Oure Fodboldtræner Akademi optager kun 12 trænertalenter om året, og for at komme ind skal man sende en motiveret ansøgning, hvor man fortæller om sin baggrund, erfaringer og ambitioner. Uddannelsen består af to moduler, der samlet varer et år. Ved årets afslutning er kursisterne klar til at tage Dansk Boldspil Unions B-eksamen som fodboldtræner. I løbet af modulerne er der selvfølgelig fokus på fodboldtræningen, men der er også mere almindelige højskolefag såsom husmøder, fællestimer og temafag.

**Dans, musik og teater**
Oure Højskole har også kurser indenfor dans, musik og teater. Teaterkurserne har varierende længde fra 4 uger og op til 25 uger, men uanset længde har kurserne tre fokusområder: improvisation, kropstræning og tekstarbejde. Højskolen har særlige, intensive kurser, der kan bruges som forberedelse til optagelsesprøverne på en af landets skuespillerskoler. Her er der målrettet træning i improvisation, monolog og dialogarbejde. Med særligt henblik på optagelsesprøven afholdes der også fiktive optagelsesprøver, så kursisterne kan lære prøveformen at kende. Udover de faste undervisere har højskolen også gæsteforelæsninger af professionelle film- og teaterskuespillere, som fx Thure Lindhart og Charlotte Munck.

**Suhrs Højskole**

**Specialiseret i mad**
Suhrs Højskole ligger midt i København og er i dag den eneste højskole med speciale i mad og madlavning. Selvom skolen først blev en højskole i 2011, så har den fungeret som husholdningsskole siden 1901. De fleste elever på skolen er mellem 20-25 år og interesserer sig for mad på mange forskellige planer og inden for forskellige områder, men skolen ønsker at rumme såvel specialisterne og ”madnørderne” som nybegynderne, der bare godt kan lide mad. Skolen har fokus på mange forskellige facetter af madlavningen som fx smagssammensætninger, sundhed, kommunikation, eventopbygning, gastronomi, oplevelser, æstetik og råvarer.

**Bæredygtighed**
En af skolens værdier er tanken om bæredygtighed. Det betyder blandt andet, at skolen aktivt forsøger at begrænse madspild ved at genanvende alle madrester, hvis det er muligt. Derudover er der fokus på økologi, på at minimere kødforbruget og på at bruge lokale fødevarer. Som noget helt særligt forsøger skolen også at være selvforsynende med så mange fødevarer som muligt. Det sker bl.a. ved at holde høns i gården, at have bier på taget og at dyrke så mange grøntsager og krydderurter, som der nu er plads til i vindueskarme og på tagterrasser.

**Tidligere højskoleelever fortæller**

**Asger**
Jeg var lidt i tvivl om, hvilket studie jeg skulle vælge. Jeg var godt klar over, at det skulle være noget med debat og diskussion, men om det skulle være samfundsfag, litteraturvidenskab, filosofi eller noget helt andet, det var jeg ikke så sikker på. Derfor tænkte jeg, at et halvt år på højskole måske kunne afklare mig lidt. Heldigvis blev jeg ikke skuffet! På højskolen mødte jeg fagligt dygtige lærere og et dejligt inkluderende miljø, men det, jeg var mest glad for, var faktisk, at de andre højskoleelever elskede at diskutere ligesom jeg selv. Mit højskoleophold var helt afgørende for, at jeg efterfølgende valgte at læse teologi, som heldigvis bare er det perfekte studie for mig.

**Marie**
Efter jeg blev færdig som jurist, arbejdede jeg et par år i forskellige midlertidige stillinger. Det var ret hårdt, og på et tidspunkt fik jeg simpelthen brug for en pause. Højskolen gav mig mulighed for at tænke på noget helt andet og dyrke mine interesser for musik og teater, som jeg næsten helt havde glemt. Det var en luksus, at jeg hver dag kunne stå op og glæde mig til endnu en spændende dag, helt uden at skulle bekymre mig om arbejde eller indkøb og madlavning. Opholdet på højskolen gjorde, at jeg kunne vende tilbage til hverdagen med ny energi, og det fik mig til at huske, at der er andet i livet end arbejde.

**Katrine**
Jeg har altid elsket sport, så en af mine venner overtalte mig til at prøve en højskole med fokus på sport og motion. Det var godt at bruge sin krop så meget hver dag! Jeg fik lejlighed til at prøve en masse nye sportsgrene, som fx golf og surfing, samtidig med at jeg kunne dyrke min store interesse for håndbold. Jeg har faktisk aldrig været så glad for at gå i skole. Det helt specielle ved højskolen var, at alt hvad jeg lavede, var noget jeg selv havde valgt. Det gjorde en kæmpe forskel! Også selvom der stadig var et skoleskema, jeg skulle følge, og lærere, der fortalte mig, hvad jeg skulle gøre. Det er bestemt ikke sidste gang, at jeg tager på højskole, og jeg kan varmt anbefale det til andre. Også selvom man ikke er så vild med at gå i skole.

**Sille**
Det har altid været min drøm at blive journalist, så straks efter gymnasiet søgte jeg ind på journalisthøjskolen. Da jeg ikke kom ind, blev jeg temmelig nedslået, men så læste jeg på nettet, at der var flere højskoler, der tilbød studieforberedende kurser til netop journalisthøjskolen. Først var jeg lidt bange for, at det bare ville være 3. g i gymnasiet om igen, men jeg blev virkelig overrasket. Det faglige niveau var nemlig rigtig højt. Det var selvfølgelig også en fantastisk oplevelse rent socialt, men det regnede jeg nu også med. Så udover at jeg endelig kom ind på journalisthøjskolen, kan jeg også takke højskolen for at have givet mig nye venner for livet.`,
    questions: [
      // Søg informationer under 'Praktiske oplysninger om højskoleophold'
      { type: "short", n: 1, q: "(Praktiske oplysninger om højskoleophold) EU/EØS-borgere skal medbringe et opholdsdokument og et pas for at få tildelt et CPR-nummer hos borgerservice i højskolens kommune. Hvad skal de også medbringe?",
        accept: uniq(combos(["", "de skal også medbringe", "de skal medbringe", "også", "et", "deres"], ["nationalt identitetskort", "identitetskort", "et nationalt identitetskort", "et identitetskort", "national identitetskort", "nationale identitetskort"])) },
      { type: "short", n: 2, q: "(Praktiske oplysninger om højskoleophold) Man kan som udlænding få opholdstilladelse til et højskoleophold. Hvad er forudsætningen for at beholde sin opholdstilladelse, mens man er på højskole?",
        accept: uniq(["studieaktiv"].concat(combos(["at man er", "man skal være", "at være", "at man skal være", "at de er", "de skal være", "man er", "det er at man er", "forudsætningen er at man er"], ["studieaktiv", "studieaktive"]), ["studieaktive"])) },
      { type: "short", n: 3, q: "(Praktiske oplysninger om højskoleophold) Hvis man som udlænding har fået opholdstilladelse som kursist på en højskole, kan man kun i særlige tilfælde få arbejdstilladelse. Hvilket eksempel på et særligt tilfælde nævnes i teksthæftet?",
        accept: uniq(["praktikophold"].concat(combos(["", "fx", "i forbindelse med", "fx i forbindelse med", "ved", "et eksempel er", "hvis man skal i"], ["", "et"], ["praktikophold", "praktik"]))) },
      { type: "short", n: 4, q: "(Praktiske oplysninger om højskoleophold) Hvis man er på højskole som en del af en erhvervsgrunduddannelse (egu), kan kommunen yde tilskud til opholdet. Hvem betaler normalt for kost og logi på højskolen?",
        accept: uniq(["eleven selv"].concat(combos(["", "det gør", "det betaler", "de betales af", "det betales af", "det betales normalt af", "de betales normalt af", "normalt"], ["eleven", "eleven selv", "én selv", "en selv", "man selv", "eleverne", "eleverne selv", "egu eleven", "egu eleven selv"]))) },
      { type: "short", n: 5, q: "(Praktiske oplysninger om højskoleophold) Udlændinge kan søge tilskud til et højskoleophold. Hvem skal de kontakte for at høre, om de kan få økonomisk støtte?",
        accept: uniq(["den højskole de ønsker at gå på"].concat(combos(["", "de skal kontakte", "kontakte", "de skal kontakte selve"], ["højskole", "højskolen", "den højskole", "den højskole de ønsker at gå på", "højskolen de ønsker at gå på", "den højskole de vil gå på", "den højskole de gerne vil gå på", "den højskole de søger ind på", "højskolen de vil gå på"]))) },
      { type: "short", n: 6, q: "(Praktiske oplysninger om højskoleophold) Der er både lange og korte kurser på en højskole. Hvilke kurser er normalt temabaserede?",
        accept: uniq(combos(["", "det er"], ["de korte kurser", "korte kurser", "de korte", "korte", "de korte kurser der varer 1 2 uger", "de korte kurser på 1 2 uger"])) },
      // Søg informationer under 'Hvad oplever man på en højskole?'
      { type: "short", n: 7, q: "(Hvad oplever man på en højskole?) Hvad var det ved de andre højskoleelever, som Asger var glad for?",
        accept: uniq(["de elskede at diskutere"].concat(combos(["", "at", "at de", "de", "at de andre højskoleelever", "de andre højskoleelever", "at de andre", "at de andre elever"], ["elskede at diskutere", "elsker at diskutere"], ["", "ligesom han selv", "ligesom ham", "ligesom jeg selv", "ligesom han", "ligesom ham selv"]))) },
      { type: "short", n: 8, q: "(Hvad oplever man på en højskole?) Hvad var det udover arbejde, som Marie var glad for, at hun ikke skulle bekymre sig om?",
        accept: uniq(["indkøb og madlavning"].concat(combos(["", "om", "hun skulle ikke bekymre sig om", "at hun ikke skulle bekymre sig om"], ["indkøb og madlavning", "indkøb", "madlavning", "madlavning og indkøb", "indkøb eller madlavning", "at handle ind og lave mad", "indkøb og at lave mad", "at handle ind", "at lave mad", "indkøb og mad", "indkøbet og madlavningen"]))) },
      { type: "short", n: 9, q: "(Hvad oplever man på en højskole?) Hvad nævner Katrine som noget helt særligt ved at gå på højskole?",
        accept: uniq(["alt hvad hun lavede var noget hun selv havde valgt"].concat(
          combos(["", "at"], ["alt hvad hun lavede var", "alt hun lavede var", "alt hvad jeg lavede var", "alt jeg lavede var", "alt det hun lavede var", "alt hvad man lavede var", "alt hvad hun lavede det var"], ["", "nemlig"], ["noget hun selv havde valgt", "noget jeg selv havde valgt", "noget man selv havde valgt", "noget hun selv valgte", "selvvalgt", "valgt af hende selv"]),
          combos(["", "at"], ["hun selv havde valgt alt hvad hun lavede", "hun selv valgte alt hvad hun lavede", "hun havde selv valgt alt hvad hun lavede", "hun selv havde valgt alt", "hun selv valgte alt", "man selv vælger alt hvad man laver", "man selv har valgt alt hvad man laver"]))) },
      { type: "short", n: 10, q: "(Hvad oplever man på en højskole?) På Oure Højskole er der intensive kurser, hvor kursisterne kan forberede sig til at gå til optagelsesprøve på en skuespillerskole. Hvad afholder højskolen, for at kursisterne kan lære denne prøveform at kende?",
        accept: uniq(["fiktive optagelsesprøver"].concat(combos(["", "de afholder", "der afholdes", "højskolen afholder", "den afholder", "skolen afholder"], ["fiktive optagelsesprøver", "optagelsesprøver", "fiktive optagelsesprøve", "fiktiv optagelsesprøve", "en fiktiv optagelsesprøve"]))) },
      { type: "short", n: 11, q: "(Hvad oplever man på en højskole?) Suhrs Højskole fokuserer meget på bæredygtighed. Hvordan forsøger skolen at begrænse madspild?",
        accept: uniq(["ved at genanvende madrester"].concat(combos(["", "ved at", "de", "skolen", "den", "ved at de", "ved at skolen", "skolen forsøger at"], ["genanvende", "genanvender", "genbruge", "genbruger"], ["madrester", "alle madrester", "madresterne", "alle madresterne", "maden", "resterne"], ["", "hvis det er muligt", "når det er muligt"]))) },
      // Søg informationer under 'Højskolerne før og nu'
      { type: "short", n: 12, q: "(Højskolerne før og nu) Der er andre højskoler end folkehøjskoler. Hvad tilbyder fx handelshøjskoler og professionshøjskoler, som folkehøjskolerne ikke tilbyder?",
        accept: uniq(["kompetencegivende eksaminer"].concat(combos(["", "de tilbyder", "de tilbyder kompetencegivende", "kompetencegivende", "de tilbyder også", "de tilbyder også kompetencegivende"], ["eksaminer", "eksamener", "eksamen", "eksamina"]))) },
      { type: "short", n: 13, q: "(Højskolerne før og nu) De to første højskoler blev startet af henholdsvis N.F.S. Grundtvig og Christen Kold. Hvad var Christen Kold den første til at afholde?",
        accept: uniq(["højskolekurser for kvinder"].concat(combos(["", "at afholde", "afholde", "han afholdt", "han var den første til at afholde", "han holdt"], ["højskolekurser for kvinder", "kurser for kvinder", "højskolekursus for kvinder", "kursus for kvinder", "højskole kurser for kvinder", "højskolekurser til kvinder", "kurser til kvinder"]))) },
      { type: "short", n: 14, q: "(Højskolerne før og nu) Med tiden er der kommet mange nye typer højskoler. Hvilket år var der flest højskoler i Danmark?",
        accept: ["1985", "i 1985", "året 1985", "i året 1985", "det var i 1985", "i år 1985", "år 1985", "det var 1985"] },
      { type: "short", n: 15, q: "(Højskolerne før og nu) Hvad var ifølge Grundtvig det vigtigste i undervisningen på folkehøjskolerne udover Danmarks historie, sprog og politiske system?",
        accept: uniq(["de danske sange"].concat(combos(["", "det var", "det var de", "de"], ["danske sange", "sange", "sangene", "de danske sange", "dansk sang", "den danske sang", "at synge danske sange"]))) }
    ]
  };

  const udflytning = {
    id: "pd3-18n-2", group: G, real: true,
    title: "Delprøve 2A – Udflytning af statslige arbejdspladser",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 45,
    instruction: "Læs teksterne Helle og Lars greb chancen og flyttede fra København til Nordjylland og Udflytning skaber forventning og bekymring. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1**

**Helle og Lars greb chancen og flyttede fra København til Nordjylland**

Døren mellem terrassen og stuen står åben, og hunden Kvik kommer stille ud til Helle og Lars Kjær, der sidder i haven. Lars klør hunden bag øret og ser tilfreds ud. Fra haven kan man se ud over markerne, og havet ligger kun ti km mod vest. Helle og Lars boede indtil for to år siden i København, men bor i dag i Hjørring, hvor Helles arbejdsplads, Statens Administration, nu ligger. Hun og 225 kolleger fik valget mellem at flytte med eller at finde et andet job. Hun valgte sammen med Lars at flytte med arbejdspladsen, men det var efter mange overvejelser:

”Vi havde tusinde tanker i hovedet. Det krævede mange samtaler, både med kolleger og venner, men selvfølgelig primært med hinanden. Det var jo et stort spring for hele familien at flytte. Vi skulle forlade vores kendte dagligdag og ville komme langt væk fra vores venner. Men vi ville dog komme lidt tættere på mine forældre i Hobro,” smiler Helle og fortsætter:

”Min nervøsitet handlede ikke kun om at miste kontakten med vennerne, men også om Lars og vores søn Niels. Lars ville blive nødt til at finde et nyt job, selvom han var glad for det gamle, og Niels skulle skifte vuggestue. Der var altså meget på spil. Til gengæld kunne vi få vores store ønske om en større bolig opfyldt, da huspriserne i Hjørring er meget lavere end i København, og det var faktisk det, der gjorde, at vi endte med at blive enige om, at det hele nok skulle gå godt, når vi sammen gjorde en indsats for at falde til det nye sted,” husker Helle Kjær.

Da beslutningen om at flytte var taget, begyndte Lars at søge nyt job i Nordjylland, og han fik heldigvis hurtigt et job på Hjørring Gymnasium. Parret begyndte også at kigge efter en bolig. Først tænkte de på at flytte til Aalborg i stedet for til Hjørring. Det ville have været dyrere for dem at købe hus i Aalborg og dyrere i transport, men byen har flere kulturtilbud og fritidstilbud for hele familien. De valgte dog Hjørring for at undgå at skulle bruge tid på at pendle frem og tilbage mellem job og hjem hver dag. Dermed ville de få mere tid til at engagere sig i lokalmiljøet og få nye venner. De har fra boligen i Hjørring også adgang til skov og strand inden for gå- og cykelafstand, og det er noget, de efterfølgende i høj grad har lært at sætte pris på.

Parrets nye tilværelse, deres nye job og deres engagement i byen har betydet, at deres hverdag i Hjørring på mange områder er en helt anden, end den var i København:

”På mange måder er det jo et helt nyt liv, vi har fået. I København boede vi i en treværelses lejlighed inde i byen, men her har vi hus og have og naturen tæt på, og det er også noget, Niels nyder. Det er dejligt at se ham udvikle sig i disse omgivelser. Vi har også fået plads til at have hund. De daglige ture med Kvik i skoven på den anden side af vejen er næsten det hele værd,” siger Lars og fortsætter: ”Vi har også mødt mange nye mennesker. Vi har selvfølgelig begge fået nye, gode kolleger, men vi har også fået et stort netværk gennem nye hobbyer og vores engagement i frivilligt arbejde. Helle er for eksempel kommet med i bestyrelsen for sit kor, og jeg er blandt andet engageret i byens årlige fodboldturnering for unge fra hele verden. Jeg tror, at alle de her nye ting, vi har engageret os i, er helt afgørende for, at vi nu befinder os rigtig godt her i Hjørring,” siger Lars til Helle, der nikker og bekræfter.

Det betyder også, at de nu uden forstyrrende flytteplaner kan glæde sig til den kommende familieforøgelse. Helle er nemlig gravid og venter parrets andet barn. Det bliver en pige, som skal hedde Signe. Hun bliver således familiens første indfødte hjørringenser.

**Tekst 2**

**Udflytning skaber forventning og bekymring**
**I de senere år er knap 4000 statslige arbejdspladser flyttet fra København til andre dele af landet. Det har haft store konsekvenser for medarbejderne, arbejdspladserne og økonomien. Men borgmestrene jubler i de kommuner, der har fået nye statslige arbejdspladser.**

Langt de fleste statslige arbejdspladser har altid ligget i København, men dette er ved at ændre sig. I de senere år er der nemlig flyttet knap 4000 arbejdspladser ud til over 30 forskellige byer. Udflytningen er et led i regeringens plan om at skabe aktivitet og vækst i hele landet og ikke kun i København. Derfor skal også statens institutioner fordeles ud over landet. En udflytning er dog ikke problemfri. Det mærker både de enkelte medarbejdere og arbejdspladserne.

**Usikkerhed hos medarbejderne**
Ikke alle medarbejdere ønsker at flytte med deres arbejdsplads, og det er der forskellige årsager til. Afstand og geografi er den mest almindelige årsag. Hvis arbejdspladsen flytter til et andet sted på Sjælland, kan man pendle, og mange vælger at flytte med. Flytter arbejdspladsen derimod til en anden landsdel, så vælger mange ikke at flytte med. At flytte med vil nemlig have store konsekvenser for hele familien. For eksempel skal børnene begynde i en ny skole, og ægtefællen skal finde et nyt job.

Mange ansatte er også bekymrede for, hvordan en flytning vil påvirke deres arbejdsplads. Hvis alle medarbejdere flytter med, kan en flytning forløbe nogenlunde problemfrit. Men hvis der er mange, der ikke flytter med, så vil der være mange nye kolleger, der skal læres op. Det kan give et ekstra arbejdspres i en periode, og det kan skræmme nogle fra at flytte med. På den anden side kan der også være en karrieremæssig fordel ved at flytte med. Det gælder især for yngre medarbejdere. Hvis deres mere erfarne kolleger vælger at stoppe, får de måske en chance for at få mere spændende ansvarsområder.

Endelig betyder det noget, hvor nemt eller svært det er for medarbejderne at finde et nyt job i København eller omegn. Har medarbejderne nogle generelle kvalifikationer, er der mindre sandsynlighed for, at de flytter med arbejdspladsen, fordi de har større chancer for at finde et andet job.

**Udfordringer for arbejdspladserne**
Også for arbejdspladserne kan der være en række udfordringer forbundet med at flytte. Nogle af disse handler om, hvordan arbejdspladsen kan bevare et højt fagligt niveau og en effektiv opgaveløsning.

Fra regeringens side har man hele tiden været bevidst om, at det har konsekvenser at flytte ud. En udflytning betyder fx, at medarbejderne i en overgangsperiode har brug for mere tid end normalt til at løse deres arbejdsopgaver. Dog kan arbejdspladserne forsøge at afhjælpe nogle af problemerne i overgangsperioden ved at være fleksible. De kan for eksempel tillade flere hjemmearbejdsdage. Det kan måske få flere medarbejdere til i en periode at beholde deres arbejde og pendle fra og til København. Arbejdspladserne kan også sørge for, at nye medarbejdere bliver introduceret grundigt til deres nye arbejdsopgaver. Dermed kan nogle af forsinkelserne i behandlingen af de administrative sager undgås.

En anden konsekvens af udflytningen kan være tab af faglig viden. Det er tilfældet, hvis mange medarbejdere ikke flytter med. For de fleste arbejdspladser vil dette tab kun dreje sig om en periode, indtil de nye medarbejdere har opbygget deres faglighed.

**Økonomi på kort og langt sigt**
Ingen ved præcis, hvad udflytningerne kommer til at koste. Der er både udgifter ved selve flytningen, og så er der spørgsmålet om de faste udgifter på længere sigt. Ifølge regeringens oprindelige udregninger koster en udflytning cirka 100.000 kr. per arbejdsplads. Det vil sige cirka 400 millioner kr. i alt.

Imidlertid har det senere vist sig, at flytningerne i stedet kommer til at koste knap en milliard kr. i alt, altså mere end dobbelt så meget som først beregnet. Det skyldes, at der er større udgifter til blandt andet etablering af nye lokaler og til løn end beregnet. Ifølge regeringens beregninger vil der dog stadig være en besparelse på langt sigt. Det er nemlig dyrt at have bygninger og kontorer i København, så man kan spare mange penge på husleje uden for København.

Økonomien i udflytningerne afhænger af, om de udflyttede statslige institutioner flytter helt væk fra hovedstaden. Hvis staten skal spare mange penge på husleje, skal det være hele arbejdspladsen, der flytter ud af hovedstaden. Men i mange tilfælde er det kun en lille del af institutionen, der skal flytte ud, og så kan det have den modsatte effekt. Så kan der nemlig blive behov for ledere, kantine og reception både i den gamle og den nye afdeling. Der kan også være flere udgifter til transport til møder med kolleger, der før sad på nabokontoret, men nu sidder i en anden landsdel.

Før alle institutioner er kommet endeligt på plads, er det ikke muligt at sige præcist, hvordan den samlede økonomi i udflytningen kommer til at se ud.

**Glade borgmestre byder velkommen**
Medarbejderne på de institutioner, der skal flytte ud, er måske ikke glade for at flytte. Til gengæld vækker det jubel hos borgmestrene i de kommuner, der skal modtage de nye arbejdspladser. Det betyder nemlig mere liv i kommunen og bedre forretningsmuligheder for de lokale virksomheder. Borgmestrene er derfor indstillet på at gøre en stor indsats for at få medarbejderne til at flytte med deres arbejdsplads.

I Næstved, hvor Udlændingestyrelsen fremover skal ligge, har kommunen taget medarbejderne med på en bustur rundt i kommunen. Man har på turen vist alt det særlige frem, som kommunen har at byde på. Kommunen har også holdt møde med styrelsens medarbejdere for at få mere at vide om, hvordan man bedst kan hjælpe og støtte dem.

I Viborg, der blandt andet er blevet hjemby for Civilstyrelsen, har kommunen også været i kontakt med medarbejderne på de nye statslige arbejdspladser. Man har spurgt medarbejderne, hvad de er interesserede i, og hvad byen kan gøre for dem i forbindelse med flytningen. Kommunen har også fortalt medarbejderne om det positive ved den lokale kultur og natur og orienteret om institutioner og skoler til børn. Samtidig har kommunen taget udfordringen med ægtefællernes jobsituation meget seriøst og informeret om lokale jobmuligheder. Det gælder både for job i kommunens egen administration og i det regionale erhvervsliv.

Således er den største udflytning af statslige arbejdspladser i Danmark nu i fuld gang, og der gøres mange nye erfaringer, som kan bruges fremadrettet.`,
    questions: [
      { type: "mc", n: 1, q: "Tekst 1: Hvad var mest afgørende for, at Helle og Lars Kjær valgte at flytte med Helles arbejdsplads til Hjørring?",
        options: ["Det lykkedes Lars at få et job som gymnasielærer.", "Helles forældre bor i nærheden.", "De ville få mere plads."], answer: 2 },
      { type: "mc", n: 2, q: "Tekst 1: Helle og Lars Kjær overvejede at flytte til Aalborg, før de valgte Hjørring. Hvad var afgørende for, at de valgte Hjørring?",
        options: ["De ville gerne være tæt på naturen, så de nemt kunne cykle og gå ture i skoven og ved havet.", "De ville gerne bo og arbejde i samme by for blandt andet at få mere tid til at lære nye mennesker at kende.", "De syntes, det var for dyrt at bo i Aalborg på grund af huspriserne og udgifterne til transport."], answer: 1 },
      { type: "mc", n: 3, q: "Tekst 1: Hvad har ifølge Helle og Lars Kjær haft størst betydning for, at de er faldet godt til i Hjørring?",
        options: ["De har fået nye fritidsaktiviteter.", "De har fået nye, gode kolleger.", "De har fået hus og have."], answer: 0 },
      { type: "mc", n: 4, q: "Tekst 2: Der kan være flere årsager til, at nogle medarbejdere ikke flytter med deres arbejdsplads. Hvilken af følgende årsager er nævnt i teksten?",
        options: ["Nogle medarbejdere er eksperter på et bestemt område, og de kan nemt finde et andet job.", "Nogle medarbejdere er usikre på, om de kan beholde deres gamle arbejdsopgaver.", "Nogle medarbejdere ønsker ikke at få mange nye og uerfarne kolleger."], answer: 2 },
      { type: "mc", n: 5, q: "Tekst 2: I teksten er der nævnt en række udfordringer ved, at statslige institutioner flytter ud. Hvilken af følgende udfordringer har regeringen på forhånd været klar over?",
        options: ["Arbejdspladserne vil miste en stor faglig viden, som i mange tilfælde ikke kan opbygges igen.", "Udflytninger af institutioner vil i begyndelsen betyde, at der bliver en forlænget sagsbehandlingstid.", "Ændrede arbejdsforhold kan betyde, at medarbejderne løser deres arbejdsopgaver på et fagligt lavere niveau."], answer: 1 },
      { type: "mc", n: 6, q: "Tekst 2: Hvorfor er udflytningerne på kort sigt dyrere, end regeringen har regnet med?",
        options: ["Der er større omkostninger til indretning af nye kontorer end beregnet.", "Mange af institutionerne flytter al deres aktivitet væk fra hovedstaden.", "Der skal betales højere løn til de medarbejdere, der flytter med ud."], answer: 0 },
      { type: "mc", n: 7, q: "Tekst 2: Kommunerne forsøger med forskellige initiativer at få medarbejderne i de udflyttede statslige institutioner til at flytte med deres arbejdsplads. Hvilket af følgende initiativer er der nævnt i teksten?",
        options: ["Kommunerne kan sikre, at medarbejdernes ægtefæller får et job.", "Kommunerne kan fortælle om deres attraktive tilbud til deres borgere.", "Kommunerne kan sørge for, at medarbejdernes børn får plads på bestemte skoler og institutioner."], answer: 1 }
    ]
  };

  const cykle = {
    id: "pd3-18n-3", group: G, real: true,
    title: "Delprøve 2B – Børn bør cykle i skole",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Børn bør cykle i skole. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Børn bør cykle i skole**
**Når børn cykler i skole, giver det flere fordele: Blandt andet [[0]] det deres koncentrationsevne, og trafiksituationen forbedres.**

Kører du dit barn i skole, så forringer du barnets evne til at lære mange timer frem. Det viser undersøgelsen Masseeksperimentet 2012. Formålet med undersøgelsen, som faldt i to dele, var at se på sammenhængen mellem blandt andet mad, motion og evnen til at koncentrere sig. Først lavede forskere en spørgeskemaundersøgelse, hvor de indsamlede svar fra 20.000 skoleelever om deres kost- og motionsvaner. Forskerne undersøgte [[1]] de samme børns evne til at løse en række opgaver først på eftermiddagen på en almindelig skoledag, og de kunne så blandt andet måle, hvilken effekt motionen havde på børnenes evne til at koncentrere sig.

Undersøgelsens [[2]] var, at børn klarer sig bedre og kan koncentrere sig i længere tid, hvis de selv går eller cykler til skole, end hvis de bliver kørt i bil, bus eller tog.

Man har længe vidst, at motion stimulerer hjernen og evnen til at lære og til at koncentrere sig, men det er nyt, at virkningen varer så lang tid.

”Det er rigtig interessant, at den motion, det giver at transportere sig selv til skole, afspejles i den koncentrationsevne, man har ca. fire timer senere på dagen. De fleste kender den friskhed, man føler efter at have brugt sin krop. Men det er [[3]], at virkningen holder så længe,”¹ siger professor Niels Egelund, som står bag undersøgelsen.

Cyklistforbundet i Danmark står bag den årlige kampagne Alle Børn Cykler, som har til formål at få flere skolebørn i alle aldre til at cykle til og fra skole. Det glæder naturligvis forbundet, at det nu er [[4]], at der er en læringsmæssig fordel i lang tid efter, man har cyklet.

Udover at det [[5]] har vist sig, at de elever, der for eksempel cykler til skole, har lettere ved at koncentrere sig senere på dagen, så er der ifølge forbundet også andre gode grunde til, at børn bør vælge cyklen. Flere cykelture betyder [[6]] mere sundhed, færre sygedage og renere luft. Det vil også hjælpe på den trafik, der opstår omkring skolerne, når forældre kører deres børn. Der er nemlig mange forældre, der kører både deres små og store børn i skole, i den tro at de gør dem en tjeneste. Og [[7]] forældrene gør dette i bedste mening, så kan det være svært at få dem til at lade være, men med kampagnen gør Cyklistforbundet et forsøg.

Med den nye viden håber forbundet, at flere forældre vil [[8]] at køre deres børn i skole og samtidig fortælle dem om de mange fordele, der er ved at cykle, så børnene motiveres til at hoppe på cyklen og få motion på vej til skole.

¹ http://foodoflife.ku.dk/nyheder/2012/966_cykelborn/`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["således", "derefter", "muligvis", "omvendt"],
        2: ["konsekvens", "formål", "konklusion", "målsætning"],
        3: ["sjældent", "forventeligt", "uforståeligt", "overraskende"],
        4: ["dokumenteret", "problematiseret", "foreslået", "afvist"],
        5: ["ligeledes", "som nævnt", "til gengæld", "desuden"],
        6: ["tværtimod", "alligevel", "imidlertid", "nemlig"],
        7: ["indtil", "bortset fra at", "fordi", "på trods af at"],
        8: ["planlægge", "tilbyde", "acceptere", "fravælge"]
      },
      example: { 0: "øger" },
      answers: { 1: "derefter", 2: "konklusion", 3: "overraskende", 4: "dokumenteret", 5: "som nævnt", 6: "nemlig", 7: "fordi", 8: "fravælge" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(hoejskoler, udflytning, cykle);

  const X = PD2.EXAMS.pd3;
  const SESSION = "November-december 2018";

  // ---------- Skriftlig fremstilling november-december 2018 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-18n-w1", delprove: 1, real: true, year: 2018, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (nov.-dec. 2018)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din ven Anne. Hun bor i Aarhus og blev færdig med sin uddannelse som arkitekt for tre måneder siden, men har endnu ikke fundet et arbejde. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Jeg ved godt, at tre måneder måske ikke er så lang tid, men jeg er ved at blive utålmodig. Jeg vil virkelig gerne finde et arbejde snart! Jeg har sendt en masse ansøgninger, men det er ikke let at få et job, når man er nyuddannet. Faktisk har jeg overvejet at tilbyde min arbejdskraft gratis til et arkitektfirma i en periode, så jeg kan få noget erfaring. «Hvad synes du om den ide?» " +
        "En anden mulighed er at søge arbejde i en anden by, men jeg har jo alle mine venner her i Aarhus, og det er dejligt at have familien tæt på. «Hvordan tror du, at det vil være at bo i en by, hvor jeg slet ikke har noget netværk?» " +
        "Hvis der går lang tid, før jeg finder noget, kunne jeg måske søge arbejde inden for et andet fagområde, hvor jeg også kan bruge mine kvalifikationer. Men det er jo min drøm at arbejde som arkitekt, så jeg ved ikke rigtig. «Tror du, det er en god ide?» " +
        "Du har jo forresten selv lige fået nyt job. «Hvorfor var det nu, du søgte nyt job?»\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Jeg ved godt, at tre måneder måske ikke er så lang tid, men jeg er ved at blive utålmodig. Jeg vil virkelig gerne finde et arbejde snart! Jeg har sendt en masse ansøgninger, men det er ikke let at få et job, når man er nyuddannet. Faktisk har jeg overvejet at tilbyde min arbejdskraft gratis til et arkitektfirma i en periode, så jeg kan få noget erfaring. Hvad synes du om den ide?\n\n" +
        "En anden mulighed er at søge arbejde i en anden by, men jeg har jo alle mine venner her i Aarhus, og det er dejligt at have familien tæt på. Hvordan tror du, at det vil være at bo i en by, hvor jeg slet ikke har noget netværk?\n\n" +
        "Hvis der går lang tid, før jeg finder noget, kunne jeg måske søge arbejde inden for et andet fagområde, hvor jeg også kan bruge mine kvalifikationer. Men det er jo min drøm at arbejde som arkitekt, så jeg ved ikke rigtig. Tror du, det er en god ide?\n\n" +
        "Du har jo forresten selv lige fået nyt job. Hvorfor var det nu, du søgte nyt job?",
      underlined: [
        "Hvad synes du om den ide?",
        "Hvordan tror du, at det vil være at bo i en by, hvor jeg slet ikke har noget netværk?",
        "Tror du, det er en god ide?",
        "Hvorfor var det nu, du søgte nyt job?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvad synes du om den ide? (at arbejde gratis i et arkitektfirma i en periode for at få erfaring)",
        "Understreget: Hvordan tror du, at det vil være at bo i en by, hvor jeg slet ikke har noget netværk?",
        "Understreget: Tror du, det er en god ide? (at søge arbejde inden for et andet fagområde)",
        "Understreget: Hvorfor var det nu, du søgte nyt job?",
        "Foreslå, at I mødes."
      ],
      phrases: ["Tak for din mail.", "Jeg kan godt forstå, at du er ved at blive utålmodig.", "Med hensyn til at arbejde gratis, så …", "Hvis jeg var dig, ville jeg …", "Det kan godt være svært at flytte til en by, hvor …", "Jeg søgte nyt job, fordi …", "Skal vi ikke mødes og …?", "Kærlig hilsen"],
      model: `Hej Anne

Tak for din mail. Jeg kan godt forstå, at du er ved at blive utålmodig, men tre måneder er altså ikke lang tid.

Med hensyn til at arbejde gratis, så synes jeg ikke, det er en god ide. Du har en god uddannelse, og firmaerne skal betale for dit arbejde. Måske kan du i stedet få et betalt praktikforløb gennem jobcentret.

Det kan godt være svært at bo i en by, hvor man ikke kender nogen. Men man kan hurtigt få et netværk gennem kolleger og fritidsaktiviteter, fx et kor eller en sportsklub. Og Aarhus er jo ikke langt væk, hvis du får job i fx Aalborg.

Jeg synes også, det er en god ide at søge job inden for et andet fagområde, hvis det varer længe. Så får du erfaring, og du kan stadig søge arkitektjob ved siden af.

Jeg søgte selv nyt job, fordi jeg manglede nye udfordringer, og fordi jeg havde lang transporttid. Nu har jeg spændende opgaver og cykler kun ti minutter.

Skal vi ikke mødes på en café i Aarhus på lørdag og snakke mere om det?

Kærlig hilsen
Maria`
    },
    {
      id: "pd3-18n-w2a", delprove: 2, real: true, year: 2018, session: SESSION,
      title: "2A: Medier (nov.-dec. 2018)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Medier. " +
        "Diagram: Nyhedskilder, Danmark. For hvert år (2013-2016) viser diagrammet tre søjler: TV (blå), aviser (lysegrå) og sociale medier (mørkegrå). " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal, TV / aviser / sociale medier): 2013 85 % / 49 % / 31 % · 2014 80 % / 42 % / 39 % · 2015 75 % / 34 % / 47 % · 2016 73 % / 29 % / 56 %. " +
        "Kilde: http://www.digitalnewsreport.org/survey/2016/denmark-2016/. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2018n/nyhedskilder-diagram.png",
      imageAlt: "Søjlediagram: Nyhedskilder, Danmark, 2013-2016 (TV / aviser / sociale medier). 2013: ca. 85 % / 49 % / 31 %. 2014: ca. 80 % / 42 % / 39 %. 2015: ca. 75 % / 34 % / 47 %. 2016: ca. 73 % / 29 % / 56 %.",
      chart: {
        title: "Nyhedskilder, Danmark",
        unit: "%", approx: true,
        source: "http://www.digitalnewsreport.org/survey/2016/denmark-2016/",
        series: ["TV", "Aviser", "Sociale medier"],
        groups: [
          { label: "2013", values: [85, 49, 31] },
          { label: "2014", values: [80, 42, 39] },
          { label: "2015", values: [75, 34, 47] },
          { label: "2016", values: [73, 29, 56] }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til en eller flere af de forskelle, diagrammet viser.",
        "Vurder fordele og ulemper ved, at nyhedsformidlingen i stadig højere grad foregår via sociale medier. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor mange danskere der får nyheder fra …", "TV er stadig den største nyhedskilde, men …", "Andelen er faldet fra ca. … % til ca. … %.", "Til gengæld er andelen steget fra … til …", "En årsag kan være, at …", "En fordel ved … er, at …", "En ulempe er, at …", "Alt i alt mener jeg, at …"],
      model: `Nyheder på de sociale medier

Diagrammet viser, hvor mange danskere der fik nyheder fra tv, aviser og sociale medier fra 2013 til 2016. Tv er hele perioden den største nyhedskilde, men andelen falder fra ca. 85 % til ca. 73 %. Aviserne falder endnu mere, fra ca. 49 % til ca. 29 %. Til gengæld stiger de sociale medier fra ca. 31 % til ca. 56 %, og fra 2015 er de større end aviserne.

En årsag kan være, at næsten alle har en smartphone i dag. Man kan læse nyheder i bussen eller i pausen, og det er gratis, mens en avis koster penge. Især de unge ser mindre flow-tv og læser sjældent en papiravis.

Der er flere fordele ved, at nyhederne i stigende grad kommer via sociale medier. Nyhederne kommer hurtigt, og man kan kommentere og dele dem med sine venner. Desuden kan almindelige mennesker selv fortælle om noget, de har oplevet, fx med en video, og det kan gøre nyhederne mere levende.

Der er dog også ulemper. På de sociale medier er det ofte svært at vide, om en nyhed er sand, og falske nyheder kan sprede sig meget hurtigt. Algoritmerne viser os desuden mest det, vi i forvejen er enige i, så vi risikerer at leve i en boble. Endelig får aviserne færre penge, og det kan gå ud over den grundige journalistik.

Alt i alt mener jeg, at sociale medier er et godt supplement, men man bør stadig læse nyheder fra seriøse medier og være kritisk over for kilderne.`
    },
    {
      id: "pd3-18n-w2b", delprove: 2, real: true, year: 2018, session: SESSION,
      title: "2B: Kvindelige topledere (nov.-dec. 2018)",
      kind: "Prøveopgave · holdninger og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Kvindelige topledere. " +
        "Selvom der er en høj grad af ligestilling mellem kvinder og mænd i Danmark, så er der langt flere mandlige end kvindelige topledere. Det er der forskellige årsager til. Mulige årsager: " +
        "• Kvinder prioriterer i højere grad familien end karrieren. • Mænd er bedre til at træffe upopulære beslutninger end kvinder. • Kvinder lægger ikke så meget vægt på et job med status som mænd. • Mænd er mere fokuserede og målrettede end kvinder. • Kvinder er ikke så gode til at fremhæve egne kvalifikationer. • Mandlige topledere foretrækker at ansætte andre mænd. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Kvinder prioriterer i højere grad familien end karrieren.", "Mænd er bedre til at træffe upopulære beslutninger end kvinder.", "Kvinder lægger ikke så meget vægt på et job med status som mænd.", "Mænd er mere fokuserede og målrettede end kvinder.", "Kvinder er ikke så gode til at fremhæve egne kvalifikationer.", "Mandlige topledere foretrækker at ansætte andre mænd."],
      points: [
        "Fortæl kort om kønsfordelingen i ledelsen på en arbejdsplads, du kender.",
        "Kommentér et eller to af synspunkterne fra listen.",
        "Vurder, om en mere lige fordeling af barsels- og forældreorloven mellem kvinder og mænd vil øge andelen af kvindelige topledere. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["På min arbejdsplads består ledelsen af …", "Jeg er enig i, at …, fordi …", "Til gengæld tror jeg ikke på, at …", "Hvis fædrene tager mere orlov, vil …", "For det første … For det andet …", "På den anden side …", "Derfor mener jeg, at …", "Alt i alt …"],
      model: `Flere kvinder i toppen?

På min arbejdsplads, et stort rengøringsfirma, er der mange kvindelige medarbejdere, men i direktionen sidder der fire mænd og kun én kvinde. Blandt de mellemste ledere er fordelingen mere lige.

Jeg er enig i, at mange kvinder prioriterer familien højere end karrieren, især når børnene er små. Ofte er det kvinden, der går ned i tid eller henter børnene tidligt. Til gengæld tror jeg ikke på, at mænd er mere fokuserede og målrettede end kvinder. Det handler om personlighed og ikke om køn.

Efter min mening vil en mere lige fordeling af barsels- og forældreorloven kunne øge andelen af kvindelige topledere. For det første vil kvinderne ikke være væk fra arbejdsmarkedet i så lang tid, og de vil ikke miste så mange muligheder for at avancere. For det andet vil arbejdsgiverne ikke længere se en ung kvinde som en større risiko end en ung mand, fordi begge køn kan gå på orlov. For det tredje vil fædrene få et tættere forhold til børnene og tage mere ansvar derhjemme, også senere, fx når barnet er sygt.

På den anden side er orloven ikke den eneste forklaring. Mange topledere ansætter folk, der ligner dem selv, og nogle kvinder har ikke lyst til de lange arbejdsdage. Derfor skal der også ændres på kulturen i virksomhederne.

Alt i alt mener jeg, at en mere lige orlov er et vigtigt skridt, men at den ikke alene kan give flere kvinder i toppen.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål november-december 2018 ----------
  // q = the obligatory question; follow = the suggested follow-up question. The intro is the examiner's
  // opening sentences from the booklet ("Her er der to billeder til emnet … Det ene viser … og det andet …").
  // The captions are the titles printed above the pictures on the picture sheet.
  // Emne A also exists (with other model answers and its own crops) in data-pd3-oral.js as pd3-o-arbejdsmiljo-2018n.
  const credit = "Illustration (fra Prøve i Dansk 3, november-december 2018)";
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-18n-o-a", title: "Arbejdsmiljø", session: SESSION, year: 2018, real: true, credit,
      intro: "Her er der to billeder til emnet ’Arbejdsmiljø’. Det ene viser en situation med en firmafest og det andet en situation med et kursus i teambuilding.",
      pictures: [
        { file: "images/pd3-2018n/arbejdsmiljo-1.jpg", caption: "Firmafest", credit,
          alt: "Kolleger holder firmafest på en terrasse foran en moderne kontorbygning. En kok griller under en parasol, og folk står i grupper med tallerkener og glas og snakker sammen.",
          words: ["en firmafest", "at grille", "en kollega", "at hygge sig", "et socialt arrangement"] },
        { file: "images/pd3-2018n/arbejdsmiljo-2.jpg", caption: "Kursus i teambuilding", credit,
          alt: "En gruppe medarbejdere sidder ved borde og bygger høje tårne af træklodser i små hold, mens en kursusleder står og viser en tegning af et tårn.",
          words: ["et kursus i teambuilding", "at samarbejde", "at bygge et tårn", "en kursusleder", "en øvelse"] }
      ],
      first: {
        A: {
          q: "På mange arbejdspladser har man sociale arrangementer som fx firmafester og skovture. Hvorfor tror du, man har det?",
          follow: "Hvad tror du, det betyder for medarbejdernes tilfredshed med deres arbejde, at man har sociale arrangementer?",
          answer: "Jeg tror, man har det, fordi kollegerne skal lære hinanden at kende på en anden måde end i hverdagen. På arbejdet taler man mest om opgaver og deadlines, men til en fest eller på en skovtur snakker man om familie, ferie og interesser. Så bliver stemningen bedre, og det bliver lettere at samarbejde bagefter. Det er også en måde, hvor ledelsen kan sige tak for indsatsen i løbet af året.",
          followAnswer: "Jeg tror, det betyder ret meget. Når man har gode relationer til sine kolleger, glæder man sig mere til at gå på arbejde, og man er mindre syg. Man tør også bedre spørge om hjælp. Men arrangementerne kan ikke stå alene. Hvis arbejdsforholdene er dårlige, eller der er for meget travlhed, hjælper en firmafest ikke ret meget. Og nogle medarbejdere bryder sig faktisk ikke om store fester."
        },
        B: {
          q: "På mange arbejdspladser kommer medarbejderne på kursus i teambuilding. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for medarbejdernes tilfredshed med deres arbejde, at de kommer på kursus i teambuilding?",
          answer: "Jeg tror, lederne sender medarbejderne på teambuilding, fordi de gerne vil have, at folk arbejder bedre sammen. På kurset løser man opgaver, som ikke har noget med det daglige arbejde at gøre, fx at bygge et tårn af klodser. Så lærer man, hvordan de andre tænker, og hvem der er god til at planlægge eller komme med ideer. Det kan også være en god måde at ryste en ny afdeling sammen på.",
          followAnswer: "Det kan godt øge tilfredsheden, især hvis der har været konflikter, eller hvis mange er nye. Man får en sjov dag sammen og lærer hinanden bedre at kende. Men jeg tror, effekten forsvinder hurtigt, hvis kurset ikke bliver fulgt op i hverdagen. Nogle medarbejdere synes også, at øvelserne er lidt fjollede og spild af tid, når de har travlt med deres rigtige arbejde."
        }
      },
      second: {
        q: "I nogle virksomheder giver man en bonus – altså en ekstra sum penge – til medarbejdere, hvis de gør en særlig indsats for virksomheden. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Hvordan tror du, en bonus påvirker samarbejdet mellem medarbejderne? Og mellem medarbejderne og ledelsen?",
        answer: "En fordel er, at medarbejderne kan se, at ledelsen lægger mærke til en ekstra indsats. Det kan motivere dem til at gøre sig umage, og virksomheden kan belønne gode resultater uden at hæve lønnen for alle. En ulempe er, at det kan være svært at måle, hvem der har gjort mest. I mange job er resultatet et fælles arbejde, og så kan nogle føle sig uretfærdigt behandlet, hvis de ikke får en bonus.",
        followAnswer: "Jeg tror, det kommer an på, hvordan bonussen bliver givet. Hvis kun enkelte personer får den, kan der opstå misundelse og konkurrence, og så hjælper folk ikke hinanden så meget. Hvis hele teamet får en bonus, kan samarbejdet derimod blive bedre. I forhold til ledelsen er det vigtigt, at reglerne er klare og fair. Ellers mister medarbejderne tilliden til lederne."
      },
      conclusion: ""
    },
    {
      id: "pd3-18n-o-b", title: "Uddannelsesvalg", session: SESSION, year: 2018, real: true, credit,
      intro: "Her er der to billeder til emnet ’Uddannelsesvalg’. Det ene viser en situation med et studieophold i udlandet og det andet en situation med et studierelevant arbejde.",
      pictures: [
        { file: "images/pd3-2018n/uddannelsesvalg-1.jpg", caption: "Studieophold i udlandet", credit,
          alt: "Studerende på et grønt universitetsområde ved University of Southern California. En ung kvinde med en dansk flagmærkat på rygsækken går ud fra bygningen, andre går rundt, cykler eller ligger i græsset og slapper af.",
          words: ["et studieophold", "et universitet", "i udlandet", "en udvekslingsstuderende", "et campus"] },
        { file: "images/pd3-2018n/uddannelsesvalg-2.jpg", caption: "Studierelevant arbejde", credit,
          alt: "Billedet er delt i to. Til venstre (”Nu”) viser en ung kvindelig guide en gruppe turister rundt blandt romerske statuer med Colosseum i baggrunden. Til højre (”Fremtiden”) står en mand og underviser studerende med et billede af Colosseum i Rom på væggen.",
          words: ["et studiejob", "en guide", "en turist", "at undervise", "erfaring"] }
      ],
      first: {
        A: {
          q: "Nogle studerende vælger at studere et eller flere år på et universitet i udlandet. Hvorfor tror du, de vælger det?",
          follow: "Hvad tror du, det betyder for unges karrieremuligheder, at de har studeret et eller flere år på et universitet i udlandet?",
          answer: "Jeg tror, mange vælger det, fordi de gerne vil opleve noget nyt og lære et andet land og en anden kultur at kende. De bliver også bedre til et fremmedsprog, fx engelsk, og de kan måske tage fag, som ikke findes i Danmark. Nogle vil også gerne have et eventyr, inden de skal i gang med arbejdslivet. Og så lærer man at klare sig selv langt væk fra familien.",
          followAnswer: "Jeg tror, det giver bedre karrieremuligheder, især i internationale virksomheder. Arbejdsgiverne kan se, at man er selvstændig, åben og god til sprog, og man har måske et internationalt netværk. Men det er ikke altid nok i sig selv. Hvis man har været væk længe, mangler man måske kontakter i Danmark, og nogle danske arbejdsgivere kender ikke det udenlandske universitet. Derfor er det en god ide også at holde kontakten hjemme."
        },
        B: {
          q: "Nogle unge vælger at arbejde et eller flere år, inden de begynder på en uddannelse. Hvorfor tror du, de vælger det?",
          follow: "Kan der være nogen problemer ved at arbejde i et eller flere år, inden man begynder på en uddannelse? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, nogle unge er trætte af at gå i skole efter mange år og har brug for en pause. Andre ved ikke, hvad de vil uddanne sig til, og så kan et job hjælpe dem med at finde ud af det. Mange vil også gerne tjene penge, så de kan rejse eller spare op til en bolig, før de skal leve af SU. Og man bliver mere moden af at have et arbejde.",
          followAnswer: "Ja, det kan der godt være. Nogle vænner sig til at have en god løn, og så er det svært at gå tilbage til at leve af SU. Andre mister lysten til at læse og kommer aldrig i gang med en uddannelse. Man bliver også ældre, når man er færdig. Men hvis man har en plan, tror jeg, fordelene er større end problemerne, fordi man ved mere om, hvad man vil."
        }
      },
      second: {
        q: "Unge skal normalt ikke betale for at få en uddannelse i Danmark. Hvilke fordele og ulemper mener du, der kan være ved det for det danske samfund?",
        follow: "Hvad tror du, det ville betyde, hvis man indførte gebyrer på uddannelser i Danmark?",
        answer: "En stor fordel er, at alle unge kan tage en uddannelse, uanset hvor mange penge deres forældre har. Det giver lige muligheder, og samfundet får mange veluddannede mennesker, som kan betale skat senere. En ulempe er, at det koster staten rigtig mange penge. Nogle unge tager også en uddannelse, de ikke bruger, eller skifter studie flere gange, fordi det er gratis, og det er dyrt for samfundet.",
        followAnswer: "Jeg tror, at færre unge fra familier med lav indkomst ville tage en lang uddannelse, fordi de ville være bange for at få stor gæld. Så ville uligheden blive større. Måske ville de unge til gengæld tænke sig bedre om og vælge en uddannelse, der giver job. Men på længere sigt tror jeg, samfundet ville mangle uddannet arbejdskraft, fx lærere og sygeplejersker."
      },
      conclusion: ""
    },
    {
      id: "pd3-18n-o-c", title: "Test i skolen", session: SESSION, year: 2018, real: true, credit,
      intro: "Her er der to billeder til emnet ’Test i skolen’. Det ene viser en situation med test i en skoleklasse og det andet en situation fra en afslutning på en folkeskole.",
      pictures: [
        { file: "images/pd3-2018n/test-i-skolen-1.jpg", caption: "Test i de mindre klasser", credit,
          alt: "Små elever i klasse 2.A sidder ved computere med en læsetest på skærmen. Nogle koncentrerer sig, andre keder sig eller kigger væk, og en lærer går rundt og hjælper en elev.",
          words: ["en læsetest", "en computer", "en elev", "at koncentrere sig", "at hjælpe"] },
        { file: "images/pd3-2018n/test-i-skolen-2.jpg", caption: "Afsluttende prøver i folkeskolen", credit,
          alt: "Elever får deres eksamensbeviser til en afslutning i folkeskolen med danske flag og forældre som publikum. En dreng går glad af sted og læser sit bevis, mens en pige ser bekymret ud og tænker: ”Kan jeg komme i gymnasiet?”",
          words: ["en afslutning", "et eksamensbevis", "en karakter", "at være bekymret", "gymnasiet"] }
      ],
      first: {
        A: {
          q: "Nogle mener, at det er vigtigt for børns læring, at de bliver testet i skolen fra de er helt små. Hvorfor tror du, de mener det?",
          follow: "Mener du, der kan være nogen problemer ved at teste børn i skolen? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, de mener det, fordi lærerne kan se tidligt, om et barn har svært ved fx læsning eller matematik. Så kan barnet få hjælp, før problemerne bliver for store. Testene kan også vise, om undervisningen virker, og forældrene kan følge med i, hvordan deres barn klarer sig. Nogle mener også, at børnene vænner sig til at blive testet, så de ikke bliver så nervøse senere.",
          followAnswer: "Ja, det tror jeg. Nogle børn bliver stressede og bange for at fejle, hvis de bliver testet for tit. Så mister de måske lysten til at lære. Lærerne kan også begynde at undervise mest i det, der kommer til testen, og så bliver der mindre tid til kreative fag og leg. Men hvis testene bliver brugt fornuftigt, kan de være et godt redskab for lærerne."
        },
        B: {
          q: "Nogle mener, at karakterer er for upræcise til at afgøre, om unge kan få en ungdomsuddannelse, fx komme i gymnasiet. Hvorfor tror du, de mener det?",
          follow: "Kan der være nogen problemer ved ikke at bruge karakterer, når man afgør, om unge kan få en ungdomsuddannelse? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, de mener det, fordi en karakter kun viser, hvordan eleven klarede sig på en bestemt dag eller i et bestemt fag. Nogle elever er nervøse til prøver, og nogle lærere giver højere karakterer end andre. Karakterer siger heller ikke noget om motivation, modenhed eller om, hvor meget eleven har udviklet sig. En ung kan sagtens klare sig godt i gymnasiet, selvom karaktererne fra folkeskolen ikke var så høje.",
          followAnswer: "Ja, der kan godt være problemer. Hvis man ikke bruger karakterer, skal man bruge samtaler eller optagelsesprøver, og de kan være lige så upræcise og meget dyrere. Det kan også blive mere tilfældigt, hvem der kommer ind. Karakterer er trods alt et fælles mål, som alle kender. Jeg synes derfor, man kan bruge karakterer, men også andre ting, fx en samtale."
        }
      },
      second: {
        q: "Skolernes karaktergennemsnit for eleverne i 9. og 10. klasse offentliggøres på nettet. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Hvordan tror du, at det påvirker lærernes undervisning, hvis alle kan se skolernes karaktergennemsnit på nettet?",
        answer: "En fordel er, at forældrene kan få information, når de skal vælge skole til deres børn, og at skolerne bliver motiveret til at gøre det bedre. Politikerne kan også se, hvilke skoler der har brug for hjælp. En ulempe er, at gennemsnittet ikke siger alt. En skole i et område med mange udsatte familier kan gøre et godt stykke arbejde, selvom karaktererne er lave, og så får den et dårligt ry.",
        followAnswer: "Jeg tror, at nogle lærere vil føle et pres for at få gode resultater. Så underviser de måske mere i det, der kommer til prøverne, og bruger mindre tid på projekter og trivsel. Det kan også gå ud over de svage elever, hvis skolen helst vil have høje karakterer. Men det kan også være positivt, hvis lærerne samarbejder mere om at forbedre undervisningen."
      },
      conclusion: ""
    }
  );
})();
