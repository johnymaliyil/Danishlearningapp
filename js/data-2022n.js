// Prøve i Dansk 2, november-december 2022 – transcribed from the exam papers (produktionsnr. 07-11 and 13).
// Included: læseforståelse opgave 1-5, skriftlig fremstilling (delprøve 1 A/B and delprøve 2)
// and the oral topics for mundtlig delprøve 2 (At købe nyt eller brugt, Børn og forældre,
// At have danske venner) with the examiner's questions and the pictures (illustrations by
// Niels Roland, cropped from the picture sheets; the second picture for "At have danske venner"
// is missing from the supplied picture sheets and is taken from the small copy on the
// examiner's sheet). Delprøve 1 of the oral exam is a topic the candidate chooses, so there
// are no monologue topics for this session.
// The answers to opgave 1-5 are the official ones from the censor- og eksaminatorhæfte
// (rettenøgler), with the forcensur comments of 21.11.2022 applied (in opgave 1, item 1-5,
// an answer that also gives the address is accepted); the short-answer accept lists add
// reasonable variants.
// The model answers for skriftlig fremstilling are our own (the paper has none). Following the
// forcensur, the review (opgave A) may be written as a recommendation, so it uses that frame.

(function () {
  const G = "PD2 nov.-dec. 2022";

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
    id: "p22n-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilken strand er handicapvenlig?\" – Dronningmølle Strand.",
    sections: [
      {
        heading: "Strande i Nordsjælland",
        cards: [
          { title: "Dronningmølle Strand", sub: "Dronningmølle Strandvej, 3120 Dronningmølle", body: "Dronningmølle Strand er en af nordkystens bedste og mest besøgte strande. Den er børne- og handicapvenlig i den østre ende og bemandet med to livredderposter i sæsonen. Naturlige forhold har dannet en skøn bred sandstrand med lave klitter, og vandet bliver kun langsomt dybt. Stranden er derfor meget børnevenlig, ofte med lavvandede små indsøer og pools, hvor de små kan pjaske i det lune vand, bygge sandslotte og grave kanaler – selvfølgelig under forældrenes opmærksomme opsyn! Ved Villingebæk er der parkeringsplads. Der er kørestolsrampe fra strandvejen og helt ned til vandkanten, og der er toiletter med handicaptoilet." },
          { title: "Hornbæk Strand", sub: "Hornbæk Strand, 3100 Hornbæk", body: "Hornbæk er en af nordkystens mest populære badebyer, og det skyldes især den kilometerlange hvide sandstrand. Hornbæk Strand er en bred sandstrand med finkornet sand, god vandkvalitet, beskyttende klitter og sikre badeforhold for både børn og voksne, og så er stranden bemandet med to livredderposter hele sommeren. Det lave, krystalklare vand er især attraktivt for børnefamilier, som også kan slippe børnene løs på strandlegepladsen. Her kan de gynge, klatre, lege kaptajn på eget skib og meget andet. Legepladsen har for nylig fået en ny beboer: sælen Luffe, som er lavet af træ – og lige til at klatre på. I juli og august er der hver onsdag spændende aktiviteter for børn. Midt på stranden finder man Café Sunspot, som har åbent alle dage i sommersæsonen og byder på is, pølser, sandwich, snacks, vand, øl, vin, drinks, kaffe-to-go og meget andet." },
          { title: "Gilleleje Veststrand", sub: "Feilbergsvej 10, 3250 Gilleleje", body: "Et besøg på Gilleleje Veststrand er meget mere end en strandtur. Kun 100 m til shopping, lækre restauranter, ishuse, caféer og den autentiske fiskerby. Gilleleje Veststrand er en bred sandstrand på cirka 20 m i bredden og 350 m i længden. Stranden har tilmed det blå flag. Det sikrer kvaliteten af badevand, miljø og faciliteter. Lad børnene lege på naturlegepladsen med den skønneste udsigt, eller nyd et måltid med frisk fisk på en af byens mange restauranter. Der er parkering tæt ved stranden for enden af Feilbergsvej. I skolernes sommerferie er der livreddere på stranden kl. 10.00-18.00. Der er badebro og adgang til toiletter ved stranden." },
          { title: "Rågeleje Strand", sub: "Rågeleje Strandvej 91, 3210 Vejby", body: "Når du følger strandvejen i Nordsjælland, drejer den pludselig helt ud til vandet. Så er du kommet til Rågeleje. Det mest kendte ved Rågeleje Strand må være de ikoniske, stribede badehuse. De er private, men hyggelige at gå forbi og tage billeder af, når du er på stranden om sommeren. Hop i vandet på en varm dag, eller gå en lang tur med vinden i håret om efteråret. I sommersæsonen er ishusene åbne, så du kan spadsere langs strandpromenaden med en forfriskning. I højsæsonen kan du bade sikkert på Rågeleje Strand. Der er nemlig livreddere på stranden, der holder øje. Glem dog ikke, at du selv har ansvar for at passe godt på dig selv, dem du kender, og dem du ikke kender." },
          { title: "Nødebo Huse Strand", sub: "Nødebovejen 2, 3390 Hundested", body: "Rolig børnevenlig strand med fint strandsand og en god trappe, der giver nem adgang til stranden. Nødebo Huse Strand ligger på nordkysten og skiller sig ud fra mængden ved at være en rolig og ikke så besøgt strand i Nordsjælland. Hvidt sand, skønt vand, meget børnevenlig og med mulighed for at have en lidt mere privat strandtur. Stranden ligger i sommerhusområdet mellem Hundested og Liseleje. Her er roligt og hyggeligt. Der er gode parkeringsforhold og toilet i nærheden." },
          { title: "Strandbakkerne", sub: "Strandbakkerne, 3250 Gilleleje", body: "Strandbakkerne er en bynær sandstrand i naturskønne omgivelser ca. 1 km øst for Gilleleje Havn. Stranden har livredningstjeneste i sommerferien. Det lave vand gør stranden børnevenlig. Strandbakkerne ligger i et ret bakket område og er derfor ikke så handicapvenlig." }
        ]
      },
      {
        heading: "Brunchsteder i Odense",
        cards: [
          { title: "Café Vivaldi", sub: "Vestergade 33", body: "For små tre uger siden åbnede den kæmpestore Café Vivaldi i Vestergade, som har plads til hele 400 gæster ad gangen. Her serverer de hver weekend kl. 10-13 en stor, lækker brunchbuffet.\nBuffeten består af alle de klassiske brunchretter som røræg, bacon, pølser, skyr med en masse forskellige toppings, tunmousse, paneret kylling og frugt, og der er også lidt til den søde tand i form af kager og pandekager. Du kan desuden vælge imellem en masse forskelligt brød og knækbrød." },
          { title: "Café Fleuri", sub: "Nørregade 28", body: "Set udefra gør Café Fleuri ikke meget væsen af sig, men når du træder indenfor, bliver du mødt af den hyggeligste indretning og en eksklusiv delikatesseforretning. Men det bedste af det hele må siges at være deres frodige gårdhave, hvor du om sommeren kan nyde din mad, imens du kigger på guldfiskene.\nCafé Fleuri serverer plantebaseret, økologisk og sund mad. Prøv især deres overdådige brunchtallerken. Der er glutenfri alternativer. Åben onsdag til lørdag kl. 10-18." },
          { title: "Nouvelle", sub: "Pogestræde 31A", body: "Er du træt af det sædvanlige brunchkort? Så kan det være, at du skal aflægge Nouvelle en visit. Her får du morgenmad og frokost fra tirsdag til søndag – and that’s it. Ingen aftenservering eller noget – så må du andetsteds hen.\nNouvelle kombinerer morgenmad, frokost og brunch, og det gør de faktisk ret godt. Menukortet består af en række små retter, så du selv kan sammensætte din brunch / frokost. Derudover er der en række større retter, du kan vælge, hvis du hellere vil det. Stilen er overvejende fransk med et nordisk islæt. På drikkevarefronten er der både forskellige slags kaffe, juice, sodavand, øl og vin." },
          { title: "Olivia Brasserie", sub: "Vintapperstræde 37", body: "Olivia Brasserie – eller bare ’Olivia’ – er placeret i det hyggelige Vintapperstræde, som hver sommer emmer af liv og glade dage. Restaurantens autentiske indretning giver associationer til brasserierne i Paris’ gader, og her nyder du din mad i uformelle omgivelser, imens det servicemindede personale sørger for dig.\nHos Olivia kan du om søndagen nyde en stor brunchbuffet, og alle andre dage kan du vælge imellem to forskellige brunchtallerkener eller sammensætte din egen ud fra en masse små retter. På den måde er du sikker på, at du får lige præcis den brunch, du ønsker." },
          { title: "Café Biografen", sub: "Brandts Passage 39-41", body: "Hos Café Biografen i den hyggelige Brandts Passage kan du slå to fluer med ét smæk og starte dagen med en lækker brunchbuffet efterfulgt af en biograffilm. Brunchbuffeten hos Café Biografen serveres hver lørdag kl. 10-14, og den består af et stort udvalg af forskellige varme og kolde retter – fra de mere traditionelle til de lidt anderledes, tapaslignende retter." },
          { title: "Café Cuckoo’s Nest", sub: "Vestergade 73", body: "Café Cuckoo’s Nest har for nylig fået nye ejere, som vil have den kendte Odense-café tilbage til sin storhedstid. Men der serveres stadig brunchbuffet hver lørdag og søndag kl. 10-14. Buffeten består af røræg, pølser, bacon, salater, pålæg, frisk frugt og et kæmpe udvalg af lækre kager i form af f.eks. donuts, macarons og muffins.\nCuckoo’s Nest har efter en måneds prøveperiode besluttet, at de fremover vil køre med en fast studierabat på 25 procent." },
          { title: "Eydes Gastro Pub", sub: "Kongensgade 31A", body: "Odense-kendingen Eydes Gastro Pub i Kongensgade – eller bare ’Eydes’, som man kalder den i Odense – er indbegrebet af hygge. Med inspiration fra en klassisk engelsk pub, dæmpet belysning og små intime båse føler man sig med det samme hjemme. Eydes er kendt for sin lækre og varierede brunchbuffet, der serveres alle ugens dage kl. 9-14.30. Buffeten består af klassiske brunchspecialiteter som f.eks. æg, bacon, pølser og lune pandekager. Derudover tilbyder buffeten også forskellige frokostretter som tunsalat og tarteletter. Desuden varierer buffetens udvalg fra dag til dag, så du altid kan smage noget nyt, når du kommer." },
          { title: "Marcello’s", sub: "Kongensgade 10", body: "For ca. halvandet år siden åbnede den hyggelige café Marcello’s i Kongensgade i Odense, og den er hurtigt blevet kendt for sin gode studierabat. Du får nemlig hele 25 procent i rabat, hvis du kan fremvise et gyldigt studiekort.\nPå Marcello’s kan du hver lørdag og søndag kl. 9.30-13 nyde en stor brunchbuffet med alle de klassiske brunchretter som f.eks. røræg, bacon, brunchpølser og yoghurt.\nBuffeten rummer også et stort udvalg af frisk frugt i flotte udskæringer og mange forskellige slags kager." },
          { title: "Restaurant Nordatlanten", sub: "Nordatlantisk Promenade 1", body: "Restaurant Nordatlanten på Nordatlantisk Promenade serverer hver lørdag og søndag kl. 10-15 en overdådig brunchbuffet, som bestemt ikke mangler noget. Det hele serveres som små lækre anretninger, og du kan få alle de traditionelle brunchretter som æg, bacon og pølser. Men du kan også nyde mere luksuriøse specialiteter som f.eks. andesalat og paté med syltede gule beder samt hjemmelavet nutella, marmelade, smoothie og bitter. Restaurant Nordatlanten er en del af Det Nordatlantiske Hus på Odense Havn. Her kan du nyde din mad, imens du kigger ud over vandet. Du kan også se på udstillinger om og fra de nordatlantiske lande eller tage et kig ind i husets butik, som byder på design, tøj og smykker fra de nordatlantiske lande." },
          { title: "Restaurant Under Lindetræet", sub: "Ramsherred 2", body: "Restaurant Under Lindetræet byder hver lørdag og søndag kl. 10-14 på brunch i Odense i nogle af de smukkeste rammer, som Odense har at byde på. Restauranten ligger med udsigt til H.C. Andersens Hus og ikke mere end få minutters gang fra gågaden.\nBrunchen består af 4 serveringer sammensat af alle de fortræffeligheder, som et brunchmåltid med de bedste råvarer fra Fyn kan byde på.\nOplevelsen spænder over alt fra yoghurt med mysli til et fynsk morgenbord, der følges op af en lun servering og slutteligt afrundes med årstidens hjemmebagte kage. Restauranten imødekommer de fleste allergier og andre fødevarerestriktioner, så længe restauranten er informeret på forhånd." },
          { title: "Dalle Valle", sub: "Fisketorvet 2", body: "Hos Dalle Valle på Fisketorvet i Odense kan du nyde en stor brunchbuffet alle ugens dage kl. 10-16. Hele februar måned serverer Dalle Valle i Odense buffeten til halv pris. Du finder nok ikke en meget billigere brunch i Odense.\nDen store brunch- og frokostbuffet består af alt fra røræg, bacon og pølser til lidt mere frokostprægede retter som fisk, pastaretter og forskellige slags kartofler og salater." },
          { title: "Froggys Café", sub: "Vestergade 68", body: "Hver lørdag, søndag og på helligdage serverer Froggys Café en brunchbuffet fyldt med lækkerier kl. 9.30-15.\nBuffeten består af alle de traditionelle brunchretter som f.eks. røræg, bacon, pølser, rørt yoghurt med hjemmelavet nøddemysli, friskskåret frugt, pandekager med ahornsirup og naturligvis brød og smør. Men du kan også smage en masse små, tapaslignende retter." }
        ]
      },
      {
        heading: "Legepladser i Aarhus",
        cards: [
          { title: "Mindeparkens legeplads", sub: "Kongevejen", body: "Lidt uden for midtbyen finder man den skønne Mindepark. Omkranset af skov, med udsigt ud over Aarhus Bugt og med Marselisborg Slot som nabo er det et sandt paradis for hele familien. En gangbro snor sig igennem legepladsen, der har klatre- og gyngestativer, rutsjebaner og legetårne. Belægningen omkring legetårnene og rutsjebanerne er lavet af blødt gummi. Ved siden af legepladsen er der et stort udendørs fitnessområde, og det store grønne område er oplagt til boldspil. Der er toiletter i parken samt en kiosk, der bl.a. sælger is og kaffe." },
          { title: "Legepladsen Kloden", sub: "Hack Kampmanns Plads 2", body: "På Dokk1 finder du den spektakulære legeplads Kloden. Den er opført på det store udendørs dæk, der omkranser Dokk1 syv meter over jorden, hvilket gør den til en helt unik oplevelse for både store og små. Legepladsen hedder Kloden, fordi de fem legeområder, der er placeret rundt om huset, hver repræsenterer en bestemt verdensdel. Så tag på en jordomrejse, hvor leg krydres med fortællinger og sjove facts. Prøv de vippende isflager, tag en tur i abeland eller kravl op i den seks meter høje bjørn, og nyd udsigten på vej ned ad rutsjebanen. I udformningen af legepladsen er der desuden lagt vægt på at give børn med særlige behov eller handicap mulighed for at være en del af legen. Indenfor finder man en skøn café, hvor man bl.a. kan købe frokost eller kaffe, som kan nydes ved de udendørs borde og bænke." },
          { title: "Frederiksbjerg Byparks legeplads", sub: "Læssøesgade", body: "Mellem Ankersgade og Læssøesgade finder man oasen Frederiksbjerg Bypark. Den skønne legeplads byder på en kæmpe sandkasse, hvor der altid er redskaber til at mikse en lækker sandkage sammen. Der er desuden et stort legetårn med rutsjebane, vipper og karusseller. Ved siden af legepladsen finder man et kæmpe klatrestativ til både store og små børn. Imens ungerne hygger sig på legepladsen, kan far og mor give den gas på den udendørs fitnessplads. I byparken finder man desuden skønne byhaver med en gratis smagshave, som alle må benytte, ligesom man må tage for sig af æblerne fra havens mange forskellige æbletræer. Der er rigeligt med borde og bænke, hvor madpakken kan nydes." },
          { title: "Børnenes Jord", sub: "Thunøgade 2A", body: "Midt i det hyggelige Øgade-kvarter finder man en lille oase, hvor børn i alderen 10-17 år kan komme helt tæt på naturen. I åbningstiden er der ansatte pædagoger på legepladsen, som står for at lede aktiviteterne. Børnene kan fx være med til at passe stedets geder, kaniner, høns og fugle. Den store naturgrund med en masse planter og legemuligheder venter nærmest bare på at blive indtaget af fantasifulde børn, der er klar til fysisk udfoldelse. Skulle det regne, er der indenfor blandt andet et træværksted, billardborde og lektierum. Børnenes Jord er også superseje til at lave løbende events for børnefamilier – fx fastelavn, plantedage, snobrødsbagning og kagebagning." },
          { title: "N.J. Fjordsgades legeplads", sub: "N. J. Fjords Gade 2", body: "Ved siden af Frederiksbjerg Idrætscenter på Ingerslevs Boulevard og bag den gamle N.J. Fjordsgades Skole finder man en fin, men lidt gemt legeplads. Her er både fugleredegynger, balancebaner og snurrestænger. Ved siden af legepladsen ligger multibanerne, hvor man kan spille fodbold. Legepladsen ligger i omgivelser, som er perfekte til, at ungerne kan give den fuld gas med løbehjul og cykel. Desuden ligger kaffebaren Go’ Kaffe på Ingerslevs Boulevard, hvilket gør stedet endnu mere attraktivt for mor og far." },
          { title: "Skanseparkens legeplads", sub: "Marselisborg Allé 1", body: "Ikke langt fra Bruuns Galleri ligger Skanseparken, en stor park fyldt med gamle træer og en dejlig legeplads. Her er både gynger, klatrenet og rutsjebane. Den store park indbyder til boldspil, og stierne rundt om parken lægger op til cykelløb. En skøn og bynær legeplads for børn i alle aldre." }
        ]
      }
    ],
    questions: [
      { type: "short", n: 1, q: "På hvilke to strande er der en legeplads?", accept: ["gilleleje veststrand og hornbæk strand"].concat(both(["gilleleje veststrand", "gilleleje", "gilleleje vest strand", "gilleleje veststrand, feilbergsvej 10, 3250 gilleleje", "gilleleje veststrand (feilbergsvej 10, 3250 gilleleje)", "gilleleje, feilbergsvej 10, 3250 gilleleje", "gilleleje veststrand, feilbergsvej 10"], ["hornbæk strand", "hornbæk", "hornbaek strand", "hornbæk strand, 3100 hornbæk", "hornbæk strand (3100 hornbæk)", "hornbæk, 3100 hornbæk"])) },
      { type: "short", n: 2, q: "Hvilke to brunchsteder har brunchbuffet alle dage?", accept: ["eydes gastro pub og dalle valle"].concat(both(["eydes gastro pub", "eydes", "eydes gastropub", "eyde's gastro pub", "eydes gastro pub, kongensgade 31a", "eydes gastro pub (kongensgade 31a)", "eydes, kongensgade 31a"], ["dalle valle", "dallevalle", "dalle valle, fisketorvet 2", "dalle valle (fisketorvet 2)"])) },
      { type: "short", n: 3, q: "På hvilket brunchsted kan man kun få brunchbuffet om lørdagen?", accept: ["café biografen", "cafe biografen", "biografen", "café biografen, brandts passage 39-41", "cafe biografen, brandts passage 39-41", "biografen, brandts passage 39-41", "café biografen (brandts passage 39-41)", "café biografen i brandts passage"] },
      { type: "short", n: 4, q: "På hvilke to brunchsteder kan man få studierabat?", accept: ["café cuckoo’s nest og marcello’s"].concat(both(["café cuckoo’s nest", "cafe cuckoo's nest", "cuckoo’s nest", "cuckoos nest", "café cuckoos nest", "cafe cuckoos nest", "café cuckoo’s nest, vestergade 73", "cuckoo’s nest, vestergade 73", "café cuckoo’s nest (vestergade 73)"], ["marcello’s", "marcellos", "marcello’s, kongensgade 10", "marcellos, kongensgade 10", "marcello’s (kongensgade 10)"])) },
      { type: "short", n: 5, q: "Hvilket brunchsted har en gårdhave?", accept: ["café fleuri", "cafe fleuri", "fleuri", "café fleuri, nørregade 28", "cafe fleuri, nørregade 28", "fleuri, nørregade 28", "café fleuri (nørregade 28)"] },
      { type: "short", n: 6, q: "På hvilken legeplads kan børnene passe dyr?", accept: ["børnenes jord", "boernenes jord", "legepladsen børnenes jord", "børnenes jord i aarhus", "børnenes jord (øgade-kvarteret)"] }
    ]
  };

  const opg2 = {
    id: "p22n-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Klargøring til syn", sub: "Eksempel", body: "Gratis synskontrol af din bil\ninkl. liste over nødvendige reparationer.\nBook en tid nu på www.auto-bixen.dk\n■■■■■■" },
          { title: "B", body: "■■■■■■\nDepotrum fra 1,5 m² til 15 m².\n• Tør og sikker opbevaring\n• Videoovervågning og alarm i alle rum\n• Adgang døgnet rundt\nPriser fra 129 kr. om måneden.\nCentrum-Depot, Brogade 42\nwww.centrum-depot.dk" },
          { title: "C", body: "■■■■■■\nSå tilmeld dig et spændende kursus torsdag d. 24. november kl. 19-22.\nVælg mellem: Surdejsbrød, Knækbrød eller Kager til fester.\nPris: 350 kr. pr. deltager (inkl. råvarer).\nMax. 6 deltagere pr. hold.\nMadskolen.dk" },
          { title: "D", body: "■■■■■■\nLej et af vores hyggelige lokaler til dit arrangement. Der er plads til middag for op til 60 personer. Adgang til køkken med 4 store køleskabe, industrikomfur og opvaskemaskine.\nMulighed for leje af musikanlæg.\nBook i god tid på:\nwww.lokale-lokaler.dk" },
          { title: "E", body: "■■■■■■\nLær at sy en festkjole\nSted: Sisby Skole\nTid: lørdag d. 26/11 + søndag d. 27/11 kl. 9-16\nPris: 625 kr. (inkl. sandwich begge dage)\nUnderviser: Beate Sølvholm\nMedbring stof og øvrigt materiale til din kjole.\nTilmelding hos Beate på tlf. 66 80 43 21" },
          { title: "F – Vi bager til hverdag og fest", body: "Frisk morgenbrød, rugbrød og lækre kager.\nNyhed: Bliv fri for kø og ventetid! Bestil og betal online, så er din bestilling klar i butikken, når du kommer.\n■■■■■■\nGodt Brød, Bredgade 34\nwww.godt-broed.dk" },
          { title: "G – Køb dine dagligvarer på nettet", body: "Nyt online supermarked med stort udvalg af økologiske varer.\n■■■■■■\nVi bringer varer til døren alle ugens dage. I weekenden dog kun mellem kl. 10 og 12.\nBestil dine varer nemt og hurtigt via vores hjemmeside:\nSuper-online.dk" },
          { title: "H – Midtbyens Renseri", body: "Er der rødvin på skjorten eller sovs på festkjolen?\n■■■■■■\nVi afhenter tøjet i dit hjem og garanterer levering hos dig igen efter max. 48 timer.\nwww.mb-rens.dk" },
          { title: "I – Brugt kvalitetstøj til damer købes", body: "Ryd op i dit tøjskab, og kom forbi og få et godt tilbud på det tøj, du ikke bruger mere. God pris gives.\n■■■■■■\nTøjet skal være rent og i god stand.\nLuksusgenbrug, Adelgade 3" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Mekaniker Svend Ibsen.", answer: "A", example: true },
          { n: 7, text: "Du får fx minimum 100 kr. for en festkjole.", answer: "I" },
          { n: 8, text: "Nyt weekendkursus.", answer: "E" },
          { n: 9, text: "OBS: Vi bringer ikke varer ud.", answer: "F" },
          { n: 10, text: "Vil du blive bedre til at bage?", answer: "C" },
          { n: 11, text: "Lej ekstra plads til dine ting.", answer: "B" },
          { n: 12, text: "Hold festen hos os.", answer: "D" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p22n-3", group: G, real: true,
    title: "Opgave 3 – Thomas og Leas nye hobby",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Thomas og Lea er gift, og de arbejder begge to på fuld tid. De har 3 små børn og en travl hverdag, så det er [[0]], at de laver andet end at arbejde, lave husarbejde og passe børn.

Thomas og Lea har næsten aldrig noget tid, hvor de to er alene sammen, ligesom før de fik børn, og det er de kede af. De savner at lave noget sjovt [[13]] deres børn, så de aftaler, at de vil finde en fælles hobby. En aften ser Lea et danseprogram i fjernsynet. Hun foreslår Thomas, at de begynder til dans på en danseskole, [[14]] hun synes, det kunne være dejligt at lære at danse. Men Thomas synes ikke, det er nogen god idé, for han har [[15]] været dårlig til at danse, og han har ikke lyst til at lære det nu. Men Lea vil så gerne prøve at gå til dans med Thomas, så han lover at tage med til en prøvetime på danseskolen, selvom han er lidt bange for, at det bliver [[16]] for ham, fordi han ikke kan finde ud af at danse.

Lea spørger sine forældre, om de vil passe børnene, mens hun og Thomas er til dans. De bor lige i nærheden, og de siger næsten [[17]] nej, når hun beder dem om hjælp til at passe børnene. Det gør de heldigvis heller ikke denne gang.

Thomas er [[18]], da han og Lea kommer til danseskolen, for han er usikker og har mest lyst til at tage hjem igen. Men til sin store overraskelse synes han faktisk, det er [[19]] at danse, og det betyder ikke så meget, at han ikke er god til det, fordi han hygger sig med Lea. Og da dansetimen [[20]], er han i meget bedre humør, end da han kom, for han synes, det har været en rigtig god time. Så Thomas og Lea bliver enige om, at de nu har fundet deres nye hobby.`,
    questions: [
      {
        type: "gaps",
        bank: ["sjældent", "starter", "tilfreds", "pinligt", "men", "aldrig", "uden", "altid", "sjovt", "med", "for", "slutter", "nervøs", "selvom"].map(w => ({ key: w, text: w })),
        example: { 0: "sjældent" },
        answers: { 13: "uden", 14: "for", 15: "altid", 16: "pinligt", 17: "aldrig", 18: "nervøs", 19: "sjovt", 20: "slutter" }
      }
    ]
  };

  const opg4 = {
    id: "p22n-4", group: G, real: true,
    title: "Opgave 4 – Sahils kolonihave",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Sahil er 32 år og kommer fra Indien. Til hverdag arbejder han i et dansk firma, og i fritiden er han ofte i sin kolonihave.

**0.** Sahil kom til Danmark for tre år siden, fordi han fik arbejde som ingeniør i et stort, dansk firma, og han blev hurtigt glad for kollegerne og de spændende arbejdsopgaver. [[0]]. Men det gør han ikke mere. For to år siden købte Sahil nemlig en kolonihave med et lille hus. Så nu bruger han mange timer på at hygge sig i sin kolonihave, når han ikke er på arbejde.

**21.** Den have, som Sahil har købt, ligger i en haveforening, hvor der er 86 kolonihaver, og der er små huse i alle haverne. Sahils have er ret stor, ca. 400 m², så der er masser af plads. Huset i hans have er kun 10 m², og det er et af haveforeningens mindste. [[21]]. Han går nemlig kun ind i huset, hvis han skal spise, eller det begynder at regne. For det er haven, der interesserer ham mest, så han har ikke brug for et større hus.

**22.** Sahil kan godt lide at lave mad med mange forskellige grøntsager, som han kender fra Indien, men de er somme tider svære at få fat på i Danmark. Derfor har Sahil prøvet at dyrke forskellige indiske grøntsager i sin have. [[22]]. Det er ikke alle indiske grøntsager, der kan vokse i Danmark, så Sahil har været heldig med dem, han har plantet. Nu kan han hente de fleste af de grøntsager, som han skal bruge, når han laver mad, i sin egen have.

**23.** Faktisk får Sahil mange flere grøntsager i sin have, end han kan nå at bruge selv. Det er vigtigt for ham, at grøntsagerne bliver spist, så han ikke skal smide dem ud, og han vil også gerne have, at der er andre end ham selv, der får glæde af dem. [[23]]. For Sahil har nemlig tit en pose grøntsager med på arbejde, som han deler ud af til de andre medarbejdere i firmaet. Og de synes, det er fantastisk at få friske grøntsager med hjem helt gratis.

**24.** I haveforeningen er folk meget åbne og vil gerne snakke med Sahil. Men Sahil taler ikke så godt dansk, så de taler tit engelsk til ham, fordi de synes, det er det letteste. [[24]]. For Sahil er rigtig god til engelsk, men han vil gerne blive bedre til at tale dansk. Han kan bare ikke lide at bede folk om at snakke dansk med ham. Så han siger ikke noget om det, selvom han er træt af, at de snakker engelsk til ham.

**25.** Fra oktober til marts er der ikke så meget at lave i haven. Sahil synes, det er kedeligt at være hjemme i lejligheden, så hver vinter melder han sig ind i et fitnesscenter. [[25]]. Han synes nemlig, det er rart at få motion og møde nogle mennesker, og det kan han i fitnesscenteret. Men han glæder sig selvfølgelig til, at det bliver forår, og han kan komme ud i sin have igen.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Han kedede sig bare i sin fritid." },
          { key: "B", text: "Men det gør ikke noget." },
          { key: "C", text: "Det kan godt være irriterende." },
          { key: "D", text: "Så han er begyndt at sælge dem." },
          { key: "E", text: "Og han kommer der tit." },
          { key: "F", text: "Det gør hans kolleger heldigvis." },
          { key: "G", text: "Og de er blevet store og fine." },
          { key: "H", text: "Men det er han stoppet med." }
        ],
        example: { 0: "A" },
        answers: { 21: "B", 22: "G", 23: "F", 24: "C", 25: "E" }
      }
    ]
  };

  const opg5 = {
    id: "p22n-5", group: G, real: true,
    title: "Opgave 5 – Interview med Alex",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Alex – bilforhandler",
        cards: [
          { title: "A", sub: "Eksempel", body: "Min far har haft bilforretning i mange år, og biler har altid været en del af mit liv. Jeg er uddannet mekaniker, men for et par år siden spurgte min far, om jeg ville være medejer af forretningen. Det sagde jeg ja til, for jeg synes, det er spændende at sælge biler." },
          { title: "B", body: "Det er lidt forskelligt. Nogle dage bruger jeg fx mest tid på at sælge biler og at følge med i, hvad der sker på bilmarkedet og læse om de nyeste modeller på nettet. Andre dage tager det økonomiske det meste af min tid. Og så bruger jeg faktisk også mange timer på at lave annoncer for vores forretning." },
          { title: "C", body: "Nej, egentlig ikke. Jeg har da nogle lange arbejdsdage somme tider, men sådan er det, når man har sit eget firma. Og når man godt kan lide det, man laver, betyder det ikke så meget. Min far har det på samme måde. Han elsker også at sælge biler og arbejder tit meget mere end 37 timer om ugen." },
          { title: "D", body: "Det er, at det skifter så meget, hvor mange biler vi sælger. Nogle måneder sælger vi mange biler og tjener godt. Men de perioder, hvor vi ikke sælger så mange biler, er hårde for mig, og jeg bliver nervøs og stresset. Min far tager det mere roligt, men han har jo også været i branchen i mange år." },
          { title: "E", body: "Det vigtigste er, at man lytter til sine kunder. Hvis man bare prøver at få dem til at købe en bil, som man selv godt kan lide, går det ikke. Og så skal man aldrig prøve at overtale en kunde til at købe. Mange kunder bliver irriterede, hvis de føler, at man presser dem, og så køber de ikke noget." },
          { title: "F", body: "Det er en god ide at starte med at tænke over, om det skal være en elbil eller en benzinbil, hvad man skal bruge bilen til, og hvor mange kilometer man skal køre om dagen. Men der er mange andre ting, der også er vigtige. Så det bedste, man kan gøre, er at få sig en god snak med en bilforhandler." },
          { title: "G", body: "Ja, for det meste. Men det kan godt være irriterende, at vi ligner hinanden så meget. Vi vil fx begge to gerne bestemme, og derfor bliver vi somme tider sure på hinanden. Men vi bliver heldigvis altid gode venner igen hurtigt, og så finder vi en løsning på problemet." },
          { title: "H", body: "At finde den rigtige bil til en kunde, selvom det også kan være svært somme tider. Det skal jo både være en bil, som kunden kan lide, og som kunden har råd til. Men det er klart den del af jobbet, jeg synes, er mest spændende. Jeg bliver aldrig træt af tilfredse kunder." }
        ]
      }
    ],
    note: "Alex på 33 er uddannet mekaniker og har en bilforretning sammen med sin far.",
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor er du blevet bilforhandler?", answer: "A", example: true },
          { n: 26, text: "Kan du lide at arbejde sammen med din far?", answer: "G" },
          { n: 27, text: "Hvad er det bedste ved dit job?", answer: "H" },
          { n: 28, text: "Hvad er det værste ved dit job?", answer: "D" },
          { n: 29, text: "Synes du, det er hårdt at være selvstændig?", answer: "C" },
          { n: 30, text: "Hvordan er man en god bilsælger?", answer: "E" }
        ]
      }
    ]
  };

  // Insert in front of the practice (non-real) tasks; the final order is set in js/sets.js.
  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(fallback < 0 ? PD2.READING.length : fallback, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling nov.-dec. 2022 ----------
  const firstReal = PD2.WRITING.findIndex(w => w.real);
  PD2.WRITING.splice(firstReal < 0 ? PD2.WRITING.length : firstReal, 0,
    {
      id: "w22na", delprove: 1, real: true, year: 2022,
      title: "A: En anmeldelse af en restaurant (nov.-dec. 2022)",
      kind: "Prøveopgave · anmeldelse på Facebook",
      minWords: 80, maxWords: 150,
      situation: "Du har spist middag på en restaurant. Du vil skrive en anmeldelse af restauranten på Facebook. Skriv anmeldelsen. Du skal begynde og afslutte anmeldelsen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om restauranten", "Hvornår du spiste middag på restauranten, og hvad du spiste", "Hvordan maden var, og hvad du synes om prisen", "Hvordan tjenerne var"],
      phrases: ["Jeg vil gerne anbefale …, som ligger …", "Jeg spiste middag på restauranten …", "Vi fik … til forret/hovedret/dessert.", "Maden var …", "Prisen var …, og det synes jeg er …", "Tjenerne var …"],
      model: `Restaurant Havblik – kan varmt anbefales!

Jeg vil gerne anbefale Restaurant Havblik, som ligger ved havnen i Aarhus. Det er en lille, hyggelig fiskerestaurant med en flot udsigt over vandet.

Jeg spiste middag på restauranten sammen med min mand lørdag aften i sidste uge. Vi fik fiskesuppe til forret, stegt torsk med kartofler til hovedret og is med jordbær til dessert. Det bedste ved restauranten er maden. Fisken var frisk og lækker, og portionerne var store. Tre retter kostede 345 kr. pr. person, og det synes jeg er en fin pris for så god mad.

Desuden var tjenerne meget søde og hjælpsomme. De smilede hele tiden, og de gav os gode råd om vinen.

Jeg vil anbefale Restaurant Havblik, fordi man får god mad og god service til en rimelig pris. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Nadia`
    },
    {
      id: "w22nb", delprove: 1, real: true, year: 2022,
      title: "B: En klage over en nabo, der larmer (nov.-dec. 2022)",
      kind: "Prøveopgave · klage til boligforeningen",
      minWords: 80, maxWords: 150,
      situation: "Du bor i en lejlighed i boligforeningen Lysbo. Du har en nabo, som larmer meget. Du vil skrive en klage over din nabo til boligforeningen. Skriv klagen til boligforeningen Lysbo. Du skal begynde og afslutte klagen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvem din nabo er, og hvor din nabo bor", "Hvordan og hvor tit din nabo larmer", "Hvad du har gjort for at løse problemet", "Hvad du håber, boligforeningen vil gøre"],
      phrases: ["Kære Boligforeningen Lysbo", "Min nabo … bor på …", "Han/hun larmer, fordi …", "Det sker … gange om ugen.", "Jeg har allerede talt med …, men …", "Jeg håber, at I vil …"],
      model: `Kære Boligforeningen Lysbo

Jeg skriver til jer, fordi jeg vil klage over min nabo, som larmer meget.

Det drejer sig om min nabo, Mikkel Jensen, som bor på 3. sal lige over mig på Lysbovej 8. Jeg hedder Hassan Ali, og jeg bor på 2. sal th. i samme opgang.

Problemet er, at Mikkel spiller meget høj musik næsten hver aften, og i weekenden holder han tit fest til kl. 3 om natten. Jeg kan ikke sove, og jeg er træt, når jeg skal på arbejde.

Jeg har allerede talt med Mikkel to gange og lagt en seddel i hans postkasse, men han larmer stadig.

Derfor vil jeg gerne bede jer om at tale med ham og minde ham om husordenen.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Hassan Ali
Lysbovej 8, 2. th.`
    },
    {
      id: "w22nc", delprove: 2, real: true, year: 2022,
      title: "En e-mail om dit nye arbejde (nov.-dec. 2022)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Emma. I e-mailen skriver hun bl.a.: \"… I din sidste e-mail skrev du, at du har fået et nyt arbejde. Tillykke med det! Men du skrev også, at arbejdet somme tider er hårdt og stressende. Det lyder ikke så godt. Skriv og fortæl om dit nye arbejde, og hvorfor det somme tider er hårdt og stressende …\" Skriv et svar til Emma og fortæl om dit nye arbejde, og hvorfor det somme tider er hårdt og stressende. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvad dit nye arbejde er, og hvor du arbejder", "Fortæl, hvad du laver på arbejdet", "Forklar, hvorfor arbejdet somme tider er hårdt og stressende", "Fortæl, hvad du synes om dit nye arbejde"],
      phrases: ["Hej Emma", "Tak for din mail.", "Jeg arbejder nu som … på/i …", "Jeg skal …", "Arbejdet er somme tider hårdt og stressende, fordi …", "Jeg er alligevel glad for jobbet, fordi …"],
      model: `Hej Emma

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om mit nye arbejde, og det vil jeg gerne fortælle dig lidt om.

For det første arbejder jeg nu som social- og sundhedshjælper på et plejehjem i Esbjerg. Jeg hjælper de ældre med at komme op om morgenen, få bad og spise. Mine kolleger er søde, og jeg er glad for de ældre.

Derudover er arbejdet somme tider hårdt og stressende. Vi er for få medarbejdere, så vi har meget travlt, og der er ikke altid tid til at snakke med de ældre. Jeg skal også løfte meget, så jeg får tit ondt i ryggen. Og når en kollega er syg, skal jeg arbejde ekstra i weekenden.

Til sidst vil jeg sige, at jeg alligevel er glad for jobbet, fordi jeg føler, at jeg gør en forskel.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Sara`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven nov.-dec. 2022 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p22n-a", title: "At købe nyt eller brugt", real: true, year: 2022,
      pictures: [
        { img: "images/pd2-2022-n/nyt-eller-brugt-1.jpg", credit, alt: "Et ungt par kigger på brugte biler foran værkstedet AB-Auto; der står priser i bilernes ruder (9.900, 12.700 og 14.900 kr.), og en glad mekaniker i kedeldragt viser dem en af bilerne", words: ["brugt bil", "bilforhandler", "mekaniker", "pris", "prøvekøre"] },
        { img: "images/pd2-2022-n/nyt-eller-brugt-2.jpg", credit, alt: "En kvinde med en barnevogn kigger på en brugt kjole i en genbrugsbutik eller på et loppemarked; hendes datter står ved siden af, en ekspedient står ved et bord med tøj og sko, og i baggrunden kigger andre på brugte ting", words: ["brugt tøj", "genbrugsbutik", "loppemarked", "kjole", "billigt"] }
      ],
      interview: [
        "Hvad synes du om, at man køber en brugt bil?",
        "Hvad synes du om, at man køber brugt tøj?",
        "Køber du selv brugte ting?",
        "Hvis ja: Hvad køber du brugt? Hvorfor? Hvis nej: Hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "En ung mand på 20 år har mistet sin mobiltelefon. Skal han købe en helt ny telefon eller en brugt? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, han skal købe en ny mobil. Unge har brug for en god mobil til at spille og streame på, og den har et bedre kamera. Hvad synes du?" },
        { who: "partner", say: "En ny mobil er hurtig og kan mere end en brugt, og den kan måske holde i flere år. Er du enig?" },
        { who: "partner", say: "Men en brugt mobil er billigere, og hvis han taber den, gør det ikke så meget. Hvad tænker du om det?" },
        { who: "mediator", say: "Det er også bedre for miljøet at købe brugt. Hvad synes I generelt – er det bedst at købe nyt eller brugt?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes, det er en god idé at købe brugt, fordi …", "Jeg køber selv brugt …", "Han skal købe en ny/brugt mobil, fordi …", "Fordelen ved … er, at …", "Er du enig?"]
    },
    {
      id: "p22n-b", title: "Børn og forældre", real: true, year: 2022,
      pictures: [
        { img: "images/pd2-2022-n/boern-og-foraeldre-1.jpg", credit, alt: "En familie i stuen: faren støvsuger, moren samler tøj op fra gulvet, og datteren ligger i sofaen med høretelefoner og computer og har fødderne oppe på et rodet sofabord", words: ["husarbejde", "støvsuge", "rydde op", "rod", "doven"] },
        { img: "images/pd2-2022-n/boern-og-foraeldre-2.jpg", credit, alt: "En familie i køkkenet: moren laver mad ved komfuret, datteren skærer grøntsager, faren står ved vasken, og sønnen dækker bord", words: ["lave mad", "hjælpe til", "dække bord", "skære grøntsager", "køkken"] }
      ],
      interview: [
        "Synes du, børn skal hjælpe deres forældre med husarbejdet?",
        "Har du selv børn? Hvis ja: Hjælper de med husarbejdet?",
        "Hvis nej: Hjalp du selv dine forældre, da du var barn?",
        "Hvis ja: Hvad hjalp du dem med? Hvis nej: Hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "Skal en ung pige på 16 år have lommepenge af sine forældre, eller skal hun have et fritidsjob og tjene penge selv? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, hun skal have et fritidsjob. Så lærer hun noget om økonomi og at klare sig selv. Hvad synes du?" },
        { who: "partner", say: "Men hvis hun arbejder, har hun måske ikke tid til lektier, venner og sport, og hun er træt i skolen. Er du enig?" },
        { who: "partner", say: "Hvis forældrene giver hende penge, kan hun passe sin skole. Men så lærer hun måske ikke at have respekt for penge. Hvad tænker du om det?" },
        { who: "mediator", say: "Måske har forældrene ikke så mange penge. Hvad synes I generelt er bedst for unge – lommepenge eller et fritidsjob?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes, børn skal hjælpe med …, fordi …", "Mine børn hjælper med …", "Da jeg var barn, hjalp jeg …", "Hun skal have et fritidsjob, fordi …", "Hvad med dig?"]
    },
    {
      id: "p22n-c", title: "At have danske venner", real: true, year: 2022,
      pictures: [
        { img: "images/pd2-2022-n/danske-venner-1.jpg", credit, alt: "En kvinde fra Eritrea laver mad sammen med sin danske veninde i et køkken; de snakker og griner, mens deres børn leger med klodser på gulvet", words: ["veninde", "lave mad sammen", "snakke", "børn", "lege"] },
        { img: "images/pd2-2022-n/danske-venner-2.jpg", credit, alt: "En mand fra Tyrkiet spiller fodbold med sine danske venner i en park; de andre sidder på et tæppe og griner, og en mand griller ved en madkurv", words: ["venner", "park", "spille fodbold", "grille", "picnic"] }
      ],
      interview: [
        "Hvad er godt ved at have danske venner, når man er udlænding?",
        "Har du danske venner?",
        "Hvis ja: Hvem er dine danske venner, og hvordan blev I venner?",
        "Hvis nej: Hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "Hvad kan man som udlænding gøre for at finde danske venner? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, man kan snakke med sine kolleger i pausen og spørge, om de vil drikke en kop kaffe eller en øl efter arbejde. Hvad synes du?" },
        { who: "partner", say: "Man kan også melde sig til en fritidsaktivitet eller arbejde frivilligt. Er du enig?" },
        { who: "partner", say: "Man kan også snakke med sine naboer eller melde sig ind i en Facebook-gruppe i lokalområdet. Hvad tænker du om det?" },
        { who: "mediator", say: "Man kan måske også få en dansk kontaktperson via kommunen. Hvad synes I generelt er den bedste måde at finde danske venner på?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det gode ved at have danske venner er, at …", "Jeg har en dansk ven, der hedder …", "Vi blev venner, da …", "Man kan finde danske venner ved at …", "Er du enig?"]
    }
  );
})();
