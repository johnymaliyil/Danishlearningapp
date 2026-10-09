// Prøve i Dansk 2, maj-juni 2023 – transcribed from the exam papers (produktionsnr. 07-11 and 13).
// Included: læseforståelse opgave 1-5, skriftlig fremstilling (delprøve 1 A/B and delprøve 2)
// and the oral topics for mundtlig delprøve 2 (Transport, Børnepasning, Sommerferie) with
// the examiner's questions and the pictures (illustrations by Niels Roland, cropped from
// the picture sheets). Delprøve 1 of the oral exam is a topic the candidate chooses, so
// there are no monologue topics for this session.
// The answers to opgave 1-5 are the official ones from the censor- og eksaminatorhæfte
// (rettenøgler); the short-answer accept lists add reasonable variants.
// The model answers for skriftlig fremstilling are our own (the paper has none).

(function () {
  const G = "PD2 maj-juni 2023";

  // Accept "a og b" answers in either order and with common separators.
  const both = (as, bs) => {
    const out = [];
    as.forEach(a => bs.forEach(b => {
      [[a, b], [b, a]].forEach(([x, y]) => {
        out.push(`${x} og ${y}`, `${x}, ${y}`, `${x} ${y}`, `${x} & ${y}`, `${x} + ${y}`, `${x}/${y}`);
      });
    }));
    return out;
  };

  const opg1 = {
    id: "p23m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilken danseskole ligger i Rødovre?\" – Dancelab.dk.",
    sections: [
      {
        heading: "Danseskoler i Hovedstaden",
        cards: [
          { title: "Akinyis danseskole", sub: "Østerbro · www.akinyidans.dk", body: "Vi har babyrytmik, rytmik og legetræning for børnefamilier og dans for 10-19-årige. Songadans er vores helt særlige svar på zumba, og består af salsa, merengue, cumbia og afrikansk dans. På Akinyis danseskole er værdier som udvikling, trivsel og livsglæde højt prioriteret. Vi har skiftet vurdering ud med fællesskab og glæde, og du mærker fremskridt, når du tør give slip på, hvordan du ser ud udefra og i stedet nyder at bevæge dig." },
          { title: "Dance Affair", sub: "Islands Brygge · www.danceaffair.dk", body: "Vores undervisning har størst fokus på salsa og latin lady styling, men vi underviser også i reggaeton, bachata, afro, dancehall og burlesque.\nLær at bevæge dig flot og sensuelt, uanset hvilken dansestil du vælger at få undervisning i.\nDet er svært, men derfor er det sjovt! Slip din indre danser løs, nyd timen, og træd ud af din komfortzone." },
          { title: "Cphdans", sub: "Vanløse, Tårnby, Dragør, Hørsholm, Hvidovre og Værløse · www.cphdans.dk", body: "Hos Cphdans er der et bredt udbud af dansehold til både børn, unge og voksne. Børnene kan starte fra 3-års alderen, hvor der lægges stor vægt på at danse til den musik, børnene kender fra radio og tv. De kan både vælge ballet, zumba, MGP, showdance, hiphop og mange andre genrer. Hos Cphdans danser vi på alle niveauer, og vi har dansere lige fra begynderstadiet til showholdet, der deltager i konkurrencer både nationalt og internationalt. Undervisningen foregår på vores 6 danseskoler i Tårnby, Værløse, Hvidovre, Hørsholm, Vanløse og Dragør. I alle vores afdelinger har I gratis parkering, og I har mulighed for hyggesnak i vores cafe, hvor der også er trådløst internet for jer, der vil udnytte tiden, mens børnene danser." },
          { title: "Global Kidz", sub: "Nørrebro, Bispebjerg og Amager · www.globalkidz.dk", body: "Global Kidz tilbyder danseundervisning for børn og unge. Vores undervisere er dansere fra alle verdenshjørner. Undervisningen er af høj kvalitet med fokus på udvikling af det personlige dansepotentiale. Børnenes kreativitet, motorik og musikalitet bliver stimuleret gennem leg, dans og bevægelse målrettet deres alder.\nGlobal Kidz har hold på Amager, Bispebjerg og Nørrebro med undervisning i dancehall, hiphop, afrobeat, afrohouse, breakdance, showhold, konkurrencehold og familiehold i verdensdans, rytmik, kreativ dans, afrikansk dans og sang og andre sjove stilarter. Hold for alle aldre fra 1 år og op." },
          { title: "Dancelab.dk", sub: "Rødovre · www.dancelab.dk", body: "Vi er en danseskole beliggende på Tæbyvej 9 i Rødovre, i samme lokaler som Rødovre Fitness Club, og lige ved siden af Rødovre EventCenter. Vi underviser børn fra 5 år i poledance (little spinners) og MGP. På little spinners-holdene fokuserer vi på det gymnastiske i pole og udfordrer børnene motorisk og giver dem en bedre kropsbevidsthed. På MGP-holdene lærer børnene forskellige koreografier og danser bl.a. til musik, de kender fra Børnenes MGP.\nDerudover specialiserer vi os i poledance/polefitness for voksne, hvor vi har nogle ekstremt dygtige lærere, bl.a. danmarksmester og nr. 2 i Norden, Nathasja Sztuk." },
          { title: "Al-dans", sub: "Søborg og Kongens Lyngby · www.al-dans.dk", body: "Vi er en danseskole med mange tilbud og udfordringer til både store og små. Her er fart over feltet og en hyggelig atmosfære. Vi tilbyder en bred vifte af dansekategorier, og blandt vores mange dansehold skulle det være muligt at finde op til flere hold, der passer til lige netop dit eller dit barns behov. Hos Al-dans danser vi på alle niveauer, og vi har dansere lige fra begynderstadiet til den absolutte verdenselite, der deltager i konkurrencer både nationalt og internationalt. Desuden deltager vores elever i mange forskellige arrangementer, herunder bl.a. TV-udsendelser, musikvideoer, koncerter samt danse- og modeshows. Danseskolen tilbyder undervisning i følgende stilarter: ballet, breakdance, disco, hiphop, jazz, jitterbug og Vild med dans." }
        ]
      },
      {
        heading: "Bofællesskaber på Sjælland",
        cards: [
          { title: "Ab Allerslev Kloster", sub: "Munkedammen, 4320 Lejre", body: "Allerslev Kloster er et bofællesskab, der har eksisteret i mere end 40 år. Vi er en blandet gruppe på omkring 10 voksne med børn.\nVi har et praktisk og socialt fællesskab i smukke omgivelser. Både bygninger og have er gamle, så der er en del vedligehold.\nVi har to arbejdsweekender årligt og ellers én søndag pr. måned afsat til husmøde og arbejdsdag på skift.\nAlle voksne laver fællesmad én gang på tre uger, hvilket svarer til, at der er fællesspisning tre gange om ugen.\nVi har hver vores bolig og deler den skønne have, et stort fælles køkken, vaskerum og det gamle kapel, som vi bruger til fester og arrangementer." },
          { title: "Andedammen", sub: "Andedammen, 3460 Birkerød", body: "Andelsboligforeningen Andedammen består af 17 boliger i et roligt og bilfrit område med store grønne områder. Her bor vi omtrent 40 mennesker med en aldersspredning fra 2 til 90+ år.\nVi har indrettet os sådan, at vi bor i private boliger, men i øvrigt har et stærkt fælles samvær.\nVores fælleshus er velbesøgt med bl.a. fællesspisning et par gange om ugen.\nBofællesskabet styres demokratisk med en høj grad af uddelegering til mindre grupper med særlige ansvarsområder. Som voksen i Andedammen er du forpligtet til at deltage i faste arbejdsopgaver. Derudover er du velkommen til at bidrage til fællesskabet med de kvaliteter og kvalifikationer, du besidder." },
          { title: "Trekronerbo", sub: "Isafjordvej, 4000 Roskilde", body: "Vi er voksne, børn og ved sidste optælling 4 hunde, 12 katte og 14 kaniner. Trekronerbo blev bygget i 2002-2003 og består af 17 dobbelthuse, altså 34 ejerboliger med individuelle planløsninger, alle boliger med små tilhørende haver. Sammen ejer vi et fælleshus, grønne arealer med legepladser, bistader, hyggekroge, fodboldbane og adgang til en skøn badesø.\nMange i Trekronerbo vil sige, at hjertet i bofællesskabet er aktiviteterne i vores fælleshus. Her afholdes vores tre ugentlige fællesspisninger. Fælleshuset er også rammen om en række arrangementer og tilbagevendende fester ved jul, fastelavn, midsommer, sommer, folketingsvalg, MGP, væsentlige sportsbegivenheder, ølbrygning, madbattles osv. plus kurser og foredrag." },
          { title: "Sneglebo", sub: "Sneglebo, 4000 Roskilde", body: "Sneglebo består af 20 lejeboliger på 55-85 m² til voksne og børn i alle aldre. Sneglebo ligger i den vestlige del af Roskilde, og vi bor tæt på skov, mose, fjord, marker, golfbane, børneinstitutioner og skoler. Der er ikke langt til indkøb og til Roskilde centrum. Formålet med bofællesskabet er de sociale og praktiske aktiviteter:\nVi har fællesspisning, som foregår i vores fælleshus 2-3 gange om ugen, hvor vi spiser både kød og vegetarisk samt økologisk, hvis budgettet er til det. Vi har fælles arbejdsdage, inde og ude, hvor vi passer vores fællesarealer og fælleshus.\nVi fejrer festlige begivenheder som sankthans, julefrokost m.v. og har andre sociale initiativer. Vi vægter beboerdemokratiet højt og holder jævnligt møder." },
          { title: "Buske", sub: "Raunsbjergvej, 4330 Hvalsø", body: "Vi er 8 familier med børn, der bor sammen på en stor herregård på en smuk 30.000 m² grund med flere bygninger.\nVi har hver vores lejlighed, men har også et dejligt stort fælleshus med køkken og opholdsrum. Vi har fællesspisning fire dage om ugen og laver altid økomad. Vi har en stor køkkenhave og dyrker mange af vores grøntsager selv.\nVores mange høns giver æg og kød i ok mængder. Vi har fælles motionsrum, læseklub, biavl, filmaftener, øllaug og meget mere af det sjove." },
          { title: "Trekronergård", sub: "Isafjordvej, 4000 Roskilde", body: "Trekronergård er en lille andelsforening for voksne uden hjemmeboende børn.\nDe rødmalede rækkehuse af træ står side om side i hesteskoform med en lille glaspavillon i midten af gården.\nI den ene ende af længerne ligger fælleshuset, der bruges til spisning og møder. Vi har fællesspisning en gang om måneden og hygger med frokost i havestuen om lørdagen i sommerhalvåret.\nVi har også gymnastik en formiddag om ugen. Og naboer er der masser af lige uden for døren. Der er fællesmøder en gang om måneden, og beboerne deles om havearbejdet." },
          { title: "Fælleden", sub: "Bispehøjen, 4300 Holbæk", body: "Andelsboligforeningen Fælleden er et veldrevet bofællesskab, hvor der p.t. bor 75 beboere fra 0 til 80 år.\nDer er 30 boliger placeret smukt i landskabet på sydvendt skråning direkte ud til det 150 hektar store rekreative og fredede naturområde, Fælleden. Foreningen har et stort fælleshus på næsten 400 m², hvor der er fællesspisning fem dage om ugen fra mandag til fredag. Maden er god, varieret og primært økologisk.\nFælleshuset er renoveret og udbygget i 2006, og her er der mulighed for mange aktiviteter for både børn og voksne. I fælleshuset er der indrettet fælles vaskeri, gæsteværelse, børnerum, tv-rum, aktivitetsrum med bordfodbold, stort veludstyret køkken, hvor maden tilberedes, og 2 spisestuer. Ud over fælleshuset råder beboerne også over et værksted med god plads til hobbyaktiviteter." },
          { title: "Gundsølille", sub: "Store Valbyvej, 4000 Roskilde", body: "Vi er et bofællesskab på 36 beboere, hvoraf de fleste er børn. Vi ligger i den tidligere skole i den lille landsby Gundsølille nord for Roskilde. Skolebygningen danner rammen om ni dejlige og vidt forskellige boliger, som er indrettet i de tidligere skolelokaler.\nVi har fællesspisning én gang om ugen, fællesmøder én gang om måneden og fællesarbejdsdag én lørdag om måneden.\nVi har masser af fællesarealer. Huset rummer en stribe faciliteter som fx fælleskøkken, havestue, gymnastiksal og børnerum.\nVi har en stor have med æbletræer, solbærbuske, bålplads, en lille sø, trampolin, sandkasser, gyngestativ, fritgående høns og mulighed for køkkenhave. Fællesskabet er omdrejningspunktet i vores hus, og der er uanede muligheder for børn og voksne." },
          { title: "Stokken", sub: "Stokrosevej, 4450 Jyderup", body: "Stokken er et bofællesskab i en andelsboligforening med 20 andele, beliggende i udkanten af Jyderup i Holbæk Kommune. Her bor både enlige og familier med børn, og de voksne beboere er i øjeblikket fra midt i 20’erne til midt i 70’erne.\nVi har fællesspisning i vores store fælleshus med tilhørende køkken seks af ugens dage. Alle boligerne er bundet sammen af en glasgang, som gør, at man uanset vejret kan gå tørskoet rundt. Der er også værksted, blomstereng, legehus, bålplads, shelter, petanquebane, fællesvaskeri, TV-rum og gæsteværelse, ligesom vores terrasse er med til at understøtte fællesskabet." },
          { title: "Åhusene", sub: "Tønsbergvej, 4000 Roskilde", body: "Vi er et velfungerende bofællesskab i Trekroner ved Roskilde. Bofællesskabet blev bygget i 2005 og består af voksne og børn i alle aldre.\nFormålet med Bofællesskabet Åhusene er, at vi som naboer kan lette hinandens hverdag og interessere os for hinanden.\nDerfor handler en væsentlig del af Åhusenes hverdag om fællesspisningen, som finder sted tre gange om ugen i det 140 m² store fælleshus, der samtidig huser vaskeri, industrikøkken, stort spiserum, børnerum m.m.\nBoligerne er i halvandet plan og i to størrelser på 112 og 81 m² med tolv store og fem små huse." },
          { title: "Karise Permatopia", sub: "Køgevej, 4653 Karise", body: "Karise Permatopia er et bo- og arbejdsfællesskab på Sydsjælland, hvor der bor ca. 150 voksne og 85 børn. Det er et bæredygtigt, økologisk og selvforsynende økosamfund med en vision om en meningsfuld hverdag, hvor beboerne skaber et bæredygtigt liv og dyrker den fælles jord.\nFællesskabets hjerte findes i den ombyggede lo, der nu fungerer som spisesal med tilhørende stort industrikøkken. I den smukke sal er der mulighed for fællesspisning alle hverdage.\nPermatopia råder over eget jordvarmeanlæg, der leverer gulvvarme og varmt vand til alle 90 boliger. Jordvarmeanlægget drives med strøm fra Permatopias vindmølle, der også leverer strøm til fælleskøkken, vaskeri og de elbiler, der ejes af beboere i Permatopia." },
          { title: "Glashusene", sub: "Tønsbergvej, 4000 Roskilde", body: "Glashusene er et bofællesskab fra 2008, beliggende i bydelen Trekroner tæt ved Roskilde. Vi er en god blanding af børn og voksne i alle aldre – og en del katte, hunde og kaniner.\nVi prioriterer, at der er plads til både privatliv og fællesskab i Glashusene. Vi har derfor skabt et fælles rum, hvor vi mødes om vores hobbyer og interesser og til sociale arrangementer, men vi respekterer også, at man i perioder foretrækker privatlivets fred. Vi har fællesspisning tre dage om ugen i vores fælleshus. Fællesspisningen er en bærende del af vores fællesskab, og det er her, vi mødes i hverdagen og får snakket med alle bofællerne.\nCa. hver 5. uge har man én maddag, hvor man står for at lave mad og vaske op i hold af 3 personer." }
        ]
      },
      {
        heading: "Nyekontakter.dk",
        cards: [
          { title: "Lasse, 41 år", body: "Jeg søger nye bekendtskaber, både mænd og kvinder, da jeg savner nogen at lave ting sammen med i fritiden. Jeg er en mand på 41, har ikke børn og bor i København. Jeg elsker at rejse og gå ture i naturen, og jeg elsker musik og koncerter, alt fra klassisk til rock, pop og blues. Jeg kan godt lide at træne, og det kunne være hyggeligt at finde nogen at træne sammen med (jeg går i Fitness World). Jeg glæder mig til at høre fra dig." },
          { title: "Alice, 68 år", body: "Jeg er en frisk pensionist, som bor alene på Frederiksberg sammen med mine to katte. Jeg har mange interesser og keder mig aldrig, men jeg savner mine to børnebørn, som lige er flyttet til udlandet med deres forældre. Derfor efterlyser jeg en familie på Frederiksberg, der har brug for en reservebedste til mindre børn. Jeg kommer gerne hjem til jer og passer børn ved sygdom m.v. Skriv, hvis det har interesse." },
          { title: "Daniel, 38 år", body: "Jeg er nået en alder, hvor mange af mine venner er i parforhold og/eller har børn, så det begrænser muligheden for at have selskab og finde på nye eventyr. Derfor søges en ven til nye oplevelser. Det kunne fx være at gå ud og spise sammen (gerne plantebaseret), vandre, ro kajak, rejse, ja mulighederne er mange. Skriv, hvis du bor i Københavnsområdet og også har lyst til nye oplevelser." },
          { title: "Toni, 53 år", body: "Jeg er 53 år og nyder livet. Jeg bor på Østerbro med min yngste datter på 19 år. Jeg søger jævnaldrende kvinder og mænd i nærheden, som har lyst til at være med i en madklub, hvor vi mødes én gang om måneden og spiser sammen. Vi mødes på skift hos hinanden og medbringer hver en lille ret til vores fællesbord, og så hygger vi nogle timer. Jeg tænker, at vi skal være ca. 6-8." },
          { title: "Kristian, 41 år", body: "Jeg er en frisk fyr på 41, single og har ingen børn. Jeg kommer fra Aalborg, men er lige flyttet til hovedstaden pga. nyt job og har derfor brug for at møde nye bekendtskaber. Jeg kunne godt tænke mig at lave en lille mandeklub, hvor vi mødes i byen og drikker en øl et par gange om måneden. Vi kunne også se en fodboldkamp sammen eller løbetræne eller måske cykle en tur i skoven. Med tiden kan vi også mødes privat og spise sammen." },
          { title: "Gerd, 49 år", body: "Vi er en gruppe kvinder i alderen 40-60 år, der har lavet en læseklub i Brønshøj. Vi mødes mandag aften ca. hver anden måned på aftalte datoer. Vi mødes privat. Vi er akademikere, men det er selvfølgelig ikke et krav. Vi skiftes til at vælge en bog, det kan være biografier og samfundsrelevant litteratur, men også skønlitteratur. Er du med? Vi kunne godt tænke os et par nye friske deltagere. Mænd er også velkomne." },
          { title: "Henning, 81 år", body: "Min far er en glad 81-årig pensionist, tidligere revisor. Min mor døde for 5 år siden, så nu bor han alene i Viborg sammen med en 10 år gammel kat. Han er rask og frisk i hovedet, men savner selskab med andre mænd og kvinder til gåture, kortspil og hyggeligt samvær med lidt god mad. Mangler du også selskab i hverdagen, så skriv til min far. Det vil gøre ham meget glad." },
          { title: "Rikke, 44 år", body: "Jeg er en kvinde på 44, som har en sød kæreste og en søn på 16 år. Jeg bor på Amager og træner i Strandparken hver weekend. Jeg søger en, der har lyst til at løbe, gå, cykle eller svømme med mig. Jeg søger en at træne med, så vi sammen kan holde gejsten oppe. Måske kunne vi lave en løbeklub? Det er underordnet, om du er mand eller kvinde." },
          { title: "Inge, 71 år", body: "Jeg er pensionist, enlig og bor i Taastrup. Jeg kunne godt tænke mig at lave en strikkeklub. Jeg vil gerne mødes med andre kreative ca. en gang om måneden for at strikke eller hækle. Jeg kan undervise dig i at hækle og strikke, så du kan også være med, hvis du gerne vil lære det. Vi kan mødes hos mig." },
          { title: "Marek, 26 år", body: "Jeg kommer fra Letland og har boet i Aarhus i et år. Jeg læser på universitetet og arbejder på en café, hvor vi mest taler engelsk. Jeg søger en dansk ven at tale dansk med, så jeg kan blive bedre til dansk. Vi kunne gå tur eller mødes på en café. Vi kan selvfølgelig også mødes privat." }
        ]
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvilke to danseskoler underviser i ballet?", accept: ["cphdans og al-dans"].concat(both(["cphdans", "cph dans", "cphdans.dk"], ["al-dans", "aldans", "al-dans.dk"])) },
      { type: "short", n: 2, q: "Hvilket bofællesskab er kun for voksne?", accept: ["trekronergård", "trekronergaard", "trekroner gård", "trekronergård i roskilde", "trekronergård (roskilde)"] },
      { type: "short", n: 3, q: "I hvilket bofællesskab er der fællesspisning 6 dage om ugen?", accept: ["stokken", "stokken i jyderup", "stokken (jyderup)", "bofællesskabet stokken"] },
      { type: "short", n: 4, q: "Hvilke to bofællesskaber har høns?", accept: ["buske og gundsølille"].concat(both(["buske"], ["gundsølille", "gundsoelille", "gundsø lille"])) },
      { type: "short", n: 5, q: "Hvilket bofællesskab har en vindmølle?", accept: ["karise permatopia", "permatopia", "karise", "karise permatopia (karise)", "permatopia i karise"] },
      { type: "short", n: 6, q: "Hvem vil gerne lave en klub, som kun er for mænd?", accept: ["kristian", "kristian 41 år", "kristian, 41 år", "kristian (41 år)", "kristian 41"] }
    ]
  };

  const opg2 = {
    id: "p23m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", sub: "Eksempel", body: "■■■■■■\nSkoleleder Karin Børgesen går på pension.\nArrangementet holdes i gymnastiksalen fredag d. 16. juni kl. 16-17.\nHavreholmens Skole, Havreholmen 12" },
          { title: "B – Festlig aften i Kulturhuset", body: "Kom og vær med til en festlig aften fredag d. 9. juni.\nVi starter med middag kl. 18.\n■■■■■■\nDet er DJ Henning, der styrer diskoteket.\nPris: 125 kroner ekskl. drikkevarer.\nOBS: Du skal være min. 18 år for at deltage.\nKulturhuset, Hovedgaden 17" },
          { title: "C", body: "■■■■■■\nVi har solgt sports- og træningstøj til hele familien i 25 fantastiske år, men d. 31. maj siger vi farvel og tak.\nDerfor holder vi ophørsudsalg i hele næste uge med store rabatter. Alt skal væk!\nCentrum Sport og Træning\nJuelsgade 19" },
          { title: "D – Lykkehus Fysioterapi", body: "■■■■■■\nSå kan vi hjælpe dig! Vores klinik tilbyder bl.a.:\n• Fysioterapi\n• Massage og akupunktur\n• Individuel træning og holdtræning\nDer er gratis parkering for vores patienter foran klinikken på Algade 2.\nwww.lh-fysio.dk • Tlf. 64 32 10 98" },
          { title: "E", body: "■■■■■■\nVær blandt de første til at fejre, at vi slår dørene op til vores store legeland søndag d. 4. juni kl. 10. Der er gratis adgang hele dagen, og vi serverer slushice til børnene og kaffe til forældrene.\nBibis Legeland, Grønnevej 33\nwww.bibislegeland.dk" },
          { title: "F – Motionsdag for børn", body: "Vindby Idrætsforening har mange tilbud til børn i alderen 5-15 år.\nLørdag d. 27. maj kl. 12-16 holder vi gratis motionsdag, hvor man kan prøve at danse, lave gymnastik og spille fodbold, håndbold og badminton. Husk sportstøj og -sko!\n■■■■■■\nwww.vindby-if.dk" },
          { title: "G", body: "■■■■■■\nVi søger unge under 18 år til omdeling af reklamer og aviser. Jobbet kan klares til fods eller på cykel. Fast løn pr. rute. Du skal være min. 13 år.\nLyder det som et fritidsjob for dig?\nRing til Flex Omdeling på 94 20 48 56" },
          { title: "H – Ny app: Sund ryg", body: "Styrk din ryg på en hurtig, sjov og effektiv måde med den helt nye app ’Sund ryg’.\n• ■■■■■■\n• Alle øvelser vises på videoer\n• App’en er helt gratis\nHent ’Sund ryg’ nu til din smartphone og læs mere på www.sundrygnu.dk" },
          { title: "I – Los Latinos spiller op til dans!", body: "Koncert med det populære band på Kasernen fredag d. 2. juni kl. 20.\n■■■■■■\nKan købes på www.kasernen.dk. Sælges også i døren før koncerten, hvis der ikke er udsolgt.\nKasernen, Stationstorvet 12" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Afskedsreception", answer: "A", example: true },
          { n: 7, text: "Træning derhjemme på kun 15 minutter.", answer: "H" },
          { n: 8, text: "Stor åbningsfest for hele familien.", answer: "E" },
          { n: 9, text: "Efter maden er der dans og musik.", answer: "B" },
          { n: 10, text: "Har du ondt i ryggen?", answer: "D" },
          { n: 11, text: "Tjen penge – og få frisk luft og motion!", answer: "G" },
          { n: 12, text: "Billetter: 100 kroner pr. stk.", answer: "I" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p23m-3", group: G, real: true,
    title: "Opgave 3 – To naboer mødes",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Sofie på 22 år er frisør og arbejder i en salon i Aarhus. For en måned siden flyttede hun fra et område uden for Aarhus til en lejlighed, [[0]] ligger i centrum af byen.

Sofie betaler lidt [[13]] i husleje, end hun gjorde før. Alligevel er hun glad for, at hun er flyttet. Før tog det nemlig næsten en time for hende at cykle til arbejde, og nu tager det kun et kvarter. Og Sofie synes, det er dejligt at [[14]] tid på transport.

I den måned, Sofie har boet i opgangen, har der været meget [[15]], men en torsdag aften kan hun pludselig høre høj musik. Det er hendes nabo, Clara, der holder fest. Sofie skal op og på arbejde næste dag, så hun vil gerne [[16]] i seng, og derfor håber hun, at festen ikke varer så længe. Men klokken et om natten er musikken stadig høj, og Sofie ringer på hos Clara, [[17]] hun vil have hende til at skrue ned. Men døren bliver ikke åbnet, og festen slutter først klokken tre om natten.

Sofie har svært ved at falde i søvn, [[18]] festen er slut, og der er fred og ro. Hun ligger nemlig og tænker på, at hun snart skal op.

Et par dage efter møder Sofie og Clara hinanden i opgangen, og Sofie fortæller, at hun ikke kunne sove om natten på grund af festen. Clara undskylder og siger, at hun [[19]] plejer at holde fest på hverdage, men at det kun var, fordi hun havde 25-års fødselsdag. Hun fortæller, at hun skal holde fest igen næste lørdag og spørger, om Sofie har lyst til at komme med. Sofie er stadig lidt irriteret, men hun vil alligevel [[20]] komme til festen, for hun synes, Clara virker flink. De aftaler, at de vil sætte et opslag op i opgangen, så de andre naboer ved, at der skal være fest.`,
    questions: [
      {
        type: "gaps",
        bank: ["som", "sent", "selvom", "stille", "for", "mindre", "spare", "bruge", "ikke", "mere", "larm", "gerne", "tit", "tidligt"].map(w => ({ key: w, text: w })),
        example: { 0: "som" },
        answers: { 13: "mere", 14: "spare", 15: "stille", 16: "tidligt", 17: "for", 18: "selvom", 19: "ikke", 20: "gerne" }
      }
    ]
  };

  const opg4 = {
    id: "p23m-4", group: G, real: true,
    title: "Opgave 4 – Buschauffør med rygproblemer",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Klaus er 45 år og buschauffør. Han har desværre fået problemer med ryggen.

**0.** Klaus elsker at køre bil, og han har arbejdet som chauffør, lige siden han fik kørekort som 18-årig. Han har kørt både taxa, bus og lastbil. Nu er han 45 år, og de sidste 15 år har han arbejdet som buschauffør. [[0]]. Men selvom han er glad for jobbet, er det hårdt at sidde ned så mange timer hver dag, og han får nogle gange ondt i ryggen.

**21.** Klaus taler med sin læge om sine rygproblemer. Hun siger, at han skal træne for at få en stærkere ryg – fx melde sig ind i et fitnesscenter eller dyrke en anden form for sport. [[21]]. Han kan godt lide at se sport i tv, men han har aldrig selv gået til sport eller fitness, for han kan ikke lide at dyrke motion. Så han har slet ikke lyst til at begynde at træne.

**22.** Klaus får det værre og værre med ryggen, så en dag går han alligevel hen i det lokale fitnesscenter og melder sig ind. Han er lidt usikker på, hvordan maskinerne i fitnesscentret virker. [[22]]. For han taler med en instruktør, og hun viser ham, hvordan han skal bruge maskinerne, og det er Klaus glad for. Så han kommer godt i gang med træningen allerede den første dag.

**23.** Klaus har planer om at tage til fitness tre gange om ugen efter arbejde, men somme tider gider han ikke. [[23]]. Han har prøvet at tage headset på, så han kan lytte til noget god musik, mens han træner, for at gøre det lidt sjovere. Alligevel føler han, at tiden går meget langsomt, når han er i fitnesscentret. Så det er desværre ikke altid, han kommer afsted efter en lang arbejdsdag.

**24.** En dag møder Klaus en af sine kolleger, Omar, i fitnesscentret. Klaus kender ikke Omar så godt, for de er mange buschauffører i firmaet, og Omar har ikke været ansat så længe. Men de snakker lidt med hinanden, og Omar spørger, om de skal træne sammen. [[24]]. Omar kender nemlig alle maskinerne og er glad for at komme i fitnesscenteret. Så Klaus tænker, at han kan lære meget af Omar, og at det vil være hyggeligt at træne sammen med en anden.

**25.** Klaus og Omar mødes tit og træner sammen i fitnesscentret. Men nogle dage har de meget forskellige arbejdstider, og så er det svært for dem at mødes. [[25]]. For han er faktisk blevet så glad for at gå til fitness, at han også kommer afsted, selvom Omar ikke er med. Og træningen betyder, at Klaus nu kan passe sit arbejde uden at få ondt i ryggen.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Og det vil han gerne blive ved med." },
          { key: "B", text: "Og han kan ikke lide at bede om hjælp." },
          { key: "C", text: "Men det synes Klaus er en dårlig idé." },
          { key: "D", text: "For han synes, det er kedeligt at træne." },
          { key: "E", text: "Men han får heldigvis hjælp." },
          { key: "F", text: "Så er de nødt til at træne sent om aftenen." },
          { key: "G", text: "Det vil Klaus rigtig gerne." },
          { key: "H", text: "Men Klaus tager alligevel altid til træning." }
        ],
        example: { 0: "A" },
        answers: { 21: "C", 22: "E", 23: "D", 24: "G", 25: "H" }
      }
    ]
  };

  const opg5 = {
    id: "p23m-5", group: G, real: true,
    title: "Opgave 5 – Interview med Ida",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Ida – tjener",
        cards: [
          { title: "A", sub: "Eksempel", body: "Da jeg gik ud af 10. klasse, fik jeg arbejde på en café. Jeg syntes, det var sjovt, og jeg kunne godt lide kontakten med gæsterne. Så da jeg havde arbejdet der i et par år, besluttede jeg mig for at tage tjeneruddannelsen." },
          { title: "B", body: "Ja, helt sikkert. Vi går meget på jobbet og bærer tit på tunge bakker og fade, så nogle gange kan man godt få smerter i både benene og ryggen. Det går også tit ud over min nattesøvn, at jeg arbejder om aftenen og tit kommer sent hjem. Og jeg ved, at mange af mine kollegaer har det lige sådan." },
          { title: "C", body: "Ja, de fleste dage. Jeg og mine kollegaer deler dem imellem os, når dagen er slut. Det er altid spændende at se, hvor mange der er. Det er selvfølgelig dejligt, når man får lidt ekstra for en god servering. På den måde viser gæsterne jo også, at de har været tilfredse." },
          { title: "D", body: "Jeg kan godt lide at arbejde som tjener, og det vil jeg gerne fortsætte med i mange år endnu. Men hvis jeg skal prøve noget andet en dag, fx fordi det bliver for hårdt at arbejde som tjener, tror jeg, jeg vil åbne en vinforretning, for jeg er meget interesseret i vin. Men lige nu er det ikke aktuelt." },
          { title: "E", body: "Mange ting! Men det vigtigste er nok, at man er serviceminded, og at man kan lide at have med mennesker at gøre. Det er også en fordel at kunne tale flere sprog. Og så skal man kunne klare lidt af hvert. Du skal ikke være typen, der bliver ked af det, hvis nogen taler lidt hårdt til dig." },
          { title: "F", body: "Nej, faktisk ikke, men det betyder ikke så meget, at lønnen ikke er så høj, for jeg arbejder på en ret fin restaurant, hvor mange af gæsterne heldigvis giver gode drikkepenge. Så alt i alt hænger min økonomi meget godt sammen." },
          { title: "G", body: "Ja, for selvom det er en arbejdsplads, hvor der tit er meget travlt, har vi det også sjovt med hinanden, og vi er næsten som én stor familie. Vi taler somme tider lidt hårdt til hinanden, men hvis der er et problem, sætter vi os altid ned, når vi har lukket, og snakker om det." },
          { title: "H", body: "At være en del af et stort team, der arbejder sammen om at give gæsterne en god oplevelse, er helt sikkert det, der betyder mest for mig. Man er i godt humør, når man går hjem efter en aften på restauranten, hvor alt bare gik, som det skulle, og gæsterne var tilfredse, da de gik." }
        ]
      }
    ],
    note: "Ida på 35 år er uddannet tjener og ansat på en restaurant i Aarhus.",
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor er du blevet tjener?", answer: "A", example: true },
          { n: 26, text: "Hvad skal en tjener være god til?", answer: "E" },
          { n: 27, text: "Har du gode kollegaer?", answer: "G" },
          { n: 28, text: "Hvad kan du bedst lide ved dit job?", answer: "H" },
          { n: 29, text: "Er det hårdt at være tjener?", answer: "B" },
          { n: 30, text: "Får du mange drikkepenge?", answer: "C" }
        ]
      }
    ]
  };

  // Insert in front of the practice (non-real) tasks; the final order is set in js/sets.js.
  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(fallback < 0 ? PD2.READING.length : fallback, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling maj-juni 2023 ----------
  const firstReal = PD2.WRITING.findIndex(w => w.real);
  PD2.WRITING.splice(firstReal < 0 ? PD2.WRITING.length : firstReal, 0,
    {
      id: "w23ma", delprove: 1, real: true, year: 2023,
      title: "A: Et opslag på Facebook om en rejsekammerat (maj 2023)",
      kind: "Prøveopgave · opslag på Facebook",
      minWords: 80, maxWords: 150,
      situation: "Du vil gerne ud at rejse, men du har ikke nogen at rejse sammen med. Derfor vil du skrive et opslag på Facebook, hvor du søger en person, som du kan rejse sammen med. Skriv opslaget. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv", "Hvornår du gerne vil rejse", "Hvor du gerne vil rejse hen og hvorfor", "Lidt om, hvem du gerne vil rejse sammen med (fx alder, køn, interesser)"],
      phrases: ["Rejsekammerat søges!", "Jeg hedder … og er … år.", "Jeg vil gerne rejse i …", "Jeg vil gerne rejse til …, fordi …", "Jeg søger en, der …", "Hvis du er interesseret, så …"],
      model: `Rejsekammerat søges!

Hej alle sammen

Jeg hedder Leila, og jeg skriver, fordi jeg gerne vil ud at rejse, men jeg har ikke nogen at rejse sammen med. Jeg er 32 år, bor i Vejle og arbejder som social- og sundhedsassistent.

Jeg vil gerne rejse i to uger i september, når jeg har ferie. Så er der ikke så mange turister, og det er ikke så varmt som om sommeren.

Jeg vil gerne rejse til Italien, fordi jeg drømmer om at se Rom og Firenze. Jeg vil også gerne spise rigtig italiensk pizza.

Jeg søger en kvinde mellem 25 og 45 år, som også kan lide at gå ture og opleve nye steder. Det er godt, hvis du er glad og nem at være sammen med.

Hvis du er interesseret, så ring eller skriv til mig på 31 47 82 56 senest den 15. juni.

På forhånd tak!

Mange hilsner
Leila`
    },
    {
      id: "w23mb", delprove: 1, real: true, year: 2023,
      title: "B: En jobansøgning som køkkenmedhjælper (maj 2023)",
      kind: "Prøveopgave · jobansøgning",
      minWords: 80, maxWords: 150,
      situation: "Du vil gerne arbejde som køkkenmedhjælper på en restaurant. Du har set på nettet, at Restaurant Nimo søger køkkenmedhjælpere. Du vil skrive en jobansøgning til Restaurant Nimo. Skriv jobansøgningen. Du skal begynde og afslutte jobansøgningen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv, og hvordan du er som person", "Hvad du har lavet før", "Hvorfor du gerne vil arbejde som køkkenmedhjælper", "Hvordan du kan kontaktes"],
      phrases: ["Jeg vil gerne søge stillingen som køkkenmedhjælper.", "Jeg hedder … og er … år.", "Som person er jeg …", "Jeg har erfaring med …", "Jeg vil gerne arbejde som køkkenmedhjælper, fordi …", "I kan kontakte mig på …"],
      model: `Kære Restaurant Nimo

Jeg har set jeres jobannonce på nettet, og jeg vil gerne søge stillingen som køkkenmedhjælper.

Jeg hedder Samir Haddad, og jeg er 29 år. Jeg kommer fra Syrien og bor i Kolding. Som person er jeg glad og god til at samarbejde.

Jeg har erfaring med køkkenarbejde. I mit hjemland arbejdede jeg tre år på en restaurant, og i Danmark har jeg været i praktik i en kantine, hvor jeg vaskede op og skar grøntsager.

Jeg tror, at jeg vil være god til jobbet, fordi jeg arbejder hurtigt og grundigt. Jeg vil gerne arbejde som køkkenmedhjælper, fordi jeg elsker mad og gerne vil lære mere i et professionelt køkken.

I kan kontakte mig på 26 58 91 34 eller på samir.haddad@mail.dk.

Jeg håber, at I vil invitere mig til en samtale. Jeg ser frem til at høre fra jer.

Med venlig hilsen
Samir Haddad`
    },
    {
      id: "w23mc", delprove: 2, real: true, year: 2023,
      title: "En e-mail om, hvorfor du vil flytte (maj 2023)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Viktor. I e-mailen skriver han bl.a.: \"… Du skrev, at du gerne vil flytte, fordi du ikke er tilfreds med din bolig. Skriv og fortæl mig lidt om, hvorfor du er utilfreds med din bolig, og hvor du vil flytte hen …\" Skriv et svar til Viktor og fortæl, hvorfor du ikke er tilfreds med din bolig, og hvor du gerne vil flytte hen. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvor du bor nu, og hvordan din bolig er", "Forklar, hvorfor du ikke er tilfreds med din bolig", "Fortæl, hvor du gerne vil flytte hen", "Fortæl, hvorfor du gerne vil bo der"],
      phrases: ["Hej Viktor", "Tak for din mail.", "Jeg bor i …", "Jeg er ikke tilfreds med min bolig, fordi …", "Jeg vil gerne flytte til …", "Jeg drømmer om …"],
      model: `Hej Viktor

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om, hvorfor jeg vil flytte, og det vil jeg gerne fortælle dig lidt om.

For det første er min lejlighed alt for lille. Jeg bor i en etværelseslejlighed på 35 m² i Odense, og nu hvor jeg arbejder hjemme to dage om ugen, har jeg ikke plads til et skrivebord.

Derudover er der meget larm. Lejligheden ligger ud til en stor vej, så jeg kan høre bilerne hele natten. Naboen over mig spiller også høj musik, og jeg sover dårligt. Huslejen er desuden ret høj.

Til sidst vil jeg sige, at jeg gerne vil flytte til Svendborg, fordi min søster bor der. Jeg drømmer om en lejlighed med to værelser og en altan tæt på vandet.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Amir`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven maj-juni 2023 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p23m-a", title: "Transport", real: true, year: 2023,
      pictures: [
        { img: "images/pd2-2023-m/transport-1.jpg", credit, alt: "En familie kører i bil i byen: faren kører med en kop kaffe i hånden, moren ved siden af ham taler i mobil og tager læbestift på, og bagi sidder en pige og et lille barn i en autostol", words: ["køre i bil", "trafiklys", "autostol", "kaffe", "travlt om morgenen"] },
        { img: "images/pd2-2023-m/transport-2.jpg", credit, alt: "Mange mennesker i et fyldt tog: nogle sidder og sover, læser eller kigger på mobilen, andre står op med rygsæk og taske", words: ["tage toget", "pendle", "fyldt", "sidde og læse", "stå op"] }
      ],
      interview: [
        "Hvad er godt ved at tage bilen på arbejde?",
        "Hvad er godt ved at tage toget på arbejde?",
        "Hvordan kommer du i skole (eller på arbejde)?",
        "Hvad synes du om det? Hvorfor?"
      ],
      talk: [
        { who: "mediator", say: "En mand på 35 år har fået et nyt arbejde 10 km fra sin bolig. Skal han cykle eller tage bussen på arbejde? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, han skal cykle. Det er billigt, og han får frisk luft og motion. Hvad synes du?" },
        { who: "partner", say: "Men det tager måske længere tid, og det er irriterende, når det regner eller blæser. Er du enig?" },
        { who: "partner", say: "I bussen kan han slappe af og høre musik eller se film på sin mobil. Hvad tænker du om det?" },
        { who: "mediator", say: "Men bussen er dyr, og man skal vente på den. Hvad synes I generelt er den bedste måde at komme på arbejde på?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det gode ved at tage bilen/toget er, at …", "Jeg kommer i skole/på arbejde med …", "Jeg synes, det er … fordi …", "Han skal cykle, fordi …", "Er du enig?"]
    },
    {
      id: "p23m-b", title: "Børnepasning", real: true, year: 2023,
      pictures: [
        { img: "images/pd2-2023-m/boernepasning-1.jpg", credit, alt: "En mor sidder på knæ på køkkengulvet og tørrer spildt mælk op, mens hendes glade baby sidder i en høj stol og har væltet koppen; der ligger legetøj på gulvet", words: ["passe barnet hjemme", "høj stol", "spilde", "tørre op", "legetøj"] },
        { img: "images/pd2-2023-m/boernepasning-2.jpg", credit, alt: "Børn leger på legepladsen i en børnehave: nogle gynger, nogle spiller bold, en pige leger i sandkassen, og en pædagog skælder ud på to drenge, der har været uvenner, mens den ene græder", words: ["børnehave", "pædagog", "legeplads", "sandkasse", "skælde ud"] }
      ],
      interview: [
        "Hvad synes du om, at børn bliver passet hjemme?",
        "Hvad synes du om, at børn bliver passet i børnehave?",
        "Har du børn? Hvor bliver dine børn passet (hjemme eller i børnehave)? Hvad synes du om det?",
        "Blev du passet hjemme eller i børnehave, da du var barn? Hvad synes du om det?"
      ],
      talk: [
        { who: "mediator", say: "Er det okay, at en pige på 10 år er alene hjemme om eftermiddagen, indtil hendes forældre kommer hjem fra arbejde kl. 18? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, det er okay, hvis hun har en mobil og kan ringe til sine forældre. Hvad synes du?" },
        { who: "partner", say: "Det er en god måde for hende at lære at klare sig selv. Er du enig?" },
        { who: "partner", say: "Men hun bliver måske bange og ked af det, og det er kedeligt for hende. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad hvis hun gør noget, der kan være farligt, fx varmer noget mad? Hvornår synes I generelt, et barn er gammelt nok til at være alene hjemme?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes, det er godt/dårligt, at børn bliver passet …, fordi …", "Mine børn går i …", "Da jeg var barn, blev jeg passet …", "Det er okay, hvis …", "Hvad med dig?"]
    },
    {
      id: "p23m-c", title: "Sommerferie", real: true, year: 2023,
      pictures: [
        { img: "images/pd2-2023-m/sommerferie-1.jpg", credit, alt: "Et par sidder ved et bord under en parasol og drikker drinks ved poolen på et stort hotel med palmer i et varmt land, og en tjener går forbi", words: ["hotel", "swimmingpool", "palme", "varmt", "rejse til udlandet"] },
        { img: "images/pd2-2023-m/sommerferie-2.jpg", credit, alt: "Venner holder sommerferie ved et sommerhus i Danmark: nogle sidder på terrassen og spiller kort, en mand griller, en kvinde slapper af i en liggestol, og en pige læser på et tæppe i græsset", words: ["sommerhus", "terrasse", "grille", "liggestol", "slappe af"] }
      ],
      interview: [
        "Hvad synes du om den måde at holde ferie på?",
        "Holder du selv sommerferie?",
        "Hvad kan du godt lide at lave i din sommerferie?",
        "Hvad lavede du i dine ferier, da du var barn?"
      ],
      talk: [
        { who: "mediator", say: "Er det bedst for en familie med to små børn på 2 og 4 år at holde ferie i udlandet eller i Danmark? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, de skal rejse til udlandet. Det er dejligt med varme, og det er spændende at se en anden kultur. Hvad synes du?" },
        { who: "partner", say: "Men det er besværligt at rejse langt med to små børn, og det er ikke godt for miljøet at flyve. Er du enig?" },
        { who: "partner", say: "En ferie i Danmark er måske billigere og mere afslappende. Men vejret er måske dårligt. Hvad tænker du?" },
        { who: "mediator", say: "Hvad synes I generelt er vigtigst, når man holder ferie med små børn?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes, det er en god måde at holde ferie på, fordi …", "I min sommerferie kan jeg godt lide at …", "Da jeg var barn, …", "Fordelen ved … er, at …", "Er du enig?"]
    }
  );
})();
