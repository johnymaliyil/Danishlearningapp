// Prøve i Dansk 2 – extra skriftlig fremstilling tasks from nov.-dec. 2015, 2017 and 2019.
// The task wording is taken from the user's own study notes (task wording only). The exam
// papers themselves were not supplied, so there is no læseforståelse or mundtlig material
// for these sessions. The model answers are written for DanskKlar (not copied from the notes).

(function () {
  const wFallback = PD2.WRITING.findIndex(w => !w.real);
  PD2.WRITING.splice(wFallback < 0 ? PD2.WRITING.length : wFallback, 0,
    {
      id: "w15na", delprove: 1, real: true, year: 2015,
      title: "A: En invitation til en sommerfest (nov.-dec. 2015)",
      kind: "Prøveopgave · invitation til dine kolleger",
      minWords: 80, maxWords: 150,
      situation: "Din arbejdsplads skal holde en sommerfest. Festen skal holdes i dit sommerhus. Du vil skrive en invitation. Skriv invitationen. Du skal begynde og afslutte invitationen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvornår I skal af sted (dato og klokkeslæt), og hvor I skal hen", "Hvad I skal have at spise", "Hvad I skal have med", "Lidt om sommerhuset og området, hvor det ligger"],
      phrases: ["Kom med til sommerfest!", "Hej alle sammen", "Vi tager af sted … den … kl. …", "Vi skal have … at spise.", "Husk at tage … med.", "Sommerhuset ligger …"],
      model: `Kom med til sommerfest i mit sommerhus!

Hej alle sammen

Jeg hedder Leila, og jeg skriver, fordi vores sommerfest i år skal holdes i mit sommerhus i Søndervig ved Vesterhavet.

Vi tager af sted lørdag den 20. juni kl. 10.00 fra parkeringspladsen ved firmaet. Vi kører sammen i bus, og turen tager cirka to timer.

Til frokost griller vi pølser og kylling, og der er kartoffelsalat til. Om aftenen får vi fisk og jordbærkage.

Husk at tage badetøj, et håndklæde og varmt tøj med, for det kan blive koldt om aftenen.

Sommerhuset er stort og har en have med plads til spil. Det ligger i et roligt område tæt på stranden og klitterne.

Hvis du vil med, så ring eller skriv til mig på 31 52 74 96 senest den 1. juni.

På forhånd tak!

Mange hilsner
Leila`
    },
    {
      id: "w15nb", delprove: 1, real: true, year: 2015,
      title: "B: Et opslag om nye medlemmer til en klub (nov.-dec. 2015)",
      kind: "Prøveopgave · opslag om nye medlemmer",
      minWords: 80, maxWords: 150,
      situation: "Du er formand i en klub, og du søger nye medlemmer til klubben. Du vil skrive et opslag. Skriv opslaget. Du skal begynde og afslutte opslaget på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvad slags klub det er, og hvad I laver i klubben", "Hvad slags medlemmer I søger", "Hvor I holder møderne, og hvornår klubben har åbent", "Hvordan man kan melde sig ind"],
      phrases: ["Bliv medlem af …!", "Hej alle sammen", "Jeg er formand for …", "Vi søger nye medlemmer, som …", "Vi mødes … hver … kl. …", "Hvis du vil melde dig ind, så …"],
      model: `Bliv medlem af Løbeklubben Frisk!

Hej alle sammen

Jeg hedder Omar, og jeg skriver, fordi vores løbeklub søger nye medlemmer. Jeg er formand for klubben.

Løbeklubben Frisk er en klub for alle, der kan lide at motionere i naturen. Vi løber sammen to gange om ugen, og bagefter drikker vi kaffe og snakker.

Vi søger nye medlemmer i alle aldre, både mænd og kvinder. Du behøver ikke at være hurtig. Det vigtigste er, at du har lyst til at løbe og møde nye mennesker.

Vi mødes ved klubhuset på Parkvej 4 hver tirsdag kl. 18.00 og hver lørdag kl. 9.30. Klubhuset har åbent på de samme dage.

Det koster 100 kr. om måneden at være medlem. Hvis du vil melde dig ind, så ring eller skriv til mig på 40 18 63 25.

På forhånd tak!

Mange hilsner
Omar Haddad
Formand for Løbeklubben Frisk`
    },
    {
      id: "w15nc", delprove: 2, real: true, year: 2015,
      title: "En e-mail om problemer med din nabo (nov.-dec. 2015)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Mads. I e-mailen skriver han bl.a.: \"… Du skrev jo i din sidste mail, at du tænker på at flytte, fordi du har problemer med din nabo. De problemer vil jeg meget gerne høre lidt mere om …\" Skriv et svar til Mads og fortæl om problemerne med din nabo. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvilke problemer du har med din nabo", "Fortæl, hvad du har gjort for at løse problemerne", "Fortæl, hvordan problemerne påvirker din hverdag", "Fortæl, om du vil flytte, og hvor du gerne vil bo"],
      phrases: ["Hej Mads", "Tak for din mail.", "Du spørger om problemerne med min nabo, …", "For det første …", "Derudover …", "Til sidst vil jeg sige, at …"],
      model: `Hej Mads

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om problemerne med min nabo, og det vil jeg gerne fortælle dig lidt om.

For det første larmer min nabo meget. Han bor lige over mig, og han spiller høj musik hver aften, også efter klokken 23. I weekenden holder han tit fester, så jeg kan ikke sove.

Derudover har jeg prøvet at tale med ham, men han bliver bare sur. Jeg har også skrevet til boligforeningen, men der er ikke sket noget. Det er virkelig hårdt, når jeg skal tidligt op på arbejde.

Til sidst vil jeg sige, at jeg derfor leder efter en ny lejlighed. Jeg vil gerne bo i et roligt område tæt på mit arbejde. Hvis du hører om en ledig lejlighed, må du gerne sige til.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Samira`
    },
    {
      id: "w17na", delprove: 1, real: true, year: 2017,
      title: "A: En invitation til filmaften (nov.-dec. 2017)",
      kind: "Prøveopgave · invitation til dine kolleger",
      minWords: 80, maxWords: 150,
      situation: "Du arbejder i et lille firma. Du vil gerne invitere dine kollegaer til filmaften. Du vil skrive en invitation. Skriv invitationen. Du skal begynde og afslutte invitationen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvorfor du gerne vil invitere dine kollegaer til filmaften", "Lidt om den film, I skal se", "Hvor og hvornår I skal se filmen", "Lidt om, hvad I skal lave efter filmen"],
      phrases: ["Kom med til filmaften!", "Hej alle sammen", "Jeg skriver, fordi jeg gerne vil invitere jer …", "Vi skal se …", "Vi ser filmen … den … kl. …", "Efter filmen …"],
      model: `Kom med til filmaften!

Hej alle sammen

Jeg hedder Nadia, og jeg skriver, fordi jeg gerne vil invitere jer til en filmaften. Vi har haft meget travlt i firmaet i lang tid, og nu fortjener vi en hyggelig aften sammen, hvor vi ikke taler om arbejde.

Vi skal se en dansk komedie om tre gamle venner, der tager til fest med deres gamle klasse. Jeg har set den før, og jeg grinede meget.

Vi ser filmen hjemme hos mig på Søndergade 15 i Vejle fredag den 24. november kl. 19.00. Jeg har en stor skærm og en god sofa.

Efter filmen spiser vi pizza sammen, og så kan vi snakke om filmen eller spille kort.

Hvis du vil med, så ring eller skriv til mig på 28 64 19 37 senest den 20. november.

På forhånd tak!

Mange hilsner
Nadia`
    },
    {
      id: "w17nc", delprove: 2, real: true, year: 2017,
      title: "En e-mail om, hvorfor du er stoppet på dit arbejde (nov.-dec. 2017)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Mariam. I e-mailen skriver hun bl.a.: \"… I din sidste mail skrev du, at du er stoppet på dit arbejde. Vil du godt fortælle lidt om, hvorfor du er stoppet på dit arbejde, og hvad du laver nu? …\" Skriv et svar til Mariam og fortæl, hvorfor du er stoppet på dit arbejde, og hvad du laver nu. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvorfor du er stoppet på dit arbejde", "Fortæl, hvad du laver nu", "Fortæl, hvad du synes om det, du laver nu", "Fortæl, hvad du gerne vil i fremtiden"],
      phrases: ["Hej Mariam", "Tak for din mail.", "Du spørger om mit arbejde, …", "For det første er jeg stoppet, fordi …", "Derudover …", "Til sidst vil jeg sige, at …"],
      model: `Hej Mariam

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om mit arbejde, og det vil jeg gerne fortælle dig lidt om.

For det første er jeg stoppet på mit arbejde, fordi jeg var meget træt af det. Jeg arbejdede på et lager, og arbejdet var hårdt for min ryg. Jeg skulle også arbejde om natten, så jeg så næsten aldrig min familie.

Derudover kan jeg fortælle, at jeg er begyndt på en uddannelse som social- og sundhedshjælper. Jeg går i skole tre dage om ugen, og to dage er jeg i praktik på et plejehjem. Jeg er glad for at hjælpe de ældre, og mine kolleger er søde.

Til sidst vil jeg sige, at jeg ikke fortryder min beslutning. Jeg tjener færre penge nu, men jeg har mere tid til min familie, og jeg håber at få et fast job på plejehjemmet.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Hana`
    },
    {
      id: "w19nb", delprove: 1, real: true, year: 2019,
      title: "B: En jobansøgning til Hotel Luxdan (nov.-dec. 2019)",
      kind: "Prøveopgave · jobansøgning",
      minWords: 80, maxWords: 150,
      situation: "Du vil gerne arbejde som rengøringsassistent. Du har set en jobannonce, hvor Hotel Luxdan søger en rengøringsassistent. Du vil skrive en jobansøgning til Hotel Luxdan. Skriv jobansøgningen. Du skal begynde og afslutte jobansøgningen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Lidt om dig selv, og hvad du har lavet før (fx kurser, arbejde, praktik)", "Hvorfor du gerne vil arbejde som rengøringsassistent på Hotel Luxdan", "Hvorfor du er den rigtige til jobbet", "Hvordan du kan kontaktes"],
      phrases: ["Kære Hotel Luxdan", "Jeg vil gerne søge stillingen som rengøringsassistent.", "Jeg hedder … og er … år.", "Jeg har erfaring med …", "Jeg vil gerne arbejde hos jer, fordi …", "I kan kontakte mig på …"],
      model: `Kære Hotel Luxdan

Jeg har set jeres jobannonce på jobnet.dk, og jeg vil gerne søge stillingen som rengøringsassistent.

Jeg hedder Maryam Ali, og jeg er 38 år. Jeg kommer fra Somalia og har boet i Danmark i fem år.

Jeg har erfaring med rengøring, fordi jeg har været i praktik i seks måneder på et plejehjem. Jeg har også taget et kursus i rengøring og hygiejne.

Jeg vil gerne arbejde på Hotel Luxdan, fordi jeg kan lide at gøre det rent og pænt for andre, og fordi jeg gerne vil arbejde på et stort hotel med mange kolleger.

Jeg tror, at jeg vil være god til jobbet, fordi jeg er grundig, stabil og hurtig.

I kan kontakte mig på 52 37 81 44.

Jeg håber, at I vil invitere mig til en samtale. Jeg ser frem til at høre fra jer.

Med venlig hilsen
Maryam Ali`
    },
    {
      id: "w19nc", delprove: 2, real: true, year: 2019,
      title: "En e-mail om dit nye hus på landet (nov.-dec. 2019)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din ven Johan. I e-mailen skriver han bl.a.: \"… Du skriver, at du er flyttet i et hus på landet. Men hvorfor er du flyttet? Og hvordan er det at bo på landet? Skriv og fortæl mig det hele…\" Skriv et svar til Johan og fortæl, hvorfor du er flyttet, og hvordan det er at bo på landet. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvorfor du er flyttet", "Fortæl lidt om huset og området", "Fortæl, hvad der er godt ved at bo på landet", "Fortæl, hvad der er svært ved at bo på landet"],
      phrases: ["Hej Johan", "Tak for din mail.", "Du spørger om mit nye hus på landet, …", "For det første er vi flyttet, fordi …", "Derudover er det dejligt at …", "Til sidst vil jeg sige, at …"],
      model: `Hej Johan

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om mit nye hus på landet, og det vil jeg gerne fortælle dig lidt om.

For det første er vi flyttet, fordi vores lejlighed i byen var for lille. Vi har fået et barn mere, og huse på landet er meget billigere end i byen. Min mand har også fået arbejde i en by i nærheden.

Derudover er det dejligt at bo på landet. Der er stille og frisk luft, og vi har en stor have, hvor børnene kan lege. Vi har fået høns, så vi har friske æg hver dag. Naboerne er venlige og hjælpsomme.

Til sidst vil jeg sige, at der også er ulemper. Der er langt til butikkerne, og bussen kører kun en gang i timen, så vi bruger bilen meget. Men jeg er glad, og du er meget velkommen på besøg.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Fatma`
    }
  );
})();
