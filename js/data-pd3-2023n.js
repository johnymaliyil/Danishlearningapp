// Prøve i Dansk 3, november-december 2023 – transcribed from the exam papers.
// Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Bornholm" nr. 14;
// Læseforståelse 2: opgavehæfte nr. 17 and teksthæfte nr. 16; skriftlig fremstilling nr. 18;
// mundtlig kommunikation: picture sheets (illustrations by Niels Roland, cropped into images/pd3-2023n/)
// and the censor- og eksaminatorhæfte for the oral exam (nr. 21).
// The reading answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur (delprøve 1 items 6, 7 and 12). The short-answer accept lists
// spell out the key's optional words (in brackets) and its "og/eller" slashes, plus a few plain variants.
// Pictures from the tekstsamling are left out (their captions are not needed for any answer).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 3 × 2, 2B = 5 × 2, delprøve 3 = 8 × 1 → 39 points.
// Omregningstabel (vinter 2023): 39-38 = 12 · 37-34 = 10 · 33-28 = 7 · 27-24 = 4 · 23-21 = 02 · 20-10 = 00 · 9-0 = -3.
// The app scores every question as 1, so 2A/2B count half as much here as at the exam.
// Forcensur on skriftlig fremstilling 2B: the task does not say that kørselsfradraget applies whatever the
// means of transport, so an answer built on an unclear understanding of the deduction is not marked down.
// The chart values in 2A are read off the bar chart (ca.-values). All model answers are our own.

(function () {
  const G = "PD3 nov.-dec. 2023";
  const SESSION = "November-december 2023";
  const X = PD2.EXAMS.pd3;

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];
  // "a og b" in either order, with common separators.
  const both = (as, bs) => {
    const out = [];
    as.forEach(a => bs.forEach(b => [[a, b], [b, a]].forEach(([x, y]) =>
      out.push(`${x} og ${y}`, `${x}, ${y}`, `${x} ${y}`, `${x} & ${y}`, `${x} + ${y}`, `${x}/${y}`))));
    return out;
  };

  // ---------- Læseforståelse 1 – Bornholm ----------
  const bornholm = {
    id: "pd3-23n-1", group: G, real: true,
    title: "Delprøve 1 – Bornholm",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Bornholm. Brug indholdsfortegnelsen. Svar præcist og kort på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Bornholms natur, landskab og klima … 3
   Natur og landskab … 3
   Klima … 4
Fem seværdigheder på Bornholm … 5
   Hammershus borgruin … 5
   Rundkirkerne … 5
   Bornholms Kunstmuseum … 6
   Helligdomsklipperne … 6
   Dueodde strand … 7
Folkemødet og Bornholms Kulturuge … 8
   Om Folkemødet … 8
   Om Bornholms Kulturuge … 9
Cykelferie på Bornholm … 12
   Cykelruter på Bornholm … 12
   Bed+Bike … 13
Bornholm i tre romaner … 14
   Pelle Erobreren af Martin Andersen Nexø, 1906 … 14
   Nancy af Dennis Gade Kofod, 2015 … 14
   Burgundia af Hans Henrik Møller, 2010 … 15

**BORNHOLMS NATUR, LANDSKAB OG KLIMA**

**Natur og landskab**
Bornholms Regionskommune ligger midt i Østersøen i den allerøstligste del af landet. Den østlige beliggenhed rykker Bornholm ind i et geologisk område, som adskiller sig markant fra det øvrige Danmark. Det giver øen et helt anderledes landskab og derfor også et særegent dyre- og planteliv. Gennem hundrede millioner af år har bevægelser langs forkastninger brudt Bornholm op i et stort antal forkastningsblokke, så aflejringer fra flere geologiske tider er blevet blottet. Mange af disse aflejringer kendes ikke fra resten af Danmark. Det samme gælder det mere end 1,4 milliard år gamle grundfjeld, der er synligt på store dele af øen samt på øgruppen Ertholmene nordøst for Bornholm. Det synlige grundfjeld betyder blandt andet, at Bornholm som det eneste sted i landet har klippekyster. Ved Helligdomsklipperne, på Hammerknuden og flere andre steder falder klippesiderne lodret ned i havet. Neden for blandt andet Hammershus fungerer klippesiderne som fuglefjeld med ynglende alke, lomvier og vandrefalke. Klippekysterne huser et særligt planteliv med usædvanlige arter som melet kodriver, kantbælg, farvevajd og klipperøn.

Grundfjeldet brydes flere steder af sprækkedale, som er eroderet ud af isen under sidste istid. I den brede sprækkedal, der adskiller Hammerknuden fra det øvrige Bornholm, ligger øens største sø, Hammer Sø, der nærmest har karakter af en bjergsø. I sprækkedalene finder man desuden de eneste naturlige vandfald i Danmark, hvoraf det knap 20 meter høje vandfald i Døndalen er det bedst kendte. Da vandføringen i de bornholmske vandløb svinger meget med årstiden, gør vandfaldene sig bedst efter snesmeltningen i det tidlige forår.

**Skov**
Tidligere var midten af Bornholm dækket af vidtstrakte lyngheder og overdrev, som samlet kaldes for Højlyngen. I dag er det meste af Højlyngen forsvundet, men i fx Rutsker Højlyng kan man stadig finde små rester af det gamle bornholmske hedelandskab. Op gennem 1800-tallet blev store dele af Højlyngen tilplantet med skov, og i dag er Bornholms Regionskommune en af landets skovrigeste kommuner. Den ca. 6.000 hektar store Almindingen dækker meget af øens midte og er Bornholms største sammenhængende skovområde.

I Almindingen lever udsatte europæiske bisoner side om side med en tæt bestand af rådyr. Derudover er øen karakteriseret ved en stor mangfoldighed af flagermus samt et fravær af de fleste danske rovdyr. Blandt mårdyrene findes kun den invasive mink på Bornholm, og efter et voldsomt udbrud af skab er ræven muligvis også helt forsvundet fra klippeøen.

Den storslåede og varierende natur giver gode muligheder for friluftsliv. Ad den ca. 120 km lange Kyststien kan man vandre hele øen rundt, mens cyklister kan benytte øens mere end 230 km afmærkede cykelstier. De stejle klippevægge i nord byder på flere gode klatreruter, mens den sydlige del af øen rummer en række gode og populære badestrande. Øens lange kystlinje kan også opleves fra fx havkajak, og fra kysten eller fra båd kan man teste fiskelykken på Østersøens mange havørreder.

Kilde: https://trap.lex.dk/Bornholms_Regionskommune (let redigeret) – hentet 22/09/2022

**Klima**
Det store skovareal, det kuperede terræn og beliggenheden i Østersøen har stor betydning for klimaet på Bornholm. Om foråret er Østersøen stadig kold, og i april og maj er Bornholm en af landets koldeste egne. Til gengæld holder havet længe på sommervarmen, og fra august til december ligger Bornholm oppe blandt landets ti varmeste kommuner. Samlet set giver det en årsmiddeltemperatur, som ligger tæt på landsgennemsnittet.

Nedbøren påvirkes af havet samt det kuperede terræn, der bidrager til bygedannelsen. Der falder således også mest nedbør over Almindingen i øens kuperede midte. Om vinteren kan kold luft fra øst danne snebyger over den relativt lune Østersø, hvilket visse år medfører et kraftigt snefald på øen. Om foråret og i den tidlige sommer er Østersøen derimod kold og nedbørsmængderne tilsvarende små.

Bornholms Regionskommune hører til blandt landets solrigeste kommuner, kun overgået af Læsø og Samsø Kommuner. Fra maj til september er den faktisk landets solrigeste, men fra november til januar medfører den lune Østersø, at der dannes så mange skyer, at Bornholm i disse måneder er landets solfattigste kommune.

Kilde: https://trap.lex.dk/Bornholms_klima (let redigeret) – hentet 22/09/2022

**FEM SEVÆRDIGHEDER PÅ BORNHOLM**

**Hammershus borgruin**
På en stejl klippeknude på Bornholms nordspids står de imponerende ruiner af middelalderfæstningen Hammershus. Hammershus er Nordeuropas største borgruin og Bornholms mest besøgte seværdighed. Og det er ikke så underligt, for her kan man virkelig få gang i fantasien og opleve den bornholmske historie. Tidligere antog man, at Hammershus blev opført omkring 1259 for at befæste den magt over Bornholm, som ærkebispen af Lund (dengang dansk) havde fået over øen efter en aftale med kongen Svend Grathe. Nye udgravnings- og forskningsresultater fra 2015 går dog ud fra, at borgen først blev bygget af en senere ærkebiskop i Lund, nemlig Jens Grand, som var ærkebiskop fra 1289-1302 – dvs. at borgen faktisk først stod klar i slutningen af 1200-tallet.

Det nye Hammershus Besøgscenter giver en helt ny måde at opleve Hammershus på. Fra besøgscentret kan man se Hammershus i panoramaudsigt. Besøgscentret byder også på en fascinerende udstilling, hvor der er mulighed for at læse om borgruinens utrolige historie.

Kilde: https://bornholm.info/hammershus/ (let redigeret) – hentet 22/09/2022

**Rundkirkerne**
Ud af Danmarks i alt syv rundkirker fra middelalderen ligger de fire på Bornholm. Rundkirkerne på Bornholm har, som de øvrige rundkirker i Danmark, et rundt kirkeskib. I stedet for et sideskib har rundkirken en central kerne, der enten er rund eller ottekantet. De er bygget som kombinerede kirker og forsvarsværker, og hver af de bornholmske rundkirker har deres eget særpræg. Østerlars Rundkirke er Bornholms største og mest kendte rundkirke. Olsker Rundkirke er den højeste og mest elegante af øens fire rundkirker. Nylars Rundkirke er den bedst bevarede af de bornholmske rundkirker, og endelig kan man opleve Nyker Rundkirke, der er den mindste og sandsynligvis også den yngste af Bornholms rundkirker.

Kilde: https://bornholm.info/rundkirker/ (let redigeret) – hentet 22/09/2022

**Bornholms Kunstmuseum**
Bornholms Kunstmuseum er med sin beliggenhed oven for Helligdomsklipperne på kysten mellem Gudhjem og Tejn og sin arkitektoniske udformning i sig selv en attraktion. Kunstmuseet ligger ca. 6 km nord for Gudhjem i et af Danmarks flotteste og mest spektakulære landskaber.

Bornholms Kunstmuseum er opført i 1993, men voksede allerede i 2002 ud af rammerne. Derfor igangsatte museet en stor udvidelse på 1.000 m2, der skulle omfatte to nye udstillingsbygninger, en større administrationsbygning samt ombygning af indgangspartiet. Bornholms Kunstmuseum genåbnede i 2003 efter den større tilbygning og regnes i dag for noget af det bedste inden for moderne dansk arkitektur.

Bornholms Kunstmuseum rummer kunst og kunsthåndværk med relation til Bornholm – blandt andet ’Bornholmerskolen’ med malerne Edvard Weie, Karl Isakson, Olaf Rude, Kræsten Iversen, Niels Lergaard og Oluf Høst. Ud over de permanente udstillinger er der året igennem temaudstillinger inden for kunst, design og kunsthåndværk.

Bornholms Kunstmuseum har et areal på 4.000 kvadratmeter fordelt på tre niveauer, der følger terrænets naturlige fald mod klippekysten. I gamle dage valfartede folk til området på grund af Helligdomskilden, som blev tillagt en helbredende kraft. I dag symboliserer kilden oplevelser, rekreation og åndelig udvikling, og kilden løber nu gennem museumsbygningen, inden den ledes ud i Østersøen. Arkitekturen regnes for en af Nordens perler og er i sig selv en kunstnerisk oplevelse med sine smukke, lyse rum.

Kilde: https://bornholm.info/bornholms-kunstmuseum/ (let redigeret) – hentet 22/09/2022

**Helligdomsklipperne**
Helligdomsklipperne ligger på strækningen mellem Tejn og Gudhjem og er en af Bornholms – ja Danmarks – største naturseværdigheder.

Gennem årtusinder har brændingen på dette sted eroderet klippekysten og skabt dybe kløfter ind i fjeldet. Tilbage står nu de skarpe skær, forrevne granitsøjler og stejle klippevægge med dybe gange og grotter – såkaldte ovne – der tilsammen udgør Helligdomsklipperne.

De op til 20 meter høje Helligdomsklipper har fået deres navn efter en hellig kilde, der i gammel tid løb ud for foden af klipperne. På marken ovenfor lå i middelalderen et kapel, Trefoldighedskapellet, hvortil man hentede livgivende vand fra den hellige kilde. Mange mennesker har gennem tiderne – særligt Skt. Hans nat – valfartet til stedet i håb om helbredelse. De enkelte Helligdomsklipper har siden fået tildelt romantiske navne som Lyseklippen, Mågetårnet, Måneskinsklipperne og Kærlighedsbænken. De udfordrende bornholmske Helligdomsklipper tiltrækker også klatreentusiaster. En stor del af området er dog fredet og bør derfor ikke benyttes til klatring.

Kilde: https://bornholm.info/helligdomsklipperne/ (let redigeret) – hentet 22/09/2022

**Dueodde strand**
Dueodde strand er en af Europas bedste sandstrande. Sandet på Dueodde strand er indbydende og ultrafint – faktisk så fint, at det har været brugt til timeglas. Vandet er klart og rent – og med mange revler, så der både er lavt og dybt tæt på kysten.

Dueodde strand strækker sig over flere kilometer på begge sider af øens sydspids. Stranden starter i Snogebæk, hvor de mange sommerhuse nærmest har deres helt egen smalle strand. Stranden bliver flere hundrede meter bred på sydspidsen af Bornholm og slutter så igen smalt ved Jomfrugård, som betragtes som nudiststrand. På den bredeste strækning er der masser af klitter og gryder, hvor man kan finde læ – og være helt uforstyrret.

Fra parkeringspladserne på Fyrvejen og Skrokkegårdsvej er der anlagt over 500 m lange træramper gennem klitterne, så det er let at tage cykel, barnevogn eller kørestol med til den smukke Dueodde strand. Vær dog opmærksom på, at ramperne kan være tilsandede, og at de ender mere end 100 meter fra vandkanten. Ved p-pladsen på Fyrvejen er der også kiosk, toiletter og busforbindelse.

En tur op i Dueodde Fyrtårn vil tage pusten fra de fleste – både på grund af trapperne, men også på grund af det fantastiske kig ud over kystområdet og hele den sydlige del af Bornholm.

Kilde: https://bornholm.info/dueodde-strand/ (let redigeret) – hentet 22/09/2022

**FOLKEMØDET OG BORNHOLMS KULTURUGE**

**Om Folkemødet**
Folkemødet finder sted hvert år i uge 24 i Allinge på Bornholm. På Folkemødet hylder vi det danske demokrati og fællesskab. Det sker i den smukke havneby Allinge, hvor der debatteres, synges og samtales i telte, på skibe, på restauranter og caféer, på klipperne og under åben himmel. I uge 24 omdannes Allinge til Danmarks politiske centrum, hvor borgere møder beslutningstagere. Det primære formål med Folkemødet er at styrke det danske demokrati ved at mindske afstanden og øge tilliden mellem borgere og beslutningstagere. Det sker ved at skabe en ny ramme om møder mellem beslutningstagere i erhvervslivet, interesseorganisationer og politikere fra Folketinget, EU, kommuner og regioner. Og ved at give borgerne mulighed for at møde beslutningstagerne ansigt til ansigt.

Alle lovlige danske organisationer, foreninger, virksomheder m.fl. samt private, der lever op til Folkemødets principper for events, har mulighed for at blive optaget i Folkemødets program. Alle events skal være åbne for alle.

Kilde: https://folkemoedet.dk/om-folkemodet/om-folkemodet/ (redigeret) – hentet 22/09/2022

**Ung Agenda på Folkemødet**
Tuborgfondet og Folkemødet har indgået et partnerskab og vil over fem år engagere 18.000 unge mellem 16 og 30 år i Folkemødet. Vi startede med et brag i 2022. Den fælles ambition er at sikre unges repræsentation og styrke unges stemme på Folkemødet. Vi kalder det Ung Agenda. Fremtiden tilhører unge, og derfor er det netop unge, der skal sætte dagsordenen.

Folkemødet er en af de største demokratiske begivenheder i Danmark. Der kommer mere end 60.000 borgere og beslutningstagere – fra statsministeren til Danmarksmesteren i debat – for at debattere vores demokrati og vores samfund. Der er mere end 2000 forskellige events om alt fra klimaudfordringer til mental sundhed. Unge skal være med til at sætte dagsordenen og bestemme retningen for vores samfund og demokrati.

I 2022 inviterede Tuborgfondet og Folkemødet over 800 unge med på Folkemødet ved at tilbyde en helt ny camp for unge samt mulighed for at købe en billig pakkerejse med transport og overnatning. Mere end 25 ungeorganisationer var med til at sætte dagsordenen på Folkemødet i 2022 gennem diverse events og debatter på Folkemødets scener. Vi vil engagere endnu flere unge i Folkemødet for at understøtte dialog på tværs af generationer. Ambitionen er at sikre, at en femtedel af deltagerne på Folkemødet i 2026 vil være mellem 16 og 30 år.

Kilde: https://folkemoedet.dk/ung-agenda/om-ung-agenda/ (let redigeret) – hentet 22/09/2022

**Om Bornholms Kulturuge**
I Bornholms Kulturuge har vi ni forskellige kulturspor, du som gæst kan vælge at følge. I løbet af kulturugen vil sporet bringe dig til nye oplevelser hver dag, hvor vi præsenterer det bedste, Bornholm har at byde på, indenfor et bestemt kulturfelt.

**De ni kulturspor**

**Historie og kulturhistorie**
Bornholms historie og forhistorie adskiller sig på mange væsentlige punkter fra resten af Danmarks. Med sin placering langt ude i Østersøen har øen i årtusinder været et knudepunkt, som mange handelsruter krydsede. Derfor har Bornholm haft tæt kontakt til resten af verden, og det er først i nyere tid, at den geografiske beliggenhed er blevet betragtet som isoleret og en ulempe.

Når det kommer til forhistorien og arkæologien, er Bornholm også et kapitel for sig som det sted, hvor vi har de fleste og rigeste fund. Dertil kommer den store mængde af bautasten og helleristninger.

Dette spor er nok det, hvor du kommer tættest på Bornholms dna. I Kulturugen indgår spændende byvandringer, og arkæologisk udgravning er efterhånden også blevet en tradition.

**Litteratur**
Bornholms Litteraturfestival leverer et fyldigt og alsidigt program til litteratursporet. Her kan du møde spændende forfattere inden for mange genrer – de fleste er nogle, som festivalen har hentet uden for Bornholm, men selvfølgelig bliver der også præsenteret bornholmske forfattere.

**Klassisk musik**
Koncerter bliver afholdt flere forskellige steder – i nogle af vore smukke kirker, men også på andre mere usædvanlige spillesteder. Både lokale ensembler og musikere og sangere udefra gør det muligt at sammensætte et afvekslende program med klassisk musik.

**Kunst**
Bornholm har tradition for et aktivt kunstmiljø. Det afspejles i den fornemme faste samling på Bornholms Kunstmuseum og i de mange små gallerier og udstillingssteder, der ligger spredt rundt omkring på øen.

I kulturugens kunstspor kan du besøge udstillinger, møde kunstnere og selv deltage i workshops.

**Teater og scenekunst**
Bornholm har et rigt teaterliv med blandt andet Bornholms ældste, fungerende teater i Rønne og det eksperimenterende teaterværksted Undreværket i Gudhjem. Birca ved Klemensker er et refugium for kunstnere og udviklere beliggende i landlige og inspirerende omgivelser, og Soldalens fantastiske terræn danner ramme om nycirkus i nærheden af Olsker. Alle har de medvirket ved flere kulturuger.

**Madkultur**
Du vil opdage, at det ikke er uden grund, at Bornholm har markeret sig så stærkt inden for gourmet gennem snart en længere årrække.

Det er ikke en tilfældighed, men resultat af mange års samarbejde. Kokke og fødevareproducenter samarbejder om forædling af produkterne. Bornholm er hjemsted for Danmarks første regionale madkulturhus, Gaarden, og for Danmarks største kokkekonkurrence, Sol over Gudhjem. På Bornholm er vi stolte af de mange fremragende restauranter. Og selvfølgelig indgår de lokale produkter i stor udstrækning både på spisestederne og i kokkekonkurrencen.

Smagen af Bornholm, afsmitningen fra det bornholmske terroir, vil være gennemgående for alle aktiviteter i dette kulturspor.

**Natur**
Bornholms natur er så særegen og gemmer på så mange kulturoplevelser, at den fortjener en kategori for sig selv – og det fik den for første gang i kulturugen 2018.

Man kan opleve den storslåede natur under kompetent og medrivende vejledning og høre om blandt andet de sagn og myter, der knytter sig til de forskellige lokaliteter og om, hvordan stedet har haft betydning for livet netop her.

Der er ture med fokus på insekter, geologi, naturpleje, fugleliv plus alle de kulturspor, menneskenes færden har sat i naturen.

**Rytmisk musik**
Rygraden i dette spor er den legendariske koncertrække Udenfor Sæsonen, hvor Steffen Brandt er den gennemgående figur.

Steffen Brandt har fra starten i 2002 været kunstnerisk leder og tovholder på projektet, der har til hensigt at bygge bro mellem forskellige musikalske genrer og mellem kunstnere, der befinder sig forskellige steder i livet og karrieren. Hvert år ser vi nye og overraskende konstellationer.

Men også i dette kulturspor kan lokale kunstnere fint gøre sig gældende med koncerter rundt omkring på øen, hvor de viser kvaliteten af det bornholmske musikliv.

**Kunsthåndværk**
Traditionen for kunsthåndværk fører langt tilbage på Bornholm. Også på dette felt indtager øen en særstilling – ikke bare i Danmark, men i Europa og resten af verden. I 2017 opnåede Bornholm den ære at blive udnævnt som World Craft Region som det første sted i Europa. Bag titlen står World Craft Council (WCC), som er den største internationale organisation for promovering af kunsthåndværk. WCC er en NGO og er anerkendt af UNESCO.

I begrundelsen for at udnævne Bornholm lyder det: ”Juryen, der vurderede den bornholmske ansøgning om at blive World Craft Region, var meget imponeret over kvaliteten, autenticiteten og den høje standard af bornholmsk kunsthåndværk. Den rige tradition, oprindeligt baseret på produktion af glas og keramik, har ført til en bred, rig og solid symbiose af værksteder, museer, biennaler og uddannelsesfaciliteter på øen. Juryen oplevede, at det høje bornholmske niveau inden for alle typer af kunsthåndværk er fuldt på højde med det internationalt bedste.”

Kilde: https://bornholmskulturuge.dk/kulturspor-2021/ (let redigeret) – hentet 22/09/2022

**CYKELFERIE PÅ BORNHOLM**

**Cykelruter på Bornholm**
Bornholm er en attraktiv ø at opleve fra en cykel. Bornholms smukke cykelruter leder cyklister rundt fra Dueodde i syd til Hammeren i nord – en kyststrækning på i alt 105 kilometer. Der er anlagt et net af skiltede cykelveje på over 230 km over hele øen, og i dag har Bornholm ét af Nordeuropas bedste og smukkest beliggende cykelvejnet, der går gennem den afvekslende bornholmske natur og de maleriske små byer langs kysten.

**Nummererede cykelruter**
Bornholms over 230 km skiltede cykelruter snor sig gennem skov og langs kyster, følger små landeveje og ligger for det meste langt fra anden trafik. Alle cykelruter på Bornholm er markeret med et grønt skilt med et nummer. Nummeret viser hvilken rute, man befinder sig på. Ruternes numre er en del af det danske cykelrutenet. Rute 10 er en del af det nationale cykelrutenet. Rute 21 til 26 er regionale ruter.

Vi har samlet 8 anbefalede ture samt 1 for børn og 2 for mountainbikere. De anbefalede tures numre er ikke skiltet i naturen, da de følger de nationale og regionale ruter.

**Børnecykelruten**
På børnecykelruten er den korteste etape på cykel 6 km, den længste er 33 km. Det er korte afstande. Det betyder, at der er tid til at sove længe, gøre stop undervejs og nyde den bornholmske natur, og så er der ikke så mange stejle bakker. Børneruten er lagt på gode cykelstier væk fra bilerne. Blandt andet kører man på mange dele af ruten på det nedlagte jernbanespor midt i landskabet, langt væk fra den øvrige trafik, hvilket betyder, at børneruten her er meget trafiksikker. Børneruten har de fleste steder plads til, at man kan køre ved siden af hinanden og også have cykelanhænger med. Børneruten på Bornholm kan køres igennem på en uge, hvoraf to af dagene er afsat til at slappe af i henholdsvis Brændegårdshaven ved Svaneke og i Rønne by. Børneruten er i alt 112 km lang.

Kilde: https://bornholm.info/wp-content/media/2019/05/cykelguide-2019-dk.pdf – hentet 17/01/2023

**Bed+Bike**
Bed+Bike arbejder for at markedsføre, udvikle og kvalitetssikre mulighederne for cykelturisme i Danmark. Der arbejdes tæt sammen med partnere på både lokalt, regionalt og nationalt niveau om at sætte Danmark på Europakortet som en attraktiv cykeldestination. Cykelmærkeordningen Bed+Bike viser vej til cykelvenlige overnatningssteder i hele Danmark.

Vælger du et overnatningssted med det blå Bed+Bike skilt, er du sikker på, at du kan stille din cykel i et aflåst skur og låne værktøj til eventuelle reparationer. Overnatningssteder, som er Bed+Bike certificerede, tilbyder disse faciliteter og sørger for, at du får den bedst mulige cykelferie! Kør efter det blå Bed+Bike skilt!

På Bornholm finder du disse fem Bed+Bike overnatningssteder:

Bornholm Tours
Sdr. Hammer 2G
3730 Nexø
www.bornholmtours.dk

Danhostel Sandvig
Langebjergvej 12, Sandvig
3770 Allinge
www.danhostelsandvig.dk

Nexø Hostel
Gl. Rønnevej 17A
3730 Nexø
www.nexohostel.dk

Pension Slægtsgården
Østergade 3
3770 Allinge
www.slaegtsgaarden.dk

Møllers Dueodde Camping
Duegårdsvej 2, Dueodde
3730 Nexø
www.dueodde-camp.dk

Kilde: https://aktivdanmark.dk/aktiv-danmark-forside/cykling/kvalitetsmaerket-cykelferie/ (let redigeret) – hentet 22/09/2022

**BORNHOLM I TRE ROMANER**

**Pelle Erobreren af Martin Andersen Nexø, 1906**
Martin Andersen Nexøs første store romanværk, Pelle Erobreren, er i fire dele og blev skrevet i årene 1906-10.

Romanen begynder i 1871, hvor den otteårige Pelle ankommer med sin far, Lasse, til Bornholm. De er fattige indvandrere fra Sydsverige og får tjeneste på Stengaarden, som danner rammen om romanens første del. Andersen Nexø har en ganske særlig sans for at indfange barnets verden, og styrken ligger først og fremmest i hans evne til at vise kontrasten mellem barnets åbne sind og de voksnes bristede illusioner.

De håbløse og ydmygende levevilkår knækker ikke Pelle, som de har knækket så mange omkring ham. Han føler tværtimod, at han er skabt til noget stort. Hvad dette store er, går først op for ham, da han som ung nyudlært skomager slår sig ned i København.

Romanen vokser ud af en stærk social indignation og en tro på de fattiges revolutionære kræfter. Det er en uhyre samfundskritisk og idealistisk roman, der med Pelle som omdrejningspunkt skildrer arbejderbevægelsens udvikling i 1800-tallets slutning.

Kilde: https://forfatterweb.dk/oversigt/znexoe00/znexoe04 (let redigeret) – hentet 22/09/2022

**Nancy af Dennis Gade Kofod, 2015**
Nancy er noget så eksotisk som en dansk roman om undergang, hvis handling udspiller sig på Bornholm og kombinerer mytologi og hverdagsrealisme: En mystisk tåge lægger sig pludselig om Bornholm. Den er skabt af de mytologiske væsner, der kaldes de underjordiske, som benytter sig af magi for at tage øen tilbage fra menneskene. I alt for lang tid har bornholmerne levet i konflikt med naturen. Nu vil de underjordiske generobre livet på øen. Folk, der kommer for tæt på tågen, forsvinder, og panikken breder sig. Det er som om, naturen søger hævn. Dem, der kan og vil, rejser bort. Et samfund, der allerede var under afvikling, falder fra hinanden. De få tilbageblevne kæmper for at opretholde et nogenlunde normalt liv. Midt i det hele står den 25-årige Nancy, som arbejder på et bosted for udsatte, mens hun går på HF. Nancy lever i et forhold med den aggressive misbruger ’Træner-Thomas’, som hun i al hemmelighed planlægger at forlade.

Hun er nemlig forelsket i studiekammeraten Albert, som har vist hende, at livet kan være andet og mere end det, hun kender til. Men Nancy har også en unik tilknytning til de underjordiske. Hun er nemlig udvalgt til at spille en særlig rolle i den verden, som følger efter undergangen.

Nancy er en stilsikker, original dansk roman om en ung kvindes forsøg på at bryde med sin sociale arv. Beskrivelsen af Bornholm virker troværdig og genkendelig for alle, der er vokset op i et lille landsbysamfund, og Dennis Gade Kofods brug af mytologiske elementer er med til at skabe en unik læseoplevelse.

Kilde: https://litteratursiden.dk/anmeldelser/nancy-af-dennis-gade-kofod-0 (redigeret) – hentet 22/09/2022

**Burgundia af Hans Henrik Møller, 2010**
Hans Henrik Møllers tredje skønlitterære udgivelse, der udkom i 2010, bærer titlen Burgundia. Burgundia er både det latinske navn for Bornholm og samtidig navnet på et skib, der i 1958 forliste vest for Rønne på vej til Fakse. Netop M/S Burgundias forlis er omdrejningspunktet i en af de mange fortællinger i den farverige roman.

På bogens første side er der trykt et kort over øen, hvilket skal vise sig at være til stor hjælp. Burgundias hovedperson er nemlig Østersø-øen selv, dens granit og sandsten, kirker, slægter, vand, land og byer.

Hans Henrik Møller har givet sin hjemstavnsroman undertitlen ”Roman om Øen, Himlen og Havet”, og bogen er inddelt i tre sektioner efter hvert af disse temaer. Men der er ikke tale om rejsebeskrivelse af hverken øen, himlen eller havet omkring Bornholm, men derimod om en fantasifuld fortælling fortalt af en til tider ret vidtløftig fortællerstemme. Det får man allerede tidligt i romanen en fornemmelse af, da fortælleren redegør for, hvordan Bornholm ligger stille om dagen, men har det med at bevæge sig en lille smule om natten. I virkeligheden bevæger Bornholm sig ikke meget. Det gør resten af verden derimod, men Burgundia er, blandt mange, mange ting, en lang argumentation for, at Bornholm er verdens selvfølgelige centrum. Det er jo en påstand, der kræver, at man skærer en hæl og klipper en tå. Eller at man har en ubændig trang til at binde andre en røverhistorie på ærmet. Og det er netop, hvad fortælleren har.

Det er karakteristisk for romanen, at dens mange fortællinger godt kunne være virkelige eller tage udgangspunkt i rigtige begivenheder. Den stilistik, som romanen forsøger at efterligne, er nemlig den, der hersker i den mundtlige fortælling, i anekdoten eller skrønen. Sådanne fortællinger foregår i den umiddelbart genkendelige verden, men ofte sker der ting og sager, som måske ikke er virkelighedstro i almindelig forstand. Men det er heller ikke meningen. Meningen er, at man skal lade sig rive med af historien, af dens egen logik, og det kan man nærmest ikke undgå, når man læser Burgundia. Vi hører om slægterne Lind og Holm, der har en nedarvet konflikt om et tomt lagerlokale. Om den korrekte brug af salt, om de indfødte i Congo, der lærte at synge bornholmske hjemstavnssange. Om kaffe og dyrskue og mennesker og granit. Og meget mere.

Kilde: https://forfatterweb.dk/oversigt/zmoller_hans_henrik00/zmoller_hans_henrik05 (let redigeret) – hentet 22/09/2022`,
    questions: [
      // Søg informationer under Fem seværdigheder på Bornholm
      { type: "short", n: 1, q: "(Fem seværdigheder på Bornholm) Hvad har Helligdomsklipperne fået deres navn efter?",
        accept: uniq(["en hellig kilde"].concat(combos(["", "efter", "de er opkaldt efter", "navnet kommer fra"], ["", "en", "den"], ["", "hellig", "hellige"], ["kilde", "kilden"],
          ["", "der i gammel tid løb ud for foden af klipperne", "der løb ud for foden af klipperne", "ved foden af klipperne"])
          .concat(["helligdomskilden"]))) },
      { type: "short", n: 2, q: "(Fem seværdigheder på Bornholm) Hvilken af parkeringspladserne ved Dueodde strand kører der bus til?",
        accept: uniq(combos(["", "p-pladsen på", "p-pladsen ved", "parkeringspladsen på", "parkeringspladsen ved", "pladsen på", "den på", "den ved", "på", "ved"], ["fyrvejen"])) },
      { type: "short", n: 3, q: "(Fem seværdigheder på Bornholm) Hvornår fandt man ud af, at Hammershus først var færdig i slutningen af 1200-tallet?",
        accept: uniq(combos(["", "i", "i år", "år"], ["2015"])) },
      { type: "short", n: 4, q: "(Fem seværdigheder på Bornholm) Kan man på Bornholms Kunstmuseum se en udstilling om Helligdomskilden? Svar ’ja’ eller ’nej’.",
        accept: ["nej"] },
      { type: "short", n: 5, q: "(Fem seværdigheder på Bornholm) De bornholmske rundkirker fungerede ikke kun som kirker, da de blev bygget. Hvad fungerede de også som?",
        accept: uniq(["forsvarsværker"].concat(combos(["", "som", "de fungerede også som"], ["forsvarsværker", "forsvarsværk", "et forsvarsværk"]))) },
      // Søg informationer under Bornholm i tre romaner
      { type: "short", n: 6, q: "(Bornholm i tre romaner) Pelle Erobreren er en samfundskritisk roman, der beskriver arbejderbevægelsens udvikling i en del af det 19. århundrede. Hvilken del?",
        accept: uniq(["1800-tallets slutning"].concat(combos(["", "i"], ["", "1800-tallets"], ["slutning", "slutningen"])
          .concat(combos(["", "i"], ["slutningen af 1800-tallet", "den sidste del af 1800-tallet", "sidste del af 1800-tallet", "den sidste del", "den sidste", "sidste del", "den senere del", "den senere", "senere del"]))
          .concat(combos(["", "romanen begynder i 1871", "fra 1871"]))
          .concat(combos(["1800-tallets slutning", "slutningen", "slutningen af 1800-tallet", "den sidste del", "den senere del", "den sidste", "den senere"], ["fra 1871", "romanen begynder i 1871"]))
          .concat(combos(["den sidste", "den sidste del", "1800-tallets slutning", "slutningen"], ["/", "og"], ["romanen begynder i 1871"])))) },
      { type: "short", n: 7, q: "(Bornholm i tre romaner) Hvilke to ord bruger anmelderen af Nancy, når han vurderer, hvordan beskrivelsen af Bornholm i romanen virker for folk, der er vokset op i et lille landsbysamfund?",
        accept: uniq(combos(both(["troværdig"], ["genkendelig"]),
          ["", "for alle der er vokset op i et lille landsbysamfund", "for alle, der er vokset op i et lille landsbysamfund", "for folk der er vokset op i et lille landsbysamfund"])
          .concat(both(["troværdig"], ["genkendelig"]).map(x => "den virker " + x))) },
      // Søg informationer under Folkemødet og Bornholms Kulturuge
      { type: "short", n: 8, q: "(Folkemødet og Bornholms Kulturuge) Hvor stor en andel af deltagerne skal ifølge Ung Agendas målsætning være unge mellem 16 og 30 år på Folkemødet i 2026?",
        accept: uniq(["en femtedel"].concat(combos(["", "en"], ["femtedel"], ["", "af deltagerne"]).concat(["1/5", "1/5 af deltagerne", "20 %", "20%", "20 procent"]))) },
      { type: "short", n: 9, q: "(Folkemødet og Bornholms Kulturuge) I Bornholms Kulturuge kan man følge et spor om historie og kulturhistorie. Hvilke aktiviteter indgår i dette spor? Nævn begge.",
        accept: uniq(["byvandringer og arkæologisk udgravning"].concat(both(["byvandringer", "byvandring", "spændende byvandringer"],
          ["udgravning", "udgravninger", "arkæologisk udgravning", "arkæologisk udgravninger", "arkæologiske udgravninger", "arkæologiske udgravning"]))) },
      { type: "short", n: 10, q: "(Folkemødet og Bornholms Kulturuge) Hvilke materialer er produktionen af bornholmsk kunsthåndværk oprindeligt baseret på? Nævn begge.",
        accept: uniq(both(["glas"], ["keramik"])) },
      // Søg informationer under Cykelferie på Bornholm
      { type: "short", n: 11, q: "(Cykelferie på Bornholm) Hvilke numre har de regionale cykelruter på Bornholm?",
        accept: uniq(combos(["", "rute", "ruterne", "nr", "nummer", "numrene", "fra", "rute nr"], ["21 til 26", "21-26", "21 – 26", "21 26"])) },
      { type: "short", n: 12, q: "(Cykelferie på Bornholm) For at blive Bed+Bike-certificeret skal gæsterne have mulighed for at stille deres cykler et sikkert sted. Hvad skal man som Bed+Bike-certificeret også tilbyde gæsterne?",
        accept: uniq(["at låne værktøj til eventuelle reparationer"].concat(combos(["", "at låne", "låne", "at de kan låne", "at gæsterne kan låne", "lån af", "udlån af", "mulighed for at låne"], ["værktøj"],
          ["", "til eventuelle reparationer", "til reparationer", "til reparation", "og overnatning", "til eventuelle reparationer og overnatning"])
          .concat(["overnatning og værktøj"]))) },
      // Søg informationer under Bornholms natur, landskab og klima
      { type: "short", n: 13, q: "(Bornholms natur, landskab og klima) Hvilken type kyster har Bornholm som det eneste sted i Danmark?",
        accept: ["klippekyster", "klippe", "klippekyst", "klippekysterne"] },
      { type: "short", n: 14, q: "(Bornholms natur, landskab og klima) Hvad hedder Bornholms største skovområde?",
        accept: ["almindingen", "skoven almindingen", "den almindingen"] },
      { type: "short", n: 15, q: "(Bornholms natur, landskab og klima) I hvilke måneder er Bornholm den kommune i Danmark, hvor solen skinner mest?",
        accept: uniq(combos(["", "fra", "i månederne", "i"], ["maj til september", "maj-september", "maj – september", "maj september",
          "maj, juni, juli, august og september", "maj juni juli august september", "maj, juni, juli, august, september"])) }
    ]
  };

  // ---------- Læseforståelse 2 – delprøve 2A ----------
  const ledere = {
    id: "pd3-23n-2", group: G, real: true,
    title: "Delprøve 2A – Nye ledere har ofte udfordringer på jobbet",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Nye ledere har ofte udfordringer på jobbet. Herunder er der tre spørgsmål til teksten. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A, 2B og 3 – varer i alt 65 minutter.)",
    text: `**Nye ledere har ofte udfordringer på jobbet**

Overgangen fra at være almindelig medarbejder til at være leder er svær for mange. Det kan både Mette Dalgaard og Henriette Friis bekræfte. Begge var i midten af trediverne, da de gik fra at være almindelige sygeplejersker med ansvar for den daglige pasning og pleje af patienter til at være afdelingssygeplejersker med ansvar for at lede og fordele arbejdet. Fra at have været mest optaget af deres egne opgaver, skulle de nu pludselig til at fokusere på deres kollegers faglighed og fastsætte rammerne for deres arbejde.

”Jeg havde egentlig regnet med, at den største udfordring ville være, at jeg skulle være leder for mine tidligere kolleger og lære at navigere på en ny måde i alle de sociale relationer, jeg havde opbygget gennem ti år som sygeplejerske på afdelingen,” fortæller Mette. Det er en almindelig bekymring for mange, som bliver ledere i den samme virksomhed, som de er rekrutteret i. Men ofte viser det sig, at frygten er ubegrundet. ”Det voldte faktisk ikke de store problemer, da det kom til stykket. Til gengæld savnede jeg nogle kolleger, jeg kunne sparre med om min nye rolle. Jeg følte i starten, at jeg stod meget alene med mine tanker og overvejelser om ledelsesarbejdet.”

Manglende støtte og opbakning i den nye rolle kan Henriette tale med om. ”Jeg er helt enig i, at kollegial sparring er vigtigt,” fortæller Henriette. ”Jeg havde som sygeplejerske et godt samarbejde med mine kolleger, men jeg har savnet nogen at sparre med om mit arbejde som leder.” Henriette understreger dog, at det for hende var noget andet, der var hovedproblemet, da hun blev afdelingssygeplejerske. ”Som afdelingssygeplejerske har man altså også selv en leder, og det er helt centralt, at den leder er tydelig omkring ens arbejdsopgaver, og det var min leder ikke. Derfor følte jeg i starten, at jeg skulle stå for det hele for at leve op til mit ansvar som leder – for eksempel også økonomi, opkvalificering af medarbejdere og kortere indlæggelsestider, selvom det faktisk er områder, der slet ikke hører ind under mit ansvarsområde.”

I Henriettes tilfælde endte det med en længerevarende sygemelding. Under sin sygemelding fik hun en ny leder, der var mere tydelig omkring hendes arbejdsopgaver og ansvarsområder. Han sendte hende også på et såkaldt førlederkursus, selvom hun allerede var leder. ”Der lærte jeg både noget om vigtigheden af at forlange klare retningslinjer fra sin leder og noget om at opsøge kollegiale fællesskaber. Det kursus ville jeg gerne have været på noget tidligere.”

Det er blevet sagt, at man som ny leder hurtigt må lære at svømme, hvis man ikke vil synke til bunds. Den erfaring har de fleste nok gjort sig, og de fleste har naturligvis begået nogle begynderfejl undervejs. I Mettes tilfælde handlede det blandt andet også om at balancere arbejde og privatliv. ”Jeg tror, enhver ny leder er mere eller mindre indstillet på at arbejde meget, særligt i starten, hvor man er uerfaren og gerne vil bevise over for sig selv og andre, at man kan klare opgaven,” siger hun. ”Jeg kom derfor også til at påtage mig for mange opgaver, så jeg arbejdede langt mere end 37 timer om ugen.”

”Jeg måtte relativt hurtigt erkende, at jeg ikke kunne klare at arbejde så meget, og at jeg måtte blive bedre til nogle gange at slippe kontrollen. Og afdelingen gik jo ikke i stå, fordi jeg trak mig lidt og i stedet bad medarbejderne klare flere opgaver selv. Alle kan undværes, i hvert fald en gang imellem.”

Henriette arbejdede også for meget i begyndelsen, og det skyldtes ikke alene de manglende rammer for hendes arbejde. ”Jeg havde også store ambitioner om at ville ændre både arbejdsgange, organisationskultur og arbejdsforhold, fordi jeg af egen erfaring vidste, at sygeplejerskernes hverdag er presset,” fortæller Henriette. ”Men det gik ikke som håbet, for jeg var ikke god nok til at inddrage mine medarbejdere i mine beslutninger. De forstod ikke altid, hvor jeg ville hen med mine ideer. Jeg endte derfor med at lave for mange opgaver selv. Men det gør jeg ikke mere. Nu sørger jeg for fra starten at inddrage alle medarbejdere i beslutningerne og for at få fordelt alle arbejdsopgaverne.”

Både Mette og Henriette har i dag fundet sig til rette i deres nye rolle. De trives begge med at have indflydelse og ansvar for medarbejdere – også selvom det ikke altid er lige let.`,
    questions: [
      { type: "mc", n: 1, q: "Hvad var den største udfordring for Mette i hendes første tid som afdelingssygeplejerske?",
        options: ["Hun skulle lede gamle kolleger, som hun havde arbejdet sammen med i mange år.", "Hun havde ingen kolleger, som hun kunne snakke med om sit arbejde som leder.", "Hun savnede de sociale relationer, som hun havde med sine gamle kolleger."], answer: 1 },
      { type: "mc", n: 2, q: "Hvad var den primære årsag til, at Henriette måtte sygemelde sig i en længere periode?",
        options: ["Hun manglede støtte og opbakning fra sine tidligere kolleger.", "Hendes leder krævede mere af hende, end hun kunne klare.", "Hendes leder satte ikke klare rammer for hende."], answer: 2 },
      { type: "mc", n: 3, q: "Hvad giver både Mette og Henriette udtryk for, at de ikke var gode nok til i deres første tid som afdelingssygeplejersker?",
        options: ["At uddelegere arbejde til deres medarbejdere.", "At sikre deres medarbejdere bedre arbejdsforhold.", "At inddrage medarbejderne i deres beslutninger."], answer: 2 }
    ]
  };

  // ---------- Læseforståelse 2 – delprøve 2B ----------
  const datasikkerhed = {
    id: "pd3-23n-3", group: G, real: true,
    title: "Delprøve 2B – Datasikkerhed",
    kind: "Læseforståelse 2 · indsæt de manglende tekstdele (A-G)",
    level: 3, minutes: 25,
    instruction: "Læs teksten Datasikkerhed. I teksten er der fjernet fem tekstdele. Dette er angivet med tallene 1-5. Herunder findes de fem tekstdele samt to ekstra, der ikke passer i teksten. Tekstdelene er angivet A, B, C, D, E, F og G. Vælg bogstavet for den tekstdel, der passer ind i teksten det sted, der er markeret med tallet. Hvert bogstav må kun bruges én gang. Bogstavet for de tekstdele, der ikke passer i teksten, skrives ikke. Der gives 2 point for hvert korrekt svar.",
    text: `**Datasikkerhed**

Hver dag bruger de fleste mennesker internettet på en eller anden måde, både på arbejdet og hjemme i privaten. Nogle gange er det en almindelig pc, der bliver brugt, men det kan lige så godt være en smartphone, en tablet eller et ur.

[[1]]

For mange unge mennesker er en verden uden internet faktisk helt utænkelig. Det har derfor aldrig været vigtigere at bekymre sig om datasikkerhed, end det er nu, og det gælder både for privatpersoner og virksomheder. På nettet er der hackere fra hele verden, der er parate til at misbruge alle tænkelige slags oplysninger, hvis de kan: cpr-numre, MitID, oplysninger om konti og betalingskort, firmahemmeligheder m.m. For mange af disse it-kriminelle er svindel blevet en levevej. De laver ikke andet, og de er gode til det, de gør.

Men hvem har egentlig det primære ansvar for at opretholde en høj datasikkerhed? Er det forbrugerne, staten eller internetudbyderne? Nogle mener, det er internetudbyderne, fordi det er dem, der tjener penge på at levere adgang til nettet. Men den løsning er problematisk.

[[2]]

Desuden er det ikke alle, der har brug for den samme sikkerhedsstandard. Forskellige aktører på nettet har forskellige behov. Store multinationale virksomheder har nogle helt andre behov for beskyttelse end den almindelige borger. Hvis ikke borgere og virksomheder selv får lov til at vælge de sikkerhedsløsninger, der passer dem eller deres virksomhed bedst, men i stedet tvinges til at bruge en fælles standardløsning, så vil nogle brugere selvfølgelig få en beskyttelse, der er bedre end den, de har i dag.

[[3]]

Uklarheden om ansvaret betyder imidlertid ikke, at udbyderne kan fralægge sig ethvert ansvar. De bør være med til at sikre, at borgerne kender til risikoen ved at færdes på nettet og bliver bedre til at beskytte sig mod it-kriminalitet. Man kunne få brugerne til at fokusere endnu mere på at passe på deres data, end man gør nu. Man kunne også informere mere om mistænkelige mails og lignende, der nogle gange er i omløb.

Som almindelig internetbruger er der altså meget, man selv kan gøre for at undgå at blive offer for it-kriminalitet.

[[4]]

Dels er det en god idé at bruge både tegn, tal og bogstaver, så de forskellige kombinationer er så uforudsigelige som muligt. Dels er det en god idé at bruge forskellige adgangskoder til forskellige tjenester, så hackere ikke pludselig får adgang til alle ens data og tjenester. Desuden bør man beskytte sig med et godt antivirusprogram, både på sin computer og på alle sine andre digitale enheder. Det er dog lettere sagt end gjort. Der er nemlig mange useriøse leverandører af antivirusprogrammer på markedet, som er mere optaget af profit end af datasikkerhed. Et godt antivirusprogram skal ikke bare indeholde antivirussoftware. Det skal fx også indeholde et spamfilter, der kan sortere uønskede mails fra. Det skal også indeholde en firewall, der kan kontrollere adgangen til computeren udefra. Det kan alt sammen være svært at overskue, hvis man ikke er særlig it-interesseret. Man kan dog tjekke kvaliteten hos uafhængige testvirksomheder, hvor man kan læse gratis analyser og anmeldelser af blandt andet de antivirusprogrammer, man kan finde på nettet. Endelig er det også vigtigt altid at holde sine enheder opdaterede, gerne automatisk.

[[5]]

De fejl kan softwarefirmaet løbende rette gennem opdateringer. Der er således professionelle udviklere, der hele tiden arbejder på at forhindre uønsket adgang til brugernes enheder. Hvis man tillader automatiske opdateringer, så har man i det mindste gjort det sværere for it-kriminelle at gøre skade.`,
    questions: [{
      type: "gaps",
      bank: [
        { key: "A", text: "Hackere og skadelige programmer udnytter nemlig fejl i kodningen i både programmer, apps og styresystemer." },
        { key: "B", text: "Forskellige enheder skal have forskellige passwords. Til gengæld behøver de ikke være så komplekse, som mange tror." },
        { key: "C", text: "Konsekvensen vil nemlig være, at alle borgere og virksomheder får overvåget deres adfærd på nettet af en privat virksomhed. Det er noget, de færreste ønsker sig." },
        { key: "D", text: "En opdatering kan vise sig at indeholde skadelige filer, så derfor er det vigtigt at være forsigtig. Man skal ikke godkende hvad som helst." },
        { key: "E", text: "Man tjekker mail, køber ind, bestiller en ferie eller leder efter et nyt job – efterhånden bruger man internettet til alting." },
        { key: "F", text: "Men mange vil få en mere avanceret løsning, end de reelt har brug for. Prisen på internetproduktet vil på den måde blive meget højere, end den behøver at være, og det er der ingen, der er interesserede i." },
        { key: "G", text: "De fleste er efterhånden opmærksomme på, at de er nødt til at beskytte sig med adgangskoder, der er svære at gætte sig til." }
      ],
      answers: { 1: "E", 2: "C", 3: "F", 4: "G", 5: "A" }
    }]
  };

  // ---------- Læseforståelse 2 – delprøve 3 ----------
  const humaniora = {
    id: "pd3-23n-4", group: G, real: true,
    title: "Delprøve 3 – Mange vælger at studere humaniora",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Mange vælger at studere humaniora. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Mange vælger at studere humaniora**

Mange danske unge vælger at studere en humanistisk uddannelse, [[0]] jobmulighederne og lønnen er dårligere end for unge med en teknisk uddannelse.

En undersøgelse fra ROCKWOOL-Fonden viser, at der generelt er flere jobmuligheder for unge med en teknisk uddannelse end unge med en humanistisk uddannelse. [[1]] begyndte knap 6.000 unge på en humanistisk bacheloruddannelse i 2021, mens knap 3.000 unge begyndte på en teknisk bacheloruddannelse. Man kan synes, det er [[2]] med denne fordeling. Ikke blot på grund af jobmulighederne, men også fordi nyuddannede med en teknisk uddannelse ofte får en højere løn end nyuddannede med en humanistisk uddannelse.

Der kan være gode grunde til, at jobmuligheder og løn ikke er mere afgørende for danske unges valg af uddannelse. Det kan fx være en [[3]] det danske velfærdssamfund. Det mener Charlotte Rønhof, der er underdirektør hos Dansk Industri. Hun forklarer, at danske unge er i en anden situation end unge fra mange andre lande. Danske unge er nemlig ikke så afhængige af straks at få et arbejde med en høj løn efter endt uddannelse for at have en god levestandard. For eksempel er uddannelse gratis, og studerende kan få SU, og efter endt uddannelse kan man som nyuddannet også modtage dagpenge.

Den forholdsvis lave søgning til de tekniske bacheloruddannelser er et problem, for der er faktisk mangel på unge med den type uddannelse. Hvis man skal have flere unge til at søge ind på en teknisk uddannelse, er der forskellige muligheder. Man kan fx [[4]] antallet af studiepladser på uddannelser med høj ledighed blandt nyuddannede. Flere, der egentlig ønskede at studere en humanistisk uddannelse, ville så være nødt til at vælge et andet studium. Man kunne også helt lukke nogle uddannelser. En uddannelse som filosofi udbydes fx fem steder i landet, selvom der er høj ledighed blandt nyuddannede. Charlotte Rønhof mener, at det er et forsøg værd, selvom ingen af de to initiativer kan [[5]], at de unge, der normalt ville vælge en humanistisk uddannelse, ville vælge en teknisk uddannelse. Der kunne faktisk være en [[6]] for en uddannelse som filosofi ved, at den blev udbudt på færre universiteter. På den måde ville der komme flere penge, flere studerende og et bedre studiemiljø på de uddannelsessteder, der er tilbage.

Det er ikke alle, der er enige i, at man skal prøve at tilpasse udvalget af uddannelser efter det behov, der er i øjeblikket. Det gælder fx David Budtz Pedersen, professor ved Institut for Kommunikation og Psykologi på Aalborg Universitet. Han [[7]], at det ikke er muligt at forudsige, hvad der sker i fremtiden. Vi kan derfor ikke vurdere, hvilke behov der kommer til at opstå. For ikke så mange årtier siden mente de fleste nok ikke, at det var relevant at læse kinesisk, mens de fleste er af den modsatte opfattelse i dag.

Og der er måske noget, der tyder på, at der godt kan blive brug for flere med en humanistisk uddannelse i fremtiden. Der bliver nemlig ansat flere og flere humanister i private virksomheder, fx i it-virksomheder. Det skyldes [[8]], at de kan bidrage med viden om menneskelig adfærd i mødet med teknologi, da humanister kan tænke i brugervenlighed, og hvordan teknologi kan påvirke vores samfund.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["Ligeledes", "Derfor", "Alligevel", "Derimod"],
        2: ["overraskende", "logisk", "forventeligt", "nødvendigt"],
        3: ["målsætning for", "forklaring på", "følge af", "forudsætning for"],
        4: ["informere om", "beregne", "offentliggøre", "reducere"],
        5: ["forhindre", "muliggøre", "forklare", "garantere"],
        6: ["problemstilling", "fordel", "omkostning", "barriere"],
        7: ["påpeger", "gentager", "afviser", "benægter"],
        8: ["desværre", "desuden", "til gengæld", "blandt andet"]
      },
      example: { 0: "fordi" },
      answers: { 1: "Alligevel", 2: "overraskende", 3: "følge af", 4: "reducere", 5: "garantere", 6: "fordel", 7: "påpeger", 8: "blandt andet" }
    }]
  };

  // Real sets are loaded oldest first and each one is put in front, so the newest set ends up on top.
  X.READING.unshift(bornholm, ledere, datasikkerhed, humaniora);

  // ---------- Skriftlig fremstilling november-december 2023 ----------
  const mail = [
    "… Du snakkede om sidst, at I skulle have nyt køkken. Hvordan er det blevet?",
    "Mathias er jo i gang med at uddanne sig til elektriker. Han får derfor skiftevis SU og lærlingeløn, mens han tager sin uddannelse. Synes du, han burde betale husleje for at bo herhjemme?",
    "Jeg vil egentlig gerne opfordre ham til at læse videre til ingeniør. Tror du, det er en dårlig idé, at jeg blander mig?",
    "Vi plejer jo at tage til Italien i sommerferien. Men Mathias har jo fået en kæreste, som han nu har haft i et halvt års tid. Synes du, vi skal invitere hende med? …"
  ];
  const underlined = [
    "Hvordan er det blevet?",
    "Synes du, han burde betale husleje for at bo herhjemme?",
    "Tror du, det er en dårlig idé, at jeg blander mig?",
    "Synes du, vi skal invitere hende med?"
  ];
  const marked = mail.map(p => underlined.reduce((s, u) => s.replace(u, `«${u}»`), p)).join(" ");

  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-23n-w1", delprove: 1, real: true, year: 2023, session: SESSION,
      title: "Delprøve 1: En e-mail (nov.-dec. 2023)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din ven, Hanne, som har en søn, der går på erhvervsskole. " +
        "Mailen (de understregede dele står i «»): \"" + marked + "\" " +
        "Opgave: Skriv et svar.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts.
      email: mail.join("\n\n"),
      underlined,
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        ...underlined.map(u => "Understreget: " + u),
        "Foreslå, at I mødes inden længe og taler om sommerferien."
      ],
      phrases: ["Tak for din mail.", "Du spørger, hvordan … er blevet.", "Med hensyn til huslejen synes jeg, at …", "Jeg forstår godt, at du gerne vil …, men …", "Hvis jeg var dig, ville jeg …", "Hvad angår sommerferien, …", "Skal vi ikke mødes snart og tale om …?", "Mange hilsner"],
      model: `Kære Hanne

Tak for din mail. Det var dejligt at høre fra dig.

Du spørger, hvordan vores nye køkken er blevet. Det er blevet rigtig flot, men det tog længere tid end planlagt, fordi der manglede nogle skabe. Nu elsker vi at lave mad sammen i det lyse køkken.

Med hensyn til huslejen synes jeg faktisk, at Mathias godt kan betale et mindre beløb. Han tjener jo sine egne penge nu, og så lærer han at styre sin økonomi. Det behøver ikke at være meget, måske 1.000 kr. om måneden.

Jeg forstår godt, at du gerne vil hjælpe ham, men jeg tror, det er en dårlig idé at blande sig for meget. Han har selv valgt at blive elektriker, og han er glad for det. Hvis han senere får lyst til at læse videre, kan du støtte ham.

Hvad angår sommerferien, synes jeg, at I skal invitere hans kæreste med. Så lærer I hende bedre at kende, og Mathias får sikkert en bedre ferie.

Skal vi ikke mødes snart og tale om sommerferien? Hvad med en kop kaffe hos mig på lørdag?

Mange hilsner
Amira`
    },
    {
      id: "pd3-23n-w2a", delprove: 2, real: true, year: 2023, session: SESSION,
      title: "2A: Mænds og kvinders valg af erhvervsuddannelser (nov.-dec. 2023)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Mænds og kvinders valg af erhvervsuddannelser. " +
        "Diagram: Andelen af mænd og kvinder optaget på erhvervsuddannelser fordelt efter uddannelsesområde i 2021. " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): Mænd (i alt 9.366): Teknologi, byggeri og transport ca. 76 % · Omsorg, sundhed og pædagogik ca. 3 % · " +
        "Kontor, handel og forretningsservice ca. 11 % · Fødevarer, jordbrug og oplevelser ca. 10 %. " +
        "Kvinder (i alt 3.802): Teknologi, byggeri og transport ca. 13 % · Omsorg, sundhed og pædagogik ca. 44 % · " +
        "Kontor, handel og forretningsservice ca. 24 % · Fødevarer, jordbrug og oplevelser ca. 19 %. " +
        "Kilde: Styrelsen for It og Læring. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2023n/erhvervsuddannelser-diagram.png",
      imageAlt: "Søjlediagram: Andelen af mænd og kvinder optaget på erhvervsuddannelser fordelt efter uddannelsesområde i 2021. Mænd (9.366): teknologi, byggeri og transport ca. 76 %, omsorg, sundhed og pædagogik ca. 3 %, kontor, handel og forretningsservice ca. 11 %, fødevarer, jordbrug og oplevelser ca. 10 %. Kvinder (3.802): teknologi, byggeri og transport ca. 13 %, omsorg, sundhed og pædagogik ca. 44 %, kontor, handel og forretningsservice ca. 24 %, fødevarer, jordbrug og oplevelser ca. 19 %.",
      chart: {
        title: "Andelen af mænd og kvinder optaget på erhvervsuddannelser fordelt efter uddannelsesområde i 2021",
        unit: "%", approx: true,
        source: "Styrelsen for It og Læring",
        groups: [
          { label: "Mænd (i alt 9.366)", bars: [
            { label: "Teknologi, byggeri og transport", value: 76 },
            { label: "Omsorg, sundhed og pædagogik", value: 3 },
            { label: "Kontor, handel og forretningsservice", value: 11 },
            { label: "Fødevarer, jordbrug og oplevelser", value: 10 }] },
          { label: "Kvinder (i alt 3.802)", bars: [
            { label: "Teknologi, byggeri og transport", value: 13 },
            { label: "Omsorg, sundhed og pædagogik", value: 44 },
            { label: "Kontor, handel og forretningsservice", value: 24 },
            { label: "Fødevarer, jordbrug og oplevelser", value: 19 }] }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til nogle af de forskelle, diagrammet viser.",
        "Vurdér, om den nuværende kønsfordeling på erhvervsuddannelserne er et problem for det danske samfund. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvordan …", "Langt de fleste mænd valgte …", "Blandt kvinderne er det største område …", "En årsag kan være, at …", "Efter min mening er … et problem, fordi …", "For det første … For det andet …", "På den anden side kan man sige, at …", "Samlet set mener jeg, at …"],
      model: `En skæv fordeling

Diagrammet viser, hvordan de mænd og kvinder, der blev optaget på en erhvervsuddannelse i 2021, fordelte sig på fire områder. Der blev optaget mere end dobbelt så mange mænd (9.366) som kvinder (3.802). Ca. 76 % af mændene valgte teknologi, byggeri og transport, mens kun ca. 3 % valgte omsorg, sundhed og pædagogik. Blandt kvinderne var omsorg, sundhed og pædagogik det største område med ca. 44 %, og kun ca. 13 % valgte teknologi, byggeri og transport.

En årsag til forskellene kan være traditioner. Mange unge vælger det, som deres familie og venner forventer. Desuden har piger sjældent kvindelige rollemodeller i håndværksfagene, og mange drenge tror, at omsorgsarbejde er et kvindejob.

Efter min mening er den skæve kønsfordeling et problem for det danske samfund. For det første mangler Danmark både håndværkere og social- og sundhedsassistenter. Når mange unge slet ikke overvejer halvdelen af fagene, går samfundet glip af dygtige medarbejdere. For eksempel kunne flere mænd arbejde i ældreplejen, hvor der allerede i dag mangler personale. For det andet er lønnen ofte højere i de tekniske fag end i omsorgsfagene, og det er med til at fastholde lønforskellen mellem mænd og kvinder.

På den anden side kan man sige, at det vigtigste er, at de unge vælger det, de selv har lyst til. Hvis man presser nogen ind i et fag, de ikke trives i, falder de måske bare fra uddannelsen.

Samlet set mener jeg, at kønsfordelingen er et problem, men at løsningen ikke er tvang. Skolerne bør i stedet vise alle unge de mange muligheder, så valget bliver mere frit.`
    },
    {
      id: "pd3-23n-w2b", delprove: 2, real: true, year: 2023, session: SESSION,
      title: "2B: Valg af transportform (nov.-dec. 2023)",
      kind: "Prøveopgave · holdninger og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Valg af transportform. " +
        "Der er forskel på, hvad folk lægger vægt på, når de vælger transportform til og fra arbejde. Her er nogle eksempler: " +
        "• Det skal være billigt • Det skal være hurtigt • Det skal være komfortabelt • Det skal give motion • Det skal være muligt at arbejde under transporten • Det skal være miljøvenligt. " +
        "Du skal skrive minimum 200 ord. " +
        "(Fodnote: Kørselsfradrag er det beløb, der kan trækkes fra en persons indkomst, før skatten beregnes. Man kan få kørselsfradrag, hvis man har mere end 24 km til og fra arbejde.)",
      list: ["Det skal være billigt", "Det skal være hurtigt", "Det skal være komfortabelt", "Det skal give motion", "Det skal være muligt at arbejde under transporten", "Det skal være miljøvenligt"],
      footnote: "Kørselsfradrag er det beløb, der kan trækkes fra en persons indkomst, før skatten beregnes. Man kan få kørselsfradrag, hvis man har mere end 24 km til og fra arbejde.",
      points: [
        "Fortæl kort om dit valg af transportform.",
        "Kommentér et eller to af eksemplerne fra listen.",
        "Vurdér fordele og ulemper for samfundet ved, at personer, der har mere end 24 km til og fra arbejde, kan få kørselsfradrag. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Jeg tager … til arbejde, fordi …", "For mig er det vigtigste, at …", "Jeg forstår dog godt dem, der …", "Kørselsfradraget har både fordele og ulemper.", "En fordel er, at …", "En ulempe er, at …", "For eksempel kan …", "Samlet set mener jeg, at …"],
      model: `Lang vej til arbejde

Jeg bor i Roskilde og arbejder i København, så jeg har ca. 35 km til mit arbejde. Jeg tager toget hver dag, fordi det er hurtigere end bilen i myldretiden. Tidligere kørte jeg i bil, men jeg holdt i kø hver morgen, og benzinen var dyr.

For mig er det vigtigste, at det er muligt at arbejde under transporten. Når jeg kan svare på mails i toget, føles tiden ikke spildt. Jeg forstår dog godt dem, der vægter motion højest. Hvis man bor tæt på sin arbejdsplads, er cyklen et godt valg, fordi man både får motion og sparer penge. Desuden er det miljøvenligt, og det betyder også meget for mig.

Kørselsfradraget har både fordele og ulemper for samfundet. En fordel er, at det bliver lettere at tage et job langt fra hjemmet. Det er vigtigt, fordi mange virksomheder mangler arbejdskraft, og fordi mange arbejdspladser ligger i de store byer. For eksempel kan en sygeplejerske fra en lille by tage et job på et hospital 50 km væk uden at bruge en stor del af lønnen på transport. Fradraget hjælper altså også landdistrikterne, fordi folk kan blive boende der.

En ulempe er, at fradraget koster staten mange penge, som kunne bruges på fx skoler eller ældrepleje. Desuden kan det få folk til at køre langt i bil hver dag, og det er ikke godt for klimaet.

Samlet set mener jeg, at fordelene er størst, fordi fradraget gør arbejdsmarkedet mere fleksibelt. Men man kunne godt gøre ordningen grønnere, så man fik et større fradrag, hvis man tager toget eller bussen.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål november-december 2023 ----------
  // q = the booklet's suggested introduction ("Forslag til indledning") + the obligatory question;
  // follow = the suggested follow-up question(s). The picture sheet's own captions are the captions.
  // Note: topic B (Arbejde og alder) is also in js/data-pd3-oral.js (images/pd3-oral/arbejde-og-alder-2023n-*.jpg).
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, november-december 2023)";
  const intro = (emne, verb = "som viser") => `Her er der to billeder, ${verb} nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-23n-o-a", title: "At søge læge", session: SESSION, year: 2023, real: true, credit,
      intro: intro("At søge læge"),
      pictures: [
        { file: "images/pd3-2023n/at-soege-laege-1.jpg", caption: "Mænd venter med at gå til læge", credit,
          alt: "En mand i en stue holder sig på ryggen og har tydeligt ondt, mens hans kone sidder i en lænestol og rækker en pilleflaske frem mod ham.",
          words: ["ondt i ryggen", "smertestillende piller", "en lægetid", "at bide smerten i sig", "en bekymret ægtefælle"] },
        { file: "images/pd3-2023n/at-soege-laege-2.jpg", caption: "Videokonsultation med lægen", credit,
          alt: "En kvinde sidder ved et bord derhjemme og viser eksemet på sin arm til lægen på skærmen af en bærbar computer.",
          words: ["en videokonsultation", "eksem", "et udslæt", "en bærbar computer", "en praktiserende læge"] }
      ],
      first: {
        A: {
          q: "Situation A viser en mand, der ikke har kontaktet lægen, selvom han har meget ondt. Der er en tendens til, at mænd venter længere end kvinder med at gå til læge, selvom de ikke føler sig helt raske. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved, at man venter lidt med at gå til læge, selvom man ikke føler sig helt rask? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det især handler om kultur og opdragelse. Mange mænd har lært, at en rigtig mand ikke klager, men bider smerten i sig. Nogle er også bange for at høre, at der er noget alvorligt galt, så de håber, at det går over af sig selv. Desuden har mange travlt med arbejdet. For eksempel ventede min svigerfar i flere måneder med sine rygsmerter, fordi han ikke ville spilde lægens tid.",
          followAnswer: "Ja, det mener jeg bestemt. Hvis man venter for længe, kan en sygdom nå at blive mere alvorlig, og så bliver behandlingen både sværere og dyrere. Kræft er et godt eksempel, for her er det afgørende at komme tidligt i gang. Omvendt skal man heller ikke løbe til lægen med hver lille forkølelse, for lægerne har travlt nok. Men hvis smerterne ikke går over efter et par dage, bør man ringe."
        },
        B: {
          q: "Situation B viser en kvinde, der har en videokonsultation med sin læge, fordi hun har noget eksem på armen. Flere og flere bruger videokonsultation i stedet for at møde fysisk op hos lægen. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved at bruge videokonsultation i stedet for at møde fysisk op hos lægen? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det er, fordi det er nemt og sparer tid. Man behøver ikke at tage fri fra arbejde, køre til lægen og sidde i et venteværelse med andre syge. Det passer godt til en travl hverdag. Desuden blev mange vant til det under coronaepidemien. Jeg har selv prøvet det, da min søn havde udslæt. Lægen kunne se det på skærmen, og vi fik en recept på fem minutter.",
          followAnswer: "Ja, der kan godt være nogle problemer. Lægen kan ikke lytte på lungerne, mærke på maven eller tage en blodprøve gennem en skærm, så nogle sygdomme kan blive overset. Desuden er det ikke alle ældre, der er gode til teknik. Derfor synes jeg, at videokonsultation er fint til små problemer som eksem eller en kontrol, men ved alvorlige symptomer skal man møde op."
        }
      },
      second: {
        q: "Alle har ret til gratis behandling på et hospital, men man har ofte mulighed for at blive behandlet hurtigere på et privathospital, hvis man selv kan og vil betale for det. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Mener du, det er rimeligt, at folk kan blive behandlet hurtigere, hvis de kan og vil betale for det? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at ventelisterne på de offentlige hospitaler bliver kortere, når nogle vælger et privathospital. Folk kan også hurtigere komme tilbage på arbejde, og det sparer samfundet penge. En ulempe er, at vi får et sundhedsvæsen i to lag, hvor de rige bliver behandlet først. Desuden kan privathospitalerne trække læger og sygeplejersker væk fra de offentlige hospitaler, for eksempel med en højere løn.",
        followAnswer: "Det er et svært spørgsmål. På den ene side synes jeg, at det er folks egne penge, og hvis de vil bruge dem på en hurtig operation, må de gerne det. På den anden side er det et grundprincip i Danmark, at alle er lige, når de bliver syge. Jeg synes derfor, at det er i orden, så længe det ikke går ud over patienterne på de offentlige hospitaler."
      },
      conclusion: ""
    },
    {
      id: "pd3-23n-o-b", title: "Arbejde og alder", session: SESSION, year: 2023, real: true, credit,
      intro: intro("Arbejde og alder"),
      pictures: [
        { file: "images/pd3-2023n/arbejde-og-alder-1.jpg", caption: "Ældre på arbejdsmarkedet", credit,
          alt: "En ældre kvinde med headset sidder ved computeren i receptionen på en lægeklinik, mens en læge står bag hende, og patienter venter i venteværelset.",
          words: ["en lægesekretær", "et headset", "et venteværelse", "en seniormedarbejder", "folkepension"] },
        { file: "images/pd3-2023n/arbejde-og-alder-2.jpg", caption: "Unge på arbejdsmarkedet", credit,
          alt: "To unge mænd arbejder på et stort lager; den ene trækker en palleløfter med kasser, mens den anden peger og forklarer noget.",
          words: ["et lager", "en lagermedarbejder", "en palleløfter", "en ufaglært", "en uddannelse"] }
      ],
      first: {
        A: {
          q: "Situation A viser en ældre kvinde, der arbejder som lægesekretær. Nogle bliver ved med at arbejde, selvom de har mulighed for at gå på pension. Hvorfor tror du, det er sådan?",
          follow: "Kan der være nogen problemer ved at blive ved med at arbejde, selvom man har mulighed for at gå på pension? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, at mange simpelthen er glade for deres arbejde. Arbejdet giver dem en fast rytme i hverdagen, kolleger at snakke med og en følelse af at være nyttige. Nogle er også bange for at kede sig eller blive ensomme som pensionister. Desuden kan økonomien spille en rolle, hvis pensionen er lille. For eksempel arbejder min nabo stadig to dage om ugen som 70-årig, fordi hun elsker sit job.",
          followAnswer: "Ja, det kan der godt være. Hvis man har et fysisk hårdt job, kan man blive nedslidt og få skader. Man kan også gå glip af tid sammen med sine børnebørn eller af at rejse, mens man stadig er rask. Men for samfundet er det jo en fordel, fordi der mangler arbejdskraft. Så jeg synes, det er fint, hvis man selv har lyst og helbredet er i orden."
        },
        B: {
          q: "Situation B viser en ung mand, der arbejder som lagermedarbejder. Nogle unge får ikke en uddannelse efter folkeskolen, men kommer direkte ud på arbejdsmarkedet. Hvorfor tror du, det er sådan?",
          follow: "Kan der være nogen problemer ved, at nogle unge ikke får en uddannelse efter folkeskolen, men kommer direkte ud på arbejdsmarkedet? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, at nogle unge er skoletrætte efter ti år i folkeskolen. De har lyst til at bruge hænderne og tjene deres egne penge med det samme, for eksempel til en bil eller en lejlighed. Andre ved simpelthen ikke, hvad de vil uddanne sig til, så de tager et job, mens de tænker over det. Min nevø arbejdede for eksempel et år på et lager, før han startede på erhvervsskolen.",
          followAnswer: "Ja, især på længere sigt. Ufaglærte job er ofte de første, der forsvinder, når der kommer krise, eller når maskiner overtager arbejdet. Lønnen er også lavere, og arbejdet kan være hårdt for kroppen. Til gengæld kan et par år på arbejdsmarkedet give de unge erfaring og motivation. Derfor er det ikke et problem, hvis det er en pause, men det bliver et problem, hvis de aldrig får en uddannelse."
        }
      },
      second: {
        q: "Folkepensionsalderen er den samme for alle, der er født det samme år. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Mener du, pensionsalderen bør være kortere for faggrupper, der har hårdt fysisk arbejde – som fx murere og rengøringsassistenter? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at reglen er enkel og retfærdig på papiret, fordi alle bliver behandlet ens. Det er nemt for borgerne at forstå, og det er nemt for staten at administrere. En ulempe er, at folk har meget forskellige job. En kontorarbejder kan sagtens arbejde, til han er 68, men en murer eller en sosu-assistent kan være slidt op længe før. Så reglen er lige, men ikke nødvendigvis fair.",
        followAnswer: "Ja, det synes jeg faktisk. Folk med hårdt fysisk arbejde har ofte startet tidligt på arbejdsmarkedet, og mange af dem får ondt i ryg og knæ. Det er urimeligt, at de skal arbejde lige så længe som en, der sidder ved et skrivebord. Problemet er dog, hvem der skal bestemme, hvilke job der er hårde nok. Måske kunne man se på, hvor mange år man har arbejdet i alt."
      },
      conclusion: ""
    },
    {
      id: "pd3-23n-o-c", title: "Klima og livsstil", session: SESSION, year: 2023, real: true, credit,
      intro: intro("Klima og livsstil", "der viser"),
      pictures: [
        { file: "images/pd3-2023n/klima-og-livsstil-1.jpg", caption: "Klima og madvaner", credit,
          alt: "En familie spiser aftensmad sammen; forældrene og den lille dreng spiser pølser, mens de to ældste piger spiser salat, og den ene har en T-shirt med teksten ”Kød – nej tak!”.",
          words: ["en vegetar", "en veganer", "kød", "klimavenlig mad", "madvaner"] },
        { file: "images/pd3-2023n/klima-og-livsstil-2.jpg", caption: "Klima og ferievaner", credit,
          alt: "En gruppe turister, blandt andet en familie med børn, går op ad trappen til et fly fra selskabet Sunshine Tours.",
          words: ["en flyrejse", "en charterferie", "CO2-udslip", "en flytrappe", "en turist"] }
      ],
      first: {
        A: {
          q: "Situation A viser en familie, hvor de to ældste piger har valgt ikke at spise kød. Antallet af vegetarer og veganere er steget de senere år. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved at være vegetar eller veganer? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, den vigtigste grund er klimaet. Mange, især unge, har lært, at kødproduktion udleder meget CO2, og de vil gerne gøre noget selv. Andre tænker på dyrevelfærd eller på deres egen sundhed. Desuden er det blevet meget nemmere, fordi supermarkederne i dag har mange vegetariske produkter. For eksempel blev min datter vegetar efter et klimaprojekt i skolen, og nu spiser hele familien mindre kød.",
          followAnswer: "Det kan der godt være, især hvis man er veganer. Så skal man sørge for at få nok protein, jern og vitamin B12, ellers kan man blive træt og syg. Det kræver altså, at man ved noget om ernæring. Det kan også være et praktisk problem i en familie, hvis man skal lave to forskellige retter hver aften. Men hvis man planlægger maden godt, synes jeg, at det er en sund livsstil."
        },
        B: {
          q: "Situation B viser en familie, der er på vej på ferie. Nogle rejser meget med fly, selvom de godt ved, at det er skadeligt for klimaet. Hvorfor tror du, de alligevel gør det?",
          follow: "Tror du, folk også vil rejse meget med fly i fremtiden? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det er, fordi flyet er hurtigt og ofte billigt. Hvis man kun har en uges ferie, vil man ikke bruge to dage på et tog. Mange har også familie i udlandet, som de gerne vil besøge. Desuden føler mange, at deres egen rejse ikke gør den store forskel for klimaet. Jeg flyver selv til mit hjemland hvert år, fordi det er den eneste måde at se mine forældre på.",
          followAnswer: "Ja, det tror jeg desværre. Folk elsker at rejse, og i mange lande får flere og flere råd til at flyve. Men jeg tror og håber, at flyene bliver grønnere, for eksempel med elfly på korte ruter eller nyt brændstof. Måske bliver det også dyrere at flyve, hvis politikerne indfører en klimaafgift. Så vil nogle vælge toget, når de skal rejse inden for Europa."
        }
      },
      second: {
        q: "Det er især unge, der har fokus på at leve klimavenligt. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Mener du, der kan være nogen problemer ved at prioritere klima frem for velfærd? Hvorfor?/Hvorfor ikke?",
        answer: "En stor fordel er, at de unge påvirker deres forældre og bedsteforældre. Når en teenager bliver vegetar eller cykler i stedet for at blive kørt, ændrer hele familien ofte vaner. De unge lægger også pres på politikerne, for eksempel med klimademonstrationer. En ulempe kan være, at nogle unge bliver bekymrede og får klimaangst. Desuden kan det skabe konflikter mellem generationerne, hvis de ældre føler sig kritiseret.",
        followAnswer: "Ja, det kan der godt være. Hvis vi bruger mange penge på klimaet, kan der blive færre penge til for eksempel ældrepleje og hospitaler, og det rammer de svageste. Men jeg mener ikke, at det er et enten-eller. Hvis vi ikke løser klimaproblemerne nu, bliver det meget dyrere for velfærden senere, for eksempel på grund af oversvømmelser. Derfor skal vi prioritere begge dele."
      },
      conclusion: ""
    }
  );
})();
