// Prøve i Dansk 3, maj-juni 2022 – læseforståelse, transcribed from the exam papers
// (Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Danske småøer" nr. 14;
// Læseforståelse 2: opgavehæfte nr. 17 and teksthæfte nr. 16).
// The answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur passed on to us (delprøve 1 items 5 and 6).
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures from the tekstsamling are left out (logos and maps; they are not needed for any answer).
// This session has no delprøve 3: Læseforståelse 2 is 2A (two texts, 7 multiple choice) and 2B (cloze).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points.
// The app scores every question as 1, so 2A counts half as much here as at the exam.
// Omregningstabel (sommer 2022): 37-36 = 12, 35-32 = 10, 31-26 = 7, 25-21 = 4, 20-19 = 02, 18-10 = 00, 9-0 = -3.
//
// Also: skriftlig fremstilling (produktionsnr. 18). Task wording, the friend's e-mail, the questions and
// the chart labels are copied from the papers; the chart is cropped into images/pd3-2022m/.
// The chart values are read off the bar chart (ca.-values). All model answers are our own
// (the papers have none). The oral material (mundtlig kommunikation) for this session is not included yet.

(function () {
  const G = "PD3 maj-juni 2022";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const smaaoer = {
    id: "pd3-22m-1", group: G, real: true,
    title: "Delprøve 1 – Danske småøer",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Danske småøer. Brug indholdsfortegnelsen. Svar præcist og kort på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Sammenslutningen af Danske Småøer … 3
Turisme på tre danske småøer … 5
   Anholt … 5
   Mandø … 6
   Femø … 8
Erhverv og projekter på danske småøer … 10
   Erhvervsaktivitet på småøerne … 10
   Ø-pas … 10
   Ø-specialiteter … 11
   Grøn Boligaftale … 11
Tre øboere fortæller … 12

**SAMMENSLUTNINGEN AF DANSKE SMÅØER**

**Øerne i sammenslutningen**
Sammenslutningen af Danske Småøer holdt stiftende generalforsamling i 1974 på Strynø. Sammenslutningen er 27 danske småøers interesseorganisation og er styret af øboere. Målet er at bevare og udvikle de små helårssamfund på øerne. Den øverste myndighed i organisationen er generalforsamlingen, som består af en valgt øbo fra hver af de 27 øers beboerforeninger. Fælles for øerne er, at de ikke er brofaste, ikke er selvstændige kommuner, og at de er helårssamfund, hvor der maksimalt må være 1.200 beboere. De mindste øer i sammenslutningen er Hjortø og Birkholm syd for Fyn med henholdsvis 8 og 10 beboere, mens den største ø er Orø i Holbæk Fjord med 968 beboere (år 2021).

Anledningen til stiftelsen var bl.a. en kommunalreform, hvor de sidste sogneråd blev nedlagt, og øerne mistede deres ’selvstændighed’. Man ønskede at etablere et talerør for øerne.

Affolkningen af øerne var begyndt at tage fart i 1960’erne, og i midten af 70’erne forudså en gruppe embedsmænd i en rapport, at ø-samfund på under 500 beboere indenfor en overskuelig fremtid ville blive affolket. Så det var disse udfordringer, man fra øernes side ville arbejde for at løse.

**Fakta om Danmarks øer**
Danmark har 1419 øer, hvoraf 443 er navngivne, og 78 er beboede. 27 af disse er medlemmer af Sammenslutningen af Danske Småøer, stiftet 1974, hvor man samarbejder om fælles ø-problemer som færgefart, vandforsyning, nødberedskab, skolebetjening m.m.

Kilde: https://denstoredanske.lex.dk/ø, hentet 1. marts 2021

**Befolkningsudviklingen**
Den samlede ø-befolkning ser ud til at være stabiliseret de sidste 10-15 år. Men der er store forskelle øerne imellem. De øer, der har sværest ved at fastholde en helårsbefolkning, er øer med en kombination af lang sejltid, fravær af skole og ringe adgang til basal offentlig service. Derfor arbejder Sammenslutningen af Danske Småøer for, at de små ø-skoler bevares, ligesom der arbejdes for at få etableret passende lægedækning, så utryghed ikke tvinger folk til at flytte fra øerne. I perioden fra 2017-2019 har de små øer samlet set oplevet en fremgang i befolkningstallet. En helt ny udvikling, som ikke er set siden 1960’erne.

**Befolkningssammensætningen**
Befolkningssammensætningen er forskellig fra ø til ø. På nogle øer udgør aldersgruppen 50+ mere end 70 % af befolkningen, mens andre øer synes attraktive for familier med småbørn, og børnenes andel af befolkningen her ligger over landsgennemsnittet. For alle de små øer gælder det, at gruppen af 18-34-årige er meget svagt repræsenteret. Måske ikke overraskende, da det jo for denne aldersgruppe gælder om at uddanne sig og opleve verden.

Kilde: Bearbejdet efter https://danske-smaaoer.dk/om-os/fakta-og-historie/, hentet 1. marts 2021

**Konkurrencen om Årets Ø**
Årets Ø blev første gang kåret i 2020. Alle danske øer uden fast broforbindelse kan ansøge og deltage i konkurrencen. Partnerskabet om kåringen af Årets Ø er indgået mellem Sammenslutningen af Danske Småøer, Forenet Kredit og Landdistrikternes Fællesråd. Det fælles ønske for partnerne er, at alle ønsker at gøre en aktiv indsats for at styrke sammenhængskraften i hele Danmark – også på de danske øer.

Initiativtagerne til kåringen af Årets Ø definerer hvert år et tema, og det er et krav til dette tema, at det er aktuelt. For at blive kåret til Årets Ø skal man have fokus på dette tema i ansøgningen. Komitéen for Årets Ø nominerer tre øer, der hver aflægges et besøg. Vinderen af Årets Ø modtager 50.000 kr. til relevante projekter samt 20.000 kr. som et bidrag til en kåringsfest. De to øvrige nominerede øer modtager hver en pris på 25.000 kr., som de kan bruge til udvikling af lokalsamfundet. Årets Ø bliver kåret hvert år i begyndelsen af juni.

Kilde: Lettere bearbejdet efter https://danske-smaaoer.dk/wp-content/uploads/2019/12/Ø-Posten-178-skaerm.pdf, hentet 1. marts 2021

**TURISME PÅ 3 DANSKE SMÅØER**

**Anholt**

**Øen**
Anholt, ø midt i Kattegat, ca. 50 km nordøst for Djursland; 22 km², 136 indbyggere (2021). Anholt hører til Norddjurs Kommune. Øen består af et morænebakkeland og et marint forland, Ørkenen. En stor del af øen, deriblandt hele Ørkenen, er fredet.

Turisme er øens vigtigste erhverv. Ca. 50.000 turister besøger årligt Anholt, og de bor på campingpladser eller i sommerhusene uden for Anholt by. Fiskeri er øens eneste primærerhverv, og fangsten sendes til Grenaa.

Kilde: https://denstoredanske.lex.dk/Anholt, hentet 26. februar 2021

**Anholtfærgen**
Færgen er en aktiv medspiller i øens største erhverv – turismen. Når turistsæsonen er på sit højeste, er der travlhed på færgen ’Anholt’, der i juli måned alene transporterer 40 procent af årets totale antal passagerer. Små tre timers sejltid skal man indstille sig på, hvis man skal fra fastlandet til øen Anholt i Kattegat. Færgen er hjemmehørende på Anholt, hvorfra der som hovedregel er afgang om morgenen mod Grenaa med retursejlads om eftermiddagen. I forbindelse med helligdage og i turisthøjsæsonen er der dage med dobbeltture, og tidspunkterne varierer, da sejlplanen er tilpasset flere hensyn. Om søndagen afgår færgen fx først fra Anholt ved middagstid, så turister kan have formiddagen på øen. I ydersæsonerne og om vinteren er der som hovedregel slet ingen færgeafgange om onsdagen, lørdagen og søndagen. Og i april, når færgen dokkes, er øen uden færgeforbindelse en uge.

Kilde: Lettere bearbejdet efter http://www.co-sea.dk/anholt.69233.aspx, hentet 1. marts 2021

**Naturen**
Ørkenen dækker 4/5 af øens areal og består af aflejringer fra istiden, hævet havbund og morænebakker. Ørkenen har altid været meget omtalt, da en række interessante arter af fx fugle, insekter og planter har deres foretrukne levested i den særegne natur. Ørkenen blev fredet allerede i 1939 og er et enestående naturområde i Danmark. Yderst på Anholts østspids ligger Totten. Området er fredet og må ikke betrædes af mennesker. Det er nemlig et sælreservat, hvor Danmarks største sælkoloni med ca. 1.200 spættede sæler og enkelte gråsæler lever. Man kan kigge på sælerne i kikkerten fra observationshuset, som ligger lige ved Anholt Fyr.

Kilde: Lettere bearbejdet efter http://visitanholt.dk/naturen, hentet 1. marts 2021

**Mandø**

**Øen**
Mandø, ø i Vadehavet¹ ud for Vester Vedsted sydvest for Ribe; ca. 8 km²; 33 indbyggere (2021). Mandø er omgivet af store vader og højsander, der er begrænset af Knudedyb mod nord og Juvre Dyb mod syd. Mandø By på den vestlige del af øen har kirke, kro, mølle og campingplads. Mandø Museum, Mandøhuset, er indrettet i et hus fra 1831 og viser et skipperhjem fra den tid.

Kilde: http://denstoredanske.lex.dk/Mandø, hentet 12. december 2020

¹ Et Vadehav er et område, der er dækket af vand ved højvande, mens der er tørt ved lavvande. De tørlagte områder kaldes vader.

**Traktorbusser på Mandø**
I sommerhalvåret krydser to traktorbusser dagligt vaden til og fra Mandø. Det kan anbefales at køre til Mandø med traktorbusserne. Det er i sig selv en stor oplevelse, og så kommer man til og fra Mandø i god behold. De to selskaber er stort set identiske, men deres afgangstider varierer.

Mandø Kro og Traktorbusser tager dig med til Mandø, en naturperle midt i Nationalpark Vadehavet. Turen til og fra øen er gennem vadehavet. Der er afgang fra Mandøvej 31, 6760 Ribe. Mandø Kro og Traktorbusser tilbyder også guidede gåture i Mandø by. På rundturen bliver der fortalt historier og anekdoter om Mandø og om livet på øen i gamle dage. Turen varer ca. 1½ time.

Mandøbussen har i mere end 30 år kørt gæster til og fra Mandø. Turen går gennem Nationalpark Vadehavet og er en helt unik oplevelse. Mandøbussen er en specialbygget traktorbus, som transporterer turister og fastboende til og fra vadehavsøen Mandø. Bussens afgangstider er afhængige af tidevandet (ved normalt højvande er der 1,75 meter vand over Ebbevejen), men i sommerhalvåret kører den 1-2 gange om dagen (om vinteren efter aftale). Der er afgang fra parkeringspladsen vest for Vester Vedsted, ved Vadehavscentret. Turen varer ca. 40 minutter.

Mandøbussen arrangerer også køreture rundt på Mandø. Turen foregår i traktorbussen, så ældre og dårligt gående ligeledes kan se øen. Under turen bliver der fortalt om Mandøs historie, ø-liv, tidevandet, storme og meget mere. Turen varer ca. 35 min.

Kilde: Lettere bearbejdet efter https://www.visitribeesbjerg.dk/ribe-esbjerg/oplev-vadehavet/transport-til-mando, hentet 1. marts 2021

**Østerstur i Vadehavet**
Man kan tage med en naturvejleder på østerstur og samle stillehavsøsters i Vadehavet. Det anbefales kun at samle østers på den kølige tid af året, dvs. at sæsonen starter midt i oktober, når vandtemperaturen er faldet, og går frem til foråret – til udgangen af april. Ved at fravælge de varmeste måneder minimerer man risikoen for at østersene indeholder giftige alger. At spise østers indsamlet i Vadehavet foregår på eget ansvar, uanset om man er på tur med en naturvejleder eller er ude på egen hånd.

Kilder: Lettere bearbejdet efter https://www.visitribeesbjerg.dk/ribe-esbjerg/planlaeg-ferien/oesterssafari-i-vadehavet-gdk1111751, hentet 1. marts 2021

**Femø**

**Øen**
Femø, ø i Smålandsfarvandet; ca. 11 km²; 112 indbyggere (2021). Moræneøen ligger i Lolland Kommune og har færgeforbindelse til Kragenæs på Lolland. Øen er tvedelt af en smal øst-vestgående dal og når i Issemose Bjerg på den sydlige del op på 22 meter over havets overflade. Jorden er frugtbar. Hovedparten af bebyggelsen på øen er samlet i landsbyerne Nørreby og Sønderby på øens midte, begge med et stjerneformet udskiftningsmønster. Et lille sommerhusområde ligger på øens østlige del.

Kilde: http://denstoredanske.lex.dk/Femø, hentet 13. december 2020

**Femø Kvindelejr**
Femø Kvindelejr blev første gang afholdt 1971. Ø-lejren var åben for kvinder og børn, dog måtte drenge over 12 år ikke deltage. Formålet med lejren var at være et forum for politiske drøftelser og et frirum for alle kvinder. Lejren er siden blevet afholdt hvert år og varer 8 uger. Femølejrene blev arrangeret og planlagt af Femøgruppen, der var en gruppe i rødstrømpebevægelsen. På lejren var der dog ingen formel ledelse. Større beslutninger blev taget i fællesskab på stormøder i lejren. Udover fælles madlavning og afslapning bestod aktiviteterne af kurser og workshops, der spændte fra selvundersøgelse til akademiske oplæg om kvindelitteratur og ligeløn.

I starten af 1980’erne var der mange diskussioner om lejrens fremtid. De drejede sig især om, hvorvidt lejren skulle blive ved med at være så politisk præget, og om hvor fælles lejrlivet skulle foregå. Det endte med, at det politiske indhold blev mindre og mindre, at der kom et øget fokus på personlig udvikling, og at Femøgruppen i 1984 løsrev sig fra rødstrømpebevægelsen og blev en selvstændig institution.

Kilde: Lettere bearbejdet efter https://danmarkshistorien.dk/leksikon-og-kilder/vis/materiale/femoe-kvindelejr-1971/, hentet 1. marts 2021

**Femø jazzfestival**
I 2019 fejrede festivalen 50-års jubilæum, og dermed er Femø Jazz Festival en af landets ældste festivaler med overnatning. Festivalen voksede støt i 1970’erne, og Femø Kros lokaler blev for trange. Festivalen flyttede derfor til en naturskøn strandeng, hvor den også ligger i dag. Her kan gæsterne slå telte op eller parkere med campingvogne.

De seneste år har festivalen haft ca. 1.000 gæster, inklusive frivillige og musikere. Gæster og jazzmusikere fra ind- og udland besøger øen, og de fragtes alle til festivalen med færge. Femø Jazz Festival har rødder i den traditionelle jazz, og derfor er det hvert år musikere fra New Orleans, der udgør ét af hovednavnene og underviser de unge talenter på Femø Masterclass. De senere år er paletten blevet bredere inden for jazz-genren, når man kigger musikprogrammet igennem, dog uden at give slip på forkærligheden for den traditionelle jazz.

Kilde: Lettere bearbejdet efter https://femoejazz.dk/om-festivalen/, hentet 1. marts 2021

**ERHVERV OG PROJEKTER PÅ DANSKE SMÅØER**

**Erhvervsaktivitet på småøerne**
Det siger sig selv, at de små øer ikke har de store virksomheder, der kan tilbyde en bred vifte af jobmuligheder. Den erhvervsaktive øbo arbejder typisk med egen virksomhed eller i offentlige jobs som ansat på færgen, skolen, i kirken eller hjemmeplejen. Undtagelsen er dog øen Fur i Limfjorden, der har flere større virksomheder.

Traditionelle erhverv som landbrug, håndværk, handel og fiskeri spiller stadig en vis rolle på de små øer, ligesom der er jobs inden for turismeerhvervet. Men stadig flere arbejder også som fx freelancejournalister, oversættere eller konsulenter. Der er i de seneste år kommet hurtigt internet på de fleste øer, og netop dette har været afgørende for, at flere nu arbejder som selvstændige fra en lille ø. Der er dog også mange øboere, der pendler – nogle med en aftale om delvis hjemmearbejdsplads. Hvis man skal sammenligne med pendlere andre steder, så bruger sjællændere ofte mere end en time på at sidde i bilkø for at komme til arbejde. Øboere pendler langt hyggeligere med færgen.

Kilde: Lettere bearbejdet efter https://danske-smaaoer.dk/bliv-oebo/erhvervsaktiv-paa-oeerne/, hentet 1. marts 2021

**Ø-pas**
Ø-passet er et turismeprojekt hos Sammenslutningen af Danske Småøer, der ligner et pas og præsenterer 38 danske øer med færgeadgang.

I en hvid cirkel på den enkelte øs opslag i passet kan turisten fra en plade på havnen eller færgen gnide en silhuet af øen over i passet med en særlig pen og på den måde samle på ø-mærker. Denne gimmick er turisterne glade for og konkurrerer gerne med familie og venner om, hvem der har besøgt flest øer. I ø-passet vises hver ø med et kort, et foto, faktaoplysninger, lidt om hvad der kan ses og opleves på øen, samt en QR-kode, der viser hen til øens egen hjemmeside. Man kan hente det på ø-færger eller turistkontorer på øerne, så længe lager haves. Her er det gratis. Man kan også bestille Ø-passet og få det tilsendt mod et gebyr via hjemmesiden oepas.dk.

Kilde: Lettere bearbejdet efter https://danske-smaaoer.dk/turist/oe-pas/, hentet 1. marts 2021

**Ø-specialiteter**
En lang række fødevareproducenter på de danske småøer har dannet Småøernes Fødevarenetværk, som arbejder for at udvikle og markedsføre kvalitetsfødevarer fra øerne. Ø-specialiteter er et varemærke udviklet af Småøernes Fødevarenetværk. Det er forbeholdt fødevarer af en særegen kvalitet og historik, udviklet og produceret af producenter på én af de 27 småøer spredt ud over Danmark. Produkterne er i vid udstrækning produceret og forædlet på øerne med det formål at skabe lokal identitet og jobmuligheder på øerne. Man kan finde spændende produkter som øl, most, cider, syltetøj, lam og kvæg fra friland, saft, grøntsager og meget mere.

Kilde: Lettere bearbejdet efter https://danske-smaaoer.dk/turist/oe-specialiteter/, hentet 1. marts 2021

**Grøn boligaftale**
I projektet Nye naboer – mere ø-liv havde Sammenslutningen af Danske Småøer sammen med LAG Småøerne, der er småøernes lokale aktionsgruppe, fokus på boligsituationen på småøerne. Udgangspunkt var, at det ikke nytter med bosætningskampagner, branding m.m., hvis der ikke er ledige, anvendelige boliger på øerne. Projektet viste bl.a. et behov for flere lejeboliger, som kan være attraktive for potentielle tilflyttere, der ikke er parate til at købe en bolig.

I 2020 indgik regeringen en grøn boligaftale med en række partier i folketinget. En del af aftalen retter sig mod ”småøerne og fire ø-kommuner”. Denne ø-boligpakke indeholder tre elementer, som skal fremme de almene boliger på småøerne: 1) tilskud til nye boliger, 2) tilskud til huslejenedsættelse og 3) mere fleksible regler for finansiering af almene boliger.

Kilde: Lettere bearbejdet efter http://lag-smaaoerne.blogspot.com/2020/11/boligtilskud.html, hentet 1. marts 2021

**TRE ØBOERE FORTÆLLER**

**Danielle Aubert, Fejø**
Vi kommer fra Toulouse i Sydfrankrig. Vi ville flytte til København, fordi min mand fik arbejde der, men vi kunne ikke finde en bolig. Vi endte med at flytte til Maribo, men der faldt vi aldrig rigtig til. En dag mødte jeg en anden fransk kvinde, og hun boede på Fejø. Hun inviterede os til at komme over på øen. Først var jeg lidt bekymret og tænkte: ”Wow, hvor langt væk er det? Man skal jo med færge”. Men vi blev positivt overraskede, da vi besøgte Fejø. Vi besøgte også skolen, og jeg tænkte, at Fejø var et helt vidunderligt sted.

**At lære det danske sprog**
Vores søn Michel havde udfordringer i børnehaven i Maribo, da han havde svært ved dansk, og han nærmede sig skolealderen. Det ville være perfekt for Michel at starte i Fejø Skole, da klasserne er små, så læreren bedre kunne holde fokus på at lære ham dansk. Så vi besluttede at prøve at flytte til Fejø, og vi fandt hurtigt et hus at leje og har været fejøboere siden. Michel går nu i 1. klasse på skolen på øen, mens lillesøster Sophie går i børnehave. Begge børn er ved at være gode til dansk. Jeg går på sprogskole og fik startet et sproghold på Fejø i foråret. Der er faktisk mere end 15 forskellige nationaliteter her på øen. Og så går jeg også til dans på øen, for man lærer bedst et nyt sprog ved at komme ud blandt lokale. Jeg er uddannet fysioterapeut og venter på, at min franske uddannelse bliver godkendt i Danmark. Når det sker, vil jeg starte op som selvstændig – og gerne her på Fejø.

**Lisbeth Hansen, Strynø**
Vi bor tre generationer her på Strynø. Min mand, Thor, og jeg bor i en tidligere landejendom, og vores søn og svigerdatter, Lars og Louise, bor kun tre minutters gang herfra med vores barnebarn, Niklas. Det var meget spontant, at vi alle besluttede at flytte herover. Vi havde længe snakket om, at der skulle ske noget nyt i vores liv, og da vi for nogle år siden var på sejltur med et stop på Strynø, satte det for alvor gang i drømmen om ø-liv, og heldigvis var vores søn og hans familie med på ideen.

**Udfordringer ved flytningen**
Ikke alt var dog lige let ved at flytte. Heldigvis hjalp Strynøs bosætningsgruppe os fra starten. De svarede på vores spørgsmål, og det var også dem, der bakkede os op, da vi fik problemer med at optage boliglån. Bosætningsgruppen på Strynø kunne nemlig anbefale et realkreditinstitut, som ville låne os penge, og så kunne vi købe det hus, vi ville.

**Dorte Sørensen, Omø**
Jeg er vokset op på Omø, men jeg flyttede derfra som 16-årig for at uddanne mig. I 2016 flyttede jeg sammen med min mand og vores datter fra Vesterbro i København til lærerboligen på Omø Skole, hvor jeg fik et vikariat som lærer. Det skulle bare være midlertidigt, og så skulle vi tilbage til storbyen. Sådan gik det imidlertid ikke. I dag er vi som 36-årige nemlig flyttet i et lille hus på øen. Vi har købt grunden ved siden af, hvor vi er i gang med at etablere en have. Vi har fået en lille søn, og min mand har startet eget firma på øen. Der er gang i den.

**Tilbage til Omø**
Måske lå det alligevel i kortene, at Omø skulle blive mit hjem som voksen. For min mor vendte også hjem til Omø efter en periode væk fra øen:

Min mormor flyttede til Omø med min mor i starten af 1970’erne. De boede på den lokale restaurant, som min mormor drev. Min mor flyttede siden til Norge, hvor hun blev gift og fik min søster og mig. Mine forældre blev dog skilt, og jeg flyttede derfor fra Oslo til Omø sammen med min mor og søster i 1984, da jeg var to år. På det tidspunkt boede vi fire generationer herovre. Min søster og jeg, vores mor, mormor og hendes forældre, mine oldeforældre, der også havde valgt at slå sig ned her. Så vi er en familie af tilflyttere. Jeg flyttede fra øen som teenager for at starte på gymnasiet i Slagelse i 1998, og senere studerede jeg i København. Men nu er jeg altså tilbage på min barndoms ø.

Teksterne er inspireret af teksterne på https://danske-smaaoer.dk/bliv-oebo/moed-en-oebo/, hentet 1. marts 2021`,
    questions: [
      // Søg informationer under Turisme på tre danske småøer
      { type: "short", n: 1, q: "(Turisme på tre danske småøer) Hvornår sejler Anholtfærgen fra Anholt om søndagen i højsæsonen?",
        accept: uniq(["ved middagstid"].concat(combos(["", "ved", "omkring", "først ved", "den sejler ved", "den sejler først ved", "den afgår ved", "den afgår først ved", "fx først ved", "om søndagen ved"], ["middag", "middagstid", "middagstiden"]))
          .concat(combos(["", "ved", "omkring", "først ved", "først"], ["kl 12", "klokken 12", "kl 12 00", "12 tiden"]))) },
      { type: "short", n: 2, q: "(Turisme på tre danske småøer) Store dele af naturen på Anholt er fredet. Hvorfor er Anholts østspids fredet?",
        accept: uniq(combos(["", "det er et", "fordi det er et", "da det er et", "det er nemlig et", "der er et", "fordi der er et", "et"], ["sælreservat"])
          .concat(combos(["", "der er en", "fordi der er en", "da der er en", "der lever en", "fordi der lever en", "der bor en", "fordi der bor en", "en"], ["", "stor", "danmarks største"], ["sælkoloni"]))
          .concat(combos(["", "det er et", "fordi det er et"], ["sælreservat og der er en sælkoloni", "sælreservat og sælkoloni", "sælreservat sælkoloni", "sælreservat med en sælkoloni", "sælreservat med danmarks største sælkoloni", "sælreservat hvor danmarks største sælkoloni lever"]))
          .concat(["sælkoloni og sælreservat", "på grund af sælerne", "fordi der lever sæler", "der lever sæler", "for at beskytte sælerne", "for at beskytte sælkolonien"])) },
      { type: "short", n: 3, q: "(Turisme på tre danske småøer) Mandøbussen kører både til og fra Mandø og rundt på Mandø. Hvor lang tid tager en køretur rundt på Mandø?",
        accept: uniq(["ca. 35 minutter"].concat(combos(["", "ca", "cirka", "omkring", "ca cirka", "turen varer ca", "turen varer cirka", "den tager ca", "det tager ca", "den varer ca"], ["35", "femogtredive"], ["minutter", "min", "minutters"]))) },
      { type: "short", n: 4, q: "(Turisme på tre danske småøer) Hvad er der risiko for, at østers indeholder, hvis man samler dem i Vadehavet ud for Mandø uden for sæsonen?",
        accept: uniq(combos(["", "at de indeholder", "de kan indeholde", "at de kan indeholde", "at østersene indeholder", "der er risiko for"], ["giftige alger", "giftig alger", "giftalger", "gift alger", "giftige alge"])) },
      { type: "short", n: 5, q: "(Turisme på tre danske småøer) Hvad fik et større fokus på Femø Kvindelejr i 1980’erne?",
        accept: uniq(combos(["", "der kom et øget fokus på", "et øget fokus på", "et større fokus på", "fokus på", "der kom mere fokus på", "den"], ["personlig udvikling", "den personlige udvikling"])
          .concat(combos(["", "der var mange diskussioner om", "diskussioner om", "mange diskussioner om", "diskussionen om"], ["lejrens fremtid", "fremtiden for lejren"]))
          .concat(["personlig udvikling / lejrens fremtid", "personlig udvikling og lejrens fremtid", "lejrens fremtid og personlig udvikling", "personlig udvikling lejrens fremtid"])) },
      // Søg informationer under Erhverv og projekter på danske småøer
      { type: "short", n: 6, q: "(Erhverv og projekter på danske småøer) Hvorfor er der i dag flere selvstændige erhvervsaktive øboere end tidligere?",
        accept: uniq(["hurtigt internet"].concat(combos(["", "der er kommet", "der er i de seneste år kommet", "der er i de senere år kommet", "fordi der er kommet", "fordi der er i de seneste år kommet", "fordi der er i de senere år kommet", "da der er kommet", "de har fået", "fordi de har fået", "øerne har fået", "fordi øerne har fået", "på grund af", "pga"],
          ["", "hurtigt", "hurtig", "hurtigere", "bedre"], ["internet", "internettet", "internetforbindelse", "internetforbindelser"], ["", "på de fleste øer", "på øerne"]))) },
      { type: "short", n: 7, q: "(Erhverv og projekter på danske småøer) Kan man få tilsendt et Ø-pas gratis? Svar ’ja’ eller ’nej’.",
        accept: ["nej", "nej det koster et gebyr", "nej man skal betale et gebyr", "nej mod et gebyr", "nej det skal man betale for", "nej det er kun gratis på færger og turistkontorer"] },
      { type: "short", n: 8, q: "(Erhverv og projekter på danske småøer) Hvad er formålet med produkterne fra Ø-specialiteter udover at skabe lokal identitet på småøerne?",
        accept: uniq(["at skabe jobmuligheder på øerne"].concat(combos(["", "at skabe", "at give", "skabe", "give", "at skabe flere", "flere"], ["job", "jobs", "jobmuligheder", "arbejdspladser", "arbejde", "beskæftigelse"], ["", "på øerne", "på småøerne", "på øen"]))) },
      { type: "short", n: 9, q: "(Erhverv og projekter på danske småøer) Hvad gør regeringens grønne boligaftale fra 2020 det muligt at få tilskud til ud over huslejenedsættelse?",
        accept: uniq(["nye boliger"].concat(combos(["", "til", "tilskud til", "at bygge", "byggeri af"], ["", "nye", "flere"], ["", "almene"], ["boliger", "bolig"]))) },
      // Søg informationer under Sammenslutningen af Danske Småøer
      { type: "short", n: 10, q: "(Sammenslutningen af Danske Småøer) Hvor mange beboere må der højst være på en ø, for at den kan være medlem af Sammenslutningen af Danske Småøer?",
        accept: uniq(["1.200"].concat(combos(["", "højst", "maksimalt", "max", "maks", "der må højst være", "der må maksimalt være", "under"], ["1.200", "1200", "tolv hundrede", "tolvhundrede", "et tusind to hundrede"], ["", "beboere", "indbyggere", "personer", "mennesker"]))) },
      { type: "short", n: 11, q: "(Sammenslutningen af Danske Småøer) Befolkningssammensætningen på øerne er forskellig. Hvilken aldersgruppe er generelt svagt repræsenteret på alle småøer?",
        accept: uniq(["18-34-årige"].concat(combos(["", "de", "gruppen af", "aldersgruppen", "unge", "de unge", "den unge aldersgruppe", "aldersgruppen fra", "de unge fra", "unge på", "unge mellem"], ["18-34", "18-34-årige", "18-34 år", "18 til 34", "18 til 34 år", "18 til 34-årige", "18 og 34", "18 og 34 år"]))
          .concat(combos(["", "fra"], ["18 år til 34 år"]))) },
      { type: "short", n: 12, q: "(Sammenslutningen af Danske Småøer) Hvad kendetegner det tema, som konkurrencen om Årets Ø skal have fokus på?",
        accept: uniq(["det er et aktuelt tema"].concat(combos(["", "det er", "det skal være", "at det er", "at det skal være", "det er et", "det skal være et", "et", "temaet er", "temaet skal være", "det er et krav at det er", "kravet er at det er"], ["aktuelt", "aktuel"], ["", "tema"]))) },
      // Søg informationer under Tre øboere fortæller
      { type: "short", n: 13, q: "(Tre øboere fortæller) Hvorfor mener Danielle Aubert, at læreren på Fejø Skole kunne have særligt fokus på at lære hendes søn dansk?",
        accept: uniq(combos(["", "fordi", "da", "fordi at"], ["klasserne er små", "klasserne på fejø skole er små", "klasserne på skolen er små", "der er små klasser", "skolen har små klasser", "der er få elever i klasserne", "der er få elever i hver klasse"])
          .concat(["små klasser", "de små klasser", "på grund af de små klasser", "pga de små klasser"])) },
      { type: "short", n: 14, q: "(Tre øboere fortæller) Hvilken udfordring havde Lisbeth Hansen og hendes mand, da de ville flytte til Strynø?",
        accept: uniq(["at optage boliglån"].concat(combos(["", "at", "problemer med at", "de fik problemer med at", "de havde problemer med at", "de havde svært ved at", "svært ved at", "det var svært at", "de kunne ikke", "det var svært for dem at"],
          ["optage boliglån", "optage et boliglån", "optage lån", "optage et lån", "få boliglån", "få et boliglån", "få et lån", "få lån", "låne penge", "få lov at låne penge"]))
          .concat(combos(["", "problemer med", "de fik problemer med", "de havde problemer med", "de havde problemer med deres", "de fik problemer med deres"], ["boliglån", "boliglånet", "et boliglån", "lån", "lånet", "et lån", "at få lån", "finansieringen"]))
          .concat(combos(["", "at", "svært ved at", "det var svært at", "de havde svært ved at", "problemer med at", "de havde problemer med at", "de kunne ikke"], ["købe hus", "købe et hus", "købe det hus de ville", "købe bolig", "købe en bolig", "købe huset"]))
          .concat(combos(["", "at", "problemer med at", "de havde problemer med at", "de fik problemer med at"], ["optage boliglån og købe hus", "optage et boliglån og købe et hus", "få et boliglån og købe et hus", "låne penge og købe hus", "låne penge til et hus", "låne penge til at købe et hus", "få et lån til at købe et hus", "få et lån til et hus"]))) },
      { type: "short", n: 15, q: "(Tre øboere fortæller) Dorte Sørensen er flyttet tilbage til Omø. Hvor gammel var hun, da hun første gang flyttede til øen?",
        accept: uniq(["to år"].concat(combos(["", "hun var", "da hun var", "som", "hun var kun", "kun"], ["to", "2"], ["", "år", "år gammel", "årig"]))) }
    ]
  };

  const jobsogning = {
    id: "pd3-22m-2", group: G, real: true,
    title: "Delprøve 2A – Jobsøgning og rekruttering",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 40,
    instruction: "Læs teksterne Veje til det første job og Personlighedstest. Herunder er der syv spørgsmål til de to tekster. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1: Veje til det første job**

Mange nyuddannede går arbejdsløse længe, inden de får deres første rigtige fuldtidsarbejde. Det er der flere grunde til. Nogle gange er det, fordi der ganske enkelt ikke er så mange jobs i netop deres branche. Andre gange er det, fordi arbejdsgiverne prioriterer ansøgere, der både har uddannelse og erfaring. Som nyuddannet har man typisk ikke erfaring med sit fag endnu.

Det ved Kamilla og René alt om. De havde begge svært ved at få deres første rigtige fuldtidsarbejde.

Kamilla er uddannet antropolog fra Syddansk Universitet. ”Egentlig ville jeg have læst medicin, for så er man nærmest sikker på at få et job bagefter,” fortæller hun. ”Men jeg brændte simpelthen mere for antropologi. Derfor valgte jeg at læse antropologi, selvom jeg godt vidste, det ville blive svært at få et arbejde.”

Kamilla har ikke fortrudt sit valg, men hun understreger, at det faktisk var svært at finde et job. Det lykkedes hende først efter et års jobsøgning. Men det blev ikke et job som antropolog. Hun fik i stedet et job som SoMe-redaktør på et stort forlag i København.

Hun fik jobbet efter at være blevet kontaktet af en gammel skolekammerat på LinkedIn, der gjorde hende opmærksom på jobbet. ”Det var ikke inden for mit fagområde, men jeg tænkte, at jobbet jo egentlig lød spændende og ikke krævede særlige specialistkompetencer, så det kunne jeg godt,” siger Kamilla og fortsætter: ”Jeg var virkelig glad for, at det endelig lykkedes at få et job, og selvom jeg ikke har fået arbejde som antropolog, kan jeg bruge meget af det, jeg har lært på studiet. Og så er mit arbejde udfordrende, og jeg lærer noget nyt hver dag.”

Inden Kamilla fik jobbet, havde hun ligesom de fleste andre nyuddannede brugt meget tid på at lære at skrive ansøgninger og CV og syntes også selv, hendes ansøgninger var gode. Da hun også i løbet af sit studie havde fået mange høje karakterer, mente hun selv, at hun var kvalificeret og hurtigt ville få et job.

Selvom hun måtte revidere sine forventninger undervejs, tænker hun ikke længere så meget på, at året med jobsøgning var frustrerende. Hun er blot glad for, at det via aktivt brug af sit netværk på de sociale medier endelig lykkedes hende at få et job.

René er uddannet mediegrafiker fra Syddansk Erhvervsskole. ”Jeg har altid gerne villet være mediegrafiker,” fortæller han. ”Og jeg havde også et studiejob på en lokalavis, mens jeg studerede, og det har jeg kunnet bruge i mine jobansøgninger.” Men det var alligevel ikke let for René at finde sit nuværende drømmejob i et reklamefirma. Han gik faktisk arbejdsløs i næsten et halvt år, før han fik jobbet, og som en del af firmaets rekrutteringsproces måtte han også tage en personlighedstest. Den viste, at René både er kreativ og struktureret, hvilket netop var egenskaber, firmaet efterspurgte.

Inden René fik sit job, var han til andre jobsamtaler uden succes. Han tror, at han kunne have fået et job før, hvis han havde været mindre kritisk i forhold til, hvilke job han søgte. ”Jeg søgte kun de mest attraktive job inden for mit område, så der var stor konkurrence. Men jeg sørgede i det mindste for at forbedre mine chancer for at komme til jobsamtale. I det halve år, jeg var arbejdsløs, tog jeg forskellige kurser i A-kassen. Jeg tog blandt andet kurser i at skrive ansøgninger – og jeg blev til sidst rigtig god til at beskrive alt det, jeg kan,” siger han med et smil.

Typisk lærer man ikke noget om at søge job, når man går på en uddannelse. Det mener både Kamilla og René er en fejl. De har begge to selv måttet lære, hvordan man finder et godt job, når man er færdig med sin uddannelse. Derfor har de flere gode råd til unge jobsøgende, der lige er blevet færdige med deres uddannelse. ”Brug de sociale medier. Det er vigtigt at gøre opmærksom på, at man er jobsøgende på alle platforme,” siger Kamilla og giver endnu et godt råd: ”Et gennemarbejdet, overskueligt og velordnet CV er også vigtigt.” René nikker og tilføjer: ”Det er nemlig ofte det første, en arbejdsgiver kigger på.” Han anbefaler desuden, at man søger hjælp hos sin A-kasse så hurtigt som muligt: ”De kan hjælpe en med at få lavet en god jobplan,” siger han og fortsætter: ”Med en god jobplan bliver jobsøgningen mere overskuelig og mere målrettet.”

Uanset hvad man gør som nyuddannet jobsøgende, så er Kamilla og René enige om, at det for mange kræver hårdt arbejde at få sit første job.

**Tekst 2: Personlighedstest**

I Danmark anslås det, at op mod 70 % af private og offentlige virksomheder anvender personlighedstest, når de skal rekruttere nye medarbejdere. Men bidrager den slags test egentlig med noget?

Er du først og fremmest udadvendt og impulsiv? Eller er du mere indadvendt og omhyggelig? Det kan en personlighedstest vise, i hvert fald hvis man spørger Anne Lund fra AL Rekruttering:

”Der er ingen tvivl om, at en personlighedstest er et rigtig godt udgangspunkt for en jobsamtale. Den siger noget om, hvordan din personlighed er skruet sammen: Hvad er det, der er særligt ved dig og din måde at arbejde på? Hvorfor skal en virksomhed ansætte dig og ikke den næste kandidat?”

Det er derfor, mener hun, at op mod 70 % af alle virksomheder anvender personlighedstest, når de skal rekruttere. Og det gør de, selvom det er dyrt at få dem lavet. ”De nye forbedrede personlighedstest kan koste mange tusinde kroner,” fortæller hun. ”Så hvis der er mange kandidater til det samme job, så bliver det nogle dyre rekrutteringsprocesser.”

Men måske er de penge givet godt ud. Det mener Anne Lund i hvert fald. Hun mener nemlig, at man spilder mange ressourcer på at ansætte en medarbejder, der alligevel ikke passer til jobbet. Hvis man lykkes med at ansætte den rigtige medarbejder første gang, så er mange penge sparet.

**Virker personlighedstest?**
Anne Lund medgiver, at selve ordet ’personlighedstest’ er uheldigt. ”Man burde kalde det en personlighedsprofil i stedet. Det er nemlig ikke en eksamen, og der er hverken rigtige eller forkerte svar,” siger hun. ”Det er altså et uheldigt ordvalg, fordi en personlighedstest egentlig ikke er en test. Det er en grundig beskrivelse af en personlighed.”

For Martin Holm, ph.d. i psykologi, er det langt fra det eneste problem ved personlighedstest. Han har kritiseret dem for flere ting: ”Fx er det et problem, at vi mennesker næsten altid forstår spørgsmål på forskellige måder,” begynder han. ”Hvis to kandidater forstår det samme spørgsmål forskelligt, så kan man ikke sammenligne svarene og have tillid til testresultaterne. Og det er jo ellers det, der er meningen.”

Det er Anne Lund delvist enig i, og hun understreger, at det netop er derfor, en personlighedstest ikke kan stå alene: ”Sammen med et CV og en ansøgning danner personlighedstesten et godt udgangspunkt for en grundig jobsamtale. Det er ikke meningen, at man kun skal lave en personlighedstest.”

Alligevel mener Martin Holm ikke, at personlighedstesten er særlig brugbar: ”Vi mennesker forandrer os alt efter den sammenhæng, vi indgår i og også fra dag til dag. Vi kan være udadvendte i én sammenhæng og indadvendte i en anden. Og vi kan være udadvendte den ene dag og indadvendte den næste,” fortæller han.

Anne Lund fastholder dog, at det ofte lykkes for rekrutteringsfirmaerne at finde gode kandidater ved hjælp af personlighedstest: ”I AL Rekruttering har vi hjulpet mange virksomheder med at finde den rigtige medarbejder, og personlighedstest har været en stor hjælp undervejs.”

Martin Holm medgiver, at rekrutteringsvirksomhederne ofte har succes med at finde den helt rigtige kandidat: ”Men det er ikke, fordi personlighedstest virker,” mener han. ”At de ser ud til at virke, skyldes simpelthen, at vi mennesker har en evne til at tilpasse os i en ny kontekst og fx løse nye opgaver i et nyt job og tilpasse os nye rutiner og en anden tone medarbejderne imellem. Det er noget, de fleste kvalificerede og egnede nye medarbejdere lærer hurtigt.”

**Alternative test**
Anne Lund mener, det ville være svært at undvære personlighedstest: ”Med en god personlighedstest i hånden kan vi stille bedre spørgsmål til jobsamtalen,” siger hun og understreger: ”Personlighedstest er et helt centralt redskab i den proces, det er at ansætte en ny medarbejder.”

Men måske er der andre test, som er mere pålidelige. Det mener i hvert fald Martin Holm: ”Hvis man vil teste kandidaternes evner, så er det bedre at lade dem løse konkrete opgaver. De kan eventuelt løse nogle rigtige arbejdsopgaver sammen med nogle, der allerede er ansat i virksomheden. Så kan man se, hvordan de præsterer i praksis,” siger han og fortsætter: ”Den model vil også vise noget om kandidaternes evne til at samarbejde. De skal endda samarbejde i en presset situation.”

Men det vigtigste for Martin Holm er dog, at man ændrer synet på rekruttering. Han mener nemlig ikke, at den perfekte medarbejder findes: ”Den helt rigtige person til et job kan man ikke finde alene ved at udsætte ansøgere for en test. Den gode medarbejder er én, man udvikler i virksomheden,” siger han og tilføjer: ”Og det tager selvfølgelig lang tid. Meget længere tid end det tager at lave en personlighedstest.”`,
    questions: [
      // Spørgsmål til tekst 1
      { type: "mc", n: 1, q: "(Tekst 1) Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Kamilla til sidst fik held med sin jobsøgning?",
        options: ["Hun fik høje karakterer til de fleste af sine eksaminer på sit studie.", "Hun brugte meget tid på at skrive en god jobansøgning og et godt CV.", "Hun gjorde venner og bekendte opmærksom på, at hun var jobsøgende."], answer: 2 },
      { type: "mc", n: 2, q: "(Tekst 1) Hvad var ifølge teksten mest afgørende for, at René fik sit job i reklamefirmaet?",
        options: ["Hans personlige kvalifikationer.", "Hans erfaringer fra et studiejob.", "Hans gode jobansøgning."], answer: 0 },
      { type: "mc", n: 3, q: "(Tekst 1) Hvilket råd giver både Kamilla og René til jobsøgende?",
        options: ["Prioritér at skrive et ordentligt CV.", "Lav en jobplan sammen med din A-kasse.", "Gør opmærksom på dig selv på sociale medier."], answer: 0 },
      // Spørgsmål til tekst 2
      { type: "mc", n: 4, q: "(Tekst 2) Hvilken af følgende grunde nævner Anne Lund til, at personlighedstest bliver mere og mere almindelige?",
        options: ["Medarbejdernes personlighed er i dag vigtigere end tidligere.", "Personlighedstest kan kvalificere firmaers ansættelsesproces.", "Det er billigere at lave personlighedstest end at holde jobsamtaler."], answer: 1 },
      { type: "mc", n: 5, q: "(Tekst 2) Hvilken af følgende grunde nævner Martin Holm til, at personlighedstest ikke er et særligt godt redskab til at rekruttere nye medarbejdere?",
        options: ["Man kan ikke have tillid til, at folk svarer helt ærligt.", "Kandidaterne har ofte svært ved at forstå spørgsmålene.", "Folks adfærd afhænger af konteksten."], answer: 2 },
      { type: "mc", n: 6, q: "(Tekst 2) Hvilken af følgende grunde nævner Martin Holm til, at det tit lykkes rekrutteringsvirksomhederne at finde en medarbejder, der passer til jobbet?",
        options: ["De fleste nye medarbejdere, der er velkvalificerede, kan let tilpasse sig en ny arbejdsplads.", "De fleste nye medarbejdere, der har mange kvalifikationer, har erfaring med at løse nye opgaver på en ny arbejdsplads.", "De fleste kandidater til et nyt job, der tager personlighedstest, har erfaring med at skifte job."], answer: 0 },
      { type: "mc", n: 7, q: "(Tekst 2) Hvilket af følgende udsagn er i overensstemmelse med det, Martin Holm giver udtryk for?",
        options: ["Virksomheder bør vælge nye medarbejdere ud fra, hvordan de har løst konkrete arbejdsopgaver i tidligere job.", "Virksomheder bør kombinere personlighedstest med gode jobsamtaler, når de skal rekruttere en ny medarbejder.", "Virksomheder bør præsentere jobkandidater for en arbejdssituation for at få et realistisk indtryk af deres kvalifikationer."], answer: 2 }
    ]
  };

  const hjemme = {
    id: "pd3-22m-3", group: G, real: true,
    title: "Delprøve 2B – Flere arbejder hjemme",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 25,
    instruction: "Læs teksten Flere arbejder hjemme. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Flere arbejder hjemme**

At arbejde hjemme kan være både fleksibelt og effektivt. Men erstatter hjemmearbejdspladsen kontoret i stort omfang, kan det [[0]] gå ud over det fysiske og psykiske arbejdsmiljø.

Hjemmearbejde er i dag en naturlig del af arbejdslivet i de job, hvor det kan lade sig gøre, og det kan der være flere [[1]]. Arbejdsdagen kan eksempelvis blive mere fokuseret og effektiv. Det gælder særligt for dem, der ofte oplever at blive forstyrret på kontoret. Derhjemme er der tit mere ro til arbejdsopgaverne. [[2]] kan der spares både tid og penge på turen til og fra arbejde.

Udskifter man ofte kontoret med en hjemmearbejdsplads, skal man dog være opmærksom på, at det kræver det rigtige udstyr i hjemmet. Det er det ikke alle, der har, selvom arbejdsgiverne har ansvar for at sikre et godt fysisk arbejdsmiljø derhjemme. Et godt arbejdsmiljø er nemlig en [[3]], man har som ansat, uanset hvor man har sin arbejdsplads. Morten Skov Christiansen fra Fagbevægelsens Hovedorganisation mener, at det er [[4]], at mange arbejder mere hjemme uden det rigtige udstyr. Det kan arbejdsgiveren dog let rette op på. Det er ofte ikke så meget, der skal til, for at en arbejdsgiver [[5]] loven om arbejdsmiljø:

”For eksempel er det vigtigt, at alle os, der arbejder foran en computer, får adskilt skærm og tastatur, og at vi har et bord og en stol, der passer i højden. (…) Så undgår vi alle de museskader og spændingshovedpiner, vi ser så mange af,”¹ siger han.

Man skal også huske det psykiske arbejdsmiljø derhjemme. Det kan ske, at grænsen mellem arbejde og fritid forsvinder, når hjem og arbejdsplads ikke er fysisk adskilt. [[6]] kan man komme til at mangle struktur i sin hverdag.

Mange savner også fællesskabet med kollegerne, hvis meget af deres arbejde foregår derhjemme. Det sociale samvær på arbejdspladsen betyder ofte meget, og ensomhed og stress kan derfor være [[7]] meget hjemmearbejde. Det mener Henrik Holdt Larsen fra Copenhagen Business School (CBS). Han mener derfor, at hjemmearbejde kræver en ledelse, der er ekstra opmærksom. Hvis dette er tilfældet, vil han ikke [[8]], at hjemmearbejde netop kan være godt for medarbejderne:

”Hvis vi udnytter mulighederne, kan hjemmearbejde give større autonomi, spare transporttid, og det kan i visse situationer give en bedre balance mellem arbejdsliv og familielivet,”² siger han.

¹ Politiken, 29/9/20: EU: Vi er mestre i hjemmearbejde, men vi glemmer arbejdsmiljøet (hentet 29/12/20)
² Politiken 13/4/20: Ny undersøgelse: Hver femte chef vil have ansatte til at arbejde mere efter Coronakrisen (hentet 9/8/20)`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["betingelser for", "fordele ved", "holdninger til", "udfordringer ved"],
        2: ["Herudover", "Altså", "Hermed", "Omvendt"],
        3: ["omkostning", "forpligtelse", "fleksibilitet", "rettighed"],
        4: ["nødvendigt", "acceptabelt", "bekymrende", "uproblematisk"],
        5: ["misforstår", "overholder", "ignorerer", "glemmer"],
        6: ["Som nævnt", "Til gengæld", "Dermed", "Alligevel"],
        7: ["en konsekvens af", "en grund til", "et argument for", "en forudsætning for"],
        8: ["indrømme", "afvise", "påstå", "fastholde"]
      },
      example: { 0: "ydermere" },
      answers: { 1: "fordele ved", 2: "Herudover", 3: "rettighed", 4: "bekymrende", 5: "overholder", 6: "Dermed", 7: "en konsekvens af", 8: "afvise" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(smaaoer, jobsogning, hjemme);

  const X = PD2.EXAMS.pd3;
  const SESSION = "Maj-juni 2022";

  // ---------- Skriftlig fremstilling maj-juni 2022 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-22m-w1", delprove: 1, real: true, year: 2022, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (maj-juni 2022)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din danske ven Mia. Hun har været udstationeret i New York i tre år for et dansk firma, og nu skal hun snart hjem til Odense sammen med sin familie. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Tak for snakken i sidste uge, det var hyggeligt at tale med dig på Skype. Jeg er meget spændt på at høre om din køreprøve. «Hvordan gik det?» " +
        "Som du ved, er vores tid i New York snart slut, og vi skal hjem til Odense om tre uger. Jeg skal arbejde sammen med nogle kolleger, jeg ikke kender. «Hvad synes du, jeg skal gøre for at få en god start på arbejdet?» " +
        "Børnene er jo blevet teenagere, og de er meget kede af at sige farvel til deres venner her i New York. Jeg er spændt på, om de kan holde kontakten. «Tror du, det er muligt?» " +
        "Jens har fået nyt arbejde i Danmark, som han glæder sig til at komme i gang med efter 3 år som hjemmegående. Det nye job ligger dog 30 km fra Odense, så vi overvejer at købe en ekstra bil, men han kan også tage toget. «Hvad ville du gøre?»\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Tak for snakken i sidste uge, det var hyggeligt at tale med dig på Skype. Jeg er meget spændt på at høre om din køreprøve. Hvordan gik det?\n" +
        "Som du ved, er vores tid i New York snart slut, og vi skal hjem til Odense om tre uger. Jeg skal arbejde sammen med nogle kolleger, jeg ikke kender. Hvad synes du, jeg skal gøre for at få en god start på arbejdet?\n\n" +
        "Børnene er jo blevet teenagere, og de er meget kede af at sige farvel til deres venner her i New York. Jeg er spændt på, om de kan holde kontakten. Tror du, det er muligt?\n\n" +
        "Jens har fået nyt arbejde i Danmark, som han glæder sig til at komme i gang med efter 3 år som hjemmegående. Det nye job ligger dog 30 km fra Odense, så vi overvejer at købe en ekstra bil, men han kan også tage toget. Hvad ville du gøre?",
      underlined: [
        "Hvordan gik det?",
        "Hvad synes du, jeg skal gøre for at få en god start på arbejdet?",
        "Tror du, det er muligt?",
        "Hvad ville du gøre?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvordan gik det? (din køreprøve)",
        "Understreget: Hvad synes du, jeg skal gøre for at få en god start på arbejdet?",
        "Understreget: Tror du, det er muligt? (at børnene holder kontakten med vennerne i New York)",
        "Understreget: Hvad ville du gøre? (købe en ekstra bil eller tage toget)",
        "Foreslå, at I mødes, når Mia kommer hjem."
      ],
      phrases: ["Tak for din mail.", "Køreprøven gik …", "Du spørger, hvad du skal gøre for at …", "Jeg synes, du skal …", "Jeg tror faktisk, det er muligt, fordi …", "Hvis jeg var dig, ville jeg …", "Skal vi ikke mødes, når I er kommet hjem?", "Mange hilsner"],
      model: `Hej Mia

Tak for din mail. Det var også rigtig hyggeligt at snakke med dig på Skype.

Køreprøven gik heldigvis godt! Jeg var meget nervøs, men jeg bestod både teoriprøven og den praktiske prøve første gang. Nu kan jeg endelig køre selv.

Du spørger, hvad du skal gøre for at få en god start på arbejdet. Jeg synes, du skal være åben og nysgerrig. Spis frokost sammen med dine nye kolleger, og stil gerne mange spørgsmål. Måske kan du tage kage med den første fredag.

Jeg forstår godt, at børnene er kede af det. Men jeg tror faktisk, det er muligt at holde kontakten. Teenagere i dag er vant til at chatte og spille online sammen, og måske kan de besøge hinanden i en sommerferie.

Hvis jeg var dig, ville jeg ikke købe en ekstra bil. Det er dyrt, og Jens kan bruge tiden i toget til at læse eller slappe af. Desuden er det bedre for miljøet.

Skal vi ikke mødes, når I er kommet hjem? Jeg kommer gerne til Odense med en kage.

Mange hilsner
Kasia`
    },
    {
      id: "pd3-22m-w2a", delprove: 2, real: true, year: 2022, session: SESSION,
      title: "2A: Klimabekymring og alder (maj-juni 2022)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Klimabekymring og alder. " +
        "Diagram: Andel personer i forskellige aldersgrupper, der er meget bekymrede over klimaforandringer. " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): 18-34 år ca. 27 % · 35-49 år ca. 24 % · 50-70 år ca. 22 % · Alle ca. 24 %. " +
        "Undersøgelsen er foretaget blandt et repræsentativt udvalg på 2.000 personer i alderen 18-70 år. Kilde: https://ida.dk. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2022m/klimabekymring-diagram.png",
      imageAlt: "Søjlediagram: Andel personer i forskellige aldersgrupper, der er meget bekymrede over klimaforandringer. 18-34 år ca. 27 %, 35-49 år ca. 24 %, 50-70 år ca. 22 %, alle ca. 24 %.",
      chart: {
        title: "Andel personer i forskellige aldersgrupper, der er meget bekymrede over klimaforandringer",
        unit: "%", approx: true,
        source: "Undersøgelsen er foretaget blandt et repræsentativt udvalg på 2.000 personer i alderen 18-70 år. Kilde: https://ida.dk",
        bars: [
          { label: "18-34 år", value: 27 },
          { label: "35-49 år", value: 24 },
          { label: "50-70 år", value: 22 },
          { label: "Alle", value: 24 }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til de forskelle, diagrammet viser.",
        "Hvilke fordele og ulemper mener du, der kan være for samfundet ved, at unge bekymrer sig om klimaforandringerne? Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor stor en andel af …", "De unge mellem 18 og 34 år er mest …", "Derefter følger …", "Forskellene er altså ikke særlig store.", "En årsag kan være, at …", "For det første … For det andet …", "Der er dog også ulemper.", "Alt i alt mener jeg, at …"],
      model: `Unges klimabekymring – mest en styrke

Diagrammet viser, hvor stor en andel af personer i forskellige aldersgrupper der er meget bekymrede over klimaforandringerne. Undersøgelsen er foretaget blandt 2.000 personer mellem 18 og 70 år. De unge mellem 18 og 34 år er mest bekymrede med ca. 27 %. Derefter følger de 35-49-årige med ca. 24 %, mens de 50-70-årige er mindst bekymrede med ca. 22 %. I alt er ca. 24 % meget bekymrede. Forskellene er altså ikke særlig store.

En årsag kan være, at de unge skal leve længst med konsekvenserne af klimaforandringerne. Desuden lærer de om klimaet i skolen, og de bruger sociale medier, hvor emnet fylder meget. Ældre mennesker har måske flere andre bekymringer, fx deres helbred eller deres økonomi. Endelig har mange unge mere tid og energi til at engagere sig i samfundsdebatten.

Efter min mening er der flere fordele for samfundet ved, at unge bekymrer sig om klimaet. For det første ændrer mange unge deres egen hverdag. De spiser mindre kød, cykler mere og køber brugt tøj. For det andet presser de politikerne og virksomhederne til at handle, fordi de stemmer, demonstrerer og vælger grønne produkter. Et eksempel er de store klimamarcher, som har sat klimaet højt på dagsordenen.

Der er dog også ulemper. Nogle unge bliver så bange, at de får angst eller mister troen på fremtiden. Det kan gå ud over deres trivsel og skolegang. Desuden kan bekymringen skabe konflikter mellem generationerne, hvis de unge føler, at de ældre ikke tager ansvar.

Alt i alt mener jeg, at fordelene er størst. Men de voksne skal hjælpe de unge med at gøre bekymringen til handling i stedet for angst.`
    },
    {
      id: "pd3-22m-w2b", delprove: 2, real: true, year: 2022, session: SESSION,
      title: "2B: En attraktiv arbejdsplads (maj-juni 2022)",
      kind: "Prøveopgave · faktorer og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: En attraktiv arbejdsplads. " +
        "Der er forskellige faktorer, der kan have betydning for, hvor attraktiv en arbejdsplads er for medarbejderne. " +
        "Her er nogle eksempler: " +
        "• Godt samarbejde mellem kolleger • Fleksible arbejdstider • Indflydelse på egne arbejdsopgaver • God løn • Mulighed for efteruddannelse • Personalegoder. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Godt samarbejde mellem kolleger", "Fleksible arbejdstider", "Indflydelse på egne arbejdsopgaver", "God løn", "Mulighed for efteruddannelse", "Personalegoder"],
      points: [
        "Fortæl kort om en attraktiv arbejdsplads, du har været på eller har hørt om.",
        "Kommentér en eller to af faktorerne fra listen.",
        "Vurdér, om det er lederens personlige kvalifikationer eller faglige kvalifikationer, der er vigtigst for, om en arbejdsplads er attraktiv. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Jeg kender en arbejdsplads, som …", "Jeg synes, at … er den vigtigste faktor, fordi …", "… er også vigtige, især for …", "Efter min mening er … vigtigere end …", "En god leder skal kunne …", "Jeg har selv oplevet, at …", "Faglige kvalifikationer er dog også vigtige.", "Alt i alt mener jeg, at …"],
      model: `En god leder gør arbejdspladsen attraktiv

Min svoger arbejder i et lille it-firma i Aarhus, som jeg synes er en meget attraktiv arbejdsplads. Medarbejderne kan selv planlægge deres arbejdsdag, og hver fredag spiser de morgenmad sammen. Der er en god stemning, og næsten ingen bliver sygemeldt med stress. Firmaet tilbyder også efteruddannelse, og min svoger har netop været på et kursus i programmering.

Jeg synes, at godt samarbejde mellem kolleger er den vigtigste faktor på listen. Man tilbringer mange timer på arbejdet, og hvis man trives med sine kolleger, går man glad på arbejde. Fleksible arbejdstider er også vigtige, især for småbørnsforældre, som skal hente deres børn i børnehaven. Hvis man selv kan bestemme, hvornår man møder ind, bliver hverdagen meget mindre stresset.

Efter min mening er lederens personlige kvalifikationer vigtigere end de faglige, når det handler om at gøre en arbejdsplads attraktiv. En god leder skal kunne lytte, vise tillid og give ros. Hvis lederen ikke respekterer sine medarbejdere, hjælper det ikke, at han eller hun er en dygtig fagperson. Jeg har selv haft en chef, som var meget dygtig, men som aldrig sagde godmorgen. Stemningen var dårlig, og flere af mine kolleger sagde op.

Faglige kvalifikationer er dog også vigtige. Lederen skal forstå medarbejdernes opgaver, så han eller hun kan fordele arbejdet fornuftigt og træffe de rigtige beslutninger. Ellers mister medarbejderne respekten for lederen.

Alt i alt mener jeg, at en god leder har brug for begge dele. Men det er de personlige kvalifikationer, der betyder mest for, om medarbejderne trives og har lyst til at blive på arbejdspladsen.`
    }
  );
})();
