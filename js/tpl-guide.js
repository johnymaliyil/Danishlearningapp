// 🧩 Modeltekst: each PD2 text type in three columns – "Hvad?" (which part, and what it does),
// "Eksempel" (a short example written by DanskKlar) and "Gode ord og udtryk" (phrases to use).
// Shown with the writing templates (📋 Skabeloner) and in the template box of a writing task.
window.PD2 = window.PD2 || {};
PD2.TPL_GUIDE = {
  klage: {
    task: "Du har været på ferie og haft problemer med dit hotel. Skriv en klage.",
    rows: [
      ["Hilsen", "Greeting", "Kære Hotel Strandly", ["Kære …"]],
      ["Hvorfor du skriver", "Why you write", "Jeg skriver for at klage over mit ophold på jeres hotel. Jeg boede på værelse 214 fra den 5. til den 12. juli.", ["Jeg skriver for at klage over …", "Jeg hedder …, og jeg bor på …"]],
      ["Problemet", "The problem", "Problemet er, at værelset ikke var rent. Det er ikke i orden.", ["Problemet er, at …", "Det er ikke i orden."]],
      ["Hvad du har gjort", "What you have done", "Jeg har allerede talt med receptionen, men det hjalp ikke.", ["Jeg har allerede …, men det hjalp ikke."]],
      ["Hvad du vil have", "What you want", "Derfor vil jeg gerne bede jer om at give mig halvdelen af pengene tilbage.", ["Derfor vil jeg gerne bede jer om at …"]],
      ["Kontakt", "Contact", "I kan ringe til mig på 22 33 44 55. Jeg håber at høre fra jer snart.", ["I kan ringe til mig på …", "Jeg håber at høre fra jer snart."]],
      ["Slut", "Ending", "Med venlig hilsen\nAli", ["Med venlig hilsen"]],
    ],
  },
  anbefaling: {
    task: "Du har været på en god restaurant. Skriv en anbefaling til kursistbladet.",
    rows: [
      ["Overskrift", "Heading", "Restaurant Roma – kan varmt anbefales!", ["… – kan varmt anbefales!"]],
      ["Hilsen", "Greeting", "Kære kursister", ["Kære kursister", "Kære alle"]],
      ["Hvad og hvor", "What and where", "Jeg vil gerne anbefale Restaurant Roma. Den ligger på Torvet i Vejle.", ["Jeg vil gerne anbefale …", "Den / Det ligger …"]],
      ["Hvad du gjorde der", "What you did there", "I lørdags spiste jeg pizza og salat der med min familie.", ["I lørdags spiste / boede / var jeg …"]],
      ["Hvordan det var", "What it was like", "Maden var lækker. Der er lyst og hyggeligt. Personalet er søde og hjælpsomme. Prisen er god.", ["Der er lyst og hyggeligt.", "Personalet er søde og hjælpsomme.", "Maden var lækker.", "Prisen er god."]],
      ["Hvorfor du anbefaler det", "Why you recommend it", "Jeg anbefaler Restaurant Roma, fordi maden er god, og den er ikke dyr. Prøv det selv – du bliver ikke skuffet!", ["Jeg anbefaler …, fordi …", "Prøv det selv – du bliver ikke skuffet!"]],
      ["Hilsen og navn", "Ending", "Venlig hilsen\nAli", ["Venlig hilsen"]],
    ],
  },
  takkebrev: {
    task: "Du har været i praktik i et supermarked. Skriv et takkebrev til dine kolleger.",
    rows: [
      ["Starthilsen", "Greeting", "Kære kolleger", ["Kære …"]],
      ["Indledning – sig tak", "Say thank you", "Tusind tak for en god praktik i Total.", ["Tusind tak for …"]],
      ["Hvad du har lært", "What you learned", "Jeg har lært at fylde varer op. Mit dansk er også blevet meget bedre.", ["Jeg har lært …", "Mit dansk er også blevet meget bedre."]],
      ["Hvad du vil savne", "What you will miss", "Jeg vil savne jer, fordi I altid var søde og hjælpsomme. Jeg vil især savne vores hyggelige frokostpauser.", ["Jeg vil savne jer, fordi …", "Jeg vil især savne …"]],
      ["Hvad du skal nu", "Your plans", "Nu skal jeg begynde på en uddannelse.", ["Nu skal jeg …"]],
      ["Afslutning", "Closing line", "Jeg glæder mig til at se jer igen.", ["Jeg glæder mig til at …"]],
      ["Sluthilsen", "Sign-off", "Mange hilsner\nAli", ["Mange hilsner"]],
    ],
  },
  ansoegning: {
    task: "Du har set en jobannonce. Skriv en ansøgning.",
    rows: [
      ["Hilsen", "Greeting", "Kære Restaurant Nimo", ["Kære …"]],
      ["Hvilket job", "Which job", "Jeg har set jeres jobannonce, og jeg vil gerne søge jobbet som køkkenmedhjælper.", ["Jeg har set jeres jobannonce, og jeg vil gerne søge jobbet som …"]],
      ["Om dig", "About you", "Jeg hedder Ali, og jeg er 32 år. Jeg kommer fra Syrien, og jeg har boet i Danmark i fem år.", ["Jeg hedder …, og jeg er … år.", "Jeg kommer fra …"]],
      ["Erfaring", "Experience", "Jeg har arbejdet som køkkenmedhjælper i et år.", ["Jeg har arbejdet som …"]],
      ["Hvordan du er", "What you are like", "Jeg er glad, flittig og mødestabil. Jeg kan godt lide at arbejde sammen med andre.", ["Jeg er glad, flittig og mødestabil.", "Jeg kan godt lide at …"]],
      ["Hvorfor du vil have jobbet", "Why you want the job", "Jeg vil gerne have jobbet, fordi jeg kan godt lide at lave mad.", ["Jeg vil gerne have jobbet, fordi …"]],
      ["Kontakt og slut", "Contact + ending", "I kan ringe til mig på 22 33 44 55. Jeg håber at høre fra jer snart.\nMed venlig hilsen\nAli", ["I kan ringe til mig på …", "Med venlig hilsen"]],
    ],
  },
  opslag: {
    task: "Du vil holde en fest for dine naboer. Skriv et opslag / en invitation.",
    rows: [
      ["Overskrift – hvad det handler om", "Heading", "Grillfest i gården!", ["Kom til …!", "… søges!", "Invitation til …"]],
      ["Hilsen", "Greeting", "Kære naboer", ["Kære …", "Hej alle sammen"]],
      ["Hvad og hvorfor", "What and why", "Jeg vil gerne invitere jer til grillfest, så vi kan lære hinanden bedre at kende.", ["Jeg vil gerne invitere jer til …", "Jeg skriver, fordi …"]],
      ["Hvornår og hvor", "When and where", "Festen er lørdag den 14. juni kl. 17 i gården.", ["Det er … den … kl. …", "Vi mødes …"]],
      ["Hvad man skal gøre / have med", "What to bring / do", "Tag gerne en salat eller en kage med.", ["Husk at tage … med.", "Tag gerne … med."]],
      ["Tilmelding og kontakt", "Sign up + contact", "Skriv til mig senest den 10. juni på 22 33 44 55.", ["Tilmeld dig senest … på …", "Skriv til mig, hvis …"]],
      ["Hilsen og navn", "Ending", "Mange hilsner\nOmar, 2. th.", ["Mange hilsner", "Vi ses!"]],
    ],
  },
  ven: {
    task: "Delprøve 2: Svar på en e-mail fra din ven (mindst 100 ord).",
    rows: [
      ["Hilsen", "Greeting", "Hej Carl", ["Hej …", "Kære …"]],
      ["Indledning – tak for mailen", "Thank for the e-mail", "Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt.", ["Tak for din mail.", "Det var dejligt at høre fra dig.", "Jeg håber, at du har det godt."]],
      ["Svar på spørgsmålet", "Answer the question", "Du spørger, hvordan jeg lever billigt, og det vil jeg gerne fortælle dig om.", ["Du spørger om …", "Det vil jeg gerne fortælle dig om."]],
      ["Første punkt", "Point 1", "For det første laver jeg en madplan, og jeg handler i Netto.", ["For det første …", "Jeg …, fordi …"]],
      ["Andet punkt", "Point 2", "Derudover cykler jeg på arbejde i stedet for at tage bussen.", ["Derudover …", "For det andet …", "Desuden …"]],
      ["Afslutning", "Ending", "Til sidst vil jeg sige, at jeg sparer penge til en ferie. Jeg glæder mig til at høre fra dig.", ["Til sidst vil jeg sige, at …", "Jeg glæder mig til at høre fra dig.", "Vi ses snart!"]],
      ["Hilsen og navn", "Sign-off", "Mange hilsner\nAli", ["Mange hilsner", "Kærlig hilsen"]],
    ],
  },
  jobannonce: {
    task: "Du har en butik og skal bruge en ny medarbejder. Skriv en jobannonce.",
    rows: [
      ["Overskrift – hvem søger I", "Heading", "Butiksassistent søges!", ["… søges!"]],
      ["Om butikken", "About the shop", "Vi er en lille tøjbutik på Torvet i Vejle.", ["Vi er en …", "Vi ligger …"]],
      ["Opgaver", "Tasks", "Du skal hjælpe kunderne, fylde varer op og holde butikken ren.", ["Dine opgaver bliver at …", "Du skal …"]],
      ["Hvad I forventer", "What you expect", "Vi forventer, at du er smilende og god til at tale med kunderne.", ["Vi forventer, at du …", "Du skal være …"]],
      ["Arbejdstid", "Hours", "Arbejdstiden er 30 timer om ugen.", ["Arbejdstiden er …"]],
      ["Ansøgning og kontakt", "How to apply", "Send en ansøgning til butik@mail.dk senest den 1. maj.", ["Send en ansøgning til … senest …", "Ring til … på …"]],
    ],
  },
  holdning: {
    task: "Skriv et kort læserbrev til avisen om et emne.",
    rows: [
      ["Overskrift", "Heading", "Frivilligt arbejde gør os glade", ["En kort sætning om din mening"]],
      ["Indledning – emnet og din mening", "Topic + opinion", "Mange taler om frivilligt arbejde. Jeg synes, at alle bør prøve det.", ["Jeg synes, at …", "Efter min mening …"]],
      ["Første grund", "Reason 1", "For det første lærer man nye mennesker at kende.", ["For det første …"]],
      ["Anden grund", "Reason 2", "For det andet bliver man bedre til dansk.", ["For det andet …", "Desuden …"]],
      ["Den anden side", "The other side", "Det kan være svært at finde tid, men bare én time om ugen hjælper.", ["Nogle mener, at …, men …", "Det er rigtigt, at …, men …"]],
      ["Afslutning", "Conclusion", "Derfor synes jeg, at alle skal prøve frivilligt arbejde.", ["Derfor synes jeg, at …", "Alt i alt …"]],
    ],
  },
  institution: {
    task: "Skriv en mail til din sprogskole eller en lærer.",
    rows: [
      ["Hilsen", "Greeting", "Kære Lene", ["Kære …"]],
      ["Hvorfor du skriver", "Why you write", "Jeg skriver, fordi jeg er syg og ikke kan komme i skole i morgen.", ["Jeg skriver, fordi …"]],
      ["Detaljer", "Details", "Jeg har feber, og lægen siger, at jeg skal blive hjemme i tre dage.", ["Det drejer sig om …", "Jeg har …"]],
      ["Spørgsmål eller ønske", "Question / wish", "Kan du sende mig lektierne på mail?", ["Kan du …?", "Jeg vil gerne vide, om …"]],
      ["Afslutning og hilsen", "Ending", "På forhånd tak. Venlig hilsen\nMaria, hold 3", ["På forhånd tak.", "Venlig hilsen"]],
    ],
  },
};
