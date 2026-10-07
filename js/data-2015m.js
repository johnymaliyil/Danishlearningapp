// Prøve i Dansk 2, maj-juni 2015 – transcribed from the scanned exam papers.
// Included: læseforståelse opgave 1-5, skriftlig fremstilling and the oral pictures
// for delprøve 2 (illustrations by Niels Roland, cropped from the picture sheets).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 maj-juni 2015";

  const kontakt = "Kontakt: Ulrik 6545 5628 – Michael 6545 5629\neller mail: insp7@fynskemedier.dk";
  const bil = "Velegnet til kørsel i bil – kørselsgodtgørelse udbetales.";
  const unge = "MULIG FOR UNGE UNDER 18 ÅR.";
  const ruter = [
    ["NYBORG Nørrevoldgade (16816)", "Mandag-fredag i området: Baggersgade, Blegdamsgade, Kongegade m.m. (ca. 90 aviser)"],
    ["NYBORG Johs. Høirupsvej (26813)", "Lørdag-søndag i området: Birkhovedvej, Bredahlsgade, Christianslundsvej m.m. (ca. 100 aviser)"],
    ["NYBORG Knudshovedvej (26818)", "Lørdag-søndag i området: Bryggerivej, Fjordvej, Fredensgade m.m. (ca. 115 aviser)\n" + unge],
    ["NYBORG Østervoldgade (26819)", "Lørdag-søndag i området: Banegårdsgade, Havnegade, Jernbanegade m.m. (ca. 80 aviser)\n" + unge],
    ["NYBORG Egevej (26823)", "Lørdag-søndag i området: Askevænget, Birkevej, Egevej m.m. (ca. 85 aviser)\n" + unge],
    ["NYBORG Gl. Vindingevej (26829)", "Lørdag-søndag i området: Bavnehøj Allé, Skrænten, Tronnehaven m.m. (ca. 85 aviser)\n" + unge],
    ["VINDINGE Bøjdenvej (104014)", "Mandag-fredag i området: Bøjdenvej, Ellebækgårdsvej, Gartnervænget m.m. (ca. 65 aviser)"],
    ["Eksempel: RYNKEBY Mesterrækken (104036)", "Mandag-fredag i området: Rynkeby Bygade, Grøndalsvej, Dalsgårdsvej, Blommehaven m.m. (ca. 90 aviser)"],
    ["ULLERSLEV Granvej (404415)", "Lørdag-søndag i området: Bondemosevej, Granvej, Hybenvænget, Rosenvænget m.m. (ca. 65 aviser)"],
    ["VINDINGE (884101)", "Lørdag-søndag i området: Alsvej, Bøjdenvej, Falstervej m.m. (ca. 95 aviser)\n" + bil],
    ["SKELLERUP (884103)", "Lørdag-søndag i området: Rønningevej, Søvej, Pårupvej m.m. (ca. 65 aviser)\n" + bil],
    ["KOGSBØLLE (884105)", "Lørdag-søndag i området: Blankenborgvænget, Dyrehavevej, Kjærsvej m.m. (ca. 75 aviser)\n" + bil],
    ["ØRBÆK (884106)", "Lørdag-søndag i området: Odensevej, Holmevej, Kildemøllevej m.m. (ca. 65 aviser)\n" + bil]
  ];

  const tofte = "Guidet bustur i Tofte Skov i dette spændende område med chance for at komme tæt på skovens storvildt. Turen gennemføres som en kombination af buskørsel og færdsel til fods, så medbring solidt fodtøj og kikkert. Mødested: Lille Vildmosecentret.\nSe mere på www.lillevildmose.dk";
  const kunst = "Åben kunst med akrylmalerier i Fruerlundhuset, Øster Hurup. Kom og se et maleri blive til. Åben alle dage undt. mandag frem til 11. august.\nSe mere på www.fruerlundhuset.dk";
  const boernekunst = "Kunstmaling for børn i Fruerlundhuset, Øster Hurup. 1 time inkl. materialer 100 kr. pr. barn. Tilmelding i butikken eller på tlf. +45 2089 8496.\nSe mere på www.fruerlundhuset.dk";
  const marked = "Tirsdagsmarked i Øster Hurup på Novo-pladsen.\nSe mere på www.oesterhurup.dk";
  const vildma = "Leg med trolden Lille Vildma, som laver mange sjove og spændende børneaktiviteter i Lille Vildmosecentret.\nSe mere på www.lillevildmose.dk";
  const gyngende = "På gyngende grund i Lille Vildmose. En guidet tur i egne biler til bl.a. Portlandmosen. Mødested: Lille Vildmosecentret.\nSe mere på www.lillevildmose.dk";
  const biltraef = "Bil- og motorcykeltræf på Hvirvelkærgaard v. Als. Sjældne, sjove og gamle biler samt sportsvogne og motorcykler.\nSe mere på www.hvirvelkaergaard.dk";
  const ferie = [
    ["9. juli-11. august", kunst],
    ["9. juli kl. 10:00", marked],
    ["9. juli-11. aug. kl. 10-12:00", boernekunst],
    ["9. juli kl. 11:00-15:00", vildma],
    ["9. juli kl. 18:50-21:30", tofte],
    ["10. juli kl. 14:00-16:00", gyngende],
    ["10. juli kl. 18:00-21:00", biltraef],
    ["11. juli kl. 10:00-16:00", "Loppe- og kræmmermarked på Hvirvelkærgård v. Als. Der kan købes is, pølser, kaffe, øl og vand foruden en masse spændende loppe- og kræmmerfund.\nSe mere på www.hvirvelkaergaard.dk"],
    ["11. juli kl. 11:00-12:30", "På jagt i søen i Lille Vildmosecentret. Vi ser på frøer, salamandre og masser af vandinsekter.\nSe mere på www.lillevildmose.dk"],
    ["11. juli kl. 18:50-21:30", tofte],
    ["11. juli kl. 19:00", "Klassisk biltræf hver torsdag på Hobro Havn.\nSe mere på www.aalestrupclassic.dk"],
    ["12. juli kl. 09:00-12:00", "Familietur til Ørnedalen, Hobro. Vi sejler en guidet tur i kajak eller jolle til Ørnedalen, hvor vi griller pølser og snobrød i Mariager Fjords skønne natur. Vi møder Klone og hans hemmelige menneskeven, der vil komme frem fra skovens dyb og underholde børnene med historie og leg og være med til at lave snobrød.\nTilmelding: kontakt@mariagerfjordkajak.dk eller tlf. 3042 3763 senest 4. juli. Pris kr. 250,-.\nSe mere på www.visitmariagerfjord.dk"],
    ["12.-13. juli kl. 19:00", "Oksefest i Øster Hurup. Aktiviteterne starter fredag kl. 19. Entré fredag 80 kr. Entré lørdag 100 kr. inkl. buffet. Begge dage 160 kr. inkl. buffet.\nSe mere på www.oesterhurup.dk"],
    ["13. juli kl. 09:00-16:00", "FrokostJazz i Hadsund på ButiksTorvet. Gratis morgenmad og god musik. Herefter vil der rundt i byen være god stemning ledsaget af jazz. Nyd en dejlig dag i musikkens tegn."],
    ["13.-14. juli kl. 10:00-16:00", "Levendegørelse på Boldrup Museum. Lev dig ind i landbolivet anno 1900. En sjov dag for hele familien!\nSe mere på www.nordmus.dk"],
    ["13.-14. juli kl. 10:00-17:00", "Se vikinger lave håndværk på Vikingecenter Fyrkat, Hobro.\nSe mere på www.nordmus.dk"],
    ["13. juli kl. 10:30-17:00", "Æseltræf på Verdenskortet v. Klejtrup Sø. Et varieret program, hvor børn, voksne og æsler kan hygge sig sammen og udveksle erfaring om æsler, eller man kan bare blive klogere på, hvordan man kører og arbejder med æsler.\nSe mere på www.verdenskortet.dk"],
    ["13. juli kl. 12:00-16:00", "Folkevognstræf i Fruerlundparken i Øster Hurup. Lørdag slås dørene op for offentligheden til Danmarks største Folkevognstræf. Ca. 200 biler."],
    ["14. juli kl. 11:00-12:30", "Fodring af vildsvin hver søndag i Lille Vildmose.\nSe mere på www.lillevildmose.dk"],
    ["15. juli kl. 11:00-13:00", "Aktiviteter på stranden for strandløver og -løvinder i alle aldre på stranden nord for Øster Hurup.\nSe mere om aktiviteterne på www.lillevildmose.dk"],
    ["15. juli kl. 14:00", "Musik i Øster Hurup med organist Troels Kold.\nSe mere på www.osterhurupkirke.dk"],
    ["16. juli-11. august", kunst],
    ["16. juli kl. 10:00", marked],
    ["16. juli-11. aug. kl. 10:00-12:00", boernekunst],
    ["16. juli kl. 11:00-15:00", vildma],
    ["16. juli kl. 18:50-21:30", tofte],
    ["16. juli kl. 19:30", "Sommerkoncert i Mariager Kirke med Søren Gleerup.\nSe mere på www.mariagerkirke.dk"],
    ["17. juli kl. 13:00", "GAS på bukken. Kom og vær med, når vi parterer, tilbereder og spiser en buk. Der er gevirkast og andre aktiviteter for børn og barnlige sjæle. På GASmuseet, Hobro Havn.\nSe mere på www.gasmuseet.dk"],
    ["17. juli kl. 14:00-16:00", gyngende],
    ["17. juli kl. 16:00", "Byvandring i Mariager med start på Mariager Museum.\nSe mere på www.mariagermuseum.dk"],
    ["17. juli kl. 18:00-21:00", biltraef]
  ];

  const puslinge = "Sjov gymnastik i alle afskygninger. Motoriske lege og en masse leg på redskaber. Vi skal have det sjovt og få sved på panden!";
  const puslingeTrænere = "Trænere: Thilde Møller Nielsen, Pernille Greisen, Maiken Balling, Victoria Andersen, Anne Dissing";
  const rytme = "Hop, spring, dans … til sej musik for tøser. Begyndere og øvede er velkomne til sjove spring på mange forskellige redskaber, hvor venskab, disciplin og sved på panden er i højsædet!";
  const krudt = "Vi leger, synger og bevæger os til musik, bygger sjove baner og udfordrer kroppen med motoriske øvelser.";
  const hold = [
    ["HOLD 1: Gymnastik for mor og baby (babys alder v/start: 2-6 mdr.)", "På dette hold handler det primært om at få mor i form efter fødslen! Vi har fokus på at få trænet og udspændt hele kroppen efter en fødsel. Der vil være særlig fokus på de muskelgrupper, der belastes og udtrættes under graviditeten og fødslen: ryg-, mave-, arm-, balle- samt bækkenbundsmuskler. Træningen vil blive tilrettelagt, så der er plads til alle og naturligvis også til de kære små. Der vil være tid til at fodre/skifte baby samt hyggeligt samvær.\nTid: Fredag kl. 16.00-16.55\nSted: Resen Skoles Gymnastiksal\nTræner: Maibrit Hansen\nPris: ½ sæson 250,- (der tilmeldes ved sæsonstart og igen efter jul)"],
    ["HOLD 2: Krudtugler – for de mindste på 1½-2 år (alderen er kun vejledende)", "Gymnastik og leg for børn og deres forældre. " + krudt + "\nTid: Lørdag kl. 9.00-9.55\nSted: Resen Skoles Gymnastiksal\nTrænere: May Rømsgaard, Karoline Arnfred Nielsen\nPris: 600,-"],
    ["HOLD 3: Krudtugler – for de lidt større på 3-4 år (alderen er kun vejledende)", "Gymnastik og leg for børn og forældre. " + krudt + "\nTid: Lørdag kl. 10.00-10.55\nSted: Resen Skoles Gymnastiksal\nTrænere: May Rømsgaard, Karoline Arnfred Nielsen\nPris: 600,-"],
    ["HOLD 4: Minimix 4 år-0. kl. piger/drenge", "Rytme og musik, leg og bevægelse. Alternativ brug af gymnastiksalen, bl.a. med sjove og anderledes rekvisitter.\nTid: Mandag kl. 17.00-17.55\nSted: Brårup Hallen\nTrænere: Gitte Nørgaard Jensen, Josefine Vesterherup, Laura Rasmussen, Lærke Skov Christensen\nPris: 550,-"],
    ["NYT! Tilbud til forældre der venter – HOLD 5: Forældregymnastik", "Her er et tilbud til jer forældre!!!\nHar I lyst til sjov og bevægelse, mens jeres børn brænder krudt af i hallen, så mød op i gymnastiksalen. I får grinet, sved på panden, pulsen op og styrketrænet gennem lege og konkurrencer. Det kræver kun et godt humør, så alle kan være med.\nTid: Mandag kl. 17.00-17.55\nSted: Brårup Gymnastiksal\nTræner: Hanne Pallesen\nPris: 550,-"],
    ["HOLD 6: Puslingemix 4-5 år piger/drenge", puslinge + "\nTid: Onsdag kl. 16.00-16.55\nSted: Resen Skoles Gymnastiksal\n" + puslingeTrænere + "\nPris: 550,-"],
    ["HOLD 7: Puslingemix 5-6 år piger/drenge", puslinge + "\nTid: Onsdag kl. 17.00-17.55\nSted: Resen Skoles Gymnastiksal\n" + puslingeTrænere + "\nPris: 550,-"],
    ["HOLD 8: Rytme-spring 0.-2. kl. piger", rytme + "\nTid: Onsdag kl. 18.00-18.55\nSted: Resen Skoles Gymnastiksal\nTrænere: Aase Nielsen, Mette Frandsen, Pernille Jensen, Anna Pedersen\nPris: 550,-"],
    ["HOLD 8A: Rytme-spring 0.-2. kl. piger", rytme + "\nTid: Onsdag kl. 19.00-19.55\nSted: Resen Skoles Gymnastiksal\nTrænere: Aase Nielsen, Pernille Jensen, Anna Pedersen\nPris: 550,-"],
    ["HOLD 11: Spring piger 3.-4. kl.", "Springpigerne er et hold for dig, som har lyst til at springe på airtrack og i trampolin. Vi arbejder med grundtræning og styrketræning samt showdance-serier.\nTid: Mandag kl. 16.00-17.25\nSted: Resen Skoles Gymnastiksal\nTrænere: Joan Hansen, Line Kvist Sørensen, Thomas Østergård Mogensen, Frederikke Mortensen\nPris: 700,-"]
  ];

  const opg1 = {
    id: "p15m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvad nummer har den rute, hvor Grøndalsvej ligger?\" – 104036.",
    sections: [
      {
        heading: "VI MANGLER MORGENFRISKE OMDELERE",
        cards: [
          { title: "Grib mobilen og sms teksten AVISBUD + bynavn (nr.) til 1239", body: "Ring til Fynske Medier, Distributionsafdelingen, på direkte tlf. 65 45 56 45\nMan-fredag 8.30-15.00" },
          ...ruter.map(([title, body]) => ({ title, body: body + "\n" + kontakt }))
        ],
        source: "Kilde: Fynske Medier"
      },
      {
        heading: "FERIELANDET MARIAGER FJORD – byder på masser af natur, kultur & sjov for store og små",
        cards: ferie.map(([title, body]) => ({ title, body })).concat([{ title: "Flere arrangementer", body: "Se flere arrangementer og aktiviteter på www.turistkalender.dk" }]),
        source: "Kilde: Hadsund Folkeblad, uge 28/29, 2013"
      },
      {
        heading: "GYMNASTIK I SKIVE – SÆSON 2013-2014",
        cards: hold.map(([title, body]) => ({ title, body })),
        source: "Kilde: Skive Folkeblad, Midt på ugen, 14. august 2013"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvad nummer har den rute, hvor Gartnervænget ligger?", accept: ["104014", "104 014", "nr 104014", "nr. 104014", "nummer 104014", "rute 104014", "ruten 104014", "rute nr 104014", "rute nummer 104014", "(104014)", "vindinge bøjdenvej 104014", "vindinge bøjdenvej (104014)", "bøjdenvej 104014", "den har nummer 104014", "det er 104014", "det er rute 104014"] },
      { type: "short", n: 2, q: "Hvem giver koncert i Mariager kirke?", accept: ["søren gleerup", "gleerup", "søren gleerup giver koncert", "det gør søren gleerup", "sommerkoncert med søren gleerup", "søren gleerup giver koncert i mariager kirke", "søren gleerup giver sommerkoncert", "søren gleerup den 16. juli"] },
      { type: "short", n: 3, q: "Er det gratis at tage med på familietur til Ørnedalen?", accept: ["nej", "nej det koster 250 kr.", "nej, det koster 250 kr", "nej det koster 250", "nej det koster 250 kroner", "nej 250 kr", "nej 250 kroner", "nej kr. 250", "nej kr 250", "nej pris kr. 250", "nej, prisen er 250 kr.", "nej prisen er 250 kroner", "nej det koster penge", "nej det er ikke gratis", "nej, det er ikke gratis", "det er ikke gratis", "det koster 250 kr.", "det koster 250 kroner", "det koster 250", "250 kr.", "250 kroner", "250", "kr. 250", "pris kr. 250", "nej det koster 250 kr. pr. person", "nej, det koster 250,-", "nej det er ikke gratis det koster 250 kr"] },
      { type: "short", n: 4, q: "Hvad dato kan man få gratis morgenmad i Hadsund?", accept: ["13. juli", "13 juli", "den 13. juli", "d. 13. juli", "d 13 juli", "13/7", "13.7", "13. 7.", "den 13/7", "den 13.7", "13. juli kl. 9", "13. juli kl. 09:00-16:00", "den trettende juli", "trettende juli", "lørdag den 13. juli", "13. juli 2013"] },
      { type: "short", n: 5, q: "Hvad nummer har det hold, som Mette Frandsen er træner på?", accept: ["8", "hold 8", "otte", "hold otte", "nr 8", "nr. 8", "nummer 8", "hold nr. 8", "hold nummer 8", "hold 8 rytme-spring", "hold 8 rytme-spring 0.-2. kl. piger", "hold 8 rytme spring", "rytme-spring hold 8", "det er hold 8", "hun er træner på hold 8"] },
      { type: "short", n: 6, q: "Hvad ugedag kan man lære at springe i trampolin?", accept: ["mandag", "om mandagen", "mandage", "på mandag", "hver mandag", "om mandagen kl. 16.00-17.25", "mandag kl. 16.00-17.25", "mandag kl 16-17.25", "mandag eftermiddag", "man kan lære at springe i trampolin om mandagen", "man kan lære det om mandagen", "mandag hold 11", "hold 11 mandag", "om mandagen på hold 11"] }
    ]
  };

  const opg2 = {
    id: "p15m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – OK Optik", body: "■■■■■■\nVi har nedsat mange af vores stel til både herrer, damer og børn med op til 40 %.\nOBS: Gratis synsprøve i hele uge 42.\nOK Optik, Juelsgade 65" },
          { title: "B", body: "■■■■■■\nFra 1/1 2015 indgår Dorthe Bruhn kompagniskab med Kurt Olesen i klinikken på Sejers Allé 63, 8244 Nyby.\nKlinikkens telefon- og konsultationstider er uændrede." },
          { title: "C – Super Form", body: "Sjov og effektiv træning i vores helt nye center.\nVi har åbent 06.00-22.00, så du kan træne, når det passer dig.\nDu kan også melde dig til et hold med en af vores dygtige instruktører.\n■■■■■■\nVi ses i Super Form!\nTlf. 34 06 57 40 · www.super-form.dk" },
          { title: "D", body: "■■■■■■\nBåde stationære og bærbare pc'er.\nSkal det gå hurtigt? Vi tilbyder også ekspresservice inden for 24 timer.\nRing og hør nærmere!\nPronto Service, tlf. 55 00 98 76" },
          { title: "E – Vi fejrer 2-års fødselsdag", body: "– og derfor giver vi 20 % rabat på alle vores løbesko.\nMen du skal være hurtig! Tilbuddet gælder kun på lørdag mellem kl. 10 og 13.\n■■■■■■\nØstre Søgade 19" },
          { title: "F", body: "■■■■■■\nFredag d. 7. juni kl. 12-14 i Aktivitetshuset, Banevej 17.\nTema: Det offentlige på nettet – introduktion til NemID, skat.dk, borger.dk og sundhed.dk.\nMedbring gerne egen computer. Deltagelse er gratis.\nTilmelding på tlf. 45 46 41 09" },
          { title: "G", body: "■■■■■■\nVelegnet til f.eks. lægepraksis eller tandlægeklinik. God beliggenhed i gågaden i Roskilde.\nReception, venteområde og fire separate værelser. Det hele nyistandsat og klar til overtagelse.\nKontakt Din Boligmægler i Roskilde for yderligere info. Tlf. 47 83 09 14" },
          { title: "H", body: "■■■■■■\nSå kan du helt sikkert finde noget, du kan bruge hos os.\nVi har nemlig byens største udvalg af møbler til hjemmet i bl.a. eg, fyr, ask og bøg. Alt i høj kvalitet.\nMAKIDO Træmøbler, Møllergade 2" },
          { title: "I – Gratis influenzavaccination", body: "I oktober og november måned vaccineres uden aftale onsdage kl. 9-11.\nTilbuddet gælder pensionister og førtidspensionister samt ved en række kroniske sygdomme.\n■■■■■■\nLægehuset i Dragsted" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Skal du have nye briller?", answer: "A", example: true },
          { n: 7, text: "Medlemskab: 249 kr. om måneden.", answer: "C" },
          { n: 8, text: "Flotte lokaler i centrum udlejes.", answer: "G" },
          { n: 9, text: "IT i hverdagen.", answer: "F" },
          { n: 10, text: "Reparation af computere.", answer: "D" },
          { n: 11, text: "Sport & fritid – din lokale sportsbutik.", answer: "E" },
          { n: 12, text: "Nyt spisebord?", answer: "H" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p15m-3", group: G, real: true,
    title: "Opgave 3 – Pensionister på nettet",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Det er ikke kun unge mennesker, der bruger en stor del af deres tid på internettet. Mange ældre siger også, at det er meget [[0]] for dem at komme på nettet hver dag.

Grethe Juhl er 72 år og pensionist. Hun har haft computer i flere år, men hun bruger den faktisk kun, når hun skal på internettet. F.eks. kommunikerer hun tit med sin datter og sine to børnebørn, der bor i England. Hun [[13]] dem meget, for hun ser dem kun en eller to gange om året. [[14]] det er heldigvis let at sende en e-mail eller chatte med dem på Facebook. Det er også blevet meget lettere at følge med i børnebørnenes liv, [[15]] de og deres forældre lægger tit billeder ud på Facebook. Grethe taler også med sin datter og sine børnebørn over Skype flere gange om ugen. Så kan hun både høre og se dem, mens de taler sammen. Det elsker hun, for hun føler næsten, at de sidder sammen i stuen.

Men Grethe bruger ikke kun internettet til at holde kontakt med familie og venner. Hun køber [[16]] mange forskellige ting på internettet. Hun køber f.eks. tøj, bøger og film. Det er ikke [[17]], for butikkerne sender bare alt det, hun køber, direkte hjem til hende.

Selvom Grethe ikke arbejder mere, har hun en [[18]] hverdag. Hun går f.eks. til gymnastik, besøger veninder og går i biografen, så hun har ikke altid [[19]] til at se fjernsyn. Derfor er Grethe glad for, at man kan se mange tv-programmer på internettet. Det [[20]] hun nemlig tit.`,
    questions: [
      {
        type: "gaps",
        bank: ["vigtigt", "tid", "for", "penge", "ikke", "kedelig", "savner", "nemt", "også", "travl", "svært", "besøger", "gør", "men"].map(w => ({ key: w, text: w })),
        example: { 0: "vigtigt" },
        answers: { 13: "savner", 14: "men", 15: "for", 16: "også", 17: "svært", 18: "travl", 19: "tid", 20: "gør" }
      }
    ]
  };

  const opg4 = {
    id: "p15m-4", group: G, real: true,
    title: "Opgave 4 – Beata – polak i Danmark",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Beata kom til Danmark fra Polen for lidt over et år siden. Hun kan godt lide at bo her, men hun synes, det er svært at tale dansk.

**0.** Beata er 29 år og kommer fra Polen. Sidste år fik hendes mand, Piotr, arbejde som maler i et dansk firma, og derfor flyttede de sammen med deres toårige søn, Adam, til den lille by Ålbæk i Nordjylland. Det er hårdt at flytte til et nyt land, og de savner selvfølgelig deres familie og venner i Polen. [[0]]. For ingen af dem har boet i et andet land før, og de synes, det er interessant at lære en ny kultur at kende på den måde.

**21.** Beata har også fået et job: Hun er rengøringsassistent. Hun gør rent på et kontor hver aften fra kl. 18 til kl. 22. Det er lidt hårdt at være væk fra familien om aftenen, men hun føler sig meget heldig, for det er ikke nemt at finde et job. [[21]]. Det ville hun ønske, hun ikke gjorde. Hun kunne rigtig godt tænke sig at have nogen at snakke med i pauserne. Derfor håber Beata, at hun en dag kan finde et andet job, hvor hun kan få nogle kolleger.

**22.** Tre dage om ugen går Beata til dansk på en sprogskole. Det har hun snart gjort i otte måneder, og hun synes, hun har lært meget. Hun er f.eks. rigtig god til grammatik, og hun kan godt lide at skrive på dansk. [[22]]. For selvom hun er god til grammatik og til at skrive, så synes hun, det er svært at tale dansk. Hun synes især, hendes udtale er dårlig. Hun kan godt høre, at det ikke altid lyder dansk, når hun taler, og det irriterer hende. Så derfor snakker hun næsten aldrig dansk uden for skolen.

**23.** Men Beata ved godt, at det er vigtigt at tale dansk uden for skolen. Derfor skal hun begynde som besøgsven hos en ældre mand, der hedder Carl. Carl er 86 år og bor alene, og de skal mødes en gang om ugen og drikke kaffe, gå ture og snakke sammen. De kan kun kommunikere med hinanden på dansk, for Carl har aldrig lært andre sprog. [[23]]. For selvom Carl helt sikkert er sød og rar, er hun bange for, hvad der sker, hvis han slet ikke kan forstå, hvad hun siger.

**24.** Beata og Piotrs søn, Adam, går i vuggestue, og han er lige begyndt at tale. Han hører selvfølgelig en masse dansk i vuggestuen, men hjemme taler Beata og Piotr næsten kun polsk med ham. Det betyder, at Adam tit blander polske og danske ord. [[24]]. For somme tider starter han en sætning på dansk og gør den færdig på polsk. Beata har læst, at det er helt normalt, at børn blander to sprog, hvis de lærer dem samtidig. Så hun er bare glad for, at hendes dreng har fået mulighed for at lære to sprog i en tidlig alder.

**25.** Beata skal nok gå på sprogskole i halvandet år endnu. Når hun er færdig, vil hun gerne tage en uddannelse som SOSU-hjælper. Beata har faktisk allerede en uddannelse som sekretær fra Polen, men den kan hun ikke bruge i Danmark. [[25]]. For før hun kom til Danmark, arbejdede hun som sekretær i et par år. Hun var glad for sine kolleger, men hun syntes faktisk, at jobbet var lidt kedeligt. Så det passer hende fint, at hun skal tage en ny uddannelse.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Men det er også spændende." },
          { key: "B", text: "Derfor er Beata meget glad." },
          { key: "C", text: "Alligevel er hun ikke helt tilfreds." },
          { key: "D", text: "Men det er hun ikke ked af." },
          { key: "E", text: "Hun er også glad for sine kolleger." },
          { key: "F", text: "Det gør Beata lidt nervøs." },
          { key: "G", text: "Desværre arbejder hun altid alene." },
          { key: "H", text: "Det lyder sjovt, synes Beata." }
        ],
        example: { 0: "A" },
        answers: { 21: "G", 22: "C", 23: "F", 24: "H", 25: "D" }
      }
    ]
  };

  const opg5 = {
    id: "p15m-5", group: G, real: true,
    title: "Opgave 5 – Interview med Simon",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Simon – tandlæge",
        cards: [
          { title: "A", sub: "Eksempel", body: "Jeg synes, den er rigtig god. Man skal selvfølgelig kende til en masse teori, så man skal læse mange bøger. Men samtidig er der meget praktik, så man har gode muligheder for at afprøve tingene i praksis. Lige så snart man har lært noget teori, kan man prøve den af på patienter. Det er virkelig godt!" },
          { title: "B", body: "Det lyder måske lidt mærkeligt, men det er nok det, at det er så hårdt fysisk. Som tandlæge sidder man jo på den samme måde meget af tiden, og det er ikke godt for kroppen. Så jeg går tit til fysioterapeut, fordi jeg har ondt i ryggen og skuldrene. Og jeg ved, at mange af mine kolleger har det samme problem." },
          { title: "C", body: "Jeg synes somme tider, den er meget lang. Men sådan er det nok altid, når man har sit eget. Jeg ejer jo selv min klinik, og så er der f.eks. meget papirarbejde, jeg skal ordne. Det bruger jeg meget tid på hver dag. Men heldigvis er det kontakten med patienterne, der fylder mest, og det er det vigtigste for mig." },
          { title: "D", body: "Det er helt sikkert det rigtige for mig at være selvstændig. Jeg er den, der har ansvaret, men jeg er også den, der bestemmer, og det kan jeg godt lide. Og når man ejer noget, har man mere lyst at bruge tid og energi på det, end hvis man arbejder for en anden, synes jeg." },
          { title: "E", body: "Faktisk skal man være god til at have med mennesker at gøre. For der er jo stadig nogen, der ikke tør gå til tandlæge. Måske har de haft en dårlig oplevelse hos en tandlæge, da de var børn. Før kunne man jo f.eks. ikke bedøve på samme måde, som man kan i dag. Og så var der nok også ret mange tandlæger, der ikke var gode til at snakke med patienterne." },
          { title: "F", body: "Ja, meget! Det er en rigtig god følelse at have et job, hvor man kan hjælpe folk, der har ondt. Og når man som mig har sin egen klinik, er man lidt sin egen herre. Det er meget vigtigt for mig. Jeg tjener faktisk også ret godt, og det betyder selvfølgelig også noget. Så jeg synes, det er et rigtig godt job." },
          { title: "G", body: "Ja, det tror jeg. Og derfor gør jeg også rigtig meget for at få patienterne til at slappe af. Jeg snakker f.eks. altid lidt med patienten, inden vi starter. Og så fortæller jeg, hvad jeg laver, mens jeg arbejder. Der er også nogle, der hører musik, for så tænker de på noget andet, og så glemmer de næsten helt, at det gør ondt." },
          { title: "H", body: "Nej, det skifter meget fra dag til dag. Det kommer helt an på, hvad de skal have lavet. Nogle skal jo bare have tjekket tænderne og lavet en tandrensning. Andre skal måske have lavet en lille operation, og det kan tage lang tid. Så nogle dage har jeg måske kun otte, andre dage dobbelt så mange." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvordan er uddannelsen til tandlæge?", answer: "A", example: true },
          { n: 26, text: "Hvordan er det at have sin egen klinik?", answer: "D" },
          { n: 27, text: "Er du glad for dit arbejde?", answer: "F" },
          { n: 28, text: "Hvordan er din arbejdsdag?", answer: "C" },
          { n: 29, text: "Er der mange, der er bange for at gå til tandlæge?", answer: "G" },
          { n: 30, text: "Hvad er det værste ved dit job?", answer: "B" }
        ]
      }
    ]
  };

  // Real sets newest first: … nov.-dec. 2016, maj-juni 2016, maj-juni 2015, nov.-dec. 2014 …
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 nov.-dec. 2014");
  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(at >= 0 ? at : (fallback < 0 ? PD2.READING.length : fallback), 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling maj-juni 2015 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2014);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w15ma", delprove: 1, real: true, year: 2015,
      title: "A: Et opslag om en madklub (maj 2015)",
      kind: "Prøveopgave · opslag på sprogskolen",
      minWords: 80, maxWords: 150,
      situation: "Du vil lave en klub for kursister på din sprogskole, hvor I skal lave mad til hinanden. Du vil lave et opslag om madklubben. Skriv opslaget. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvorfor du gerne vil lave en madklub på sprogskolen", "Hvad slags mad du foreslår, I laver i madklubben", "Hvor tit du synes, I skal mødes, og hvor I skal mødes", "Hvordan man kan tilmelde sig"],
      phrases: ["Madklub på sprogskolen!", "Jeg vil gerne lave en madklub, fordi …", "Jeg foreslår, at vi laver …", "Vi kan mødes en gang om …", "Vi kan låne skolens køkken …", "Hvis du vil være med, så …"],
      model: `Madklub på sprogskolen!

Hej alle sammen

Jeg hedder Mariam, og jeg skriver, fordi jeg gerne vil lave en madklub for kursister på sprogskolen. Vi kommer fra mange forskellige lande, og jeg synes, det er en hyggelig måde at lære hinanden at kende på. Vi kan også øve os i at tale dansk, mens vi laver mad.

Jeg foreslår, at vi laver mad fra vores hjemlande. Hver gang bestemmer to kursister, hvad vi skal lave. Vi kan også prøve at lave danske retter som frikadeller og æblekage.

Jeg synes, at vi skal mødes en gang om måneden, den første fredag kl. 17. Vi kan låne skolens køkken i lokale 12.

Hvis du vil være med, så ring eller skriv til mig på 31 47 26 85 senest fredag den 5. juni.

På forhånd tak!

Mange hilsner
Mariam, hold 3A`
    },
    {
      id: "w15mb", delprove: 1, real: true, year: 2015,
      title: "B: En ansøgning om frivilligt arbejde i en lektiecafé (maj 2015)",
      kind: "Prøveopgave · ansøgning om frivilligt arbejde",
      minWords: 80, maxWords: 150,
      situation: "Du søger frivilligt arbejde i en lektiecafé for børn i alderen 7-12 år. Du vil skrive en ansøgning. Skriv ansøgningen. Du skal begynde og afslutte ansøgningen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv, og hvad du kan hjælpe med i lektiecaféen", "Hvilke erfaringer du har med at arbejde med børn", "Hvor tit du kan arbejde i lektiecaféen", "Hvordan du kan kontaktes"],
      phrases: ["Jeg vil gerne søge stillingen som frivillig …", "Jeg hedder … og er … år.", "Jeg kan hjælpe børnene med …", "Jeg har erfaring med at arbejde med børn, fordi …", "Jeg kan arbejde … om ugen.", "I kan kontakte mig på …"],
      model: `Kære Lektiecaféen

Jeg har set jeres jobannonce på biblioteket, og jeg vil gerne søge stillingen som frivillig lektiehjælper.

Jeg hedder Ahmad Rahimi, og jeg er 34 år. Jeg kommer fra Afghanistan. Jeg er god til matematik og engelsk, så jeg kan hjælpe børnene med lektier i de fag.

Jeg har erfaring med at arbejde med børn. I mit hjemland var jeg lærer på en skole i to år, og her i Danmark er jeg træner for et fodboldhold for børn.

Jeg tror, at jeg vil være god til jobbet, fordi jeg er tålmodig og glad for børn. Jeg kan arbejde i lektiecaféen to gange om ugen, mandag og onsdag fra kl. 15 til 17.

I kan kontakte mig på telefon 42 18 63 95.

Jeg håber, at I vil invitere mig til en samtale. Jeg ser frem til at høre fra jer.

Med venlig hilsen
Ahmad Rahimi`
    },
    {
      id: "w15mc", delprove: 2, real: true, year: 2015,
      title: "En e-mail om et problem med din chef (maj 2015)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Søren. I e-mailen skriver han bl.a.: \"… Du skrev i din sidste mail, at du har et problem med din chef. Det lyder ikke så godt. Kan du ikke fortælle lidt mere om det? …\" Skriv et svar til Søren, hvor du fortæller om dit problem med din chef. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvor du arbejder, og hvem din chef er", "Forklar, hvad problemet med din chef er", "Fortæl, hvordan du har det med problemet", "Fortæl, hvad du vil gøre for at løse problemet"],
      phrases: ["Hej Søren", "Tak for din mail.", "Jeg arbejder på/i …, og min chef hedder …", "Problemet er, at han/hun …", "Det gør mig …", "Jeg vil tale med …"],
      model: `Hej Søren

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om problemet med min chef, og det vil jeg gerne fortælle dig lidt om.

For det første arbejder jeg på et hotel i Odense, hvor jeg gør rent på værelserne. Min chef hedder Bent, og han er meget streng.

Derudover giver han mig altid for mange værelser, så jeg ikke kan nå det hele. Når jeg ikke er færdig, råber han ad mig foran de andre kolleger. Han giver mig også tit vagter i weekenden, selvom jeg har bedt om at få fri. Det gør mig ked af det, og jeg sover dårligt.

Til sidst vil jeg sige, at jeg vil tale med min tillidsrepræsentant om problemet i næste uge. Måske skal jeg også begynde at søge et nyt job.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Ali`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven maj-juni 2015 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2, maj-juni 2015)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p15m-a", title: "Morgen", real: true, year: 2015,
      pictures: [
        { img: "images/pd2-2015-m/morgen-1.jpg", credit, alt: "En far i jakke prøver at få tøj på en grædende dreng i entréen, mens moren står med en hårtørrer og kigger på uret", words: ["travlt", "komme for sent", "græde", "børnehaven", "stress"] },
        { img: "images/pd2-2015-m/morgen-2.jpg", credit, alt: "En kvinde løber ned ad trappen med en mad i hånden og halstørklædet flagrende for at nå bussen", words: ["løbe", "nå bussen", "morgenmad", "sove over sig", "vækkeur"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvordan er en almindelig morgen hjemme hos dig?",
        "Hvad spiser du til morgenmad?",
        "Hvordan var morgenerne i dit hjemland, da du var barn?"
      ],
      talk: [
        { who: "partner", say: "Jeg står altid tidligt op, så jeg har god tid. Hvornår står du op?" },
        { who: "partner", say: "Jeg synes, morgenen er den mest stressende tid på dagen. Hvad synes du?" },
        { who: "mediator", say: "Hvad spiser man typisk til morgenmad i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at børnefamilier har det sværest om morgenen. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at få en god start på dagen?" }
      ],
      phrases: ["På billedet kan jeg se …", "De har travlt, fordi …", "Om morgenen står jeg op kl. …", "Til morgenmad spiser jeg …", "For at undgå stress gør jeg …", "Hvad med dig?"]
    },
    {
      id: "p15m-b", title: "Sund eller usund mad", real: true, year: 2015,
      pictures: [
        { img: "images/pd2-2015-m/sund-eller-usund-mad-1.jpg", credit, alt: "En familie med to børn spiser burgere, pommes frites og sodavand på en fastfoodrestaurant", words: ["fastfood", "burger", "pommes frites", "sodavand", "familien"] },
        { img: "images/pd2-2015-m/sund-eller-usund-mad-2.jpg", credit, alt: "En ung mand sidder i sofaen og spiser pizza foran fjernsynet med tomme pizzaæsker og colaflasker omkring sig", words: ["pizza", "sofaen", "fjernsynet", "rodet", "usund"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvad spiser du til hverdag?",
        "Hvor tit spiser du fastfood?",
        "Hvad er sund mad for dig?"
      ],
      talk: [
        { who: "partner", say: "Jeg laver altid mad fra bunden. Gør du også det?" },
        { who: "partner", say: "Jeg synes, at sund mad er alt for dyr i Danmark. Hvad synes du?" },
        { who: "mediator", say: "Hvad spiser man typisk til aftensmad i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at børn spiser mere usundt i dag end før. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at spise sundere?" }
      ],
      phrases: ["På billedet kan jeg se …", "De spiser …, og det er usundt, fordi …", "Til hverdag spiser jeg …", "Jeg spiser fastfood …", "Sund mad er for mig …", "Er du enig?"]
    },
    {
      id: "p15m-c", title: "At få danske venner", real: true, year: 2015,
      pictures: [
        { img: "images/pd2-2015-m/at-faa-danske-venner-1.jpg", credit, alt: "En kvinde med tørklæde serverer mad for en dansk veninde, der sidder ved et dækket bord i stuen", words: ["gæst", "invitere", "servere", "veninde", "hyggeligt"] },
        { img: "images/pd2-2015-m/at-faa-danske-venner-2.jpg", credit, alt: "To fodboldspillere sidder i omklædningsrummet efter træning og snakker sammen med en sodavand i hånden", words: ["omklædningsrummet", "fodboldklub", "holdkammerat", "træning", "snakke sammen"] }
      ],
      interview: [
        "Hvad laver personerne på billedet?",
        "Har du danske venner? Hvor har du mødt dem?",
        "Hvad laver du sammen med dine venner?",
        "Hvordan får man venner i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg har mødt mine danske venner i min fodboldklub. Hvor har du mødt dine?" },
        { who: "partner", say: "Jeg synes, det er svært at få danske venner. Hvad synes du?" },
        { who: "mediator", say: "Hvordan inviterer man venner hjem i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at det er lettere at få venner, når man går til en sport. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at få danske venner?" }
      ],
      phrases: ["På billedet kan jeg se …", "De ser ud til at hygge sig", "Jeg mødte min danske ven …", "Man kan få danske venner, hvis man …", "Danskerne er tit lidt …", "Hvad med dig?"]
    }
  );
})();
