// Prøve i Dansk 2, november-december 2021 – transcribed from the exam papers (produktionsnr. 07-13).
// Included: læseforståelse opgave 1-5, skriftlig fremstilling (delprøve 1 A/B and delprøve 2)
// and the oral topics for mundtlig delprøve 2 (Fester, At have travlt på arbejde, Et godt sted
// at bo) with the examiner's questions and the pictures (illustrations by Niels Roland, from the
// picture sheets). Delprøve 1 of the oral exam is a topic the candidate chooses, so there are
// no monologue topics for this session.
// The answers to opgave 1-5 are the official ones from the censor- og eksaminatorhæfte
// (rettenøgler, produktionsnr. 11); the short-answer accept lists add reasonable variants.
// The paper gives no "Du skal"-points for delprøve 2, so the four points there are our own.
// The model answers for skriftlig fremstilling are our own (the paper has none).

(function () {
  const G = "PD2 nov.-dec. 2021";

  // "a og b", "b og a", "a, b" … for questions that ask for two names.
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
    id: "p21n-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilken gårdbutik sælger is?\" – ØkoLaden.",
    sections: [
      {
        heading: "Økologiske gårdbutikker – Midtjylland",
        cards: [
          { title: "Ausumgaard", sub: "Kristian, Maria og Kirsten Lundgaard-Karlshøj · Holstebrovej 101, 7560 Hjerm · Tlf. 97 46 44 11", body: "Gårdbutik med salg af bl.a. kød fra Ausumgaard-grisen samt oksekød fra Vesterhavsoksen. Både Ausumgaard-grisen og Vesterhavsoksen er anbefalet af Dyrenes Beskyttelse, hvilket er garanti for god dyrevelfærd. Gårdbutikken har også et lille udvalg af lokale kolonialvarer, bl.a. lokal honning fra Ausumgaard, marmelader og syltede rødbeder.\nButikken er selvbetjent og har åbent stort set hver dag kl. 8-22 hele året rundt. Der kan betales med både Dankort, MobilePay eller aftalte penge i butikken." },
          { title: "Sevel Øko", sub: "Linda Andersen og Kurt Lauersen · Skovhusvej 4, Sevel, 7830 Vinderup · Tlf. 30 22 68 98", body: "Gårdbutik med bredt udvalg af økologiske varer, bl.a. svinekød og krogmodnet oksekød fra egen produktion. Derudover sælges oste fra Thise mejeri, kaffebønner, urtete, chokolade, chips, dagligvarer, sodavand, øl, vin og bolsjer samt håndlavet sæbe, hornvarer og andet kunsthåndværk fra lokale kunstnere.\nButikken er åben efter aftale, og man er også velkommen til bare at komme forbi." },
          { title: "Øster Dalsgaard", sub: "Hans og Lisbeth Ladefoged · Stårupvej 24, Dommerby, 7840 Højslev · Tlf. 97 53 63 38", body: "Gårdbutik med salg af økologisk okse-, lamme- og svinekød samt æg af egen avl. Alt kød bliver slagtet på Sevel Slagteri og finforarbejdet hos Gl. Amstrup-slagteren i Struer – begge godkendte til forarbejdning af økologiske produkter. Desuden sælges økologisk øl, vin, sodavand, krydderier, kaffe, te, chokolade, olivenolie, pasta og børnetøj.\nMan kan ringe for oplysning om åbningstider." },
          { title: "Lindbjerggård", sub: "Bente og Espen Nielsen · Hulen 16, Lindbjerg, 8930 Randers · Tlf. 86 44 22 82 eller 61 78 22 82", body: "Gårdbutik med salg af økologisk oksekød, svinekød, lammekød og kyllinger. Desuden sælges mulardænder samt gæs og jordbær om sommeren. Der sælges slagtede dyr i hele, halve eller kvarte, og der sælges diverse udskæringer som flæskesteg, roastbeef og bøffer samt medister, fars, leverpostej m.m.\nÅbningstider er lørdag kl. 9-13 eller efter aftale." },
          { title: "ØkoLaden", sub: "Britta og Søren Pedersen · Nørbæk 15, Højmark, 6950 Ringkøbing · Tlf. 97 34 33 41 eller 25 36 15 51", body: "Gårdbutik med stort udvalg af grøntsager af egen avl, oksekød fra egne jerseystude og mange andre økologiske og biodynamiske produkter, bl.a. økologiske oste og mejerivarer, hovedsagelig fra Thise Mejeri. Der er også et bredt sortiment af mel og olie fra bl.a. Nyborggaard, is fra Skarø, Søbogaards safter og marmelader, kyllinger fra Frank Boddum og æg fra Økogårdene. I butikken er der over 1400 økologiske varer.\nNormal åbningstid er tirsdag til torsdag kl. 14-17.30, fredag kl. 10-17.30 og lørdag kl. 10-14." },
          { title: "Viktualia", sub: "Anette Feldtmann · Borgergade 20, 8450 Hammel · Tlf. 26 84 11 30", body: "Gårdbutik med salg af økologiske spegepølser, grillpølser, udskæringer og hakkekød af kalve- og oksekød fra egne dyr, økofjerkræ fra Gothenborg samt økokød fra landgrise. Desuden sælges mel, brød, te, kaffe og øl fra Herslev Bryghus. I sæsonen sælges marmelader, sirup og eddiker fremstillet af frugt og bær fra egen have samt tomater, chili, agurker, squash og salat. Vi sælger også frø og planter til drivhuset og haven.\nÅbningstider: Hver fredag kl. 11-17 og lørdag kl. 9-13." }
        ],
        source: "Kilde: gaardbutiklisten.dk, ausumgaard.dk/gaardbutik, www.hulen16.dk, www.seveloeko.dk, www.okoladen.dk, www.ditlandkoeb.dk/oster-dalsgaard-okologi, www.viktualia.dk (30.01.2020, uddrag, redigeret)"
      },
      {
        heading: "Job inden for hotel, restaurant og køkken",
        cards: [
          { title: "Job: Kantinemedhjælper på skole", sub: "Den Kreative Skole", body: "Til vores skoles kantine søger vi en kantinemedhjælper, som brænder for at lave sund og god mad. Vi er et professionelt arbejdende team bestående af tre medarbejdere, og vi vægter godt humør og gode samarbejdsevner.\nVi forventer, at du:\n• kan arbejde selvstændigt og vise initiativ\n• er serviceminded og fleksibel\nDine arbejdsopgaver er bl.a.: ordne grøntsager, smøre sandwich, betjene kassen og fylde op.\nArbejdstid: 7.00-13.00 alle hverdage." },
          { title: "Job: Kok på restaurant", sub: "Restaurant Nomi", body: "Vikar til fuldtidsstilling søges, da vores dygtige kok går på barsel. Du vil indgå i vores fantastiske køkkenteam på vores pulserende restaurant i centrum. Arbejdet består i tilberedning af danske varme retter a la carte, smørrebrød samt buffet. Du skal kunne arbejde selvstændigt, og der vil til tider være meget travle perioder.\nVi forventer, at du er min. 25 år og uddannet kok. Erfaring fra lignende stilling er en fordel, men ikke et krav.\nSkiftende arbejdstider – der skal påregnes en del aften- og weekendarbejde." },
          { title: "Job: Ernæringsassistent", sub: "Ældrecaféen", body: "Til vores ældrecafé søges snarest en ernæringsassistent med erfaring fra lignende job.\nDine arbejdsopgaver vil være:\n• indkøb\n• smøre smørrebrød\n• lave varm mad (én gang om ugen)\n• lave mad til særlige arrangementer\nDu besidder en god portion ordenssans, kan arbejde selvstændigt og har kørekort. Det er en fordel, hvis du også har egen bil, men det er ingen betingelse.\nArbejdstid: 25 timer om ugen med skiftende arbejdstider (mellem kl. 10.00 og kl. 19.00)." },
          { title: "Job: Uddannet kok", sub: "Tivoli", body: "Kunne du tænke dig at lave retter fra bunden i samarbejde med vores dygtige kokke? Så er du måske vores næste kok. Dine opgaver er forarbejdning og tilberedning af varme og kolde retter i høj kvalitet.\nDu er:\n• uddannet kok\n• fleksibel, ansvarsbevidst og selvstændig\n• robust og kan lide at have travlt\nDu kan arbejde hver aften og hver anden weekend fra 1/5-15/9.\nGlæd dig til en spændende arbejdsplads med masser af positiv energi og en god hold-ånd." },
          { title: "Job: Opvasker og køkkenmedhjælper", sub: "KLG Group Denmark A/S", body: "Kan du sige ja til gå-på-mod og godt humør? Er du typen, som trives, når det går stærkt? Og er du også service-minded og interesseret i mad? Så er du måske den nye opvasker og køkkenmedhjælper, vi søger til vores personalekantine.\nVi laver dagligt mad til ca. 230-300 personer. Maden er hjemmelavet, og vi har fokus på variation, økologi og sundhed.\nDine primære opgaver bliver at vaske op, rengøre køkkenpartier, ordne kantine, smøre sandwich og klargøre salatbar.\nFast stilling på deltid, 30 timer pr. uge med en arbejdstid fra kl. 8.30-14.30 mandag til fredag." },
          { title: "Job: Køkkenassistent på plejecenter", sub: "Plejecenter Norahus", body: "Vi søger en køkkenassistent til faste weekend-vagter på Plejecenter Norahus.\nDu skal være med til at skabe de allerbedste måltider for vores beboere, og du skal hjælpe til med servering, oprydning, opvask og rengøring.\nVi søger dig, der\n• er engageret, fleksibel, lyttende og god til dialog\n• er humoristisk og god til at samarbejde\n• er ansvarlig og mødestabil\nArbejdstid: hver weekend (lørdag og søndag) fra kl. 11.00-18.30. Erfaring fra lignende stilling vil være en fordel, men er ikke et krav. Vi forventer, at du har gode danskkundskaber." },
          { title: "Job: Køkkenmedhjælper", sub: "Bowlingcenter", body: "Vi søger en fleksibel og selvstændig kollega til nyåbnet bowlingcenter.\nDine primære opgaver er:\n• Anretning af lune retter\n• Servering\n• Ekspedition\nJobbet kræver, at du har masser af energi og godt humør. Du skal kunne tale og forstå dansk.\nVi tilbyder dig en spændende fast fuldtidsstilling, hvor du bliver en del af et dedikeret og professionelt team. Fleksible arbejdstider, dog må en del aften- og weekendarbejde påregnes." },
          { title: "Job: Kok på hotel", sub: "Hotel Stjernen", body: "På Hotel Stjernen er din fornemste opgave at give vores gæster en madoplevelse gennem passion, kvalitet, dygtighed og finesse. Her vil du arbejde med de bedste råvarer og opleve, hvordan kvalitet og madglæde går hånd i hånd.\nOm dig:\n• Du har en stor passion for madlavning\n• Du er en udpræget holdspiller med et positivt sind\nDet er et krav, at du er uddannet kok.\nVi kan tilbyde en fast fuldtidsstilling med skiftende arbejdstider og indflydelse på vagtplaner." },
          { title: "Job: Blæksprutte til ældrecenter", sub: "Københavns kommune", body: "Vil du medvirke til, at vores ældre beboere på Nybo Ældrecenter får en dejlig aften med fokus på det hyggelige måltid, så er denne deltidsstilling måske noget for dig.\nDu møder kl. 13.30 alle hverdage og går i gang med praktiske opgaver såsom oprydning og opvask samt klargøring af kaffe. Senere er det tid til at dække et aftensbord og servere for vores beboere.\nLettere indkøb kan forekomme, så kørekort er en fordel men ikke noget krav.\nEfter oprydning og opvask slutter din vagt kl. 19.00." },
          { title: "Job: Køkkenpersonale til Toftkroen", sub: "Restaurant Toftkroen", body: "Vi har travlt på Toftkroen og har brug for ekstra hjælp i vores køkken. Vi søger medarbejdere, der er friske på gennemsnitligt 20 timers arbejde om ugen. Arbejdstiderne vil primært være torsdage, fredage og lørdage, og tiderne vil hovedsageligt ligge kl. 12-21.\nArbejdsopgaverne vil være: klargøring af råvarer, servering, oprydning, opvask og rengøring.\nVi forventer, at du er god til at samarbejde, og at du har et højt arbejdstempo.\nErfaring ingen betingelse, da vi sørger for den nødvendige oplæring." },
          { title: "Job: Kantinemedarbejder", sub: "IT Consult WWB", body: "Vi er et stort it-firma med egen kantine, og vi søger en kantinemedarbejder, der kan lave sund mad af høj kvalitet. Har du lyst til at indgå i vores køkkenteam og være med til at planlægge ugens menu?\nDine arbejdsopgaver vil primært være det kolde køkken samt mødeforplejning. Det er et krav, at du kan kommunikere på engelsk, da vi er en international arbejdsplads.\nDet er desuden et krav, at du:\n• har hygiejnekursus\n• har erfaring med at arbejde i et køkken eller en kantine\nArbejdstid: 8.30-14.00 alle hverdage." },
          { title: "Job: Køkkenleder", sub: "De Vilde Svaner", body: "Skovbørnehaven De Vilde Svaner huser til daglig ca. 50 børnehavebørn i alderen 3-6 år, som de fleste af ugens dage kører ud til Hareskoven.\nDer skal produceres varieret og spændende frokost til vores 50 børn, så vi søger en køkkenleder, som har interesse i børns ernæring og kost, og som både kan tænke i varme retter, der kan spises hjemme i huset, og mad, der kan tages med ud i skoven og spises der.\nDet er et krav, at du er uddannet kostvejleder.\nVi forventer, at du er pålidelig, glad for børn og har godt humør.\nDu skal have en ren straffeattest.\nArbejdstid kl. 6.30-13 hver dag." }
        ]
      },
      {
        heading: "Ølejre",
        cards: [
          { title: "Drejø Ølejr", sub: "Hvornår: Uge 24-34 · Pris: Voksne 1085,- Unge 805,- Børn 630,-", body: "Temaet for Drejø Ølejr er krop, sind og ånd. Drejø ligger ca. en times sejltur fra Svendborg. Øen har købmand, posthus, café, kro, kirke og museum. 50 meter fra lejren findes badestranden. Lejren har elektricitet, stort køkken- og opholdstelt, aktivitetstelte, bålplads, badehus med sauna samt sovetelte. Overnatning foregår i fælles sovetelte eller i medbragt mindre privattelt. I alle uger er maden vegetarisk og overvejende økologisk. Alle forventes at deltage i de praktiske gøremål." },
          { title: "Samsø Ølejr", sub: "Hvornår: Uge 27-31 · Pris: Voksne 1085,- Unge 805,- Børn 630,-", body: "Samsø Ølejr er en familielejr for børn og voksne i alle aldre, og deltagerne er selv med til at bestemme ugens indhold og aktiviteter.\nLejren ligger på den nordvestlige side af Samsø i Ballebjerg Bakker. Der er dejlige strande (ca. tre km væk) og naturområder i nærheden. Lejren har køkkentelt, spisetelt, badevogn med varmt vand og fælles sovetelte. Det er ikke tilladt at medbringe egne telte, men man skal selv medbringe sovepose/dyne og madras eller underlag." },
          { title: "Lyø Ølejr", sub: "Hvornår: Uge 26-33 · Pris: Voksne 1085,- Unge 805,- Børn 630,-", body: "Lyø er en ølejr, hvor musikken er i centrum. Lyø ligger i det sydfynske øhav ca. 40 minutters sejlads fra Fåborg. Ølejren ligger på den sydligste del af øen og har direkte adgang til havet.\nLejren har et dansetelt, et stort køkkentelt med alt udstyr til madlavning og spisning, sovetelte, badefaciliteter, sauna, bålplads, svedehytte m.m. Man kan enten sove i et af de fælles sovetelte eller slå sit eget telt op. Alle forventes at deltage i de praktiske gøremål som madlavning, indkøb, opvask, rengøring osv. Deltagerne opfordres til at medbringe akustiske instrumenter (der er ingen strøm)." },
          { title: "Skarø Ølejr", sub: "Hvornår: Uge 26-31 · Pris: Voksne 1085,- Unge 805,- Børn 630,-", body: "Temaerne på Skarø Ølejr varierer fra uge til uge, fx er uge 29 for singler med børn, og uge 30 er alkoholfri ølejr.\nSkarø ligger i det sydfynske øhav, en halv times sejlads fra Svendborg. Lejren ligger ud til vandet ca. 1 km fra Skarø by. Lejren er indrettet med et køkkentelt, et aktivitetstelt og fælles sovetelte. Man kan enten sove i et af lejrens sovetelte, eller man kan tage sit eget telt med. Der er ikke træk-og-slip, men et toilethus med muldtoiletter. Der er heller ikke strøm, men gas til madlavning, køleskabe og varmt vand. Da der ikke er nogen dankortautomat på øen, skal man medbringe kontanter." },
          { title: "Omø Ølejr", sub: "Hvornår: Uge 27-32 · Pris: Voksne 1085,- Unge 805,- Børn 630,-", body: "På Omø Ølejr varierer temaerne fra uge til uge, fx er uge 30 en Irsk uge og emnet for uge 31 er Mad til enhver tid.\nOmø ligger ved siden af Agersø ud for Stigsnæs, sydvest for Skælskør. Ølejren ligger ved øens sydøstlige kyst med direkte adgang til vandet. I lejren er der bl.a. et 150 m² stort lege- og dansetelt med fast gulv, toiletvogn med træk og slip samt sovetelte. Man kan enten sove i et stort fælles sovetelt eller i sit eget lille telt. Pga. det begrænsede areal til teltpladser, skal man bestille teltplads på forhånd." },
          { title: "Vejlø Ølejr", sub: "Hvornår: Uge 27-30 · Pris: Voksne 1085,- Unge 805,- Børn 630,-", body: "De forskellige ugers emner og aktiviteter varierer, og der er igangsættere på alle ugerne.\nVejlø er en lille ø i Nakskov Fjord. Der er en enkelt gård med en lille kiosk på øen, en naturcampingplads samt Vejlø Ølejr beliggende tæt på stranden, hvor der er havkajakker, kanoer, surfboards m.m. Dagens praktiske gøremål klares i fællesskab med initiativ og samarbejde imellem lejrens deltagere. På Vejlø Ølejr overnatter man i store militærtelte, og det er ikke tilladt at medbringe egne telte på ølejren." }
        ],
        source: "Kilde: oelejr.dk, samsoe-oelejr.dk (02.05.2020, uddrag, redigeret)"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvilken gårdbutik sælger tøj til børn?", accept: ["øster dalsgaard", "øster dalsgård", "oster dalsgaard", "øster dalsgaard i højslev", "øster dalsgaard (højslev)", "øster dalsgaard i dommerby", "gårdbutikken øster dalsgaard", "dalsgaard", "øster dalsgaard hans og lisbeth ladefoged"] },
      { type: "short", n: 2, q: "I hvilket job skal man kun arbejde i weekenden?", accept: ["køkkenassistent på plejecenter", "køkkenassistent", "køkkenassistent på plejecenter norahus", "køkkenassistent på plejecenteret", "køkkenassistent (plejecenter norahus)", "køkkenassistent plejecenter norahus", "køkkenassistent norahus", "plejecenter norahus", "norahus", "job: køkkenassistent på plejecenter", "job køkkenassistent på plejecenter"] },
      { type: "short", n: 3, q: "I hvilket job skal man have en uddannelse som kostvejleder?", accept: ["køkkenleder", "køkkenleder (de vilde svaner)", "køkkenleder de vilde svaner", "køkkenleder i de vilde svaner", "køkkenleder hos de vilde svaner", "køkkenleder i skovbørnehaven de vilde svaner", "de vilde svaner", "skovbørnehaven de vilde svaner", "job: køkkenleder", "job køkkenleder"] },
      { type: "short", n: 4, q: "I hvilket job skal man have kørekort?", accept: ["ernæringsassistent", "ernæringsassistent (ældrecaféen)", "ernæringsassistent ældrecaféen", "ernæringsassistent i ældrecaféen", "ernæringsassistent på ældrecaféen", "ernæringsassistent (ældrecafeen)", "ernæringsassistent ældrecafeen", "ernæringsassistent i ældrecafeen", "ældrecaféen", "ældrecafeen", "ældrecafé", "job: ernæringsassistent", "job ernæringsassistent"] },
      { type: "short", n: 5, q: "I hvilket job skal man kunne tale engelsk?", accept: ["kantinemedarbejder", "kantinemedarbejder (it consult wwb)", "kantinemedarbejder it consult wwb", "kantinemedarbejder i it consult wwb", "kantinemedarbejder hos it consult wwb", "kantinemedarbejder på it consult wwb", "it consult wwb", "it consult", "job: kantinemedarbejder", "job kantinemedarbejder"] },
      { type: "short", n: 6, q: "På hvilke to ølejre er det ikke tilladt at medbringe sit eget telt?", accept: ["samsø ølejr og vejlø ølejr"].concat(both(["samsø ølejr", "samsø", "samsø lejr", "samso"], ["vejlø ølejr", "vejlø", "vejlø lejr", "vejlo"])) }
    ]
  };

  const opg2 = {
    id: "p21n-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", body: "■■■■■■\nCentralt beliggende på Enghavegade i Aarhus C.\nPlads til op til 50 personer.\nPriser fra 2.500 kr.\nMulighed for tilkøb af fx musikanlæg, diskokugle og rengøring.\nKontakt Simon Arendt for yderligere info på tlf. 86 54 13 09." },
          { title: "B", body: "■■■■■■\nSå kig forbi vores butik og få en gratis prøvetur.\nVi står klar med råd og vejledning, og sammen finder vi den model, som passer bedst til dig.\nPriser fra 8.995 kr.\nVæltepeter & Co\nTorvet 7" },
          { title: "C", body: "■■■■■■\nDenne sæson byder på mange nye hold fx:\nHold 234: Mænd og mad\nHold 235: Sund mad – let at lave\nHold 236: Bliv ven med din wok\nPris for deltagelse: 495 kr. pr. person.\nSe alle vores madlavningshold på www.husby-aftenskole.dk" },
          { title: "D – Jubilæumskoncert på Vilsby Musikskole", body: "Vi fejrer vores 30-års jubilæum med en stor koncert søndag d. 24/11 kl. 14-17.\nSe programmet og bestil billetter på vilsby-mus.dk\n■■■■■■\nDer er gratis adgang for alle under 18 år.\nVilsby Musikskole" },
          { title: "E", body: "■■■■■■\nKom ind og se vores store udvalg af både nye og brugte instrumenter.\nTilbud i uge 47: Evergreen bas 2.299 kr.\nLydladen Vestergade 32\nwww.lydladen.dk" },
          { title: "F – Find mad i skoven", body: "Oplev Rold Skov sammen med en guide søndag d. 26/9. Vi starter kl. 10 og går en rute på ca. 5 km. Vi finder spiselige planter, og du får gode råd til tilberedning af dem.\n■■■■■■\nPris: 75 kr. pr. person.\nTilmelding hos Tanja på 53 22 54 79." },
          { title: "G", body: "■■■■■■\nVi kan fx tilbyde\n• Lapning 70 kr.\n• Montering af ny slange 135 kr.\n• Udskiftning af kæde 150 kr.\nService og godt humør er en selvfølge på vores værksted.\nPå2hjul • Møllegade 10" },
          { title: "H – Cykelferie på Bornholm", body: "Tag familien med på tur på skønne Bornholm i 5, 7 eller 10 dage. I cykler 4-6 timer om dagen mellem nogle af øens hyggeligste hoteller.\n■■■■■■\nPriser fra 2.495 kr. pr. person inkl. overnatning.\nLæs mere og book jeres ferie på www.cykeløen.dk" },
          { title: "I", body: "■■■■■■\nDrømmer dit barn om at lære at spille et instrument?\nVi underviser børn og unge i alderen 5-18 år i små og større grupper.\nYderligere information om undervisning og priser på vores hjemmeside.\nwww.spil-nu.dk" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Festlokaler udlejes.", answer: "A", example: true },
          { n: 7, text: "Skal du købe en el-cykel?", answer: "B" },
          { n: 8, text: "Reparation af cykler.", answer: "G" },
          { n: 9, text: "Turen varer ca. to timer.", answer: "F" },
          { n: 10, text: "Ny musikbutik åbner d. 22/11.", answer: "E" },
          { n: 11, text: "Det koster 50 kr. for voksne.", answer: "D" },
          { n: 12, text: "Musikskolen i Centrum starter nye hold.", answer: "I" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p21n-3", group: G, real: true,
    title: "Opgave 3 – Kasper lever billigt",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Når man tager en uddannelse i Danmark, kan man få ca. 6.000 kr. om måneden i SU. Selvom det [[0]] er ret mange penge, er det faktisk nok til at leve for.

Kasper er 20 år og bor i Aalborg, hvor han er i gang med at uddanne sig til maskinmester. Mange af hans klassekammerater har et fritidsjob, fordi de gerne vil tjene lidt ekstra. Men det har Kasper ikke, [[13]] han har valgt, at han hellere vil koncentrere sig om sin uddannelse. Så Kasper har kun ca. 6000 kr. om måneden at leve for, men det har han det helt fint med, for han synes faktisk ikke, det er så [[14]] at leve billigt. Han bruger fx ikke så mange penge på husleje og transport, for han bor til leje på et værelse, hvor huslejen [[15]] ikke er ret høj. Og når han skal rundt i Aalborg, cykler han næsten [[16]]. På den måde får han nemlig både gratis motion og gratis transport.

Kasper er også god til at spare penge på mad. Han laver det meste af sin mad selv, og han køber altid de madvarer, han skal bruge i det supermarked, hvor prisen er [[17]]. Kasper kan rigtig godt lide kød, [[18]] han synes, det er for dyrt, så han køber det sjældent. Derfor laver han mest retter med grøntsager, og han er rigtig god til det. Han synes faktisk også, det er ret [[19]] at lave vegetarmad, men han savner alligevel somme tider at spise kød. Det ved hans mor heldigvis godt, og derfor inviterer hun ham tit på [[20]]. Det nyder Kasper, for når han kommer hjem til hende, steger hun altid en god bøf til ham.`,
    questions: [
      {
        type: "gaps",
        bank: ["ikke", "desværre", "højest", "for", "bedst", "altid", "besøg", "sjovt", "sjældent", "restaurant", "aldrig", "heldigvis", "svært", "men"].map(w => ({ key: w, text: w })),
        example: { 0: "ikke" },
        answers: { 13: "for", 14: "svært", 15: "heldigvis", 16: "altid", 17: "bedst", 18: "men", 19: "sjovt", 20: "besøg" }
      }
    ]
  };

  const opg4 = {
    id: "p21n-4", group: G, real: true,
    title: "Opgave 4 – Et liv med hund",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Viktor på 29 år arbejder som elektriker, og han har en hund, som er et år gammel.

**0.** For et halvt år siden fik Viktor hunden Max, som er en sort labrador, der nu er et år gammel. Før boede Max hos en af Viktors gode venner, men vennen kunne ikke længere have Max, og derfor tilbød Viktor, at Max kunne bo hos ham. Viktor har aldrig haft hund før, selvom han godt kan lide hunde. [[0]]. Og nu har han fået Max, og det er han glad for.

**21.** Hver morgen står Viktor tidligt op for at gå en tur med Max, før han skal afsted på arbejde. Så skal Max være derhjemme hele dagen, indtil Viktor har fri. [[21]]. Max begynder nemlig først at kede sig eller at skulle ud og tisse, når der er gået ca. otte timer. Og det passer perfekt med Viktors arbejdstid, så det er ikke noget problem for Max at være alene, mens Viktor er på arbejde.

**22.** Når Viktor og Max går tur, går de som regel hen i en park, der ligger i nærheden af, hvor de bor. Max elsker nemlig at gå tur i parken. [[22]]. For der møder han næsten altid andre hundeejere, som også går tur med deres hunde. Så leger Max lidt med de andre hunde, mens Viktor står og snakker med ejerne. Og det kan de begge to godt lide.

**23.** Viktor synes, det er vigtigt, at Max bliver trænet godt og fx lærer at gå pænt i snor og at komme, når man kalder. Derfor går han til træning med Max på en hundeskole hver lørdag formiddag. Og det synes de begge to er sjovt. [[23]]. For når de er til træning, løber Max meget rundt og bruger en masse energi, så når de kommer hjem, er Max altid meget træt.

**24.** En stor hund som Max har meget pels og taber en del hår. Hvis Viktor ikke vil have sorte hundehår i hele sin lejlighed, er han nødt til at støvsuge næsten hver dag. [[24]]. Derfor er han begyndt at spare sammen til en automatisk robotstøvsuger. Sådan én koster en del penge, men det vil betyde meget for ham i hverdagen, hvis han ikke skal bruge så meget tid på at gøre rent efter Max, og han hader at støvsuge.

**25.** Det er dyrt at have hund, og Viktor kan godt mærke på sin økonomi, at han har fået Max. I gennemsnit bruger han nemlig ca. 600 kr. om måneden på hundemad, forsikring, dyrlæge, hundeskole og ting til Max. [[25]]. For det betyder meget for ham, at han har en dejlig hund, som gør ham i godt humør hver dag. Så han synes, at Max er alle pengene værd.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Faktisk har han altid ønsket sig en." },
          { key: "B", text: "Men det er lidt hårdt for Max." },
          { key: "C", text: "Og Viktor synes også, det er hyggeligt." },
          { key: "D", text: "Men det betaler Viktor gerne." },
          { key: "E", text: "Men det kan Max heldigvis godt." },
          { key: "F", text: "Og det er Viktor ret træt af." },
          { key: "G", text: "Og Viktor synes, det er for mange penge." },
          { key: "H", text: "Men det er faktisk svært for dem." }
        ],
        example: { 0: "A" },
        answers: { 21: "E", 22: "C", 23: "B", 24: "F", 25: "D" }
      }
    ]
  };

  const opg5 = {
    id: "p21n-5", group: G, real: true,
    title: "Opgave 5 – Interview med Rune",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Rune – en far på barselsorlov",
        cards: [
          { title: "A", sub: "Eksempel", body: "Jeg passer selvfølgelig Ingrid og leger med hende, og så ordner jeg en masse husligt arbejde. Efter frokost går jeg altid tur med hende i barnevognen i mindst én time, for så sover hun så godt. Somme tider går vi også i svømmehallen. Det elsker hun." },
          { title: "B", body: "Ja, det synes jeg! Jeg er jo sammen med min datter i mange timer hver dag, og det kan jeg rigtig godt lide. For så kan jeg nemlig se, hvor meget nyt hun lærer hele tiden. Det oplevede jeg slet ikke på samme måde, før jeg gik på barselsorlov, og det er dejligt at følge med i." },
          { title: "C", body: "Ja, lige for tiden er det. Ingrid får nemlig tænder, og hun vågner tit om natten og græder. Og det er selvfølgelig mig, der skal stå op og få hende til at sove igen, for Signe skal jo op og på arbejde hver morgen. Så jeg får ikke så meget søvn, og jeg har ikke særlig meget energi. Men det er jo bare en periode." },
          { title: "D", body: "At tage på lidt længere ture med hende. Det kan selvfølgelig være hårdt nogle gange og skal planlægges godt sådan rent praktisk, fordi hun pludselig kan blive træt eller sulten. Men jeg synes altid, det er fedt, når vi kommer ud og oplever noget." },
          { title: "E", body: "Hun synes, at det er helt fint. Som chef på min arbejdsplads er hun vant til det, for hos os er det helt normalt, at mændene tager barselsorlov i kortere eller længere tid. Så det synes hverken hun eller mine kolleger, at der er noget mærkeligt ved, at jeg også gør." },
          { title: "F", body: "Ikke mere. Men det gjorde jeg i starten af min barselsorlov. Jeg er lærer på en folkeskole, og jeg tænkte meget på, hvordan det gik med mine elever. Men jeg ved jo, at jeg har dygtige kolleger, som underviser mine klasser, mens jeg går hjemme." },
          { title: "G", body: "Det skifter lidt. De fleste dage tror jeg, hun synes, det er dejligt at være på arbejde, hvor hun kan tænke på andre ting end bleer og babymad. Men nogle dage er det lidt hårdt for hende, fordi hun savner Ingrid. Det kan jeg godt forstå, for sådan var det også for mig, dengang det var hende, der gik hjemme." },
          { title: "H", body: "Ikke rigtig. Faktisk er jeg overrasket over, hvor lidt jeg når. For mens Ingrid er vågen, er jeg sammen med hende, og når hun sover, rydder jeg op eller sover selv. I starten troede jeg, at jeg kunne nå at reparere lidt på huset og se nogle serier på Netflix. Men det kan jeg næsten aldrig." }
        ]
      }
    ],
    note: "Rune er gift med Signe, og sammen har de datteren Ingrid på 8 måneder. Parret har delt barselsorloven. Nu har Rune barselsorlov fra sit job for at passe Ingrid derhjemme.",
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvad laver du på en typisk dag?", answer: "A", example: true },
          { n: 26, text: "Hvad kan du bedst lide at lave sammen med Ingrid?", answer: "D" },
          { n: 27, text: "Savner du somme tider dit arbejde?", answer: "F" },
          { n: 28, text: "Er det hårdt at være på barselsorlov?", answer: "C" },
          { n: 29, text: "Har du tid til andet end at passe Ingrid?", answer: "H" },
          { n: 30, text: "Hvordan har din kone det med, at hendes barselsorlov er slut?", answer: "G" }
        ]
      }
    ]
  };

  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(fallback < 0 ? PD2.READING.length : fallback, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling nov.-dec. 2021 ----------
  const wFallback = PD2.WRITING.findIndex(w => !w.real);
  PD2.WRITING.splice(wFallback < 0 ? PD2.WRITING.length : wFallback, 0,
    {
      id: "w21na", delprove: 1, real: true, year: 2021,
      title: "A: Et takkebrev til din søns klasselærer (nov.-dec. 2021)",
      kind: "Prøveopgave · takkebrev til en lærer",
      minWords: 80, maxWords: 150,
      situation: "Din søn på 8 år skal skifte skole, fordi I flytter. Du og din søn har begge været glade for hans klasselærer, som hedder Mette. Derfor vil du skrive et takkebrev til hende. Skriv takkebrevet til din søns lærer Mette. Du skal begynde og afslutte takkebrevet på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Fortæl, hvor I flytter hen, og hvorfor I flytter", "Tak Mette for hendes gode arbejde", "Fortæl, hvorfor du og din søn har været glade for hende", "Fortæl, hvordan din søn vil holde kontakt med sine gamle klassekammerater"],
      phrases: ["Kære Mette", "Tusind tak for dit gode arbejde.", "Vi flytter til …, fordi …", "Jeg kommer til at savne dig, fordi …", "… vil gerne holde kontakten med …", "Endnu en gang tusind tak for alt."],
      model: `Kære alle i 2.B – og især kære Mette

Tusind tak for dit gode arbejde som Olivers klasselærer. Som du ved, skal Oliver skifte skole, fordi vi flytter til Odense i december. Jeg har fået nyt job på sygehuset der.

Jeg har lært meget af dig om, hvordan jeg kan hjælpe mit barn i skolen.

Jeg kommer til at savne dig, og det gør Oliver også. Han har været så glad for at gå i skole, fordi du altid lyttede til ham og hjalp ham, når matematik var svært.

Nu skal jeg pakke vores ting. Oliver vil gerne holde kontakten med sine gamle klassekammerater, så han vil skrive til dem på sin tablet, og i sommerferien vil vi invitere hans bedste venner på besøg.

Endnu en gang tusind tak for alt. Jeg håber, at vi ses snart!

Mange hilsner
Fatima og Oliver`
    },
    {
      id: "w21nb", delprove: 1, real: true, year: 2021,
      title: "B: Et opslag på Facebook om din lejlighed (nov.-dec. 2021)",
      kind: "Prøveopgave · opslag på Facebook",
      minWords: 80, maxWords: 150,
      situation: "Du vil gerne leje din lejlighed ud i et år, fordi du ikke selv skal bruge den. Du vil skrive et opslag på Facebook. Skriv opslaget. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvorfor du gerne vil leje din lejlighed ud i et år", "Lidt om lejligheden og det område, den ligger i", "Lidt om, hvem du gerne vil leje din lejlighed ud til (fx antal personer, køn, alder)", "Hvad den koster om måneden i husleje"],
      phrases: ["Lejlighed til leje i et år!", "Hej alle sammen", "Jeg hedder …, og jeg skriver, fordi …", "Lejligheden ligger …", "Huslejen er … kr. om måneden.", "Hvis du er interesseret, så ring eller skriv til mig på …"],
      model: `Lejlighed til leje i et år!

Hej alle sammen

Jeg hedder Ahmad, og jeg skriver, fordi jeg gerne vil leje min lejlighed ud fra 1. februar. Jeg har fået et job i Norge i et år, så jeg skal ikke selv bruge den.

Lejligheden er på 65 m² og har to værelser, et nyt køkken og en lille altan. Den ligger på 3. sal i et roligt område på Østerbro i København. Der er kort til metroen, og der er en park og flere caféer i nærheden.

Jeg vil gerne leje lejligheden ud til en eller to voksne, fx et par eller to studerende. Det er lige meget, om I er mænd eller kvinder, men I må ikke ryge i lejligheden.

Huslejen er 8.500 kr. om måneden.

Hvis du er interesseret, så ring eller skriv til mig på 22 45 67 89.

På forhånd tak!

Mange hilsner
Ahmad`
    },
    {
      id: "w21nc", delprove: 2, real: true, year: 2021,
      title: "En e-mail om din praktik i en tøjbutik (nov.-dec. 2021)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Vera. I e-mailen skriver hun bl.a.: \"… Jeg har hørt, at du er begyndt i praktik i en tøjbutik. Skriv og fortæl mig om, hvorfor du er begyndt i praktik, og hvad du synes om det…\" Skriv et svar til Vera og fortæl, hvorfor du er begyndt i praktik, og hvad du synes om det. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvorfor du er begyndt i praktik", "Fortæl, hvor du er i praktik, og hvad du laver", "Fortæl, hvad du synes om praktikken", "Fortæl, hvad du gerne vil, når praktikken er slut"],
      phrases: ["Hej Vera", "Tak for din mail.", "Du spørger om min praktik, …", "For det første er jeg begyndt i praktik, fordi …", "Derudover …", "Til sidst vil jeg sige, at …"],
      model: `Hej Vera

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om min praktik, og det vil jeg gerne fortælle dig lidt om.

For det første er jeg begyndt i praktik, fordi jeg gerne vil arbejde i en butik, men jeg har ingen erfaring fra Danmark. Derfor foreslog min sagsbehandler, at jeg skulle prøve en praktik i otte uger. Jeg er i en tøjbutik i centrum fire dage om ugen.

Derudover kan jeg fortælle, at jeg er rigtig glad for praktikken. Jeg hjælper kunderne med at finde det rigtige tøj, og jeg hænger nyt tøj op. Mine kolleger er søde, og jeg lærer mange nye danske ord. Det er lidt svært, når kunderne taler hurtigt, men det bliver bedre.

Til sidst vil jeg sige, at jeg håber, at jeg kan få et fast job i butikken. Min chef siger, at hun er tilfreds med mig.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Amira`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven nov.-dec. 2021 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p21n-a", title: "Fester", real: true, year: 2021,
      pictures: [
        { img: "images/pd2-2021-n/fester-1.jpg", credit, alt: "En fest på en sprogskole: kursister fra mange lande sidder ved et langt bord med mad fra forskellige lande og snakker, og i baggrunden synger en mand og spiller guitar på en scene, mens andre danser", words: ["fest på sprogskolen", "danse", "spille guitar", "mad fra mange lande", "hygge sig"] },
        { img: "images/pd2-2021-n/fester-2.jpg", credit, alt: "En julefrokost på en arbejdsplads: kollegerne sidder ved et langt bord med mad og vin, nogle har nissehuer på, der hænger guirlander, og der står et juletræ, mens chefen står og holder en tale med et glas i hånden", words: ["julefrokost", "kolleger", "holde en tale", "skåle", "juletræ"] }
      ],
      interview: [
        "Som sagt viser billedet en fest på en sprogskole. Vil du godt beskrive situationen på billedet?",
        "Hvad er godt ved, at man holder fest på en sprogskole?",
        "Har du været til fest på din sprogskole (eller din arbejdsplads)? Hvis ja: Vil du fortælle lidt om det? Hvis nej: Har du været til andre fester? Vil du fortælle lidt om det?",
        "Som sagt viser billedet en fest på en arbejdsplads. Vil du godt beskrive situationen på billedet?",
        "Hvad er godt ved, at man holder fest på en arbejdsplads?",
        "Har du været til fest på din arbejdsplads (eller din sprogskole)? Hvis ja: Vil du fortælle lidt om det? Hvis nej: Har du været til andre fester? Vil du fortælle lidt om det?"
      ],
      talk: [
        { who: "mediator", say: "Hvordan kan et ungt par, som ikke har så mange penge, holde en god bryllupsfest, der ikke koster så mange penge? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, de kun skal invitere den nærmeste familie og de nærmeste venner. Hvad synes du?" },
        { who: "partner", say: "De kan også holde festen hjemme eller låne et gratis lokale i stedet for at leje et dyrt sted. Er du enig?" },
        { who: "partner", say: "Måske kan gæsterne tage mad og drikkevarer med i stedet for gaver. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad med musikken og tøjet – kan de fx høre musik fra nettet og låne eller leje bryllupstøjet? Hvad synes I generelt er det vigtigste ved en god bryllupsfest?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det gode ved at holde fest på … er, at …", "Jeg har været til en fest, hvor …", "De kan holde festen …", "Det er billigere at …", "Er du enig?"]
    },
    {
      id: "p21n-b", title: "At have travlt på arbejde", real: true, year: 2021,
      pictures: [
        { img: "images/pd2-2021-n/travlt-paa-arbejde-1.jpg", credit, alt: "Fire kokke med kokkehuer har travlt i et restaurantkøkken: to skærer grøntsager ved et stort bord, en rører i en gryde ved komfuret, og en anden arbejder ved siden af, mens chefkokken i baggrunden råber og peger", words: ["kok", "restaurantkøkken", "skære grøntsager", "chefkok", "stresset"] },
        { img: "images/pd2-2021-n/travlt-paa-arbejde-2.jpg", credit, alt: "En kassedame i et supermarked har travlt ved kassen: der ligger mange varer på båndet, en kunde pakker sine varer, og der står en lang kø af kunder, hvoraf nogle ser utålmodige og sure ud", words: ["kassedame", "kø", "varer på båndet", "utålmodig", "supermarked"] }
      ],
      interview: [
        "Som sagt viser billedet nogle personer, der har meget travlt på deres arbejde. Vil du godt beskrive situationen på billedet?",
        "Som sagt viser billedet en person, der har meget travlt på sit arbejde. Vil du godt beskrive situationen på billedet?",
        "Synes du, det er godt, at man har travlt på sit arbejde? Hvorfor/hvorfor ikke?",
        "Har du arbejde/praktik? Har du meget travlt? Hvorfor/hvorfor ikke?",
        "Hvis du ikke har arbejde/praktik: Har du en travl hverdag? Hvorfor/hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "Hvad kan man gøre for ikke at blive stresset, hvis man har meget travlt på sit arbejde? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, man skal bede sine kolleger om hjælp og huske at holde pauser. Hvad synes du?" },
        { who: "partner", say: "Man kan også tale med sin chef om problemet eller måske arbejde på deltid. Er du enig?" },
        { who: "partner", say: "I fritiden kan man slappe af, dyrke motion eller gå ture. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad med at søge et job på en anden arbejdsplads eller i en anden branche? Hvad synes I generelt er det bedste råd mod stress?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det er godt/ikke godt at have travlt, fordi …", "På mit arbejde har jeg …", "Man kan fx …", "Det vigtigste er at …", "Er du enig?"]
    },
    {
      id: "p21n-c", title: "Et godt sted at bo", real: true, year: 2021,
      pictures: [
        { img: "images/pd2-2021-n/et-godt-sted-at-bo-1.jpg", credit, alt: "En familie bor i et hus på landet: moren plukker grøntsager i køkkenhaven, en dreng leger med en hund i haven, en pige hopper på en trampolin, og faren laver mad i køkkenet; bag huset er der marker", words: ["hus på landet", "køkkenhave", "trampolin", "have", "natur"] },
        { img: "images/pd2-2021-n/et-godt-sted-at-bo-2.jpg", credit, alt: "Et ældre par spiser morgenmad og læser avis på altanen i en lejlighed i byen; nede på gaden er der en café med parasoller, en grønthandler, mennesker der går og cykler, og en bil", words: ["lejlighed i byen", "altan", "café", "byliv", "tæt på butikker"] }
      ],
      interview: [
        "Som sagt viser billedet nogle personer, der er meget glade for deres bolig. Vil du godt beskrive situationen på billedet?",
        "Hvad er godt ved at bo i et hus?",
        "Hvad er godt ved at bo i en lejlighed?",
        "Hvordan bor du selv? Er du glad for det? Hvorfor/hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "Hvor synes I, et ungt par uden børn skal bo – i en lejlighed i byen eller i et hus på landet? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, de skal bo i en lejlighed i byen, for så er de tæt på butikker, caféer og offentlig transport. Hvad synes du?" },
        { who: "partner", say: "Men i byen er der meget larm og trafik, og huslejen er dyr. Er du enig?" },
        { who: "partner", say: "På landet er der fred og ro og tæt på naturen, men de skal måske bruge meget tid på transport. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad hvis de får børn – hvor er det så bedst at bo? Hvad synes I generelt er et godt sted at bo?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det gode ved at bo i et hus/en lejlighed er, at …", "Jeg bor selv i …", "En fordel ved at bo i byen er, at …", "En ulempe ved at bo på landet er, at …", "Er du enig?"]
    }
  );
})();
