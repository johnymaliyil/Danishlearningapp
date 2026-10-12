// Prøve i Dansk 3, maj-juni 2024 – skriftlig fremstilling and mundtlig kommunikation (delprøve 2).
// Transcribed from the exam papers: skriftlig fremstilling (produktionsnr. 18), the picture sheets for
// mundtlig kommunikation (illustrations by Niels Roland, cropped into images/pd3-2024/) and the
// censor- og eksaminatorhæfte for the oral exam (produktionsnr. 21), which gives the examiner's
// introductions, the obligatory questions and the suggested follow-up questions.
// Task wording, the friend's e-mail, the questions and the chart labels are copied from the papers.
// The chart values are read off the bar chart (ca.-values). All model answers are our own
// (the papers have none).

(function () {
  const X = PD2.EXAMS.pd3;
  const SESSION = "Maj-juni 2024";

  // ---------- Skriftlig fremstilling maj-juni 2024 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-24m-w1", delprove: 1, real: true, year: 2024, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (maj-juni 2024)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din danske ven, der lige har fået nyt arbejde og er flyttet til en anden by. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Tak for sidst, det var hyggeligt. Du sagde, at du snart er færdig med din danskuddannelse, men at du ikke føler, du er god nok til dansk. «Har du tænkt mere over, hvad du nu vil gøre?» " +
        "Jeg kender endnu ikke så mange her i byen, men mange af mine kolleger bor heromkring, og de er egentlig rigtig søde. «Tror du, det vil være en god idé at invitere dem alle sammen hjem til mig en aften?» " +
        "Og så noget helt andet. På min nye arbejdsplads er der kage til både møder og fødselsdage, og det synes jeg simpelthen bliver for meget. «Synes du, jeg skal foreslå, at vi dropper kagen til møderne?» " +
        "Og så har jeg lige et praktisk spørgsmål til dig. Jeg har jo stadig en del af mine ting stående i kælderen under min gamle lejlighed. De skal flyttes herover. «Har du mulighed for at hjælpe mig med det i weekenden?» …\" " +
        "Opgave: Skriv et svar.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Tak for sidst, det var hyggeligt. Du sagde, at du snart er færdig med din danskuddannelse, men at du ikke føler, du er god nok til dansk. Har du tænkt mere over, hvad du nu vil gøre?\n\n" +
        "Jeg kender endnu ikke så mange her i byen, men mange af mine kolleger bor heromkring, og de er egentlig rigtig søde. Tror du, det vil være en god idé at invitere dem alle sammen hjem til mig en aften?\n\n" +
        "Og så noget helt andet. På min nye arbejdsplads er der kage til både møder og fødselsdage, og det synes jeg simpelthen bliver for meget. Synes du, jeg skal foreslå, at vi dropper kagen til møderne?\n\n" +
        "Og så har jeg lige et praktisk spørgsmål til dig. Jeg har jo stadig en del af mine ting stående i kælderen under min gamle lejlighed. De skal flyttes herover. Har du mulighed for at hjælpe mig med det i weekenden? …",
      underlined: [
        "Har du tænkt mere over, hvad du nu vil gøre?",
        "Tror du, det vil være en god idé at invitere dem alle sammen hjem til mig en aften?",
        "Synes du, jeg skal foreslå, at vi dropper kagen til møderne?",
        "Har du mulighed for at hjælpe mig med det i weekenden?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Har du tænkt mere over, hvad du nu vil gøre?",
        "Understreget: Tror du, det vil være en god idé at invitere dem alle sammen hjem til mig en aften?",
        "Understreget: Synes du, jeg skal foreslå, at vi dropper kagen til møderne?",
        "Understreget: Har du mulighed for at hjælpe mig med det i weekenden?",
        "Foreslå, at I ringer sammen og snakker videre."
      ],
      phrases: ["Tak for din mail.", "Du spørger, hvad jeg vil gøre nu.", "Jeg synes, det er en god idé at …", "Hvad angår kagen, …", "Hvis jeg var dig, ville jeg …", "Jeg vil gerne hjælpe dig, men …", "Skal vi ikke ringe sammen og snakke videre?", "Mange hilsner"],
      model: `Hej Sofie

Tak for din mail. Det var også rigtig hyggeligt at ses, og jeg er glad for at høre, at du er faldet godt til i dit nye job.

Du spørger, hvad jeg vil gøre nu. Selvom jeg snart er færdig med danskuddannelsen, vil jeg gerne blive bedre til dansk, før jeg søger fast arbejde. Derfor har jeg meldt mig til et kursus på VUC, og så vil jeg prøve at finde et frivilligt job, hvor jeg kan tale dansk hver dag.

Jeg synes, det er en rigtig god idé at invitere dine kolleger hjem til dig. Så lærer du dem bedre at kende uden for arbejdet. I kan måske lave noget enkelt, fx en grillaften, hvor alle tager lidt mad med.

Hvad angår kagen, forstår jeg dig godt. Men hvis jeg var dig, ville jeg vente lidt med at foreslå det, fordi du stadig er ny på arbejdspladsen. Du kan jo bare lade være med at spise kage til møderne.

Selvfølgelig vil jeg gerne hjælpe dig med at flytte dine ting. Desværre kan jeg ikke på lørdag, men søndag passer mig fint.

Skal vi ikke ringe sammen i aften og snakke videre om det hele?

Mange hilsner
Amira`
    },
    {
      id: "pd3-24m-w2a", delprove: 2, real: true, year: 2024, session: SESSION,
      title: "2A: Frivilligt arbejde (maj-juni 2024)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Frivilligt arbejde. " +
        "Diagram: Andelen af den voksne danske befolkning, som udførte frivilligt arbejde i 2020 inden for udvalgte områder. " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): Kulturområdet (fx museer) ca. 4 % · Idrætsområdet (fx sportsklubber) ca. 12 % · " +
        "Det sociale område (fx besøgsvenner og flygtningevenner) ca. 5 % · Miljøområdet (fx naturfredning) ca. 1 % · " +
        "Sundheds- og sygdomsområdet (fx bloddonor og patientforening) ca. 3 %. " +
        "Kilde: Frivillighedsundersøgelsen 2020, side 27, https://www.vive.dk/media/pure/16186/5662919. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2024/frivilligt-arbejde-diagram.png",
      imageAlt: "Søjlediagram: Andelen af den voksne danske befolkning, som udførte frivilligt arbejde i 2020 inden for udvalgte områder. Idrætsområdet ca. 12 %, det sociale område ca. 5 %, kulturområdet ca. 4 %, sundheds- og sygdomsområdet ca. 3 %, miljøområdet ca. 1 %.",
      chart: {
        title: "Andelen af den voksne danske befolkning, som udførte frivilligt arbejde i 2020 inden for udvalgte områder.",
        unit: "%", approx: true,
        source: "Frivillighedsundersøgelsen 2020, side 27, https://www.vive.dk/media/pure/16186/5662919",
        bars: [
          { label: "Kulturområdet (fx museer)", value: 4 },
          { label: "Idrætsområdet (fx sportsklubber)", value: 12 },
          { label: "Det sociale område (fx besøgsvenner og flygtningevenner)", value: 5 },
          { label: "Miljøområdet (fx naturfredning)", value: 1 },
          { label: "Sundheds- og sygdomsområdet (fx bloddonor og patientforening)", value: 3 }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til nogle af de forskelle, diagrammet viser.",
        "Vurdér, om man kan løse manglen på sygeplejersker og social- og sundhedsassistenter ved hjælp af frivillig arbejdskraft. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor stor en andel af …", "Det største område er … med ca. … %.", "Derefter følger …", "Kun ca. 1 % …", "En årsag kan være, at …", "Efter min mening kan man ikke …", "For det første … For det andet …", "En ulempe er dog, at …", "Samlet set mener jeg, at …"],
      model: `Frivillige kan hjælpe – men ikke erstatte personalet

Diagrammet viser, hvor stor en andel af den voksne danske befolkning der udførte frivilligt arbejde inden for fem udvalgte områder i 2020. Idrætsområdet er klart det største med ca. 12 %. Derefter følger det sociale område med ca. 5 % og kulturområdet med ca. 4 %. Sundheds- og sygdomsområdet ligger på ca. 3 %, mens kun ca. 1 % arbejdede frivilligt med miljø.

En årsag til forskellene kan være, at mange forældre bliver trænere eller hjælpere, når deres egne børn går til sport. Idrætten er desuden et fællesskab, hvor man har det sjovt sammen. Miljøområdet er mindre, fordi der er færre foreninger, og fordi mange hellere støtter klimaet ved at ændre deres egen hverdag.

Efter min mening kan man ikke løse manglen på sygeplejersker og social- og sundhedsassistenter ved hjælp af frivillig arbejdskraft. For det første kræver arbejdet en lang uddannelse. En frivillig må ikke give medicin eller pleje alvorligt syge patienter, og det ville også være uansvarligt. For det andet skal sundhedsvæsenet kunne regne med sine medarbejdere døgnet rundt. Frivillige kan stoppe, når de vil, og man kan ikke forvente, at de tager en nattevagt juleaften.

Frivillige kan dog godt aflaste personalet. På mange plejehjem kommer der besøgsvenner, som læser avis, går ture eller drikker kaffe med de ældre. Det giver de ældre en bedre hverdag, og personalet får mere tid til de faglige opgaver. En ulempe er dog, at politikerne måske vil spare på personalet, hvis de frivillige påtager sig for meget.

Samlet set mener jeg, at frivillige er et godt supplement, men ikke en løsning. Den rigtige løsning er bedre løn og arbejdsvilkår, så flere vil uddanne sig inden for sundhedsfagene og blive i jobbet.`
    },
    {
      id: "pd3-24m-w2b", delprove: 2, real: true, year: 2024, session: SESSION,
      title: "2B: Lønforskelle og lønniveauer (maj-juni 2024)",
      kind: "Prøveopgave · holdninger og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Lønforskelle og lønniveauer. " +
        "Der er forskel på, hvad folk i forskellige erhverv og med forskellige uddannelsesbaggrunde og erfaringer tjener. Det er der forskellige holdninger til. " +
        "Nogle mener, at én eller flere af nedenstående grupper får for lidt i løn: " +
        "• Ansatte, der passer børn, syge og ældre • Ansatte med fysisk hårdt arbejde • Ansatte med skæve arbejdstider, fx natarbejde • Højtuddannede • Topledere • Kvinder. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Ansatte, der passer børn, syge og ældre", "Ansatte med fysisk hårdt arbejde", "Ansatte med skæve arbejdstider, fx natarbejde", "Højtuddannede", "Topledere", "Kvinder"],
      points: [
        "Fortæl kort om nogle lønforskelle, du kender til.",
        "Kommenter én eller to af holdningerne fra listen.",
        "Vurdér fordele og ulemper for det danske samfund ved, at der er relativt små lønforskelle mellem højtlønnede og lavtlønnede. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["I Danmark er der forskel på, hvad …", "Jeg er enig med dem, der mener, at …", "Til gengæld er jeg ikke enig i, at …", "Der er flere fordele ved, at …", "For det første … For det andet …", "Der er dog også ulemper.", "Et eksempel er, at …", "Alt i alt mener jeg, at …"],
      model: `Små lønforskelle – en styrke for Danmark

I Danmark er der stor forskel på, hvad folk tjener. En direktør i en stor virksomhed kan tjene mange gange mere end en rengøringsassistent, og læger og ingeniører tjener normalt mere end pædagoger. Der er også stadig en forskel mellem mænd og kvinder, bl.a. fordi mange kvinder arbejder i den offentlige sektor, hvor lønnen ofte er lavere.

Jeg er enig med dem, der mener, at ansatte, som passer børn, syge og ældre, får for lidt i løn. Deres arbejde er vigtigt for hele samfundet, og det er både fysisk og psykisk hårdt. Når lønnen er lav, er det svært at skaffe nok personale. Til gengæld er jeg ikke enig i, at topledere får for lidt. De har i forvejen meget høje lønninger.

Der er flere fordele ved, at lønforskellene i Danmark er relativt små. For det første giver det et mere lige samfund, hvor de fleste kan leve et godt liv, og hvor der er mindre kriminalitet. For det andet skaber det tillid, fordi folk med forskellige job bor i de samme områder, og deres børn går i de samme skoler. Et eksempel er, at en direktør og en buschauffør godt kan være naboer.

Der er dog også ulemper. Hvis det ikke kan betale sig at tage en lang uddannelse, vælger nogle unge måske at lade være. Desuden kan det være svært for danske virksomheder at tiltrække dygtige eksperter fra udlandet, når de kan tjene mere i fx USA. Høje skatter er også en del af prisen.

Alt i alt mener jeg, at fordelene er større end ulemperne. Små lønforskelle gør Danmark til et trygt land, men vi skal sørge for, at uddannelse stadig kan betale sig.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål maj-juni 2024 ----------
  // q = the booklet's suggested introduction ("Forslag til indledning") + the obligatory question;
  // follow = the suggested follow-up question(s). The picture sheet's own captions are the captions.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, maj-juni 2024)";
  const intro = emne => `Her er der to billeder, som viser nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-24m-o-a", title: "Støtte til kultur", session: SESSION, year: 2024, real: true, credit,
      intro: intro("Støtte til kultur"),
      pictures: [
        { file: "images/pd3-2024/stotte-til-kultur-1.jpg", caption: "Gratis adgang for børn", credit,
          alt: "En familie med to børn står ved billetlugen på et kunstmuseum, hvor et skilt viser, at børn under 18 år har gratis adgang.",
          words: ["et kunstmuseum", "en udstilling", "gratis adgang", "en entrébillet", "en kulturinstitution"] },
        { file: "images/pd3-2024/stotte-til-kultur-2.jpg", caption: "Offentlig støtte til danske film", credit,
          alt: "Et par går hånd i hånd ind i en biograf, hvor plakaterne reklamerer for en ny dansk film.",
          words: ["en biograf", "en filmplakat", "statsstøtte", "en instruktør", "dansk kultur"] }
      ],
      first: {
        A: {
          q: "Situation A viser en familie, der er på vej ind på et kunstmuseum, hvor der er gratis adgang for børn. Børn kan ofte få gratis adgang eller rabat til kulturinstitutioner som fx museer eller teatre. Hvorfor tror du, de kan det?",
          follow: "Synes du, det er en god idé at tage børn med på museum? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det skyldes, at samfundet gerne vil have, at alle børn møder kunst og kultur, uanset hvor mange penge deres forældre har. Hvis det var dyrt, ville mange familier blive hjemme. Desuden håber museerne nok, at børnene får lyst til at komme igen, når de bliver voksne. For eksempel var min datter på museum med skolen, og bagefter ville hun absolut vise os udstillingen om vikingerne. Så betalte vi for to voksne og fik en god dag.",
          followAnswer: "Ja, det synes jeg helt sikkert, men det kommer an på museet og på barnets alder. Børn lærer meget, når de ser tingene i virkeligheden og ikke kun på en skærm. Mange museer har i dag aktiviteter for børn, hvor de må røre ved tingene eller klæde sig ud. Det gør historien levende. Til gengæld skal man ikke blive for længe, for små børn bliver hurtigt trætte. Hellere en time med glade børn end tre timer med sure børn."
        },
        B: {
          q: "Situation B viser en biograf, der reklamerer for en ny dansk film. I Danmark kan kunstnere få støtte af staten til at lave film. Hvorfor tror du, de kan det?",
          follow: "Synes du, det er vigtigt, at staten støtter danske film? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det er, fordi Danmark er et lille land med et lille sprog. Det koster mange millioner kroner at lave en film, og der er kun omkring seks millioner mennesker, som taler dansk. Uden støtte ville det være svært at tjene pengene hjem igen, og så ville vi næsten kun se amerikanske film. Staten vil gerne have, at vi kan se film om vores egen kultur og historie, for eksempel om livet på landet eller om besættelsen.",
          followAnswer: "Ja, det synes jeg faktisk. Film er med til at skabe en fælles fortælling om, hvem vi er som land. Desuden har danske film vundet mange internationale priser, og det giver Danmark et godt ry i udlandet. Jeg har selv lært meget dansk og meget om danskerne ved at se danske film med undertekster. Men jeg forstår godt dem, der siger, at pengene hellere skulle bruges på hospitaler. Derfor synes jeg, at støtten skal være rimelig og ikke alt for stor."
        }
      },
      second: {
        q: "Nogle kommuner vælger at bruge mange penge på store, internationale sportsbegivenheder som europamesterskaber og verdensmesterskaber. Hvilke fordele og ulemper mener du, der kan være ved det for kommunerne?",
        follow: "Mener du, at en kommune hellere skulle prioritere at bruge penge på andre områder end store, internationale sportsbegivenheder – fx børnepasning eller ældrepleje? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at en stor begivenhed kan gøre byen kendt i hele verden og tiltrække mange turister. De bruger penge på hoteller, restauranter og butikker, og det skaber arbejdspladser. Det kan også give en stærk fællesskabsfølelse, når hele byen fester, for eksempel da Tour de France startede i Danmark. En ulempe er, at det er meget dyrt, og at man ikke ved, om pengene kommer tilbage. Desuden kan det give trafikproblemer og larm for borgerne.",
        followAnswer: "Det kommer an på kommunens økonomi. Hvis der mangler pædagoger i børnehaverne, eller hvis de ældre ikke får den hjælp, de har brug for, så synes jeg, at kommunen skal bruge pengene der først. Det er kerneopgaver, som borgerne betaler skat for. Men hvis kommunen har styr på velfærden, er det fint at bruge en mindre del af budgettet på en stor begivenhed en gang imellem. Det kan jo også give indtægter, som kommer børn og ældre til gode."
      },
      conclusion: ""
    },
    {
      id: "pd3-24m-o-b", title: "Mangel på arbejdskraft", session: SESSION, year: 2024, real: true, credit,
      intro: intro("Mangel på arbejdskraft"),
      pictures: [
        { file: "images/pd3-2024/mangel-paa-arbejdskraft-1.jpg", caption: "Mangel på medarbejdere i sundhedssektoren", credit,
          alt: "En travl sygeplejerske hænger et drop op på en hospitalsstue med tre patienter, og en af patienterne kalder på hende.",
          words: ["en sygeplejerske", "en patient", "en hospitalsstue", "travlhed", "en social- og sundhedsassistent"] },
        { file: "images/pd3-2024/mangel-paa-arbejdskraft-2.jpg", caption: "Mangel på arbejdskraft i byggebranchen", credit,
          alt: "En tom byggeplads med en gravemaskine, jordbunker og rør, hvor et skilt siger: Her bygger vi almene boliger.",
          words: ["en byggeplads", "en gravemaskine", "en håndværker", "en tømrer", "almene boliger"] }
      ],
      first: {
        A: {
          q: "Situation A viser en sygeplejerske, der har ansvar for mange patienter og har travlt. Der mangler arbejdskraft i sundhedssektoren, fx sygeplejersker og social- og sundhedsassistenter. Hvorfor tror du, der gør det?",
          follow: "Hvilke problemer mener du, der kan være ved, at der mangler sygeplejersker og social- og sundhedsassistenter?",
          answer: "Jeg tror, der er flere årsager. For det første bliver der flere ældre, og derfor er der brug for mere pleje. For det andet synes mange, at lønnen er for lav i forhold til ansvaret, og at arbejdstiderne er hårde med aften-, nat- og weekendvagter. Når der mangler kolleger, får de andre endnu travlere, og så bliver nogle syge af stress eller finder et andet job. Min veninde er sygeplejerske, og hun er netop gået ned i tid, fordi hun var udbrændt.",
          followAnswer: "Det største problem er, at patienterne og de ældre ikke får den pleje, de har brug for. Hvis en sygeplejerske har ansvaret for alt for mange patienter, er der større risiko for fejl, for eksempel med medicin. Ventelisterne til operationer bliver også længere, fordi der ikke er personale nok. Desuden bliver det en ond cirkel: De ansatte bliver presset og stopper, og så bliver manglen endnu større."
        },
        B: {
          q: "Situation B viser en byggeplads, hvor arbejdet endnu ikke er gået i gang. Der mangler arbejdskraft i byggebranchen, fx tømrere og jord- og betonarbejdere. Hvorfor tror du, der gør det?",
          follow: "Hvilke problemer mener du, der kan være ved, at der mangler arbejdskraft inden for byggebranchen?",
          answer: "Jeg tror, det især skyldes, at mange unge hellere vil gå i gymnasiet og tage en lang uddannelse end tage en erhvervsuddannelse. Arbejdet på en byggeplads er fysisk hårdt, og man skal arbejde udenfor i regn og kulde. Mange bliver også nedslidte, før de når pensionsalderen. Samtidig bygger man meget i Danmark i disse år, for eksempel nye boliger og hospitaler, så efterspørgslen er stor. Desuden kan det være svært at få en praktikplads.",
          followAnswer: "Hvis der mangler håndværkere, bliver byggerierne forsinket og dyrere. Det kan man se på billedet, hvor der skal bygges almene boliger, men hvor arbejdet ikke er gået i gang. Det betyder, at folk må vente længere på en billig bolig. Det rammer også private, for det kan være svært at få en tømrer til at reparere taget. Desuden må virksomhederne måske sige nej til opgaver, og så går samfundet glip af vækst."
        }
      },
      second: {
        q: "Ved mangel på arbejdskraft kan man fra politisk side vælge at gøre det nemmere for virksomheder at rekruttere udenlandsk arbejdskraft. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Mener du, det er i orden at rekruttere udenlandsk arbejdskraft, selvom der er borgere i Danmark, der er arbejdsløse? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at virksomhederne hurtigt kan få de medarbejdere, de mangler, så de kan vokse og betale skat. Mange udlændinge kommer med en god uddannelse og erfaring, for eksempel ingeniører fra Indien eller håndværkere fra Polen. En ulempe kan være, at der opstår social dumping, hvor udenlandske arbejdere får lavere løn og dårligere vilkår. Desuden kræver det, at kommunerne bruger ressourcer på sprogundervisning og integration.",
        followAnswer: "Ja, det mener jeg som udgangspunkt. De arbejdsløse har ikke altid den uddannelse, som virksomhederne har brug for. En arbejdsløs kontorassistent kan jo ikke bare arbejde som sygeplejerske i morgen. Men det må ikke blive en undskyldning for at glemme de ledige. Jeg synes, at virksomhederne først skal prøve at finde folk i Danmark, og at staten skal investere i efteruddannelse, så flere ledige kan tage de job, der mangler folk til."
      },
      conclusion: ""
    },
    {
      id: "pd3-24m-o-c", title: "Pædagogik i folkeskolen", session: SESSION, year: 2024, real: true, credit,
      intro: intro("Pædagogik i folkeskolen"),
      pictures: [
        { file: "images/pd3-2024/paedagogik-i-folkeskolen-1.jpg", caption: "Uro i klassen", credit,
          alt: "En lærer læser højt foran en klasse, mens mange af eleverne snakker, kaster med ting eller ikke hører efter.",
          words: ["uro", "en elev", "at forstyrre", "opmærksomhed", "at koncentrere sig"] },
        { file: "images/pd3-2024/paedagogik-i-folkeskolen-2.jpg", caption: "Ingen karakterer i de små klasser", credit,
          alt: "Små skolebørn sidder i grupper ved bordene og arbejder sammen om en opgave, mens en lærer hjælper dem.",
          words: ["et gruppearbejde", "at samarbejde", "en karakter", "selvtillid", "en indskolingsklasse"] }
      ],
      first: {
        A: {
          q: "Situation A viser en folkeskoleklasse, hvor flere af børnene er urolige og uopmærksomme. I nogle klasser i folkeskolen er der meget uro. Hvorfor tror du, der er det?",
          follow: "Hvad mener du, lærerne kan gøre for at begrænse uroen i klasserne?",
          answer: "Jeg tror, der er mange årsager. Nogle klasser er meget store, og så er det svært for én lærer at holde styr på alle eleverne. Mobiltelefoner og computere kan også forstyrre koncentrationen. Derudover har nogle børn svært ved at sidde stille i mange timer, især hvis undervisningen er kedelig, eller hvis de har sovet for lidt. Min søn fortæller, at der er mest uro i timerne med vikarer, fordi de ikke kender klassen og reglerne.",
          followAnswer: "Jeg mener, at klare regler og faste rutiner er vigtige. Læreren kan for eksempel samle telefonerne ind om morgenen og skrive en plan for timen på tavlen. Det hjælper også, hvis undervisningen veksler mellem at lytte, arbejde i grupper og bevæge sig. Desuden er det vigtigt, at lærerne samarbejder med forældrene. Hvis en elev tit forstyrrer, skal forældrene vide det, så de kan tale med deres barn derhjemme."
        },
        B: {
          q: "Situation B viser en klasse, hvor eleverne sidder og arbejder sammen om en opgave. Eleverne får ikke karakterer i de første klasser i folkeskolen. Hvorfor tror du, det er sådan?",
          follow: "Kan der være nogen problemer ved, at der ikke gives karakterer i de første klasser i folkeskolen?",
          answer: "Jeg tror, det er, fordi man i Danmark mener, at små børn skal lære med lyst og ikke af frygt for en dårlig karakter. Hvis et barn på syv år får et lavt tal, kan det miste selvtilliden og tro, at det er dumt. I stedet skal børnene lære at samarbejde og hjælpe hinanden, som man kan se på billedet. Lærerne giver selvfølgelig stadig feedback, for eksempel til skole-hjem-samtalerne, hvor forældrene hører, hvordan det går.",
          followAnswer: "Ja, det kan der godt. Nogle forældre synes, at det er svært at vide, hvor deres barn står fagligt. I mit hjemland fik vi karakterer fra første klasse, så mine forældre kunne hurtigt se, hvis der var et problem. Det kan også være et chok for eleverne, når de pludselig får karakterer i ottende klasse. Men jeg synes ikke, at problemerne er så store, hvis lærerne giver en klar tilbagemelding på anden måde, for eksempel med skriftlige kommentarer."
        }
      },
      second: {
        q: "I folkeskolen går eleverne typisk i samme klasse i de fleste fag, selvom de har forskelligt fagligt niveau. Hvilke fordele og ulemper mener du, der kan være ved det i forhold til børnenes faglige og sociale udvikling?",
        follow: "Hvad mener du, det betyder for samfundet, at børn går i samme klasse, selvom de har forskelligt fagligt niveau?",
        answer: "En social fordel er, at børnene lærer at være sammen med mange forskellige slags mennesker. De dygtige elever kan hjælpe de svagere, og når man forklarer noget for andre, lærer man det selv bedre. Desuden bliver ingen stemplet som \"den dårlige gruppe\". En faglig ulempe er, at det er svært for læreren at undervise alle på det rigtige niveau. De dygtigste kan kede sig, mens de svageste ikke kan følge med. Min datter keder sig for eksempel tit i matematik.",
        followAnswer: "Jeg mener, at det er godt for sammenhængskraften i samfundet. Når den kommende læge og den kommende tømrer har gået i klasse sammen, forstår de bedre hinandens liv og respekterer hinanden. Det kan være en af grundene til, at der er så stor tillid i Danmark. Hvis man delte børnene op tidligt efter niveau, ville forskellene mellem rige og fattige måske blive større. Til gengæld skal skolen sørge for, at de dygtigste elever også bliver udfordret."
      },
      conclusion: ""
    }
  );
})();
