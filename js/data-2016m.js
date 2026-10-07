// Prøve i Dansk 2, maj-juni 2016 – transcribed from the scanned exam papers.
// Included: læseforståelse 1 (opgave 1-2) and skriftlig fremstilling
// (no læseforståelse 2 and no oral material were supplied).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 maj-juni 2016";

  const opg1 = {
    id: "p16m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilken svømmehal har varmtvandsbassin?\" – Svømmehallen Bolbro/Middelfartvej.",
    sections: [
      {
        heading: "Svømmehaller i Odense",
        cards: [
          { title: "Svømmehallen Bolbro/Middelfartvej", sub: "Middelfartvej 180, 5200 Odense V · Tlf. 65 51 53 43", body: "Svømmehallen Bolbro er bygget i 1969 og ombygget og moderniseret i 2013.\nSvømmehallen har en kapacitet på ca. 150 gæster pr. time.\nHer findes et bassin på 25 gange 10 meter med en vanddybde fra 0,9 til 3,10 meter, og vandtemperaturen er 27°. Her er 1-meter-vippe samt en lille rutsjebane. Derudover er der følgende mindre bassiner:\n– Varmtvandsbassin med 33° varmt vand og en vanddybde på 1,3 meter. Der er vandkanon, jetstream og massagedyser.\n– Legebassin med 30° varmt vand og en vanddybde på 0,8 meter. Her er en stor rutsjebane på 43 meter.\n– Børnebassin med 33° varmt vand og en vanddybde fra 0,2 til 0,4 meter. Her er vandpaddehat." },
          { title: "Svømmehallen Højme", sub: "Højmevænget 3B, 5250 Odense SV · Tlf. 65 51 53 48", body: "Svømmehallen i Højme er bygget i 1971 og har en kapacitet på ca. 120 gæster pr. time.\nHer findes brusebade, sauna, bassin på 25 gange 12,5 meter med en vanddybde fra 0,9 til 3,6 meter, en 1-meter-vippe samt en 3-meter-vippe. Vandtemperaturen er 26°." },
          { title: "Svømmehallen Klosterbakken", sub: "Klosterbakken 5, 5000 Odense C · Tlf. 65 51 53 30", body: "Svømmehallen Klosterbakken har gennemgået en omfattende modernisering og byder velkommen til motion og velvære.\nKom og prøv de nye tilbud på relaxbalkonen: spabad, dampbad og saunaer.\nDer er et stort bassin på 25 gange 12 meter med en vandtemperatur på 27°, en vanddybde fra 90 til 305 cm og en vippe på 1 meter." },
          { title: "Svømmehallen Universitetet", sub: "Campusvej 55, 5230 Odense M · Tlf. 65 51 53 55", body: "Svømmehallen ved Syddansk Universitet Odense blev taget i brug i november 1980.\nHallen, der er beregnet for såvel offentligheden som skoler og idræt, har en kapacitet på 260 gæster pr. time. Foruden brusebade og sauna (to i hvert omklædningsrum) er her tale om et ideelt sportsanlæg med internationale mål – nemlig et bassin på 50 gange 21 meter med vanddybder fra 1,8 til 3,8 meter. Desuden er en del af bassinet udstyret med variabel bund, hvor vanddybden kan indstilles fra 0,3 til 1,8 meter. I den dybe del af bassinet er der 1- og 3-meter-vipper samt en 5-meters udspringsplatform. Vandtemperaturen er 26°." },
          { title: "Svømmehallen Vollsmose", sub: "Vollsmose Allé 18B, 5240 Odense NØ · Tlf. 65 51 53 50", body: "Svømmehallen Vollsmose er etableret i 1978.\nHer er der en kapacitet på 190 gæster pr. time.\nForuden tilskuerfaciliteter findes der brusebade, motionsrum, sauna og bassin på 25 gange 15,5 meter. I en del af bassinet er det muligt at variere vanddybden fra 0,3 til 2,0 meter.\nVandtemperaturen er 26°." }
        ],
        source: "Kilde: www.odensesk.dk"
      },
      {
        heading: "Spisesteder og caféer på Samsø",
        cards: [
          { title: "Brundby Hotel", sub: "Brundby Hovedgade 63 · Tlf. 86 59 00 11 · brundby-hotel.dk", body: "Serverer klassisk dansk mad af øens råvarer og gerne økologisk. Børnemenuer, a la carte og menuer til hotellets intimkoncerter. Prøv Eric Claptons favoritsuppe! Bordbestilling nødvendig.\nÅben: alle dage fra kl. 18. Uden for sæson dog kun, når der er gæster på hotellet." },
          { title: "Carlos Corner", sub: "Besservej 1, Tranebjerg · Tlf. 27 29 45 20 · carloscorner.dk", body: "Hyggelig frokostcafé og vinbar med dansk smørrebrød og sildemad. Skøn gårdhave.\nÅben: alle dage på nær sø. kl. 9-18." },
          { title: "Feriecenter Samsø", sub: "Stensbjergvej 6, Kolby · Tlf. 86 59 68 68 · feriecentersamso.dk", body: "Nyd morgenbuffet og dagens ret næsten hver dag året rundt. Hele sommeren også åbent for frokost, kaffe m. hjemmebagt kage og aftenbuffet m. isbar.\nÅben: morgenbuffet: alle dage hele året kl. 8-10.\nA la carte: 5. feb.-2. jul. & 11. aug.-21. dec. kl. 17-21.\nSommerbuffet: 3. jul.-10. aug. kl. 18-20.\nGrillbuffet: 1. jul.-10. aug. on. & lø. kl. 18-20.\nFrokost: 3. jul.-10. aug. kl. 12-15.\nKaffe & kage: 3. jul.-10. aug. kl. 12-17." },
          { title: "Restaurant Dokken", sub: "Strandvejen 83, Ballen · Tlf. 86 59 10 72 · restaurant-dokken.dk", body: "Familierestaurant med dansk menukort. Udendørs servering med fantastisk havudsigt. Diskotek hver lørdag samt hyggebar alle andre aftener i juli.\nÅben: 15. apr.-6. sep.: frokost kl. 12-14.30 – i juli dog kl. 11-15.30. Aften kl. 17.30-21.30.\nHyggebar i juli kl. 22-02 alle dage på nær lø., hvor der er diskotek. I uge 28 & uge 30 er der diskotek både fr. og lø. I uge 29 er diskoteket lukket." },
          { title: "Restaurant Behrnt (v/Ballen Badehotel)", sub: "Åvej 21, Ballen · Tlf. 86 59 17 99 · ballenbadehotel.dk", body: "Restauranten vægter Samsøs mangfoldighed af råvarer. Her tilbydes såvel klassiske som nye retter. Se aktuelle menuer på hjemmesiden. Bordbestilling anbefales.\nÅben: 25. apr.-21. sep.: hver aften fra kl. 18." },
          { title: "Ilse Made", sub: "Vesterløkken 16 · Tlf. 86 59 16 59 / 28 40 73 77 · ilsemade.dk", body: "Ilse Made tilbyder en fixed to-retters menu, der serveres kl. 19. Reservation nødvendig inden kl. 15. Se hjemmeside for menu/tema-aftener.\nÅben: 12. apr.-19. okt.: alle dage på nær ti. 20. okt.-14. dec.: fr.-sø. samt på forespørgsel. Frokost: kl. 12-15. Kaffe/kage/drinks: kl. 12-17. Aften: kl. 18-22.30." },
          { title: "Strandlyst", sub: "Strandvejen 12, Ballen · Tlf. 86 59 19 36 · strandvejen12.dk", body: "Strandlyst bruger Samsøs friske råvarer af høj kvalitet. Råvarerne krydres med passion, kærlighed og respekt.\nÅben: 14. apr.-maj: fr.-lø. kl. 18-22. Jun.-aug.: alle dage kl. 12-15 & 18-22. Sep.: fr.-lø. kl. 18-22. Forlængede åbningstider i udvalgte weekender og helligdage." },
          { title: "Buur Kaffebar", sub: "Langgade 3, Tranebjerg · Tlf. 86 59 08 98", body: "Buur Kaffebar ligger lige ved Tranebjergs torv og i forbindelse med Buur Ting & Tøj.\nKaffebaren byder på softice, gammeldags isvafler, kage, kaffe, sodavand m.m.\nÅben: jan.-feb.: ti.-fr. kl. 10-17, lø. kl. 10-13. Mar., sep.-dec.: ma.-fr. kl. 10-17, lø. kl. 10-13. Apr.-maj: ma.-fr. kl. 10-17, lø. kl. 10-14. Jun.: ma.-fr. kl. 10-17, lø. kl. 10-15. Jul.: ma.-fr. kl. 10-18, lø.-sø. kl. 10-16. Aug.: ma.-fr. kl. 10-17, lø. kl. 10-16, sø. kl. 10-15 (31.8. lukket). Ekstra åbent påske, bededag, Kr. him. og pinse." },
          { title: "Restaurant Laden", sub: "Per Poulsenvej 4, Nordby · Tlf. 86 59 62 55 · restaurantladen.dk", body: "Laden – afslappet og hyggelig stemning. Rustik og ukrukket menu af årstidens råvarer. Salatbar og børnebuffet i højsæson. Medbring gerne egen vin.\nÅben: påske-jun.: kl. 18-20. Jul.-10. aug.: kl. 18-21. 11. aug.-28. sep.: kl. 18-20." },
          { title: "Hotel og Madhus rumogrooms", sub: "Brundby Hovedgade 98 · Tlf. 23 80 95 59 · rumogrooms.dk", body: "Lækker mad af årstidens råvarer kan serveres, hvor du ønsker. I højsæsonen fællesspisninger. Køb madbillet på hjemmesiden i god tid.\nÅben: hele året for firmaer, grupper, bryllup og fester. I Brundby: Kør mod Ørby." },
          { title: "Flinchs Hotel", sub: "Langgade 23, Tranebjerg · Tlf. 86 59 17 22 · flinchs.dk", body: "Klassisk dansk køkken baseret på øens råvarer. Hyggelig gårdhave – ofte levende musik.\nÅben: alle dage fra kl. 18." },
          { title: "Det lille Sommerhotel", sub: "Åvej 17, Ballen · Tlf. 20 14 01 79 · sommerhotel.dk", body: "Café med hjemmebagt kage og kaffe. Restauranten er flyttet over på den anden side af gaden.\nÅben: 1. maj-15. jun.: to.-sø. kl. 12-17. 16. jun.-31. aug.: alle dage kl. 12-17, on. lukket. 1. sep.-1. okt.: to.-sø. kl. 12-17. Åbningstiderne kan ændre sig: Følg med på hjemmesiden." },
          { title: "Café Underground", sub: "Nordby Hovedgade 21 · Tlf. 44 53 70 30", body: "Nordøens største udvalg af is. Friskkværnet kaffe, lækre sandwich, pølser samt drikke. Souvenirs og Samsøprodukter. Gratis WIFI.\nÅben: 5. apr.-20. okt.: alle dage kl. 10-21. 28. jun.-10. aug.: alle dage kl. 10-22." },
          { title: "Nordøens Restaurant & Café", sub: "Nordby Hovedgade 13 · Tlf. 86 59 65 13 · nordoensrestaurant.com", body: "Familierestaurant og café med klassisk dansk menukort, baseret på øens bedste råvarer. Dejlig solrig terrasse tæt på flere af øens naturskønne udflugtsmål.\nÅben: apr.-sep.: kl. 18-21. Weekender, ferier samt jun.-aug.: kl. 12-21." },
          { title: "Samsø Perlen", sub: "Sælvig 48, Sælvig · Tlf. 86 59 25 00 · samsoeperlen.dk", body: "Samsø Perlen har både café, restaurant og bar. Nyd en af retterne fra det udsøgte a la carte-kort eller få gourmet takeaway bragt til døren.\nÅben: ti.-lø. kl. 11-21, sø. kl. 11-16. Lukket få feriedage." },
          { title: "SmokeHouse Langør", sub: "Langør 25, Langør · Tlf. 61 51 91 65 · smoke-house.dk", body: "Røgeri beliggende på smuk naturhavn ved Stavns fjord. Friskrøget fisk og skaldyr med lokalt dyrkede grøntsager. Delikatesser i bedste kvalitet.\nÅben: apr.-maj: to.-sø. samt helligdage kl. 11-21. Jun.-aug.: alle dage kl. 8-22. Sep.: to.-sø. kl. 11-21. Okt.: 2.-5. okt. & efterårsferien kl. 11-21." },
          { title: "Don Juan", sub: "Slagterivej 4, Ballen · Tlf. 86 59 07 05", body: "Italiensk restaurant og pizzeria. Menukortet byder på kød-, fiske- og pastaretter og et stort udvalg af hjemmelavede pizzaer. Også mad ud af huset.\nÅben: påske-okt.: alle dage med få undtagelser fra kl. 17. I sommerferien: alle dage kl. 12-21." },
          { title: "Fruen ved Fyret", sub: "Vesborg Fyr · Tlf. 29 13 17 96 · ilsemade.dk", body: "Lille café ved Vesborg fyr med små lækre frokostretter, picnickurve, kaffe, te, is og en masse skøn hjemmebag.\nFyraftenskoncert hver torsdag i højsæsonen kl. 16-18.\nÅben: kl. 11-17.30 i følgende perioder: 19.-21. apr., 16.-18. maj, 5. jun.-29. aug., 11.-19. okt." }
        ],
        source: "Kilde: Spisesteder på Samsø 2014"
      },
      {
        heading: "Busser og stoppesteder i hovedstadsområdet",
        cards: [
          { title: "1A", body: "Klampenborg st. > Dyrehavej > Strandvejen >/Dyrehavevej < Christiansholmsvej < Hvidørevej < Strandvejen – Charlottenlund Fort – Strandvejen – (Hellerup st. – Callisensvej/Hellerupvej) – Strandvejen – Svanemøllen st. – Østerbrogade – Trianglen – Østerbrogade – Dag Hammarskjölds Allé – Østerport st. – Grønningen – Store Kongensgade/Bredgade – Kongens Nytorv st. – Holmens Kanal – Christiansborg Slotsplads – Vindebrogade – Stormgade – Tietgensgade – Hovedbanegården – Ingerslevsgade – Enghavevej – Enghave st. – Vigerslev Allé – Toftegårds Plads – Vigerslev Allé – Vigerslevvej – Folehaven – Sønderkær – Arnold Nielsens Boulevard – Kettegård Allé – Hvidovre Hospital – Kettegård Allé – Avedøre Havnevej – Brostykkevej – Avedøre Tværvej – Rebslagerporten – Naverporten – Byvej – Avedøre st.\nOperatør: Arriva A/S, Gladsaxe" },
          { title: "2A", body: "Tingbjerg, Gavlhusvej – Langhusvej – Ruten – Åkandevej – Frederikssundsvej – Brønshøj Torv – Brønshøjvej – Gaunøvej – Annebergvej – Primulavej – Godthåbsvej – Grøndal st. – Godthåbsvej – Rolighedsvej – Rosenørns Allé – Forum st. – Rosenørns Allé – Gyldenløvesgade – H.C. Andersens Boulevard – Rådhuspladsen – Vesterbrogade – Bernstorffsgade – Hovedbanegården – Bernstorffsgade – Tietgensgade – Stormgade – Vindebrogade – Christiansborg Slotsplads – Børsgade – Knippelsbro – Torvegade – Christianshavn st. – Torvegade – Christmas Møllers Plads – Amagerbrogade – Amagerbro st. – Holmbladsgade – Østrigsgade – Lergravsparken st. – Backersvej – Kastrupvej – Alléen – Ved Stationen\nOperatør: Arriva A/S, Gladsaxe" },
          { title: "3A", body: "Nordhavn st. – Østbanegade – (Århusgade – Strandboulevarden) – Nordre Frihavnsgade – Trianglen – Blegdamsvej – Elmegade – Stengade – Griffenfeldtsgade – H.C. Ørsteds Vej – Alhambravej – Kingosgade – Enghavevej – Enghave Plads – Enghave st. – Enghavevej – Sydhavn st. – Borgbjergsvej – Mozarts Plads – Mozartsvej – Hammelstrupvej – Kgs. Enghave, Valbyparken\nOperatør: Arriva A/S, Ryvang" },
          { title: "4A", body: "Svanemøllen st. – Kildevældsgade – Vennemindevej – Nygårdsvej – Sankt Kjelds Plads – Sejrøgade – Haraldsgade – Hamletsgade – Mimersgade – Nørrebro st. – Lundtoftegade – Hillerødgade – Nordre Fasanvej – Søndre Fasanvej – Toftegårds Allé – Valby st. – Toftegårds Allé – Toftegårds Plads – Vigerslev Allé – Sjælør Boulevard – Sjælør st. – Borgmester Christiansens Gade – Mozarts Plads – Borgmester Christiansens Gade – Sjællandsbroen – Vejlands Allé og enten Center Boulevard – Bella Center st. – Ørestads Boulevard – Ørestad st. eller Vejlands Allé – Amagerbrogade – Sundbyvester Plads – Wibrandsvej – Kastrupvej – Øresundsvej – Lergravsparken st.\nOperatør: Arriva A/S, Ryvang" },
          { title: "5A", body: "Husum Torv – Frederikssundsvej – Brønshøj Torv – Frederikssundsvej – Bellahøj – Frederikssundsvej – Nørrebro st. – Nørrebrogade – Nørrebros Runddel – Nørrebrogade – Dronning Louises Bro – Søtorvet –> Gothersgade –>/<– Frederiksborggade <– Øster Farimagsgade <– Gothersgade <– Nørre Voldgade – Nørreport st. – Nørre Voldgade – Vester Voldgade – Rådhuspladsen – Jernbanegade – Hammerichsgade – Bernstorffsgade – Hovedbanegården – Bernstorffsgade – Polititorvet – Hambroesgade – Rysensteensgade – H.C. Andersens Boulevard – Langebro – Amager Boulevard – Amagerbrogade – Amagerbro st. – Amagerbrogade – Sundbyvester Plads – Amagerbrogade – Amager Landevej – Saltværksvej – Amager Strandvej – Ellehammervej – Københavns Lufthavn, Kastrup\nOperatør: Keolis A/S, Stamholmen" }
        ],
        source: "Kilde: http://busbilleder.dk/Movia.htm"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvilken svømmehal har motionsrum?", accept: ["svømmehallen vollsmose", "vollsmose", "vollsmose svømmehal", "svømmehallen i vollsmose", "vollsmose svømmehallen", "i vollsmose", "svømmehal vollsmose"] },
      { type: "short", n: 2, q: "Hvilket spisested har en gårdhave, hvor der ofte er levende musik?", accept: ["flinchs hotel", "flinchs", "flinch hotel", "flinchs hotel i tranebjerg", "hotel flinchs", "flinch's hotel"] },
      { type: "short", n: 3, q: "På hvilket spisested må man gerne medbringe sin egen vin?", accept: ["restaurant laden", "laden", "på restaurant laden", "restaurant laden i nordby", "i laden"] },
      { type: "short", n: 4, q: "På hvilket spisested kan man købe dansk smørrebrød?", accept: ["carlos corner", "carlos", "på carlos corner", "carlos corner i tranebjerg", "carlo's corner", "carlos' corner"] },
      { type: "short", n: 5, q: "Hvilket spisested sælger hjemmelavede pizzaer?", accept: ["don juan", "restaurant don juan", "pizzeria don juan", "don juan i ballen", "på don juan"] },
      { type: "short", n: 6, q: "Hvilke to busser stopper på Toftegårds Plads?", accept: ["1a og 4a", "4a og 1a", "1a, 4a", "4a, 1a", "1a 4a", "4a 1a", "1a og 4a.", "bus 1a og bus 4a", "bus 1a og 4a", "busserne 1a og 4a", "1a + 4a", "1a/4a", "1a & 4a", "1a og 4 a", "1 a og 4 a"] }
    ]
  };

  const opg2 = {
    id: "p16m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", sub: "Eksempel", body: "■■■■■■\nDu er under 18 år og har afsluttet 9. klasse\nVi tilbyder et job med varierende arbejdsopgaver og søde kolleger.\nRing for yderligere info.\nBager Truelsen\nTlf. 53 09 88 63" },
          { title: "B – Nyt fra Hasselbys Pensionistforening", body: "Den årlige sommertur går til Koldinghus.\nBussen afgår fra parkeringspladsen ved kirken kl. 9.15, og vi forventer at være hjemme igen ca. kl. 17.\nPr. person: kun 150 kr. Prisen inkluderer 2-retters menu og kaffe på Hejse Kro.\n■■■■■■" },
          { title: "C", body: "■■■■■■\nØjenlæge Birger Egholm går på pension\nPatienter og samarbejdspartnere inviteres derfor til afskedsreception fredag d. 29. september kl. 14-16 i Øjenklinikkens lokaler på Moltkes Allé 9" },
          { title: "D", body: "■■■■■■\nToyota Verso, hvid, reg. nr. AE 33 294\nFor oplysninger, der kan føre til bilen, gives en dusør på 2.000 kr.\nBent Møller Biler\nRingvejen 45, Nr. Krogsted" },
          { title: "E – Lej din bil hos os!", body: "Vi udlejer personbiler, minibusser, varevogne og flyttebiler.\n■■■■■■\nBook på vores hjemmeside nu og få yderligere 10% rabat.\nLej Biler: tlf. 60 60 42 45\nwww.lej-biler.nu" },
          { title: "F", body: "■■■■■■\nVi tilbyder billige lån til en lav rente.\nHvis du ansøger i dag, får du endda en gratis gave oveni. Skynd dig ind på:\nwww.billigelaan.dk\nLån i dag – køb i morgen!" },
          { title: "G – Kronbys Familieløb 2016", body: "Lørdag d. 11/6 kl. 10 i Hundeskoven\nLøb 3, 5 eller 8 km\n■■■■■■\nOverskuddet går til en ny legeplads. Du og din familie kan tilmelde jer og betale på vores hjemmeside: www.kron-by.dk/familieløb.\nVel mødt!" },
          { title: "H", body: "■■■■■■\nI uge 26 og 27:\nStel inkl. glas: 1.199 kr.\n(gælder alle herre- og damemodeller med gult mærkat).\nKig ind – og få en gratis synsprøve med i købet!\nOK Optik\nØstergade 3\n– vi ses!" },
          { title: "I", body: "■■■■■■\nSommeren kommer!\nSå kom ind og find netop det par, du skal gå ferien i møde med!\nOg tag børnene med – tilbuddet gælder nemlig også dem.\nCity Sko\nTorvet 7" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Ung butiksassistent søges.", answer: "A", example: true },
          { n: 7, text: "Tilmelding på tlf. 43 39 04 32.", answer: "B" },
          { n: 8, text: "Drømmer du om at købe en ny bil?", answer: "F" },
          { n: 9, text: "25 % på sandaler.", answer: "I" },
          { n: 10, text: "Priser fra 245 kr. pr. døgn.", answer: "E" },
          { n: 11, text: "Sommertilbud på briller.", answer: "H" },
          { n: 12, text: "Pris pr. deltager: 75 kr.", answer: "G" }
        ]
      }
    ]
  };

  // Real sets newest first: … 2016 nov.-dec., 2016 maj-juni, 2014 nov.-dec. …
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 nov.-dec. 2014");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg1, opg2);

  // ---------- Skriftlig fremstilling maj-juni 2016 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2014);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w16ma", delprove: 1, real: true, year: 2016,
      title: "A: En anbefaling af sprogcaféen (maj 2016)",
      kind: "Prøveopgave · anbefaling",
      minWords: 80, maxWords: 150,
      situation: "På biblioteket i din by er der sprogcafé, hvor frivillige danskere hjælper udlændinge med at lære dansk. Du kommer tit på sprogcaféen. Du vil skrive en anbefaling til skolebladet på din sprogskole. Skriv anbefalingen. Du skal begynde og afslutte anbefalingen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvor tit og hvornår der er sprogcafé på biblioteket", "Hvad man f.eks. kan få hjælp til på sprogcaféen", "Hvem der arbejder frivilligt på sprogcaféen", "Hvorfor du vil anbefale andre at komme på sprogcaféen"],
      phrases: ["Jeg vil gerne anbefale sprogcaféen på …", "Der er sprogcafé hver … fra kl. … til …", "Man kan få hjælp til …", "De frivillige er …", "Det bedste ved sprogcaféen er, at …", "Prøv det selv – du bliver ikke skuffet!"],
      model: `Sprogcaféen på biblioteket – kan varmt anbefales!

Jeg vil gerne anbefale sprogcaféen på biblioteket, som ligger på Torvet midt i byen. Der er sprogcafé to gange om ugen, hver tirsdag og torsdag fra kl. 16 til 18.

Man kan for eksempel få hjælp til lektier, breve og jobansøgninger, eller man kan bare øve sig i at tale dansk. Det bedste ved sprogcaféen er, at de frivillige altid har god tid til at snakke. De fleste er pensionister, men der kommer også nogle studerende.

Desuden er der gratis kaffe og te, og stemningen er altid hyggelig.

Jeg vil anbefale sprogcaféen, fordi jeg har lært meget dansk der, og fordi det er gratis. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Amina, hold 4B`
    },
    {
      id: "w16mb", delprove: 1, real: true, year: 2016,
      title: "B: En jobansøgning til Netto (maj 2016)",
      kind: "Prøveopgave · ansøgning som kasseassistent",
      minWords: 80, maxWords: 150,
      situation: "Du vil gerne arbejde i supermarkedet Netto. Du har set på internettet, at Netto søger kasseassistenter. Du vil skrive en ansøgning. Skriv ansøgningen. Du skal begynde og afslutte ansøgningen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv, og hvorfor du gerne vil arbejde i Netto", "Hvad du har lavet før (f.eks. kurser, praktik, arbejde)", "Hvad du er god til", "Hvordan du kan kontaktes"],
      phrases: ["Jeg har set jeres jobannonce på internettet …", "Jeg hedder … og er … år.", "Jeg vil gerne arbejde i Netto, fordi …", "Jeg har erfaring med …", "Jeg er god til at …", "I kan kontakte mig på …"],
      model: `Kære Netto

Jeg har set jeres jobannonce på internettet, og jeg vil gerne søge stillingen som kasseassistent.

Jeg hedder Maria Lopez, og jeg er 29 år. Jeg kommer fra Spanien og har boet i Danmark i tre år. Jeg vil gerne arbejde i Netto, fordi jeg kan lide at møde mange mennesker, og fordi butikken ligger tæt på mit hjem.

Jeg har erfaring med at arbejde i en butik. Jeg har været i praktik i seks måneder i et supermarked, hvor jeg sad ved kassen. Jeg har også taget et kursus i kundeservice.

Jeg tror, at jeg vil være god til jobbet, fordi jeg er hurtig, ærlig og god til tal.

I kan kontakte mig på telefon 26 48 15 73.

Jeg håber, at I vil invitere mig til en samtale. Jeg ser frem til at høre fra jer.

Med venlig hilsen
Maria Lopez`
    },
    {
      id: "w16mc", delprove: 2, real: true, year: 2016,
      title: "En e-mail om problemer i praktikken (maj 2016)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Simon. I e-mailen skriver han bl.a.: \"… Du skrev i din sidste mail, at du ikke er så glad for din praktik, fordi du har nogle problemer. Kan du ikke skrive og fortælle lidt mere om, hvad det er for nogle problemer, du har …\" Skriv et svar til Simon og fortæl, hvad det er for nogle problemer, du har i din praktik. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvor du er i praktik, og hvad du laver", "Forklar, hvilke problemer du har i praktikken", "Fortæl, hvordan det går med kollegerne og chefen", "Fortæl, hvad du vil gøre ved problemerne"],
      phrases: ["Hej Simon", "Tak for din mail.", "Jeg er i praktik i/hos …", "Problemet er, at …", "Jeg har svært ved at …", "Har du nogen gode råd?"],
      model: `Hej Simon

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om problemerne i min praktik, og det vil jeg gerne fortælle dig lidt om.

For det første er jeg i praktik i et stort supermarked, men jeg får næsten kun kedelige opgaver. Jeg skal fylde varer op og gøre rent hele dagen, og jeg lærer ikke ret meget.

Derudover har jeg svært ved at tale med mine kolleger. De taler meget hurtigt, og de spiser frokost sammen uden mig. Min chef har heller aldrig tid til at hjælpe mig, så jeg føler mig tit alene.

Til sidst vil jeg sige, at jeg har en samtale med min sagsbehandler i næste uge. Jeg håber, at jeg kan få en ny praktik. Har du nogen gode råd?

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Ali`
    }
  );
})();
