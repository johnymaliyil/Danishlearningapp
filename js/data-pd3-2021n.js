// Prøve i Dansk 3, november-december 2021 (vinter 2021) – læseforståelse, skriftlig fremstilling and
// mundtlig kommunikation (delprøve 2), transcribed from the exam papers:
// Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Turist i Odense" nr. 14;
// Læseforståelse 2: teksthæfte nr. 16 and opgavehæfte nr. 17; skriftlig fremstilling nr. 18;
// picture sheets for mundtlig kommunikation nr. 20 (illustrations by Niels Roland, cropped into
// images/pd3-2021n/) and the censor- og eksaminatorhæfte for the oral exam (nr. 21).
// The reading answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur passed on to us (delprøve 1 items 2 and 13).
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures from the tekstsamling are left out (their captions are not needed for any answer).
// This session has only delprøve 2A (7 × multiple choice, two texts) and 2B (8 × A-D gaps) in
// Læseforståelse 2 – there is no separate delprøve 3.
// Points at the exam: delprøve 1 = 15 × 1, 2A = 7 × 2, 2B = 8 × 1 → 37 points.
// Omregningstabel (vinter 2021): 37-36 = 12, 35-32 = 10, 31-26 = 7, 25-21 = 4, 20-19 = 02, 18-10 = 00, 9-0 = -3.
// The app scores every question as 1, so 2A counts half as much here as at the exam.
// Typos in the papers are kept as printed ("som lidt at et chok" in tekst 1 of 2A, "giver for svære
// skriftlige opgaver for" in 2A question 1). In the oral booklet the closing quotation marks are missing
// after two questions, and one follow-up question (C, B) ends with a full stop; it is kept as printed.
// The writing task wording, the friend's e-mail, the oral questions and the chart labels are copied
// from the papers; the chart values are read off the bar chart (ca.-values). All model answers are our
// own (the papers have none).

(function () {
  const G = "PD3 nov.-dec. 2021";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const odense = {
    id: "pd3-21n-1", group: G, real: true,
    title: "Delprøve 1 – Turist i Odense",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Turist i Odense. Brug indholdsfortegnelsen. Svar præcist og kort på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Velkommen til Odense – H.C. Andersens hjemby … 3
Festivaler i Odense … 7
De 5 mest besøgte attraktioner i Odense … 9
Fire eksempler på gå-ud-steder i Odense … 11
Odense bys historie … 12

**VELKOMMEN TIL ODENSE – H.C. ANDERSENS HJEMBY**

Odense er en kulturel og historisk by, hvor man tydeligt fornemmer byens lange historie. Hans Christian Andersen blev født i Odense, og hans livlige fantasi inspirerer fortsat byen. I Odense kan man gå i H.C. Andersens fodspor rundt i den historiske bydel og fornemme livet i byen for 200 år siden.

Inspirationen kan også fornemmes i de mange årlige festivaler, der året rundt skaber en levende og inspirerende by. Samtidig er Odense også en levende og urban by, hvor man har mulighed for at tage del i det gode lokale liv, nyde den hyggelige atmosfære, smage på den pulserende madscene eller gå ture i en af byens mange grønne oaser.

Kilde: https://www.visitodense.dk/, hentet 10. maj 2020

**I H.C. Andersens fodspor**
Brug dagen på en slentretur i det gamle Odense og nyd stemningen i de gader, huse og steder, som formede H.C. Andersen som menneske og digter.

Udforsk museerne med hans originale værker og effekter – og opdag helt nye sider af verdens mest berømte dansker. I Odense mærker man digterens tilstedeværelse overalt.

Man kan købe en dagsbillet til H.C. Andersens Odense. Den gælder til fem museer på ruten.

Kilde: https://hcandersensodense.dk/#ruten, hentet 10. maj 2020

**H.C. Andersen Museum**
H.C. Andersen Museum er et skatkammer fyldt af alt det, der udgjorde eventyrforfatterens liv og kunst. Her finder man alle de ægte og unikke genstande, som han gemte, fordi de betød noget for ham, eller som er blevet gemt, fordi han betød noget for andre: manuskripterne, papirklippene, hans ejendele – og hatten. Kom bagom kunstneren og helt tæt på mennesket H.C. Andersen.

Kilde: https://hcandersensodense.dk/h-c-andersen-museum/, hentet 10. maj 2020

**Rundvisning på museet**
Kom tættere på H.C. Andersen, hans liv og værk gennem vores rundvisninger. Man får en introduktion til H.C. Andersens liv gennem udstillingens genstande. Undervejs kobles hans liv og oplevelser til udvalgte eventyr.

Rundviser fra Odense Bys Museer:
Pris 550 kr. + entré.

Ved ønske om rundvisning med fokus på et særligt emne kan rundvisningen varetages af en museumsinspektør:
Pris 2.000 kr. + entré.

**Ekstraåbning**
Vi arrangerer gerne åbning af museet og rundvisninger uden for normal åbningstid.
Pris for 1. time: 1.500 kr. + entré.
Hver efterfølgende påbegyndt time: 800 kr.

Inklusive åbning af H.C. Andersens Hus (Fødehjemmet):

Pris for 1. time: 2.000 kr. + entré
Hver efterfølgende påbegyndt time: 1.000 kr.

Kilde: https://hcandersensodense.dk/h-c-andersen-museum/, hentet 10. maj 2020

**Rundvisning i byen**
Kom med rundt og få historien om H.C. Andersens barndom i Odense. Rundvisningen starter ved H.C. Andersen Museum og kommer forbi både Fødehjemmet, Barndomshjemmet og steder, der havde betydning for ham. Turen går blandt andet via brosten. Vær opmærksom på, at turen derfor ikke egner sig for dårligt gående.

Pris: 750 kr. (max 28 personer). Varighed: 75 min.

**Tilgængelighed**
Man må ikke tage barnevogne/klapvogne med i H.C. Andersens Hus. Det er desværre ikke muligt at komme rundt i den fredede bygning med kørestol. Handicaphjælpere, der er på arbejde, har fri entré, og servicehunde er velkomne.

Kilde: https://hcandersensodense.dk/h-c-andersens-foedehjem/, hentet 10. maj 2020

**H.C. Andersens hus (Fødehjem)**
I den dengang fattigste del af Odense bag vinduerne i det nu ikoniske gulkalkede hjørnehus blev H.C. Andersen født tirsdag den 2. april 1805 kl. 01 om natten. Han var søn af en fattig vaskekone og en endnu ikke udlært skomager. Der var dengang intet, der tydede på, at han skulle forvandle sin fattige arv til at blive verdens største eventyrforfatter.

Kilde: https://hcandersensodense.dk/#, hentet 10. maj 2020

**H.C. Andersens Barndomshjem**
Fra H.C. Andersen var 2 til 14 år boede han i et lille hus i Munkemøllestræde. Et par hundrede år er gået siden da, og dukketeateret leges der nu ikke længere med. Ingen far står parat til at læse Holberg for den unge knægt. Og ingen ser snedronningen i rudens iskrystaller på kolde vintermorgener. Brændeovnen brænder forgæves. Alligevel finder man det hele i det lille barndomshjem. Alt det, der fik H.C. Andersen til at drømme.

Kilde: https://hcandersensodense.dk/#, hentet 10. maj 2020

**Møntergården**
Besøg det kulturhistoriske museum Møntergården, hvor de gamle huse og gårdrum står som på H.C. Andersens tid. Opdag og oplev de smalle stræder og baggårde, der var en del af H.C. Andersens virkelighed som barn. Og kom helt tæt på Odense og Fyn – lige fra Oldtiden og frem til i dag – i museets udstillinger og børnemuseet Histotoriet, hvor alt må røres og prøves. I Histotoriet er det bedst, hvis børn og voksne følges ad, for udstillingen lægger op til, at børn og voksne taler sammen. Der er derfor ingen forstyrrende skærme og digitale elementer.

Kilde: https://hcandersensodense.dk/#, hentet 10. maj 2020

**Børnekulturhuset Fyrtøjet**
I H.C. Andersens eventyr Elverhøj holder den gamle Elverkonge fest. Troldgubben fra Norge er inviteret sammen med andre sære gæster fra folketroen. Det ender med bryllup. Fyrtøjets eventyrscenografi og kostumer er inspireret af denne fortælling. Velkommen indenfor hos elverne. Du må røre ved alt. Lytte, lege og forandre. Lad tiden gå i stå og vær sammen med dem, du holder af, i en helt anden verden.

Kilde: https://montergarden.dk/faste-udstillinger/udstilling/elverhoj-i-bornekulturhuset-fyrtojet/ og https://montergarden.dk/faste-udstillinger/udstilling/histotoriet/, hentet 10. maj 2020

**To turisters anmeldelse af Odense**
Fynbo: Vi kommer fra det sydlige Fyn og tager tit til Odense på familietur, fordi byen har meget at byde på. Udover de mange turistattraktioner er der også gode shoppingmuligheder, cafeer og masser af grønne områder. Vi kan godt lide den hyggelige atmosfære omkring Odense Å. Vi tager ofte med turbåden og sejler rundt og nyder roen på åen og den smukke natur. Billetten gælder til en hel runde med Aafarten. Der er tre stop undervejs: Munke Mose, ZOO, Fruens Bøge og retur igen – og ikke nødvendigvis i den rækkefølge. Sejlturen varer ca. en time. Man kan hoppe af og på undervejs, så turen kommer nemt til at vare en hel dag.

Kineser: Jeg kommer fra Kina, og på min tur i Europa besøgte jeg Odense i Danmark. Jeg ville gerne se, hvor H. C. Andersen er født og opvokset. Det var helt specielt at gå rundt i gaderne, hvor han selv engang har gået og fået inspiration til sine mange eventyr. Jeg så også H.C. Andersens Hus og H.C. Andersen Museum. På museet var der rigtigt meget at læse om H.C. Andersens liv, og jeg var meget begejstret for at se de originale genstande. Men det gjorde også et stort indtryk at se, at H. C. Andersens Hus var så lille. Tænk, at så stor en digter er født i sådan et lille hus.

**FESTIVALER I ODENSE**

Tinderbox er en stor dansk musikfestival i europæisk klasse, der foregår i Tusindårsskoven i Odense i juni. Tinderbox er den engelske titel på H.C. Andersens eventyr Fyrtøjet. Festivalen blev afholdt første gang i 2015, og der er nu omkring 45.000 gæster årligt. Der er mere end 5.000 frivillige tilknyttet i et fællesskab, hvor man er med til at bygge festivalen op fra ingenting til alting.

Tinderbox har et såkaldt ambassadørprogram, hvor man hjælper med at sælge billetter. Man kan tilmelde sig som ambassadør og hjælpe med at sprede budskabet om festivalen og rekruttere venner og personer i eget netværk til at deltage i festivalen ved at sælge billetter. Der er både fordele for ambassadøren, der sælger billetter, og for dem, der køber en billet gennem en ambassadør. Blandt andet belønnes man med point, hver gang man sælger en billet. De optjente point kan bruges til at købe billetter og merchandise.

Bearbejdet efter www.tinderbox.dk, hentet 1. aug. 2020.

Odense Blomsterfestival er en årlig tilbagevendende begivenhed, der foregår i hele byen i august. Festivalen blev første gang afholdt i 1999. Hvert år skabes kreative blomstermiljøer, der pryder Odenses gader og stræder. I løbet af festivalen får vi besøg af tusindvis af gæster fra nær og fjern – både turister og fagfolk. Odense Blomsterfestival brander byen gennem en unik oplevelse med blomster og planter rundt omkring i det centrale Odense. Der bruges ca. 100.000 planter hvert år fra de danske gartnerier for at udsmykke byen, så festivalen brander også gartnerierhvervet. Organisationen bag blomsterfestivalen samarbejder med mange forskellige erhverv, og gennem inddragelse af de besøgende skaber festivalen interesse for blomster og planter som en del af det gode liv udendørs og indendørs. Fra år 2012 har H.K.H. Kronprinsesse Mary været protektor for blomsterfestivalen.

Bearbejdet efter www.blomsterfestival.dk, hentet 1. aug. 2020.

Odense Internationale Film Festival (OFF) er en kortfilmsfestival med en lang og stolt tradition bag sig. Festivalen finder sted hvert år i uge 35. OFF er hele Danmarks internationale, Oscar-kvalificerende kortfilmfestival og med sin opstart i 1975 også landets ældste filmfestival. OFF er en publikumsfest med massiv opbakning i lokalmiljøet. Over hundrede ildsjæle melder sig som frivillige til festivalugen, og endnu flere mennesker gæster festivalen for den høje kvalitet, der leveres. Men OFF er ikke blot en filmfestival i én uge om året. Den lever året rundt og laver lokale såvel som nationale arrangementer både forår, sommer, efterår og vinter. Det gør den blandt andet gennem projektet Film for alle, hvor OFF året rundt støtter den danske filmkultur og arbejder på at dyrke og udbrede mangfoldige filmtilbud til alle.

Bearbejdet efter https://filmfestival.dk/, hentet 1. aug. 2020.

SPIS! Odense Food Festival er en ny, ambitiøs odenseansk madfestival, der sætter kvalitet og smag på menuen. Festivalen holder et stort madmarked på Flakhaven i september.

Det er vigtigt for SPIS! at tilbyde en inkluderende tilgang til mad- og måltidskultur i et program, der appellerer bredt, lokalt, nationalt og på sigt internationalt og bringer mennesker sammen på tværs af alder, etnicitet og uddannelsesgrad. Igennem en eventrække af workshops, foredrag, kokkeskoler, madmarked, film og mere inviteres gæster til at glæde og udfordre smagsløgene og lære nye færdigheder i køkkenet. Samtidig debatteres mad- og måltidskultur sammen med gæsterne. SPIS! samarbejder bredt med kultur- og erhvervsliv samt uddannelsesinstitutioner.

Bearbejdet efter https://spisodense.dk/, hentet 1. aug. 2020.

**DE 5 MEST BESØGTE ATTRAKTIONER I ODENSE**

Er du nysgerrig efter at vide, hvilke attraktioner i Odense der uden tvivl er et besøg værd? Tag familien, din kæreste eller en ven med, og oplev fem fantastiske attraktioner, og del begejstringen med tusindvis af andre besøgende.

**H.C. Andersens fødehjem og barndomshjem**
I Odense har I mulighed for at komme helt tæt på H.C. Andersen, tættere på end nogen andre steder i verden. I kan opleve digterens fødehjem, hvor hans forældre havde indkvarteret sig hos en anden familie, da de levede under fattige kår. I kan også besøge hans barndomshjem, hvilket var stedet, hvorfra han opdagede verden og påbegyndte sit digtereventyr. Derudover vil I, når I går en tur gennem byens gamle gader, kunne mærke stemningen fra dengang og gå på opdagelse i H.C. Andersens fodspor.

Ruten I H.C. Andersens fodspor byder også på en tur i H.C. Andersens Museum, hvor I kan se en enestående samling med over 32.000 genstande fra hans liv. Derudover går ruten også forbi Børnekulturhuset Fyrtøjet. Her er der historiefortælling og teaterforestillinger. Der er også kreative workshops, så børnene på den måde har mulighed for selv at blive ’en del af eventyret’.

**Møntergården**
På ruten I H.C. Andersens fodspor vil I også støde på Møntergården. Her vil I træde ind i en lomme i tiden, hvor livet foregår som på H. C. Andersens tid. I vil altså møde et autentisk bymiljø fra 1800-tallet, hvor I kan gå på brostensbelagte gader mellem områdets høns. I kan også se flere forskellige udstillinger, eksempelvis Fyn – midt i verden, Byens liv og Børnenes baggård.

**Odense Zoo**
Odense ZOO er naturligvis et oplagt valg, hvad enten I skal på familieudflugt, en kærestetur eller en hyggelig dag med vennerne, og havens muligheder er mange. I kan bl.a. komme helt tæt på girafferne og være med til at fodre dem, og I kan se andre dyr blive fodret, tage en skovtur i 12 meters højde i Bøgetoppen, besøge den store nye legeplads Chunga og måske kaste jer ud i en overnatning i shelters på savannen.

Kort sagt er det altså intet problem at få en hel dag til at gå her. Skulle man have lyst til det, er der mulighed for, at man kan nyde sin medbragte mad i den skønne natur ved borde og bænke rundt omkring i haven eller trække indenfor i madpakkehuset, Atollen, eller man kan besøge og bestille mad i en af havens spisesteder.

Odense Zoo er to gange blevet kåret som Europas bedste zoologiske have, og med flere hundredetusinde besøgende hvert år kan der ikke herske nogen tvivl om, at Odense ZOO selvfølgelig er et besøg værd!

**Kunstmuseum Brandts**
Odense er også hjem for Fyns største kunstmuseum, Kunstmuseum Brandts, der ligger ved Brandts Passage og er Danmarks første museum for kunst og visuel kultur. Her kan I opleve museets forskellige udstillinger og events i det unikke gamle bygningskompleks Brandts Klædefabrik, der rummer 4 etager. Museets skiftende udstillinger består oftest af dansk og international billedkunst eller fotokunst. Desuden findes museets permanente samling Værkerne - 250 års kunst set fra Fyn, hvor det er muligt at opleve kunst fra museets egen kunstsamling med værker fra den danske guldalder og frem til modernismen.

**Den Fynske Landsby**
I kan også tage en tur på landet midt inde i byen, hvis I besøger det fynske frilandsmuseum Den Fynske Landsby. Her stræbes der efter at skabe en forståelse af vores fælles kulturhistoriske rødder og være et levende museum, der giver en fornemmelse af livet i de fynske landsbyer i 1800-tallet. Her kan I altså få oplevelsen af at træde direkte ind i den fynske historie, hvor museets aktiviteter og arrangementer er med til at gøre jeres besøg meget autentisk. Museets aktiviteter er tilpasset landbrugets opgaver. De følger derfor årstidernes gang ligesom landbruget. Man kan fx være med til at skaffe mad, som kan tilberedes ved ildsteder eller på gamle komfurer. I har også mulighed for at komme en tur ud og køre med hestevogn.

I løbet af året afholdes der forskellige arrangementer, eksempelvis Ulddag, Morgenvækning af dyrene og Håndværkerdag.

Bearbejdet efter https://www.visitodense.dk/turist/oplevelser/top-attraktioner/de-5-mest-besoegte-attraktioner-i-odense, hentet 10. maj 2020

**FIRE EKSEMPLER PÅ GÅ-UD-STEDER I ODENSE**

**Storms Pakhus, Odense Street Food**
Dette gamle pakhus blev i 2017 lavet om til Odenses første Street Food Market med mere end 20 forskellige madboder og barer. Her kan man sammensætte sin helt egen ’dagens ret’. Konceptet kendes fra andre byer, men de fysiske rammer her i Odense er utroligt hyggelige. Der kan betales med kort i alle madboder og barer i Pakhuset. Hvis man kun har kontanter med i Storms Pakhus, skal man først veksle disse til et kreditkort i den bar, der hedder Vakse Viggo. Man får naturligvis refunderet det beløb, man ikke har brugt på kortet, i samme bar.

**Restaurant Grand**
Restaurant Grand har traditionel stil og høj kvalitet. Her rettes blikket mod fortiden i anerkendelse af hotellets mere end 120-årige historie. Der serveres traditionel og lækker mad. Lokalet er også traditionelt og hyggeligt indrettet med bl.a. flotte gardiner og store lysekroner. Der er altså et samspil mellem maden og indretningen, og på den måde opnår restauranten den traditionsrige atmosfære. Da det er uddannede tjenere, der serverer, kan man som gæst være sikker på en professionel håndtering af mad, vin og gæster. I tilknytning til restauranten findes en mindre bar med et stort udvalg af specialøl, vin og drinks.

**Cafe biografen**
Cafe biografen ligger på Amfipladsen i centrum af Odense. En lys og stemningsfuld cafe, hvor der er plads til mange gæster. Der er et godt køkken og 3 biografsale, hvor der vises alle de små film, der – som man ved – ofte har noget stort på hjerte. Det er ubetinget et sted, der er værd at besøge på grund af atmosfæren og muligheden for at møde folk, der er interesserede i film. Helt klart en kulturel institution!

**Café Cuckoo’s Nest**
God beliggenhed, god mad og mulighed for at lytte til musik karakteriserer denne café. Man får en lækker brunch, og der er virkelig god, behagelig og smilende betjening. Der er meget forskelligt i buffeten, og den er flot anrettet. Café Cuckoo’s Nest ligger centralt. Om sommeren kan man sidde ud til Vestergade, hvor man kan følge livet og høre musikken fra Odenses gågade. Ind mod Brandts Passage ligger caféens gårdhave, der gør det muligt uanset årstid at sidde udenfor. Her er der af og til mulighed for at opleve caféens egen live-musik.

**ODENSE BYS HISTORIE**

**Vikingetiden**
Odense er en af de ældste byer i Danmark. Dens historie begynder for mere end 1000 år siden i den tidsperiode, som hedder vikingetiden. Dengang lå der en hedensk helligdom, der hvor byen ligger nu. En helligdom hed et ’vi’, og derfor kom byen til at hedde ’Odins Vi’. Senere blev det til ’Odense’. Helligdommen lå meget praktisk, der hvor vejene mødtes, og hvor man kunne sejle til ad Odense Å. Det var også praktisk at holde marked på sådan et godt sted.

Et par kilometer fra viet lå en anden hedensk helligdom, som hed ”Thors Lund”. Så byen er sandsynligvis opstået ved siden af disse hellige steder, som mange folk besøgte. I 980-erne – altså for mere end 1000 år siden – byggede Kong Harald Blåtand en ringborg til soldater syd for Odense Å, ved Nonnebakken. Der var sikkert også en kongsgård og nogle huse dengang. I 988 var der en biskop i byen, så da var folk blevet kristne, og de havde en lille trækirke. Helligdommen Odins Vi blev på den tid udskiftet med en stor domkirke, så i 1000-tallet var der allerede to kirker i byen.

**Op- og nedture gennem 700 år**
I 1086 samlede den sidste vikingekonge – Knud den 4. – sine stormænd til krig mod England. Knud besluttede dog at aflyse den, og stormændene blev så sure over, at de havde spildt tiden, at de gjorde oprør. De forfulgte Knud til Odense, hvor han flygtede ind i Albani Kirke. Her blev han slået ihjel 10. juli 1086.

Kong Knud var kristen, og fordi der skete mirakler ved hans grav i kirken, gjorde paven i Rom ham til helgen. Derfor kaldes han nu Knud den Hellige. Dengang troede folk på miraklerne og helgenernes kraft, og de ville gerne besøge Knuds grav. Håndværkere og handlende flyttede til byen, og der blev oprettet hele seks munke- og nonneklostre og to nye sognekirker inden middelalderens slutning i 1536. Der var altså rigtig mange munke og nonner og andre kirkelige personer i Odense i middelalderen.

Omkring 1500 flyttede Kong Hans’ kone, Dronning Christine, til byen med sit hof. Så kom der lidt mere gang i byens liv, for fine folk ville gerne være sammen med de kongelige. Odense fik sin første skole allerede i 1100-1200-tallet. Det var Sankt Knuds Skole, som lå ved domkirken. Nu hedder den 800 år gamle skole Odense Katedralskole.

I 1100-tallet havde munkene bygget to vandmøller i Odense Å. Mølledæmningerne spærrede for skibene, så de næste 650 år kunne man ikke sejle til Odense. Det var ikke heldigt for byen, for næsten alle varer blev transporteret med skib dengang. Odense blev desuden delvis ødelagt af borgerkrig i 1240’erne. Domkirken blev for eksempel brændt ned, og man måtte bygge en ny domkirke – det er den, vi har i dag.

Under svenskekrigene i 1657-60 blev både Odense og resten af Fyn så fattige af soldaternes hærgen, at det tog årtier, før det gik godt igen. Der har altså været både op- og nedgange igennem århundrederne.

**Industrialisering**
Da man nåede år 1800, var Odense Danmarks næststørste by med 6.000 indbyggere. København havde ca. 100.000 og Århus ca. 4.000. Da besluttede man at grave en syv kilometer lang kanal, så man kunne sejle ind i byen. Odense blev en havneby.

I de følgende årtier var Danmark i krise, så udviklingen gik langsomt. København blev bombet af engelske skibe i 1807, og i 1813 gik staten fallit. Først hen imod 1830 begyndte det at gå rigtig godt igen. Da kom der også til at ske noget i Odense. Industrialiseringen begyndte. Det vil sige, at man byggede fabrikker, som kunne støbe jern, og fabrikker som brugte dampmaskiner som energi til for eksempel vævemaskiner. Brandts Klædefabrik, der lavede stof til tøj, opstod i 1850.

Men der kom også sko- og handskefabrikker, bryggerier og brændevinsbrænderier og cigarfabrikker og meget andet. Mange børn og voksne arbejdede på fabrikkerne. De kom både fra byen og som indvandrere fra landsbyerne på Fyn. Man byggede masser af boliger til arbejderne, og byen blev udvidet med for eksempel Kongensgade, Albani-kvarteret og Vesterbro-området.

**Jernbane og infrastruktur i moderne tid**
I 1853 fik Odense både Danmarks første gasværk og Danmarks første vandværk, så der kom både gadelys og rent drikkevand.

Den første jernbanestrækning fra København var åbnet i 1847. Den gik til Roskilde. Der var i midten af 1800-tallet også store planer om en jernbane på Fyn, men på grund af krige og økonomiske problemer blev jernbanen mellem Nyborg og Middelfart via Odense først åbnet i 1865, og i de følgende årtier åbnede jernbaner fra Odense til de andre byer på Fyn. Det betød, at skibstransport mistede betydning, og landtransport vandt frem. I 1900 var byen vokset til 40.000 indbyggere, og den blev ved at vokse. Der opstod mange nye store virksomheder, fx Thrige, som lavede elmotorer og biler, Odense Staalskibsværft (skibe), Odense Eksportslagteri (kød) og en masse fødevare- og nydelsesmiddelindustrier (mad, marcipan, tobak og lignende).

Samtidig voksede byen med tusindvis af små en- og tofamilieshuse, som ligger i en bred ring uden om den gamle by. Odense er kendt for alle disse små huse.

Omkring 1960 havde industrien mistet betydning, og folk arbejdede mere og mere med andre ting. Jernbanetransporten blev mindre, fordi der kom flere lastbiler. Odense Havn var heller ikke så vigtig mere. Siden er der kommet mange nye børnehaver, skoler, gymnasier og andre uddannelsessteder, som beskæftiger beboerne. Odense Universitet blev anlagt i 1965, og i 1988 fik den nye TV-station, TV2, hovedsæde i byen.

Odense har i dag mange turister og er kendt for restaureringen af H.C. Andersen-kvarteret og for genanvendelsen af den store tekstilfabrik, Brandts Klædefabrik, i byens centrum i begyndelsen af 1980’erne.

I dag bor der 158.000 mennesker i Odense by og 188.000 i hele Odense Kommune.

Kilde: Bearbejdet efter https://museum.odense.dk/viden/historie/odenses-historie/odenses-historie.for-boern, hentet 28.04.20`,
    questions: [
      // Velkommen til Odense – H.C. Andersens hjemby
      { type: "short", n: 1, q: "(Velkommen til Odense – H.C. Andersens hjemby) Man kan få forskellige rundvisninger på H.C. Andersen Museum. Hvad koster en rundvisning med fokus på et særligt emne?",
        accept: uniq(combos(["", "den koster", "det koster", "prisen er", "pris"], ["2000", "2.000"], ["", "kr", "kroner", "kr + entré", "kroner + entré", "kr plus entré", "kroner plus entré", "kr og entré", "kroner og entré", "+ entré", "plus entré", "kr + entre", "kr plus entre"])) },
      { type: "short", n: 2, q: "(Velkommen til Odense – H.C. Andersens hjemby) Møntergården har et børnemuseum, der hedder Histotoriet. Hvorfor er det bedst, at børn ser udstillingen sammen med voksne?",
        accept: uniq([
          ...combos(["", "for", "fordi", "da"], ["", "udstillingen lægger op til at", "den lægger op til at", "udstillingen lægger op til"], ["børn og voksne", "de", "voksne og børn", "børnene og de voksne", "de voksne og børnene"], ["taler sammen", "skal tale sammen", "kan tale sammen", "snakker sammen", "skal snakke sammen", "kan snakke sammen"]),
          ...combos(["", "så", "for at"], ["de kan tale sammen", "de kan snakke sammen", "børn og voksne kan tale sammen", "børn og voksne kan snakke sammen", "tale sammen", "snakke sammen"])
        ]) },
      { type: "short", n: 3, q: "(Velkommen til Odense – H.C. Andersens hjemby) En kinesisk turist har besøgt både H.C. Andersens Hus og H.C. Andersen Museum. Hvad var turisten særligt glad for at se inde på museet?",
        accept: uniq(combos(["", "at se", "han var glad for at se", "hun var glad for at se"], ["", "de", "nogle"], ["originale genstande", "originale ting", "ægte genstande", "originale genstande fra h c andersens liv", "originale genstande fra hans liv"])) },
      // Festivaler i Odense
      { type: "short", n: 4, q: "(Festivaler i Odense) Odense Internationale Film Festival (OFF) er en filmbegivenhed i uge 35. Hvad hedder projektet, hvor OFF året rundt støtter dansk filmkultur?",
        accept: ["film for alle", "projektet film for alle", "det hedder film for alle", "projektet hedder film for alle"] },
      { type: "short", n: 5, q: "(Festivaler i Odense) Hvad brander Odense Blomsterfestival ud over Odense og byens liv?",
        accept: uniq(combos(["", "den brander", "festivalen brander", "også"], ["", "de danske", "det danske"], ["gartnerier", "gartnerierne", "gartnerierhvervet", "gartnerierhverv", "gartneri erhvervet", "gartnerierhvervet i danmark", "gartnerbranchen"])) },
      { type: "short", n: 6, q: "(Festivaler i Odense) Tinderbox har et ambassadørprogram, hvor man optjener point ved at sælge billetter. Hvad kan man købe ud over merchandise for disse point?",
        accept: uniq(combos(["", "man kan købe", "købe", "man kan også købe"], ["billetter", "billetter til festivalen", "billet", "billetter til tinderbox", "festivalbilletter"])) },
      { type: "short", n: 7, q: "(Festivaler i Odense) Hvad diskuterer SPIS! Odense Food Festival sammen med gæsterne?",
        accept: uniq(combos(["", "de diskuterer", "de debatterer", "festivalen diskuterer", "de diskuterer om"], ["mad", "madkultur", "madkulturen", "måltidskultur", "måltidskulturen", "mad og måltidskultur", "mad og måltidskulturen", "madkultur og måltidskultur", "mad og måltider", "madkultur og måltidskulturen"])) },
      // Fire eksempler på gå-ud-steder i Odense
      { type: "short", n: 8, q: "(Fire eksempler på gå-ud-steder i Odense) Hvorfor kan man som gæst på Restaurant Grand være sikker på, at den mad og vin, der bliver serveret, bliver håndteret professionelt?",
        accept: uniq(combos(["", "fordi", "fordi det er", "det er", "da det er", "fordi der er", "der er", "fordi de har", "de har"], ["uddannede tjenere", "tjenerne er uddannede", "tjenerne er uddannet", "uddannet tjenere"], ["", "der serverer", "som serverer", "der serverer maden", "der serverer det"])) },
      { type: "short", n: 9, q: "(Fire eksempler på gå-ud-steder i Odense) Kan man betale med kontanter i alle madboder og barer i Storms Pakhus? Svar ’ja’ eller ’nej’.",
        accept: ["nej"] },
      { type: "short", n: 10, q: "(Fire eksempler på gå-ud-steder i Odense) Hvor på Café Cuckoo’s Nest kan man sidde og lytte til caféens egen udendørs live-musik?",
        accept: uniq([
          ...combos(["", "i", "ude i", "man kan sidde i"], ["gårdhaven", "gårdhave", "caféens gårdhave", "cafeens gårdhave", "cafeens gårdhave", "den gårdhave"], ["", "ind mod brandts passage", "mod brandts passage", "ved brandts passage"]),
          "ind mod brandts passage", "mod brandts passage", "ved brandts passage", "ud mod brandts passage"
        ]) },
      // De 5 mest besøgte attraktioner i Odense
      { type: "short", n: 11, q: "(De 5 mest besøgte attraktioner i Odense) Hvor i Odense Zoo kan man spise medbragt mad, hvis man vil sidde indenfor?",
        accept: uniq(combos(["", "i", "inde i", "indenfor i"], ["madpakkehuset", "atollen", "madpakkehuset atollen", "atollen madpakkehuset", "madpakkehuset der hedder atollen", "madpakkehus", "madpakkehuset (atollen)"])) },
      { type: "short", n: 12, q: "(De 5 mest besøgte attraktioner i Odense) Kunstmuseum Brandts har skiftende udstillinger. Hvad består de skiftende udstillinger oftest af udover dansk og international billedkunst?",
        accept: uniq(combos(["", "af", "de består af"], ["fotokunst", "foto kunst", "fotografi", "fotografier", "fotografisk kunst", "dansk og international fotokunst"])) },
      { type: "short", n: 13, q: "(De 5 mest besøgte attraktioner i Odense) I Den Fynske Landsby følger museets aktiviteter årets gang. Hvorfor gør de det?",
        accept: uniq([
          ...combos(["", "fordi", "fordi de er", "de er", "da de er", "museets aktiviteter er", "fordi museets aktiviteter er", "fordi aktiviteterne er", "aktiviteterne er"], ["tilpasset landbrugets opgaver", "tilpasset landbruget", "tilpassede landbrugets opgaver"]),
          ...combos(["", "fordi de følger", "de følger", "fordi"], ["pga landbruget", "på grund af landbruget", "landbruget", "årstidernes gang ligesom landbruget", "landbrugets opgaver"]),
          ...combos(["", "de gør det"], ["for at gøre besøget mere autentisk", "for at gøre besøget autentisk", "for at gøre jeres besøg meget autentisk", "for at gøre besøget meget autentisk", "for at gøre det autentisk", "for at gøre besøget mere ægte"])
        ]) },
      // Odense bys historie
      { type: "short", n: 14, q: "(Odense bys historie) I vikingetiden byggede Kong Harald Blåtand en ringborg ved Nonnebakken. Hvor lå den i forhold til Odense Å?",
        accept: uniq(combos(["", "den lå", "ringborgen lå", "den lå lige"], ["syd", "syd for", "syd for odense å", "syd for åen", "sydligt for åen", "sydligt for odense å", "på sydsiden", "på sydsiden af åen", "på sydsiden af odense å", "sydpå", "mod syd"])) },
      { type: "short", n: 15, q: "(Odense bys historie) Hvilket år åbnede den første jernbane på Fyn, der gik via Odense?",
        accept: ["1865", "i 1865", "år 1865", "i år 1865", "den åbnede i 1865"] }
    ]
  };

  const stress = {
    id: "pd3-21n-2", group: G, real: true,
    title: "Delprøve 2A – Unge og stress",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 45,
    instruction: "Læs teksterne Ida fik stress i gymnasiet og Mange unge føler sig stressede. Herunder er der syv spørgsmål til de to tekster. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A og 2B – varer i alt 65 minutter.)",
    text: `**Tekst 1**

**Ida fik stress i gymnasiet**

Den 18-årige gymnasieelev Ida Jeppesen er en af de mange unge, der pludselig oplevede ikke at kunne magte sin hverdag. Det skete en søndag aften efter en travl weekend med lektier, håndboldtræning og fritidsjob. Hun var i gang med at uploade opgaver på nettet i tysk, dansk og historie, da hendes hænder begyndte at ryste, og hun fik hjertebanken. Det endte med, at hun var sygemeldt med stress de næste to uger.

Ida går nu i 3.g i gymnasiet, og hendes sygemelding skete på andet år, hvor mange gymnasieelever føler sig særligt stressede. På andet år er der ekstra mange skriftlige opgaver, som lærerne ikke altid får samarbejdet godt nok om at fordele jævnt over skoleåret. Det var netop efter en uge med tre skriftlige afleveringer, det gik galt for Ida.

De mange skriftlige opgaver i gymnasiet kan være en af årsagerne til, at mange unge ikke kan klare presset i skolen. En anden årsag kan være, at eleverne ikke altid har lyst til at tale med lærerne om faglige udfordringer og personlige problemer, fordi de oplever læreren som en autoritet, der med karaktererne er med til at afgøre deres fremtid. Sådan var det også for Ida.

Endelig forventer mange unge meget af sig selv, og de sammenligner sig meget med hinanden, både på de sociale medier og i klassen. Sådan er det også i Idas klasse:

”I gymnasiet er der jo prestige i at få høje karakterer. Sådan er det også i høj grad i min klasse, hvor der er en gruppe piger, der næsten altid får 10 og 12. Jeg havde svært ved at klare, at jeg ikke også fik topkarakterer i det hele, og derfor oplevede jeg det som om, jeg ikke var god nok, når jeg fik mine skriftlige opgaver tilbage med en middelkarakter på 4 eller 7, og det blev til sidst for meget for mig og endte med min sygemelding med stress,” siger Ida.

Hun giver dog også politikerne en del af skylden for presset på gymnasieeleverne. Optagelsessystemet til de videregående uddannelser er nemlig indrettet sådan, at et højt karaktergennemsnit er det, der giver direkte adgang til de mest attraktive uddannelser. Det stresser de unge, mener Ida, der i løbet af 3.g har tænkt på, at hun gerne vil læse psykologi efter gymnasiet, men hun tror ikke, at hun vil opnå det krævede karaktergennemsnit.

Ligesom det for Ida selv kom som en overraskelse, at hun fik stress, selvom hun i dag sagtens kan se, at der i tiden op til var klare tegn på det, kom det også for hendes forældre som lidt at et chok, hvordan Ida havde det.

”Ida virkede som om, hun trivedes med konkurrence og med at have travlt, og vi er vant til at have mange jern i ilden i vores familie. Så det var derfor en overraskelse for os, da Ida fik stress. Men det mest overraskende og chokerende for os var nu, at vi slet ikke havde set det komme,” siger Idas mor og fortsætter: ”Vi har fået os nogle gode snakke med Ida og er blevet mere opmærksomme på, at de unge er pressede i dag.”

Idas far er enig, men mener dog ikke, at alt var bedre, da de selv var unge:

”Ida og hendes jævnaldrende har et liv, man kun kunne drømme om for få årtier siden. De kan rejse ud, der er mange uddannelsesmuligheder, og de har generelt meget frihed og tid til sig selv. Til gengæld lægger de unge også mere pres på sig selv for at præstere hver eneste dag i skolen, så de kan holde mulighederne åbne. Så de er på én gang mere privilegerede og udfordrede.”

Det betyder ifølge Idas forældre, at forældreopgaven i dag er anderledes end tidligere. De mener, at det i dag er lige så vigtigt at lære de unge med høje krav til sig selv, at det er helt i orden ikke at få topkarakter for en opgave eller tabe en håndboldkamp, som det er at hjælpe dem med de tyske verber.

**Tekst 2**

**Mange unge føler sig stressede**

Unge i Danmark er mere stressede end nogensinde, og det gælder især pigerne. Forskere mener, at det blandt andet skyldes egne og andres forventninger til dem.

Ifølge den Nationale Sundhedsprofil udarbejdet af Syddansk Universitet og Sundhedsstyrelsen har hver fjerde af de unge mellem 16 og 24 år et højt stressniveau. På anden årgang i gymnasiet, 2.g, er problemet tilsyneladende endnu større. Forskere fra Aarhus Universitet har lavet et studie af to 2.g-årgange på to gymnasier i Aalborg, hvoraf det fremgår, at mere end hver anden elev havde et stress-niveau på højde med den mest stressede femtedel af befolkningen.

**Forventningspres i skolen**
Unge har i dag muligheder, man for blot et par generationer siden ikke havde. De har fx stor økonomisk frihed og stor frihed til at vælge uddannelse. Det presser de unge, der har meget fokus på at opnå topkarakterer, så valgmulighederne er åbne. Dette fokus på at præstere har bredt sig fra skolen til resten af de unges liv. Det mener overlæge Nanna Eller, der arbejder med stressbehandling:

”Når jeg taler med elever i 9. klasse eller gymnasiet, oplever jeg, at det kan være en enorm stressfaktor for dem, at de ikke bare skal gøre, hvad der bliver sagt, men har så mange valg. De har en oplevelse af at være ansvarlige for, at projektet ’mit liv’ bliver en succes,” siger Nanna Eller og fortsætter: ”Samtidig er der kommet højere krav til, hvad det vil sige at være en succes. Det er ikke nok at klare at flytte hjemmefra, få et job og have gode venner – karakterræset i gymnasiet har flyttet fokus over på, at man skal være den bedste til alt, hvad man foretager sig.”¹

For at mindske presset på de unge, har man på nogle gymnasier eksperimenteret med karakterfri klasser. I stedet for at få karakterer har eleverne fået en feedback fra læreren med fokus på, hvor eleverne har udviklet sig i de forskellige fag. Nanna Eller mener, at det er den rigtige vej at gå, og at der generelt bør være mere fokus på læring og mindre på karakterer, da unge mennesker har ekstra meget brug for at blive anerkendt, ikke kun for deres præstationer, men også for at være dem, de er.

**De sociale medier**
De unges højere stress-niveau afspejles også i deres brug af de sociale medier som Snapchat, Facebook og Instagram. Ifølge rapporten # StyrPåSoMe – Er sociale medier faktisk en trussel for unges trivsel? fra Nordisk Ministerråd er konklusionen, at de unges trivsel ikke trues af de sociale medier, men at der dog er en sammenhæng mellem de unges trivsel og deres brug af sociale medier. Rapporten konkluderer nemlig, at unge, der trives i hverdagen, også trives godt med de sociale medier. Det modsatte gør sig gældende for unge, der ikke har det godt.

Michael Birkkjær er en af forfatterne bag rapporten, og han mener, der i høj grad er brug for en nuancering i debatten om sociale medier og trivsel blandt unge. Han mener, at man bør se mere på de problemer, de unge har, i stedet for at skyde skylden på de sociale medier som årsag til problemerne.

”Det vigtigste er at forstå, at de unge ikke adskiller deres liv på de sociale medier fra deres øvrige sociale liv. Det er netop det, som vi kan se i undersøgelsen. Det er en pointe, som mange i den ældre generation ikke har forstået, og derfor skal vi skifte fokus”, siger han.²

**Unge håndterer pres forskelligt**
Ikke alle unge under pres får stresssymptomer. Studiet af de to 2.g-årgange på to gymnasier i Aalborg viser, at de unge, der ikke er stressede, er bedre til at håndtere kravene.

De kan for eksempel prioritere, hvilke opgaver i skolen der er vigtigst og bruge mindre energi på nogle af opgaverne, hvorimod de stressede unge oplever alt som meget vigtigt og derfor mister overblikket. Unge med mindre stress ser også ud til at være gode til at give sig selv tid til at dyrke sport og socialt samvær, og det giver dem en pause fra at skulle præstere. Derfor kan de lettere balancere mellem kravene om præstation og behovet for hvile.

I forhold til uddannelsesvalg er de unge med mindre stress åbne overfor, at der er mange veje til en god uddannelse. De ser på forskellige uddannelsesmuligheder i stedet for at fokusere på enkelte prestigeuddannelser, og det er med til at reducere presset.

**Stress og køn**
I de fleste af de undersøgelser, der er lavet om unge og stress, fremgår det, at piger er mere stressede end drenge. Det høje stressniveau blandt de unge piger kan blandt andet hænge sammen med den perfekthedskultur, der præger mange unge pigers selvforståelse. De skal være en god veninde, en god kæreste, en god datter og ikke mindst en god elev i skolen, der får topkarakterer i alle fag.

At drengene ifølge mange undersøgelser har et lavere stress-niveau og sjældnere rammes af stress og dårlig trivsel end pigerne, kan der være flere forklaringer på. En af forklaringerne er netop, at drenge generelt har en mere afslappet indstilling til skolen og vælger at bruge mindre tid på nogle af opgaverne: ”Drenge lever i højere grad med en selektiv lektiestrategi. De har ikke brug for at få 12 i det hele. Der er nogle få fag, som de koncentrerer sig omkring,” siger Søren Østergaard fra Center for Ungdomsstudier.³ Han mener, at mange drenge går efter at gøre tingene rigtigt 80-90 % af tiden og altså ikke laver alle deres lektier lige grundigt, hvor pigerne i stedet sigter efter at gøre det hele 100 % rigtigt hele tiden. Han mener, det er med til at give drengene en bedre trivsel end pigerne.

Det betyder dog ikke, at drenge ikke får stress, men ifølge Thomas Pape, der rådgiver studerende i stresshåndtering, reagerer drenge med stress tit anderledes end piger: ”Rent kønsmæssigt tænker de stadig, at de skal klare det hele selv. Vi er mænd, og vi skal ikke sige noget, og hvis vi selv har skabt problemerne, så skal vi selv komme ud af det,” siger han.⁴

Drenge ender ifølge Thomas Pape ofte i overspringshandlinger som computerspil og styrketræning, og ofte går der lang tid, hvor de beholder problemerne for sig selv. Drengenes reaktion på stress og det faktum, at færre drenge end piger får stress, betyder også, at drengene er en overset gruppe, der ikke er så meget fokus på, mener han.

Heldigvis kan de fleste unge, både drenge og piger, lære at prioritere deres opgaver, give sig selv lov til at restituere og være åbne overfor, hvad fremtiden kan bringe. På nogle gymnasier har der været forsøg med kurser i stresshåndtering, så den viden, der er om forebyggelse af stress, kan udbredes til gymnasieeleverne.

¹ Derfor bliver flere unge stressede, Videnskab.dk, 21/8 2017.
² Nordisk Samarbejde, 11.6.2019: Ikke belæg for at sociale medier er skadelige for unge.
³ Tv2.dk 25.3.2018: Stigende antal drenge mistrives: - De er begyndt at følge med kvinderne
⁴ Se note 3.`,
    questions: [
      { type: "mc", n: 1, q: "Tekst 1: Hvilket af følgende udsagn om lærerne i gymnasiet er i overensstemmelse med det, der gives udtryk for i teksten?",
        options: ["Lærerne giver for svære skriftlige opgaver for som hjemmearbejde på andet år i gymnasiet.", "Lærerne er ikke gode nok til at koordinere med hinanden, når de giver eleverne skriftlige opgaver for.", "Lærerne er for dårlige til at acceptere, at eleverne kan have faglige eller personlige problemer."], answer: 1 },
      { type: "mc", n: 2, q: "Tekst 1: Hvad er ifølge Ida den afgørende årsag til, at hun blev sygemeldt med stress?",
        options: ["Hun var presset af at skulle have høje karakterer for at komme ind på psykologistudiet.", "Hun havde for lidt selvværd i forhold til de dygtigste elever i klassen.", "Hun skulle aflevere for mange skriftlige opgaver i 3.g."], answer: 1 },
      { type: "mc", n: 3, q: "Tekst 1: Hvilket af følgende udsagn er i overensstemmelse med det, Idas forældre giver udtryk for?",
        options: ["Unge i dag har mindre grund til at føle sig stressede end før i tiden.", "Forældre stiller i dag for store krav til unge sammenlignet med før i tiden.", "De mange muligheder, unge har i dag, skaber et stort forventningspres hos dem."], answer: 2 },
      { type: "mc", n: 4, q: "Tekst 2: Hvilket af følgende udsagn er i overensstemmelse med det, Nanna Eller giver udtryk for om lærernes rolle i forhold til eleverne?",
        options: ["Lærerne skal gøre mere ud af at give respons til eleverne om deres faglige udvikling.", "Lærerne er ikke gode nok til at hjælpe eleverne med at træffe valg i deres liv.", "Lærerne fokuserer for meget på de elever, der får høje karakterer."], answer: 0 },
      { type: "mc", n: 5, q: "Tekst 2: Hvilket af følgende udsagn om unges trivsel og sociale medier er i overensstemmelse med det, der gives udtryk for i teksten?",
        options: ["Unges trivsel har betydning for, hvordan de har det med de sociale medier.", "Unges trivsel er afhængig af, at de adskiller livet på de sociale medier fra deres hverdagsliv.", "Unges trivsel er afhængig af, om de opfatter de sociale medier som afgørende for deres liv."], answer: 0 },
      { type: "mc", n: 6, q: "Tekst 2: Hvilket af følgende udsagn er i overensstemmelse med det, der gives udtryk for i teksten om de pressede unge, der ikke får stress?",
        options: ["De prioriterer ikke en god uddannelse så højt som unge med stress.", "De sørger for også at lave andre aktiviteter end skolearbejde.", "De vælger at lade være med at lave nogle af opgaverne i skolen."], answer: 1 },
      { type: "mc", n: 7, q: "Tekst 2: Hvilket af følgende udsagn er i overensstemmelse med det, der gives udtryk for i teksten om stress og køn?",
        options: ["Der er en større andel af drenge end piger, der klarer sig hurtigt igennem et stress-forløb.", "Der er færre drenge end piger, der får stress, fordi lærere og forældre ikke presser drengene så hårdt som pigerne.", "Der er mindre opmærksomhed på stress blandt drenge, end der er på stress blandt piger."], answer: 2 }
    ]
  };

  const arbejdstid = {
    id: "pd3-21n-3", group: G, real: true,
    title: "Delprøve 2B – Større indflydelse på arbejdstiden for offentligt ansatte",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Større indflydelse på arbejdstiden for offentligt ansatte. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Større indflydelse på arbejdstiden for offentligt ansatte**

Mange medarbejdere på danske arbejdspladser har mulighed for flekstid og for at arbejde hjemmefra. Det er [[0]] de højtuddannede i den private sektor, der har denne mulighed. Mange offentligt ansatte har ikke samme [[1]], hvor og hvornår de arbejder.

Denne forskel på den private og offentlige sektor [[2]] i høj grad, at mange offentligt ansatte arbejder med pleje eller pasning. Her er det nødvendigt, at medarbejderne er fysisk til stede på arbejdspladsen på bestemte tidspunkter.

I flere kommuner ønsker man imidlertid at kunne tilbyde de ansatte større indflydelse på deres arbejdsliv. Flere kommuner har [[3]] planer om eksempelvis at give de ansatte bedre muligheder for at skrue op og ned for arbejdsugens længde og for at møde tidligere eller senere nogle af ugens dage. Det skal dog være noget, man skal aftale med sin leder.

Selv om [[4]] en øget fleksibilitet i den offentlige sektor, fx i forhold til et forbedret fysisk og psykisk arbejdsmiljø, endnu ikke er veldokumenteret, ved man fra en rundspørge blandt kommunalt ansatte, at det har stor betydning for deres tilfredshed, hvor meget de arbejder i forskellige perioder af deres liv. På den baggrund forventer man, at bedre muligheder for at påvirke, hvor og hvornår man arbejder på daglig basis, også vil øge tilfredsheden.

Det kan dog i praksis være svært at tilbyde alle offentligt ansatte et mere fleksibelt arbejdsliv. [[5]] har en del kommunalt ansatte et arbejde, hvor de arbejder med pleje eller pasning og har kontakt med borgerne i faste tidsrum. Hvis en kommune derfor ønsker at give alle deres ansatte mulighed for at arbejde færre timer i perioder, [[6]] dette, at der er andre, der i perioder ønsker at gå op i tid, eller at man øger brugen af midlertidige vikarer. Det tyder dog på, at det er [[7]] at undgå brug af flere vikarer. Nogle unge ansatte vil nemlig gerne arbejde lidt mere i perioder, så de kan holde fri i andre. [[8]] ser det ud til, at de offentligt ansatte i fremtiden også kan få mulighed for et mere fleksibelt arbejdsliv.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["indflydelse på", "problemer med", "interesse for", "planer for"],
        2: ["medfører", "udelukker", "forklarer", "skyldes"],
        3: ["herefter", "alligevel", "derfor", "omvendt"],
        4: ["effekten af", "baggrunden for", "formålet med", "årsagen til"],
        5: ["Desuden", "Som nævnt", "Imens", "Til gengæld"],
        6: ["viser", "sikrer", "kræver", "beviser"],
        7: ["risikabelt", "problematisk", "nødvendigt", "muligt"],
        8: ["Herudover", "Imidlertid", "Derimod", "Således"]
      },
      example: { 0: "primært" },
      answers: { 1: "indflydelse på", 2: "skyldes", 3: "derfor", 4: "effekten af", 5: "Som nævnt", 6: "kræver", 7: "muligt", 8: "Således" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(odense, stress, arbejdstid);

  const X = PD2.EXAMS.pd3;
  const SESSION = "November-december 2021";

  // ---------- Skriftlig fremstilling november-december 2021 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-21n-w1", delprove: 1, real: true, year: 2021, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (nov.-dec. 2021)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din ven Erik. Han har lige fået tilbud om et job i sit firmas hovedkontor, der ligger i en anden by i Danmark. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Tak for sidst, det var hyggeligt. Jeg er spændt på at høre om den koncert, du skulle til. «Hvordan var den så»? " +
        "Som jeg fortalte, har min chef tilbudt mig et job i hovedkontoret. Det er en spændende udfordring, og jeg har sagt ja. I det nye job bliver jeg leder for nogle af mine nuværende kolleger. «Tror du, det bliver svært»? " +
        "Jeg får også nogle længere arbejdsdage. «Hvad tror du, det kommer til at betyde for familielivet»? " +
        "Hovedkvarteret ligger jo ikke her i byen, så der er for langt at cykle på arbejde. Spørgsmålet er, om jeg skal tage bilen eller toget. «Hvad ville du gøre»?\" " +
        "Opgave: Skriv et svar til din ven.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Tak for sidst, det var hyggeligt. Jeg er spændt på at høre om den koncert, du skulle til. Hvordan var den så?\n\n" +
        "Som jeg fortalte, har min chef tilbudt mig et job i hovedkontoret. Det er en spændende udfordring, og jeg har sagt ja. I det nye job bliver jeg leder for nogle af mine nuværende kolleger. Tror du, det bliver svært?\n\n" +
        "Jeg får også nogle længere arbejdsdage. Hvad tror du, det kommer til at betyde for familielivet?\n\n" +
        "Hovedkvarteret ligger jo ikke her i byen, så der er for langt at cykle på arbejde. Spørgsmålet er, om jeg skal tage bilen eller toget. Hvad ville du gøre?",
      underlined: [
        "Hvordan var den så",
        "Tror du, det bliver svært",
        "Hvad tror du, det kommer til at betyde for familielivet",
        "Hvad ville du gøre"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvordan var den så? (koncerten)",
        "Understreget: Tror du, det bliver svært? (at blive leder for sine nuværende kolleger)",
        "Understreget: Hvad tror du, det kommer til at betyde for familielivet? (de længere arbejdsdage)",
        "Understreget: Hvad ville du gøre? (bilen eller toget)",
        "Foreslå, at I mødes og snakker videre om din vens situation."
      ],
      phrases: ["Tak for din mail.", "Tillykke med det nye job!", "Koncerten var …", "Du spørger, om det bliver svært at …", "Det kan godt blive lidt svært i starten, fordi …", "De længere arbejdsdage kommer nok til at betyde, at …", "Hvis jeg var dig, ville jeg …", "Skal vi ikke mødes og snakke videre om det?", "Mange hilsner"],
      model: `Hej Erik

Tak for din mail. Det var også rigtig hyggeligt at ses, og tillykke med det nye job!

Koncerten var fantastisk. Bandet spillede alle de gamle hits, og stemningen var helt i top. Jeg stod tæt på scenen og sang med hele aftenen.

Du spørger, om det bliver svært at være leder for dine nuværende kolleger. Det kan godt blive lidt svært i starten, fordi I har været kolleger på lige fod. Men du er god til at lytte, og hvis du er ærlig og fair, skal de nok respektere dig.

De længere arbejdsdage kommer nok til at betyde, at du får mindre tid sammen med børnene om eftermiddagen. Derfor er det vigtigt, at du og Mette taler om, hvordan I fordeler opgaverne derhjemme.

Hvis jeg var dig, ville jeg tage toget. Så kan du læse eller arbejde undervejs, og du slipper for bilkøer og parkeringsproblemer. Desuden er det bedre for miljøet.

Skal vi ikke mødes en dag i næste uge og snakke videre om det hele? Jeg giver en kop kaffe.

Mange hilsner
Amira`
    },
    {
      id: "pd3-21n-w2a", delprove: 2, real: true, year: 2021, session: SESSION,
      title: "2A: Sygefravær (nov.-dec. 2021)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Sygefravær. " +
        "Diagram: Gennemsnitligt sygefravær i procent inden for fire typer job. " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal): Ledere ca. 1,5 % · Forskere ved universiteter ca. 2,2 % · " +
        "Sygeplejersker ca. 5,5 % · Social- og sundhedsassistenter ca. 7,2 %. " +
        "Kilde: Fraværsrapport 2019. Det Nationale Forskningscenter for Arbejdsmiljø, 2019. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2021n/sygefravaer-diagram.png",
      imageAlt: "Søjlediagram: Gennemsnitligt sygefravær i procent inden for fire typer job. Ledere ca. 1,5 %, forskere ved universiteter ca. 2,2 %, sygeplejersker ca. 5,5 %, social- og sundhedsassistenter ca. 7,2 %.",
      chart: {
        title: "Gennemsnitligt sygefravær i procent inden for fire typer job",
        unit: "%", approx: true,
        source: "Fraværsrapport 2019. Det Nationale Forskningscenter for Arbejdsmiljø, 2019.",
        bars: [
          { label: "Ledere", value: 1.5 },
          { label: "Forskere ved universiteter", value: 2.2 },
          { label: "Sygeplejersker", value: 5.5 },
          { label: "Social- og sundhedsassistenter", value: 7.2 }
        ]
      },
      points: [
        "Beskriv kort hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til nogle af de forskelle, diagrammet viser.",
        "Vurdér, om det er ledelsens eller medarbejdernes eget ansvar at nedbringe sygefraværet. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser det gennemsnitlige sygefravær i …", "… har det laveste sygefravær med ca. … %.", "… har det højeste med ca. … %.", "En årsag kan være, at …", "Desuden …", "Efter min mening er det først og fremmest …", "Medarbejderne har dog også et ansvar.", "Samlet set mener jeg, at …"],
      model: `Sygefravær – et fælles ansvar

Diagrammet viser det gennemsnitlige sygefravær i procent inden for fire typer job. Ledere har det laveste sygefravær med ca. 1,5 %, og forskere ved universiteterne ligger kun lidt højere med ca. 2,2 %. Sygeplejersker har et langt højere fravær på ca. 5,5 %, og social- og sundhedsassistenter har det højeste med ca. 7,2 %.

Der kan være flere årsager til forskellene. Sygeplejersker og social- og sundhedsassistenter har et fysisk hårdt arbejde, hvor de løfter patienter og arbejder i skiftende vagter. De er også tæt på syge mennesker og bliver derfor lettere smittet. Desuden kan de ikke arbejde hjemmefra, hvis de er lidt sløje. Ledere og forskere sidder mest ved et skrivebord og kan selv planlægge deres arbejdsdag.

Efter min mening er det først og fremmest ledelsens ansvar at nedbringe sygefraværet. Det er ledelsen, der bestemmer, hvor mange medarbejdere der er på en vagt, og hvordan arbejdet er organiseret. Hvis der er for få ansatte, bliver de andre stressede og nedslidte. Ledelsen kan for eksempel sørge for gode hjælpemidler, så personalet ikke får ondt i ryggen, og lave vagtplaner, der giver tid til at hvile. Det er også vigtigt, at lederen taler med medarbejdere, der ofte er syge, og spørger, hvad arbejdspladsen kan gøre for at hjælpe.

Medarbejderne har dog også et ansvar. De skal passe på deres helbred, fx ved at sove nok, motionere og bruge de hjælpemidler, der er. Desuden skal de sige til, hvis noget på arbejdspladsen ikke fungerer. Man må heller ikke melde sig syg, hvis man bare ikke har lyst til at gå på arbejde.

Samlet set mener jeg, at det er et fælles ansvar, men at ledelsen har det største ansvar, fordi den har magten til at ændre arbejdsforholdene.`
    },
    {
      id: "pd3-21n-w2b", delprove: 2, real: true, year: 2021, session: SESSION,
      title: "2B: Klimaforandringer og ansvar (nov.-dec. 2021)",
      kind: "Prøveopgave · forslag og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Klimaforandringer og ansvar. " +
        "Der tales meget om, at de klimaforandringer, vi oplever nu med ekstremt vejr, oversvømmelser og tørke, vil blive endnu værre i fremtiden, hvis ikke vi nedbringer udledningen af CO2. " +
        "Her er der nogle forslag til, hvad den enkelte selv kan gøre for at nedbringe CO2-udledningen: " +
        "• Undlade at rejse med fly • Sortere affaldet • Tage cyklen eller gå til arbejde eller skole • Undlade at købe plastikprodukter • Købe genbrugstøj • Spise plantebaseret. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Undlade at rejse med fly", "Sortere affaldet", "Tage cyklen eller gå til arbejde eller skole", "Undlade at købe plastikprodukter", "Købe genbrugstøj", "Spise plantebaseret"],
      points: [
        "Fortæl kort om noget, du har oplevet eller hørt om, der er påvirket af klimaforandringer.",
        "Kommenter et eller to af forslagene fra listen.",
        "Vurder, om det er den enkeltes eller samfundets ansvar at nedbringe udledningen af CO2. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Sidste sommer oplevede jeg …", "Forskerne siger, at …", "Et af forslagene på listen er at …", "Det er et godt forslag, fordi …", "Det er svært for mig, fordi …", "Efter min mening er det både … og …", "Til gengæld kan den enkelte ikke …", "Alt i alt mener jeg, at …"],
      model: `Klimaet er vores fælles ansvar

Sidste sommer var der et voldsomt skybrud i min by. På kun en time faldt der mere regn, end der normalt falder på en måned. Mange kældre blev oversvømmet, også i vores opgang, og vi måtte smide møbler og gamle billeder ud. Forskerne siger, at sådanne skybrud bliver mere almindelige på grund af klimaforandringerne.

Et af forslagene på listen er at undlade at rejse med fly. Det er et godt forslag, fordi flyrejser udleder meget CO2. Men det er svært for mig, fordi min familie bor i et andet land, og det tager flere dage at komme derhen med tog. Derfor prøver jeg i stedet at flyve sjældnere. Et andet forslag er at spise plantebaseret. Det synes jeg er lettere. Vi har indført to kødfrie dage om ugen derhjemme, og det er både billigere og sundere.

Efter min mening er det både den enkeltes og samfundets ansvar at nedbringe udledningen af CO2, men samfundet har det største ansvar. Den enkelte kan gøre en forskel ved at ændre sine vaner, og når mange gør det samme, betyder det noget. Desuden kan forbrugerne påvirke virksomhederne ved at vælge klimavenlige produkter.

Til gengæld kan den enkelte ikke løse problemet alene. Det er politikerne, der kan bygge vindmøller, udbygge den kollektive trafik og indføre afgifter på det, der forurener meget. Hvis toget er dyrere og langsommere end bilen, er det svært at bede folk om at lade bilen stå. Samfundet skal derfor gøre det let og billigt at træffe de grønne valg. Desuden skal landene samarbejde, fordi CO2 ikke stopper ved grænsen.

Alt i alt mener jeg, at vi alle skal bidrage, men at de store forandringer kun kan ske, hvis politikerne tager ansvaret og laver de rigtige rammer.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål november-december 2021 ----------
  // q = the obligatory question (this booklet has no situation introduction before it);
  // follow = the suggested follow-up question(s). The picture sheet's own captions are the captions.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, november-december 2021)";
  const intro = emne => `Her er der to billeder, som viser nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-21n-o-a", title: "Klima og forbrug", session: SESSION, year: 2021, real: true, credit,
      intro: intro("Klima og forbrug"),
      pictures: [
        { file: "images/pd3-2021n/klima-og-forbrug-1.jpg", caption: "Madspild", credit,
          alt: "En kvinde i et køkken har lige været ude at handle og har fyldte indkøbsposer på gulvet. Hun står ved et fyldt køleskab og hælder mad fra en gryde ned i skraldespanden.",
          words: ["madspild", "et køleskab", "en skraldespand", "rester", "at smide ud"] },
        { file: "images/pd3-2021n/klima-og-forbrug-2.jpg", caption: "Ny elektronik", credit,
          alt: "To unge mænd står foran vinduet i en elektronikforretning, hvor et skilt reklamerer for en ny version af en 5G-smartphone. Den ene holder sin telefon i hånden.",
          words: ["en elektronikforretning", "en smartphone", "en ny version", "et udstillingsvindue", "at opgradere"] }
      ],
      first: {
        A: {
          q: "Der er mange, der smider mad ud, selvom det godt kan spises. Hvorfor tror du, de gør det?",
          follow: "Hvad mener du, den enkelte kan gøre for at undgå madspild?",
          answer: "Jeg tror, mange køber for meget ind, fordi de handler, når de er sultne, eller fordi der er tilbud som \"tre for to\". Så når de ikke at spise det hele, før det bliver for gammelt. Andre stoler blindt på datoen på pakken og smider maden ud, selvom den stadig er god. Desuden har mange travlt og laver ikke mad af resterne. På billedet har kvinden lige købt ind, så hun smider den gamle mad ud for at få plads.",
          followAnswer: "Man kan planlægge ugens måltider og skrive en indkøbsseddel, så man kun køber det, man har brug for. Det er også en god idé at kigge i køleskabet, før man handler. Rester kan man spise til frokost næste dag eller fryse ned. Desuden skal man huske, at \"bedst før\" ikke betyder \"dårlig efter\". Man kan lugte og smage på maden. Der findes også apps, hvor man kan købe overskudsmad billigt fra bagere og supermarkeder."
        },
        B: {
          q: "Der er nogle, der køber en ny smartphone, selvom den gamle stadig virker. Hvorfor tror du, de gør det?",
          follow: "Mener du, der kan være nogen problemer ved, at man køber en ny smartphone, selvom den gamle stadig virker? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, at mange gerne vil have det nyeste, fordi de nye telefoner har et bedre kamera, et hurtigere netværk som 5G eller et smartere design. Reklamerne fortæller hele tiden, at man går glip af noget, hvis man ikke har den nye model. For nogle unge er telefonen også et statussymbol, og de vil ikke være den eneste i klassen med en gammel telefon. Desuden kan man ofte få en ny telefon billigt sammen med et abonnement.",
          followAnswer: "Ja, det mener jeg. En smartphone indeholder metaller, som skal graves op af jorden, ofte under dårlige forhold for arbejderne. Produktionen udleder også meget CO2, og mange gamle telefoner ender i en skuffe eller i skraldespanden i stedet for at blive genbrugt. Det koster desuden mange penge for den enkelte. Jeg synes, man skal bruge sin telefon, så længe den virker, og eventuelt få et nyt batteri i stedet for at købe en ny."
        }
      },
      second: {
        q: "Nogle mener, der skal være højere afgifter på fx kød, flyrejser, elektronik og andre produkter, der er forbundet med et stort CO2-udslip. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Hvad tror du, højere afgifter vil betyde for forbruget blandt højtlønnede og lavtlønnede?",
        answer: "En fordel er, at folk vil købe mindre af de produkter, der forurener meget, fordi de bliver dyrere. Så falder CO2-udslippet. Staten får også flere penge, som kan bruges på grøn energi eller på at gøre togbilletter billigere. En ulempe er, at det rammer familier med lave indkomster hårdest. Desuden kan danske butikker miste kunder, hvis folk i stedet køber varerne i udlandet eller på nettet.",
        followAnswer: "Jeg tror ikke, at de højtlønnede vil ændre deres forbrug ret meget. De har råd til at betale lidt mere for en bøf eller en flyrejse til Thailand. De lavtlønnede bliver derimod nødt til at skære ned, for eksempel ved at spise mindre kød eller holde ferie i Danmark. Det kan føles uretfærdigt, hvis det kun er de rige, der har råd til at flyve. Derfor synes jeg, at staten skal give pengene tilbage til de lavtlønnede, fx gennem lavere skat."
      },
      conclusion: ""
    },
    {
      id: "pd3-21n-o-b", title: "Transportvaner", session: SESSION, year: 2021, real: true, credit,
      intro: intro("Transportvaner"),
      pictures: [
        { file: "images/pd3-2021n/transportvaner-1.jpg", caption: "Cyklen som transportmiddel", credit,
          alt: "En voksen og to børn med cykelhjelme er på vej på cykel gennem en våd gade i regnvejr. Den voksne vinker, og i baggrunden holder biler og cyklister ved et lyskryds.",
          words: ["en cykelhjelm", "en cykelsti", "regnvejr", "at cykle til skole", "et lyskryds"] },
        { file: "images/pd3-2021n/transportvaner-2.jpg", caption: "Bilen som transportmiddel", credit,
          alt: "En bred gade i en storby set oppefra, hvor biler og en bus holder i lange køer i begge retninger, mens cyklister kører på cykelstierne ved siden af.",
          words: ["en bilkø", "myldretiden", "en bus", "trængsel", "offentlig transport"] }
      ],
      first: {
        A: {
          q: "I Danmark er der mange, der bruger cyklen til transport, fx til og fra arbejde. Hvorfor tror du, det er sådan?",
          follow: "Hvad tror du, det betyder for trafiksikkerheden i byerne, at der er mange, der bruger cyklen til transport?",
          answer: "Jeg tror, det er, fordi Danmark er et fladt land, og fordi der er gode cykelstier næsten overalt. I byerne går det ofte hurtigere at cykle end at køre bil, fordi man slipper for køer og ikke skal lede efter en parkeringsplads. Det er også billigt og sundt, så man får motion hver dag. Desuden er cyklen en del af den danske kultur. Børn lærer at cykle tidligt, og mange cykler også i regnvejr, som man kan se på billedet.",
          followAnswer: "Det kan betyde både noget godt og noget dårligt. Når der er mange cyklister, er bilisterne vant til at se efter dem, og byerne bygger flere sikre cykelstier. Men i myldretiden kan der også være trængsel på cykelstierne, og nogle cyklister kører for hurtigt eller over for rødt. Især i lyskryds sker der ulykker, når lastbiler svinger til højre. Derfor synes jeg, at det er vigtigt at bruge cykelhjelm og lys."
        },
        B: {
          q: "Der er mange, der vælger bilen til transport, fx til og fra arbejde, selvom der i Danmark er gode muligheder for offentlig transport. Hvorfor tror du, det er sådan?",
          follow: "Kan der efter din mening være nogen problemer ved, at der er mange, der vælger bilen til transport? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det især handler om frihed og fleksibilitet. Med bilen kan man køre, når det passer en, og man skal ikke vente på en bus eller skifte flere gange. Mange skal også hente børn i institution eller handle ind på vej hjem, og det er lettere i bil. Hvis man bor på landet, kører bussen måske kun en gang i timen. Desuden synes nogle, at billetterne er dyre, især hvis hele familien skal med.",
          followAnswer: "Ja, det kan der. Som man kan se på billedet, skaber mange biler lange køer i byerne, så folk spilder tid hver dag. Bilerne forurener også luften og udleder CO2, og det er dårligt for både helbredet og klimaet. Desuden larmer de, og de tager meget plads i byen, som man kunne bruge til parker eller cykelstier. Elbiler løser en del af problemet med forureningen, men ikke problemet med køerne."
        }
      },
      second: {
        q: "Der er nogle, der mener, at der skal være mere og billigere offentlig transport. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Hvad tror du, det vil betyde for miljøet, hvis den offentlige transport bliver billigere?",
        answer: "En fordel er, at flere vil lade bilen stå og tage bussen eller toget. Så bliver der færre køer og mindre forurening. Det er også godt for folk med lave indkomster, ældre og unge, som ikke har en bil, fordi de lettere kan komme på arbejde eller i skole. En ulempe er, at det er meget dyrt for staten. Pengene skal findes et sted, måske gennem højere skat eller ved at spare på andre områder som sundhed og uddannelse.",
        followAnswer: "Jeg tror, det vil være godt for miljøet, hvis det får folk til at skifte bilen ud med bus eller tog. En fyldt bus udleder meget mindre CO2 per person end mange biler med kun én person i hver. Men prisen er ikke det eneste, der betyder noget. Hvis bussen ikke kører ofte nok, vælger folk stadig bilen. Desuden risikerer man, at nogle, der før cyklede, begynder at tage bussen, og så hjælper det ikke miljøet."
      },
      conclusion: ""
    },
    {
      id: "pd3-21n-o-c", title: "Uddannelsesvalg", session: SESSION, year: 2021, real: true, credit,
      intro: intro("Uddannelsesvalg"),
      pictures: [
        { file: "images/pd3-2021n/uddannelsesvalg-1.jpg", caption: "Uddannelser, der kræver høje karakterer", credit,
          alt: "En ung kvinde, der lige er blevet student, sidder ved sin computer på værelset og tænker: Jura? Medicin? Psykologi? På bordet ligger et papir om studievalg, og studenterhuen ligger på reolen.",
          words: ["en studenterhue", "studievalg", "et adgangskrav", "et karaktergennemsnit", "at søge ind på"] },
        { file: "images/pd3-2021n/uddannelsesvalg-2.jpg", caption: "Uddannelser med ledige pladser", credit,
          alt: "En underviser står ved tavlen på læreruddannelsen, men der er mange tomme stole i lokalet, og flere af de få studerende kigger på deres telefoner eller ud ad vinduet.",
          words: ["læreruddannelsen", "en studerende", "en underviser", "en ledig studieplads", "jobgaranti"] }
      ],
      first: {
        A: {
          q: "På mange uddannelser er der en begrænsning på, hvor mange studerende der bliver optaget. Hvorfor tror du, der er det?",
          follow: "Mener du, der kan være nogen problemer ved, at der på mange uddannelser er en begrænsning på, hvor mange studerende der bliver optaget? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det især er, fordi staten ikke vil uddanne flere, end der er brug for på arbejdsmarkedet. Hvis alt for mange blev uddannet som psykologer eller jurister, ville mange blive arbejdsløse bagefter. Det er også et spørgsmål om penge og plads. På medicin skal de studerende for eksempel i praktik på hospitalerne, og der er kun et bestemt antal pladser. Derfor bliver de ansøgere optaget, der har det højeste karaktergennemsnit.",
          followAnswer: "Ja, det mener jeg. Når kun de unge med de højeste karakterer kan komme ind, skaber det et stort pres allerede i gymnasiet, og nogle får stress. Desuden er det ikke sikkert, at den med det højeste gennemsnit bliver den bedste læge. Det kan være lige så vigtigt at være god til at lytte og tale med patienter. Derfor synes jeg, at det er godt, at man også kan blive optaget i kvote 2 på grund af erfaring og motivation."
        },
        B: {
          q: "Der er ofte ledige studiepladser på uddannelserne til lærer og pædagog, selvom der næsten er jobgaranti. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved, at der er ledige studiepladser på uddannelserne til lærer og pædagog. Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det skyldes, at mange unge synes, at lønnen er for lav i forhold til ansvaret. Lærere og pædagoger har et vigtigt, men også hårdt arbejde med store klasser, mange børn og meget dokumentation. Medierne skriver tit om stress og dårlige arbejdsforhold i folkeskolen og i daginstitutionerne. Desuden har jobbene ikke så høj status som fx at være læge eller jurist. Mange unge vil hellere have en uddannelse, som deres venner og familie synes er fin.",
          followAnswer: "Ja, det er et stort problem. Om nogle år kommer der til at mangle uddannede lærere og pædagoger, og så må skoler og børnehaver ansætte folk uden uddannelse. Det kan gå ud over kvaliteten, og børnene får ikke den bedste start på livet. Når der mangler personale, får de ansatte også travlere, og så bliver flere syge eller stopper. Derfor synes jeg, at politikerne skal gøre uddannelserne mere attraktive, fx med højere løn."
        }
      },
      second: {
        q: "Der er nogle unge, der tager et eller to års pause efter gymnasiet, før de vælger uddannelse. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Hvad tror du, det betyder for de unges uddannelsesvalg, at de har holdt et eller to års pause?",
        answer: "En fordel er, at de unge bliver mere modne og ved bedre, hvad de vil. Så er der færre, der starter på en forkert uddannelse og falder fra, og det sparer samfundet penge. Mange arbejder også i sabbatåret og betaler skat. En ulempe er, at de unge bliver ældre, før de er færdige med deres uddannelse. Så kommer de senere ud på arbejdsmarkedet, og det betyder færre år, hvor de bidrager med deres viden som færdiguddannede.",
        followAnswer: "Jeg tror, at mange træffer et bedre valg, fordi de har prøvet noget andet end skolen. Hvis man har arbejdet på et plejehjem eller rejst i et andet land, finder man måske ud af, hvad man brænder for. Nogle opdager, at de hellere vil være håndværkere end akademikere. Andre kan bruge pausen til at forbedre deres karakterer eller få erfaring, så de kan søge ind i kvote 2. Men der er også nogle, der mister lysten til at studere igen."
      },
      conclusion: ""
    }
  );
})();
