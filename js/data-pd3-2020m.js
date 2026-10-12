// Prøve i Dansk 3, maj-juni 2020 – læseforståelse, transcribed from the exam papers
// (Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Nationalmuseet" nr. 14;
// Læseforståelse 2: opgavehæfte nr. 17 and teksthæfte nr. 16).
// The answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur passed on to us (delprøve 1 items 11 and 12, delprøve 2B item 6 = A/B).
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures from the tekstsamling are left out (their captions are not needed for any answer).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points
// (omregningstabel sommer 2020: 37-35 = 12, 34-31 = 10, 30-25 = 7, 24-21 = 4, 20-19 = 02, 18-10 = 00, 9-0 = -3).
// The app scores every question as 1, so 2A counts half as much here as at the exam.
//
// Also: skriftlig fremstilling (produktionsnr. 18) and mundtlig kommunikation delprøve 2
// (picture sheets, illustrations by Niels Roland, cropped into images/pd3-2020m/,
// and the censor- og eksaminatorhæfte for the oral exam, produktionsnr. 21, which gives the
// examiner's opening line, the obligatory questions and the (suggested) follow-up questions; like 2021
// it has no lead-in sentences before the obligatory questions, except Emne B A, which is two sentences).
// Task wording, the friend's e-mail, the questions and the chart labels are copied from the papers.
// The chart values are read off the bar chart (they sit exactly on whole percentages).
// Forcensur on skriftlig fremstilling 2A: point 2 asks about "den udvikling, diagrammet viser", but the
// chart shows no development; reading a development into it must not count against the candidate.
// All model answers are our own (the papers have none).
// Emne C "Arbejde og sprog" also exists in js/data-pd3-oral.js (pd3-o-arbejde-og-sprog-2020m); the app
// shows one per title + year in the topic list.

(function () {
  const G = "PD3 maj-juni 2020";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const museet = {
    id: "pd3-20m-1", group: G, real: true,
    title: "Delprøve 1 – Nationalmuseet",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Nationalmuseet. Brug indholdsfortegnelsen. Svar præcist og så kort som muligt på spørgsmålene på baggrund af informationerne i tekstsamlingen. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Nationalmuseet før og nu
   Nationalmuseets historie … 3
   Nationalmuseet i dag … 3
Tre afdelinger af Nationalmuseet
   Nationalmuseet i København … 5
   Musikmuseet … 6
   Kongernes Jelling … 7
Nationalmuseets tilbud om undervisning
   Pædagogisk profil … 8
   Forløb for grundskolen … 8
   Forløb for sprogskoler … 9
   Undervisning på Frilandsmuseet … 9
Fire besøgende fortæller … 10

**NATIONALMUSEET FØR OG NU**

**Nationalmuseets historie**

Nationalmuseet er Danmarks største kulturhistoriske museum med hoveddomicil i Prinsens Palæ i København. Nationalmuseet er et universalmuseum. Museets arbejdsopgaver er både indsamling, opbevaring, forskning og formidling.

Genstande og billeder i samlingerne og udstillingerne kommer fra hele verden og er fra mange perioder. De kulturhistoriske samlinger, der i dag indgår i Nationalmuseet, har rødder i Det Kongelige Kunstkammer, der blev grundlagt omkring 1650 af Frederik 3. Dette blev i 1824 omdannet til Det Kongelige Kunstmuseum. Andre dele af samlingerne har deres oprindelse i det museum, som i 1807 blev grundlagt af Den Kongelige Kommission til Oldsagers Opbevaring. I 1800-tallet var der en stærkt voksende interesse for den nationale historie, og samlingerne voksede betydeligt. Efter Grundlovens indførelse i 1849 besluttede Rigsdagen, at de tidligere kongelige samlinger, som nu var overgået til staten, skulle samles under ét tag. Det skete i Prinsens Palæ, et rokokopalæ bygget i 1744. I 1867 kom Den Kongelige Mønt- og Medaillesamling til, og i forbindelse med en omorganisering af samlingerne fik de i 1892 navnet Nationalmuseet.

**Gratis adgang – eller entré?**
Med ideen om et Nationalmuseum fulgte håbet om, at den uvidende befolkning kunne løftes op på et højere moralsk trin og hjælpes til en bedre adfærd. Museet skulle således både kunne danne, uddanne, oplyse og opdrage. Derfor var det fra begyndelsen en central tanke, at museet skulle være offentligt, og at der skulle være fri adgang til museet.

Frem til 1991 var der gratis adgang til statslige museer og dermed også Nationalmuseet. Herefter blev der indført entré, det medførte et fald i antallet af publikummer. I 2003 kunne Nationalmuseet dog give gratis adgang i to måneder, da det fik doneret penge fra en arv. Effekten af den gratis adgang var en betydelig stigning i antallet af gæster. Museet lukkede 83.238 mennesker ind på de to måneder. I 2005 blev det besluttet at genindføre gratis adgang til statslige museer fra 1. januar 2006. Fra sommeren 2016 genindførte Nationalmuseet og Statens Museum for Kunst entrébetaling som konsekvens af sparekrav.

**Nationalmuseet i dag**

På Nationalmuseet er der i dag både udstillet genstande, der har været i samlingerne fra begyndelsen og genstande, der er kommet til som nyere fund. Der er fund, der stammer fra Danmarks oldtid, og der er udstillet genstande fra nyere tid. Således kan man blandt andet både se den berømte Solvognen, et enestående bronzealderfund i bronze og guld, der forestiller en hest, der trækker en solskive, Huldremosekvinden, et moselig, der stammer fra ca. 95 e.Kr., samt nutidige ting som fx en blå hashbod fra Christiania.

Museet blev i 1970’erne kendt for sin pædagogiske udstillingsform, herunder panoramaer og modeller af Vedbæk Fjord i stenalderen og nutiden, en jernalderlandsby, Trelleborg-anlægget, Dannevirke med flere. Udstillingerne i dag udgøres både af permanente udstillinger og af skiftende særudstillinger.

Nationalmuseet har i dag en lang række afdelinger rundt omkring i hele landet, herunder både museer og slotte, blandt andre: Frihedsmuseet, Frilandsmuseet, Musikmuseet, Kongernes Jelling og Frøslevlejrens Museum.

Nationalmuseet står i dag også for en række salg og ydelser, blandt andet undervisning, rundvisninger, udlejning af lokaler og fotosalg.

**Salg og ydelser**

**Leje af lokaler**
Man kan leje lokaler på Nationalmuseet og dermed holde fx bryllup eller andre former for arrangementer i utraditionelle lokaler. Hvis man holder bryllup, kan middagen tillige serveres i den smukke og historiske Festsalen. Man kan også leje Nationalmuseets forhal. Forhallen på 450 m² er imponerende med sit smukke glastag og sine lyse omgivelser, og forhallen kan bruges til både middage, fester og receptioner. Den kan benyttes tirsdag-søndag tidligst fra kl. 17.00 samt mandage hele dagen. Forhallen kan rumme 400 siddende gæster, hvis middagen serveres ved lange borde. Serveringen kan foregå fra kl. 18.30, men velkomstdrinks kan serveres tidligere et andet sted i huset, fx i en af museets udstillinger, mens gæsterne venter.

Forhallen kan indrettes efter lejernes ønske og behov.

**Fotosalg**
Nationalmuseet tilbyder også fotosalg til både kommercielle og non-profit formål. Nationalmuseets fotosalg omfatter både arkivfotos og nyoptagelser af museets genstande.

Ved fotobestilling af museets genstande og arkivalier, som endnu ikke er tilgængeliggjort, opkræves et beløb for produktion af fotografierne. Ved digitaliseringen bliver fotos samtidig tilgængelige for alle på fotoarkivet Samlinger online. Som bestiller får man således anvendelsesret, men ikke eneret til brug af materialet.

I online-fotoarkivet kan man gå på opdagelse i museets mange fotografier. Der er mere end 80.000 fotografier, og flere kan downloades i høj opløsning hjemmefra helt uden betaling. Mange af museets fotos er tilgængelige under en særlig licens, der tillader, at man kan bearbejde, ændre og udbygge billedet, også til kommercielle formål, så længe museet og fotografen krediteres. Derudover skal det også fremgå, at man har modificeret fotoet fra originalen.

**TRE AFDELINGER AF NATIONALMUSEET**

**Nationalmuseet i København**

**Profil**
Nationalmuseet i København har til huse i Prinsens Palæ ved Frederiksholms Kanal. Her findes de ældste og største samlinger, der hører under Nationalmuseet.

Udstillingerne i København tager de besøgende med igennem hele Danmarks historie. Her møder man dyrebare genstande og kulturskatte og får danskernes fascinerende fortællinger fra oldtiden og op til i dag. Man kan komme med på guidede ture, hvor man både kan opleve museets ikoniske highlights og møde danskerne og deres værdier.

**Eksempel på en udstilling: ’Danmarkshistorier 1660-2000’**
Museets kronologiske opstilling af danske samlinger fra 2000 f.Kr. og op til i dag afsluttes med perioden 1660-2000. Perioden er præget af kontinuitet såvel som af brud.

Gennem mere end 5.000 genstande, fordelt på 37 rum, fortæller udstillingen om disse 340 års danmarkshistorie. Landet har ændret sig markant i denne periode fra at være en europæisk stormagt, der kontrollerede indsejlingen til Østersøen, til et lille land, der må finde sin plads som alliancepartner blandt andre lande.

Danmarks historie er ikke én lang fortælling, men mange. Deraf også udstillingens titel i flertal: Danmarkshistorier.

**Eksempler på genstande af ’Enestående National Betydning’**
Nationalmuseet har ca. 200.000 genstande, der har opnået betegnelsen ENB. Det står for ’Enestående National Betydning’, det vil sige, at genstanden er unik – det kan handle om den enkelte genstands særlige historie, eller det kan være på grund af dens videnskabelige betydning. Et par eksempler:

Hindsgavl-dolken er det smukkeste eksempel på, hvor dygtige flintsmedene var i slutningen af stenalderen. Den er lavet omkring 1800 år f.Kr. på et tidspunkt, hvor dolke og andre våben af bronze var ved at vinde frem. Men de nordiske flintsmede tog konkurrencen op og ydede deres ypperste. Hindsgavl-dolkens udtrukne greb og hvælvede skuldre er tydeligt inspireret af samtidige bronzedolke fra Centraleuropa.

Egtvedpigen er et berømt gravfund fra bronzealderen. I 1370 f.kr. blev hun begravet i en egekiste og sat i en gravhøj. Egtvedpigen så igen dagens lys, da hendes grav blev udgravet i 1921 – efter næsten 3500 år. Egtvedpigen, der i dag ligger på Nationalmuseet, omtales som et af danmarkshistoriens bedst bevarede bronzealderfund. Klædedragten er meget velbevaret, så det er et unikt fund, selvom pigens hud og kropsdele er helt borte.

**Musikmuseet**

**Profil**
Musikmuseet blev grundlagt i 1898, men dets samling går meget længere tilbage i historien. Samlingen omfatter musikinstrumenter fra Europa, Asien og Afrika fra bronzealderen og frem til vor tid.

**Musikmuseets udstilling**
Musikmuseets enestående samling af musikinstrumenter præsenteres nu i helt nyindrettede omgivelser i de smukke lokaler på Rosenørns Allé på Frederiksberg.

I udstillingen kan man følge to spor: Det danske spor, som præsenterer to bronzelurer og fortsætter med spillemandsmusikken, stadsmusikanter, Guldalderens danske komponister etc., eller det europæiske spor, som tilbyder en kronologisk gennemgang af musikkens mange stilarter – inden begge sporene mødes i globaliseringen i det 20. århundrede. Eller man kan vælge at udforske perioderne på tværs af sporene.

I Klangrummet får de besøgende lejlighed til selv at afprøve en række instrumenter – her kan gæster i alle aldre udfolde sig på pauker, el-trommer, trompeter, xylofoner og mange andre instrumenter. Museet udskifter jævnligt instrumenterne, så gæster, der kommer igen, kan få nye oplevelser.

Pragtrummet er et særligt afsnit, hvor rariteter fra flere århundreder kan opleves, og den bageste ende af udstillingslokalet er reserveret til skiftende særudstillinger fra lande og regioner udenfor Europa – i første omgang fra Kina, Japan og Korea.

**Musikmuseets bibliotek**
Museet rummer et omfattende bibliotek og arkiv, der bl.a. kan bruges til at få mere viden om museets samlinger og fagområde. Musikmuseets bogsamling rummer værker fra 1600-tallet og helt frem til den nyeste litteratur – f.eks. en omfattende samling af bøger om el-guitar og el-bas anskaffet i 2001 i forbindelse med museets særudstilling ’STRØM TIL’.

Bibliotekets hovedområder er litteratur om instrumenter og om dansk musikliv, men også en række andre emner inden for musik og kultur i bredere forstand er repræsenteret. Bøgerne kan ses og læses på biblioteket, men kan ikke hjemlånes. De kan dog bestilles til et andet biblioteks læsesal.

Musikmuseets samling af tidsskrifter dækker hovedsageligt emner inden for musikinstrumenter og dansk/nordisk musikliv og -historie, men omfatter også titler af bredere musikalsk eller museumsfaglig karakter. Tidsskrifterne udlånes normalt ikke, men kan ses og læses på biblioteket. Bestillinger på enkelte artikler ekspederes ved fotokopi eller mail.

**Kongernes Jelling**

**Profil**
Kongernes Jelling ligger i Jelling nordvest for Vejle. Kongernes Jelling er et museum og oplevelsescenter tæt ved Jellingmonumenterne. Oplevelsescentret byder på en unik og supermoderne digital sanseoplevelse, der handler om vikingernes liv og levned. Det fortæller historien om tiden, da Jelling var centrum i den danske historie, og Gorm den Gamle og Harald Blåtand levede. Museet viser, hvordan Jellingstenene formentlig så ud oprindeligt og præsenterer ny viden om vikingetiden.

I 1994 blev monumenterne optaget på UNESCOs liste over verdens særligt bevaringsværdige historiske mindesmærker – Verdensarven. UNESCO-monumenterne omfatter de to runesten foran kirken, selve Jelling Kirke og de to store høje nord og syd herfor. Under dem ligger bl.a. resterne af en stor skibssætning¹.

Fra 1. januar 2007 overgik driften af Kongernes Jelling til Nationalmuseet, og nye udstillinger fra Nationalmuseet kommer indimellem til Kongernes Jelling.

**Monumentområdet**
Monumentområdet har altid åbent – der er skilte og foldere på området. Her har højene, de to runesten og kirken været synlige i mere end 1000 år.

Kongerne Gorm den Gamle og Harald Blåtand rejste deres to runesten med runer og billeder og byggede monumenterne fra omkring år 950 til år 970. Museet har været nødt til at beskytte stenene mod vind og vejr. I 2011 valgte man således at sætte montrer omkring dem. Om aftenen kan der tændes lys i montrerne, og på den måde kommer runestenene til at fremstå tydeligt, så runer og billeder også kan ses på denne tid af døgnet.

Arkæologiske undersøgelser i perioden fra 2006 til 2013 har vist, at monumenterne i Jelling har været omgivet af en 1440 meter lang palisade, der har indhegnet et område på størrelse med 20 fodboldbaner.

**Rundvisninger og foredrag**
Rundvisninger foregår udendørs i monumentområdet på vandring mellem høje, runesten, skibssætning og palisade med fortællinger fra Jellings fantastiske fortid. En rundvisning varer normalt 45 minutter og koster 800 kr., men der tilbydes også rundvisninger på 1½ time (dobbelt pris). Priserne gælder for grupper på op til 25-30 personer.

For at give alle besøgende den bedste oplevelse tilbydes normalt ikke rundvisninger i oplevelsescentret i normal åbningstid. I visse tilfælde kan der dog vises rundt i oplevelsescentret for grupper på op til 15 personer. I oplevelsescentret tilbydes foredrag med billeder og fortællinger svarende til turen rundt i monumentområdet for op til 90 personer ad gangen. Prisen er fra 1/1-2019 1.000 kr. for en gruppe på op til 30 personer, 1.500 kr. for grupper på 30-60 personer og 1.900 kr. for 60-90 personer, og varigheden er 45 min. Særligt interesserede kan også bestille et foredrag på 1½ time (dobbelt pris).

Rundvisning i Jelling Kirke kan bestilles til kl. 13.00 hver dag. Prisen er 30 kr./person (fra 10 år). Varighed 30 minutter. Mindste betalende deltagerantal er 10.

¹ Mindesmærke formet som et skib.

**NATIONALMUSEETS TILBUD OM UNDERVISNING**

**Pædagogisk profil**
Nationalmuseet er Danmarks største kulturhistoriske museum og eksterne læringsmiljø, og det er ambitionen at give elever rig mulighed for at placere sig selv i historien. 20 museer under Nationalmuseets paraply kan tilbyde undervisning til ca. 100.000 børn og unge over hele landet fra børnehaver, grundskoler, ungdomsuddannelser til sprogskoler.

Museet ønsker at være et alternativ til klasserummet og skabe rammerne for sociale oplevelser og fælles referencer i nye læringsrum. Gennem dialog og aktiv deltagelse skal undervisningen styrke elevernes samarbejdsevne. Undervisningen på Nationalmuseet skal også styrke elevernes evne til at argumentere og diskutere. Eleverne møder fortiden gennem nogle af Danmarkshistoriens og verdenskulturens mest spektakulære genstande og autentiske miljøer. Gennem mødet med disse får eleverne forståelse for, at historien vil dem noget, og at fortiden giver muligheder for at forstå fremtiden.

**Forløb for grundskolen**

**Oldtiden – Highlights**
Få en introduktion til Danmarks Oldtid gennem de mest spektakulære fund. Hør om stenalderen, bronzealderen, jernalderen og vikingetiden gennem bl.a. Uroksen, Solvognen, Egtvedpigens dragt, moseliget fra Huldremose og Guldhornene. Forløbet giver eleverne et kronologisk overblik.
Målgruppe: 3.-9. klasse · Varighed: 1 time · Fag: Historie · Max antal: 30 elever · Pris: 500 kr.

**Solvognen og Egtvedpigen**
I bronzealderens landbrugssamfund var man afhængig af, at årstiderne skiftede, og at solen gik op og ned. Solen var den centrale guddom i bronzealderen, ikke kun i Danmark, men også i Europa og Egypten. Bronzealderen er også Egtvedpigens tid, og tiden med de store kultiske fester og kostbare moseofringer. Undervisningen foregår dialogisk og har flere aktiverende elementer. Eleverne kan prøve kopier af dragter og redskaber samt røre originale genstande.
Målgruppe: 3.-6. klasse · Varighed: 1 time · Fag: Historie · Max antal: 30 elever · Pris: 500 kr.

**Da jægeren blev bonde**
For 6.000 år siden skete der en revolution i Danmark! Jægerne blev bønder. Jægerne skiftede telt og spyd ud med langhus og ard, men hvorfor? Jægerne havde kontakt med de tyske bønder i 1.000 år, før de tog den nye kultur til sig. Vi ser på den sidste del af jægerstenalderen, Ertebøllekulturen, og på de første bønders ”ankomst” til Danmark. Den nye livsstil påvirkede alt fra det, man troede på, til landskabets udseende. Kontakten til resten af Europa prægede hele bondestenalderen. Eleverne får mulighed for at røre originale genstande og prøve kopier af redskaber.
Målgruppe: 3.-6. klasse · Varighed: 1 time · Fag: Historie · Max antal: 30 elever · Pris: 500 kr.

**Forløb for sprogskoler**

**Demokrati og stemmeret – fra enevælden til i dag**
Hvordan levede danskerne under enevælden? Hvornår fik kvinder stemmeret? Har fattige altid kunnet stemme?

I dette forløb undersøger vi, hvordan gradvist flere grupper i samfundet opnåede stemmeret, og de kampe, der udkæmpedes undervejs. I undervisningsforløbet taler vi ikke bare om retten til at stemme, men også til at bruge sin stemme som medborger.

Undervisningen er tilrettelagt efter, hvor meget dansk målgruppen mestrer, og kursisterne inddrages og deltager aktivt undervejs i forløbet. Forløbet har specielt fokus på at give kursisterne indsigt i demokratiets udvikling. Der arbejdes selvfølgelig også med at udvikle kursisternes sprog.
Fag: Danskuddannelse · Klassetrin: DU2, modul 4-6 og DU3, modul 3 · Varighed: 1½ time · Max. antal: 15 kursister · Pris: 500 kr.

**Undervisning på Frilandsmuseet**
På Frilandsmuseet kan eleverne få noget at vide om det levede liv, som det har formet sig gennem 300 år. De kan prøve at karte, lave mad på brændekomfuret eller møde spændende skæbner og høre historier fortalt gennem teater eller omvisninger. På Frilandsmuseet kan eleverne få en helt særlig oplevelse af tid og rum, når undervisningen foregår mellem og i de gamle huse og gårde, fx i Stenstruphuset.

Undervisningen på Frilandsmuseet foregår i museets sæson fra den 1. maj til sidste søndag i efterårsferien. Museet rummer helt særlige muligheder for at komme tæt på fortiden, når man står på de toppede brosten eller må dukke hovedet for at komme ind i de lavloftede stuer.

På Frilandsmuseet foregår undervisningen i et helt traditionelt forløb, enten i form af en omvisning eller et besøg i Stenstruphuset, hvor undervisningen foregår som værkstedsaktiviteter. For de lidt ældre elever kan der blive tændt op i brændekomfuret, så de kan tilberede et helt måltid. Og vil man i teatret, er der skoleforestillinger.

**FIRE BESØGENDE FORTÆLLER**

**Spændende og brugervenligt**
Nationalmuseet laver i disse år nye udstillinger, hvor publikum kommer mere i fokus. De traditionelle udstillinger med genstande i montrer bliver fx suppleret af aktiviteter, der inddrager publikum. Min kone og jeg var der med børn og børnebørn, og vi var alle meget begejstrede. I Børnenes museum kunne de mindste fx lege, at de sejlede i et vikingeskib. På museet var der også en skattejagt, som hele familien deltog i, og det syntes vi alle var sjovt at prøve, så den vil vi gerne rose Nationalmuseet for; familien var underholdt, samtidig med at vi lærte noget om Danmarks fortid.

Vi vil også gerne rose restauranten Smör for de spændende nyfortolkninger af danske retter, ikke mindst smørrebrød.
Af Ib F.

**Et internationalt museum**
I England, hvor jeg kommer fra, er vi vant til store museer og udstillinger om imperiets historie. Jeg har også besøgt mange andre historiske museer rundt omkring i verden, og jeg synes, at Nationalmuseet i København til fulde kan måle sig med de store internationale museer. Samlingerne og udstillingerne har høj kvalitet. Der er selvfølgelig mest om Danmarks historie, men med udstillingen om Danmarks kolonitid og de store etnografiske samlinger fra hele verden, er der også et internationalt fokus. Jeg var der for at se udstillingen med arkæologiske fund fra vikingetiden. Før besøget på Nationalmuseet havde jeg kun set genstandene i bøger, så derfor var det spændende at se dem udstillet. Udstillingen suppleres af gode tekster om vikingernes kontakt med den internationale verden for over 1000 år siden.
Af James Milner

**Med sprogskolen på Nationalmuseet**
Jeg er sproglærer og havde min klasse fra sprogskolen med på et undervisningsforløb om demokrati og stemmeret i Danmark. Vi havde forinden arbejdet med dette tema i klassen, og det var simpelthen prikken over i’et at få det hele forklaret af en af Nationalmuseets eksperter. Vi hørte om forudsætninger for det demokrati, vi har i dag, og så en masse spændende dele af udstillingerne. Temperaturen på museet er meget høj, så man skal huske ikke at komme i for varm påklædning.
Af Hanne S.

**Masser af udstillinger – ikke muligt at se alt**
Min kæreste og jeg er imponerede over, hvor mange forskellige udstillinger der faktisk er på Nationalmuseet i København. Det er simpelthen ikke muligt at se alt og at gå i detaljer med det hele. Det er nok en god ide at vælge et par af udstillingerne ud og gå i dybden med disse og så se museet lidt efter lidt, fordelt på flere besøg.

Vi havde sat en eftermiddag af, og vi vandrede rundt i timevis. Vi startede øverst med udstillinger fra Mellemøsten og Asien og gik så til etagen under med udstillinger fra Afrika og Grønland, så da vi endelig nåede til udstillingerne fra Danmark, var vi efterhånden lidt trætte, og derfor havde vi ikke energi til at se hele Danmarks historie denne gang. Vi ville koncentrere os om det ældste, men vi nåede ikke at se andet end runestenene i en del af udstillingen om Danmarks oldtid, fordi det blev tid til, at museet skulle lukke. Udstillingen var i øvrigt under ombygning, og derfor var en del af den lukket. Jeg kan kun sige, at tiden fløj afsted, og vi kommer tilbage for at se resten!
Af Dorte P.

Kilder: Fotos: Nationalmuseet. Teksterne er bearbejdede versioner af tekst og informationer hentet fra følgende hjemmesider den 29. august 2019: https://natmus.dk/, https://da.wikipedia.org/wiki/Nationalmuseet, http://denstoredanske.dk/Kunst_og_kultur/Museumsv%C3%A6sen/Historiske_museer_og_samlinger/Nationalmuseet`,
    questions: [
      // Nationalmuseets tilbud om undervisning
      { type: "short", n: 1, q: "(Nationalmuseets tilbud om undervisning) I forløbet ’Demokrati og stemmeret’ er der fokus på at give kursister viden om demokratiet og dets udvikling. Hvad er der ud over det samfundsmæssige indhold også fokus på?",
        accept: uniq([
          ...combos(["", "at udvikle", "udvikle", "udvikling af", "at udvikle kursisternes", "udvikle kursisternes", "udvikling af kursisternes", "kursisternes", "at udvikle deres", "deres", "på at udvikle kursisternes", "på kursisternes"], ["sprog", "sproget"]),
          ...combos(["", "kursisternes", "deres"], ["sproglige udvikling", "sprogudvikling"]), "sproglig udvikling"
        ]) },
      { type: "short", n: 2, q: "(Nationalmuseets tilbud om undervisning) Får elever fra grundskolen mulighed for at prøve kopier af redskaber i forløbet ’Da jægeren blev bonde’? Svar ’ja’ eller ’nej’.",
        accept: ["ja", "ja det gør de", "ja det får de", "ja de får", "ja de gør"] },
      { type: "short", n: 3, q: "(Nationalmuseets tilbud om undervisning) Ifølge Nationalmuseets pædagogiske profil skal undervisningen styrke elevernes evne til at argumentere og diskutere. Hvilken evne skal undervisningen også styrke hos eleverne?",
        accept: uniq([
          ...combos(["", "elevernes", "deres", "evnen til", "deres evne til"], ["samarbejdsevne", "samarbejdsevnen", "samarbejdsevner", "samarbejdsevnerne"]),
          ...combos(["", "elevernes", "deres", "den"], ["evne til at samarbejde", "evnen til at samarbejde"]),
          "at samarbejde", "samarbejde", "at kunne samarbejde"
        ]).sort((a, b) => (b === "samarbejdsevnen") - (a === "samarbejdsevnen")) },
      { type: "short", n: 4, q: "(Nationalmuseets tilbud om undervisning) Hvordan foregår undervisningen på Frilandsmuseet for både unge og ældre elever, hvis man besøger Stenstruphuset?",
        accept: uniq(combos(["", "som", "den foregår som", "undervisningen foregår som", "i form af", "gennem", "med"], ["værkstedsaktiviteter", "værkstedsaktivitet", "værksteds aktiviteter", "værkstedsaktiviteter i stenstruphuset"])) },
      // Nationalmuseet før og nu
      { type: "short", n: 5, q: "(Nationalmuseet før og nu) I 2003 var der gratis adgang til Nationalmuseet i to måneder. Fra hvornår var der igen gratis adgang?",
        accept: uniq(combos(["", "fra", "i", "fra 1. januar", "fra den 1. januar", "1. januar", "den 1. januar", "fra 1/1", "1/1", "fra januar", "januar"], ["2006"], ["", "til sommeren 2016", "til sommer 2016", "til 2016", "og frem til sommeren 2016"])) },
      { type: "short", n: 6, q: "(Nationalmuseet før og nu) Hvornår kan man tidligst få serveret middag, hvis man lejer Nationalmuseets forhal?",
        accept: uniq(combos(["", "kl.", "klokken", "fra kl.", "fra klokken", "tidligst kl.", "tidligst klokken", "fra", "tidligst"], ["18.30", "18:30", "18 30", "halv syv", "halv syv om aftenen"])) },
      // Tre afdelinger af Nationalmuseet
      { type: "short", n: 7, q: "(Tre afdelinger af Nationalmuseet) På Nationalmuseet i København findes udstillingen ’Danmarkshistorier 1660-2000’. Hvorfor har udstillingen en titel i flertal?",
        accept: uniq([
          ...combos(["", "fordi", "da"], ["danmarks historie er", "historien er", "den er", "det er", ""], ["ikke én lang fortælling", "ikke en lang fortælling", "ikke én fortælling", "ikke en fortælling"], ["", "men mange", "men mange fortællinger", "men flere"]),
          ...combos(["", "fordi", "da"], ["der er mange danmarkshistorier", "der er flere danmarkshistorier", "der er mange fortællinger", "der er mange historier", "danmarks historie er mange fortællinger", "danmarks historie består af mange fortællinger", "danmarks historie er mange historier"])
        ]).sort((a, b) => (b === "danmarks historie er ikke én lang fortælling men mange") - (a === "danmarks historie er ikke én lang fortælling men mange")) },
      { type: "short", n: 8, q: "(Tre afdelinger af Nationalmuseet) Egtvedpigen er et eksempel på en genstand af ’Enestående National Betydning’ og et af danmarkshistoriens bedst bevarede bronzealderfund. Hvorfor er Egtvedpigen et unikt fund?",
        accept: uniq([
          ...combos(["", "fordi", "da"], ["klædedragten", "hendes klædedragt", "klædedragten", "dragten", "hendes dragt", "tøjet", "hendes tøj"], ["er velbevaret", "er meget velbevaret", "er godt bevaret", "er meget godt bevaret", "er bevaret"]),
          ...combos(["på grund af", "pga", "pga.", "på grund af den velbevarede", "fordi hun har en velbevaret"], ["klædedragten", "hendes klædedragt", "dragten", "klædedragt"]),
          "klædedragten", "den velbevarede klædedragt", "en velbevaret klædedragt"
        ]) },
      { type: "short", n: 9, q: "(Tre afdelinger af Nationalmuseet) I Kongernes Jelling kan grupper købe forskellige rundvisninger. Hvor mange personer kan der højst være i gruppen ved en rundvisning i oplevelsescentret?",
        accept: uniq(combos(["", "op til", "højst", "maks", "max", "maksimalt", "der kan højst være"], ["15", "femten"], ["", "personer", "pers", "deltagere", "personer i gruppen"])) },
      { type: "short", n: 10, q: "(Tre afdelinger af Nationalmuseet) I Kongernes Jelling står runestenene på monumentområdet. Hvorfor er stenene sat i montrer?",
        accept: uniq([
          ...combos(["", "for at", "fordi man vil", "fordi museet vil", "fordi man skal", "man skal", "museet har været nødt til at", "fordi museet har været nødt til at"], ["beskytte dem", "beskytte stenene", "beskytte runestenene", "beskytte"], ["", "mod vind og vejr", "mod vejr og vind", "mod vejret"]),
          ...combos(["på grund af", "pga", "pga.", "fordi"], ["vejret", "vind og vejr", "vinden og vejret", "vejr og vind"]),
          ...combos(["", "som"], ["beskyttelse", "beskyttelse mod vind og vejr", "beskyttelse mod vejret"])
        ]) },
      { type: "short", n: 11, q: "(Tre afdelinger af Nationalmuseet) Bøger fra Musikmuseets bibliotek kan læses på museet. Hvor har man også mulighed for at læse bøgerne?",
        accept: uniq([
          ...combos(["", "på", "på et", "i", "i et", "et", "til et", "de kan bestilles til et", "man kan bestille dem til et", "på læsesalen på et"], ["andet bibliotek", "andet biblioteks læsesal", "andet bibliotekes læsesal", "andet bibliotek s læsesal"]),
          ...combos(["", "på", "på en", "i", "i en", "en", "til en", "de kan bestilles til en", "man kan bestille dem til en", "bestilles til en"], ["anden læsesal"]),
          "andre biblioteker", "på andre biblioteker", "andre bibliotekers læsesale", "på andre bibliotekers læsesal"
        ]) },
      { type: "short", n: 12, q: "(Tre afdelinger af Nationalmuseet) I Musikmuseets udstilling bliver instrumenterne i Klangrummet jævnligt udskiftet. Af hensyn til hvilke gæster bliver de det?",
        accept: uniq([
          ...combos(["", "af hensyn til", "for", "de"], ["gæster", "", "gæsterne", "de gæster", "besøgende", "de besøgende", "dem"], ["der kommer igen", "som kommer igen", "der kommer tilbage", "som kommer tilbage", "der kommer flere gange", "som kommer flere gange"], ["", "så de kan få nye oplevelser"]),
          "tilbagevendende gæster", "gæster der kommer igen og igen", "genbesøgende", "genbesøgende gæster", "faste gæster"
        ]) },
      // Fire besøgende fortæller
      { type: "short", n: 13, q: "(Fire besøgende fortæller) Ib F. var på Nationalmuseet med hele sin familie. Hvilken aktivitet, som de alle deltog i, roser han Nationalmuseet for?",
        accept: uniq(combos(["", "en", "for en", "for", "han roser", "han roser en", "de deltog i en"], ["skattejagt", "skattejagten", "skatte jagt"])) },
      { type: "short", n: 14, q: "(Fire besøgende fortæller) Dorte P. og hendes kæreste så ikke alle udstillinger om Danmarks historie. Hvorfor var en del af udstillingen om Danmarks oldtid lukket under deres besøg?",
        accept: uniq([
          ...combos(["", "på grund af", "pga", "pga.", "fordi den var under", "den var under", "fordi udstillingen var under", "udstillingen var under", "fordi der var", "der var", "den er under", "under"], ["ombygning", "en ombygning", "ombygning af udstillingen"]),
          "fordi den blev ombygget", "den blev ombygget", "udstillingen blev ombygget", "fordi udstillingen blev ombygget", "fordi de byggede om", "de byggede den om", "fordi den blev bygget om", "den blev bygget om"
        ]) },
      { type: "short", n: 15, q: "(Fire besøgende fortæller) Hvorfor synes James Milner, det var spændende at se nogle af de arkæologiske fund fra vikingetiden i virkeligheden?",
        accept: uniq(combos(["", "fordi", "da"], ["", "han havde kun", "han kun havde", "han havde", "før havde han kun", "før besøget havde han kun", "han før kun havde", "kun"], ["set genstandene i bøger", "set dem i bøger", "set genstandene i bøgerne", "set dem i bøgerne", "set dem i en bog", "set genstandene i en bog", "set fundene i bøger"])) }
    ]
  };

  const udland = {
    id: "pd3-20m-2", group: G, real: true,
    title: "Delprøve 2A – Flere danske studerende rejser ud",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 40,
    instruction: "Læs teksterne Eva og Per tog et halvt år til udlandet og Flere danske unge tager en del af deres uddannelse i udlandet. Herunder er der syv spørgsmål til de to tekster. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1: Eva og Per tog et halvt år til udlandet**

**Eva og Per har begge tilbragt et halvt år i udlandet i forbindelse med deres studier. De anbefaler andre unge at gøre det samme.**

Eva læser økonomi på Københavns Universitet. Hun er lige kommet tilbage til København efter et halvt år på Cardiff University i Wales. Hun er dermed én af de stadig flere danske unge, der tager en del af deres uddannelse i udlandet.

Da Eva begyndte at studere, havde hun endnu ikke tænkt over, om hun skulle tage en del af sit studie i udlandet. Men efter et par år opstod lysten til at rejse ud.

”Det var egentlig ikke så vigtigt for mig, hvor jeg skulle hen, men jeg kan jo engelsk, og derfor var det naturligt for mig at undersøge mulighederne på forskellige britiske universiteter,” siger hun og fortsætter: ”Det helt centrale for mig var dog, at jeg kunne komme til at studere på et universitet, hvor jeg kunne få et godt fagligt udbytte af undervisningen.”

Eva overvejede blandt andet University of London, der har et godt ry. Men London er en meget dyr by at bo i, og hun var også nervøs for, om det var for svært at komme ind på universitetet. Det blev dog ikke aktuelt for Eva at undersøge mulighederne nærmere. Hun blev nemlig inspireret af sin kusine til at søge til Cardiff University. Kusinen havde studeret et halvt år der, og hun havde kun positive ting at sige om universitetet og byen Cardiff.

Efter et halvt år på Cardiff University kan Eva kun give hende ret. Opholdet har fuldt ud levet op til Evas forventninger, og hun synes, hun har fået et stort fagligt udbytte af opholdet.

Per, der læser til lærer på Københavns Professionshøjskole, valgte ligesom Eva at studere et halvt år i Cardiff, dog ikke på samme universitet. Han valgte Cardiff, selvom det kostede ham meget tid og energi at planlægge opholdet:

”Jeg ville gerne til et sted i Storbritannien for at blive bedre til engelsk, og jeg havde været på et par dejlige ferier i Wales med mine forældre som barn, så jeg ville gerne tilbage til den del af Storbritannien. Jeg fandt hurtigt ud af, at Cardiff Metropolitan University kunne være en god idé, fordi de underviste i nogle fag, jeg var blevet meget interesseret i på mit første år på mit studie,” fortæller han.

”Jeg skulle selv arrangere opholdet, for Københavns Professionshøjskole havde desværre ikke noget samarbejde med dem”, fortæller han videre, ”og det var et stort arbejde. Blandt andet brugte jeg meget tid på at maile med studieadministrationen og nogle andre studerende, som jeg skulle bo sammen med. Men det betød faktisk, at jeg havde nogle kontakter på universitetet, allerede inden jeg kom derover, og det hjalp mig en del i starten af mit ophold.”

Det har ikke kun været krævende for Eva og især Per at arrangere et studieophold i udlandet, det har også været en dyr oplevelse. Man skal nemlig betale gebyr for at studere i Storbritannien, og det har været en stor ekstraomkostning. Eva måtte låne penge til studierne i udlandet af sine forældre, og da hun tog af sted, måtte hun desuden sige farvel til sit studiejob. Per har ikke lånt penge, men har i stedet for brugt noget af sin børneopsparing på opholdet. Han har dog kunnet genoptage sit gode job som lærervikar, da han kom hjem, mens Eva stadig er i gang med at finde et nyt studiejob.

Selvom det alt i alt har været meget dyrt for Eva og Per at tage på studieophold i Storbritannien, synes de, det har været det hele værd. Der behøver dog ikke være nogen stor ekstraudgift forbundet med et udlandsophold. I mange lande i Europa er der nemlig slet ikke gebyrer for undervisningen, og under alle omstændigheder kan Eva og Per kun anbefale unge at pakke rygsækken og rejse ud i løbet af deres studier.

**Tekst 2: Flere danske unge tager en del af deres uddannelse i udlandet**

**Flere danske unge studerer et halvt år eller mere i udlandet. Det kan være både sprogligt, fagligt og kulturelt lærerigt for de unge, og det gør dem mere attraktive for erhvervslivet.**

Der er i de senere år sket en markant stigning i antallet af studerende, der tager en del af deres uddannelse i udlandet. Med et ophold i udlandet møder de unge fremmede normer og adfærdsformer. Det giver dem en forståelse af forskellige kulturer.

For mange danske virksomheder er forståelse for andre kulturer en vigtig kompetence, når der skal ansættes nye medarbejdere. Det er vigtigt, at medarbejdere er åbne og ikke blot reagerer med automatisk at tage afstand, hvis de møder fremmede kulturer. En medarbejder, der er åben, vil være bedre til at agere og fungere sammen med kolleger fra andre lande.

Dansk erhvervslivs fokus på forståelse for andre kulturer vil ikke blive mindre i fremtiden. Man forventer nemlig, at behovet for udenlandsk arbejdskraft vil stige. Det skyldes, at virksomhederne i fremtiden må rekruttere flere især højt specialiserede medarbejdere fra udlandet. Det må de for at kunne klare sig i den internationale konkurrence.

Med et studieophold i udlandet er det ikke blot forståelsen for andre kulturer, der styrkes. Det gør de unges sprogfærdigheder også. Med mere og mere internationalt samarbejde er gode sprogfærdigheder også et plus på CV’et, når de unge skal søge arbejde.

**Attraktive kandidater for erhvervslivet**
For mange danske virksomheder er unge, der kan skrive et ophold i udlandet på deres CV, altså attraktive kandidater. Det er dog ikke alle ophold i udlandet, der tæller positivt i en arbejdsgivers øjne. Det er også vigtigt, at de unge tænker over, hvad de fagligt vil have ud af opholdet. Hvis de unge kun prioriterer at tage et eksotisk sted hen, så kan det sagtens være en god oplevelse på det personlige plan. Men der skal også være et klart fagligt udbytte, hvis et studieophold i udlandet skal være en fordel i forhold til fremtidig karriere.

**Omkostninger ved at rejse ud**
Selvom antallet af studerende, der tager til udlandet, er steget, er det dog stadig helt almindeligt at vælge at tage hele sin uddannelse i Danmark. Det kan der være personlige, økonomiske eller studiemæssige grunde til.

For at få mere klarhed over, hvad der afholder nogle unge fra at rejse ud, har Aarhus Universitet lavet en undersøgelse blandt deres studerende. Med den øgede viden håber man at blive bedre i stand til at hjælpe de unge.

I undersøgelsen pegede de unge på flere afgørende årsager til, at de ikke ønskede at rejse ud. De pegede blandt andet på frygten for ikke at kunne gennemføre deres studie på normeret tid. Når de kommer hjem, kan de nemlig risikere at få problemer med at få merit for deres fag. Det kan fx være, at man har brugt et helt år på at tage nogle fag i udlandet. Men når man kommer hjem, kan man kun få overført det, der svarer til et halvt år, på sit studie i Danmark.

De unge pegede også på manglende overblik og bureaukrati. Det er svært for de unge at overskue processen fra start til slut. De skal for det første undersøge og sætte sig ind i, hvilke fag forskellige universiteter i udlandet tilbyder. Dernæst skal de finde ud af at søge ind på det valgte universitet. De skal også finde en ny midlertidig bolig og opbygge et nyt netværk i udlandet. Hjemme i Danmark har de måske en kæreste, de må undvære. Og har man også et studiejob, man må sige farvel til, er en tur til udlandet også forbundet med en ekstra økonomisk omkostning.

**Udenlandske studerende rejser også til Danmark**
Danmark har en lang tradition for at sende studerende ud i verden. Men der er også tradition for, at udenlandske studerende kommer til Danmark.

Især erhvervslivet ser det som en fordel, at der kommer udenlandske studerende til Danmark. Mange danske firmaer mangler nemlig højt specialiseret arbejdskraft. Hvis de udenlandske studerende bliver i Danmark og arbejder efter endt studie, kan de være med til at løse problemet med den manglende arbejdskraft.

Samtidig peges der dog fra politisk side på, at det er en balancegang, hvor mange udenlandske studerende Danmark kan tage imod. Det koster nemlig at betale for studiepladser og måske også SU til de udenlandske studerende. De unge skal også vælge uddannelser, hvor man har erfaring for, at de bliver og arbejder efter endt uddannelse. På uddannelser, hvor de studerende hurtigt rejser hjem igen, skal antallet af pladser derimod ikke være for højt.

Med den nuværende fordeling af studerende på de forskellige uddannelser er der balance. Det vil sige, at de udenlandske studerende set i det lange perspektiv bidrager økonomisk til det danske samfund. Også selvom de får betalt uddannelsen og måske også kan få SU, mens de studerer.`,
    questions: [
      { type: "mc", n: 1, q: "(Tekst 1) Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Eva besluttede sig for at tage på studieophold på Cardiff University?",
        options: ["Hun kunne blive bedre til at tale engelsk.", "Hun kunne studere fagligt relevante fag.", "Hun kunne ikke komme ind på University of London."], answer: 1 },
      { type: "mc", n: 2, q: "(Tekst 1) Hvilken af følgende grunde var der til, at Per tog til Cardiff Metropolitan University for at studere et halvt år?",
        options: ["Han havde gode minder fra Wales, fordi han havde været der tidligere.", "Han havde mulighed for at studere nogle fag, han ikke kunne studere i København.", "Han havde allerede kontakt med andre studerende der, som kunne hjælpe ham med at arrangere opholdet."], answer: 0 },
      { type: "mc", n: 3, q: "(Tekst 1) Hvilket af følgende udsagn er i overensstemmelse med det, der står i teksten?",
        options: ["Eva og Per har taget studielån for at kunne betale de store omkostninger, der er forbundet med at studere i Storbritannien.", "Eva og Per anbefaler kun unge at tage på studieophold i lande, hvor der ikke er store omkostninger forbundet med det.", "Eva og Per er glade for, at de valgte at tage til Cardiff, selvom der var store omkostninger forbundet med det."], answer: 2 },
      { type: "mc", n: 4, q: "(Tekst 2) Hvad ser erhvervslivet ifølge teksten som en væsentlig fordel ved, at de unge tager en del af deres uddannelse i udlandet?",
        options: ["De opnår særlige faglige kompetencer, de ikke kan opnå på danske uddannelser.", "De opnår særlige samarbejdskompetencer, som mange danske firmaer har brug for.", "De opnår særlige sproglige kompetencer, de kan bruge i virksomheder i udlandet."], answer: 1 },
      { type: "mc", n: 5, q: "(Tekst 2) Danske arbejdsgivere ser det ikke altid som en kvalifikation, at studerende har taget en del af deres uddannelse i udlandet. Hvilken af følgende betingelser skal ifølge teksten være opfyldt, hvis erhvervslivet skal se det som en kvalifikation?",
        options: ["De studerende skal vælge at studere i et land, der kulturelt er meget forskelligt fra Danmark.", "De studerende skal vælge at studere i mindre eksotiske lande, så de kan fokusere på deres studier.", "De studerende skal vælge et udenlandsk universitet, hvor de kan supplere deres uddannelse med relevante fag."], answer: 2 },
      { type: "mc", n: 6, q: "(Tekst 2) Hvilken af følgende grunde nævnes der i teksten til, at nogle danske studerende ikke vælger at tage en del af deres uddannelse i udlandet?",
        options: ["De er ikke gode nok til at søge hjælp af universiteterne, når de skal planlægge et ophold.", "De kan muligvis ikke få godkendt hele deres udenlandske studie på deres studie i Danmark.", "Universiteterne vil ikke støtte de studerende personligt, økonomisk eller studiemæssigt."], answer: 1 },
      { type: "mc", n: 7, q: "(Tekst 2) Hvilket udsagn er i overensstemmelse med det, der står i teksten, om den nuværende fordeling af udenlandske studerende på de forskellige uddannelser i Danmark?",
        options: ["Den nuværende fordeling skal ændres, hvis det fortsat skal være en økonomisk gevinst at uddanne udenlandske unge.", "Færre udenlandske studerende med den nuværende fordeling vil være en økonomisk gevinst, da udgifterne til SU vil falde.", "Den nuværende fordeling er en økonomisk gevinst, selvom de studerende på nogle uddannelser hurtigt rejser hjem igen efter studiet."], answer: 2 }
    ]
  };

  const straaling = {
    id: "pd3-20m-3", group: G, real: true,
    title: "Delprøve 2B – Er stråling fra mobiltelefoner skadelig for helbredet?",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 25,
    instruction: "Læs teksten Er stråling fra mobiltelefoner skadelig for helbredet? Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Er stråling fra mobiltelefoner skadelig for helbredet?**

Mobiltelefonen er blevet en integreret del af danskernes hverdag, og den er med dem fra morgen til aften. Mobiltelefonen bliver af mange brugt som vækkeur og er [[0]] noget af det første, folk kigger på om morgenen. Den er også det sidste, mange kigger på, da de seneste nyheder eller opdateringer på de sociale medier tjekkes lige før sengetid. Nogle mener, at den stråling fra telefonen, som folk bliver [[1]] kan være skadelig, men er det rigtigt?

Sundhedsstyrelsen har lavet nogle enkle råd, som borgerne kan følge for at begrænse den stråling, de bliver udsat for. Rådene handler [[2]] om at sms’e frem for at ringe, at bruge headset og at undgå at sove med telefonen ved hovedet. Med disse [[3]] er det ikke så mærkeligt, hvis folk tror, at der er en større risiko for at få alvorlige sygdomme som fx kræft, hvis de konstant bruger telefonen. Sundhedsstyrelsen understreger imidlertid, at de ovennævnte [[4]] er baseret på et princip om forsigtighed. Men hvad siger forskningen?

[[5]] de forskellige undersøgelser på området er ikke den samme. En undersøgelse kan pege på, at mobiltelefoner ikke er skadelige for helbredet, mens en anden kan vise det modsatte. Og da teknologien inden for mobiltelefoni udvikler sig hele tiden, er det meget svært at vurdere risikoen. De telefoner, vi bruger i dag, er meget anderledes end de telefoner, vi brugte for ti år siden. Derfor udsender de heller ikke nødvendigvis den samme mængde stråling som før, og det kan således være svært at sammenligne resultaterne af forskning, der blev udført for ti år siden, med nyere forskning.

Det er dog et faktum, at mængden af data, der overføres til og fra mobiltelefoner, er vokset. Det er sket pga. digitaliseringen i samfundet, og fordi vores telefoner konstant er logget på blandt andet mail og sociale medier. [[6]] er der dog blevet sat flere mobilmaster op, så vores smartphones ikke behøver at sende og modtage med så stor styrke som før. Det betyder samlet set, at vi bliver udsat for mindre stråling, men meget oftere end før.

De mange master er imidlertid også årsag til bekymring. Forskere har forsøgt at finde ud af, om de folk, der bor i områder med flere master, har en forøget risiko for kræft. Det er faktisk tilfældet, men indtil videre kan man ikke se det som bevis for en forøget sundhedsrisiko. Mobilmasterne står nemlig ofte oven på høje boligblokke, og disse bygninger ligger [[7]] i områder, hvor folk ikke tjener så meget. Her er der i forvejen en tendens til, at folk har en mere usund livsstil med alkohol og rygning, hvilket forøger kræftrisikoen, og det er der ikke taget højde for i undersøgelsen.

Vi har altså stadig for lidt viden om de mulige risikofaktorer ved mobiltelefoni til at sige noget helt præcist om [[8]] konstant at være logget på.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["behandlet for", "afhængige af", "eksponeret for", "beskyttet mod"],
        2: ["desuden", "i stedet for", "imidlertid", "blandt andet"],
        3: ["krav", "forbud", "opfordringer", "resultater"],
        4: ["spørgsmål", "forklaringer", "undersøgelser", "anbefalinger"],
        5: ["Formålet med", "Årsagen til", "Interessen for", "Konklusionen i"],
        6: ["Samtidig", "Modsat", "Som nævnt", "Alligevel"],
        7: ["derimod", "typisk", "sjældent", "modsat"],
        8: ["løsningerne på", "grundene til", "konsekvenserne ved", "holdningerne til"]
      },
      example: { 0: "endelig" },
      // Item 6: the rettenøgle says A; the forcensur changed it to A/B.
      answers: { 1: "eksponeret for", 2: "blandt andet", 3: "opfordringer", 4: "anbefalinger", 5: "Konklusionen i", 6: ["Samtidig", "Modsat"], 7: "typisk", 8: "konsekvenserne ved" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(museet, udland, straaling);

  const X = PD2.EXAMS.pd3;
  const SESSION = "Maj-juni 2020";

  // ---------- Skriftlig fremstilling maj-juni 2020 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-20m-w1", delprove: 1, real: true, year: 2020, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (maj-juni 2020)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din danske ven, Christina. Hun har en ungarsk kæreste, Laszlo, der lige er startet på en sprogskole. Christina skriver blandt andet: " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Hvor er det utroligt, at du snart er færdig med sprogskolen. «Tror du, du kommer til at savne skolen?» " +
        "Det er altså lidt svært med det danske sprog for Laszlo. Han har ikke så mange timer på sprogskolen, og vi taler mest engelsk sammen herhjemme. «Har du nogen idéer til, hvad vi kan gøre, så Laszlo hurtigere lærer dansk?» " +
        "Laszlo kender heller ikke så mange danskere endnu, han kan tale dansk med. «Hvad gjorde du egentlig for at få nogle danske venner?» " +
        "Og så glæder jeg mig til at ses næste weekend. «Hvad synes du, vi skal lave?» …\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Hvor er det utroligt, at du snart er færdig med sprogskolen. Tror du, du kommer til at savne skolen?\n\n" +
        "Det er altså lidt svært med det danske sprog for Laszlo. Han har ikke så mange timer på sprogskolen, og vi taler mest engelsk sammen herhjemme. Har du nogen idéer til, hvad vi kan gøre, så Laszlo hurtigere lærer dansk?\n\n" +
        "Laszlo kender heller ikke så mange danskere endnu, han kan tale dansk med. Hvad gjorde du egentlig for at få nogle danske venner?\n\n" +
        "Og så glæder jeg mig til at ses næste weekend. Hvad synes du, vi skal lave? …",
      underlined: [
        "Tror du, du kommer til at savne skolen?",
        "Har du nogen idéer til, hvad vi kan gøre, så Laszlo hurtigere lærer dansk?",
        "Hvad gjorde du egentlig for at få nogle danske venner?",
        "Hvad synes du, vi skal lave?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Tror du, du kommer til at savne skolen?",
        "Understreget: Har du nogen idéer til, hvad vi kan gøre, så Laszlo hurtigere lærer dansk?",
        "Understreget: Hvad gjorde du egentlig for at få nogle danske venner?",
        "Understreget: Hvad synes du, vi skal lave? (næste weekend)",
        "Foreslå en aktivitet, I kan lave i næste weekend."
      ],
      phrases: ["Tak for din mail.", "Ja, jeg tror faktisk, at jeg kommer til at savne …", "Du spørger, om jeg har nogen idéer til …", "Jeg synes, I skal prøve at …", "Han kan også …", "For at få danske venner …", "Hvad med at …?", "Jeg glæder mig til at ses.", "Mange hilsner"],
      model: `Hej Christina

Tak for din mail. Det var dejligt at høre fra dig.

Ja, jeg er snart færdig med sprogskolen, og jeg tror faktisk, at jeg kommer til at savne den. Jeg har haft en rigtig god lærer, og jeg har fået mange gode venner i min klasse. Men jeg glæder mig også til at få mere tid til mit arbejde.

Du spørger, om jeg har nogen idéer til, hvordan Laszlo kan lære dansk hurtigere. Jeg synes, I skal prøve at tale dansk sammen derhjemme, i hvert fald en time om dagen. Han kan også se danske tv-serier med danske undertekster og lytte til podcasts på dansk.

For at få danske venner meldte jeg mig ind i en løbeklub, og jeg begyndte at arbejde frivilligt i en genbrugsbutik. Der taler man dansk hele tiden, og man lærer nye mennesker at kende. Måske kan Laszlo gøre noget lignende?

Jeg glæder mig også til at ses næste weekend. Hvad med at tage en tur til Louisiana og spise frokost på caféen bagefter? Laszlo er selvfølgelig også velkommen.

Mange hilsner
Amira`
    },
    {
      id: "pd3-20m-w2a", delprove: 2, real: true, year: 2020, session: SESSION,
      title: "2A: Stress (maj-juni 2020)",
      kind: "Prøveopgave · diagram og diskussion · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Stress. " +
        "Diagram: Andelen af danskere, som føler sig stressede i dagligdagen fordelt efter alder og køn. For hver aldersgruppe viser diagrammet to søjler: kvinder (blå) og mænd (grå). " +
        "Søjlerne (aflæst fra diagrammet, kvinder / mænd): 25-34 år 28 % / 18 % · 35-44 år 22 % / 15 % · 45-54 år 20 % / 14 % · 55-64 år 16 % / 12 % · " +
        "65-74 år 8 % / 5 % · 75 år eller mere 10 % / 6 % · Alle 20 % / 13 %. " +
        "Kilde: Statens Institut for Folkesundhed, 2017. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2020m/stress-diagram.png",
      imageAlt: "Søjlediagram: Andelen af danskere, som føler sig stressede i dagligdagen, fordelt efter alder og køn (kvinder / mænd). 25-34 år: 28 % / 18 %. 35-44 år: 22 % / 15 %. 45-54 år: 20 % / 14 %. 55-64 år: 16 % / 12 %. 65-74 år: 8 % / 5 %. 75 år eller mere: 10 % / 6 %. Alle: 20 % / 13 %.",
      chart: {
        title: "Andelen af danskere, som føler sig stressede i dagligdagen fordelt efter alder og køn",
        unit: "%", approx: true,
        source: "Statens Institut for Folkesundhed, 2017",
        series: ["Kvinder", "Mænd"],
        groups: [
          { label: "25-34 år", values: [28, 18] },
          { label: "35-44 år", values: [22, 15] },
          { label: "45-54 år", values: [20, 14] },
          { label: "55-64 år", values: [16, 12] },
          { label: "65-74 år", values: [8, 5] },
          { label: "75 år eller mere", values: [10, 6] },
          { label: "Alle", values: [20, 13] }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til den udvikling, diagrammet viser. (Forcensuren: Diagrammet viser ikke en udvikling over tid, men forskelle mellem aldersgrupper og køn. Det tæller ikke ned, hvis man læser en udvikling ind i diagrammet.)",
        "Diskuter, om de sociale medier er en større stressfaktor end arbejdslivet. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor stor en andel af danskerne der …", "Det er tydeligt, at …", "Blandt de 25-34-årige …", "mens det kun er … blandt …", "En årsag kan være, at …", "På den ene side …", "På den anden side …", "Samlet set mener jeg, at …"],
      model: `Stress i hverdagen

Diagrammet viser, hvor stor en andel af danskerne der føler sig stressede i dagligdagen, fordelt efter alder og køn. Tallene er fra Statens Institut for Folkesundhed, 2017. Det er tydeligt, at kvinder oftere føler sig stressede end mænd i alle aldersgrupper. Samlet set gælder det 20 % af kvinderne og 13 % af mændene. Desuden er de unge mest stressede: Blandt de 25-34-årige føler 28 % af kvinderne og 18 % af mændene sig stressede, mens det kun er 8 % af kvinderne og 5 % af mændene blandt de 65-74-årige.

Der kan være flere årsager til forskellene. Mange unge skal både gøre karriere, købe bolig og passe små børn på samme tid. Kvinder tager ofte stadig det største ansvar for hjemmet og børnene, selvom de også arbejder fuld tid. De ældre er derimod ofte gået på pension og har mere tid.

Er de sociale medier en større stressfaktor end arbejdslivet? På den ene side er man altid online, og mange føler et pres for at vise et perfekt liv på Instagram og Facebook. Når man hele tiden ser andres flotte billeder, kan man føle, at man ikke er god nok. Desuden får man mange beskeder og notifikationer, så hjernen aldrig får ro.

På den anden side bruger de fleste voksne meget mere tid på arbejdet, og her er der krav, deadlines og ansvar, som man ikke selv kan vælge fra. Hvis man har for meget at lave eller en dårlig chef, kan det føre til alvorlig stress. De sociale medier kan man derimod lægge væk.

Samlet set mener jeg, at arbejdslivet er den største stressfaktor for de fleste. Men for mange unge kan de sociale medier gøre stressen værre, fordi de aldrig rigtig holder fri fra telefonen.`
    },
    {
      id: "pd3-20m-w2b", delprove: 2, real: true, year: 2020, session: SESSION,
      title: "2B: Det første job som nyuddannet (maj-juni 2020)",
      kind: "Prøveopgave · eksempler og diskussion · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Det første job som nyuddannet. " +
        "Hvert år er der mange nyuddannede fra universiteter, professionshøjskoler og andre uddannelsessteder, der skal have deres første job som færdiguddannede. Der er forskellige forhold udover uddannelsen, der kan have indflydelse på nyuddannedes jobmuligheder. " +
        "Her er der nogle eksempler: " +
        "• Frivilligt arbejde • Sprogkundskaber • Alder • Personligt netværk • Studiejob • Udlandsophold. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Frivilligt arbejde", "Sprogkundskaber", "Alder", "Personligt netværk", "Studiejob", "Udlandsophold"],
      points: [
        "Fortæl kort om, hvordan du eller en anden, du kender, fik det første job som nyuddannet.",
        "Kommentér et eller to af eksemplerne fra listen.",
        "Diskuter, om personlighed er vigtigere end eksamensresultater, når man skal have et job som nyuddannet. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Min veninde … fik sit første job …", "På listen synes jeg, at … er særligt vigtige.", "Med et studiejob får man …", "Jeg mener, at …", "På den anden side er … ikke ligegyldige.", "Inden for nogle fag …", "Samlet set tror jeg, at …"],
      model: `Personlighed eller karakterer?

Min veninde Sara blev uddannet som sygeplejerske for to år siden. Hun fik sit første job på det hospital, hvor hun havde været i praktik under uddannelsen. Afdelingssygeplejersken kendte hende allerede og vidste, at hun var dygtig og god til at samarbejde, så hun blev ansat uden at skulle søge mange andre steder.

På listen synes jeg, at studiejob og personligt netværk er særligt vigtige. Med et studiejob får man erfaring, som man kan skrive på sit CV, og man viser, at man kan møde til tiden og tage ansvar. Et personligt netværk kan også åbne mange døre, fordi mange stillinger aldrig bliver slået op. I stedet bliver de besat gennem kontakter.

Men er personlighed vigtigere end eksamensresultater, når man skal have sit første job? Jeg mener, at personligheden ofte betyder mest. Til en jobsamtale vil arbejdsgiveren gerne finde ud af, om ansøgeren passer ind på arbejdspladsen, er positiv og kan samarbejde med kollegerne. En person med topkarakterer, som er svær at arbejde sammen med, kan skabe dårlig stemning i en hel afdeling.

På den anden side er eksamensresultaterne ikke ligegyldige. Når der er mange ansøgere til den samme stilling, bruger nogle arbejdsgivere karaktererne til at sortere ansøgningerne, inden de inviterer til samtale. Inden for nogle fag, fx medicin og jura, er gode karakterer desuden et tegn på, at man har styr på det faglige.

Samlet set tror jeg, at gode karakterer kan hjælpe én med at komme til samtale, men at det er personligheden, der afgør, om man får jobbet. Derfor bør nyuddannede både fokusere på deres eksamener og på at vise, hvem de er.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål maj-juni 2020 ----------
  // q = the obligatory question exactly as in the booklet; follow = the (suggested) follow-up question.
  // The picture sheet's own captions are the captions.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, maj-juni 2020)";
  const intro = emne => `Her er der to billeder, som viser nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-20m-o-a", title: "Børns tid online", session: SESSION, year: 2020, real: true, credit,
      intro: intro("Børns tid online"),
      pictures: [
        { file: "images/pd3-2020m/boerns-tid-online-1.jpg", caption: "Mobilfri skoledag", credit,
          alt: "I et klasseværelse holder en smilende lærer en kasse, og en dreng og en pige lægger deres mobiltelefoner i den. En pige med rygsæk venter med sin telefon i hånden, og en elev med rygsæk står med ryggen til.",
          words: ["en mobilfri skoledag", "at aflevere mobilen", "en kasse", "et klasseværelse", "skoletiden"] },
        { file: "images/pd3-2020m/boerns-tid-online-2.jpg", caption: "Børn og computerspil", credit,
          alt: "To drenge sidder indenfor ved et skrivebord foran en stor skærm og spiller et computerspil med en soldat med et gevær. På bordet står en sodavand, og i vindueskarmen står en legetøjsbil.",
          words: ["et computerspil", "en skærm", "at spille", "et skydespil", "at lege udenfor"] }
      ],
      first: {
        A: {
          q: "På nogle skoler må elever ikke bruge deres mobiltelefon i skoletiden. Hvorfor tror du, det er sådan?",
          follow: "Kan der være nogen problemer ved, at elever ikke må bruge deres mobiltelefon i skoletiden?",
          answer: "Jeg tror, det især er, fordi mobilen forstyrrer undervisningen. Hvis eleverne har telefonen på bordet, tjekker de hele tiden beskeder og sociale medier i stedet for at høre efter. Det går ud over koncentrationen. Desuden vil skolerne gerne have, at børnene leger og taler sammen i frikvartererne i stedet for at sidde hver for sig med en skærm. Som man kan se på billedet, lægger eleverne deres telefoner i en kasse hos læreren. Det kan også mindske mobning på nettet i skoletiden.",
          followAnswer: "Ja, der kan godt være nogle problemer. For det første kan nogle forældre blive utrygge, hvis de ikke kan få fat i deres barn i løbet af dagen. For det andet kan mobilen være nyttig i undervisningen, fx til at søge information, tage billeder eller bruge en ordbog. Men jeg synes alligevel, at fordelene er større end ulemperne. Hvis der er noget vigtigt, kan forældrene altid ringe til skolens kontor, og læreren kan selv bestemme, hvornår mobilen må bruges."
        },
        B: {
          q: "Nogle børn vil hellere spille computerspil end lege udenfor sammen med deres venner. Hvorfor tror du, det er sådan?",
          follow: "Kan der være nogen problemer ved, at nogen børn hellere vil spille computerspil end lege udenfor sammen med deres venner?",
          answer: "Jeg tror, det er, fordi computerspil er lavet til at være meget spændende. Man får hele tiden point og belønninger, og man kan komme videre til et nyt niveau. Mange børn spiller også online med deres venner, så de føler, at de er sammen, selvom de sidder hjemme. Som man kan se på billedet, sidder to drenge foran skærmen og spiller et skydespil. Desuden synes nogle forældre, at det er mere trygt, at børnene er indenfor.",
          followAnswer: "Ja, det mener jeg. Børn har brug for at bevæge sig, og hvis de sidder foran en skærm i mange timer, kan de få problemer med vægten og søvnen. De lærer heller ikke på samme måde at løse konflikter og samarbejde, som når de leger sammen i virkeligheden. Nogle spil er også voldelige, og man kan blive afhængig af dem. Derfor synes jeg, at forældrene skal sætte nogle grænser for, hvor længe børnene må spille hver dag."
        }
      },
      second: {
        q: "Nogle børn og unge bruger næsten hele deres sociale liv online, fx på sociale medier. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Hvad tror du, det betyder for børn og unges sociale kompetencer, at de bruger meget tid på online-fællesskaber?",
        answer: "En fordel er, at man kan holde kontakten med venner og familie, selvom de bor langt væk. Børn, der er generte eller har særlige interesser, kan også finde nogen at tale med på nettet. En ulempe er, at man ikke ser hinanden i virkeligheden, og at man kan føle sig ensom. Der er også en risiko for mobning og for at møde voksne med dårlige hensigter. Desuden føler mange et pres for at vise et perfekt liv på de sociale medier.",
        followAnswer: "Jeg tror, det kan gøre det sværere for dem at kommunikere ansigt til ansigt. Når man skriver, har man tid til at tænke sig om, men i en rigtig samtale skal man kunne aflæse kropssprog og reagere hurtigt. Nogle unge bliver usikre, når de skal tale med nye mennesker eller ringe til en fremmed. På den anden side lærer de også at samarbejde og kommunikere digitalt, og det får de brug for senere på arbejdsmarkedet."
      },
      conclusion: ""
    },
    {
      id: "pd3-20m-o-b", title: "Det offentlige sundhedsvæsen", session: SESSION, year: 2020, real: true, credit,
      intro: intro("Det offentlige sundhedsvæsen"),
      pictures: [
        { file: "images/pd3-2020m/det-offentlige-sundhedsvaesen-1.jpg", caption: "Gratis at gå til læge", credit,
          alt: "I et fyldt venteværelse hos lægen sidder flere patienter og venter. Ved skranken viser en ældre kvinde sit gule sundhedskort til sekretæren, og et forstørrelsesglas viser kortet tæt på.",
          words: ["et venteværelse", "en patient", "det gule sundhedskort", "lægesekretæren", "at vente"] },
        { file: "images/pd3-2020m/det-offentlige-sundhedsvaesen-2.jpg", caption: "Behandling på privathospital", credit,
          alt: "Receptionen på et moderne privathospital med palmer og lænestole. En kvinde taler med receptionisten ved skranken, en læge og en sygeplejerske står og smiler, og en ældre mand sidder og læser i en lænestol.",
          words: ["et privathospital", "en reception", "en sundhedsforsikring", "ventetid", "at blive behandlet"] }
      ],
      first: {
        A: {
          q: "Der er nogle, der mener, at det ikke skal være helt gratis at gå til læge. De mener, at det er en god idé at indføre et gebyr ved lægebesøg. Hvorfor tror du, de mener det?",
          follow: "Mener du, der kan være nogen problemer ved at indføre et gebyr ved lægebesøg? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, de mener det, fordi nogle mennesker går til lægen med småting, som de sagtens kunne klare selv, fx en almindelig forkølelse. Så bliver venteværelset fyldt, ligesom på billedet, og patienter, der er rigtig syge, må vente længere. Et lille gebyr kunne få folk til at tænke sig om, før de bestiller tid. Desuden ville gebyret give nogle ekstra penge til sundhedsvæsenet, som har brug for flere ressourcer.",
          followAnswer: "Ja, det mener jeg bestemt. Det største problem er, at folk med lave indkomster, fx studerende og pensionister, måske ikke går til lægen, selvom de er syge, fordi de ikke har råd. Så bliver sygdommen opdaget for sent, og det kan blive både farligere for patienten og dyrere for samfundet. I Danmark har vi et princip om, at alle skal have lige adgang til sundhed, og det synes jeg, vi skal holde fast i."
        },
        B: {
          q: "Der er nogle, der vælger at betale for behandling på et privathospital. Hvorfor tror du, de vælger det?",
          follow: "Mener du, der kan være nogen problemer ved, at nogle ikke har råd til at betale for behandling på et privathospital? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, at den vigtigste grund er ventetiden. På de offentlige hospitaler kan man nogle gange vente i flere måneder på en operation, men på et privathospital kan man ofte komme til i løbet af få uger. Mange får også betalt behandlingen gennem en sundhedsforsikring fra deres arbejde. Som man kan se på billedet, er der pænt og roligt på privathospitalet, og personalet har god tid. Nogle kan også godt lide, at de selv kan vælge deres læge.",
          followAnswer: "Ja, det kan godt være et problem, fordi det skaber et sundhedsvæsen i to lag. De rige og dem med en forsikring kan komme hurtigt til, mens andre må vente, og det er ikke retfærdigt. På den anden side kan man sige, at det også hjælper dem, der venter i det offentlige system, fordi køen bliver kortere. Men det vigtigste er, at alle får den behandling, de har brug for, uanset hvor mange penge de har."
        }
      },
      second: {
        q: "Der bliver færre men større hospitaler i Danmark. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Mener du, det er vigtigere, at et hospital kan tilbyde den bedst mulige behandling, end at hospitalet ligger tæt på borgerne? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at lægerne på et stort hospital behandler mange patienter med den samme sygdom, så de bliver meget dygtige og erfarne. Et stort hospital har også råd til det nyeste udstyr, og der er specialister til stede døgnet rundt. En ulempe er, at der bliver langt til hospitalet for mange, især for folk, der bor på landet. Det kan være farligt i akutte situationer, og det er svært for ældre patienter og pårørende uden bil.",
        followAnswer: "Ja, det mener jeg som udgangspunkt. Hvis jeg skal opereres for kræft, vil jeg hellere køre en time ekstra og blive behandlet af de bedste læger. Men det kræver, at der er gode ambulancer og måske helikoptere, så man hurtigt kan komme frem i en akut situation. Desuden synes jeg, at der stadig skal være lægevagter og mindre klinikker tæt på borgerne, så man kan få hjælp til de almindelige ting i nærheden."
      },
      conclusion: ""
    },
    {
      id: "pd3-20m-o-c", title: "Arbejde og sprog", session: SESSION, year: 2020, real: true, credit,
      intro: intro("Arbejde og sprog"),
      pictures: [
        { file: "images/pd3-2020m/arbejde-og-sprog-1.jpg", caption: "Dansk på arbejdspladsen", credit,
          alt: "Udenlandske medarbejdere sidder omkring et mødebord med bærbare computere. En underviser står ved en tavle med overskriften »Udtale - medicinske termer«, og et forstørrelsesglas viser teksten »Dansk på arbejde«.",
          words: ["et danskkursus", "udenlandske medarbejdere", "udtale", "medicinske termer", "et mødelokale"] },
        { file: "images/pd3-2020m/arbejde-og-sprog-2.jpg", caption: "Engelsk som undervisningssprog", credit,
          alt: "Studerende med bærbare computere sidder i et auditorium, mens en underviser holder forelæsning. På lærredet står der »Computer science – The organizational context of IT systems«.",
          words: ["et auditorium", "en forelæsning", "engelsk som undervisningssprog", "internationale studerende", "en bærbar computer"] }
      ],
      first: {
        A: {
          q: "Nogle firmaer betaler for danskkurser til deres udenlandske medarbejdere, selvom virksomhedssproget er engelsk. Hvorfor tror du, de gør det?",
          follow: "Hvad tror du, det betyder for det kollegiale samvær på arbejdspladsen, at de udenlandske medarbejdere lærer dansk?",
          answer: "Jeg tror, de gør det, fordi de gerne vil have, at medarbejderne bliver i firmaet i mange år. Hvis man kan tale dansk, bliver det lettere at falde til i Danmark og få et socialt liv uden for arbejdet. Desuden har mange firmaer danske kunder eller patienter, som foretrækker at tale dansk. Som man kan se på billedet, lærer medarbejderne at udtale medicinske termer, så de måske kan tale med patienter på et hospital.",
          followAnswer: "Jeg tror, det betyder meget. Selvom møderne foregår på engelsk, taler de danske kolleger ofte dansk sammen i frokostpausen og til julefrokosten. Hvis de udenlandske medarbejdere forstår dansk, kan de deltage i samtalerne og lære deres kolleger bedre at kende. Så føler de sig ikke udenfor, og der opstår færre misforståelser. Samtidig viser de, at de interesserer sig for den danske kultur, og det bliver kollegerne glade for."
        },
        B: {
          q: "Der er flere og flere uddannelser i Danmark, hvor studiesproget er engelsk. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved, at studiesproget på flere og flere uddannelser i Danmark er engelsk?",
          answer: "Jeg tror, det især skyldes globaliseringen. De danske universiteter vil gerne tiltrække dygtige studerende og forskere fra hele verden, og det kan de kun, hvis undervisningen foregår på engelsk. Mange fag, fx computer science som på billedet, bruger desuden engelske fagudtryk, og den nyeste forskning bliver skrevet på engelsk. Danske studerende får også brug for engelsk, når de senere skal arbejde i internationale virksomheder.",
          followAnswer: "Ja, det kan der godt være. Nogle danske studerende har svært ved at udtrykke sig præcist på engelsk, og så kan de lære mindre. Der er også en risiko for, at det danske sprog mister fagord, hvis man kun taler om fx IT og økonomi på engelsk. Desuden bliver mange af de udenlandske studerende ikke i Danmark efter uddannelsen, selvom vi har betalt for den. Derfor synes jeg, at der skal være en god balance mellem dansk og engelsk."
        }
      },
      second: {
        q: "Udlændinge kan ofte arbejde i Danmark uden at kunne tale dansk, hvis de kan tale engelsk. Hvilke fordele og ulemper mener du, der kan være ved det for det danske samfund?",
        follow: "Hvad tror du, det betyder for udenlandske medarbejderes muligheder for at blive integreret i det danske samfund, at de kan klare sig på engelsk?",
        answer: "En fordel er, at det er lettere for danske virksomheder at tiltrække kvalificeret arbejdskraft fra udlandet, fx ingeniører og IT-specialister, som vi mangler. De kan begynde at arbejde med det samme og betale skat. En ulempe er, at mange af dem aldrig lærer dansk og derfor ikke bliver en rigtig del af samfundet. Nogle rejser hjem efter få år, og så forsvinder deres erfaring igen. Desuden kan det være svært for dem at følge med i, hvad der sker i Danmark.",
        followAnswer: "Jeg tror, det gør integrationen sværere. Hvis man kan klare sig på engelsk på arbejdet, er der ikke så stor motivation for at lære dansk. Men uden for arbejdet foregår det meste på dansk, fx i foreningslivet, i skolen og hos lægen. Derfor kan man nemt komme til at leve i en international boble og kun have udenlandske venner. Jeg synes, det er en god idé, at virksomhederne tilbyder danskundervisning, ligesom på billedet."
      },
      conclusion: ""
    }
  );
})();
