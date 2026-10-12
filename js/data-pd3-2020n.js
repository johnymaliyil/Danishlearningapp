// Prøve i Dansk 3, november-december 2020 (vinter 2020) – læseforståelse, skriftlig fremstilling and
// mundtlig kommunikation (delprøve 2), transcribed from the exam papers:
// Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Folkeoplysning" nr. 14;
// Læseforståelse 2: teksthæfte nr. 16 and opgavehæfte nr. 17; skriftlig fremstilling nr. 18;
// picture sheets for mundtlig kommunikation nr. 20 (illustrations by Niels Roland, cropped into
// images/pd3-2020n/) and the censor- og eksaminatorhæfte for the oral exam (nr. 21).
// The reading answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur passed on to us: delprøve 1 items 5, 10 and 15 get the
// widened answers, and in delprøve 2B item 7 every candidate got the point because of an error in the
// teksthæfte (the text has "(7) ... på arbejdskraft", so the key "mangel på" gives "mangel på på").
// Item 7 therefore accepts all four options here; the text is kept as printed.
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures and logos from the tekstsamling are left out (they are not needed for any answer).
// This session has only delprøve 2A (7 × multiple choice, two texts) and 2B (8 × A-D gaps) in
// Læseforståelse 2 – there is no separate delprøve 3.
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points.
// Omregningstabel (vinter 2020): 37-36 = 12, 35-32 = 10, 31-26 = 7, 25-21 = 4, 20-19 = 02, 18-10 = 00, 9-0 = -3.
// The app scores every question as 1, so 2A counts half as much here as at the exam.
// Kept as printed: the missing opening quotation mark before "Det var det helt rigtige" in tekst 1 of 2A,
// and the missing comma in the oral question "Mange af dem, der arbejder frivilligt er pensionister".
// The writing task wording, the friend's e-mail, the oral questions and the chart labels are copied
// from the papers; the chart values are read off the bar chart (ca.-values). All model answers are our
// own (the papers have none).

(function () {
  const G = "PD3 nov.-dec. 2020";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const folkeoplysning = {
    id: "pd3-20n-1", group: G, real: true,
    title: "Delprøve 1 – Folkeoplysning",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Folkeoplysning. Brug indholdsfortegnelsen. Svar præcist og så kort som muligt på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Folkeoplysning … 3
   Hvad er folkeoplysning – og for hvem? … 3
   Folkeoplysning før og nu … 4
   Fald i antallet af kursusdeltagere i begyndelsen af 00’erne … 5
Informationer fra udvalgte oplysningsforbunds hjemmesider … 6
   Arbejdernes Oplysnings Forbund (AOF) … 6
   Folkeligt Oplysningsforbund (FOF) … 6
   Liberalt Oplysnings Forbund (LOF) … 7
Annoncer for kurser hos udvalgte oplysningsforbund … 8
Anmeldelser af kurser … 12
   Bliv bedre til at fotografere hos AOF Favrskov … 12
   Yoga hos FOF Syd- og Vestsjælland … 12
   Guitarundervisning hos FOF i Kolding … 12
   Madlavningskursus hos LOF Syd (Padborg) … 13
Informationer fra Dansk Oplysnings Forbund (DOF) … 14
   Om Dansk Oplysnings Forbund (DOF) … 14
   Om hjemmesiden DOF Underviser … 14
   Underviserjobs i aftenskolen … 15
Kilder … 16

**FOLKEOPLYSNING**

**Hvad er folkeoplysning – og for hvem?**
Folkeoplysning bliver i Danmark anset for at være en vigtig forudsætning for folkestyret. Folkeoplysning er defineret som almen, ikke-formel undervisnings- og oplysningsvirksomhed for unge og voksne og sker hovedsagelig i oplysningsforbund, på folkehøjskoler, på biblioteker eller gennem foreninger.

Kurser på folkehøjskoler og hos oplysningsforbund er i princippet for voksne over 18 år, men sammen med en voksen kan børn deltage i kurser, der er målrettet familier. Det kan være kurser som fx familiedans, voksen/barn-gymnastik eller familieyoga.

**Forudsætninger hos undervisere og kursusdeltagere**
Folkeoplysende aktiviteter adskiller sig fra traditionel undervisning ved, at den, der underviser eller holder et foredrag, ikke nødvendigvis kun har en professionel og faglig tilgang til det emne eller fag, der er udgangspunkt for kurset eller foredraget. Underviseren eller foredragsholderen har ofte også et personligt forhold til aktiviteten.

Formidlingen adskiller sig ved, at indholdet ikke kræver, at modtagerne har særlige forudsætninger eller evner ud over det at være nysgerrige og interesserede mennesker.

Endelig adskiller folkeoplysende aktiviteter sig ved, at det egentlige formål er, at alle involverede skal blive klogere på at leve deres liv engageret i forhold til medmennesket og samfundet.

**Hvad lærer man på et folkeoplysende kursus?**
De højskoler, aftenskoler og foreninger, der udbyder folkeoplysningskurser i dag, giver mulighed for fordybelse og udvikling af kompetencer, der ikke altid er plads til i det formelle uddannelsessystem, hvor fokus ofte ligger på de faglige mål og resultater. Kurserne afsluttes i modsætning til i det formelle uddannelsessystem ikke med en eksamen efter endt kursus. Dog kan man få et kursusbevis, hvis man ønsker det.

Formålet med deltagelsen i et folkeoplysende kursus er, at det skal give mulighed for at udvikle en lang række forskellige kompetencer, der ikke nødvendigvis hænger sammen med selve faget. Flere af oplysningsforbundene fremhæver fx den personlige udvikling som lige så vigtig som den faglige. Hvis deltagere skulle vurderes ved en eksamen, ville man netop risikere at miste den del af kompetenceudviklingen, der handler om andet end det faglige udbytte.

**Folkeoplysning før og nu**

**N.F.S. Grundtvig – idemanden bag folkeoplysningen**
Det var N.F.S. Grundtvig, der var manden bag tankerne om folkeoplysning i Danmark. Han formulerede sine tanker i perioden omkring indførelsen af grundloven og demokratiet i 1849. Grundtvig så i den forbindelse et behov for, at bønder og almue¹ blev oplyst om Danmarks historie, og hvad det vil sige at være dansk, så de kunne deltage i det nye demokrati.

Grundtvigs tanker om folkelig oplysning var radikalt forskellige fra tidens elitære pædagogik. Grundtvig mente, at folkeoplysningen skulle bygge på den enkeltes lyst til at lære og på den demokratiske samtale. Lærerne skulle ikke udspørge eleverne. I stedet skulle eleverne være nysgerrige og stille spørgsmål til lærerne, hvis rolle det var at svare på spørgsmålene og indgå i en dialog.

**Individualisme og fællesskab – folkeoplysning i dag**
Folkeoplysning har også i dag en central rolle med sit fokus på det personlige engagement og ansvar, ikke blot for sig selv, men for fællesskabet.

I forhold til 1800-tallet, hvor Grundtvig levede, er samfundet i dag mere individualiseret med fokus på mål, resultater og kompetencer. Måden at deltage i fællesskaber på er anderledes, hvilket ikke mindst skyldes den teknologiske udvikling, så folk nu bruger meget tid på nettet, især de sociale medier. Vores tid uden for arbejde er også kommet under mere pres.

Vi er blevet mere ’serielt engagerede’. Det vil sige, at vi fordyber os i kortere tid ad gangen, i skiftende aktiviteter og i midlertidige fællesskaber, der passer ind i vores liv nu og her.

Folkehøjskolerne og folkeoplysningen har tilpasset sig de skiftende tider, og derfor tilbyder folkehøjskolerne også andre kurser i dag end for 150 år siden. Nogle folkehøjskoler tilbyder i dag kurser målrettet unge, der ønsker at forbedre specifikke faglige kvalifikationer, fordi de ønsker at søge ind på en bestemt uddannelse. Andre folkehøjskoler tilbyder kurser i fritidsaktiviteter som windsurfing og dykning. Det er dog stadig et centralt element i folkeoplysningen, at den skal give kursusdeltagerne fællesskabsfølelse og udvikle kursusdeltagernes personlige egenskaber og lyst til at deltage i samfundslivet.

¹ I gamle dage folk, som havde begrænsede økonomiske forhold, især på landet. Det var fx husmænd og daglejere, der måtte arbejde for andre for at kunne klare sig.

**Fald i antallet af kursusdeltagere i begyndelsen af 00’erne**
I 2003 trådte en ny lov i kraft, fordi politikerne valgte at spare ca. 150 millioner kroner på folkeoplysningen i Danmark, og det gik især ud over tilskuddene til oplysningsforbundene.

Det fik konsekvenser for kursusdeltagerne, da forbundene forøgede betalingen for at deltage på et kursus. Af den årsag forventede oplysningsforbundene et stort fald i antallet af kursusdeltagere på 30-40 %, men det viste sig ikke at blive helt så voldsomt. Nedgangen var kun på 10 % ved årsskiftet 2003-2004. Men det var de økonomisk dårligst stillede, der valgte at blive væk i den tid, der fulgte – typisk pensionister og enlige forsørgere.

Som følge af denne krise, var oplysningsforbundene i midten af 00’erne nødt til at tænke nyt for at sikre, at økonomien hang sammen. Det gjorde de bl.a. ved flere offensive reklamefremstød.

Reklamebureauerne hjalp forbundene med markedsføringen, dels for at kunne gøre politikerne opmærksomme på, at området skulle prioriteres, dels for at tiltrække nye kursusdeltagere.

Folkeoplysningsforbundene fik hjælp til at sælge sig selv med nye logoer, slogans og tv-spots, hvilket skulle strømline deres image. Kritikerne mente imidlertid, at oplysningsforbundene på den måde ikke levede op til de værdier, som de havde stået for i så mange år. Ikke desto mindre er en offensiv markedsføring stadig en del af forbundenes virkelighed i dag, bl.a. på sociale medier.

**INFORMATIONER FRA UDVALGTE OPLYSNINGSFORBUNDS HJEMMESIDER**

**Arbejdernes Oplysnings Forbund (AOF)**
Arbejdernes Oplysnings Forbund (AOF) blev dannet i 1924 af Socialdemokratiet og forskellige arbejderorganisationer. Oplysningsforbundet er i dag en sammenslutning af 100 afdelinger, der står for kurser og uddannelsesaktiviteter i hele landet. Formålet med undervisningen er at sprede viden om og forståelse for det danske samfund og den danske kultur og gøre danskerne til aktive medborgere. Desuden er det vigtigt for AOF at være med til at udbrede demokrati i Danmark, og det skal gøres med udgangspunkt i viden, udvikling og samvær. Disse mål arbejder AOF for gennem folkeoplysning, kulturelle aktiviteter, grund-, efter- og videreuddannelse. Desuden yder AOF hjælp til den enkelte dansker med at leve op til kravene på arbejdsmarkedet.

**Målgrupper**
En stor del af AOF’s uddannelsesaktiviteter er i dag målrettet både private og offentlige arbejdspladser. AOF underviser fx virksomheders medarbejdere i intern kommunikation, kompetenceudvikling, sprog og IT, så arbejdspladsen får et fagligt løft. Og AOF sætter gang i projekter, der hjælper sundhed og trivsel på vej på arbejdspladsen. AOF hjælper også unge med at komme i uddannelse eller job.

Oplysningsforbundet samarbejder desuden med mange kommuner og foreninger om den nye platform GoJoin, hvor borgerne kan dele viden og informationer om aktiviteter med hinanden.

Samlet set går mange tusind mennesker til undervisning på AOF’s aftenskoler hver uge, hvor de bliver klogere på alt fra madlavning, Mellemøsten og motion til sprog og syning. Samtidig modtager mange voksne, både danskere og flygtninge/indvandrere, undervisning hos AOF, så de kan lære at læse det, som de har brug for i deres hverdag. AOF’s målgruppe er altså meget bred.

**Folkeligt Oplysningsforbund (FOF)**
Det Konservative Folkeparti var med til at stifte Folkeligt Oplysningsforbund (FOF) i 1947. Oplysningsforbundet er i dag den største udbyder af folkeoplysende aftenskoleundervisning og har mere end 250.000 kursusdeltagere hvert år. FOF’s afdelinger fordeler sig på Danmarks fem regioner, fra Region Nordjyllands fire afdelinger til Region Syddanmark, som med 11 afdelinger er topscoreren i forhold til antallet af lokale FOF-afdelinger.

Kurserne hos FOF skal medvirke til at udvikle og gøre den enkelte dygtigere og har følgende grundelementer: Personlig udvikling, øget livskvalitet, et bedre grundlag for at være en aktiv samfundsborger og ny faglig viden. FOF arbejder for at udvide den enkeltes indsigt. Det er ikke blot vigtigt at vide, hvad der sker i samfundet, men også at forstå hvorfor.

FOF tilbyder undervisning og samvær, der tilstræber at udvide den enkeltes horisont både kulturelt, socialt og fagligt. Arbejdsmetoden er ligeværdighed, hvor den enkelte lærer at tage ansvar.

**Liberalt Oplysnings Forbund (LOF)**
I 1945 blev Liberalt Oplysnings Forbund (LOF) stiftet af blandt andet partiet Venstre. I dag tilbyder LOF aftenundervisning over hele landet i mange forskellige fag som IT, sprog, kreative fag og bevægelse. Desuden tilbyder LOF debatter og foredrag om samfundsrelevante emner.

**Sundhed og samarbejdspartnere**
LOF har et særligt fokus på folkesundhed. Derfor tilbyder forbundet mange former for bevægelseshold så som yoga, pilates og træning i det fri. Forbundet bidrager også med viden om kost, ernæring og livsstilssygdomme.

Mange af forbundets sundhedsaktiviteter finder sted i samarbejde med kommuner og patientforeninger.

**Medborgerskab og demokrati**
Alle LOF’s aktiviteter har det mål at give deltagerne ny viden og nye kundskaber, så de bliver bedre til at tage ansvar for deres egen tilværelse og deltage aktivt i samfundet.

I LOF mødes mennesker fra alle grupper af samfundet i en dialog og debat om aktuelle emner og om hverdagen. Formålet for LOF er at styrke grundlaget for et demokratisk samfund og at bidrage til samfundets sammenhængskraft og til den enkeltes udvikling og dannelse.

**ANNONCER FOR KURSER HOS UDVALGTE OPLYSNINGSFORBUND**

**FVU dansk med ansøgninger og CV (AOF)**
Forberedende voksenundervisning i dansk med fokus på ansøgninger og CV, der får dig tilbage på arbejdsmarkedet.

**Indhold og forventninger**
• Du er ledig og jobsøgende.
• Det er længe siden, du har lavet en skriftlig ansøgning og et CV, eller du mangler ny inspiration.
• Du vil gerne arbejde på at blive bedre til at formulere dig på skriftligt dansk.
• Du vil gerne blive bedre til at læse, forstå og skrive en ansøgning.
• Du vil gerne have hjælp og ideer til at lave en personlig og interessant ansøgning.
• Du vil gerne have hjælp til at finde og søge job online samt til at skrive en ansøgning på computer.
• Du vil gerne have hjælp til ”Joblog” og ”Min Plan”.
• Du er aktivt deltagende og jobsøgende under hele kursusforløbet.
• Du opdaterer din ”Joblog” og arbejder videre på ”Min Plan”.

Ved kursets afslutning samler du din egen mappe med manual(er) til ansøgninger og CV samt en handleplan for din fortsatte jobsøgning.

Der kræves ingen forudsætninger for at deltage på kurset, men vi forventer, at du møder stabilt og er interesseret i og motiveret for at arbejde med skriftligt dansk og lave ansøgninger.

**Jobsamtale – hvordan det kan lykkes (FOF Kolding)**
Kurset indeholder viden om jobsøgning og den vellykkede jobsamtale.

På dette kursus kan kursusdeltagerne øge deres muligheder for at komme til netop de jobsamtaler, der kan føre til deres drømmejob.

FOF og underviseren hjælper deltagerne med at målrette deres CV til et specifikt job eller en bestemt branche, så de kan skille sig ud fra andre kandidater og imponere ansættelsesudvalget på deres kommende arbejdsplads med deres viden, evner og personlige kvaliteter.

Undervisningen foregår på engelsk, men underviseren kan også tale og forstå dansk.

**Kom godt i gang med at sy (FOF Vendsyssel)**
Kan du lide at sy og være kreativ, eller vil du gerne lære det?

Her er et kursus for dig, der gerne vil lære at sy tøj, der sidder godt.

Vi kigger på forskellige sømme, syteknikker og materialer. Vi vil sammen arbejde med mønstre og tilrette dem, så de passer godt til dig.

Medbring materialer, mønstre og evt. egen symaskine.

**Billedkunst olie/ akryl (AOF Bornholm)**
Olie/ akryl/ overmaling/ genbrug/ blandformer og kunsthistorie. Kurset omhandler både det gamle og det nye maleri. Vi fortolker landskabet, tingene og tiden. Vi gennemgår farvelære (fra Goethe til kaos). Vi finder vores egne kulører og motiver og gennemgår materialerne og eksperimenterer. Vi arbejder på at få minimum tre værker færdige i vintersæsonen.

Vi spørger os selv, om vi stadig kan bruge kunsten til noget. Vi snakker om, hvordan forskellige kunstnere gennem tiden har valgt at skildre landskabet og livet.

I begyndelsen medbringer den enkelte deltager selv sine materialer, senere kan der købes ind i fællesskab.

**Klaver hos LOF Midtjylland**
Klaveret er et alsidigt instrument, der kan bruges i mange genrer inden for rytmisk og klassisk musik.

Der undervises individuelt, så undervisningen kan tilrettelægges efter den enkelte kursusdeltagers niveau og ønsker. Kursusdeltageren kan bl.a. lære at spille klassisk eller rytmisk musik, grundlæggende klaverteknik, nodekundskab, becifringsspil, improvisation og meget andet.

Kursusdeltageren skal have adgang til at øve sig på et klaver.

Hver kursusdeltager modtager soloundervisning i 30 minutter ad gangen, 10 mandage i træk, dog ikke i efterårsferien.

Tidspunktet for undervisningen aftales med underviseren ved tilmelding.

**ANMELDELSER AF KURSER**

**Bliv bedre til at fotografere hos AOF Favrskov**
På kurset lærer man sit kamera meget bedre at kende. Jeg fik et spejlreflekskamera i julegave, og jeg ville rigtig gerne lære mere om at bruge kameraet på en god måde. Underviseren hos AOF Favrskov er meget erfaren, og han har både viden om spejlreflekskameraer og kameraer i smartphones. Derfor er kurset perfekt for de fleste.

På kurset fik vi til opgave fra undervisningsgang til undervisningsgang at fotografere noget i naturen, og så diskuterede vi vores billeder med hinanden, hvilket virkelig var lærerigt. Men det bedste var alligevel de oplæg til inspiration, som underviseren lavede til os, før vi fik vores hjemmeopgaver.

Det eneste negative ved kurset var i mit tilfælde, at de andre kursusdeltagere ikke kendte så meget til kameraer, og derfor var underviseren nødt til at starte med at gennemgå de mest basale funktioner.

*Kasper Andersen*

**Yoga hos FOF Syd- og Vestsjælland**
Jeg har sjældent tid til at få dyrket motion, og hverdagen er indimellem lidt stressende. Derfor meldte jeg mig til dette kursus i yoga. Og det var virkelig både afstressende, fyldt med nærvær, og så var det et telefonfrit rum. På kurset øver man sig i at skabe ro og balance, og selvom det var ret svært i begyndelsen, kunne jeg mærke en bedring gang for gang.

Faktisk er jeg nu blevet bedre til at lægge telefonen til side derhjemme i hverdagen, og det hjælper mig med at bevare den ro, jeg har opnået på kurset. Jeg synes også, jeg kan mærke, at roen smitter af på resten af familien.

På den måde kan man vel sige, at kurset har lært mig at være i nuet. Jeg vil helt sikkert anbefale kurset til alle, jeg kender, der oplever en stresset hverdag, som jeg gjorde.

*Mona Sørensen*

**Guitarundervisning hos FOF i Kolding**
I efteråret gik jeg til guitarundervisning for begyndere i Kolding, hvor jeg også arbejder. Jeg havde her mulighed for at gå til guitar lige efter endt arbejdsdag i samme bygning, som jeg i forvejen arbejder i. Så kl. 20 fik jeg fri, og derefter kunne jeg bare gå to etager ned i bygningen og lære at spille guitar.

Der var flere praktiske ting ved det, bl.a. sparede jeg tid på transporten, da jeg jo var der i forvejen. Og så var jeg virkelig glad for, at undervisningen lå efter mine børns sengetid, så det ikke betød, at det gik ud over mit samvær med dem.

Selve undervisningen blev jeg bestemt heller ikke skuffet over, for underviseren er meget dygtig. Og der bliver taget hensyn til ens personlige musikønsker, så uanset om man er til rock, pop, fællessang eller noget mere klassisk, finder han noget, der passer.

Den eneste ulempe er, at det er dyrt at gå til guitar hos FOF, også selvom man medbringer sit eget instrument.

*T. Jørgensen*

**Madlavningskursus hos LOF Syd (Padborg)**
I foråret 2019 deltog jeg i et madlavningskursus hos LOF Syd. Og det var et rigtig godt kursus. Jeg lærte i første del af kurset rigtig meget om råvarer og god køkkenhygiejne. Men det bedste var alligevel, at vi lærte at tilberede et festmåltid, som jeg faktisk vil kunne lave derhjemme også.

Jeg har tidligere været på et madlavningskursus, hvor det nærmest var umuligt efterfølgende at gentage det, som jeg havde lært på kurset, derhjemme. Det skyldtes, at læreren udførte de svære opgaver for os i stedet for at lade os forsøge selv. Men på dette kursus var underviseren meget kompetent, og hun sikrede, at vi alle lærte stegeteknikkerne. Det gjorde hun ved at lade os prøve selv trin for trin.

I slutningen af timen gav hun os desuden et link til en video, hvor hun forklarer de nye stegeteknikker. Den video sikrer, at vi altid kan få genopfrisket det, vi lærte på kurset.

*Vinni Holm*

**INFORMATIONER FRA DANSK OPLYSNINGS FORBUND (DOF)**

**Om Dansk Oplysnings Forbund (DOF)**
Dansk Oplysnings Forbund er en landsorganisation for aftenskoler, der ønsker at udbrede folkeoplysning på et frit og neutralt grundlag – uafhængigt af partipolitik.

DOF’s landsorganisation omfatter omkring 250 aftenskoleforeninger samt enkelte daghøjskoler og sprogskoler fordelt over hele Danmark. DOF’s skoler forestår årligt undervisning for ca. 160.000 kursusdeltagere.

Landsorganisationen støtter medlemsskolerne i deres daglige virke på en lang række områder. Det sker ved på den ene side at give rådgivning, inspiration, viden, projektstøtte og netværk til medlemsskolerne og på den anden side at arbejde for bedre rammer for aftenskolerne på det politiske niveau – både lokalt og nationalt.

**Om hjemmesiden DOF Underviser**
*DOF Underviser* er en hjemmeside for dem, der er underviser i aftenskolen. Siden er først og fremmest for undervisere i en af DOF’s aftenskoler, men andre skolers undervisere er også velkomne til at kigge med. Der er blot nogle af tilbuddene, der kun kan benyttes af undervisere tilknyttet en DOF-skole.

**Baggrunden for hjemmesiden DOF Underviser**
Jobbet som aftenskoleunderviser er lidt specielt i forhold til mange andre job. Selv om man omgås en masse andre mennesker, så er det oftest sparsomt med kollegial sparring. Der er sjældent et lærerværelse, hvor man kan få en sludder – eller finde materiale om faget. Det er heller ikke alle aftenskoler, der holder lærermøder – for det kan blandt andet være svært at finde et tidspunkt, hvor alle skolens undervisere kan mødes.

Men aftenskoleundervisere kan have lige så meget brug for at udvikle sig, som alle andre. Derfor har DOF lavet *DOF Underviser*, der kan være undervisernes sparringspartner til at udvikle sig som underviser i aftenskolen.

Formålet med siden kan deles op i tre overordnede områder:
• Inspiration
• Ny viden
• Kurser og efteruddannelse

**Inspiration**
Mange undervisere har helt styr på deres fag, men måske ikke den seneste forskning inden for undervisning eller voksenpædagogik.

Man kender måske ikke alle de forskellige muligheder for at tilrettelægge kurserne anderledes end den traditionelle med lærer og elever i et klasselokale.

Man har måske heller ikke styr på den elektroniske udvikling og hvilke værktøjer, der måske kan gøre ens undervisning endnu bedre.

Endelig har man måske brug for inspiration til, hvad man skal gøre for at tilføre noget særegent folkeoplysende i sin undervisning.

DOF vil gerne inspirere underviserne til hele tiden at udvikle sig som undervisere inden for alle de områder, der er relevante for aftenskolen.

**Ny viden**
Aftenskolen er under konstant forandring. Rammerne ændrer sig løbende, og nye muligheder dukker op.

DOF vil gerne sørge for at al relevant viden kommer ud til dem, der kan have glæde af det. Det kan være alt lige fra relevante puljer til ny lovgivning.

**Kurser og efteruddannelse**
DOF mener, at kurser og efteruddannelse er essentielt for at forblive en god underviser. DOF formidler derfor information om kurser – både information om dem, DOF selv afholder, og information om de støttemuligheder, DOF stiller til rådighed i forhold til andres kurser.

**Underviserjobs i aftenskolen**
Der er brug for mange forskellige undervisningskompetencer, da aftenskolerne udbyder kurser inden for et alsidigt udvalg af fag. Det kan være undervisningsjob inden for musik og sang, inden for motion og bevægelse – fx forældre/barn-gymnastik eller yoga, madlavning for forskellige grupper eller madkultur fra et specifikt land/område, kreative fag eller forskellige jobrelaterede kurser.

Man har også mulighed for at blive sprogunderviser, fx i polsk, kinesisk, russisk, arabisk, islandsk eller fransk. Har man ikke dansk som modersmål, er det dog et krav, at man har lært både at tale, læse og skrive dansk.

Kilde: Teksterne i tekstsamlingen er redigerede og/eller bearbejdede på baggrund af bl.a. da.wikipedia.org, fora.dk, danmarkshistorien.dk, politiken.dk, kristeligt-dagblad.dk, aof.dk, fof.dk, lof.dk, jobindexarkiv.dk og danskoplysning.dk, hentet 2019.`,
    questions: [
      // Søg informationer under 'Informationer fra udvalgte oplysningsforbunds hjemmesider'
      { type: "short", n: 1, q: "(Informationer fra udvalgte oplysningsforbunds hjemmesider) Hvem samarbejder LOF med om aktiviteter for at fremme folkesundheden? Nævn to samarbejdspartnere.",
        accept: uniq(combos(["", "med", "lof samarbejder med", "de samarbejder med"], ["kommuner og patientforeninger", "patientforeninger og kommuner", "kommunerne og patientforeningerne", "patientforeningerne og kommunerne", "kommuner og patient foreninger", "kommuner patientforeninger", "kommuner, patientforeninger"])) },
      { type: "short", n: 2, q: "(Informationer fra udvalgte oplysningsforbunds hjemmesider) LOF tilbyder aftenskoleundervisning. Hvad tilbyder LOF derudover? Nævn to typer arrangementer.",
        accept: uniq(combos(["", "lof tilbyder", "de tilbyder", "lof tilbyder også", "de tilbyder også"], ["debatter og foredrag", "foredrag og debatter", "debatter, foredrag", "debat og foredrag", "foredrag og debat"], ["", "om samfundsrelevante emner", "om samfundsrelevante temaer", "om aktuelle emner"])) },
      { type: "short", n: 3, q: "(Informationer fra udvalgte oplysningsforbunds hjemmesider) FOF har afdelinger i alle Danmarks fem regioner. Hvilken region har flest lokale afdelinger?",
        accept: uniq(combos(["", "i"], ["region syddanmark", "syddanmark", "region syd danmark", "syd danmark"], ["", "med 11 afdelinger", "11 afdelinger", "med elleve afdelinger"])) },
      // Søg informationer under 'Folkeoplysning'
      { type: "short", n: 4, q: "(Folkeoplysning) I princippet er folkeoplysning for voksne, men børn kan deltage i kurser, der er målrettet familier. Hvad er dog et krav for, at børn kan deltage i disse kurser?",
        accept: uniq(combos(["", "at de deltager", "at børnene deltager", "at de er", "at børnene er", "de skal deltage", "børnene skal deltage", "de skal være", "at de kommer", "de skal komme", "at børn deltager"], ["sammen med en voksen", "med en voksen", "sammen med voksne", "sammen med en forælder", "sammen med deres forældre"])
          .concat(["en voksen skal være med", "at en voksen er med", "at der er en voksen med", "en voksen", "voksen ledsager", "at de har en voksen med"])) },
      { type: "short", n: 5, q: "(Folkeoplysning) Afsluttes et folkeoplysende kursus med en eksamen? Svar ’ja’ eller ’nej’.",
        accept: uniq(combos(["nej"], ["", "men man kan få et kursusbevis", "men man kan få et kursusbevis hvis man ønsker det", "men man kan få kursusbevis", "kun et kursusbevis", "man kan få et kursusbevis"])
          .concat(["nej det gør det ikke", "nej ingen eksamen"])) },
      { type: "short", n: 6, q: "(Folkeoplysning) Hvorfor mente Grundtvig, at det var vigtigt, at folk vidste noget om Danmarks historie og om det at være dansk?",
        accept: uniq(combos(["", "for at de kunne", "så de kunne", "fordi de skulle", "for at kunne", "så de kunne være med til at", "for at de skulle kunne", "fordi de skulle kunne", "de skulle kunne"], ["deltage i det nye demokrati", "deltage i demokratiet", "deltage i demokrati", "deltage i det nye demokrati i 1849"])
          .concat(combos(["", "på grund af", "pga", "pga.", "på grund af den", "fordi der var", "det var"], ["indførelsen af grundloven", "indførelsen af demokratiet", "indførelsen af grundloven og demokratiet", "indførelsen af grundloven og demokratiet i 1849", "indførelsen af demokratiet og grundloven"]))) },
      { type: "short", n: 7, q: "(Folkeoplysning) I begyndelsen af 00’erne faldt antallet af kursusdeltagere. Hvor stort var faldet ved udgangen af 2003?",
        accept: uniq(combos(["", "på", "kun", "kun på", "faldet var på", "det var på", "nedgangen var på", "ca.", "ca"], ["10 %", "10%", "10 procent", "ti procent", "10 pct"], ["", "ved årsskiftet 2003-2004", "af kursusdeltagerne"])) },
      // Søg informationer under 'Annoncer for kurser hos udvalgte oplysningsforbund'
      { type: "short", n: 8, q: "(Annoncer for kurser hos udvalgte oplysningsforbund) På klaverkurset hos LOF Midtjylland er undervisningen målrettet den enkelte kursists niveau og ønsker. Hvordan er det muligt?",
        accept: uniq(combos(["der undervises", "undervisningen er", "undervisningen foregår", "fordi der undervises", "fordi undervisningen er", "fordi undervisningen foregår", "de underviser", "fordi de underviser", "man undervises", "man bliver undervist", "fordi man bliver undervist", "fordi man undervises"], ["individuelt"])
          .concat(combos(["", "der er", "fordi der er", "man får", "fordi man får", "hver kursusdeltager får", "hver kursusdeltager modtager", "ved", "gennem"], ["soloundervisning", "solo undervisning", "individuel undervisning", "soloundervisning i 30 minutter ad gangen", "eneundervisning"]))
          .concat(["individuelt", "individuel undervisning", "undervisning individuelt"])) },
      { type: "short", n: 9, q: "(Annoncer for kurser hos udvalgte oplysningsforbund) På FVU dansk med ansøgninger og CV (AOF) laver alle kursister deres egen mappe, der indeholder manualer til ansøgninger og CV. Hvad indeholder den også?",
        accept: uniq(combos(["", "den indeholder også", "mappen indeholder også", "også"], ["en handleplan", "handleplan", "en handlingsplan", "handlingsplan", "handleplanen"], ["", "for den fortsatte jobsøgning", "for din fortsatte jobsøgning", "for deres fortsatte jobsøgning", "for jobsøgningen", "for videre jobsøgning", "til den fortsatte jobsøgning", "til jobsøgningen"])) },
      // Søg informationer under 'Informationer fra Dansk Oplysnings Forbund (DOF)'
      { type: "short", n: 10, q: "(Informationer fra Dansk Oplysnings Forbund (DOF)) Hvilke aftenskoleundervisere er hjemmesiden DOF Underviser først og fremmest beregnet for?",
        accept: uniq(combos(["", "for", "den er for", "den er beregnet for", "siden er for"], ["undervisere i en af dof’s aftenskoler", "undervisere i en af dofs aftenskoler", "undervisere i dof’s aftenskoler", "undervisere i dofs aftenskoler", "dof’s undervisere", "dofs undervisere", "dof undervisere", "dof-undervisere", "undervisere i dof", "undervisere fra dof", "dof’s aftenskoler", "dofs aftenskoler", "undervisere ved dof’s aftenskoler", "undervisere på dof’s aftenskoler", "dof’s aftenskoleundervisere", "undervisere i dof’s skoler", "undervisere tilknyttet en dof-skole", "undervisere tilknyttet en dof skole", "dem der underviser i en af dof’s aftenskoler"])) },
      { type: "short", n: 11, q: "(Informationer fra Dansk Oplysnings Forbund (DOF)) DOF er en landsorganisation for primært aftenskoleforeninger. Hvilke andre typer af skoler er også medlemmer af DOF? Nævn to typer.",
        accept: uniq(combos(["", "enkelte"], ["daghøjskoler og sprogskoler", "sprogskoler og daghøjskoler", "daghøjskoler, sprogskoler", "dag højskoler og sprogskoler", "daghøjskole og sprogskole", "daghøjskoler og sprog skoler"])) },
      { type: "short", n: 12, q: "(Informationer fra Dansk Oplysnings Forbund (DOF)) Kan man arbejde som sprogunderviser i aftenskolen, hvis man ikke kan tale dansk? Svar ’ja’ eller ’nej’.",
        accept: ["nej", "nej det kan man ikke", "nej man skal kunne tale læse og skrive dansk", "nej man skal kunne tale dansk"] },
      // Søg informationer under 'Anmeldelser af kurser'
      { type: "short", n: 13, q: "(Anmeldelser af kurser) Hvad var ifølge Kasper Andersen det bedste, underviseren på fotokurset hos AOF lavede i undervisningen?",
        accept: uniq(combos(["", "de", "hans", "han lavede", "underviseren lavede", "det var de"], ["oplæg til inspiration", "oplæg", "oplæggene til inspiration", "oplæggene", "inspiration", "oplæg til inspiration før hjemmeopgaverne", "oplæg til inspiration inden hjemmeopgaverne", "inspirerende oplæg", "et oplæg til inspiration", "oplæg med inspiration"])) },
      { type: "short", n: 14, q: "(Anmeldelser af kurser) Hvad gav underviseren på madlavningskurset hos LOF kursusdeltagerne, så de efter kurset kunne repetere de lærte stegeteknikker?",
        accept: uniq(combos(["", "hun gav dem", "underviseren gav dem", "hun gav os", "de fik"], ["et link", "link", "et link til en video", "link til en video", "et link til en video om stegeteknikkerne", "et link til en video hvor hun forklarer de nye stegeteknikker", "et videolink", "videolink", "et link til video", "link til video", "et link til hendes video"])) },
      { type: "short", n: 15, q: "(Anmeldelser af kurser) Hvad gør Mona Sørensen, så hun kan bevare roen derhjemme i hverdagen?",
        accept: uniq(combos(["", "hun er blevet bedre til at", "hun er bedre til at", "hun", "hun prøver at", "at", "hun er blevet god til at"], ["lægge telefonen til side", "lægger telefonen til side", "lægge telefonen væk", "lægger telefonen væk", "lægge telefonen", "lægger telefonen", "lægge mobilen til side", "lægger mobilen til side", "lægge sin telefon til side", "lægger sin telefon til side"])
          .concat(combos(["", "hun går til", "hun dyrker", "hun laver", "hun går til et kursus i", "hun har gået til", "hun gik til"], ["yoga", "yoga hos fof", "yoga hos fof syd og vestsjælland"]))
          .concat(["hun lægger telefonen til side og går til yoga", "hun går til yoga og lægger telefonen til side", "lægger telefonen til side og går til yoga"])) }
    ]
  };

  const jobskifte = {
    id: "pd3-20n-2", group: G, real: true,
    title: "Delprøve 2A – Jobskifte",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 45,
    instruction: "Læs teksterne Internt jobskifte opfyldte karrieredrøm og Folk skifter job som aldrig før. Herunder er der syv spørgsmål til de to tekster. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1**

**Internt jobskifte opfyldte karrieredrøm**
**”Var det blevet et nej, ville jeg nok have søgt andre veje,” fortæller Trine Sundsvald Christensen, som pressede på, indtil hun til sidst fik mulighed for at skifte specialistrollen ud med et job som projektleder.**

Civilingeniør Trine Sundsvald havde hverken skrevet en ansøgning eller været til en egentlig jobsamtale, da hun begyndte som projektleder i Niras’¹ Jernbaneafdeling 1. december sidste år. Med ti års anciennitet i virksomheden kendte hun faktisk også sin nye afdeling ganske godt og rykkede blot 50 meter længere ned ad gangen. Alligevel repræsenterer skiftet et væsentligt vendepunkt i hendes karriere, fordi det har ført hende ind på et spor, som hun målrettet er gået efter. Før skiftet til projektleder arbejdede hun som geotekniker i et specialistteam, hvor opgaverne bestod i at lave jordbundsundersøgelser, fundamentberegninger og lignende.

Det var nærmest et tilfælde, der fik hende sporet ind på projektledelse. Den daværende fagprojektleder på et større projekt, som Trine Sundsvald Christensen var en del af, fik nyt job, og så overtog hun tjansen efter hende: ”Det var lidt underhåndsagtigt². Jeg faldt nærmest over opgaven og fandt ud af, at jeg var rigtig god til koordineringsopgaverne. Det var på den måde, at drømmen om at gå helt over i projektledelse opstod.”

Trine Sundsvald ville gerne blive på sin arbejdsplads, og hun så derfor en mulighed i at skifte til et projektlederteam i en anden afdeling. I stedet for at gå alene med sin drøm tog hun emnet op til samtlige medarbejderudviklingssamtaler med sin teamleder – til at begynde med uden held: ”Vi har en ret flad struktur, som gør det nemt at gå til en chef uden at bukke og neje. Bliver der sagt, at der ikke er plads, skal man tro på sit eget værd og insistere på, at det er det, man gerne vil,” siger hun.

**Ny titel var ikke nok**
Trine Sundsvald tvivlede ikke et øjeblik: Projektledervejen var den rigtige. På et tidspunkt fik hun også titel af projektleder i sit specialistteam: ”Min teamleder har virkelig prøvet at give mig noget ved at give mig en titel, men der var ikke nok projektlederopgaver i specialistteamet.”

For et halvt år siden tog hun en snak med sin daværende afdelingsleder og teamchef, hvor hun gjorde opmærksom på, at det nu var ved at være tid: ”De kunne godt mærke, at det var alvor for mig og ville ikke slippe en medarbejder, der er så meget inde i organisationen. Var det blevet et nej, ville jeg nok have søgt andre veje,” fortæller hun.

For Trine Sundsvald var det interne jobskifte den bedst mulige løsning: ”Min motivation var at få andre arbejdsopgaver, ikke at skifte arbejdsplads, for jeg kan rigtig godt lide at være her. Det er også derfor, jeg ikke har flyttet mig i ti år,” ler hun.

**Det sociale skift var sværest**
Skiftet fra det ene job til det andet har været en glidende overgang. Trine Sundsvald tog blot sine projekter med sig, og efterhånden som de bliver løst, overtager hun nye.

Kollegerne i den nye afdeling kendte hun godt i forvejen, fordi hun som geotekniker har haft en del samarbejde med jernbaneafdelingen på bl.a. Ringsted-Femern-banen. Fremover kommer hun sandsynligvis til at arbejde på jernbaneprojekter i Norge. Efter ti år i det samme team har det da også været lidt vemodigt at sige farvel til sine gamle kolleger: ”Det sværeste har helt klart været det sociale, fordi jeg har været rigtig glad for at være i mit team.”

Det betyder dog ikke, at hun har fortrudt et øjeblik – tværtimod: Det var det helt rigtige. Før havde jeg et fagligt fællesskab inden for geoteknik. I dag sidder jeg i et team, hvor jeg kan få faglig sparring inden for projektledelse. Det kunne jeg ikke før.”

*Ingeniøren den 16.04.2018: ’Internt jobskifte opfyldte karrieredrøm’.*

¹ Niras er en rådgivende ingeniørvirksomhed.
² Noget, der sker uofficielt, og uden at det på forhånd er planlagt.

**Tekst 2**

**Folk skifter job som aldrig før**
**I Danmark skifter folk oftere job, end man gør i mange andre lande. Det er der både fordele og ulemper ved. Både for arbejdsgiverne og arbejdstagerne.**

I Danmark er jobomsætningen, der er et mål for, hvor mange der starter i et nyt job, en af de største i Europa. Den store jobomsætning kan blandt andet forklares med den danske arbejdsmarkedsmodel. Det er en model, der er kendetegnet ved to nøgleord: fleksibilitet og sikkerhed.

På det danske arbejdsmarked er der en relativt høj grad af fleksibilitet for arbejdsgiverne. De kan blandt andet relativt nemt ansætte og fyre medarbejdere i modsætning til i mange andre lande, hvor der er strengere regler. Der er fx ikke lange opsigelsesvarsler. Fleksibiliteten betyder, at arbejdsgiverne godt tør ansætte nye medarbejdere, hvis der kommer en stigning i efterspørgslen. Hvis efterspørgslen falder, kan de nemlig forholdsvis nemt komme af med medarbejderne igen.

Det danske arbejdsmarked er også kendetegnet ved en relativt høj grad af økonomisk sikkerhed for medarbejderne. Bliver man fyret, går man ned i indkomst, men dog ikke så meget som i mange andre lande. Man er nemlig sikret relativt god økonomisk støtte som arbejdsløs.

Altså har den danske model indflydelse på jobomsætningen. Modellen har dog også indflydelse på, hvordan det generelt opfattes at blive fyret. Da det er mere almindeligt at blive fyret i Danmark, og da det generelt ikke medfører meget alvorlige økonomiske konsekvenser, er det oftest ikke forbundet med samme grad af skam eller fiasko som i mange andre lande.

**Fordele og ulemper ved en høj jobomsætning**
Inden for de fleste brancher er det en fordel for arbejdsgiverne, at man hurtigt kan tilpasse sig efterspørgslen og udskifte arbejdskraften efter behov. Dog kan der også være ulemper. Hvis en virksomhed mister erfarne medarbejdere, fordi de rykker videre til et andet job, kan det nemlig være forbundet med tab af viden. Det betyder også ekstra udgifter og ekstra arbejdstimer ved oplæring af nye medarbejdere.

Det er især i brancher med mangel på højt specialiseret arbejdskraft, at den høje jobomsætning kan være et problem. Det gælder fx for it-branchen og bygge- og anlægsbranchen. Hvis en it-virksomhed mister en erfaren medarbejder, kan det være svært at finde en ny specialist med de rigtige kvalifikationer. En ny medarbejder vil typisk have brug for oplæring, og det kræver tid, og det har de tilbageværende specialister netop ikke meget af.

For en arbejdsgiver er det vigtigste hele tiden at have de bedste og mest kompetente medarbejdere til lige netop de opgaver, som skal løses.

**Især unge skifter job**
Der er som nævnt flere brancher, hvor virksomhederne har svært ved at få de medarbejdere, de har brug for. Det gælder fx i it-branchen og i bygge- og anlægsbranchen. Konsekvensen er, at det ikke blot er arbejdsgiverne, der vælger efter behov. Der har også i de senere år været en stigende tendens til, at medarbejderne vælger arbejdsgiverne til og fra. Det er nemlig ikke noget problem at sige sit job op, hvis man nemt kan finde et andet job. Det kommer selvfølgelig an på de muligheder, der er i den branche, hvor man arbejder. Men det kommer også an på alder. Det er særligt blandt de yngre medarbejdere, at der er en høj jobomsætning.

For unge er det nemlig generelt mindre risikofyldt at skifte job og arbejde i korte midlertidige ansættelser. De har endnu ikke fået forpligtelser i forhold til familie og bolig og har derfor ikke samme behov for økonomisk stabilitet som ældre medarbejdere. Det er generelt også mere positivt for unge at skifte job, fordi de har brug for at opbygge et netværk og få en bredere erfaring. Jobskift kan være et skridt på vejen mod det drømmejob og den karriere, de gerne vil have.

Selvom flere unge ser korte midlertidige ansættelser som led i deres karriere, ønsker de fleste unge dog en længerevarende fastansættelse ligesom deres ældre kolleger. Det er blot sværere at finde et fast job som ung og nyuddannet, fordi flere virksomheder end tidligere kun tilbyder korte midlertidige ansættelser. De unge, der skal have deres første job, er derfor ofte nødt til at tage de korte midlertidige ansættelser.

**Usikkerhed i ansættelsen**
Når ansatte i korte midlertidige ansættelser generelt foretrækker en længerevarende fastansættelse, skyldes det ønsket om mere tryghed i deres arbejdsliv. En løs tilknytning til arbejdsmarkedet former sig nemlig ikke kun som et spændende liv med mange karriere- og udviklingsmuligheder. Ens arbejdsliv vil ofte være uforudsigeligt med perioder med lav eller ingen lønindkomst. I modsætning til en mere fast tilknytning til arbejdsmarkedet, betyder en løs tilknytning ikke blot en ustabil indkomst, men også, at man har sværere ved at optjene dagpenge og få sygesikring, betalt ferie og pensionsopsparing. De fleste sociale og økonomiske sikkerhedsforanstaltninger er nemlig bygget op omkring arbejdsmarkedets faste stillinger. Det vil sige, at man fx normalt er sikret overenskomstbestemte løn- og arbejdsvilkår, hvis man er ansat i en fast stilling. Man har fx en opsigelsesperiode ved fyring, og man kan få udbetalt løn i opsigelsesperioden. Med en kort midlertidig ansættelse er man ikke sikret alle disse fordele. Hertil kommer, at man i perioder risikerer at være helt uden indkomst, hvis man i sine midlertidige ansættelser heller ikke har optjent nogen dagpenge.`,
    questions: [
      { type: "mc", n: 1, q: "Tekst 1: Hvilken af følgende årsager er der ifølge teksten til, at Trine Sundsvald besluttede sig for at skifte til sit nuværende job som projektleder?",
        options: ["Hendes firma fandt ud af, at hun var god til at koordinere og tilbød hende jobbet.", "Hun havde tidligere fundet ud af, at hun var god til at organisere arbejdsprocesser.", "Hun ville gerne fortsætte med at arbejde i den afdeling, hvor hun allerede arbejdede."], answer: 1 },
      { type: "mc", n: 2, q: "Tekst 1: Hvad var ifølge teksten den afgørende grund til, at Trine Sundsvald blev tilbudt et job som projektleder i sit firma?",
        options: ["Hun var den medarbejder i firmaet, der havde de bedste kvalifikationer til jobbet.", "Firmaet ville gerne have, at hun skulle skifte job til en anden afdeling.", "Firmaet ville gerne være sikker på at kunne beholde hende."], answer: 2 },
      { type: "mc", n: 3, q: "Tekst 1: Hvilket af følgende udsagn er i overensstemmelse med det, Trine Sundsvald giver udtryk for om jobbet som projektleder?",
        options: ["Det er det helt rigtige for hende, fordi hun har mulighed for at udvikle nye faglige kompetencer.", "Det er det helt rigtige for hende, fordi hun har mulighed for at arbejde sammen med nye kolleger.", "Det er det helt rigtige for hende, fordi hun har mulighed for at arbejde med projekter i udlandet."], answer: 0 },
      { type: "mc", n: 4, q: "Tekst 2: Hvad gives der i teksten udtryk for som en positiv konsekvens af den danske arbejdsmarkedsmodel?",
        options: ["Folk bliver ikke økonomisk dårligere stillet, hvis de bliver fyret.", "Det er generelt mere socialt accepteret at blive fyret i Danmark.", "Arbejdsgivere skal ikke følge nogen regler i forbindelse med fyringer."], answer: 1 },
      { type: "mc", n: 5, q: "Tekst 2: Hvilket af følgende udsagn om den høje jobomsætning er i overensstemmelse med det, der gives udtryk for i teksten?",
        options: ["Selvom det kan koste penge og tab af viden at udskifte medarbejdere, er den høje jobomsætning en fordel for hovedparten af de danske virksomheder.", "Jobomsætningen er højere i Danmark end i mange andre lande, fordi der er mange højt specialiserede medarbejdere i Danmark.", "Den høje jobomsætning er en fordel for it-branchen og bygge- og anlægsbranchen, fordi det gør det nemmere for dem at skaffe højt specialiserede medarbejdere."], answer: 0 },
      { type: "mc", n: 6, q: "Tekst 2: Hvilket af følgende udsagn om jobskift er i overensstemmelse med det, der gives udtryk for i teksten?",
        options: ["Arbejdsgivere tilbyder flere korte midlertidige ansættelser end tidligere for at tiltrække de unge, der i dag skifter job oftere.", "Størstedelen af de unge foretrækker en løsere tilknytning til arbejdsmarkedet, fordi de endnu ikke har forpligtelser i forhold til familie og bolig.", "I brancher med mangel på arbejdskraft er der flere medarbejdere, der selv vælger at skifte job."], answer: 2 },
      { type: "mc", n: 7, q: "Tekst 2: Hvilket af følgende udsagn om ansatte i korte midlertidige ansættelser og ansatte i længerevarende fastansættelser gives der udtryk for i teksten?",
        options: ["Et flertal af de ansatte i korte midlertidige ansættelser ønsker en længerevarende fastansættelse.", "Det er ikke muligt for ansatte i korte midlertidige ansættelser at optjene dagpenge.", "Ansatte i korte midlertidige ansættelser og ansatte i længerevarende fastansættelser får ikke samme løn for samme arbejde."], answer: 0 }
    ]
  };

  const csr = {
    id: "pd3-20n-3", group: G, real: true,
    title: "Delprøve 2B – Danske firmaer tager samfundsmæssigt ansvar",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Danske firmaer tager samfundsmæssigt ansvar. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar. (Ved prøven fik alle prøvedeltagere point i hul 7 på grund af en fejl i teksthæftet – derfor tæller alle svar i hul 7 som rigtige her.)",
    text: `**Danske firmaer tager samfundsmæssigt ansvar**

Corporate Social Responsibility (CSR), eller på dansk ’virksomhedens samfundsmæssige ansvar’, opstod i 1800-tallet i USA. Her donerede rige forretningsfolk penge til fx skoler og hospitaler i fattige bydele. [[0]] er CSR i dag andet og mere end blot donationer. CSR betegner i dag virksomheders arbejde med at integrere sociale og miljømæssige hensyn i deres forretningsaktiviteter i samspil med deres kunder.

CSR har bredt sig i dansk erhvervsliv i de senere år, blandt andet på hoteller, der har haft stor succes med at tænke CSR ind i deres aktiviteter. Mange hoteller arbejder [[1]] med bæredygtighed og miljø. Et af deres mål er at fjerne engangsplastik som fx sugerør og cocktailpinde fra hotellerne. Et andet mål er at [[2]] vaskemidler ved at opfordre gæsterne til at bruge håndklæderne på værelserne flere gange.

Der er flere årsager til, at CSR har bredt sig i dansk erhvervsliv i de senere år. For det første er CSR en [[3]] for de danske virksomheder. Det viser studier i sammenhængen mellem CSR og virksomheders succes. Virksomheder, der tænker arbejdet med CSR ind i deres aktiviteter, klarer sig nemlig ofte godt økonomisk.

At CSR har bredt sig hænger også sammen med, at der generelt er kommet mere fokus på emner som miljø og inklusion i samfundet, og det påvirker også det danske erhvervsliv.

Endelig kan [[4]] det øgede fokus på CSR være, at de sociale medier er mere udbredte i dag. Med de sociale medier er samfundet som helhed blevet mere åbent, fordi alle har nem adgang til både gode og dårlige nyheder og historier. Det er derfor vigtigt for en virksomhed at tage hensyn til miljøet og behandle de ansatte godt, så virksomheden kan få en god omtale.

En klar CSR-profil er god reklame for en virksomhed, og [[5]] kan det blive lettere at finde nye medarbejdere i brancher, hvor der ikke er arbejdskraft nok. Det gælder særligt i forhold til de unge. En undersøgelse fra 2018 viser [[6]], at 75 % af lønmodtagerne mellem 24 og 34 år mener, at en arbejdsplads skal påvirke samfund og miljø positivt. Undersøgelsen viser også, at netop de unge skifter job ofte. I en tid med [[7]] på arbejdskraft er det derfor vigtigt med CSR-initiativer.

Der er bred enighed i samfundet om, at det er positivt at arbejde for social inklusion, miljøbevidsthed og samfundsmæssigt ansvar. Alligevel er der [[8]] CSR’s plads i dansk erhvervsliv. Samtidig med at der er mange, der mener, at det er positivt, er der nemlig også kritikere, der mener, at virksomhederne netop kun bidrager, så længe de oplever, at det kan betale sig for dem.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["derimod", "eksempelvis", "derefter", "omvendt"],
        2: ["spare på", "miljømærke", "advare mod", "afskaffe"],
        3: ["udfordring", "pligt", "omkostning", "gevinst"],
        4: ["en forklaring på", "et problem for", "et resultat af", "et eksempel på"],
        5: ["modsat", "alligevel", "dermed", "dog"],
        6: ["imidlertid", "i stedet", "nemlig", "tværtimod"],
        7: ["overskud af", "mangel på", "tilstrømning af", "masser af"],
        8: ["forventninger til", "fordele ved", "tillid til", "uenighed om"]
      },
      example: { 0: "Imidlertid" },
      // 7: the key says B "mangel på", but the forcensur gave every candidate the point (error in the text).
      answers: { 1: "eksempelvis", 2: "spare på", 3: "gevinst", 4: "en forklaring på", 5: "dermed", 6: "nemlig", 7: ["mangel på", "overskud af", "tilstrømning af", "masser af"], 8: "uenighed om" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(folkeoplysning, jobskifte, csr);

  const X = PD2.EXAMS.pd3;
  const SESSION = "November-december 2020";

  // ---------- Skriftlig fremstilling november-december 2020 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-20n-w1", delprove: 1, real: true, year: 2020, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (nov.-dec. 2020)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din danske ven Trine. Hendes datter Rikke er 19 år, og hun blev student i sommer. En del af mailen står nedenfor. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Hvor er det dejligt, at vi snart har juleferie. «Har du nogen planer?» " +
        "Rikke blev jo student i sommer, men hun ved ikke rigtigt, hvilken uddannelse hun skal vælge. Lige nu arbejder hun for at tjene penge til at rejse. Jeg er dog nervøs for, at hun mister interessen for at studere, hvis hun ikke snart kommer i gang. «Hvad tror du, det vil betyde for hendes motivation for at studere, hvis hun venter et år mere?» " +
        "Rikke vil gerne flytte hjemmefra og leder nu efter en bolig sammen med to af sine venner. Jeg er ikke sikker på, om det er en god ide, at hun flytter hjemmefra, før hun har mere styr på sine fremtidsplaner. «Hvad mener du?» " +
        "Jeg trænger virkelig til ferie efter et travlt efterår på arbejdet. Vi overvejer faktisk at tage ud at rejse i julen i år, men vil på den anden side også gerne se familie og venner i julen. «Hvad synes du, vi skal gøre?» …\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Hvor er det dejligt, at vi snart har juleferie. Har du nogen planer?\n" +
        "Rikke blev jo student i sommer, men hun ved ikke rigtigt, hvilken uddannelse hun skal vælge. Lige nu arbejder hun for at tjene penge til at rejse. Jeg er dog nervøs for, at hun mister interessen for at studere, hvis hun ikke snart kommer i gang. Hvad tror du, det vil betyde for hendes motivation for at studere, hvis hun venter et år mere?\n\n" +
        "Rikke vil gerne flytte hjemmefra og leder nu efter en bolig sammen med to af sine venner. Jeg er ikke sikker på, om det er en god ide, at hun flytter hjemmefra, før hun har mere styr på sine fremtidsplaner. Hvad mener du?\n\n" +
        "Jeg trænger virkelig til ferie efter et travlt efterår på arbejdet. Vi overvejer faktisk at tage ud at rejse i julen i år, men vil på den anden side også gerne se familie og venner i julen. Hvad synes du, vi skal gøre? …",
      underlined: [
        "Har du nogen planer?",
        "Hvad tror du, det vil betyde for hendes motivation for at studere, hvis hun venter et år mere?",
        "Hvad mener du?",
        "Hvad synes du, vi skal gøre?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Har du nogen planer? (i juleferien)",
        "Understreget: Hvad tror du, det vil betyde for hendes motivation for at studere, hvis hun venter et år mere?",
        "Understreget: Hvad mener du? (om at Rikke flytter hjemmefra)",
        "Understreget: Hvad synes du, vi skal gøre? (rejse eller se familie og venner i julen)",
        "Foreslå, at I mødes og snakker videre om Rikkes planer."
      ],
      phrases: ["Tak for din mail.", "Du spørger, om jeg har nogen planer i juleferien.", "Jeg tror ikke, at det vil …", "Når hun har …, ved hun måske bedre, hvad hun vil.", "Hvad angår …, synes jeg, at …", "Hvis jeg var jer, ville jeg …", "Skal vi ikke mødes og snakke videre om Rikkes planer?", "Kærlig hilsen"],
      model: `Hej Trine

Tak for din mail. Ja, det bliver dejligt med juleferie! Du spørger, om jeg har nogen planer. Jeg skal holde jul hos min søster i Aarhus, og mellem jul og nytår vil jeg bare slappe af og læse nogle gode bøger.

Jeg forstår godt, at du er nervøs for Rikke. Men jeg tror faktisk ikke, at det vil skade hendes motivation, hvis hun venter et år mere. Når hun har arbejdet og rejst, ved hun måske bedre, hvad hun vil, og så bliver hun mere motiveret for at studere.

Hvad angår boligen, synes jeg, det er en god idé, at hun flytter hjemmefra. Hun er 19 år, og hun skal lære at klare sig selv. Det er også billigere at bo sammen med to venner.

Hvis jeg var jer, ville jeg rejse i julen. Du trænger jo til ferie, og I kan sagtens se familie og venner, når I kommer hjem, for eksempel til nytår.

Skal vi ikke mødes en dag i næste uge og snakke videre om Rikkes planer? Vi kunne drikke en kop kaffe på caféen ved havnen.

Kærlig hilsen
Maria`
    },
    {
      id: "pd3-20n-w2a", delprove: 2, real: true, year: 2020, session: SESSION,
      title: "2A: At arbejde hjemmefra (nov.-dec. 2020)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: At arbejde hjemmefra. " +
        "Andelen af danskere med forskellig uddannelsesbaggrund, der i en undersøgelse fra 2017 svarede, at de havde arbejdet hjemmefra inden for de seneste 4 uger. " +
        "Diagram: At arbejde hjemmefra. " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): Grundskole ca. 12 % · Erhvervsuddannelse ca. 23 % · Lang videregående uddannelse og phd. ca. 59 %. " +
        "Kilde: Danmarks Statistik (2017). " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2020n/at-arbejde-hjemmefra-diagram.png",
      imageAlt: "Søjlediagram: At arbejde hjemmefra. Andelen af danskere, der i 2017 havde arbejdet hjemmefra inden for de seneste 4 uger, fordelt på uddannelse: grundskole ca. 12 %, erhvervsuddannelse ca. 23 %, lang videregående uddannelse og phd. ca. 59 %.",
      chart: {
        title: "At arbejde hjemmefra",
        unit: "%", approx: true,
        source: "Danmarks Statistik (2017)",
        bars: [
          { label: "Grundskole", value: 12 },
          { label: "Erhvervsuddannelse", value: 23 },
          { label: "Lang videregående uddannelse og phd.", value: 59 }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til de forskelle, diagrammet viser.",
        "Vurdér, om det øger eller mindsker risikoen for stress, at man har mulighed for at arbejde hjemmefra. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor stor en andel af …", "Kun ca. … % af dem, der …", "Blandt dem med … var andelen hele ca. … %.", "Der kan være flere årsager til forskellene.", "… arbejder derimod ofte …", "På den ene side … På den anden side …", "Grænsen mellem arbejde og fritid bliver …", "Samlet set mener jeg, at …"],
      model: `Hjemmearbejde – frihed eller stress?

Diagrammet viser, hvor stor en andel af danskere med forskellig uddannelse der i 2017 havde arbejdet hjemmefra inden for de seneste fire uger. Der er store forskelle. Kun ca. 12 % af dem, der har grundskolen som højeste uddannelse, havde arbejdet hjemmefra, og blandt dem med en erhvervsuddannelse var det ca. 23 %. Blandt dem med en lang videregående uddannelse eller en ph.d. var andelen hele ca. 59 %.

Der kan være flere årsager til forskellene. Mange med en kort uddannelse eller en erhvervsuddannelse arbejder fx i butikker, på fabrikker, på byggepladser eller i ældreplejen, hvor man skal være fysisk til stede. Højtuddannede arbejder derimod ofte på kontor ved en computer, og deres opgaver kan løses alle steder. De har desuden ofte mere frihed til selv at planlægge deres arbejdstid.

Efter min mening kan muligheden for at arbejde hjemmefra både øge og mindske risikoen for stress. På den ene side kan den mindske stress, fordi man sparer tid på transport og kan arbejde i ro uden forstyrrelser fra kolleger. Det bliver også lettere at få hverdagen til at hænge sammen, fx at hente børnene tidligt og så arbejde lidt igen om aftenen.

På den anden side kan hjemmearbejde øge risikoen for stress. Grænsen mellem arbejde og fritid bliver uklar, og mange tjekker mails sent om aftenen og i weekenden. Nogle føler sig også ensomme, fordi de savner kollegerne og den uformelle snak ved kaffemaskinen. Hvis man har små børn derhjemme, kan det desuden være svært at koncentrere sig.

Samlet set mener jeg, at hjemmearbejde mindsker risikoen for stress, hvis det er frivilligt, og hvis der er klare aftaler om, hvornår man skal kunne kontaktes. Derfor er det vigtigt, at ledere og medarbejdere taler sammen om reglerne.`
    },
    {
      id: "pd3-20n-w2b", delprove: 2, real: true, year: 2020, session: SESSION,
      title: "2B: Personalegoder (nov.-dec. 2020)",
      kind: "Prøveopgave · holdninger og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Personalegoder. " +
        "Mange virksomheder tilbyder deres medarbejdere personalegoder for at tiltrække og fastholde dem i virksomheden. Her er nogle eksempler på personalegoder: " +
        "• Sociale arrangementer i fritiden • Børnepasning på virksomheden • Efteruddannelse og kurser • Fitness-abonnement • Sundhedstjek på arbejdspladsen • Kantinemad med hjem. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Sociale arrangementer i fritiden", "Børnepasning på virksomheden", "Efteruddannelse og kurser", "Fitness-abonnement", "Sundhedstjek på arbejdspladsen", "Kantinemad med hjem"],
      points: [
        "Fortæl kort om personalegoder, du selv har fået eller har hørt om.",
        "Kommentér et eller to af eksemplerne fra listen.",
        "Vurdér, om det er vigtigt for arbejdsmiljøet, at en virksomhed tilbyder deres medarbejdere personalegoder. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["På min arbejdsplads får vi …", "Min mand/kone arbejder i …, hvor de har …", "Jeg synes, at … er et rigtig godt personalegode, fordi …", "Til gengæld er jeg mere skeptisk over for …", "Efter min mening er personalegoder vigtige, men …", "For det første … For det andet …", "Der er dog også ulemper.", "Alt i alt mener jeg, at …"],
      model: `Personalegoder – en god gestus, men ikke nok

På min arbejdsplads, et rengøringsfirma, får vi frugt hver dag og en julefrokost hvert år. Min mand arbejder i en it-virksomhed, hvor de har gratis kaffe, en betalt mobiltelefon og et sundhedstjek en gang om året. Desuden kan de træne gratis i firmaets eget motionsrum.

Jeg synes, at børnepasning på virksomheden er et rigtig godt personalegode. Forældrene sparer tid, når de ikke skal køre en omvej forbi en daginstitution, og de kan måske besøge barnet i frokostpausen. Til gengæld er jeg mere skeptisk over for kantinemad med hjem. Det er praktisk, men det kan betyde, at familien sjældnere laver mad sammen.

Efter min mening er personalegoder vigtige for arbejdsmiljøet, men de er ikke det vigtigste. For det første viser de, at ledelsen sætter pris på medarbejderne, og det giver motivation. For det andet kan sociale arrangementer styrke sammenholdet, så kollegerne bedre kan samarbejde og hjælpe hinanden, når der er travlt. Efteruddannelse og kurser giver også medarbejderne nye kompetencer og lyst til at blive i virksomheden.

Der er dog også ulemper. Hvis der er for mange opgaver og for få ansatte, hjælper et fitness-abonnement ikke meget. Et godt arbejdsmiljø handler først og fremmest om en god leder, rimelige arbejdsopgaver og respekt. Desuden passer goderne ikke til alle. Sociale arrangementer i fritiden kan for eksempel være svære at deltage i for dem, der har små børn.

Alt i alt mener jeg, at personalegoder kan forbedre arbejdsmiljøet, men kun hvis de grundlæggende arbejdsforhold allerede er i orden.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål november-december 2020 ----------
  // q = the obligatory question (this booklet has no situation introduction before it);
  // follow = the suggested follow-up question(s). The picture sheet's own captions are the captions.
  // Emne A and B also exist (with other model answers) in data-pd3-oral.js as pd3-o-…-2020n.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, november-december 2020)";
  const intro = emne => `Her er der to billeder, som viser nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-20n-o-a", title: "Arbejdsliv og familieliv", session: SESSION, year: 2020, real: true, credit,
      intro: intro("Arbejdsliv og familieliv"),
      pictures: [
        { file: "images/pd3-2020n/arbejdsliv-og-familieliv-1.jpg", caption: "Karrierejob og familieliv", credit,
          alt: "En far i jakkesæt og frakke kommer ind ad døren til garderoben i en børnehave, mens han taler i mobiltelefon og kigger på sit armbåndsur. Uret på væggen viser næsten fem. En lille pige rækker armene ud mod ham, og en kvinde står med pigens overtøj. Der er julepynt på væggene.",
          words: ["et karrierejob", "at hente sit barn", "en børnehave", "at komme for sent", "at have travlt"] },
        { file: "images/pd3-2020n/arbejdsliv-og-familieliv-2.jpg", caption: "Studieliv og familieliv", credit,
          alt: "En ung far sidder på gulvet og bygger et tårn af klodser sammen med sin lille søn. Ved bordet bagved sidder moren med to bærbare computere og læser i en bog om pædagogik, mens hun drikker kaffe.",
          words: ["studerende forældre", "at læse til eksamen", "en studiebog", "at lege med klodser", "at dele opgaverne"] }
      ],
      first: {
        A: {
          q: "Der er nogle, der venter med at få børn, til de er sidst i 30’erne. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved at vente med at få børn, til man er sidst i 30’erne? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, der er flere grunde. Mange tager en lang uddannelse og bliver først færdige, når de er omkring 30 år. Derefter vil de gerne have et fast job og en god økonomi, før de får børn. Nogle har heller ikke fundet den rigtige partner endnu. Og så vil mange gerne rejse og nyde friheden, mens de er unge. Sådan var det også for min veninde, som fik sit første barn som 38-årig.",
          followAnswer: "Ja, det mener jeg. Det kan være sværere at blive gravid, når man er sidst i 30’erne, og nogle må have hjælp på en fertilitetsklinik. Der er også en lidt større risiko under graviditeten. Desuden kan det være hårdt at have små børn, når man er over 40, fordi man har mindre energi. Til gengæld er ældre forældre ofte mere rolige og har en bedre økonomi, så der er også fordele."
        },
        B: {
          q: "Der er nogle, der vælger at få børn, mens de er studerende. Hvorfor tror du, de vælger det?",
          follow: "Mener du, der kan være nogen problemer ved at få børn, mens man er studerende? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, nogle vælger det, fordi de har en fleksibel hverdag som studerende. De kan selv planlægge, hvornår de læser, og de kan være meget hjemme sammen med barnet. I Danmark får man også ekstra SU, når man har børn, og man kan tage orlov fra studiet. Andre vil gerne være unge forældre og have energi til at lege med deres børn. Og når de er færdige med studiet, kan de koncentrere sig om karrieren.",
          followAnswer: "Ja, der kan godt være nogle problemer. Økonomien er ofte stram, fordi SU’en ikke er særlig høj, og det kan være svært at have et studiejob ved siden af. Det kan også være svært at finde tid til at læse og gå til eksamen, når barnet er sygt eller ikke vil sove. Men hvis forældrene hjælper hinanden, og bedsteforældrene kan passe barnet en gang imellem, kan det sagtens lade sig gøre."
        }
      },
      second: {
        q: "Det er ofte moren, der holder den længste forældreorlov. Hvilke fordele og ulemper mener du, der kan være ved det for moren i forhold til familie og arbejde?",
        follow: "Hvad tror du, det betyder for ligestillingen i samfundet, at moren ofte holder den længste orlov?",
        answer: "En fordel for moren er, at hun får god tid sammen med barnet i det første år, og hun kan amme i længere tid. Det giver ro i familien. En ulempe er, at hun er væk fra arbejdspladsen i lang tid. Hun kan miste kontakten til kollegerne og gå glip af en forfremmelse eller en lønstigning. Desuden får hun ofte mindre i pension. Derfor synes jeg, at forældrene skal dele orloven mere lige.",
        followAnswer: "Jeg tror, det betyder, at mænd og kvinder stadig ikke er helt ligestillede. Kvinder tjener i gennemsnit mindre end mænd, og en af grundene er netop, at de holder den længste orlov og bagefter ofte arbejder på deltid. Mændene får derimod mindre tid sammen med deres børn. Hvis fædrene holdt mere orlov, ville arbejdsgiverne ikke se kvinder som en større risiko, og samfundet ville blive mere lige."
      },
      conclusion: ""
    },
    {
      id: "pd3-20n-o-b", title: "Frivilligt arbejde", session: SESSION, year: 2020, real: true, credit,
      intro: intro("Frivilligt arbejde"),
      pictures: [
        { file: "images/pd3-2020n/frivilligt-arbejde-1.jpg", caption: "Forældre med frivilligt arbejde", credit,
          alt: "En far med \"TRÆNER\" på trøjen råber og peger ved sidelinjen, mens en flok piger spiller fodbold på en græsbane. Nogle forældre står og ser på i baggrunden.",
          words: ["en frivillig træner", "en fodboldklub", "at råbe instruktioner", "en forening", "at heppe"] },
        { file: "images/pd3-2020n/frivilligt-arbejde-2.jpg", caption: "Pensionister med frivilligt arbejde", credit,
          alt: "To ældre kvinder arbejder frivilligt i en genbrugsbutik. Den ene viser en ung kvindelig kunde en vase, og den anden sidder ved kasseapparatet. Rundt om står brugte møbler, tøj og porcelæn.",
          words: ["en genbrugsbutik", "en frivillig", "en pensionist", "et kasseapparat", "brugte ting"] }
      ],
      first: {
        A: {
          q: "Mange af dem, der arbejder frivilligt, er forældre med hjemmeboende børn. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for familielivet, at mange af dem, der arbejder frivilligt, er forældre med hjemmeboende børn?",
          answer: "Jeg tror, det er, fordi forældre gerne vil være en del af deres børns fritidsliv. Hvis barnet spiller fodbold, mangler klubben ofte en træner, og så melder en af forældrene sig. På den måde ser de deres barn, mens de hjælper klubben. Forældre lærer også mange andre forældre at kende i skolen og i foreningerne, så de bliver spurgt, om de vil hjælpe. Desuden vil de gerne give noget tilbage til foreningen.",
          followAnswer: "Jeg tror, det kan betyde meget godt for familielivet. Forældre og børn får en fælles interesse, og de bruger mere tid sammen, fx til kampe i weekenden. Børnene kan også være stolte af, at deres mor eller far er træner. Men det kan også gå ud over familien, hvis den frivillige bruger flere aftener om ugen i klubben. Så har man mindre tid til de andre børn og til sin partner."
        },
        B: {
          q: "Mange af dem, der arbejder frivilligt er pensionister. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for pensionisters livskvalitet, at de arbejder frivilligt?",
          answer: "Jeg tror, det er, fordi pensionister har mere tid, når de er holdt op med at arbejde. Mange er stadig friske og vil gerne lave noget meningsfuldt. Når man ikke længere har kolleger, kan man let blive ensom, og i en genbrugsbutik møder man både andre frivillige og mange kunder. Desuden har mange pensionister en stor erfaring, som de gerne vil bruge til at hjælpe andre.",
          followAnswer: "Jeg tror, det betyder meget for deres livskvalitet. De får en fast struktur i hverdagen og en grund til at komme ud af huset. De føler sig også nyttige og får nye venner, så de bliver mindre ensomme. Det er godt for både helbredet og humøret at være aktiv. Min nabo arbejder frivilligt i en genbrugsbutik to dage om ugen, og hun siger, at det har givet hende et nyt netværk."
        }
      },
      second: {
        q: "Kommunerne gør mere og mere brug af frivillig arbejdskraft inden for fx ældrepleje og sundhed. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Hvad mener du om, at kommuner gør brug af frivillig arbejdskraft for at spare penge på løn til professionelle?",
        answer: "En fordel er, at frivillige kan give de ældre mere tid og nærvær. De kan for eksempel gå en tur med dem, spille kort eller bare snakke, og det har det faste personale ofte ikke tid til. Det kan mindske ensomheden. En ulempe er, at de frivillige ikke har den samme uddannelse som sygeplejersker og sosu-assistenter. De kan heller ikke altid komme, fordi de ikke er forpligtede til det, og så er det svært at planlægge.",
        followAnswer: "Det synes jeg ikke er i orden. Frivillige skal være et supplement, ikke en erstatning for uddannet personale. Hvis kommunerne bruger frivillige for at spare penge, kan kvaliteten i ældreplejen blive dårligere, og de ansatte kan føle, at deres arbejde ikke bliver respekteret. Desuden kan de frivillige miste lysten, hvis de føler sig udnyttet. Derfor skal kommunerne ansætte nok professionelle og bruge de frivillige til det ekstra."
      },
      conclusion: ""
    },
    {
      id: "pd3-20n-o-c", title: "Unge og sundhed", session: SESSION, year: 2020, real: true, credit,
      intro: intro("Unge og sundhed"),
      pictures: [
        { file: "images/pd3-2020n/unge-og-sundhed-1.jpg", caption: "Unge og rygning", credit,
          alt: "Tre unge står og ryger ved et cykelskur uden for et gymnasium. Der hænger et rygning forbudt-skilt på skolens mur, og andre elever går hen mod indgangen, hvor en lærer står på trappen.",
          words: ["at ryge", "en smøg", "et rygeforbud", "et gymnasium", "gruppepres"] },
        { file: "images/pd3-2020n/unge-og-sundhed-2.jpg", caption: "Unge og fitness", credit,
          alt: "I et fitnesscenter træner en ung kvinde benene i en maskine, og en muskuløs mand løfter en tung vægtstang. I baggrunden løber nogle på løbebånd. På gulvet står en drikkedunk med \"BOOST\" og en dåse proteinpulver.",
          words: ["et fitnesscenter", "at træne", "en vægtstang", "et løbebånd", "proteinpulver"] }
      ],
      first: {
        A: {
          q: "Der er nogle unge, der ryger, selvom de godt ved, at det er usundt. Hvorfor tror du alligevel, de gør det?",
          follow: "Hvad tror du, det betyder for de unges sociale relationer, at de ryger?",
          answer: "Jeg tror, mange unge ryger, fordi deres venner gør det. De vil gerne høre til i gruppen, og en smøg i frikvarteret kan være en måde at være sammen på. Nogle synes også, at det ser sejt ud, eller de ryger, når de er til fest. De tænker ikke så meget på fremtiden, fordi sygdomme som lungekræft føles langt væk. Og når man først er begyndt, er det svært at stoppe, fordi nikotin er meget vanedannende.",
          followAnswer: "Jeg tror, rygning kan både styrke og svække de unges sociale relationer. De unge, der ryger, får et fællesskab, fordi de mødes ved cykelskuret i pauserne og snakker. Men det kan også skabe afstand til de klassekammerater, der ikke ryger, og nogle kan føle sig pressede til at begynde. Desuden kan der opstå konflikter med forældrene, hvis de ikke vil acceptere, at deres barn ryger."
        },
        B: {
          q: "Nogle unge går i fitnesscenter hver dag og går meget op i, hvad de spiser og drikker. Hvorfor tror du, det er sådan?",
          follow: "Kan der være nogen problemer ved at gå i fitnesscenter hver dag og gå meget op i, hvad man spiser og drikker? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, mange unge gør det, fordi udseendet betyder meget i dag. På de sociale medier ser de hele tiden billeder af perfekte, muskuløse kroppe, og dem vil de gerne ligne. Nogle træner også, fordi det giver dem en god følelse og mere energi. For andre er fitnesscentret et socialt sted, hvor de mødes med vennerne. Desuden er der kommet meget fokus på sund kost og proteinpulver, så det er blevet en livsstil.",
          followAnswer: "Ja, det kan der godt. Hvis man træner hver dag uden pauser, kan man få skader, fordi kroppen ikke får tid til at restituere. Nogle bliver også så optagede af kost og træning, at det bliver en besættelse, og i værste fald kan de udvikle en spiseforstyrrelse. De får måske dårlig samvittighed, hvis de springer en træning over. Motion er sundt, men det skal være med måde, og det må ikke styre ens liv."
        }
      },
      second: {
        q: "Nogle mener, at samfundet bør prøve at påvirke unges usunde livsstil, fx ved at sætte prisen på cigaretter og alkohol markant op. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Hvad tror du, det vil betyde for sundheden og livskvaliteten for lavtlønnede borgere, hvis priserne på cigaretter og alkohol bliver sat markant op?",
        answer: "En fordel er, at færre unge vil begynde at ryge og drikke, hvis det bliver meget dyrt. Unge har ikke så mange penge, så de reagerer hurtigt på højere priser. På lang sigt vil samfundet spare mange penge på sygehuse og behandling, og staten får flere penge i afgifter. En ulempe er, at nogle vil købe billige cigaretter og alkohol i Tyskland eller på det sorte marked. Nogle synes også, at staten blander sig for meget.",
        followAnswer: "Jeg tror, det kan have både positive og negative følger. Nogle lavtlønnede vil måske holde op med at ryge eller drikke mindre, og så bliver deres helbred bedre. Men dem, der er meget afhængige, vil sandsynligvis fortsætte og bruge en større del af deres løn på cigaretter. Så får de færre penge til mad, fritid og børnene, og det kan gå ud over livskvaliteten for hele familien. Derfor bør man også tilbyde gratis rygestopkurser."
      },
      conclusion: ""
    }
  );
})();
