// Prøve i Dansk 3, maj-juni 2024 – læseforståelse, transcribed from the exam papers
// (Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Viborg" nr. 14;
// Læseforståelse 2: opgavehæfte nr. 17 and teksthæfte nr. 16).
// The answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur passed on to us (delprøve 1 items 8, 9, 10, 12, 15).
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures from the tekstsamling are left out (their captions are not needed for any answer).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 3 × 2, 2B = 5 × 2, delprøve 3 = 8 × 1 → 39 points.
// The app scores every question as 1, so 2A/2B count half as much here as at the exam.

(function () {
  const G = "PD3 maj-juni 2024";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const viborg = {
    id: "pd3-24m-1", group: G, real: true,
    title: "Delprøve 1 – Viborg",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Viborg. Brug indholdsfortegnelsen. Svar præcist og kort på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Viborg bys historie … 3
Attraktioner i og omkring i Viborg … 5
   Viborg Domkirke … 5
   Skovgaard Museet … 6
   Mønsted Kalkgruber … 6
   Energimuseet … 7
   Hvolris Jernalderlandsby … 8
Hærvejsmarchen i Viborg … 9
   Hærvejsmarch og byfest … 9
   Mød to deltagere … 10
Tre borgere i Viborg fortæller om byen … 12

**VIBORG BYS HISTORIE**

**Forhistorisk tid og middelalder**
Viborg har gennem historien været en af Danmarks betydeligste byer. Byen hed ikke oprindeligt Viborg men Vibjerg, der betyder ’det hellige sted på bakken’. Men da der i begyndelsen af 1300-tallet blev bygget en borg ved byen, blev byen herefter kaldt Viborg.

Viborg blev i middelalderen domkirkeby, men var allerede tilbage i vikingetiden et religiøst mødested for hele Jylland. Byen var tillige centrum for handel. Som et vigtigt kirkeligt centrum opstod der et stort antal kirkelige institutioner i byen. Byen blev også hjemsted for landstinget for Nørrejylland. Det var en slags domstol, der traf afgørelser om krig og fred, og som kunne idømme folk straffe. Det var også en opgave for landstinget at hylde regenten ved tronskifte, og danske konger, samt Margrete 1. som eneste dronning, blev hyldet i Viborg frem til 1655.

**Tidlig moderne tid (ca. 1500-1800)**
Med reformationen i 1536 mistede Viborg mange af sine kirkelige institutioner, men byen havde stadig stor betydning, især på grund af byens landsting, og fordi byen var et handelscentrum. Desuden havde byen god indtjening på studeeksport, men byens placering inde i landet var et permanent problem. Varer måtte fragtes over land til Hjarbæk ved Limfjorden, der benyttedes som byens havn. Fra midten af 1600-tallet var Viborgs storhedstid forbi, og indbyggertallet på knap 2.500 stagnerede de næste halvandet hundrede år. De mange administrative funktioner beholdt Viborg imidlertid, og bispesædet, Landstinget og de amtslige funktioner gjorde i 1700-tallet byen til en udpræget embedsmandsby. I 1805 blev Landsretten nedlagt, men tabet blev til dels opvejet af de nørrejyske stænderforsamlinger, som blev oprettet i Viborg 1831.

**Moderne tid (1800-tallet og frem)**
Allerede i begyndelsen af 1800-tallet opstod de første lette industrivirksomheder i byen, men især fra midten af 1800-tallet tog Viborgs udvikling fart. En række statslige institutioner kom til byen, blandt andet en garnison og et sindssygehospital. Trafikforholdene blev forbedret, dels med en dæmning over søerne, dels med jernbanerne til Langå og Skive i 1863-64. I slutningen af 1800-tallet havde en anseelig mængde mindre industrivirksomheder efterhånden slået sig ned i Viborg, og befolkningstallet steg støt, uden væksten dog var eksplosiv.

I 1900-tallet voksede byen hastigt, og den havde en omfattende industri inden for blandt andet tekstil-, træ- og metalområderne. Dameundertøjsfabrikken Asani (grundlagt 1930) blev i 1950’erne og 1960’erne byens største virksomhed, og tekstilindustrien var i den periode den største gren inden for Viborgs industri. Derudover udviklede byen sig også som handels- og administrationscentrum med mange offentlige institutioner, og allerede i 1960 arbejdede en tredjedel af Viborgs indbyggere med administration eller service.

I dag er industriens største branche jern- og metalindustrien, men servicesektoren er blevet endnu vigtigere. I 1919 blev Vestre Landsret oprettet, og rollen som administrationscentrum blev understreget, da den forhenværende amtshovedby for næsen af Århus blev hovedsæde for den nye Region Midtjylland i 2007. I 2022 var 41.239 mennesker bosat i Viborg, hvilket er cirka fire gange flere end i starten af 1900-tallet.

Kilde: Bearbejdet efter http://ddb.byhistorie.dk/koebstaeder/by.aspx?koebstadID=68

**ATTRAKTIONER I OG OMKRING VIBORG**

**Viborg Domkirke**
Viborg Domkirke står både stærkt i bybilledet og i Viborg bys lange historie. Den er desuden verdens største granitkirke, som man kan besøge, når der ikke er kirkelige handlinger.

I 1060 fik Viborg status som domkirkeby, men det var først i 1133, kirken stod færdig med sine fire tårne, sideskibe og krypt. Desværre har kirken været ramt af brande ad flere omgange – senest i 1726, hvor der efter branden kun var mure og krypt tilbage. Derfor er krypten den eneste del af den oprindelige domkirke fra 1133, der står tilbage.

Efter branden i 1726 blev kirken hurtigt genopført, men arbejdet var dårligt udført, og der var fare for sammenstyrtning. Den blev derfor lukket i 1862 og i årene efter revet ned, hvorefter man begyndte på en ny genopførelse, hvor stilen og grundplanen var den oprindelige. Genopførelsen blev tilendebragt i 1876, og mange autentiske detaljer vidner om kirkens lange historie, for eksempel de to løver og de to ansigter i korets udvendige granit. Brosten i plænen omkring kirken markerer endvidere, hvor den gamle kirkes tilbygninger lå. Fra 1901 til 1906 malede Joakim Skovgaard og hans hjælpere kirkens berømte billedbibel. I vådt puds tryllede de med deres kalkfarver, og freskerne taler et sprog, som alle kan forstå.

Kilde: Bearbejdet efter https://www.visitaarhus.dk/aarhusregionen/planlaeg-din-tur/viborg-domkirke-gdk601063, hentet 1. marts 2023

**Skovgaard Museet**
Skovgaard Museet er Viborgs kunstmuseum med værker fra kunstnerfamilien Skovgaard. Her kan man tage tilbage i tiden og opleve kunsten samt spændende skiftende særudstillinger. Kunstneren Joakim Skovgaard har udsmykket Viborg Domkirke, og museet er oprettet for at hædre ham og hans familie, hvoraf mange var kunstnere. På museet findes derfor også en stor samling værker af Joakims far, landskabsmaleren P.C. Skovgaard, og af hans søskende, Niels Skovgaard og Susette Holten, født Skovgaard, og deres samtidige. Museet har til huse i byens gamle rådhus, en bygning i barokstil fra 1728 ved siden af Viborg Domkirke. Her, i de højloftede stuer, hænger motiver fra Guldalderen og tiden efter, og man kan se de første takter til dansk design.

Kilde: Bearbejdet efter https://www.visitaarhus.dk/aarhusregionen/planlaeg-din-tur/skovgaard-museet-gdk601228, hentet 1. marts 2023

**Mønsted Kalkgruber**
20 kilometer vest for Viborg ligger Mønsted Kalkgruber, verdens største kalkgruber. Her gemmer mange kilometer af minegange og underjordiske søer på historien om kalkindustrien, der har skabt fundamentet for Viborg, som byen ser ud i dag. Her er der en verden af oplevelser, der fortæller om geologi, flagermus og imponerende arbejde udført med håndkraft.

Under jorden kan man gå på opdagelse mere end 50 meter nede i de oplyste minegange langs små vandløb og underjordiske søer og se, hvor flagermusene sover hele vinteren. Der er cirka fire kilometer gange, der er åbne for gæster, og heraf er cirka to kilometer oplyst. Det anbefales, at man bruger en lommelygte, hvis man vil gå på opdagelse i de mørke minegange. Året rundt er der kun otte grader i kalkgruberne, så det anbefales, at man har varmt tøj på. I kalkgruberne vises et multimedieshow ved grubernes største sø. Showet vises hver halve time og fortæller om kalkens og grubernes historie.

Over jorden kan man besøge det gamle kalkværk og museet i den gamle bestyrerbolig. Her kan man lære om kalkgrubernes historie, om livet som kalkminearbejder, og man kan udforske flagermusenes liv. Man kan også tage på en ca. 1 kilometer lang gåtur i det gamle kalkbrud. På turen kan man opleve den særlige natur i området og se den flotte udsigt til søen i bunden af kalkbruddet. Man har også mulighed for at stille sulten og slukke tørsten i den hyggelige Café Kridthuset. Ved siden af caféen ligger flagermuslegepladsen, hvor børnene kan klatre og lege på de fem flagermusarter, der overvintrer i kalkgruberne.

Kilde: Bearbejdet efter https://www.visitaarhus.dk/aarhusregionen/planlaeg-din-tur/moensted-kalkgruber-gdk601327, hentet 1. marts 2023

**Energimuseet**
Energimuseet er smukt placeret ved Tange Sø og Danmarks største vandkraftværk, Tangeværket. Her kan man se brusende vandmasser drive de gamle turbiner og føle historiens vingesus i generatorsalen, som har lavet grøn strøm til danskerne i over 100 år. Energimuseet formidler energiens historie og den grønne omstilling. Det gør museet med et særligt fokus på FN-verdensmål nr. 7: ”Vedvarende energi” og verdensmål nr. 12: ”Ansvarligt forbrug og produktion”.

Fra påsken til efterårsferien kan man i alle weekender og skoleferier opleve Energimuseets populære lynshow, møde museets dygtige guider, som formidler viden om energi og inspiration til en bæredygtig fremtid, og man kan blive klogere på energi og energiens historie. I Energiværkstedet i hovedbygningen kan man med spændende spil, lege og forsøg teste sit eget energiforbrug, og i Power-to-X udstillingen kan man blive klogere på den nye teknologi. Museets udstillinger findes i syv forskellige bygninger samt i parken og skoven, der forbinder dem. Her findes også bænke og borde, hvor man kan nyde sin medbragte mad, mens man lytter til fuglene eller den brusende Gudenå.

Kilde: Bearbejdet efter https://www.visitaarhus.dk/aarhusregionen/planlaeg-din-tur/energimuseet-gdk605505, hentet 1. marts 2023

**Hvolris Jernalderlandsby**
Hvolris Jernalderlandsby er et friluftsmuseum, som er beliggende i Skals Ådal, ca. 20 km nord for Viborg. Vores forfædre har levet i området helt fra stenalderen for ca. 6000 år siden. Hvolris Jernalderlandsby har primært fokus på jernalderen i tiden omkring år 0. Helt unikt for et historisk værksted findes de arkæologiske udgravninger side om side med den genskabte jernalderlandsby i bakkerne på Hvolris. I Tømmerladen kan man gå på opdagelse i den arkæologiske udstilling med jernalderfund fra udgravninger på Hvolris. Man kan blandt andet se de originale krukker fra udgravningerne. Mange af krukkerne har man lavet kopier af til madlavning i jernalderlandsbyen. På udstillingen kan man blandt andet også se kopier af nogle af de dragter fra jernalderen, man har fundet i moser.

Hvolris Jernalderlandsby har åbent hele året på hverdage. I sommerferien og efterårsferien er der levendegørelse på friluftsmuseet. Sæsonen igennem er der skiftende aktiviteter tilpasset årstiden, naturen og livet i landsbyen. I landsbyen kan man følge jernalderfolkets daglige gøremål, hvor især madlavningen tager tid.

Kilde: Bearbejdet efter https://www.visitaarhus.dk/aarhusregionen/planlaeg-din-tur/hvolris-jernalderlandsby-gdk601048, hentet 1. marts 2023

**HÆRVEJSMARCHEN I VIBORG**

**Hærvejsmarch og byfest**
March betyder ifølge ordbogen ”en organiseret vandring”. Det er netop hvad Hærvejsmarchen i Viborg er, og mottoet er: Vejen til sundhed. Hærvejsmarchen afholdes altid den sidste weekend i juni på de historiske og naturskønne ruter i og omkring Viborg. Den har de senere år haft deltagelse af 7-9.000 vandrere, der går enten lørdag eller søndag eller begge dage. Cirka halvdelen går både lørdag og søndag, hvor 2 x 45 km er vandrernes ”ekstremrute”. Den anden halvdel køber endagskort til ruterne.

Hærvejsmarchen i Viborg og aktiviteterne omkring er en international folkelig totaloplevelse med indhold af natur, kultur, historie, sundhed, miljø, oplevelse og livsglæde. En mangeårig tradition er, at der i Viborg i hærvejsugen op til og under marchen arrangeres en stor byfest på pladser og torve i den gamle, historiske by. Her mødes tusinder af mennesker som i gamle dage, hvor man kom fra hele Jylland for at handle og feste og for måske at få afgjort nogle uenigheder på Tinge. Det historiske marked blev kaldt Snapsting, og nu er navnet genoplivet som navnet på byfesten i Viborg i hærvejsugen.

**Tilmelding, indkvartering og forplejning**
Tilmelding til Hærvejsmarchen sker ved køb af startkort, som kan købes online. Startkortet er personligt og skal bæres synligt under hele marchen. Det giver adgang til rastepladser, toiletter og førstehjælp på ruterne. Ved tilmelding har man mulighed for at bestille og købe en række tilvalg i forhold til indkvartering og forplejning. Når man har tilmeldt sig som deltager til årets hærvejsmarch, modtager man en kvittering for sin betaling. Online tilmelding er åben til og med søndagen før marchen.

Om fredagen inden kl. 21 eller lørdag og søndag morgen fra kl. 05 kan man møde op i registreringshallen, Tingvej 17, Viborg og afhente sit startkort ved at vise kvitteringen for sin tilmelding. Hvis man ikke har registreret sig og købt et startkort på forhånd, så kan man møde op i registreringshallen fredag kl. 12-21 samt lørdag og søndag kl. 05-09, hvor der er hjælp til onlineregistrering, hvorefter man straks får udleveret startkort og rutekort.

Der er mange muligheder for god forplejning under marchen. Man kan på forhånd bestille og købe morgen- og aftensmad til marchdagene, når man tilmelder sig online. De bestilte spisebilletter udleveres sammen med startkortet i registreringshallen. Forudbestilt mad udleveres i Hærvejsmarchens telt på Paradepladsen. I det område, hvor alle ruter starter og slutter, er der derudover hele weekenden masser af muligheder for at købe mad og drikke for dem, der ikke har forudbestilt mad hjemmefra. Ude på marchruterne er der opstillet rastepladser for hver ca. 10 km., hvor der kan købes mad og drikke til rimelige priser.

Alle, der gennemfører mindst 2 x 10 km lørdag og søndag, kan få udleveret en Hærvejsmarchen-medalje. Hvis man har købt et startkort til én dag, giver det altså ikke ret til en medalje, men hvis man har købt et endagskort til lørdag, kan dette søndag morgen ombyttes til et todages startkort med medalje, hvor man bliver registreret til at gå to dage.

Kilde: Bearbejdet efter https://www.haervejsmarchen.dk/om-os/om-haervejsmarchen, hentet 1. marts 2023

**Mød to deltagere**
Erik Jensen er 80 år og har deltaget på alle hærvejsmarcher siden den første i 1969. Han fortæller:

Det er en dejlig tradition. Jeg har altid godt kunnet lide at vandre i naturen. Da jeg var barn, gik jeg tit tur sammen med min bedstefar, der gik ved hjælp af sin elskede stok. Da Hærvejsmarchen så første gang blev holdt, var jeg ikke i tvivl om, at jeg skulle være med, og det har jeg så været lige siden.

Jeg har igennem mit efterhånden snart lange liv haft mange gode oplevelser i forbindelse med marcherne. Jeg har nydt den friske luft og den frie natur, og jeg har mødt aktive og glade mennesker fra hele Danmark og mange andre steder i verden. Jeg møder stadig nye mennesker og får nye oplevelser hvert år, men det vigtigste for mig er at vandre med den gruppe af venner, som jeg har vandret med gennem alle årene – vi er 3-4 stykker tilbage. Vi havde så for nogle år siden en halvtredsårs jubilæumsfest, og det var en meget stor og helt særlig oplevelse for mig og mine venner. Det var helt specielt at kunne fejre så mange års sammenhold og fælles minder fra de mange hærvejsmarcher.

Lisbeth og Sven Larsen har mange gange vandret Hærvejsmarchen sammen. Lisbeth fortæller:

Traditionen med at tage til Viborg og vandre sammen med tusinder af andre mennesker vil vi slet ikke undvære. Vi nyder at vandre i naturen og være en del af et stort mellemfolkeligt fællesskab. Min mand og jeg har vandret sammen i over 25 år med undtagelse af nogle år, hvor det ikke var muligt, fordi vores børn var for små til at kunne gå med. Da de blev større, gik jeg med igen, og børnene har også været med flere gange. Sven har kun misset et enkelt år, hvor han ikke kunne vandre. Det var fordi, han havde spillet en fodboldkamp en uge før marchen, og der var han så uheldig at brække anklen i en tackling. Men det er også den eneste gang, Sven ikke har været med, og vi regner med at være med i mange år endnu.

**TRE BORGERE I VIBORG FORTÆLLER OM BYEN**

**Steen Hermann om sport og sammenhold**
Jeg voksede op i den vestlige del af Viborg i efterkrigsårene. Vi drenge spillede fodbold og havde forskellige småjobs efter skole. Jeg var ret god og kom også på Viborg FF’s andethold. Men så blev jeg tømrer, og da jeg fik mit eget firma, stoppede jeg. Nu er jeg pensionist og arbejder ikke længere, men interessen for fodbold har jeg stadig. Når Viborg spiller på hjemmebane, så er jeg altid på stadion for at støtte dem. Det kan jeg slet ikke undvære. Jeg møder stadig nogle af mine gamle fodboldkammerater fra dengang, jeg selv spillede. Vi har stadig et rigtigt godt sammenhold.

Men det er ikke kun i fodbold, Viborg klarer sig rigtigt godt som sportsby. Det gør byen i høj grad også i håndbold, især kvinderne har succes. Jeg ser nogle gange deres kampe, dog kun på tv, så det er ikke kun fodbold, jeg følger. Jeg tror, der er mange borgere i Viborg, der er stolte over, at byen er så succesfuld, og det er noget, der er med til at skabe sammenhold. Jeg er imponeret over den opbakning vores sportsfolk får. Sporten er virkelig noget, vi er sammen om her i Viborg.

**Nina Eriksen om byens parker**
Jeg er vild med, at Viborg har så mange offentlige parker og grønne områder. Det er skønt, når man bor i lejlighed, at der er større udearealer, hvor børnene kan brænde noget energi af. Jeg er især vild med Borgvold. Det er et smukt gammelt parkanlæg i romantisk stil med både kanaler, broer og små stier. Der er også en musiktribune og nedenfor parken er der to søer, som man kan sejle på med det lille skib ”Margrete I”. Det er børnene helt vilde med. Og de er næsten lige så glade for at lege på legepladsen og skøjte på skøjtebanen, som anlægges midt i parken om vinteren. Så det er ikke kun mig, der er vild med Borgvold, det er børnene også.

**Stinne Holm om at være frivillig på Paletten**
Jeg er frivillig på Paletten, som er et spillested i Viborg. Der er kun enkelte faste medarbejdere, og så er vi 100-120 frivillige. Vi er blandt andet bartendere, garderobepersonale, scenefolk og nogle, der stiller op til koncerterne.

Der kommer især kunstnere inden for rytmisk musik. Der kommer både velkendte artister og nye, mindre kendte musikere og spiller. Selvom der især spilles rytmisk musik, har vi også en gang imellem klassiske koncerter. Det er primært torsdag, fredag og lørdag, der er koncerter. På de øvrige hverdage udlejes Paletten til andre aktiviteter, primært kulturelle.

Som frivillig møder jeg en masse mennesker, både koncertgæster og andre frivillige, og som et særligt plus har jeg også fået nye venner. Jeg har også gratis adgang til de fleste koncerter, så jeg kan kun anbefale at blive frivillig på Paletten.`,
    questions: [
      // Søg informationer under Attraktioner i og omkring Viborg
      { type: "short", n: 1, q: "(Attraktioner i og omkring Viborg) Hvad har der tidligere været i den bygning, hvor Skovgaard Museet ligger?",
        accept: uniq(combos(["", "i", "der har været"], ["", "byens", "det", "et", "viborgs"], ["", "gamle", "gammelt"], ["rådhus", "rådhuset"])) },
      { type: "short", n: 2, q: "(Attraktioner i og omkring Viborg) Hvor mange kilometer af minegangene i Mønsted Kalkgruber er der lys i?",
        accept: uniq(combos(["", "cirka", "ca", "omkring", "ca cirka"], ["to", "2"], ["", "kilometer", "km"], ["", "er oplyst", "oplyst"])) },
      { type: "short", n: 3, q: "(Attraktioner i og omkring Viborg) Hvornår blev opførelsen af den nuværende Viborg Domkirke færdig?",
        accept: uniq(combos(["", "i", "i år", "år"], ["1876"])) },
      { type: "short", n: 4, q: "(Attraktioner i og omkring Viborg) I udstillingen i Tømmerladen i Hvolris Jernalderlandsby kan man se originale krukker fra udgravninger. Hvilke brugsgenstande kan man se kopier af i udstillingen?",
        accept: uniq(combos(["", "kopier af", "man kan se kopier af"], ["", "nogle af de", "nogle af", "nogle", "de"], ["dragter", "dragterne"],
          ["", "fra jernalderen", "fra jernalderen man har fundet i moser", "fra jernalderen fundet i moser", "man har fundet i moser", "fra moser", "fra moserne", "fundet i moser"])
          .concat(["jernalderdragter", "kopier af jernalderdragter", "dragter fra jernalderen fundet i moserne"])) },
      // Søg informationer under Viborg bys historie
      { type: "short", n: 5, q: "(Viborg bys historie) Hvordan blev trafikforholdene i Viborg forbedret i 1800-tallet, udover at der kom jernbaner til byen?",
        accept: uniq(combos(["", "med en", "med", "en", "ved en", "ved", "ved at bygge en", "der kom en", "de byggede en", "man byggede en", "der blev bygget en"], ["dæmning", "dæmninger"], ["", "over søerne", "over søen", "over de to søer"])) },
      { type: "short", n: 6, q: "(Viborg bys historie) Hvilken type industri blev Viborgs største i midten af 1900-tallet?",
        accept: uniq(combos(["", "den"], ["tekstil", "tekstilindustri", "tekstilindustrien", "tekstil industri", "tekstil industrien", "tekstilbranchen", "tekstilbranche", "tekstilindustrier"])) },
      // Søg informationer under Hærvejsmarchen i Viborg
      { type: "short", n: 7, q: "(Hærvejsmarchen i Viborg) Hvad hedder den byfest, der holdes i Viborg i den uge, hvor Hærvejsmarchen gennemføres?",
        accept: ["snapsting", "den hedder snapsting", "byfesten hedder snapsting", "snapsting byfest"] },
      { type: "short", n: 8, q: "(Hærvejsmarchen i Viborg) Hvor stor en del af deltagerne i Hærvejsmarchen vandrer begge dage – både lørdag og søndag?",
        accept: uniq(combos(["", "ca", "cirka", "omkring", "ca cirka"], ["halvdelen", "halvdelen af deltagerne", "halvdelen af dem", "halvdelen af vandrerne", "halvdelen af 7-9.000", "halvdelen af 7.-9.000", "halvdelen af 7-9000", "halvdelen af 7.000-9.000", "en halvdel", "halvdel", "50 %", "50%", "50 procent", "1/2", "½",
          "3.500-4.500", "3500-4500", "3.500 til 4.500", "3500 til 4500", "3.500-4.500 deltagere", "3500-4500 deltagere", "3.500-4.500 vandrere", "3500-4500 vandrere"])) },
      { type: "short", n: 9, q: "(Hærvejsmarchen i Viborg) Kan man få udleveret den mad, man har bestilt i forvejen, ude på marchruterne? Svar ’ja’ eller ’nej’.",
        accept: ["nej", "ja"] },
      { type: "short", n: 10, q: "(Hærvejsmarchen i Viborg) Hvad fejrede Erik Jensen for nogle år siden med den gruppe venner, han har vandret med gennem alle årene?",
        accept: uniq(combos(["", "deres", "et", "en", "sit"], ["", "halvtredsårs", "halvtreds års", "halvtredsårs-", "50 års", "50-års", "50års", "50 årigt", "50-årigt", "50 årig", "50-årig", "halvtredsårigt"], ["jubilæum", "jubilæumsfest", "jubilæet", "jubilæums fest"])
          .concat(combos(["", "så", "deres", "de fejrede"], ["mange års sammenhold", "mange års sammenhold og fælles minder", "mange års sammenhold og fælles minder fra de mange hærvejsmarcher"]))
          .concat(combos(["", "deres"], ["fælles minder", "fælles minder fra de mange hærvejsmarcher", "fælles minder fra hærvejsmarcherne"]))) },
      { type: "short", n: 11, q: "(Hærvejsmarchen i Viborg) Hvorfor var der et år, hvor det ikke var muligt for Sven Larsen at gå Hærvejsmarchen?",
        accept: uniq(combos(["", "han havde", "fordi han havde", "han havde nemlig", "fordi"], ["brækket anklen", "brækket sin ankel", "brækket ankel", "brækket anklen i en tackling", "brækket anklen i en fodboldkamp", "brækket anklen til fodbold", "brækket sin ankel i en fodboldkamp", "brækket sin ankel i en tackling", "brækket anklen i en tackling i en fodboldkamp"])
          .concat(combos(["", "han", "fordi han", "da han"], ["brækkede anklen", "brækkede sin ankel", "brækkede anklen i en tackling", "brækkede anklen i en fodboldkamp", "brækkede anklen til fodbold"]))
          .concat(combos(["", "han havde", "fordi han havde", "han havde fået", "fordi han havde fået"], ["en brækket ankel", "brækket ankel"]))) },
      // Søg informationer under Tre borgere i Viborg fortæller om byen
      { type: "short", n: 12, q: "(Tre borgere i Viborg fortæller om byen) Hvorfor stoppede Steen Hermann på Viborg FF’s andethold i fodbold?",
        accept: uniq(combos(["", "han fik", "fordi han fik", "da han fik", "han startede", "fordi han startede", "han åbnede", "fordi han åbnede", "fik"], ["eget firma", "sit eget firma", "sit eget tømrerfirma", "eget tømrerfirma", "et firma", "et tømrerfirma", "sit eget firma som tømrer", "et eget firma"])
          .concat(combos(["", "han", "fordi han", "da han"], ["blev tømrer"]))
          .concat(combos(["", "han", "fordi han", "da han"], ["blev tømrer og fik sit eget firma", "blev tømrer og fik eget firma", "blev tømrer og fik et firma"]))) },
      { type: "short", n: 13, q: "(Tre borgere i Viborg fortæller om byen) Møder Steen Hermann nogle gange op til Viborg håndboldkvinders hjemmekampe? Svar ’ja’ eller ’nej’.",
        accept: ["nej", "nej kun på tv", "nej han ser dem kun på tv"] },
      { type: "short", n: 14, q: "(Tre borgere i Viborg fortæller om byen) Hvilken af de aktiviteter, Nina Eriksen nævner, er børnene især glade for?",
        accept: uniq(combos(["", "at"], ["sejle", "sejle på søerne", "sejle på de to søer", "sejle på søen", "sejle med det lille skib", "sejle med skibet", "sejle i skib", "sejle med et skib", "sejle i båd", "sejle med båden",
          "sejle med margrete i", "sejle med margrete 1", "sejle med skibet margrete i", "sejle med skibet margrete 1", "sejle med det lille skib margrete i", "sejle med det lille skib margrete 1",
          "sejle på søerne med det lille skib", "sejle på de to søer med det lille skib", "sejle på søerne med margrete i", "sejle på søerne med det lille skib margrete i", "sejle på de to søer med det lille skib margrete i", "sejle på de to søer med margrete i"])
          .concat(["sejltur", "sejlture", "en sejltur", "sejlads", "sejlturen", "sejltur på søerne", "sejlture på søerne", "en sejltur med margrete i", "sejltur med margrete i",
            "skib", "skibet", "det lille skib", "margrete i", "margrete 1", "skibet margrete i", "skibet margrete 1", "det lille skib margrete i", "det lille skib margrete 1"])) },
      { type: "short", n: 15, q: "(Tre borgere i Viborg fortæller om byen) Hvad synes Stinne Holm især er positivt ved det at være frivillig på Paletten, udover at hun kan høre gratis koncerter?",
        accept: uniq(combos(["", "hun har fået", "at hun har fået", "at få", "hun får", "at hun får", "fået", "får", "hun har også fået", "at hun også har fået"], ["nye venner"])
          .concat(combos(["", "hun", "at hun"], ["møder en masse mennesker og har fået nye venner", "møder mange mennesker og har fået nye venner", "møder en masse mennesker og får nye venner", "møder mange mennesker og får nye venner", "møder en masse mennesker og har også fået nye venner"]))
          .concat(combos(["", "at"], ["møde en masse mennesker og få nye venner", "møde mange mennesker og få nye venner"]))) }
    ]
  };

  const branche = {
    id: "pd3-24m-2", group: G, real: true,
    title: "Delprøve 2A – At skifte branche",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 20,
    instruction: "Læs teksten At skifte branche. Herunder er der tre spørgsmål til teksten. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A, 2B og 3 – varer i alt 65 minutter.)",
    text: `**At skifte branche**

Der kan være mange grunde til, at man vælger at skifte branche, selvom man er midt i livet, fortæller Ask Nielsen, der har været karriererådgiver igennem 15 år. En af de mange klienter, han har hjulpet videre, er Pia Lehmann. Hun er oprindelig uddannet lærer, men efter nogle år i jobbet indså hun, at det ikke rigtig var noget for hende. ”Det var på mange måder skønt at være lærer, og jeg havde nogle dejlige elever og gode kolleger. Men jeg havde det svært med alle de krav om administrative opgaver, læreplaner og detaljerede årsplaner, som tog tid fra min kerneopgave som lærer. Det gjorde, at jeg ikke havde mulighed for at være så god en lærer, som jeg gerne ville.”

Pia Lehmanns historie er typisk, siger Ask Nielsen. Hun oplevede en tiltagende utilfredshed med sin jobsituation, og hun fokuserede overvejende på det, hun gerne ville være fri for. ”Det er et udmærket sted at starte, men det er ikke nok, hvis man vil have et tilfredsstillende arbejdsliv,” siger han. I det samarbejde og den proces, der fulgte, fandt de frem til, at Pia Lehmann i virkeligheden havde lyst til at udfordre sig selv på en ny måde. ”Jeg kunne mærke, at jeg gerne ville prøve at folde nogle af mine andre talenter ud, selvom det virkede skræmmende til at starte med: Jeg ville skrive og fordybe mig. Derfor blev jeg journalist, men først efter at have taget en særlig tillægsuddannelse på Journalisthøjskolen i Aarhus.”

Pia Lehman er glad for, at hun tog springet ud i noget nyt, og at hun fandt frem til noget, hun hellere ville. Men der er mange, der undlader at skifte karriere, selvom de ikke føler, de får særlig meget ud af deres arbejdsliv og faktisk drømmer om noget helt andet. ”Der er nogle, der grundlæggende er usikre på, om de virkelig kan løfte nogle helt nye opgaver, og om de er villige til at arbejde mere, end de er vant til,” siger Ask Nielsen. ”Som ny medarbejder i en branche bliver det ofte forventet, at man er virkelig flittig i starten. Det kan selvfølgelig virke lidt afskrækkende.” Der er dog oftest noget andet på spil, der vejer tungere. Har folk arbejdet i samme job i mange år, er man ofte fanget i det, man kalder Det gyldne bur. ”I Det gyldne bur nyder man både stor anerkendelse fra sine kolleger, og man har på grund af sin anciennitet en vis position i firmaet og får også en god løn. Det er derfor tit sværere at skifte karriere med alderen,” siger Ask Nielsen.

Efter fire gode år som journalist fik Pia Lehmann et nyt job i et ministerium. Det er imidlertid ikke, hvad Ask Nielsen ville kalde et egentligt brancheskifte, for hun arbejder stadig med sproglig formidling. ”Jeg brænder stadig for at kommunikere på forskellige måder og på forskellige platforme,” siger Pia Lehmann. ”Men som almindelig journalist skal man ind imellem formidle historier, man ikke selv synes er særlig spændende. Derfor søgte jeg et job som konsulent med ansvar for udvikling af en helt ny hjemmeside i et ministerium, og det har jeg ikke fortrudt. Her føler jeg både, at jeg gør en forskel og bruger mine evner på alle mulige måder.”

Ifølge Ask Nielsen er journalister heldigere stillet end mange andre faggrupper. ”Journalister har nogle meget efterspurgte kompetencer, som kan anvendes i mange sammenhænge,” siger Ask Nielsen. ”Det betyder også, at der er mange forskellige jobs at få inden for mange forskellige områder.”

Derfor er det også forholdsvist sjældent, man ser journalister skifte til et helt andet arbejdsområde. Og det er Pia Lehmann også et godt eksempel på.`,
    questions: [
      { type: "mc", n: 1, q: "Hvorfor begyndte Pia Lehmann at overveje, om lærerjobbet var det rigtige for hende?",
        options: ["Hun syntes ikke, hun som lærer havde mulighed for at bruge sine evner til at fordybe sig og skrive.", "Hun syntes ikke, hun havde nok tid og frihed til at undervise, som hun gerne ville.", "Hun syntes ikke, hun var kvalificeret til at lave administrative opgaver."], answer: 1 },
      { type: "mc", n: 2, q: "Hvad er den mest almindelige grund til, at der er nogle, der ikke skifter karriere, selvom de er utilfredse med deres arbejdsliv?",
        options: ["De tvivler på deres egne kompetencer inden for et nyt område.", "De vil ikke arbejde så meget, som man ofte gør i begyndelsen i et nyt job.", "De vil ikke miste de privilegier, de har opnået i deres nuværende job."], answer: 2 },
      { type: "mc", n: 3, q: "Hvilket udsagn er i overensstemmelse med det, der står i teksten?",
        options: ["Journalister har generelt gode muligheder for at finde arbejde i forskellige brancher.", "Journalister foretrækker generelt at arbejde i andre brancher end mediebranchen.", "Journalister har generelt nemt ved at få arbejde, selvom de arbejder med sproglig formidling."], answer: [0, 2] }
    ]
  };

  const fireDage = {
    id: "pd3-24m-3", group: G, real: true,
    title: "Delprøve 2B – En fire-dages arbejdsuge?",
    kind: "Læseforståelse 2 · indsæt de manglende tekstdele (A-G)",
    level: 3, minutes: 25,
    instruction: "Læs teksten En fire-dages arbejdsuge? I teksten er der fjernet fem tekstdele. Dette er angivet med tallene 1-5. Herunder findes de fem tekstdele samt to ekstra, der ikke passer i teksten. Tekstdelene er angivet A, B, C, D, E, F og G. Vælg bogstavet for den tekstdel, der passer ind i teksten det sted, der er markeret med tallet. Hvert bogstav må kun bruges én gang. Der gives 2 point for hvert korrekt svar.",
    text: `**En fire-dages arbejdsuge?**

Siden fagforeningernes opkomst i slutningen af det 19. århundrede har man diskuteret lønmodtagernes arbejdstid. Men siden 1990 er arbejdstiden i Danmark faktisk ikke blevet reguleret. I mere end 30 år har arbejdstiden for de fleste fuldtidsansatte været 37 timer, og de fleste har arbejdet fem dage om ugen. Men måske kan man organisere arbejdslivet anderledes. Efterhånden er der en del virksomheder, der finder på andre måder at tilrettelægge en arbejdsuge på. Fælles for dem alle er, at de gerne vil gøre arbejdsugen mere fleksibel for de ansatte. Dels for lettere at kunne fastholde dem, der allerede er ansat, dels for lettere at kunne rekruttere nye, efterspurgte kræfter.

[[1]]

Det er derfor en stor opgave for en virksomhed at organisere arbejdslivet mere fleksibelt, så der bliver taget hensyn til alle.

Af nye måder at organisere arbejdslivet på er det særligt den fire-dages arbejdsuge, der har tiltrukket sig opmærksomhed i de senere år. Med den fire-dages arbejdsuge er der tale om en nytænkning af, hvordan hverdags- og arbejdslivet kan hænge sammen. Det er et brud med idéen om, at arbejdsugen går fra mandag til fredag. Der er stadig ikke så mange virksomheder, der tilbyder ordningen, men der bliver flere og flere. Og det er der måske god grund til.

[[2]]

Ifølge fagforeningen HK kan netop en fire-dages arbejdsuge være et godt værktøj til at løse nogle af disse problemer. Når arbejdsugen og weekenden er næsten lige lange, kan man nå at komme ned i gear og få tankerne et helt andet sted hen, når man har fri. Og man har også typisk mere overskud til at arbejde koncentreret, når man er på arbejde.

Det er bare ikke helt entydigt, hvad en fire-dages arbejdsuge egentlig er. I nogle virksomheder betyder det, at man arbejder 37 timer på fire dage. I andre betyder det, at man også arbejder færre timer om ugen.

[[3]]

Der er også virksomheder, der blot tilbyder deres medarbejdere en fire-dages arbejdsuge på nedsat tid og løn. Det er der nemlig også flere og flere, der ønsker. De ønsker, at arbejdet fylder mindre i tilværelsen. Det giver dem en bedre balance mellem arbejde og fritid, hvor der er mere tid til familien og hobbyer.

Der er dog stadig en vis modstand blandt visse arbejdsgivere mod en fire-dages arbejdsuge.

[[4]]

Der er konkurrence om de kvalificerede medarbejdere, og undersøgelser viser, at medarbejderne bliver mere loyale over for virksomheden, hvis de ikke skal arbejde så mange timer. Undersøgelser viser også, at det kan blive lettere at rekruttere nye medarbejdere. En fire-dages arbejdsuge kan altså være en fordel i konkurrencen om medarbejdere. Det gælder ikke mindst inden for de områder, hvor der er mangel på arbejdskraft.

Interessen for den fire-dages arbejdsuge tyder på, at flere virksomheder kommer til at tilbyde deres medarbejdere denne løsning. Men det er måske ikke kun virksomhedernes organisering af arbejdsugen, der kommer til at forandre sig.

[[5]]

Det er samfundet ikke klar til endnu. På mange af de virksomheder, der har fire-dages arbejdsuge, er det derfor ikke alle medarbejderne, der kan have fri om fredagen.`,
    questions: [{
      type: "gaps",
      bank: [
        { key: "A", text: "I Danmark er der nemlig hver dag 35.000 sygemeldinger som følge af stress. Dertil kommer selvfølgelig andre sygemeldinger og andet fravær på grund af almindelig nedslidning." },
        { key: "B", text: "Det forventes nemlig som nævnt, at nye medarbejdere ikke arbejder hjemme, men altid møder ind på arbejdspladsen." },
        { key: "C", text: "Der er dog udfordringer ved individuelt tilpassede arbejdsforhold, da medarbejdere har forskellige behov. Nogle trives for eksempel bedst med at arbejde på kontoret, andre hjemme. Nogle foretrækker at arbejde tidligt, andre sent." },
        { key: "D", text: "Måske fordi det umiddelbart kan virke ulogisk at nedsætte arbejdstiden i en tid, hvor der er mangel på arbejdskraft. Men det er det ikke nødvendigvis." },
        { key: "E", text: "Den daglige drift er derfor ledernes ansvar, men det er stadig medarbejderne, der udfører opgaverne. Og tilfredse medarbejdere genererer mere værdi i virksomheden." },
        { key: "F", text: "I nogle virksomheder er man lykkedes med at lære nye og mere effektive arbejdsrutiner. Man udfører det samme arbejde på kortere tid, og lønnen er forblevet den samme." },
        { key: "G", text: "Når flere virksomheder indfører en fire-dages arbejdsuge, skal kunder og borgere også vænne sig til, at man ikke kan komme i kontakt med en medarbejder fem dage om ugen." }
      ],
      answers: { 1: "C", 2: "A", 3: "F", 4: "D", 5: "G" }
    }]
  };

  const bymidter = {
    id: "pd3-24m-4", group: G, real: true,
    title: "Delprøve 3 – Nethandel og storcentre truer livet i bymidterne",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Nethandel og storcentre truer livet i bymidterne. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Nethandel og storcentre truer livet i bymidterne**

Folk benytter sig i stigende grad af nethandel, og der er bygget storcentre overalt i landet. Det kan mærkes i mange byer, hvor butikker må [[0]] i bymidterne.

Bymidterne har historisk været et sted, hvor folk mødtes på torve og markeder for at handle og blive underholdt. Men i dag er bymidterne truet, da butikkerne i bymidterne har svært ved at klare sig i konkurrencen med nethandlen og storcentrene, og kunderne svigter. Man ser [[1]] i dag flere og flere tomme butikslokaler rundt omkring i landets byer. Problemet er [[2]] konkurrencen fra nethandlen og storcentrene. Det er også ejerne af bymidternes erhvervslokaler, der kræver høje [[3]]. Historisk har det nemlig været attraktivt at have en butik i centrum. Det har været lig med mange kunder og stor indtjening. Sådan er det bare ikke mere. Men omkostningsniveauet er stadig højt.

Den faldende handel i bymidterne er [[4]], der bekymrer mange, også politikerne. Det kan nemlig generelt forringe [[5]] for borgerne, hvis butikkerne i bymidterne lukker. Butikkerne har nemlig især i de mindre byer, hvor der heller ikke er storcentre, en vigtig rolle for folks psykiske og fysiske velvære. Det har de, fordi de lokale butikker typisk støtter arrangementer og events, der ud over at få folk ind til byen, også kan give folk mulighed for oplevelser og aktiviteter at mødes om.

Bekymringen har fået Indenrigs- og Boligministeriet til at udvælge ti byer i en forsøgsordning. De ti byer får statslig støtte til at nytænke bymidterne. Målet er at skabe bymidter, hvor folk kommer af andre grunde end blot for at handle. Formålet med bymidterne skal altså tænkes bredere end i den klassiske handelsby, hvor det primært var handlen, der fik folk ind til centrum. De ti udvalgte byer har for eksempel tænkt velfærdsfunktioner som biblioteker og borgerservice ind i deres planer for nyt liv i bymidterne. De har [[6]] tænkt flere grønne områder og pladser ind, hvor der kan arrangeres fx events og koncerter.

Det er dog ikke kun politisk, der kan gøres en indsats. De lokale butikker kan selv gøre noget for at blive mere attraktive. De kan blandt andet tilbyde den samme [[7]] som netbutikkerne. Hvis de for eksempel ikke har mulighed for at have så mange varer på lager i butikken, kan de tilbyde at fremskaffe dem inden for 24 timer og levere dem til døren. De kan også tilbyde samme pris som en netbutik, hvis den fysiske butik ikke umiddelbart matcher den pris man kan få online.

Endelig har de lokale butikker også [[8]], som man ikke skal undervurdere. I modsætning til nettet og storcentrene rummer mange byer gamle, smukke huse og en historie, der går langt tilbage i tiden. Det er en kulisse for shoppingoplevelser, som hverken nettet eller et moderne shoppingcenter kan konkurrere med.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["omvendt", "alligevel", "derfor", "dog"],
        2: ["ikke alene", "derudover", "tværtimod", "næsten aldrig"],
        3: ["omkostninger", "forsikringer", "huslejer", "udbetalinger"],
        4: ["et mål", "et argument", "en undtagelse", "en tendens"],
        5: ["varernes kvalitet", "velstanden", "udvalget af varer", "livskvaliteten"],
        6: ["imidlertid", "desuden", "derimod", "nemlig"],
        7: ["service", "rente", "vejledning", "reklame"],
        8: ["et ansvar", "en fordel", "et mål", "en udfordring"]
      },
      example: { 0: "lukke" },
      answers: { 1: "derfor", 2: "ikke alene", 3: "huslejer", 4: "en tendens", 5: "livskvaliteten", 6: "desuden", 7: "service", 8: "en fordel" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(viborg, branche, fireDage, bymidter);
})();
