// Prøve i Dansk 3, maj-juni 2021 – læseforståelse, transcribed from the exam papers
// (Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Dansk teater" nr. 14;
// Læseforståelse 2: opgavehæfte nr. 17 and teksthæfte nr. 16).
// The answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur passed on to us (delprøve 1 items 3, 9, 12).
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures from the tekstsamling are left out (their captions are not needed for any answer).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points
// (omregningstabel sommer 2021: 37-36 = 12, 35-33 = 10, 32-26 = 7, 25-22 = 4, 21-19 = 02, 18-10 = 00, 9-0 = -3).
// The app scores every question as 1, so 2A counts half as much here as at the exam.
//
// Also: skriftlig fremstilling (produktionsnr. 18) and mundtlig kommunikation delprøve 2
// (picture sheets, produktionsnr. 20, illustrations by Niels Roland, cropped into images/pd3-2021m/,
// and the censor- og eksaminatorhæfte for the oral exam, produktionsnr. 21, which gives the
// examiner's opening line, the obligatory questions and the suggested follow-up questions; unlike 2023
// it has no lead-in sentences before the obligatory questions).
// Task wording, the friend's e-mail, the questions and the chart labels are copied from the papers.
// The chart values are read off the bar chart (ca.-values). All model answers are our own
// (the papers have none).

(function () {
  const G = "PD3 maj-juni 2021";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const teater = {
    id: "pd3-21m-1", group: G, real: true,
    title: "Delprøve 1 – Dansk teater",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Dansk teater. Brug indholdsfortegnelsen. Svar præcist og kort på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Anmeldelser af forskellige teaterforestillinger … 3
   Cykelmyggen Egon, Østre Gasværk Teater … 3
   Erasmus Montanus, Aarhus Teater … 4
   Midt om natten, Tivolis Koncertsal … 4
   Besat, Bornholms Teater i Rønne Theater … 5
Tre danske teatre … 7
   Det Kongelige Teater … 7
   Aarhus Teater … 8
   Bornholms Teater … 9
Rundvisninger på tre danske teatre … 12
   Det Kongelige Teater – rundvisninger i alle tre huse … 12
   Aarhus Teater – bag kulissen … 14
   Guidet tur i Rønne Theater … 14
Danske teaterpriser … 16
   Kjeld Abell-prisen … 16
   Teaterpokalen … 16
   Danske Dramatikeres Hæderspris … 16
   Årets Reumert … 17

**ANMELDELSER AF FORSKELLIGE TEATERFORESTILLINGER**

**Cykelmyggen Egon, Østre Gasværk Teater**
Af Signe Larsen

Den klassiske danske børnebog om cykelmyggen Egon er blevet til et teaterstykke. Flemming Quist Møller, forklædt som en sommerfugl, er på scenen og læser op af sin berømte billedbog fra 1967, mens en skuespiller suser rundt på scenen og laver smarte tricks med sin artistcykel. Det er egentlig en simpel historie: Egon møder en sød dansemyg, der hedder Dagmar, han får hende ud af kæmpeedderkoppens net, og de lever lykkeligt til deres dages ende.

Det er alt det, der er at se på i forestillingen, der gør den sjov og flot. Det er eventyrlige dekorationer og farvestrålende kostumer. Og det er forfatteren Flemming Quist Møller, der fortæller undervejs fra sin store bog og bliver et karismatisk centrum for mylderet af små fortællinger om dyrene omkring ham. Hele menageriet af venlige og uvenlige væsener. Det er sjovt og flot.

**Noget for alle**
Det er en rigtig familieforestilling. Til de yngste er scenen befolket af flotte insekter taget lige ud af billedbogen. De voksne vil more sig over de to robotdrenge, der som vagtbier kører en sand ordflom over ordet bi: ”Bilisterne bistår biblen og bisætter… – altså, Fy og Bi, gider I lige!” Endelig vil bedsteforældrene glæde sig ved Flemming Quist Møllers dejlige oplæsning, og alle vil grine sammen, når Møgbillen og Røvbillen slår kæmpeprutter: Prut er altid en vinder på teaterscenen. Teateret anbefaler en minimumsalder på tre år, fordi forestillingen varer halvanden time, men der er høje lyde, så jeg vil anbefale en minimumsalder på fem år og selvfølgelig, at børn ser forestillingen sammen med deres familie.

**Erasmus Montanus, Aarhus Teater**
Af Pernille Hermann

Erasmus Montanus er en komedie i fem akter skrevet i 1723 af den dansk-norske forfatter Ludvig Holberg. Det er fortællingen om bondedrengen Rasmus Berg, der har studeret i København og vender tilbage til landsbyen (og sin forlovede) som et nyt og bedrevidende menneske, der sætter spørgsmålstegn ved alt det, som landsbyboerne opfatter som sandheder. Han kalder sig nu Erasmus Montanus. Han skaber uro i landsbyen, fordi han bliver ved med at påstå, at jorden er rund. Til sidst bliver Erasmus dog nødt til offentligt at sige, at jorden er flad som en pandekage, da det er den eneste måde at slippe for at blive soldat på og få sin elskede.

**Aktuel historie**
Historien i Aarhus Teaters nye opsætning er stadig den samme, selvom den har fået et par twist og tilføjelser. Holbergs komedie er kendt for sin tvetydighed. Hvem griner publikum af? Af de lærde, bønderne eller sig selv? Denne tvetydighed har Aarhus Teater i samarbejdet med Christian Lollike ført up to date i en alternativ version af Holbergs klassiker: I sin nyfortolkning erstatter Christian Lollike Holbergs hyggehumor og tanker om jordens form med en satirisk tone og et tema om danskhed. Det er meget fint, at dette tema er med i stykket, fordi det gør stykket mere aktuelt.

**Midt om natten, Tivolis koncertsal**
Af Stina Hansen

Musicalen Midt om natten er baseret på filmen af samme navn fra 1984. Filmen er en af de mest sete danske biograffilm, og Kim Larsens album med sangene er et af de bedst sælgende danske album nogensinde. Det er altså et kulturklenodie af de helt store, der her er lavet som musical. Det lykkes heldigvis godt. Musicalen indeholder nogle af Kim Larsens og Gasolins største hits og giver publikum et gensyn med karakterer som Arnold, der i filmen spilles af Erik Clausen, og Benny, som i filmen portrætteres af Kim Larsen.

**Gode skuespillere i forvirrende historie**
Historien i musicalen er en lille smule forvirrende, fordi der er en ung mand, der i nutiden ser tilbage på, hvad der skete engang, og handlingen kommer til at hoppe for meget frem og tilbage i tiden. Det er tydeligt, at skuespillerne ikke altid kan spille ligesom personerne fra filmen, men når det er en musical, så synes jeg, at det vigtigste er, hvordan skuespillerne synger. Og de synger godt, så derfor synes jeg, at det er gode skuespillere, der er valgt til rollerne. Det er jo sangene, der bærer forestillingen, hvilket man også kan mærke, når publikum rejser sig og synger med.

**Besat, Bornholms Teater i Rønne Theater**
Af Cecilie Olsen

**Historisk teaterstykke**
I maj 1945 jublede de fleste danskere over freden efter Anden Verdenskrig, men mange glemte Bornholm. Tyskerne var stadig på øen, og de ville kun overgive sig til englænderne, der dog ikke var til stede. For at tvinge tyskerne til at overgive sig, bombede russerne Rønne og Nexø. 90 procent af de to byer blev ødelagt, og ti danskere omkom. Russerne besatte Bornholm og forlod først øen i april 1946. Det er disse barske, historiske kendsgerninger, som Bornholms Teater har lavet et teaterstykke om, blandt andet fordi teatret ønsker at fortælle specielt yngre generationer om den komplicerede fortid.

**Der er spændinger i luften**
Her er beskrevet et fiktivt møde mellem fire personer: en moden, dansk kvinde, hendes voksne datter og heroverfor en moden, tysk militærmand og en ung, russisk soldat. Der er spændinger i luften fra første sekund – allerede inden soldaterne ankommer. Datteren er utilfreds med moderen. Hvorfor var hun så venlig over for tyskerne igennem alle fem år? Og bølgerne kommer til at gå højt, da tyskeren og efterfølgende russeren søger tilflugt i det sommerhus, hvor de to kvinder har gemt sig.

Der er noget at tænke over, noget at diskutere efter forestillingen og først som sidst nogle overvejelser at tage med hjem. Besat er den ideelle forestilling for et egnsteater: Et lokalt emne poleres og løftes op til underholdning med indhold og holdninger. Men Besat er faktisk en del af hele den danske historie, og stykket formidler historien godt.

**TRE DANSKE TEATRE**

**Det Kongelige Teater**

**Huse og scener**
Nationalscenen på Kongens Nytorv var ved sin begyndelse i 1748 lig med Skuespillet, hvor Ludvig Holberg med sine komedier udgjorde kernen i et nyt dansksproget teaterrepertoire. Hurtigt kom også balletten, operaen og kapellet til, og de udgør tilsammen Det Kongelige Teater. I dag består Det Kongelige Teater af tre huse: Hovedbygningen på Kongens Nytorv, Operaen på Holmen samt Skuespilhuset. Der er i alt seks scener.

**Skuespilhusets tre scener**
Teater og skuespil har hjemme i Skuespilhuset, der ligger ved havnen for enden af Sankt Annæ Plads og råder over én stor og to mindre scener – Store Scene med plads til 640 tilskuere, Mellemgulvet med plads til 200 tilskuere og Lille Scene med plads til godt 100 tilskuere. Den kunstneriske ambition på Store Scene er at skabe forestillinger, der henvender sig bredt med nye fortolkninger af klassikere som Shakespeare og Holberg, nye familieforestillinger og nye musikforestillinger. De mindre scener er dedikeret til udvikling af danske og udenlandske fortællinger, og det er også her, man kan opleve workshops og visninger af stykker under udvikling.

**Særlige behov**
Nedenfor finder du information om adgangsforhold og handicapfaciliteter på Det Kongelige Teaters scener. På alle scener kan du låne barnesæder, så mindre børn kan få et godt udsyn til scenen. Spørg blot vores kontrollører, så hjælper de med at finde et barnesæde.

**Skuespilhusets Store Scene**
Adgangsforhold: Der er niveaufri adgang via Skuespilhusets foyer til parterre.
Elevator: Elevatoren ved garderoben midt i foyeren kører til 1. balkon. Bemærk, at der ikke er adgang med elevator til 2. balkon.
Handicapparkering: Der er to handicappladser for enden af Sankt Annæ Plads, tæt ved Skuespilhuset.
Kørestolspladser: På Skuespilhusets Store Scene er der reserveret to faste kørestolspladser, som kan bestilles senest en uge før forestillingen gennem Det Kongelige Teaters Kundeservice på tlf. 33 69 69 69.

**Operaens Store Scene**
Adgangsforhold: Der er niveaufri adgang via alle indgange.
Elevator: Der er elevatorer, som kører til alle etager, i begge sider.
Kørestolspladser: På Operaens Store Scene er der reserveret fire faste kørestolspladser, som kan bestilles senest en uge før forestillingen gennem Det Kongelige Teaters Kundeservice på tlf. 33 69 69 69.

**Gamle Scene**
Adgangsforhold: Adgang fra Kongens Nytorv kan ske via kørestolsrampe på venstre side af indgangsdørene. Både den ydre og den indre indgangsdør helt til venstre åbnes automatisk ved tryk på knap.
Elevator: Der er elevator i venstre side (kongesiden), som kører til Parket, Balkon, 1. etage tv., og 2. etage, men ikke til galleriet og 1. etage th. (på 1. etage er der ikke niveaufri adgang til modsatte side).
Kørestolspladser: Kørestolspladserne på Gamle Scene er placeret på Parket i venstre side, række 16 og 17. Der er reserveret to faste kørestolspladser, som kan bestilles senest en uge før forestillingen gennem Det Kongelige Teaters Kundeservice på tlf. 33 69 69 69.

Indehavere af et officielt ledsagerkort, udstedt af Danske Handicaporganisationer, Dansk Blindesamfund eller tilsvarende organisation fra et EU land, tilbydes en gratis (+ serviceomkostninger) ledsagerbillet til Det Kongelige Teaters egne forestillinger. Ønsker du at bestille en gratis ledsagerbillet i forbindelse med køb af kørestolsplads, skal du kontakte Det Kongelige Teaters Kundecenter på tlf. 33 69 69 69.

Bearbejdet efter https://kglteater.dk/om-os/kunstarter/det-kongelige-skuespil/?section=27663, hentet 24.04.20
Bearbejdet efter https://kglteater.dk/brug-teatret/i-teatret/sarlige-behov/, hentet 24.04.20

**Aarhus Teater**

**Huset og scenerne**
Aarhus Teater er Danmarks største landsdelsscene og opført i slutningen af 1890’erne på initiativ af en kreds af teaterinteresserede borgere i Aarhus. Bygningen, som er en arkitektonisk perle i jugendstil, blev indviet 15. september 1900 og har været fredet siden 1981. Teatret er bevaret i sin oprindelige pragt som kulturelt kraftcenter midt i Danmarks næststørste by.

Aarhus Teater er tegnet af arkitekten Hack Kampmann, manden bag flere af sin tids mest markante offentlige bygninger i Aarhus. Der er sket tilbygninger på teatret gennem tiden, og i dag er der 4 scener: Store scene og de mindre scener Scala, Stiklingen og Studio.

**Store Scene, store drømme**
I tilskuerrummet til Store Scene møder man Aarhus Teaters stolthed, som har givet det tilnavnet ’Det gyldne hus’. Her er forgyldte motiver fra naturens verden: planter, blomster, fugle og alfer. Rummet er bygget op over farverne hvid, guld og grøn, med loftets blå som samlende farve.

**I teatret**
Der er indgang til alle scener fra Teatergaden.

**Dresscode**
Du behøver ikke finde de lange silkehandsker og butterflyen frem for at komme ind på Store Scene. Der er ingen krav til påklædning på Aarhus Teater.

**Når dørene åbner**
Når dørene åbner, er det de ydre døre ud til Teatergaden. Kom i god tid, så du kan nyde vores smukke bygning indefra en halv time før forestillingens start. Her er der mulighed for at hænge overtøj og store tasker i vores garderober, bestille pausedrinks og få programmer til dagens forestilling.

Til Store Scene skal man benytte dørene ved hovedtrappen. Til de mindre scener Scala, Stiklingen og Studio er det indgangen til højre for hovedindgangen til Store Scene, man skal gå ind ad, og man skal forbi vores billetservice for at få adgang til foyeren og disse scener. For disse scener gælder det endvidere, at dørene ind til selve teatersalen først åbner 10 minutter inden forestillingen starter.

**Hvornår lukker dørene?**
Vores forestillinger starter præcist, og dørene lukker derfor også ved forestillingens start. En klokke varsler, hvornår det er ved at være tid til at gå ind i salen.

Bearbejdet efter https://www.aarhusteater.dk/om-teatret/om-huset/, hentet 24.04.20
Bearbejdet efter https://www.aarhusteater.dk/praktisk-info/find-vej-faq/, hentet 24.04.20

**Bornholms Teater**

**Samarbejdspartnere**
Bornholms Teater er bosat på det historiske Rønne Theater fra 1823. Bornholms Teater er Bornholms egnsteater. Bornholms Teaters ambition er at tilbyde det bornholmske publikum teaterkunst af højeste kvalitet. Denne ambition forfølger vi gennem produktioner af teaterforestillinger, der sætter bornholmske temaer i centrum, og gennem samarbejder med lokale foreninger, institutioner og kunstnere på Bornholm.

Bornholms Teater er bornholmernes teater, men vi har også ambitioner, der rækker udover Bornholm. Med hensyn til turneforestillinger til andre dele af landet samarbejder Bornholms Teater med andre professionelle teatre i Danmark, ligesom nogle af vores forestillinger også vises i udlandet – og vi er på den måde med til at gøre reklame for Bornholm.

**Revy og teater om Bornholm**
Bornholms Teater producerede i mange år den populære Bornholmerrevy, men fra sommeren 2015 til og med 2017 blev revyen erstattet af en række Holberg-forestillinger. Nu står der igen et nyt repertoire med forestillinger om Bornholm på plakaten i form af bl.a. Bornholmerkrøniken, der er nyskrevet dansk dramatik med et bornholmsk fokus og afsæt.

**Rønne Theaters scener og pladser**
Rønne Theater er kendt for den fine gamle scene og sal, hvor der kan sidde op til 306 personer. Men teatret råder over hele fire andre scener, der kan bruges til forskellige typer arrangementer og forestillinger. Scenerne er følgende:

Gamle scene – den største sal på Rønne Theater med plads til 306 personer. Ofte spilles der dog med udvidet scenegulv, hvor orkesterpladserne bliver sløjfet, og så mindskes kapaciteten til ca. 260 personer.
Ny scene – en blackbox i sidebygningen fra 2010 med kapacitet til ca. 45 personer. Kan mørklægges.
Loftscenen – et lokale ovenpå cafeen med kapacitet til ca. 50 personer. Kan mørklægges.
Caféscenen – som navnet antyder, kan vi omdanne caféen til en intimscene med plads til ca. 50 personer.
Havescenen – takket være en skydedør i tilbygningen kan Ny scene også fungere som en friluftsscene, hvor publikum er placeret i haven. Kapacitet til ca. 80 personer.

Pladserne i den gamle sal er nummererede, mens de i de øvrige sale typisk vil være unummererede. I Rønne Theaters gamle sal er de fleste pladser kategori A, som angiver pladser med godt udsyn. Kategori B og C er pladser som f.eks. parterre, ’søjlepladser’ og 2. række på sidebalkonerne, hvor udsynet ikke altid er optimalt.

Bearbejdet efter https://bornholmsteater.dk/da/om-os, hentet 24.04.20
Bearbejdet efter https://bornholmsteater.dk/da/praktisk-info, hentet 24.04.20

**RUNDVISNINGER PÅ TRE DANSKE TEATRE**

**Det Kongelige Teater – rundvisninger i alle tre huse**
Vi har rundvisninger i alle tre huse. Oplevelserne er meget forskellige. På Gamle Scene er der lagt vægt på det historiske tilbageblik og værkstederne, og i Operaen og Skuespilhuset er der fokus på de arkitektoniske rammer og husenes imponerende tekniske faciliteter.
Rundvisninger for grupper kan arrangeres alle ugens dage, afhængigt af prøveaktivitet på scenen. Formiddagsrundvisninger starter kl. 09:30 eller kl. 10:00. Eftermiddagsrundvisninger kl. 16:30 eller kl. 17:00.

Læs mere om de forskellige typer rundvisninger herunder, eller kontakt os på rundvisning@kglteater.dk eller tlf. 33 69 69 78 (hver dag fra kl. 10-14). Rundvisningerne tager 75 minutter og gennemføres på kunstens præmisser. Prøver, der trækker ud, eller sceneteknik, der kræver akut justering, kan bevirke, at vi ikke kan gå den vante rute. Rundvisningerne foregår på dansk.

**Rundvisning i Operaen**
Oplev Operaens smukke foyer, der med sine rene linjer, Olafur Eliassons lysskulpturer og udsigt over Københavns Havn omfavner den blanke ahornskal omkring Store Scene. Se Per Kirkebys bronzerelieffer og Per Arnoldis Opera-bomærke støbt ind i foyergulvet.
Kom med ind i salen og om bag scenen, hvor de enorme, flytbare scenefelter gør det muligt at opføre flere forskellige forestillinger samme dag. Se kontrasten fra Store Scene til Takkelloftet, hvor scenens fleksibilitet er i centrum, og hvor Tal Rs moderne abstraktion pryder foyeren.

**Rundvisning i Skuespilhuset**
Oplev Skuespilhuset, Store Scenes intime grottestemning inspireret af den italienske renæssancescene og få indblik i tankerne bag bygningens arkitektur og belysning. Kom med bag scenen, hvor kulisserne skiftes ud og bygges op, mens belysningen til aftenens forestilling justeres. Se Det Røde Rum og Lille Scenes sorte rum, hvor hverken scene eller tilskuerpladser er permanente.

**Rundvisning på Gamle scene**
Kom med på opdagelse på Det Kongelige Teaters Gamle Scene. Oplev den helt særlige stemning, de historiske loftsmalerier, svungne engle og den traditionelle store prismelysekrone i teatersalen. Kom med bag scenen, hvor sceneteknikken arbejder, og besøg skræddersalen, hvor de eventyrlige kostumer til teaterets forestillinger bliver lavet, og hvor kun fantasien sætter grænser. På Gamle scene får I også et kig ind i H.M. Dronning Margrethe 2.’s private salon og loge.

Bearbejdet efter https://kglteater.dk/shows/?f-type=rundvisning, hentet 24.04.20

**Aarhus Teater – bag kulissen**

**Se scener og værksteder**
Sæsonen igennem er der på udvalgte dage offentlige rundvisninger. En rundviser fortæller om husets historie, om arkitekturen og udsmykningen. Turen går normalt rundt i hele huset – til de forskellige scener og værksteder. Rundvisninger på teatret sker under hensyntagen til kunsten. Der kan være prøver på scener, der medfører, at vi ikke kan garantere, at turen går forbi alle scener.

Rundvisningen starter ved teatrets hovedtrappe i Teatergaden og varer ca. 75 min. Entreen er 65 kr. (50 kr. for skoleelever og studerende).

OBS! Vi gør opmærksom på, at rundvisningen ikke er egnet til gangbesværede, da turen går ad trapper.

**Skræddersyede rundvisninger**
Større grupper kan træffe aftale om rundvisning på teatret på udvalgte dage. Det koster 60 kr. pr. deltager i grupperundvisninger eller et minimumsbeløb på 1500 kr. For skoleelever og studerende 50 kr. pr. deltager eller et minimumsbeløb på 1000 kr.

Du kan træffe aftale om grupperundvisninger på arrangement@aarhusteater.dk

Vi tilbyder desuden grupperundvisninger i forbindelse med forestillinger og/eller middag på teatret.

Bearbejdet efter https://www.aarhusteater.dk/det-sker/rundvisninger, hentet 24.04.20

**Guidet tur i Rønne Theater**
Rønne Theater er et arbejdende teater, og lokalerne er derfor ofte optaget af forskellige aktiviteter. Samtidig ved vi, at der er en stor interesse for at besøge og høre historien om det gamle teater, hvorfor teatret tilbyder guidede rundvisninger, når det er muligt.

**Rundvisninger – grupper og individuelle**
Rundvisningerne er primært målrettet grupper, og disse rundvisninger kan bestilles og aftales hos administrator Helle Lindblad på Bornholms Teater på tlf. 569500732.

Rundvisningerne koster 25 kr. per person (max. ca. 25 personer).
Man skal mindst være 10 personer for at få en grupperundvisning.
Varighed: ca. 60-90 min. – afhænger af gruppens spørgelyst.

I sommerhalvåret gennemføres gratis individuelle rundvisninger mandage kl. 14.00, hvor bestilling ikke er nødvendig. Perioden er fra 1. juli til og med 14. oktober.

Disse rundvisninger er kortere end grupperundvisningerne og kan være begrænset af andre aktiviteter i teatret som fx prøver på scenen. Varighed ca. 45 min.

Bearbejdet efter https://bornholmsteater.dk/da/roenne-theater/guidede-ture/, hentet 24.04.20

**DANSKE TEATERPRISER**

**Kjeld Abell-prisen**
Prisen er opkaldt efter den danske dramatiker og teatermaler Kjeld Abell (1901-1961), der blandt andet er kendt som fornyer af dansk dramatik og revy i 1930’erne.

Første gang, han fik et stykke opført på Det kongelige teater, var i 1934 med balletten Enken i spejlet, men han er især berømt for skuespillene Melodien der blev væk fra 1935 og Anna Sophie Hedvig fra 1938, hvoraf sidstnævnte er optaget i Kulturkanonen fra 2006.

Kjeld Abell-prisen bliver uddelt af Det Danske Akademi, der bestyrer Kjeld Abells Mindefond, som blev oprettet efter Abells død i 1961. Den bliver uddelt hvert andet eller tredje år i forbindelse med Det danske Akademis årsfest. Kjeld Abell-prisen bliver først og fremmest uddelt som belønning til en person, der har gjort en indsats inden for teater- og filmkunst. Prisen er i dag på 50.000 kr. og blev første gang uddelt i 1976. Midlerne stammer fra en indsamling, som blev foretaget efter Kjeld Abells død 5. marts 1961.

Bearbejdet efter Kristensen, Sven Møller, hentet 10. juli 2020 fra https://biografiskleksikon.lex.dk/Kjeld_Abell og Ingemann, Sine, hentet 10. juli 2020 fra https://teaterleksikon.lex.dk/Kjeld_Abell-prisen

**Teaterpokalen**
Danmarks ældste teaterpris hedder Teaterpokalen. Den er siden 1933 blevet uddelt årligt i december måned. Vinderen vælges af Foreningen af Danske Teaterjournalister, som uddeler i alt tre priser: Teaterpokalen (50.000 kr.), Teaterkatten (25.000 kr.) og Initiativprisen (15.000 kr.).

Teaterpokalen gives hvert år til en scenekunstner, der i årets løb har ydet en særlig præstation samt igennem en årrække har bidraget positivt til scenekunsten. Den er udformet som en sølvskål designet af Manuel Sjødahl, der overrækkes sammen med det kontante beløb på 50.000 kroner. Foreningen overrækker desuden instruktørprisen Teaterkatten, som er udformet som en sølvkniv, designet af Manuel Sjødahl, og et kontantbeløb på 25.000 kroner, samt Initiativprisen bestående af et kontantbeløb på 15.000 kroner, der gives for en scenisk nyskabelse eller et særligt initiativ i dansk scenekunst.

Bearbejdet efter Ingemann, Sine, hentet 10. juli 2020 fra https://teaterleksikon.lex.dk/Teaterpokalen

**Danske Dramatikeres Hæderspris**
Hædersprisen blev oprettet i anledning af Danske Dramatikeres Forbunds 50-års jubilæum i 1956 og tildeles uregelmæssigt et aktivt medlem af Danske Dramatikeres Forbund, der har ydet et dramatisk forfatterskab af værdi. I særlige tilfælde kan prisen dog tildeles en fortrinsvis yngre dramatiker, der endnu ikke har kunnet opnå medlemskab.

Bearbejdet efter Ingemann, Sine, hentet 10. juli 2020 fra https://teaterleksikon.lex.dk/Danske_Dramatikeres_Hæderspris

**Årets Reumert**
Årets Reumert er opkaldt efter Poul Reumert (1883-1968). Han var en af de betydeligste skuespillere i 1900-tallets danske teater. I store dele af sin karriere var han ansat ved Det Kongelige Teater.

Årets Reumert uddeles i 16 kategorier – blandt andre Årets hæderspris, Årets forestilling og Årets kvindelige og mandlige hovedrolle. Prisuddelingen dækker hele scenekunsten i Danmark. Den blev indstiftet i 1998. Juryen består af anmeldere og teaterfagfolk. Prismodtagerne modtager en statuette samt penge. Årets hæderspris på 200.000 kr. har en særlig betydning ved uddelingen. Den går nemlig til en scenekunstner, der ”på enestående vis har bidraget til udvikling af teaterkunsten i Danmark”. Pr. 2016 er pengebeløbene følgende: Hædersprismodtagerne modtager 200.000 kr., talentprismodtagerne modtager 35.000 kr. og øvrige prismodtagere i øvrige kategorier modtager 40.000 kr. Formålet med Årets Reumert-priser er at sætte fokus på den levende scenekunst – både for at hædre nogle af Danmarks største scenekunstnere og for at stimulere interessen for det levende teater i Danmark.

Bearbejdet efter Kistrup, Jens, hentet 10. juli 2020 fra https://denstoredanske.lex.dk/Poul_Reumert og Lyding, Henrik, hentet 10. juli 2020 fra https://denstoredanske.lex.dk/Reumert`,
    questions: [
      // Anmeldelser af forskellige teaterforestillinger
      { type: "short", n: 1, q: "(Anmeldelser af forskellige teaterforestillinger) Signe Larsen mener, at der er noget for alle i Cykelmyggen Egon. Hvorfor anbefaler hun en minimumsalder på fem år i stedet for tre år?",
        accept: uniq(combos(["", "fordi der er", "der er", "fordi", "på grund af", "pga", "fordi forestillingen har", "forestillingen har", "fordi der kommer", "der kommer"], ["", "nogle", "mange", "meget"], ["høje lyde", "høj lyd", "høje lyde i forestillingen", "høje lyde i stykket"])) },
      { type: "short", n: 2, q: "(Anmeldelser af forskellige teaterforestillinger) Hvilket tema synes Pernille Hermann gør nyfortolkningen af Erasmus Montanus til en aktuel historie?",
        accept: uniq(combos(["", "temaet", "temaet om", "tema om", "et tema om", "temaet er", "det er temaet"], ["danskhed", "danskheden", "dansk identitet"])) },
      { type: "short", n: 3, q: "(Anmeldelser af forskellige teaterforestillinger) Hvorfor mener Stina Hansen, at skuespillerne i Midt om natten er gode til deres roller?",
        accept: uniq([
          ...combos(["", "fordi", "da", "for"], ["de", "skuespillerne", ""], ["synger godt", "synger rigtig godt", "er gode til at synge", "kan synge godt", "synger flot"]),
          ...combos(["", "fordi"], ["det vigtigste er", "det vigtigste i en musical er", "det vigtigste ved en musical er"], ["hvordan skuespillerne synger", "hvordan de synger", "at skuespillerne synger godt", "at de synger godt", "sangen", "hvordan der bliver sunget"]),
          "det vigtigste er hvordan skuespillerne synger og de synger godt", "det vigtigste er hvordan de synger og de synger godt"
        ]) },
      { type: "short", n: 4, q: "(Anmeldelser af forskellige teaterforestillinger) Besat er et teaterstykke, der fortæller om barske, historiske kendsgerninger. Hvem fremhæver Bornholms Teater som en vigtig målgruppe for stykket?",
        accept: uniq(combos(["", "de", "specielt", "specielt de", "især", "især de", "den"], ["yngre generationer", "yngre", "yngre generation", "unge generationer", "unge generation", "unge", "unge mennesker", "yngre mennesker", "de unge", "unge bornholmere", "yngre bornholmere", "yngre generationer på bornholm"])) },
      // Rundvisninger på tre danske teatre
      { type: "short", n: 5, q: "(Rundvisninger på tre danske teatre) På en rundvisning på Det Kongelige Teaters Gamle scene kan man komme med bag scenen. Hvad hedder det sted, hvor kostumerne til forestillingerne bliver lavet?",
        accept: uniq(combos(["", "i", "det hedder", "stedet hedder", "den hedder"], ["skræddersalen", "skrædder salen", "skræddersal", "skrædder sal"])) },
      { type: "short", n: 6, q: "(Rundvisninger på tre danske teatre) På en rundvisning på Aarhus Teater kommer man normalt rundt i hele huset. I hvilke situationer går turen ikke forbi alle scener?",
        accept: uniq([
          ...combos(["", "når der er", "hvis der er", "der kan være", "når der kan være", "hvis der kan være", "når der holdes", "hvis der holdes", "under", "ved"], ["prøver", "prøver på scener", "prøver på scenerne", "prøver på scenen", "prøver på nogle scener", "prøver på en scene", "en prøve", "en prøve på scenen"]),
          ...combos(["", "under", "af", "ved", "på grund af", "pga"], ["hensyntagen til kunsten", "hensyn til kunsten", "hensyntagen til kunsten og prøver på scener", "hensyntagen til kunsten fx prøver på scener"]),
          "prøver på scener og hensyntagen til kunsten", "prøver og hensyntagen til kunsten"
        ]) },
      { type: "short", n: 7, q: "(Rundvisninger på tre danske teatre) Grupperundvisningerne på Rønne Theater har forskellig varighed. Hvad har betydning for, hvor lang tid de varer?",
        accept: uniq([
          ...combos(["", "det afhænger af", "det kommer an på", "det er", "afhænger af"], ["", "gruppens", "deltagernes"], ["spørgelyst", "spørgelysten"]),
          "hvor spørgelystne gruppen er", "hvor spørgelysten gruppen er", "hvor mange spørgsmål gruppen stiller", "hvor mange spørgsmål de stiller", "hvor meget gruppen spørger", "hvor meget de spørger"
        ]) },
      // Danske teaterpriser
      { type: "short", n: 8, q: "(Danske teaterpriser) Hvilket år blev Kjeld Abell-prisen uddelt første gang?",
        accept: uniq(combos(["", "i", "i år", "år", "den blev uddelt første gang i", "første gang i"], ["1976"])) },
      { type: "short", n: 9, q: "(Danske teaterpriser) Teaterpokalen uddeles sammen med et kontantbeløb på 50.000 kr. Hvilket materiale er Teaterpokalen lavet af?",
        accept: uniq([
          ...combos(["", "af", "den er lavet af", "den er af", "lavet af"], ["sølv", "sølv designet af manuel sjødahl"]),
          ...combos(["", "den er udformet som", "udformet som", "den er", "som"], ["", "en"], ["sølvskål", "sølv skål", "sølvskål designet af manuel sjødahl"])
        ]) },
      { type: "short", n: 10, q: "(Danske teaterpriser) Årets Reumert er en teaterpris, der uddeles i 16 kategorier. Hvilken af priserne har en særlig betydning?",
        accept: uniq(combos(["", "den", "det er", "det er den"], ["", "årets"], ["hæderspris", "hædersprisen", "hæderspris på 200 000 kr", "hæderspris på 200000 kr", "hæderspris på 200 000 kroner"])) },
      // Tre danske teatre
      { type: "short", n: 11, q: "(Tre danske teatre) Hvornår kan man senest bestille plads til en kørestol på Det Kongelige Teaters Gamle Scene?",
        accept: uniq(combos(["", "senest", "man kan senest bestille", "det kan man senest"], ["en uge", "1 uge", "én uge", "syv dage", "7 dage"], ["før", "inden"], ["", "forestillingen", "forestillingen starter", "forestillingen begynder"])) },
      { type: "short", n: 12, q: "(Tre danske teatre) Dørene til Aarhus Teater åbner ud mod Teatergaden. Hvad skal man forbi for at få adgang til de mindre scener?",
        accept: uniq([
          ...combos(["", "man skal forbi", "forbi", "skal forbi"], ["", "teatrets", "deres", "vores"], ["billetservice", "billetservicen", "billet service", "billet servicen", "billetservice og foyeren", "billetservicen og foyeren"]),
          ...combos(["", "man skal forbi", "forbi", "gennem", "igennem", "man skal gennem", "ind i"], ["foyeren", "foyer", "en foyer"])
        ]) },
      { type: "short", n: 13, q: "(Tre danske teatre) Hvem samarbejder Bornholms Teater med om turneforestillinger?",
        accept: uniq(combos(["", "med", "de samarbejder med", "samarbejder med"], ["", "andre"], ["", "professionelle"], ["teatre", "teatre i danmark", "danske teatre", "teatrer", "teatre i resten af danmark", "teatre i resten af landet"])) },
      { type: "short", n: 14, q: "(Tre danske teatre) Bornholms teater laver traditionelt revy og teater om Bornholm. Hvad blev revyen i nogle år erstattet af?",
        accept: uniq(combos(["", "af", "den blev erstattet af", "revyen blev erstattet af"], ["", "en række", "nogle", "flere"], ["holberg", "holberg forestillinger", "holbergforestillinger", "holbergs forestillinger", "holberg stykker", "holbergstykker", "forestillinger af holberg", "stykker af holberg", "holbergs komedier", "holberg komedier"])) },
      { type: "short", n: 15, q: "(Tre danske teatre) Rønne Theater er kendt for den fine gamle scene. Hvor mange personer kan der sidde der, hvis der spilles med udvidet scenegulv?",
        accept: uniq(combos(["", "ca", "cirka", "omkring", "ca cirka", "op til", "der kan sidde ca"], ["260", "to hundrede og tres"], ["", "personer", "mennesker", "pers", "tilskuere"])) }
    ]
  };

  const klima = {
    id: "pd3-21m-2", group: G, real: true,
    title: "Delprøve 2A – Hvem har ansvaret for klimaet?",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 40,
    instruction: "Læs teksterne Klimavenlig hverdag og Klima og ansvar. Herunder er der syv spørgsmål til de to tekster. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1: Klimavenlig hverdag**

Flere og flere familier vælger at tage mere hensyn til miljøet, end de har gjort før. Nogle træffer små beslutninger, mens andre lægger hele deres livsstil om.

Marianne Andresen står i køkkenet sammen med sin yngste søn og snitter grøntsager. De skal have en pastaret, men den bliver uden kød, og grøntsagerne er lokale. For fire år siden besluttede Marianne og hendes mand, Torben Bruun, at lægge deres livsstil helt om. Aften efter aften kunne de i fjernsynet se på og høre om konsekvenserne af den store CO2-udledning, som specielt vestlige lande har haft i de sidste hundrede år. Men mens mange måske venter på en politisk løsning på klimaproblemerne, så valgte Marianne og Torben at tage et personligt ansvar. De har byttet bilen ud med pendlerkort og cykler, har skåret ned på kødet og har købt færre flybilletter end før.

”Selvom der er ambitiøse, politiske mål for en løsning af klimaproblemerne, mener både min mand og jeg, at vi også må tage et personligt ansvar. Om ti år er det måske for sent! Vi ønsker også at være gode rollemodeller for vores børn ved selv at gøre noget. Vi synes, det er vigtigt, at børn lærer, at man skal gøre noget, når situationen er så alvorlig, som den er nu,” siger parret.

**Ny livsstil, nye vaner**
Men én ting er at få en god idé, en anden ting er at føre den ud i livet. ”Vi vidste godt, at det ville blive svært, og at noget ville blive sværere end andet. Men vi blev overraskede over, hvad der egentlig var svært i praksis. Selv har jeg altid taget bilen til og fra arbejde, og jeg troede ikke, jeg kunne vænne mig til toget. Men det kunne jeg, og det gik endda hurtigt. Det har været sværere for mig at undvære kød på middagsbordet, men jeg er efterhånden ved at vænne mig til det. Derimod har jeg stadig svært ved, at vi må begrænse, hvilke lande vi holder ferie i. Vi flyver nemlig ikke længere, når vi skal på ferie, så vi rejser kun i Europa og ikke til eksotiske lande langt væk, og det savner jeg,” siger Torben Bruun.

Her adskiller han sig nok fra flertallet. For de fleste familier vil det sikkert være madvanerne, der er sværest at lave om på, ligesom det kan være svært at vænne sig til offentlig transport, hvis man har været vant til at køre selv. Til gengæld er det måske ikke så vigtigt, om sommerferien går til Berlin eller Bangkok. Det vigtigste er som regel, at man rejser sammen.

**Gode råd til andre familier**
Det er de færreste familier, der omlægger deres vaner så radikalt, og det er måske ikke så underligt. En grønnere livsstil handler ikke bare om at forbruge mindre og forbruge på en anden måde. Det handler i høj grad også om identitet og følelser. Mange familietraditioner, fx søndagsmiddag eller juleaften, involverer store mængder af kød og har gjort det i generationer.

”Før man gør noget som helst andet, bør man sikre sig, at familien bakker op om projektet og har mod på at udfordre de gamle vaner. Ellers risikerer man både, at projektet mislykkes, og at nogle bliver sure,” siger Marianne.

Det er Torben enig i: ”Uden opbakning går det selvfølgelig ikke. Desuden er det en god idé at undersøge grundigt, hvor det kan betale sig at skære ned på forbruget. Der findes masser af gratis CO2-beregnere på nettet, som kan hjælpe en til at finde ud af, hvor man får mest ud af at begrænse sin CO2-udledning. Måske behøver man ikke undvære juleanden og de traditionsrige måltider med familien, hvis man fx sælger bilen og køber et pendlerkort i stedet.”

**Tekst 2: Klima og ansvar**

Der er efterhånden bred enighed om, at klimaproblemerne er menneskeskabte og vil forværres, hvis der ikke gøres noget. Men hvad kan forbrugerne og politikerne gøre for at vende udviklingen?

Den globale opvarmning skyldes drivhusgasser. Men drivhusgasserne har ikke udelukkende en negativ indvirkning på klimaet. Drivhusgasser findes faktisk naturligt i Jordens atmosfære. Fx er vanddamp og CO2 drivhusgasser. Var det ikke for drivhusgasserne, ville gennemsnits-temperaturen på Jorden være omkring minus 18 grader, og livet på Jorden ville være helt forskelligt fra det liv, vi kender.

Mennesker har altid udledt drivhusgasser. Problemet er, at vi udleder mere end tidligere, blandt andet CO2. Siden den industrielle revolution i midten af 1800-tallet, har vi brændt store mængder kul og olie af. Det har betydet højere velstand for mange mennesker. Men det har også betydet mere udledning af CO2 i atmosfæren.

I dag er gennemsnitstemperaturen cirka 15 grader, men hvis den bliver bare et par grader højere, får det alvorlige konsekvenser. Vi vil fx opleve flere oversvømmelser, skovbrande og perioder med tørke. Vandstanden i havene vil også stige og gøre mange områder ubeboelige. Der er derfor stor politisk og folkelig interesse for at nedbringe udledningen af CO2 i atmosfæren.

**Kødproduktion**
Et meget omdiskuteret emne i klimadebatten er kødforbrug. Det skyldes, at der udledes meget store mængder CO2 i kødproduktionen. Der udledes mere end i hele transportsektoren. Samtidig belaster produktionen af kød jorden og vandressourcerne. Det vil altså give god mening at begrænse folks forbrug af kød. Men er det rimeligt, at staten gennem kampagner og fx afgifter på kød er med til at bestemme, hvad folk spiser?

Det mener Morten Ebbe Juul Nielsen ikke. Han er lektor ved Institut for Medier, Erkendelse og Formidling ved Københavns Universitet. ”De fleste vil nok erklære sig enige i, at staten ikke skal detailregulere vores fødevareforbrug. Det, vi spiser, og måden vi spiser på, er dybt personlig og ofte forbundet med stærke personlige, sociale og kulturelle forestillinger.”¹

Han mener derfor, at mange mennesker vil opleve det som et for stort indgreb, hvis staten blander sig i, hvad de spiser. Og han er ikke umiddelbart tilhænger af, at staten regulerer, om folk fx spiser kød eller ej. ”I første omgang må vi lade det være op til markedet og forbrugeren, og hvis det ikke er nok, så må politikere og lobbyister arbejde for at få globale regler sat op,” siger han.²

**Det svære valg**
Det er dog ikke alle, der er enige i, at forbrugerne og markedet selv kan løfte opgaven med at løse klimaproblemerne. ”Ser man på de mange befolkningsundersøgelser, der er lavet, så er det klart, at stort set alle borgere i dag har hørt om klimaforandringer eller global opvarmning,” fortæller Jesper Ryberg, der er professor i etik og retsfilosofi på Roskilde Universitet. ”Men det er også klart, at dette ikke er det samme som, at man har viden om det.”³

Mange mennesker har altså kendskab til klimaproblemerne, men de ved ikke, hvordan de kan være med til at løse dem. I et stort studie fra to amerikanske byer (Portland og Houston) tilkendegav folk, at de ikke havde ændret adfærd som følge af klimaproblemerne. De vidste ganske enkelt ikke, hvad de skulle gøre.

En anden grund til, at folk ikke gør noget, er, at det ikke er klart, hvem der egentlig har ansvaret for klimaforandringerne. Det er selvfølgelig ikke den enkelte forbruger alene. Den enkelte forbruger har kun en meget lille andel i de katastrofer, man kan følge i nyhederne. Og når man ikke føler, at man er direkte ansvarlig for noget, så føler man sig ikke så forpligtet til at gøre noget ved det.

**Fremtidsblindhed**
Endnu en grund er det, Jesper Ryberg kalder ”fremtidsblindhed”. For mange mennesker, specielt i den vestlige verden, er klimaproblemet stadig et noget abstrakt problem. Det er et problem, vi har kendskab til, men det er måske ikke et problem, vi rigtigt kan forholde os til. ”Vi har meget svært ved at reagere på klimaproblemet, fordi vi oplever, det ligger ude i fremtiden, og fordi vi ikke har klare billeder på nethinden. Klimaproblemet trigger først vores hjerner, når kælderen flyder med vand, og det er meget sent at reagere, hvis det drejer sig om at reducere drivhusgasser.”⁴

Klimaproblemet opleves altså ikke som et akut problem, men som et abstrakt problem i en fjern fremtid. Men det opleves også som et problem, der geografisk set er fjernt for mange mennesker i Vesten. I Vesten oplever man klimaforandringerne som noget, der først og fremmest rammer langt væk. Forandringer, der er på tidslig og geografisk afstand af os selv, berører os ikke følelsesmæssigt på samme måde som forandringer, der sker helt tæt på os: ”En forudsætning for handling er, at vi påvirkes følelsesmæssigt af problemet. Det er i den følelsesmæssige reaktion, at drivkraften for handlen ligger,” siger Jesper Ryberg.⁵

Så hvad kan forbrugerne og politikerne gøre for at løse klimaproblemerne? Er der en løsning, der ikke involverer, at staten skal regulere, hvad vi spiser, og som heller ikke lægger hele ansvaret over på forbrugeren? Måske. Jesper Ryberg håber på en kollektiv bevægelse: ”For at der opstår en bevægelse blandt folk, må man sætte lokale initiativer i gang. Vi skal føle os som en del af et større projekt, hvor vi oplever, at vi gør noget sammen.”⁶

¹ Det svære valg. Udfordringer for den etiske forbruger, side 146. Udgivet af Det Etiske Råd 2015.
² https://foodculture.dk/miljoe-og-klima/klima/2014/er-klimaet-forbrugerens-ansvar, hentet den 13. februar 2019.
³ Det svære valg. Udfordringer for den etiske forbruger, side 84. Udgivet af Det Etiske Råd 2015.
⁴ Se fodnote 2.
⁵ Det svære valg. Udfordringer for den etiske forbruger, side 86. Udgivet af Det Etiske Råd 2015.
⁶ Se fodnote 2.`,
    questions: [
      { type: "mc", n: 1, q: "(Tekst 1) Hvilket af følgende udsagn er i overensstemmelse med det, Marianne Andresen og Torben Bruun giver udtryk for?",
        options: ["Folk er ikke klar over, at de udleder for meget CO2.", "Politikerne skal tage større ansvar for at løse klimaproblemerne.", "Børn skal lære at tage et ansvar i klimakampen."], answer: 2 },
      { type: "mc", n: 2, q: "(Tekst 1) Hvad giver Torben Bruun udtryk for om livsstilsændringerne?",
        options: ["Det var nemmere for ham at skifte bilen ud med toget end at ændre kostvaner.", "Han savner, at han ikke længere kan tage på ferie med familien i udlandet.", "Det har overrasket ham, at det har været svært at gennemføre ændringerne."], answer: 0 },
      { type: "mc", n: 3, q: "(Tekst 1) Hvilket af følgende råd giver Marianne Andresen og Torben Bruun andre familier, der ønsker at ændre vaner til en mere klimavenlig livsstil?",
        options: ["Man skal prøve at ændre vaner på alle de områder, hvor det er muligt, for at begrænse sin CO2-udledning.", "Man skal sikre sig, at familien er engageret i projektet, før man ændrer vaner.", "Man skal ikke ændre vaner, hvis det går ud over gamle familietraditioner."], answer: 1 },
      { type: "mc", n: 4, q: "(Tekst 2) Hvilket af følgende udsagn er i overensstemmelse med det, der står i teksten?",
        options: ["Der har altid været drivhusgasser i atmosfæren.", "Der kan ikke være liv på Jorden uden drivhusgasser i atmosfæren.", "Det var med den industrielle revolution, der begyndte at komme drivhusgasser i atmosfæren."], answer: 0 },
      { type: "mc", n: 5, q: "(Tekst 2) Hvilket af følgende udsagn giver Morten Ebbe Juul Nielsen udtryk for?",
        options: ["Folk bør ikke ændre madvaner, hvis det går ud over personlige og sociale relationer.", "Politikere skal kun blande sig i folks madvaner, hvis det bliver nødvendigt.", "Det er alene markedet, der kan regulere folks madvaner."], answer: 1 },
      { type: "mc", n: 6, q: "(Tekst 2) Hvad siger Jesper Ryberg om forbrugerne i forhold til at løse klimaproblemerne?",
        options: ["Mange forbrugere ændrer ikke vaner, fordi de ikke ved, at de udleder for meget CO2.", "Mange forbrugere har ikke mulighed for at gøre noget ved klimaproblemerne.", "Mange forbrugere er i tvivl om, hvordan de kan nedbringe deres CO2-udledning."], answer: 2 },
      { type: "mc", n: 7, q: "(Tekst 2) Hvad betyder ”fremtidsblindhed” ifølge Jesper Ryberg?",
        options: ["At man ikke reagerer på et problem, hvor konsekvenserne først bliver synlige i fremtiden.", "At man ikke har et problem med, at ens handlinger har konsekvenser for fremtiden.", "At man ikke tror, at ens handlinger har konsekvenser for fremtiden."], answer: 0 }
    ]
  };

  const akademikere = {
    id: "pd3-21m-3", group: G, real: true,
    title: "Delprøve 2B – Arbejdsløshed blandt nyuddannede akademikere",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 25,
    instruction: "Læs teksten Arbejdsløshed blandt nyuddannede akademikere. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Arbejdsløshed blandt nyuddannede akademikere**

Det går godt for samfundsøkonomien, og der er færre arbejdsløse. [[0]] er der blandt nyuddannede akademikere nogle, der går arbejdsløse længe.

Thea Holm er kandidat i kunsthistorie. Hun blev færdig med sin uddannelse for halvandet år siden. Som andre nyuddannede akademikere med sprog, historie eller kultur på eksamensbeviset har hun svært ved at finde et job inden for sit fagområde.

Hun har været til mange samtaler i jobcenteret og på kurser i jobsøgning, og hun har været i praktik på et museum. Et job er det [[1]] endnu ikke blevet til, og hendes dagpenge, som hun har fået, siden hun blev færdig som kandidat, stopper snart: ”Det er meget frustrerende at bruge så lang tid på at skrive ansøgninger og søge efter jobs på nettet. Til sommer stopper mine dagpenge, og så skal jeg finde et job,” siger hun.

I Danmark kan man få dagpenge som nyuddannet, hvis man er arbejdsløs og er medlem af en A-kasse. Man kan få dagpenge i to år i træk, og man har derfor relativt god tid til at finde et job. Der er nogle, der mener, at den mulighed kan være en [[2]], at der går lang tid, inden nogle nyuddannede får det første job.

Thea [[3]] da heller ikke, at dagpengeperiodens længde har haft betydning for, at hun endnu ikke har fundet et job. Uden den lange dagpengeperiode mener hun, at hun hurtigere ville være gået i gang med at søge job uden for sit fagområde: ”Man ved jo, at man får dagpenge de første to år, og det betyder noget for, hvor bredt man søger lige efter, man er blevet færdig med sin uddannelse. Hvis man skal have folk hurtigere ud på arbejdsmarkedet, er det måske [[4]] at ændre reglerne,” mener hun.

Da Theas dagpengeperiode [[5]] er tæt på at udløbe, er hun begyndt at se efter jobs udenfor sit fagområde, blandt andet som lærervikar i folkeskolen.

Der er forskellige [[6]], at nyuddannede som Thea går ledige i lang tid. Mange af disse er negative, fordi mange mener, at nyuddannede bør tage et midlertidigt ufaglært job i stedet for at gå arbejdsløse. Også fra politisk side er der flere, der mener, at de ledige skal ud og finde sig et arbejde så hurtigt som muligt: ”Indtil man finder drømmejobbet, må man tage de job, der er. Bare fordi man har taget en længere uddannelse, skal man ikke være for fin til at tage det første og det bedste job, der byder sig,” siger Hans Andersen, der er beskæftigelsesordfører for partiet Venstre.¹

Formand for Dansk Magisterforening, Camilla Gregersen, mener [[7]], at de højtuddannede primært skal søge job, der passer til deres uddannelse: ”Det er jo spild af skattekroner, at samfundet bruger en masse ressourcer på at uddanne folk, hvis de så ikke bruger deres uddannelse,” siger hun.²

Hun hører desuden, at arbejdsgiverne igen og igen siger nej tak til overkvalificerede ansøgere, der søger et lavtlønnet job, fx i Netto. Dermed virker det ikke, som om der overhovedet er [[8]] at ansætte de højtuddannede i de lavtlønnede brancher, mener Camilla Gregersen.

¹ https://www.a4nu.dk/artikel/minister-til-ledige-akademikere-tag-job-i-netto
² Avisen.dk 6.10.2018: Chefer til ledige akademikere: Et ufaglært job pynter på CV’et.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["derfor", "imidlertid", "ligeledes", "heldigvis"],
        2: ["gevinst ved", "konsekvens af", "forhindring for", "årsag til"],
        3: ["indrømmer", "erkender", "afviser", "vurderer"],
        4: ["nødvendigt", "forkert", "urimeligt", "vanskeligt"],
        5: ["tværtimod", "som nævnt", "langt fra", "muligvis"],
        6: ["grunde til", "planer for", "holdninger til", "forklaringer på"],
        7: ["dernæst", "derimod", "dermed", "desuden"],
        8: ["råd til", "problemer med", "tid til", "ønske om"]
      },
      example: { 0: "Dermed" },
      answers: { 1: "imidlertid", 2: "årsag til", 3: "afviser", 4: "nødvendigt", 5: "som nævnt", 6: "holdninger til", 7: "derimod", 8: "ønske om" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(teater, klima, akademikere);

  const X = PD2.EXAMS.pd3;
  const SESSION = "Maj-juni 2021";

  // ---------- Skriftlig fremstilling maj-juni 2021 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-21m-w1", delprove: 1, real: true, year: 2021, session: SESSION,
      title: "Delprøve 1: En e-mail til en veninde (maj-juni 2021)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra Lise, som er din gode veninde. Lise bor i et hus i Odense sammen med sin mand. Hendes søster skal skilles. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Tak for sidst, det var hyggeligt at se dig. Jeg er spændt på at høre, om du så «har købt den elcykel, du snakkede om»? " +
        "Min søster Nina, som du måske kan huske, skal skilles. Hun har fundet en lejlighed, som hun kan overtage om en måned. Hun har spurgt, om hun må flytte ind hos os med sine to børn, mens hun venter på, at lejligheden bliver klar. Men måske er det bedre, de venter og flytter direkte ind i lejligheden. «Hvad tror du er bedst?» " +
        "Jeg har tænkt meget på, at vi altid godt har kunnet lide min søsters mand. Men nu er jeg bange for, om vi kan blive ved med at se ham fremover. «Hvad tror du?» " +
        "Jeg glæder mig til at høre fra dig og høre om, «hvordan det går med at lære dansk». Jeg har hørt, at du snart er færdig med sprogskolen.\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Tak for sidst, det var hyggeligt at se dig. Jeg er spændt på at høre, om du så har købt den elcykel, du snakkede om?\n\n" +
        "Min søster Nina, som du måske kan huske, skal skilles. Hun har fundet en lejlighed, som hun kan overtage om en måned. Hun har spurgt, om hun må flytte ind hos os med sine to børn, mens hun venter på, at lejligheden bliver klar. Men måske er det bedre, de venter og flytter direkte ind i lejligheden. Hvad tror du er bedst?\n\n" +
        "Jeg har tænkt meget på, at vi altid godt har kunnet lide min søsters mand. Men nu er jeg bange for, om vi kan blive ved med at se ham fremover. Hvad tror du?\n\n" +
        "Jeg glæder mig til at høre fra dig og høre om, hvordan det går med at lære dansk. Jeg har hørt, at du snart er færdig med sprogskolen.",
      underlined: [
        "har købt den elcykel, du snakkede om",
        "Hvad tror du er bedst?",
        "Hvad tror du?",
        "hvordan det går med at lære dansk"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: … om du så har købt den elcykel, du snakkede om?",
        "Understreget: Hvad tror du er bedst? (at Nina og børnene flytter ind hos Lise, eller at de venter og flytter direkte ind i lejligheden)",
        "Understreget: Hvad tror du? (om Lise og hendes mand kan blive ved med at se søsterens mand)",
        "Understreget: … hvordan det går med at lære dansk.",
        "Foreslå, at I mødes, så du kan fortælle om, hvordan det går med at tale dansk."
      ],
      phrases: ["Tak for din mail.", "Ja, jeg har faktisk købt …", "Det var trist at høre om …", "Jeg tror, det er bedst, at …", "Hvis jeg var dig, ville jeg …", "Du spørger, om …", "Det går godt med at lære dansk.", "Skal vi ikke mødes til en kop kaffe?", "Mange hilsner"],
      model: `Hej Lise

Tak for din mail. Det var også rigtig hyggeligt at se dig.

Ja, jeg har faktisk købt den elcykel, jeg snakkede om. Jeg fandt et godt tilbud i en cykelforretning, og nu cykler jeg på arbejde hver dag. Det går meget hurtigere end med bussen, og jeg får frisk luft.

Det var trist at høre om Nina. Jeg tror, det er bedst, at hun og børnene flytter ind hos jer i den måned. Efter en skilsmisse har man brug for at være sammen med sin familie, og børnene vil sikkert synes, det er hyggeligt at bo hos deres moster. En måned går jo hurtigt.

Du spørger, om I kan blive ved med at se Ninas mand. Det tror jeg godt, I kan, men måske skal I vente lidt. Hvis jeg var dig, ville jeg først tale med Nina om det, så hun ikke føler, at I vælger hans side.

Det går godt med at lære dansk, og jeg er snart færdig med sprogskolen. Skal vi ikke mødes til en kop kaffe i næste weekend? Så kan jeg fortælle dig, hvordan det går med at tale dansk.

Mange hilsner
Amira`
    },
    {
      id: "pd3-21m-w2a", delprove: 2, real: true, year: 2021, session: SESSION,
      title: "2A: Jobomsætning (maj-juni 2021)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Jobomsætning (jobomsætning = antal personer, der starter i et nyt job fra et andet job, fra ledighed eller som nyuddannet). " +
        "Diagram: Jobomsætning i Danmark i 2018 fordelt på alder (antal personer). " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): 20-34-årige ca. 40.600 · 35-49-årige ca. 23.200 · 50-64-årige ca. 14.100. " +
        "Kilde: www.jobindsats.dk, 2020. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2021m/jobomsaetning-diagram.png",
      imageAlt: "Søjlediagram: Jobomsætning i Danmark i 2018 fordelt på alder, antal personer. 20-34-årige ca. 40.600, 35-49-årige ca. 23.200, 50-64-årige ca. 14.100.",
      chart: {
        title: "Jobomsætning i Danmark i 2018 fordelt på alder",
        unit: "personer", approx: true,
        source: "www.jobindsats.dk, 2020",
        bars: [
          { label: "20-34-årige", value: 40600 },
          { label: "35-49-årige", value: 23200 },
          { label: "50-64-årige", value: 14100 }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til de forskelle, diagrammet viser.",
        "Vurdér fordele og ulemper for en virksomhed ved, at der sker en udskiftning blandt medarbejderne. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor mange personer der …", "Det er tydeligt, at …", "Hos de 35-49-årige var tallet ca. …", "mens det kun var ca. … blandt …", "En årsag kan være, at …", "Derimod …", "En fordel er, at …", "Der er dog også ulemper.", "Samlet set mener jeg, at …"],
      model: `Jobomsætning – en udfordring og en mulighed

Diagrammet viser jobomsætningen i Danmark i 2018 fordelt på tre aldersgrupper, altså hvor mange personer der startede i et nyt job. Det er tydeligt, at de unge skifter job mest. Blandt de 20-34-årige startede ca. 40.600 personer i et nyt job. Hos de 35-49-årige var tallet ca. 23.200, mens det kun var ca. 14.100 blandt de 50-64-årige. De yngste står altså for næsten tre gange så mange jobstarter som de ældste.

Der kan være flere årsager til forskellene. Mange unge er lige blevet færdige med deres uddannelse og skal finde deres første job. De har også lyst til at prøve forskellige ting. De ældre har derimod tit fundet et job, de er glade for, og de har måske hus og familie, som gør, at de ikke vil tage chancer. Desuden kan det være svært for ældre at få et nyt job, fordi nogle arbejdsgivere hellere vil ansætte yngre.

For en virksomhed er der både fordele og ulemper ved, at medarbejderne bliver udskiftet. En fordel er, at nye medarbejdere kommer med nye idéer og ny viden. Hvis en medarbejder ikke trives eller ikke passer til jobbet, kan det også være godt for begge parter, at han eller hun finder et andet job.

Der er dog også store ulemper. Det koster både tid og penge at slå en stilling op, holde jobsamtaler og lære en ny medarbejder op. Når en erfaren medarbejder stopper, forsvinder der også vigtig viden. Hvis mange stopper på kort tid, kan det skabe uro og dårlig stemning blandt kollegerne.

Samlet set mener jeg, at lidt udskiftning er sundt for en virksomhed, men at for meget udskiftning er dyrt. Derfor bør virksomhederne gøre en indsats for at holde på deres dygtigste medarbejdere, fx med gode arbejdsforhold og mulighed for efteruddannelse.`
    },
    {
      id: "pd3-21m-w2b", delprove: 2, real: true, year: 2021, session: SESSION,
      title: "2B: Unge og sundhed (maj-juni 2021)",
      kind: "Prøveopgave · forslag og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Unge og sundhed. " +
        "Nogle unge har en usund livsstil, hvor de bevæger sig for lidt, spiser og drikker for usundt og ofte også ryger. " +
        "Her er der nogle forslag til, hvordan unge kan få en sundere livsstil: " +
        "• Højere aldersgrænse for køb af alkohol • Madordninger med sund mad på skoler og ungdomsuddannelser • Forbud mod reklamer for slik og sodavand • Mere undervisning i sundhed og livsstil i folkeskolen • Flere idrætstimer på skoler og ungdomsuddannelser • Obligatoriske samtaler med egen læge om sund livsstil. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Højere aldersgrænse for køb af alkohol", "Madordninger med sund mad på skoler og ungdomsuddannelser", "Forbud mod reklamer for slik og sodavand", "Mere undervisning i sundhed og livsstil i folkeskolen", "Flere idrætstimer på skoler og ungdomsuddannelser", "Obligatoriske samtaler med egen læge om sund livsstil"],
      points: [
        "Fortæl kort om, hvordan du selv prøver at leve sundt.",
        "Kommentér et eller to af eksemplerne fra listen.",
        "Vurdér, om venner og ungdomskultur har større indflydelse på unges livsstil end forældrene. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Jeg prøver selv at leve sundt ved at …", "På listen synes jeg især, at … er en god idé.", "Efter min mening har … størst indflydelse.", "I den alder vil man gerne …", "Alligevel mener jeg ikke, at …", "Forældrene er også rollemodeller.", "Samlet set tror jeg, at …"],
      model: `Hvem bestemmer over de unges livsstil?

Jeg prøver selv at leve sundt i hverdagen. Jeg cykler på arbejde hver dag, og to gange om ugen går jeg til fitness. Jeg laver det meste af maden selv og spiser mange grøntsager. Jeg ryger ikke, og jeg drikker kun alkohol, når jeg er sammen med venner i weekenden.

På listen synes jeg især, at madordninger med sund mad på skoler og ungdomsuddannelser er en god idé. Mange unge spiser ikke morgenmad og køber i stedet chips og sodavand i frikvarteret. Hvis skolen tilbyder et billigt og sundt måltid, får alle elever ordentlig mad, uanset hvor mange penge deres forældre har.

Men hvem har størst indflydelse på unges livsstil – vennerne eller forældrene? Efter min mening har venner og ungdomskultur størst indflydelse, især når de unge bliver teenagere. I den alder vil man gerne passe ind i gruppen. Hvis vennerne ryger eller drikker meget til fester, er det svært at sige nej. De sociale medier spiller også en stor rolle, fordi influencere viser, hvad der er smart at spise, drikke og gå i.

Alligevel mener jeg ikke, at forældrene er uden betydning. Det er forældrene, der lærer børnene deres vaner, når de er små. Hvis man er vokset op i en familie, hvor man spiser sund mad og dyrker sport sammen, tager man ofte de vaner med sig. Forældrene er også rollemodeller. Hvis far og mor ryger, er der større risiko for, at børnene også begynder.

Samlet set tror jeg, at vennerne har den største indflydelse i teenageårene, men at forældrene lægger grundlaget. Derfor er det vigtigt, at forældrene taler med deres børn om sundhed og giver dem selvtillid til at træffe deres egne valg.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål maj-juni 2021 ----------
  // q = the obligatory question exactly as in the booklet (this year's booklet has no lead-in sentences);
  // follow = the suggested follow-up question(s). The picture sheet's own captions are the captions.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, maj-juni 2021)";
  const intro = emne => `Her er der to billeder, som viser nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-21m-o-a", title: "Jobsøgning", session: SESSION, year: 2021, real: true, credit,
      intro: intro("Jobsøgning"),
      pictures: [
        { file: "images/pd3-2021m/jobsoegning-1.jpg", caption: "Jobsøgning som nyuddannet", credit,
          alt: "En ung mand sidder ved skrivebordet på sit værelse med skateboards og en Roskilde-plakat og leder efter ledige job på sin bærbare computer.",
          words: ["en nyuddannet", "ledige job", "at søge job", "en ansøgning", "et værelse"] },
        { file: "images/pd3-2021m/jobsoegning-2.jpg", caption: "Ældre Jobsøgende", credit,
          alt: "En ældre kvinde sidder hjemme i sin stue og taler i telefon med en smilende kvinde, der sidder på et kontor i HR-afdelingen.",
          words: ["en ældre jobsøgende", "at ringe til en virksomhed", "HR-afdelingen", "erfaring", "en jobsamtale"] }
      ],
      first: {
        A: {
          q: "Nogle nyuddannede kan have svært ved at finde det første job. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, erfaring fra fx et studiejob eller praktik kan betyde for de nyuddannedes muligheder for at finde et job?",
          answer: "Jeg tror, det især skyldes, at de mangler erhvervserfaring. Mange arbejdsgivere vil helst ansætte en, der allerede kender branchen og kan gå direkte i gang. Desuden er der mange nyuddannede, der søger de samme stillinger, især inden for fag som kunsthistorie og journalistik. Nogle har også kun et lille netværk. Som man kan se på billedet, sidder den unge mand alene på sit værelse og leder efter job på nettet, og det kan tage lang tid.",
          followAnswer: "Jeg tror, det betyder rigtig meget. Med et studiejob eller en praktik får man erfaring, som man kan skrive på sit CV, og man viser, at man kan tage ansvar. Man får også kontakter i branchen, og mange får faktisk deres første job gennem deres netværk. Min nabo var for eksempel i praktik på et reklamebureau under studiet, og bagefter blev hun ansat samme sted. Derfor synes jeg, at alle studerende bør prøve at få et relevant studiejob."
        },
        B: {
          q: "Jobsøgende over 55 år kan have svært ved at finde et nyt job, selvom de har mange års erfaring. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved, at nogle arbejdsgivere fravælger jobsøgende over 55 år med mange års erfaring? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, at nogle arbejdsgivere har fordomme om ældre. De tror måske, at ældre oftere er syge, at de ikke er gode til ny teknologi, eller at de snart går på pension. Ældre medarbejdere med mange års erfaring forventer også ofte en højere løn end yngre. Desuden er der nogle virksomheder, der gerne vil have et ungt image. Det er synd, for kvinden på billedet virker både glad og klar til at arbejde.",
          followAnswer: "Ja, det mener jeg bestemt. For det første går virksomhederne glip af en masse viden og erfaring, som yngre medarbejdere ikke har. For det andet er det et problem for samfundet, fordi vi mangler arbejdskraft, og fordi det koster penge at betale dagpenge til folk, der gerne vil arbejde. Endelig er det hårdt for den enkelte at blive afvist igen og igen. Mange ældre er desuden meget loyale og bliver længe på den samme arbejdsplads."
        }
      },
      second: {
        q: "De fleste jobsøgende i Danmark kan modtage økonomisk hjælp som fx dagpenge eller kontanthjælp, mens de søger job. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Hvad tror du, den økonomiske hjælp kan betyde for de arbejdsløses jobsøgning?",
        answer: "En fordel er, at folk ikke bliver fattige, hvis de mister deres job. De kan stadig betale husleje og købe mad, og det skaber tryghed i samfundet. Det gør det også lettere for virksomhederne at fyre og ansætte folk, fordi der er et sikkerhedsnet. En ulempe er, at det koster staten mange penge, som vi alle sammen betaler via skatten. Desuden kan nogle måske miste motivationen til at søge job, hvis hjælpen er for høj.",
        followAnswer: "Jeg tror, at hjælpen kan betyde to ting. På den ene side giver den ro, så man kan bruge tid på at finde et job, der passer til ens uddannelse, i stedet for at tage det første og det bedste. På den anden side kan nogle vente for længe med at søge bredt. Derfor synes jeg, det er godt, at man skal søge et vist antal job og gå til samtaler i jobcenteret for at få dagpenge."
      },
      conclusion: ""
    },
    {
      id: "pd3-21m-o-b", title: "Klimabevidsthed", session: SESSION, year: 2021, real: true, credit,
      intro: intro("Klimabevidsthed"),
      pictures: [
        { file: "images/pd3-2021m/klimabevidsthed-1.jpg", caption: "Klimabevidsthed og rejsevaner", credit,
          alt: "En familie med to børn sidder i en sovevogn i et nattog og spiller kort, mens landskabet glider forbi uden for vinduet.",
          words: ["et nattog", "en sovevogn", "en køje", "at rejse med tog", "en flyrejse"] },
        { file: "images/pd3-2021m/klimabevidsthed-2.jpg", caption: "Klimabevidsthed og indkøbsvaner", credit,
          alt: "En kvinde holder en kjole op foran sig uden for en butik med luksus-secondhandmode, hvor der hænger brugt tøj på stativer på fortovet, og en cykel står parkeret foran.",
          words: ["en genbrugsbutik", "secondhand", "brugt tøj", "et tøjstativ", "at genbruge"] }
      ],
      first: {
        A: {
          q: "Der er nogle, der vælger ikke at flyve, når de rejser på ferie. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for en families rejsevaner, at de fravælger flyrejser?",
          answer: "Jeg tror, det især er, fordi de er bekymrede for klimaet. Et fly udleder meget CO2, og mange vil gerne tage et personligt ansvar. Men der kan også være andre grunde. Nogle synes, at selve rejsen er en del af ferien. Ligesom familien på billedet kan man spille kort, læse og se på landskabet fra toget. Andre er måske bange for at flyve, og nogle synes, det er stressende at vente i lufthavnen.",
          followAnswer: "Det betyder nok, at de ikke rejser så langt væk. I stedet for at tage til Thailand eller USA holder de ferie i Danmark eller i Europa, fx i Tyskland, Italien eller Østrig. Rejsen tager længere tid, så de skal planlægge bedre og måske have en længere ferie. Til gengæld oplever de mere undervejs. Det kan også blive dyrere, fordi en togbillet nogle gange koster mere end en billig flybillet."
        },
        B: {
          q: "Der er nogle, der køber deres tøj og andre ting i genbrugsbutikker. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for miljøet, at der er nogle, der køber deres tøj og andre ting i genbrugsbutikker?",
          answer: "Jeg tror, at mange gør det for at spare penge, fordi brugt tøj er meget billigere end nyt. Andre gør det for miljøets skyld, fordi produktionen af tøj bruger meget vand og energi. Nogle synes også, det er sjovt at gå på jagt efter noget unikt, som ingen andre har. Som man kan se på billedet, findes der i dag også luksusbutikker med secondhandmode og flotte kjoler, så det er blevet moderne at købe brugt.",
          followAnswer: "Det betyder, at der skal produceres mindre nyt tøj, og det er godt for miljøet. Når man køber en brugt kjole, sparer man de ressourcer, der skulle bruges til at lave en ny. Tøjet bliver også brugt i længere tid i stedet for at blive smidt ud og brændt. Men jeg tror ikke, at det alene kan løse problemet, for mange køber stadig meget nyt tøj hver måned. Vi skal generelt købe mindre."
        }
      },
      second: {
        q: "Der er nogle, der mener, at Danmark i løbet af de næste 10 år skal skifte til at bruge 100 % grøn energi. Hvilke fordele og ulemper mener du, der kan være ved det for danske virksomheder?",
        follow: "Tror du, det vil betyde noget for den enkelte borgers livsstil, hvis Danmark i løbet af de næste 10 år skal skifte til at bruge 100 % grøn energi? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at danske virksomheder kan blive førende inden for grøn teknologi, for eksempel vindmøller, og sælge deres produkter til resten af verden. Det skaber nye arbejdspladser. Mange kunder foretrækker også varer, der er produceret klimavenligt. En ulempe er, at omstillingen er meget dyr på kort sigt. Virksomhederne skal måske købe nye maskiner og ændre deres produktion, og hvis energien bliver dyrere, kan det blive svært at konkurrere med udenlandske firmaer.",
        followAnswer: "Ja, det tror jeg. Hvis al energi skal være grøn, skal mange borgere ændre deres vaner. De skal måske købe en elbil i stedet for en benzinbil og udskifte deres oliefyr med en varmepumpe. Det kan være dyrt, især for folk med lave indkomster. Måske bliver det også dyrere at flyve. Men jeg tror, at de fleste vil vænne sig til det, ligesom de har vænnet sig til at sortere deres affald."
      },
      conclusion: ""
    },
    {
      id: "pd3-21m-o-c", title: "Unge under 18 og kriminalitet", session: SESSION, year: 2021, real: true, credit,
      intro: intro("Unge under 18 og kriminalitet"),
      pictures: [
        { file: "images/pd3-2021m/unge-under-18-og-kriminalitet-1.jpg", caption: "Børn og kriminalitet", credit,
          alt: "I en butik under et overvågningskamera stikker en dreng en pose slik ind under jakken, mens en pige ved siden af ham holder øje med en voksen kunde.",
          words: ["et butikstyveri", "at stjæle", "et overvågningskamera", "at holde udkig", "en butiksdetektiv"] },
        { file: "images/pd3-2021m/unge-under-18-og-kriminalitet-2.jpg", caption: "Køn og kriminalitet", credit,
          alt: "Om aftenen på en gade prøver to unge drenge at bryde ind i en parkeret bil, mens to unge piger står op ad en mur og kigger på.",
          words: ["et indbrud", "en bil", "at bryde ind", "en bande", "unge mænd"] }
      ],
      first: {
        A: {
          q: "10-14-årige børn begår flere butikstyverier end voksne. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for de 10-14-årige børns risiko for at blive kriminelle som voksne, at de begår butikstyverier som børn?",
          answer: "Jeg tror, at mange børn i den alder gerne vil have ting, de ikke har penge til, for eksempel slik, makeup eller computerspil. Nogle gør det også for spændingens skyld, eller fordi vennerne presser dem, ligesom drengen på billedet, der stikker noget ind under jakken, mens veninden holder øje. Børn tænker ikke altid over konsekvenserne, og de tror måske, at det ikke er så slemt at tage noget fra en stor butik.",
          followAnswer: "Jeg tror, at risikoen bliver større, hvis ingen reagerer. Hvis barnet ikke bliver opdaget, kan det tro, at kriminalitet kan betale sig, og så tør det måske mere næste gang. Men for de fleste børn er det et enkelt sidespring. Hvis de bliver taget, og forældrene og skolen taler med dem om det, lærer de af det. Derfor er det vigtigt, at de voksne reagerer hurtigt og tydeligt."
        },
        B: {
          q: "Unge mænd under 18 år begår generelt mere kriminalitet end unge kvinder under 18 år. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, man kan gøre for at få færre unge mænd til at begå kriminalitet?",
          answer: "Jeg tror, der er flere forklaringer. Mange unge drenge vil gerne vise, at de er seje og modige, især over for pigerne og de andre drenge. Som man kan se på billedet, prøver to drenge at bryde ind i en bil, mens to piger kigger på. Drenge tager generelt flere chancer end piger, og de er måske mindre bange for at blive straffet. Desuden er der nogle drenge, der klarer sig dårligt i skolen og søger anerkendelse i en bande.",
          followAnswer: "Jeg mener, at det vigtigste er at give dem noget meningsfuldt at lave. Det kan være sport, et fritidsjob eller en klub, hvor der er voksne, som de har tillid til. Skolen skal også hjælpe de drenge, der har det svært fagligt, så de ikke giver op. Desuden kan politiet og kommunen samarbejde om at tale med de unge og deres forældre, før problemerne bliver for store."
        }
      },
      second: {
        q: "Unge under 15 år kan ikke komme i fængsel, selvom de begår alvorlig kriminalitet som fx tyveri og vold. Hvilke fordele og ulemper mener du, der kan være ved det i forhold til kriminaliteten i samfundet?",
        follow: "Hvad tror du, det betyder for kriminelle unges muligheder for at komme ud af kriminaliteten, at de ikke kommer i fængsel, hvor der også er voksne indsatte?",
        answer: "En fordel er, at børnene ikke kommer i kontakt med voksne kriminelle, som kan lære dem nye tricks. Børn under 15 år er ikke modne nok til at forstå konsekvenserne af deres handlinger, så de har brug for hjælp og ikke straf. En ulempe er, at nogle unge måske tænker, at der ikke kan ske dem noget. Nogle bander bruger netop børn til at begå kriminalitet, fordi de ikke kan straffes, og det kan gøre folk utrygge.",
        followAnswer: "Jeg tror, det giver dem en bedre chance. I et fængsel kan unge få kriminelle venner og lære, at kriminalitet er normalt. Hvis de i stedet kommer på en sikret institution eller får en kontaktperson, kan de gå i skole og få hjælp til deres problemer. Så er det lettere at få et normalt liv bagefter. Men det kræver, at der er gode tilbud, og at de voksne følger dem tæt."
      },
      conclusion: ""
    }
  );
})();
