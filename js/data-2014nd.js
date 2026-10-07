// Prøve i Dansk 2, november-december 2014 – transcribed from the exam papers.
// Included: læseforståelse opgave 1-5, skriftlig fremstilling and the oral pictures
// for delprøve 2 (illustrations by Niels Roland, cropped from the picture sheets).
// The answer key was not available; answers were worked out from the texts.

(function () {
  const G = "PD2 nov.-dec. 2014";

  const films = {
    "Juli 2013": [
      ["25/7", "Painless – Alex Brendemühl."],
      ["25/7", "The Wolverine – Hugh Jackman. 3D"],
      ["25/7", "3096 Dage – Thure Lindhardt."]
    ],
    "August 2013": [
      ["1/8", "Monsters University – Disney/Pixar Tegnefilm. 3D"],
      ["1/8", "Pacific Rim – Charlie Hunnam. 3D"],
      ["1/8", "What Maisie Knew – Julianne Moore."],
      ["1/8", "Paradis Håb – Melanie Lenz."],
      ["1/8", "Drengerøve 2 – Adam Sandler."],
      ["8/8", "Red 2 – Bruce Willis."],
      ["8/8", "Blue Jasmine – Cate Blanchett."],
      ["15/8", "Percy Jackson og Uhyrernes Hav – Logan Lerman."],
      ["15/8", "Familien Miller … langt over grænsen – Jennifer Aniston."],
      ["15/8", "Elysium – Matt Damon."],
      ["15/8", "Promised Land – Matt Damon."],
      ["15/8", "Sightseers – Alice Lowe."],
      ["22/8", "Before Midnight – Ethan Hawke."],
      ["22/8", "The Mortal Instruments: Dæmonernes By – Lily Collins."],
      ["22/8", "The Heat – Sandra Bullock."],
      ["22/8", "Meteora – Theo Alexander."],
      ["28/8", "Samsara – Dokumentar."],
      ["29/8", "Spies og Glistrup – Pilou Asbæk."],
      ["29/8", "Kick-Ass 2 – Jim Carrey."]
    ],
    "September 2013": [
      ["5/9", "The Butler – Forest Whitaker."],
      ["5/9", "A Late Quartet – Philip Seymour Hoffman."],
      ["5/9", "Pain and Gain – Mark Wahlberg."],
      ["5/9", "Smølferne 2 – Tegnefilm. 3D"],
      ["12/9", "Rush – Chris Hemsworth."],
      ["12/9", "The To Do List – Alia Shawkat."],
      ["12/9", "Grandmaster – Ziyi Zhang."],
      ["12/9", "Håbets Land – Isao Natsuyagi."],
      ["12/9", "This Ain't California – Dokumentar."],
      ["19/9", "Den Store Skønhed – Toni Servillo."],
      ["19/9", "Pietà – Min-soo Jo."],
      ["19/9", "Spise Sove Dø – Nermina Lukac."],
      ["26/9", "Flyvemaskiner – Disney Tegnefilm. 3D"],
      ["26/9", "Runner Runner – Ben Affleck."],
      ["26/9", "Riddick – Vin Diesel."]
    ],
    "Oktober 2013": [
      ["2/10", "Sepideh – Dokumentar."],
      ["3/10", "Kvinden i Buret – Nikolaj Lie Kaas."],
      ["3/10", "Antboy – Nicolas Bro."],
      ["3/10", "Escape Plan – Sylvester Stallone."],
      ["3/10", "R.I.P.D. – Ryan Reynolds. 3D"],
      ["3/10", "Cykeltur med Molière – Fabrice Luchini."],
      ["10/10", "Olsen Banden På Dybt Vand – Tegnefilm. 3D"],
      ["10/10", "Perfect Mothers – Naomi Watts."],
      ["10/10", "About Time – Rachel McAdams."],
      ["10/10", "Jobs – Ashton Kutcher."],
      ["10/10", "Turbo – Tegnefilm. 3D"],
      ["10/10", "Dybet – Ólafur Darri Ólafsson."],
      ["24/10", "Prisoners – Hugh Jackman."],
      ["24/10", "Mit Liv Med Liberace – Michael Douglas."],
      ["24/10", "Paranormal Activity 5 – Katie Featherston."],
      ["31/10", "Tarok – Bjarne Henriksen."],
      ["31/10", "Thor: The Dark World – Chris Hemsworth."],
      ["31/10", "Carrie – Chloë Grace Moretz."],
      ["31/10", "The World's End – Martin Freeman."],
      ["31/10", "Frances Ha – Greta Gerwig."]
    ],
    "November 2013": [
      ["7/11", "Tarzan – Animation. 3D"],
      ["14/11", "Sorg Og Glæde – Jakob Cedergren."],
      ["14/11", "The Counselor – Brad Pitt."],
      ["14/11", "Mor Og Søn – Luminita Gheorghiu."],
      ["14/11", "Hokus Pokus Alfons Åberg – Tegnefilm."],
      ["14/11", "Monica Z – Edda Magnason."],
      ["21/11", "The Hunger Games: Catching Fire – Jennifer Lawrence."],
      ["21/11", "Delivery Man – Vince Vaughn."],
      ["21/11", "The Spirit of 45 – Dokumentar."],
      ["28/11", "Under Regnbuen – Agathe Bonitzer."]
    ],
    "December 2013": [
      ["5/12", "Adèles Liv – Kapitel 1 og 2 – Léa Seydoux."],
      ["11/12", "Hobbitten: Dragen Smaugs Ødemark – Martin Freeman. 3D"],
      ["12/12", "Gloria – Paulina García."],
      ["19/12", "Walking with Dinosaurs – Charlie Rowe. 3D"],
      ["25/12", "Detektiverne – Matilde Wedel."],
      ["25/12", "Diana – Naomi Watts."],
      ["25/12", "Den Hundredårige – Robert Gustafsson."],
      ["25/12", "Nymphomaniac – Charlotte Gainsbourg."],
      ["25/12", "The Secret Life of Walter Mitty – Ben Stiller."]
    ]
  };

  const camping = [
    ["Aarhus Camping", "Med sin beliggenhed er Aarhus Camping både tæt på storbyen og så alligevel midt i naturen. Pladsen er indrettet charmerende og kuperet i Lisbjerg skov i grønne og naturskønne omgivelser."],
    ["Aarø Camping", "Aarø, et rigtigt ø-samfund, hvor fred og ro hersker og hvor der er plads til alle. Du får campingvognen gratis med færgen!"],
    ["Albertinelund Camping", "Pladsen er beliggende på Djurslands nordkyst, lige ned til meget børnevenlig sandstrand, i noget af Danmarks skønneste natur. Kun få kilometer fra Bønnerup Strands fiskeri- og lystbådehavn."],
    ["Asaa Camping & Hytteferie", "En lille oase – en stor familie. Slap af og nyd stilheden i vores lille, naturskønne og idylliske oase."],
    ["Assentorp Camping", "Velkommen til Assentorp Camping. En plads beliggende i unik natur, med masser af aktivitetsmuligheder på pladsen og i nærheden."],
    ["Augustenhof Strand Camping", "Direkte ned til stranden og omgivet af den skønneste natur ligger Augustenhof Strand Camping på nordsiden af Als."],
    ["Auning Camping", "Djurslands hyggeligste familiecamping med nem og billig adgang til indendørs svømmecenter … En pragtfuld oase for ferie med børn … Og så er det camping, der er til at betale."],
    ["Ballum Camping", "Pladsen ligger i det smukke, karakteristiske marskland, direkte ved vadehavet med udsigt over vandet."],
    ["Bamsebo Camping", "Pladsen ligger direkte ned til Gudenåen, størstedelen af pladserne har fin udsigt over Gudenåen. Der tilbydes 305 meter med frit fiskeri samt mulighed for fantastiske kanoture i Gudenåen."],
    ["Billund Camping", "Billund Camping har åbent hele året. Mindre end 500 m fra LEGOLAND® og dør om dør med Lalandia Billund."],
    ["Bjerregaard Camping", "Naturskøn campingplads beliggende syd for Hvide Sande, storslået udsigt over Ringkøbing Fjord, med egen strand. Kun 10 minutters gang til Vesterhavet. 6 forskellige hyttetyper samt luksus mobile homes."],
    ["Blokhus Klit Camping", "Moderne familieplads med plads til det hele – hvad enten det er aktiviteter, poolen eller Vesterhavet og den brede strand, der trækker."],
    ["Bork Havn Camping", "God familieplads ved det lille hyggelige fiskerleje Bork Havn. Stor lystbådehavn, badestrand og surfområde. Tæt på Bork Vikingehavn og Bork Legeland."],
    ["Borrevejle Camping og Hyt'otel", "Borrevejle Hyt'otel og camping ligger i et fredet, naturskønt område ved bunden af Borrevejle Vig. Her har du mulighed for overnatning i hjertet af Sjælland, tæt på både land og by."],
    ["Bryrup Aqua Camping Topcamp", "Moderne og veletableret 4-stjernet familieplads, der sætter store og små vandhunde i centrum. Tæt ved Silkeborg."],
    ["Byaasgaard Camping", "En af Danmarks ældste campingpladser, hvor naturen og camping stadig er det vigtigste."],
    ["Børsmose Strand Campingplads", "Beliggende i unikt naturskønt klitterræn få meter fra Vesterhavet. Campingpladsen ligger isoleret ved Børsmose Strand omgivet af hede, klit og plantage."],
    ["Bøsøre Strand Feriepark", "Eventyrlig ferie på Østfyn. Eget trope-badeland og velspækket aktivitetsprogram."],
    ["Camp Hverringe, Bøgebjerg Strand", "Udsigt og omgivelser, der gør pladsen til en af Europas bedste."],
    ["Camping & Feriecenter Ristinge", "Ristinge sommerCamp ligger i en meget smuk natur 300 m fra den pragtfulde Ristinge Strand. Øhavets bedste strand."],
    ["Camping Mønbroen", "Unik beliggenhed og naturskønne omgivelser er det, der kendetegner Camping Mønbroen."],
    ["Camping Rolighed", "Hop en tur i den opvarmede swimmingpool, tag en rask cykeltur i den smukke natur eller gå en tur ved vores eget søområde, hvor I finder den store krondyrfarm."],
    ["Camping Tornby Strand", "Camping Tornby Strand tilbyder alle muligheder for naturelskere i de rolige og idylliske omgivelser. Fra pladsen er der få minutters gang til Vesterhavet og den dejlige sandstrand."],
    ["Campinggården Boeslunde", "Enestående tilplantet familieplads med perfekt læ og adgang til skov og strand."],
    ["CampWest", "Velkommen til campingpladsen i Eventyrets Land. CampWest – stedet for ferie. CampWest ligger i et utrolig dejligt naturområde. Vi har skov, skovsø, hede og strand inden for kort afstand."],
    ["Carlsberg Camping", "På toppen af Tåsinge, med en fantastisk udsigt over det sydfynske øhav ligger campingpladsen. Indendørs legeland, svømmeland m.m. Luksushytter og campingvogne kan lejes."],
    ["Darum Camping", "Naturskøn plads, der er etableret for over 50 år siden. Der er mange gamle træer, hvilket giver gode læforhold, men også åbne pladser med mulighed for sol."],
    ["Drejby Strandcamping", "Med pladsens ideelle beliggenhed på spidsen af Sydals med Lillebælt og Østersøen på den ene side – og 'Lillehavet' på den anden – har du alle muligheder for en ferie i perfekte rammer."],
    ["Ebeltoft Strand Camping", "Stressfri zone. Toprenoveret campingplads direkte ved børnevenlig strand. Gåafstand til hyggelige Ebeltoft by. Kort afstand til Djurslands seværdigheder."],
    ["Elitecamp Vestbirk", "Her trives børnene! Naturskøn plads med masser af rum til hele familien. Her vil din ferie blive husket længe."],
    ["Enderupskov Camping", "Familiedrevet campingplads til dig, som søger atmosfære, god stemning, en uhøjtidelig omgangstone og sønderjysk lune i skønne omgivelser. Vores plads ligger smukt omkranset af skov."],
    ["Esbjerg Camping", "Esbjerg Camping ligger i et skønt og stille naturområde, med kort gåafstand til stranden og kort afstand til Esbjerg C."],
    ["Falsled Strand Camping", "På Falsled Strand Camping hersker en hyggelig og familiær atmosfære, pladsen ligger i smuk natur direkte ned til det sydfynske øhav. Udsigten er helt fantastisk …"],
    ["Give Camping", "På Give Camping & Friluftsbad er der plads til alle, der har lyst til sjov, leg, afslapning og familiehygge. Fra pladsen er der kun 14 km til Legoland og 7 km til Givskud Zoo."],
    ["Hals Strand Camping", "Direkte ned til børnevenlig badestrand med det fineste hvide strandsand. Legeplads, hoppepuder, geder, minigolf, Put & Take fiskesø. Gratis svømmehal i højsæsonen. Trådløst internet."]
  ];

  const markets = [
    ["Thisted Kræmmermarked", "Thisted", "11.06.2013 - 16.06.2013"],
    ["Vig Tuskemarked", "Odsherred", "12.06.2013 - 12.06.2013"],
    ["Amager Kræmmermarked", "København", "14.06.2013 - 16.06.2013"],
    ["Gylling Byfest og Kræmmermarked", "Odder", "14.06.2013 - 15.06.2013"],
    ["Karup Å Marked", "Viborg", "14.06.2013 - 16.06.2013"],
    ["Nøreng Strand Campings Marked", "Skive", "14.06.2013 - 14.06.2013"],
    ["Brørup Marked", "Vejen", "14.06.2013 - 14.06.2013"],
    ["Kolding Ny Kræmmermarked", "Kolding", "14.06.2013 - 16.06.2013"],
    ["Frederiksberg Loppemarked", "Sorø", "15.06.2013 - 15.06.2013"],
    ["Kræmmermarked i KFUM's Boldklub", "København", "15.06.2013 - 15.06.2013"],
    ["Løgstør Kræmmermarked", "Vesthimmerland", "15.06.2013 - 15.06.2013"],
    ["Nordfyns Kræmmermarked", "Nordfyn", "15.06.2013 - 16.06.2013"],
    ["Øresund Kræmmermarked", "Fredensborg", "15.06.2013 - 16.06.2013"],
    ["Lagunen Kræmmermarked", "Aalborg", "15.06.2013 - 15.06.2013"],
    ["Taastrup Antik- og Kræmmermarked", "Høje-Taastrup", "15.06.2013 - 16.06.2013"],
    ["Gilleleje Torvedage", "Gribskov", "15.06.2013 - 15.06.2013"],
    ["Sdr. Omme Kro Marked", "Billund", "15.06.2013 - 15.06.2013"],
    ["Torvedage i Liseleje", "Halsnæs", "15.06.2013 - 15.06.2013"],
    ["Antikmarked", "Odense", "15.06.2013 - 15.06.2013"],
    ["Hjørring Kræmmermarked", "Hjørring", "15.06.2013 - 16.06.2013"],
    ["Vig Tuskemarked", "Odsherred", "15.06.2013 - 15.06.2013"],
    ["Næstved Kram- og Møbelcenter", "Næstved", "15.06.2013 - 16.06.2013"],
    ["Grænse Marked Kruså", "Aabenraa", "15.06.2013 - 16.06.2013"],
    ["Bramming Kræmmermarked", "Esbjerg", "15.06.2013 - 16.06.2013"],
    ["Halskov Kræmmermarked, Korsør", "Slagelse", "15.06.2013 - 16.06.2013"],
    ["Kræmmerhaller i Lov, Næstved", "Næstved", "15.06.2013 - 16.06.2013"],
    ["Låsby Marked", "Skanderborg", "15.06.2013 - 16.06.2013"],
    ["Nebbe Marked i Børkop", "Vejle", "15.06.2013 - 16.06.2013"],
    ["Nibe Kræmmermarked", "Aalborg", "15.06.2013 - 16.06.2013"],
    ["Sandbjerg Marked", "Hedensted", "15.06.2013 - 16.06.2013"],
    ["Holsted Antik- og Kræmmermarked", "Vejen", "15.06.2013 - 16.06.2013"],
    ["Tørring Antik- og Kræmmermarked", "Hedensted", "15.06.2013 - 16.06.2013"],
    ["Det lille loppemarked", "Kalundborg", "15.06.2013 - 16.06.2013"],
    ["Vanløse Kræmmerhal", "København", "15.06.2013 - 16.06.2013"],
    ["Gilleleje Kræmmermarked", "Gribskov", "16.06.2013 - 16.06.2013"],
    ["Lynge Marked", "Sorø", "16.06.2013 - 16.06.2013"],
    ["Melby Møllefest", "Halsnæs", "16.06.2013 - 16.06.2013"],
    ["Sydhavslopperne, Marielyst Falster", "Guldborgsund", "16.06.2013 - 16.06.2013"],
    ["Marked i Herlev", "Herlev", "16.06.2013 - 16.06.2013"],
    ["Søndagsmarked i Greve", "Greve", "16.06.2013 - 16.06.2013"],
    ["Tissø Kræmmerhal", "Kalundborg", "16.06.2013 - 16.06.2013"],
    ["Øster Hurup Tirsdagsmarked", "Mariagerfjord", "18.06.2013 - 18.06.2013"],
    ["Thisted Kræmmermarked", "Thisted", "18.06.2013 - 23.06.2013"],
    ["Vig Tuskemarked", "Odsherred", "19.06.2013 - 19.06.2013"],
    ["Greve Marked i Karlslunde", "Greve", "21.06.2013 - 23.06.2013"],
    ["Haunstrup Kræmmermarked", "Herning", "21.06.2013 - 23.06.2013"],
    ["Salten Heste- og Kræmmermarked i Them", "Silkeborg", "21.06.2013 - 23.06.2013"],
    ["Johannes antik salg", "Holbæk", "21.06.2013 - 23.06.2013"],
    ["Osted Sankt Hans Marked", "Lejre", "22.06.2013 - 23.06.2013"],
    ["Vrensted Trailersalg", "Hjørring", "22.06.2013 - 22.06.2013"],
    ["Taastrup Antik- og Kræmmermarked", "Høje-Taastrup", "22.06.2013 - 23.06.2013"],
    ["Gilleleje Torvedage", "Gribskov", "22.06.2013 - 22.06.2013"]
  ];

  const opg1 = {
    id: "p14n-1", group: G, real: true,
    title: "Opgave 1 – Find informationen",
    kind: "Delprøve 1 · kort svar",
    level: 2, minutes: 15,
    instruction: "Svar på spørgsmålene (1-6). Find oplysningerne i teksterne. Svar kort og præcist. Se eksemplet: \"Fra hvilken dato kunne man se 'Detektiverne' i biografen?\" – 25/12.",
    sections: [
      {
        heading: "Biograffilm – premierer",
        cards: Object.entries(films).map(([month, rows]) => ({ title: month, body: rows.map(([d, f]) => `${d}: ${f}`).join("\n") })),
        source: "Kilde: www.popcorn.dk 25/7 2013"
      },
      {
        heading: "Campingpladser",
        cards: [{ title: "Campingpladser med internet hotspot", body: "Ønsker du adgang til internettet på din campingferie, kan du nedenfor se en oversigt over campingpladser med internet hotspot: Med hotspot menes trådløst netværk, som du kan logge på med din bærbare computer. Prisen kan variere fra campingplads til campingplads." }].concat(camping.map(([title, body]) => ({ title, body }))),
        source: "Kilde: www.campingland.dk"
      },
      {
        heading: "Kræmmermarkeder",
        cards: [
          { title: "11.-16. juni 2013", body: markets.slice(0, 34).map(([n, k, d]) => `${n} · ${k} · ${d}`).join("\n") },
          { title: "16.-23. juni 2013", body: markets.slice(34).map(([n, k, d]) => `${n} · ${k} · ${d}`).join("\n") }
        ],
        source: "Kilde: www.markedskalenderen.dk/marked/kraemmermarked.asp"
      }
    ],
    questions: [
      { type: "short", n: 1, q: "Fra hvilken dato kunne man se 'Håbets land' i biografen?", accept: ["12/9", "12/9 2013", "12.9", "12. september", "den 12. september", "12 september", "den 12/9", "12-9", "12.09", "12/09", "fra 12/9", "fra den 12. september", "12. september 2013"] },
      { type: "short", n: 2, q: "Hvilken campingplads har indendørs legeland?", accept: ["carlsberg camping", "carlsberg", "carlsberg campingplads", "på carlsberg camping", "carlsberg camping på tåsinge"] },
      { type: "short", n: 3, q: "Hvilken campingplads har en opvarmet swimmingpool?", accept: ["camping rolighed", "rolighed", "rolighed camping", "på camping rolighed"] },
      { type: "short", n: 4, q: "På hvilken campingplads er der mange gamle træer?", accept: ["darum camping", "darum", "på darum camping", "darum campingplads"] },
      { type: "short", n: 5, q: "På hvilken campingplads er der en fiskesø?", accept: ["hals strand camping", "hals strand", "hals", "på hals strand camping", "hals camping", "hals strandcamping"] },
      { type: "short", n: 6, q: "Hvad dato er der kræmmermarked i Mariagerfjord?", accept: ["18.06.2013", "18/6", "18/6 2013", "18.6", "18.6.2013", "18. juni", "den 18. juni", "18 juni", "18-6", "18.06", "18/06", "den 18/6", "18. juni 2013", "tirsdag den 18. juni", "18.06.2013 - 18.06.2013", "18.06.2013-18.06.2013"] }
    ]
  };

  const opg2 = {
    id: "p14n-2", group: G, real: true,
    title: "Opgave 2 – Annoncer",
    kind: "Delprøve 1 · find annoncen",
    level: 2, minutes: 15,
    instruction: "Læs annoncerne (A-I). Der mangler nogle ord i hver annonce. Find den annonce, der passer til ordene på listen (7-12). Der er to annoncer, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Annoncer",
        cards: [
          { title: "A – Genbrugsland", body: "■■■■■■\nVi henter og bringer efter aftale.\nTlf.: 86 25 99 99 · Edwin Rahrs Vej 72 · 8220 Brabrand" },
          { title: "B", body: "■■■■■■\nHar du et par timer tilovers?\nSå har vi nogle opgaver, du kan hjælpe os med:\n• at give lektiehjælp til voksne over 18 år\n• at strikke sokker, huer, halstørklæder o.l. til hjemløse\n• at holde juleaften for hjemløse\n• at hjælpe til i fitnesslokalet\nSkriv også til os, hvis du har andre ideer.\nKontakt Malene Skov på: ms@fk.dk" },
          { title: "C", body: "■■■■■■\n• 2 mand og bil fra 600 kr. i timen.\n• Lån kasser gratis.\n• Vi pakker og kører på lager m.m.\n• Skriftlig aftale.\nNU-transport\nTlf.: 41 87 53 99\nwww.nu-transport.dk" },
          { title: "D", body: "■■■■■■\nHar du travlt, eller er du pensionist?\nTrænger du til noget godt at spise?\nVi leverer et enkelt, veltillavet aftensmåltid.\nDu henter, eller vi bringer.\nTilberedes alle hverdage kl. 17-20. Kr. 75,00 pr. person.\nRing og bestil på tlf.: 22 43 56 77\nLysholm Kro" },
          { title: "E", body: "■■■■■■\nEr I et band, som mangler et øvelokale?\nMåske et gymnastikhold eller nogle mødre, som gerne vil samles?\nVi kan tilbyde jer det helt rigtige lokale for næsten ingen penge.\nFå mere at vide på\nwww.ufa.dk/studiecirkler-for-alle" },
          { title: "F", body: "■■■■■■\nDer er masser af forskellige kurser og foredrag at vælge imellem hver sæson …\nNOGET FOR ENHVER SMAG!\nKig ind på vores hjemmeside: www.ufa.dk" },
          { title: "G – Ugens tilbud!", body: "■■■■■■\nEr du senior og glad for naturen?\nVi tilbyder til sankthans, d. 21.-24. juni, et ophold ved Vesterhavet!\nNøgleordene er:\nSocialt samvær, gåture, afslapning, bål, solnedgang og bølgeskvulp.\nLæs om priser m.m. på: www.poptimist.dk" },
          { title: "H", body: "■■■■■■\nHar du ikke plads til alle dine ting?\nSkal du flytte og har brug for at få dine møbler opbevaret i en periode?\nKontakt Ekstraplads.dk og få et godt tilbud!\nwww.ekstraplads.dk\nTlf.: 41 63 36 41" },
          { title: "I – Arbejdsløs? Nej, vel!", body: "■■■■■■\nStor kiosk midt på hovedgaden til salg\nHvorfor jeg vil sælge?\nGår på pension nu.\nKig ind og lad os få en snak.\nKontakt: Ib Petersen, Ringkøbing\nMobil: 43 22 97 21" }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilken annonce mangler ordene?",
        options: ["B", "C", "D", "E", "F", "G", "H", "I"],
        items: [
          { n: 0, text: "Gamle møbler, ting og tøj", answer: "A", example: true },
          { n: 7, text: "Har du en gruppe, så har vi plads!", answer: "E" },
          { n: 8, text: "Flyt billigt!", answer: "C" },
          { n: 9, text: "Sommer og udeliv", answer: "G" },
          { n: 10, text: "Vil du være frivillig?", answer: "B" },
          { n: 11, text: "Har du lyst til at være selvstændig?", answer: "I" },
          { n: 12, text: "Mad på hjul", answer: "D" }
        ]
      }
    ]
  };

  const opg3 = {
    id: "p14n-3", group: G, real: true,
    title: "Opgave 3 – Tyv ringede til politiet",
    kind: "Delprøve 2 · udfyld hullerne",
    level: 2, minutes: 20,
    instruction: "Læs teksten. Der mangler otte ord i teksten (13-20). Vælg de ord, der mangler. Der er fem ord, du ikke skal bruge. Se eksemplet (0).",
    text: `Vi kender det vist alle sammen: Når vi ikke kan finde vores mobil, ringer vi til den fra en anden [[0]], så vi kan høre, hvor den er. Det samme gjorde en tyv fra Sæby i sidste uge. Men det var ikke nogen god ide.

Ida Olsen fra Åvej i Sæby er onsdag aften på besøg hos nogle venner. Da hun kommer hjem sent om aftenen, kan hun straks se, at hun har haft besøg af en tyv. Døren til hendes hus er [[13]] åben, og flere af hendes møbler, hendes tv og mange andre ting er væk.

Hun bliver [[14]] chokeret, og hun ringer til politiet med det samme.

Da politiet kommer, undersøger de først Idas hus og bagefter indkørslen foran huset. Her finder de spor efter den bil, som tyven har brugt til at køre Idas ting væk i. Men de finder også en mobiltelefon, der [[15]] er Idas. Tyven har åbenbart [[16]] den, så politiet tager den med for at se nærmere på den.

Men før politiet når at undersøge telefonen, ringer den, og en betjent tager den. Det er tyven, der ringer fra sin vens mobil. Han bliver meget glad, da han hører, at nogen har [[17]] hans telefon. Betjenten aftaler med ham, at de skal mødes på en café et par timer senere. Han tager en [[18]] med hen på caféen, og da tyven kommer for at hente sin telefon, anholder de ham og kører ham på politistationen. Senere undersøger politiet tyvens [[19]]. Der finder de alle Idas ting i tyvens stue. De finder [[20]] en masse andre ting, som tyven har stjålet fra folk i Sæby. Så hos politiet er de meget glade for, at tyven ringede til dem.`,
    questions: [
      {
        type: "gaps",
        bank: ["aldrig", "meget", "stjålet", "ikke", "hund", "tabt", "telefon", "kollega", "fundet", "bil", "også", "lejlighed", "altid", "nemlig"].map(w => ({ key: w, text: w })),
        example: { 0: "telefon" },
        answers: { 13: "nemlig", 14: "meget", 15: "ikke", 16: "tabt", 17: "fundet", 18: "kollega", 19: "lejlighed", 20: "også" }
      }
    ]
  };

  const opg4 = {
    id: "p14n-4", group: G, real: true,
    title: "Opgave 4 – Et nyt land",
    kind: "Delprøve 2 · find sætningen",
    level: 3, minutes: 20,
    instruction: "Læs teksten. I hvert afsnit mangler der en sætning. Find den sætning (A-H), der passer i hvert afsnit (21-25). Der er to sætninger, du ikke skal bruge. Se eksemplet (0).",
    text: `Erik er 27 år og har længe villet rejse ud og arbejde uden for Danmark. Han er lige blevet færdig med sin uddannelse til elektriker, og nu gør han det: flytter til et nyt land.

**0.** Der er mange, der drømmer om at flytte til udlandet, men der er ikke så mange, der faktisk gør det. Men Erik er en af dem, der har besluttet at tage springet. Han flytter til Sydney i Australien. Han ved ikke, hvor længe han vil bo i Australien, men planen er lige nu, at han vil være væk i mindst to år. [[0]]. Han vil opleve, hvordan det er at bo og arbejde i et fremmed land i en længere periode.

**21.** Erik har forberedt sig i lang tid på at flytte til Australien. For der er mange ting, der skal klares, før man kan bo og arbejde i et andet land. Man skal finde et sted at bo, og man skal have arbejdstilladelse, så man kan arbejde og tjene penge. [[21]]. Han har også taget et kursus i engelsk, for sprog var ikke hans bedste fag i skolen. Så nu er han parat til at tage af sted.

**22.** Erik har aldrig været i Australien, men han har fået kontakt med en dansker, der bor i Sydney. Han hedder Lars, og han arbejder som murer. Lars har boet og arbejdet i Sydney i ti år og har også fået en australsk kæreste. Så han har mange kontakter. [[22]]. Det er Erik meget glad for. For det er dejligt, at han ikke skal bo på hotel, når han ankommer, men straks kan flytte ind i sit nye hjem.

**23.** Erik elsker sol og varme, så han glæder sig til at komme væk fra den lange, grå danske vinter. Han glæder sig til at kunne bade året rundt, og han glæder sig til at gå i sommertøj og sandaler. Han har hørt, at solen skinner fra morgen til aften, og at det er meget almindeligt med dagtemperaturer på omkring 20-25 grader hele året. [[23]]. Men fra januar til marts regner det meget, så lidt skifter vejret nu alligevel.

**24.** Der er selvfølgelig en masse, Erik vil savne ved Danmark. Mest af alt vil han selvfølgelig savne sin familie og sine venner. Og så måske rugbrød og lakrids. Men Erik har drømt om at opleve, hvordan det er at bo i udlandet, siden han var en stor dreng. Og nu har han en uddannelse, han kan bruge i Australien, og han synes også, han er blevet ret god til engelsk. [[24]]. Og heldigvis kan han jo bare tage hjem igen, hvis han ikke er glad for at være der.

**25.** Eriks forældre er kede af, at han har besluttet sig for at rejse så langt væk. For det er jo ikke sådan at rejse frem og tilbage mellem Danmark og Australien flere gange om året. Men da Erik allerede har fået en lejlighed, har de besluttet, at de vil besøge ham i juleferien. [[25]]. For så kan de se, hvordan han har det, og hvordan han bor. Og så kan de sikkert bedre leve med, at han er taget over på den anden side af jorden.`,
    questions: [
      {
        type: "gaps",
        bank: [
          { key: "A", text: "For det skal ikke bare være en slags ferie." },
          { key: "B", text: "Så han tror, alt kommer til at gå godt." },
          { key: "C", text: "En af dem har fundet en lejlighed til Erik." },
          { key: "D", text: "Så det kan han nok hurtigt ordne." },
          { key: "E", text: "Det synes han er en god ide." },
          { key: "F", text: "Men alt det har han ordnet." },
          { key: "G", text: "Det synes han er en dårlig ide." },
          { key: "H", text: "Det kan man måske også blive træt af." }
        ],
        example: { 0: "A" },
        answers: { 21: "F", 22: "C", 23: "H", 24: "B", 25: "E" }
      }
    ]
  };

  const opg5 = {
    id: "p14n-5", group: G, real: true,
    title: "Opgave 5 – Interview med Mette",
    kind: "Delprøve 2 · match spørgsmål og svar",
    level: 3, minutes: 20,
    instruction: "Læs interviewet. Find det afsnit (A-H), der passer til hvert af de fem spørgsmål (26-30). Der er to afsnit, du ikke skal bruge. Se eksemplet (0).",
    sections: [
      {
        heading: "Interview med Mette – bibliotekar",
        cards: [
          { title: "A", body: "Ja, lad mig se. Lige da jeg var færdig med min uddannelse, blev jeg ansat på et lille bibliotek i en mindre by. Der lærte jeg alt om, hvordan hverdagen på et bibliotek er. Og jeg blev sikker på, at det var den helt rigtige uddannelse, jeg havde taget! Da var jeg cirka 24 år, så det er en del år siden efterhånden. Til næste år er det 20 år siden. Hold da op, hvor tiden går!" },
          { title: "B", body: "Nej, men det er der faktisk mange, der tror, at det er. Men når jeg kigger på min dag, synes jeg, den er meget spændende. Jeg sidder selvfølgelig en del ved computeren, men er også i kontakt med lånerne. Jeg arrangerer forskellige aktiviteter, og jeg underviser lånerne. Så jeg laver mange forskellige ting, og det meste er noget, jeg synes er sjovt." },
          { title: "C", body: "Jo, det er det. Det gør mig i godt humør at snakke med en masse mennesker, både lånere og kolleger. Det er blandt andet det, der gør det sjovt at være bibliotekar. Jeg er f.eks. aldrig ked af, at jeg tit skal arbejde om lørdagen. Faktisk har jeg næsten aldrig en dårlig dag på arbejde, for det er altså overhovedet ikke kedeligt at være bibliotekar!" },
          { title: "D", body: "For mig er det helt klart at have kontakt med mange forskellige mennesker. Når der f.eks. kommer nogen, der gerne vil have en god idé til, hvad for en bog de skal læse. Så skal jeg finde ud af, hvem de er som personer, og hvad for en slags bøger de normalt godt kan lide. Når de så har læst bogen, kommer de næsten altid tilbage og fortæller mig, om de har været glade for den. Det er enormt hyggeligt." },
          { title: "E", body: "Ja, rigtig mange. Vi viser f.eks. film for børn næsten hver uge. Men der sker også meget andet. I morgen får vi besøg af en forfatter, der skal fortælle om sin sidste nye bog. Og i weekenden åbner vi en udstilling med gamle juleting. Vi har også en strikkeklub for pensionister hver onsdag formiddag. Så biblioteket er meget andet end bøger." },
          { title: "F", body: "Nej, det kommer meget an på ugedage og tidspunkter. Til hverdag er der for eksempel normalt meget stille om formiddagen, for så er de fleste mennesker jo på arbejde eller i skole. Men mellem kl. 16 og 18 er der en del, der skal nå på biblioteket inden lukketid. Og lørdag er her tit helt fyldt, for der kommer børnefamilierne. Så summer biblioteket af liv." },
          { title: "G", body: "Det er nok det værste, man kan spørge en bibliotekar om! For sådan en som mig læser alt mellem himmel og jord. At læse er jo både mit arbejde og min fritidsinteresse. Men hvis jeg skal komme med et svar, må det være: krimier. Der ligger næsten altid en spændende krimi på mit natbord. Og når jeg har ferie, læser jeg mindst en om ugen." },
          { title: "H", body: "Mange forskellige ting. Jeg underviser f.eks. ældre mennesker i at bruge internettet. Både så de kan blive bedre til at bruge internettet hjemme, men også her på stedet. På den måde bliver de også bedre til at bruge biblioteket. Og hvis folk ikke kan finde en bestemt bog, så finder jeg den til dem." }
        ]
      }
    ],
    questions: [
      {
        type: "match",
        q: "Hvilket afsnit svarer på spørgsmålet?",
        options: ["B", "C", "D", "E", "F", "G", "H"],
        items: [
          { n: 0, text: "Hvor længe har du været bibliotekar?", answer: "A", example: true },
          { n: 26, text: "Er der altid mange lånere på biblioteket?", answer: "F" },
          { n: 27, text: "Hvad slags bøger kan du selv bedst lide?", answer: "G" },
          { n: 28, text: "Er det ikke lidt kedeligt at arbejde på et bibliotek?", answer: "B" },
          { n: 29, text: "Hvad er det bedste ved dit arbejde?", answer: "D" },
          { n: 30, text: "Hvad hjælper du lånerne med?", answer: "H" }
        ]
      }
    ]
  };

  // Real sets newest first: 2020, 2019, 2018, 2016, 2014 nov.-dec., 2014 maj-juni, 2013 …
  const at = PD2.READING.findIndex(r => r.real && r.group === "PD2 maj-juni 2014");
  PD2.READING.splice(at < 0 ? PD2.READING.findIndex(r => !r.real) : at, 0, opg1, opg2, opg3, opg4, opg5);

  // ---------- Skriftlig fremstilling nov.-dec. 2014 ----------
  const before = PD2.WRITING.findIndex(w => w.year === 2014);
  PD2.WRITING.splice(before < 0 ? 0 : before, 0,
    {
      id: "w14na", delprove: 1, real: true, year: 2014,
      title: "A: En anbefaling af en film (nov.-dec. 2014)",
      kind: "Prøveopgave · anbefaling",
      minWords: 80, maxWords: 150,
      situation: "Du har set en film på DVD. Du vil skrive en anbefaling af filmen til sprogskolens kursistblad. Skriv anbefalingen. Du skal begynde og afslutte anbefalingen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvad filmen hedder, og hvad slags film det er", "Hvad filmen handler om", "Hvorfor du vil anbefale andre at se filmen", "Hvor og hvornår man kan se filmen"],
      phrases: ["Se denne film!", "Jeg har lige set filmen …", "Det er en dansk komedie/et drama om …", "Filmen handler om …", "Jeg vil anbefale filmen, fordi …", "Man kan låne den på biblioteket / se den på …"],
      model: `Se "Den Hundredårige"!

Kære medkursister

I weekenden så jeg en film på DVD, som jeg gerne vil anbefale til jer alle sammen. Den hedder "Manden der kravlede ud af vinduet og forsvandt", og det er en svensk komedie. I Danmark hedder den bare "Den Hundredårige".

Filmen handler om Allan, som bor på et plejehjem. På sin 100-års fødselsdag kravler han ud af vinduet og stikker af. På en busstation tager han en kuffert, som er fuld af penge, og så begynder en lang og meget sjov rejse.

Jeg vil anbefale filmen, fordi den er morsom og hyggelig, og fordi den viser, at man aldrig er for gammel til at opleve noget nyt. Den har danske undertekster, så den er god at lære dansk med.

Man kan låne filmen gratis på biblioteket, og den kører også på DR1 lørdag den 13. december kl. 21.

God fornøjelse!

Venlig hilsen
Maria fra hold 3`
    },
    {
      id: "w14nb", delprove: 1, real: true, year: 2014,
      title: "B: En efterlysning efter et uheld (nov.-dec. 2014)",
      kind: "Prøveopgave · efterlysning",
      minWords: 80, maxWords: 150,
      situation: "Du har været i byen for at købe ind. Da du var færdig med at købe ind og kom ud på parkeringspladsen, så du, at en bil kørte ind i din bil. Derefter kørte den væk. Du vil efterlyse bilens ejer i den lokale avis. Skriv efterlysningen. Du skal begynde og afslutte efterlysningen på en passende måde. (Til prøven vælger du opgave A eller B.)",
      points: ["Hvor og hvornår bilen kørte ind i din bil", "Hvad slags bil det var, og hvordan den så ud", "Hvad der skete med din bil, og hvorfor du gerne vil i kontakt med bilens ejer", "Hvordan du kan kontaktes"],
      phrases: ["Efterlysning!", "Lørdag den … ved kl. … holdt min bil på parkeringspladsen ved …", "En rød/sort … kørte ind i min bil", "Bagefter kørte bilen bare væk", "Min bil fik en stor bule i …", "Ring venligst til mig på …"],
      model: `Efterlysning!

Lørdag den 15. november ca. kl. 14.30 holdt min bil på parkeringspladsen foran Bilka i Vejle. Da jeg kom ud fra butikken med mine varer, så jeg, at en anden bil bakkede ind i min bil. Bagefter kørte den bare væk.

Det var en mørkeblå stationcar, jeg tror, det var en Ford. Den var ret gammel og havde en stor ridse på venstre side. Der sad en mand på ca. 50 år med briller og grå hår bag rattet.

Min bil, en hvid Toyota Yaris, fik en stor bule i døren i højre side, og den ene baglygte gik i stykker. Det koster mange penge at reparere, og jeg har brug for bilen for at komme på arbejde. Derfor vil jeg gerne i kontakt med ejeren, så hans forsikring kan betale.

Har du set uheldet, eller er det din bil? Så ring venligst til mig på 28 64 19 52 eller skriv til ahmed.k@mail.dk.

På forhånd tak!
Ahmed Karimi`
    },
    {
      id: "w14nc", delprove: 2, real: true, year: 2014,
      title: "En e-mail om din nye fritidsinteresse (nov.-dec. 2014)",
      kind: "Prøveopgave · e-mail til en ven · mindst 100 ord",
      minWords: 100, maxWords: 180,
      situation: "Du har fået en e-mail fra din veninde Marie. I e-mailen skriver hun bl.a.: \"… Jeg har hørt, at du har fået en ny fritidsinteresse, som du er meget glad for. Det lyder spændende. Skriv og fortæl mig om den, og hvorfor du er så glad for den …\" Skriv et svar til Marie. Du skal skrive minimum 100 ord.",
      points: ["Fortæl, hvad din nye fritidsinteresse er", "Fortæl, hvor, hvornår og med hvem du dyrker den", "Fortæl, hvorfor du er så glad for den", "Spørg Marie om hendes fritid, eller inviter hende med"],
      phrases: ["Kære Marie", "Tak for din mail.", "Ja, det er rigtigt. Jeg er begyndt at …", "Vi mødes hver … i …", "Jeg er så glad for det, fordi …", "Har du lyst til at prøve en dag?"],
      model: `Kære Marie

Tak for din mail. Det var dejligt at høre fra dig!

Ja, det er rigtigt. I september begyndte jeg at gå til syning i aftenskolen. Vi er ti kvinder på holdet, og vi mødes hver tirsdag aften fra kl. 19 til 21.30 i et stort lokale på den gamle skole. Vores lærer hedder Birthe, og hun er meget sød og tålmodig.

Jeg er så glad for det, fordi jeg kan lave mit eget tøj. Jeg har allerede syet en nederdel og en kjole til min datter. Det er meget billigere end at købe nyt tøj i butikkerne. Desuden har jeg fået nye venner på holdet, og vi snakker dansk hele aftenen, så mit dansk er også blevet bedre.

Har du lyst til at komme med en tirsdag og prøve? Jeg tror helt sikkert, du ville kunne lide det.

Mange hilsner
Leila`
    }
  );

  // ---------- Mundtlig delprøve 2: emner og billeder fra prøven nov.-dec. 2014 ----------
  const credit = "Illustration: Niels Roland (fra Prøve i Dansk 2, november-december 2014)";
  PD2.SPEAKING_PICTURE = PD2.SPEAKING_PICTURE || [];
  PD2.SPEAKING_PICTURE.push(
    {
      id: "p14n-a", title: "At være sammen med andre", real: true, year: 2014,
      pictures: [
        { img: "images/pd2-2014-nd/at-vaere-sammen-med-andre-1.jpg", credit, alt: "Naboer arbejder sammen på en fælles legeplads: en mand maler en sandkasse, en anden bygger et legehus, voksne drikker kaffe, og børn leger", words: ["naboer", "legeplads", "male", "bygge et legehus", "hjælpe hinanden"] },
        { img: "images/pd2-2014-nd/at-vaere-sammen-med-andre-2.jpg", credit, alt: "Unge i en ungdomsklub spiller bordtennis, bordfodbold og backgammon, og en pige står i en kiosk", words: ["ungdomsklub", "bordtennis", "spille spil", "venner", "hygge sig"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Hvad laver du sammen med andre mennesker i din fritid?",
        "Kender du dine naboer? Hvad laver I sammen?",
        "Hvordan er man sammen med familie og venner i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg synes, det er hyggeligt at lave noget sammen med naboerne. Gør du også det?" },
        { who: "partner", say: "Jeg tror, at unge bruger for meget tid alene med deres mobil. Hvad synes du?" },
        { who: "mediator", say: "Hvor mødes unge mennesker typisk i jeres hjemlande?" },
        { who: "partner", say: "Jeg kan bedst lide at være sammen med få gode venner. Hvad med dig?" },
        { who: "mediator", say: "Hvad synes I generelt, man kan gøre for at lære nye mennesker at kende i Danmark?" }
      ],
      phrases: ["På billedet kan jeg se …", "Det ligner en arbejdsdag i …", "Jeg er tit sammen med …", "Mine naboer og jeg …", "I mit hjemland mødes man tit …", "Hvad med dig?"]
    },
    {
      id: "p14n-b", title: "Fritidsinteresser", real: true, year: 2014,
      pictures: [
        { img: "images/pd2-2014-nd/fritidsinteresser-1.jpg", credit, alt: "Mænd og et barn står på en bådebro i en havn og fisker, og en af dem har fanget en fisk", words: ["fiske", "fiskestang", "havn", "fange en fisk", "bådebro"] },
        { img: "images/pd2-2014-nd/fritidsinteresser-2.jpg", credit, alt: "Kvinder syr tøj sammen på et sykursus med symaskiner, stof, sakse og en kjole, der bliver prøvet", words: ["sykursus", "symaskine", "sy tøj", "kjole", "stof"] }
      ],
      interview: [
        "Hvad laver personerne på billedet?",
        "Hvad laver du i din fritid?",
        "Hvilken fritidsinteresse kunne du godt tænke dig at prøve?",
        "Hvad laver man i sin fritid i dit hjemland?"
      ],
      talk: [
        { who: "partner", say: "Jeg synes, det er kedeligt at fiske. Hvad synes du?" },
        { who: "partner", say: "Jeg vil gerne lære at sy mit eget tøj. Kunne du også tænke dig det?" },
        { who: "mediator", say: "Hvilke fritidsinteresser er populære i jeres hjemlande?" },
        { who: "partner", say: "Jeg tror, at en fritidsinteresse er en god måde at lære dansk på. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt er vigtigt ved en god fritidsinteresse?" }
      ],
      phrases: ["På billedet kan jeg se …", "De er ved at …", "I min fritid kan jeg godt lide at …", "Jeg går til … hver …", "Jeg kunne godt tænke mig at prøve …", "Er du enig?"]
    },
    {
      id: "p14n-c", title: "Dyr", real: true, year: 2014,
      pictures: [
        { img: "images/pd2-2014-nd/dyr-1.jpg", credit, alt: "En mand med en økse holder en høne ved en huggeblok, mens en mor og en dreng ser på, og en pige kommer ud af hønsehuset med en kurv æg", words: ["høne", "hønsehus", "økse", "slagte", "æg"] },
        { img: "images/pd2-2014-nd/dyr-2.jpg", credit, alt: "En familie i haven holder kaniner, og en far gør kaninburet rent", words: ["kanin", "kaninbur", "kæledyr", "gøre rent", "gulerødder"] }
      ],
      interview: [
        "Hvad sker der på billedet?",
        "Har du et kæledyr, eller har du haft et? Fortæl om det.",
        "Hvilke dyr kan du godt lide, og hvilke kan du ikke lide?",
        "Hvilke dyr har man i dit hjemland, og hvad bruger man dem til?"
      ],
      talk: [
        { who: "partner", say: "Jeg synes, alle børn skal have et kæledyr. Hvad synes du?" },
        { who: "partner", say: "Jeg kunne aldrig selv slagte en høne. Kunne du?" },
        { who: "mediator", say: "Hvilke dyr har familier typisk i jeres hjemlande?" },
        { who: "partner", say: "Jeg synes, det er synd at holde dyr i bur. Er du enig?" },
        { who: "mediator", say: "Hvad synes I generelt om, at man holder dyr i byen?" }
      ],
      phrases: ["På billedet kan jeg se …", "Manden holder en …", "Jeg har (ikke) et kæledyr, fordi …", "Da jeg var barn, havde vi …", "I mit hjemland har mange …", "Hvad med dig?"]
    }
  );
})();
