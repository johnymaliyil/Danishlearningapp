// Prøve i Dansk 2, maj-juni 2022 – transcribed from the exam papers (produktionsnr. 07-11 and 13).
// Included: læseforståelse opgave 1-5, skriftlig fremstilling (delprøve 1 A/B and delprøve 2)
// and the oral topics for mundtlig delprøve 2 (At lære dansk, Et godt liv som ældre, Sund eller
// usund livsstil) with the examiner's questions and the pictures (illustrations by Niels Roland,
// from the picture sheets). Delprøve 1 of the oral exam is a topic the
// candidate chooses, so there are no monologue topics for this session.
// The answers to opgave 1-5 are the official ones from the censor- og eksaminatorhæfte
// (rettenøgler, produktionsnr. 11); the short-answer accept lists add reasonable variants.
// The model answers for skriftlig fremstilling are our own (the paper has none).

(function () {
  const G = "PD2 maj-juni 2022";

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
    id: "p22m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"På hvilken kanotur overnatter man på et hotel?\" – Tur nr. 6.",
    sections: [
      {
        heading: "Kanoture i Jylland",
        cards: [
          { title: "Tur nr. 1: Mosbjerg-Uggerby", sub: "Uggerby Kanofart · Tlf. 98 97 53 04", body: "Turen med start i Mosbjerg går gennem smukke, naturskønne omgivelser, der giver mulighed for at opleve kanoturens mangfoldige indtryk. Mosbjerg kan varmt anbefales som start for en endagstur. I Mosbjerg er der rig mulighed for overnatning – enten i eget telt eller i de opstillede shelters, som findes på den primitive overnatningsplads. Her er der også toilet og bålplads." },
          { title: "Tur nr. 2: Tørring-Klostermølle", sub: "Tørring Kanoudlejning · Tlf. 75 80 13 01", body: "Uanset om du er af sted sammen med dine børn, venner eller kæreste, får du en unik naturoplevelse på denne todages kanotur. Har du en travl hverdag, giver en kanotur dig ro og tid til at slappe af og lade dine batterier op. Med overnatning i standardhytte på campingplads har vi tænkt på det hele for dig.\nDu skal selv medbringe: sengelinned, håndklæder og viskestykke." },
          { title: "Tur nr. 3: Bjerringbro-Randers", sub: "Silkeborg Kanocenter · Tlf. 86 80 30 03", body: "Jeres kano ligger klar på startstedet kl. 9.00 og skal være fremme ved slutstedet senest kl. 15.00.\nEn super tur i børnehøjde på tre dage med to overnatninger undervejs på Langå Camping og Randers City Camp. På begge pladser står der et opslået telt klar til jer ved ankomst. Bemærk, at det ikke er tilladt at medbringe hunde på denne tur." },
          { title: "Tur nr. 4: Silkeborg-Bjerringbro", sub: "Silkeborg Kanocenter · Tlf. 86 80 30 03", body: "Absolut luksus på 1. klasse kombineret med en todages kanotur. Efter en dejlig dag på vandet bliver I budt velkommen på Kongensbro Kro med eftermiddagskaffe og kage. Til middag serveres der en 3-retters menu med efterfølgende overnatning i dobbeltværelse på Kongensbro Kro. Efter morgenmadsbuffeten fortsætter I på dag 2 turen mod Bjerringbro Teltplads." },
          { title: "Tur nr. 5: Bindslev-Uggerby", sub: "Uggerby Kanofart · Tlf. 98 97 53 04", body: "Hvis man vil gå på opdagelse i det skønne Bindslev og derefter sejle i kano til Uggerby eller stranden, er Bindslev det ideelle udgangspunkt for en 2,5 times kano(n)oplevelse, der fører én igennem områder, som ikke ses magen til andre steder i Danmark. Medbragt mad kan nydes ved foden af Danmarks største fisketrappe til lyden af rislende vandfald. Er tiden til det, bør elværkets udstilling besøges." },
          { title: "Tur nr. 6: Tørring-Voervadsbro", sub: "Tørring Kanoudlejning · Tlf. 75 80 13 01", body: "Luksus kæreste-/forkælelseskanotur med en overnatning på hotel. Tag en dejlig tur i kano på Gudenåen i to dage. Oplev Danmarks smukkeste kanotur ved at sejle på Gudenåen.\nMed overnatning på hotel har vi tænkt på det hele for dig, og du skal kun tænke på at holde fri. Der kan tilkøbes burger-frokostkurv, og grill-menu kan bestilles ved reservation af kano og overnatning." },
          { title: "Tur nr. 7: Ry-Ans", sub: "Silkeborg Kanocenter · Tlf. 86 80 30 03", body: "Kanotur på 48 km af tre dages varighed. Kanoen ligger klar på startstedet kl. 9.00 og skal være fremme ved slutstedet senest kl. 16.00. Et 4 personers iglotelt udleveres sammen med kanoen. Teltet er herefter jeres ejendel og tages med hjem efter turen til fremtidig brug.\nVi anbefaler undervejs at tage 1. overnatning på De Små Fisk Teltplads og 2. overnatning på Sminge Teltplads (overnatningsgebyr er ikke inkl.)." },
          { title: "Tur nr. 8: Tørring-Fladbro", sub: "Ry Kanofart · Tlf. 86 89 11 67", body: "Den ultimative Gudenå-tur fra udspring til fjord. 160 km med alt, hvad Gudenåen kan tilbyde af natur, by, kultur og historie. Hvis du er til telt og bål i en uges tid og vil prøve kræfter med både den smalle junglelignende å og de større søer, kommer du på denne syv dages tur igennem stort set alt det, der er at se på Gudenåen. Overnatning i eget telt på campingpladser undervejs." }
        ],
        source: "Kilde: kanoferie.dk, uggerby-kanofart.dk, silkeborgkanocenter.dk, kano-udlejning.dk (04.11.2020, redigeret)"
      },
      {
        heading: "Hoteller på Bornholm",
        cards: [
          { title: "Allinge Badehotel", sub: "Løsebækgade 3, 3770 Allinge", body: "Allinge Badehotel ligger i Allinge og tilbyder indkvartering ved stranden 5 km fra Hammershus. Der er forskellige faciliteter, såsom restaurant, fælles opholdsstue og have. Der tilbydes desuden familieværelser samt terrasse. Der tilbydes gratis wi-fi. Der er eget badeværelse med bruser, hårtørrer og gratis toiletartikler. Værelserne på hotellet har opholdsområde.\nGæsterne på Allinge Badehotel kan nyde kontinental morgenmad eller morgenbuffet.\nOmrådet er populært til vandre- og cykelture, og der tilbydes cykeludlejning på hotellet." },
          { title: "Hotel Fredensborg", sub: "Strandvejen 116, 3700 Rønne", body: "Dette hotel ligger ved havet i Rønne, 5 minutters kørsel fra Bornholm Lufthavn. Der tilbydes indkvartering med balkon eller terrasse, gratis wi-fi og gratis parkering. Hotellet har en fransk-inspireret restaurant med havudsigt, som serverer fiske- og skaldyrsbuffet.\nSamtlige værelser på Hotel Fredensborg har skrivebord. Der er eget badeværelse med brusebad og hårtørrer. Hotellet har desuden bar, lounge, spabad og en rummelig have. Bygningen og udsigten kan også nydes fra den fælles terrasse. Fredensborg Hotel ligger under 10 minutters kørsel fra Rønne Færgeterminal." },
          { title: "Hotel Gudhjem", sub: "Brøddegade 29, 3760 Gudhjem", body: "Dette hotel ligger i centrum af Gudhjem og tilbyder værelser med tv og gratis wi-fi. Bådterminalen til Christiansø ligger 150 meter derfra.\nSamtlige værelser på Hotel Gudhjem har et opholdsområde, fladskærms-tv og eget badeværelse med brusebad. Nogle af værelserne har udsigt over Østersøen. Fritidsfaciliteterne omfatter indendørs swimmingpool, petanquebane og billardbord. Gæsterne kan også slappe af med en bog fra hotellets bibliotek. Restauranten på selve ejendommen serverer dagens ret til middag.\nOluf Høst Museet ligger 5 minutters gang fra Hotel Gudhjem. Rø Golfklub og Gudhjem Golfklub ligger desuden mindre end 5 km derfra." },
          { title: "Hotel Siemsens Gaard", sub: "Havnebryggen 9, 3740 Svaneke", body: "Dette hotel ligger i en charmerende bygning fra 1600-tallet på Bornholm og tilbyder fantastisk udsigt over Østersøen. Samtlige værelser har fladskærms-tv og køleskab. De lyse værelser på Hotel Siemsens Gaard er indrettet i marineblå og cremehvide farver. Nogle af værelserne har udsigt over haven eller havet. Der er både gratis wi-fi og gratis parkering.\nGæsterne kan slappe af i Siemens Gaard Hotels sauna og træne i fitnesscentret. Herudover kan man svømme ved Svaneke Havn, som ligger 100 meter derfra.\nDen sæsonåbne restaurant serverer danske og franske retter tilberedt med lokale råvarer. Gæsterne kan spise på terrassen, mens de nyder udsigten over havet og havnen." },
          { title: "Sverre's Hotel", sub: "Snellemark 2, 3700 Rønne", body: "Dette intime, familieejede hotel ligger i det centrale Rønne. Byens hovedtorv og Rønne Færgeterminal ligger begge 300 meter derfra. Morgenmadslokalet tilbyder gratis kaffe, te og kakao døgnet rundt.\nDe enkelt indrettede værelser på Sverre's Hotel har tv, opholdsområde og eget badeværelse. Gæsterne tilbydes gratis trådløs internetadgang på værelset. Den hyggelige gård og rosenhave er et dejligt sted at spise morgenmad eller slappe af om eftermiddagen. Der er gratis parkering.\nBornholms Museum ligger mindre end 10 minutters gang derfra, og der er kun 200 meter til Nørrekås sandstrand." },
          { title: "Hotel Balka Strand", sub: "Boulevarden 9, 3730 Neksø", body: "Dette fredfyldte bornholmerhotel ligger blot 150 meter fra Balka Strand. Der tilbydes gratis trådløs internetadgang i de fælles områder, parkering og udendørs swimmingpool. Neksø ligger 2,5 km derfra.\nHotel Balka Strands ferieboliger har opholdsområde, køleskab, satellit-tv og egen terrasse. Samtlige lejligheder har desuden køkken eller tekøkken. Der kan lånes barnestole i receptionen.\nRestaurant Balka Strand serverer danske og internationale retter. Efter middagen kan gæsterne slappe af med en drink i baren.\nDer er også sauna og legeplads. Gæsterne kan spille skak, billard og petanque i den frodige have." },
          { title: "Hotel Sandvig Havn", sub: "Strandpromenaden 5, 3770 Allinge", body: "Dette fredelige hotel ligger på Bornholm ved Sandvig Havn. Der tilbydes værelser med eget badeværelse og terrasse med fantastisk udsigt over Østersøen. Sandvig Strand ligger blot 200 meter derfra. Samtlige værelser har tv, og nogle af værelserne har havudsigt. Der er gratis trådløs internetadgang. Fritidsfaciliteterne omfatter en tv-stue og en indre gårdhave.\nNaturreservatet Hammerknuden og den middelalderlige slotsruin Hammershus ligger blot et par minutters gang fra Sandvig Havn Hotel.\nDe omkringliggende gader byder på butikker og restauranter. De lokale busser standser i nærheden." },
          { title: "Hotel Skovly", sub: "Nyker Strandvej 40, 3700 Rønne", body: "Dette hotel ligger i en fredet skov, blot 5 km fra Rønne og 150 meter fra en sandstrand og Østersøen. Der tilbydes friske, moderne værelser med sofa og satellit-tv. Der er gratis wi-fi.\nVærelserne på Hotel Skovly er fordelt på 5 fløje og har eget badeværelse. Hotellet serverer dagligt morgenbuffet. Om sommeren er den rummelige, møblerede terrasse et dejligt sted at nyde solen.\nDe rolige, naturskønne omgivelser er ideelle til vandreture og fiskeri. Der er cykeludlejning på stedet, og cykelstierne begynder lige uden for hotellet og fører til det omkringliggende skovområde." },
          { title: "Stammershalle Badehotel", sub: "Sdr. Strandvej 128, Stammershalle, 3760 Bådsted", body: "Dette charmerende hotel har en fredelig beliggenhed på Bornholms klippekyst og byder på fantastisk udsigt over Østersøen og Christiansø. Hotellet huser en gourmet-restaurant, der serverer friske, lokale specialiteter.\nDe lyse og luftige værelser på Stammershalle Badehotel har tv og badeværelse. Der er gratis wi-fi. Samtlige værelser har havudsigt.\nFritidsaktiviteterne omfatter bl.a. tennisbaner, og der er gratis parkering på selve ejendommen.\nHelligdomsklipperne og Døndal-vandfaldet ligger begge omkring 2 km fra Stammershalle. Gudhjem ligger 8 minutters kørsel derfra." },
          { title: "Hotel Friheden", sub: "Tejnvej 80, 3770 Allinge", body: "Dette hotel ligger 25 minutters kørsel fra Rønne Havn og 100 meter fra stranden i Sandkås. Overnatningsstedet ligger ved havet, og der er adgang til spabad og sauna samt indendørs pool.\nAlle værelser på hotel Friheden har privat balkon eller terrasse. Nogle værelser har panoramaudsigt over Østersøen. Der er desuden tv og køleskab. De fleste værelser har kogeplader, te- og kaffefaciliteter og gulvvarme på badeværelset. Restauranten byder på en à la carte-menu, der kombinerer skandinaviske ingredienser med ingredienser fra middelhavsområdet. Frihedens café-bar serverer kaffe, snacks og lokalt brygget øl.\nDer er mulighed for at slappe af på den møblerede havterrasse og i wellnesscentret." },
          { title: "Kanns Hotel", sub: "Eskildsgade 6, 3720 Åkirkeby", body: "Dette moderne hotel i Aakirkeby på Bornholm ligger 16 km fra Rønne. Der tilbydes gratis trådløs internetadgang, restaurant med møbleret terrasse samt værelser med stort fladskærms-tv. Samtlige værelser på Kanns Hotel har frisk indretning, skrivebord og eget badeværelse med bruser.\nGæsterne kan nyde dagens ret samt danske og internationale à la carte-specialiteter i hotellets restaurant til frokost og middag.\nDer er 5 km til Bodernes hvide sandstrand og 11 minutters kørsel til Bornholm Golfklub." },
          { title: "BB-Hotel Rønne Bornholm", sub: "Store Torv 17, 1., 3700 Rønne", body: "BB-Hotel Rønne Bornholm ligger på Store Torv i centrum af Rønne. Ejendommen byder på gratis parkering, og værelserne har alle gratis wi-fi samt fladskærms-tv. Rønne Teater ligger 3 minutters gang derfra. Samtlige værelser på BB-Hotel Rønne har skrivebord, garderobeskab samt eget badeværelse med bruser.\nHotellet har terrasse og fælles opholdsstue.\nRønne Færgeterminal ligger 600 meter derfra. Nørrekås-stranden ligger 15 minutters gang fra hotellet." }
        ],
        source: "Kilde: booking.com (18.02.2021, redigeret)"
      },
      {
        heading: "Kor i Region Hovedstaden",
        cards: [
          { title: "Cikaderne", sub: "Brønshøj", body: "Koret består p.t. af 30 medlemmer i alderen 20 til 50 år, og medlemmerne er fordelt på 6 stemmegrupper. Entusiasme og glæde er kendetegnende for koret, og ambitioner er der masser af. Men der er selvfølgelig også plads til grin, hygge og kage under prøverne og i de intense øveweekender. Foreningen varetages af en bestyrelse bestående af medlemmer fra koret, der hver har sit ansvarsområde. Cikaderne øver hver torsdag i EnergiCenter Voldparken i Brønshøj." },
          { title: "ØreVOX", sub: "Nørrebro", body: "Koret holder til på Nørrebro i et dejligt øvelokale, som musik-plejehjemmet Sølund stiller til rådighed, mod at koret indimellem giver små koncerter for beboerne. Koret har gennem sine flere end 25 år varieret i størrelse mellem 15 og 30 medlemmer. I efterårssæsonen 2019 var vi 30. Vi øver mandag kl. 18.30-21.00. Vi synger nordiske sange og viser, klassisk og rytmisk, jazz og pop. Flere gange om året giver koret offentlige koncerter." },
          { title: "Facett", sub: "Taastrup", body: "Koret Facett er et velsyngende kor med 45 glade sangere. Vi har alle det til fælles, at vi elsker at synge og føle glæden og den gode energi ved at skabe musikoplevelser sammen med andre. Vi synger med stor entusiasme et bredt og omfattende repertoire bestående af rytmisk og klassisk kormusik – dansk og udenlandsk, gammelt og nyt. Vi øver hver onsdag aften fra september til maj i Taastrup Kulturcenter – og skaber en fantastisk stemning med et godt mix af seriøst prøvearbejde og socialt samvær med smil og latter." },
          { title: "Kor Dialis", sub: "Valby", body: "Kor Dialis blev oprettet i 2001 og er et blandet kor, som består af ca. 45 erfarne amatørkorsangere i alderen 30-70 år. Vi øver hver tirsdag i den store sal på Plejehjemmet Langgadehus, Valby Langgade 97, 2500 Valby, kl. 18.30-21.00.\nVi synger et blandet repertoire af klassiske korværker og motetter med både kirkeligt og verdsligt indhold. Vi afholder typisk 5-6 koncerter om året fordelt på jule- og forårskoncerter, som regel ledsaget af en pianist/organist." },
          { title: "Elverhøjkoret", sub: "Virum", body: "Et ambitiøst kvindekor med p.t. 20 erfarne sangere og en lang tradition. Vi arbejder med optimering af vores klang, dynamik, tekst og udtryk. Vi undersøger og fordyber os i detaljerne for at nå frem til en helstøbt formidling af musikken.\nVi synger til både traditionelle og 'skæve' arrangementer, og vi udvikler gerne et koncept eller kommer med oplæg til koncerter i en særlig ramme. Vi øver mandage kl. 19.15-21.45 på Kulturstedet Lindegården, Peter Lunds Vej 8, 2800 Kgs. Lyngby." },
          { title: "Vox Humana", sub: "Allerød", body: "Vox Humana er et kor, som de seneste ti år har specialiseret sig i at synge ny nordisk kormusik. Meget af musikken er nykomponeret og også særligt arrangeret til Vox Humana. Vi synger ca. 8-10 koncerter om året. Vi kan også engageres til firmafester, bryllupper og andre private arrangementer. Vi tilstræber en udlandsrejse hvert andet år og et større projekt de øvrige år. Blandt andet har vi indspillet 4 cd'er. Vi øver torsdage kl 19.15-22.00 på Allerød Musikskole, Gl. Lyngevej i Allerød." },
          { title: "Eventyrkoret", sub: "Herlev", body: "Eventyrkoret er et gospel- og folkekor fra Herlev, der har eksisteret siden september 2009. Koret består af 33 sangere – mænd og kvinder – sopran, alt, tenor og bas. Koret synger både a cappella og med klaverledsagelse. Vi synger gospel, viser, salmer, pop, swing og danske sange. Koret er for alle, som kan lide at synge.\nKoret øver torsdag kl. 19.00-21.30 i Korskirken, Herlev Hovedgade 42, 2730 Herlev." },
          { title: "Korinor", sub: "Helsingør", body: "Korinor er et velfungerende, velbesat, blandet kor med hjemsted i Helsingør. Vi øver hver onsdag aften i musiklokalet på Helsingør Gymnasium.\nKoret har ca. 35 sangere i alle aldersgrupper fordelt på sopran, alt, tenor og bas, dog med lidt overrepræsentation af damestemmer. Vi synger rytmisk musik i bred forstand, lige fra Queen over Procol Harum til Tina Dickow. Vi lægger vægt på at være gode til korsang og på fællesskabet om de sociale aktiviteter." }
        ],
        source: "Kilde: cikaderne.dk, dialis.dk, elverhojkoret.dk, eventyrkoret.dk, koretfacett.dk, korinor.dk, oerevox.dk, vox-humana.dk (14.11.2020, redigeret)"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvilken kanotur varer i 7 dage?", accept: ["tur nr. 8", "tur nr 8", "nr. 8", "8", "tur 8", "tur nummer 8", "nummer 8", "tørring-fladbro", "tur nr. 8 tørring-fladbro", "tur nr. 8: tørring-fladbro", "tur 8 tørring-fladbro", "8 tørring-fladbro", "tørring-fladbro tur nr. 8", "tur nr. 8 (tørring-fladbro)", "tørring fladbro", "den ultimative gudenå-tur"] },
      { type: "short", n: 2, q: "Hvilket hotel har en udendørs swimmingpool?", accept: ["hotel balka strand", "balka strand", "balka strand hotel", "balka", "hotel balka strand i neksø", "balka strand (neksø)"] },
      { type: "short", n: 3, q: "Hvilket hotel har både spabad og sauna?", accept: ["hotel friheden", "friheden", "friheden hotel", "hotel friheden i allinge", "friheden (allinge)"] },
      { type: "short", n: 4, q: "Hvilket hotel har tennisbaner?", accept: ["stammershalle badehotel", "stammershalle", "stammershalle bade hotel", "stammershalle badehotel (bådsted)"] },
      { type: "short", n: 5, q: "På hvilke to hoteller er der cykeludlejning?", accept: ["allinge badehotel og hotel skovly"].concat(both(["allinge badehotel", "allinge", "allinge bade hotel"], ["hotel skovly", "skovly"])) },
      { type: "short", n: 6, q: "Hvilket kor øver i en kirke?", accept: ["eventyrkoret", "eventyrkoret herlev", "eventyrkoret (herlev)", "eventyrkoret i herlev", "eventyr koret", "eventyrkor"] }
    ]
  };

  const opg2 = {
    id: "p22m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Gør som 100.000 andre…", body: "Få vores online nyhedsbrev direkte i din indbakke.\nMasser af tips om mode og bolig. Få gode tilbud før alle andre!\n■■■■■■" },
          { title: "B", body: "■■■■■■\nVi tilbyder inspirerende motion i naturen med fokus på styrke, balance og kondition.\nVi har hold med professionelle instruktører alle ugens dage.\nBook en gratis prøvetime nu.\nwww.naturfit.dk" },
          { title: "C", body: "■■■■■■\n• Børnemenuer\n• Byg-selv-burgere og salatbar\n• Tag-selv softice\nÅbningstider: mandag-lørdag kl. 15-22\nSpisehuset Madglad i Bycentret\n– tag en pause på shoppingturen" },
          { title: "D – Udsalg i Dyrehandlen", body: "Vi har et stort udvalg af alle de kendte mærker inden for luksusfoder, udstyr og legetøj til glade og sunde kæledyr!\nSærtilbud i denne uge:\n■■■■■■\nVi ses på Storevej 16" },
          { title: "E", body: "■■■■■■\nI hele denne uge har vi rabat på fx:\ntasker, penalhuse, hæfter, skriveredskaber og lommeregnere.\nÅbent alle hverdage kl. 10-17\nJørgens Boghandel\nv. Jørgen Utvad, Norgesgade 11" },
          { title: "F – Frisk luft og hygge", body: "Tilmeld dig vores næste hyggelige vandretur på 7 km i Gribskov søndag d. 5/6 kl. 10. Hunde er også meget velkomne.\nDeltagelse er gratis.\nTilmelding på www.gs-vl.dk\n■■■■■■" },
          { title: "G – Træning for små og store hunde", body: "Intensiv træning på små hold med uddannet instruktør.\nVi træner tirsdag og torsdag eftermiddag i Visby Hallen. Alle hunderacer er velkomne.\nFå nærmere information om hold, tid og priser på vores hjemmeside:\n■■■■■■" },
          { title: "H", body: "■■■■■■\nHer kan hele familien lære at lave lette og sunde hverdagsretter, og alle hjælper hinanden.\n• Pris inkl. råvarer: Kr. 680,-\n• Tid: søndag d. 6/8, 3/9 og 1/10 kl. 11-14\n• Sted: Engvangskolen\nTilmelding på www.familieforeningen.dk" },
          { title: "I", body: "■■■■■■\nGamby Skole søger nogle frivillige, som har lyst til at læse med skolebørn fra 1. til 3. klasse i skoletiden.\nInteresseret?\nKontakt vejleder Lene Ibsen på tlf. 31 98 08 31" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Tilmeld dig på www.smukkehjem.dk", answer: "A", example: true },
          { n: 7, text: "20 % rabat på hundemad.", answer: "D" },
          { n: 8, text: "Effektiv udendørs træning!", answer: "B" },
          { n: 9, text: "Madkursus for børn og voksne.", answer: "H" },
          { n: 10, text: "Alt til dit barns skolestart.", answer: "E" },
          { n: 11, text: "Besøg vores familievenlige restaurant.", answer: "C" },
          { n: 12, text: "Kan du hjælpe os 2-3 timer om ugen?", answer: "I" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p22m-3", group: G, real: true,
    title: "Opgave 3 – Held i uheld",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Linda på 55 er [[0]] og bor alene i et hus lidt uden for Herning. Hendes søster bor inde i byen, og Linda tager tit bilen og kører til Herning for at besøge sin søster.

En lørdag formiddag skal Linda til Herning for at shoppe og spise frokost med sin søster. Hun kører ind på en stor parkeringsplads midt i Herning, selvom hun ved, at det godt kan tage [[13]] tid at finde en plads der. Der er mange biler på parkeringspladsen, og Linda kører rundt og kigger efter en ledig plads. Da bilen foran hende pludselig stopper, ser hun det for [[14]], og derfor kører hun ind i den. Linda bliver ret chokeret, men manden i den anden bil ser [[15]] ud som om, han er okay, og det gør hende mere rolig. Hun står ud af sin bil og hilser på manden, som hedder Ole, og de kigger på bilerne sammen. Der er ikke sket noget med Lindas bil, men der er [[16]] kommet en lille bule i Oles bil, og det er han ret sur over. Men da Linda siger, at hendes forsikring nok skal betale, og spørger, om hun må invitere ham på en kop kaffe, bliver han i [[17]] humør. Han siger ja tak og smiler, og da de har parkeret deres biler, går de hen på en café i nærheden.

De sidder længe på caféen og snakker, og Linda glemmer helt, at hun har en frokostaftale med sin søster, [[18]] hun hygger sig så godt med Ole. Men pludselig ser Linda, at klokken er mange. Hendes søster venter på hende, og [[19]] Linda gerne vil snakke mere med Ole, er hun nødt til at gå. Ole har heldigvis [[20]] lyst til at snakke mere med Linda, så før hun skynder sig afsted, aftaler de at ringe sammen og mødes igen en anden dag.`,
    questions: [
      {
        type: "gaps",
        bank: ["skilt", "kort", "men", "tidligt", "dårligt", "sent", "bedre", "også", "heldigvis", "selvom", "ikke", "fordi", "lang", "desværre"].map(w => ({ key: w, text: w })),
        example: { 0: "skilt" },
        answers: { 13: "lang", 14: "sent", 15: "heldigvis", 16: "desværre", 17: "bedre", 18: "fordi", 19: "selvom", 20: "også" }
      }
    ]
  };

  const opg4 = {
    id: "p22m-4", group: G, real: true,
    title: "Opgave 4 – Sanne er social- og sundhedshjælper",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Sanne på 26 år har en travl hverdag. Hun er gift og har en datter på 3 år, og for nogle måneder siden fik hun fast job som social- og sundhedshjælper.

**0.** Sanne er 26 år og bor i Viborg sammen med sin mand og deres datter på 3 år. Hun er nyuddannet social- og sundhedshjælper, og de sidste par år har uddannelsen fyldt meget i hendes liv. [[0]]. Nu er hun nemlig ansat og arbejder på fuld tid som social- og sundhedshjælper på et plejehjem, som hedder Birkebo. Og hun bruger meget energi på sit nye job og på at få hverdagen til at fungere derhjemme.

**21.** De fleste af social- og sundhedshjælperne på Birkebo har arbejdet der i mange år, så de har meget erfaring. [[21]]. For selvom hun har lært meget på sin uddannelse, er hun også ny i jobbet, og derfor er der tit noget, hun ikke ved, hvordan hun skal gøre. Så hun synes, det er virkelig rart, at hun altid kan få hjælp fra en erfaren kollega.

**22.** Det kan godt være fysisk hårdt at arbejde med ældre mennesker på et plejehjem. Derfor har mange social- og sundhedshjælpere ondt i ryggen. [[22]]. Da hun tog sin uddannelse, lærte hun nemlig forskellige teknikker til at løfte de ældre, når de fx skal ud af sengen, og dem bruger hun selvfølgelig. Hun er også stærk og i god form, fordi hun dyrker yoga og svømmer flere gange om ugen, og derfor har hun faktisk aldrig ondt i ryggen.

**23.** Sanne har skiftende arbejdstider på Birkebo, og det bliver hun og hendes mand, Claus, altid nødt til at tage med i deres planlægning. Når Sanne har eftermiddagsvagt, kan hun fx ikke hente deres datter fra børnehave. [[23]]. Claus arbejder nemlig som maler, og han har faste arbejdstider og fri kl. 15 hver dag. Derfor har han altid mulighed for at hente deres datter, Olivia, og det er vigtigt i familiens hverdag.

**24.** Sanne har også en del aftenvagter på plejehjemmet. [[24]]. Hun synes ellers, det er hyggeligt at være på Birkebo om aftenen og servere aftensmad for de ældre, men når hun arbejder om aftenen, kan hun ikke være hjemme og lægge Olivia i seng om aftenen. Det er Olivia ked af, og det er Sanne også. Så hun vil helst arbejde i dagtimerne.

**25.** Sanne har været på Birkebo i tre måneder, og hun skal snart til en samtale med sin chef, hvor de skal snakke om, hvordan det går med arbejdet. [[25]]. For hun har aldrig været til sådan en samtale før, og hun er lidt bange for sin chef. Men hun håber, han er tilfreds med hendes arbejde, for hun synes selv, det går godt, og hun er glad for at være på Birkebo.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Men det gør den ikke mere." },
          { key: "B", text: "Hun er nervøs for, hvad han vil sige." },
          { key: "C", text: "Men det har Sanne heldigvis ikke." },
          { key: "D", text: "Og det passer ikke så godt med hendes familieliv." },
          { key: "E", text: "Det har Sanne desværre også." },
          { key: "F", text: "Og det er Sanne rigtig glad for." },
          { key: "G", text: "Men det kan hendes mand heldigvis godt." },
          { key: "H", text: "Men de har ikke tid til at hjælpe Sanne." }
        ],
        example: { 0: "A" },
        answers: { 21: "F", 22: "C", 23: "G", 24: "D", 25: "B" }
      }
    ]
  };

  const opg5 = {
    id: "p22m-5", group: G, real: true,
    title: "Opgave 5 – Interview med Lena",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Lena – professionel musiker",
        cards: [
          { title: "A", sub: "Eksempel", body: "Jeg har været glad for at synge, siden jeg var helt lille, og da jeg var 10, ville jeg gerne lære at spille et instrument. Så mine forældre købte en guitar til mig, og jeg startede også med at gå til undervisning. Og siden da har musikken været næsten hele mit liv." },
          { title: "B", body: "Ja, det går ok. Selvfølgelig er det meget forskelligt, hvad der kommer ind på min konto hver måned. Og der har også været perioder, hvor min økonomi ikke har været så god, og så har jeg selvfølgelig været nødt til at tænke mere over, hvordan jeg bruger mine penge. Men lige nu går det faktisk rigtig fint." },
          { title: "C", body: "At stå på en scene foran en masse mennesker og spille min musik. For når jeg gør det, kan jeg altid mærke, at min musik betyder noget for andre. Og når folk hører min musik, og kommer hen til mig efter koncerten og siger, at de er vilde med mine sange, bliver jeg rigtig stolt og glad." },
          { title: "D", body: "Nej, det synes jeg ikke. Men det er også kun, fordi jeg nu er i en situation, hvor jeg kan leve af min musik. Mange af mine kolleger vil helt sikkert sige, at det er et stort problem, at de ikke tjener nok til at kunne leve af at spille. Og det er hårdt. Det ved jeg alt om, for jeg har selv prøvet det." },
          { title: "E", body: "Det føles mest naturligt, fordi det er mit modersmål. Nu skriver jeg jo selv mine sange, og det er det sprog, jeg bedst kan udtrykke mig på. Men jeg ved godt, at hvis jeg i fremtiden også skal have succes i udlandet, bliver jeg nødt til at skrive mine sange på engelsk." },
          { title: "F", body: "Jeg har en bred musiksmag, så jeg hører faktisk mange forskellige slags musik. Jeg går tit til klassiske koncerter. Og jeg kan også godt lide heavy rock. Det er mange overraskede over, men jeg hører det tit, når jeg fx løber eller er til fitness, fordi jeg synes, der er en god energi i den musik." },
          { title: "G", body: "At få international succes med min musik og rejse rundt i hele verden og en dag give koncerter på nogle af de helt store scener rundt om i verden, fx i England og Japan. Men det er jo desværre ikke noget, der sker for særlig mange musikere. Men det kunne jeg godt tænke mig." },
          { title: "H", body: "Jeg har min egen stil, hvor jeg blander pop med lidt jazz. Jeg synger på dansk, og de fleste af mine sange er kærlighedssange, der handler om drømme og oplevelser, jeg selv har haft. Jeg synes selv, at de bedste af mine sange er dem, der er meget personlige." }
        ]
      }
    ],
    note: "Lena på 29 er musiker. Hun synger, spiller guitar og laver sin egen musik. Sidste år udgav hun sit første album.",
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvornår begyndte du at interessere dig for musik?", answer: "A", example: true },
          { n: 26, text: "Hvad slags musik laver du?", answer: "H" },
          { n: 27, text: "Hvorfor synger du på dansk?", answer: "E" },
          { n: 28, text: "Kan du tjene nok som musiker?", answer: "B" },
          { n: 29, text: "Er der nogen ulemper ved at være musiker?", answer: "D" },
          { n: 30, text: "Hvad drømmer du om i fremtiden?", answer: "G" }
        ]
      }
    ]
  };

  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(fallback < 0 ? PD2.READING.length : fallback, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling maj-juni 2022 ----------
  const wFallback = PD2.WRITING.findIndex(w => !w.real);
  PD2.WRITING.splice(wFallback < 0 ? PD2.WRITING.length : wFallback, 0,
    {
      id: "w22ma", delprove: 1, real: true, year: 2022,
      title: "A: En klage over et madlavningskursus (maj 2022)",
      kind: "Prøveopgave · klage til en kokkeskole",
      minWords: 80, maxWords: 150,
      situation: "Du har lige været på et kursus i madlavning på Vedbys Kokkeskole. Desværre var du meget utilfreds med kurset, og derfor vil du skrive en klage til kokkeskolen. Skriv klagen til Vedbys Kokkeskole. Du skal begynde og afslutte klagen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvornår du var på kurset, og hvad du betalte for det", "Hvad du lavede på kurset", "Hvorfor du er utilfreds med kurset", "Hvad du gerne vil have, at Vedbys Kokkeskole skal gøre"],
      phrases: ["Kære Vedbys Kokkeskole", "Jeg skriver til jer, fordi jeg vil klage over …", "Det drejer sig om …", "Problemet er, at …", "Derfor vil jeg gerne bede jer om at …", "Med venlig hilsen"],
      model: `Kære Vedbys Kokkeskole

Jeg skriver til jer, fordi jeg vil klage over det madlavningskursus, jeg var på hos jer.

Det drejer sig om kurset "Det italienske køkken" lørdag den 14. maj kl. 10-16. Jeg betalte 1.200 kr. for kurset. Vi skulle lave frisk pasta, risotto og tiramisu.

Problemet er, at kurset ikke var, som det stod på jeres hjemmeside. Vi var 20 deltagere, men der var kun fire komfurer, så de fleste af os stod bare og kiggede på. Desuden kom kokken en time for sent, så vi nåede aldrig at lave tiramisuen.

Jeg har allerede talt med kokken efter kurset, men han sagde bare, at det ikke var hans skyld.

Derfor vil jeg gerne bede jer om at give mig pengene tilbage.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Ali Hassan
Søndergade 18, 8600 Silkeborg`
    },
    {
      id: "w22mb", delprove: 1, real: true, year: 2022,
      title: "B: Et takkebrev efter praktik i et supermarked (maj 2022)",
      kind: "Prøveopgave · takkebrev efter praktik",
      minWords: 80, maxWords: 150,
      situation: "Du er lige blevet færdig med din praktik i supermarkedet Total. Du har været glad for din praktik og vil skrive et takkebrev til dine kolleger i supermarkedet. Skriv takkebrevet til dine kolleger. Du skal begynde og afslutte takkebrevet på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Tak dine kolleger for en god praktik", "Fortæl, hvad du synes, du har lært i din praktik", "Fortæl lidt om, hvad du skal lave nu", "Fortæl, hvorfor du vil savne dine kolleger, og hvordan du vil holde kontakten med dem"],
      phrases: ["Kære alle i …", "Tusind tak for en god praktik.", "Jeg har lært at …", "Jeg kommer til at savne jer, fordi …", "Nu skal jeg …", "Endnu en gang tusind tak for alt."],
      model: `Kære alle i Total

Tusind tak for en rigtig god praktik hos jer. Jeg har været så glad for mine tolv uger i supermarkedet.

Jeg har lært at fylde varer på hylderne, tjekke datoer og sidde ved kassen. Jeg har også lært at tale med kunderne på dansk, og det er jeg blevet meget mere sikker på.

Jeg kommer til at savne jer, fordi I altid var søde og tålmodige, og fordi vi havde det sjovt i frokostpauserne. Jeg vil gerne holde kontakten, så jeg har lavet en gruppe på Facebook, og jeg kommer selvfølgelig stadig og handler hos jer.

Nu skal jeg begynde på en uddannelse som detailhandelsassistent efter sommerferien. Jeg håber, at jeg kan få en elevplads i et supermarked ligesom Total.

Endnu en gang tusind tak for alt. Jeg håber, at vi ses snart!

Mange hilsner
Leila`
    },
    {
      id: "w22mc", delprove: 2, real: true, year: 2022,
      title: "En e-mail om en ferie, der ikke var så god (maj 2022)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Lasse. I e-mailen skriver han bl.a.: \"… Jeg har hørt, at du har haft ferie, og at din ferie ikke var så god. Det er jeg ked af at høre. Skriv og fortæl mig lidt om ferien, og hvorfor den ikke var så god…\" Skriv et svar til Lasse og fortæl om din ferie, og hvorfor den ikke var så god. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvor du var på ferie, og hvem du var sammen med", "Fortæl, hvad der skete på ferien", "Forklar, hvorfor ferien ikke var så god", "Fortæl, hvad du vil gøre anderledes næste gang"],
      phrases: ["Hej Lasse", "Tak for din mail.", "Du spørger om min ferie, …", "For det første var jeg …", "Derudover …", "Næste gang vil jeg …"],
      model: `Hej Lasse

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om min ferie, og det vil jeg gerne fortælle dig lidt om.

For det første var jeg en uge i Spanien sammen med min kone og vores to børn. Vi havde glædet os meget, men allerede i lufthavnen gik det galt, fordi flyet var fire timer forsinket.

Derudover var hotellet slet ikke som på billederne. Værelset var lille og beskidt, og der var meget larm fra en bar lige ved siden af, så vi kunne ikke sove om natten. Midt i ugen blev min søn også syg med feber, så vi måtte blive på værelset i to dage.

Til sidst vil jeg sige, at vi trods alt fik nogle dejlige dage på stranden. Men næste år tror jeg, at vi holder ferie i et sommerhus i Danmark.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Karim`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven maj-juni 2022 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p22m-a", title: "At lære dansk", real: true, year: 2022,
      pictures: [
        { img: "images/pd2-2022-m/at-laere-dansk-1.jpg", credit, alt: "En mand med høretelefoner sidder ved køkkenbordet og lærer dansk på sin computer, mens hans kone laver mad, og børnene larmer med en fløjte og en tromme", words: ["lære dansk derhjemme", "online", "høretelefoner", "larme", "koncentrere sig"] },
        { img: "images/pd2-2022-m/at-laere-dansk-2.jpg", credit, alt: "Voksne kursister fra mange lande sidder ved borde på en sprogskole og arbejder sammen med bøger og computer, mens læreren står og smiler", words: ["sprogskole", "kursister", "læreren", "gruppearbejde", "diskutere"] }
      ],
      interview: [
        "Som sagt viser billedet en mand, der lærer dansk derhjemme. Vil du godt beskrive situationen på billedet?",
        "Hvad synes du om, at man lærer dansk online?",
        "Som sagt viser billedet nogle personer, der lærer dansk. Vil du godt beskrive situationen på billedet?",
        "Hvad synes du om, at man lærer dansk på en sprogskole?",
        "Hvordan har du selv lært dansk? Hvad synes du om det?"
      ],
      talk: [
        { who: "mediator", say: "Hvad kan man som udlænding gøre for at lære dansk, hvis man har en travl hverdag? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, man kan gå på sprogskole om aftenen eller i weekenden. Hvad synes du?" },
        { who: "partner", say: "Man kan også lære meget derhjemme, fx med apps på mobilen eller ved at se danske film. Er du enig?" },
        { who: "partner", say: "Jeg tror, man lærer mest, når man taler med kolleger og kunder på arbejdet. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad med fritiden – fx at gå til sport sammen med danskere eller lave frivilligt arbejde? Hvad synes I generelt er den bedste måde at lære dansk på?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det gode ved at lære dansk online er, at …", "På en sprogskole kan man …", "Jeg har lært dansk ved at …", "Hvis man har travlt, kan man …", "Er du enig?"]
    },
    {
      id: "p22m-b", title: "Et godt liv som ældre", real: true, year: 2022,
      pictures: [
        { img: "images/pd2-2022-m/et-godt-liv-som-aeldre-1.jpg", credit, alt: "Ældre mennesker træner i et fitnesscenter: en kvinde cykler på en motionscykel, en mand løfter håndvægte, og en kvinde laver øvelser på en måtte", words: ["dyrke motion", "fitnesscenter", "håndvægte", "motionscykel", "holde sig i form"] },
        { img: "images/pd2-2022-m/et-godt-liv-som-aeldre-2.jpg", credit, alt: "Bedsteforældre passer deres børnebørn i stuen: bedstefaren spiller brætspil med to børn i sofaen, og bedstemoren sidder ved bordet med et lille barn, der har væltet sin kop og spildt spaghetti ud over det hele", words: ["bedsteforældre", "børnebørn", "passe børn", "brætspil", "spilde"] }
      ],
      interview: [
        "Som sagt viser billedet nogle ældre mennesker, der dyrker motion. Vil du godt beskrive situationen på billedet?",
        "Hvad synes du om, at ældre mennesker dyrker motion?",
        "Som sagt viser billedet nogle ældre mennesker, der passer deres børnebørn. Vil du godt beskrive situationen på billedet?",
        "Hvad synes du om, at ældre mennesker hjælper med at passe deres børnebørn?",
        "Hvad vil du selv gerne lave, når du bliver ældre? Hvorfor?"
      ],
      talk: [
        { who: "mediator", say: "Er det bedst for ældre mennesker at fortsætte med at arbejde eller at stoppe med at arbejde og gå på pension? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, det er godt at fortsætte med at arbejde, for så tjener man penge og holder sig aktiv. Hvad synes du?" },
        { who: "partner", say: "Men arbejdet kan være hårdt fysisk, og man bliver hurtigere træt, når man bliver ældre. Er du enig?" },
        { who: "partner", say: "Når man går på pension, får man mere tid til familien, børnebørnene og nye fritidsinteresser. Hvad tænker du om det?" },
        { who: "mediator", say: "Men nogle savner deres job og kolleger og føler sig ensomme. Hvad synes I generelt er et godt liv som ældre?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det er godt, at ældre mennesker …, fordi …", "Når jeg bliver ældre, vil jeg gerne …", "En fordel ved at gå på pension er, at …", "En ulempe er, at …", "Hvad med dig?"]
    },
    {
      id: "p22m-c", title: "Sund eller usund livsstil", real: true, year: 2022,
      pictures: [
        { img: "images/pd2-2022-m/sund-eller-usund-livsstil-1.jpg", credit, alt: "Et par sidder i sofaen og ser fodbold i fjernsynet; manden ryger og drikker sodavand, og de spiser chips og pizza; der står ketchup på bordet og ligger en tom pizzaæske på gulvet", words: ["leve usundt", "ryge", "chips", "overvægtig", "sidde i sofaen"] },
        { img: "images/pd2-2022-m/sund-eller-usund-livsstil-2.jpg", credit, alt: "En mand i cykeltøj skærer grøntsager i køkkenet, mens en kvinde laver mavebøjninger på en måtte foran fjernsynet med en træningsvideo", words: ["leve sundt", "grøntsager", "lave mad", "træne", "mavebøjninger"] }
      ],
      interview: [
        "Som sagt viser billedet nogle personer, der lever usundt. Vil du godt beskrive situationen på billedet?",
        "Som sagt viser billedet nogle personer, der lever sundt. Vil du godt beskrive situationen på billedet?",
        "Hvad synes du om, at man lever på den måde?",
        "Er det vigtigt for dig at leve sundt? Hvis ja: Hvordan lever du sundt? Hvis nej: Hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "Hvad kan en familie med to børn, der lever usundt og ikke dyrker motion, gøre for at leve mere sundt? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, de skal lave en madplan for en uge og planlægge deres indkøb. Hvad synes du?" },
        { who: "partner", say: "De kan også gå eller cykle til arbejde og i skole i stedet for at tage bilen. Er du enig?" },
        { who: "partner", say: "Måske skal de få en hund, så de kommer ud at gå tur hver dag. Hvad tænker du om det?" },
        { who: "mediator", say: "Hvad med at dyrke sport sammen eller holde aktive ferier? Hvad synes I generelt er det vigtigste for at leve sundt?" }
      ],
      phrases: ["På billedet kan jeg se …", "De lever usundt/sundt, fordi …", "Jeg synes, det er vigtigt at …", "For at leve sundt gør jeg …", "Familien kan fx …", "Er du enig?"]
    }
  );
})();
