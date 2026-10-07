// Prøve i Dansk 2, maj-juni 2018 – transcribed from the exam papers (produktionsnr. 07-10).
// Included: læseforståelse opgave 1-5 and skriftlig fremstilling.
// No oral material was supplied for this session.
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 maj-juni 2018";

  const opg1 = {
    id: "p18m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"I hvilken park er der en nybygget legeplads?\" – Sæby Bypark.",
    sections: [
      {
        heading: "Parker og anlæg i Frederikshavn Kommune",
        cards: [
          { title: "Nordre Skanse", sub: "Frederikshavn", body: "Anlægget blev genoplivet ved 150 års købstadsjubilæet, hvor der blev opstillet to store kanoner. Det er afgrænset af græsvolde og en voldgrav, og der er adgang via to broer. Fra voldene er der udsigt over hav og strand, og rundt om anlægget er der en lille park. Adgang fra vejen Nordre Skanse." },
          { title: "Plantagen", sub: "Frederikshavn", body: "Byens gamle grønne område. Plantagen har store plæner og træer, sø og legeplads med mulighed for at tage en picnickurv med og nyde omgivelserne. Plantagen ligger op ad den gamle kirkegård og Fladstrand Kirke. I udkanten af området ligger der en grillbar med toiletter. Adgang fra Gl. Skagensvej, Nørregade og Skagensvej." },
          { title: "Kennedyparken", sub: "Frederikshavn", body: "Bagved Frederikshavn Gymnasium ligger Kennedyparken, som bl.a. bruges flittigt af eleverne. Parken byder bl.a. på en stor sø med ænder og fugle, bede og flere store plæner og træer. Adgang fra Kærvej/Enghavevej." },
          { title: "Krudttårnet", sub: "Frederikshavn", body: "Krudttårnet er i dag hjemsted for et militærhistorisk museum og tjener samtidig som Frederikshavns vartegn. Det blev i 1974 besluttet at flytte det 4.500 tons tunge krudttårn til den nuværende placering. Rundt om Krudttårnet ligger der et lille grønt anlæg. Adgang fra Kragholmen." },
          { title: "Cloos-tårnet", sub: "Frederikshavn", body: "Hvis vejret er godt, har man som besøgende en utrolig udsigt over hele Vendsyssel fra udsigtstårnet. Rundt om er der et grønt anlæg med legeplads, og der er forbindelse til Vandværksskoven. Tårnet har åbent 1. maj-31. august, alle dage fra kl. 10 til 17. Lørdage og søndage i juli måned er tårnet åbent indtil kl. 18. Adgang fra Brønderslevvej 61." },
          { title: "Sæby Bypark", sub: "Sæby", body: "Et stort og forholdsvis nyt anlæg med masser af plads til, at familien kan udfolde sig. Nybygget legeplads, multibane og petanqueanlæg. Der er også et område, hvor det er muligt at sætte sig og spise en medbragt madpakke og nyde bl.a. rosenbedene. Adgang fra Jacob Friis Vej, Skolegade og Rosenvej." },
          { title: "Sæby Å og Fiskerstien", sub: "Sæby", body: "Langs Sæby Å mellem Algade og åen ligger der en hyggelig, lille park og et anlæg, som tidligere var hotelhave. Her snor en idyllisk sti sig fra havnen til den gamle Sæby Vandmølle langs med den flotte å. Området er åbent for alle og byder bl.a. på flotte blomsterbede. Adgang fra Søndergade ved vandmøllen eller fra havnen." },
          { title: "Jernkilden", sub: "Sæby", body: "I kanten af Sæbygård Skov ligger den restaurerede Jernkilde, som oprindeligt var et kursted pga. kildens helbredende vand. Der er i dag overdækkede borde og bænke og grønne områder med store græsplæner omkring. Der er nedsat et udvalg, som har ansvar for kilden. Adgang fra Kildemarken." },
          { title: "Bybækken", sub: "Øster Vrå", body: "Midt i Øster Vrå ligger der et dejligt, lille anlæg, som byder på rislende vand og grønne omgivelser til afslapning og leg. Der er bl.a. rododendron-bede og en lille bro over vandet. Skråningerne er oplagte til leg og spil. Adgang fra Hjørringvej." },
          { title: "Dybvad Søpark", sub: "Dybvad", body: "I dag er der en sti rundt om søen, som er et dejligt udflugtsmål med græs, træer og gode fiskepladser. I søen vokser der tagrør, dunhammer og siv. Der er borde og bænke i området. Adgang fra Anlægsvej." },
          { title: "Banens Have", sub: "Skagen", body: "Tæt ved Skagen Station ligger der et lille grønt område, kaldet Banens Have. Området blev opfrisket i 2012 og fremstår nu som et lille lokalt parkområde med bænke og træer. Adgang fra Sct. Laurentii Vej." }
        ]
      },
      {
        heading: "Gårdbutikker i Østjylland",
        cards: [
          { title: "Lindbjerggård", sub: "Bente og Espen Nielsen · Hulen 16, Lindbjerg, 8930 Randers · Tlf. 86 44 22 82 eller 61 78 22 82 · www.hulen16.dk", body: "Gårdbutik med salg af økologisk oksekød, svinekød, lammekød og kyllinger. Vi har desuden mulard-ænder og gæs samt jordbær i sæsonen. Vi tilbyder autoriseret slagtning af fjerkræ, se vores hjemmeside. Åbningstiden er lørdag kl. 9-13 eller efter aftale." },
          { title: "Viktualia", sub: "Anette Feldtmann · Borgergade 20, 8450 Hammel · Tlf. 26 84 11 30 · www.viktualia.dk", body: "Lille økologisk gårdbutik med det bedste af livet på landet – kvalitet, økologi og håndværk. Økologiske spegepølser, grillpølser og diverse møre udskæringer og hakkekød af kalve- og oksekød fra vores egne dyr, økofjerkræ fra Gothenborg, økokød fra landgrise med krølle på halen, friskmalet mel og nybagt brød, te og kaffe, øl fra Herslev Bryghus og meget mere. I sæsonen finder du marmelader, sirup og eddiker fremstillet af frugt og bær fra egen have, verdens bedste syltede rødbeder, og hvad jeg nu ellers finder på! Fra drivhuset og køkkenhaven sælges alverdens tomater, chilier, agurker, squash, salater og meget andet, og om foråret kan du også købe frø og planter til drivhuset og haven.\nÅbningstider: fredag kl. 11-17. Lørdag kl. 9-13. Tjek dog viktualia.dk for særlige åbningstider i ferieperioderne." },
          { title: "Johannesminde", sub: "Tine Thybo · Boesvej 11, Boes, 8660 Skanderborg · Tlf. 86 52 41 04, fax 86 95 41 58 · www.johannesminde.dk", body: "Gårdbutik. Økologisk gård med limousine-kalve og en økologisk svinebesætning. Vi sælger alle vores limousine-kalve i gårdbutikken, samt alt det grisekød, som kunderne efterspørger. Vi er leveringsdygtige i alle udskæringer." },
          { title: "Gothenborg", sub: "Økologisk Fjerkræ og Gårdbutik · Gothenborgvej 3, 8653 Them · Tlf. 86 84 80 14, fax: 86 84 84 21 · www.gothenborg.dk", body: "Salg på gården: gårdbutik. Kolonialvarer og fjerkræ af egen avl. Desuden gaveartikler. Kostvejledning samt kurser og foredrag om madlavning og sund livsstil. Folkekøkkenaftener om vinteren.\nGårdbutikkens åbningstider: onsdag, torsdag og fredag kl. 13-17, lørdag kl. 9-12." },
          { title: "Glenlam", sub: "Steen Kornum · Glenstrupsøvej 55, Glenstrup, 8990 Fårup · Tlf. 86 45 21 62 · E-mail: skornum@city.dk", body: "Salg på gården: salg af lam og får. Hele eller halve, partering efter ønske. Laves også i pålæg. Sommersalg af moskusællinger og gæslinger samt ænder og gæs til jul. Bådudlejning i den fiskerige Glenstrup sø." },
          { title: "Holtgaard", sub: "Helge Kjær Sørensen · Gyllingnæsvej 24, Gylling, 8300 Odder · Tlf. 86 55 14 31 · www.holtgaard.dk", body: "Gårdbutik. Salg af jordbær både i bakker og pluk-selv. Desuden salg af ærter, kartofler og honning. Åben alle dage i sæsonen kl. 10-19. Sæsonstart, priser m.m. oplyses på hjemmesiden." },
          { title: "Økologiens Have", sub: "Rørthvej 132, 8300 Odder · Tlf. 24 96 30 15 · www.okologienshave.dk", body: "Stort udvalg af økologiske grøntsags-, krydderurte- og blomsterfrø. Økologiske planter af egen produktion. Bøger, pjecer, grøngødningsblandinger, fiberdug og ukrudtsdug. I perioder tilbyder vi frugttræer, læggekartofler, stikløg, jordskokker og hvidløg. I december juletræer og ænder." },
          { title: "Korsmedergaard", sub: "Svend Erik Hjuler Rasmussen · Gl. Viborgvej 210, Tånum, 8920 Randers · Tlf. 40 34 77 30 · www.korsmedergaard.dk", body: "Gårdbutik med salg af egne produkter: æg, frugt og grønt og æblesaft. Derudover et stort og alsidigt sortiment af kolonialvarer og oksekød, kalvekød, lammekød, dådyrkød, lam, ged, kylling, and og gås samt oste og vegetarprodukter. Vi har åbent alle dage kl. 10-16. Har også webshop." },
          { title: "Refshøjgaard Gårdbutik", sub: "Birgit Bak · Skanderborgvej 202, Norring (rute 115), 8382 Hinnerup · Tlf. 40 85 18 22 · www.refshoejgaard.dk", body: "Gårdbutik med salg af egne produkter, bl.a. velfærdsdelikatesser, som er kød fra små sortbrogede grise. Desuden et bredt udvalg af kolonial, frugt og grønt fra lokale og regionale virksomheder. Vi forsøger gerne at skaffe det, som efterspørges.\nDesuden et bredt udvalg i kunsthåndværk og gaveartikler, produceret af lokale, hvoraf meget er fremstillet af genbrugsmaterialer. Åbningstider: torsdag og fredag kl. 14-18, lørdag kl. 10-14. Desuden holder vi åbent på udvalgte søndage og i forbindelse med aktuelle arrangementer. Følg med på vores hjemmeside." },
          { title: "Lille Raneladegård", sub: "Janne Brændbyge og Gums Hedensted · Øervej 7, Øer, 8400 Ebeltoft · Tlf. 61 16 47 32 · www.lille-raneladegaard.dk", body: "Nyindrettet gårdbutik med gedekød, oksekød, kalvekød og svinekød af egen avl. Desuden salg af fjerkræ – ænder, gæs og kyllinger. Stort udvalg af frugt og grøntsager, herunder asparges i sæsonen. Salg af pålæg, saft, marmelade, øl, vin, spiritus, mel, olie, chokolade, ost, mælkeprodukter m.m.\nÅbent tirsdag, fredag og søndag kl. 14-18. Desuden torvesalg på torvet foran det gamle rådhus i Ebeltoft, Farmers Market, hver lørdag kl. 10-13." },
          { title: "Osteriet Hinge", sub: "Evald Vestergaard/Henrik Kanstrup · Tanghusvej 14, Nørskovlund, 8620 Kjellerup · Tlf. 87 70 41 00, fax: 87 70 41 01", body: "Gårdbutik. Ost, mælk, smør, creme fraiche og gammeldags kærnemælk af egen mælk. Ostene fremstilles af såvel varmebehandlet mælk som af rå mælk direkte fra køerne. Chokolade fra Mølle Skovly. Åbningstider tirsdage kl. 13-17 og lørdage kl. 9-12.30. Mulighed for at se gården og mejeriet." },
          { title: "Ny Lundgård Ismejeri", sub: "Randersvej 58, Hammershøj, 8830 Tjele · Tlf. 29 47 34 17 · www.nylundgaard.dk", body: "Ny Lundgård Ismejeri laver flødeis af gårdens egen mælk samt sorbetis af frugt fra lokalområdet. Isen sælges fra gårdens butik og engros til butikker, restauranter m.m." },
          { title: "Jaungyde Gårdbutik", sub: "Ole Kjærulff Davidsen · Ravnsøvej 24, Jaungyde, 8680 Ry · Tlf. 96 28 90 90 / 26 84 90 90 · www.jaungydegaardbutik.dk", body: "Fra vores gård, der ligger i smukke omgivelser ved skov og sø nær Ry, sælger vi økologisk okse- og lammekød. Også økologisk grønt og frugt. Åbent søndag kl. 14-18 eller efter aftale. Udbringning af varer hver lørdag." },
          { title: "Urtegartneriet", sub: "Kirsten og Erik Vang Nielsen · Buskhedevej 43, Kragelund, 8600 Silkeborg · Tlf. 86 86 74 30 · www.urtegartneriet.dk", body: "Planteskole med ca. 300 arter: Lægeplanter, krydderurter, duftgeranier, frø og litteratur. Besøgshave med oplysende skilte. Stalddørssalg og have har åbent hverdage kl. 10-17, mandag lukket. Lørdage, søndage og helligdage kl. 11-16 eller efter aftale.\nLukket november, december, januar og februar." }
        ]
      },
      {
        heading: "Skønne badestrande på Fyn",
        cards: [
          { title: "Føns Strand", sub: "syd for Middelfart", body: "Dejlig og indbydende sandstrand med ganske få sten. Klart og rent vand, meget børnevenligt. Plads til lidt større armbevægelser og boldspil bag stranden. Stranden har blåt flag. Toilet og kiosk ved stranden." },
          { title: "Elsehoved Strand", sub: "mellem Nyborg og Svendborg", body: "På Østfyn ligger den populære Elsehoved Strand. Kør ud mod vandet fra vejen mellem Nyborg og Svendborg. Elsehoved Strand er en glimrende strand med fint sand og børnevenlige dybder samt masser af liv i sommerhalvåret." },
          { title: "Christiansminde Strand", sub: "ved Svendborg", body: "Denne fine strand ligger i gå- og cykelafstand lige øst for Svendborg. Benyt evt. den dejlige sti langs vandet forbi roklubben. Stranden er populær og tiltrækker fra morgen til aften både børnefamilier og unge. Udsigten er vidunderlig og appellerer til picnic og grill. Vandet er dejligt, og der er en badebro, hvor det berømte veteranskib \"Helge\" lægger til. Stranden indbyder til boldspil, der findes en minigolfbane og legeplads, ligesom kiosken er berømt for meget store softice." },
          { title: "Fyns Badestrand", sub: "ved Nyborg", body: "Det er en stor, dejlig strand, der blev anlagt, da man byggede Vestbroen over Storebælt. Her er masser af lækkert, fint sand på stranden og dejlig sandbund lidt ude i vandet. I skal ikke så langt ud, før der er dybt nok til en god svømmetur. Den store vandgennemstrømning i Storebælt sørger for, at badevandet altid er rent og klart. Hvis I ikke bruger badetøj, lægger I jer på de yderste 150 meter af stranden – ud mod broen. Stranden har livreddere, som sidder i tårnene kl. 10-18 i sommerperioden." },
          { title: "Bøjden Strand", sub: "ved Faaborg", body: "Stranden ligger i forbindelse med Bøjden Strand Feriepark. Det er en smuk, hvid sandstrand, hvor man skal rigtig langt ud, inden det bliver dybt. En populær og rigtig børnevenlig strand på det sydlige Fyn." },
          { title: "Hasmark Strand", sub: "ved Otterup på Nordfyn", body: "En af Fyns bedste og mest populære badestrande. Den strækker sig flere kilometer fra Enebærodde til Bårdesø og Tørresø Strand. Her er lavt og børnevenligt vand. Et langt dige følger stranden og er en oplagt mulighed for en gåtur. Campingpladsen bagved er også meget populær. Men pas på strømmen, for der er fart på vandet på Nordfyn, hvilket giver gode bølger og frisk vand, men også behov for omtanke, når man bader." },
          { title: "Bogense Marina og søbad", sub: "i Bogense på Nordfyn", body: "Bogense by er altid et besøg værd, når sommeren er på sit højeste, og I trænger til en badetur. Man kan enten vælge badestranden til venstre for marinaen, eller man kan gå langs den nye havnefront og ende ved søbadet. Her findes flydebroer og tømmerflåder, som I kan forlyste jer med. Søbadet henvender sig til det lidt ældre publikum, men senere på aftenen er der ofte mange unge mennesker i og omkring søbadet. På stranden ved marinaen er der gode muligheder for børnefamilier. Her er der forholdsvis lavvandet på venstre side af stendigerne." },
          { title: "Ristinge Strand", sub: "Langeland", body: "På Langeland ligger den berømte Ristinge Strand, som helt givet er en af de bedste badestrande på Fyn. Berømt bl.a. for sin flotte natur med 30 meter høje klinter og desuden et velegnet sted at kigge efter fossiler. Kombiner badeturen med en anden naturoplevelse, så spændende sten kan komme hjem til samlingen eller blot beundres i bilen på vej hjem." },
          { title: "Smørmosen Strand", sub: "Thurø syd for Svendborg", body: "Der er noget for alle aldre her: ringspil, hoppepude, legeborg, klatrereb, sandkasse med gravko, petanque, stangtennis og ikke mindst en nærmest legendarisk minigolfbane! Derudover er der en kæmpe græsplæne og en lækker sandstrand. Der er buske, man kan ligge i læ af, og man kan parkere i skoven, så man ikke kommer hen til en stegende hed bil efter endt strandtur.\nSimpelthen Danmarks lækreste strand for børn og resten af familien." }
        ]
      }
    ],
    questions: [
      { type: "short", n: 1, q: "I hvilken park er der gode fiskepladser?", accept: ["dybvad søpark", "dybvad søpark (dybvad)", "dybvad", "søparken i dybvad", "dybvad sø park"] },
      { type: "short", n: 2, q: "Hvilken gårdbutik bringer varer ud om lørdagen?", accept: ["jaungyde gårdbutik", "jaungyde", "jaungyde gaardbutik", "jaungyde gårdbutik i ry"] },
      { type: "short", n: 3, q: "Hvilken gårdbutik sælger hvidløg?", accept: ["økologiens have", "okologiens have", "økologiens have i odder"] },
      { type: "short", n: 4, q: "Hvilken gårdbutik har en webshop?", accept: ["korsmedergaard", "korsmedergård", "korsmedergaard i randers"] },
      { type: "short", n: 5, q: "Ved hvilken strand er der tit livreddere om sommeren?", accept: ["fyns badestrand", "fyns badestrand ved nyborg", "fyns badestrand (nyborg)"] },
      { type: "short", n: 6, q: "Hvilken strand ligger tæt på en campingplads?", accept: ["hasmark strand", "hasmark", "hasmark strand ved otterup", "hasmark strand på nordfyn"] }
    ]
  };

  const opg2 = {
    id: "p18m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", body: "■■■■■■\nVarmrøget makrel: 1 stk., ca. 350 gram: 50 kr.\nLaksefilet, benfri, 400 gram: 99,95 kr.\nPrøv også vores populære hjemmelavede rejesalat til 9,95 kr. pr. 100 gram.\nAlt godt fra havet\nNybogade 34" },
          { title: "B – Professionel rengøring tilbydes!", body: "■■■■■■\n• Gulvvask\n• Rengøring af toiletter\n• Vinduespolering\nVi er gode til det hele! Så ring i dag og få et godt tilbud på rengøring af dit hjem eller firma.\nILH Service Tlf. 46 37 84 09" },
          { title: "C – It-café i Villesbo Kulturhus", body: "Hver onsdag kl. 14.00-16.00 hjælper frivillige med it. Fx:\n• Billedbehandling\n• E-boks\n■■■■■■\n– og meget andet…\nBare kig forbi! Villesparken 5" },
          { title: "D – Rengøringsassistent søges", body: "■■■■■■\nVi søger en stabil og erfaren rengøringsassistent til opstart hurtigst muligt.\nKontakt os pr. mail: lp@rengoering.dk\nLP Rengøring" },
          { title: "E – Lektiehjælp", body: "Børn i alderen 7-15 år tilbydes hjælp til skolearbejdet i fagene:\n• Dansk, engelsk og tysk\n• Matematik og fysik\n• Historie\n■■■■■■\nBiblioteket i Kragsted, Søndergade 31" },
          { title: "F", body: "■■■■■■\n4. juni 2018, klokken 9-15\nIndhold:\nAftørring af flader, støvsugning, vask og behandling af gulve (olie, sæbe og polish) og gode arbejdsstillinger.\nTilmelding på: www.fag-centrum.dk\nFAGSKOLEN I CENTRUM\nSteinsgade 23, 2. t.h." },
          { title: "G – Vild med dyr?", body: "Vi har mere end 200 forskellige vilde dyrearter, som man kan opleve helt tæt på.\nÅbningstider 22/5-30/7 kl. 10-17.\n■■■■■■\nRyttervej 1, 3052 Brundsby" },
          { title: "H", body: "■■■■■■\nEr du studerende eller pensionist, eller har du bare brug for at tjene lidt ekstra?\nVi har ledige ruter (aviser og reklamer) i både by- og landområder. Ring og hør nærmere!\nFLEX Distribution: Tlf. 55 57 06 18" },
          { title: "I", body: "■■■■■■\nVi har gode priser på legetøj, pleje og foder – og vores gode råd er gratis! ☺\n250 m² med det, du mangler til din kat, hund, fugl, fisk eller gnaver.\nGratis parkering lige ved døren.\nKIPOWA\nSdr. Alle 23" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Fisk og skaldyr.", answer: "A", example: true },
          { n: 7, text: "Alt til kæledyr.", answer: "I" },
          { n: 8, text: "Oprettelse af e-mail.", answer: "C" },
          { n: 9, text: "Friske bude søges.", answer: "H" },
          { n: 10, text: "Kursus i basis-rengøring.", answer: "F" },
          { n: 11, text: "Støvsugning.", answer: "B" },
          { n: 12, text: "Vi ses i Børnenes Zoo!", answer: "G" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p18m-3", group: G, real: true,
    title: "Opgave 3 – Søren får sin cykel igen",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Søren Olsen cykler til og fra arbejde hver dag. Han cykler også meget i sin fritid, og han har [[0]] købt en ny cykel, som han er rigtig glad for.

En dag skal Søren på biblioteket, og han tager selvfølgelig cyklen derhen. Han parkerer den udenfor og går ind på biblioteket. Søren skal bare aflevere nogle bøger, så han er der [[13]] i et kort øjeblik. Da han kommer ud, er hans cykel væk. Søren bliver meget [[14]]. Han kan simpelthen ikke forstå, at nogen kan finde på at tage andres ting.

Søren skal selvfølgelig have en anden cykel, men denne gang vil han [[15]] købe en helt ny. Han vil købe en brugt, [[16]] tyve er normalt ikke så interesserede i at stjæle gamle cykler. Søren kigger efter en brugt cykel på nettet. Pludselig ser han en annonce med et billede af en cykel, der ligner den, han har fået stjålet. Han ringer til den kvinde, der vil [[17]] cyklen, og de aftaler, at han kan komme og se den næste dag. Søren tager hjem til kvinden, og han kan straks se, at det er den cykel, han har fået stjålet. Cyklen har [[18]] en meget speciel ringeklokke og en saddel, som er gået lidt i stykker i siden. Søren har lyst til at tage sin cykel, [[19]] det gør han ikke. I stedet siger han til kvinden, at han ikke er interesseret i at købe den. Så siger han farvel og tager på politistationen og fortæller, hvor hans cykel er. Et par dage efter ringer politiet til Søren og siger, at han kan [[20]] sin cykel hos dem.`,
    questions: [
      {
        type: "gaps",
        bank: ["lige", "aflevere", "rolig", "ikke", "tilfreds", "nemlig", "for", "hente", "glad", "men", "sælge", "kun", "købe", "vred"].map(w => ({ key: w, text: w })),
        example: { 0: "lige" },
        answers: { 13: "kun", 14: "vred", 15: "ikke", 16: "for", 17: "sælge", 18: "nemlig", 19: "men", 20: "hente" }
      }
    ]
  };

  const opg4 = {
    id: "p18m-4", group: G, real: true,
    title: "Opgave 4 – Frivillig brandmand",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Jakob er ansat i et fitnesscenter, men han laver også frivilligt arbejde ved siden af. Han er frivillig brandmand.

**0.** Jakob er 28 år og bor i Kalundborg. Han arbejder på fuld tid som instruktør i et fitnesscenter. Men han arbejder også som frivillig brandmand. Og det er der en del andre i Kalundborg, der også gør. [[0]]. For nogle gange brænder det flere steder på en gang, og så er der ikke fastansatte brandmænd nok til at klare opgaverne. Derfor er de frivillige vigtige.

**21.** På Vestsjælland, hvor Jakob bor, er der 135 frivillige brandmænd. De arbejder til dagligt inden for meget forskellige fag som bl.a. buschauffører, pædagoger og tjenere. [[21]]. De synes alle sammen, at det er en vigtig opgave at være frivillig brandmand, og de er klar til at hjælpe andre mennesker og redde liv, når der er brug for det.

**22.** For at arbejde som brandmand skal man være mindst 18 år, og man skal være i god fysisk form. Man skal nemlig tit bære tunge ting og samtidig bevæge sig hurtigt, mens man har hjelm og uniform på. [[22]]. For det er vigtigt, at man ikke bliver nervøs i farlige og stressende situationer. Og så skal man også være god til at samarbejde.

**23.** Inden Jakob kunne starte som frivillig brandmand, skulle han tage et kursus. Lige efter han var færdig med kurset, hjalp han mest med at holde vandslangerne og andre nemme opgaver. Men nu har han fået erfaring med flere forskellige slags opgaver. [[23]]. Han kan fx gå ind i brændende huse og hjælpe med at kontrollere og slukke branden.

**24.** Jakob har en aftale med sin chef i fitnesscentret om, at han må gå fra sit arbejde med det samme, hvis det brænder et sted i byen. Når der er brand, får Jakob en sms på sin mobiltelefon. Så har han cirka fem minutter til at komme hen til brandstationen. [[24]]. For fitnesscentret ligger lige ved siden af brandstationen, så han kan sagtens komme hurtigt frem.

**25.** Brandmændene skal klare mange forskellige situationer, og det er ikke kun, når der er ild i et hus, at de kører af sted i brandbilen. [[25]]. Fx kan det ske, at en person ringer, fordi en kat er kommet så højt op i et træ, at den ikke selv kan komme ned igen. Så kommer Jakob og hans kolleger. De bruger den lange stige, de har på brandbilen, til at kravle op til katten og hente den ned igen.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Og der er brug for dem." },
          { key: "B", text: "Det er somme tider svært for ham at nå." },
          { key: "C", text: "De har også mindre opgaver." },
          { key: "D", text: "Men en brandmand skal også være psykisk stærk." },
          { key: "E", text: "For det skal de passe på med." },
          { key: "F", text: "Men det kan han nemt nå." },
          { key: "G", text: "Men de har noget til fælles." },
          { key: "H", text: "Og han kan også klare de meget farlige." }
        ],
        example: { 0: "A" },
        answers: { 21: "G", 22: "D", 23: "H", 24: "F", 25: "C" }
      }
    ]
  };

  const opg5 = {
    id: "p18m-5", group: G, real: true,
    title: "Opgave 5 – Interview med Habib",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Habib – bager med egen butik",
        cards: [
          { title: "A", sub: "Eksempel", body: "Allerede da jeg var lille, kunne jeg godt lide at hjælpe min mor i køkkenet. Jeg var især glad for at lave brød og kager. Og jeg elsker stadig at arbejde med mine hænder og bage brød og dekorere kager. Så jeg har faktisk altid vidst, at det var det, jeg ville arbejde med." },
          { title: "B", body: "Det ved jeg ikke helt, men måske nogle af de kager, som jeg ikke bager hver dag. Så det er nok bryllupskager. For dem har jeg mulighed for rigtig at dekorere flot. Og det er dejligt, når kunderne bliver glade for den kage, som de har bestilt til deres store dag." },
          { title: "C", body: "Ja, selvfølgelig. Mindst én om dagen. Jeg er jo bager, og en bager skal smage på de varer, han sælger i sin butik, synes jeg. Og jeg elsker bare søde sager! Det kan man også godt se på mig, jeg har en stor mave! Min kone har tit sagt, at jeg skal tabe mig, men det er altså ikke så let, når man er bager." },
          { title: "D", body: "Nej, jeg synes, de passer fint til mit liv. Jeg skal selvfølgelig op midt om natten, men så er jeg også hjemme igen omkring frokost. Der sover jeg altid i et par timer, og så er jeg frisk, når mine børn kommer hjem fra skole. Det betyder meget for mig." },
          { title: "E", body: "Alle slags! Men selvfølgelig mest nogle, der bor eller arbejder her på Østerbro. Nogle af dem kommer hver dag og andre et par gange om ugen. Mange af dem har købt brød hos mig i flere år, så dem kender jeg efterhånden rigtig godt. Det er hyggeligt." },
          { title: "F", body: "Nej, det gør jeg faktisk ikke. Når børnene eller min kone har fødselsdag, laver jeg selvfølgelig en flot og lækker kage til dem, men til hverdag tager jeg mest bare brød og kager med fra butikken. For selvom jeg elsker at bage, kan jeg altså også godt lide at holde fri." },
          { title: "G", body: "Ja, dem er jeg ikke så glad for. Måske fordi jeg ikke er særlig god til tal. Men det er min kone heldigvis! Så hun ordner altid alle regnskaberne for mig. Det er godt, for så kan jeg koncentrere mig om at bage nogle gode brød og kager." },
          { title: "H", body: "Mange forskellige. Både lyse og mørke, med og uden kerner og nødder. Kunderne skal jo gerne have noget forskelligt at vælge imellem. Jeg er også lige begyndt at lave nogle lækre flutes med arabiske krydderier. De er ret populære." }
        ]
      }
    ],
    note: "Habib kommer fra Tunesien, og han har haft sin egen bagerbutik på Østerbro i København i 20 år.",
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor er du blevet bager?", answer: "A", example: true },
          { n: 26, text: "Spiser du selv mange kager?", answer: "C" },
          { n: 27, text: "Hvad slags brød bager du?", answer: "H" },
          { n: 28, text: "Bager du også derhjemme?", answer: "F" },
          { n: 29, text: "Hvad kan du bedst lide at lave?", answer: "B" },
          { n: 30, text: "Er dine arbejdstider et problem?", answer: "D" }
        ]
      }
    ]
  };

  // Real sets newest first: … nov.-dec. 2018, maj-juni 2018, maj-juni 2017 …
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 maj-juni 2017");
  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(at >= 0 ? at : (fallback < 0 ? PD2.READING.length : fallback), 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling maj-juni 2018 ----------
  let before = PD2.WRITING.findIndex(w => w.year === 2017);
  if (before < 0) before = PD2.WRITING.findIndex(w => w.year === 2016);
  PD2.WRITING.splice(before < 0 ? PD2.WRITING.length : before, 0,
    {
      id: "w18ma", delprove: 1, real: true, year: 2018,
      title: "A: Et takkebrev efter praktik i en kantine (maj 2018)",
      kind: "Prøveopgave · takkebrev efter praktik",
      minWords: 80, maxWords: 150,
      situation: "Du er lige blevet færdig med din praktik i en kantine. Du vil skrive et takkebrev til dine kolleger i kantinen. Skriv takkebrevet. Du skal begynde og afslutte takkebrevet på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Tak for en god praktik", "Fortæl, hvad du synes, du har lært i din praktik", "Fortæl, hvorfor du vil savne dine kolleger", "Fortæl lidt om, hvad du skal lave nu"],
      phrases: ["Kære alle i …", "Tusind tak for en god praktik.", "Jeg har lært at …", "Jeg kommer til at savne jer, fordi …", "Nu skal jeg …", "Endnu en gang tusind tak for alt."],
      model: `Kære alle i kantinen på Rådhuset

Tusind tak for en rigtig god praktik hos jer. Jeg har været så glad for mine ti uger i kantinen.

Jeg har lært at lave mad til mange mennesker på én gang, og jeg har lært meget om hygiejne i et stort køkken. Jeg har også lært mange nye danske ord, fordi vi snakkede så meget sammen.

Jeg kommer til at savne jer, fordi I altid var søde og hjælpsomme. I tog godt imod mig fra den første dag, og vi grinede meget sammen, mens vi lavede mad.

Nu skal jeg begynde på en uddannelse som ernæringsassistent i august. Jeg vil gerne komme på besøg og spise frokost i kantinen en dag.

Endnu en gang tusind tak for alt. Jeg håber, at vi ses snart!

Mange hilsner
Amina`
    },
    {
      id: "w18mb", delprove: 1, real: true, year: 2018,
      title: "B: Et opslag om et loppemarked på sprogskolen (maj 2018)",
      kind: "Prøveopgave · opslag på sprogskolen",
      minWords: 80, maxWords: 150,
      situation: "Du og dine klassekammerater vil holde et loppemarked på sprogskolen. I har derfor indsamlet en masse ting til loppemarkedet. I mangler nogle personer til at hjælpe jer. Du vil skrive et opslag til at hænge op på skolen. Skriv opslaget. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvornår og hvor loppemarkedet skal holdes", "Lidt om, hvilke ting I sælger på loppemarkedet", "Hvad pengene fra loppemarkedet skal bruges til", "Hvad I mangler hjælpere til, og hvem man skal kontakte, hvis man gerne vil hjælpe til"],
      phrases: ["Hjælpere søges til loppemarked!", "Loppemarkedet bliver …", "Vi sælger fx …", "Pengene skal bruges til …", "Vi mangler hjælpere til at …", "Hvis du vil hjælpe til, så …"],
      model: `Hjælpere søges til loppemarked!

Hej alle sammen

Jeg hedder Mina, og jeg skriver, fordi vi på hold 4B vil holde et loppemarked her på sprogskolen. Loppemarkedet bliver lørdag den 9. juni kl. 10-15 i skolegården.

Vi har samlet en masse ting ind. Vi sælger fx tøj, bøger, legetøj, lamper og køkkenting. Alt er billigt, og de fleste ting koster mellem 5 og 50 kr.

Pengene fra loppemarkedet skal bruges til en udflugt for alle kursister på skolen. Vi vil gerne tage til Den Gamle By i Aarhus.

Vi mangler hjælpere til at stille borde op om morgenen, sælge ting og rydde op bagefter. Vi mangler også nogen, der kan bage kager til caféen.

Hvis du vil hjælpe til, så ring eller skriv til mig på 28 64 19 37 senest fredag den 1. juni.

På forhånd tak!

Mange hilsner
Mina, hold 4B`
    },
    {
      id: "w18mc", delprove: 2, real: true, year: 2018,
      title: "En e-mail om problemer med at bo sammen (maj 2018)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Morten. I e-mailen skriver han bl.a.: \"… Du skriver, at du er flyttet i lejlighed og bor sammen med to venner. Du skriver også, at du er glad for lejligheden, men at I somme tider har nogle problemer med at bo sammen. Hvad er det for nogle problemer, I har? …\" Skriv et svar til Morten og fortæl om, hvad det er for nogle problemer, I har med at bo sammen. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvem du bor sammen med, og hvordan lejligheden er", "Forklar, hvad det er for nogle problemer, I har", "Fortæl, hvordan du har det med problemerne", "Fortæl, hvad I gør for at løse problemerne"],
      phrases: ["Hej Morten", "Tak for din mail.", "Jeg bor sammen med …", "Problemet er, at …", "Det irriterer mig, når …", "Vi har aftalt at …"],
      model: `Hej Morten

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om de problemer, vi har med at bo sammen, og det vil jeg gerne fortælle dig lidt om.

For det første bor jeg sammen med mine venner Jonas og Sara i en stor lejlighed med tre værelser. Vi er ikke altid enige om rengøringen. Jeg gør tit rent i køkkenet og på badeværelset, men de to andre glemmer det. Så står der beskidt service i vasken i flere dage.

Derudover holder Jonas tit fester i weekenden, selvom jeg skal tidligt på arbejde om lørdagen. Det er svært at sove, når musikken spiller højt, og det irriterer mig meget.

Til sidst vil jeg sige, at jeg stadig er glad for lejligheden og for mine venner. Vi har aftalt at holde et husmøde hver søndag, og vi har lavet en rengøringsplan. Jeg håber, at det hjælper.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Karim`
    }
  );
})();
