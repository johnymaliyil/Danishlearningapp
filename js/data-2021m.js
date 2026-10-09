// Prøve i Dansk 2, maj-juni 2021 – transcribed from the exam papers (produktionsnr. 07-11).
// Included: læseforståelse opgave 1-5 and skriftlig fremstilling (delprøve 1 A/B and delprøve 2).
// No oral material (mundtlig kommunikation, picture sheets) was supplied for this session, so
// there are no speaking topics in this file.
// The answers to opgave 1-5 are the official ones from the censor- og eksaminatorhæfte
// (rettenøgler, produktionsnr. 11); the short-answer accept lists add reasonable variants.
// The paper gives no bullet points for delprøve 2, so the four points there are our own.
// The model answers for skriftlig fremstilling are our own (the paper has none).

(function () {
  const G = "PD2 maj-juni 2021";

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
    id: "p21m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilken restaurant sælger pizza med rabarber?\" – PzNordic.",
    sections: [
      {
        heading: "Gode pizzaer i København",
        cards: [
          { title: "PzNordic", sub: "Gothersgade 153, 1123 København K", body: "PzNordic mellem Kongens Have og Botanisk Have kombinerer det bedste fra to madtraditioner, nemlig den italienske og den nordiske. De to ejere, Davide Maganuco og Morten Frydensdal, brænder for gourmetpizza, der skifter alt efter, hvilken farve sæsonens blade har ude på træerne.\nForvent ingredienser som østershattepuré, brændt porrestøv og syltede rabarber. Sådan har du sikkert ikke fået din pizza før." },
          { title: "Forno a Legna", sub: "Falkoner Allé 42, 2000 Frederiksberg", body: "Hos Forno a Legna på Frederiksberg har de specialiseret sig i de hvide pizzaer. Det betyder, at man kan få sin yndlingsspise uden den traditionelle tomatsauce, som ellers udgør bunden i mange pizzaer. Bunden er sprød og knasende, og der er et utal af italienske delikatesser, som man kan vælge som topping." },
          { title: "Mother", sub: "Høkerboderne 9-15, 1712 København V", body: "Mother i Kødbyen er et af byens sikreste kort, hvis du vil smage den italienske nationalspise. Bunden er fremelsket af surdej, hvilket selvfølgelig kan smages. Når man arbejder med surdej, er der altid en moder-surdej, og det er faktisk her, navnet Mother er hentet fra. Ejer David Biffani har siden første åbningsdag haft næsten fuldt hus, og folk flokkes ikke blot om de populære pizzaer, men nyder også godt af de rå omgivelser i Kødbyen, hvor man også kan sidde udenfor på de mange bænke." },
          { title: "Hos Fischer", sub: "Victor Borges Plads 12, 2100 København Ø", body: "Hos Fischer er drevet af David Fischer. Fischer har arbejdet på L'Arpège i Paris og et par år på Roms eneste trestjernede Michelin-restaurant, La Pergola, inden han åbnede Hos Fischer på Victor Borges Plads. I 2019 gik han all in på pizza. Den romerske af slagsen – den med en ultratynd og knasende bund. Det kan i dén grad smages, at Fischer har inde på rygraden, at enkle, men suveræne råvarer gør hele forskellen.\nHos Fischer har altid 4-6 forskellige pizzaer på menuen, og de koster 100,- kr." },
          { title: "Bæst", sub: "Guldbergsgade 29, 2200 København N", body: "Bæst laver et, ja bæst af en pizza. Sådan må det jo naturligvis være, når ejeren af den 1.000 m² store restaurant hedder Christian Puglisi. Med sine italienske rødder har han en stolthed over for råvarerne som få andre i verden. Ja, i verden. Bæsts pizza er flere gange stemt ind som en af verdens 10 bedste pizzaer. Deres grillede bund giver den bedste base for deres egenproducerede råvarer som charcuteri og oste." },
          { title: "Frankies Pizza Nørrebro", sub: "Sortedam Dossering 5, 2200 København N", body: "Madklubben vil også være med på det italienske. Deres mest brugte våben er de Valoriani-pizzaovne, de har fået installeret, og som bager den ene sprøde, halvrøgede pizzabund efter den anden – efter blot et minuts tid under varmen.\nMed udsigt direkte over Søerne er der også noget for øjnene herinde." },
          { title: "Behov – en spisebutik", sub: "Rentemestervej 94, 2400 København NV", body: "Alle har vel egentlig behov for pizza. Ude i Nordvest så meget, at de har opkaldt deres biks efter det. Her kan man endda samle-sin-egen-pizza, og det er lige meget, hvor mange toppings man smider på, prisen er den samme.\nSom med et hus starter man fra bunden med at vælge dej: klassisk, fuldkorn eller glutenfri. Så skal der tages stilling til rød, hvid eller grøn sauce og dernæst osten, inden man har frit valg i ingredienstombolaen." },
          { title: "Tribeca NV", sub: "Bygmestervej 2, 2400 København NV", body: "Tribeca i Nordvest er intet mindre end et decideret pizza- og øl-laboratorium, der har specialiseret sig i siciliansk stenovnspizza. De udvikler konstant nye smagssammensætninger, men altid med økologiske råvarer. Tomat og mozzarella er faste ingredienser på menukortet, men der er også altid plads til eksotiske ingredienser som 'nduja (stærk, smørbar italiensk pølse), gedeost, asparges og artiskokcreme." }
        ],
        source: "Kilde: migogkbh.dk/her-faar-du-koebenhavns-bedste-pizza (24.11.2019, redigeret)"
      },
      {
        heading: "Feriehuse i Vestjylland",
        cards: [
          { title: "Feriehus nr. 111", sub: "Bjerregård Strand", body: "Spændende feriehus med en stor indendørs swimmingpool og en betagende udsigt ud over heden og klitterne ved Vesterhavet. Husets dejlige indretning med bl.a. gode soveværelser, hyggeligt køkken-alrum med brændeovn, spabad og sauna danner rammen om en god og afslappende ferie. Stranden ligger kun 400 m borte. Besøg området, bl.a. Hvide Sande med fiskerihavn med mulighed for vandski, surfing og fiskeri, eller Bork Havn med en hyggelig fjordhavn og et spændende vikingemuseum. Her er det perfekte feriehus, hvor husdyr også er velkomne, i et skønt område for den perfekte ferie." },
          { title: "Feriehus nr. 112", sub: "Blåvand", body: "På en dejlig lynggrund ligger dette store, rustikke feriehus. Det er indrettet med i alt fire soveværelser, og derudover er der en hems med to sovepladser. Den hyggelige opholdsstue ligger i direkte forbindelse med køkken og spisestue. Stuen har store panoramavinduer, hvorfra der er udsigt til den smukke natur, og I får fornemmelsen af, at naturen er lukket indenfor. I den ene ende af huset er der swimmingpool, spabad og sauna. På terrassen kan man sidde uforstyrret og nyde den friske luft. Der er ikke langt til vandland, tennisbaner og golfbane. Det er kun tilladt at medbringe ét husdyr." },
          { title: "Feriehus nr. 113", sub: "Bork Havn", body: "Unikt hus med pool bygget i en flot, moderne stil og indeholdende alt, hvad I skal bruge på ferien. Poolrummet rummer også en stor indendørs spa. Alle værelser er meget rummelige og har højt til loftet, og begge badeværelser er nye. Det velindrettede køkken-alrum med brændeovn indeholder alt i hårde hvidevarer. Husdyr er tilladt. Området er kendt for gode surfmuligheder i Ringkøbing Fjord og den lille, hyggelige havn. I nærheden ligger der en børnevenlig strand." },
          { title: "Feriehus nr. 114", sub: "Henne Strand", body: "Dejligt feriehus med spa samt sauna og en unik beliggenhed ved Henne Strand. Det er på mange måder et praktisk hus, hvor der er tænkt på alle generationer. Til børnene er der bl.a. en god, lille hems, som kan bruges til legehule. Husdyr er tilladt. Husets indendørs poolafdeling kan ses fra stuen, så I kan holde øje med børnene. Henne har et af Danmarks bedste naturområder, og derudover er der både golf, ridning og vandreture næsten direkte uden for døren. Centrum af Henne Strand med restauranter, butikker samt vestkystens bedste badestrande ligger i gåafstand fra huset." },
          { title: "Feriehus nr. 115", sub: "Ho", body: "Dette velholdte feriehus ligger i naturskønne omgivelser og tæt på Ho Golfbane og Ho Bugt. Køkkenet ligger i åben forbindelse med spise- og opholdsstuen. Stuen har klinker med løse tæpper, og alle soverum har trægulv. Der er 5 dejlige soverum samt to flotte badeværelser. Den velmøblerede stue har brændeovn, som spreder hygge og varme. Fra stuen kan I holde øje med de badendes leg gennem glasdørene til det store indendørs poolrum med både swimmingpool, sauna og spabad. Til huset hører også to dejlige terrasser, begge med halvmure til at skabe læ. Husdyr er tilladt." },
          { title: "Feriehus nr. 116", sub: "Houstrup", body: "Nyd ferien i dette rummelige og hyggeligt indrettede hus med større køkken-alrum, hvorfra der er udgang til den udendørs swimmingpool på 35 m². Huset er egnet til kørestolsbrugere (hoveddøren er 90 cm bred og de øvrige døre 77 cm). Kanten omkring poolen er 50 cm høj. Huset har flere gode soveværelser – i det ene er der opsat et arbejds- og computerbord. Man må have husdyr i huset. Nyd området på de anlagte stier på gåben, til hest og på cykel. Hvis I har heldet med jer, kan I se noget af det kronvildt, der lever i plantagen." },
          { title: "Feriehus nr. 117", sub: "Houvig", body: "I naturskønne omgivelser nord for Søndervig ligger dette pragtfulde stråtækte murstenshus, som er velegnet til flere familier. Komforten er i særklasse i dette feriehus, og alle husets gulve er belagt med klinker. I poolafdelingen kan du tage dig en dukkert og samle ny energi i spabadets varme, boblende vand. Den 10.500 m² store grund går direkte ud til stranden. Husdyr er tilladt. Der er en stor hems med soveplads til to personer, oplagt til familiens børn og unge. Søndervig er en hyggelig lille by med kunsthåndværkere, dagligvareforretninger, restauranter og cafeer." },
          { title: "Feriehus nr. 118", sub: "Jegum", body: "Dejligt feriehus med stor poolafdeling, spabad samt sauna. Huset er praktisk indrettet med et større køkken-alrum med klinkegulv og gulvvarme samt udgang til en stor terrasse med et overdækket grillområde. På grunden findes en stor legeborg med rutsjebane samt udendørs bordtennis. Husdyr er velkomne. Syv km fra huset ligger Outrup Golfbane, og der er cykelsti til én af vestkystens bedste badestrande ved Hvidbjerg i Blåvand. Ønsker I en lidt mere rolig strand, er Børsmose Strand oplagt, og I må tage bilen med helt ned på stranden." },
          { title: "Feriehus nr. 119", sub: "Klegod", body: "I Holmslands Klits pragtfulde natur ligger dette smagfuldt indrettede feriehus tæt ved havet og med en skøn udsigt fra grunden. Poolrummet indbyder til aktivitet og leg i den 19 m² store swimmingpool, og der er også spabad og sauna. Udendørs kan I hygge på terrassen, slappe af i liggestolene og grille lækre måltider. Husdyr er tilladt. Huset ligger i Klegod mellem de to attraktive byer Hvide Sande og Søndervig. I selve Klegod finder I, udover mange gode vandre- og cykelstier, en hyggelig fiskesø og Lyngvig Fyr, hvorfra I har den smukkeste udsigt til både hav og fjord. Inkluderet i lejen er ligeledes fri fiskeret i en del af Hover Å." },
          { title: "Feriehus nr. 120", sub: "Nymindegab", body: "Dette feriehus med indendørs swimmingpool ligger på en stor naturgrund grænsende op til Nyminde Klitplantage. Til huset hører en dejlig terrasse med gynge og sandkasse. Stuen er hyggeligt og personligt indrettet og har direkte udgang til terrassen samt en brændeovn, der luner på kølige dage. Bemærk, at husdyr ikke er tilladt. Oplev den smukke natur rundt om fjorden på skønne gå- eller cykelture. Hvis I er ivrige lystfiskere, kan I tage en tur på havet med fiskekutter. Mulighederne er mange i denne dejlige del af Danmark." },
          { title: "Feriehus nr. 121", sub: "Vejers Strand", body: "Pragtfuldt feriehus beliggende i yderste række på en kuperet klitgrund meget tæt på Vesterhavet. Den fint dekorerede indendørs poolafdeling byder på en stor swimmingpool, spabad samt adgang til sauna og badeværelse. Huset er hyggeligt indrettet og tilladt for husdyr. Køkkenet ligger i åben forbindelse med den store spise- og opholdsstue med brændeovn. På husets afskærmede terrasse kan I slappe af med en kop kaffe, mens I tilbereder et lækkert måltid mad på grillen. Der er gåafstand til Vejers by, hvor der bl.a. er et bolsjekogeri og et bageri. På den ene side af Vejers Strand er bilkørsel tilladt, mens den anden del er bilfri." },
          { title: "Feriehus nr. 122", sub: "Vester Husby", body: "Denne stråtækte idyl byder på de optimale muligheder for såvel en afslappet som en aktiv ferie. Feriehuset ligger i et gammelt klit- og plantageområde med et rigt dyreliv. Egnen er perfekt til lange vandre-, løbe- eller cykelture på de afmærkede stier, der blandt andet fører ud til Vesterhavet. Har I ikke brugt alle kræfterne ude i naturen, kan I tage en rask svømmetur i den store indendørs swimmingpool. Der er også en børnepool. Huset er moderne indrettet og velegnet til flere familier. På den store lukkede terrasse kan I altid finde læ, når I vil nyde solens varme stråler. Husdyr er tilladt." }
        ],
        source: "Kilde: novasol.dk/feriehuse (29.11.2019, redigeret)"
      },
      {
        heading: "Sejladser i Limfjorden",
        cards: [
          { title: "Tur nr. 1: Solnedgangstur", body: "Vores turbåd tager jer med på en 2 timers hyggelig aftentur på Limfjorden. Nyd det betagende landskab omkring Sallingsundbroen og det flotte område ved Legind Vejle set fra søsiden.\nMedbring evt. din egen madkurv. Øl, vand og vin skal købes ombord.\nGæsterne, der stiger på ved Sallingsund Færgekro, er velkomne til at tage med til Nykøbing, hvor de kan tage bybussen tilbage til Sallingsund kl. 20.15 gratis." },
          { title: "Tur nr. 2: Sælsafari", body: "Det vrimler med sæler i Limfjorden. Man regner med en bestand på 2.700 sæler, en stigning på intet mindre end 80 procent siden 2010. Mange af disse holder til på Blinderøn. Sælerne ligger som oftest i store grupper og lever på Blinderøn hele året. I tilfælde af højvande, hvor sælernes opholdssteder oversvømmes, sejles der en aftentur med mulighed for at beundre de flotte molerskrænter.\nAfgang fra Nykøbing Havn kl. 18.00, hjemkomst kl. 21.00. Aftensmad kan købes: Svinekam stegt som vildt med tilbehør, herefter æblekage." },
          { title: "Tur nr. 3: Ø-hop til Livø", body: "Sejl med til Livø. Den lille ø er bilfri, så den indbyder til gode vandreture. Undervejs er der rig mulighed for at se sæler, specielt på den fredede og utilgængelige Livø Tap.\nDer bliver ca. 3 timers ophold på øen, og frokosten på Livø kan bestilles gennem Morsø Turistbureau. Man er også velkommen til selv at medbringe frokostkurv. Det er muligt at hoppe af på Fur. Man kan tage cykel/barnevogn med på turen for kr. 50,-." },
          { title: "Tur nr. 4: Mors Rundt", body: "Turen rundt om Mors byder på enestående naturscenerier. Landskabet skifter fra nord til syd. Fra det barske til det blide og fra lave strandenge til rå klinter, der rejser sig nærmest lodret op af fjorden.\nFrokostpausen holdes ved Øst Vildsund Gl. Færgekro. Frokosten kan bestilles hos Morsø Turistbureau og består enten af stjerneskud eller pariserbøf. Man er også velkommen til selv at medbringe frokostkurv. Drikkevarer kan købes ombord." },
          { title: "Tur nr. 5: Fur Rundt", body: "Fur ligger i Limfjorden nord for Salling og er 22 km².\nNordfur er opbygget af aske og moler. Moleret består af døde kiselalger, der for 55 millioner år siden i enorme mængder blev aflejret i lag skiftevis med lag af aske fra vulkanudbrud. Oplev det uspolerede landskab fra søsiden – en fantastisk flot tur.\nKaffe med kage kan købes ombord.\nStart evt. turen rundt om Fur fra Nykøbing Havn kl. 12.00. Båden er tilbage i Nykøbing kl. 17.45." },
          { title: "Tur nr. 6: Aftensejlads med jazzmusik", body: "Tag på en 3 timers smuk sejltur på Limfjorden krydret med jazzmusik. Nyd lyden, vandet og aftensolen i Limfjordens dejlige omgivelser akkompagneret af herlig jazz. Afgang fra Nykøbing Havn kl. 18.00, hjemkomst kl. 21.00. Du har mulighed for at nyde aftensmad på turen i den hyggelige salon fx varmrøget laks med blandet salat og flutes for kun 99 kr." }
        ],
        source: "Kilde: Mors 2019, Morsø Turistbureau (redigeret) og visitnordjylland.dk (november 2019, uddrag)"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvilken restaurant sælger pizza uden gluten?", accept: ["behov – en spisebutik", "behov", "behov en spisebutik", "behov, en spisebutik", "behov (en spisebutik)", "behov spisebutik", "spisebutikken behov", "behov i nordvest", "behov (rentemestervej 94)"] },
      { type: "short", n: 2, q: "I hvilket feriehus er der swimmingpool udenfor?", accept: ["feriehus nr. 116", "feriehus nr 116", "feriehus 116", "feriehus nummer 116", "nr. 116", "nr 116", "nummer 116", "116", "houstrup", "feriehus nr. 116 houstrup", "feriehus nr. 116 (houstrup)", "feriehus 116 houstrup", "116 houstrup", "nr. 116 houstrup", "houstrup 116", "feriehus nr. 116 i houstrup", "feriehuset i houstrup"] },
      { type: "short", n: 3, q: "I hvilket feriehus må man ikke have husdyr?", accept: ["feriehus nr. 120", "feriehus nr 120", "feriehus 120", "feriehus nummer 120", "nr. 120", "nr 120", "nummer 120", "120", "nymindegab", "feriehus nr. 120 nymindegab", "feriehus nr. 120 (nymindegab)", "feriehus 120 nymindegab", "120 nymindegab", "nr. 120 nymindegab", "nymindegab 120", "feriehus nr. 120 i nymindegab", "feriehuset i nymindegab"] },
      { type: "short", n: 4, q: "I hvilket feriehus er der to terrasser?", accept: ["feriehus nr. 115", "feriehus nr 115", "feriehus 115", "feriehus nummer 115", "nr. 115", "nr 115", "nummer 115", "115", "ho", "feriehus nr. 115 ho", "feriehus nr. 115 (ho)", "feriehus 115 ho", "115 ho", "nr. 115 ho", "ho 115", "feriehus nr. 115 i ho", "feriehuset i ho"] },
      { type: "short", n: 5, q: "I hvilket feriehus er der en pool specielt til børn?", accept: ["feriehus nr. 122", "feriehus nr 122", "feriehus 122", "feriehus nummer 122", "nr. 122", "nr 122", "nummer 122", "122", "vester husby", "vesterhusby", "feriehus nr. 122 vester husby", "feriehus nr. 122 (vester husby)", "feriehus 122 vester husby", "122 vester husby", "nr. 122 vester husby", "vester husby 122", "feriehus nr. 122 i vester husby", "feriehuset i vester husby"] },
      { type: "short", n: 6, q: "På hvilke to ture kan man købe aftensmad på båden?", accept: ["tur nr. 2 og tur nr. 6", "tur nr. 2 og 6", "tur nr 2 og 6", "tur 2 og 6", "ture nr. 2 og 6", "ture 2 og 6", "nr. 2 og 6", "nr 2 og 6", "2 og 6", "sælsafari og aftensejlads med jazzmusik"].concat(both(["tur nr. 2", "tur nr 2", "tur 2", "nr. 2", "2", "sælsafari", "tur nr. 2 sælsafari", "tur nr. 2: sælsafari", "tur 2 sælsafari", "tur nr. 2 (sælsafari)"], ["tur nr. 6", "tur nr 6", "tur 6", "nr. 6", "6", "aftensejlads med jazzmusik", "aftensejlads", "jazzsejlads", "tur nr. 6 aftensejlads med jazzmusik", "tur nr. 6: aftensejlads med jazzmusik", "tur 6 aftensejlads med jazzmusik", "tur nr. 6 (aftensejlads med jazzmusik)", "tur nr. 6 aftensejlads"])) }
    ]
  };

  const opg2 = {
    id: "p21m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Musik til din fest", body: "Tre glade musikanter spiller op til dans.\n■■■■■■\nPrisen er inkl. transport, hvis arrangementet er på Fyn eller i Jylland.\nVi spiller både fredag, lørdag og søndag.\nDu kan læse mere og booke os på:\nwww.tremusikanter.dk" },
          { title: "B – Afskedsreception i Brillebixen", body: "Vi går på pension og vil gerne sige pænt farvel til vores gode kunder og samarbejdspartnere.\nDerfor inviterer vi til reception:\n■■■■■■\nPå denne dag byder vi på gratis sandwich og et glas vin.\nLis og Jørgen Sandemose fra Brillebixen" },
          { title: "C – A-Z Møbler åbner butik i Nygade", body: "Vi har det sidste nye inden for moderne designermøbler i høj kvalitet.\nÅbningstilbud:\n■■■■■■\nMen kun i begrænset antal. Så skynd dig!\nA-Z Møbler, Nygade 45" },
          { title: "D – Bryllup på Lindehave Slot", body: "Til jer, der vil giftes i historiske rammer, kan vi bl.a. tilbyde:\n• Slotspark og egen kirke\n• Festsal med antikke møbler\n• ■■■■■■\n• Overnatning for op til 40 personer\nLæs mere og kontakt os på: www.lindehaveslot.dk" },
          { title: "E – Kig ind hos Loppelageret", body: "■■■■■■\nLige nu er butikken fyldt med bl.a. fine gamle sofaer. Vores butik er drevet af frivillige, og en del af overskuddet fra vores salg går til fattige børn i hele verden. Åbningstider: Mandag-fredag 10-17.\nLoppelageret, Hovedgaden 11" },
          { title: "F – Romantiske vielsesringe", body: "■■■■■■ – Så har vi ringene!\nKom og se vores store udvalg i forlovelses- og vielsesringe. Vi laver også specialdesignede ringe, hvis I har særlige ønsker.\nCitycenterets Guldsmed\nMøllehøjen 2" },
          { title: "G", body: "■■■■■■\nFå en moderne laserbehandling udført af vores erfarne personale.\nDe fleste af vores patienter får et helt normalt syn efter operationen.\nLige nu får du 10 % rabat på en behandling.\nØjenklinikken\nNørregade 23" },
          { title: "H", body: "■■■■■■\nJeg har mange års erfaring med reparation og polstring af ældre møbler.\nKom og få en snak og et godt tilbud.\nRenés Møbelpolstring\nTlf. 48 58 40 03" },
          { title: "I – Udsalg i Zenit Optik", body: "■■■■■■\nInkl. gratis synstest.\nVi har et stort udvalg af moderne stel i flotte farver og design.\nZenit Optik\nHavvej 14\nTlf. 78 93 16 78" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "3 timer for kun 3500 kr.", answer: "A", example: true },
          { n: 7, text: "Halv pris på alle briller i denne måned.", answer: "I" },
          { n: 8, text: "Skal I giftes?", answer: "F" },
          { n: 9, text: "Vi har byens bedste brugte møbler.", answer: "E" },
          { n: 10, text: "Er du træt af at bruge briller?", answer: "G" },
          { n: 11, text: "Nyt liv til din gamle sofa.", answer: "H" },
          { n: 12, text: "5 retters menu inkl. vin.", answer: "D" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p21m-3", group: G, real: true,
    title: "Opgave 3 – En mærkelig pakke",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Anders på 20 flyttede hjemmefra for et år siden, og nu bor og studerer han i København. Hans forældre bor i Jylland, [[0]] han besøger dem tit, når han har ferie.

Anders er på besøg hos sine forældre i påskeferien, [[13]] han synes, det er hyggeligt at være på ferie hos dem. Om aftenen sidder han tit på sit gamle værelse og spiller computer og drikker cola og spiser mad, slik og chips. Men han rydder [[14]] op efter sig. De tomme slikposer og dåser lader han ligge over det hele. Hans mor siger til ham, at han skal smide dem ud. Men Anders gør det ikke, [[15]] hans mor beder ham om det. Han synes nemlig ikke, det er noget problem, at der er lidt rodet. Da ferien er slut, tager Anders tilbage til København. Dagen efter ringer hans mor og fortæller, at der [[16]] kommer en pakke til ham med posten. Det glæder Anders sig til.

Et par dage efter [[17]] han pakken på posthuset. Da han kommer hjem og lukker den op, bliver han meget [[18]]. Pakken er nemlig fyldt med gammelt skrald, bl.a. tomme coladåser og en gammel ostemad. Anders synes, det er rigtig [[19]], og han tror først, at der er sket en fejl. Men så forstår han pludselig, at hans mor har sendt ham alt det skrald, som han ikke gad smide ud, da han var på besøg. Han kan godt se, at det ikke er okay, at hans mor har været nødt til at rydde op efter ham. Næste dag går han på posthuset igen og [[20]] en pakke, som skal sendes til hans mor. I pakken er der en æske chokolade og et kort, hvor han undskylder og lover, at han vil gøre hele huset rent næste gang, han kommer på besøg.`,
    questions: [
      {
        type: "gaps",
        bank: ["men", "ulækkert", "selvom", "åbner", "altid", "snart", "desværre", "afleverer", "for", "glad", "henter", "overrasket", "lækkert", "ikke"].map(w => ({ key: w, text: w })),
        example: { 0: "men" },
        answers: { 13: "for", 14: "ikke", 15: "selvom", 16: "snart", 17: "henter", 18: "overrasket", 19: "ulækkert", 20: "afleverer" }
      }
    ]
  };

  const opg4 = {
    id: "p21m-4", group: G, real: true,
    title: "Opgave 4 – Kirstens nye liv",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Kirsten er 58 år og bor alene. Hun er frisør, og for et år siden gik hun på deltid for at få mere tid til andet end arbejde.

**0.** Kirsten er frisør med egen salon. I mange år arbejdede hun over 45 timer om ugen og holdt kun fri om søndagen. Men for et år siden besluttede hun, at hun ville gå ned i tid. Så hun ansatte en medarbejder, og nu er hun selv kun i salonen tre dage om ugen. [[0]]. Men det har hun det fint med. Hun vil nemlig hellere have mere tid end penge, og nu har hun bl.a. bedre tid til motion og til at være sammen med sine veninder og sit barnebarn, Anton.

**21.** Når man er frisør, kan det være hårdt for kroppen at stå op hele dagen og klippe folk, og mange frisører har ondt i skuldre, ryg og ben. Det problem har Kirsten også haft i mange år. [[21]]. Nu har hun nemlig fået tid til at gå til både yoga og svømning flere gange om ugen, og efter at hun er begyndt at dyrke motion oftere, er hendes smerter faktisk forsvundet.

**22.** Kirsten har mange gode veninder, men før hun gik på deltid, havde hun ikke så meget tid til at se dem. Når veninderne fx tog en tur i sommerhus i weekenden, skulle hun altid passe sin salon, og derfor havde hun aldrig mulighed for at tage med. [[22]]. Hendes salon har stadig åbent om lørdagen, for det passer mange kunder godt. Men det er Kirstens medarbejder i salonen, der tager alle lørdagsvagterne, og det betyder, at Kirsten har fået tid til at være sammen med sine veninder i weekenderne.

**23.** Kirsten elsker også at være sammen med sit barnebarn Anton på 4 år. Hver onsdag henter hun ham fra børnehave, og i weekenden sover han tit hos hende. Det synes de begge to er hyggeligt. [[23]]. Anton står nemlig meget tidligt op om morgenen. Og han er fuld af energi og vil have, at der skal ske noget, så de leger altid sammen ude på legepladsen i flere timer. Derfor kan det godt være lidt hårdt for Kirsten at være sammen med ham, men hun er glad for, at hun har mere tid til det.

**24.** Kirsten er også flyttet i en ny lejlighed, som er noget mindre end hendes gamle lejlighed. Det har hun gjort, fordi huslejen ikke er så høj i den nye lejlighed. Og det passer hende godt, at hun kan spare nogle penge ved at bo billigere. [[24]]. For efter at hun er flyttet, er hun også kommet til at bo tættere på Anton. Så der er ikke så langt, når de skal besøge hinanden.

**25.** Kirstens nye lejlighed ligger tæt nok på hendes salon til, at hun kan cykle på arbejde, og derfor solgte hun sin bil for et par måneder siden. Og hun sparer mange penge på ikke at have den mere. [[25]]. Det gør hun fx, når hun har været på indkøb og skal køre hjem med en masse varer på sin cykel, for det kan godt være lidt hårdt. Men det er en mindre ting, og alt i alt er Kirsten glad for de ændringer, hun har lavet i sit liv.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Derfor tjener hun mindre." },
          { key: "B", text: "Men nogle gange er Kirsten ret træt bagefter." },
          { key: "C", text: "Og det problem har hun stadig." },
          { key: "D", text: "Men det har hun heldigvis ikke mere." },
          { key: "E", text: "Så sover de længe og slapper af derhjemme." },
          { key: "F", text: "Men hun savner den somme tider." },
          { key: "G", text: "Men det har hun nu." },
          { key: "H", text: "Og det er ikke den eneste fordel." }
        ],
        example: { 0: "A" },
        answers: { 21: "D", 22: "G", 23: "B", 24: "H", 25: "F" }
      }
    ]
  };

  const opg5 = {
    id: "p21m-5", group: G, real: true,
    title: "Opgave 5 – Interview med Michael",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Michael – tømrer",
        cards: [
          { title: "A", sub: "Eksempel", body: "Det er på grund af min far. Han har altid bygget alt muligt, og fra jeg var helt lille, har jeg hjulpet ham med det. Og jeg har altid syntes, det var sjovt. Så jeg var ikke i tvivl om, hvilken uddannelse jeg skulle vælge, da jeg var færdig med folkeskolen." },
          { title: "B", body: "Når vi skal renovere meget gamle huse eller bygninger. Det er svært, fordi det tager lang tid, og man skal bruge nogle specielle teknikker. Det er ikke alle tømrere, der ved, hvordan man skal gøre det, men det gør jeg. Og jeg synes helt klart, at den slags opgaver er de mest interessante." },
          { title: "C", body: "Ja, men jeg er ikke så god til økonomi. Og det er man nødt til at være, hvis man skal have sit eget. Derfor har jeg planer om at tage et kursus i økonomi næste år. Og når jeg er færdig med det, tror jeg faktisk, at jeg er klar til at starte mit eget." },
          { title: "D", body: "At arbejde udendørs, for det afhænger alt for meget af vejret. Jeg synes selvfølgelig, det er rart, når solen skinner, og det er varmt. Men sådan er vejret jo desværre ikke altid her i landet. Og sådan en dag, hvor det regner og blæser meget, synes jeg virkelig ikke, det er særlig sjovt at skulle arbejde udenfor i 8 timer. Så glæder jeg mig bare til at få fri!" },
          { title: "E", body: "Mange ting. Men først og fremmest er det vigtigt, at man er dygtig til at bruge sine hænder. Man skal også både kunne arbejde selvstændigt og sammen med andre, for nogle dage arbejder man helt alene, og andre dage er man måske flere kolleger sammen om en opgave." },
          { title: "F", body: "Ja, det er en af mine helt store drømme. Jeg ved også lige præcis, hvordan det skal se ud, men som det er nu, har jeg simpelthen ikke pengene til mit drømmehus. For selvom det er mig selv, der bygger det, skal jeg jo også have råd til materialerne. Så jeg kan nok først bygge det om et par år." },
          { title: "G", body: "Ja, selvom jeg skal meget tidligt op. Jeg møder nemlig klokken syv! Men så drikker jeg en kop kaffe med kollegerne, og så er jeg vågen og klar til at arbejde. Og jeg har normalt fri klokken tre. Jeg er ikke morgenmenneske, men det er dejligt, at jeg ikke kommer så sent hjem." },
          { title: "H", body: "Ja, og det betyder meget for mig. Vi er nogenlunde lige gamle, og vi har den samme humor. Så vi griner af de samme ting og laver en masse sjov med hinanden. Det synes jeg er vigtigt på en arbejdsplads. Ellers bliver det hele lidt kedeligt." }
        ]
      }
    ],
    note: "Michael er 28 år. Han er uddannet tømrer og ansat i et stort tømrerfirma.",
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor er du blevet tømrer?", answer: "A", example: true },
          { n: 26, text: "Hvad skal en tømrer være god til?", answer: "E" },
          { n: 27, text: "Har du gode kolleger?", answer: "H" },
          { n: 28, text: "Hvad er det bedste ved dit job?", answer: "B" },
          { n: 29, text: "Er der noget ved dit arbejde, du ikke kan lide?", answer: "D" },
          { n: 30, text: "Har du lyst til at blive selvstændig en dag?", answer: "C" }
        ]
      }
    ]
  };

  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(fallback < 0 ? PD2.READING.length : fallback, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling maj-juni 2021 ----------
  const wFallback = PD2.WRITING.findIndex(w => !w.real);
  PD2.WRITING.splice(wFallback < 0 ? PD2.WRITING.length : wFallback, 0,
    {
      id: "w21ma", delprove: 1, real: true, year: 2021,
      title: "A: En invitation på restaurant (maj 2021)",
      kind: "Prøveopgave · invitation til dine venner",
      minWords: 80, maxWords: 150,
      situation: "Du vil gerne invitere dine venner på restaurant. Du vil skrive en invitation. Skriv invitationen. Du skal begynde og afslutte invitationen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvorfor du gerne vil invitere dine venner på restaurant", "Hvor og hvornår I skal mødes (sted, dato og tidspunkt)", "Lidt om restauranten og den mad, I skal have", "Hvad I skal lave, efter at I har spist"],
      phrases: ["Kom med på restaurant!", "Hej alle sammen", "Jeg skriver, fordi jeg gerne vil invitere jer …", "Vi mødes … den … kl. …", "Vi skal have …", "Hvis du vil med, så …"],
      model: `Kom med på restaurant!

Hej alle sammen

Jeg hedder Maria, og jeg skriver, fordi jeg gerne vil invitere jer på restaurant. Jeg har fået fast arbejde som sygeplejerske, og det vil jeg gerne fejre sammen med jer, fordi I har hjulpet mig så meget.

Vi mødes fredag den 18. juni kl. 18.30 foran Restaurant Bella Vista, Åboulevarden 12 i Aarhus.

Restauranten er italiensk og ligger lige ved åen. Vi skal have en menu med tre retter: bruschetta, hjemmelavet pasta og tiramisu. Jeg betaler for maden, men I skal selv betale for drikkevarerne.

Efter maden går vi en tur langs åen, og bagefter tager vi på en hyggelig bar og hører levende musik.

Hvis du vil med, så ring eller skriv til mig på 26 41 83 57 senest fredag den 11. juni.

På forhånd tak!

Mange hilsner
Maria`
    },
    {
      id: "w21mb", delprove: 1, real: true, year: 2021,
      title: "B: En klage over en buschauffør (maj 2021)",
      kind: "Prøveopgave · klage til et busselskab",
      minWords: 80, maxWords: 150,
      situation: "Du tager bussen til arbejde hver dag. Desværre er der problemer med buschaufføren. Derfor vil du skrive til busselskabet Citybus og klage over chaufføren. Skriv klagen til Citybus. Du skal begynde og afslutte klagen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvilken bus du tager, og hvad tid du tager den", "Hvilke problemer der er med chaufføren", "Hvad du har gjort for at løse problemerne", "Hvad du synes, busselskabet skal gøre"],
      phrases: ["Kære Citybus", "Jeg skriver til jer, fordi jeg vil klage over …", "Det drejer sig om …", "Problemet er, at …", "Jeg har allerede …", "Derfor vil jeg gerne bede jer om at …"],
      model: `Kære Citybus

Jeg skriver til jer, fordi jeg vil klage over chaufføren på den bus, jeg tager på arbejde.

Det drejer sig om bus nr. 5A fra Banegårdspladsen mod Hospitalet. Jeg tager bussen hver dag fra mandag til fredag kl. 7.15.

Problemet er, at chaufføren tit kører, før alle passagerer har sat sig. Desuden er han meget uhøflig. Han svarer ikke, når man siger godmorgen, og han taler i telefon, mens han kører.

Jeg har allerede talt med chaufføren om problemerne, men han sagde bare, at han havde travlt. Jeg har også ringet til jeres kundeservice, men der er ikke sket noget.

Derfor vil jeg gerne bede jer om at tale med chaufføren og sørge for, at han kører mere forsigtigt.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Ahmad Rahimi
Tlf. 31 52 76 90`
    },
    {
      id: "w21mc", delprove: 2, real: true, year: 2021,
      title: "En e-mail om at bo i Danmark og finde nye venner (maj 2021)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din danske ven Adam. I e-mailen skriver han bl.a.: \"… Nu har du jo boet i Danmark i et stykke tid. Hvordan er det at bo i Danmark? Og hvordan har du fundet nye venner her?\" Skriv et svar til Adam og fortæl, hvordan det er at bo i Danmark, og hvordan du har fundet nye venner her. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvor og hvor længe du har boet i Danmark", "Fortæl, hvordan det er at bo i Danmark – hvad er godt, og hvad er svært", "Fortæl, hvordan du har fundet nye venner", "Fortæl, hvad du laver sammen med dine nye venner"],
      phrases: ["Hej Adam", "Tak for din mail.", "Du spørger om, hvordan det er at bo i Danmark, …", "For det første …", "Derudover har jeg fundet nye venner …", "Til sidst vil jeg sige, at …"],
      model: `Hej Adam

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om, hvordan det er at bo i Danmark, og det vil jeg gerne fortælle dig lidt om.

For det første er jeg glad for at bo her. Jeg har boet i Odense i tre år nu, og jeg synes, at Danmark er et trygt og roligt land. I starten var det svært, fordi sproget er svært, og vejret tit er koldt og gråt.

Derudover har jeg fundet nye venner på forskellige måder. På sprogskolen lærte jeg mange søde mennesker fra hele verden at kende. Jeg er også begyndt at spille fodbold i en klub, og efter træningen drikker vi tit kaffe sammen.

Til sidst vil jeg sige, at det er nemmere at få danske venner, når man laver noget sammen med dem. Så når du kommer på besøg, vil jeg gerne præsentere dig for dem.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Hassan`
    }
  );
})();
