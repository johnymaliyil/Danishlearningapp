// Prøve i Dansk 2, maj-juni 2017 – transcribed from the exam papers.
// Included: læseforståelse opgave 1-5 and skriftlig fremstilling.
// Opgave 1 (teksthæftet: Overnatning på Læsø, Højskoler 2015, Kunstmuseer og udstillinger) was added later.
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 maj-juni 2017";

  const opg1 = {
    id: "p17m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilket hotel har udsigt over Vesterø Havn?\" – Carlsens Hotel.",
    sections: [
      {
        heading: "Overnatning på Læsø",
        cards: [
          { title: "Østerby Hotel", body: "Badehotel som i gamle dage!\nHyggeligt lille hotel direkte på Østerby Havn. Fem dobbeltværelser med fantastisk udsigt. Tæt på badestrand. Morgenmads-/opholdsstue og krostue. Åbent hele året.", facts: "info@osterbyhotel.dk · +45 51 37 31 37" },
          { title: "Lyngfeldts Hotel", body: "Velkommen til Lyngfeldts Hotel og Restaurant. Charmerende og hyggeligt sommer- og badehotel, beliggende direkte til Østerby Havn og tæt på en af øens bedste badestrande. Her er en afslappende atmosfære med fantastisk udsigt til hav og himmel i smukke omgivelser. I vores hyggelige restaurant serveres dejlig mad med vægt på råvarer fra Læsø, herunder jomfruhummer. Vi ser frem til at byde jer velkommen til en god oplevelse hos Lyngfeldts.", facts: "info@lyngfeldts.dk · +45 61 66 10 10" },
          { title: "Læsø Seaside Golf- & Badehotel", body: "Feriehytter og greenfee.\nBeliggende i stille, fredfyldte og afstressende omgivelser. Golfrestaurant med panoramaudsigt over Kattegat og golfbanen. En af Danmarks smukkeste golfbaner.", facts: "golfhotel@laesoe-golfhotel.dk · +45 98 49 88 90" },
          { title: "Østergård B&B", body: "Østergård – gæstfri overnatning midt på øen.\nBed & Breakfast i en klasse for sig. Dobbeltværelser med eget bad/toilet, lejligheder til 2, 4 eller 6 personer. Hjemmelavet morgenmad i orangeriet, serveret med smil. Fred og ro i grønne omgivelser.", facts: "oestergaard@oeg.dk · +45 98 49 11 72" },
          { title: "Carlsens Hotel", body: "Hyggelig stemning på Læsøs bedste placering.\nLige ved færgelejet ligger Carlsens Hotel med dejlig udsigt over Vesterø Havn, hyggelig, lokal stemning. Krostue og restauration, der holder åbent hver dag.", facts: "carlsens-hotel@carlsens-hotel.dk · +45 98 49 92 11" },
          { title: "Hotel Havnebakken", body: "Udsigt over hav og havn.\nÅbent fra 1. marts. Hotel og Restaurant Havnebakken ligger mindre end 50 meter fra Kattegat i en afslappet og venlig atmosfære med øens flotteste udsigt over hav og havn. Få minutters gang fra færgen og til den fineste badestrand.", facts: "post@havnebakken.dk · +45 98 49 90 09" },
          { title: "Lærkely Hotel & restaurant", body: "Idyl, harmoni & ny energi.\nIdyllisk, gammel Læsøgård. Ideelt beliggende midt på øen, i dejlig natur og skøn stor have med masser af rekreative miljøer. Vi tilbyder miniferier med velsmagende madoplevelser fra Læsøs spisekammer.", facts: "info@laerkely.dk · +45 98 49 83 44" },
          { title: "Hotel Nygaard", body: "Nyt, hyggeligt hotel på Læsø.\nFlot, nyrestaureret hotel beliggende midt på øen. Gå-afstand til Byrum by. Tæt på busholdeplads og cykelsti. 18 lyse og hyggelige værelser/lejligheder, heraf ti med mulighed for ekstra opredning.", facts: "post@hotelnygaard.dk · +45 98 49 16 66" },
          { title: "Krogbækgaard Kursus- og Feriecenter", body: "Rideferie, weekend, ridekurser, b&b og hestevogn.\nVi bor direkte ud til de naturskønne arealer Rønnerne. Vores mange års erfaring er grundlaget for, at de islandske heste er udvalgt til netop det brug, som gør dem velegnede til, at både nybegyndere og viderekomne kan få en god og sikker ferieoplevelse ud af et længere ophold eller en ridetur. Ønsker du ophold med forplejning se: www.rideferie.dk", facts: "info@rideferie.dk · +45 98 49 15 05" },
          { title: "Strandgaarden Badehotel", body: "Ro, forkælelse & aktivitet.\nVi har 15 dobbeltværelser med bad, derudover syv værelser i den gamle del. I restauranten serverer vi skønne menuer tilberedt af et team af dygtige kokke.", facts: "info@hotel-strandgaarden.dk · +45 98 49 90 35" }
        ],
        source: "Kilde: www.visitdenmark.dk, 6. juli 2015"
      },
      {
        heading: "Højskoler 2015",
        cards: [
          { title: "Askov Højskole", body: "Journalistik og medier.\nDet prøveforberedende forløb (journalistik og medier), film og TV, kunst og design.", facts: "www.askov-hojskole.dk · Tlf.: 76 96 18 00 (*smskode ASK)" },
          { title: "Bornholms Højskole", body: "Vælg et linjefag fra hver gruppe: 1) Billedkunst, keramik, musik. 2) Mediefag, kokkens køkken, smykker/metal, glas.", facts: "www.bhhs.dk · Tlf.: 56 97 40 77 (*smskode BOR)" },
          { title: "Borups Højskole København", body: "Storbyhøjskole i hjertet af København. Elever fra alle de nordiske lande. Stort udbud af kreative fag.", facts: "www.borups.dk · Tlf.: 33 12 34 45 (*smskode BHC)" },
          { title: "Brandbjerg Højskole", body: "Projektledelse, musik, outdoor, selvudvikling. Rejser og oplevelser, valgfag og projekter. Netværk for livet.", facts: "www.brandbjerg.dk · Tlf.: 75 87 15 00 (*smskode BRA)" },
          { title: "Brande Højskole", body: "Er du ordblind, skoletræt eller ny i Danmark? BHS giver aldrig op! Vi er din nye start på livet.", facts: "www.brandehs.dk · Tlf.: 97 18 45 45 (*smskode BHS)" },
          { title: "Brenderup Højskole", body: "Det internationale kulturmøde, global musik, kunst, friluftsliv, dansk sprog og kultur, up-design, Nepal-rejselinje.", facts: "www.brenderuphojskole.dk · Tlf.: 64 44 24 14 (*smskode BRE)" },
          { title: "Børkop Højskole", body: "Bibelfag, temadage, valgfag.\n4 linjer: musik, adventure, discipel, krea. Udlandsture til Israel eller Etiopien.", facts: "www.imb.dk · Tlf.: 75 86 60 22 (*smskode IMB)" },
          { title: "Den Internationale Højskole", body: "Sammensæt selv dit skema!\nKultur og samfund, internationale forhold, iværksætteri, engelsk, rejser og oplevelser.", facts: "www.ipc.dk · Tlf.: 49 21 33 61 (*smskode IPC)" },
          { title: "Den Rytmiske Højskole", body: "Musik med instrumentlinjer.\nLydtekniklinje, lydstudie- og PA.\nSangskriver- og producerlinje.", facts: "www.drh.dk · Tlf.: 59 36 06 00 (*smskode DRH)" },
          { title: "Djurslands Folkehøjskole", body: "Sundhed, livsstil, friluftsliv, idræt for sjov. Teater, musik, kunsthåndværk. IT og medier for alle.", facts: "www.djfh.dk · Tlf.: 87 52 91 20 (*smskode DJU)" },
          { title: "Egå Ungdoms-Højskole", body: "Foto, film, billedkunst, musik, design, idræt, teater, filosofi, politik og psykologi. Studierejser.", facts: "www.euh.dk · Tlf.: 86 22 01 26 (*smskode EUH)" },
          { title: "Grundtvigs Højskole", body: "Sammensæt selv dit skema – bl.a. foto, journalistik, politik, film, filosofi, litteratur, musik, kunst, teater & bevægelse.", facts: "www.grundtvigs.dk · Tlf.: 48 26 87 00 (*smskode GRU)" },
          { title: "Gymnastik og Idrætshøjskolen ved Viborg", body: "Gymnastik/dans/spring, fitness, outdoor, vandsport, boldspil, forberedelse til politi/jægerkorps, unikke rejseoplevelser.", facts: "www.giv.dk · Tlf.: 86 67 20 11 (*smskode GIV)" },
          { title: "Højskolen på Kalø", body: "Lær dansk sprog og kultur i historiske omgivelser midt i Nationalpark Mols Bjerge og i selskab med elever fra hele verden.", facts: "www.kalohojskole.dk · Tlf.: 86 37 12 86 (*smskode KAL)" },
          { title: "Højskolen Skærgården", body: "Højskole for voksne med fokus på trivsel, sundhed, livsstilsændring og afklaring. Psykologi, bevægelse, kost, kreative fag.", facts: "www.skærgården.dk · Tlf.: 97 12 43 90 (*smskode SKÆ)" },
          { title: "Højskolen Snoghøj", body: "Musical. Skuespil. Global: kursus for udlændinge. Forberedelse til ungdomsuddannelse. Lyd: lyddesign og komposition.", facts: "www.snoghoj.dk · Tlf.: 76 24 15 30 (*smskode SNO)" },
          { title: "Idrætshøjskolen Bosei", body: "Japansk, manga, koreansk, meditation, karate, judo, taekwondo, yoga, volley, health/fitness, outdoor og svømning.", facts: "www.bosei.dk · Tlf.: 55 90 90 90 (*smskode BOS)" },
          { title: "Jyderup Højskole", body: "Musik: electronic, folk'it og sangskrivning. Tag del – værktøjskassen til at skabe og deltage. Billedkunst og glaspustning.", facts: "www.jyderuphojskole.dk · Tlf.: 59 22 44 80 (*smskode JYD)" },
          { title: "Luthersk Missions Højskole", body: "Bibelfag, sport, musik, natur.\nOplæring i den kristne tro.\nStudietur til Tyrkiet/Israel.", facts: "www.lmh.dk · Tlf.: 48 26 07 66 (*smskode LMH)" },
          { title: "Nordjyllands Idrætshøjskole", body: "Idræt og sundhed. Fitness, bold og sport, outdoor/adventure, maraton/løbeskole. Instruktøruddannelser. Oplevelser og rejser.", facts: "www.nih.dk · Tlf.: 98 82 53 00 (*smskode NIH)" },
          { title: "Odder Højskole", body: "Film, journalistik, musik & dans, sport, fitness, psykologi & kropsbevidsthed, kunst & design. Kombiner, som du vil.", facts: "www.odderhojskole.dk · Tlf.: 86 54 07 44 (*smskode ODD)" },
          { title: "Ry Højskole", body: "Linjefag: journalistik, friluftsliv, teater, musik, keramik, tegning og maleri, 25 valgfag. Fordybelse og nærvær.", facts: "www.ryhojskole.dk · Tlf.: 86 89 18 88 (*smskode RY)" },
          { title: "Rødding Højskole", body: "Hovedfag: design, politik, musik, journalistik, teater og litteratur. 25 sidefag. Fælles studietur samt hovedfagsstudietur.", facts: "www.rhskole.dk · Tlf.: 74 84 22 84 (*smskode RØD)" },
          { title: "Testrup Højskole", body: "Musik – teater – kunst – filosofi – skrivelinje + mere end 20 andre fag. Over 100 elever og 18 dybt engagerede lærere.", facts: "www.testrup.dk · Tlf.: 86 29 03 55 (*smskode TES)" },
          { title: "Uldum Højskole", body: "Du sammensætter dit eget skema og vælger mellem 60 fag inden for musik, kunst, idræt, psykologi og samfundsfag.", facts: "www.uldum-hojskole.dk · Tlf.: 75 67 82 11 (*smskode ULD)" },
          { title: "Vallekilde Højskole", body: "Journalist, spiludvikler, tilrettelægger, forfatter, designer, eventchef, kreativ håndværker eller udlandsprojektleder.", facts: "www.vallekilde.dk · Tlf.: 59 65 60 45 (*smskode VAL)" },
          { title: "Vejle Idrætshøjskole", body: "Fitness, boldspil, outdoor, endurance, politiforberedelse, rejser, valgfag, instruktøruddannelser.", facts: "www.vih.dk · Tlf.: 75 82 08 11 (*smskode VIH)" },
          { title: "Vestjyllands Højskole", body: "Almen-kreativ højskole med 8 hovedfag: Dans, musik, sanger, teater, forfatter, kunst (keramik/maleri), kokkeri, økologi.", facts: "www.vestjyllandshojskole.dk · Tlf.: 96 75 37 77 (*smskode VES)" },
          { title: "Vrå Højskole", body: "Kunst, musik, volunteer, fotografi, medie, forfatter, fashion & design, dansk som 2. sprog.", facts: "www.vraahojskole.dk · Tlf.: 98 98 10 10 (*smskode VRÅ)" },
          { title: "Aalborg Sportshøjskole", body: "Vælg badminton, cross, fitness, håndbold, outdoor, politi, ridning eller styrke på Sportsakademiet og Trænerakademiet.", facts: "www.sportshojskolen.dk · Tlf.: 98 13 13 11 (*smskode SPH)" }
        ],
        source: "*) Få skolens kursusmateriale tilsendt gratis: sms \"HS smskode +navn/adr.\" til 1272 (alm. takst). Kilde: www.hojskolerne.dk, 2015"
      },
      {
        heading: "Kunstmuseer og udstillinger",
        cards: [
          { title: "Frederikshavn Kunstmuseum og Exlibrissamling", body: "Danmarks største samling af Karl Bovin – frederikshavneren som inspirerede Asger Jorn, og som beskrev C.V. Globs Bahrainekspeditioner gennem malerier. Verdens største samling af exlibris (bogejermærker) – ca. 500.000 – bl.a. til de nordiske kongehuse. Årligt 6-8 skiftende udstillinger af danske og udenlandske nutidskunstnere.", facts: "Parallelvej 14, 9900 Frederikshavn · Tlf. 98 45 90 80 · kunstmuseum@frederikshavn.dk · www.frederikshavnkunstmuseum.dk\nÅbent: ti.-lø. kl. 10-16." },
          { title: "Vendsyssel Kunstmuseum", body: "På Vendsyssel Kunstmuseum kan man opleve en nær forbindelse mellem kunsten indenfor og det karakterfulde landskab udenfor. I moderne museumsarkitektur vises kunst inspireret af det omgivende nordjyske landskab foruden samlinger af skulptur og kunsthåndværk samt et Niels Larsen Stevns Videnscenter.", facts: "P. Nørkjærs Plads 15, 9800 Hjørring · Tlf. 98 92 41 33 · info@vkm.dk · www.vkm.dk\nÅbent alle dage: kl. 11-16. Mandage lukket. Dog åbent mandage: uge 8, uge 42 og 2. påske- og pinsedag. Derudover åbent 1. torsdag i måneden til kl. 20." },
          { title: "Skagens Museum", body: "Besøg Skagens Museums nye tilbygning, og oplev udstillingen Samling & Samtid med en lang perlerække af skagensmalernes mest kendte værker, suppleret med et udvalg af Skandinaviens bedste samtidskunstnere i dag. Malerskole for børn i skolernes ferier samt billedjagt. Yderligere info på www.skagensmuseum.dk.", facts: "Brøndumsvej 4, 9990 Skagen · Tlf. 98 44 64 44 · museum@skagensmuseum.dk · www.skagensmuseum.dk\nÅbent maj: dagligt kl. 10-17. 1/6-31/8: dagligt kl. 10-17, dog on. til kl. 21. 1/9-31/10: ti.-sø. kl. 10-17, dog dagligt i uge 42." },
          { title: "Kunstbygningen i Vrå, Engelund-samlingen", body: "I Kunstbygningen i Vrå kan man opleve maleren Svend Engelunds landskaber, figurbilleder, portrætter og opstillinger – værker fra 1929 til 1993. Samlingen rummer tillige malerier, skulpturer, kunsthåndværk og grafik af de kunstnere, som siden 1942 har været medlemmer af Vråudstillingen. Der vises 4-5 særudstillinger om året, blandt andet Vrå-udstillingen i august med ca. 35 forskellige kunstnere.", facts: "Højskolevej 3a, 9760 Vrå · Tlf. 98 98 04 10 · info@kunstbygningenvraa.dk · www.kunstbygningenvraa.dk\nÅbent: 10/1-1/2 & 22/11-13/12: lø.-sø. kl. 13-16. 7/2-26/7 & 6/9-15/11: ti.-sø. kl. 13-16. 2/8-30/8: ma.-sø. kl. 11-17." },
          { title: "Victor Petersens Willumsen-samling", body: "På herregården Odden vises over 800 skitser og værker af J.F. Willumsen. I 70 år virkede han som maler, billedhugger, grafiker, keramiker og arkitekt og var med til at udforme den moderne danske kunst. Samlingens skaber, Victor Petersen, introducerer i en film hans liv og kunst. Den gamle hestestald rummer en udstilling om Oddens historie. I herregårdens køkken serveres kaffe, te og bagværk.", facts: "Oddenvej 31, Mygdal, 9800 Hjørring · Tlf. 98 97 52 02 · museum@jfwillumsenodden.dk · www.jfwillumsenodden.dk\nÅbent: 1/3-31/10: ma.-sø. kl. 10-17." },
          { title: "Børglum Kloster – Kunst på Klosteret", body: "En af mange kunstudstillinger på Børglum Kloster 2015: I hestestalden udstiller Esben Hanefelt Kristensen de nye, fantastiske værker, specielt lavet til denne udstilling. Værkerne af Esben Hanefelt Kristensen udstilles sammen med Kirsten Tofte Jensens smukke skulpturer.", facts: "Børglum Klostervej 255, 9760 Vrå · Tlf. 98 99 40 11 · info@boerglumkloster.dk · www.boerglumkloster.dk\nÅbent: 7/2-22/2, 28/3-6/4 & 1/5-18/10: alle dage kl. 10-17." }
        ],
        source: "Kilde: Toppen af Danmark, 2015"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Overnatning på Læsø: Hvilket hotel ligger tæt på en busholdeplads?", accept: ["Hotel Nygaard", "nygaard", "hotel nygård", "nygård", "hotel nygaard på læsø"] },
      { type: "short", n: 2, q: "Højskoler 2015: På hvilken højskole er der en løbeskole?", accept: ["Nordjyllands Idrætshøjskole", "nordjyllands idrætshøjskole nih", "nih", "nordjyllands idrætshøjskole (nih)", "nordjylland idrætshøjskole", "nordjyllands idrætshojskole"] },
      { type: "short", n: 3, q: "Højskoler 2015: På hvilken højskole kan man komme på en rejse til Etiopien?", accept: ["Børkop Højskole", "børkop", "børkop højskole imb", "borkop hojskole"] },
      { type: "short", n: 4, q: "Højskoler 2015: På hvilken højskole kan man vælge mellem 60 forskellige fag?", accept: ["Uldum Højskole", "uldum", "uldum hojskole"] },
      { type: "short", n: 5, q: "Kunstmuseer og udstillinger: På hvilket museum er der somme tider malerskole for børn?", accept: ["Skagens Museum", "skagen museum", "skagens kunstmuseum", "skagensmuseum", "skagens museum i skagen"] },
      { type: "short", n: 6, q: "Kunstmuseer og udstillinger: Hvilket museum har åbent om aftenen én gang om måneden?", accept: ["Vendsyssel Kunstmuseum", "vendsyssel kunst museum", "vendsyssels kunstmuseum", "vendsyssel museum"] }
    ]
  };

  const opg2 = {
    id: "p17m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Viktors Auto", body: "• Rustarbejde\n• Rudeskift\n• Forsikringsskader\n• Service m.m.\n■■■■■■\nTlf. 47 10 34 39 - www.viktors-auto.dk" },
          { title: "B – Buhrs Konditori", body: "■■■■■■\nVi har et stort og varieret udvalg og bruger kun økologiske råvarer.\nVi tilbyder altid smagsprøver, så I kan træffe det helt rigtige valg til jeres store dag – kig ind og hør nærmere.\nBuhrs Konditori\nØsterled 15 – tlf. 45 60 09 78" },
          { title: "C – Drømmer du om hus og have?", body: "Så er dette måske noget for dig! Lille hus med stor, skøn have med frugttræer udlejes pr. 1. april i Sønder Søby. Perfekt til den lille børnefamilie!\n■■■■■■\nPrisen er ekskl. forbrug af el, vand og varme.\nInteresseret? Kontakt Kim på tlf. 72 88 09 92" },
          { title: "D", body: "Smukke og personlige portrætter af dig og dine kære til hverdag og fest.\nAltid gode priser på billeder til pas og kørekort.\n■■■■■■\nVestergade 4\nTlf.: 23 41 04 67" },
          { title: "E", body: "■■■■■■\nHver mandag kl. 16-17 på Nordvig Stadion.\nAldersgruppe: 3-5 år.\nTræner: Mads Borg.\nFokus på at lege og have det sjovt!\nTilmelding ikke nødvendig – bare mød op!" },
          { title: "F – Restaurant Marina Nord", body: "Restaurant Marina Nord tilbyder\nLækker Fiskebuffet\nmed bl.a. stort udvalg af rejer, laks og muslinger.\n■■■■■■\nOBS!: Børn under 12 år halv pris.\nTilbuddet gælder fra d. 12. april til d. 13. maj." },
          { title: "G – Søholm Fysioterapi", body: "■■■■■■\nEffektive øvelser på gulv og i maskiner.\nFørste gang onsdag d. 31/5 kl 15-16.\nPris: 1.080 kr. Pensionister 775 kr.\nTilmelding på vores hjemmeside.\nSøholm Fysioterapi\nwww.soeholm-fys.dk" },
          { title: "H – Grønne Fingre", body: "■■■■■■\nLille firma med professionelle gartnere\nklarer både små og store opgaver, f.eks. klipning af hæk, græsslåning og træfældning.\nRing til \"Grønne Fingre\" på tlf. 50 50 71 93" },
          { title: "I – St. Nærum Forsamlingshus", body: "Bryllup? Konfirmation? Rund fødselsdag?\nVi har lokalerne til din næste fest. Om I er få eller mange, så finder vi det perfekte lokale til jer.\n■■■■■■\nRing og book på tlf. 64 57 48 93\nSt. Nærum Forsamlingshus" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Klargøring til syn.", answer: "A", example: true },
          { n: 7, text: "Rygtræning.", answer: "G" },
          { n: 8, text: "Fodbold for de mindste.", answer: "E" },
          { n: 9, text: "Fotograferne i Husby.", answer: "D" },
          { n: 10, text: "Byens bedste bryllupskager.", answer: "B" },
          { n: 11, text: "Haveservice tilbydes.", answer: "H" },
          { n: 12, text: "Mulighed for at leje musikanlæg.", answer: "I" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p17m-3", group: G, real: true,
    title: "Opgave 3 – Låst ude",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Lone Jensen har en lille restaurant, hvor der kommer mange gæster. Lones restaurant er nemlig meget [[0]] og ligger i et hyggeligt hus i Odense. På første sal over restauranten er der en lejlighed. Her bor Marianne og hendes søn Sebastian på seks år.

Lone møder tidligt, [[13]] der altid er mange ting at ordne, før restauranten åbner. F.eks. renser hun grøntsager, så de er klar, [[14]] gæsterne bestiller maden. Men en lørdag formiddag sker der noget farligt. Lone skal stege fiskefileter, [[15]] hun tænder for en gryde med olie. Derefter går hun ud i gården med affald, men hun glemmer at tage nøglen med. Da hun skal ind igen, er døren låst, og hun kan ikke komme ind. Lone bliver meget nervøs, for der kan gå ild i den [[16]] olie i gryden – og måske i køkkenet og hele huset! I samme øjeblik kommer Sebastian og Marianne ned i gården. Lone fortæller dem, at hun er låst ude, og at det er [[17]] at komme ind, før der går ild i olien.

Marianne går rundt om huset og ser, at et lille vindue til restauranten er [[18]]. Sebastian er ikke så [[19]], derfor kan han godt komme ind gennem det. Lone og Marianne løfter ham op og hjælper ham ind. Han løber hen til døren og åbner den. Lone skynder sig ind i køkkenet, [[20]] der heldigvis ikke er sket noget. Hun bliver meget glad og giver Sebastian et stort knus og en halvtredser til slik.`,
    questions: [
      {
        type: "gaps",
        bank: ["populær", "fordi", "kolde", "stor", "grim", "lukket", "lille", "vigtigt", "hvor", "når", "let", "åbent", "så", "varme"].map(w => ({ key: w, text: w })),
        example: { 0: "populær" },
        answers: { 13: "fordi", 14: "når", 15: "så", 16: "varme", 17: "vigtigt", 18: "åbent", 19: "stor", 20: "hvor" }
      }
    ]
  };

  const opg4 = {
    id: "p17m-4", group: G, real: true,
    title: "Opgave 4 – Havecentret",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Olga er i praktik i et havecenter. Det er hun glad for, for hun elsker blomster og planter.

**0.** Olga er 36 år og bor i Vejle. Hun kommer fra Rusland og har i mange år arbejdet med at gøre rent på et hospital. Men for to år siden fik hun allergi af rengøringsmidlerne. Hendes hænder blev helt røde, og Olga blev nødt til at stoppe på sit arbejde. Nu er hun i praktik i et havecenter. [[0]]. For hun elsker at passe planter og se dem vokse.

**21.** Både Olgas chef og hendes kolleger siger, at hun har 'grønne fingre'. Hun er nemlig rigtig god til at få planter til at vokse og blomstre. Også planter, som det ikke er helt nemt at få til at vokse. Så nu er det Olgas opgave at passe planterne. [[21]]. Hun hjælper f.eks. med at pakke varer ud og sætte dem på hylder. Og hun står også ofte ved kassen og ekspederer.

**22.** Havecentret ligger lidt uden for Vejle. Så nu tager det længere tid for Olga at komme på arbejde. Før kunne hun gå til hospitalet på 10 minutter, men nu cykler hun i stedet for til arbejde. Det tager cirka tyve minutter. I starten syntes Olga, at det var hårdt at cykle til havecentret. [[22]]. For det er en smuk tur, og hun får motion og frisk luft på vej til og fra arbejde. Så hun har også tabt sig og er kommet i bedre form.

**23.** I havecentret snakker Olga og hendes kolleger altid med hinanden, når de går og pakker varer ud og sætter dem på hylder. Hendes kolleger er alle sammen danskere, og hvis Olga vil snakke med dem, må hun snakke dansk. [[23]]. På hospitalet arbejdede Olga mest alene, så der havde hun ikke så mange muligheder for at snakke dansk. Men nu taler hun dansk med sine kolleger hver dag.

**24.** Olga synes, havecentret er et dejligt sted at være. Alle er venlige og hjælpsomme, og det giver ekstra lyst til at komme på arbejde. Olga og en af hendes danske kolleger mødes også i fritiden. Så Olga har faktisk fået en dansk ven. [[24]]. De går i biografen eller på café sammen.

**25.** Olgas chef er meget glad for hende. For Olga er dygtig og arbejder godt sammen med sine kolleger. Derfor vil han gerne ansætte hende, når hendes praktik er slut. Han synes også, at hun skal tage nogle kurser. [[25]]. For så kan hun lære mere om blomster og planter. Og efter kurserne vil hun måske kunne få nogle nye arbejdsopgaver og måske også mere i løn.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Og hun synes selv, at hun har været heldig." },
          { key: "B", text: "Så det er hun blevet meget bedre til." },
          { key: "C", text: "Og det glæder hun sig til." },
          { key: "D", text: "Men nu elsker hun det." },
          { key: "E", text: "For det har hun ikke lyst til." },
          { key: "F", text: "Men hun laver også andre ting." },
          { key: "G", text: "Så den kan hun ikke bruge." },
          { key: "H", text: "Det har hun aldrig haft før." }
        ],
        example: { 0: "A" },
        answers: { 21: "F", 22: "D", 23: "B", 24: "H", 25: "C" }
      }
    ]
  };

  const opg5 = {
    id: "p17m-5", group: G, real: true,
    title: "Opgave 5 – Interview med Lars",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Lars – fotograf",
        cards: [
          { title: "A", body: "Jeg tager en hel del billeder til reklamer, især for de lokale butikker her i byen. Og så tager jeg selvfølgelig også en masse billeder af mennesker. F.eks. er jeg tit ude til bryllupper og tage billeder af både brudeparret og bryllupsgæsterne." },
          { title: "B", body: "Nej, for der går tit mere tid, end man tror, når man er ude og fotografere. Og bagefter skal billederne jo vælges ud og gøres klar til kunderne. Jeg er heldigvis en populær fotograf, og i nogle perioder har jeg faktisk rigtig travlt. Jeg er sikker på, at det i de perioder ofte er mere end fuld tid." },
          { title: "C", body: "Det er en god idé at tage mange billeder og vise dem for nogen, der ved noget om fotografi. Så kan man få at vide, om man er god til det. Bagefter kan man så prøve at søge ind på fotografuddannelsen. Den tager fem år, og der indgår en del praktik." },
          { title: "D", body: "Altså, jeg har jo mit eget firma, så der er mange forskellige ting, der skal gøres. At sidde med regnskabet er jeg ikke så glad for. Det er ikke det, jeg bedst kan lide. Men det lever jeg med, for der er så meget andet, der er sjovt. F.eks. er det sjovt at bestille varer. Især hvis det er nyt udstyr, som man gerne vil prøve." },
          { title: "E", body: "Tja, det er jo ikke så tit, jeg tager billeder af dyr, men det synes jeg faktisk er rigtig sjovt. Især ude i naturen. Dyr bevæger sig hele tiden. Og man kan ikke bare bede dem om at sidde stille, så det er rigtig svært. Men det er også det, der er det sjove. Så svaret er nok dyr – og helst ude i naturen." },
          { title: "F", body: "Ja, det gør jeg. Foto er både mit arbejde og min største hobby. Jeg har altid mit kamera med mig. Min familie og mine venner synes nogle gange, at det er lidt irriterende, at jeg altid skal tage billeder, når vi ses. Men jeg kan ikke lade være!" },
          { title: "G", body: "Der er især to perioder. Til jul tager jeg mange portrætter – især af børn. Det er julegaver til bedsteforældrene. Om foråret er der mange bryllupper, så der er jeg også meget ude og fotografere. Men det er nu nok til jul, der er allermest at lave." },
          { title: "H", body: "Nej. Eller måske både og. Det tekniske er et håndværk, som de fleste kan lære. Men man skal også have nogle gode idéer til, hvordan man vil tage billederne. Og så skal man øve sig rigtig meget. Det kræver tid og tålmodighed at blive en god fotograf." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvad fotograferer du mest?", answer: "A", example: true },
          { n: 26, text: "Hvornår har du mest travlt?", answer: "G" },
          { n: 27, text: "Hvad kan du bedst lide at fotografere?", answer: "E" },
          { n: 28, text: "Hvor mange timer arbejder du om ugen?", answer: "B" },
          { n: 29, text: "Fotograferer du også meget i din fritid?", answer: "F" },
          { n: 30, text: "Er der noget, der er kedeligt i dit arbejde?", answer: "D" }
        ]
      }
    ]
  };

  // Real sets newest first: … nov.-dec. 2018, maj-juni 2017, nov.-dec. 2016 …
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 nov.-dec. 2016");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling maj-juni 2017 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2016);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w17ma", delprove: 1, real: true, year: 2017,
      title: "A: En anbefaling af en restaurant (maj 2017)",
      kind: "Prøveopgave · anbefaling",
      minWords: 80, maxWords: 150,
      situation: "Du har været på en god restaurant sammen med en ven. Du vil gerne anbefale restauranten til andre. Du vil skrive en anbefaling til kursistbladet på din sprogskole. Skriv anbefalingen. Du skal begynde og afslutte anbefalingen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvad restauranten hedder, og hvor den ligger", "Hvad slags mad man kan købe", "Hvad du og din ven spiste", "Hvorfor du vil anbefale restauranten til andre"],
      phrases: ["… – kan varmt anbefales!", "Jeg vil gerne anbefale …, som ligger …", "På restauranten kan man købe …", "Vi spiste …, og til dessert fik vi …", "Det bedste ved restauranten er, at …", "Jeg vil anbefale …, fordi …"],
      model: `Restaurant Bella Italia – kan varmt anbefales!

Jeg vil gerne anbefale Restaurant Bella Italia, som ligger på Torvet 5 i Horsens. Jeg var der sidste fredag sammen med min veninde Sara.

På restauranten kan man købe italiensk mad, fx pizza, pasta, salater og is. Vi spiste en stor pizza med skinke og champignon, og til dessert fik vi tiramisu. Det bedste ved restauranten er, at maden er frisk og lækker, og at portionerne er store.

Desuden er tjenerne søde og hurtige, og restauranten er hyggelig med levende lys og stille musik.

Jeg vil anbefale Bella Italia, fordi maden er god, og priserne er rimelige. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Amina, hold 4`
    },
    {
      id: "w17mb", delprove: 1, real: true, year: 2017,
      title: "B: Et læserbrev om frivilligt arbejde (maj 2017)",
      kind: "Prøveopgave · læserbrev",
      minWords: 80, maxWords: 150,
      situation: "Du arbejder frivilligt i en klub for unge. Du vil skrive et læserbrev om dit frivillige arbejde til kursistbladet på din sprogskole. Skriv læserbrevet. Du skal begynde og afslutte læserbrevet på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv", "Lidt om klubben, og hvor mange timer om ugen du arbejder frivilligt", "Lidt om, hvilke aktiviteter du hjælper med", "Hvad der er godt ved at have frivilligt arbejde (selv om man ikke får løn for sit arbejde)"],
      phrases: ["I denne tekst vil jeg skrive om …", "Jeg hedder … og kommer fra …", "Jeg arbejder frivilligt i …", "Jeg er der … timer om ugen", "Jeg hjælper med …", "Det gode ved frivilligt arbejde er, at …"],
      model: `Mit frivillige arbejde i en ungdomsklub

I denne tekst vil jeg skrive om mit frivillige arbejde i en klub for unge.

Først vil jeg fortælle lidt om mig selv. Jeg hedder Ahmed, jeg er 34 år, og jeg kommer fra Syrien. Jeg bor i Kolding med min familie.

For det første arbejder jeg frivilligt i Ungdomsklubben Kernen, hvor unge mellem 13 og 18 år mødes efter skole. Jeg er der fire timer om ugen. For det andet hjælper jeg med mange aktiviteter. Jeg spiller fodbold og bordtennis med de unge, og vi laver mad sammen.

På den ene side får jeg ikke løn for mit arbejde. På den anden side får jeg meget andet. Jeg taler dansk hele tiden, jeg møder nye mennesker, og jeg gør noget godt for andre.

Alt i alt mener jeg, at frivilligt arbejde er en god idé for alle, som vil lære dansk.

Ahmed`
    },
    {
      id: "w17mc", delprove: 2, real: true, year: 2017,
      title: "En e-mail om din nye praktik (maj 2017)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Daniel. I e-mailen skriver han bl.a.: \"… Du skrev, at du er meget glad for din nye praktik. Men du skriver ikke noget om, hvad det er, du er glad for. Vil du godt give nogle eksempler på, hvad du er glad for? …\" Skriv et svar til Daniel og fortæl om, hvorfor du er glad for din nye praktik. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvor du er i praktik, og hvornår du arbejder", "Giv eksempler på, hvad du er glad for (fx kollegerne)", "Fortæl, hvad du laver og lærer i praktikken", "Fortæl om dine planer, når praktikken er slut"],
      phrases: ["Hej Daniel", "Tak for din mail.", "Jeg er i praktik i …", "Jeg er glad for mine kolleger, fordi …", "Jeg elsker at …", "Min chef siger, at …"],
      model: `Hej Daniel

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om min nye praktik, og det vil jeg gerne fortælle dig lidt om.

For det første er jeg i praktik i en børnehave i Aarhus. Jeg arbejder fra kl. 8 til 14 fire dage om ugen, og jeg er der i tre måneder.

Derudover er jeg glad for mine kolleger. De er meget søde og hjælpsomme, og de forklarer mig alt, hvis jeg ikke forstår det. Vi spiser frokost sammen hver dag, og jeg taler dansk hele tiden, så mit dansk er blevet meget bedre.

Til sidst vil jeg sige, at jeg elsker at være sammen med børnene. Vi leger, synger og går ture i skoven. Min chef siger, at jeg måske kan få et job, når praktikken er slut.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Sara`
    }
  );
})();
