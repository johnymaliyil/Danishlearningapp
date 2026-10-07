// Prøve i Dansk 2, november-december 2012 – transcribed from the exam papers.
// Included: læseforståelse opgave 1-5, skriftlig fremstilling and the oral pictures
// for delprøve 2 (illustrations by Niels Roland, cropped from the picture sheets).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 nov.-dec. 2012";

  const gym = [
    ["Forældre/barn", [
      ["Micro-spring, ca. 1-3 år", "Onsdag", "Rødkilde Gymnasium", "275"],
      ["Far-Mor-Barn, ca. 2-4 år, hold 1", "Mandag", "Charlotteskolen", "400"],
      ["Far-Mor-Barn, ca. 2-4 år, hold 2", "Tirsdag", "Nørremarksskolen, Drengesalen", "400"]
    ]],
    ["Børnegymnastik, pige- og juniorrytme", [
      ["Spilopperne – Piger og drenge 4-5 år", "Onsdag", "Charlotteskolen", "275"],
      ["Troldeungerne – Drenge og piger 4-7 år", "Mandag", "Hældagerhallen", "275"],
      ["Cool Kids – Piger og drenge 0.-2. klasse", "Torsdag", "Nørremarksskolen, Drengesalen", "275"],
      ["Dans for sjov – piger 1.-2. klasse", "Tirsdag", "Langelinie Skole", "275"],
      ["Discotøserne 2.-3. klasse", "Tirsdag", "Mølholm Skole", "275"],
      ["De danseglade rytmepiger 2.-3. klasse", "Torsdag", "Charlotteskolen", "275"],
      ["Riz-Raz-Rytmerne 3.-6. klasse", "Torsdag", "Charlotteskolen", "275"],
      ["Mini Teens 3.-6. klasse", "Torsdag", "Nørremarksskolen, Drengesalen", "275"],
      ["Rhythm'n Funk, 7. klasse til 16 år", "Onsdag", "Charlotteskolen", "350"]
    ]],
    ["Springgymnastik", [
      ["Haletudser 3-5 år", "Onsdag", "Rødkilde Gymnasium", "325"],
      ["Skrubtudser 0.-2. klasse", "Onsdag", "Rødkilde Gymnasium", "400"],
      ["Jumpin' kids 1.-3. klasse", "Mandag", "Rødkilde Gymnasium", "400"],
      ["Turbospringere 1.-4. klasse", "Torsdag", "Rødkilde Gymnasium", "400"],
      ["Minitalenterne 4.-7. klasse", "Mandag", "Rødkilde Gymnasium", "400"],
      ["Talenthold ca. 4.-9. klasse", "Tirsdag + torsdag", "Nørremarkshallen", "525"],
      ["Vejle Spring Team", "Tirsdag + torsdag", "Nørremarkshallen", "650"],
      ["Spring-Rytme konkurrencehold, 6-11 år, forår 2011", "Mandag + torsdag", "Nørremarkshallen og Balle Idrætsefterskole", "450"],
      ["Spring-Rytme konkurrencehold, Juniorpiger, forår 2011", "Mandag + torsdag", "Nørremarkshallen og Balle Idrætsefterskole", "450"],
      ["Stortrampolin, Børn og unge fra 1. klasse", "Tirsdag", "Nørremarkshallen", "650"]
    ]],
    ["Unge/voksne", [
      ["RytmeMix", "Mandag", "Nørremarkshallen", "500"],
      ["Rytmedamer", "Mandag", "Nørremarksskolen, Pigesalen", "400"],
      ["Glad motion for damer", "Mandag", "Damhavens Skole, Pigesalen", "400"],
      ["Motion og velvære, 1", "Mandag", "Kirkebakkeskolen", "400"],
      ["Motion og velvære, 2", "Mandag", "Kirkebakkeskolen", "400"],
      ["Frisk motion for alle", "Mandag", "Charlotteskolen", "400"],
      ["Damegymnastik", "Tirsdag", "Mølholm Skole", "400"],
      ["Herregymnastik og volleyball", "Mandag", "Mølholmhallen", "400"],
      ["Herregymnastik", "Torsdag", "Nørremarksskolen, Pigesalen", "400"],
      ["Gymnastik for alle", "Mandag", "Langelinie Skole", "400"],
      ["Parkour, fra 15 år", "Onsdag", "Rødkilde Gymnasium", "400"]
    ]],
    ["Aerobic, zumba, alternativ motion, pilates", [
      ["Aerobic High'n Low Impact", "Mandag", "Rødkilde Gymnasium", "500"],
      ["Step-aerobic, let øvede", "Tirsdag", "Rødkilde Gymnasium", "500"],
      ["Aerobic styrketræning", "Onsdag", "Rødkilde Gymnasium", "500"],
      ["Step og toning, begyndere til let øvede", "Onsdag", "Rødkilde Gymnasium", "600"],
      ["Step med styrketræning/bodytoning, let øvede og øvede", "Torsdag", "Rødkilde Gymnasium", "600"],
      ["Zumba", "Onsdag", "Damhavens Skole, Pigesalen", "500"],
      ["\"Motion som medicin\" M/K", "Torsdag", "Rødkilde Gymnasium", "475"],
      ["Bevægelse og afspænding M/K", "Mandag", "Nørremarksskolen, Pigesalen", "400"],
      ["Pilates, let øvede", "Onsdag", "Søndermarksskolen, Multisalen", "325"],
      ["Zumba", "Torsdag", "Damhavens Skole, Pigesalen", "500"],
      ["Tirsdags-PILATES", "Tirsdag", "Spejlsalen, DGI-Huset Vejle", "250"]
    ]],
    ["Formiddagshold og stavgang", [
      ["Bevægelse og afspænding M/K, efterår", "Tirsdag", "Spejlsalen, DGI-Huset Vejle", "200"],
      ["Stavgang, tirsdag 10-11", "Tirsdag", "Vejle Stadion", "300"],
      ["Stavgang, tirsdag 16.30-17.30", "Tirsdag", "Vejle Stadion", "300"],
      ["Stavgang, onsdag 9-10", "Onsdag", "Vejle Stadion", "300"],
      ["Stavgang, onsdag 10-11", "Onsdag", "Vejle Stadion", "300"],
      ["Stolemotion M/K, efterår", "Mandag", "Fælleshus, Vindinggårdcenter 67", "125"],
      ["Seniormotion", "Mandag", "Bakkeager Plejecenter, Bredballe", "300"],
      ["Senior M/K", "Onsdag", "Taekwondos Klublokaler, Horsensvej 74", "300"],
      ["Senior Lady", "Torsdag", "Spejlsalen, DGI-Huset Vejle", "400"],
      ["Junior Lady, hele sæsonen", "Torsdag", "Spejlsalen, DGI-Huset Vejle", "400"],
      ["Junior lady, forår", "Torsdag", "Spejlsalen, DGI-Huset Vejle", "225"],
      ["Tirsdagsaktive", "Tirsdag", "Spejlsalen, DGI-Huset Vejle", "400"]
    ]]
  ];

  // [tog nr., afgang, tid, ankomst, tid, forsinket, ankomst næste station, forventet tid, bemærkning]
  const trains = [
    ["L 44", "Frederikshavn", "11:30", "Kbh. Lufthavn", "17:41", "", "Sorø", "", "Kører kun til Sorø"],
    ["L 55", "København H", "15:50", "Frederikshavn", "21:33", "10 min.", "Vejle", "18:02", "Nedsat hastighed"],
    ["L 59", "København H", "16:50", "Frederikshavn", "22:36", "20 min.", "Odense", "18:25", ""],
    ["IC 140", "Lindholm", "12:08", "Kbh. Lufthavn", "17:37", "30 min.", "Ørestad", "18:01", "En teknisk fejl"],
    ["IC 940", "Sønderborg", "13:58", "Østerport", "17:59", "26 min.", "Roskilde", "17:50", ""],
    ["IC 861", "Østerport", "16:18", "Esbjerg", "19:23", "22 min.", "Korsør", "17:54", ""],
    ["IC 161", "Kbh. Lufthavn", "16:38", "Lindholm", "22:00", "24 min.", "Ringsted", "17:59", "Personaleforhold"],
    ["IE 35", "Betriebstbf. Berlin-Rummelsburg", "11:05", "København H", "18:10", "", "Næstved", "", "Kører kun til Næstved"],
    ["Re 1246", "Nykøbing F", "15:38", "Østerport", "17:22", "", "Næstved", "", "Kører kun til Næstved"],
    ["Re 4144", "Ringsted", "16:25", "Østerport", "17:29", "", "", "", "Aflyst"],
    ["Re 4148", "Ringsted", "17:25", "Østerport", "18:29", "", "", "", "Afgår fra Borup kl. 17:34"],
    ["Re 2245", "Østerport", "16:01", "Nykøbing F", "17:59", "52 min.", "Glumsø", "17:53", ""],
    ["Re 5849", "Østerport", "16:28", "Kalundborg", "18:19", "16 min.", "Holbæk", "17:52", "Nedsat hastighed"],
    ["Re 4151", "Østerport", "16:41", "Ringsted", "17:44", "", "Viby Sj", "", "Personaleforhold. Kører kun til Borup"],
    ["Re 7957", "Svendborg", "16:49", "Odense", "17:31", "12 min.", "Odense", "", "Teknisk fejl på et signal"],
    ["Re 2249", "Østerport", "17:01", "Nykøbing F", "18:58", "13 min.", "Borup", "17:58", "Personaleforhold. Afgår fra København H kl. 17:11"],
    ["Re 4053", "Østerport", "17:08", "Roskilde", "17:51", "11 min.", "Hedehusene", "17:52", ""],
    ["ØR 2090", "Helsingør", "18:25", "København H", "19:11", "", "", "", "Afgår fra Snekkersten kl. 18:28"],
    ["ØR 1079", "Malmø Central", "16:33", "København H", "17:07", "33 min.", "København H", "", ""],
    ["ØR 1379", "Kbh. Lufthavn", "16:42", "Nivå", "17:35", "14 min.", "Nivå", "17:49", "Eksterne forhold"],
    ["ØR 2077", "København H", "16:49", "Helsingør", "17:34", "11 min.", "Helsingør", "", "Eksterne forhold"],
    ["ØR 1083", "Malmø Central", "17:13", "København H", "17:47", "12 min.", "Tårnby", "17:49", "Eksterne forhold"],
    ["ØR 2083", "København H", "17:49", "Helsingør", "18:34", "12 min.", "Tårnby", "", "Eksterne forhold"],
    ["EC 1275", "København H", "17:20", "Odense", "18:52", "13 min.", "Ringsted", "18:13", ""]
  ];

  const opg1 = {
    id: "p12n-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Hvilket telefonnummer skal man ringe til, hvis man gerne vil se lejligheden i Æbleparken?\" – 51 20 31 80.",
    sections: [
      {
        heading: "Ledige lejeboliger",
        cards: [
          { title: "Dalum, Fåborgvej", body: "Lejl. 78 m²\nMdl. leje 5025,- + forbrug\nDep. 3 mdr.\nTlf. 66 16 97 60" },
          { title: "Lejlighed, Odense C", body: "Absalonsgade, 68 m²\npris pr. md. 5637,- + forbrug. Dep. 3 mdr.\nTlf. 60 48 98 70" },
          { title: "Skibhusvej, Odense C", body: "1-vær. lejlighed med eget bad og køkken. 22 m².\nUdlejes pr. 01.02.2011.\nMdl. leje 2.500,- + forbrug.\nTlf. 40 81 03 07" },
          { title: "God begynderlejl.", body: "på 40 m² i Bred ved Vissenbjerg. 2 sammenhængende rum, eget køkken og bad samt lille entré. Vaskemaskine og tørretumbler deles med ejendommens 2 øvrige beboere. Lejligheden ligger 3 minutters gang fra Bred Station og 17 minutters kørsel i tog til Odense Banegård.\nPris 3.350,-. Depositum: 3 måneders husleje.\nKontakt: Troels Jensen Ejendomme ApS\nTlf. 69 10 63 88" },
          { title: "2-vær. lejlighed udlejes", body: "Dejlig lejlighed (58 m²) med altan beliggende i Dalum udlejes. Gode indkøbsmuligheder, cykelafstand til centrum, OUH, SDU og Teknikum. Husleje kr. 4.400,- ekskl. forbrug. Indskud kr. 17.600,-. Husdyr ikke tilladt.\nHenvendelse på tlf. 20 40 70 55" },
          { title: "Hyggelig 2-vær. lejl.", body: "på 50 m², beliggende i Bred ved Vissenbjerg. Lejligheden ligger på 2. sal og har eget bad/toilet og køkken. Der er vaskemaskine og tørretumbler i kælderen, som deles med ejendommens 2 øvrige beboere. Der er 3 min. gang til stationen og 17 minutters transporttid i tog til Odense centrum. Lejemålet er tidsubegrænset.\nPris 4.050,-. Depositum 3 måneders husleje.\nKontakt: Troels Jensen Ejendomme ApS\nTlf. 69 10 63 88" },
          { title: "3-vær. lejlighed tæt ved Rosengårdscentret", body: "82 m² + 30 m² terrasse. Nyt badeværelse og køkken. Husleje 6.100,- + forbrug. Dep. 3 mdr. + 1 md. leje forud.\nHenv. tlf. 40 81 03 07" },
          { title: "Hyggelig 1. sals lejl.", body: "i Bred ved Vissenbjerg. Lejl. er 74 m² og består af lille entré, køkken, 2 sammenhængende stuer, soveværelse samt badeværelse. Der er vaskemaskine og tørretumbler i kælderen, som deles med ejendommens 2 øvrige beboere.\nPris 4.830,-. Depositum: 3 måneders husleje.\nKontakt: Troels Jensen Ejendomme ApS\nTlf. 69 10 63 88" },
          { title: "Eksempel: Lækker 2½-vær. lejl. i Æbleparken, Od. N.", body: "Flot 2½ vær. lejl. 59 m² med nyere køkken og bad, istandsat overalt. Masser af skabe.\nHusl. kr. 3.900,- pr. md. + forbr. kr. 600,- inkl. el. Dep. 3 mdr. Antenne kr. 60,-. Ingen husdyr.\nKlar pr. 15/1-11. SKAL SES!\nHenv. tlf. 51 20 31 80" },
          { title: "Odense N", body: "Lys, nyrenoveret lejlighed på 58 m² udlejes nu.\nHusleje kr. 4.100,- + forbrug kr. 500,-. Depositum 12.300,-.\nTlf. 41 10 16 44" },
          { title: "Værelse Odense SV", body: "Sanderum, værelse 18 m², mdl. leje 2250,- + forbrug. Dep. 3. mdr.\nTlf. 60 48 98 70" },
          { title: "Lejligheder i Odense C", body: "Reventlowsvej: 2 vær., 2. sal, 65 m², kr. 4.075,-.\nChristiansgade: 3 vær., stue, 83 m², kr. 5.800,- (velegnet til bofællesskab).\nTh. B. Thrigesgade: 3 vær., stue, 85 m², kr. 5.150,- (velegnet til bofællesskab).\nLahnsgade: 4 vær., stue, 119 m², kr. 7.200,-.\nLahnsgade: 4 vær., 1. sal, 119 m², kr. 6.300,-.\nHans Tausensgade: 5 vær., 3. sal, 144 m², kr. 8.400,-.\nRenoverede og nyistandsatte.\nTlf. 40 16 94 37 · 66 11 12 37" },
          { title: "Værelse udlejes i Marslev", body: "Gerne til rolig person, 20 m² med fælles køkken og bad.\nHusleje kr. 2000,- pr. md. Depositum snakker vi om.\nHenv. 78 78 34 76" },
          { title: "Odense C, Vesterbro 116", body: "Udlejes fra 1.2., 3-vær. lejlighed på 2. sal. IKKE god som delelejlighed.\nPris pr. måned kr. 4.500,- + forbrug. Depositum kr. 15.000,-.\nTlf. 28 10 32 73" },
          { title: "Odense S", body: "Skt. Klemens, Svenstrupvej, 6 km til Uni/centrum udlejes følgende lejligheder/rækkehuse u/have:\n1 vær. 32 m²: Pr. md. kr. 2.700,- + forbrug. Dep. kr. 15.000,-\n1 vær. 38 m² + hems: Pr. md. kr. 3000,- + forbrug. Dep. kr. 15.000,-\n1 vær. 48 m² + hems: Pr. md. kr. 3.300,- + forbrug. Dep. kr. 15.000,-\n2 vær. 48 m²: Pr. md. kr. 3.500,- + forbrug. Dep. kr. 15.000,-\n2 vær. 57 m², ledig 1.2.: Pr. md. kr. 3.900,- + forbrug. Dep. kr. 15.000,-\nTlf. 28 10 32 73" }
        ],
        source: "Kilde: Ugeavisen Odense"
      },
      {
        heading: "Årsprogram for Vejle Gymnastik-Forening",
        cards: gym.map(([title, rows]) => ({ title, body: rows.map(([hold, dag, sted, pris]) => `${hold} · ${dag} · ${sted} · ${pris} kr.`).join("\n") })),
        source: "Kilde: http://vejlegf.dk/aarsprogram/"
      },
      {
        heading: "Forsinkede og aflyste tog",
        cards: trains.map(([nr, fra, tid1, til, tid2, fors, naeste, fv, bem]) => ({
          title: `Tog nr. ${nr}`,
          body: `Afgang: ${fra} ${tid1} → Ankomst: ${til} ${tid2}` +
            (fors ? `\nForsinket: ${fors}` : "") +
            (naeste ? `\nAnkomst næste station: ${naeste}${fv ? " – forventet tid " + fv : ""}` : "") +
            (bem ? `\nBemærkning: ${bem}` : "")
        })),
        source: "Kilde: www.bane.dk"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Hvor mange kvadratmeter (m²) er den lejlighed, der ligger i Hans Tausensgade?", accept: ["144", "144 m2", "144 m²", "144m2", "144m²", "144 m 2", "144 kvadratmeter", "144 kvm", "144 kvm.", "den er 144 m2", "den er 144 kvadratmeter", "hundrede og fireogfyrre", "hundrede og fireogfyrre kvadratmeter"] },
      { type: "short", n: 2, q: "Hvilke to dage kan man gå til zumba?", accept: ["onsdag og torsdag", "torsdag og onsdag", "onsdag torsdag", "om onsdagen og om torsdagen", "onsdag og torsdag aften", "onsdage og torsdage", "man kan gå til zumba onsdag og torsdag"] },
      { type: "short", n: 3, q: "Hvor mange gange om ugen træner Vejle Spring Team?", accept: ["2", "to", "2 gange", "to gange", "2 gange om ugen", "to gange om ugen", "tirsdag og torsdag", "2 gange tirsdag og torsdag", "to gange tirsdag og torsdag"] },
      { type: "short", n: 4, q: "Hvad kan man gå til på Langelinie Skole om mandagen?", accept: ["gymnastik for alle", "gymnastik", "man kan gå til gymnastik for alle", "holdet gymnastik for alle"] },
      { type: "short", n: 5, q: "Hvilket nummer har det tog, der er aflyst?", accept: ["re 4144", "4144", "re4144", "nr 4144", "nummer 4144", "tog nr re 4144", "toget re 4144"] },
      { type: "short", n: 6, q: "Hvad er grunden til, at toget fra Lindholm er forsinket?", accept: ["en teknisk fejl", "teknisk fejl", "der er en teknisk fejl", "det er en teknisk fejl", "på grund af en teknisk fejl", "pga en teknisk fejl", "fordi der er en teknisk fejl"] }
    ]
  };

  const opg2 = {
    id: "p12n-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler et eller flere ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Fisk og fri", sub: "Eksempel", body: "Danmarks mest læste lystfiskermagasin.\nArtikler, nyheder, test, konkurrencer og meget mere.\nFisk og fri udkommer 10 gange om året.\n■■■■■■" },
          { title: "B – Har du ryddet op på loftet?", body: "Vi modtager alle salgbare effekter, fx møbler, bøger, tøj og porcelæn.\nBemærk: Vi modtager ikke hårde hvidevarer.\nVi afhenter gerne.\nRing på tlf. 75 34 87 13\n■■■■■■" },
          { title: "C", body: "■■■■■■\nEr du god til fisk? Så har vi jobbet til dig.\nVelfungerende køkken med søde medarbejdere.\nFuld tid. Løn ifølge overenskomst.\nSkriv til os for nærmere information.\nKlausens Fiskerestaurant\nkf@mail.dk" },
          { title: "D – Hus til leje", body: "Centralt i Bogense. Udlejes pr. 1. februar. 4 værelser.\n■■■■■■\nModerne badeværelse.\nMånedlig husleje 5.200 kr. + forbrug.\nDepositum: 23.000 kr.\nHumlegårdens Udlejning, tlf. 64 18 63 24" },
          { title: "E", body: "■■■■■■\nArbejdstid: fredag og lørdag kl. 17-23.\nEr du fyldt 18 år, serviceminded, glad og udadvendt?\nSend en kort ansøgning til os.\nCafé Clark\nclark@fisk.dk" },
          { title: "F – Zumba", body: "KOM OG VÆR MED!\nOnsdag 5/1 kl. 19 i Hårslev Forsamlingshus.\nDeltagelse er gratis. Vi danser i ca. 1 time.\nInstruktør: Kristina Lynge\n■■■■■■" },
          { title: "G – Hvidevareservice", body: "Hurtig service. Dygtige teknikere.\nKomfurer, frysere, køleskabe, opvaskemaskiner og emhætter.\n■■■■■■\nRing 70 11 44 00" },
          { title: "H – Filmklub for børn", body: "Filmperler for de 8-12-årige\n1. lørdag i hver måned. Den 5. februar kl. 14:\n\"Hjælp, jeg er en fisk\"\nVarighed: ca. 80 minutter\n■■■■■■\nKarensminde Kulturhus" },
          { title: "I", body: "■■■■■■\nLÆKRE OPSKRIFTER med bl.a. laks, torsk og rødtunge.\nDer undervises 2 mandage: 22/10 og 12/11 på AOF Sydjylland.\nPris for råvarer pr. gang: 100 kr.\nTilmelding senest d. 24/11 på tlf. 77 50 42 36" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Abonnement (ét år) 450 kr.", answer: "A", example: true },
          { n: 7, text: "Nyt køkken med opvaskemaskine", answer: "D" },
          { n: 8, text: "Billetpris: 40 kr.", answer: "H" },
          { n: 9, text: "Tjener søges – deltid", answer: "E" },
          { n: 10, text: "Lær at lave lette fiskeretter", answer: "I" },
          { n: 11, text: "Vi reparerer alle mærker", answer: "G" },
          { n: 12, text: "Genbrugsbutikken", answer: "B" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p12n-3", group: G, real: true,
    title: "Opgave 3 – Gratis cykler til studerende",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Nu kan danske studerende låne en ny cykel i et år – helt gratis. Den studerende skal kun betale et depositum på 500 kroner. Cyklerne bliver kaldt Freebikes, og det [[0]] ikke noget at låne dem, fordi de bliver betalt af forskellige firmaer.

Et firma må sætte sit navn på den cykel, som firmaet betaler for. Firmaet må også bestemme, hvad [[13]] cyklen skal have, så fx en Netto-cykel kan blive sort og gul. Når en studerende så [[14]] rundt på cyklen, får firmaet lidt reklame.

Når en studerende [[15]] sin cykel efter et år, bliver den sendt til Afrika. Her giver man den til en ung afrikaner, som bor langt fra sin skole. I mange afrikanske lande ligger der nemlig kun gymnasier i de [[16]] byer. Og der er ikke altid offentlige transportmidler. Så en cykel kan være en stor hjælp, hvis man bor i en lille landsby, og man [[17]] vil gå på gymnasiet. I Danmark er det lige nu [[18]] studerende i Odense, Århus og København, som kan låne en gratis cykel. Men hvis cyklerne bliver en succes, vil studerende i andre danske [[19]] også få tilbuddet i løbet af de næste par år. Man kan [[20]] mere om de gratis cykler på hjemmesiden www.freebikes.dk. Det er også her, man kan bestille en gratis cykel.`,
    questions: [
      {
        type: "gaps",
        bank: ["koster", "lande", "kører", "læse", "kun", "pris", "gerne", "store", "ikke", "skrive", "byer", "farve", "små", "afleverer"].map(w => ({ key: w, text: w })),
        example: { 0: "koster" },
        answers: { 13: "farve", 14: "kører", 15: "afleverer", 16: "store", 17: "gerne", 18: "kun", 19: "byer", 20: "læse" }
      }
    ]
  };

  const opg4 = {
    id: "p12n-4", group: G, real: true,
    title: "Opgave 4 – Et liv som blind",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Mads Rasmussen er 19 år. For to måneder siden flyttede han til Århus for at studere ligesom så mange andre unge. Men Mads har et handicap: Han kan ikke se!

**0.** Mads er født med en øjensygdom, som betyder, at han er næsten helt blind. Han kan faktisk kun se lys og mørke. [[0]]. Han er fx lige flyttet på kollegium i Århus og er begyndt at studere musik. Det har været hans store drøm, siden han var barn.

**21.** På kollegiet deler Mads køkken med 7 andre unge studerende. Det betyder meget for ham. For som blind kan det godt være lidt svært at lære nye mennesker at kende, når man ikke kan få øjenkontakt. Men når man har fælles køkken og spiser sammen flere gange om dagen, så er det meget lettere. [[21]]. De er begge to interesserede i musik, så de går tit til koncerter sammen eller sidder på et af værelserne og hører cd'er.

**22.** Mads har en lang, hvid stok, som han altid har med, når han går rundt i byen. Med den kan han fx føle vejen og fortovet. Stokken betyder også, at andre mennesker kan se, at han er blind. Det er han glad for, for så kan folk gå til side. [[22]]. Nogle mennesker vil nemlig meget gerne hjælpe Mads. De tager ham fx i armen, selvom han ikke har bedt om det. Det kan han ikke lide, og så siger han høfligt, men bestemt, at han ikke har brug for hjælp.

**23.** I hverdagen køber Mads selv ind. Han beder medarbejderne og de andre kunder i supermarkedet om hjælp, og så går det fint. Men det er svært for ham at købe tøj. [[23]]. Hun går med ham i butikker og sørger for, at det tøj, han køber, passer sammen i farverne. Og så siger hun altid sin mening, hvis han prøver noget tøj, som ikke klæder ham. Sådan har det været, siden de to søskende var børn.

**24.** Der er forskellige tekniske hjælpemidler, som gør hverdagen lettere for Mads. Hans mobiltelefon kan fx læse hans sms-beskeder højt for ham. Og hans computer har et taleprogram, så han kan lytte til de tekster, han får på sin uddannelse. [[24]]. Det betyder nemlig, at han kan klare sine studier uden hjælp fra andre.

**25.** Så Mads lever altså et selvstændigt liv med studier, fritid og venner, selvom han er blind. Han er selvfølgelig nødt til at planlægge sin dag godt. Der er også mange ting, der tager længere tid for ham, fordi han ikke kan se. [[25]]. Og måske er det derfor, Mads ikke synes, at det er noget problem. For ham er det vigtigste, at han kan klare sig selv.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "Alligevel lever Mads et normalt liv." },
          { key: "B", text: "Men det er ikke kun godt." },
          { key: "C", text: "Og det er han lidt træt af." },
          { key: "D", text: "Så det hjælper hans søster ham med." },
          { key: "E", text: "Mads har da også allerede fået en god ven." },
          { key: "F", text: "Men sådan har det altid været." },
          { key: "G", text: "Så det gør hans mor." },
          { key: "H", text: "Det er Mads meget glad for." }
        ],
        example: { 0: "A" },
        answers: { 21: "E", 22: "B", 23: "D", 24: "H", 25: "F" }
      }
    ]
  };

  const opg5 = {
    id: "p12n-5", group: G, real: true,
    title: "Opgave 5 – Interview med Jytte",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Jytte – bagerekspedient i Kvickly",
        cards: [
          { title: "A", sub: "Eksempel", body: "Jeg er vild med hunde, og vi har tre derhjemme. De har brug for meget motion, så de skal have nogle lange ture hver dag. For mig er det den bedste måde at slappe af på efter en lang arbejdsdag. I weekenden kører jeg tit til stranden og lufter dem der." },
          { title: "B", body: "Ja, det har jeg. Og jeg har faktisk mange. En af dem har handlet hos mig, siden bageriet åbnede. Det er en ældre dame, som kommer hver fredag og køber kager til kaffen. Så får vi os næsten altid en lille snak. Det kan vi begge to godt lide." },
          { title: "C", body: "Egentlig ikke så dårligt, som man skulle tro. Altså, det har jo sjældent noget med mig at gøre, hvis folk er i dårligt humør. De er måske stressede eller trætte. Så er jeg bare ekstra professionel og høflig over for dem. Og så glæder jeg mig over, at de fleste er venlige og søde." },
          { title: "D", body: "Nej, for butikken havde slet ikke et bageri, da jeg startede. I de første par år sad jeg ved kassen. Og så var jeg i frugt og grønt i et stykke tid. Men jeg har været ekspedient i bageriet, siden det åbnede for snart 19 år siden." },
          { title: "E", body: "Jeg tror faktisk ikke, jeg kan komme i tanke om noget dårligt. Jo, nu ved jeg det. Kagerne! Jeg elsker kager, og derfor spiser jeg alt for mange. Det er jeg ked af, for jeg er lidt for tyk. Men det er svært, når man står med dem i hænderne hele dagen." },
          { title: "F", body: "Nej, faktisk aldrig. Jeg har nogle unge kolleger, som har fritidsjob i butikken. De skal passe deres studier, så de har ikke noget imod at arbejde sent. Og så kan vi andre få tidligt fri. Det er jeg glad for. Jeg er nemlig morgenmenneske." },
          { title: "G", body: "Det er et svært spørgsmål, for der er flere ting. Men hvis jeg kun må komme med ét svar, bliver det: mine kolleger! De er helt fantastiske. En af dem har været her lige så længe som mig, og vi er også venner privat. Men jeg har det også godt med de unge mennesker, som arbejder her." },
          { title: "H", body: "Det spørger rigtig mange om! Jeg har selvfølgelig smagt på alle de forskellige slags, vi har i butikken. Og også mere end én gang. Det hører med til jobbet, synes jeg. Men som så mange andre skal jeg passe på vægten. Så jeg tager kun lidt sødt med hjem til kaffen et par gange om ugen." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvad laver du, når du har fri?", answer: "A", example: true },
          { n: 26, text: "Hvad kan du bedst lide ved dit job?", answer: "G" },
          { n: 27, text: "Har du altid arbejdet i samme afdeling?", answer: "D" },
          { n: 28, text: "Spiser du tit kager?", answer: "H" },
          { n: 29, text: "Hvordan har du det med sure kunder?", answer: "C" },
          { n: 30, text: "Har du tit aftenvagter?", answer: "F" }
        ]
      }
    ]
  };

  // Real sets newest first: … 2013 nov.-dec., 2013 maj-juni, 2012 nov.-dec., 2012 maj.
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 maj 2012");
  const fallback = PD2.READING.findIndex(r => !r.real);
  PD2.READING.splice(at >= 0 ? at : (fallback < 0 ? PD2.READING.length : fallback), 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling nov.-dec. 2012 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2012);
  const lastReal = PD2.WRITING.reduce((i, w, k) => (w.real ? k : i), -1);
  PD2.WRITING.splice(before >= 0 ? before : lastReal + 1, 0,
    {
      id: "w12na", delprove: 1, real: true, year: 2012,
      title: "A: En klage over en nabo, der ryger (nov.-dec. 2012)",
      kind: "Prøveopgave · klage til boligforeningen",
      minWords: 80, maxWords: 150,
      situation: "Du bor i lejlighed. Det er forbudt at ryge i opgangen i ejendommen. Din nabo ryger tit i opgangen. Du vil skrive en klage til boligforeningen. Skriv klagen. Du skal begynde og afslutte klagen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvad du hedder, og hvor du bor", "Hvad din nabo hedder, og hvor tit din nabo ryger i opgangen", "Hvorfor det er et problem for dig", "Hvad du har gjort for at løse problemet"],
      phrases: ["Kære Boligforeningen …", "Jeg hedder … og bor på …", "Min nabo … ryger i opgangen hver dag.", "Det er et problem for mig, fordi …", "Jeg har allerede talt med ham, men …", "Med venlig hilsen"],
      model: `Kære Boligforeningen Lindegården

Jeg skriver til jer, fordi jeg vil klage over min nabo, som ryger i opgangen.

Det drejer sig om min nabo, Jens Nielsen, som bor på 3. sal i Lindegården 14 i Aalborg. Jeg hedder Amina Hassan, og jeg bor på 2. sal i samme opgang. Jens ryger i opgangen næsten hver dag, selvom det er forbudt.

Problemet er, at hele opgangen lugter af røg, og røgen kommer ind i min lejlighed. Min søn har astma, og han hoster meget, når vi går op ad trappen.

Jeg har allerede talt med Jens to gange og hængt et skilt op, men han ryger stadig.

Derfor vil jeg gerne bede jer om at tale med ham og minde ham om reglerne.

Jeg håber, at I vil hjælpe mig, og jeg ser frem til at høre fra jer snarest.

Med venlig hilsen
Amina Hassan
Lindegården 14, 2. th.`
    },
    {
      id: "w12nb", delprove: 1, real: true, year: 2012,
      title: "B: En invitation til en fest (nov.-dec. 2012)",
      kind: "Prøveopgave · invitation til klassekammerater",
      minWords: 80, maxWords: 150,
      situation: "Du vil holde en fest hjemme hos dig selv for dine klassekammerater fra sprogskolen. Du vil skrive en invitation. Skriv invitationen. Du skal begynde og afslutte invitationen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvorfor du gerne vil invitere dine klassekammerater til fest", "Hvornår du holder fest (dato og klokkeslæt), og hvad din adresse er", "Hvad I skal spise til festen, og hvad I skal lave", "Hvordan og hvornår dine klassekammerater kan melde sig til festen"],
      phrases: ["Kom til fest hos mig!", "Jeg vil gerne invitere jer til …", "Festen er lørdag den … kl. …", "Min adresse er …", "Vi skal spise … og bagefter …", "Meld dig til senest …"],
      model: `Kom til fest hos mig!

Hej alle sammen

Jeg hedder Sofia, og jeg skriver, fordi jeg gerne vil invitere jer til en fest hjemme hos mig. Vi har snart gået på hold 4 sammen i et år, og det vil jeg gerne fejre med jer.

Festen er lørdag den 15. december kl. 18, og min adresse er Søndergade 22, 1. tv. i Vejle.

Vi skal spise mad fra mange lande. Jeg laver en stor gryderet fra Spanien, og alle tager en lille ret med fra deres hjemland. Bagefter skal vi høre musik, danse og hygge os.

Hvis du vil med, så ring eller skriv til mig på 28 64 19 37 senest fredag den 7. december.

På forhånd tak!

Mange hilsner
Sofia`
    },
    {
      id: "w12nc", delprove: 2, real: true, year: 2012,
      title: "En e-mail om din kollega (nov.-dec. 2012)",
      kind: "Prøveopgave · e-mail til en ven · ca. 100 ord",
      minWords: 90, maxWords: 150,
      situation: "Du har fået en e-mail fra din ven Rasmus. I e-mailen skriver han bl.a.: \"… Du skrev i din sidste mail, at du har problemer med din kollega. Det lyder ikke så godt. Kan du ikke fortælle noget mere om det? …\" Skriv et svar til Rasmus. Du skal skrive ca. 100 ord.",
      points: ["Fortæl, hvem din kollega er, og hvor I arbejder", "Fortæl, hvad problemet med din kollega er", "Fortæl, hvordan du har det med problemet", "Fortæl, hvad du vil gøre for at løse problemet"],
      phrases: ["Hej Rasmus", "Tak for din mail.", "Min kollega hedder …, og vi arbejder …", "Problemet er, at han/hun …", "Det gør mig …", "Jeg vil tale med …"],
      model: `Hej Rasmus

Tak for din mail. Det var dejligt at høre fra dig. Jeg håber, at du har det godt. Jeg har det fint.

Du spørger om min kollega, og det vil jeg gerne fortælle dig lidt om.

For det første hedder han Peter, og vi arbejder sammen på et lager i Kolding. Vi har været kolleger i et halvt år.

Derudover er han ikke særlig flink. Han kommer tit for sent, og så må jeg lave hans arbejde. Han taler også grimt om mig til de andre kolleger. Det gør mig ked af det.

Til sidst vil jeg sige, at jeg vil tale med vores chef om det i næste uge. Jeg håber, at det bliver bedre.

Jeg glæder mig til at høre fra dig. Vi ses snart!

Mange hilsner
Ali`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven nov.-dec. 2012 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2, november-december 2012)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p12n-a", title: "Venner", real: true, year: 2012,
      pictures: [
        { img: "images/pd2-2012-nd/venner-1.jpg", credit, alt: "To taxachauffører står og snakker og griner ved en lang række taxaer i lufthavnen", words: ["taxachauffør", "kollega", "lufthavnen", "snakke sammen", "pause"] },
        { img: "images/pd2-2012-nd/venner-2.jpg", credit, alt: "To kvinder drikker kaffe og griner sammen i et klasselokale på sprogskolen, mens en mand læser alene", words: ["klassekammerat", "sprogskolen", "frikvarter", "grine", "alene"] }
      ],
      interview: [
        "Hvad laver personerne på billedet?",
        "Hvor har du mødt dine venner i Danmark?",
        "Hvad laver du sammen med dine venner?",
        "Hvad er en god ven for dig?"
      ],
      talk: [
        { who: "partner", say: "Jeg har fået mange venner på mit arbejde. Hvor har du fået dine venner?" },
        { who: "partner", say: "Jeg synes, det er svært at få danske venner. Hvad synes du?" },
        { who: "mediator", say: "Hvordan møder man nye venner i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at venner er lige så vigtige som familien. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at få nye venner i Danmark?" }
      ],
      phrases: ["På billedet kan jeg se …", "De ser ud til at være gode venner", "Jeg mødte min bedste ven …", "Sammen med mine venner kan jeg godt lide at …", "En god ven er en, der …", "Hvad med dig?"]
    },
    {
      id: "p12n-b", title: "Transport", real: true, year: 2012,
      pictures: [
        { img: "images/pd2-2012-nd/transport-1.jpg", credit, alt: "Mange biler holder i kø på en motorvej, og bilisterne ser sure og utålmodige ud", words: ["bilkø", "motorvejen", "myldretid", "komme for sent", "udstødning"] },
        { img: "images/pd2-2012-nd/transport-2.jpg", credit, alt: "En fyldt bus eller et tog, hvor mange mennesker i vintertøj står tæt og holder fast i stængerne", words: ["offentlig transport", "fyldt", "stå op", "passagerer", "vintertøj"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvordan kommer du på arbejde eller i skole?",
        "Hvad er fordelene og ulemperne ved at køre i bil?",
        "Hvordan er transporten i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg cykler altid, også når det regner. Hvordan kommer du rundt?" },
        { who: "partner", say: "Jeg synes, at busser og tog er alt for dyre i Danmark. Hvad synes du?" },
        { who: "mediator", say: "Hvordan kommer folk typisk på arbejde i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at der skal være færre biler i byerne. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at undgå kø i myldretiden?" }
      ],
      phrases: ["På billedet kan jeg se …", "Bilerne holder i kø, fordi …", "Jeg tager tit bussen/toget, fordi …", "Det bedste ved at cykle er …", "I mit hjemland kører de fleste …", "Er du enig?"]
    },
    {
      id: "p12n-c", title: "Mobiltelefoner", real: true, year: 2012,
      pictures: [
        { img: "images/pd2-2012-nd/mobiltelefoner-1.jpg", credit, alt: "En kvinde taler højt i sin mobiltelefon i toget, og de andre passagerer ser irriterede ud", words: ["toget", "tale højt", "passagerer", "irriteret", "stillekupé"] },
        { img: "images/pd2-2012-nd/mobiltelefoner-2.jpg", credit, alt: "En lærer underviser på sprogskolen, mens en elev går ud ad døren med sin mobil, og en anden skriver sms under bordet", words: ["undervisningen", "læreren", "sms", "forstyrre", "slukke mobilen"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvad bruger du din mobiltelefon til?",
        "Hvornår synes du, at man ikke skal bruge sin mobiltelefon?",
        "Hvordan var det med telefoner i dit hjemland, da du var barn?"
      ],
      talk: [
        { who: "partner", say: "Jeg har altid min mobil med, også når jeg sover. Gør du også det?" },
        { who: "partner", say: "Jeg synes, at mobiltelefoner skal være slukket i undervisningen. Hvad synes du?" },
        { who: "mediator", say: "Hvornår får børn deres første mobiltelefon i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at vi taler mindre sammen, fordi vi kigger på mobilen hele tiden. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt er fordelene og ulemperne ved mobiltelefoner?" }
      ],
      phrases: ["På billedet kan jeg se …", "Kvinden taler i telefon, og de andre …", "Jeg bruger min mobil til …", "Jeg synes, det er uhøfligt at …", "Det er praktisk, fordi …", "Hvad med dig?"]
    }
  );
})();
