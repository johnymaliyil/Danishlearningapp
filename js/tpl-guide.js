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
    task: "Du vil arrangere en tur for dit hold. Skriv en invitation.",
    rows: [
      ["Overskrift", "Heading", "Tur til København!", ["… !", "… søges!", "… udlejes!"]],
      ["Hilsen", "Greeting", "Hej alle sammen", ["Hej alle sammen"]],
      ["Hvad", "What", "Jeg vil gerne invitere jer til en tur til København med holdet. Det bliver rigtig hyggeligt.", ["Jeg vil gerne invitere jer til …", "Jeg søger …", "Jeg vil gerne leje … ud.", "Det bliver rigtig hyggeligt."]],
      ["Hvornår og hvor", "When and where", "Vi mødes lørdag den 5. maj kl. 8 på stationen.", ["Vi mødes … den … kl. …"]],
      ["Hvad man skal have med / pris", "What to bring / price", "Prisen er 300 kr. Husk at tage en madpakke med.", ["Prisen er …", "Husk at tage … med."]],
      ["Tilmelding og kontakt", "Sign up + contact", "Skriv til mig senest den 1. maj, hvis du vil være med. I kan ringe til mig på 22 33 44 55.", ["Skriv til mig senest den …, hvis du vil være med.", "I kan ringe til mig på …"]],
      ["Slut", "Ending", "Jeg glæder mig til at se jer!\nMange hilsner\nAli", ["Jeg glæder mig til at se jer!", "Mange hilsner"]],
    ],
  },
  ven: {
    task: "Delprøve 2: Svar på en e-mail fra din ven (mindst 100 ord).",
    rows: [
      ["Hilsen", "Greeting", "Hej Carl", ["Hej …"]],
      ["Start – altid den samme", "Opening (always the same)", "Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.", ["Tak for din mail.", "Det var dejligt at høre fra dig.", "Jeg håber, at du har det godt.", "Jeg har det fint."]],
      ["Svar på spørgsmålet", "Answer the question", "Du spørger om, hvordan jeg lever billigt, og det vil jeg gerne fortælle dig om.", ["Du spørger om …, og det vil jeg gerne fortælle dig om."]],
      ["Ét afsnit for hvert punkt", "One paragraph per point", "For det første laver jeg en madplan. For det andet cykler jeg på arbejde. Derudover køber jeg brugt tøj.", ["For det første …", "For det andet …", "Derudover …"]],
      ["Sidste punkt", "Last point", "Til sidst vil jeg sige, at jeg vil spare penge til en lejlighed.", ["Til sidst vil jeg sige, at …"]],
      ["Slut – altid den samme", "Ending (always the same)", "Jeg glæder mig til at høre fra dig. Vi ses snart!\nMange hilsner\nAli", ["Jeg glæder mig til at høre fra dig.", "Vi ses snart!", "Mange hilsner"]],
    ],
  },
  jobannonce: {
    task: "Du har en butik og skal bruge en ny medarbejder. Skriv en jobannonce.",
    rows: [
      ["Overskrift", "Heading", "Butiksassistent søges!", ["… søges!"]],
      ["Hvem og hvor", "Who and where", "Vi søger en glad og flittig butiksassistent til vores tøjbutik på Torvet i Vejle.", ["Vi søger en glad og flittig …"]],
      ["Opgaver", "Tasks", "Dine opgaver bliver at hjælpe kunderne og fylde varer op.", ["Dine opgaver bliver at …"]],
      ["Hvad I forventer", "What you expect", "Vi forventer, at du er glad, flittig og mødestabil.", ["Vi forventer, at du er glad, flittig og mødestabil."]],
      ["Arbejdstid", "Hours", "Arbejdstiden er 30 timer om ugen.", ["Arbejdstiden er …"]],
      ["Ansøgning og kontakt", "How to apply", "Send en ansøgning til butik@mail.dk senest den 1. maj. Vi glæder os til at høre fra dig!", ["Send en ansøgning til … senest den …", "Vi glæder os til at høre fra dig!"]],
    ],
  },
  holdning: {
    task: "Skriv en tekst til sprogskolens blad om, hvor du helst vil bo.",
    rows: [
      ["Emnet", "Topic", "Jeg vil gerne skrive om, hvor jeg helst vil bo.", ["Jeg vil gerne skrive om …"]],
      ["Punkt 1", "Point 1", "For det første bor jeg nu i en lejlighed i Vejle.", ["For det første …"]],
      ["Punkt 2", "Point 2", "For det andet boede jeg i en lille landsby i mit hjemland.", ["For det andet …"]],
      ["Fordele og ulemper", "Pros and cons", "Der er både fordele og ulemper. Fordelen er, at der er job i byen. Ulempen er, at husene er dyre.", ["Der er både fordele og ulemper.", "Fordelen er, at …", "Ulempen er, at …"]],
      ["Din mening", "Your opinion", "Jeg synes, at det er bedst at bo i byen, fordi mine børn kan gå i skole tæt på.", ["Jeg synes, at …, fordi …"]],
      ["Slutning", "Conclusion", "Alt i alt vil jeg helst bo i byen.", ["Alt i alt …"]],
    ],
  },
  institution: {
    task: "Du er syg. Skriv en mail til din lærer.",
    rows: [
      ["Hilsen", "Greeting", "Kære Hanne", ["Kære …"]],
      ["Hvorfor du skriver", "Why you write", "Jeg skriver, fordi jeg er syg og ikke kan komme i skole i næste uge.", ["Jeg skriver, fordi …"]],
      ["Spørgsmål", "Questions", "Kan du fortælle mig, hvilke lektier jeg skal lave? Jeg vil også gerne vide, hvornår prøven er.", ["Kan du / I fortælle mig, …?", "Jeg vil også gerne vide, …"]],
      ["Slut", "Ending", "På forhånd tak.\nVenlig hilsen\nAli", ["På forhånd tak.", "Venlig hilsen"]],
    ],
  },
};
