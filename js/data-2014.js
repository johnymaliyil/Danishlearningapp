// Prøve i Dansk 2, maj-juni 2014 – transcribed from the scanned exam papers.
// Included: læseforståelse opgave 1-5, skriftlig fremstilling and the oral pictures
// for delprøve 2 (illustrations by Niels Roland, cropped from the scans).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 maj-juni 2014";
  const lot = (rows) => rows.map(([n, p]) => `${n}: ${p}`).join("\n");

  const opg1 = {
    id: "p14-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilken gevinst er der på nummer 8814?\" – Gavekurv fra Malling El.",
    sections: [
      {
        heading: "Team Rynkeby-lotteri 2012",
        cards: [
          { title: "Om lotteriet", body: "Team Rynkeby Østjylland\nGevinsterne kan afhentes fra d. 21. juni-12. juli 2012 ved Laura Poulsen. Ring på tlf. 22 85 22 56 og lav en aftale med hende. Adressen, hvor gevinsterne kan afhentes, er Eugen Warmingsvej 29, 8000 Aarhus C." },
          { title: "Vindernumre (1)", body: lot([
            ["9374", "Gavekort fra Myplanet på 10.000 kr."], ["11015", "Gavekort til 1 stk. rustbeskyttelse fra Dinitrol Center Risskov (værdi 5000 kr.)"],
            ["7744", "Ejler Bille Litografi indrammet af Borges Rammer"], ["6333", "Gavekort til Duravit produkter fra Frede Andersen (værdi 3000 kr.)"],
            ["7160", "Gavekort til habit og skjorte fra Din Tøjmand i Hinnerup"], ["9057", "Rundflyvning over Østjylland fra CNA, Stilling"],
            ["10853", "Arne Jacobsen vægur fra Rosendahl"], ["8035", "Rundflyvning over Østjylland fra CNA, Stilling"],
            ["10009", "Spectra Vaser, Holmegaard, fra Rosendahl"], ["6796", "El-kedel fra La Cafetiere fra Greve ApS"],
            ["9394", "Hotstone massage fra Naturskøn, Århus"], ["7120", "Krenit skål, Normann Copenhagen, fra Kandis i Ry"],
            ["8814", "Gavekurv fra Malling El."], ["11521", "1 måneds træning i Sport og Fitness i Skanderborg"],
            ["7037", "1 måneds træning i Sport og Fitness i Skanderborg"], ["10282", "1 måneds træning i Sport og Fitness i Skanderborg"],
            ["8482", "1 x Elisabeth Arden gavetaske fra Matas i Skanderborg"], ["9558", "Gavekort på 50 kr. fra Jysk i Skanderborg"],
            ["11162", "Gavekort på 50 kr. fra Jysk i Skanderborg"], ["10764", "Gavekort på 50 kr. fra Jysk i Skanderborg"],
            ["10966", "Gavekort på 50 kr. fra Jysk i Skanderborg"], ["6145", "1 x Det Glade Vanvid fra Kocheriet i Århus"],
            ["9415", "1 x Det Glade Vanvid fra Kocheriet i Århus"], ["11487", "1 x Det Glade Vanvid fra Kocheriet i Århus"],
            ["10110", "1 x Det Glade Vanvid fra Kocheriet i Århus"], ["6512", "Sjal fra Taste i Ry"],
            ["11618", "Regnestok fra Taste i Ry"], ["6488", "Figur fra Taste i Ry"],
            ["8282", "1 par Woolford tights fra Nitouche i Ry"], ["8366", "Gavekort på 200 kr. fra Mai Sko i Ry"],
            ["10609", "Gavekort på 200 kr. fra Flora i Ry"], ["11648", "Cykeltrøje fra Gepard i Stilling"],
            ["7185", "Cykeltrøje fra Gepard i Stilling"], ["10183", "Cykeltrøje fra Gepard i Stilling"],
            ["10593", "Cykeltrøje fra Gepard i Stilling"], ["7288", "Cykeltrøje fra Gepard i Stilling"],
            ["6680", "Cykeltrøje fra Gepard i Stilling"]
          ]) },
          { title: "Vindernumre (2)", body: lot([
            ["10156", "Cykeltrøje fra Gepard i Stilling"], ["11880", "Gavekort på 200 kr. fra Kløverblomst i Skanderborg"],
            ["11959", "1 synsprøve + klud + rens fra Louis Nielsen"], ["10327", "1 synsprøve + klud + rens fra Louis Nielsen"],
            ["8389", "1 synsprøve + klud + rens fra Louis Nielsen"], ["11746", "1 synsprøve + klud + rens fra Louis Nielsen"],
            ["8462", "1 synsprøve + klud + rens fra Louis Nielsen"], ["11527", "Georg Jensen blokstage fra Tage og Inga Andersen"],
            ["9996", "Skanderborg øl fra Vinoble i Skanderborg"], ["6260", "Strømpebukser fra Fleur i Skanderborg"],
            ["11436", "Paraply fra Skoringen i Skanderborg"], ["7103", "Gavekort på 500 kr. fra Hugo Mortensen i Skanderborg"],
            ["11404", "Gavedåse fra Esthetique i Skanderborg"], ["11517", "Gavedåse fra Esthetique i Skanderborg"],
            ["8536", "Gavekort på 200 kr. fra M. Flowers i Skanderborg"], ["9650", "Glasfad + stage fra www.bunik.dk"],
            ["7966", "Fedtstensfigurer fra Anbi i Skanderborg"], ["10158", "Fedtstensfigurer fra Anbi i Skanderborg"],
            ["6511", "Gavekort a 150 kr. til Ry Biograf"], ["9462", "Gavekort a 150 kr. til Ry Biograf"],
            ["10650", "Gavekort a 150 kr. til Ry Biograf"], ["7567", "Gavepose fra Elsebeth Olsen i Skanderborg"],
            ["11557", "Gavepose fra Elsebeth Olsen i Skanderborg"], ["7404", "Gavepose fra Elsebeth Olsen i Skanderborg"],
            ["8552", "Gavekort til Stilling blomster"], ["11579", "Gavekort til Stilling blomster"],
            ["8132", "Gavekort til Stilling blomster"], ["10550", "Leitmotiv lampe fra Anton i Århus"],
            ["6482", "Leitmotiv lampe fra Anton i Århus"], ["11559", "2 små malerier fra Galleri Hedegaard i Århus"],
            ["11997", "Hårprodukter + gavekort fra D og D frisør i Århus"], ["9151", "Hårprodukter + gavekort fra D og D frisør i Århus"],
            ["10813", "Kazuri halskæde fra Ravsmeden i Århus"], ["8254", "Black Lily læderhalskæde fra Lundgren P. i Århus"],
            ["10302", "Loopielove armbånd fra Lundgren P. i Århus"], ["6187", "Loopielove armbånd fra Lundgren P. i Århus"],
            ["7451", "Loopielove armbånd fra Lundgren P. i Århus"]
          ]) }
        ],
        source: "Kilde: www.team-rynkeby.dk"
      },
      {
        heading: "Besøg de nordvestjyske efterskoler",
        cards: [
          { title: "Bjerget Efterskole", sub: "Kærupvej 9, 7741 Frøstrup", body: "På Bjerget Efterskole tilbyder vi trygge rammer. Her kan livet udfolde sig i et fællesskab, hvor vi har ansvar for hinanden. Vi lægger vægt på en solid boglig undervisning, men vi laver også andre ting. Vi synger, spiller musik og teater, har kreative fag, spiller volleyball, badminton m.m. i vores flotte, nye idrætshal. Dyrker friluftsliv, sejler havkajak og klatrer på vores nye klatrevæg. Vi tager på skitur og laver musical. Med åbenhed, tillid og livsglæde i centrum ønsker vi at skabe en nutidig skole med udgangspunkt i det kristne menneske- og livssyn." },
          { title: "Galtrup Musik- og Idrætsefterskole", sub: "Øster Jølby, 7850 Erslev", body: "Galtrup Musik- og Idrætsefterskole er en nutidig og moderne skole, der bygger på det grundtvig-koldske skolesyn. Her kan du fordybe og dygtiggøre dig i musik og idræt, samtidig med at du får din FSA eller FS10-prøve. Skolen er ombygget, renoveret og fremstår med meget fine faciliteter til alle fag. Der er trådløst internet og Smart Boards i alle klasser. 4 linjefag: boldspil, slagbold, gymnastik og musik. Mange valgfag: golf, fodbold, håndbold, løb, volley, badminton, bordtennis, design, filt, rytmisk sammenspil, kor, musikteori, IT og medie. Vi har mange anderledes uger med bl.a. skitur, musical, friluftsture og gymnastik. Galtrup Musik- og Idrætsefterskole er røgfri og har 138 elever i 8., 9. og 10. klasse." },
          { title: "Salling Ungdomsskole", sub: "Jebjerg, 7870 Roslev", body: "Salling Ungdomsskole er en grundtvigsk efterskole, hvor ordene fællesskab, hjælpsomhed og tillid er nøgleord i hverdagen. Salling Ungdomsskole har\n• en boglig profil\n• mange linjefag\n• tradition for gymnastik på højt niveau\n• særdeles gode elevværelser og trådløst internet overalt." },
          { title: "Svankjær Efterskole", sub: "Hedegårdsvej 59, Svankjær, 7755 Bedsted Thy", body: "Find din 'indre svane' på Svankjær Efterskole. En dialogsøgende skole med kristne værdier og fokus på fællesskabet og den enkeltes behov. Ridning, adventure, motor/metal og international linje er vore hovedlinjefag. Mulighed for at medbringe egen hest. Derudover form & fitness, mountainbike, fodbold, springgymnastik, smykkedesign, musik & drama. Skolen underviser i alle prøveforberedende fag. Rejser, musical, gymnastikopvisning og fællesaktiviteter med naboefterskoler giver spændende afbrud i hverdagen. Skolen tilbyder undervisning til 8., 9. og 10. klasser. Specialundervisning tilbydes efter aftale." },
          { title: "Rovvig Efterskole", sub: "Vester Jølby, 7950 Erslev", body: "Rovvig Efterskole ligger midt i den skønne natur på det nordvestlige Mors. Vi har storslåede udsigter, egen strand med badebro og masser af skov og krat. Et år på Rovvig Efterskole er et år med masser af udfordring og action. Du bor på 2-3-sengsværelse sammen med kammerater, som også er interesserede i et eller flere af skolens 5 verdenshjørner: mad og gastronomi, sang og musik, kreativitet og design, natur og friluftsliv, vandsport og sejlads. Skolen har både surf- og kajakudstyr, som bruges flittigt – også i fritiden. Vi glæder os til at se dig!" },
          { title: "Sjørringvold Efterskole", sub: "Sjørring, 7700 Thisted", body: "Sjørringvold er en almendannende efterskole for normaltbegavede elever med specifikke læse- og stavevanskeligheder, hvor vi lægger vægt på computerbaseret hjælp. Vi tager udgangspunkt i eleverne og er derfor prøvefri, men har håndværksfag på højere niveau og ekstra kompetenceundervisning til teknisk skole. Vi benytter Thys nationalpark med skov, sø, land og strand til friluftsliv, surfing, jagt, fiskeri og rollespil. Sammen med gokartkørsel, idræt og musik og meget andet har vi således en bred vifte af muligheder." },
          { title: "Thyland Idrætsefterskole", sub: "Vorupørvej 73, 7700 Thisted", body: "Vi er en røgfri idrætsefterskole for alle unge, der elsker at være aktive. Vi tilbyder et udfordrende skoleår med fællesskab i centrum og linjer i gymnastik, fodbold, håndbold, idræt, medie, nørdværksted, design eller musik samt god boglig, niveaudelt undervisning. Thyland har gode faglokaler, en boldspilhal og en nybygget idrætshal med springcenter og stort auditorium. Året rummer skikursus i Østrig, musical, cykeltur, emneuger, aktiviteter, stævner og turneringer planlagt af positive elever samt et engageret personale." },
          { title: "Blidstrup Efterskole", sub: "7990 Øster Assels", body: "Blidstrup Efterskole ønsker at være en nutidig, åben og fri skole med et kristent livs- og menneskesyn. Vi tilstræber at være en bred efterskole for alle unge. Skolen tilbyder ud over de almindelige skolefag linje- og valgfag i idræt, friluftsliv, håndværk, musik, design, ridning, medie, motorlære, fitness, jagt, glas, sløjd, gokarts m.m. I løbet af året vil du også opleve musicaluge, udenlandstur og emnedage. Du har mulighed for at have din egen hest med." },
          { title: "Skyum Idrætsefterskole", sub: "Tøttrupvej 15, 7752 Snedsted", body: "Mange nye faciliteter, herunder et springcenter i særklasse. Skyum Idrætsefterskole tilbyder:\n• Træner-lederuddannelse inden for gymnastik, fodbold, håndbold, badminton eller volleyball.\n• Obligatorisk gymnastik på højt niveau med mange opvisninger i foråret.\n• Valgfag: personlig dygtiggørelse inden for f.eks. fodbold, håndbold, volley, badminton, rytme og spring. Desuden musik, kreative fag, windsurf, dans m.v.\n• Bogfagsundervisning på FSA- og FS10-niveau.\n• 2 ture til udlandet.\nHverdagen er præget af en positiv og tryg atmosfære, hvor hjælpsomhed, tillid og respekt er nøgleordene." }
        ],
        source: "Kilde: Holstebro Onsdag, uge 8, 2011"
      },
      {
        heading: "Kirsebærfestival 2012 i Kerteminde (20.-22. juli)",
        cards: [
          { title: "Fredag", body: "10.30 Smagfuld bustur til Hindholmen – Fra Margrethes Plads 1\n14.00 Folkemusikgruppen Sumar (billet købes på Turistkontor) – Kerteminde Kirke\n14.00 Introduktion til Johannes Larsen – Johannes Larsen Museet\n15.00 Vingerne på Svanemøllen sættes i gang – Foran Johannes Larsen Museet\n16.00 Nenia Brass Band – Havnen\n16.30 Rylen lægger til med kirsebær – Havnen\n17.00 Kirsebærministeren åbner festivalen – Torvet\n17.15 Den Kummerlige Trio – Torvet\n19.30 Peter Viskinde Band – Torvet" },
          { title: "Lørdag", body: "10.00 Nymarken Harmonika – Torvet\n10.00-17.00 Troldegade for børn – Trollegade\n10.00-17.00 Lav 'Troldekugler' af hjemmemalet havregryn – Trollegade\n10.30 Krabbefangerkonkurrence – Fjord & Bælt\n11.00 Introduktion til Johannes Larsen – Johannes Larsen Museet\n11.00 Byvandring – Mødested: foran Farvergården\n11.00-12.00 Samspil for børn på træinstrumenter – Trollegade\n11.00-13.00 Ponyridning – Trollegade\n12.00 Løgnhalsen – Carl Quist Møller – Torvet\n13.00 Kirsebærsange: Knud Frøslev og Lucy Bergström – Torvet\n13.00 Byvandring – Mødested: Foran Farvergården\n13.30 Kåring af årets kirsebærkage – Torvet\n14.00 Kirsebærbryllup – Torvet\n14.00 Krabbefangerkonkurrence – Fjord & Bælt\n14.00 Introduktion til udstillingen 'Nordiske Stemninger' – Johannes Larsen Museet\n15.00 MGP-vinder 2012: Energy – Torvet\n15.00 Byvandring – Mødested: Foran Farvergården\n15.00 Street Stomp – igennem Kerteminde – Start: Nordre Havnekaj\n15.30 Kirsebærsange: Knud Frøslev og Lucy Bergström – Torvet\n16.00 Michael K & Klondyke – Torvet\n18.00 Tournesol – Torvet\n20.00 Moonjam – Torvet\n21.40 Fakkeltog – Fra Torvet\n20.00 Lyset synges ud – Ved Langebro" },
          { title: "Søndag", body: "10.00 Kristians Ragtime Band – Torvet\n10.00-17.00 Troldegade for børn – Trollegade\n10.00-17.00 Se bjernes verden – Trollegade\n10.30 Krabbefangerkonkurrence – Fjord & Bælt\n11.00 Introduktion til Johannes Larsen – Johannes Larsen Museet\n11.00 Byvandring – Mødested: Foran Farvergården\n11.00-12.00 Samspil for børn på træinstrumenter – Trollegade\n11.00-13.00 Ponyridning – Trollegade\n13.00 Kåring af næste års kirsebærplakat – Torvet\n14.00 Introduktion til udstillingen 'Nordiske Længsler' – Johannes Larsen Museet\n13.30 Amanda Jazz – Torvet\n14.00 Krabbefangerkonkurrence – Fjord & Bælt\n15.00 Kunstauktion ved Hjerteforeningen – Torvet\n15.30 Amanda Jazz – Torvet\n16.30 Kirsebærstens-langspyt – Torvet\n18.00 Picnic (medbring egen picnickurv) – fri entré – Johannes Larsens have\n19.00 Alsang – Fri entré – Johannes Larsens have" }
        ],
        source: "Kilde: www.kirsebaerfestival.dk"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "På hvilket nummer er gevinsten et gavekort fra Mai Sko i Ry?", accept: ["8366", "nummer 8366", "nr 8366"] },
      { type: "short", n: 2, q: "Hvilken biograf kan man vinde gavekort til?", accept: ["ry biograf", "ry"] },
      { type: "short", n: 3, q: "På hvilken efterskole er fiskeri et tilbud til eleverne?", accept: ["sjørringvold efterskole", "sjørringvold"] },
      { type: "short", n: 4, q: "På hvilken efterskole kan eleverne lære noget om smykkedesign?", accept: ["svankjær efterskole", "svankjær"] },
      { type: "short", n: 5, q: "Hvilken efterskole har en klatrevæg?", accept: ["bjerget efterskole", "bjerget"] },
      { type: "short", n: 6, q: "Hvor i Kerteminde kan man høre Amanda Jazz?", accept: ["torvet", "på torvet"] }
    ]
  };

  const opg2 = {
    id: "p14-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", sub: "Eksempel", body: "[ A: ______ ]\nVi bruger kun de bedste, økologiske råvarer – og vores brød er naturligvis hjemmebagt. Åbent alle hverdage kl. 12-17.\nGiuseppes, Birkegade 9" },
          { title: "B", body: "[ B: ______ ]\nVi er f.eks. interesserede i smykker, bestik, mønter og ure. Hos os får du altid markedets bedste pris.\nBOBA ANTIK, Tybjergs Allé 41" },
          { title: "C", body: "FØDSELSDAGSTILBUD\nVi fejrer fødselsdag med et godt tilbud:\n[ C: ______ ]\nGælder alle dame- og herremodeller.\nMaks. ét par pr. kunde.\nSkynd dig – det er kun på lørdag!\nINDIGO, Vestergade 4" },
          { title: "D", body: "[ D: ______ ]\nVi har byens største udvalg af ringe i alle prisklasser. I kan også selv designe jeres ringe til den store dag. Læs mere på vores hjemmeside.\nwww.miamajasmykker.dk" },
          { title: "E", body: "Din filmbutik på nettet\nNu går den vilde bryllupsrejse\nDe er nygifte og på deres livs bryllupsrejse. Det lyder perfekt – men det er det ikke! En romantisk film, som du vil huske.\n[ E: ______ ]\nPris: 179,95\nwww.koebfilm-paa-nettet.dk" },
          { title: "F", body: "Min søsters børn i Afrika\nDansk film for hele familien. Onkel Erik tager denne gang hele børneflokken med til Afrika for at hjælpe truede dyr.\nSpilletid: 1 time og 25 minutter ekskl. reklamer og trailers.\n[ F: ______ ]\nBilletpriser: Voksne: 75 kr. Børn: 50 kr.\nGalakse Biografen" },
          { title: "G", body: "Ugens tilbud!\n[ G: ______ ]\nBestil over nettet eller ring for at høre nærmere. Hvis du ønsker det, monterer og installerer vi gerne. Vi bortskaffer også gerne dit gamle produkt ganske gratis. 60 dages fuld returret.\nSaabye Elsalg – tlf. 52002976\nwww.saabye-elsalg.dk" },
          { title: "H", body: "Bryllupsbilleder\nFå nogle helt igennem eksklusive og kreative billeder fra jeres store dag. Se priser på vores hjemmeside.\nFOTOGRAFERNE EGBJERG & LUND\n[ H: ______ ]" },
          { title: "I", body: "OPRYDNINGSUDSALG\nVi skal have gjort plads til alt det nye, så nu er der mange gode tilbud i vores webshop. Lige nu har vi gode tilbud på:\n[ I: ______ ]\nSilkesengesæt\nFrottélagner\nwww.sovbedre.nu" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Byens bedste sandwich", answer: "A", example: true },
          { n: 7, text: "Sommerdyner", answer: "I" },
          { n: 8, text: "50 % på vinterstøvler", answer: "C" },
          { n: 9, text: "Køb den på dvd nu!", answer: "E" },
          { n: 10, text: "Guld og sølv købes", answer: "B" },
          { n: 11, text: "Vaskemaskine til 4.599 kr.", answer: "G" },
          { n: 12, text: "Skal I giftes?", answer: "D" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p14-3", group: G, real: true,
    title: "Opgave 3 – Søvnløs",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Vælg de ord (13-20), der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Mange mennesker sover dårligt om natten. Måske har de svært ved at falde i søvn, [[0]] måske vågner de mange gange om natten. Og det er faktisk ikke så godt, for hvis man sover dårligt om natten eller sover for lidt, kan man få [[13]] om dagen. Hvis man kun sover et par timer, har man nemlig svært ved at koncentrere sig, og så kan det være svært at passe for eksempel et arbejde. Hvis man skal fungere godt, skal man helst sove 7-8 timer hver nat.

Men hvorfor er det så, at nogle sover dårligt om natten? Det kan der være mange grunde til. Nogle sover dårligt, fordi de har en dårlig madras, som måske også er for [[14]]. Faktisk skal man have ny madras ca. hvert 8. år. Andre sover dårligt, fordi de har problemer, som de begynder at [[15]] på, når de er gået i seng. Og så er der også nogle, der sover dårligt, fordi de drikker kaffe sent på dagen, og det bliver man [[16]] af.

Hvis man har problemer med at sove, er det normalt [[17]] en god idé at tage sovepiller. Det bliver nemlig hurtigt til en dårlig vane, så man efter et stykke tid [[18]] kan sove, hvis man tager en pille. Men hvad kan man så gøre for at få en bedre søvn? Et godt råd er, at man altid går i seng og står op på samme tid. Man kan f.eks. beslutte, at man vil sove fra kl. 24 til kl. 7 hver nat og også i weekenden. Hvis man så ikke kan sove eller kun sover et par timer, står man alligevel op kl. 7. Og man må ikke sove om dagen. Efter et par uger er man så [[19]], at man ofte begynder at sove normalt.

Hvis man godt kan falde i søvn, men vågner om natten, skal man stå op og læse eller høre noget stille musik og [[20]] på, at man bliver så træt, at man kan falde i søvn igen.`,
    questions: [
      {
        type: "gaps",
        bank: ["eller", "vente", "meget", "hjælp", "problemer", "træt", "ikke", "men", "vågen", "tænke", "stor", "høre", "gammel", "kun"].map(w => ({ key: w, text: w })),
        example: { 0: "eller" },
        answers: { 13: "problemer", 14: "gammel", 15: "tænke", 16: "vågen", 17: "ikke", 18: "kun", 19: "træt", 20: "vente" }
      }
    ]
  };

  const opg4 = {
    id: "p14-4", group: G, real: true,
    title: "Opgave 4 – Balletdanser på 14 år",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Emil Mørk på 14 år har en interesse, som han ikke deler med ret mange andre 14-årige drenge. Emil danser nemlig ballet – og han er god til det!

**0.** Emil Mørk begyndte at danse ballet, da han var syv år gammel. Emil var så god til at danse, at hans danselærer foreslog hans forældre, at deres søn burde søge ind på en balletskole i København. Det ville Emil gerne, og han kom også ind på skolen. Det betød, at han skulle flytte hjemmefra, så det var en stor beslutning for både Emil og hans familie. [[0]]. Han har nu boet på balletskolen i seks år, og han er stadig vild med at danse.

**21.** Emil lever næsten hele sit liv på balletskolen. Han sover, spiser, træner og går også i skole der. Derfor ser han kun sine forældre i ferier og weekender. Da han begyndte på skolen, var det rigtig hårdt for ham, for han savnede dem næsten hele tiden. [[21]]. Selvfølgelig savner han dem stadig en gang imellem, men så ringer han til dem, sender en sms eller snakker med dem på Skype.

**22.** Mange drenge på 14 år kan godt lide at spille computerspil, og det kan Emil også. Men han har ikke tid til at spille hver dag, og han har heller ikke tid til at have andre fritidsinteresser. [[22]]. Hans drøm om at blive professionel balletdanser er nemlig vigtigere for ham. Derfor træner han gerne mange timer hver dag, og han kunne ikke tænke sig, at det var anderledes.

**23.** Der er mange piger, der godt kan lide at danse ballet. Derfor er der også flest piger på balletskolen og ikke ret mange drenge. I Emils klasse er der for eksempel kun en anden dreng. De elsker begge to at danse ballet, men ellers er de meget forskellige. Derfor snakker de ikke så meget med hinanden. [[23]]. For selvom pigerne er meget søde og gode at snakke med, så savner han en rigtig drengeven.

**24.** Hver sommer er der eksamen i dans for alle børnene på balletskolen. Hvis de ikke klarer eksamen, må de ikke fortsætte på skolen. Derfor er de fleste af børnene meget nervøse. [[24]]. Emil har været til eksamen hvert år, siden han startede på skolen, og det er altid gået godt for ham. Alligevel sover han aldrig godt natten før en eksamen. Og han kan som regel slet ikke spise noget på eksamensdagen, fordi han er så bange for, om han klarer den. Det er altid en rigtig hård tid.

**25.** Heldigvis er balletskolen ikke kun hårdt arbejde. Somme tider får eleverne for eksempel mulighed for at være med i rigtige forestillinger på teatret sammen med de voksne dansere. [[25]]. Når Emil står på scenen foran et publikum, glemmer han alt om den hårde træning. Det giver ham en helt særlig følelse i kroppen, når forestillingen slutter, og publikum klapper, og alle danserne bukker og nejer. Ja, det er faktisk det bedste, han ved.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Men han er rigtig glad for sit valg." },
          { key: "B", text: "Det er utrolig spændende." },
          { key: "C", text: "Det er Emil faktisk ked af." },
          { key: "D", text: "Men det er Emil ikke ked af." },
          { key: "E", text: "Og det gør han aldrig mere." },
          { key: "F", text: "Men det er Emil heldigvis ikke." },
          { key: "G", text: "Men nu går det bedre." },
          { key: "H", text: "Det er Emil selvfølgelig også." }
        ],
        example: { 0: "A" },
        answers: { 21: "G", 22: "D", 23: "C", 24: "H", 25: "B" }
      }
    ]
  };

  const opg5 = {
    id: "p14-5", group: G, real: true,
    title: "Opgave 5 – Interview med Katrine",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Katrine – lærer på en sprogskole",
        cards: [
          { title: "A", sub: "Eksempel", body: "Jeg har altid været glad for at undervise. Jeg arbejdede i flere år på en folkeskole, men så fik jeg lyst til at prøve noget nyt. Jeg ville gerne prøve at undervise voksne, så jeg besluttede at søge job her på skolen. Jeg fik jobbet og blev hurtigt rigtig glad for det, og jeg har været her lige siden." },
          { title: "B", body: "Ja, meget. Det bedste er næsten, at jeg lærer nye ting om mit eget sprog hele tiden. Før tænkte jeg ikke så meget på mit sprog, men da jeg begyndte at undervise udlændinge, skulle jeg pludselig tænke på grammatik og udtale på en ny måde. Det var meget spændende, så jeg begyndte også at læse bøger om dansk sprog, og det gør jeg faktisk stadig." },
          { title: "C", body: "Nej, men det er der rigtig mange, der tror. Det er jo nok, fordi det er svært at forestille sig, at man kan undervise udlændinge i dansk, hvis man kun snakker dansk med dem. Men det kan man faktisk godt. Jeg bruger for eksempel tit billeder og tegner på tavlen, når jeg skal forklare nye ord." },
          { title: "D", body: "Jeg tror, det korte svar på det spørgsmål må være: når kursisterne lærer noget! Hvis jeg for eksempel har lært mine kursister noget nyt, og jeg kan høre, at de har forstået det. Det betyder meget. Men der sker mange små ting i løbet af en dag, som gør mig glad. Sådan er det nok, når man arbejder med mennesker." },
          { title: "E", body: "De er rigtig gode! Jeg synes nemlig, de giver mig en del frihed i min hverdag. Jeg skal selvfølgelig være på skolen, når jeg underviser. Jeg skal også til møde med mine kolleger næsten hver uge. Men jeg kan selv bestemme, hvornår jeg vil forberede mig og rette opgaver. Og det er vigtigt for mig." },
          { title: "F", body: "Ja, for hvis man ikke kan lide at møde mange nye mennesker hele tiden, så skal man ikke arbejde på en sprogskole! Og man skal også være parat til at lytte og prøve at forstå, hvad de fortæller, også selvom de ikke alle sammen taler lige godt dansk. For det at lære et nyt sprog handler jo også om at have det godt sammen." },
          { title: "G", body: "Det tror jeg faktisk ikke, det er. Jeg kender da mange, der er gode til både at tale og skrive vores sprog. Selvfølgelig er udtalen lidt speciel, men det er den jo også på mange andre sprog. Jeg ville f.eks. nok aldrig komme til at lyde helt som en polak, hvis jeg skulle lære at tale polsk." },
          { title: "H", body: "Jeg synes, de er dejlige, men der er over 60 lærere på min skole, og vi arbejder på forskellige tidspunkter mellem kl. 8 og kl. 21. Det betyder desværre, at jeg ikke kender dem alle sammen lige godt. Men så er der selvfølgelig også nogle, jeg har kendt i mange år, og som jeg ses med privat." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor blev du sproglærer?", answer: "A", example: true },
          { n: 26, text: "Taler du så mange forskellige sprog?", answer: "C" },
          { n: 27, text: "Hvordan er dine arbejdstider?", answer: "E" },
          { n: 28, text: "Er det svært at lære dansk?", answer: "G" },
          { n: 29, text: "Hvad kan du bedst lide ved dit job?", answer: "D" },
          { n: 30, text: "Hvordan er dine kolleger?", answer: "H" }
        ]
      }
    ]
  };

  // Real sets newest first: 2020, 2019, 2014, 2013, 2012.
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 maj-juni 2013");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling 2014 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2013);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w14a", delprove: 1, real: true, year: 2014,
      title: "A: Et takkebrev (2014)",
      kind: "Prøveopgave · takkebrev efter praktik",
      minWords: 80, maxWords: 150,
      situation: "Du er lige blevet færdig med en praktik i en børnehave. Du vil skrive et takkebrev til de ansatte i børnehaven. Du skal begynde og afslutte takkebrevet på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Tak for en god tid", "Fortæl, hvad du synes, du lærte i din praktik", "Fortæl, hvad du vil savne", "Fortæl, hvad du nu skal lave, og hvornår du gerne vil komme på besøg"],
      phrases: ["Kære alle i …", "Tusind tak for en god tid.", "Jeg har lært meget om …", "Jeg vil især savne …", "Nu skal jeg …", "Jeg vil gerne komme på besøg …"],
      model: `Kære alle i Børnehaven Solstrålen

Tusind tak for tre gode måneder i praktik hos jer. I tog godt imod mig fra den første dag, og jeg følte mig hurtigt som en del af personalet.

Jeg har lært rigtig meget. Jeg har lært, hvordan man taler med børn, når de er kede af det, og hvor vigtigt det er at lege og være ude hver dag. Mit danske er også blevet meget bedre, fordi børnene hele tiden stillede spørgsmål.

Jeg vil især savne børnenes glade ansigter om morgenen og vores ture i skoven om fredagen. Jeg vil også savne de gode snakke med jer i frokostpausen.

Nu skal jeg begynde på pædagogassistentuddannelsen i august. Jeg vil meget gerne komme på besøg til jeres sommerfest i juni, hvis det er i orden.

Mange hilsner
Fatima`
    },
    {
      id: "w14b", delprove: 1, real: true, year: 2014,
      title: "B: En jobansøgning (2014)",
      kind: "Prøveopgave · ansøgning til kantinen",
      minWords: 80, maxWords: 150,
      situation: "Du har set i en jobannonce i avisen, at kantinen på Roskilde Sygehus søger en kantinemedarbejder. Du vil søge jobbet. Du skal begynde og afslutte jobansøgningen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv, og hvorfor du gerne vil arbejde i en kantine", "Hvilke erfaringer du har med at arbejde i et kantinekøkken", "Hvorfor du vil være god til jobbet som kantinemedarbejder", "Hvordan du kan kontaktes"],
      phrases: ["Jeg har set jeres annonce i …", "Jeg hedder … og er … år.", "Jeg har erfaring med …", "Jeg er god til at …", "Jeg kan kontaktes på …", "Med venlig hilsen"],
      model: `Til kantinen, Roskilde Sygehus

Ansøgning om job som kantinemedarbejder

Jeg har set jeres annonce i Roskilde Avis, og jeg vil gerne søge jobbet som kantinemedarbejder.

Jeg hedder Samir, er 35 år og bor i Roskilde med min kone og to børn. Jeg elsker at lave mad, og jeg kan godt lide at arbejde i et travlt køkken, hvor man er mange kolleger.

I tre år har jeg arbejdet i kantinen på en stor virksomhed i Køge. Her lavede jeg salater og varme retter til ca. 200 personer hver dag, og jeg tog mig også af opvask og rengøring. Jeg kender reglerne for hygiejne.

Jeg tror, at jeg vil være god til jobbet, fordi jeg er hurtig, ordentlig og altid til at stole på. Jeg kan også lide at møde kunderne med et smil.

Jeg kan kontaktes på tlf. 26 37 48 59.

Med venlig hilsen
Samir Haddad`
    },
    {
      id: "w14c", delprove: 2, real: true, year: 2014,
      title: "En e-mail om at lære dansk (2014)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Daniel. Han skriver bl.a.: \"Min fætter er lige flyttet til Danmark, og han vil gerne begynde at lære dansk. Og jeg vil gerne fortælle ham, hvordan man lærer dansk på en god måde. Jeg ved jo, du er god til dansk. Kan du ikke fortælle lidt om, hvordan du har lært dansk?\" Skriv et svar til Daniel. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvordan du har lært dansk", "Fortæl, hvad der var svært", "Fortæl, hvad der hjalp dig mest", "Giv gode råd til Daniels fætter"],
      phrases: ["Hej Daniel", "Hvor er det godt, at …", "Jeg lærte dansk på …", "Det sværeste var …", "Det, der hjalp mig mest, var …", "Mit bedste råd er …"],
      model: `Hej Daniel

Hvor er det godt, at din fætter gerne vil lære dansk. Jeg fortæller gerne, hvordan jeg gjorde.

Jeg gik på sprogskole tre aftener om ugen i fire år. Det var hårdt, fordi jeg også arbejdede om dagen, men lærerne var dygtige, og vi var en god klasse.

Det sværeste for mig var udtalen. Danskerne siger ikke ordene, som de bliver skrevet, og i starten kunne jeg slet ikke forstå dem, når de talte hurtigt.

Det, der hjalp mig mest, var at tale dansk med mine kolleger og naboer. Jeg så også dansk tv med danske undertekster og læste børnebøger for min datter.

Mit bedste råd til din fætter er: Vær ikke bange for at lave fejl, og sig til folk, at de skal tale dansk med ham, selvom han ikke forstår alt.

Mange hilsner
Ahmed`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven 2014 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2, maj-juni 2014)";
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p15", title: "Fester", real: true, year: 2014,
      pictures: [
        { img: "images/pd2-2014/fester-1.jpg", credit, alt: "En fest med et band, hvor folk i alle aldre danser og snakker", words: ["fest", "band", "danse", "gæsterne", "stemning"] },
        { img: "images/pd2-2014/fester-2.jpg", credit, alt: "En fin middag ved et langt bord, hvor en mand holder tale", words: ["middag", "holde tale", "langt bord", "kede sig", "pænt tøj"] }
      ],
      interview: [
        "Hvad slags fest tror du, det er?",
        "Hvornår var du sidst til fest? Fortæl om det.",
        "Hvad skal der til, for at en fest bliver god?",
        "Hvordan holder man fest i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg elsker store fester med musik og dans. Hvad slags fester kan du bedst lide?" },
        { who: "partner", say: "Jeg synes, danske fester med taler og sange varer alt for længe. Hvad synes du?" },
        { who: "mediator", say: "Hvilke fester er de vigtigste i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at det er vigtigt for en familie at holde fester sammen. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, man skal gøre, hvis man bliver inviteret til en fest i Danmark?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det ligner et bryllup / en fødselsdag", "Nogle af gæsterne …", "Sidste gang jeg var til fest …", "Hos os fejrer man …", "Hvad med dig?"]
    },
    {
      id: "p16", title: "På tur", real: true, year: 2014,
      pictures: [
        { img: "images/pd2-2014/paa-tur-1.jpg", credit, alt: "En dag ved stranden med en parasol, folk der bader, fisker og leger", words: ["stranden", "parasol", "picnic", "bade", "fiske"] },
        { img: "images/pd2-2014/paa-tur-2.jpg", credit, alt: "En familie på museum ser på vikingeting", words: ["museum", "vikinger", "udstilling", "skib", "familien"] }
      ],
      interview: [
        "Hvad laver personerne på billedet?",
        "Hvor tager du hen, når du skal på tur?",
        "Hvilken tur i Danmark har du bedst kunnet lide?",
        "Hvad laver familier, når de har fri i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg tager på stranden hver weekend om sommeren. Kan du også lide stranden?" },
        { who: "partner", say: "Jeg synes, museer er lidt kedelige. Hvad synes du?" },
        { who: "mediator", say: "Hvor tager man typisk på tur i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, det er vigtigt, at børn kommer ud i naturen. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, en god udflugt med familien skal indeholde?" }
      ],
      phrases: ["Billedet viser …", "De er på …", "Jeg tager tit til …", "Det bedste sted, jeg har været, er …", "Jeg foretrækker …, fordi …", "Hvad med dig?"]
    },
    {
      id: "p17", title: "At flytte hjemmefra", real: true, year: 2014,
      pictures: [
        { img: "images/pd2-2014/flytte-1.jpg", credit, alt: "Unge mennesker hygger sig i et værelse med musik og computer", words: ["værelset", "kollegium", "venner", "musik", "rod"] },
        { img: "images/pd2-2014/flytte-2.jpg", credit, alt: "En teenager med høretelefoner ligger på sofaen med fødderne på bordet, mens forældrene er sure", words: ["teenager", "forældrene", "skælde ud", "rydde op", "høretelefoner"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvornår flyttede du hjemmefra – eller hvornår vil du gerne?",
        "Hvad er godt og dårligt ved at bo hjemme hos sine forældre?",
        "Hvornår flytter unge hjemmefra i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg flyttede hjemmefra, da jeg var 25, og blev gift. Hvordan var det for dig?" },
        { who: "partner", say: "Jeg synes, unge i Danmark flytter hjemmefra alt for tidligt. Er du enig?" },
        { who: "mediator", say: "Er det normalt at bo hjemme, til man bliver gift, i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, man bliver mere selvstændig, når man bor for sig selv. Hvad tror du?" },
        { who: "mediator", say: "Hvad synes I generelt er den rigtige alder at flytte hjemmefra?" }
      ],
      phrases: ["På billedet ser jeg …", "De unge er ved at …", "Forældrene ser … ud", "Jeg flyttede hjemmefra, da …", "Hos os er det almindeligt, at …", "Det kommer an på …"]
    }
  );
})();
