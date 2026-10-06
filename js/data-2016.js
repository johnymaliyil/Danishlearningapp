// Prøve i Dansk 2, november-december 2016 – transcribed from the scanned exam papers.
// Included: læseforståelse opgave 1-5 and skriftlig fremstilling (no oral material was supplied).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 nov.-dec. 2016";

  const opg1 = {
    id: "p16-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"I hvilken park er der frugttræer?\" – Fællesparken i Sydbyen.",
    sections: [
      {
        heading: "Silkeborg Kommunes parker",
        cards: [
          { title: "Byparken i Bryrup", sub: "Østervang, 8654 Bryrup", body: "• Et lille areal med plæne\n• Der er bede med surbundsplanter, store træer og et vandløb\n• En sti løber igennem området\n• Parken er cirka 0,2 hektar stor." },
          { title: "Fællesparken i Sydbyen", sub: "Jernbanevej 79, 8600 Silkeborg", body: "• En stor plæne med en del ældre træer\n• Der er en lille dam\n• I et hjørne af parken er der etableret en lund af frugttræer\n• Stort bed med gamle, store rododendron\n• Der er sat bænke op\n• Der er en legeplads\n• Der er grus- og asfaltstier rundt i området\n• Parken er cirka 1 hektar stor." },
          { title: "Falkenkærparken", sub: "Søndergade, 8883 Gjern", body: "• Et stort grønt område med søer\n• Arealet er let at færdes på\n• Der er en del stier i området\n• Parken er cirka 10 hektar stor." },
          { title: "Indelukket", sub: "Åhave Allé 9, 8600 Silkeborg", body: "Området ligger i forbindelse med:\n• Kiosk\n• Madpakkehus\n• Minigolf\n• Petanquebane\n• Legeplads\n• Lystbådehavn\n• Anløbsbro hvor Hjejlebådene lægger til\n• Parken ligger tæt ved Silkeborg Kunstmuseum og Gudenåens Camping\n• Parken er cirka 12 hektar stor." },
          { title: "Krabbes Grønne Ring", sub: "Vestergade 17A, 8620 Kjellerup", body: "• Et markant islæt i Kjellerup bys vestlige, nordlige og østlige side\n• Oprindelig plantet i slutningen af 1800-tallet som et værn mod vestenvinden\n• Ringen består hovedsageligt af løvtræer, bøg og eg\n• Giver mulighed for en god vandretur rundt om byen\n• Der er sat bænke op flere steder på ruten\n• Der er en sansehave med forskellige krydderurter, som du er velkommen til at plukke af\n• Parken er cirka 40 hektar stor." },
          { title: "Lunden i Silkeborg", sub: "Vestergade 74, 8600 Silkeborg", body: "• Plæner med store, gamle bøgetræer\n• Flere steder er der lavet afgrænsning eller mindre rum ved hjælp af beplantning, blandt andet med rododendron\n• Smukt beliggende ud til Kalgårds Vig\n• I parken er der en amfiscene og en musikpavillon, og der bliver holdt flere store arrangementer hen over sommeren\n• Der er sat bænke op flere steder\n• Der er grusstier rundt i området\n• Parken er cirka 4,5 hektar stor." },
          { title: "Lyngsøparken", sub: "Lyngsøvej 26, 8600 Silkeborg", body: "• Stor plæne omkranset af gamle træer\n• Enkelte store træer inde i området\n• Grusstier rundt i området\n• I vestenden er der en legeplads\n• Petanquebane samt borde og bænke\n• Parken er cirka 0,6 hektar stor." }
        ]
      },
      {
        heading: "Strande i Slagelse Kommune",
        cards: [
          { title: "Om strandene", body: "I Slagelse Kommune er der 19 kommunale strande med meget forskellige udtryk." },
          { title: "Bildsø Strand", body: "Der er en dejlig sandstrand, masser af smukke blomster og særprægede gamle fyrretræer, der er formet af vinden. Adgang til stranden sker gennem skoven fra den store P-plads ved Stendyssevej. I skoven kan motionsoasen benyttes af strandens gæster. Der er opholdspladser med borde og bænke på stranden." },
          { title: "Bisserup Strand", body: "Der er en smal sandstrand, grønne strandarealer og tendens til opskyllet tang på strandbredden. Officiel P-plads findes ved campingpladsens indkørsel. Desuden er der adgang ad Voldstien, hvor der er en mindre P-plads ved iskiosken. Der er legeplads ved campingpladsen og dige på strandarealet opført af Bisserup Digelaug." },
          { title: "Frølunde Fed Strand", body: "Selve stranden er en blanding af sand- og stenstrand og ofte med en del opskyllet tang. Frølunde Fed Strand støder op til et større sommerhusområde. På stranden er der et kommunalt strandhus med diverse inventar beregnet til strandture for børneinstitutioner og skoler. Bygningen administreres af Tårnborg Skole." },
          { title: "Granskoven Strand", body: "Granskoven Strand byder på fin sandstrand med et stort grønt område mellem digerne. Der er sjældent opskyllet tang på strandbredden, ligesom der i badevandet aldrig har været tegn på dårlig vandkvalitet. Begge dele skyldes den store vandudskiftning, der finder sted netop ved denne strand. Der findes en rig variation af almindelige strandplanter." },
          { title: "Kelstrup Strand", body: "På stranden kan man få et hyggeligt strandophold uden indblanding fra mange badegæster og dermed nyde udsigten over havet i fred og ro. Stranden brydes af mindre, privat bebyggelse." },
          { title: "Kobæk Strand", body: "Der er ofte mange badegæster, og du finder gode muligheder for strandaktiviteter. I tilknytning til stranden er der stisystemer, der leder gennem Kobæk Skov og videre langs yderfjorden." },
          { title: "Kongsmark Strand", body: "Strandens karakter varierer meget alt efter strøm og vandstand. Den ene dag kan man bade fra en fin sandstrand – den næste dag skal man kæmpe sig gennem opskyllet tang. Men én ting er sikker: Smukkere solnedgange overgås kun få steder af synet fra denne smukke strandklint. P-pladsen med toilet findes på modsatte side af Kongsmarksvej på Støvlebækvej." },
          { title: "Musholm Bugt Strand", body: "Stranden er en smal sandstrand stort set uden grønsvær og er beliggende neden for kystskrænten, der er udpeget som bevaringsværdig kystskrænt. Denne kystskrænt er ynglested for et stort antal digesvaler. Stranden er ofte den foretrukne strand i området til aftenbadning på grund af aftensolen. Der er adgang ad stier fra P-pladser både ved Tårnborgvej og Muskelsvindfondens Feriecenter. Der er legeplads for kørestolsbrugere ved feriecenteret og gode stisystemer fra centeret til omgivende natur. Langs stien fra P-plads til stranden er der en fin bevoksning af bl.a. havtorn og gyvel." },
          { title: "Næsby Strand", body: "Bag sandstranden er et større strandengsområde, hvor man også kan opholde sig. Stranden ligger ca. 10 km fra Slagelse by, så der er også mulighed for en god cykeltur derud fra byen af." },
          { title: "Quistgaardsvej Strand", body: "Strandområdet benyttes meget af kørestolsbrugere fra nærliggende institutioner, der nyder udsigten over Storebælt. Desuden er det grønne areal indrettet som opholdsplads for kørestolsbrugere og sammenhængende med handicaptilgængelig sti langs Storebælt samt nabo til plejecenter og sygehus. Strækker sig fra Langelandsvej til Thersvej. Der er omklædningsrum og badebro for vinterbadere. Skræntudskridninger har gennem tiden opdelt strandstrækningen i mindre stykker." },
          { title: "Revkrogen Strand", body: "Ønsker man at bade midt i et stykke enestående natur med kulturhistoriske spor og ganske tæt på Storebæltsbroen, er denne dejlige sandstrand sagen. Fra udsigtspunktet bag Isbådsmuseet fører en sti på kystskrænten ned under brofæstet til Storebæltsbroen og videre ud på Lejodde. Kystskrænten, der fortsætter mod nord, hører til de mest bevaringsværdige kystskrænter i Danmark." },
          { title: "Skovstranden", body: "Dansk Handicapforbund udpegede sidst i 1990'erne Skovstranden som et egnet sted for en kommunal handicapstrand, og der blev opført handicaptoilet, kørestier og køreramper. Denne strand er en rigtig skovstrand, hvor der hersker fred og idyl. Der er adgang til stranden fra P-plads i den sydlige del af Korsør Lystskov." },
          { title: "Stibjerg Strand", body: "Det lave vand samt strandens beliggenhed helt inde i Musholmbugten betyder, at vandet nogle dage varmes hurtigt op. Det kan derfor være et af de steder, hvor det tidligst bliver til at holde ud at dyppe fødderne. På dage med god sigt kan man i det fjerne mod nord se konturerne af øen Musholm." },
          { title: "Stillinge Strand", body: "Stranden er meget populær, og især de unge foretrækker Stillinge Strand, der er tæt på alle sommerlandets faciliteter. Det er ikke denne strand, man skal vælge, hvis man ønsker en badedag i fred og ro." },
          { title: "Stranden ved Alhøjvænget", body: "En trappe fører fra en sti ned til stranden. På kystskrænten går en smuk sti til Korsør Lystskov, hvori der ligger en motionsoase. Foden af skrænten er beskyttet af gabioner, dvs. en stenmur sammenholdt af stålnet, og den hører til blandt de bevaringsværdige kystskrænter." },
          { title: "Stranden ved Søskær Mose", body: "Stranden er sandstrand med lidt sten. Området er udpeget som en af Danmarks særligt bevaringsværdige kystskrænter. En sti langs Storebælt fra Korsørs sydlige bydel fører til stranden ved Søskær Mose. Der er også mulighed for adgang gennem skoven og fra Skovåsen og Rødeledsvej." },
          { title: "Stranden ved Værftet", body: "Stranden er af varierende karakter med sand og sten, men også et grønt område med borde og bænke. Der er ved denne strand stor tendens til ophobning af tang. Stranden bruges fortrinsvis af de lokale beboere." },
          { title: "Strandvejen Strand", body: "Der findes ingen faciliteter, men stranden benyttes en del og rummer et potentiale eventuelt i forbindelse med nærrekreativt område for Pier-bebyggelsen i de gamle færgelejer." },
          { title: "Svenstrup Strand", body: "Stranden er på de varmeste badedage meget besøgt, men giver ellers mulighed for et roligt ophold for hele familien. Stranden bruges dog fortrinsvis som badestrand af beboerne i Frølunde, Svenstrup og landområdet. På stranden kan man spadsere vestpå mod Lejodden, som er en bevaringsværdig kystskrænt." }
        ]
      },
      {
        heading: "Guidede ture",
        cards: [
          { title: "Om turene", body: "Oplev historiens vingesus. Få den levende historie om naturen, Grænselandet og Aabenraas søfartshistorie. Turene er spændende for både store og små og gratis at deltage i. Tilmelding er ikke nødvendig." },
          { title: "Vægterture", sub: "24. juni-29. juli hver onsdag kl. 22.00 · 5. august-26. august hver onsdag kl. 21.00 · 14. oktober kl. 19.00", body: "Mødested: Vægterpladsen i Aabenraa. Følg vægterne onsdag aften i sommermånederne på deres traditionelle vandring gennem Aabenraas gader og hør byens spændende og dramatiske historie.\nVægtere: Erling Madsen og Holger Jacobsen." },
          { title: "Barsø", sub: "29. juni og 3. august kl. 12.15-15.30", body: "Mødested: Barsø Landing. Oplev Barsøs fantastiske natur og få fortalt om øens kulturhistorie. Turen er gratis, men der skal købes færgebillet.\nGuide: Jørn Steenberg." },
          { title: "Guidet byvandring Aabenraa", sub: "7. juli, 21. juli og 4. august kl. 14.00", body: "Mødested: Det gamle Rådhus, Rådhusgade, Aabenraa. Oplev Aabenraas spændende historie og byens historiske bygninger.\nGuide: Erling Madsen." },
          { title: "I jomfru Fannys fodspor", sub: "2. juli, 23. juli og 20. august kl. 18.30", body: "Mødested: Søfartsmuseet, H.P. Hanssens Gade 33, Aabenraa. Oplev historien om Jomfru Fanny – den uægte kongedatter, der havde sit liv i Aabenraa fra 1805 til 1881.\nGuide: Erling Madsen." },
          { title: "Tur i Hjelm Skov", sub: "8. juli kl. 18.30", body: "Mødested: Trolden for enden af Hjelmallé i Aabenraa. Få historien om Kongehøjen, skovens skjulte fortidsminder og Bodenhoffs Kilde.\nGuide: Jørn Steenberg." },
          { title: "Sikringsstilling Nord", sub: "25. juni, 16. juli og 6. august kl. 18.30", body: "Mødested: Lerskov Batteriet (mellem Rødekro og Genner). Aftentur til nogle af de bedst bevarede dele af fæstningsanlægget fra 1. verdenskrig, som tyskerne anlagde i 1916.\nGuide: Erling Madsen." },
          { title: "Vestersø og Ulvekule", sub: "5. august kl. 18.30", body: "Mødested: P-pladsen på Skedebjerg ved Nymøllevej (mellem Aabenraa og Rødekro). En flot tur ad små skovstier gennem en varieret løvskov med Mølleåen, bronzealder-høje og RAF-mindestenen.\nGuide: Jørn Steenberg." },
          { title: "Hærvejen og Gendarmstien", sub: "1. juli og 15. juli kl. 19.00", body: "Mødested: P-pladsen ved Bov Kirke / præstegården på Kirkevej i Bov. Vi får små historier fortalt om bl.a. Bov Kirke, præstegården, brandstationen og det frivillige brandværn, Hærvejen, Bov som middelalderby, Slaget ved Bov, grænsedragningen i 1920, grænsegendarmeriet og nyder naturen gennem Tunneldalen og langs Gendarmstien.\nTurleder: Kaj Mauritzen." },
          { title: "Kobbermølleturen", sub: "8. juli, 22. juli og 29. juli kl. 19.00", body: "Mødested: Kruså Turistbureau, Flensborgvej 11, Kruså. Vi hører om Gendarmstien, Kruså-dalen, Skomagerhus, Wassersleben og Kobbermølle. Og vi nyder udsigten mod Flensborg – den \"gamle danske by\".\nTurleder: Kaj Mauritzen. Husk at medbringe pas." },
          { title: "Gejlåbroen, Bommerlund og Hærvejen", sub: "2. juli kl. 19.00", body: "Mødested: Gejlåbroen i Gejlå. Hærvejen var i årtusinder forbindelsesvejen mellem Danmark og Europa. Hør historien om Hærvejen, Bommerlund Kro og Bommerlund brændevin og om den smukke gamle Gejlå Bro.\nGuide: Arne Bondo-Andersen." },
          { title: "Gendarmstien på cykel", sub: "Ca. 18 km (2,5 time) · 9. juli, 30. juli og 6. august kl. 18.30", body: "Mødested: Kruså Turistbureau – egen cykel medbringes. En spændende og lærerig guidet cykeltur ad Gendarmstien fra Kruså til Sønderhav og retur til Kruså via Østerskov. Udfordrende stigninger men med fantastisk udsigt. Hør om Gendarmstiens historie, naturen og dyrelivet – og der er hjælp med cykelteknikken.\nGuide: Natur- og landskabsguide Stefanie Dibbern." }
        ]
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvilken park ligger tæt på Gudenåens Camping?", accept: ["indelukket"] },
      { type: "short", n: 2, q: "Hvilken park ligger ud til Kalgårds Vig?", accept: ["lunden i silkeborg", "lunden"] },
      { type: "short", n: 3, q: "Hvilken strand har et handicaptoilet?", accept: ["skovstranden"] },
      { type: "short", n: 4, q: "Hvilken strand er specielt de unge glade for?", accept: ["stillinge strand", "stillinge"] },
      { type: "short", n: 5, q: "Ved hvilken badestrand bliver vandet somme tider hurtigt varmt?", accept: ["stibjerg strand", "stibjerg"] },
      { type: "short", n: 6, q: "På hvilken tur skal man købe en færgebillet?", accept: ["barsø", "turen til barsø", "barsø-turen"] }
    ]
  };

  const opg2 = {
    id: "p16-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A", sub: "Eksempel", body: "Ugens tilbud (uge 31)\nCulottesteg pr. 100 gram: 12,50 kr.\nFriskhakket oksekød: 24,95 kr. pr. ½ kg.\nAndebryst – 3 stk.: 99,95 kr.\nPålægspakke (15 skiver): 30 kr.\n[ A: ______ ]\nTorvet 4" },
          { title: "B", body: "Aftenåbent på fredag!\nVi holder åbent til kl. 22 med mange gode tilbud bl.a.:\n[ B: ______ ]\nKom også ind og se vores store udvalg af vintertøj – vi har mange spændende nyheder.\nMille & My" },
          { title: "C", body: "[ C: ______ ]\nVed behov for behandling i denne periode henviser vi til vores kolleger hos City Tandlægerne (Tlf. 82 09 38 57).\nKlinikken åbner igen mandag d. 20.2.\nTandlægerne Holm og Jensen, Kirkegade 4" },
          { title: "D", body: "[ D: ______ ]\nDameklip inkl. vask og føn 495 kr.\nHerreklip inkl. vask og føn 375 kr.\nVi bruger kun økologiske produkter i salonen.\nFrisør Anja K., Hovedgaden 14, Tlf. 43 65 00 98" },
          { title: "E", body: "Gåtur i Østerskoven\nKom med ud på en frisk gåtur lørdag d. 3. december kl. 13.00. Turen varer ca. 2 timer. Efter gåturen er der boller og småkager og gløgg og varm kakao.\n[ E: ______ ]\nPris pr. person: 20 kr.\nTilmelding ikke nødvendig." },
          { title: "F", body: "[ F: ______ ]\nGerne i Odense centrum\nHvis du kan bruge en engageret og smilende elev i din salon – kontakt Tilde på tlf. 53 09 83 76." },
          { title: "G", body: "Kursuskatalog – forår 2017\nVi starter op efter nytår med masser af nye og spændende kurser!\n[ G: ______ ]\nSå hold øje med din postkasse! Eller læs det på vores hjemmeside: www.havnenaften.nu\nHavnens Aftenskole" },
          { title: "H", body: "Julekoncert i Kulturhuset\nTrix-koret underholder med en buket af julens glade sange i Kulturhuset søndag d. 11/12 kl. 14-15.\n[ H: ______ ]\nDog gratis adgang for børn under 12 år.\nVel mødt!" },
          { title: "I", body: "[ I: ______ ]\nMødested: Vejby Apotek\n1. gang: onsdag d. 11. januar kl. 17-18.30.\nDeltagelse er gratis.\nMeld dig til på e-mail: vejbyapo@mail.dk – og sig farvel til cigaretterne for altid!" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Slagter Friis.", answer: "A", example: true },
          { n: 7, text: "Rygestop-kursus.", answer: "I" },
          { n: 8, text: "Ferielukket i uge 7.", answer: "C" },
          { n: 9, text: "Halv pris på kjoler med gult mærke.", answer: "B" },
          { n: 10, text: "Billetpris: 40 kr.", answer: "H" },
          { n: 11, text: "Praktikplads som frisør søges.", answer: "F" },
          { n: 12, text: "Mødested: P-pladsen ved iskiosken.", answer: "E" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p16-3", group: G, real: true,
    title: "Opgave 3 – Vi smider for meget mad ud",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Al den mad, vi køber og tilbereder, skal vi helst spise, for mad koster mange penge, og den er dyr at producere. [[0]] er der masser af mad, der ender i skraldespanden.

Sådan har det også været hjemme hos Anja og Klaus Olsen i mange år. De kan nemlig godt lide at købe mad, der er på tilbud. F.eks. synes de, at det er [[13]], når man kan få 20 bananer for 20 kr. Måske får de så kun spist seks-syv stykker, før bananerne er for gamle, og så smider de resten ud. Anja og Klaus laver også tit [[14]] aftensmad, end de kan spise. Hvis der er rester, smider de dem bare ud, [[15]] de godt kan spises. For de synes begge to, det er [[16]] at spise den samme mad flere dage i træk.

Men der er ingen grund til at smide maden ud. Stegt og kogt mad kan jo uden problemer holde sig i flere dage. Og nu skal det være slut. Anja blev nemlig [[17]], da hun så en udsendelse i fjernsynet om, hvor meget mad folk smider ud. Så hun har besluttet, at hun og Klaus skal begynde at lave en madplan, så de [[18]] kun køber den mad, de kan spise. Og hvis der somme tider er madrester, skal de enten spise dem næste dag eller fryse dem ned. Klaus synes, det er en god idé med en madplan. Han synes nemlig også, at det vil være godt, hvis de smider [[19]] mad ud, end de plejer. Måske kan de også spare penge, når de kun køber den mad, de skal bruge, i stedet for at købe [[20]] mad, bare fordi den er på tilbud. Og det er jo heller ikke så dårligt.`,
    questions: [
      {
        type: "gaps",
        bank: ["alligevel", "mere", "altid", "chokeret", "aldrig", "dejligt", "fordi", "meget", "lidt", "mindre", "kedeligt", "selvom", "glad", "ikke"].map(w => ({ key: w, text: w })),
        example: { 0: "alligevel" },
        answers: { 13: "dejligt", 14: "mere", 15: "selvom", 16: "kedeligt", 17: "chokeret", 18: "altid", 19: "mindre", 20: "meget" }
      }
    ]
  };

  const opg4 = {
    id: "p16-4", group: G, real: true,
    title: "Opgave 4 – Fra Aarhus til Ærø",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Signe og Thomas Jensen boede i en lille lejlighed midt i Aarhus i flere år. Men nu er de flyttet til Ærø.

**0.** Thomas er lærer, og Signe er pædagog, og i flere år boede de i en lejlighed midt i Aarhus tæt på deres arbejde. De var glade for at bo i byen, men de talte tit om, at det kunne være spændende at prøve at bo på en ø en dag. [[0]]. For et par måneder siden fandt de nemlig deres drømmehus på Ærø, og så tog de en stor beslutning og flyttede.

**21.** Både Thomas og Signe elsker vand, så deres nye hus ligger selvfølgelig tæt på en strand. Faktisk kan de se ud over havet fra vinduerne i både soveværelset og køkkenet, og det glæder de sig over hver dag. [[21]]. Det betyder især meget for Signe, for hun har altid haft lyst til at dyrke både grøntsager og blomster. Hun kan næsten ikke vente, til det bliver sommer, og det hele vokser frem.

**22.** Thomas og Signe føler sig meget heldige, for de har begge to fundet nye job, som de er rigtig glade for. Signe har fået arbejde i en børnehave på øen, og Thomas arbejder på en skole i Svendborg. Derfor tager han hver dag den færge, der sejler mellem Svendborg og Ærø, for at komme på arbejde. Turen tager 70 minutter. [[22]]. For han keder sig ikke, men læser og slapper af, og så er han frisk, når han kommer hjem.

**23.** På Ærø er der en lille biograf, og alle de mennesker, der arbejder dér, er frivillige. Thomas og Signe arbejder også frivilligt i biografen. De hjælper f.eks. med at sælge billetter eller kaffe, sodavand og slik i biografens lille kiosk. Og så lærer de også nye mennesker at kende. [[23]]. For Thomas og Signe vil nemlig gerne hurtigt føle, at de hører til her på deres nye ø.

**24.** Thomas og Signe elsker den smukke natur på Ærø. De går tit ture langs stranden, og Signe elsker også at løbe ture i naturen. Thomas løber ikke, men han kan godt lide at stå og fiske på havnen. [[24]]. For det er dejligt at være ude i den friske luft, og han vil også gerne fange fisk, som han kan have med hjem til aftensmaden. Det elsker Signe, for de friske fisk smager fantastisk.

**25.** I Aarhus havde Thomas og Signe mange venner, som de tit gik i byen med eller mødtes med til en god middag. Det betyder meget for Thomas og Signe, at de stadig kan se deres gamle venner, selvom det ikke er så let mere, efter at de er flyttet til Ærø. [[25]]. Der er nemlig god plads i deres nye hus, så de inviterer tit nogle af deres gamle venner fra Aarhus til Ærø i flere dage, for rejsen fra Aarhus til Ærø er jo temmelig lang. Og vennerne synes, det er dejligt at besøge dem på den smukke ø.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Så det gør de nu." },
          { key: "B", text: "Men det gør ikke noget." },
          { key: "C", text: "Om sommeren er de ude at svømme hver dag." },
          { key: "D", text: "Og gerne i mange timer." },
          { key: "E", text: "Men nu har de fået nye venner." },
          { key: "F", text: "Men heldigvis er det ikke umuligt." },
          { key: "G", text: "De har også fået en stor have." },
          { key: "H", text: "Det er næsten det vigtigste." }
        ],
        example: { 0: "A" },
        answers: { 21: "G", 22: "B", 23: "H", 24: "D", 25: "F" }
      }
    ]
  };

  const opg5 = {
    id: "p16-5", group: G, real: true,
    title: "Opgave 5 – Interview med Johan",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Johan – pilot hos SAS",
        cards: [
          { title: "A", sub: "Eksempel", body: "Siden jeg var helt lille, har jeg været med min far på flyvepladsen for at se på fly. Jeg tror måske, det er derfor, jeg er så vild med dem. Og så har jeg også altid haft lyst til at se verden, og det har jeg jo mulighed for i det her job. Ja, og så får man faktisk også en ret god løn." },
          { title: "B", body: "Altså, der er flere forskellige måder. Jeg har f.eks. taget uddannelsen på en privat flyveskole. Jeg startede med at gå igennem en masse test, og bagefter kunne jeg så starte på uddannelsen. Jeg måtte låne en masse penge, for jeg skulle nemlig betale hele uddannelsen selv – og det var dyrt!" },
          { title: "C", body: "Det er svært at sige! Lige nu er det bare mit drømmejob. Jeg elsker jo at stå op hver dag og flyve folk rundt i verden. Men det er også et hårdt job, for man er meget væk fra familien. Så når jeg engang får børn, kan det godt være, at jeg vil finde et andet job." },
          { title: "D", body: "Det ved jeg ikke rigtigt, for der er faktisk mange gode ting. Men hvis jeg kun skal vælge én ting, er det nok, at alle mine dage er forskellige. Man laver aldrig det samme som pilot, og det kan jeg godt lide. Og så er der jo også lige det, at jeg kommer rundt i rigtig mange forskellige lande." },
          { title: "E", body: "Ja, det tror jeg da! Lige nu flyver jeg mest på de lange ruter, og det betyder jo, at jeg mange gange må overnatte på et hotel. Så nogle gange er det nok lidt hårdt for hende, fordi jeg ofte er meget væk hjemmefra. Men vi snakker egentlig ikke så meget om det." },
          { title: "F", body: "Jeg ved ikke rigtig. For de helt unge måske, for der er vist ikke så mange ledige stillinger for tiden. Men så må man lave noget andet eller tage til udlandet. Det var jeg selv nødt til at gøre, da jeg var færdig med uddannelsen. Jeg tog til England, og efter et par år var jeg så heldig at finde et job i Danmark." },
          { title: "G", body: "Nej, slet ikke! Men det er min familie nok en gang imellem. Især min mor. Hun bliver somme tider urolig, fordi hun synes, det er et lidt farligt job at have. Men hvis jeg hver dag skal gå og tænke på, om mit arbejde er farligt, så er det nok bedre at finde noget andet." },
          { title: "H", body: "Nej, egentlig ikke. Jeg kan jo både lide de lange arbejdsdage og de mange rejser rundt i verden. Men jeg kan selvfølgelig godt se, at det ikke altid er så populært hos min kæreste. Okay, der er faktisk én ting, som jeg ikke er så vild med, og det er maden på et fly." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvorfor er du blevet pilot?", answer: "A", example: true },
          { n: 26, text: "Er det svært at finde arbejde som pilot?", answer: "F" },
          { n: 27, text: "Er din kæreste glad for, at du er pilot?", answer: "E" },
          { n: 28, text: "Hvad kan du bedst lide ved dit job?", answer: "D" },
          { n: 29, text: "Hvordan bliver man pilot?", answer: "B" },
          { n: 30, text: "Er du aldrig bange?", answer: "G" }
        ]
      }
    ]
  };

  // Real sets newest first: 2020, 2019, 2016, 2014, 2013, 2012.
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 maj-juni 2014");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling 2016 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2014);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w16a", delprove: 1, real: true, year: 2016,
      title: "A: Et opslag om en tur (2016)",
      kind: "Prøveopgave · opslag til holdet",
      minWords: 80, maxWords: 150,
      situation: "Du vil gerne arrangere en tur for dit hold på sprogskolen. Du vil skrive et opslag. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvornår og hvorfor du gerne vil arrangere en tur", "Lidt om, hvor I skal hen, og hvad I skal se", "Hvad det koster at deltage, og hvad der er med i prisen", "Hvordan man tilmelder sig turen"],
      phrases: ["Kære alle på hold …", "Jeg vil gerne arrangere en tur til …", "Vi skal se …", "Prisen er … kr., og så er … med.", "Tilmeld dig ved at …", "Jeg håber, at mange vil med!"],
      model: `Kære alle på hold 4C

Kom med på tur til København!

Lørdag den 8. april vil jeg gerne arrangere en tur for vores hold. Vi har lært meget om danske seværdigheder i undervisningen, og jeg synes, det ville være sjovt at se nogle af dem sammen og tale dansk uden for klassen.

Vi tager toget fra Roskilde kl. 9.15. I København skal vi først se Den Lille Havfrue og Amalienborg. Bagefter sejler vi en tur i kanalerne og spiser frokost i Nyhavn. Vi er hjemme igen ved 18-tiden.

Det koster 250 kr. at deltage. I prisen er togbillet, kanalrundfart og frokost med.

Hvis du vil med, så skriv dit navn på listen ved tavlen eller send mig en sms på 22 33 44 55 senest fredag den 31. marts.

Jeg håber, at mange vil med!

Mange hilsner
Nadia`
    },
    {
      id: "w16b", delprove: 1, real: true, year: 2016,
      title: "B: Et opslag om et værelse (2016)",
      kind: "Prøveopgave · værelse til leje",
      minWords: 80, maxWords: 150,
      situation: "Du bor alene i en stor lejlighed. Du vil gerne leje et værelse ud. Du vil skrive et opslag. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om, hvordan værelset ser ud, og hvordan lejligheden ser ud", "Hvad huslejen er", "Lidt om dig selv, og hvorfor du gerne vil leje værelset ud", "Hvordan man kan kontakte dig"],
      phrases: ["Værelse til leje", "Værelset er … m² og …", "Lejligheden har …", "Huslejen er … kr. om måneden inkl. …", "Jeg hedder … og er … år.", "Ring eller skriv til mig på …"],
      model: `Værelse til leje i Aalborg centrum

Jeg har et stort og lyst værelse til leje i min lejlighed på Vesterbro i Aalborg. Værelset er 16 m² og har udsigt over parken. Der er en seng, et skrivebord og et stort skab.

Lejligheden er på 95 m² og har et stort køkken, en hyggelig stue og en altan. Vi deler køkken, stue og badeværelse.

Huslejen er 3.200 kr. om måneden inklusive varme, vand og internet.

Jeg hedder Leila og er 34 år. Jeg arbejder som laborant og er ikke-ryger. Jeg vil gerne leje værelset ud, fordi lejligheden er for stor til mig alene, og fordi det er hyggeligt at have nogen at snakke med.

Hvis du er interesseret, kan du ringe eller skrive til mig på 27 38 49 50.

Venlig hilsen
Leila`
    },
    {
      id: "w16c", delprove: 2, real: true, year: 2016,
      title: "En e-mail om at skifte arbejde (2016)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Louise. Hun skriver bl.a.: \"Du skrev i din sidste mail, at du tænker på at skifte arbejde. Hvordan kan det være? Det vil jeg gerne høre lidt mere om.\" Skriv et svar til Louise og fortæl, hvorfor du tænker på at skifte arbejde. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvad du arbejder med nu", "Forklar, hvorfor du vil skifte arbejde", "Fortæl, hvad slags job du gerne vil have", "Fortæl, hvad du vil gøre for at finde et nyt job"],
      phrases: ["Hej Louise", "Tak for din mail.", "Lige nu arbejder jeg som …", "Jeg vil gerne skifte, fordi …", "Jeg drømmer om et job, hvor …", "Kh / Mange hilsner"],
      model: `Hej Louise

Tak for din mail. Ja, jeg tænker på at skifte arbejde, og jeg vil gerne fortælle dig hvorfor.

Lige nu arbejder jeg som lagermedarbejder i et stort firma. Jeg har været der i fire år, og jeg har gode kolleger. Men arbejdet er det samme hver dag, og jeg har fået ondt i ryggen af at løfte de tunge kasser. Desuden arbejder jeg tit om aftenen, så jeg ser ikke så meget til mine børn.

Jeg drømmer om et job, hvor jeg kan arbejde med mennesker, for eksempel i en børnehave eller på et plejehjem. Derfor er jeg begyndt at tage et kursus om aftenen, og jeg har søgt to jobs i sidste uge.

Jeg håber, at jeg snart hører fra dem. Jeg skriver til dig, så snart jeg ved mere.

Mange hilsner
Omar`
    }
  );
})();
