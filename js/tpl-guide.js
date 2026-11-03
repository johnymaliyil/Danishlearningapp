// 🧩 Modeltekst: each PD2 text type in three columns – "Hvad?" (which part, and what it does),
// "Eksempel" (a short example written by DanskKlar) and "Gode ord og udtryk" (phrases to use).
// Shown with the writing templates (📋 Skabeloner) and in the template box of a writing task.
window.PD2 = window.PD2 || {};
PD2.TPL_GUIDE = {
  klage: {
    task: "Du har været på ferie og haft problemer med dit hotel. Skriv en klage: hvor og hvornår du boede der, hvad problemet var, hvordan det påvirkede din ferie, og hvad du vil have.",
    rows: [
      ["Hvem du skriver til", "Who you write to", "Hotel Strandly\nStrandvejen 10\n6700 Esbjerg", ["Navn", "Gade og nummer", "Postnummer og by"]],
      ["Overskrift", "Heading", "Vedr. mit ophold i juli", ["Vedr. … (= om)"]],
      ["Hilsen", "Greeting", "Kære Hotel Strandly", ["Kære …"]],
      ["Hvorfor du skriver", "Why you write", "Jeg skriver for at klage over mit ophold på jeres hotel. Jeg boede på værelse 214 fra den 5. til den 12. juli.", ["Jeg skriver for at klage over …", "Jeg er ikke glad for …"]],
      ["Problemerne", "The problems", "For det første var værelset ikke rent. For det andet virkede aircondition ikke.", ["For det første …", "For det andet …", "… virkede ikke."]],
      ["Hvad det betød", "What it meant", "Det ødelagde vores ferie. Vi sov dårligt.", ["Det ødelagde …", "Vi var …"]],
      ["Hvad du vil have", "What you want", "Derfor vil jeg gerne have halvdelen af pengene tilbage. I kan ringe til mig på 22 33 44 55.", ["Derfor vil jeg gerne have …", "Jeg vil gerne bede jer om at …", "Ring til mig på …"]],
      ["Slut", "Ending", "Med venlig hilsen\nAmina Hassan", ["Med venlig hilsen"]],
    ],
  },
  anbefaling: {
    task: "Du har været på en god restaurant. Skriv en anbefaling på nettet.",
    rows: [
      ["Overskrift – hvad du anbefaler", "Heading", "Restaurant Olivia – kan varmt anbefales!", ["… kan varmt anbefales!", "Prøv …!"]],
      ["Indledning – hvad og hvornår", "What and when", "I lørdags var jeg på Restaurant Olivia i Vejle med min familie.", ["Jeg vil gerne anbefale …", "I lørdags var jeg …", "Sidste uge prøvede jeg …"]],
      ["Hovedafsnit – hvad var godt", "What was good", "Maden var lækker, og tjenerne var søde og hjælpsomme. Der var også en legeplads til børnene.", ["Det bedste ved … er, at …", "Desuden …", "Jeg kan godt lide, at …"]],
      ["Pris og praktiske ting", "Price and practical info", "Prisen var rimelig – 150 kr. for en hovedret. Husk at bestille bord.", ["Prisen er …", "Den ligger …", "Husk at …"]],
      ["Afslutning – hvorfor du anbefaler", "Why you recommend it", "Jeg anbefaler Olivia, fordi det var en rigtig hyggelig aften. Prøv det selv!", ["Jeg anbefaler …, fordi …", "Prøv det selv – du bliver ikke skuffet!"]],
      ["Hilsen og navn", "Ending", "Venlig hilsen\nSara", ["Venlig hilsen", "Mange hilsner"]],
    ],
  },
  takkebrev: {
    task: "Du har været i praktik i et supermarked. Skriv et takkebrev til dine kolleger.",
    rows: [
      ["Hilsen", "Greeting", "Kære kolleger", ["Kære …", "Hej alle sammen"]],
      ["Indledning – sig tak", "Say thank you", "Tusind tak for en god tid i praktik hos jer.", ["Tusind tak for …", "Jeg vil gerne sige tak for …"]],
      ["Hvad du har lært", "What you learned", "Jeg har lært at fylde varer op og at hjælpe kunderne. Nu taler jeg også bedre dansk.", ["Jeg har lært at …", "Nu kan jeg …"]],
      ["Hvad du var glad for", "What you liked", "I var altid søde og tålmodige, og jeg følte mig velkommen fra første dag.", ["Jeg var glad for, at …", "Det bedste var …"]],
      ["Hvad du skal nu", "Your plans", "Nu skal jeg begynde på en uddannelse som butiksassistent.", ["Nu skal jeg …", "Jeg håber, at …"]],
      ["Afslutning", "Ending", "Jeg kommer tit og handler hos jer. Mange hilsner\nSara", ["Jeg kommer og besøger jer.", "Mange hilsner"]],
    ],
  },
  ansoegning: {
    task: "Du har set en jobannonce. Skriv en ansøgning.",
    rows: [
      ["Overskrift", "Heading", "Ansøgning om job som køkkenmedhjælper", ["Ansøgning om job som …"]],
      ["Hilsen", "Greeting", "Kære Restaurant Nimo", ["Kære …"]],
      ["Indledning – hvilket job og hvor du så det", "Which job", "Jeg har set jeres annonce på jobnet.dk, og jeg vil gerne søge jobbet som køkkenmedhjælper.", ["Jeg har set jeres annonce …", "Jeg vil gerne søge jobbet som …"]],
      ["Om dig", "About you", "Jeg hedder Ali, og jeg er 30 år. Jeg har boet i Danmark i fire år.", ["Jeg hedder …, og jeg er … år.", "Jeg bor i …"]],
      ["Erfaring og hvorfor du er god til jobbet", "Experience", "Jeg har arbejdet i et køkken i to år. Jeg er flittig, og jeg kan godt lide at arbejde i et team.", ["Jeg har erfaring med …", "Jeg er god til …", "Jeg er flittig / mødestabil / glad."]],
      ["Afslutning – kontakt", "Contact", "I kan kontakte mig på telefon 12 34 56 78. Jeg håber at høre fra jer.", ["I kan kontakte mig på …", "Jeg håber at høre fra jer."]],
      ["Formel sluthilsen", "Formal ending", "Med venlig hilsen\nAli Hassan", ["Med venlig hilsen"]],
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
