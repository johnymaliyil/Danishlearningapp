// Prøve i Dansk 3 (niveau ca. B2) – original practice material in the exam's style.
// No official PD3 papers are included yet; add a real set as its own file like data-2020.js.
PD2.EXAMS = PD2.EXAMS || {};

PD2.EXAMS.pd3 = {
  READING: [
    {
      id: "pd3-r1",
      title: "Kunstig intelligens på arbejdspladsen",
      kind: "Avisartikel",
      level: 2,
      minutes: 20,
      text: `Kunstig intelligens har på få år bevæget sig fra forskningslaboratorierne ud på de danske arbejdspladser. Ifølge en ny rapport fra Dansk Erhverv bruger knap halvdelen af de danske virksomheder nu en eller anden form for kunstig intelligens, typisk til at skrive tekster, besvare kundehenvendelser eller analysere data.

Mange medarbejdere oplever, at teknologien fjerner kedelige rutineopgaver. "Før brugte jeg en hel dag om måneden på at lave rapporter. Nu tager det en time, og jeg kan bruge tiden på at tale med kunderne," fortæller Line Mortensen, der er økonomimedarbejder i en mellemstor virksomhed i Vejle.

Alligevel er der også bekymring. Fagforeningerne peger på, at især administrative stillinger kan blive overflødige, og de efterlyser, at virksomhederne investerer i efteruddannelse, så medarbejderne kan følge med udviklingen. "Det er ikke teknologien i sig selv, der er problemet. Problemet opstår, hvis man ikke giver folk mulighed for at lære nye færdigheder," siger en talsperson for HK.

Forskere fra Aarhus Universitet understreger desuden, at kunstig intelligens begår fejl. Systemerne kan opfinde oplysninger, der lyder troværdige, men som er forkerte. Derfor anbefaler de, at et menneske altid kontrollerer resultatet, før det bliver sendt videre til kunder eller myndigheder.

Rapporten konkluderer, at de virksomheder, der får mest ud af teknologien, er dem, der inddrager medarbejderne fra starten og har klare retningslinjer for, hvad den må bruges til.`,
      questions: [
        { type: "mc", q: "Hvad bruger virksomhederne typisk kunstig intelligens til ifølge rapporten?", options: ["At ansætte nye medarbejdere", "At skrive tekster, svare kunder og analysere data", "At styre maskiner på fabrikker"], answer: 1 },
        { type: "mc", q: "Hvad har Line Mortensen fået mere tid til?", options: ["At lave rapporter", "At tale med kunderne", "At tage på efteruddannelse"], answer: 1 },
        { type: "mc", q: "Hvad efterlyser fagforeningerne?", options: ["Et forbud mod kunstig intelligens", "Højere løn til administrative medarbejdere", "At virksomhederne investerer i efteruddannelse"], answer: 2 },
        { type: "tf", q: "Forskerne mener, at kunstig intelligens altid giver korrekte oplysninger.", answer: "F" },
        { type: "tf", q: "Ifølge rapporten har de mest succesfulde virksomheder klare regler for brugen af teknologien.", answer: "R" },
        { type: "tf", q: "Line Mortensens virksomhed har fyret medarbejdere på grund af kunstig intelligens.", answer: "S" }
      ]
    },
    {
      id: "pd3-r2",
      title: "Kampen mod madspild",
      kind: "Udfyld hullerne – bindeord",
      level: 3,
      minutes: 15,
      instruction: "Læs teksten. Vælg det bindeord eller udtryk, der passer i hvert hul. Der er fire ord, du ikke skal bruge. Se eksemplet (0).",
      text: `Danskerne smider hvert år hundredtusindvis af tons spiselig mad ud. Det er [[0]] et af de områder, hvor den enkelte forbruger kan gøre en stor forskel for klimaet.

Problemet opstår ofte, [[1]] vi køber mere ind, end vi kan nå at spise. Supermarkedernes tilbud som "tre for to" frister os til at fylde kurven, [[2]] maden ender i skraldespanden nogle dage senere.

Flere supermarkeder har [[3]] ændret strategi. De sælger nu varer med kort holdbarhed til nedsat pris, og nogle har helt droppet mængderabatter. [[4]] er der kommet apps, hvor man kan købe overskudsmad fra restauranter og bagerier.

[[5]] er der stadig lang vej. Eksperter peger på, at holdbarhedsdatoerne skaber forvirring. Mange tror, at mad er farlig, så snart datoen er overskredet, [[6]] "bedst før" kun betyder, at kvaliteten kan blive lidt ringere.`,
      questions: [
        {
          type: "gaps",
          bank: ["derfor", "fordi", "selvom", "hvorefter", "imidlertid", "desuden", "ikke desto mindre", "hvorimod", "eftersom", "medmindre", "dermed"].map(w => ({ key: w, text: w })),
          example: { 0: "derfor" },
          answers: { 1: "fordi", 2: "hvorefter", 3: "imidlertid", 4: "desuden", 5: "ikke desto mindre", 6: "selvom" }
        }
      ]
    },
    {
      id: "pd3-r3",
      title: "Fra storby til landsby",
      kind: "Find sætningen",
      level: 3,
      minutes: 20,
      instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-G), der passer i hvert afsnit (1-5). Der er to sætninger, du ikke skal bruge.",
      text: `**1.** Da Signe og Rasmus fik deres første barn, begyndte de at tvivle på livet i København. Lejligheden på 65 kvadratmeter var pludselig for lille, og huslejen steg hvert år. [[1]]. Derfor begyndte de at kigge på huse i Sydfyn.

**2.** Efter et halvt års søgning købte de et gammelt bondehus uden for en landsby med 400 indbyggere. Huset kostede mindre end en etværelseslejlighed i hovedstaden. [[2]]. Taget var utæt, og der var ikke blevet malet i 20 år.

**3.** Det største problem var dog arbejdet. Rasmus kunne beholde sit job som programmør og arbejde hjemmefra det meste af ugen. [[3]]. Hun måtte søge nyt job og fik efter tre måneder en stilling på et plejecenter i nabobyen.

**4.** Det første år var hårdt. Parret kendte ingen, og om vinteren var der mørkt og stille. [[4]]. Gennem børnehaven og den lokale gymnastikforening lærte de efterhånden mange af de andre familier at kende.

**5.** I dag, fem år senere, fortryder de ikke flytningen. De har fået et barn mere og er blevet en del af lokalsamfundet. [[5]]. Men ingen af dem kunne forestille sig at flytte tilbage.`,
      questions: [
        {
          type: "gaps",
          bank: [
            { key: "A", text: "Til gengæld krævede det mange timers arbejde." },
            { key: "B", text: "For Signe, der var sygeplejerske, var det sværere." },
            { key: "C", text: "Samtidig drømte de om en have, hvor børnene kunne lege." },
            { key: "D", text: "Men langsomt ændrede det sig." },
            { key: "E", text: "De savner selvfølgelig stadig cafeerne og vennerne i byen." },
            { key: "F", text: "Derfor besluttede de at blive i København." },
            { key: "G", text: "Rasmus fik hurtigt en ny stilling i Odense." }
          ],
          example: {},
          answers: { 1: "C", 2: "A", 3: "B", 4: "D", 5: "E" }
        }
      ]
    },
    {
      id: "pd3-r4",
      title: "Debat: Skal der være karakterer i folkeskolen?",
      kind: "Holdninger – match",
      level: 3,
      minutes: 15,
      text: `A. Lærer, Birgitte: "Karakterer giver eleverne en klar besked om, hvor de står. Uden karakterer bliver feedbacken for uklar, og de stærke elever mister motivationen."

B. Elev i 9. klasse, Yusuf: "Jeg bliver så stresset op til prøverne, at jeg ikke kan sove. Jeg ville lære meget mere, hvis vi fik skriftlig feedback i stedet for et tal."

C. Forælder, Henrik: "Som forælder har jeg brug for at vide, om mit barn klarer sig godt nok. Men jeg synes, karaktererne kunne vente til 8. klasse."

D. Skoleforsker, Anne: "Undersøgelser viser, at elever lærer mest, når feedbacken handler om, hvordan de kan forbedre sig. Et tal alene fortæller ikke, hvad man skal gøre anderledes."

E. Gymnasielærer, Morten: "Gymnasierne bruger karaktererne til at optage elever. Hvis folkeskolen afskaffer dem, skal vi finde en ny og mere retfærdig måde at vælge elever på."

F. Skoleleder, Pia: "Vi har prøvet en karakterfri 7. klasse i et år. Eleverne var mere trygge, men nogle forældre klagede over, at de ikke kunne følge med."`,
      questions: [
        {
          type: "match",
          q: "Hvem mener hvad? Vælg den person (A-F), der passer til hvert udsagn. Én person bliver ikke brugt.",
          options: ["A", "B", "C", "D", "E", "F"],
          items: [
            { text: "Karakterer gør det svært at fokusere på læringen, fordi man bliver nervøs.", answer: "B" },
            { text: "Forskning viser, at konkrete råd hjælper mere end et tal.", answer: "D" },
            { text: "Karakterer bør først gives i de ældste klasser.", answer: "C" },
            { text: "Hvis karaktererne forsvinder, får uddannelserne et problem med optagelsen.", answer: "E" },
            { text: "Et forsøg har vist både fordele og ulemper.", answer: "F" }
          ]
        }
      ]
    }
  ],

  WRITING: [
    {
      id: "pd3-w1", delprove: 1,
      title: "Klage til kommunen",
      kind: "Formel klage",
      minWords: 150, maxWords: 200,
      situation: "Byggeriet ved siden af din bolig starter hver morgen kl. 6 og larmer også i weekenden. Skriv en klage til kommunens afdeling for byggeri og miljø.",
      points: ["Beskriv problemet præcist (hvad, hvornår, hvor længe)", "Forklar, hvordan det påvirker dig og din familie", "Henvis til, hvad du mener er rimeligt", "Kom med et konkret forslag til en løsning"],
      phrases: ["Jeg henvender mig, fordi …", "Siden den 1. marts har …", "Det har betydet, at …", "Jeg skal derfor anmode om, at …", "Jeg ser frem til jeres svar.", "Med venlig hilsen"],
      model: `Til Teknik og Miljø, Vestby Kommune

Klage over støj fra byggeriet på Søndergade 12

Jeg henvender mig, fordi byggeriet ved siden af min lejlighed på Søndergade 14 giver store problemer for mig og mine naboer.

Siden den 1. marts er arbejdet startet hver morgen kl. 6, og de seneste tre lørdage har der også været boret og banket fra morgen til aften. Larmen fra maskinerne er så kraftig, at vi ikke kan sove eller tale sammen indendørs.

Det har betydet, at min søn på to år vågner hver morgen længe før tid, og at jeg selv er træt, når jeg møder på arbejde. Flere af mine naboer, som arbejder om natten, har det endnu sværere.

Jeg har forståelse for, at byggeriet skal gøres færdigt. Men jeg mener ikke, det er rimeligt, at der larmes så tidligt og i weekenden.

Jeg skal derfor anmode om, at kommunen undersøger sagen og sørger for, at arbejdet tidligst starter kl. 7 på hverdage og ikke foregår i weekenden.

Jeg ser frem til jeres svar.

Med venlig hilsen
Nadia Rahimi
Søndergade 14, 2. tv.`
    },
    {
      id: "pd3-w2", delprove: 1,
      title: "Ansøgning: Kommunikationsmedarbejder",
      kind: "Jobansøgning",
      minWords: 200, maxWords: 250,
      situation: "En boligorganisation søger en kommunikationsmedarbejder, der skal skrive nyhedsbreve og kommunikere med beboerne. Skriv en ansøgning.",
      points: ["Forklar, hvorfor du søger stillingen", "Beskriv din uddannelse og relevante erfaring", "Fortæl, hvilke personlige egenskaber du kan bidrage med", "Afslut med, at du gerne vil til samtale"],
      phrases: ["Med stor interesse har jeg læst …", "Jeg har en uddannelse som …", "I mit nuværende job har jeg …", "Jeg er kendt for at være …", "Jeg vil se frem til at uddybe min ansøgning ved en samtale."],
      model: `Ansøgning om stillingen som kommunikationsmedarbejder

Med stor interesse har jeg læst jeres opslag på jobportalen, og jeg søger hermed stillingen som kommunikationsmedarbejder. Jeg brænder for at gøre information let at forstå, og jeg ved, hvor vigtigt det er, at beboerne føler sig hørt.

Jeg har en kandidatgrad i journalistik fra universitetet i Teheran og har arbejdet fem år som journalist på en lokal avis. Siden jeg kom til Danmark i 2021, har jeg arbejdet som frivillig redaktør på et nyhedsbrev for en forening med over 500 medlemmer. Her skriver jeg artikler, opdaterer hjemmesiden og laver opslag på sociale medier.

I mit nuværende job som kundeservicemedarbejder har jeg desuden lært at håndtere henvendelser fra mange forskellige mennesker, også når de er utilfredse. Jeg taler dansk, engelsk og persisk, hvilket kan være en fordel i jeres boligområder, hvor mange beboere har en anden baggrund end dansk.

Jeg er kendt for at være struktureret og nysgerrig, og jeg arbejder godt både selvstændigt og i teams. Jeg er ikke bange for at ringe på en dør eller stille mig op til et beboermøde.

Jeg vil se frem til at uddybe min ansøgning ved en samtale.

Med venlig hilsen
Reza Ahmadi`
    },
    {
      id: "pd3-w3", delprove: 2,
      title: "Gratis offentlig transport?",
      kind: "Læserbrev",
      minWords: 250, maxWords: 300,
      situation: "En politiker foreslår, at busser og tog skal være gratis for alle. Skriv et læserbrev til din lokalavis, hvor du argumenterer for eller imod forslaget.",
      points: ["Præsenter forslaget og din holdning", "Giv mindst to argumenter for din holdning", "Inddrag et modargument og svar på det", "Afslut med en klar konklusion"],
      phrases: ["Forslaget om … har skabt debat.", "Jeg er overbevist om, at …", "For det første … For det andet …", "Kritikerne vil sikkert hævde, at …", "Det er rigtigt, men …", "Samlet set mener jeg, at …"],
      model: `Gratis busser er en god investering

Forslaget om at gøre den offentlige transport gratis har skabt stor debat her i byen. Jeg er overbevist om, at det er en god idé, og jeg vil gerne forklare hvorfor.

For det første vil gratis transport få flere til at lade bilen stå. Det vil mindske trafikken i myldretiden og reducere CO2-udslippet. Hvis vi mener det alvorligt med den grønne omstilling, må vi gøre det klimavenlige valg til det nemmeste valg.

For det andet er transport en stor udgift for mange familier. En studerende eller en pensionist med en lille indkomst kan i dag bruge flere hundrede kroner om måneden på buskort. Gratis transport vil give dem større frihed til at tage på arbejde, besøge familie og deltage i fritidsaktiviteter.

Kritikerne vil sikkert hævde, at det bliver for dyrt for kommunen, og at pengene skal findes andre steder, for eksempel i ældreplejen. Det er rigtigt, at forslaget koster penge. Men vi skal huske, at billetsystemer, kontrol og administration også koster meget. Desuden sparer samfundet penge, når der kommer færre trafikuheld og mindre luftforurening.

Samlet set mener jeg, at gratis offentlig transport er en investering i både klimaet og et mere lige samfund. Jeg håber, at byrådet vil støtte forslaget, og at vi i det mindste kan starte med et forsøg i et par år.

Mohammed Saleh, Vestby`
    },
    {
      id: "pd3-w4", delprove: 2,
      title: "Mobiltelefoner i skolen",
      kind: "Debatindlæg",
      minWords: 250, maxWords: 300,
      situation: "Regeringen overvejer at forbyde mobiltelefoner i hele skoletiden. Skriv et debatindlæg om, hvad du mener.",
      points: ["Beskriv kort situationen i dag", "Argumenter for din holdning med eksempler", "Diskuter fordele og ulemper ved et forbud", "Kom med en konklusion eller et alternativt forslag"],
      phrases: ["I dag har næsten alle elever …", "Et forbud vil betyde, at …", "På den ene side … på den anden side …", "Et eksempel på det er …", "Derfor foreslår jeg, at …"],
      model: `Ja til mobilfri skoletid

I dag har næsten alle elever fra 4. klasse og opefter en smartphone i lommen. Mange lærere fortæller, at telefonerne forstyrrer undervisningen, og at eleverne sidder med skærmen i frikvartererne i stedet for at lege eller tale sammen.

Som forælder til to skolebørn støtter jeg et forbud. Min datter fortæller, at hun føler sig presset til hele tiden at svare på beskeder, også mens hun er i skole. Et forbud vil give eleverne ro til at koncentrere sig og mulighed for at være sammen uden en skærm imellem sig.

Desuden viser flere undersøgelser, at elever lærer mere, når telefonen ikke ligger på bordet. Selv når den er slukket, tager den en del af opmærksomheden.

På den anden side kan telefonen også bruges fornuftigt, for eksempel til at søge information eller lave video i undervisningen. Nogle forældre er også bekymrede for, at de ikke kan få fat i deres barn. Men skolen har både computere og en telefon på kontoret, så disse problemer kan løses.

Derfor foreslår jeg, at telefonerne bliver låst inde i et skab om morgenen og først udleveres, når skoledagen er slut. Det er en enkel løsning, som allerede bruges på flere skoler med gode resultater.

Lad os give børnene deres frikvarterer tilbage.

Lise Hansen, forælder`
    },
    {
      id: "pd3-w5", delprove: 2,
      title: "Uddannelse her og der",
      kind: "Sammenlignende tekst",
      minWords: 250, maxWords: 300,
      situation: "Skriv en artikel til sprogskolens blad, hvor du sammenligner uddannelsessystemet i Danmark med uddannelsessystemet i dit hjemland.",
      points: ["Beskriv skolen eller uddannelsen i dit hjemland", "Beskriv, hvad du ved om det danske system", "Sammenlign fordele og ulemper ved de to systemer", "Skriv, hvad de to lande kan lære af hinanden"],
      phrases: ["I mit hjemland …", "I modsætning til …", "Ligesom i Danmark …", "En fordel ved … er, at …", "Til gengæld …", "Begge lande kunne lære af …"],
      model: `To skoler – to tankegange

Da min søn startede i en dansk skole, blev jeg overrasket. I mit hjemland, Ukraine, sad eleverne på rækker, og læreren talte det meste af tiden. Her arbejder børnene i grupper, og de kalder læreren ved fornavn.

I Ukraine lægger man stor vægt på faglig viden. Eleverne lærer meget udenad, og der er mange prøver. En fordel ved det er, at børnene får et solidt grundlag i fag som matematik og fysik. Til gengæld er der ikke så meget plads til at stille spørgsmål eller være kreativ.

I modsætning til det fokuserer den danske skole på samarbejde, selvstændighed og trivsel. Min søn lærer at diskutere og at give sin mening til kende, og han glæder sig til at komme i skole. Jeg savner dog nogle gange, at der bliver stillet lidt flere krav, især i matematik.

Ligesom i Danmark er uddannelse gratis i Ukraine, og begge lande ser uddannelse som vejen til et godt liv. Men i Danmark kan man også få SU, mens man studerer, og det gør det lettere for unge fra fattige familier at tage en lang uddannelse.

Efter min mening kunne begge lande lære af hinanden. Den danske skole kunne være mere ambitiøs fagligt, mens den ukrainske skole kunne give eleverne mere frihed og ansvar. Det bedste ville være en skole, hvor børnene både lærer meget og har det godt.

Olena Kovalenko`
    }
  ],

  SPEAKING_MONO: [
    {
      id: "pd3-m1", title: "Klima og hverdagsliv",
      points: ["Hvad gør du selv for klimaet i din hverdag?", "Hvem har størst ansvar: den enkelte, virksomhederne eller politikerne?", "Hvordan taler man om klimaet i dit hjemland?", "Hvilke løsninger tror du mest på?"],
      followUp: ["Er det rimeligt at gøre flyrejser dyrere?", "Skal vi spise mindre kød for klimaets skyld?", "Kan teknologi alene løse klimaproblemerne?"]
    },
    {
      id: "pd3-m2", title: "Teknologi og børn",
      points: ["Hvor meget skærmtid er rimeligt for børn?", "Hvilke fordele har teknologien for børns læring?", "Hvilke risici ser du?", "Hvem bør sætte grænserne?"],
      followUp: ["Skal sociale medier have en aldersgrænse?", "Hvordan var det at være barn uden smartphones?", "Bør skolen undervise i digital dannelse?"]
    },
    {
      id: "pd3-m3", title: "Arbejdsliv og stress",
      points: ["Hvorfor oplever mange mennesker stress i dag?", "Hvad kan arbejdspladserne gøre?", "Hvordan er balancen mellem arbejde og fritid i dit hjemland?", "Hvad gør du selv for at undgå stress?"],
      followUp: ["Er en firedages arbejdsuge en god idé?", "Skal man kunne slukke for arbejdsmailen efter fyraften?", "Er danskerne gode til at holde fri?"]
    },
    {
      id: "pd3-m4", title: "Integration og fællesskab",
      points: ["Hvad betyder integration for dig?", "Hvilke erfaringer har du selv gjort i Danmark?", "Hvad kan samfundet gøre bedre?", "Hvad kan den enkelte selv gøre?"],
      followUp: ["Hvor vigtigt er sproget for integrationen?", "Spiller foreningslivet en rolle?", "Hvad har overrasket dig mest ved den danske kultur?"]
    },
    {
      id: "pd3-m5", title: "Sundhed – hvis ansvar?",
      points: ["Hvad betyder det at leve sundt?", "Skal staten blande sig i, hvad vi spiser og drikker?", "Hvordan er sundhedssystemet i dit hjemland sammenlignet med Danmark?", "Hvad er den største sundhedsudfordring i fremtiden?"],
      followUp: ["Er afgifter på sukker og tobak en god idé?", "Skal rygning forbydes helt?", "Hvem skal betale, når folk bliver syge af en usund livsstil?"]
    },
    {
      id: "pd3-m6", title: "Demokrati og deltagelse",
      points: ["Hvorfor er det vigtigt at stemme?", "Hvordan kan man ellers deltage i demokratiet?", "Hvordan fungerer demokratiet i dit hjemland?", "Hvorfor stemmer mange unge ikke?"],
      followUp: ["Skal valgretsalderen sænkes til 16 år?", "Har sociale medier gjort demokratiet bedre eller dårligere?", "Har du selv deltaget i en forening eller et møde?"]
    }
  ],

  SPEAKING_DIALOG: [
    {
      id: "pd3-d1", title: "Forhandl om løn",
      situation: "Du har haft dit job i to år og har fået flere opgaver. Eksaminator er din leder. Forhandl om en lønforhøjelse eller andre fordele.",
      lines: [
        "Velkommen. Du bad om et møde – hvad drejer det sig om?",
        "Hvorfor mener du, at du fortjener mere i løn?",
        "Jeg forstår det, men budgettet er stramt i år. Hvad tænker du om det?",
        "Hvad nu, hvis vi i stedet tilbyder dig et kursus eller mere fleksibel arbejdstid?",
        "Hvad ville være et rimeligt beløb for dig?",
        "Okay. Jeg skal tale med ledelsen. Skal vi aftale et nyt møde?"
      ],
      phrases: ["Jeg vil gerne tale om min løn.", "Siden jeg blev ansat, har jeg …", "Jeg forstår godt, at …, men …", "Kunne man forestille sig …?", "Det vil jeg gerne overveje.", "Kan vi aftale, at …?"]
    },
    {
      id: "pd3-d2", title: "Uenighed i boligforeningen",
      situation: "Du er med i bestyrelsen i din boligforening. Eksaminator er en anden beboer, som vil fælde de store træer i gården for at lave parkeringspladser. Du er uenig. Find et kompromis.",
      lines: [
        "Jeg synes virkelig, vi skal fælde træerne. Der er ingen steder at parkere.",
        "Men træerne skygger jo også for altanerne. Hvad er dit argument for at beholde dem?",
        "Hvad skal folk så gøre med deres biler?",
        "Hvad med at fælde nogle af træerne og beholde resten?",
        "Hvordan finder vi ud af, hvad de andre beboere mener?",
        "Godt. Hvem skriver forslaget til generalforsamlingen?"
      ],
      phrases: ["Jeg forstår dit synspunkt, men …", "Et vigtigt argument er, at …", "Har du tænkt på, at …?", "Hvad hvis vi i stedet …?", "Kan vi blive enige om …?", "Lad os spørge beboerne."]
    },
    {
      id: "pd3-d3", title: "Planlæg en temadag",
      situation: "Du og en kollega (eksaminator) skal planlægge en temadag om trivsel på jeres arbejdsplads. I skal blive enige om indhold, oplægsholder, budget og form.",
      lines: [
        "Vi skal jo planlægge temadagen om trivsel. Hvad synes du, den skal handle om?",
        "Skal vi have en ekstern oplægsholder, eller skal vi klare det selv?",
        "Budgettet er 15.000 kroner. Hvordan skal vi bruge pengene?",
        "Nogle kolleger synes, temadage er spild af tid. Hvordan får vi dem med?",
        "Hvordan måler vi bagefter, om dagen har virket?",
        "Godt. Hvem gør hvad nu?"
      ],
      phrases: ["Jeg foreslår, at vi …", "Det er en god pointe, men …", "Hvad med at …?", "Set fra medarbejdernes side …", "Så er vi enige om, at …", "Jeg tager mig af …"]
    }
  ],

  WORDS: [
    ["en bekymring", "a concern"], ["at efterlyse", "to call for"], ["overflødig", "redundant / superfluous"], ["en efteruddannelse", "further training"],
    ["troværdig", "credible"], ["en retningslinje", "a guideline"], ["at inddrage", "to involve"], ["at understrege", "to emphasise"],
    ["en forbruger", "a consumer"], ["holdbarhed", "shelf life / durability"], ["at overskride", "to exceed"], ["ikke desto mindre", "nevertheless"],
    ["imidlertid", "however"], ["hvorimod", "whereas"], ["eftersom", "since / as"], ["medmindre", "unless"],
    ["et lokalsamfund", "a local community"], ["at fortryde", "to regret"], ["efterhånden", "gradually"], ["en stilling", "a position (job)"],
    ["at anmode om", "to request"], ["rimelig", "reasonable"], ["at henvende sig", "to contact / approach"], ["en egenskab", "a quality / trait"],
    ["at argumentere", "to argue"], ["et modargument", "a counterargument"], ["at hævde", "to claim"], ["samlet set", "all in all"],
    ["en udfordring", "a challenge"], ["trivsel", "well-being"], ["et kompromis", "a compromise"], ["at forhandle", "to negotiate"]
  ]
};
