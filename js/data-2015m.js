// Prøve i Dansk 2, maj-juni 2015 – transcribed from the scanned exam paper.
// Included: læseforståelse opgave 2 only. The opgave 1 questions were supplied, but not the
// text booklet they belong to, and no other papers from this session were available.
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 maj-juni 2015";

  const opg2 = {
    id: "p15m-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – OK Optik", body: "■■■■■■\nVi har nedsat mange af vores stel til både herrer, damer og børn med op til 40 %.\nOBS: Gratis synsprøve i hele uge 42.\nOK Optik, Juelsgade 65" },
          { title: "B", body: "■■■■■■\nFra 1/1 2015 indgår Dorthe Bruhn kompagniskab med Kurt Olesen i klinikken på Sejers Allé 63, 8244 Nyby.\nKlinikkens telefon- og konsultationstider er uændrede." },
          { title: "C – Super Form", body: "Sjov og effektiv træning i vores helt nye center.\nVi har åbent 06.00-22.00, så du kan træne, når det passer dig.\nDu kan også melde dig til et hold med en af vores dygtige instruktører.\n■■■■■■\nVi ses i Super Form!\nTlf. 34 06 57 40 · www.super-form.dk" },
          { title: "D", body: "■■■■■■\nBåde stationære og bærbare pc'er.\nSkal det gå hurtigt? Vi tilbyder også ekspresservice inden for 24 timer.\nRing og hør nærmere!\nPronto Service, tlf. 55 00 98 76" },
          { title: "E – Vi fejrer 2-års fødselsdag", body: "– og derfor giver vi 20 % rabat på alle vores løbesko.\nMen du skal være hurtig! Tilbuddet gælder kun på lørdag mellem kl. 10 og 13.\n■■■■■■\nØstre Søgade 19" },
          { title: "F", body: "■■■■■■\nFredag d. 7. juni kl. 12-14 i Aktivitetshuset, Banevej 17.\nTema: Det offentlige på nettet – introduktion til NemID, skat.dk, borger.dk og sundhed.dk.\nMedbring gerne egen computer. Deltagelse er gratis.\nTilmelding på tlf. 45 46 41 09" },
          { title: "G", body: "■■■■■■\nVelegnet til f.eks. lægepraksis eller tandlægeklinik. God beliggenhed i gågaden i Roskilde.\nReception, venteområde og fire separate værelser. Det hele nyistandsat og klar til overtagelse.\nKontakt Din Boligmægler i Roskilde for yderligere info. Tlf. 47 83 09 14" },
          { title: "H", body: "■■■■■■\nSå kan du helt sikkert finde noget, du kan bruge hos os.\nVi har nemlig byens største udvalg af møbler til hjemmet i bl.a. eg, fyr, ask og bøg. Alt i høj kvalitet.\nMAKIDO Træmøbler, Møllergade 2" },
          { title: "I – Gratis influenzavaccination", body: "I oktober og november måned vaccineres uden aftale onsdage kl. 9-11.\nTilbuddet gælder pensionister og førtidspensionister samt ved en række kroniske sygdomme.\n■■■■■■\nLægehuset i Dragsted" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Skal du have nye briller?", answer: "A", example: true },
          { n: 7, text: "Medlemskab: 249 kr. om måneden.", answer: "C" },
          { n: 8, text: "Flotte lokaler i centrum udlejes.", answer: "G" },
          { n: 9, text: "IT i hverdagen.", answer: "F" },
          { n: 10, text: "Reparation af computere.", answer: "D" },
          { n: 11, text: "Sport & fritid – din lokale sportsbutik.", answer: "E" },
          { n: 12, text: "Nyt spisebord?", answer: "H" }
        ]
      }
    ]
  };

  // Real sets newest first: … nov.-dec. 2016, maj-juni 2016, maj-juni 2015, nov.-dec. 2014 …
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 nov.-dec. 2014");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg2);
})();
