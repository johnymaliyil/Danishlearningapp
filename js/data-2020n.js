// Prøve i Dansk 2, november-december 2020 – transcribed from the exam papers (produktionsnr. 07-13).
// Included: læseforståelse opgave 1-5, skriftlig fremstilling (delprøve 1 A/B and delprøve 2)
// and the three oral topics for mundtlig delprøve 2 (Brug af mobiltelefoner, Naboer, Weekend,
// from the opgaveark, produktionsnr. 12) with the examiner's questions, the discussion task and
// input from the eksaminatorark, and the pictures (illustrations by Niels Roland, from the
// picture sheets).
// Delprøve 1 of the oral exam is a topic the candidate chooses, so there are no monologue topics.
// The answers to opgave 1-5 are the official ones from the censor- og eksaminatorhæfte
// (rettenøgler, produktionsnr. 11); the short-answer accept lists add reasonable variants.
// The paper gives no "Du skal"-points for delprøve 2, so the four points there are our own.
// The model answers for skriftlig fremstilling are our own (the paper has none).

(function () {
  const G = "PD2 nov.-dec. 2020";

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
    id: "p20n-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"I hvilket fitnesscenter er der solarier?\" – Nordjysk Helsestudio.",
    sections: [
      {
        heading: "Fitnesscentre i Aalborg",
        cards: [
          { title: "Aalborg Ny Helsecenter", body: "Aalborg Ny Helsecenter ligger i centrum af Aalborg. Aalborg Ny Helsecenter er et motionscenter kun for piger og kvinder. Motionscenteret tilbyder styrketræning og konditionstræning ud fra mottoet: 'En afslappet og hyggelig atmosfære med plads til individet'. Derudover tilbyder Aalborg Ny Helsecenter aerobic og body-toning på mange forskellige hold.\nCentret byder gerne på en rundvisning, hvis du kigger forbi." },
          { title: "Fitness World", body: "Fitness World er en landsdækkende kæde af moderne motionscentre, der altid byder på det nyeste inden for motionsudstyr og holdtræning. Instruktørerne hos Fitness World er veluddannede, og Fitness World reklamerer med, at der ingen binding er på medlemskab.\nI Aalborg findes der Fitness World-centre på øverste etage af Friis, Aalborg Citycenter, samt i Dannebrogsgade 58, Prinsensgade 15 og Vesterbro 76." },
          { title: "FAB Dance Studio", body: "FAB Dance Studio er et fitness- og dansestudie. Dansekonceptet er sammensat sådan, at du i undervisningen opnår høj fedtforbrænding og bliver strammet op i muskelgrupperne. Det er konditionstræning på en anderledes måde.\nAlle kan deltage på vores hold, og det kræver ingen specielle forudsætninger at følge med." },
          { title: "FYSIOFitness", body: "FYSIOFitness er et motionscenter, som drives med rødder i fysioterapien og med mulighed for fysioterapeutisk vejledning i samarbejde med Klinik For Fysioterapi. I FYSIOFitness er der en afslappet atmosfære, professionelle instruktører, fleksible medlemskaber og billige priser. I FYSIOFitness kan du få rådgivning om træningsmetoder og skader.\nMotionscenteret tilbyder kick-and-box, fedt-dræber, mave-baller-lår, pilates, pump, spinning, step og yogahold med professionelle instruktører." },
          { title: "Fitness4Life", body: "Fitness4life er et motionscenter, der tilbyder funktionel træning med instruktører, der alle er uddannede i forhold til Team Danmark eller ProAcademy.\nFitness4life tilbyder ud over individuel træning også holdtræning inden for spinning, kettlebell (en vægt formet som en kugle med et u-formet håndtag), fitnessboksning, mave-baller-lår og almindelig cirkeltræning. Fitness4Life byder også på vejledning inden for kost og motion samt slankeforløb for børn." },
          { title: "Nordjysk Helsestudio", body: "Nordjysk Helsestudio er et af Aalborg-områdets ældste motions- og fitnesscentre med spinning, aerobic og dansesal samt et fuldt sortiment af redskaber til motions- og styrketræning.\nAlt i LifeFitness kredsløbsmaskiner samt maskiner til styrke, motion og bodybuilding fra World Class og Competition Line. Aerobic, spinning, holdtræning, sauna og solarier." },
          { title: "Equinox Fitness", body: "Equinox Fitness har to motionscentre i centrum af Aalborg. Equinox Fitness har et stort udvalg inden for fitness og velvære.\nEquinox Fitness tilbyder bl.a. styrketræning, kredsløbstræning, aerobic, spinning, holdtræning, yoga, squash, motionsboksning, indendørs løbebane, personlig træning, sauna, dampbad, spabad og massage." },
          { title: "Motionskælderen", body: "Motionskælderen tilbyder alt inden for motions- og styrketræning til konkurrencedygtige priser uden binding. Motionskælderen i Aalborg tilbyder også thai- og motionsboksning med instruktør. Hos Motionskælderen er der altid mulighed for en gratis prøvetræning i motions- eller kampsport." }
        ],
        source: "Kilde: www.aalborg-portalen.dk/guide/fitnesscentre-aalborg (21.07.2018, uddrag)"
      },
      {
        heading: "Efterskoler på Fyn",
        cards: [
          { title: "Bernstorffsminde Efterskole", sub: "Bernstorffsminde 4, 5600 Faaborg · www.berns.dk", body: "Bernstorffsminde Efterskole er en boglig skole, hvor gymnastik og idræt er en væsentlig del af hverdagen. Linjefag og mange valgfag.\nVi har svømmehal, gymnastiksal, stor hal, fodboldstadion, landets største springcenter samt lydstudie og øvelokaler til musik. IT er en integreret del af undervisningen." },
          { title: "Haarby Efterskole", sub: "Assensvej 8, 5683 Haarby · www.haarbyefterskole.dk", body: "Efterskolen for dig, der elsker sport og gerne vil bruge 10. klasse på personlig, social og faglig udvikling.\nDu skal vælge en af fire idrætslinjer: badminton, dans, håndbold eller fodbold OG en studieretning: Business, International, Science eller Fitness." },
          { title: "Billeshave Efterskole", sub: "Billeshavevej 51, 5500 Middelfart · www.billeshave.dk", body: "Vægt på et højt fagligt niveau. Attraktive linjer: adventure, skateboarding, kok, ridning, kunst, foto, e-sport og rugby. Varieret undervisning med projekter og spændende temaer. Niveaudelt undervisning i dansk, matematik, engelsk og tysk. Gode faciliteter. Et skoleår med linjeuger, udlandsrejser, mange oplevelser og arrangementer." },
          { title: "Hjemly Idrætsefterskole", sub: "Assensvej 154, 5750 Ringe · www.hjemly.dk", body: "På Hjemly dyrker du sport alle ugens skoledage – hvad enten det er fodbold, håndbold, basketball, badminton, løb eller dans.\nVi prioriterer faglige og kreative kompetencer, der styrker dig både fagligt og socialt, og vi ser det som vores fornemmeste opgave at give dig et efterskoleår fyldt med livsoplysning, livsglæde og fællesskab." },
          { title: "Eisbjerghus Internationale Efterskole", sub: "Eisbjergvej 2, 5580 Nr. Åby · www.eisbjerghus.dk", body: "Vil du med ud i verden for at lære sprog, møde nye venner og få oplevelser for livet? Hos os får du et gymnasieforberedende efterskoleliv på et højt fagligt niveau og undervisning på engelsk i 3 Cambridgefag, DELF fransk, Goethe-tysk, kinesisk, japansk og spansk. Et fællesskab, der udfordrer dig – med tid til kreativitet og sjov!" },
          { title: "Kerteminde Efterskole", sub: "Degnehøjvej 20, 5300 Kerteminde · www.kertemindeefterskole.dk", body: "Sammensæt dit eget unikke efterskoleår. Du vælger en faglig profil, og du kan vælge linje- og valgfag 3 gange om året.\nVi tager på studietur til Berlin og skitur til Norge. Oplev et stærkt fællesskab, en masse udfordringer og få en oplevelse, du aldrig glemmer." },
          { title: "Faaborgegnens Efterskole", sub: "Kirkevej 13, 5600 Faaborg · www.faae.dk", body: "Faaborgegnens Efterskole har fire linjer: Kunst & Design, Natur & Friluftsliv, IT & Medie og Mad & Livtag. Et efterskoleophold skal være en hyldest til livets magi; at se verden i farver og nyde og rumme de mange nuancer.\nNiveaudelt undervisning, iPads til alle, LEGO Education, valgfag (fx kajakpolo, klatring, musik, kor, streetdance og foto)." },
          { title: "Korinth Efterskole", sub: "Kaj Lykkesvej 9, 5600 Faaborg · www.korinth-efterskole.dk", body: "Efterskolen for dig, der har mod på natur, friluftsliv og fællesskab. Du kan udvikle dig på vores lille og hyggelige skole.\nVælg mellem linjefagene: adventure & friluftsliv, gourmet, ridning, spejderliv, sejlads og international. Valgfag: jagt, dykning, navigation, e-sport, klatring og kor." },
          { title: "Midtfyns Efterskole", sub: "Torpegårdsvej 19, 5792 Årslev · www.midtfyns-efterskole.dk", body: "Brand & Politi, adventure, fodbold, parkour, dans og 'kok amok'. Aktiv og kreativ skole. Du møder engagerede og nærværende voksne, der virkelig vil dig. Vi har niveaudelt undervisning, og de øverste niveauer er gymnasieforberedende. Bliv en vigtig brik i vores tætte fællesskab og få masser af udfordringer, der giver dig mod på livet!" },
          { title: "Ollerup Efterskole", sub: "Svendborgvej 10, 5762 Vester Skerninge · www.ollemus.dk", body: "Topmoderne øvelokaler og lydstudie, turné og festival, sang og sammenspil, musikteori og instrumentalundervisning, big band og fælleskor, café-aftener med guitarsolos og hundrede skrigende fans.\nPå Ollerup Efterskole er scenen sat til et fantastisk efterskoleår." },
          { title: "Musikefterskolen i Humble", sub: "Hovedgaden 21, 5932 Humble · www.musikefterskolen.dk", body: "På Musikefterskolen i Humble får du et efterskoleår med fokus på musik, fordybelse, fællesskab og faglighed.\nDu kan vælge mellem 4 musiklinjer: Rytmisk, Elektronisk, Jazz og Folk & World. Vi tager til Berlin og New York, på turné rundt i Danmark og spiller i VEGA. Vi har professionelt studie, lækre øvelokaler, soloundervisning, kor og meget mere!" },
          { title: "Strib Idrætsefterskole", sub: "Staurbyskovvej 6, 5500 Middelfart · www.stribidraetsefterskole.dk", body: "Strib Idrætsefterskole giver dig muligheden for at få det fedeste år, der udvikler dig – både i din sport, men helt klart også fagligt. Oplevelser og kvalitet er ord, der kendetegner vores hverdag.\nVi har 3 hovedlinjer, nemlig badminton, håndbold og fodbold, og vi træner 3-4 gange om ugen." },
          { title: "Nordfyns Efterskole", sub: "Klaus Berntsensvej 19, 5471 Søndersø · www.nordfe.dk", body: "Linjer: Fodbold piger/drenge, spring, dans, musik, kunst og e-sport. Samarbejde med Judo Danmark. 2 haller, springgrav, stortrampolin, gode boldbaner – mange fritidsmuligheder og fitness.\nDu får et aktivt og udviklende skoleår. Højt fagligt niveau. Skitur til de østrigske bjerge. Tur til London. Alle elever deltager i gymnastik-opvisningerne." },
          { title: "Vestfyns Efterskole", sub: "Nørremarksvej 21, 5690 Tommerup · www.vestfynsefterskole.dk", body: "Danmarks mindste efterskole – max 36 elever. Boglig undervisning – FP9 eller FP10. Arbejde med dyr: Køer, grise, heste, får og høns. Undervisning i ridning, sejlads og navigation, duelighedsbevis og traktorkørekort.\nUdlandsrejse, til Tanzania eller Indien (indeholdt i skolepengene). Fra jord til bord, køkkenhave og madlavning, friluftsliv." },
          { title: "Nørre Åby Efterskole", sub: "Olaf-Nielsensvej 7, 5580 Nørre Aaby · www.naae.dk", body: "Vi er en idræts-, musik-, drama-, danse- og designefterskole – og meget mere.\nVi er en efterskole, hvor du har dine linjefag hver eftermiddag, og hvor det er muligt at vælge nye linjer fire gange om året. Du kan også have det samme fag hele året." },
          { title: "Ærø Efterskole", sub: "Tranderupgade 59, 5970 Ærøskøbing · www.aeroe-efterskole.dk", body: "Praktisk værkstedsbaseret skole for elever med særlige læringsforudsætninger.\nUndervisningstilbud: Landbrug, krea, ridning, køkken, sejlads, sport, håndværk m.m.\nDer arbejdes med værdier som tryghed, ærlighed, respekt, selverkendelse, selvtillid og selvværd. FP9 i dansk og matematik." }
        ],
        source: "Kilde: www.efterskolerne.dk (04.04.2019, uddrag)"
      },
      {
        heading: "Musikfestivaler i København",
        cards: [
          { title: "Copenhagen Jazz Festival", sub: "Hvornår: 6.-15. juli · Line-up: Rokia Traoré, The Roots, Mulatu Astatke, Pharoah Sanders, Sons of Kemet, Jeff Beck, Brad Mehldau Trio m.fl.", body: "Copenhagen Jazz Festival har eksisteret siden 1979 og er en af Europas største jazzfestivaler. Hver sommer forvandles København, når festivalen i 10 dage i træk fejrer jazzen i alle dens afskygninger. Musikken spiller overalt: i parker og haver, på byens torve og pladser, på cafeer, i teatre og koncertsale. Copenhagen Jazz Festival byder på over 1000 koncerter, heraf mange gratiskoncerter med tidens bedste jazzmusik fra ind- og udland. Tilsammen bliver disse koncerter besøgt af over 250.000 glade publikummer." },
          { title: "Distortion", sub: "Hvornår: 30. maj-3. juni · Line-up: Solomun, Mall Grab, Yaeji, Acid Arab, Princess Nokia, Ekali, Charlotte De Witte, Big Freedia, Injury Reserve m.fl.", body: "Distortion startede i 1998 for at skabe liv i Københavns gader og er nu vokset til en populær festival, der samler flere hundrede tusinde mennesker til et væld af nye og spændende musiknavne fra især den elektroniske musikscene. Noget helt særligt ved denne festival er, at den er mobil. Distortion foregår nemlig i et nyt område hver dag – onsdag på Nørrebro og torsdag på Vesterbro og fredag og lørdag på Refshaleøen, hvor festivalen afsluttes med en stor to-dages elektronisk musikfestival Distortion Ø. Til alle gadefesterne er musikken gratis, men Distortions klub-arrangementer og Distortion Ø skal man købe Distortion Week Pass til." },
          { title: "Copenhagen Opera Festival", sub: "Hvornår: 29. juli-12. august · Line-up: Clara Cecilie Thomsen, Golda Schultz, Elisabeth Jansson, Ilker Aracayürek, The Alehouse Sessions m.fl.", body: "Copenhagen Opera Festival er en københavnsk musikfestival, der hylder operaen, og som bestræber sig på at bringe operaen ud af de vante rammer, ud på gaden og ud til et bredere publikum. Festivalen afholdes i Københavns gader, på vandet og under jorden. Operafestivalens hjerte er Wilhelm Scenen ved Torvehallerne. Her holdes artisttalk, morgensang, Masterclass, koncerter m.v. Foruden opera på en scene kan man opleve opera på cykel, operabingo, opera i private hjem og opera på vandet. Opera på vandet kan man opleve med Operettebåden, der sejler rundt i byens kanaler, så det er bare med at holde øje." },
          { title: "Haven Festival", sub: "Hvornår: 10.-11. august · Line-up: Arcade Fire, Arial Pink, Big Thief, Cancer, Den Sorte Skole, Katinka m.fl.", body: "I 2017 blev Haven Festival afholdt for første gang. Initiativtagerne til festivalen er Aaron og Bryce Dessner fra The National, kokken Claus Meyer og bryggeren Mikkel Borg Bjergsø. De kalder selv Haven en 'festival for sanserne'. Og med de profiler kan man forvente masser af kvalitetsoplevelser i form af gourmetmad, kunst og selvfølgelig musik. Festivalen afholdes på Refshaleøen med havneudsigt og kun 10 minutter på cykel fra centrum." },
          { title: "Copenhell", sub: "Hvornår: 20.-23. juni · Line-up: Ozzy Osbourne, Avenged Sevenfold, Ghost, Nightwish, Alice in Chains m.fl.", body: "Copenhell er Danmarks største rock- og metalfestival, der siden 2010 har samlet tusindvis af rock- og metalfans på Refshaleøen i Københavns havn. Her udgør det gamle B&W-værft de rå, industrielle rammer om tre dages udendørs festival med massevis af bands på i alt tre scener. Festivalen præsenterer et bredt og varieret program med både store etablerede internationale navne samt mindre kendte up-coming navne. Men festivalen byder også på andre aktiviteter, såsom fester i ølteltet Biergarten, underholdning og ond kunst." },
          { title: "Strøm Festival", sub: "Hvornår: 8.-11. august · Line-up: Laid Back, Meute, Moses Boyd Red Roof, Shanti Celeste, Larry Heard, Flipkompagniet m.fl.", body: "Siden 2007 har den elektroniske musik haft sin egen festival: Strøm Festival, der finder sted hvert år i august i København og på Frederiksberg. Programmet består af lokale såvel som etablerede navne fra den danske og internationale elektroniske musikscene, og festivalen bestræber sig på at præsentere de nyeste tendenser inden for elektronisk musik. Udover en masse musik byder Strøm også på workshops, fester, rulleskøjte-disko, artist-talks og seminarer – som f.eks. DJ workshop." }
        ],
        source: "Kilder: www.jazz.dk, www.operafestival.dk, www.copenhell.dk, www.cphdistortion.dk, www.havenkbh.dk, www.strm.dk (2018, redigeret)"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "I hvilket fitnesscenter kan man gå til thaiboksning?", accept: ["motionskælderen", "motionskælderen i aalborg", "motions kælderen", "motionskælder", "motionskaelderen"] },
      { type: "short", n: 2, q: "På hvilken efterskole kan man komme på skitur til Østrig?", accept: ["nordfyns efterskole", "nordfyns", "nordfyn efterskole", "nordfyns efterskole (søndersø)", "nordfyns efterskole i søndersø", "nordfe"] },
      { type: "short", n: 3, q: "På hvilken efterskole kan man gå til dykning?", accept: ["korinth efterskole", "korinth", "korinth efterskole (faaborg)", "korinth efterskole i faaborg", "korinthefterskole"] },
      { type: "short", n: 4, q: "På hvilke to efterskoler kan man komme på tur til Berlin?", accept: ["kerteminde efterskole og musikefterskolen i humble"].concat(both(["kerteminde efterskole", "kerteminde"], ["musikefterskolen i humble", "musikefterskolen", "humble", "musikefterskolen humble"])) },
      { type: "short", n: 5, q: "På hvilken efterskole kan man både gå til kor og foto?", accept: ["faaborgegnens efterskole", "faaborgegnens", "faaborgegnen", "faaborgegnens efterskole (faaborg)", "faaborgegnens efterskole i faaborg", "fåborgegnens efterskole"] },
      { type: "short", n: 6, q: "På hvilken musikfestival kan man købe gourmetmad?", accept: ["haven festival", "haven", "havenfestival", "haven festival (refshaleøen)", "haven festival på refshaleøen"] }
    ]
  };

  const opg2 = {
    id: "p20n-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Fiat Punto sælges", body: "Fiat Punto 1,2 fra 2010, har kørt 134.000 km.\n■■■■■■\nDen leveres nysynet og med nye bremser.\nPris: 25.000 kr.\nRing for mere info på 86 30 09 28" },
          { title: "B – Har du brug for et fritidsjob?", body: "Bliv omdeler af reklamer og aviser, og tjen ekstra i din fritid. Primært i weekenden.\n■■■■■■\nEgen bil en fordel.\nEr du interesseret? Søg jobbet på:\nwww.flexomdeling.dk" },
          { title: "C", body: "■■■■■■\nAlle reparationer udføres af erfarne mekanikere.\nDu har mulighed for at låne en bil gratis, når din egen er til reparation.\nServiceeftersyn kun 995,-.\nRing nu og book en tid.\nCity-Mekanikeren\nNørregade 2 – Tlf. 52 43 20 13" },
          { title: "D", body: "■■■■■■\nHos Start Godt har vi det, du har brug for til den nyfødte og til barnets første år. Populære mærker og gode tilbud i nyåbnet webshop. Se fx vores kæmpeudvalg af pusleborde, tremmesenge og bæreseler.\nStart Godt\nwww.startgodt.dk" },
          { title: "E – Sommeren er over os!", body: "■■■■■■\nDerfor er det vigtigt at beskytte sig mod solens kraftige stråler!\nVi har et bredt udvalg af forskellige solcremer med høj faktor.\nwww.alticremer.dk" },
          { title: "F", body: "■■■■■■\nGiv din baby en dejlig oplevelse.\nUndervisningen foregår i varmt vand sammen med forældrene.\nVi har hold alle ugens hverdage.\nLæs mere om vores forskellige hold på www.nygaard-svoemmehal.dk\nNygaard Svømmehal" },
          { title: "G", body: "■■■■■■\nSå forkæl dig selv med et ophold på et af vores rejsemål, hvor der er garanti for høje temperaturer og total afslapning.\nBook et af vores fantastiske hoteller med halv- eller helpension.\nFerieexperten\nTlf. 28 77 43 18" },
          { title: "H", body: "■■■■■■\nStort udvalg – også varevogne og minibusser til suveræne priser.\nFra 249 kr. pr. dag.\nGratis lån af autostole til børn.\nRing og få et tilbud hos Book & Kør\nTlf.: 38 60 52 08" },
          { title: "I", body: "■■■■■■\nJeg er en ung pige på 14 år, som gerne vil arbejde efter skole (ca. 5 timer om ugen).\nAlt har interesse. Fx\n• Børnepasning\n• Rengøring\n• Hundeluftning\nRing til Signe på 64 80 12 78" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Bilen er meget velholdt.", answer: "A", example: true },
          { n: 7, text: "Alt i babyudstyr.", answer: "D" },
          { n: 8, text: "Savner du sol og varme?", answer: "G" },
          { n: 9, text: "Udlejning af biler.", answer: "H" },
          { n: 10, text: "Ugentlig arbejdstid ca. 10 timer.", answer: "B" },
          { n: 11, text: "Nyåbnet autoværksted.", answer: "C" },
          { n: 12, text: "Fritidsjob søges.", answer: "I" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p20n-3", group: G, real: true,
    title: "Opgave 3 – En dejlig overraskelse",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Allan og Lena har været gift i 3 år. De har begge to gode job, men de har [[0]] arbejdsdage, og de synes tit, de har for lidt tid til hinanden.

Det er fredag, og Allan har lige fået fri. Denne dag er helt [[13]], for Allan og Lena har bryllupsdag, og det vil de fejre med en romantisk middag på en italiensk restaurant. På vej hjem køber Allan blomster til Lena. Da han kommer hjem, er Lena der allerede, for hun har fået [[14]] fri end ham. Allan giver hende blomsterne og et kys, og så går de ind for at skifte tøj, inden de skal på restaurant.

Pludselig banker det på døren, og de bliver lidt overraskede, for de har [[15]] inviteret gæster. Allan lukker op, og udenfor står hans svigermor. Han inviterer sin svigermor indenfor, [[16]] han og Lena har lidt travlt. Men han fortæller, at de desværre [[17]] har tid til at drikke en hurtig kop kaffe med hende, fordi de snart skal på restaurant. Da de alle tre sidder i sofaen og drikker kaffe, spørger Allans svigermor pludselig, om hun må komme med på restaurant. Allan bliver [[18]]. Han kan godt lide sin svigermor, men han gider ikke have hende med til middagen, og han siger, at det ikke passer så godt. Men så griner hans svigermor og forklarer, at hun bare ville lave sjov, og at hun selvfølgelig ikke skal med. Hun forstår nemlig [[19]], at Allan og Lena glæder sig til en romantisk aften alene sammen. Så tager hun en kuvert frem af sin taske og giver den til Allan og Lena. I den er der et gavekort til en rejse for to til Italien. Allan og Lena bliver meget glade, [[20]] de nu både skal på italiensk restaurant og en tur til Italien.`,
    questions: [
      {
        type: "gaps",
        bank: ["lange", "nemlig", "godt", "selvom", "korte", "almindelig", "kun", "senere", "irriteret", "speciel", "ikke", "tidligere", "fordi", "glad"].map(w => ({ key: w, text: w })),
        example: { 0: "lange" },
        answers: { 13: "speciel", 14: "tidligere", 15: "ikke", 16: "selvom", 17: "kun", 18: "irriteret", 19: "godt", 20: "fordi" }
      }
    ]
  };

  const opg4 = {
    id: "p20n-4", group: G, real: true,
    title: "Opgave 4 – Andrea Cruz – mexicaner i Danmark",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Andrea er 22 år og kommer fra Mexico. Nu bor hun i Aarhus, hvor hun også studerer og arbejder.

**0.** Andrea er født og opvokset i Mexico, men i 2018 kom hun til Danmark for at studere i Aarhus. Først var det hendes plan, at hun kun skulle være i Danmark i seks måneder. [[0]]. Hun blev nemlig hurtigt glad for at være i landet, og efter de seks måneder besluttede hun, at hun ville blive og gøre sin uddannelse færdig.

**21.** Andrea læser til ingeniør på Aarhus Universitet. Det er en international uddannelse, så der er studerende fra både Danmark og andre lande på hendes studie, og undervisningen er på engelsk. [[21]]. Hun kan en del dansk, men hun er meget bedre til engelsk. Så det giver hende mulighed for at tage sin uddannelse i Danmark på et sprog, som hun er rigtig god til.

**22.** Ved siden af sit studie har Andrea også et studiejob på en lille spansk restaurant, der ligger midt i byen. Her arbejder hun som tjener et par gange om ugen. [[22]]. Hun vil gerne tjene nogle penge, men lønnen kunne godt være bedre, og hun synes ikke, at jobbet er særlig spændende. Så hun har prøvet at finde et andet studiejob, men det er desværre ikke lykkedes for hende endnu.

**23.** Andrea har en dansk kæreste, som hedder Emil. De har kendt hinanden i et års tid, og de er meget glade for hinanden. Men Emil bor og arbejder i en by lidt uden for Aarhus, og de har begge travlt i hverdagen, så de ses ikke så tit. [[23]]. For Emil har nemlig lejet en lejlighed i Aarhus fra næste måned, og de har aftalt, at Andrea skal flytte ind i den sammen med ham, så de kan være mere sammen.

**24.** Andrea glæder sig til at flytte sammen med Emil, og hun tror, at hun har gode chancer for at finde et job som ingeniør i Danmark, når hun er færdig med sine studier. Derfor har hun besluttet at blive boende i Aarhus. Det synes Emil er en god beslutning. [[24]]. De vil nemlig helst have, at hun flytter tilbage til Mexico, når hun er færdig med sine studier.

**25.** Andrea savner sine forældre, og hun vil gerne se dem igen snart. Hun snakker med Emil om det, og han får en god idé. [[25]]. Han tilbyder også at betale for rejsen. Andrea bliver meget glad, og hun ringer straks til sine forældre og fortæller, at hun og Emil snart kommer på besøg. Hun glæder sig til at se dem igen og til at vise Emil den by og det land, hun kommer fra.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Men hun bor her stadigvæk." },
          { key: "B", text: "Og det gør hendes forældre også." },
          { key: "C", text: "Det er Andrea lidt træt af." },
          { key: "D", text: "Han vil invitere hendes forældre til Danmark." },
          { key: "E", text: "Men det gør hendes forældre ikke." },
          { key: "F", text: "Men det bliver snart bedre." },
          { key: "G", text: "Og det er Andrea glad for." },
          { key: "H", text: "Han synes, de skal tage til Mexico sammen." }
        ],
        example: { 0: "A" },
        answers: { 21: "G", 22: "C", 23: "F", 24: "E", 25: "H" }
      }
    ]
  };

  const opg5 = {
    id: "p20n-5", group: G, real: true,
    title: "Opgave 5 – Interview med Mehmet",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Mehmet – selvstændig med egen restaurant",
        cards: [
          { title: "A", sub: "Eksempel", body: "Det har altid været min drøm. Jeg har arbejdet på flere forskellige restauranter, og selvom det har været fint nok, har jeg altid haft lyst til at prøve at gøre tingene på min egen måde og starte mit eget." },
          { title: "B", body: "Det er, at jeg nu har en restaurant, som er præcis, som jeg gerne vil have, at den skal være. Hvis mine medarbejdere har en god idé, lytter jeg selvfølgelig til dem, men det er mig, der bestemmer og tager de store beslutninger, og det passer mig rigtig godt." },
          { title: "C", body: "Ja, det gør det heldigvis. Generelt virker vores kunder meget tilfredse med maden, og de er gode til at anbefale os til andre. Så vi får hele tiden flere kunder. Det betyder meget, især her i København, hvor der er mange spisesteder, og konkurrencen om kunderne er hård." },
          { title: "D", body: "Nej, ikke specielt. Jeg kan selvfølgelig godt mærke, at jeg har et større ansvar nu, men det er okay. Og det er fx ikke nyt for mig at arbejde mange timer hver dag. Det gjorde jeg også, før jeg fik min egen restaurant. Nu arbejder jeg bare for mig selv i stedet, og det giver mig ekstra energi." },
          { title: "E", body: "Mange forskellige ting! Det vigtigste er helt sikkert, at man tænker godt over, hvor ens restaurant skal ligge. Det kan nemlig få stor betydning for, om det kommer til at gå godt med den. Men det er også vigtigt, at man ansætter nogle medarbejdere, som møder stabilt og er gode til det, de laver." },
          { title: "F", body: "Det er svært at sige. De kan se, hvor glad jeg er for min restaurant, og de ved, at det altid har været min store drøm at åbne mit eget. Og de siger tit til mig, at jeg ikke skal have det dårligt med, at jeg ikke er så meget hjemme. Men jeg tror nu alligevel, de savner mig somme tider." },
          { title: "G", body: "Nej, desværre ikke. Det går rigtig godt med restauranten, og det er jo dejligt. Men det betyder også, at der er travlt, og at jeg er nødt til at være der meget. Jeg kan faktisk kun tage fri en enkelt dag, hvis jeg skal noget meget vigtigt. Men jeg håber, det bliver bedre om et år eller to." },
          { title: "H", body: "Hvis jeg skal sige det kort, så er min vigtigste opgave selvfølgelig at lede restauranten og personalet. Det betyder fx, at det er mig, der bestiller varer og har ansvar for budget, vagtplaner og regnskaber. Men på en travl dag med mange kunder hjælper jeg også mine medarbejdere i køkkenet." }
        ]
      }
    ],
    note: "Mehmet bor i København med sin kone og to børn. Han er uddannet kok og har åbnet en restaurant i København for et halvt år siden.",
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor har du valgt at åbne en restaurant?", answer: "A", example: true },
          { n: 26, text: "Går det godt i restauranten?", answer: "C" },
          { n: 27, text: "Hvad laver du i restauranten?", answer: "H" },
          { n: 28, text: "Er det hårdt at være selvstændig?", answer: "D" },
          { n: 29, text: "Hvad er det bedste ved at være selvstændig?", answer: "B" },
          { n: 30, text: "Har du tid til andet end restauranten?", answer: "G" }
        ]
      }
    ]
  };

  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(fallback < 0 ? PD2.READING.length : fallback, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling nov.-dec. 2020 ----------
  const wFallback = PD2.WRITING.findIndex(w => !w.real);
  PD2.WRITING.splice(wFallback < 0 ? PD2.WRITING.length : wFallback, 0,
    {
      id: "w20na", delprove: 1, real: true, year: 2020,
      title: "A: Et takkebrev til en kollega, der går på pension (nov.-dec. 2020)",
      kind: "Prøveopgave · takkebrev til en kollega",
      minWords: 80, maxWords: 150,
      situation: "Du har en kollega, der snart går på pension. Du vil skrive et takkebrev til din kollega. Skriv takkebrevet. Du skal begynde og afslutte takkebrevet på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Tak ham/hende for at have været en god kollega", "Fortæl, hvad du har lært af din kollega", "Fortæl, hvorfor du vil savne din kollega på arbejdspladsen", "Inviter din kollega på en kop kaffe"],
      phrases: ["Kære …", "Tusind tak for …", "Jeg har lært …", "Jeg kommer til at savne dig, fordi …", "Har du lyst til at komme på en kop kaffe …?", "Endnu en gang tusind tak for alt."],
      model: `Kære alle i lageret – og især kære Bente

Tusind tak for de seks år, hvor vi har arbejdet sammen. Du har været en rigtig god kollega, og du har altid været hjælpsom og i godt humør.

Jeg har lært meget af dig. Da jeg begyndte, kunne jeg næsten ikke tale dansk, men du tog dig tid til at forklare mig tingene. Du lærte mig også at køre truck og at planlægge mit arbejde.

Jeg kommer til at savne dig på arbejdspladsen, fordi du altid fik os til at grine i frokostpauserne. Det bliver ikke det samme uden dig.

Nu skal jeg vænne mig til at arbejde uden dig, men jeg vil gerne holde kontakten. Har du lyst til at komme hjem til mig på en kop kaffe en dag i næste måned?

Endnu en gang tusind tak for alt. Jeg håber, at vi ses snart!

Mange hilsner
Hassan`
    },
    {
      id: "w20nb", delprove: 1, real: true, year: 2020,
      title: "B: Et opslag på Facebook om din nye butik (nov.-dec. 2020)",
      kind: "Prøveopgave · opslag på Facebook",
      minWords: 80, maxWords: 150,
      situation: "Du skal åbne en ny butik i byen, hvor du bor. Du vil skrive et opslag på Facebook, hvor du fortæller om butikken og den første åbningsdag. Skriv opslaget. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om din nye butik, og hvor butikken ligger", "Lidt om det, du sælger i din butik", "Hvornår butikken åbner første gang (dato og klokkeslæt)", "Hvad der sker i butikken på den første åbningsdag (fx tilbud, konkurrencer, musik)"],
      phrases: ["Ny butik åbner!", "Hej alle sammen", "Jeg hedder …, og jeg skriver, fordi …", "Butikken ligger …", "Butikken åbner første gang …", "Hvis du har spørgsmål, så ring eller skriv til mig på …"],
      model: `Ny butik åbner i Vejle!

Hej alle sammen

Jeg hedder Maria, og jeg skriver, fordi jeg snart åbner min egen butik, Marias Te & Kaffe. Butikken ligger på Søndergade 12 i centrum af Vejle, lige ved siden af apoteket.

I butikken sælger jeg kaffe og te fra hele verden. Jeg sælger også chokolade, småkager og flotte kopper og kander, som er gode til gaver.

Butikken åbner første gang lørdag den 5. december kl. 10.00.

På åbningsdagen får alle kunder en gratis kop kaffe og et stykke kage, og der er 20 % rabat på alle varer. Der er også en konkurrence, hvor man kan vinde en stor gavekurv, og en guitarist spiller julemusik hele dagen.

Hvis du har spørgsmål, så ring eller skriv til mig på 41 22 63 85.

På forhånd tak! Jeg glæder mig til at se jer.

Mange hilsner
Maria`
    },
    {
      id: "w20nc", delprove: 2, real: true, year: 2020,
      title: "En e-mail om at vinde 2 millioner (nov.-dec. 2020)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Johan. I e-mailen skriver han bl.a.: \"… Tillykke! Jeg har hørt, at du har vundet 2 millioner. Det er da helt fantastisk! Skriv og fortæl mig om, hvordan du har vundet pengene, og hvad du vil bruge dem til…\" Skriv et svar til Johan, og fortæl, hvordan du har vundet 2 millioner, og hvad du vil bruge pengene til. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvordan du har vundet de 2 millioner", "Fortæl, hvordan du havde det, da du fik det at vide", "Fortæl, hvad du vil bruge pengene til", "Fortæl, om du vil give noget af pengene til andre"],
      phrases: ["Hej Johan", "Tak for din mail.", "Du spørger om de 2 millioner, …", "For det første har jeg vundet pengene …", "Derudover …", "Til sidst vil jeg sige, at …"],
      model: `Hej Johan

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint. Faktisk har jeg det helt fantastisk!

Du spørger om de 2 millioner, og det vil jeg gerne fortælle dig lidt om.

For det første har jeg vundet pengene i Lotto. Jeg spiller hver uge med de samme tal, nemlig fødselsdagene i min familie. Sidste lørdag havde jeg alle syv rigtige. Jeg troede ikke på det, før banken ringede til mig om mandagen.

Derudover har jeg allerede planlagt, hvad jeg vil bruge pengene til. Først vil jeg betale gælden på vores hus og købe en ny bil, fordi vores gamle bil hele tiden går i stykker. Så vil jeg tage min familie med på en lang ferie i Thailand.

Til sidst vil jeg sige, at jeg også vil give noget af pengene til mine forældre og spare resten op til mine børns uddannelse.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Samir`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven nov.-dec. 2020 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p20n-a", title: "Brug af mobiltelefoner", real: true, year: 2020,
      pictures: [
        { img: "images/pd2-2020-n/brug-af-mobiltelefoner-1.jpg", credit, alt: "En klasse på en sprogskole: læreren står ved tavlen og underviser, men flere af kursisterne kigger ikke på hende – en kvinde taler i mobiltelefon, en mand skriver på sin mobil, og en anden har benene oppe på en stol", words: ["sprogskole", "undervisning", "tale i telefon", "skrive en sms", "forstyrre"] },
        { img: "images/pd2-2020-n/brug-af-mobiltelefoner-2.jpg", credit, alt: "Tre mekanikere i kedeldragt holder pause i frokoststuen ved et værksted: den ene hører musik med høretelefoner og kigger på sin mobil, den anden taler i telefon og smiler, og den tredje sidder alene og ser trist og kedelig ud med sin madpakke", words: ["kolleger", "frokostpause", "høretelefoner", "værksted", "tale sammen"] }
      ],
      interview: [
        "Hvad synes du om, at man bruger sin mobil, når man har undervisning i klassen?",
        "Bruger du også din mobil, når du har undervisning i klassen?",
        "Hvis ja: Hvad bruger du den til? Hvis nej: Hvorfor ikke?",
        "Hvad synes du om, at man bruger sin mobil, når man har pause?",
        "Bruger du din mobil, når du har pause? Hvis ja: Hvad bruger du den til? Hvis nej: Hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "Skal et barn på 6-7 år have en mobil? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, det er en god idé, for så kan børn og forældre altid komme i kontakt med hinanden. Hvad synes du?" },
        { who: "partner", say: "Børn synes også, det er sjovt at spille, se film og tage billeder med mobilen, og de kan bruge den som hjælp til lektier. Er du enig?" },
        { who: "partner", say: "Men det er dyrt at købe og bruge en mobil, og måske kan et barn på 6-7 år ikke passe på den. Hvad tænker du om det?" },
        { who: "mediator", say: "Måske forstyrrer mobilen undervisningen i skolen, og det er bedre, at børn leger med hinanden og får motion. Hvad synes I generelt?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes ikke, man skal bruge mobilen i timerne, fordi …", "Når jeg har pause, bruger jeg min mobil til …", "Det er en god idé, fordi …", "Det er en dårlig idé, fordi …", "Er du enig?"]
    },
    {
      id: "p20n-b", title: "Naboer", real: true, year: 2020,
      pictures: [
        { img: "images/pd2-2020-n/naboer-1.jpg", credit, alt: "To altaner over hinanden i en boligblok: på den nederste altan griller en glad mand pølser og bøffer, og røgen fra grillen stiger op til altanen ovenover, hvor et ældre par sidder og drikker kaffe og ser sure og irriterede ud", words: ["altan", "grille", "røg", "irriteret", "boligblok"] },
        { img: "images/pd2-2020-n/naboer-2.jpg", credit, alt: "To lejligheder i en opgang: i den øverste lejlighed spiller en mand højt på elguitar med en stor højttaler, så billederne på væggen ryster, og i lejligheden nedenunder ligger en person i sengen om natten og holder sig for ørerne med puden", words: ["larme", "elguitar", "højttaler", "kan ikke sove", "lejlighed"] }
      ],
      interview: [
        "Hvad synes du, man skal gøre, hvis man har et problem med en nabo?",
        "Har du prøvet at have problemer med en nabo?",
        "Hvis ja: Vil du fortælle lidt om det? Hvis nej: Hvordan har du det med dine naboer?"
      ],
      talk: [
        { who: "mediator", say: "Hvordan er man en god nabo? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, man skal være venlig, hilse på sin nabo og byde nye naboer velkommen. Hvad synes du?" },
        { who: "partner", say: "Man skal prøve ikke at larme, og man skal fortælle det til naboerne, hvis man holder fest. Er du enig?" },
        { who: "partner", say: "En god nabo hjælper også, fx ved at låne naboen ting, passe naboens kæledyr eller passe blomsterne, når naboen er på ferie. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad med at gøre ting sammen – fx spise sammen, holde fest eller hjælpe hinanden med haven? Hvad synes I generelt er det vigtigste?" }
      ],
      phrases: ["På billedet kan jeg se …", "Hvis jeg har et problem med en nabo, vil jeg …", "Jeg synes, man skal tale med naboen, fordi …", "Mine naboer er …", "En god nabo er en, der …", "Hvad med dig?"]
    },
    {
      id: "p20n-c", title: "Weekend", real: true, year: 2020,
      pictures: [
        { img: "images/pd2-2020-n/weekend-1.jpg", credit, alt: "En familie gør rent derhjemme i weekenden: moren pudser vinduer, en dreng tømmer opvaskemaskinen, faren støvsuger, og en pige bærer en stor kurv med vasketøj", words: ["gøre rent", "pudse vinduer", "opvaskemaskine", "støvsuge", "vasketøj"] },
        { img: "images/pd2-2020-n/weekend-2.jpg", credit, alt: "En mand og en kvinde løber en tur sammen i en park en solskinsdag; i baggrunden løber en anden person, en kører på løbehjul, og nogle sidder på græsset og slapper af", words: ["løbe en tur", "parken", "motion", "solskin", "slappe af"] }
      ],
      interview: [
        "Hvad synes du om, at man bruger sin weekend på den måde?",
        "Hvad laver du selv i weekenden?"
      ],
      talk: [
        { who: "mediator", say: "Hvad er det godt for en familie med små børn at lave sammen i weekenden? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, de skal være sammen derhjemme og fx lave mad, spille spil eller læse bøger sammen. Hvad synes du?" },
        { who: "partner", say: "De kan også tage på tur, fx i biografen, på biblioteket eller i Zoo. Er du enig?" },
        { who: "partner", say: "Det er godt at lave noget aktivt, fx tage i svømmehallen, gå tur i skoven eller spille fodbold. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad med at invitere gæster, fx bedsteforældre eller andre familier med børn? Hvad synes I generelt er en god weekend for en familie?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes, det er fint at …, fordi …", "I weekenden plejer jeg at …", "En familie med små børn kan fx …", "Det er godt for børn at …", "Er du enig?"]
    }
  );
})();
