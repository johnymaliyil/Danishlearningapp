// Prøve i Dansk 2, maj-juni 2020 – skriftlig del, læseforståelse.
// Texts and answer keys transcribed from the official exam papers
// (teksthæfte delprøve 1, tekst- og opgavehæfte delprøve 2, censorhæfte).
// The question booklet for delprøve 1 was not available, so the opgave 1
// questions are reconstructed from the official answer key (rettenøgle).
// Opgave 2 is left out because its text was not included.

(function () {
  const G = "PD2 maj-juni 2020";

  const opg1 = {
    id: "p20-1",
    group: G,
    real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2,
    minutes: 25,
    note: "Spørgsmål 1-6 er genskabt ud fra den officielle rettenøgle. Spørgsmål 7-12 er ekstra træning med de samme tekster.",
    instruction: "Læs teksterne. Skriv svaret (navnet på holdet, adressen eller bageriet) på linjen.",
    sections: [
      {
        heading: "AK aftenskole – Motionshold",
        cards: [
          { title: "Mave – baller – lår", body: "På dette hold har vi primært fokus på mave, baller og lår, men du får styrket og strammet muskulaturen i hele kroppen. Vi varmer op med konditionstræning, herefter går vi over til forskellige typer af øvelser som squats og mavebøjninger samt øvelser med elastikker og bolde. Træningen er målrettet kvinder, men mænd er også velkomne!" },
          { title: "Sund – Rask – Glad", body: "Dette er det helt rigtige hold for alle kvinder og mænd, der vil vedligeholde kroppen, forebygge skader, genoptræne en svag ryg eller øge kropsbevidstheden. Få hele kroppen varmet op og arbejdet igennem i et tempo, som du både kan følge med i og finde udfordringer i." },
          { title: "Zumba", body: "Alle – både kvinder og mænd – der elsker at danse og bevæge sig til musik, er velkomne på dette hold. Zumba er dansemotion baseret på latinamerikanske dansetrin, herunder salsa og samba. Trinene er lette at lære, så du er hurtigt med. Ved at danse zumba får du styrket konditionen, koordinationen samt kroppens forskellige muskler." },
          { title: "Yoga og afspænding", body: "Holdet er for alle, der ønsker at forbedre deres smidighed, styrke, balance og kropsbevidsthed. Gennem grundlæggende yogastillinger og dybdeafspænding lærer du din krops signaler bedre at kende, så der skabes en øget balance mellem krop og sind. Målet er at styrke kroppen, løsne spændinger, forebygge stress og skabe en indre ro." },
          { title: "Mand og motion", body: "På dette hold arbejder vi med at opbygge kroppens muskler med ekstra fokus på musklerne i ryg, mave, nakke og skuldre. Kroppen arbejdes igennem i et roligt tempo med små præcise bevægelser tilrettet den enkelte. Vi laver også kredsløbstræning og afslutter altid med udstræk. Holdet er kun for mænd." },
          { title: "Aerobic", body: "Aerobic er intens træning og glad motion. Vores nyeste aerobichold er et kvindehold, hvor du får pulsen op og brænder kalorier af, mens du har det sjovt. Undervisningen starter med let danseaerobic som opvarmning, inden vi går i gang med styrke- og balanceøvelser og sjov muskel- og konditionstræning. Timen slutter altid med udstrækning." },
          { title: "Motionsgymnastik", body: "Til motionsgymnastik får du trænet hele kroppen, så den bliver stærk og smidig. Vores grundige opvarmning sætter gang i kredsløbet og gennemarbejder alle muskler og led. Vi arbejder hele kroppen igennem til god musik, så der både kommer sved på panden og smil på læben. Undervisningen afsluttes med grundig udstrækning. Alle kan deltage – rabat for pensionister." },
          { title: "Styrke og bevægelighed", body: "Vi starter timen med stræk og rulninger, der giver varme i hele kroppen. Bagefter arbejder vi med kroppens forskellige muskelgrupper, så bevægeligheden øges. Du kan selv bestemme, hvor udfordrende det skal være, alt afhængig af din egen kondition, styrke og brug af redskaber som elastikker og håndvægte. Alle kan deltage, og træningen ledes af en fysioterapeut, som tilpasser øvelserne til den enkeltes niveau." }
        ]
      },
      {
        heading: "Boliger til salg i Køge",
        cards: [
          { title: "Klemmenstrupvej 86", body: "Denne flotte og velholdte villa byder på fire gode værelser, to dejlige badeværelser, et køkken-alrum samt to stuer en suite, en hævet træterrasse og en fliseterrasse. Ejendommen ligger på en stor grund med en solrig have. Beliggenheden kan ikke blive meget bedre med alle faciliteter i nabolaget, bl.a. skole, gode busforbindelser og fine indkøbsmuligheder.", facts: "Kontant: 3.295.000 · Bolig m²: 168 · Grund m²: 1202" },
          { title: "Hasselvej 79", body: "Ønsker I at komme væk fra storbyens larm, er denne skønne villa i et fredeligt, børnevenligt kvarter noget for jer. Her kan hverdagslivet udfolde sig i stueplanets åbne opholdsafdeling med stor stue og dejligt køkken-alrum. Villaen rummer også en førstesal med tre gode værelser. Ude får I en solrig have med en stor flisebelagt terrasse med skøn udsigt.", facts: "Kontant: 1.885.000 · Bolig m²: 112 · Grund m²: 995" },
          { title: "Kildevej 59", body: "Denne etplansvilla på fire værelser er en oplagt mulighed for førstegangskøbere. I kommer til at bo i et trygt og børnevenligt kvarter med institutioner, skoler og indkøbsmuligheder i gåafstand, og togstationen er kun 5 minutters gang væk. Boligen indeholder et badeværelse med gulvvarme og indbyggede skabe. Køkkenet er lyst og ligger i forbindelse med den store vinkelstue. Udestuen har en fin udsigt over haven med en sydvendt terrasse.", facts: "Kontant: 1.595.000 · Bolig m²: 108 · Grund m²: 870" },
          { title: "Ølbyvej 166", body: "På en attraktiv vej i Ølby ligger denne dejlige villa. I stueplan finder I ud over to værelser et landligt inspireret køkken med kogehalvø. Stuen ligger i forbindelse med køkkenet og har masser af plads til både spisning og sofahygge. I får desuden en fantastisk udestue, hvor solen kan nydes hele dagen. På førstesalen er der tre gode værelser og et lyst badeværelse. Hertil kommer en stor og solrig grund med to terrasser.", facts: "Kontant: 2.495.000 · Bolig m²: 176 · Grund m²: 933" },
          { title: "Langesvej 63", body: "I et af Køges bedste områder udbydes denne dejlige villa, der byder velkommen i en lys entré med trappe til første sal. Der er et skønt gæstebadeværelse med bruser og gulvvarme. Den flotte stue har udgang til en høj terrasse samt åbent til nyt køkken. Første sal består af to store værelser samt endnu et flot badeværelse. Der er desuden en god kælder med vaskerum og festlokale. Der er gåafstand til Køges hyggelige torv og handelsby, havnen samt Køge Ås.", facts: "Kontant: 4.245.000 · Bolig m²: 128 · Grund m²: 798" },
          { title: "Vordingborgvej 264", body: "Elegant villa med masser af stil og charme i eftertragtet kvarter. Stueetagen byder på et charmerende køkken-alrum samt en stor vinkelstue, hvor lyset strømmer ind gennem de store vinduespartier. På førstesalen er der tre gode værelser, et dejligt badeværelse samt gæstetoilet. Fra det første værelse kan I fortsætte ud på en fantastisk tagterrasse, hvor aftenkaffen kan nydes, mens I betragter den smukke have.", facts: "Kontant: 3.665.000 · Bolig m²: 198 · Grund m²: 1.310" },
          { title: "Ulstrup Bygade 41", body: "Velholdt villa med store lyse rum, nyt tag, nye vinduer og nymalede ydervægge. Fra entreen ledes du ned ad gangen, hvorfra du har adgang til tre gode værelser og pænt badeværelse. I den anden ende af huset har du bryggers, flot køkken, spisestue og en stor stue. En sydvendt terrasse og en dejlig græsplæne sørger for optimale rammer om udelivet. Kun 35 minutters kørsel til København.", facts: "Kontant: 2.455.000 · Bolig m²: 158 · Grund m²: 1.045" },
          { title: "Egevej 159", body: "Indflytningsklar etplansvilla opført i 1971 fremstår velholdt med helt nye vinduer. I kan se frem til et lækkert køkken, en lys stue, fire dejlige værelser, et stort badeværelse med badekar samt kælder med tre disponible rum. Til haven hører et delvist overdækket terrassemiljø med udekøkken. I bosætter jer centralt med gåafstand til skole, børnehave og SFO. Der er heller ikke langt til motorvejen mod København.", facts: "Kontant: 2.395.000 · Bolig m²: 146 · Grund m²: 826" },
          { title: "Stormøllevej 85", body: "Velkommen til denne velholdte villa i to plan med hele tre stuer en suite, tre soveværelser samt gæstetoilet og stort badeværelse med badekar og bruseniche. Dertil kommer en god kælder med fitnessrum og tre disponible rum. I kommer til at bo tæt på naturen med skov og åbne marker i fredelige omgivelser og tæt på byens tilbud. Der er godt fem minutter på cykel til skole, børnehave og idrætshal.", facts: "Kontant: 3.195.000 · Bolig m²: 244 · Grund m²: 958" },
          { title: "Smedevej 76", body: "I skønne rolige omgivelser udbydes denne dejlige rummelige villa med flot have. I får bl.a. tre stuer, tre værelser foruden et helt nyt badeværelse med lyse klinker og muret bruseniche, et stort baderum med vaskesøjle og et gæstetoilet. Med i købet får I et stort udhus og en carport. Når vejret tillader det, kan I trække ud på den store træterrasse i husets solrige have med en legevenlig græsplæne.", facts: "Kontant: 2.550.000 · Bolig m²: 187 · Grund m²: 905" },
          { title: "Køgevej 112", body: "Dejlig villa beliggende tæt på åbne marker og en skøn badestrand. Villaen indeholder stort bryggers med mange skabe og god plads til vaskemaskine m.m., køkken med spiseplads og stor opholdsstue, som oprindelig har været to stuer, på i alt ca. 60 m². Fra stuen er der adgang til værelse med egen udgang til terrasse samt et stort forældresoveværelse med eget badeværelse. Desuden er der en børneafdeling med to børneværelser samt lyst badeværelse med badekar.", facts: "Kontant: 2.950.000 · Bolig m²: 164 · Grund m²: 815" },
          { title: "Lidemarksvej 23", body: "Villa beliggende i rolige omgivelser i landsbyen Lidemark, tæt på Valløskovene, og med plads til den store familie. Stueplan rummer stue og køkken i åben forbindelse med direkte udgang til en god udestue. Desuden er der tre værelser, to fine badeværelser, et bryggers og en stor entré. På førstesalen er der yderligere tre værelser, et badeværelse og en altan samt et stort loftsrum med loft til kip og mange muligheder for indretning.", facts: "Kontant: 2.695.000 · Bolig m²: 180 · Grund m²: 1.075" }
        ]
      },
      {
        heading: "Bagerier i Aarhus",
        cards: [
          { title: "Nr. 24", sub: "Graven 24, 8000 Aarhus C", body: "Ægteparret Karen Husted og Christian Funder står bag disken i bageriet Nr. 24, der er opkaldt efter adressen på Graven i Latinerkvarteret. Udvalget er ikke stort, men den lille butik er hyggelig, og smagen og konsistensen af brødet er fantastisk. Prøv for eksempel bollerne af spelt eller ølandshvede, brombærsnitterne eller ægteparrets version af klassiske snegle, de såkaldte kanelting. Nøglen til den høje kvalitet er ifølge indehaverne, at alt brød er lavet på surdej og hæver i 24 timer eller mere. Udover brød og kager har butikken et lille udvalg af ost, marmelade og forskellige meltyper, hvis du vil gøre parret kunsten efter derhjemme." },
          { title: "Småkagehuset", sub: "Frederiks Allé 102, 8000 Aarhus C", body: "Hos Småkagehuset på Frederiks Allé er det selvfølgelig først og fremmest småkager, det handler om, og de er fortræffelige. Men den lille bager på Frederiksbjerg har mere end små, knasende kager at byde på. Vi nævner i flæng stenovnsbagte brød og boller, skærekager, scones, tærter, franske vafler, tunesiske kaffebrød, muffins og marengskager. For slet ikke at tale om kransekage, studenterbrød og kokossnitter. Vi anbefaler, at du som minimum prøver chokoladeskærekagen og butikkens scones med æble-kanel, ligesom gulerodskagen er værd at gå efter. På småkagefronten er der ingen vej uden om butikkens bland-selv-koncept med små minikager, som du blander nøjagtigt som bland-selv-slik på tanken. Så kan du jo altid løbe en tur bagefter." },
          { title: "Briancon", sub: "Åboulevarden 53, 8000 Aarhus C", body: "Det mørke specialbrød med navnet \"fransk ristet\", de bløde müsliboller og de afhængighedsskabende kanelsnegle er sikre hits hos midtbybageren Briancon, der også tidligere havde en filial på Åbyhøj Torv. Vi anbefaler at smage det italienske durumbrød, der både fås som baguettes og i stor familiestørrelse. Briancon har et stort udvalg af champagner og holder jævnligt arrangementer, hvor du kan få en indføring i boblernes verden og smage på de våde varer." },
          { title: "SchweizerBageriet", sub: "M.P. Bruuns Gade 56, 8000 Aarhus C", body: "Adressen M. P. Bruuns Gade 56 rimer på brød og kager. Lokalerne i den hvide bygning har siden 1950'erne huset SchweizerBageriet, og de seneste 14 år har den læreruddannede Tine Lajer Petersen stået i spidsen for den lækkert indrettede butik. Den lange historie betyder dog ikke, at det traditionsrige bageri hænger fast i fortiden. Tine og co. finder hele tiden på nye produkter og har i tidernes løb vundet priser for blandt andet årets bedste brød og Danmarks bedste rugbrød. Et af de seneste skud på stammen er butikkens såkaldte schweizerdeli, hvor du kan bestille frisklavede sandwiches med alt fra håndpillede rejer til spansk sortfodsskinke til en hurtig frokost. Hvis du har problemer med gluten, kan du købe friskbagte, glutenfrie brød og boller hver onsdag i bageriet." },
          { title: "Mor Anna", sub: "Mejlgade 5, 8000 Aarhus C", body: "Den kombinerede bager og deli Mor Anna slog dørene op i Mejlgade i 2015 og har siden taget kampen op mod byens øvrige gourmetbagere. Arsenalet består af et velvalgt sortiment af fortrinligt brød og søde sager som tebirkes og hindbærsnitter, og butikken skyder også med skarpt med en stribe gode sandwiches, der er lige til at tage med. Prøv for eksempel varianten med sprængt oksebryst med tomat, røget comté-ost, forårsløg og chilimayo." }
        ],
        source: "Kilde: www.smagaarhus.dk/bager-aarhus (03.01.2019), uddrag"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Fatima vil gerne træne på et hold, hvor der kun er kvinder. Hvilket hold skal hun vælge?", accept: ["aerobic"] },
      { type: "short", n: 2, q: "Familien Berg vil gerne bo tæt på en badestrand, og forældrene vil gerne have deres eget badeværelse. Hvilket hus passer til dem?", accept: ["køgevej 112", "køgevej"] },
      { type: "short", n: 3, q: "Jens og Lise vil gerne have en carport og et udhus til deres cykler. Hvilket hus passer til dem?", accept: ["smedevej 76", "smedevej"] },
      { type: "short", n: 4, q: "Et ungt par skal købe deres første bolig. De tager toget på arbejde og vil gerne bo tæt på stationen. Hvilket hus passer til dem?", accept: ["kildevej 59", "kildevej"] },
      { type: "short", n: 5, q: "Familien Nielsen træner meget og vil gerne have et fitnessrum i kælderen. Hvilket hus passer til dem?", accept: ["stormøllevej 85", "stormøllevej"] },
      { type: "short", n: 6, q: "Maja vil gerne selv blande sine småkager, ligesom når man køber bland-selv-slik. Hvilket bageri skal hun gå til?", accept: ["småkagehuset"] },
      { type: "short", n: 7, extra: true, q: "Hvilket hold er kun for mænd?", accept: ["mand og motion"] },
      { type: "short", n: 8, extra: true, q: "Hvilket hold giver rabat til pensionister?", accept: ["motionsgymnastik"] },
      { type: "short", n: 9, extra: true, q: "På hvilket hold bliver træningen ledet af en fysioterapeut?", accept: ["styrke og bevægelighed"] },
      { type: "short", n: 10, extra: true, q: "Hvilket hus har en tagterrasse?", accept: ["vordingborgvej 264", "vordingborgvej"] },
      { type: "short", n: 11, extra: true, q: "Hvilket hus har en kælder med festlokale?", accept: ["langesvej 63", "langesvej"] },
      { type: "short", n: 12, extra: true, q: "Hvor kan man købe glutenfrit brød om onsdagen?", accept: ["schweizerbageriet", "schweizer bageriet"] }
    ]
  };

  const opg3 = {
    id: "p20-3",
    group: G,
    real: true,
    title: "Opgave 3 – Ida bor på kollegium",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2,
    minutes: 20,
    instruction: "Læs teksten. Vælg de ord (13-20), der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `De fleste unge flytter hjemmefra, når de er 18-20 år og skal starte på en uddannelse. Men det kan være svært at få råd til at bo alene i en lejlighed, når man studerer. Mange unge vælger [[0]] at flytte på et kollegium, hvor det ofte er billigere at bo.

Ida er 20 år og studerer på Aarhus Universitet, og hun har et værelse på et kollegium midt i Aarhus.

Værelset er lidt [[13]] end det, hun havde, da hun boede hjemme hos sine forældre. Men det er stort nok til hende, og hun har også eget bad og toilet. Køkkenet deler hun med 14 andre unge. For det meste synes Ida, at det er [[14]] at bo på kollegiet. For der er altid nogen at snakke med, og der er også fællesspisning i køkkenet et par gange om ugen. Det deltager Ida næsten [[15]] i, for hun kan godt lide at spise sammen med de andre.

Men Ida synes også, at der er nogle ulemper ved at bo på kollegiet. Fx er der en fyr, der [[16]] rydder op efter sig i køkkenet, når han har lavet mad. Det er Ida ret sur over, [[17]] det betyder, at hun somme tider er nødt til at gøre rent efter ham, før hun selv kan lave mad. Ida er også træt af, at der tit er [[18]] på kollegiet. Når hun skal sidde og læse på sit værelse, vil hun nemlig godt have fred og ro. Men ved siden af Ida bor der fx en pige, som elsker at høre høj musik. Det gør hun næsten hver dag, [[19]] Ida har bedt hende om at skrue ned.

Men alt i alt er Ida [[20]] med at bo på kollegiet, fordi hun bor centralt og har en billig husleje, og så har hun altid nogen at være sammen med.`,
    questions: [
      {
        type: "gaps",
        bank: ["derfor", "selvom", "stille", "desværre", "for", "mindre", "kedeligt", "utilfreds", "altid", "større", "hyggeligt", "larm", "tilfreds", "aldrig"].map(w => ({ key: w, text: w })),
        example: { 0: "derfor" },
        answers: { 13: "mindre", 14: "hyggeligt", 15: "altid", 16: "aldrig", 17: "for", 18: "larm", 19: "selvom", 20: "tilfreds" }
      }
    ]
  };

  const opg4 = {
    id: "p20-4",
    group: G,
    real: true,
    title: "Opgave 4 – Kærlighed på internettet",
    kind: "Delprøve 2 · find sætningen",
    level: 3,
    minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Tom Jessen er 37 år. Han har et godt job som tømrer og bor et dejligt sted, men han savner en kæreste.

**0.** Tom Jessen har været single i mange år, og han bor alene i et stort hus ude på landet i Vestjylland. Næsten alle Toms venner har en kæreste eller er blevet gift. [[0]]. Han har bare ikke været heldig at møde den rigtige pige endnu. Så nu har han besluttet sig for at prøve at finde kærligheden på internettet.

**21.** Tom finder en datingside på nettet, hvor singler kan møde hinanden. Her laver han en profil, hvor han skriver lidt om sit hus og sin hund, som han elsker at gå tur med. [[21]]. Derfor får han en god ven til at læse det igennem og hjælpe ham med at gøre teksten mere spændende. Vennen tager også et rigtig godt foto af Tom, som han kan bruge sammen med teksten på sin profil.

**22.** Efter et par dage får Tom en mail fra en kvinde, som bor i Esbjerg. Hun synes, at Tom har en interessant profil. Hun sender også nogle fotos af sig selv, og Tom synes, hun ser godt ud. Han vil gerne lære hende at kende, og de begynder at skrive sammen. [[22]]. For da de har mailet sammen i et par uger, holder hun op med at skrive til ham, og det bliver Tom meget skuffet over.

**23.** En dag sidder Tom og kigger på forskellige profiler på datingsiden. Han ser et foto af en pige, der ser rigtig sød ud. Hun hedder Anna, og der står i hendes profil, at hun bor i Vestjylland og har en hund ligesom ham. [[23]]. Så selvom han er lidt bange for at blive skuffet igen, beslutter han sig for at sende hende en mail. Anna svarer ham heldigvis med det samme, og én mail bliver hurtigt til flere.

**24.** Tom og Anna skriver og ringer sammen flere gange, og de beslutter, at de gerne vil mødes. Så en lørdag mødes de og går en tur med deres hunde ved en strand tæt på, hvor Tom bor. [[24]]. Men det varer ikke så længe, for kort tid efter snakker de sammen, som om de har kendt hinanden i mange år. Både Tom og Anna hygger sig, og de vil begge to meget gerne ses igen.

**25.** Tom og Anna mødes så tit, de kan, og de bliver hurtigt meget glade for hinanden. Tom er sikker på, at han har fundet kvinden i sit liv. Så efter et par måneder spørger han Anna, om hun vil giftes med ham. [[25]]. Hun er meget forelsket i Tom, men hun synes, de skal prøve at bo sammen, inden de beslutter, om de skal giftes. Så i stedet aftaler de, at hun skal flytte ind hos Tom, og at de skal bo sammen i hans store hus med deres to hunde.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Og det drømmer Tom også om." },
          { key: "B", text: "Men hun vil gerne vente lidt." },
          { key: "C", text: "Tom synes, det lyder interessant." },
          { key: "D", text: "Og de bliver meget forelskede i hinanden." },
          { key: "E", text: "Men det stopper pludselig." },
          { key: "F", text: "Men Tom synes, det lyder lidt kedeligt." },
          { key: "G", text: "Først er de begge to ret nervøse." },
          { key: "H", text: "Hun siger straks ja." }
        ],
        example: { 0: "A" },
        answers: { 21: "F", 22: "E", 23: "C", 24: "G", 25: "B" }
      }
    ]
  };

  const opg5 = {
    id: "p20-5",
    group: G,
    real: true,
    title: "Opgave 5 – Interview med Frank",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3,
    minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    text: "Frank på 58 er lastbilchauffør i et stort transportfirma. Hans job er at køre varer med lastbil mellem Danmark og andre lande i Europa, og han er tit hjemmefra flere dage i træk.",
    sections: [
      {
        heading: "Interview med Frank – lastbilchauffør",
        cards: [
          { title: "A", sub: "Eksempel", body: "Nej, det har jeg ikke. Jeg har arbejdet på forskellige fabrikker, og jeg har også været i lære som elektriker, men det var ikke noget for mig. Da jeg var 32, tog jeg et stort kørekort, og så blev jeg ansat i det her transportfirma, og her har jeg været lige siden." },
          { title: "B", body: "Nej, det har jeg ikke. Jeg har jo kørt i lastbil i mange år, så jeg har haft flere forskellige modeller. Den bil, jeg har nu, har jeg haft, siden jeg begyndte at køre ture til udlandet for firmaet, og jeg er rigtig glad for den. Den er som et hjem på hjul med køleskab, kaffemaskine og tv. Og der er også en seng, hvor jeg kan sove." },
          { title: "C", body: "Det er nok, at man sidder ned det meste af tiden. Mange af os spiser også en del fastfood, fordi vi tit er nødt til at spise på grillbarer og tankstationer. Så man kommer desværre let til at veje for meget i det her job, og det gælder også for mig." },
          { title: "D", body: "Ja, det har aldrig været noget problem for mig. Faktisk er det en vigtig grund til, at jeg er glad for det her job. Som person er jeg nemlig en lidt stille type, og jeg tror faktisk, at det ville irritere mig, hvis jeg hele tiden skulle køre sammen med en anden chauffør." },
          { title: "E", body: "Nej, faktisk ikke. Jeg kører mine ture, og jeg læsser varer af og på min lastbil. Somme tider vasker jeg bilen og laver nogle småreparationer på den, hvis det er nødvendigt. Så det varierer ikke så meget, og dagene ligner tit hinanden. Men det har jeg det helt fint med." },
          { title: "F", body: "Jeg ser dem ikke så tit. Vi kører næsten altid lastbil hver for sig i vores firma, så det er faktisk kun, hvis vi skal til et møde eller fx til julefrokost i firmaet, at vi har kontakt med hinanden. Det synes jeg er meget hyggeligt. Men til hverdag har jeg sådan set ikke noget med de andre at gøre." },
          { title: "G", body: "At køre lastbil om natten! Det er der ellers ikke så mange, der kan lide, men det giver mig en følelse af frihed, når jeg fx kører gennem Tyskland midt om natten med musik i radioen. Så er der heller ikke så mange biler på vejene, og derfor kan man komme hurtigere frem." },
          { title: "H", body: "Jeg begyndte først at køre lange ture til udlandet for tre år siden. Før det kørte jeg kun korte ture i Danmark. Så da mine døtre var yngre, kom jeg hjem hver dag. Nu er de flyttet hjemmefra, og derfor betyder det ikke så meget for dem. Og min kone nyder det faktisk, når hun har huset for sig selv." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Har du altid været lastbilchauffør?", answer: "A", example: true },
          { n: 26, text: "Hvad er det bedste ved dit job?", answer: "G" },
          { n: 27, text: "Har du mange forskellige arbejdsopgaver?", answer: "E" },
          { n: 28, text: "Kan du godt lide at arbejde alene?", answer: "D" },
          { n: 29, text: "Hvad er det værste ved dit job?", answer: "C" },
          { n: 30, text: "Hvad siger din familie til, at du er så meget væk?", answer: "H" }
        ]
      }
    ]
  };

  PD2.READING.unshift(opg1, opg3, opg4, opg5);
})();
