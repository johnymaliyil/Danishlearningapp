// Prøve i Dansk 3, november-december 2019 (vinter 2019) – læseforståelse, skriftlig fremstilling and
// mundtlig kommunikation (delprøve 2), transcribed from the exam papers:
// Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Danske biografer og dansk film" nr. 14;
// Læseforståelse 2: teksthæfte nr. 16 and opgavehæfte nr. 17; skriftlig fremstilling nr. 18;
// picture sheets for mundtlig kommunikation (illustrations by Niels Roland, cropped into
// images/pd3-2019n/) and the censor- og eksaminatorhæfte for the oral exam (nr. 21).
// The reading answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur (vinterterminen 2019): delprøve 1 item 4 becomes
// "(De) ved (nemlig rigtig) meget om film", item 12 becomes "Morgenbuffet / Morgenmaden og kaffen",
// and in item 1 every candidate got the point whatever they answered. The app cannot give a point for an
// empty or arbitrary answer, so item 1 accepts the key answer (teambuilding) and the other FILM-X offers
// named in the text. Delprøve 2A and 2B: no comments from the forcensur.
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures, captions and logos from the tekstsamling are left out (they are not needed for any answer).
// Læseforståelse 2 has delprøve 2A (7 × multiple choice, two texts) and 2B (8 × A-D gaps).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points.
// Omregningstabel (vinter 2019): 37-35 = 12, 34-31 = 10, 30-25 = 7, 24-21 = 4, 20-18 = 02, 17-10 = 00, 9-0 = -3.
// The app scores every question as 1, so 2A counts half as much here as at the exam.
// Printing errors corrected in the app: "I DFI ligger der også en restaurant" (tekstsamling), "Det har indtil nu generelt være
// muligt" (2A tekst 2), "skeptisk over for" (2B option), "Det skabte opmærksomhed omkring dansk film" (tekstsamling, Dogme95) and the oral question "Hvorfor tror du, at de ikke gør det?"
// (emne B, spørgsmål B).
// The writing task wording, the friends' e-mail, the oral questions and the chart labels are copied
// from the papers; the chart values are read off the stacked bar chart (ca.-values). All model answers
// are our own (the papers have none).

(function () {
  const G = "PD3 nov.-dec. 2019";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const biografer = {
    id: "pd3-19n-1", group: G, real: true,
    title: "Delprøve 1 – Danske biografer og dansk film",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Danske biografer og dansk film. Brug indholdsfortegnelsen. Svar præcist og så kort som muligt på spørgsmålene. Der gives 1 point for hvert korrekt svar. (Ved prøven fik alle prøvedeltagere point i spørgsmål 1, uanset hvad de havde svaret.)",
    text: `**Indholdsfortegnelse**

Vigtige perioder i dansk filmhistorie … 3
   Dansk films første årtier … 3
   Fra efterkrigstiden til 1990’erne … 4
   Dansk film i de seneste to årtier … 6
Det Danske Filminstitut (DFI) … 7
Udvalgte biografer i Danmark … 9
   Biografer i Aarhus og København … 9
   Kinorevyen i Skørping … 10
   Biffen Nordkraft … 10
Anmeldelser af biografer … 12

**VIGTIGE PERIODER I DANSK FILMHISTORIE**

**Dansk films første årtier**

**Nordisk Film og starten på dansk film**
De første danske film blev indspillet i 1890’erne, hvor Peter Elfelts film: *Kørsel med Grønlandske Hunde* fra 1896 var blandt de første, registrerede titler.

I 1906 begyndte underholdningskongen Ole Olsen at producere film og stiftede Nordisk Film. Selskabet er i dag verdens ældste eksisterende filmselskab. Året før havde Olsen åbnet en biograf i København. I begyndelsen af 1906 blev Nordisk Films første film *Duer og Maager* produceret. Nordisk Film var i tiden frem til første verdenskrig blandt de førende selskaber i verden og producerede så tidligt som 1907 mange film årligt – deriblandt klassikeren *Løvejagten*. Dette var en af de første danske film, der ikke bare var billedoptagelser, men som havde en handling.

Filmen blev den første store internationale succes for Nordisk Film og solgt til udlandet i 259 kopier. Den internationale succes kom på trods af, at filmen faktisk først blev forbudt i Danmark på grund af en anklage om dyrplageri, fordi der som en del af filmens handling blev skudt en løve. I november 1908 – et år efter den internationale premiere – fik den dog endelige dansk premiere, efter at filmselskabet havde vundet en retssag om anklagen. I løbet af retssagen dokumenterede man nemlig, at løven blev aflivet af en professionel skytte. Nordisk Films tidlige succes viste sig at være langtidsholdbar, og selskabet har siden haft en central placering i den danske filmbranche.

**Succes i årene omkring første verdenskrig**
I årene omkring 1. verdenskrig fik komikerne Fy og Bi samt skuespillerne Valdemar Psilander og især Asta Nielsen stor international anerkendelse og var store eksportsuccesser for dansk film.

Fy og Bi blev skabt af instruktøren Lau Lauritzen, der var gået fra Nordisk Film til selskabet Palladium. Komikerparret, der bestod af den meget høje Fy og den lille tykke Bi, skabte en komik, som blev så populær uden for Danmarks grænser, at de endte med at indspille flere film i både Sverige, Østrig, Tyskland og England.

Asta Nielsen debuterede i Urban Gads drama *Afgrunden*, som blev et europæisk gennembrud for både Asta Nielsen og dansk film generelt. Asta Nielsen betegnes ofte som verdens første store filmdiva. Hun spillede alle typer roller, men først og fremmest var hun kendt for store dramatiske roller, hvor hun kunne udfolde sit skuespiltalent. I 1911 blev hun i Rusland valgt til verdens bedste kvindelige filmskuespiller.

Selvom 1. verdenskrig gjorde det kompliceret at eksportere film til de europæiske markeder, så var der også fordele for dansk film. Engelske og franske film blev nemlig forbudt i Tyskland, hvilket Nordisk Film udnyttede til at styrke sin egen eksport af film til det tyske marked. Det kunne lade sig gøre, fordi Danmark var neutralt i 1. verdenskrig og derfor undgik det tyske importforbud. Dette varede dog kun, indtil tyskerne i 1917 oprettede deres eget filmselskab, UFA.

**1920’erne og Carl Th. Dreyer**
I 1920’erne havde Nordisk Film sværere ved at slå igennem i udlandet, og en lang række store produktioner fik ikke succes internationalt. Men i samme periode debuterede Carl Th. Dreyer, som siden er blevet kendt som en af Danmarks allerstørste instruktører på grund af sin særlige kunstneriske stil. Carl Th. Dreyers stil har inspireret mange store instruktører, bl.a. Ingmar Bergman og Lars von Trier. Hans første film som instruktør var *Præsidenten* fra 1919. Året efter indspillede han *Blade af satans bog*, der fik dansk premiere i 1921.

Et af Dreyers hovedværker, *Jeanne d’Arcs Lidelse og Død*, blev indspillet i Frankrig i 1928 og fik stor anerkendelse af samtidens filmanmeldere for sine kunstneriske kvaliteter. Paradoksalt nok blev filmen en økonomisk katastrofe, hvilket bevirkede, at filmproducenterne i mange år ikke ville samarbejde med Dreyer. Han nåede derfor kun at instruere yderligere fire spillefilm i resten af sin karriere, der sluttede med filmen *Gertrud* fra 1965.

Dreyers film havde særlige, kunstneriske kvaliteter. I *Jeanne d’Arcs lidelse og død* arbejdede han meget med nærbilleder, og samtidig insisterede han på, at skuespillerne ikke måtte bruge makeup, og hans brug af kulisser og kameravinkler gav hans film en abstrakt kvalitet. Det var noget af det, der gjorde ham unik i dansk film, men det gjorde ham også kontroversiel i samtiden. Et af hans andre hovedværker, *Vredens Dag* fra 1943, fik fx en Oscar-nominering i USA, men i Danmark kunne anmelderne generelt ikke lide filmen.

**Fra efterkrigstiden til 1990’erne**

**Olsen-banden kommer**
I 1968 kom den første film om Egon Olsen og hans bande af småkriminelle. Olsen-banden-filmserien blev en af de største succeser i dansk filmhistorie. Serien blev skabt af Erik Balling og Henning Bahs som en blanding af traditionel folkekomedie og socialrealisme. I perioden 1968-81 kom der 13 film, der alle fik rigtig mange danskere i biografen. En opgørelse fra Danmarks Statistik viser, at de tre mest sælgende danske biograffilm i Danmark alle er Olsen-banden-film.

Olsen-banden-filmene fik også en lidt overraskende succes i Østtyskland og store dele af det kommunistiske Østeuropa under den kolde krig. Mange film fra Vesteuropa og USA var nemlig forbudt i de kommunistiske lande, fordi de blev opfattet som propaganda. Men den kommunistiske censur mente, at Olsen-banden gjorde grin med de kapitalistiske autoriteter, og det var derfor tilladt at vise dem. Efter den kolde krigs afslutning har mange østtyskere dog fortalt, at grunden til filmenes popularitet først og fremmest var, at man kunne relatere sig til de danske småforbrydere, der bliver klemt i systemet.

**Det Danske Filminstitut oprettes**
I 1972 oprettedes Det Danske Filminstitut (DFI), der skulle støtte filmproduktionen med et blik på både kunstnerisk potentiale og kommercielle muligheder. DFI fik til opgave at administrere økonomisk støtte til nye filmmanuskripter, udvikling og produktion samt lancering, forevisning og distribution af danske film. Fra 1980’erne og frem blev næsten alle danske film produceret med støtte fra DFI.

**International anerkendelse i 1980’erne og 1990’erne**
I slutningen af 1980’erne begyndte en række danske film at vinde internationale priser. Gabriel Axels *Babettes Gæstebud* vandt en Oscar for bedste udenlandske film i 1988, og året efter gik prisen til Bille Augusts *Pelle Erobreren*, som også modtog Den Gyldne Palme i Frankrig. Bille August vandt yderligere Den Gyldne Palme med *Den Gode Vilje* i 1991. Dermed blev August den tredje instruktør nogensinde til at vinde Den Gyldne Palme to gange.

I 1994 kom Ole Bornedals *Nattevagten*. Det var en gennembrudsfilm for to unge skuespillere, Nicolaj Coster-Waldau og Kim Bodnia, der begge blev store stjerner efterfølgende. Filmen var en horrorfilm, og dem var der ikke mange af i dansk filmhistorie på det tidspunkt. Filmen vakte derfor særlig stor opmærksomhed i Danmark, men blev også en international succes. Den internationale succes betød, at Ole Bornedal fik tilbud fra Hollywood om at genindspille filmen i en amerikansk version.

Den amerikanske version af filmen med bl.a. Nick Nolte og Ewan McGregor blev dog ikke nogen stor succes. På trods af et større budget og stjerneskuespillere fra Hollywood, så formåede filmen ikke at begejstre publikum og anmeldere på samme måde, som det danske forlæg havde gjort det.

**Dogme95**
1995 var et helt specielt år for dansk film. Det var nemlig året, hvor de fire instruktører Lars von Trier, Søren Kragh-Jacobsen, Kristian Levring og Thomas Vinterberg introducerede manifestet Dogme95, der fik international opmærksomhed. Ideen bag manifestet var, at historien og skuespillet i filmen var det vigtigste. Filminstruktører måtte derfor blandt andet kun bruge håndholdt kamera og direkte lyd, de måtte ikke tilføje rekvisitter eller bruge lyssætning eller special effects. De tre første dogmefilm – *Idioterne* (1998) af Lars von Trier, *Festen* (1998) af Thomas Vinterberg og *Mifunes sidste sang* (1999) af Søren Kragh-Jacobsen – vandt flere internationale priser på de vigtigste festivaler i Cannes, Berlin og Venedig. Det skabte opmærksomhed omkring dansk film generelt og banede dermed vej for instruktører som Susanne Bier med *Den eneste ene* (1999) og Lone Scherfig med *Italiensk for begyndere* (2000). Desuden blev *Festen* nomineret til en Golden Globe for bedste udenlandske film.

**Dansk film i de seneste to årtier**

**Krise i 00’erne**
Succesbølgen for dansk film varede ved i en årrække, men uden den store fornyelse, og den 19. september 2007 konstaterede den danske avis Børsen endegyldigt, at 1990’ernes filmfest var forbi. Men det skulle blive endnu værre. Krisen kulminerede i 2009-2010. Selvom salget af biografbilletter var stigende, så faldt andelen af billetter til danske film fra 33 % i 2008 til kun 17 % i 2009, og kun tre danske biograffilm var i top 20 over de mest sete film i biograferne mod 6-8 i årene før.

Direktøren for filmselskabet Zentropa, Peter Aalbæk Jensen, måtte i 2009 fyre en lang række medarbejdere og udtalte: ”Dansk film er rig på talent, men selvfedme, dårlig ledelse og urimelige lønkrav har kastet filmproducenter ud i en alvorlig økonomisk krise”.

**2010’erne – dansk film på vej frem igen**
I 2010’erne kom der flere tegn på, at dansk film havde overvundet krisen. Susanne Biers film *Hævnen* vandt i 2011 både en Golden Globe og en Oscar i USA for bedste udenlandske film, og samme år i Cannes i Frankrig vandt Nicholas Winding Refn en pris for sin film *Drive*. Også i forhold til billetsalget var der store lyspunkter. Filmen *Klovn – the Movie* af komikerparret Casper Christensen og Frank Hvam solgte i 2011 753.000 billetter på lidt over en måned og blev dermed den hurtigst sælgende danske biograffilm nogensinde. På verdensplan havde filmen en omsætning på over 65 millioner kroner og blev dermed den næstmest indtjenende danske film i filmhistorien.

**DET DANSKE FILMINSTITUT (DFI)**

Det Danske Filminstitut (DFI) er en statsinstitution under Kulturministeriet og har adresse i Filmhuset i Gothersgade 55 i København. Filminstituttet i dets nuværende form opstod i 1997 som en sammenlægning af de tre tidligere statslige institutioner: Det Danske Filminstitut, Statens Filmcentral og Det Danske Filmmuseum.

DFI blev oprettet for at fremme filmkunst, filmkultur og biografkultur i Danmark. Det gør instituttet bl.a. ved at yde økonomisk støtte til danske film og ved at udbrede kendskabet til danske og udenlandske film i Danmark og ved at udbrede kendskabet til danske film i udlandet.

Det Danske Filminstitut har en række forskellige tilbud i Filmhuset.

**Cinemateket**
Et af tilbuddene er Cinemateket. Cinemateket har tre biografsale: Bio Carl har 182 pladser og er opkaldt efter den danske filminstruktør Carl Th. Dreyer. Bio Asta har 140 pladser og er opkaldt efter den danske skuespillerinde Asta Nielsen. Bio Benjamin er Cinematekets mindste biograf, der bruges til bl.a. festivalvisninger. Bio Benjamin er opkaldt efter Benjamin Christensen, en berømt dansk skuespiller og instruktør fra stumfilmsperioden.

Cinemateket kan forstås som et museum, der har til ansvar at udbrede kendskabet til både kendte og ukendte danske og udenlandske film fra filmhistorien samt at vise udvalgte nutidige film, der ellers ikke bliver vist i de danske biografer. Der vises op mod 70 forskellige filmtitler hver måned. Året rundt lægger Cinemateket også hus til filmvisninger i forbindelse med de forskellige københavnske filmfestivaler.

**DFI’s bibliotek**
På Cinematekets 1. sal findes DFI’s bibliotek, som er en af verdens største samlinger af litteratur om film og tv. Biblioteket har 70.000 bøger til udlån og over 2,5 mio. avisudklip og filmprogrammer i skufferne. Biblioteket huser også et videotek, hvor der kan streames og afspilles over 11.000 spillefilm, kort- og dokumentarfilm og tv-serier. Endelig er der adgang til Mediestream, som rummer flere hundrede tusinde timers udsendelser fra Statsbiblioteket i Aarhus, der har en unik samling af dansk radio og tv, samt mere end 50.000 tv- og biografreklamer.

I bibliotekets bemandede åbningstid hjælper de ansatte med at besvare spørgsmål og vejlede i informationssøgning i de filmdatabaser, biblioteket stiller til rådighed. Uden for den bemandede åbningstid kan man få adgang til biblioteket ved hjælp af sit sundhedskort.

**FILM-X**
FILM-X er et tilbud til bl.a. skoleklasser, som i Cinematekets filmstudier kan skabe deres egne film i et professionelt miljø. Eleverne kommer gennem en klassisk produktionsproces, hvor de idéudvikler, optager og klipper med professionelt filmudstyr. Forløbene varer 3 timer, og undervejs får de kyndig vejledning af filmpædagogiske guider. Skoleelever anvender film og video i dagligdagen til at finde informationer og til at kommunikere med hele verden. Stort set alle har adgang til teknologi, der gør det muligt at producere og dele egne optagelser, men hensigten med FILM-X er også, at eleverne her har mulighed for at reflektere over deres anvendelse af filmmediet. FILM-X har tilbud i forbindelse med børnefødselsdage og polterabender, særlige tilbud til daginstitutioner samt teambuildingkurser.

**Restaurant SULT**
I DFI ligger der også en restaurant, og den er navngivet efter Henning Carlsens berømte filmklassiker *SULT* fra 1966. Restaurant SULT har plads til 300 gæster. Menuen er sammensat af sæsonens friske råvarer med fokus på økologi, og restauranten har et bredt udvalg af frokost- og middagsretter. I alle weekender, på helligdage samt i udvalgte ferier serveres der brunchbuffet. Der er taget særligt hensyn til de af restaurantens gæster, der er gluten- eller laktoseallergikere. Brunchbuffeten har åbningstider, så den kan kombineres med Cinematekets formiddagsvisninger og tidlige eftermiddagsvisninger. Restauranten er velbesøgt, så det er en god ide at reservere bord.

**Cinematekets Butik**
I Cinematekets butik kan man finde et stort udvalg af blu-rays, DVD’er med film fra hele filmhistorien, CD’er med filmmusik og nu også lp-plader med filmmusik, noget man ikke har solgt tidligere. Derudover kan man bl.a. købe filmplakater, sjove gadgets og legetøj. Butikken har åbent alle dage undtagen mandag: på hverdage 9:00-22:00, lørdag 10:45-22:00 og søndag 10:45-19:30. Webshoppen er åben døgnet rundt.

**Billed- og Plakatarkivet**
Det Danske Filminstituts Billed- & Plakatarkiv er et filmhistorisk arkiv, som er åbent for alle interesserede. Publikum har mulighed for at bestille kopier af arkivets billeder og plakater. Reproduktionerne leveres digitalt eller som print.

Billed- & Plakatarkivets samlinger indeholder materialer fra stort set samtlige danske og udenlandske film, der har været vist i danske biografer helt tilbage til 1910’ernes stumfilm.

I samlingerne findes blandt meget andet filmplakater og presse- og dokumentationsfotos fra spillefilm, novellefilm, kortfilm og dokumentarfilm. Arkivet rummer mere end to millioner stills, portrætter og biografbilleder og over 20.000 plakater fra danske og udenlandske film.

**UDVALGTE BIOGRAFER I DANMARK**

Ifølge Danmarks statistik var der i år 2016 i alt 163 biografer i Danmark, 444 biografsale og 61.000 biografsæder. Mange af biograferne ligger i de store byer: København, Aarhus, Odense og Aalborg, men også mange mindre byer har deres lokale biograf. Danmarks – og også verdens – ældste fungerende biograf ligger faktisk i Korsør på Vestsjælland. Den fyldte 100 år i 2008.

Danmarks største biografsal er Imperial i København, der har 1.102 siddepladser. Det største biograflærred findes dog et andet sted i København, nemlig i Cinemaxx på Fisketorvet. Det er samtidig det største i Skandinavien. Danmark har også en drive-in biograf, hvor man kører ind og ser filmen fra sin bil. Lynge Drive-in bio i Allerød kommune er Danmarks eneste og en af Europas største drive-in biografer.

**Biografer i Aarhus og København**

**Aarhus**
Den første biograf i Aarhus åbnede allerede i 1905, men Kosmorama, som den hed, måtte lukke i 1985. I dag råder Danmarks næststørste by over mange forskellige biograftilbud. Et af dem er det store moderne biografkompleks Nordisk Film Biografer, der ligger på Skt. Knuds Torv midt i byen. Alle biografens ni sale er udstyret med ny digital teknologi indenfor både billede og lyd. Derudover har byen også kunstbiografen Øst for Paradis, der har sit eget filmarkiv med klassiske mesterværker af fx Akira Kurosawa eller Orson Welles, der også ind i mellem kommer på biografens program. I Øst for Paradis kan man til særlige forestillinger også høre et oplæg om den film, man skal se. Øst for Paradis samarbejder fx med Cinemateket om en række visninger af store klassikere.

**København**
Udover Imperial og Cinemaxx har København mange andre biografer at byde på. I Palads på Axeltorv er der 17 sale, og biografen har derfor mulighed for at have nogle af de populære film på programmet i lidt længere tid end de mindre biografer, hvor disse film hurtigere må vige pladsen for nye premierefilm. Palads har et særligt tilbud til børn. I tiden frem til kl. 19 er børnefilmene nemlig flyttet ind i de store biografsale, og som en særlig service til børnene og deres forældre er der skåret ned på reklameblokken, inden filmen starter.

Grand Teatret, som ligger i hjertet af København, har vist kvalitetsfilm lige fra starten i 1923. I 1947 blev det for eksempel bemærket, at biografen turde spille *Citizen Kane* af Orson Welles frem for kun at vise film, der havde til hensigt at underholde. Biografens program har typisk et intellektuelt tilsnit, og europæiske film fylder mere her end i de fleste andre københavnske biografer. Grand har i mange år været synonym med fransk film, men der vises generelt et bredt udvalg af film, også amerikanske.

Cinemaxx på Fisketorvet er Danmarks første IMAX-biograf, der kan vise film i det specielle IMAX-3D format.

**Kinorevyen i Skørping**
Kinorevyen ligger overfor stationen i Skørping. Efter en gennemgribende renovering, som blev afsluttet i juni 2013, fremstår den gamle biograf nu som en af Nordjyllands mest moderne biografer. Biografsalen er udstyret med 100 sæder med usædvanlig god benplads. Teknikken er af mest moderne standard.

**Frivillig i Kinorevyen**
Omkring 60 mennesker yder hver på deres måde en frivillig indsats i driften og udviklingen af Kinorevyen: som cafévagt eller filmoperatør, som drivkraft i seniorfilmklubben eller børnefilmklubben, som vedligeholdelsesteam eller medlem af bestyrelsen eller som initiativtager til nye aktiviteter. Som frivillig får man ikke løn – men for hver vagt får man en fribillet til Kinorevyen, som man selv kan bruge eller forære til familie eller venner.

De, der gerne vil arbejde frivilligt som cafévagter eller operatører, bliver oplært af erfarne kolleger, så de er helt sikre på, hvad der forventes af dem. Man skal normalt påtage sig minimum to vagter pr. måned.

**Seniorbiografen**
Seniorbiografen er en del af Kinorevyen i Skørping. Af biografens ca. 60 frivillige arbejder ca. 15 i Seniorbiografen. Seniorbiografen henvender sig især til den ældre generation, men der er ingen aldersgrænse, og man skal ikke melde sig ind – blot købe billet. Seniorbiografens sæson strækker sig fra ca. 1. oktober til 1. april, og filmene vises altid i dagtimerne. Mange ældre er nemlig ikke så glade for at komme ud om aftenen, når det er mørkt. Men selv om man er kommet op i årene, vil man ofte gerne følge med i, hvad der sker – også når det gælder filmens verden. Når der vises film om formiddagen, er der morgenbuffet fra kl. 9.00. Den er inkluderet i billetprisen på kun 100 kr. Så er der en time til at nyde morgenmaden og kaffen og samværet med andre, før man kl. 10.00 skal ind og se filmen.

**Biffen Nordkraft**
Biffen Nordkraft i Aalborg er en del af kulturcenteret Nordkraft. Centeret danner ramme om forskellige kulturelle aktiviteter som fx musik, teater, kunst og caféer, fitness og festivaler. Udover det normale filmprogram byder Biffen Nordkraft også på filmfestivaler, debatter, filmkurser og møder med filminstruktører og skuespillere.

**Filmkredse i Biffen Nordkraft**
Biffen Nordkraft arrangerer filmkredse for sit publikum. I en filmkreds mødes man med jævne mellemrum og ser en film sammen, som man så diskuterer bagefter. I cafeen har biografen arrangeret hyggehjørner, der er indrettet sådan, at filmkredse kan bruge dem til at mødes efter filmen.

Alle medlemmer af en filmkreds får tilsendt et nyhedsbrev og bliver derudover inviteret til et arrangement hvert halve år, hvor biografen fortæller om kommende film. Nogle gange kommer der filminstruktører eller andre filmfolk til arrangementerne.

Det er gratis at danne en filmkreds, men man skal være minimum tre personer. Man tilmelder sig i biografens cafe ved at indlevere en liste med medlemmernes navne og mail-adresser, hvorefter man får et kredskort.

**Biffens Venner**
Biffens Venner er en støtteforening, hvis primære formål er at øge kendskabet til Biffen Nordkraft, Biffen Nordkrafts film og øvrige aktiviteter. Som medlem af Biffens Venner hjælper man med til at bevare Biffen Nordkraft som en uafhængig biograf ved at støtte op omkring aktiviteter og arrangementer, der kan samle penge ind til biografens drift.

Det giver en række fordele at være medlem af Biffens Venner. Eksempelvis præsenterer Biffen Nordkraft hvert år en eller to udvalgte film gratis for foreningen. Derudover inviteres Biffens Venner til et efterårsarrangement (filmvisning i en anden biograf, et instruktørbesøg el. lign.), og desuden får man løbende tilbudt at se film, hvor man kan tage en ledsager gratis med til filmen. Til den årlige generalforsamling vises der en aktuel film.

**ANMELDELSER AF BIOGRAFER**

**Kinorama i Sønderborg**
Jeg har været på barsel det sidste halve år med min lille søn, og Babybio i biografen i Sønderborg har været en helt fantastisk mulighed for både at komme lidt ud blandt andre mennesker og så se nogle gode film. Da min veninde først nævnte det for mig, så troede jeg faktisk, at man i babybio viste film for små børn, men det gør man ikke. Det er jo helt almindelige voksenfilm, hvor der bare er skruet lidt ned for lyset og lyden, så børnene kan sove lidt undervejs. Man kan faktisk også skifte ble på sit barn inde i salen midt under filmen, hvis der er brug for det. Personalet er rigtig gode til at hjælpe og tage hensyn til alle os nybagte mødre og fædre. Men det vigtigste er faktisk, at jeg ikke selv skal tage hensyn, hvis min søn græder eller larmer. Alle andre er jo i samme situation som mig. Jeg vil virkelig anbefale babybio i Kinorama til alle jer mødre og fædre derude, som har lyst til at komme lidt ud, mens I er på barsel.

*af Helle H*

**Aars Teater Bio**
Aars Teater Bio er en lille biograf med to sale. P-pladserne er gratis, og billetterne er billige. De er også hurtige til at vise premierefilmene, men det er selvfølgelig ikke som at komme til Aalborg i en kæmpe biograf. Men Aars er ikke Aalborg og skal heller ikke være det. Jeg synes, vi har pligt til at bakke op om vores lille lokale biograf. Hvis vi ikke husker at støtte den, så forsvinder den bare, og så har vi pludselig ikke muligheden længere. Jeg kan da godt forstå, at mange gerne vil se Star Wars og de andre store film fra Hollywood i en stor, moderne biograf. Men Aars Teater Bio har faktisk noget, de store biografer ikke har. De frivillige, der passer biografen, ved nemlig rigtig meget om film, og det synes jeg ellers ikke, man oplever så tit hos personalet i de store biografer. Derudover smiler de altid og hilser pænt. Stor ros til dem. Aars Teater Bio ville ikke være det samme uden disse dejlige mennesker.

*af Kim BB*

**Scala Biograferne i Svendborg**
Jeg vil hermed give min varmeste anbefaling af Scala Biograferne! Jeg arbejder som handicaphjælper og kommer tit i biografen med borgere, der sidder i kørestol eller har svært ved at gå. Det er virkelig dejligt med en biograf, der er indrettet handicapvenligt! Der er aldrig problemer med at komme ind eller ud med en kørestol. Og når det er nødvendigt, så hjælper personalet altid til – jeg føler mig slet ikke til besvær. Jeg hader, når man kommer steder og kan mærke, at de ansatte synes, at det er irriterende, at de skal hjælpe en handicappet. Det er i hvert fald ikke tilfældet i Scala. Det eneste, jeg kan kritisere, er faktisk kiosken, som jeg synes er lidt dyr. Men der er jo ikke nogen, der tvinger mig til at bruge den. Udover det har jeg kun godt at sige om vores lokale biograf her i Svendborg.

*af Kamilla R*`,
    questions: [
      // Søg informationer under 'Det Danske Filminstitut (DFI)'
      // 1: the key says "Teambuilding(-kurser)"; the forcensur gave every candidate the point.
      { type: "short", n: 1, q: "(Det Danske Filminstitut (DFI)) Hvilket af de FILM-X-tilbud, der er nævnt i teksten, er målrettet firmaer?",
        accept: uniq(combos(["", "det er", "tilbuddet om", "tilbud om", "de tilbyder"], ["teambuildingkurser", "teambuilding", "teambuilding kurser", "teambuilding-kurser", "teambuildingkursus", "et teambuildingkursus", "team building", "team building kurser"])
          .concat(["børnefødselsdage og polterabender", "polterabender", "særlige tilbud til daginstitutioner", "tilbud til daginstitutioner"])) },
      { type: "short", n: 2, q: "(Det Danske Filminstitut (DFI)) Cinemateket viser op mod 70 film om måneden. Hvilke nutidige film kan blive udvalgt?",
        accept: uniq(combos(["", "udvalgte", "nutidige", "udvalgte nutidige", "de"], ["film der ellers ikke bliver vist i de danske biografer", "film der ikke bliver vist i de danske biografer", "film der ellers ikke bliver vist", "film der ikke bliver vist", "film der ellers ikke bliver vist i danske biografer", "film der ikke bliver vist i danske biografer", "film der ikke bliver vist i biograferne", "film der ellers ikke bliver vist i biograferne", "film der ikke vises i de danske biografer", "film der ellers ikke vises i de danske biografer", "film der ikke vises i danske biografer", "film der ikke vises i biograferne", "der ellers ikke bliver vist i de danske biografer", "der ikke bliver vist i de danske biografer"]))
          .concat(["dem der ellers ikke bliver vist i de danske biografer", "de film der ellers ikke bliver vist i de danske biografer"]) },
      { type: "short", n: 3, q: "(Det Danske Filminstitut (DFI)) Hvad kan man som noget nyt købe i Cinematekets butik?",
        accept: uniq(combos(["", "man kan købe", "man kan nu købe", "nu også"], ["lp plader", "lp-plader", "lpplader", "lp’er", "lp er", "lp plader med filmmusik", "lp-plader med filmmusik", "lpplader med filmmusik", "lp’er med filmmusik", "vinylplader med filmmusik", "plader med filmmusik"])) },
      // Søg informationer under 'Anmeldelser af biografer'
      // 4: the forcensur changed the key to "(De) ved (nemlig rigtig) meget om film".
      { type: "short", n: 4, q: "(Anmeldelser af biografer) Kim BB roser de frivillige i Aars Teater Bio for at smile og hilse pænt. Hvad roser han dem også for?",
        accept: uniq(combos(["", "de", "at de", "for at de", "fordi de", "han roser dem for at de"], ["ved meget om film", "ved rigtig meget om film", "ved nemlig rigtig meget om film", "ved nemlig meget om film", "ved så meget om film", "kender meget til film", "kender rigtig meget til film", "har stor viden om film"])
          .concat(["deres viden om film", "for deres viden om film", "deres store viden om film", "for deres store viden om film", "viden om film"])) },
      { type: "short", n: 5, q: "(Anmeldelser af biografer) Hvilke film troede Helle H, at man kunne se i Babybio i Kinorama i Sønderborg, da hun første gang hørte om konceptet Babybio?",
        accept: uniq(combos(["", "hun troede", "hun troede at man viste", "hun troede at man kunne se", "at man viste"], ["film for små børn", "film for børn", "for små børn", "for børn", "film til små børn", "film til børn", "børnefilm", "film for babyer", "babyfilm"])) },
      { type: "short", n: 6, q: "(Anmeldelser af biografer) Hvad er det eneste i Scala Svendborg, som Kamilla R ikke er helt tilfreds med?",
        accept: uniq(combos(["", "det er", "det eneste er", "hun er ikke tilfreds med"], ["kiosken", "kiosk", "kiosken som er lidt dyr", "kiosken er lidt dyr", "kiosken er dyr", "at kiosken er lidt dyr", "at kiosken er dyr", "priserne i kiosken", "kioskens priser", "den dyre kiosk"])) },
      // Søg informationer under 'Vigtige perioder i dansk filmhistorie'
      { type: "short", n: 7, q: "(Vigtige perioder i dansk filmhistorie) Bille August modtog i 1980’erne Den Gyldne Palme for sin film Pelle Erobreren. Hvilken anden film modtog han Den Gyldne Palme for?",
        accept: uniq(combos(["", "for", "filmen", "han modtog den for", "han fik den for"], ["den gode vilje", "den gode vilje i 1991", "den gode vilje 1991", "den gode vilje fra 1991"])) },
      { type: "short", n: 8, q: "(Vigtige perioder i dansk filmhistorie) Krisen i dansk film kulminerede i 2009-2010. Hvordan var salget af biografbilletter i denne periode i Danmark?",
        accept: uniq(combos(["", "det var", "salget var", "salget af biografbilletter var", "billetsalget var", "salget af billetter var"], ["stigende", "stigende men andelen af danske film faldt", "stigende men andelen til danske film faldt"])
          .concat(["det steg", "salget steg", "billetsalget steg", "salget af biografbilletter steg", "steg", "det var i stigning", "i stigning"])) },
      { type: "short", n: 9, q: "(Vigtige perioder i dansk filmhistorie) Hvorfor ville filmproducenter i mange år ikke arbejde sammen med Carl Th. Dreyer, efter han havde instrueret filmen Jeanne D’Arcs Lidelse og Død?",
        accept: uniq(combos(["", "fordi", "filmen blev en", "den blev en", "fordi filmen blev en", "fordi den blev en", "det var en", "fordi det var en", "den var en", "fordi den var en", "fordi filmen var en"], ["økonomisk katastrofe"])
          .concat(combos(["", "på grund af", "pga", "af", "fordi", "på grund af dårlig", "pga dårlig"], ["økonomi", "økonomien", "økonomiske grunde", "økonomiske årsager", "økonomisk tab", "et økonomisk tab", "den tjente ingen penge", "filmen tjente ingen penge", "filmen tabte penge", "den tabte penge"]))) },
      { type: "short", n: 10, q: "(Vigtige perioder i dansk filmhistorie) Løvejagten var dansk films første internationale succes. Filmen blev først forbudt i Danmark. Men hvilket år fik den international premiere?",
        accept: ["1907", "i 1907", "i år 1907", "året 1907", "den fik international premiere i 1907", "i 1907 et år før den danske premiere"] },
      { type: "short", n: 11, q: "(Vigtige perioder i dansk filmhistorie) Hvorfor undgik Danmark det tyske importforbud, da 1. Verdenskrig brød ud?",
        accept: uniq(combos(["", "fordi", "fordi at", "det var fordi"], ["danmark var neutralt", "danmark var neutral", "danmark var et neutralt land", "danmark var neutralt i 1 verdenskrig", "danmark var neutral i 1 verdenskrig", "danmark var neutralt i første verdenskrig", "danmark var neutral i første verdenskrig", "danmark var neutralt under 1 verdenskrig", "danmark var neutralt under krigen", "danmark var neutralt i krigen", "det var neutralt", "landet var neutralt", "de var neutrale", "danmark var ikke med i krigen"])
          .concat(["neutralitet", "på grund af neutralitet", "pga neutralitet", "danmarks neutralitet", "på grund af danmarks neutralitet", "neutralt", "neutral"])) },
      // Søg informationer under 'Udvalgte biografer i Danmark'
      // 12: the forcensur changed the key to "Morgenbuffet / Morgenmaden og kaffen".
      { type: "short", n: 12, q: "(Udvalgte biografer i Danmark) Hvad er inkluderet i billetprisen, når man har købt billet til Seniorbiografens formiddagsforestilling?",
        accept: uniq(combos(["", "en", "der er", "man får"], ["morgenbuffet", "morgenbuffet fra kl 9", "morgenbuffet fra kl 9 00", "morgenbuffeten", "morgenbuffet og kaffe"])
          .concat(combos(["", "man får"], ["morgenmaden og kaffen", "morgenmad og kaffe", "kaffe og morgenmad", "kaffen og morgenmaden", "morgenmad", "morgenmaden"])))
          .concat(["morgenbuffet morgenmaden og kaffen", "morgenbuffet med morgenmad og kaffe"]) },
      { type: "short", n: 13, q: "(Udvalgte biografer i Danmark) Hvordan sikrer man i Kinorevyen, at frivillige cafévagter og operatører kender deres arbejdsopgaver?",
        accept: uniq(combos(["", "de bliver", "ved at de bliver", "frivillige bliver", "de frivillige bliver", "de", "ved at blive", "man bliver", "ved at man bliver", "de skal"], ["oplært af erfarne kolleger", "oplært af kolleger", "lært op af erfarne kolleger", "lært op af kolleger", "oplært af erfarne frivillige", "oplært af de erfarne kolleger", "oplæres af erfarne kolleger", "oplæres af kolleger"])
          .concat(combos(["", "ved", "gennem", "med"], ["oplæring af erfarne kolleger", "oplæring af kolleger", "oplæring fra erfarne kolleger"]))) },
      { type: "short", n: 14, q: "(Udvalgte biografer i Danmark) I forbindelse med visse film tilbyder Palads i København en kortere reklameblok end normalt inden filmens start. Hvilke?",
        accept: uniq(combos(["", "ved", "til", "før", "i forbindelse med"], ["børnefilm", "børnefilmene", "børnefilm inden kl 19", "børnefilm før kl 19", "børnefilm frem til kl 19", "børnefilmene frem til kl 19", "børnefilmene inden kl 19", "børnefilmene før kl 19", "børnefilm indtil kl 19", "film for børn", "film til børn", "film for børn inden kl 19", "film til børn før kl 19", "børnefilmene i de store sale"])) },
      { type: "short", n: 15, q: "(Udvalgte biografer i Danmark) Biffens Venner er en støtteforening for Biffen Nordkraft. Hvad er formålet med at samle penge ind til biografens drift?",
        accept: uniq(combos(["", "at", "for at", "formålet er at", "det er for at"], ["bevare biffen nordkraft", "bevare den", "bevare biografen", "bevare biffen", "bevare biffen nordkraft som en uafhængig biograf", "bevare biffen nordkraft som uafhængig biograf", "bevare den som en uafhængig biograf", "bevare den som uafhængig biograf", "bevare biografen som en uafhængig biograf", "bevare biografen som uafhængig biograf", "bevare biffen som en uafhængig biograf", "holde biffen nordkraft uafhængig", "holde biografen uafhængig", "bevare en uafhængig biograf"])) }
    ]
  };

  const arbejdskraft = {
    id: "pd3-19n-2", group: G, real: true,
    title: "Delprøve 2A – Udenlandsk arbejdskraft i Danmark",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 45,
    instruction: "Læs teksterne Fra Rumænien til Roskilde og Danmark har brug for højtuddannet udenlandsk arbejdskraft. Herunder er der syv spørgsmål til de to tekster. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1**

**Fra Rumænien til Roskilde**

**28-årige Andrei Vasilescu fra Rumænien er en af mange udlændinge, der i de senere år har fået job i Danmark. Han er datalog og flyttede for to år siden fra Rumænien til Roskilde for at arbejde med software-udvikling til avanceret robotteknologi.**

Da Andrei Vasilescu boede i Rumænien, arbejdede han med drift og udvikling af it-systemer. På en international IT-messe i Tyskland kom han i kontakt med Helene Bagger, hans nuværende chef. Helene Baggers firma i Roskilde var i gang med at udvikle robotteknologi til sundhedsområdet. Det var et område, Andrei gerne ville prøve kræfter med, og Helene Bagger mente, at han ville passe godt ind i hendes firma. Ud over en relevant uddannelse virkede Andrei innovativ, nytænkende og åben. Helene Bagger tog en hurtig beslutning og tilbød ham et job i Roskilde. Det var dog en betingelse, at han var villig til at flytte til Danmark inden for et par måneder.

**En svær beslutning**
Andrei havde som mange andre unge rumænere overvejet at søge job i udlandet. Han havde allerede været i gang med at undersøge mulighederne. Han havde dog kun kigget på Storbritannien, fordi han mente, det var nemmest at flytte til et land, hvor han kunne sproget på forhånd. Men han havde endnu ikke besluttet sig, fordi han var glad for sit arbejde i Rumænien. Han var glad for sine kolleger, og han havde også en god indtægt, fordi folk, der arbejder med IT i Rumænien, for eksempel ikke skal betale det samme i skat som andre.

Andrei havde derfor brug for et par dages betænkningstid, inden han besluttede sig for jobbet i Danmark. Han ville også få en god løn i Danmark, men ved at skifte til jobbet i Roskilde kunne han både udvikle sig personligt og styrke sine kvalifikationer som datalog, og derfor sagde han sit job op og gik i gang med at forberede sin rejse til Danmark.

**Sprog og kultur**
Andrei er glad for sin beslutning. Han er glad for sit job, og han er glad for sit nye liv i Danmark. Men sproget har ikke overraskende for ham vist sig at være en stor udfordring, som han må bruge meget tid på. Selvom hans arbejdssprog er engelsk, vil Andrei gerne lære dansk. Han vil gerne kunne følge med i de danske nyheder og kunne tale dansk med danske venner. Han oplever nemlig tit, at selvom de fleste danskere taler engelsk, så foregår samtalen på dansk, når der er flere danskere sammen, og så kan han ikke rigtigt deltage.

Andrei prioriterer derfor sin danskundervisning trods en travl hverdag, og to gange om ugen skynder han sig ud ad døren efter arbejde, så han kan nå undervisningen, der begynder 17.30 på sprogskolen, der ligger ikke så langt fra hans arbejde.

Andrei har nu gået til dansk i næsten halvandet år og er ved at blive helt god, synes han selv. Han går faktisk til dansk sammen med én af sine kolleger, og de taler nogle gange dansk sammen i frokostpausen. Men ellers er det mest i fritiden, Andrei kommunikerer på dansk. Han synes dog, det er lidt hårdt, men er fast besluttet på at gøre det, da han gerne vil integreres mere i det danske samfund. Han er også lige blevet medlem af den lokale roklub og ror nu kajak på Roskilde Fjord et par gange om ugen. Og her ror han sammen med danskere – og de taler kun dansk sammen.

**Tekst 2**

**Danmark har brug for højtuddannet udenlandsk arbejdskraft**

**Der er brug for højtuddannede udlændinge i Danmark. Men selvom der er mange fordele ved at bo og arbejde i Danmark, kan det være svært for danske firmaer at tiltrække nok udenlandske specialister.**

Det går godt for dansk økonomi. I erhvervslivet er der gang i væksten, og i mange danske firmaer er der brug for flere højtuddannede medarbejdere. COWI er et af disse firmaer.

COWI arbejder blandt andet med store projekter både i Danmark og internationalt. Det er projekter som for eksempel bygning af jernbanenet, metroringe og letbaner. COWI satser på at udvide sine internationale aktiviteter i de kommende år. Men COWI har brug for flere dygtige specialister, hvis det skal lykkes.

Det har indtil nu generelt været muligt for COWI at få nok dygtige medarbejdere til projekter uden at skulle rekruttere i udlandet. Det er stadig muligt til projekter i Danmark, men det samme gælder ikke for internationale projekter, der kræver højt specialiserede medarbejdere. Her er der ikke blot brug for medarbejdere med faglig ekspertise inden for et specifikt teknisk område. Medarbejderne skal også have et vist kendskab til lokale samarbejdspartnere og den nationale lovgivning mv., og det er en mangelvare blandt mange danske kandidater.

**Attraktivt at bo og arbejde i Danmark**
COWI er derfor afhængig af at kunne tiltrække udenlandske specialister. Og det er svært, selvom Danmark er et attraktivt land at bo og arbejde i. Danmark er sammenlignet med mange andre lande et trygt og velfungerende velfærdssamfund. Der er også en meget fleksibel arbejdskultur, hvor den enkelte medarbejder har relativt meget ansvar. Det er dog især den gode work-life-balance, som mange herboende udlændinge fremhæver. I Danmark er der plads til både karriere, familieliv og fritidsaktiviteter. Det er der ikke altid i andre lande.

Det er imidlertid et problem for de danske virksomheder, at mange internationale talenter ikke ved ret meget om Danmark. Der er derfor brug for en indsats for at brande Danmark bedre. Godt nok har blandt andet Udenrigsministeriet en officiel hjemmeside http://denmark.dk, hvor udlændinge kan læse om work-life balance og andre forhold i det danske samfund. Men der er brug for andet og mere for at brande Danmark bedre.

Hvis danske firmaer ikke kan tiltrække nok internationale talenter, vil der være risiko for, at de ikke kan klare sig i den internationale konkurrence i fremtiden. Det er især inden for naturvidenskab, IT og ingeniørfag, der er behov for flere specialister. Det er endda sandsynligt, at der på fremtidens arbejdsmarked vil blive brug for endnu flere højtspecialiserede medarbejdere. Selv hvis Danmark øgede antallet af uddannelsespladser inden for disse fag, ville der være behov for endnu mere højtuddannet arbejdskraft.

Hvis man vil øge indvandringen af højtuddannede udlændinge, er der forskellige muligheder. Erhvervslivet peger på, at man fx kan gøre det lettere at få opholds- og arbejdstilladelse i Danmark. De peger også på, at man kan nedsætte topskatten for udenlandske medarbejdere. Det er nemlig sandsynligt, at den høje topskat får nogle udlændinge til at fravælge Danmark. Fælles for alle tiltag er dog, at der skal være en politisk opbakning bag.

**Økonomisk gevinst for Danmark**
Det er ikke kun de danske firmaer, men også den danske økonomi, der nyder godt af højtuddannede udlændinge. Det er blandt andet blevet fastslået i en analyse lavet af tænketanken DEA og Dansk Industri. Heraf fremgår det, at højtuddannede indvandrere betaler mere til den danske stat, end de modtager. Det gælder både indvandrere uden og med familie.

Højtuddannede indvandrere uden familie bliver i Danmark i fem et halvt år i gennemsnit. I den periode betaler de i gennemsnit 720.000 kr. mere til den danske stat, end de modtager. Højtuddannede indvandrere med familie bliver i gennemsnit i Danmark i ti år, og de betaler i gennemsnit ca. 2,2 millioner kroner mere til den danske stat, end de modtager. Det positive bidrag skyldes, at højtuddannede indvandrere typisk får en høj løn. De betaler dermed en høj skat. Samtidig er mange af dem i 30’erne og 40’erne. De er derfor typisk sunde og raske. Da mange af dem også rejser igen for at fortsætte deres karriere i et andet land, bliver de heller ikke gamle i Danmark. Det sparer det offentlige for udgifter til ældrepleje. Man kan ydermere regne med den sidegevinst, at de i deres nye land er med til at sprede budskabet om, at Danmark er et godt land at arbejde i. På den måde kan de være med til, at danske firmaer får nemmere ved at rekruttere udlændinge i fremtiden.

**Politisk prioritering**
Mens der mangler højtuddannet arbejdskraft i Danmark, ser det anderledes ud på mange områder, der beskæftiger lavt uddannede. Der har nemlig i de senere år været en stor indvandring af lavt uddannet arbejdskraft. Analyser viser dog, at denne indvandring også er en økonomisk gevinst for Danmark. Samtidig har den ikke påvirket lønningerne negativt. For de højtuddannede har indvandringen ikke forringet jobmulighederne, da der som nævnt mangler højtuddannet arbejdskraft. Med den store indvandring af lavtuddannet arbejdskraft har dette til gengæld været et problem for de lavtuddannede danskere.

Det kræver politiske beslutninger, om man vil forsøge at øge indvandringen af udenlandsk arbejdskraft i Danmark. Det kan dog vise sig at være nødvendigt, hvis COWI og andre danske firmaer skal kunne klare sig i den internationale konkurrence i fremtiden.`,
    questions: [
      { type: "mc", n: 1, q: "Tekst 1: Hvilken af følgende grunde var ifølge teksten afgørende for, at Helene Bagger tilbød Andrei et job i sit firma i Roskilde?",
        options: ["Han havde kendskab til udvikling af software til robotteknologi.", "Han havde en faglig profil, det danske firma havde brug for.", "Han havde erfaring med at arbejde i et internationalt miljø."], answer: 1 },
      { type: "mc", n: 2, q: "Tekst 1: Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Andrei tog imod jobtilbuddet i Roskilde?",
        options: ["Han ville få en god indkomst, selvom der ikke er særlige skattefordele i Danmark.", "Han havde besluttet, at han alligevel ikke ville søge et job i Storbritannien.", "Han kunne lære noget nyt, der kunne være med til at udvikle ham fagligt."], answer: 2 },
      { type: "mc", n: 3, q: "Tekst 1: Hvilket af følgende udsagn om Andrei passer med det, der står i teksten?",
        options: ["Han vil gerne lære dansk af sociale årsager.", "Han vil gerne lære dansk, så han kan tale dansk med sine kolleger.", "Han vil gerne lære dansk, fordi der ligger en sprogskole tæt på hans arbejdsplads."], answer: 0 },
      { type: "mc", n: 4, q: "Tekst 2: Hvad nævnes i teksten som en årsag til, at COWI har brug for at rekruttere udenlandske specialister til firmaets internationale projekter?",
        options: ["Danske specialister søger normalt ikke arbejde i internationale projekter.", "Danske specialister mangler kendskab til andre landes love og regler.", "Danske specialister har ikke den nødvendige tekniske ekspertise."], answer: 1 },
      { type: "mc", n: 5, q: "Tekst 2: Hvad skal der ifølge teksten arbejdes for, hvis der i fremtiden skal være nok specialiseret arbejdskraft i Danmark?",
        options: ["En udbredelse af kendskabet til Danmark i udlandet.", "En endnu bedre balance mellem arbejde og fritid i Danmark.", "En bedre uddannelse af kandidater på især de tekniske uddannelser."], answer: 0 },
      { type: "mc", n: 6, q: "Tekst 2: Hvilken grund er der ifølge teksten blandt andet til, at højtuddannede udlændinge er en gevinst for Danmark?",
        options: ["De lever sundere end danskere og koster derfor det offentlige færre penge.", "De betaler en større del af deres løn i skat end deres danske kolleger.", "De udbreder kendskabet til Danmark som en attraktiv karrieredestination."], answer: 2 },
      { type: "mc", n: 7, q: "Tekst 2: Hvad har ifølge teksten været en konsekvens af, at der i de senere år har været en stor indvandring af lavtuddannet arbejdskraft til Danmark?",
        options: ["Den har øget den politiske interesse for at begrænse indvandring af højtuddannet arbejdskraft.", "Den har mindsket lavtuddannede danskeres muligheder for at få sig et arbejde.", "Den har påvirket lønstigningerne på det danske arbejdsmarked."], answer: 1 }
    ]
  };

  const freelancere = {
    id: "pd3-19n-3", group: G, real: true,
    title: "Delprøve 2B – Flere danskere arbejder som freelancere",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Flere danskere arbejder som freelancere. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Flere danskere arbejder som freelancere**

**Hvis man har en arbejdsgiver og en fast månedsløn, så har man et arbejdsliv som de fleste danskere. Der er dog flere og flere danskere, der i disse år [[0]] en fast ansættelse og fast månedsløn og i stedet tjener penge på freelanceopgaver.**

**Sin egen chef**
Mange nye freelancere mener, at det er [[1]] at være ”sin egen chef” – også selvom man samtidig mister en stabil månedsløn og måske får en længere arbejdsdag. Undersøgelser viser, at det især er friheden til selv at bestemme, der er motiverende. For eksempel er det som freelancer muligt selv at definere og planlægge sin arbejdsdag, både i forhold til indhold og arbejdstid.

Denne [[2]] samt ansvaret for sin egen succes er René Søgaard fra Aarhus glad for. Han har udviklet et koncept, hvor man kan sælge livsstilsprodukter online. Han kan arbejde og tjene penge hjemmefra og er dermed en af de danskere, som har valgt at være sin egen chef.

”Friheden er det vigtigste for mig: At jeg selv bestemmer, hvornår og hvor meget jeg arbejder, og hvad jeg helt konkret laver hver dag. [[3]] er ansvaret ekstremt motiverende. Der er ingen at skyde skylden på, hvis forretningen ikke kører, men omvendt er det 100 % min egen fortjeneste, når det går godt”¹, siger René Søgaard.

**Nemmere at starte for sig selv**
Det er på ingen måde en [[4]], at der i disse år kommer flere freelancere. På en række nye platforme på nettet kan man nemlig dele gode råd eller købe og sælge ydelser. Så både for folk med viden og kvalifikationer, der har nogle ydelser, de gerne vil sælge, og for private eller virksomheder, der gerne vil købe, er samarbejdet nu nemmere at starte.

Der er [[5]] blevet gennemført en række politiske initiativer, der har gjort det nemmere at tage springet fra ansat til freelancer, herunder at det nu også er muligt at optjene ret til dagpenge på baggrund af den indtægt, man har som freelancer.

**Hårdt arbejde og stor risiko**
Hvis man tænker på at starte for sig selv, er det dog vigtigt, at man er [[6]], at der også er nogle udfordringer og ulemper ved livet som selvstændig.

Når man arbejder som freelancer, er der ikke noget, som hedder feriepenge og pension – man skal selv sørge for at medregne dette i sine priser. Man skal også betale for, at andre laver ens regnskab, [[7]] man eventuelt selv sætter sig ind i reglerne.

At være sin egen chef er hårdt arbejde, og man løber en risiko. Man skal selv opsøge arbejdet og nye projekter. Der kan være perioder, hvor det går mindre godt, og så skal man måske klare et par måneder med lav indtægt. Men det er den risiko, man må løbe for til gengæld at [[8]] at prioritere selvstændigt og frit i sit arbejdsliv.

¹ Berlingske Business, den 11.12.2017, Opgør med lønmodtagerkulturen: Flere danskere arbejder som freelancere.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["vanskeligt", "frivilligt", "attraktivt", "trygt"],
        2: ["stabilitet", "fleksibilitet", "mobilitet", "loyalitet"],
        3: ["Derimod", "Derfor", "Samtidig", "Alligevel"],
        4: ["nødvendighed", "rettighed", "sandsynlighed", "tilfældighed"],
        5: ["desuden", "imidlertid", "omvendt", "allerførst"],
        6: ["vant til", "opmærksom på", "skeptisk over for", "imod"],
        7: ["hvis", "indtil", "når", "fordi"],
        8: ["være nødt til", "have råd til", "have tid til", "have mulighed for"]
      },
      example: { 0: "fravælger" },
      answers: { 1: "attraktivt", 2: "fleksibilitet", 3: "Samtidig", 4: "tilfældighed", 5: "desuden", 6: "opmærksom på", 7: "indtil", 8: "have mulighed for" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(biografer, arbejdskraft, freelancere);

  const X = PD2.EXAMS.pd3;
  const SESSION = "November-december 2019";

  // ---------- Skriftlig fremstilling november-december 2019 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-19n-w1", delprove: 1, real: true, year: 2019, session: SESSION,
      title: "Delprøve 1: En e-mail til dine venner (nov.-dec. 2019)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra dine venner, som har en datter, der går i gymnasiet. Datteren er blevet tilbudt at flytte i en lejlighed sammen med en veninde. Dine venner er usikre på, om det er en god ide. En del af mailen står nedenfor. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Du fortalte sidst, vi var sammen, at du ville tage på en længere rejse her til sommer. «Hvor har du besluttet at rejse hen?» " +
        "Vi ved endnu ikke, om vi vil rejse her til sommer, fordi Maria som nævnt måske skal flytte. Og hvis hun flytter, får vi travlt med at hjælpe hende. Men vi er lidt bekymrede for, om Maria er for ung til at flytte hjemmefra. Du kender hende jo rigtig godt. «Hvad tænker du?» " +
        "Der er også det med økonomien. Marias del af huslejen vil være 2.300 kr., og hun kan kun klare huslejen, hvis hun arbejder mere, end hun allerede gør nu. «Tror du, det er muligt at arbejde mere end 10 timer om ugen, når man samtidig går i gymnasiet?» " +
        "Hvis Maria flytter hjemmefra, så ser vi hende ikke mere til hverdag. «Hvordan tror du, det vil være for os – og for hende?» …\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Du fortalte sidst, vi var sammen, at du ville tage på en længere rejse her til sommer. Hvor har du besluttet at rejse hen?\n\n" +
        "Vi ved endnu ikke, om vi vil rejse her til sommer, fordi Maria som nævnt måske skal flytte. Og hvis hun flytter, får vi travlt med at hjælpe hende. Men vi er lidt bekymrede for, om Maria er for ung til at flytte hjemmefra. Du kender hende jo rigtig godt. Hvad tænker du?\n\n" +
        "Der er også det med økonomien. Marias del af huslejen vil være 2.300 kr., og hun kan kun klare huslejen, hvis hun arbejder mere, end hun allerede gør nu. Tror du, det er muligt at arbejde mere end 10 timer om ugen, når man samtidig går i gymnasiet?\n\n" +
        "Hvis Maria flytter hjemmefra, så ser vi hende ikke mere til hverdag. Hvordan tror du, det vil være for os – og for hende? …",
      underlined: [
        "Hvor har du besluttet at rejse hen?",
        "Hvad tænker du?",
        "Tror du, det er muligt at arbejde mere end 10 timer om ugen, når man samtidig går i gymnasiet?",
        "Hvordan tror du, det vil være for os – og for hende?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvor har du besluttet at rejse hen? (din rejse til sommer)",
        "Understreget: Hvad tænker du? (om Maria er for ung til at flytte hjemmefra)",
        "Understreget: Tror du, det er muligt at arbejde mere end 10 timer om ugen, når man samtidig går i gymnasiet?",
        "Understreget: Hvordan tror du, det vil være for os – og for hende?",
        "Foreslå, at I mødes."
      ],
      phrases: ["Tak for jeres mail.", "I spørger, hvor jeg har besluttet at rejse hen.", "Jeg forstår godt, at I er bekymrede for …", "Jeg tror ikke, at hun er for ung til …", "Med hensyn til økonomien tror jeg, at …", "Måske kan I …", "Det bliver sikkert mærkeligt for jer at …", "Skal vi ikke mødes og …?", "Kærlig hilsen"],
      model: `Kære Lone og Henrik

Tak for jeres mail. Det var dejligt at høre fra jer. I spørger, hvor jeg har besluttet at rejse hen. Jeg skal tre uger til Vietnam i juli, og jeg glæder mig meget til at se Hanoi og spise god vietnamesisk mad.

Jeg forstår godt, at I er bekymrede for Maria. Men jeg tror faktisk ikke, at hun er for ung til at flytte hjemmefra. Hun er moden og ansvarlig, og hun skal jo bo sammen med en god veninde.

Med hensyn til økonomien tror jeg, at det bliver svært at arbejde mere end ti timer om ugen ved siden af gymnasiet. Der er mange lektier og afleveringer. Måske kan I hjælpe hende lidt med huslejen det første år?

Det bliver sikkert mærkeligt for jer ikke at se hende hver dag, og huset bliver nok meget stille. Men I kan jo spise sammen en gang om ugen. For Maria bliver det en god erfaring at klare sig selv.

Skal vi ikke mødes til en kop kaffe i næste uge og snakke mere om det?

Kærlig hilsen
Sofie`
    },
    {
      id: "pd3-19n-w2a", delprove: 2, real: true, year: 2019, session: SESSION,
      title: "2A: Flyrejser (nov.-dec. 2019)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Flyrejser. " +
        "Diagram: Personer, der rejser ud fra større offentlige lufthavne i Danmark (millioner, stablede søjler: udenrigstrafik og indenrigstrafik). " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal, i alt / heraf indenrigstrafik): 2009 ca. 12,1 / 1,9 · 2010 ca. 13,3 / 2,4 · 2011 ca. 14,0 / 2,3 · 2012 ca. 14,2 / 1,9 · 2013 ca. 14,6 / 1,8 · 2014 ca. 15,4 / 1,9 · 2015 ca. 16,0 / 1,8 · 2016 ca. 17,3 / 1,9 · 2017 ca. 17,5 / 1,9 millioner. " +
        "Udenrigstrafikken steg altså fra ca. 10,2 millioner (2009) til ca. 15,6 millioner (2017), mens indenrigstrafikken lå på ca. 2 millioner hvert år. " +
        "Kilde: Danmarks statistik, 2018. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2019n/flyrejser-diagram.png",
      imageAlt: "Stablet søjlediagram: Personer, der rejser ud fra større offentlige lufthavne i Danmark, i millioner, 2009-2017, delt i indenrigstrafik (nederst) og udenrigstrafik (øverst). I alt ca.: 2009 12,1, 2010 13,3, 2011 14,0, 2012 14,2, 2013 14,6, 2014 15,4, 2015 16,0, 2016 17,3, 2017 17,5. Indenrigstrafikken ligger hele perioden på ca. 1,8-2,4 millioner (højest i 2010-2011), så stigningen skyldes udenrigstrafikken, der vokser fra ca. 10,2 til ca. 15,6 millioner.",
      chart: {
        title: "Personer, der rejser ud fra større offentlige lufthavne i Danmark",
        unit: "millioner", approx: true, stacked: true,
        source: "Danmarks statistik, 2018",
        series: ["Indenrigstrafik", "Udenrigstrafik"],
        groups: [
          { label: "2009", bars: [{ label: "Indenrigstrafik", value: 1.9 }, { label: "Udenrigstrafik", value: 10.2 }] },
          { label: "2010", bars: [{ label: "Indenrigstrafik", value: 2.4 }, { label: "Udenrigstrafik", value: 10.9 }] },
          { label: "2011", bars: [{ label: "Indenrigstrafik", value: 2.3 }, { label: "Udenrigstrafik", value: 11.7 }] },
          { label: "2012", bars: [{ label: "Indenrigstrafik", value: 1.9 }, { label: "Udenrigstrafik", value: 12.3 }] },
          { label: "2013", bars: [{ label: "Indenrigstrafik", value: 1.8 }, { label: "Udenrigstrafik", value: 12.8 }] },
          { label: "2014", bars: [{ label: "Indenrigstrafik", value: 1.9 }, { label: "Udenrigstrafik", value: 13.5 }] },
          { label: "2015", bars: [{ label: "Indenrigstrafik", value: 1.8 }, { label: "Udenrigstrafik", value: 14.2 }] },
          { label: "2016", bars: [{ label: "Indenrigstrafik", value: 1.9 }, { label: "Udenrigstrafik", value: 15.4 }] },
          { label: "2017", bars: [{ label: "Indenrigstrafik", value: 1.9 }, { label: "Udenrigstrafik", value: 15.6 }] }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til den udvikling, diagrammet viser.",
        "Vurder fordele og ulemper ved, at folk rejser mere end tidligere. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor mange personer der …", "Det samlede antal steg fra ca. … til ca. …", "Stigningen skyldes næsten kun …", "… lå derimod stabilt på ca. …", "Der kan være flere årsager til udviklingen.", "For det første … For det andet … Endelig …", "En fordel er, at … Den største ulempe er …", "Samlet set synes jeg, at …"],
      model: `Flere flyrejser – på godt og ondt

Diagrammet viser, hvor mange personer der rejste ud fra de større offentlige lufthavne i Danmark fra 2009 til 2017. Det samlede antal steg fra ca. 12 millioner i 2009 til ca. 17,5 millioner i 2017. Stigningen skyldes næsten kun udenrigstrafikken, som voksede fra ca. 10 til ca. 15,6 millioner. Indenrigstrafikken lå derimod stabilt på ca. 2 millioner om året.

Der kan være flere årsager til udviklingen. For det første er flybilletter blevet billigere, fordi lavprisselskaberne har fået flere ruter. For det andet fik mange danskere en bedre økonomi efter finanskrisen, så de havde råd til flere ferier. Endelig rejser flere til udlandet på grund af arbejde eller for at besøge familie. At indenrigstrafikken ikke er steget, kan hænge sammen med, at Danmark er et lille land med gode tog- og vejforbindelser.

Efter min mening har det både fordele og ulemper, at folk rejser mere end tidligere. En fordel er, at man lærer andre kulturer og sprog at kende, og det kan give mere forståelse mellem mennesker fra forskellige lande. Det er også godt for turismen og erhvervslivet, fordi det skaber arbejdspladser både i Danmark og i udlandet. Desuden er det blevet lettere at holde kontakt med familie og venner, der bor langt væk.

Den største ulempe er miljøet. Fly udleder meget CO2, og flytrafikken bidrager derfor til klimaforandringerne. Mange populære byer bliver også overfyldte med turister, og det kan gå ud over de lokale beboere, som oplever larm og stigende huslejer.

Samlet set synes jeg, at det er positivt, at flere har mulighed for at rejse. Men vi bør rejse lidt mindre og tage toget, når det er muligt, for eksempel på korte ture i Europa.`
    },
    {
      id: "pd3-19n-w2b", delprove: 2, real: true, year: 2019, session: SESSION,
      title: "2B: Gennemførelse og frafald på de videregående uddannelser (nov.-dec. 2019)",
      kind: "Prøveopgave · forslag og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Gennemførelse og frafald på de videregående uddannelser. " +
        "Hvert år begynder mange unge på en videregående uddannelse. De fleste gennemfører uddannelsen, men der er også en del, der dropper ud. Risikoen for at droppe ud er større for unge med lavt uddannede forældre. " +
        "Her er nogle forslag til, hvordan man kan få flere unge til at gennemføre en uddannelse: " +
        "• Bedre vejledning før uddannelsesvalg. • Flere undervisningstimer på uddannelsen. • Flere sociale arrangementer på uddannelsen. • Højere krav til karaktergennemsnit ved optagelse. • Brugerbetaling i uddannelsessystemet. • Mere individuel feedback fra underviserne. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Bedre vejledning før uddannelsesvalg.", "Flere undervisningstimer på uddannelsen.", "Flere sociale arrangementer på uddannelsen.", "Højere krav til karaktergennemsnit ved optagelse.", "Brugerbetaling i uddannelsessystemet.", "Mere individuel feedback fra underviserne."],
      points: [
        "Fortæl kort, hvilke udfordringer du mener, der kan være, når man starter på en uddannelse.",
        "Kommentér et eller to af forslagene fra listen.",
        "Vurder, hvorfor en større andel af unge med veluddannede forældre end unge med forældre med en kort uddannelse gennemfører en videregående uddannelse. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Når man starter på en videregående uddannelse, kan …", "Desuden er arbejdsformen anderledes end …", "På listen synes jeg, at … er et godt forslag.", "Til gengæld er jeg imod …, fordi …", "Der er flere grunde til, at …", "For det første … For det andet … For det tredje …", "Derfor mener jeg, at …"],
      model: `Flere skal gennemføre deres uddannelse

Når man starter på en videregående uddannelse, kan der være mange udfordringer. Mange unge flytter til en ny by, hvor de ikke kender nogen, og de skal både finde en bolig og nye venner. Desuden er arbejdsformen anderledes end i gymnasiet, fordi man skal læse meget selv og planlægge sin tid. Økonomien kan også være stram, hvis man kun har SU.

På listen synes jeg, at bedre vejledning før uddannelsesvalg er et godt forslag. Hvis de unge ved mere om, hvad uddannelsen indeholder, vælger de oftere rigtigt fra starten. Til gengæld er jeg imod brugerbetaling, fordi det især vil ramme de unge, der kommer fra familier med en lille indkomst.

Der er flere grunde til, at en større andel af unge med veluddannede forældre gennemfører en videregående uddannelse. For det første kan forældrene hjælpe med opgaver og eksamenslæsning, fordi de selv har prøvet at studere. De kender også de uskrevne regler på universitetet, og de kan give gode råd, når det bliver svært. For det andet har børnene ofte hørt om faglige emner hjemme ved middagsbordet, så det akademiske sprog og forventningerne ikke er nye for dem.

For det tredje har veluddannede forældre ofte en bedre økonomi. De kan måske hjælpe med en bolig eller med penge, så de unge ikke behøver at arbejde så mange timer ved siden af studiet. Unge fra hjem, hvor forældrene har en kort uddannelse, kan til gengæld føle, at de ikke passer ind, og de har måske ingen at spørge til råds.

Derfor mener jeg, at uddannelsesstederne bør gøre en særlig indsats for de studerende, der er de første i deres familie til at tage en videregående uddannelse, for eksempel med en mentor fra en ældre årgang.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål november-december 2019 ----------
  // q = the obligatory question (copied from the censor- og eksaminatorhæfte, nr. 21);
  // follow = the suggested follow-up question. The picture sheet's own captions are the captions.
  // Emne A also exists (with other model answers and pictures) in data-pd3-oral.js as pd3-o-koen-og-arbejde-2019n.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, november-december 2019)";
  const intro = emne => `Her er der to billeder, der viser nogle situationer, der handler om emnet ’${emne}’.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-19n-o-a", title: "Køn og arbejde", session: SESSION, year: 2019, real: true, credit,
      intro: intro("Køn og arbejde"),
      pictures: [
        { file: "images/pd3-2019n/koen-og-arbejde-1.jpg", caption: "Kvinder i traditionelle mandejob", credit,
          alt: "Et kontor i finansbranchen med mange skærme med aktiekurser og grafer, bl.a. skærme med \"Aktiekurser\" og \"Wall Street\". En kvinde sidder og skriver på tastaturet mellem mandlige kolleger i skjorte og slips, som taler i telefon og læser papirer.",
          words: ["finansbranchen", "aktiekurser", "en mandsdomineret arbejdsplads", "en kollega", "at handle med aktier"] },
        { file: "images/pd3-2019n/koen-og-arbejde-2.jpg", caption: "Mænd i traditionelle kvindejob", credit,
          alt: "En mandlig pædagog sidder i en sofa i en børnehave og læser højt af en billedbog for en flok børn. Rundt om ham leger og læser kvindelige pædagoger med andre børn, og et par børn bygger med klodser på gulvet.",
          words: ["en mandlig pædagog", "en børnehave", "at læse højt", "en kvindedomineret arbejdsplads", "en rollemodel"] }
      ],
      first: {
        A: {
          q: "I Danmark er der færre kvinder end mænd, der arbejder med it og finans. Hvorfor tror du, det er sådan?",
          follow: "Kan der efter din mening være nogen problemer ved, at der er færre kvinder end mænd, der arbejder med it og finans? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det især handler om traditioner og rollemodeller. Mange piger lærer tidligt, at computere og tal er noget for drenge, og derfor vælger de sjældnere en uddannelse inden for it eller økonomi. Når de ser billeder fra banker og it-firmaer, er det mest mænd i jakkesæt. Desuden har finansbranchen ry for lange arbejdsdage og en hård tone, og det kan være svært at forene med et familieliv.",
          followAnswer: "Ja, det synes jeg. Hvis det næsten kun er mænd, der udvikler nye programmer og træffer beslutninger om penge, bliver kvinders erfaringer og behov ofte overset. Branchen går også glip af mange dygtige medarbejdere, og det er et problem, fordi der mangler it-folk i Danmark. Endelig er it og finans brancher med høje lønninger, så den skæve fordeling er med til at øge lønforskellen mellem mænd og kvinder."
        },
        B: {
          q: "I Danmark er der færre mænd end kvinder, der arbejder med børn, fx som lærer eller pædagog. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for børnene, at der er færre mænd end kvinder, der er pædagoger eller lærere?",
          answer: "Jeg tror, en vigtig grund er lønnen. Pædagoger og lærere tjener ikke særlig meget, og mange mænd vælger stadig job med høj løn og status. Der er også gamle forestillinger om, at det er kvinder, der er bedst til at passe børn. Nogle mænd føler sig måske forkerte på en arbejdsplads, hvor alle kollegerne er kvinder, og nogle er bange for, at forældrene vil være mistænksomme over for dem.",
          followAnswer: "Jeg tror, børnene går glip af noget. Det er godt for børn at møde både mænd og kvinder i hverdagen, fordi de voksne ofte leger og trøster på forskellige måder. Især drenge kan have brug for en mandlig rollemodel, hvis de for eksempel bor alene med deres mor. Børnene lærer også, at omsorg er noget, både mænd og kvinder kan give. Derfor ville jeg ønske, at der var flere mandlige pædagoger i min søns børnehave."
        }
      },
      second: {
        q: "Man kunne lave regler for, hvor mange kvinder og mænd der kan optages på forskellige uddannelser, så der ikke er nogen uddannelser, hvor der næsten kun er kvinder eller kun mænd. Hvilke fordele og ulemper mener du, der ville være ved det?",
        follow: "Synes du, det er vigtigt med en mere lige fordeling af kvinder og mænd i de forskellige brancher på arbejdsmarkedet? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel kunne være, at vi fik en mere blandet fordeling på arbejdsmarkedet, så for eksempel flere mænd blev sygeplejersker og flere kvinder blev ingeniører. Det kunne bryde gamle kønsroller. En ulempe er, at nogle dygtige ansøgere ville blive afvist, bare fordi de har det forkerte køn, og det er uretfærdigt. Desuden kan man ikke tvinge folk til at interessere sig for et fag. Derfor er jeg imod faste regler, men for bedre vejledning.",
        followAnswer: "Ja, jeg synes, det er vigtigt, men det skal ske frivilligt. Når mænd og kvinder arbejder sammen, får man flere perspektiver, og ofte bliver arbejdsmiljøet bedre. Desuden er de typiske kvindefag tit dårligere betalt, så en mere lige fordeling kan mindske lønforskellen. Jeg tror, det er vigtigt at starte tidligt, for eksempel ved at vise piger og drenge mange forskellige job i skolen, så de ikke vælger uddannelse ud fra deres køn."
      },
      conclusion: ""
    },
    {
      id: "pd3-19n-o-b", title: "Kostvaner og livsstil", session: SESSION, year: 2019, real: true, credit,
      intro: intro("Kostvaner og livsstil"),
      pictures: [
        { file: "images/pd3-2019n/kostvaner-og-livsstil-1.jpg", caption: "Slik og snacks", credit,
          alt: "En biografsal (\"Sal 1\") fuld af publikum, der spiser popcorn, chips og slik og drikker sodavand, mens de venter på, at filmen begynder. Flere personer kommer ind ad døren med popcorn og drikkevarer.",
          words: ["popcorn", "chips", "sodavand", "slik", "en biografsal"] },
        { file: "images/pd3-2019n/kostvaner-og-livsstil-2.jpg", caption: "Vegansk mad", credit,
          alt: "En familie med to børn spiser sammen ved et bord med salat, bønner, nødder, knækbrød, en frugtskål og en karton havredrik.",
          words: ["vegansk mad", "havredrik", "bønner og nødder", "grøntsager", "et familiemåltid"] }
      ],
      first: {
        A: {
          q: "De fleste mennesker spiser fx slik eller chips eller drikker fx cola mellem hovedmåltiderne, selvom de godt ved, at det er usundt. Hvorfor tror du alligevel, at de gør det?",
          follow: "Kan der efter din mening være nogen problemer ved at spise fx slik eller chips eller drikke fx cola en gang imellem? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det er, fordi slik og chips smager godt og giver en hurtig følelse af glæde. Mange spiser også usundt af vane, for eksempel når de ser film eller sidder foran fjernsynet om aftenen. Når man er træt eller stresset efter arbejde, har man ikke altid overskud til at tænke på sundhed. Desuden er det let at købe, fordi der står slik og sodavand ved kassen i alle supermarkeder.",
          followAnswer: "Nej, egentlig ikke, hvis det kun er en gang imellem. Kroppen kan godt tåle lidt slik eller en cola i weekenden, når man ellers spiser sundt og bevæger sig. Det er også en del af hyggen, for eksempel i biografen eller til en fødselsdag. Problemet opstår, hvis det bliver til hver dag. Så kan man tage på i vægt og få dårlige tænder, og på lang sigt øger det risikoen for sygdomme som diabetes."
        },
        B: {
          q: "Nogle mennesker spiser ikke mad, der indeholder kød, æg eller mælkeprodukter. Hvorfor tror du, at de ikke gør det?",
          follow: "Kan der efter din mening være nogen problemer ved ikke at spise mad, der indeholder kød, æg eller mælkeprodukter? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, mange vælger at være veganere af hensyn til klimaet, fordi produktionen af kød og mælk udleder meget CO2. Andre gør det af hensyn til dyrene, fordi de ikke synes, det er i orden, at dyr lever i små stalde. Nogle har også en allergi, eller de mener, at det er sundere at spise mange grøntsager og bønner. Og så er det blevet moderne, især blandt unge i de store byer.",
          followAnswer: "Ja, det kan der godt være. Hvis man ikke planlægger sin kost, kan man mangle vigtige næringsstoffer som protein, jern, calcium og vitamin B12. Det gælder især for børn, der vokser. Derfor er det en god idé at tale med en læge eller en diætist og måske tage vitamintilskud. Det kan også være socialt besværligt, for eksempel når man er inviteret til middag hos familie eller venner, som ikke ved, hvad de skal lave."
        }
      },
      second: {
        q: "I medierne er det typisk sådan, at folk med succes er smukke og slanke og har sunde kost- og motionsvaner. Hvilke fordele og ulemper mener du, der kan være ved, at de bliver fremstillet sådan?",
        follow: "Hvordan tror du, det påvirker især de unges selvtillid, at det typisk bliver fremstillet sådan, at det er smukke og slanke mennesker, der har succes?",
        answer: "En fordel kan være, at nogle bliver inspireret til at spise sundere og dyrke mere motion, og det er godt for folkesundheden. En ulempe er, at medierne viser et urealistisk billede. Mange af billederne er redigerede, og kun få mennesker ser sådan ud i virkeligheden. Det kan give folk dårlig samvittighed og det forkerte indtryk, at succes afhænger af udseendet. Dygtighed, flid og gode ideer betyder jo meget mere.",
        followAnswer: "Jeg tror, det påvirker de unges selvtillid meget negativt. Unge bruger mange timer på sociale medier, hvor de hele tiden sammenligner sig med smukke og slanke mennesker. Mange føler, at de ikke er gode nok, og nogle begynder at slanke sig for meget eller træne hele tiden. I værste fald kan de udvikle en spiseforstyrrelse. Derfor er det vigtigt, at forældre og skoler taler med de unge om, at billederne ikke viser virkeligheden."
      },
      conclusion: ""
    },
    {
      id: "pd3-19n-o-c", title: "Studieboliger", session: SESSION, year: 2019, real: true, credit,
      intro: intro("Studieboliger"),
      pictures: [
        { file: "images/pd3-2019n/studieboliger-1.jpg", caption: "Mangel på studieboliger", credit,
          alt: "En ung kvinde sidder på et lille, rodet værelse under en højseng og kigger bekymret på en bærbar computer. Et forstørrelsesglas viser, at der står \"Venteliste til studiebolig\" på skærmen.",
          words: ["en venteliste", "en studiebolig", "et lille værelse", "en højseng", "pladsmangel"] },
        { file: "images/pd3-2019n/studieboliger-2.jpg", caption: "Forældre køber lejlighed til deres børn", credit,
          alt: "En ung pige og hendes mor kigger glade ind i et tomt værelse i en lejlighed, mens faren læser papirer sammen med en ejendomsmægler med en mappe ved hoveddøren.",
          words: ["en ejendomsmægler", "at købe en lejlighed", "en forældrekøbt lejlighed", "en fremvisning", "en investering"] }
      ],
      first: {
        A: {
          q: "Mange studerende vil gerne studere i Aarhus eller København, selvom der er lange ventelister til studieboliger i de to byer. Hvorfor tror du alligevel, de gerne vil det?",
          follow: "Hvad tror du, det betyder for, hvor og hvordan de unge bor, at der er lange ventelister til studieboliger?",
          answer: "Jeg tror, det skyldes, at der er flest uddannelser i de to byer, og nogle uddannelser findes kun der. Mange unge synes også, at storbyerne er spændende, fordi der er mange caféer, koncerter og andre unge. Desuden er der flere studiejob, og det er lettere at få kontakter til et fremtidigt arbejde. Derfor vil de hellere bo dårligt i en periode end studere i en mindre by.",
          followAnswer: "Jeg tror, det betyder, at mange unge må bo meget småt eller langt væk fra uddannelsesstedet. Nogle lejer et lille værelse hos en familie, andre bor flere sammen i en lejlighed, og nogle pendler hver dag fra forældrenes hus. Det koster både tid og penge. Nogle må også betale en høj husleje på det private marked, og så skal de arbejde mange timer ved siden af studiet, hvilket kan gå ud over deres karakterer."
        },
        B: {
          q: "Mange forældre køber en lejlighed til deres børn, når børnene starter på en uddannelse. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for de unges studieliv, at de kan bo i egen lejlighed?",
          answer: "Jeg tror, mange forældre gør det, fordi det er svært for de unge at finde en bolig i de store byer. På den måde slipper deres børn for lange ventelister og høje huslejer. Desuden ser mange forældre det som en god investering, fordi lejlighedspriserne ofte stiger. Når barnet er færdigt med uddannelsen, kan de sælge lejligheden igen og måske tjene penge på den. Nogle vil også bare gerne vide, at deres barn bor trygt.",
          followAnswer: "Jeg tror, det kan betyde, at de unge får mere ro til at læse, fordi de ikke skal dele køkken og bad med mange andre. De har heller ikke så store økonomiske bekymringer. Til gengæld kan de gå glip af det sociale liv, som man har på et kollegium, hvor man hurtigt lærer andre studerende at kende. Nogle kan derfor føle sig ensomme, især i starten af studiet, hvis de bor alene i en lejlighed."
        }
      },
      second: {
        q: "I de store universitetsbyer kan man vælge at bygge flere studieboliger til studerende i stedet for fx boliger til ældre. Hvilke fordele og ulemper mener du, der kan være ved det for de store universitetsbyer?",
        follow: "Synes du, at det er studiebyernes ansvar at sørge for, at der er billige studieboliger og kollegier til alle studerende? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at byerne kan tiltrække flere unge, og det er godt for både uddannelsesstederne og erhvervslivet, der har brug for veluddannet arbejdskraft. Unge giver også liv i byen. En ulempe er, at der også bliver flere ældre i fremtiden, og de har brug for boliger, der er indrettet til dem, for eksempel med elevator. Hvis man kun bygger til studerende, kan de ældre blive nødt til at flytte væk fra deres familie.",
        followAnswer: "Delvis, synes jeg. Byerne har fordel af de studerende, fordi mange bliver boende og betaler skat, når de er færdige. Derfor bør kommunerne hjælpe med grunde og planlægning, så der bliver bygget billige kollegier. Men det kan ikke kun være byernes ansvar. Staten bestemmer, hvor mange studiepladser der skal være, og derfor bør den også betale en del. Desuden kan de studerende selv vælge at bo lidt uden for byen."
      },
      conclusion: ""
    }
  );
})();
