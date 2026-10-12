// Prøve i Dansk 3, maj-juni 2023 – læseforståelse, transcribed from the exam papers
// (Læseforståelse 1: opgavehæfte produktionsnr. 15 and tekstsamling "Sønderjylland" nr. 14;
// Læseforståelse 2: opgavehæfte nr. 17 and teksthæfte nr. 16).
// The answers are the official ones from the censor- og eksaminatorhæfte (rettenøgler, nr. 19),
// with the corrections from the forcensur passed on to us (delprøve 1 items 5, 6, 8).
// The short-answer accept lists add reasonable variants of the vejledende rettenøgle.
// Pictures from the tekstsamling are left out (their captions are not needed for any answer).
// Points at the exam: delprøve 1 = 15 × 1, 2A = 3 × 2, 2B = 5 × 2, delprøve 3 = 8 × 1 → 39 points.
// The app scores every question as 1, so 2A/2B count half as much here as at the exam.
//
// Also: skriftlig fremstilling (produktionsnr. 18) and mundtlig kommunikation delprøve 2
// (picture sheets, illustrations by Niels Roland, cropped into images/pd3-2023m/, and the
// censor- og eksaminatorhæfte for the oral exam, produktionsnr. 21, which gives the examiner's
// introductions, the obligatory questions and the suggested follow-up questions).
// Task wording, the friend's e-mail, the questions and the chart labels are copied from the papers.
// The chart values are read off the bar chart (ca.-values). All model answers are our own
// (the papers have none).

(function () {
  const G = "PD3 maj-juni 2023";

  // All combinations of the parts (each part is a list of alternatives; "" = optional).
  const combos = (...parts) => parts.reduce((acc, alts) => {
    const out = [];
    acc.forEach(a => alts.forEach(b => out.push(`${a} ${b}`.replace(/\s+/g, " ").trim())));
    return out;
  }, [""]);
  const uniq = list => [...new Set(list.filter(Boolean))];

  const sonderjylland = {
    id: "pd3-23m-1", group: G, real: true,
    title: "Delprøve 1 – Sønderjylland",
    kind: "Læseforståelse 1 · søg informationer, svar kort",
    level: 3, minutes: 25,
    instruction: "Søg informationer i tekstsamlingen Sønderjylland. Brug indholdsfortegnelsen. Svar præcist og kort på spørgsmålene. Der gives 1 point for hvert korrekt svar.",
    text: `**Indhold**

Sønderjyllands historie … 3
   Genforeningen … 4
   Det tyske mindretal i Sønderjylland … 4
Tre historiske attraktioner i Sønderjylland … 5
   Sønderborg Slot … 5
   Historiecenter Dybbøl Banke … 6
   Frøslevlejrens Museum … 6
Madtraditioner i Sønderjylland … 8
   Pølser … 8
   Det sønderjyske kaffebord … 8
Vandreruter i Sønderjylland … 9
   Gendarmstien … 9
   Hærvejen … 9
   Marskstien … 10
   Camino Haderslev Næs … 10
At flytte til Sønderjylland … 11
   Tilflytterservice … 11
   Mød tre tilflyttere … 12

**SØNDERJYLLANDS HISTORIE**

I århundreder var Sønderjylland et omstridt grænseland på kanten af det danske rige. Af den grund har landsdelen på flere områder en historie, som afviger fra resten af Danmarks.

Landsdelen var fra begyndelsen af 1200-tallet adskilt fra det danske kongerige. Fra 1326 til 1867 var området en del af Slesvig, der var et selvstændigt hertugdømme, der dog fra midten af 1400-tallet hovedsageligt hørte under den danske konge. Fra midten af 1800-tallet udviklede modsætninger mellem dansk og tysk sig til en national konflikt. Konflikten kulminerede i Treårskrigen (1. Slesvigske Krig, 1848-50) og krigen i 1864 (2. Slesvigske Krig), som Danmark tabte. Det danske nederlag i 1864 førte til mere end 50 år under tysk herredømme.

Efter 2. Slesvigske Krig i 1864 blev landsdelen indlemmet i først Preussen og fra 1871 i Det Tyske Kejserrige. Efter 1. Verdenskrigs afslutning godt et halvt århundrede senere blev Slesvig delt. Her blev den nordlige del (det nuværende Sønderjylland) efter en folkeafstemning i 1920 indlemmet i den danske stat – det, der siden er blevet kendt som Genforeningen. Grænsedragningen skabte et nationalt mindretal på begge sider af den nuværende dansk-tyske grænse.

Kilde: Bearbejdet efter: https://danmarkshistorien.dk/vis/materiale/soenderjysk-historie-fra-aar-1000-og-frem/, hentet 01.04.22

**Genforeningen**
Hele Slesvig med det nuværende Sønderjylland var fra 1864 en del af Preussen (fra 1871 Det Tyske Rige). I 1918 tabte Tyskland 1. Verdenskrig, og ved de efterfølgende fredsforhandlinger kom den danske regering med et krav om, at der skulle være folkeafstemninger i de nordligste områder af Tyskland om landsdelenes fremtidige tilhørsforhold. Det blev vedtaget med Tysklands underskrivelse af fredsaftalen Versaillestraktaten i 1919.

Den 10. februar 1920 blev der stemt i den såkaldt nordlige zone, der gik fra grænsen ved Kongeåen og til den nuværende grænse. Her stemte 75 procent for atter at blive dansk. En måned senere var der afstemning i den sydlige zone, der blandt andet omfattede Flensborg samt øerne Sylt og Föhr. Her var resultatet lige omvendt, idet 80 procent stemte for at forblive tysk. Resultaterne af folkeafstemningerne betød, at Nordslesvig/Sønderjylland vendte tilbage til Danmark. Fra den 15. juni 1920 var Sønderjylland en del af Danmark igen, og derfor kaldes denne dag Genforeningsdagen, og i dagene den 10. og 11. juli 1920 blev Genforeningen markeret gennem kong Christian 10.s indtog i Sønderjylland og en stor folkefest på Dybbøl Banke. Genforeningsfesten afholdtes på det sted, hvor det danske nederlag i 1864 havde udspillet sig.

Kilde: Bearbejdet efter: https://indd.adobe.com/view/6ef76206-5e71-4d7b-9c99-cd45539e1170, hentet 01.04.22

**Det tyske mindretal i Sønderjylland**
’Det tyske mindretal’ er betegnelsen på den tysksindede befolkningsgruppe, der nu bor i Sønderjylland. Den omfatter ca. 15.000 mennesker, som taler både tysk og dansk samt dialekten sønderjysk. Mindretallet kalder også Sønderjylland for Nordslesvig (Nordschleswig) med henvisning til grænsedragningen i 1920, hvor det tidligere hertugdømme Slesvig blev delt.

I Sønderjylland findes en række tyske skoler, børnehaver, biblioteker og foreninger. Derudover har mindretallet avisen Der Nordschleswiger og det politiske parti, Slesvigsk Parti.

Det tyske mindretal opfatter sig selv som tyske nordslesvigere, det vil sige som danske statsborgere med tysk identitet og stærk forankring i den sønderjyske region. Dette er parallelt med det danske mindretal i Sydslesvig, som opfatter sig selv som tyske statsborgere med dansk sindelag. Det tyske mindretal er som det eneste i Danmark anerkendt som et nationalt mindretal. Det skete med København-Bonn-erklæringerne i 1955, hvor også det danske mindretal i Sydslesvig blev formelt anerkendt.

Kilde: Bearbejdet efter: https://graenseforeningen.dk/om-graenselandet/graenselandets-mindretal/det-tyske-mindretal, hentet 01.04.22

**TRE HISTORISKE ATTRAKTIONER I SØNDERJYLLAND**

**Sønderborg Slot**
Sønderborg Slot er med sin storslåede beliggenhed ved indsejlingen til Sønderborg et nationalt dansk ikon. Slottet rummer næsten 800 års dramatisk historie om Sønderjylland og Slesvig. De mange rum byder på moderne udstillinger om Sønderjyllands og grænselandets omskiftelige historie, den danske kong Christian 2.s fangenskab på slottet, det danske nederlag i 1864 og de mange danskes deltagelse i 1. Verdenskrig på tysk side inden Genforeningen i 1920.

Kilde: https://msj.dk/soenderborg-slot/, hentet 01.04.22

**Den nye udstilling**
Med den nye permanente udstilling 100 år med Danmark – Sønderjylland siden Genforeningen på Sønderborg Slot kan man få et indtryk af de 100 år, der er gået siden Genforeningen. Udstillingen er den hidtil mest ambitiøse på Sønderborg Slot og den største satsning siden 1970’erne. I fem rum på omkring 450 m² tager udstillingen gæsten gennem hundrede års dramatisk grænselandshistorie, der også omfatter både industri og ringridning.

Historien vises med en lang række genstande fra høj og lav, dansk og tysk, hverdag og kamp. Udstillingen indeholder både en rigdom af originale genstande fra kendte og ukendte sønderjyder samt digitale og interaktive formidlinger. Der er bl.a. en twittervæg, hvor man kan skrive opslag, og på tre andre vægge kan man opleve film, som fortæller om de dramatiske år i skyggen af nazismen. Udstillingen er både til den historieinteresserede, den nysgerrige, den som vil lære, den unge, den gamle – kort fortalt er udstillingen både for børn og voksne.

Kilde: Bearbejdet efter: https://msj.dk/udstillinger/soenderjylland-1920-2019/ /https://msj.dk/oplev-sonderborg-slot/, hentet 01.04.22

**Historiecenter Dybbøl Banke**
Historiecenter Dybbøl Banke er et godt bud på en spændende seværdighed i Sønderjylland. Museet har noget for alle aldersgrupper, så der er garanti for en stor oplevelse for hele familien.

Her kan man genopleve det historiske slag mellem danskerne og preusserne i 1864. Man kan blandt andet se film om 1864, tage en tur rundt i skanseanlægget eller gå en tur på den tidligere slagmark. Man kan få et indblik i soldaternes hverdag i den store baraklejr, Soldaterbyen, og den rekonstruerede danske skanse. Her er der både kanoner, smedje, butik, udstilling, legeplads og mange andre sjove aktiviteter og spændende fortællinger. Derudover er der plads til at få et hvil fra kampens strabadser og spise sin medbragte madpakke. Man kan downloade forskellige apps, og i den, der hedder Rute 1864, kan man få informationer om personerne bag områdets mange mindesten samt se gamle fotografier fra området. På den måde får formidlingen af historien en helt ny dimension.

Kilde: Bearbejdet efter: https://1864.dk/en-sevaerdighed-i-soenderjylland-som-helt-sikkert-er-et-besoeg-vaerd/, hentet 01.04.22

**Frøslevlejrens Museum**
På Frøslevlejrens Museum kan man komme på en lærerig rejse i danmarkshistorien. Man kan se forskellige udstillinger, der skildrer fangernes liv i lejren under og efter 2. Verdenskrig.

Frøslevlejren blev bygget som tysk interneringslejr i 1944 under den tyske besættelse af Danmark. Flere tusinde danskere sad i lejren som Det Tyske Sikkerhedspolitis fanger. Faktisk passerede cirka 12.000 fanger gennem Frøslevlejren i de cirka ni måneder, lejren eksisterede. Lejren blev bygget for at undgå deportationer af danskere til koncentrationslejre i Tyskland. Men imod alle aftaler blev cirka 1.600 frøslevfanger alligevel sendt videre til de tyske kz-lejre.

Frøslevlejren er helt speciel i europæisk sammenhæng. Tyskerne accepterede nemlig, at det danske fængselsvæsen stod for fangernes forplejning. Derfor forekom sult og sygdom stort set ikke i Frøslevlejren – i modsætning til i andre tyske lejre.

Efter krigen skiftede lejren navn til Fårhuslejren. Fra maj 1945 til efteråret 1949 fungerede lejren som internerings- og straffelejr under retsopgøret efter 2. Verdenskrig. I de fire et halvt år sad mere end 5.000 indespærret i Fårhuslejren i kortere eller længere tid, fordi de havde samarbejdet med tyskerne under besættelsen.

Kilde: Bearbejdet efter: https://froeslevlejren.dk/froeslevlejrens-museum/, hentet 01.04.22

**Udstillingerne om Frøslevlejren og Fårhuslejren**
På museet kan man gå på opdagelse i de tre udstillingsbygninger, som museet råder over: hovedvagttårnet og to tidligere fangebarakker.

I den tidligere fangebarak H4 kan man se, hvordan fangerne levede i Frøslevlejren i tiden 1944-1945. En del af rummene står som dengang og giver et autentisk billede af lejren i perioden. I andre rum kan man se udstillinger, der viser den tyske overvågning af lejren. Det giver også et indblik i fangernes hverdag. I barak H6 får man et spændende indblik i Fårhuslejren i efterkrigstiden 1945-1949. Udstillingen har særligt fokus på det tyske mindretal i Sønderjylland, som blev hårdt ramt af retsopgøret.

Kilde: Bearbejdet efter: https://froeslevlejren.dk/froeslevlejrens-museum/, hentet 01.04.22

**Rundvisning og foredrag**
Få mere ud af jeres besøg, bestil en rundvisning eller et foredrag om Frøslevlejrens historie 1944-45 og få et indblik i den periode, hvor lejren husede det tyske sikkerhedspolitis fanger i Danmark. Få blandt andet viden om deres dagligdag i lejren, fangeselvstyret og den konstante trussel om deportation, der kom til at hænge som en sort sky over lejren.

Rundvisninger foregår i de to originale bygninger hovedvagttårnet og barak H4. Her fortæller rundviseren ved hjælp af originale lydoptagelser, film og genstande om Frøslevlejrens historie og fangernes ophold i lejren. Varighed: 1½ time. Pladskapacitet: Maksimum 20 personer pr. rundvisning. Rundvisningerne er desværre ikke egnede til gangbesværede.

Foredrag foregår i foredragssalen med inddragelse af historiske fotos og originale genstande. Varighed: 1 time. Pladskapacitet: Op til 70 personer.

Efter endt rundvisning/foredrag bør der afsættes tid til at se udstillingerne på egen hånd. Rundvisninger og foredrag er bedst egnet fra 12 år.

Kilde: Bearbejdet efter: https://natmus.dk/museer-og-slotte/froeslevlejrens-museum/rundvisning-og-foredrag/, hentet 01.04.22

**MADTRADITIONER I SØNDERJYLLAND**

**Pølser**
I Sønderjylland er der en lang tradition for at fremstille pølser af god kvalitet. Den sønderjyske tradition for pølsemageri er udviklet af slagtere, der var uddannet i Tyskland. Det er et håndværk, der er gået i arv gennem generationer. Mange af pølsemagerne er også i dag af tysk oprindelse. De fremstiller typer af pølser, som man tidligere ikke havde i det øvrige Danmark, bl.a. ølpølser og kålpølser, samt pølser, der laves på en lidt anden måde end normalt, som fx leverpølse, der er røget i stenovn. Generelt er de sønderjyske pølser krydrede og indeholder meget få eller ingen tilsætningsstoffer.

Kilde: Bearbejdet efter https://graenseforeningen.dk/om-graenselandet/leksikon/poelsemageri-i-soenderjylland, hentet 28.04.22

**Det sønderjyske kaffebord**
Det sønderjyske kaffebord er en institution i landsdelen. At kalde det et ’kaffebord’ er måske lidt misvisende, for det er i langt højere grad kagerne end kaffen, der stjæler billedet. Kaffebordet har sin oprindelse i møder om den danske nationalitetskamp i Sønderjylland, for efter krigen i 1864 kom Sønderjylland under tysk styre og tyske regler, hvilket de dansksindede sønderjyder ikke var tilfredse med. De mødtes derfor ofte i forsamlingshuse for at holde møder og synge danske sange, selv om sidstnævnte officielt var forbudt.

Der blev ikke givet spiritusbevilling til forsamlingshuse, for på den måde forsøgte de tyske myndigheder at forhindre disse møder. Det var således ikke tilladt at nyde alkohol, fx den traditionelle kaffepunch, så danskerne begyndte i stedet at mødes til kaffe- og kagebord. Det krævede ingen spiritusbevilling, og tyskerne kunne ikke forhindre dansksindede taler og sange hen over det veldækkede kagebord. Da intet forsamlingshus havde kapacitet til at lave kager til så mange mennesker, medbragte deltagerne i stedet for selv kager til et fælles kaffebord. Herfra er traditionen med de mange forskellige slags kager til det sønderjyske kaffebord opstået.

Kilde: bearbejdet efter: https://indd.adobe.com/view/6ef76206-5e71-4d7b-9c99-cd45539e1170, side 18, hentet 01.04.22

**VANDRERUTER I SØNDERJYLLAND**

**Gendarmstien**
Gendarmstien forbinder Padborg ved den dansk-tyske grænse med Høruphav på Als. Stien følger den gamle rute langs Flensborg Fjord, hvor danske grænse-gendarmer patruljerede fra 1920 til 1958. Det meste af vejen følger man kysten og går gennem et afvekslende landskab med skove, moser og enge. I 2015 blev den 84 km lange strækning fra Padborg til Skovby certificeret af den europæiske vandreorganisation European Ramblers Association som kvalitetsvandrevej. Den blev den første af sin art i Danmark til at få dette europæiske kvalitetsstempel. Den opfylder kravene til afvekslende landskab, naturattraktioner, udsigter, kulturhistorie, seværdigheder og infrastruktur, stiunderlag og afmærkning.

Grænsegendarmeriet blev dannet i 1839 for at beskytte toldvæsnets embedsmænd ved hertugdømmernes grænse langs floden Elben. Efter nederlaget i 1864 flyttede den danske grænse sig mod nord til Kongeåen – og i 1866 flyttede gendarmeriet med. Ved Genforeningen i 1920 rykkede grænsegendarmerne igen sydpå og patruljerede langs den nuværende grænse fra Vadehavet mod vest til Als’ sydspids mod øst. I 1958 overgik grænsekontrollen til politiet, og gendarmkorpset var historie efter mere end 100 års virke.

Kilde: Bearbejdet efter: https://www.visitsonderjylland.dk/turist/oplevelser/aktiv-sammen/gendarmstien, hentet 01.04.22

**Hærvejen**
Hærvejen er Danmarks ældste landevej, som siden oldtiden har fragtet soldater og folk fra Dannevirke i syd til Viborg i nord og den modsatte vej. Ud over de mange soldater har også kvægdrivere benyttet hærvejen, og derfor kendes den også under navnet Oksevejen.

Vejen følger i store træk det gamle hærvejsspor langs den jyske højderyg og skellet mellem øst- og vestgående vandløb. Undervejs kommer man forbi Hærvejens karakteristiske gamle broer, der er bygget af store sten, bl.a. Gejlå Bro og Povls Bro. I Sønderjylland løber vejen fra grænsen ved Padborg til Vojens, og man kan følge afmærkede ruter på cykel eller til fods.

Kilde: Bearbejdet efter: https://www.visitsonderjylland.dk/turist/oplevelser/aktiv-sammen/haervejen, hentet 01.04.22

**Marskstien**
I 2019 åbnede Marskstien som en 54 km lang vandresti, der giver en enestående mulighed for at vandre gennem et unikt kulturlandskab med store naturoplevelser i Tøndermarsken. Stien er udformet som en rundtur, så man kan starte, hvor man ønsker, samt gå i begge retninger. Undervejs er der otte såkaldte stisløjfer med en længde på mellem 2,7 km og 12 km, som er tiltænkt vandrere, der vil gå en kortere afsluttet rute. Marskstien er en såkaldt trampesti, hvor man primært vandrer på græs. Den bliver klippet efter behov i sommerhalvåret, men nogle steder kan der i perioder forekomme høj bevoksning. Så det gælder om at have fornuftigt fodtøj på.

I forbindelse med Marskstien findes der formidlingsstationer ved Højer Mølle, Vidåslusen og Lægan Pumpestation, hvor man kan lære mere om det særlige marsklandskab. Derudover er der flere steder langs ruten opsat formidlingstavler med mere information.

Marskstien går undervejs gennem fire byer – Rudbøl, Højer, Tønder og Møgeltønder – hvor man kan opleve områdets enestående bygningskultur. For vandrere, der ønsker at tilbagelægge hele ruten, giver byerne også fine muligheder for overnatning.

Kilde: Bearbejdet efter: https://www.visitsonderjylland.dk/turist/oplevelser/aktiv-sammen/marskstien, hentet 01.04.22

**Camino Haderslev Næs**
Ruten Camino Haderslev Næs, der har lånt sit navn fra den verdenskendte pilgrimsrute Camino de Santiago de Compostela, går sammen med Hærvejen gennem Haderslev. Man starter ved Haderslev Domkirke. Den smukke gotiske kirke, der blev opført i perioden 1250-1270, var oprindeligt ikke domkirke, men derimod en såkaldt kollegiatkirke som filial til Slesvig Domkirke. Først efter genforeningen i 1920 blev den domkirke i det nyoprettede Haderslev Stift.

Den naturskønne og kulturhistoriske rute går gennem mark og skov, ad grusstier, landeveje og cykelstier, har kig til bakker og vand og er således en skøn, afvekslende tur. På turen kommer man ud over Haderslev Domkirke forbi yderligere otte kirker. Ruten går også igennem Dyrehaven og langs Haderslev Dam, og ruten er gennemført, når man igen ankommer til Haderslev Domkirke. Camino Haderslev Næs byder, foruden at forbinde områdets ni kirker, på flere historiske huse, naturperler og kuriøse seværdigheder. Det er bl.a. Bulladen ved Brummers Gård på Aarø. Laden stammer fra 1650 og er en ren trækonstruktion, der kendes helt tilbage fra omkring år 1000.

Kilde: Bearbejdet efter: https://www.visitsonderjylland.dk/turist/oplevelser/aktiv-sammen/camino-haderslev-naes, hentet 01.04.22

**AT FLYTTE TIL SØNDERJYLLAND**

**Tilflytterservice**
At flytte sig selv og familien til en ny landsdel kan være en stor mundfuld. Derfor står der i alle de fire sønderjyske kommuner Aabenraa, Haderslev, Sønderborg og Tønder dedikerede Tilflytterguides klar til at vejlede og hjælpe dig og din familie godt på plads, når I flytter til området.

Det sydlige Jylland byder på et uspoleret og autentisk stykke af Danmark. Her venter noget af Danmarks smukkeste og mest unikke natur – alt fra Vadehavet og det flade landskab i vest til bakkede dale og fjordlandskabet i øst. I Sønderjylland får man hele Europa for sine fødder og mulighed for spændende uddannelses- og karrieremuligheder. Kun en kort køretur væk finder man den tyske grænse og metropolen Hamborg med sine 5 mio. indbyggere.

**Vores tilflytterguides er klar til at hjælpe**
I Sønderjylland står vi klar til at byde dig velkommen og hjælpe dig til bosætning i området. Din lokale tilflytterguide vil hjælpe dig med spørgsmål og tilbyder dig en bred vifte af forskellige tilbud, både før og efter din ankomst.

Tilflytterguides tilbyder deres assistance omkring spørgsmål vedrørende flytning og bosætning. Det kan være opklarende spørgsmål omkring boligmuligheder, skoler og andre offentlige muligheder samt sociale og kulturelle tilbud i området.

**Hjælp til medfølgende partnere i hele Syddanmark**
Flytter du – eller overvejer du at flytte – med din partner, som har fået job i Syddanmark? Så tilbyder kommunerne hjælp. I en række kommuner kan man få sparring på mulighederne som medfølgende partner til en medarbejder på en syddansk virksomhed. Det er nemlig vigtigt, at du også finder dig godt til rette i jeres fælles tilværelse i Syddanmark. Hos kommunerne kan du typisk hente hjælp til alt fra karriere- og jobmuligheder, jobsøgningskurser, mentorprogrammer og sociale netværk i området.

Du kan få én-til-én sparring på jobsøgningen, hvis du:
✓ Er ægtefælle eller partner til en højtkvalificeret medarbejder i en virksomhed i Syddanmark
✓ Er bosiddende i én af de syddanske kommuner, eller du og din partner er på vej til at flytte dertil.

Kilde: https://work-live-stay.dk/service-medfoelgende-partnere/, hentet 01.04.22

**Mød tre tilflyttere**

**Mimi og Jon – Fra Washington DC til Tønder**
Mimi og Jon flyttede fra Washington DC, USA, via København til Tønder. De flyttede til Tønder for at spare tid på transport og på grund af de lavere boligpriser. Samtidig er de kommet tættere på Tyskland, hvor Jon har boet og studeret.

Da Mimi fik job og flyttede til Tønder med sin mand, Jon, var udfordringen i begyndelsen, at de især var bekymrede for, om livskvaliteten i Sønderjylland kunne leve op til deres forventninger. De frygtede, at de ikke ville have mulighed for at etablere en social omgangskreds, samt at der ville være et begrænset antal aktiviteter. Heldigvis for Mimi og Jon holdt bekymringerne ikke stik, og de har i dag fået sig en ny stor omgangskreds, og udvalget af aktiviteter har overrasket parret positivt, så de nu er mere aktive, end de var, da de boede i København. De har både været til musikarrangementer og på virksomhedsbesøg, og så nyder de den rige historie, som egnen byder på.

**Støtte fra tilflytterservice**
I selve processen med at slå sig ned husker Mimi, at de fik god støtte fra den lokale tilflytterservice: “Selvom vi fik god støtte derfra, var der dog stadig udfordringer, især med at få min mand, Jon, i job. Jon er amerikaner og højtuddannet, men det tog lang tid, inden han kom i job. Jeg vil gerne rose tilflytterservice, som har været en kæmpe støtte for os i forhold til at skabe netværk og finde jobmuligheder.“

Kilde: https://work-live-stay.dk/mimi-jon-flyttede-koebenhavn-toender/, hentet 01.04.22

**Peter Vestergaard – Muligheder i Sønderjylland**
Lavere huspriser, bedre karrieremuligheder for konen og mulighed for at få familielivet til at hænge bedre sammen gjorde Sønderjylland til det oplagte valg for Peter Vestergaard.

Peter og hans kone Mette kommer oprindeligt fra Nord- og Midtjylland, men flyttede begge til København for at studere. Peter for at læse statskundskab og Mette for at læse medicin. Da deres første barn kom til verden, og Mette skulle i turnus som læge, gav det god mening at skifte bylivet på Nørrebro ud med mere plads og lavere huspriser i Sønderjylland. Peter takkede derfor ja til et job i Miljøstyrelsen og flyttede med sin afdeling til Augustenborg. Parret bosatte sig i Sønderborg, og efter flytningen er endnu et barn kommet til. Peter er siden rykket til Sønderborg Kommune, hvor han nu fungerer som økonomikonsulent.

**Karriere i Sønderjylland**
De vidste, at Mettes vej ind i en lægepraksis var nemmere i Sønderjylland end i København, mens udbuddet af stillinger til én med uddannelse i statskundskab er noget mindre i Sønderjylland end i København. Men det var faktisk ikke så svært for Peter at finde job og gøre karriere, for selvom der er færre stillinger, så er der også færre ansøgere. Og Peter Vestergaard har intet problem med at se sin fremtidige karrierevej forme sig i Sønderjylland:

“Paletten er selvfølgelig lidt ligesom med cafeerne mindre, men kvaliteten er der, og så er der mange spændende udfordringer i kommuner – her er man tættere på borgerne, og det er nemmere at se de direkte afledte effekter af de beslutninger, der træffes,” siger Peter og bemærker om det sønderjyske arbejdsmarked: “Der er samtidig en bevidsthed om, at man har et talentproblem, og man gør en ekstra indsats for at fastholde talenterne i Syddanmark.”

Det betyder blandt andet, at mulighederne for videreuddannelse er gode, og man gør både i kommuner og virksomheder en indsats for at få tilflyttere til at falde godt til i området.

Kilde: https://work-live-stay.dk/syddanmark-fik-familielivet-til-at-haenge-sammen/, hentet 01.04.22

**Mia McCaul – Studieliv med et stærkt sammenhold**
23-årige Mia McCaul kommer oprindeligt fra Aarhus, men flyttede sidste år til Haderslev for at læse grafisk og visuel kommunikation på UC Syd. Her har hun fundet et studiemiljø præget af stærkt sammenhold og ro til at læse. Mia McCaul bor sammen med to studiekammerater i en fire-værelses lejlighed centralt i Haderslev, to minutters gang fra UC Syd.

Før hun flyttede til Haderslev, havde hun hørt, at det var enormt billigt og let at finde en lejlighed i Haderslev, og det viste sig at være rigtigt. Der var flere gode boliger at vælge imellem, og de tre studiekammerater fandt en gammel charmerende lejlighed på 120 kvadratmeter med højt til loftet, hvor de hver har et værelse på 20 kvadratmeter samt fælles stue, køkken og bad. Det betaler de hver især 2.500 kr. for inklusive vand og varme. Mia synes, det er utroligt billigt – og hendes venner i Aarhus er ved at falde ned fra stolen, når de hører, hvad hun betaler i husleje. At huslejen er så billig gør, at hun kan klare sig uden at tage et studiejob, og det er hun rigtig glad for, for så kan hun koncentrere sig om studiet.

Kilde: https://boihaderslev.dk/tilflyttere/studieliv-med-et-staerkt-sammenhold/, hentet 01.04.22`,
    questions: [
      // Søg informationer under Vandreruter i Sønderjylland
      { type: "short", n: 1, q: "(Vandreruter i Sønderjylland) Hvilket materiale er de gamle broer langs Hærvejen lavet af?",
        accept: uniq(combos(["", "af", "lavet af", "bygget af", "de er lavet af", "de er bygget af"], ["store sten", "sten"])) },
      { type: "short", n: 2, q: "(Vandreruter i Sønderjylland) Hvad blev Gendarmstien certificeret som i 2015?",
        accept: uniq(combos(["", "som", "som en", "en", "den blev certificeret som", "certificeret som"], ["kvalitetsvandrevej", "kvalitets vandrevej", "europæisk kvalitetsvandrevej", "kvalitetsvandrevej af european ramblers association"])
          .concat(["den første kvalitetsvandrevej i danmark", "danmarks første kvalitetsvandrevej"])) },
      { type: "short", n: 3, q: "(Vandreruter i Sønderjylland) Hvilket underlag går man på det meste af tiden, når man går på Marskstien?",
        accept: uniq(combos(["", "på", "man går på", "man går primært på", "primært på", "primært"], ["græs", "høj bevoksning", "græs og høj bevoksning", "græs og nogle steder høj bevoksning", "græs og i perioder høj bevoksning",
          "trampesti", "en trampesti", "trampesti med græs", "en trampesti med græs", "græs på en trampesti", "græs trampesti", "græs en trampesti", "en trampesti på græs", "trampesti på græs", "en såkaldt trampesti", "en såkaldt trampesti med græs"])) },
      { type: "short", n: 4, q: "(Vandreruter i Sønderjylland) Hvor mange kirker ligger der på ruten Camino Haderslev Næs?",
        accept: uniq(combos(["", "der ligger"], ["ni", "9"], ["", "kirker"])
          .concat(["ni kirker inklusive haderslev domkirke", "9 kirker inklusive haderslev domkirke", "haderslev domkirke og otte andre kirker", "haderslev domkirke og 8 andre kirker", "haderslev domkirke og yderligere otte kirker"])) },
      // Søg informationer under Madtraditioner i Sønderjylland
      { type: "short", n: 5, q: "(Madtraditioner i Sønderjylland) Hvad kendetegner de sønderjyske pølser ud over at de indeholder få eller ingen tilsætningsstoffer?",
        accept: uniq(combos(["", "de er", "at de er", "de er generelt"], ["krydrede", "krydret", "krydrede pølser"])
          .concat(combos(["", "pølser af", "de er af", "at de er af", "de har", "de er lavet af"], ["god kvalitet", "høj kvalitet"]))
          .concat(combos(["", "pølser", "de er", "at de er", "pølserne er"], ["inspireret af tyske", "inspireret af tyske pølser", "inspirerede af tyske pølser", "inspireret af tysk pølsemageri"]))
          .concat(combos(["", "de er"], ["krydrede og af god kvalitet", "af god kvalitet og krydrede"]))) },
      { type: "short", n: 6, q: "(Madtraditioner i Sønderjylland) Hvem tog kagerne med til det sønderjyske kagebord, når sønderjyderne holdt møder i forsamlingshusene?",
        accept: uniq(combos(["deltagerne", "danskerne", "sønderjyderne", "de dansksindede sønderjyder", "de dansksindede", "deltagerne i møderne", "deltagerne selv"], ["", "selv", "medbragte selv kager", "medbragte kager", "medbragte selv kagerne", "tog selv kager med", "tog selv kagerne med", "tog kagerne med", "selv medbragte kager"])
          .concat(["de medbragte selv kager", "dem der deltog", "dem der deltog i møderne", "mødedeltagerne", "folk selv", "gæsterne", "gæsterne selv"])) },
      // Søg informationer under Tre historiske attraktioner i Sønderjylland
      { type: "short", n: 7, q: "(Tre historiske attraktioner i Sønderjylland) På den nye udstilling på Sønderborg Slot kan man se film på tre af væggene. Hvad kan man gøre på den fjerde væg?",
        accept: uniq(combos(["", "man kan", "at", "man kan på twittervæggen", "på twittervæggen kan man"], ["skrive opslag", "twitte", "skrive opslag og twitte", "twitte og skrive opslag", "skrive et opslag", "skrive opslag på twittervæggen", "skrive opslag på en twittervæg", "skrive opslag på twitter", "skrive tweets", "skrive et tweet"])) },
      { type: "short", n: 8, q: "(Tre historiske attraktioner i Sønderjylland) Hvor længe eksisterede Frøslevlejren under 2. Verdenskrig?",
        accept: uniq(combos(["", "i", "ca.", "i ca.", "cirka", "i cirka", "omkring", "i omkring", "den eksisterede i cirka", "den eksisterede i ca."], ["ni måneder", "9 måneder"])
          .concat(combos(["", "fra", "i"], ["1944-1945", "1944-45", "1944 til 1945", "1944 1945"]))) },
      { type: "short", n: 9, q: "(Tre historiske attraktioner i Sønderjylland) I hvilken barak på udstillingen om Fårhuslejren kan man få indblik i, hvordan livet i lejren var i årene efter 2. Verdenskrigs afslutning i 1945?",
        accept: uniq(combos(["", "i", "i barak", "barak", "i barakken", "barakken", "fangebarak", "i fangebarak", "i den tidligere fangebarak"], ["H6", "h 6"])) },
      // Søg informationer under Sønderjyllands historie
      { type: "short", n: 10, q: "(Sønderjyllands historie) Hvilken dato er Genforeningsdagen?",
        accept: uniq(combos(["", "den"], ["15. juni", "15 juni", "femtende juni", "15/6", "15.6."], ["", "1920"])) },
      { type: "short", n: 11, q: "(Sønderjyllands historie) Er den tysksindede befolkningsgruppe i Sønderjylland officielt anerkendt af Danmark som et nationalt mindretal? Svar ’ja’ eller ’nej’.",
        accept: ["ja", "ja det er den", "ja siden 1955", "ja i 1955"] },
      // Søg informationer under At flytte til Sønderjylland
      { type: "short", n: 12, q: "(At flytte til Sønderjylland) Flere sønderjyske kommuner hjælper medfølgende partnere med karriere- og jobmuligheder. Hvilken slags kurser tilbyder disse kommuner?",
        accept: uniq(["jobsøgningskurser", "jobsøgningskursus", "jobsøgnings kurser", "jobsøgningskurser til medfølgende partnere"]
          .concat(combos(["", "kurser i", "kursus i", "kurser om", "kurser"], ["jobsøgning"]))) },
      { type: "short", n: 13, q: "(At flytte til Sønderjylland) Hvad roser Mimi tilflytterservice for at have støttet med udover at finde jobmuligheder?",
        accept: uniq(combos(["", "at skabe", "skabe", "at få", "med at skabe", "hjælp til at skabe", "til at skabe", "at opbygge", "at finde"], ["netværk", "et netværk", "socialt netværk", "et socialt netværk", "nyt netværk", "et nyt netværk"])) },
      { type: "short", n: 14, q: "(At flytte til Sønderjylland) Hvorfor var det ikke så svært for Peter Vestergaard at få job og karriere i Sønderjylland, selvom udbuddet af stillinger generelt er relativt lavt?",
        accept: uniq(combos(["", "der er", "fordi der er", "der er også", "fordi der også er", "der var", "fordi der var", "der var også", "fordi der også var", "der er færre stillinger men også", "selvom der er færre stillinger er der også"], ["færre ansøgere", "færre ansøgere til stillingerne", "ikke så mange ansøgere", "få ansøgere"])) },
      { type: "short", n: 15, q: "(At flytte til Sønderjylland) Hvorfor har Mia McCaul ikke behov for at tage et arbejde ved siden af sit studie?",
        accept: uniq(combos(["", "fordi", "da"], ["huslejen er billig", "huslejen er så billig", "huslejen er meget billig", "huslejen er lav", "hendes husleje er billig", "hendes husleje er lav", "hun har billig husleje", "hun har en billig husleje", "hun har lav husleje", "hun betaler lav husleje", "hun betaler kun 2.500 kr. i husleje", "huslejen kun er 2.500 kr."])
          .concat(["billig husleje", "lav husleje", "en billig husleje", "den billige husleje", "på grund af den billige husleje", "huslejen er billig 2.500 kr.", "huslejen er billig kun 2.500 kr. inklusive vand og varme"])) }
    ]
  };

  const laeseleder = {
    id: "pd3-23m-2", group: G, real: true,
    title: "Delprøve 2A – Læs skønlitteratur og bliv en bedre leder",
    kind: "Læseforståelse 2 · multiple choice (A-C)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Læs skønlitteratur og bliv en bedre leder. Herunder er der tre spørgsmål til teksten. Til hvert spørgsmål er der angivet tre svarmuligheder: A, B og C. Sæt kryds ved det rigtige svar. Der gives 2 point for hvert korrekt svar. (Læseforståelse 2 – delprøve 2A, 2B og 3 – varer i alt 65 minutter.)",
    text: `**Læs skønlitteratur og bliv en bedre leder**

**Vi læser skønlitteratur for at blive underholdt, men vi kan også bruge litteraturen til at blive klogere på os selv og andre. Det gælder fx for Ditte Simonsen.**

Som topleder har man typisk en travl og krævende arbejdsdag, hvor det er vigtigt at være mentalt og fysisk på toppen hele tiden. Det er måske en af forklaringerne på, at mange topledere dyrker meget sport i deres fritid. Ditte Simonsen, der er leder i en større medicinalvirksomhed, er dog ikke til hård fysisk træning. Hun gør noget andet. Hun læser skønlitteratur:

”Jeg har altid elsket at læse og bruger i dag også skønlitteratur som inspiration til at blive en bedre leder. For når jeg læser skønlitteratur, bliver jeg ikke blot underholdt, jeg bliver også klogere på mennesker,” siger hun og fortsætter: ”For mig forholder det sig sådan, men for nogle kan det måske lyde overraskende, at man kan blive en bedre leder af at læse skønlitteratur. Mange topledere dyrker meget sport for at holde sig i god form og for dermed at være effektive på arbejdet. Læsning af skønlitteratur er jo på mange måder det modsatte af fysisk træning og mål, der skal nås. Det tager tid, og man sidder stille og roligt og slapper af.”

Ditte Simonsen arbejder sammen med to lederkolleger i et ledelsesteam. De har sammen ansvaret for en stor afdeling i virksomheden, men får også tid til at tale om ledelse generelt, og hvad de hver især gør for at blive bedre ledere. Ditte Simonsens kolleger er eksempler på topledere, der dyrker meget sport. De træner i et netværk sammen med andre ledere og har sat sig som mål at gennemføre en ironman. De bruger meget tid på træningen, men den hårde træning og målet om at gennemføre en ironman giver dem både et mentalt og fysisk overskud. ”Det er klart min fornemmelse, at mine kolleger har glæde af deres træning,” siger Ditte Simonsen og fortsætter: ”Jeg tror, at fysisk træning kan give større mentalt og fysisk overskud, og at det kan give mere overskud til at tale med og lytte til fx medarbejderne, hvilket er helt centralt, når man skal lede andre mennesker.”

Det bliver dog aldrig Ditte Simonsens kop te at træne hårdt hver dag. ”Det overskud mine kolleger får af deres hårde fysiske træning, det får jeg gennem læsning. Jeg tror ikke, jeg ville have energi til min familie, hvis jeg som mine kolleger skulle op kl. 5 hver morgen til hård fysisk træning,” siger Ditte Simonsen.

**Skønlitteraturen som inspirationskilde**
Ditte Simonsen læser ikke kun skønlitteratur. Hun læser også faglitteratur om ledelse, men ikke med samme entusiasme. ”Mange ledere vil nok mene, at man som leder kan få mere ud af at læse managementlitteratur end skønlitteratur. Det vil jeg slet ikke afvise. Hvis man ikke interesserer sig for litteratur, så vil man nok ikke få meget ud af at læse romaner og poesi. Så får man ganske givet mere ud af at læse managementlitteratur, der tit rummer konkrete råd til, hvad man kan gøre for at blive en bedre leder. I skønlitteraturen skal man så at sige læse mellem linjerne for at få nogle råd til sin ledelse,” siger Ditte Simonsen.

Ditte Simonsen kan pege på flere områder, hvor litteraturen inspirerer hende mere end managementlitteraturen. ”Sproget er i sig selv en inspiration. Litteraturens sprog er levende og kalder på følelser, krop og sanser, detaljerede scenarier og refleksioner,” siger Ditte Simonsen og fortsætter: ”I managementlitteraturen er sproget ofte fyldt med abstrakte floskler og abstrakte beskrivelser af personers adfærd. Jeg kommer tit til at kede mig, når jeg læser en bog om management, og jeg bliver tit nødt til at springe noget over for at blive færdig. Jeg tror faktisk aldrig, det er lykkedes mig at læse en bog om management fra ende til anden.”

Hun føler sig også inspireret af de mange mennesker og universer, man møder i litteraturen. ”Nogle mennesker synes jeg godt om og andre knap så godt om. Når jeg læser om forskellige menneskers følelser, oplevelser og erfaringer, inspirerer de mig til at reflektere over, hvordan jeg selv er i forhold til mine medarbejdere, og de hjælper mig til at få et mere nuanceret blik på de beslutninger, jeg skal tage.”`,
    questions: [
      { type: "mc", n: 1, q: "Hvilket af følgende udsagn er i overensstemmelse med det, Ditte Simonsen giver udtryk for om skønlitteratur?",
        options: ["Hun synes, det er overraskende, at man kan blive en bedre leder af at læse skønlitteratur.", "Hun læser ikke kun skønlitteratur for at blive klogere på mennesker.", "Hun kan kun slappe af, hvis hun sidder stille og roligt og læser skønlitteratur."], answer: 1 },
      { type: "mc", n: 2, q: "Hvad giver Ditte Simonsen blandt andet udtryk for om sine lederkollegers hårde fysiske træning?",
        options: ["Hun mener, den har en positiv effekt på deres kommunikation med medarbejderne i virksomheden.", "Hun mener, det giver dem mindre energi til deres familier, at de skal op kl. 5 hver morgen.", "Hun mener ikke, de har lige så stor glæde af deres træning, som hun har af at læse skønlitteratur."], answer: 0 },
      { type: "mc", n: 3, q: "Hvorfor foretrækker Ditte Simonsen at læse skønlitteratur frem for managementlitteratur?",
        options: ["Den indeholder individuelle beskrivelser af forskellige mennesker.", "Den indeholder konkrete råd om, hvordan man kan blive en god leder.", "Den er ikke så tidskrævende at læse som managementlitteratur."], answer: 0 }
    ]
  };

  const handicap = {
    id: "pd3-23m-3", group: G, real: true,
    title: "Delprøve 2B – Job og handicap",
    kind: "Læseforståelse 2 · indsæt de manglende tekstdele (A-G)",
    level: 3, minutes: 25,
    instruction: "Læs teksten Job og handicap. I teksten er der fjernet fem tekstdele. Dette er angivet med tallene 1-5. Herunder findes de fem tekstdele samt to ekstra, der ikke passer i teksten. Tekstdelene er angivet A, B, C, D, E, F og G. Vælg bogstavet for den tekstdel, der passer ind i teksten det sted, der er markeret med tallet. Hvert bogstav må kun bruges én gang. Der gives 2 point for hvert korrekt svar.",
    text: `**Job og handicap**

Der mangler arbejdskraft i Danmark, og der er brug for alle hænder og hoveder. Sådan lyder det ofte fra politikere og økonomer. Men det er ikke lige let for alle at få et arbejde. Heller ikke selvom de både har en god uddannelse og har lyst til at gå i gang med en karriere.

Det drejer sig blandt andet om de mennesker, der har et handicap.

[[1]]

Hvis man har et handicap, kan det derfor blive svært at passe et arbejde – men det er bestemt ikke sikkert!

Sikkert er det dog, at der er færre nyuddannede med et handicap, der kommer i arbejde, end nyuddannede uden et handicap. Måske er det ikke så overraskende, men det var alligevel interessant nok til, at VIA University College satte sig for at undersøge det nærmere. Resultatet var rapporten Fra uddannelse til første job – med handicap, som udkom i 2020. Formålet med undersøgelsen var at finde ud af, hvor mange nyuddannede med et handicap, der er tilknyttet arbejdsmarkedet, og på hvilken måde de er det. Ja, og der er store forskelle i tilknytningen til arbejdsmarkedet.

[[2]]

Det er det, man kalder løntilskud. Men heldigvis er der mange, der har fået et helt almindeligt arbejde og derfor ikke længere får støtte fra det offentlige.

Konkret sammenlignede man nyuddannede med og uden et handicap i det første år, efter de havde afsluttet deres uddannelse. I perioden 2012-2016 var der 266.515 personer, der afsluttede en videregående uddannelse, og af dem havde 4.793 personer et handicap. Det svarer til cirka 1,8 % af alle nyuddannede i perioden. Tendensen var klar. Hele 81 % af de nyuddannede uden et handicap var efter tolv måneder kommet ind på arbejdsmarkedet.

[[3]]

Det er selvfølgelig ikke et acceptabelt resultat. Slet ikke når man tænker på, at mange af dem sagtens kan udføre arbejdet lige så godt som alle andre.

Måske handler de nedslående tal også om selvværdet hos de nyuddannede med et handicap. En tredjedel af dem mente, allerede mens de var studerende, at deres handicap ville få en betydning for, om de overhovedet kunne få et job. Og halvdelen mente, at deres handicap ville få stor betydning for, hvordan de ville klare deres job, hvis de endelig fik et.

[[4]]

Overraskende nok kunne 15 ud af 18 fortælle, at deres handicap enten har lille eller slet ingen betydning for deres arbejdsliv. På en måde er det gode nyheder. Men det er selvfølgelig ærgerligt, at der er så mange studerende med et handicap, der tror noget andet, mens de læser.

Endelig viste undersøgelsen også, at mange mennesker med et handicap ikke kender særlig meget til de mange forskellige støttemuligheder, der er på arbejdsmarkedet. Disse muligheder kaldes også for kompenserende ordninger, og de er til en vis grad finansieret af staten. Fx kan en person med et handicap få personlig assistance. Den personlige assistent kan fx hjælpe med bestemte løft, med at køre bil, med at skrive eller læse korrektur. Man kan også få betalt visse hjælpemidler. Det kan fx være særligt undervisningsmateriale, særligt værktøj eller en speciel indretning af kontoret. Endelig kan nyuddannede med et handicap også få løntilskud i deres første job. Det vil hjælpe dem til at få den første erfaring med det fag, de har uddannet sig indenfor, og til at skabe sig et netværk. De fleste mennesker – både dem med og uden et handicap – har oplevet, hvor vigtigt det er at have et bredt professionelt netværk.

Rapporten kommer selvfølgelig også med en række anbefalinger til, hvordan man kan gøre det lettere for mennesker med et handicap at komme i arbejde. Et af forslagene er at tilbyde dem et kursus i jobsøgning.

[[5]]

Desuden ville de måske have glæde af frivillige mentorer, der har samme uddannelse, som de selv har. Mentorerne ville kunne bidrage med viden om alt fra ansættelsesproces til arbejdspladskultur. Og hvem ved? Måske kan det hjælpe den enkelte med et handicap til hurtigt at komme ind på arbejdsmarkedet – og blive der.`,
    questions: [{
      type: "gaps",
      bank: [
        { key: "A", text: "Nogle er faktisk slet ikke en del af det – sådan vil det nok altid være. Andre har måske fået et job, men den virksomhed, de arbejder for, bliver til en vis grad kompenseret af kommunen." },
        { key: "B", text: "Fx er der flere og flere mennesker med et handicap, der simpelthen vælger, at de slet ikke vil have et arbejde. I hvert fald ikke samme slags arbejde som dem uden et synligt handicap." },
        { key: "C", text: "Det kan være svært at definere præcist, hvad det vil sige. Men i ordbogen står der, at det er en permanent fysisk eller psykisk svaghed, der begrænser ens muligheder i hverdagen." },
        { key: "D", text: "Det lyder måske banalt, men mange af dem har ikke haft et studiejob. Derfor har de i praksis svært ved at give eksempler på deres kompetencer og at beskrive deres erfaringer." },
        { key: "E", text: "Alle undersøgelser har indtil nu peget på, at mennesker med et handicap har lige så let ved at klare et almindeligt lønarbejde som mennesker uden et handicap. Og det har arbejdsgiverne endelig fået øjnene op for." },
        { key: "F", text: "Det samme var desværre ikke tilfældet for dem med et handicap. Af dem var kun seks ud af ti kommet i en eller anden form for arbejde inden for den samme periode." },
        { key: "G", text: "Der er bare ikke noget, der peger på, at de har ret. I undersøgelsen fra 2020 har man lavet en række grundige interviews med en lille gruppe mennesker med et handicap, der passer et almindeligt arbejde." }
      ],
      answers: { 1: "C", 2: "A", 3: "F", 4: "G", 5: "D" }
    }]
  };

  const vindmoller = {
    id: "pd3-23m-4", group: G, real: true,
    title: "Delprøve 3 – Vindmøller møder modstand",
    kind: "Læseforståelse 2 · vælg det rigtige ord/udtryk (A-D)",
    level: 3, minutes: 20,
    instruction: "Læs teksten Vindmøller møder modstand. Der er fjernet otte ord eller udtryk, og de otte huller er angivet med tallene 1-8. For hvert hul (1-8) er der angivet fire ord eller udtryk: A, B, C og D. Vælg det ord eller udtryk, der passer til hvert af hullerne i teksten. Der er et eksempel angivet som 0. Der gives 1 point for hvert korrekt svar.",
    text: `**Vindmøller møder modstand**

**Opsætningen af vindmøller har generelt både politisk og folkelig opbakning i Danmark. Der er [[0]] nogle ulemper forbundet med vindmøller. Det gælder både for borgere, som bor tæt på de vindmøller, der sættes op, og for naturen.**

Danmark har et ambitiøst klimamål om, at der i 2030 skal udledes 70 % mindre drivhusgas end i 1990. Målet skal nås ved at omstille det danske energiforbrug fra kul, olie og gas til grønne energiformer. Det er dyrt, men det er ikke den eneste [[1]]. For at lykkes med omstillingen er det nødvendigt at øge produktionen af grøn energi markant.

Det sker i Danmark i høj grad gennem en satsning på vindenergi. [[2]] er der i de senere år sat vindmøller op overalt i Danmark. Udviklingen er også blevet hjulpet på vej af, at det er blevet en bedre forretning at producere vindenergi. Teknologien er nemlig blevet bedre og møllerne større. Det har øget interessen blandt private firmaer for at investere i store vindmølleprojekter. Men flere steder møder projekterne modstand fra lokale borgere. De store vindmøller kan [[3]] ses og høres vidt omkring.

For at undgå ulemperne med støj og med, at de store vindmøller kan ses på lang afstand, kan man sætte dem op på havet. [[4]] er imidlertid, at de er dyrere at sætte op på havet, og jo længere ude på havet de sættes op, jo dyrere er det. Man vælger derfor ofte mellemløsningen og bygger havvindmøllerne relativt tæt på kysten. Her kan de dog stadig ses fra land, og det kan få berørte borgere til at protestere. De mener ikke, at netop deres udsigt skal forstyrres af vindmøller, og at [[5]] møllernes placering inden for synsvidde også er, at deres huse vil falde i pris.

Protesterne kan sætte de lokale politikere i landets kommuner under pres. Det er nemlig kommunerne, der afgør, hvor møllerne skal sættes op. Det er også kommunerne, der skal behandle klager fra borgerne. Når borgere klager, kan det [[6]] kommunernes sagsbehandling af vindmølleprojekter. Nogle gange kan en klagesag faktisk ende med, at projekter ikke blot trækker ud, men helt må opgives.

Det er dog ikke kun borgernes [[7]] at sætte vindmøller op, der kan forsinke eller forhindre processen. Det kan også hensyn til naturen. Store dele af Danmarks natur er nemlig sikret med Naturbeskyttelsesloven. Undersøgelser af, om beskyttede dyrearter er truet, eller om havstrømme forstyrres, kan være meget tidskrævende. Hvis en undersøgelse ender med at [[8]], at opstillingen af vindmøller kan skade naturen, kan dette også føre til, at planer om at sætte vindmøller op opgives.`,
    questions: [{
      type: "gaps",
      choices: {
        1: ["forklaring", "fordel", "betingelse", "udfordring"],
        2: ["Desuden", "Derfor", "Omvendt", "Alligevel"],
        3: ["dermed", "dog", "nemlig", "sjældent"],
        4: ["Problematikken", "Grunden", "Forudsætningen", "Påstanden"],
        5: ["kravet til", "årsagen til", "følgen af", "formålet med"],
        6: ["forenkle", "forkorte", "lette", "forlænge"],
        7: ["forslag til", "modstand mod", "opbakning til", "ansøgninger om"],
        8: ["bekræfte", "afvise", "udelukke", "modsige"]
      },
      example: { 0: "hermed" },
      answers: { 1: "udfordring", 2: "Derfor", 3: "nemlig", 4: "Problematikken", 5: "følgen af", 6: "forlænge", 7: "modstand mod", 8: "bekræfte" }
    }]
  };

  // Newest real exam first in the PD3 reading list.
  PD2.EXAMS.pd3.READING.unshift(sonderjylland, laeseleder, handicap, vindmoller);

  const X = PD2.EXAMS.pd3;
  const SESSION = "Maj-juni 2023";

  // ---------- Skriftlig fremstilling maj-juni 2023 ----------
  X.WRITING = X.WRITING || [];
  X.WRITING.push(
    {
      id: "pd3-23m-w1", delprove: 1, real: true, year: 2023, session: SESSION,
      title: "Delprøve 1: En e-mail til en ven (maj-juni 2023)",
      kind: "Prøveopgave · e-mail til en ven",
      minWords: 150, maxWords: 200,
      situation: "Situation: Du har fået en mail fra din danske ven, der snart skal være forælder. " +
        "Mailen (de understregede dele står i «»): " +
        "\"… Tak for sidst, det var hyggeligt at mødes med dig. Du sagde, at du leder efter et nyt sted at bo. «Hvordan går det med det»? " +
        "Som sagt, så glæder vi os til, at vi til vinter skal være forældre for første gang ☺. Vi har stadig ikke besluttet, om vi vil have barnets køn at vide før fødslen. «Synes du, man skal vide på forhånd, om det bliver en pige eller en dreng»? " +
        "Vi har snakket om, at vi vil tage en måneds forældreorlov sammen og så rejse en tur ud i verden med den lille ny. «Synes du ikke, det lyder som en god idé?» " +
        "Du var jo med os på ferie sidste år, og det var så hyggeligt. I år tager vi en uge op i mine forældres sommerhus i slutningen af juli. «Vil du med?» …\" " +
        "Opgave: Skriv et svar.",
      // The mail as it stands on the paper (paragraphs kept) and its underlined parts, for a richer view.
      email: "… Tak for sidst, det var hyggeligt at mødes med dig. Du sagde, at du leder efter et nyt sted at bo. Hvordan går det med det?\n\n" +
        "Som sagt, så glæder vi os til, at vi til vinter skal være forældre for første gang ☺. Vi har stadig ikke besluttet, om vi vil have barnets køn at vide før fødslen. Synes du, man skal vide på forhånd, om det bliver en pige eller en dreng?\n\n" +
        "Vi har snakket om, at vi vil tage en måneds forældreorlov sammen og så rejse en tur ud i verden med den lille ny. Synes du ikke, det lyder som en god idé?\n\n" +
        "Du var jo med os på ferie sidste år, og det var så hyggeligt. I år tager vi en uge op i mine forældres sommerhus i slutningen af juli.\nVil du med? …",
      underlined: [
        "Hvordan går det med det",
        "Synes du, man skal vide på forhånd, om det bliver en pige eller en dreng",
        "Synes du ikke, det lyder som en god idé?",
        "Vil du med?"
      ],
      points: [
        "Tak for mailen.",
        "Kom ind på de understregede dele i mailen.",
        "Understreget: Hvordan går det med det?",
        "Understreget: Synes du, man skal vide på forhånd, om det bliver en pige eller en dreng?",
        "Understreget: Synes du ikke, det lyder som en god idé?",
        "Understreget: Vil du med?",
        "Foreslå, at I mødes inden længe og taler om sommerferien."
      ],
      phrases: ["Tak for din mail.", "Du spørger, hvordan det går med …", "Hvis jeg var jer, ville jeg …", "Jeg synes, det lyder som en god idé, men …", "Jeg vil meget gerne med!", "Skal vi ikke mødes snart og tale om sommerferien?", "Mange hilsner"],
      model: `Hej Mathias

Tak for din mail. Det var også rigtig hyggeligt at se dig, og endnu en gang tillykke med, at I skal være forældre!

Du spørger, hvordan det går med at finde et nyt sted at bo. Det går desværre lidt langsomt. Jeg har set på tre lejligheder, men de var enten for dyre eller for langt fra mit arbejde. Nu står jeg på venteliste hos et boligselskab, så jeg håber på det bedste.

Det er svært at sige, om I skal kende kønnet på forhånd. Hvis jeg var jer, ville jeg nok vente, for det er en dejlig overraskelse, når barnet bliver født. Til gengæld er det lettere at købe tøj og vælge navn, hvis man ved det.

Jeg synes, det lyder som en fantastisk idé at rejse ud i verden med den lille. Men vælg et sted, hvor rejsen ikke er for lang, og hvor der er gode hospitaler. Det gør det mere trygt.

Jeg vil meget gerne med i sommerhuset, hvis jeg kan få fri fra arbejde. Skal vi ikke mødes snart og tale om sommerferien? Måske til kaffe på søndag?

Mange hilsner
Nadia`
    },
    {
      id: "pd3-23m-w2a", delprove: 2, real: true, year: 2023, session: SESSION,
      title: "2A: Trafiksikkerhed (maj-juni 2023)",
      kind: "Prøveopgave · diagram og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2A: Trafiksikkerhed. " +
        "Diagram: Andel af dræbte og tilskadekomne i trafikken, fordelt på alder. For hver aldersgruppe viser diagrammet to søjler: dræbte og tilskadekomne (blå) og andel af befolkningen (grå). " +
        "Søjlerne (aflæst fra diagrammet, ca.-tal, dræbte og tilskadekomne / andel af befolkningen): " +
        "0-14 år ca. 5 % / 16 % · 15-17 år ca. 5 % / 3 % · 18-24 år ca. 17 % / 9 % · 25-34 år ca. 16 % / 13 % · 35-44 år ca. 13 % / 12 % · " +
        "45-54 år ca. 14 % / 14 % · 55-64 år ca. 14 % / 12 % · 65-74 år ca. 9 % / 11 % · 75+ år ca. 7 % / 9 %. " +
        "Kilde: https://www.vejdirektoratet.dk/sites/default/files/2020-10/Politikredsrapport_2019.pdf. " +
        "Du skal skrive minimum 200 ord.",
      image: "images/pd3-2023m/trafiksikkerhed-diagram.png",
      imageAlt: "Søjlediagram: Andel af dræbte og tilskadekomne i trafikken fordelt på alder, sammenlignet med aldersgruppens andel af befolkningen. 18-24 år: ca. 17 % af de dræbte og tilskadekomne, men ca. 9 % af befolkningen. 25-34 år: ca. 16 % mod ca. 13 %. 15-17 år: ca. 5 % mod ca. 3 %. 0-14 år: ca. 5 % mod ca. 16 %. 35-64 år: ca. 13-14 % mod ca. 12-14 %. 65-74 år: ca. 9 % mod ca. 11 %. 75+: ca. 7 % mod ca. 9 %.",
      chart: {
        title: "Andel af dræbte og tilskadekomne i trafikken",
        unit: "%", approx: true,
        source: "https://www.vejdirektoratet.dk/sites/default/files/2020-10/Politikredsrapport_2019.pdf",
        series: ["Dræbte og tilskadekomne", "Andel af befolkningen"],
        groups: [
          { label: "75+", values: [7, 9] },
          { label: "65-74", values: [9, 11] },
          { label: "55-64", values: [14, 12] },
          { label: "45-54", values: [14, 14] },
          { label: "35-44", values: [13, 12] },
          { label: "25-34", values: [16, 13] },
          { label: "18-24", values: [17, 9] },
          { label: "15-17", values: [5, 3] },
          { label: "0-14", values: [5, 16] }
        ]
      },
      points: [
        "Beskriv hovedtrækkene i diagrammet.",
        "Fortæl, hvilke årsager der kan være til nogle af de forskelle, diagrammet viser.",
        "Vurdér, hvad staten og kommunerne kan gøre for at reducere antallet af dræbte og tilskadekomne i trafikken. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["Diagrammet viser, hvor stor en andel af …", "Den største forskel ses hos …", "… udgør kun ca. … % af befolkningen, men hele … %", "Omvendt …", "En årsag kan være, at …", "Efter min mening bør staten …", "Kommunerne kan desuden …", "Det vigtigste er dog …", "Samlet set mener jeg, at …"],
      model: `Unge bilister skal have mere hjælp

Diagrammet viser, hvor stor en andel af de dræbte og tilskadekomne i trafikken hver aldersgruppe udgør, sammenlignet med gruppens andel af befolkningen. Den største forskel ses hos de 18-24-årige. De udgør kun ca. 9 % af befolkningen, men hele ca. 17 % af de dræbte og tilskadekomne. Også de 25-34-årige og de 15-17-årige er overrepræsenteret. Omvendt udgør børn under 15 år ca. 16 % af befolkningen, men kun ca. 5 % af ofrene, og de ældre over 65 er også lidt underrepræsenteret.

En årsag kan være, at unge bilister mangler erfaring og ofte kører for hurtigt. Nogle kigger på mobilen, mens de kører, eller kører hjem fra en fest efter at have drukket. Børn kører derimod sjældent selv og bliver tit fulgt af deres forældre.

Efter min mening kan staten og kommunerne gøre meget. For det første bør staten skærpe straffen for at bruge mobilen under kørsel og for spritkørsel. Mange unge tænker sig om en ekstra gang, hvis de risikerer at miste kørekortet. For det andet kan staten gøre køreuddannelsen længere, så de unge får mere træning i fx glat føre og mørkekørsel. Nye bilister kunne også få en periode, hvor de ikke må køre med mange unge passagerer om natten.

Kommunerne har ansvaret for mange af vejene. De kan bygge flere cykelstier, så cyklister og biler bliver adskilt, og de kan lave bump og lavere hastighed omkring skoler og boligområder. Desuden kan kommunerne opsætte fartkameraer på farlige strækninger, hvor der ofte sker ulykker.

Det vigtigste er dog holdningen. Kampagner i skolerne og på sociale medier kan vise unge, hvad der sker ved en ulykke. Samlet set mener jeg, at en kombination af hårdere straffe, bedre uddannelse og sikrere veje vil redde mange liv.`
    },
    {
      id: "pd3-23m-w2b", delprove: 2, real: true, year: 2023, session: SESSION,
      title: "2B: Sundhedstilbud på arbejdspladsen (maj-juni 2023)",
      kind: "Prøveopgave · holdninger og vurdering · minimum 200 ord",
      minWords: 200, maxWords: 300,
      situation: "I delprøve 2 skal du besvare enten opgave A eller opgave B. 2B: Sundhedstilbud på arbejdspladsen. " +
        "Mange arbejdspladser i Danmark tilbyder aktiviteter, der skal få deres ansatte til at leve sundere. Nogle tilbud indgår i arbejdstiden, og andre foregår i fritiden. " +
        "Her er nogle eksempler: " +
        "• Pauser med gymnastik i arbejdstiden • Oplæg om sund livsstil i arbejdstiden • Sundhedstjek i arbejdstiden • Løbeklub efter arbejdstid • Tilskud til motionsaktiviteter i fritiden • Kurser i rygestop i fritiden. " +
        "Du skal skrive minimum 200 ord.",
      list: ["Pauser med gymnastik i arbejdstiden", "Oplæg om sund livsstil i arbejdstiden", "Sundhedstjek i arbejdstiden", "Løbeklub efter arbejdstid", "Tilskud til motionsaktiviteter i fritiden", "Kurser i rygestop i fritiden"],
      points: [
        "Fortæl kort om sundhedstilbud på en arbejdsplads, du kender eller har hørt om.",
        "Kommenter ét eller to af eksemplerne fra listen.",
        "Vurdér fordele og ulemper ved, at en arbejdsplads engagerer sig i sine medarbejderes livsstil. Begrund dine synspunkter. (Besvarelsen af dette punkt skal udgøre ca. 50 % af den samlede besvarelse)."
      ],
      phrases: ["På min arbejdsplads tilbyder vi …", "Jeg synes, at … er en god idé, fordi …", "Til gengæld er jeg mere skeptisk over for …", "Der er flere fordele ved, at …", "For det første … For det andet …", "Der er dog også ulemper.", "Det er vigtigt, at tilbuddene er frivillige.", "Alt i alt mener jeg, at …"],
      model: `Sundhed på jobbet – ja tak, men frivilligt

Jeg arbejder på et lager, og her har vi en del sundhedstilbud. Der står altid en skål frugt i kantinen, og hvert år kommer en sygeplejerske og laver et sundhedstjek, hvor hun måler blodtryk og vægt. Desuden giver firmaet tilskud til et medlemskab i et fitnesscenter.

Jeg synes, at pauser med gymnastik i arbejdstiden er en god idé. Mange sidder stille hele dagen eller løfter tungt, og fem minutters strækøvelser kan forebygge ondt i ryggen og nakken. Til gengæld er jeg mere skeptisk over for en løbeklub efter arbejdstid. Mange har børn, der skal hentes, og de har ikke tid til at løbe med kollegerne.

Der er flere fordele ved, at en arbejdsplads engagerer sig i medarbejdernes livsstil. For det første får virksomheden mindre sygefravær, når medarbejderne er sunde og i god form. Det sparer penge og giver mindre stress for kollegerne. For det andet kan fælles aktiviteter styrke sammenholdet, fordi man lærer hinanden at kende på en ny måde. Endelig når tilbuddene ud til folk, som ellers aldrig ville gå til lægen eller holde op med at ryge.

Der er dog også ulemper. Livsstil er en privat sag, og nogle føler sig overvåget, hvis chefen blander sig i, hvad de spiser, eller hvor meget de vejer. Der kan også opstå et socialt pres, så man føler, at man skal deltage for at være en god kollega. Medarbejdere med et handicap eller en kronisk sygdom kan føle sig udenfor.

Alt i alt mener jeg, at fordelene er størst, men tilbuddene skal være frivillige, og resultaterne af fx et sundhedstjek må kun den enkelte medarbejder se.`
    }
  );

  // ---------- Mundtlig delprøve 2: emner, billeder og eksaminators spørgsmål maj-juni 2023 ----------
  // q = the booklet's suggested introduction ("Forslag til indledning") + the obligatory question;
  // follow = the suggested follow-up question(s). The picture sheet's own captions are the captions.
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 3, maj-juni 2023)";
  const intro = emne => `Her er der to billeder, som viser nogle situationer, der handler om emnet ${emne}.`;
  X.SPEAKING_TOPIC = X.SPEAKING_TOPIC || [];
  X.SPEAKING_TOPIC.push(
    {
      id: "pd3-23m-o-a", title: "Brug af sociale medier", session: SESSION, year: 2023, real: true, credit,
      intro: intro("Brug af sociale medier"),
      pictures: [
        { file: "images/pd3-2023m/brug-af-sociale-medier-1.jpg", caption: "Køb og salg via sociale medier", credit,
          alt: "En ung mand med kasket fotograferer to armbåndsure med sin mobil og sætter dem til salg i en køb og salg-gruppe på sin bærbare computer.",
          words: ["en annonce", "at sælge brugt", "en køb og salg-gruppe", "en køber", "at fotografere"] },
        { file: "images/pd3-2023m/brug-af-sociale-medier-2.jpg", caption: "Personlige billeder på sociale medier", credit,
          alt: "En ung kvinde med briller ser på sin mobil og lægger et feriebillede af sin familie på stranden ud på Instagram på sin bærbare computer.",
          words: ["et opslag", "at dele", "privatliv", "et feriebillede", "likes"] }
      ],
      first: {
        A: {
          q: "Situation A viser en ung mand, der sælger to ure via de sociale medier. Flere og flere køber og sælger produkter via sociale medier. Hvorfor tror du, de gør det?",
          follow: "Mener du, der kan være nogen problemer ved at købe og sælge produkter via sociale medier? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, det er, fordi det er nemt og hurtigt. Man tager bare et billede med mobilen og lægger det ud i en gruppe, og så ser mange mennesker det med det samme. Det koster ingenting, i modsætning til en annonce i avisen. Mange vil også gerne købe brugte ting, fordi det er billigere og bedre for miljøet. Jeg har selv solgt min søns gamle cykel i en lokal gruppe på Facebook, og den var solgt på to timer.",
          followAnswer: "Ja, det mener jeg bestemt. Det største problem er snyd. Nogle sælger ting, som er stjålne eller falske, for eksempel kopier af dyre ure, og andre tager imod pengene uden at sende varen. Når man handler privat, har man ikke de samme rettigheder som i en butik. Derfor synes jeg, man skal mødes og se varen, før man betaler, og hellere bruge MobilePay end bankoverførsel til fremmede. Så er det som regel trygt nok."
        },
        B: {
          q: "Situation B viser en ung kvinde, der lægger personlige billeder ud på sociale medier. Mange mennesker lægger private og personlige billeder ud på de sociale medier. Hvorfor tror du, de gør det?",
          follow: "Mener du, der kan være nogen problemer ved at lægge private og personlige billeder ud på de sociale medier? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, mange gør det for at dele deres oplevelser med familie og venner, især hvis de bor langt væk. Min familie bor for eksempel i et andet land, og de bliver glade, når de ser billeder af børnene. Men nogle gør det nok også, fordi de gerne vil have anerkendelse. Det føles godt at få mange likes og søde kommentarer. Desuden er det blevet helt normalt, så man gør det nærmest uden at tænke over det.",
          followAnswer: "Ja, det kan der godt. Når et billede først er lagt ud, kan man ikke kontrollere, hvem der ser det, eller hvem der gemmer det. Det kan blive brugt af fremmede, og en fremtidig arbejdsgiver kan finde det. Jeg synes især, man skal passe på med billeder af børn, for de kan ikke selv sige nej. Derfor deler jeg kun billeder i en lukket gruppe med familien, og jeg spørger altid mine venner, før jeg lægger et billede af dem ud."
        }
      },
      second: {
        q: "I dag læser mange deres nyheder på de sociale medier. Hvilke fordele og ulemper mener du, der kan være ved det?",
        follow: "Mener du, at de sociale medier har en positiv eller negativ betydning for demokratiet?",
        answer: "En fordel er, at nyhederne kommer hurtigt, og at de er gratis. Man kan læse dem på mobilen i bussen, og man kan selv kommentere og diskutere med andre. Man får også nyheder fra mange forskellige kilder, ikke kun de store medier. En ulempe er, at der er mange falske nyheder, som spreder sig meget hurtigt. Desuden viser algoritmerne mest det, man i forvejen er enig i, så man let havner i en boble og kun hører én side af sagen.",
        followAnswer: "Jeg mener, at de har både en positiv og en negativ betydning. Positivt er det, at alle kan komme til orde og kontakte politikerne direkte. Det har for eksempel hjulpet borgere med at samle underskrifter til et borgerforslag. Men falske nyheder og hadefulde kommentarer kan skabe splittelse, og nogle trækker sig fra debatten, fordi tonen er så hård. Derfor synes jeg, at skolerne skal lære børn at være kritiske over for det, de læser på nettet."
      },
      conclusion: ""
    },
    {
      id: "pd3-23m-o-b", title: "Studerende og økonomi", session: SESSION, year: 2023, real: true, credit,
      intro: intro("Studerende og økonomi"),
      pictures: [
        { file: "images/pd3-2023m/studerende-og-oekonomi-1.jpg", caption: "Studiejob", credit,
          alt: "To unge kvinder arbejder i baren på et travlt værtshus og serverer drinks for glade unge gæster, der skåler.",
          words: ["et studiejob", "en bartender", "at tjene penge", "en aftenvagt", "en gæst"] },
        { file: "images/pd3-2023m/studerende-og-oekonomi-2.jpg", caption: "Studielån", credit,
          alt: "En ung mand sidder på sit værelse ved computeren og betaler husleje i netbanken, mens der ligger nye sko og et nyt jakkesæt med prisskilt på sengen, og der hænger et billede af Eiffeltårnet på væggen.",
          words: ["et studielån", "SU", "huslejen", "netbanken", "et budget"] }
      ],
      first: {
        A: {
          q: "Situation A viser nogle unge kvindelige studerende, der har et studiejob på en bar. Nogle studerende vælger at arbejde ved siden af deres studier. Hvorfor tror du, de gør det?",
          follow: "Kan der være nogen problemer ved, at studerende arbejder ved siden af deres studier? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, den vigtigste grund er økonomien. SU'en rækker ikke langt, især hvis man bor i en stor by, hvor huslejen er høj. Med et studiejob har man råd til at gå i byen, rejse eller købe tøj. Men mange arbejder også for at få erfaring. Hvis man har et studiejob inden for sit fag, bliver det lettere at få et job efter uddannelsen. Og på en bar møder man mange mennesker og får nye venner.",
          followAnswer: "Ja, det kan der godt, hvis man arbejder for mange timer. Så har man ikke tid til at læse og forberede sig, og man risikerer at dumpe eksamener eller blive forsinket. Et job på en bar betyder også sene aftener, så man kan være træt til undervisningen næste morgen. Jeg synes, at 10-15 timer om ugen er fint, men ikke mere. Studiet skal komme først, for det er jo derfor, man er studerende."
        },
        B: {
          q: "Situation B viser en ung mandlig studerende, der har taget studielån for at betale sine udgifter. Nogle studerende vælger også at låne penge, selvom de allerede modtager SU. Hvorfor tror du, de gør det?",
          follow: "Mener du, det er rimeligt, at studerende bruger penge på fx ferier eller at gå i byen?",
          answer: "Jeg tror, det er, fordi SU'en ikke er nok til at betale alle udgifterne. Huslejen, mad og bøger koster meget, og især i København er det dyrt at bo. Nogle har ikke tid til et studiejob, fordi studiet er meget krævende, for eksempel medicin. Andre vil gerne have lidt mere luksus, som man kan se på billedet med de nye sko og jakkesættet. Studielånet har desuden en lav rente, så det virker som en nem løsning.",
          followAnswer: "Ja, det synes jeg egentlig er rimeligt, så længe det er med måde. Studietiden er også en tid, hvor man skal have et socialt liv og opleve verden. En rejse kan gøre én klogere, og fester med medstuderende skaber venskaber. Men jeg synes ikke, man skal låne mange penge til ferier, for lånet skal betales tilbage senere. Det er bedre at spare op eller arbejde lidt ekstra i sommerferien."
        }
      },
      second: {
        q: "I Danmark er det normalt gratis at tage en uddannelse. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Mener du, at alle uddannelser skal være gratis, selvom det koster mange penge for samfundet? Hvorfor?/Hvorfor ikke?",
        answer: "Den største fordel er, at alle har de samme muligheder, uanset hvor mange penge forældrene har. Så kan et barn fra en fattig familie også blive læge eller ingeniør. Samfundet får flere veluddannede borgere, som senere betaler mere i skat. En ulempe er, at det er meget dyrt for staten. Desuden kan det betyde, at nogle unge skifter uddannelse mange gange eller vælger en uddannelse, hvor der ikke er job bagefter, fordi det ikke koster dem noget.",
        followAnswer: "Ja, det mener jeg som udgangspunkt. Uddannelse er en investering, ikke kun en udgift, og Danmark har brug for dygtige folk i fremtiden. I mit hjemland skulle man betale for universitetet, og derfor kunne mange af mine venner ikke studere. Men jeg synes godt, man kunne stille krav. For eksempel kunne man betale selv, hvis man tager en uddannelse nummer to, eller hvis man bliver alt for længe på studiet."
      },
      conclusion: ""
    },
    {
      id: "pd3-23m-o-c", title: "Jobsøgning og ledighed", session: SESSION, year: 2023, real: true, credit,
      intro: intro("Jobsøgning og ledighed"),
      pictures: [
        { file: "images/pd3-2023m/jobsoegning-og-ledighed-1.jpg", caption: "Jobsøgning og alder", credit,
          alt: "Til venstre er en ung mand til jobsamtale foran tre personer ved et bord; til højre står en ældre mand ved skranken i et jobcenter.",
          words: ["en jobsamtale", "et jobcenter", "en ledig", "erfaring", "alder"] },
        { file: "images/pd3-2023m/jobsoegning-og-ledighed-2.jpg", caption: "At søge job langt væk", credit,
          alt: "En mand sidder ved computeren og læser et jobopslag; i en tankeboble ser han et Danmarkskort og en flyttekasse, mens hans kone og børn er i køkkenet bagved.",
          words: ["et jobopslag", "at flytte", "at pendle", "familien", "en flyttekasse"] }
      ],
      first: {
        A: {
          q: "Situation A viser en ung og en ældre mand, der søger job. Den unge mand er til en jobsamtale, og den ældre er mødt op på jobcentret. Arbejdsløse under 25 år kommer generelt hurtigere i job end arbejdsløse over 60 år. Hvorfor tror du, det er sådan?",
          follow: "Mener du, at arbejdsløse, der har en uddannelse, bør søge et ufaglært arbejde for hurtigere at komme i arbejde igen? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror, der er flere grunde. Nogle arbejdsgivere har fordomme og tror, at ældre er mindre fleksible og ikke kan finde ud af ny teknologi. De ved også, at en på 60 år snart går på pension, så de vil hellere ansætte en ung, som kan blive i mange år. Unge er desuden billigere, fordi de ikke har så lang erfaring. Til gengæld kan unge tage næsten alle slags job, for eksempel i en butik eller på et lager.",
          followAnswer: "Det kommer an på situationen. Hvis man har været ledig længe, synes jeg, det er bedre at tage et ufaglært job end at gå derhjemme. Man får penge, kolleger og en fast hverdag, og det ser godt ud på CV'et. Men man skal ikke opgive sit fag for tidligt. Hvis en sygeplejerske arbejder på et lager, mangler hun jo på hospitalet. Derfor synes jeg, man først skal prøve at søge job inden for sit eget område i nogle måneder."
        },
        B: {
          q: "Situation B viser en arbejdsløs mand, der har fundet et job, der ligger langt væk fra, hvor han bor. Nogle søger kun job tæt på, hvor de bor, selvom de har svært ved at finde et job. Hvorfor tror du, det er sådan?",
          follow: "Mener du, der kan være nogen problemer ved, at nogle kun søger job tæt på, hvor de bor? Hvorfor?/Hvorfor ikke?",
          answer: "Jeg tror især, det handler om familien. Hvis man har børn i skole og en partner med et godt job, er det svært at flytte til den anden ende af landet. Børnene skal skifte skole og miste deres venner. Mange har også købt hus og har deres netværk i området. Hvis man i stedet pendler, bruger man måske tre timer om dagen i bil eller tog, og det er både dyrt og trættende. Så har man ikke meget tid til familien.",
          followAnswer: "Ja, det kan der godt. Den ledige risikerer at være arbejdsløs i lang tid, og det kan gå ud over både økonomien og selvtilliden. Samtidig mangler virksomhederne i andre dele af landet arbejdskraft, så samfundet taber penge. Men jeg forstår godt dem, der vil blive. Jeg synes, man skal være villig til at pendle en time hver vej, og så kan man måske arbejde hjemme nogle dage om ugen."
        }
      },
      second: {
        q: "I Danmark kan man få økonomisk støtte, hvis man er arbejdsløs. Hvilke fordele og ulemper mener du, der kan være ved det for samfundet?",
        follow: "Synes du, der bør være en grænse for, hvor længe arbejdsløse kan få økonomisk støtte fra det offentlige? Hvorfor?/Hvorfor ikke?",
        answer: "En fordel er, at folk ikke bliver fattige, hvis de mister deres job. De kan blive boende i deres hjem og forsørge deres børn, mens de søger nyt arbejde. Det gør også, at virksomhederne lettere kan fyre og ansætte, fordi det ikke er en katastrofe at blive ledig. Det kaldes flexicurity. En ulempe er, at det koster samfundet mange penge. Desuden kan nogle måske miste motivationen til at søge job, hvis støtten er høj i lang tid.",
        followAnswer: "Ja, det synes jeg. Dagpengene i Danmark varer i to år, og det synes jeg er rimeligt. Det giver tid til at finde et godt job, men det motiverer også folk til at søge bredt. Hvis støtten var uden grænse, ville nogle måske slappe for meget af. Men der skal stadig være et sikkerhedsnet bagefter, for eksempel kontanthjælp, så ingen ender på gaden, især ikke de syge og de ældre, som har svært ved at få et job."
      },
      conclusion: ""
    }
  );
})();
