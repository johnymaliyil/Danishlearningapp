// Prøve i Dansk 2, maj-juni 2024 – transcribed from the exam papers (produktionsnr. 09, 10 and 13).
// Included: læseforståelse 2 (opgave 3-5), skriftlig fremstilling (delprøve 1 A/B and delprøve 2)
// and the oral topics for mundtlig delprøve 2 (At lære noget nyt, At holde fest, Store og små byer
// i Danmark) with the examiner's questions and the pictures (illustrations by Niels Roland).
// Læseforståelse 1 (opgave 1-2, produktionsnr. 07 and 08) is included too. All answers to opgave 1-5
// follow the official answer key (censor- og eksaminatorhæfte). The model answers are our own.

(function () {
  const G = "PD2 maj-juni 2024";

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
    id: "p24m-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"I hvilket legeland er der babyrytmik?\" – Eventyrfabrikken.",
    sections: [
      {
        heading: "Besøg et legeland på Sjælland",
        cards: [
          { title: "Eventyrfabrikken", sub: "Telegrafvej 2, Ballerup", body: "Hvis du ikke kan få det stort eller vildt nok, er Eventyrfabrikken et legeland for dig. På 8000 m² er der plads til vild leg, og der er alle former for legeredskaber. Udover at have alt det, de andre legelande har, har Eventyrfabrikken også elektriske karruseller, en 7D-biograf, et laserrum med skydespil og tre forskellige slags radiobiler. Der er også hold med fx babyrytmik hver tirsdag for børn fra tre til tolv måneder. Mad og drikke må ikke medtages i Eventyrfabrikken, men kan købes i caféen." },
          { title: "Happie’s Hule hos Bowl’n’Fun", sub: "Erantisvej 38, Næstved", body: "Hos Happie’s Hule hos Bowl’n’Fun kan børn og barnlige sjæle få en supersjov dag! Få brændt en masse krudt af, når I hopper, klatrer og rutsjer jer igennem det hyggelige legeland. Her er ingen skærmtrolde – kun timevis af sjov indendørs, så I kan lege uanset vejret. Happie’s Hule har boldland, rutsjebaner, forhindringsbaner og mange andre sjove aktiviteter for børn. Hvis I også spiser på restauranten The Grill, er det gratis for de voksne at lege med. Til børnene kan man købe endagsbilletter, 10-turskort eller årskort. Man må ikke medbringe egen mad og drikke." },
          { title: "Legejunglen", sub: "Københavnsvej 19, Slangerup", body: "Legejunglen er et 3.500 m² indendørs legeland, der bare venter på at blive udforsket, og som udfordrer alle – uanset alder. I Slangerup findes Danmarks største legestruktur med Danmarks eneste Tigerrutsjebane, der er over 4 meter høj. Der er gratis airhockey og bordfodbold. Du kan frit låne sumodragter, og de mange arkademaskiner koster det heller ikke noget at benytte. Der er endvidere et 250 m² stort område kun for de mindste med sin helt egen legestruktur inklusiv rutsjebane og mange sjove aktiviteter. Caféen har kaffe og andet godt. Det er tilladt selv at medbringe mad i legelandet. Drikkevarer skal dog købes i Legejunglen." },
          { title: "Legeland – Grøndal Multicenter", sub: "Hvidkildevej 64, København NV", body: "Legelandet i Grøndal Multicenter i København NV har de fleste klassiske legelandsoplevelser – heriblandt rutsjebaner, boldbassiner, boldbane samt de klassiske klatrebaner. Der er også et specielt område for de mindste børn. Legelandet har plads til 60 børn ad gangen, og de leger i 1,5 times intervaller. Det er derfor en god idé at booke tid på hjemmesiden i forvejen. Legelandet er en del af Grøndal Multicenters mange tilbud og aktiviteter, så familien vil nemt kunne skrue en sjov dag sammen i Grøndal Multicenter. Bemærk, at der ikke må medtages mad og drikke i legelandet. Al spisning skal foregå i caféområdet." },
          { title: "Leo’s Legeland", sub: "Herlev Hovedgade 31, Herlev / Industribuen 5, Ishøj", body: "Leo’s Legeland er en af de absolut største legelandskæder i hele Norden. Der er så mange sjove oplevelser for børn og barnlige sjæle, at det halve kunne være nok. Prøv de mange rutsjebaner, indendørs cykelbaner, kuglerum, kæmpe legepladser og meget mere. Leo’s Legeland arrangerer desuden sommerlejre og forskellige sportsaktiviteter. I legelandet er der en hyggelig café, hvor hele familien kan samles om et lækkert måltid mad efter en lang dag med masser af fart på. Det er ikke tilladt at medbringe eller indtage egen mad i legelandet." },
          { title: "Blegdamsremisen", sub: "Blegdamsvej 132a, København Ø", body: "Blegdamsremisen er Københavns eneste gratis indendørs legeland og er et af byens absolut mest populære og elskede legesteder. Der er masser af plads til boldspil og leg i den gamle bygning, der oprindeligt blev anvendt som remise, dvs. en slags natgarage for byens legendariske sporvogne. I Blegdamsremisen findes der blandt andet et spændende legelandskab, boldbane, bordtennis, sørøverskib, tovbane og kreative værksteder. Besøgende børnefamilier og daginstitutioner er velkomne til at spise deres medbragte mad. Det er desværre ikke muligt at holde børnefødselsdag i Blegdamsremisen." }
        ],
        source: "Kilder: bornibyen.dk, legejunglen.dk, funguide.dk (17.09.22, redigeret)"
      },
      {
        heading: "Efterskoler i Jylland",
        cards: [
          { title: "Øse Efterskole", sub: "100 elever – 9. og 10. klasse", body: "12 kreative og spændende timer om ugen med det, du brænder mest for. En afvekslende hverdag hver dag. Hvor findes det? Lige her! Vi har fire linjefag: Kunst, Musik, Teater og Film, Animation & IT. I både 9. og 10. klasse har vi tre niveauer i dansk, engelsk og matematik, eller vælg prøvefri 10. klasse. Vi sover en time længere hver dag i vinterhalvåret!" },
          { title: "Ranum Efterskole College", sub: "500 elever – 9. og 10. klasse", body: "Ranum Efterskole College tilbyder niveaudelt undervisning i 9. og 10. klasse samt international prøvefri 10. klasse med 20+ Cambridge IGSCE fag: fx kinesisk, spansk og fransk. Vælg 3 profilfag blandt fagene Adventure, Dykning, Sejlads, Dans, Medie, Musik, Street Performance. Vær med til at forme dit skoleår!" },
          { title: "Thy Sportsefterskole", sub: "102 elever – 8., 9. og 10. klasse", body: "På Thy Sportsefterskole har vi syv linjefag: E–sport, Fodbold, Håndbold, Dance, Cold Hawaii, Badminton og Elite Svømning. Et ophold på Thy Sportsefterskole er en investering i din fremtid. Du får venner for livet. Du udforsker nye sider af livet, og hvem der skabte det. Vi tror på det bedste i vores holdkammerater og på et ægte fællesskab bygget på kristne værdier." },
          { title: "Løgumkloster Efterskole", sub: "80 elever – 8., 9. og 10. klasse", body: "Løgumkloster Efterskole er en kristen efterskole med et stærkt og nært fællesskab, hvor der er plads til netop dig. Du får spændende ture, musical og en lang række valgfag, så du kan sammensætte dit helt eget skema med lige nøjagtig de ting, du brænder for. Skolen har 5 linjer: Fodbold, E-sport, Musik, Adventure og Craft." },
          { title: "Brøruphus Efterskole", sub: "180 elever – 9. og 10. klasse", body: "På Brøruphus tror vi på, at unge kan noget, vil noget, er videbegærlige – og har lyst til oplevelser. Hos os kan du fordybe dig i de boglige fag samt i et af vores seks linjefag: Kunst, Musik, Teater, Håndbold, Fodbold og Badminton. Vi tilbyder et efterskoleophold fyldt med nye oplevelser og udfordringer. Vi giver eleverne en almen uddannelse og opdragelse med vægt på den personlige udvikling, hvor fællesskab og samvær er vigtige forudsætninger. Skolen har meget fine faciliteter med bl.a. to idrætshaller (den ene med internationale mål), teamtrack, udendørs fodboldbaner, beachvolley-bane, nyt musikhus, stort kunstlokale og teaterlokale." },
          { title: "Efterskolen Ådalen", sub: "110 elever – 9. og 10. klasse", body: "Kreativ efterskole med sammenhold og nærvær mellem elever og lærere. Vi har høje ambitioner på dine og undervisningens vegne, og du rejser på to studieture til udlandet. Vores efterskole ligger i naturskønne omgivelser tæt på Aarhus. Vi har fem linjefag: Musik, Drama, Kunst, Sport og E-sport. Hele skolen rejser på studietur til kontrasternes hovedstad Berlin. Du rejser også på studietur med dit linjefag. Vi går tur sammen hver morgen, så du bliver frisk og klar til dagen. Du spiser sund mad, der smager godt, er varieret og gerne økologisk. Vi har sølvmedalje i økologi. Der står altid en vegetarret på menuen." },
          { title: "Aalborg Efterskole", sub: "105 elever – 8., 9. og 10. klasse", body: "Velkommen til den fedeste kristne efterskole. Aalborg Efterskole lægger vægt på at give en spændende og udfordrende undervisning og et fællesskab, hvor den enkelte elev opdager og udnytter sit potentiale. De fire linjefag er E-sport, Ridning, Golf og Outdoor. Derudover er der en lang række af spændende valgfag." },
          { title: "Askov Efterskole", sub: "120 elever – 9. og 10. klasse", body: "Kreativitet, fællesskab og nærvær. Her er der plads til krøllede hjerner, store idéer og skæve vinkler. Vi udfordrer din kreativitet i vores syv linjefag: Musik, Teater, Animation, Game Design, Kunst & Design, Forfatter og Musical. På Askov Efterskole kommer du aldrig til at kede dig. Til gengæld kommer du til at skabe minder for livet." },
          { title: "Sædding Efterskole", sub: "84 elever – 8., 9. og 10. klasse", body: "Et ophold på Sædding Efterskole giver dig begejstring for livet! Sædding er en lille, hyggelig skole med høj faglighed, tætte og forpligtende fællesskaber samt en sund livsstil i en dagligdag, der er præget af begejstring for det liv, som Gud har givet os. Foruden alle de traditionelle folkeskolefag tilbyder vi blandt andet profilfagene Fodbold Extra, Volley Extra, Design & Kunst, Musik & Band, Cambridge IGCSE English, World Wide og Jesus Extra." },
          { title: "Sundeved Efterskole", sub: "157 elever – 8., 9. og 10. klasse", body: "Almendannende boglig og aktiv grundtvigsk efterskole, hvor fælleskabet vægtes højt. Gymnastik er obligatorisk. Der tilbydes 8 linjefag i fodbold, volleyball, badminton, spring, rytmisk gymnastik, outdoor, musik og billedkunst. 10. klasse får en instruktøruddannelse i gymnastik. Moderne skole med springcenter, kunstgræsbane samt aktive og kreative valgfag. I løbet af et skoleår er vi sammenlagt på tur i 3 uger, heraf de 7 dage på skitur i Sverige." },
          { title: "Levring Efterskole", sub: "194 elever – 9. og 10. klasse", body: "Velkommen til Levring Efterskole – Idræt & Life Performance. Her er fællesskab og personlig udvikling i fokus. Vores Life Performance-tilgang hjælper dig til den udvikling, du ønsker. Vi udbyder 7 linjer, så du kan vælge den, der passer dig bedst: Adventuresport, fitness, dans, drengefodbold, pigefodbold, spring og e-sport. Alle har gymnastik." },
          { title: "Rebild Efterskole", sub: "78 elever – 9. og 10. klasse", body: "Rebild Efterskole er en mindre skole med seks linjefag: adventure, badminton, fodbold, fit living, mountainbike og ridning. Fantastiske valgfag som fx volley, løb, fitness, bordtennis, crossfit, klatring, tennis, e-sport, billedkunst og musik. To udlandsture til Norge og Tyskland. Fransk som prøvefag og niveaudelt undervisning." },
          { title: "Salling Efterskole", sub: "166 elever – 9. og 10. klasse", body: "Forestil dig et år, hvor du personligt udvikles og får oplevelser for livet i enten 9. eller 10. klasse. Vælg mellem 9 linjefag: Spring, Rytme & Dans, Fodbold, Design, Animation & Mediedesign, Musik, E-sport, Mad-sundhed-motion og Fitness/Adventure. I 10. klasse kan du vælge mellem almen 10. eller projektklasse. I både 9. og projektklassen er der samarbejde og udveksling med en skole i Spanien. I løbet af året tager vi på skitur til Østrig." },
          { title: "Silkeborg Efterskole", sub: "138 elever – 9. og 10. klasse", body: "Hvert år vælger 130 teenagere Silkeborg Efterskole, der er placeret nær skov og vand – men også i byen. De vælger Silkeborg Efterskole, fordi de har hørt, at man som elev har mange muligheder for at dyrke sin sport. Desuden har vi på skolen et fantastisk fællesskab, hvor vi passer godt på hinanden. Vi tilbyder spændende og engageret undervisning, og du kan vælge mellem 6 linjer: fitness, sport/adventure, kajak, håndbold, pigefodbold og drengefodbold." },
          { title: "Femmøller Efterskole", sub: "92 elever – 9. og 10. klasse", body: "Femmøller Efterskole finder du på Djursland. Vi tilbyder fem linjefag: E-sport, Tegning, Styling, Musik – Rytmisk og Elektronisk Musik. På Femmøller Efterskole inviterer vi til et år, hvor du får venner for livet, megafede oplevelser – og hvor du mest af alt lærer dig selv bedre at kende. På Femmøller Efterskole kan du tage afgangsprøverne i 9. og 10. klasse. Du kan gå i vores prøvefri 10. klasse med fokus på iværksætteri, projektledelse og kommunikation." },
          { title: "Rønde Efterskole", sub: "175 elever – 9. og 10. klasse", body: "Få en oplevelse for livet i et stærkt fællesskab. Kast dig ud i et af vores 8 forskellige linjefag: Fodbold, Musik, Spiludvikling, Kreativt Design, Global Iværksætter, Friluftsliv, BodyCross Fitness og Badminton. Opdag nye muligheder i de mange forskellige valgfag, samtidig med at du styrker din faglige robusthed. Rønde Efterskole er et tilbud til dig, som ønsker udvikling både fagligt og socialt." }
        ],
        source: "Kilder: efterskolerne.dk, oese.dk (08.01.23, redigeret.)"
      },
      {
        heading: "Hushjælp søges i Kolding",
        cards: [
          { title: "Jobannonce nr. 1", sub: "Hushjælp søges 2 dage ugentligt", body: "Jeg søger hjælp til rengøring mellem kl. 15 og kl. 20 et par gange om ugen ca. 2 timer hver gang. Jeg har desuden en hund, som jeg gerne vil have, at du lufter og giver mad før eller efter rengøringen, da jeg ikke selv kan gøre det pga. nyt job med aftenarbejde. Turene skal være på ca. en halv time. Selvom King er velopdragen, er han en stor hund, så du skal være over 16 år og have erfaring med at håndtere hunde. Kontakt Lotte Svensson på tlf. 33 99 01 01." },
          { title: "Jobannonce nr. 2", sub: "Hjælp søges af ældre par", body: "Ældre par søger en hushjælp til forefaldende rengøring 1-2 gange ugentligt i vores hjem i formiddagstimerne. Der skal fx støvsuges, støves af og vaskes gulve og ordnes badeværelser. Ud over rengøring har vi også brug for havehjælp en gang om ugen i sommerhalvåret. Egen bil kan være en fordel, da der er langt til offentlig transport. Vi forventer, at du er mødestabil, ansvarlig og har erfaring med lignende arbejde. Hvis det har din interesse, så skriv en e-mail til peterpiepst@post.tele.dk, eller ring til Peter på tlf. 82 12 85 89." },
          { title: "Jobannonce nr. 3", sub: "Assistance til travl børnefamilie", body: "Travl børnefamilie søger en hushjælp, der kan hjælpe med at få hverdagen til at hænge sammen. De konkrete opgaver vil inkludere oprydning, tøjvask og madlavning fra måltidskasser. Vi har brug for hjælp 3 dage om ugen ca. kl. 15-18. Vi håber, at du:\n- har personlig erfaring med at holde hus\n- har blik for detaljen\n- er energisk og tager initiativ\n- er mødestabil og fleksibel.\nEr du interesseret? Så kontakt Ida på 71 08 11 67." },
          { title: "Jobannonce nr. 4", sub: "Ældre kvinde søger hushjælp", body: "Min mor på 84 ønsker hjælp til rengøring, tøjvask og oprydning. Derudover lettere indkøb. Hun har brug for rengøring hver 14. dag om formiddagen i 3-4 timer. Min mor ønsker, at hjælpen foregår i et roligt tempo, da hun let bliver nervøs. Du skal være stabil, positiv og gerne have erfaring med at arbejde med ældre mennesker og/eller med rengøring. Ekstra opgaver som fx vinduespudsning eller havearbejde efter aftale. Hvis det er noget for dig, så ring eller send en sms til Kresten Lægaard på tlf. 76 11 34 65." },
          { title: "Jobannonce nr. 5", sub: "Stabil og effektiv hushjælp efterlyses", body: "Ægtepar søger hushjælp, der kan gøre rent, skifte sengetøj, stryge, tømme opvaskemaskine, mv. Vi forventer, at du kommer én gang om ugen i 4 timer på hverdage mellem 9-15.30. De præcise tidspunkter bestemmer du selv. Vi har to søde hunde. De skal ikke passes eller luftes, men det er vigtigt, at du ikke er bange for hunde eller har hundeallergi. Vi forventer, at du er mødestabil, effektiv og selvstændigt kan planlægge arbejdet, så du når det vigtigste hver gang. Skriv eller ring til Lars Juhl på 78 23 91 92." },
          { title: "Jobannonce nr. 6", sub: "Kan du hjælpe os?", body: "Vi er en travl familie på to voksne og tre børn på 2, 4 og 5 år, og vi bor i en villa på 140 m². Vi søger hjælp til rengøring, tøjvask og oprydning i huset og til at hente og passe børn 2 gange om ugen i dagtimerne. Indkøb og madlavning klarer vi selv. Det er vigtigt, at du har erfaring med at passe børn og er pålidelig. Børnenes institutioner ligger tæt på vores bolig, som ligger centralt i nærheden af offentlig transport. Kontakt Mikkel Hoby på tlf. 89 61 23 76." }
        ]
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Besøg et legeland på Sjælland: I hvilke to legelande må man gerne medbringe sin egen mad?", accept: ["legejunglen og blegdamsremisen"].concat(both(["legejunglen", "legejunglen i slangerup", "legejungle"], ["blegdamsremisen", "blegdams remisen", "blegdamremisen"])) },
      { type: "short", n: 2, q: "Efterskoler i Jylland: På hvilken efterskole er der gåtur hver morgen?", accept: ["Efterskolen Ådalen", "ådalen", "ådalen efterskole", "efterskole ådalen", "efterskolen aadalen", "aadalen"] },
      { type: "short", n: 3, q: "Efterskoler i Jylland: På hvilke to efterskoler kan man vælge ridning som linjefag?", accept: ["aalborg efterskole og rebild efterskole"].concat(both(["aalborg efterskole", "aalborg", "ålborg efterskole", "ålborg"], ["rebild efterskole", "rebild"])) },
      { type: "short", n: 4, q: "Efterskoler i Jylland: På hvilken efterskole kan man vælge tegning som linjefag?", accept: ["Femmøller Efterskole", "femmøller", "femmøller efterskole på djursland", "femmoller efterskole", "femmoller"] },
      { type: "short", n: 5, q: "Efterskoler i Jylland: Hvilken efterskole arbejder sammen med en spansk skole?", accept: ["Salling Efterskole", "salling", "salling efterskolen"] },
      { type: "short", n: 6, q: "Hushjælp søges i Kolding: I hvilken jobannonce søges en person, der skal hjælpe med at lave mad?", accept: ["jobannonce nr. 3", "jobannonce nr 3", "jobannonce 3", "nr. 3", "nr 3", "3", "annonce 3", "annonce nr. 3", "jobannonce nummer 3", "nummer 3", "assistance til travl børnefamilie", "jobannonce nr. 3 assistance til travl børnefamilie"] }
    ]
  };

  const opg2 = {
    id: "p24m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – BOBI Møbelhus", body: "Hos os finder du et kæmpe udvalg af kvalitetsmøbler til skarpe priser. Fx\n■■■■■■\nSe flere gode tilbud på vores hjemmeside – eller kig forbi!\nBOBI Møbelhus · Irisgade 12 · www.bobi-moebler.dk" },
          { title: "B – BF-Aftenskole", body: "■■■■■■\nFå en solid introduktion til faget. Lær alt om klipning, farvning og forskellige hårtyper på fire måneder. Undervisning om aftenen tre gange om ugen af erfarne undervisere.\nLæs mere på vores hjemmeside:\nBF-Aftenskole.dk" },
          { title: "C – Sommertilbud hos Viby Guld & Sølv", body: "D. 1. juli har vi haft butikken i 10 år, og det skal fejres med gode tilbud bl.a.:\n■■■■■■\nKom ind i vores butik og se vores store udvalg i smykker og ure.\nVi fører alle de kendte mærker.\nViby Guld & Sølv, Storegade 12" },
          { title: "D – Lokale udlejes", body: "Pænt og velholdt erhvervslokale udlejes centralt i Aarhus.\n■■■■■■\nOgså velegnet til klinik og kontor.\nProduktion og salg af mad ikke tilladt.\n60 m². Leje 8.200 kr. pr. måned.\nKontakt Lokaleleje.dk" },
          { title: "E – Så åbner vi for sæsonen!", body: "Dejlig campingplads tæt på skov og strand. Book en plads til dit telt eller din campingvogn i receptionen.\n■■■■■■\nPris pr. overnatning: 150 kr. for telt og 200 kr. for campingvogn.\nKuknæs Strand Camping\nwww.kuk-camp.dk · Tlf. 66 29 54 07" },
          { title: "F – Nyåbnet tøjbutik", body: "Vi slår dørene op til vores nye butik i City-centret mandag d. 1. juni. Det skal fejres med masser af gode åbningstilbud bl.a.:\n■■■■■■\nMange størrelser og flotte farver.\nButik Zoey & Joey\nTorvet i City-centret" },
          { title: "G – Er du klar til sommeren?", body: "Vores dygtige frisører er klar til at inspirere dig, så du kan gå sommeren i møde med en ny, frisk frisure. Hvis du booker tid via vores hjemmeside, tilbyder vi lige nu:\n■■■■■■\nSalon Zenit, Nygade 25\nwww.salon-zenit.dk · 65 29 03 89" },
          { title: "H – VB Arrangør", body: "■■■■■■\nCentralt beliggende på Vesterbro med plads til op til 90 personer.\n• Køkken med alle faciliteter\n• Serveringspersonale kan tilkøbes\n• Egen p-plads og tog/metro tæt på\nRing nu og få et tilbud.\nVB Arrangør – Tlf. 41 99 70 34" },
          { title: "I – Nyd foråret og forkæl dig selv", body: "2 dages luksusophold på hotel Kronjyllands Perle i dejlige omgivelser for kun 1.999 kr. pr. person inklusiv:\n• ■■■■■■\n• Morgenmadsbuffet.\n• Adgang til indendørs pool og sauna.\nLæs mere og book på vores hjemmeside:\nwww.kronjyllandsperle.dk" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Hjørnesofa i ægte læder 14.999 kr.", answer: "A", example: true },
          { n: 7, text: "Stort festlokale udlejes.", answer: "H" },
          { n: 8, text: "15 % på klipning og farvning.", answer: "G" },
          { n: 9, text: "Perfekt til mindre butik.", answer: "D" },
          { n: 10, text: "Frisørkursus.", answer: "B" },
          { n: 11, text: "Overnatning i dobbeltværelse.", answer: "I" },
          { n: 12, text: "Halv pris på alle sommerjakker.", answer: "F" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p24m-3", group: G, real: true,
    title: "Opgave 3 – Anna bor på plejehjem",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Skriv de ord (13-20), der mangler. Ordene findes i rammen. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Anna på 88 år har boet alene i en lejlighed i mange år. De sidste par år har hun følt sig ensom, og hun har haft meget [[0]] ved at klare sig selv. Så nu er hun flyttet på plejehjem.

Annas bolig på plejehjemmet består af en stue og et badeværelse, og den er meget [[13]] end hendes gamle lejlighed. Faktisk er boligen kun på 35 m², så der er ikke plads til ret mange møbler. Derfor har Anna desværre været nødt til at sælge nogle af de møbler, hun havde i sin gamle lejlighed, og det er hun lidt [[14]] med.

Alligevel synes Anna, at det er en stor [[15]] at bo på plejehjemmet. For hun går meget dårligt, og på plejehjemmet kan personalet hjælpe hende døgnet rundt. Den daglige kontakt med personalet betyder meget for Anna. Hun oplever nemlig, at de [[16]] har tid til at snakke lidt med hende – også selvom de har travlt.

På plejehjemmet får Anna og de andre beboere serveret alle deres måltider, så Anna skal ikke købe ind og lave mad. Det passer hende godt, [[17]] hun somme tider savner selv at bestemme, hvad hun skal have at spise til aftensmad, og det kan hun ikke på plejehjemmet. Men hun nyder at spise sammen med de andre beboere, for hun synes, det er ret [[18]] at spise alene.

Efter at Anna er flyttet på plejehjem, er hun faktisk blevet [[19]] frisk. På plejehjemmet er der nemlig mange aktiviteter, fx laver Anna gymnastik sammen med nogle af de andre beboere flere gange om ugen, og det gør, at hun har fået det bedre.

Men for Anna er det bedste ved at bo på plejehjemmet, at hun sjældent føler sig alene, [[20]] der både er andre beboere og personale, som hun kan snakke med. Så alt i alt er Anna meget glad for at bo på plejehjemmet.`,
    questions: [
      {
        type: "gaps",
        bank: ["svært", "ulempe", "selvom", "hyggeligt", "mere", "utilfreds", "mindre", "tilfreds", "fordel", "aldrig", "fordi", "kedeligt", "større", "altid"].map(w => ({ key: w, text: w })),
        example: { 0: "svært" },
        answers: { 13: "mindre", 14: "utilfreds", 15: "fordel", 16: "altid", 17: "selvom", 18: "kedeligt", 19: "mere", 20: "fordi" }
      }
    ]
  };

  const opg4 = {
    id: "p24m-4", group: G, real: true,
    title: "Opgave 4 – Weekendfar",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. Der er seks afsnit. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Emil på 41 år er far til Sofia på 12 år. Han er skilt fra Sofias mor, og han ser kun sin datter hver anden weekend, fordi han er flyttet fra Odense til København, hvor han har fået arbejde.

**0.** Emil har været skilt i to år, og nu bor og arbejder han i København. Hans datter Sofia på 12 år bor det meste af tiden hos sin mor i Odense. Sofia kommer kun til København hver anden weekend, så Emil ser hende ikke så meget. [[0]]. Han synes, det er lidt hårdt, at han ikke kan se sin datter i hverdagen.

**21.** Når Sofia kommer på weekend hos Emil, spørger han hende altid, hvad hun har lyst til at lave. Somme tider vil hun gerne på café, på shopping eller i biografen, men faktisk kan hun bedst lide at være hjemme hos Emil og hygge sig og snakke. [[21]]. Det er nemlig en interesse, de deler, og siden Sofia var lille, har de elsket, når der var kamp i fjernsynet.

**22.** Men det er også vigtigt for Emil at være en god far for sin datter, når hun ikke er hos ham. Så han ringer til Sofia flere gange om ugen for at høre, hvordan hun har det. [[22]]. For Sofia har en travl hverdag med skole, fritidsinteresser og venner, og hun har ikke tid til lange samtaler, selvom hun synes, det er dejligt, at Emil ringer så tit.

**23.** Emil har også en travl hverdag, men når han har fri, er han somme tider sammen med to gode venner. Så mødes de og spiser sammen eller går ud og drikker en øl. De snakker også med hinanden, hvis de har problemer. [[23]]. Fx talte hans venner lang tid med ham, da han var ked af det på grund af skilsmissen, og de gav ham mange gode råd til at komme videre.

**24.** Nu er Emil kommet gennem skilsmissen og har faktisk fået det godt. Han har også fået en kæreste, som han ses med et par gange om ugen, og han er rigtig glad for hende. Men i de weekender, hvor Sofia er i København, er Emil ikke sammen med sin kæreste. [[24]]. For hun ved præcis, hvornår Sofia er i København, og i de weekender laver hun andre planer, og det har hun det helt fint med.

**25.** Sofia vil gerne se sin far noget mere, og hun er lidt træt af at rejse frem og tilbage mellem Odense og København. Derfor har hun spurgt Emil, om han vil flytte tilbage til Odense. [[25]]. Selvom han tit savner Sofia, er det umuligt for ham at flytte lige nu, fordi han har sit job og nu også en kæreste i København.`,
    questions: [
      {
        type: "gaps",
        bank: [["A", "Derfor savner han hende tit."], ["B", "Og det har hjulpet Emil meget."], ["C", "Det er hun meget utilfreds med."], ["D", "Men det kan Emil ikke."], ["E", "De ser også tit fodbold."], ["F", "Men det er ikke noget problem for hende."], ["G", "Så Emil flytter snart til Odense."], ["H", "Men de snakker sjældent ret længe."]].map(([key, text]) => ({ key, text })),
        example: { 0: "A" },
        answers: { 21: "E", 22: "H", 23: "B", 24: "F", 25: "D" }
      }
    ]
  };

  const opg5 = {
    id: "p24m-5", group: G, real: true,
    title: "Opgave 5 – Interview med Maja",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Maja – gartner",
        cards: [
          { title: "A", sub: "Eksempel", body: "Faktisk kun i tre år. Efter folkeskolen arbejdede jeg i butik i mange år. Men det blev jeg træt af, og jeg ville hellere lave noget, hvor jeg var udenfor i den friske luft. Derfor besluttede jeg at starte på uddannelsen til gartner. Da jeg var færdig, fik jeg hurtigt job i det havefirma, hvor jeg arbejder nu." },
          { title: "B", body: "Nej, for selvom jeg elsker frisk luft og natur, er det også vigtigt for mig, at jeg nemt kan ses med mine venner i fritiden. Så jeg bor i en lejlighed midt i byen, og der har jeg kun en lille altan. Men om nogle år kunne jeg godt tænke mig at købe et hus med en stor have, hvor jeg kan dyrke grøntsager i min fritid." },
          { title: "C", body: "Ja, det synes jeg, specielt når jeg arbejder alene. For så kan de buske eller træer, jeg planter, være ret tunge at løfte. Men heldigvis arbejder vi tit mange sammen, og så kan vi jo hjælpe hinanden. Og jeg er i god form og passer godt på mig selv, så jeg ikke får ondt i ryggen." },
          { title: "D", body: "Mange forskellige ting. Jeg kan godt lide at være udenfor i naturen hele året. Jeg løber fx i skoven eller tager på vandreture alene eller sammen med nogle venner. Jeg rejser også meget og tager på aktive ferier, hvor jeg går lange ture, står på ski eller cykler." },
          { title: "E", body: "At arbejdsdagene sjældent er ens, for mine arbejdsopgaver er forskellige, og det er mine kunder også. Det synes jeg er skønt. Og så betyder det også meget, at jeg kan være ude det meste af tiden. Sådan et kontorjob, hvor man sidder indendørs hele dagen, er helt sikkert ikke noget for mig." },
          { title: "F", body: "Nej, det synes jeg ikke, for meget af tiden er jeg fysisk aktiv, og så er det ikke noget problem at arbejde udenfor året rundt. Jeg fryser faktisk aldrig. Og vi har jo tøj på, der passer til årstiden. Det kan da godt være lidt irriterende, når det regner og blæser en hel dag, men så har jeg noget godt regntøj, jeg kan tage på." },
          { title: "G", body: "Det er lidt forskelligt, hvad jeg laver. Nogle kunder kontakter firmaet, fordi de lige har købt hus og har brug for idéer til haven, eller fordi de skal have lavet planer for en helt ny have, og så hjælper jeg med det. Andre gange klipper jeg træer og buske eller planter blomster." },
          { title: "H", body: "Det kommer an på, hvilke arbejdsopgaver det er. Hvis det er mindre opgaver, klarer jeg dem selv. Men i vores firma har vi en del kunder med store haver, og den slags opgaver er vi altid flere om. Så for det meste arbejder vi sammen i et team." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvor længe har du arbejdet som gartner?", answer: "A", example: true },
          { n: 26, text: "Hvad er dine arbejdsopgaver?", answer: "G" },
          { n: 27, text: "Arbejder du alene?", answer: "H" },
          { n: 28, text: "Hvad kan du godt lide ved dit job?", answer: "E" },
          { n: 29, text: "Er det et fysisk hårdt job?", answer: "C" },
          { n: 30, text: "Hvad laver du i fritiden?", answer: "D" }
        ]
      }
    ]
  };

  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(fallback < 0 ? PD2.READING.length : fallback, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling maj-juni 2024 ----------
  const firstReal = PD2.WRITING.findIndex(w => w.real);
  PD2.WRITING.splice(firstReal < 0 ? PD2.WRITING.length : firstReal, 0,
    {
      id: "w24ma", delprove: 1, real: true, year: 2024,
      title: "A: En klage til Højmark Bolig (maj 2024)",
      kind: "Prøveopgave · klage til udlejeren",
      minWords: 80, maxWords: 150,
      situation: "Du er flyttet ind i en lejlighed, som udlejes af Højmark Bolig. Men der er nogle problemer med lejligheden, og derfor vil du skrive en klage til udlejeren. Skriv klagen til Højmark Bolig. Du skal begynde og afslutte klagen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvad du hedder, og hvor du bor", "Hvornår du flyttede ind i din nye lejlighed", "Hvilke problemer der er med lejligheden", "Hvad du gerne vil have, at Højmark Bolig skal gøre"],
      phrases: ["Kære Højmark Bolig", "Jeg skriver til jer, fordi jeg vil klage over …", "Jeg flyttede ind den …", "Problemet er, at …", "Derfor vil jeg gerne bede jer om at …", "Med venlig hilsen"],
      model: `Kære Højmark Bolig

Jeg hedder Samira Ali, og jeg bor på Parkvej 12, 2. th. i Herning. Jeg skriver til jer, fordi jeg vil klage over min nye lejlighed.

Jeg flyttede ind den 1. april. Det drejer sig om flere problemer, som var der, allerede da jeg flyttede ind.

Problemet er, at radiatoren i stuen ikke virker, så der er meget koldt om aftenen. Desuden drypper vandhanen i køkkenet hele tiden, og vinduet i soveværelset kan ikke lukkes ordentligt.

Jeg har allerede ringet til viceværten to gange, men der er ikke sket noget.

Derfor vil jeg gerne bede jer om at sende en håndværker, som kan reparere radiatoren, vandhanen og vinduet inden for to uger.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Samira Ali`
    },
    {
      id: "w24mb", delprove: 1, real: true, year: 2024,
      title: "B: En anbefaling af en musikgruppe på Facebook (maj 2024)",
      kind: "Prøveopgave · anbefaling på Facebook",
      minWords: 80, maxWords: 150,
      situation: "Du havde fødselsdag i sidste weekend og holdt en stor fest. Til festen spillede musikgruppen Fantastico. Du vil gerne anbefale musikgruppen til andre, der skal holde en stor fest. Derfor vil du skrive en anbefaling af gruppen på Facebook. Skriv anbefalingen. Du skal begynde og afslutte anbefalingen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om den fest, du holdt", "Lidt om musikgruppen Fantastico, og hvad slags musik gruppen spiller", "Hvorfor du vil anbefale gruppen", "Hvordan du fik kontakt til gruppen"],
      phrases: ["Fantastico – kan varmt anbefales!", "I sidste weekend holdt jeg …", "Gruppen spiller …", "Det bedste ved Fantastico er, at …", "Jeg fandt gruppen …", "Prøv det selv – du bliver ikke skuffet!"],
      model: `Fantastico – kan varmt anbefales!

Jeg vil gerne anbefale musikgruppen Fantastico til alle, der skal holde en stor fest.

I sidste weekend havde jeg fødselsdag, og jeg holdt en stor fest for 60 gæster i et festlokale i byen. Vi spiste god mad, og bagefter dansede vi hele natten.

Fantastico er fire glade musikere. De spiller både danske og udenlandske popsange og gamle hits, så der er musik for både unge og ældre.

Det bedste ved Fantastico er, at de får alle op at danse. De er sjove og søde, og de spillede også de sange, vi ønskede. Desuden var prisen rimelig.

Jeg fik kontakt til gruppen gennem en kollega, som havde hørt dem til et bryllup. Jeg skrev til dem på Facebook, og de svarede samme dag.

Jeg vil anbefale Fantastico, fordi de gjorde min fest helt perfekt. Prøv det selv – du bliver ikke skuffet!

Venlig hilsen
Mehmet`
    },
    {
      id: "w24mc", delprove: 2, real: true, year: 2024,
      title: "En e-mail om at leve billigt (maj 2024)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Carl. I e-mailen skriver han bl.a.: \"… I din sidste e-mail skrev du, at du er begyndt at leve billigt i hverdagen for at spare penge. Hvordan lever du billigt i hverdagen? Og hvorfor vil du gerne spare penge? …\" Skriv et svar til Carl, og fortæl, hvordan du lever billigt i hverdagen, og hvorfor du gerne vil spare penge. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvordan du lever billigt i hverdagen", "Fortæl, hvorfor du gerne vil spare penge"],
      phrases: ["Hej Carl", "Tak for din mail.", "Jeg sparer penge ved at …", "Jeg køber …", "Jeg vil gerne spare penge, fordi …", "Mange hilsner"],
      model: `Hej Carl

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om, hvordan jeg lever billigt, og det vil jeg gerne fortælle dig lidt om.

For det første laver jeg en madplan for hele ugen, og jeg handler i discountbutikker som Netto og Lidl. Jeg køber tilbud og laver mad til to dage ad gangen. Jeg tager også madpakke med på arbejde i stedet for at købe frokost.

Derudover cykler jeg på arbejde i stedet for at tage bussen, og jeg køber brugt tøj på nettet. Jeg har også opsagt mit fitnesscenter, så nu løber jeg i parken. Det er gratis.

Til sidst vil jeg sige, at jeg gerne vil spare penge, fordi jeg drømmer om at købe en lille lejlighed. Jeg vil også gerne kunne rejse hjem og besøge min familie til sommer.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Ali`
    }
  );

  // ---------- Mundtlig delprøve 2 maj-juni 2024 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2)";
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p24m-a", title: "At lære noget nyt", real: true, year: 2024,
      pictures: [
        { img: "images/pd2-2024-m/at-laere-noget-nyt-1.jpg", credit, alt: "En far går ved siden af en lille pige, der lærer at cykle på en sti i en park; moren står bagved og holder hånden for munden, og i baggrunden cykler en mor og et barn", words: ["lære at cykle", "en cykelhjelm", "holde balancen", "være stolt"] },
        { img: "images/pd2-2024-m/at-laere-noget-nyt-2.jpg", credit, alt: "Ældre mennesker sidder ved computere i et lokale; en ung kvinde hjælper en ældre mand med musen, og flere andre arbejder ved computerne i baggrunden", words: ["en computer", "en mus", "et tastatur", "hjælpe", "et kursus"] }
      ],
      interview: [
        "Hvad synes du om, at børn lærer at cykle, når de er små?",
        "Lærte du at cykle, da du var barn? Hvordan lærte du at cykle?",
        "Hvad er godt ved, at ældre mennesker lærer at bruge computer?",
        "Er du god til at bruge computer? Hvordan har du lært det?"
      ],
      talk: [
        { who: "mediator", say: "Er det bedst at lære dansk på en arbejdsplads eller på en sprogskole? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, det er bedst på en arbejdsplads. Der kan man snakke dansk med kolleger og lære dansk hurtigere. Hvad synes du?" },
        { who: "partner", say: "Og man tjener penge på samme tid. Er du enig?" },
        { who: "partner", say: "Men på sprogskolen er der en lærer, som kan forklare grammatik og hjælpe med at skrive. Hvad tænker du om det?" },
        { who: "mediator", say: "På en arbejdsplads taler kollegerne måske ikke dansk, og man har måske ikke et arbejde. Hvad synes I generelt er den bedste måde at lære et nyt sprog på?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes, det er godt, at …, fordi …", "Da jeg var barn, lærte jeg at …", "Jeg har lært at bruge computer …", "Det er bedst at lære dansk …, fordi …", "Er du enig?"]
    },
    {
      id: "p24m-b", title: "At holde fest", real: true, year: 2024,
      pictures: [
        { img: "images/pd2-2024-m/at-holde-fest-1.jpg", credit, alt: "Et brudepar holder bryllupsfest i deres lejlighed; brudgommen læser et kort, bruden åbner gaver, og glade gæster står omkring dem; i baggrunden er der et pænt dækket bord og en bryllupskage", words: ["et bryllup", "et brudepar", "gaver", "en bryllupskage", "gæster"] },
        { img: "images/pd2-2024-m/at-holde-fest-2.jpg", credit, alt: "Mange mennesker holder fest udenfor i en park: en kvinde griller, nogle sidder ved et bord med mad og drikke, en spiller guitar, og andre klapper og synger", words: ["holde fest udenfor", "grille", "en guitar", "synge", "hygge sig"] }
      ],
      interview: [
        "Hvad synes du om, at man holder bryllupsfest i sin egen lejlighed?",
        "Hvad synes du om, at man holder fest udenfor?",
        "Holder du nogle gange fest? Vil du fortælle lidt om en fest, du har holdt?",
        "Hvis nej: Hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "En kvinde bliver snart 50 år. Skal hun holde fest hjemme hos sig selv eller på en restaurant? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, hun skal holde festen hjemme. Det er billigt og hyggeligt, og hun kan selv lave den mad, hun vil have. Hvad synes du?" },
        { who: "partner", say: "Men så skal hun lave mad og rydde op bagefter, og måske bliver naboerne sure. Er du enig?" },
        { who: "partner", say: "På en restaurant bliver mad og drikke serveret, og der er plads til mange gæster. Hvad tænker du om det?" },
        { who: "mediator", say: "Men det er måske dyrt, og det er ikke så hyggeligt som derhjemme. Hvad synes I generelt er vigtigst, når man holder en stor fest?" }
      ],
      phrases: ["På billedet kan jeg se …", "Jeg synes, det er hyggeligt at holde fest …, fordi …", "Sidste gang jeg holdt fest, …", "Hun skal holde festen …, fordi …", "Det gode ved … er, at …", "Hvad med dig?"]
    },
    {
      id: "p24m-c", title: "Store og små byer i Danmark", real: true, year: 2024,
      pictures: [
        { img: "images/pd2-2024-m/store-og-smaa-byer-1.jpg", credit, alt: "En travl gade i en stor by med butikker, et supermarked, en café og et busstoppested; mange mennesker går, snakker, kører på løbehjul og ladcykel", words: ["en storby", "et busstoppested", "butikker", "travlt", "mange mennesker"] },
        { img: "images/pd2-2024-m/store-og-smaa-byer-2.jpg", credit, alt: "Et hus med have i en lille by: en mand sidder på terrassen og vinker, en kvinde arbejder med blomster, børn hopper på trampolin, og to børn cykler forbi; bag husene er der marker", words: ["en lille by", "et hus med have", "en trampolin", "stille og roligt", "naturen"] }
      ],
      interview: [
        "Hvad er godt ved at bo i en stor by?",
        "Hvad er godt ved at bo i en lille by?",
        "Hvor bor du selv? Er du glad for det?",
        "Hvorfor/hvorfor ikke?"
      ],
      talk: [
        { who: "mediator", say: "Hvor i Danmark er det bedst at bo for en udenlandsk familie med små børn – i en stor by eller i en lille by? Tal sammen og prøv at blive enige." },
        { who: "partner", say: "Jeg synes, en lille by er bedst. Der er stille og roligt, huslejen er billigere, og man kan have en stor have. Hvad synes du?" },
        { who: "partner", say: "Men i en lille by er der måske ingen skole, og det kan være svært at finde job. Er du enig?" },
        { who: "partner", say: "I en stor by er der mange fritidsaktiviteter, skoler og offentlig transport. Hvad tænker du om det?" },
        { who: "mediator", say: "Men i en stor by er boligerne dyre, og der er larm og forurening. Hvad synes I generelt er vigtigst for en familie med små børn?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det gode ved at bo i en stor/lille by er, at …", "Jeg bor selv i …", "Jeg er glad for det, fordi …", "En familie med små børn skal bo …, fordi …", "Er du enig?"]
    }
  );
})();
