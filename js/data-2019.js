// Prøve i Dansk 2, maj-juni 2019 – skriftlig del.
// Texts and tasks transcribed from the official exam papers (nr. 07, 08, 09, 10, 12).
// The answer key (censorhæfte) for 2019 was not available, so the answers below
// were worked out from the texts. Each has exactly one option that fits.
// Contact details (web, e-mail, phone) are left out of the campsite texts.

(function () {
  const G = "PD2 maj-juni 2019";

  const opg1 = {
    id: "p19-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"På hvilket loppemarked er der gratis kaffe og rundstykker?\" – Spejdernes Genbrug.",
    sections: [
      {
        heading: "Loppemarkeder i København",
        cards: [
          { title: "Veras Market", sub: "Under Bispeengbuen, 2000 Frederiksberg", body: "Fra den 3. april til og med d. 6. november, første søndag i måneden kl. 11-16. På Veras Market finder du et stort udvalg af fint genbrugstøj blandt de 50 stande, markedet består af. Ud over diverse shoppefund består markedet også af et loungeområde med søndagstoner leveret af Sound of Copenhagens artister." },
          { title: "Skibbroens Loppemarked", sub: "Skibbroen 1z, 2450 København SV", body: "Lørdag og søndag den 27. og 28. august kl. 10-18. Langs Skibbroens kaj vil der være 100 retro-, vintage-, genbrugs- og kunsthåndværksboder. Desuden Skibbroens Food Truck Market, Projekt Hjemløs, koncerter, børneteater, spoken word og kajhygge blandt husbådene." },
          { title: "B&W Loppemarked", sub: "Gl. B&W Skibsværft, Refshalevej 163, port 25", body: "Lørdag og søndag i lige uger kl. 10-16 til og med december. Loppetæmmere og møbelkræmmere har fyldt 4000 km2 af B&W's gamle domæne på Refshaleøen med masser af 50'er- og 60'er-møbler, kunsteffekter og dimser og dippedutter. Bus 40 kører dertil, og der er gule striber, som viser vej. Gratis entré." },
          { title: "Loppetorv på Frederiksberg", sub: "Parkeringspladsen bag Frederiksberg Rådhus 1, 2000 Frederiksberg", body: "Fra lørdag den 9. april til og med den 15. oktober kl. 9-15. Loppemarkedet holder til bag Frederiksberg Rådhus fra midten af april til midten af oktober. Her bliver der solgt meget mere tøj end på noget andet loppemarked i byen." },
          { title: "Svalernes Loppemarked", sub: "Nattergalevej 6, København", body: "Hver lørdag kl. 10-15, dog sommerferielukket hele juli. Cirka 30 frivillige arbejder ugen igennem med at indsamle, modtage og sortere de bedste ting til loppemarkedet, så du kan komme og gøre et godt køb hver lørdag, samtidig med at du støtter Svalernes arbejde med at hjælpe fattige kvinder og børn i Bangladesh og Indien." },
          { title: "Loppelunden", sub: "Lundebakken 1, 2400 København NV", body: "Fra søndag den 17. april til den 9. oktober fra kl. 10. Loppelunden er et forholdsvis nyt loppemarked, som åbnede den 19. april 2015 ved Emdrup Station. Loppemarkedet sætter fokus på det moderne fænomen upcycling, som handler om at få gamle produkter lavet om til ny brugskunst." },
          { title: "Sommermarkedet på Carlsberg", sub: "TAP1, Pasteursvej 49 til 59, København V", body: "Fra søndag den 12. april til søndag den 4. oktober kl. 10-16. Hele sommeren er der hver søndag udendørsmarked ved TAP1 på Carlsberg-grunden. Markedet er placeret under et stort halvtag og er som det eneste af sin slags overdækket, og dermed skånes stadeholdere og gæster for det danske sommervejr. Gratis entré." },
          { title: "Spejdernes Genbrug", sub: "Havremarken 10, Farum", body: "Første lørdag i måneden fra klokken kl. 10-13. 2.000 kvadratmeter indendørs loppemarked, hvor der er gratis adgang samt gratis kaffe og rundstykker. Loppemarkedet er drevet af frivillige, og alt overskud går til socialt arbejde i både ind- og udland." },
          { title: "Furesøens loppemarked", sub: "Rådhustorvet ved Farum Bytorv, Farum", body: "Hver søndag kl. 9-14 i perioden sidste søndag i april til sidste søndag i september. Med mere end 100 stande er Furesøens loppemarked et hyggeligt sted at gå på loppejagt uden for København. Loppemarkedet holdes helligt, og man kan derfor ikke finde nye ting eller madvarer – kun loppefund finder frem til staderne her." },
          { title: "Rita Blå's Lopper", sub: "KPH Volume, Enghavevej 80-82", body: "Den 11. juli, den 14. august og den 11. september kl. 12-17. Rita Blå's lopper er et af de mere hippe loppemarkeder, hvor du virkelig kan gøre et kup i den modebevidste retning. Loppemarkedet den 17. april i KPH Volume er i den gamle sporvognsremise, og det næste den 8. maj rykker udenfor på boulevarden, hvor du kan finde Rita Blå's Lopper fremover." }
        ],
        source: "Kilde: www.aok.dk (05.07.2017), uddrag"
      },
      {
        heading: "Campingpladser i Sønderjylland",
        cards: [
          { title: "Augustenhof Strand Camping", sub: "Augustenhofvej 30, 6430 Nordborg", body: "Rolig, naturskønt beliggende familieplads med fin udsigt. Direkte ved strand med rent, godt badevand. Store udfoldelsesmuligheder for sejlere, surfere, lystfiskere m.v. Alle moderne faciliteter, herunder butik, køkken, vaskemaskiner, familierum, puslerum med babybad, børnebruser og wc, tv-stue m.m. Stor, alsidig legeplads, boldspilsareal og minigolfbane. Store pladser og store friarealer. Fine pladser til cykel-campister. Udlejning af hytter og campingvogne." },
          { title: "Lavensby Strand Camping", sub: "Arnbjergvej 49, 6430 Nordborg", body: "Et stenkast fra vandet ligger denne idylliske campingplads. En familieplads ved hav og strand – ideel for vandsport og fiskeri m.m. Egen bådslip, møntvaskeri, kiosk med friskbagt morgenbrød etc. Hytter og bådudlejning. Nærmeste nabo til oplevelsesparken Universe." },
          { title: "Lillebælt Camping", sub: "Lillebæltvej 4, 6440 Augustenborg", body: "Direkte ved vandet med enestående panoramablik over Lillebælt. Ideel til afslapning, vandre- og cykelture samt lystfiskeri. Bådslip og fryser forefindes på pladsen. Lejligheder udlejes (lørdag-lørdag). Følg A8 til Fynshav, drej til højre mod Skovby, efter 200 m drejes til venstre ved campingskiltene." },
          { title: "Broager Strand Camping", sub: "Skeldebro 32, 6310 Broager", body: "Broager Strand Camping er beliggende ved Broager i enestående natur direkte ned til vandet. Fra stranden er der gode forhold for badning, fiskeri og sejlads (egen bådslip). Legepladsen har bl.a. hoppepude og gynger. Familiebaderummene svarer til femstjernede forhold. På hver enhed på pladsen er der strøm og vand. Broager Strand Camping er det ideelle sted, når man vil nyde den oprindelige natur med dens stilhed. Vi vil gerne være med til at give vore gæster en god ferieoplevelse på Broager Strand Camping, og derfor lægger vi vægt på personlig betjening. Hos os vil I altid blive mødt med et smil! Gode vandre- og cykelmuligheder på Gendarmstien. Udlejning af hytter til 6 eller 4 personer og campingvogne. Valgfri ankomst-/afrejsedag. Mulighed for en enkelt overnatning." },
          { title: "Lysabildskov Camping", sub: "Skovforten 4, 6470 Sydals", body: "Stedet med de mange muligheder. Opvarmet swimmingpool, børnepool, familiebaderum, tennisbaner, boldbaner, terrængolf, 2 hoppepuder, trampolin, legeplads, legerum, funracer, opholdsrum med tv, netcafé, hotspot, spabad, sauna, solarium, billard, bordtennis, minimarked, grillbar. Udlejning af hytter samt ferielejligheder med eget bad og toilet, campingvogne og luksushytter med bad og toilet. 600 meter til stranden. Gode fiskemuligheder. Ligeledes er der rige muligheder for cykel- og vandreture i naturen." },
          { title: "Hertugbyens Camping", sub: "Ny Stavensbøl 1, 6440 Augustenborg", body: "Dejlig og rolig campingplads i naturskønne omgivelser, beliggende op til Augustenborg Slotspark, skov og fjorden. Nyrenoveret servicebygning, udlejning af hytter, legeplads med hoppepude." },
          { title: "Lærkelunden Camping", sub: "Nederbyvej 25, Rinkenæs, 6300 Gråsten", body: "Ferie – frihed, glæde og leg. 4 stjerner og skøn udsigt fra hele pladsen. 3 slags hytter – der passer til netop din ferie. Svømmehal, fitnessrum, aktivitetshus og meget mere. Sønderborg og Flensborg lige rundt om 'hjørnet'." },
          { title: "Møllers Camping", sub: "Østerbyvej 51, 6470 Sydals", body: "Besøg vores hyggelige campingplads på den naturskønne halvø Kegnæs. Pladsen ligger direkte ved vandet med gode bade- og fiskemuligheder. Vi har kiosk, legeplads og møntvaskeri, gode sanitære installationer og plads til autocaravans." },
          { title: "Madeskov Camping", sub: "Madeskov 9, 6400 Sønderborg", body: "Velkommen i smukke og dejlige omgivelser direkte ved skov, vand og strand. Med stedets gode sejl- og fiskemuligheder er det naturskønne område ved Augustenborg Fjord velegnet til lystfiskere. Der er desuden bådpladser til små motorbåde. Den hyggelige familieplads har moderne faciliteter: pusle-, handicap- og vaskerum, mønttelefon, opholdsrum med tv, legeplads og kiosk. Udlejning af hytter. Madeskov Camping ligger nær ved Sønderborg by med mange shopping- og aktivitetstilbud hele sommeren igennem." },
          { title: "Sønderborg Camping", sub: "Ringgade 7, 6400 Sønderborg", body: "Campingpladsen er beliggende mindre end 10 minutters gang fra Sønderborg Centrum, 200 m fra børnevenlig badestrand samt lystbådehavn. Perfekt som udgangspunkt for cykel- og vandreture, alle former for vandaktiviteter og masser af gode oplevelser på øen Als. Vi udlejer lækre luksushytter med bad/toilet, almindelige gode hytter og luksuscampingvogne. På pladsen findes bl.a. minimarked, køkken, opholdsrum m. tv, handicaptoilet, familierum, vaskemaskine/tørretumbler. Stor legeplads med stor hoppepude." },
          { title: "Sønderby Strand Camping", sub: "Sønderbygade 4, 6470 Sydals", body: "Hyggelig trestjernet familieplads ved Østersøen på den naturskønne halvø Kegnæs. Statsfuglereservat med særdeles gode muligheder for trave- og cykelture. Ideelle muligheder for dykning, badning, fiskeri og windsurfing. Bådslip, legeplads, bordtennishal og opholdsstue. Moderne toiletforhold med handicaptoilet og familierum. Kiosk med grillcafé. Vaskemaskiner og tørretumbler. Cykeludlejning. Udlejning af 2 ferielejligheder og 4 sommerhuse (hele året) samt 4 hytter." },
          { title: "Mommark Marina Camping", sub: "Mommarkvej 380, 6470 Sydals", body: "Mommark Marina byder på afslapning, idyl og maritim stemning, når den er absolut bedst. Marinaen har privat en badestrand, som er en af de bedste på Als. En lille oase, der bør opleves. Campingpladsen på Mommark Marina hører til blandt de absolut skønnest beliggende. Der er udsigt til både havn, Lillebælt og Østersøen fra 90 % af de 108 stadepladser. Fra campingpladsen er der direkte adgang til marinaen og en skøn badestrand." }
        ],
        source: "Kilde: www.visitsonderborg.dk (23.07.2017), uddrag"
      },
      {
        heading: "Nakskov Kulturfestival",
        cards: [
          { title: "1. august", body: "Kunstskibet 'Bibiana' ligger ved Toldbodkajen kl. 10.00-17.00.\n\nKl. 10.00-12.00: 'Indenfor voldene – en byvandring i det gamle Nakskov' m. Ole A. Munksgaard, Nakskov Lokalhistoriske Arkiv. Mødested: foran hovedtrappen ved Toldboden. Gratis.\n\nKl. 12.00-15.30: 'Cirkus ChangHigh' i Atriumgården (Toldboden) samt workshops for børn og forestillinger kl. 13.00 og kl. 15.00. Gratis.\n\nKl. 13.00-15.30: Nakskov Web TV – workshop, videoredigering på pc, iPad og mobil (i Havnebygningen). Gratis.\n\nKl. 15.00: 'Benoni Petersen – Nakskovs første Vestinder – fra slavebaggrund på St. Croix til læge i Nakskov' v. Jens Benoni Willumsen. Gratis.\n\nKl. 19.30-22.00: 'Opera og tapas'. Den prisbelønnede brasilianske sopran Gabriella Pace har etableret sig som en af de mest efterspurgte sangere i Sydamerika. Denne aften akkompagneres hun af pianist Vagn Sørensen (Atriumgården). Arr.: Klaus Frost Jensen. Entré 125 kr. Forsalg: Nakskov Turistbureau." },
          { title: "2. august", body: "Kl. 10.00-17.00: Sports Gaming – underholdning for børn, unge & 'barnlige voksne'. 'PANASONIC FIFA CUP', 'Just Dance' og 'Virtual Reality'. Forhåndstilmelding til 'PANASONIC FIFA CUP' ('FIFA 2017') i Geertsen Radio, Torvet, Nakskov – max. 64 deltagere. Tjek ind senest kl. 10.45 – slut ca. kl. 15. Pris kr. 50 for at deltage med fri sodavand under turneringen. Præmier til de bedste i FIFA-turnering og 'Just Dance' (Garageanlægget).\n\nKl. 10.00: 'Børnebiffen rykker ud' (4 film) i Toldboden. Filmforevisning for 3-4-årige med forældre, bedsteforældre eller institution. Gratis.\n\nKl. 11.00: 'Børnebiffen rykker ud' (5 film) i Toldboden. Filmforevisning for +5-årige med forældre, bedsteforældre eller institution. Gratis.\n\nKl. 14.00: Foredrag og film: 'Tivolidrengens klan' v. Alex Frank Larsen, som fortæller om Victor Cornelins liv og slægt og viser sin film om samme. Gratis." },
          { title: "3. august", body: "Kl. 10.00-22.00: DR Arkiv på Toldbodkajen: 'Din by – en del af historien'. Nakskov Lokalhistoriske Arkiv udstiller om havnen. Byskolen viser film kl. 12.30: 'DR Interview med Victor Cornelins 1974' (1 time).\n\nKl. 10.00-12.00: Lysbilledforedrag om Victor Cornelins v. Ellis Nielsen. 'Det hvide Kor' synger. Gratis.\n\nKl. 13.00-15.00: Foredrag v. Søren Kolstrup ('Nakskov: fra oprør og revolte til socialt kompromis') og Therkel Stræde ('Volkswagen: Fra Hitler og det økonomiske mirakel til dieselskandalen'). Velkomst v. Steffen Rasmussen (3F) (Garageanlægget). Gratis.\n\nKl. 18.00-24.00: 'Live-Koncert' på Toldbodkajen med diverse kunstnere – i samarbejde med 'Radio Sydhavnsøerne' bl.a. Szhirley, Ultramarin, Magnus Vil, Hjalmer, Johnny DeLuxe, Fætr, Bro, Albert Dyrlund, Nabiha, Skinz, LIGA. Gratis." },
          { title: "4. august", body: "Kl. 10.00-12.00: 'Kunst på kant' – kunstvandring med Ole Holm – mødested: hovedtrappen foran Toldboden. Gratis.\n\nKl. 10.30-11.30: 'Erindringsdans og rytmik'. Borgere fra 'Skolebakken' og 'Skovcentret' samt børn fra børneinstitutionen 'Tryllefløjten' inviterer alle til dans og bevægelse på Toldbodkajen. Gratis.\n\nKl. 17.30-ca. 22.30: 'Nostalgikoncert' på Toldbodkajen. 'Lost Highway', 'Downtown Party', 'Old Jacks', 'Jelly Singers', 'Selected'. Gratis.\n\nKl. 19.00: M/S Bibiana viser tegnefilmen 'Sangen fra Havet' (fra 7 år). 93 minutter. Tilmelding på www.tilmeld.dabuf.dk.\n\nKl. 19.30: 'Virgin Tour Projekt' – total performance (Axeltorv). Værket er et ikoninspireret tableau med en dreng og en birkestamme i en montre. Teksten fra et lysende infoskilt fortæller om jomfruen i træet: 'Jomfru. Julian. Født 1987' – om hans jomfrudom og om jomfrumyterne i gammel folketro." }
        ],
        source: "Kilde: www.anduin.dk/nakskovkultur17 (28.07.2017), uddrag"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "På hvilket loppemarked er der børneteater?", accept: ["skibbroens loppemarked", "skibbroen", "skibbroens"] },
      { type: "short", n: 2, q: "På hvilken campingplads er der bådudlejning?", accept: ["lavensby strand camping", "lavensby"] },
      { type: "short", n: 3, q: "På hvilken campingplads er der fitnessrum?", accept: ["lærkelunden camping", "lærkelunden"] },
      { type: "short", n: 4, q: "På hvilken campingplads er der cykeludlejning?", accept: ["sønderby strand camping", "sønderby"] },
      { type: "short", n: 5, q: "På hvilken campingplads er der minigolfbane?", accept: ["augustenhof strand camping", "augustenhof"] },
      { type: "short", n: 6, q: "Hvad koster det at deltage i 'Opera og tapas'?", accept: ["125 kr", "125 kroner", "125", "kr 125", "entré 125 kr", "det koster 125 kr"] }
    ]
  };

  const opg2 = {
    id: "p19-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", sub: "Eksempel", body: "Open By Night\nVi holder åbent til kl. 22 på fredag med mange gode By Night-tilbud fx\n[ A: ______ ]\nKlaragade Ure & Smykker, Klaragade 15" },
          { title: "B", body: "Vi har fået nye varer hjem!\nVores webshop bugner lige nu med masser af lækre forårsnyheder til gode priser! I denne uge fx:\n[ B: ______ ]\nVælg mellem tre friske farver.\nwww.butik-ulla.dk – dametøj til hverdag og fest" },
          { title: "C", body: "[ C: ______ ]\nKørekort, pas, visum, studiekort etc. – vi laver fotos til alt.\nPris: 100 kr. for 4 stk.\nTidsbestilling ikke nødvendig – vi klarer det på 5 minutter.\nCity Fotografen, Algade 13" },
          { title: "D", body: "Butikslokale med mindre lager udlejes\nI alt 95 kvadratmeter inkl. 23 kvadratmeter lager i Vingsted centrum. Nabo til bl.a. apoteket og Netto.\nMånedlig leje 11.250 kr. Interesseret?\n[ D: ______ ]\nTlf. 63 84 03 29" },
          { title: "E", body: "Lige nu:\n[ E: ______ ]\nSå forkæl dig selv – eller en du holder af – med en buket i glade farver.\nVi har også et bredt udvalg af grønne stueplanter og krukker og vaser.\nFrøken Viola, Østergade 34" },
          { title: "F", body: "[ F: ______ ]\nVi har holdstart hver måned.\nTeoriundervisning i flotte lokaler i centrum.\nPriser fra 9.995 kr.\nRing og hør nærmere.\nHusteds Trafikskole – tlf. 87 34 15 15" },
          { title: "G", body: "Foråret er på vej – og dermed også pollensæsonen!\nKom og hør om de forskellige typer medicin, vi kan tilbyde, og få masser af gode råd til, hvordan du kan behandle din allergi.\n[ G: ______ ]\nSkt. Knuds Stræde 4" },
          { title: "H", body: "[ H: ______ ]\nTil omgående tiltrædelse.\nKørekort til truck er en fordel, men ikke et krav.\nEr du den rette, kan fastansættelse komme på tale.\nKontakt Per Schmidt på tlf. 64 72 09 87" },
          { title: "I", body: "OPRYDNINGSUDSALG\nVi har ryddet op på lageret og sælger lige nu bl.a.:\n[ I: ______ ]\nVi har butikken fyldt med masser af andre gode tilbud på kvalitetsmøbler, så kig forbi.\nSidste dag d. 27/5.\nNisu Møbler • Bystævnevej 76" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "10 % på alle sølvringe.", answer: "A", example: true },
          { n: 7, text: "Kørekort til bil og motorcykel.", answer: "F" },
          { n: 8, text: "Sovesofa til 2 personer 3.495 kr.", answer: "I" },
          { n: 9, text: "Fast vikar til lager søges.", answer: "H" },
          { n: 10, text: "Smart jakke – 799 kr.", answer: "B" },
          { n: 11, text: "Forårstilbud: 10 tulipaner – 30 kr.", answer: "E" },
          { n: 12, text: "Vingsted Apotek.", answer: "G" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p19-3", group: G, real: true,
    title: "Opgave 3 – En dårlig oplevelse i supermarkedet",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Vælg de ord (13-20), der mangler. Du skal kun bruge hvert ord én gang. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `En dag er Anna og Ole Larsen på indkøb i et lille supermarked, der ligger tæt på deres hjem. Det har de været tit, men denne gang bliver deres indkøbstur [[0]] anderledes, end den plejer.

Anna og Ole skal købe ind til aftensmad, og de går rundt i butikken for at finde de varer, som de skal bruge. Pludselig ser Ole nogle æsker med lækre chokolader, og han lægger en af dem i indkøbskurven, [[13]] han elsker chokolade. Da Anna ser chokoladen i kurven, bliver hun [[14]]. Ole har nemlig taget et par kilo på, og de har lige snakket om, at han ikke skal spise så meget sødt. Derfor tager Anna æsken op af kurven og lægger den på en hylde. Så går Anna og Ole til kassen og betaler deres varer. De vil gå ud af butikken, [[15]] så bliver de pludselig stoppet af butikschefen, som beder dem om at gå med ind på sit kontor. Han har nemlig set Ole lægge æsken med chokolade i kurven, og han spørger, hvorfor de [[16]] har betalt for chokoladen. Anna forklarer, at hun har taget chokoladen op af kurven igen inde i butikken. Chefen spørger, om han må kigge i hendes taske, og det siger Anna, at han [[17]] må. Så det gør han, men han finder selvfølgelig ikke chokoladen. Chefen forstår, at han har taget fejl og undskylder mange gange. Han skynder sig også at hente en stor æske chokolade, som han giver til Anna og Ole.

Han siger, at han håber, at de vil [[18]] den dårlige oplevelse. Alligevel er Anna vred, da de går hjem. Hun har ikke [[19]] til at købe ind i den butik mere, selvom chefen har sagt undskyld. Men Ole er meget [[20]]. Han synes, det var venligt af chefen at give dem en æske chokolade, og han glæder sig til at komme hjem og få et par stykker chokolade til kaffen.`,
    questions: [
      {
        type: "gaps",
        bank: ["meget", "råd", "tilfreds", "for", "huske", "gerne", "lyst", "kun", "glemme", "selvom", "irriteret", "ikke", "men", "tid"].map(w => ({ key: w, text: w })),
        example: { 0: "meget" },
        answers: { 13: "for", 14: "irriteret", 15: "men", 16: "ikke", 17: "gerne", 18: "glemme", 19: "lyst", 20: "tilfreds" }
      }
    ]
  };

  const opg4 = {
    id: "p19-4", group: G, real: true,
    title: "Opgave 4 – Vild med genbrug",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Ruth er 41 år og bor sammen med sine to piger i en lejlighed i Husum. Hun har en stor interesse: hun elsker genbrug og loppemarkeder.

**0.** Ruth er enlig mor til to piger på 8 og 10 år. Da Ruth blev skilt for 6 år siden og blev alene med sine to piger, havde hun ikke noget job og ikke så mange penge. Derfor begyndte hun at gå på loppemarkeder for at finde billige genbrugsting. [[0]]. For selvom hun i dag har et arbejde og en god økonomi, er det blevet en hobby for hende at købe brugte ting.

**21.** I weekenden tager Ruth tit på loppemarked. Så står hun tidligt op og kører af sted. Ruth ved nemlig, at det er vigtigt at komme tidligt, hvis hun skal gøre en god handel. Somme tider står hun i kø i en time og venter på, at loppemarkedet skal åbne. [[21]]. For hun står og snakker med de andre i køen, mens hun drikker en kop kaffe. Og så går tiden hurtigt.

**22.** Ruth køber mange forskellige ting på loppemarked, men hun kan især godt lide at købe møbler og tøj til sig selv. Da Ruths piger var små, købte hun også meget af deres tøj brugt. Dengang syntes de nemlig, det var lige meget, om de gik i nyt eller brugt tøj. [[22]]. Nu vil pigerne nemlig kun have helt nyt tøj, og de vil selv med i butikkerne og købe det. Ruth synes, det er lidt ærgerligt, for det er meget dyrere. Men hun kan godt forstå, at pigerne gerne selv vil bestemme.

**23.** Ruths hjem er fyldt med alle de ting, hun har købt gennem årene. I stuen står der for eksempel et stort maleri på gulvet, en kasse fuld af glas og to gamle kommoder. Alt sammen ting, som Ruth ikke har brug for, og som hun ikke rigtig har plads til. [[23]]. For Ruths lejlighed er ikke særlig stor, og hendes piger er trætte af, at der står så mange ting og fylder i lejligheden.

**24.** Ruth kan godt se, at der er for mange ting i lejligheden. Så hun tænker på at sælge nogle af tingene, og en dag ser hun et opslag på Facebook. Der skal være et stort loppemarked på Husum Torv, hvor man kan komme og sælge møbler, tøj og alle mulige andre ting. [[24]]. Hun snakker med sine piger om det, og de synes også, det lyder som en god idé. De vil gerne hjælpe hende. Så Ruth melder sig til loppemarkedet.

**25.** Loppemarkedet bliver holdt en lørdag i maj måned. Ruth og hendes piger har en stor bod med møbler, bøger, glas, tøj og meget andet. De har mange kunder, og de sælger rigtig godt. [[25]]. Så da loppemarkedet er slut, har de stadig de store møbler tilbage. Det er selvfølgelig lidt ærgerligt. Men Ruth lover pigerne, at hun vil give møblerne til en genbrugsbutik, så de ikke mere skal stå i lejligheden og fylde.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Og det gør hun stadig." },
          { key: "B", text: "Det sker desværre aldrig." },
          { key: "C", text: "Men desværre mest småting." },
          { key: "D", text: "Men sådan er det ikke mere." },
          { key: "E", text: "Det har hun ikke lyst til." },
          { key: "F", text: "Men det er meget hyggeligt." },
          { key: "G", text: "Det vil Ruth gerne prøve." },
          { key: "H", text: "Og det er et problem." }
        ],
        example: { 0: "A" },
        answers: { 21: "F", 22: "D", 23: "H", 24: "G", 25: "C" }
      }
    ]
  };

  const opg5 = {
    id: "p19-5", group: G, real: true,
    title: "Opgave 5 – Interview med Omid",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, som ikke skal bruges. Se eksemplet (0).",
    text: "Omid er uddannet social- og sundhedshjælper. Han arbejder på et plejehjem.",
    sections: [
      {
        heading: "Interview med Omid – social- og sundhedshjælper",
        cards: [
          { title: "A", sub: "Eksempel", body: "Det var egentlig en meget nem beslutning for mig. Jeg har nemlig altid vidst, at jeg gerne ville arbejde med mennesker. Især ældre mennesker. Så jeg var næsten sikker på, at jobbet ville være noget for mig. Og det har vist sig at være rigtigt." },
          { title: "B", body: "Det er helt sikkert det, at jeg har mulighed for at komme tæt på beboerne og deres familier. Jeg kan mærke, at jeg gør en forskel i deres liv, når jeg hjælper dem. Det er en god følelse. Og det er noget, jeg glæder mig over hver dag." },
          { title: "C", body: "Det skifter faktisk lidt, for det kommer an på, om jeg har dagvagt, aftenvagt eller nattevagt. Men generelt skal jeg hjælpe beboerne med alt det, de ikke selv kan. Det kan fx være at tage tøj på om morgenen, gå i bad eller at komme i seng om aftenen." },
          { title: "D", body: "Altså, der er jo mange af mine kolleger, der synes, at vi har alt for travlt, fordi vi har så mange arbejdsopgaver. Men det synes jeg faktisk ikke. For mig er det eneste problem, at lønnen ikke er særlig god. Den kunne godt være højere." },
          { title: "E", body: "Ja, helt sikkert! Men jeg er ret sikker på, at der i fremtiden vil være flere mænd, som vælger at uddanne sig til social- og sundhedshjælper. Og mænd er selvfølgelig lige så gode som kvinder til at hjælpe andre." },
          { title: "F", body: "Det har jeg faktisk lige snakket lidt med min chef om. Hun synes, jeg skal uddanne mig videre til sygeplejerske. Det kunne jeg også godt tænke mig, men det bliver nok først om et par år. Jeg synes ikke, jeg har tid til at tage en uddannelse lige nu." },
          { title: "G", body: "Ja, ellers havde jeg ikke valgt den uddannelse. For det var vigtigt for mig at kunne få et job hurtigt. Og der er faktisk mange ledige stillinger både på hospitaler, plejehjem og i hjemmeplejen. Især hvis man søger job i de større byer." },
          { title: "H", body: "Ja, de er okay, for jeg kan faktisk godt lide, at ugerne ikke er ens. Nogle gange har jeg vagt om dagen, og andre gange om aftenen eller om natten. Det betyder, at jeg somme tider kan sove længe eller dyrke motion om formiddagen. Og det synes jeg er rart." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor valgte du at blive social- og sundhedshjælper?", answer: "A", example: true },
          { n: 26, text: "Hvilke arbejdsopgaver har du?", answer: "C" },
          { n: 27, text: "Er du tilfreds med dine arbejdstider?", answer: "H" },
          { n: 28, text: "Hvad er det bedste ved dit arbejde?", answer: "B" },
          { n: 29, text: "Er der noget ved jobbet, du er utilfreds med?", answer: "D" },
          { n: 30, text: "Hvad er dine planer for fremtiden?", answer: "F" }
        ]
      }
    ]
  };

  // Shown right after the 2020 set.
  const at = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(at < 0 ? PD2.READING.length : at, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling 2019 (tasks from the exam; model answers written for DanskKlar) ----------
  PD2.WRITING.unshift(
    {
      id: "w19a", delprove: 1, real: true, year: 2019,
      title: "A: En klage (2019)",
      kind: "Prøveopgave · klage til boligforeningen",
      minWords: 80, maxWords: 150,
      situation: "Du har en lejlighed i en ejendom, hvor man godt må have husdyr. Men der er problemer med din nabos hund. Du vil skrive en klage til boligforeningen. Du skal begynde og afslutte klagen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvor du bor, og hvorfor du vil klage", "Hvad din nabo hedder, og hvad problemet med din nabos hund er", "Hvad du har gjort for at løse problemet", "Hvad du gerne vil have, at boligforeningen skal gøre"],
      phrases: ["Kære boligforening", "Jeg bor i …, og jeg skriver, fordi …", "Min nabo, …, har en hund, som …", "Jeg har prøvet at tale med …", "Jeg vil gerne bede jer om at …", "Med venlig hilsen"],
      model: `Kære Boligforeningen Engparken

Jeg bor på Engvej 14, 2. th., og jeg skriver, fordi jeg har et problem med min nabos hund.

Min nabo hedder Kurt Jensen, og han bor på 2. tv. Han har en stor hund, som gør meget, især når Kurt er på arbejde om dagen. Hunden gør nogle gange i flere timer, og det kan høres i hele opgangen. Desuden lader Kurt hunden løbe frit på græsplænen, hvor børnene leger, og den har to gange hoppet op ad min datter.

Jeg har prøvet at tale med Kurt om problemet to gange, og jeg har også lagt en seddel i hans postkasse. Han lovede, at det ville blive bedre, men der er ikke sket noget.

Jeg vil derfor gerne bede jer om at kontakte Kurt og minde ham om husordenen. Jeg håber, at I kan hjælpe med at finde en løsning, så vi alle kan bo godt sammen.

Med venlig hilsen
Sara Ahmadi`
    },
    {
      id: "w19b", delprove: 1, real: true, year: 2019,
      title: "B: En anbefaling (2019)",
      kind: "Prøveopgave · anmeldelse af et hotel",
      minWords: 80, maxWords: 150,
      situation: "Du har boet på et godt hotel i din ferie. Du vil skrive en anbefaling på en hjemmeside, hvor man kan anmelde hoteller. Du skal begynde og afslutte anbefalingen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvad hotellet hedder, og hvor det ligger", "Om værelserne og om morgenmaden", "Om hotellets personale", "Hvorfor du vil anbefale andre at bo på netop dette hotel"],
      phrases: ["Jeg vil gerne anbefale …", "Hotellet ligger …", "Værelserne var …", "Til morgenmad kunne man få …", "Personalet var …", "Jeg kan varmt anbefale …"],
      model: `Et dejligt hotel ved vandet

Jeg vil gerne anbefale Hotel Strandly, som ligger i Skagen, kun fem minutters gang fra stranden og tæt på byens hyggelige gader.

Vi boede på hotellet i en uge i juli. Værelserne var store, lyse og meget rene, og vi havde udsigt over havet fra vores altan. Sengene var gode, så vi sov godt hver nat. Morgenmaden var fantastisk. Der var friskbagt brød, frugt, yoghurt, æg og god kaffe, og man kunne spise udenfor på terrassen.

Personalet var meget venligt og hjælpsomt. De talte både dansk og engelsk, og de gav os mange gode tips til udflugter i området. Da min søn blev syg, hjalp de os med at finde en læge.

Jeg kan varmt anbefale Hotel Strandly til familier og par, der vil have en afslappende ferie tæt på naturen. Vi kommer helt sikkert igen.

Venlig hilsen
Ali og familie`
    },
    {
      id: "w19c", delprove: 2, real: true, year: 2019,
      title: "En e-mail om et kursus (2019)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Anders. Han skriver bl.a.: \"Jeg har hørt, at du har været på kursus. Skriv og fortæl lidt om kurset, og hvad du synes om det.\" Skriv et svar til Anders og fortæl om dit kursus, og hvad du synes om det. Du skal skrive minimum 100 ord.",
      points: ["Hvilket kursus du har været på, og hvor", "Hvad du lavede og lærte på kurset", "Hvad du synes om kurset, og hvorfor", "Om du vil anbefale det til Anders"],
      phrases: ["Hej Anders", "Tak for din mail.", "Jeg har været på et kursus i …", "Vi lærte at …", "Det bedste ved kurset var …", "Kh / Mange hilsner"],
      model: `Hej Anders

Tak for din mail. Det er rigtigt, at jeg har været på kursus. Jeg har gået på et kursus i førstehjælp på aftenskolen i Vejle. Kurset varede fire aftener, og vi var 12 deltagere.

Vi lærte, hvad man skal gøre, hvis der sker en ulykke. For eksempel lærte vi at give hjertemassage og at lægge en person i aflåst sideleje. Vi øvede os på dukker, og til sidst fik vi et bevis.

Jeg synes, kurset var rigtig godt. Underviseren var en sygeplejerske, som var meget dygtig og sjov, og hun forklarede alt på en let måde. Det bedste var, at vi øvede os meget, så nu føler jeg mig mere sikker.

Jeg kan varmt anbefale kurset til dig, især fordi du har små børn. Skal vi ikke snart ses?

Mange hilsner
Fatima`
    }
  );

  // ---------- Mundtlig delprøve 2: emner fra prøven 2019 ----------
  // The exam's topic names are used; pictures and questions are written for DanskKlar.
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  const transport = PD2.SPEAKING_PICTURE.find(p => p.id === "p4");
  if (transport) { transport.title = "Transport til arbejde"; transport.real = true; transport.year = 2019; }
  PD2.SPEAKING_PICTURE.forEach(p => { if (p.real && !p.year) p.year = 2020; });
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p7", title: "Husarbejde", real: true, year: 2019,
      pictures: [
        { scene: "🧹 🧺 👨\n👩 🍽️ 🧽", words: ["gøre rent", "vaske op", "støvsuge", "vasketøj", "dele arbejdet"] },
        { scene: "👧 🧒 🛏️\n🧸 🧦 🗑️", words: ["børneværelset", "rydde op", "legetøj", "skraldespand", "hjælpe til"] }
      ],
      interview: [
        "Hvem laver husarbejdet på billedet, tror du?",
        "Hvordan deler I husarbejdet hjemme hos dig?",
        "Hvilket husarbejde kan du bedst og mindst lide?",
        "Skal børn hjælpe med husarbejdet? Hvorfor eller hvorfor ikke?"
      ],
      talk: [
        { who: "partner", say: "Hjemme hos mig laver jeg det meste af husarbejdet. Hvordan er det hos dig?" },
        { who: "partner", say: "Jeg synes, at mænd og kvinder skal dele husarbejdet lige. Er du enig?" },
        { who: "mediator", say: "Hvordan var det med husarbejde, da I var børn i jeres hjemlande?" },
        { who: "partner", say: "Nogle familier betaler for rengøringshjælp. Hvad synes du om det?" },
        { who: "mediator", say: "Hvad synes I generelt, børn skal lære derhjemme?" }
      ],
      phrases: ["På billedet er der …", "De er ved at …", "Hos os er det sådan, at …", "Jeg synes, det er retfærdigt, at …", "Da jeg var barn, …", "Hvad med jer?"]
    },
    {
      id: "p8", title: "At lære noget nyt som voksen", real: true, year: 2019,
      pictures: [
        { scene: "👩‍🏫 📚 ✏️\n👨‍🦳 👩 💻", words: ["kursus", "undervisning", "voksne elever", "lære", "computer"] },
        { scene: "🎸 🎶 👴\n🏊 🚴 🎨", words: ["hobby", "spille guitar", "svømme", "male", "aldrig for sent"] }
      ],
      interview: [
        "Hvad tror du, personerne er ved at lære?",
        "Hvad har du lært, efter at du blev voksen?",
        "Er det sværere at lære noget nyt, når man er voksen?",
        "Hvad kunne du tænke dig at lære i fremtiden?"
      ],
      talk: [
        { who: "partner", say: "Jeg er begyndt at lære at svømme, selvom jeg er 40 år. Har du lært noget nyt for nylig?" },
        { who: "partner", say: "Jeg synes, det er svært at finde tid til at lære noget, når man har arbejde og børn. Hvad synes du?" },
        { who: "mediator", say: "Er det almindeligt at tage kurser som voksen i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at det er vigtigt at blive ved med at lære hele livet. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, arbejdspladserne skal gøre for at hjælpe voksne med at lære nyt?" }
      ],
      phrases: ["Det ligner et kursus i …", "Personerne er ved at …", "Efter jeg blev voksen, har jeg lært …", "Det var svært i starten, men …", "Jeg kunne godt tænke mig at …", "Det er aldrig for sent at …"]
    }
  );
})();
