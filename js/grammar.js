// Grammatik for begyndere: short lessons with colour-coded examples and exercises.
// Example sentences mark sentence parts as [X|words]:
//   S = subjekt, V = verbum, O = objekt, A = tid/sted/andet (adverbial),
//   N = ikke / altid / aldrig …, C = bindeord eller spørgeord.
// Exercises: mc (choose; `a` is the index of the right option in `o`),
// type (write the answer; any item in `a` is accepted),
// order (put the words of `da` in order; `alt` lists other accepted orders).
// `why` explains the answer in English for beginners.

PD2.GRAMMAR = [
  {
    id: "dele", ico: "🧱", title: "Sætningens dele", en: "The parts of a sentence",
    intro: "En dansk sætning skal have et subjekt (hvem gør noget?) og et verbum (hvad gør de?). Den normale rækkefølge er subjekt – verbum – resten.",
    introEn: "A Danish sentence needs a subject (who does something?) and a verb (what do they do?). The normal order is subject – verb – the rest, just like in English.",
    rules: [
      {
        h: "Subjekt – verbum – objekt",
        da: "Subjektet er den, der gør noget. Verbet er det, man gør. Objektet er det, handlingen går ud over.",
        en: "The subject does the action, the verb is the action, and the object is what the action is done to.",
        ex: [["[S|Jeg] [V|spiser] [O|et æble].", "I eat an apple."], ["[S|Min bror] [V|bor] [A|i Aarhus].", "My brother lives in Aarhus."], ["[S|Vi] [V|lærer] [O|dansk] [A|på sprogskolen].", "We learn Danish at the language school."]]
      },
      {
        h: "Personlige stedord som subjekt",
        da: "Disse ord kan være subjekt:",
        en: "These pronouns can be the subject:",
        table: { head: ["Dansk", "English"], rows: [["jeg", "I"], ["du", "you (one person)"], ["han / hun", "he / she"], ["den / det", "it"], ["vi", "we"], ["I", "you (more people)"], ["de", "they"]] }
      },
      {
        h: "Verbet ændrer sig ikke efter personen",
        da: "I nutid ender verbet næsten altid på -r. Det er det samme for alle personer.",
        en: "In the present tense the verb almost always ends in -r, and it is the same for every person. No \"he eats\" vs \"I eat\" problem!",
        ex: [["[S|Jeg] [V|taler] [O|dansk].", "I speak Danish."], ["[S|Hun] [V|taler] [O|dansk].", "She speaks Danish."], ["[S|De] [V|taler] [O|dansk].", "They speak Danish."]]
      }
    ],
    ex: [
      { t: "mc", q: "Hvad er subjektet i sætningen: \"Min søster arbejder på et hospital.\"?", o: ["Min søster", "arbejder", "et hospital"], a: 0, why: "\"Min søster\" is the one who does the action (works)." },
      { t: "mc", q: "Hvad er verbet i sætningen: \"Vi spiser aftensmad kl. 18.\"?", o: ["Vi", "spiser", "aftensmad"], a: 1, why: "\"spiser\" (eat) is the action." },
      { t: "mc", q: "Han ___ dansk.", o: ["tale", "taler", "talet"], a: 1, why: "Present tense: infinitive + r → taler." },
      { t: "mc", q: "Hun ___ i Odense.", o: ["bo", "bor", "boer"], a: 1, why: "bo + r → bor." },
      { t: "type", q: "De ___ fodbold. (at spille)", a: ["spiller"], why: "spille + r → spiller." },
      { t: "type", q: "Du ___ en bog. (at læse)", a: ["læser"], why: "læse + r → læser." },
      { t: "order", da: "Jeg drikker kaffe.", en: "I drink coffee." },
      { t: "order", da: "Min bror bor i Aarhus.", en: "My brother lives in Aarhus." }
    ]
  },
  {
    id: "inversion", ico: "🔄", title: "Verbet på plads 2 (inversion)", en: "The verb in second place (inversion)",
    intro: "Den vigtigste regel i dansk: I en hovedsætning står verbet altid på plads 2. Hvis sætningen begynder med noget andet end subjektet, skal subjektet stå efter verbet. Det hedder inversion.",
    introEn: "The most important rule in Danish: in a main clause the verb is ALWAYS in second place. If the sentence starts with something other than the subject (a time, a place, \"derfor\" …), the subject moves after the verb. This is called inversion.",
    rules: [
      {
        h: "Samme sætning – to rækkefølger",
        da: "Se, hvordan verbet bliver på plads 2:",
        en: "See how the verb stays in second place:",
        ex: [["[S|Jeg] [V|spiser] [O|fisk] [A|i dag].", "I eat fish today."], ["[A|I dag] [V|spiser] [S|jeg] [O|fisk].", "Today I eat fish. (word for word: Today eat I fish.)"], ["[A|Om morgenen] [V|drikker] [S|jeg] [O|kaffe].", "In the morning I drink coffee."], ["[A|Derfor] [V|vil] [S|jeg] gerne [O|lære dansk].", "That is why I want to learn Danish."]]
      },
      {
        h: "Skemaet",
        da: "Tænk på sætningen som et skema med pladser:",
        en: "Think of the sentence as a table with places:",
        table: { head: ["Plads 1", "Plads 2: verbum", "Subjekt", "Resten"], rows: [["Jeg", "arbejder", "–", "i en butik."], ["I weekenden", "arbejder", "jeg", "i en butik."], ["Nu", "bor", "vi", "i Vejle."], ["Heldigvis", "er", "det", "solskin."]] }
      },
      {
        h: "Ord, der tit står på plads 1",
        da: "Når en sætning begynder med et af disse ord, kommer verbet lige bagefter – og så subjektet.",
        en: "When a sentence starts with one of these words, the verb comes right after – and then the subject.",
        table: { head: ["Dansk", "English"], rows: [["I dag / I går / I morgen", "today / yesterday / tomorrow"], ["Om sommeren / Om aftenen", "in summer / in the evening"], ["Bagefter / Så", "afterwards / then"], ["Derfor", "therefore, that is why"], ["Desuden", "moreover"], ["Heldigvis / Desværre", "fortunately / unfortunately"], ["Nu", "now"]] }
      }
    ],
    ex: [
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["I dag jeg arbejder.", "I dag arbejder jeg.", "I dag arbejder mig."], a: 1, why: "\"I dag\" is in place 1, so the verb (arbejder) comes in place 2, then the subject (jeg)." },
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["Om lørdagen vi spiller fodbold.", "Spiller om lørdagen vi fodbold.", "Om lørdagen spiller vi fodbold."], a: 2, why: "Place 1: Om lørdagen. Place 2: spiller. Then the subject: vi." },
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["Derfor vil jeg lære dansk.", "Derfor jeg vil lære dansk.", "Derfor vil lære jeg dansk."], a: 0, why: "Derfor + verb (vil) + subject (jeg) + the rest." },
      { t: "type", q: "I går ___ ___ i biografen. (vi / være)", a: ["var vi"], why: "I går (place 1) + var (verb, place 2) + vi (subject)." },
      { t: "type", q: "Nu ___ ___ i Danmark. (jeg / bo)", a: ["bor jeg"], why: "Nu (place 1) + bor (verb) + jeg (subject)." },
      { t: "order", da: "I morgen skal vi handle ind.", en: "Tomorrow we are going shopping.", hint: "Begynd med \"i morgen\"." },
      { t: "order", da: "Om vinteren er det mørkt tidligt.", en: "In winter it gets dark early.", hint: "Begynd med \"om vinteren\"." },
      { t: "order", da: "Bagefter drak vi kaffe.", en: "Afterwards we drank coffee.", hint: "Begynd med \"bagefter\"." }
    ]
  },
  {
    id: "spoergsmaal", ico: "❓", title: "Spørgsmål", en: "Questions",
    intro: "På dansk laver man spørgsmål ved at sætte verbet først – eller et spørgeord og så verbet. Man bruger ikke et hjælpeverbum som engelsk \"do\".",
    introEn: "In Danish you make a question by putting the verb first – or a question word and then the verb. There is no helper verb like English \"do\".",
    rules: [
      {
        h: "Ja/nej-spørgsmål: verbet først",
        da: "Byt om på subjekt og verbum:",
        en: "Swap the subject and the verb:",
        ex: [["[S|Du] [V|taler] [O|dansk].", "You speak Danish."], ["[V|Taler] [S|du] [O|dansk]?", "Do you speak Danish?"], ["[V|Kan] [S|du] hjælpe mig?", "Can you help me?"]]
      },
      {
        h: "Spørgeord + verbum + subjekt",
        da: "Spørgeordet står på plads 1, verbet på plads 2.",
        en: "The question word is in place 1, the verb in place 2.",
        ex: [["[C|Hvor] [V|bor] [S|du]?", "Where do you live?"], ["[C|Hvornår] [V|kommer] [S|bussen]?", "When does the bus come?"]],
        table: { head: ["Spørgeord", "English"], rows: [["hvad", "what"], ["hvem", "who"], ["hvor", "where"], ["hvornår", "when"], ["hvorfor", "why"], ["hvordan", "how"], ["hvilken / hvilket / hvilke", "which"], ["hvor mange / hvor meget", "how many / how much"]] }
      }
    ],
    ex: [
      { t: "mc", en: true, q: "Do you have a car?", o: ["Du har en bil?", "Har du en bil?", "Gør du har en bil?"], a: 1, why: "Yes/no question: verb first (Har), then the subject (du)." },
      { t: "mc", q: "___ bor du? – I Vejle.", o: ["Hvad", "Hvor", "Hvem"], a: 1, why: "\"Hvor\" asks about a place." },
      { t: "mc", q: "___ kommer bussen? – Klokken otte.", o: ["Hvornår", "Hvorfor", "Hvordan"], a: 0, why: "\"Hvornår\" asks about a time." },
      { t: "mc", q: "___ lærer du dansk? – Fordi jeg bor i Danmark.", o: ["Hvordan", "Hvorfor", "Hvem"], a: 1, why: "The answer starts with \"fordi\" (because), so the question is \"hvorfor\" (why)." },
      { t: "mc", q: "___ hedder din lærer? – Hanne.", o: ["Hvad", "Hvor", "Hvilken"], a: 0, why: "In Danish you ask \"Hvad hedder …?\" (literally: what is … called?)." },
      { t: "order", da: "Hvor arbejder du?", en: "Where do you work?" },
      { t: "order", da: "Kan du hjælpe mig?", en: "Can you help me?" },
      { t: "order", da: "Hvornår starter kurset?", en: "When does the course start?" }
    ]
  },
  {
    id: "ikke", ico: "🚫", title: "Ikke, altid, også …", en: "Where to put ikke, altid, også …",
    intro: "Små ord som ikke, altid, aldrig, også, tit og gerne står lige efter verbet i en hovedsætning. Er der inversion, står de efter subjektet.",
    introEn: "Small words like ikke (not), altid (always), aldrig (never), også (also), tit (often) and gerne (gladly) go right after the verb in a main clause. With inversion they go after the subject.",
    rules: [
      {
        h: "Efter verbet",
        da: "Verbet – så det lille ord – så resten:",
        en: "Verb – then the small word – then the rest:",
        ex: [["[S|Jeg] [V|spiser] [N|ikke] [O|kød].", "I don't eat meat."], ["[S|Han] [V|kommer] [N|altid] for sent.", "He always comes late."], ["[S|Vi] [V|har] [N|også] [O|en hund].", "We also have a dog."]]
      },
      {
        h: "Med to verber",
        da: "Det lille ord står efter det første verbum.",
        en: "The small word goes after the first verb.",
        ex: [["[S|Jeg] [V|kan] [N|ikke] [V|komme] [A|i morgen].", "I can't come tomorrow."], ["[S|Hun] [V|vil] [N|gerne] [V|lære] [O|dansk].", "She would like to learn Danish."]]
      },
      {
        h: "Med inversion",
        da: "Verbet – subjektet – det lille ord:",
        en: "Verb – subject – the small word:",
        ex: [["[A|I dag] [V|arbejder] [S|jeg] [N|ikke].", "Today I'm not working."], ["[A|Om søndagen] [V|sover] [S|vi] [N|altid] længe.", "On Sundays we always sleep in."]]
      }
    ],
    ex: [
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["Jeg ikke kan lide kaffe.", "Jeg kan ikke lide kaffe.", "Jeg kan lide ikke kaffe."], a: 1, why: "\"ikke\" goes right after the first verb (kan)." },
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["Han kommer altid for sent.", "Han altid kommer for sent.", "Altid han kommer for sent."], a: 0, why: "\"altid\" goes right after the verb (kommer)." },
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["I weekenden jeg arbejder ikke.", "I weekenden arbejder ikke jeg.", "I weekenden arbejder jeg ikke."], a: 2, why: "Inversion: verb (arbejder) + subject (jeg) + ikke." },
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["Vi også har en hund.", "Vi har også en hund.", "Vi har en også hund."], a: 1, why: "\"også\" goes right after the verb (har)." },
      { t: "type", q: "Jeg ___ ___ i dag. (arbejde / ikke)", a: ["arbejder ikke"], why: "Verb first (arbejder), then ikke." },
      { t: "order", da: "Jeg ryger ikke.", en: "I don't smoke." },
      { t: "order", da: "Hun drikker aldrig kaffe.", en: "She never drinks coffee." },
      { t: "order", da: "Vi kan også komme i morgen.", en: "We can also come tomorrow.", alt: ["I morgen kan vi også komme."] }
    ]
  },
  {
    id: "bindeord", ico: "🔗", title: "Bindeord og ledsætninger", en: "Conjunctions and subordinate clauses",
    intro: "Bindeord binder sætninger sammen. Nogle bindeord ændrer ikke ordstillingen (og, men, eller, for, så). Andre starter en ledsætning (fordi, når, hvis, at, selvom …), og så flytter \"ikke\" sig.",
    introEn: "Conjunctions join sentences. Some don't change the word order (og, men, eller, for, så). Others start a subordinate clause (fordi, når, hvis, at, selvom …) – and then \"ikke\" moves in front of the verb.",
    rules: [
      {
        h: "og, men, eller, for, så",
        da: "To hovedsætninger. Ordstillingen er normal i begge.",
        en: "Two main clauses. Normal word order in both.",
        ex: [["[S|Jeg] [V|er] træt, [C|men] [S|jeg] [V|vil] gerne komme.", "I am tired, but I would like to come."], ["[S|Det] [V|regner], [C|så] [S|vi] [V|bliver] hjemme.", "It's raining, so we are staying at home."]],
        table: { head: ["Bindeord", "English"], rows: [["og", "and"], ["men", "but"], ["eller", "or"], ["for", "because, for"], ["så", "so"]] }
      },
      {
        h: "Ledsætninger: subjekt – ikke – verbum",
        da: "Efter fordi, når, hvis, at, selvom osv. står \"ikke\" (og altid, aldrig, også …) FØR verbet.",
        en: "After fordi, når, hvis, at, selvom etc. the word \"ikke\" (and altid, aldrig, også …) comes BEFORE the verb.",
        ex: [["[S|Jeg] [V|har] [N|ikke] tid.", "I don't have time. (main clause)"], ["Jeg kommer ikke, [C|fordi] [S|jeg] [N|ikke] [V|har] tid.", "I'm not coming, because I don't have time."], ["Han siger, [C|at] [S|han] [N|altid] [V|cykler].", "He says that he always cycles."]],
        table: { head: ["Bindeord", "English"], rows: [["fordi", "because"], ["når", "when (every time / future)"], ["da", "when (once, in the past)"], ["hvis", "if"], ["at", "that"], ["selvom", "although, even though"], ["mens", "while"], ["før / efter at", "before / after"]] }
      },
      {
        h: "Ledsætningen først",
        da: "Hvis sætningen begynder med ledsætningen, er den plads 1. Så kommer verbet – og så subjektet.",
        en: "If the sentence starts with the subordinate clause, that whole clause is place 1. Then comes the verb – then the subject.",
        ex: [["[C|Når] jeg kommer hjem, [V|laver] [S|jeg] [O|mad].", "When I come home, I make food."], ["[C|Hvis] det regner, [V|bliver] [S|vi] hjemme.", "If it rains, we will stay at home."]]
      }
    ],
    ex: [
      { t: "mc", q: "Jeg bliver hjemme, ___ jeg er syg.", o: ["fordi", "men", "eller"], a: 0, why: "\"fordi\" (because) gives the reason." },
      { t: "mc", q: "Jeg vil gerne komme, ___ jeg har ikke tid.", o: ["fordi", "men", "hvis"], a: 1, why: "\"men\" (but) – and after \"men\" the word order is normal: jeg har ikke tid." },
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["Jeg kommer ikke, fordi jeg har ikke tid.", "Jeg kommer ikke, fordi jeg ikke har tid."], a: 1, why: "After \"fordi\": subject – ikke – verb (jeg ikke har)." },
      { t: "mc", q: "Hvilken sætning er rigtig?", o: ["Hvis det regner, vi bliver hjemme.", "Hvis det regner, bliver vi hjemme."], a: 1, why: "The \"hvis\" clause is place 1, so the verb (bliver) comes next, then the subject (vi)." },
      { t: "mc", q: "Han siger, ___ han er træt.", o: ["at", "og", "så"], a: 0, why: "\"at\" = that (He says that he is tired)." },
      { t: "type", q: "Hun er glad, ___ hun har fået nyt arbejde. (because)", a: ["fordi"], why: "\"fordi\" = because." },
      { t: "order", da: "Jeg lærer dansk, fordi jeg bor i Danmark.", en: "I am learning Danish because I live in Denmark." },
      { t: "order", da: "Når jeg har fri, spiller jeg fodbold.", en: "When I'm off, I play football.", hint: "Begynd med \"når\".", alt: ["Jeg spiller fodbold, når jeg har fri."] }
    ]
  },
  {
    id: "navneord", ico: "🏠", title: "Navneord: en/et, bestemt form og flertal", en: "Nouns: en/et, \"the\" and plural",
    intro: "Alle navneord er enten en-ord eller et-ord (ca. 75 % er en-ord). \"The\" sætter man bag på ordet: en bil → bilen.",
    introEn: "Every noun is either an en-word or an et-word (about 75 % are en-words). Learn every noun together with en or et. \"The\" is added to the END of the word: en bil (a car) → bilen (the car).",
    rules: [
      {
        h: "Ubestemt og bestemt form",
        da: "en → -en, et → -et. Ender ordet på -e, kommer der kun -n eller -t på.",
        en: "en-words get -en, et-words get -et. If the word ends in -e, just add -n or -t.",
        table: { head: ["En/et", "Bestemt (the)", "Flertal", "Flertal bestemt"], rows: [["en bil", "bilen", "biler", "bilerne"], ["en skole", "skolen", "skoler", "skolerne"], ["et hus", "huset", "huse", "husene"], ["et æble", "æblet", "æbler", "æblerne"], ["et år", "året", "år", "årene"], ["et barn", "barnet", "børn", "børnene"]] }
      },
      {
        h: "Flertal",
        da: "De fleste ord får -er eller -e i flertal. Nogle få ord ændrer sig ikke (et år → to år), og nogle er uregelmæssige (et barn → børn, en mand → mænd).",
        en: "Most nouns add -er or -e in the plural. A few don't change (et år → to år), and some are irregular (et barn → børn, en mand → mænd).",
        ex: [["Jeg har [O|en bil]. [S|Bilen] [V|er] rød.", "I have a car. The car is red."], ["Vi har [O|tre børn]. [S|Børnene] [V|går] i skole.", "We have three children. The children go to school."]]
      }
    ],
    ex: [
      { t: "mc", q: "___ hus", o: ["en", "et"], a: 1, why: "hus is an et-word: et hus, huset." },
      { t: "mc", q: "Jeg har en hund. ___ hedder Max.", o: ["En hund", "Hunden", "Hundet"], a: 1, why: "We know which dog, so: hunden (the dog). hund is an en-word → -en." },
      { t: "mc", q: "Hvor er ___? (the car)", o: ["bil", "bilen", "bilet"], a: 1, why: "en bil → bilen." },
      { t: "mc", q: "Jeg har to ___. (children)", o: ["barn", "barner", "børn"], a: 2, why: "barn is irregular: et barn – to børn." },
      { t: "mc", q: "Vi har tre ___.", o: ["bile", "biler", "bilen"], a: 1, why: "en bil → biler in the plural." },
      { t: "type", q: "et æble → bestemt form (the apple): ___", a: ["æblet"], why: "æble ends in -e, so just add -t: æblet." },
      { t: "type", q: "et hus → bestemt form (the house): ___", a: ["huset"], why: "et-word: hus + et = huset." },
      { t: "type", q: "en avis → flertal (newspapers): ___", a: ["aviser"], why: "avis + er = aviser." }
    ]
  },
  {
    id: "tillaegsord", ico: "🎨", title: "Tillægsord", en: "Adjectives",
    intro: "Tillægsord (fx stor, ny, god) får en endelse, der passer til navneordet: -t ved et-ord og -e i flertal og efter den/det/de.",
    introEn: "Adjectives (e.g. stor = big, ny = new, god = good) change their ending to match the noun: add -t with et-words, and -e in the plural and after den/det/de (the).",
    rules: [
      {
        h: "Endelserne",
        da: "Lær dette skema – så kan du bøje de fleste tillægsord:",
        en: "Learn this table – it works for most adjectives:",
        table: { head: ["", "en-ord", "et-ord", "flertal"], rows: [["ubestemt", "en stor bil", "et stort hus", "store biler"], ["bestemt", "den store bil", "det store hus", "de store biler"], ["efter verbet", "Bilen er stor.", "Huset er stort.", "Bilerne er store."]] }
      },
      {
        h: "Undtagelser",
        da: "Nogle tillægsord ændrer sig ikke: lille (et lille hus), og tillægsord på -sk får ikke -t (et dansk ord). Flertal af lille er små: små børn.",
        en: "Some adjectives don't change: lille (et lille hus), and adjectives ending in -sk don't take -t (et dansk ord). The plural of lille is små: små børn.",
        ex: [["Vi har [O|et nyt køkken].", "We have a new kitchen."], ["[S|De nye naboer] [V|er] søde.", "The new neighbours are nice."]]
      },
      {
        h: "Sammenligning",
        da: "stor – større – størst. Mange tillægsord får -ere og -est: billig – billigere – billigst.",
        en: "Comparison: big – bigger – biggest. Many adjectives add -ere and -est.",
        table: { head: ["", "mere", "mest"], rows: [["billig (cheap)", "billigere", "billigst"], ["stor (big)", "større", "størst"], ["god (good)", "bedre", "bedst"], ["gammel (old)", "ældre", "ældst"], ["lille (small)", "mindre", "mindst"], ["mange (many)", "flere", "flest"]] }
      }
    ],
    ex: [
      { t: "mc", q: "et ___ hus", o: ["stor", "stort", "store"], a: 1, why: "et-word, indefinite: add -t → et stort hus." },
      { t: "mc", q: "en ___ bil", o: ["ny", "nyt", "nye"], a: 0, why: "en-word, indefinite: no ending → en ny bil." },
      { t: "mc", q: "de ___ børn", o: ["glad", "gladt", "glade"], a: 2, why: "After de (the, plural) the adjective takes -e." },
      { t: "mc", q: "den ___ kjole", o: ["rød", "rødt", "røde"], a: 2, why: "After den/det/de the adjective always takes -e." },
      { t: "mc", q: "Huset er ___.", o: ["gammel", "gammelt", "gamle"], a: 1, why: "huset is an et-word, so: Huset er gammelt." },
      { t: "mc", q: "Min bror er ___ end mig.", o: ["høj", "højere", "højest"], a: 1, why: "\"end\" (than) → comparative: højere (taller)." },
      { t: "type", q: "god → bedre → ___", a: ["bedst"], why: "god – bedre – bedst (good – better – best)." },
      { t: "type", q: "Det er et ___ ur. (dyr)", a: ["dyrt"], why: "et ur is an et-word → dyr + t = dyrt." }
    ]
  },
  {
    id: "verber", ico: "⏰", title: "Verbernes tider", en: "Verb tenses",
    intro: "Danske verber har få former. Lær infinitiv, nutid, datid og førnutid – så kan du tale om nu, i går og \"har gjort\".",
    introEn: "Danish verbs have few forms. Learn the infinitive, present, past and present perfect, and you can talk about now, yesterday and things you \"have done\".",
    rules: [
      {
        h: "De fire former",
        da: "Mange verber følger et af to mønstre. Nogle er uregelmæssige og skal læres udenad.",
        en: "Most verbs follow one of two patterns (past in -ede or -te). Some are irregular and must be learned by heart.",
        table: { head: ["Infinitiv", "Nutid", "Datid", "Førnutid"], rows: [["at arbejde", "arbejder", "arbejdede", "har arbejdet"], ["at snakke", "snakker", "snakkede", "har snakket"], ["at spise", "spiser", "spiste", "har spist"], ["at købe", "køber", "købte", "har købt"], ["at gå", "går", "gik", "er gået"], ["at være", "er", "var", "har været"], ["at have", "har", "havde", "har haft"]] }
      },
      {
        h: "har eller er?",
        da: "Førnutid laves med har. Men verber om bevægelse eller forandring bruger er: gå, komme, rejse, flytte, blive.",
        en: "The present perfect uses har (have). But verbs of movement or change use er: gå, komme, rejse, flytte, blive.",
        ex: [["[S|Jeg] [V|har] [V|boet] [A|her i fem år].", "I have lived here for five years."], ["[S|Hun] [V|er] [V|flyttet] [A|til Aarhus].", "She has moved to Aarhus."]]
      },
      {
        h: "kan, vil, skal, må, bør + infinitiv",
        da: "Efter disse verber kommer infinitiv – UDEN \"at\".",
        en: "After these verbs comes the infinitive – WITHOUT \"at\".",
        ex: [["[S|Jeg] [V|kan] [V|svømme].", "I can swim."], ["[S|Vi] [V|skal] [V|arbejde] [A|i morgen].", "We have to work tomorrow."], ["[S|Du] [V|må] [N|gerne] [V|låne] [O|min cykel].", "You may borrow my bike."]]
      }
    ],
    ex: [
      { t: "mc", q: "I går ___ jeg pizza.", o: ["spiser", "spiste", "spist"], a: 1, why: "\"I går\" (yesterday) → past tense: spiste." },
      { t: "mc", q: "Jeg kan ___ dansk.", o: ["tale", "taler", "at tale"], a: 0, why: "After kan: infinitive without \"at\" → kan tale." },
      { t: "mc", q: "Vi ___ boet her i fem år.", o: ["er", "har", "havde"], a: 1, why: "bo is not a movement verb, so: har boet." },
      { t: "mc", q: "Hun er ___ hjem.", o: ["gå", "gik", "gået"], a: 2, why: "Present perfect of gå: er gået." },
      { t: "mc", q: "I går ___ vi i biografen.", o: ["er", "var", "været"], a: 1, why: "Past tense of være: var." },
      { t: "type", q: "Nu ___ jeg i Aarhus. (at bo)", a: ["bor"], why: "\"Nu\" (now) → present: bor." },
      { t: "type", q: "Sidste år ___ vi til Spanien. (at rejse)", a: ["rejste"], why: "rejse → rejste in the past." },
      { t: "type", q: "Jeg har ___ på kontoret i to år. (at arbejde)", a: ["arbejdet"], why: "har + arbejdet (present perfect)." }
    ]
  },
  {
    id: "stedord", ico: "👤", title: "Stedord: jeg, mig, min", en: "Pronouns: I, me, my",
    intro: "Stedord ændrer form, når de er subjekt (jeg), objekt (mig) eller ejer (min).",
    introEn: "Pronouns change form when they are the subject (jeg = I), the object (mig = me) or the owner (min = my).",
    rules: [
      {
        h: "Skemaet",
        da: "Lær rækkerne udenad:",
        en: "Learn the rows by heart:",
        table: { head: ["Subjekt", "Objekt", "Ejer"], rows: [["jeg (I)", "mig (me)", "min / mit / mine"], ["du (you)", "dig", "din / dit / dine"], ["han (he)", "ham", "hans"], ["hun (she)", "hende", "hendes"], ["vi (we)", "os", "vores"], ["I (you pl.)", "jer", "jeres"], ["de (they)", "dem", "deres"]] }
      },
      {
        h: "min, mit, mine",
        da: "min/din passer til en-ord, mit/dit til et-ord og mine/dine til flertal.",
        en: "min/din go with en-words, mit/dit with et-words, and mine/dine with plurals.",
        ex: [["[O|min bil] – [O|mit hus] – [O|mine børn]", "my car – my house – my children"]]
      },
      {
        h: "sin eller hans?",
        da: "Brug sin/sit/sine, når ejeren er subjektet i samme sætning (han/hun/de). Ellers hans/hendes/deres.",
        en: "Use sin/sit/sine when the owner is the subject of the same sentence. Otherwise use hans/hendes/deres.",
        ex: [["[S|Peter] [V|elsker] [O|sin kone].", "Peter loves his (own) wife."], ["[S|Jeg] [V|kender] [O|hans kone].", "I know his wife."]]
      }
    ],
    ex: [
      { t: "mc", q: "Kan du hjælpe ___?", o: ["jeg", "mig", "min"], a: 1, why: "Object form: mig (me)." },
      { t: "mc", q: "Det er ___ hus.", o: ["min", "mit", "mine"], a: 1, why: "hus is an et-word → mit." },
      { t: "mc", q: "Hvor er ___ børn?", o: ["din", "dit", "dine"], a: 2, why: "børn is plural → dine." },
      { t: "mc", q: "Jeg ringer til ___ i morgen. (her)", o: ["hun", "hende", "hendes"], a: 1, why: "Object form of hun: hende." },
      { t: "mc", q: "Ali besøger ___ mor hver søndag. (his own)", o: ["hans", "sin", "sit"], a: 1, why: "The owner (Ali) is the subject → sin. mor is an en-word → sin, not sit." },
      { t: "mc", q: "___ hedder Maria. (She)", o: ["Hun", "Hende", "Hendes"], a: 0, why: "Subject form: hun (she)." },
      { t: "mc", q: "Tak, fordi I hjalp ___. (us)", o: ["vi", "os", "vores"], a: 1, why: "Object form of vi: os (us)." },
      { t: "type", q: "Vi elsker ___ nye lejlighed. (our)", a: ["vores"], why: "vores = our (same form for en, et and plural)." }
    ]
  },
  {
    id: "praepositioner", ico: "📍", title: "Små ord om tid og sted", en: "Prepositions of time and place",
    intro: "i, på, til og om er nogle af de mest brugte ord på dansk. Lær dem i faste udtryk.",
    introEn: "i, på, til and om are some of the most used words in Danish. They are best learned in fixed phrases.",
    rules: [
      {
        h: "Sted",
        da: "i om lande, byer og rum. på om arbejdspladser, skoler og etager. til om retning (hvorhen?).",
        en: "i for countries, towns and rooms. på for workplaces, schools and floors. til for direction (where to?).",
        table: { head: ["Udtryk", "English"], rows: [["i Danmark / i Aarhus / i køkkenet", "in Denmark / in Aarhus / in the kitchen"], ["på arbejde / på hospitalet / på sprogskolen", "at work / at the hospital / at the language school"], ["på 2. sal", "on the 2nd floor"], ["til lægen / til Aarhus / til fest", "to the doctor / to Aarhus / to a party"]] }
      },
      {
        h: "Tid",
        da: "om bruges om noget, der gentager sig (om morgenen) og om fremtid (om en uge). i bruges om varighed (i fem år) og i dag/i går. på bruges om ugedage (på mandag).",
        en: "om = repeated times (om morgenen = in the mornings) and the future (om en uge = in a week). i = duration (i fem år = for five years) and i dag/i går. på = weekdays (på mandag = on Monday).",
        ex: [["[A|Om sommeren] [V|bader] [S|vi] [A|i havet].", "In summer we swim in the sea."], ["[S|Jeg] [V|har] [V|boet] her [A|i to år].", "I have lived here for two years."], ["[S|Toget] [V|kører] [A|om ti minutter].", "The train leaves in ten minutes."]]
      }
    ],
    ex: [
      { t: "mc", q: "Jeg bor ___ Odense.", o: ["i", "på", "til"], a: 0, why: "Towns and countries: i." },
      { t: "mc", q: "Hun arbejder ___ et hospital.", o: ["i", "på", "til"], a: 1, why: "Workplaces: på." },
      { t: "mc", q: "Vi skal ___ lægen i morgen.", o: ["i", "på", "til"], a: 2, why: "Direction (where to?): til." },
      { t: "mc", q: "___ sommeren bader vi i havet.", o: ["Om", "På", "Til"], a: 0, why: "Repeated time (every summer): om." },
      { t: "mc", q: "Jeg har boet her ___ fem år.", o: ["i", "om", "på"], a: 0, why: "Duration: i fem år (for five years)." },
      { t: "mc", q: "Toget kører ___ en time. (in an hour)", o: ["i", "om", "på"], a: 1, why: "Future: om en time (in an hour)." },
      { t: "mc", q: "Vi ses ___ mandag.", o: ["i", "på", "om"], a: 1, why: "Weekdays: på mandag." },
      { t: "mc", q: "Han går ___ sprogskole.", o: ["i", "på", "til"], a: 1, why: "Fixed phrase: gå på sprogskole." }
    ]
  }
];

// Øvebank: building blocks for endless, generated grammar drills.
// Every combination of subject + activity + starter gives a correct Danish sentence.
PD2.DRILLS = {
  subjects: [["jeg", "I"], ["du", "you"], ["han", "he"], ["hun", "she"], ["vi", "we"], ["de", "they"], ["min bror", "my brother"], ["Maria", "Maria"]],
  // [infinitive, present, past, perfect auxiliary, past participle, rest of the sentence, English]
  acts: [
    ["spise", "spiser", "spiste", "har", "spist", "morgenmad", "eat breakfast"],
    ["drikke", "drikker", "drak", "har", "drukket", "kaffe", "drink coffee"],
    ["læse", "læser", "læste", "har", "læst", "avis", "read the newspaper"],
    ["se", "ser", "så", "har", "set", "fjernsyn", "watch TV"],
    ["spille", "spiller", "spillede", "har", "spillet", "fodbold", "play football"],
    ["lave", "laver", "lavede", "har", "lavet", "mad", "cook"],
    ["arbejde", "arbejder", "arbejdede", "har", "arbejdet", "hjemme", "work from home"],
    ["lære", "lærer", "lærte", "har", "lært", "dansk", "learn Danish"],
    ["købe", "køber", "købte", "har", "købt", "brød", "buy bread"],
    ["skrive", "skriver", "skrev", "har", "skrevet", "en mail", "write an e-mail"],
    ["ringe", "ringer", "ringede", "har", "ringet", "til min mor", "call my mother"],
    ["gå", "går", "gik", "er", "gået", "en tur", "go for a walk"],
    ["cykle", "cykler", "cyklede", "er", "cyklet", "på arbejde", "cycle to work"],
    ["handle", "handler", "handlede", "har", "handlet", "ind", "do the shopping"]
  ],
  // Sentence starters that take the present tense / the past tense.
  nowStarters: [["i dag", "today"], ["i morgen", "tomorrow"], ["om morgenen", "in the morning"], ["om aftenen", "in the evening"], ["i weekenden", "at the weekend"], ["hver dag", "every day"], ["nu", "now"], ["om lørdagen", "on Saturdays"], ["derfor", "therefore"], ["heldigvis", "fortunately"]],
  pastStarters: [["i går", "yesterday"], ["i sidste uge", "last week"], ["i lørdags", "last Saturday"], ["i går aftes", "last night"]],
  adverbs: [["ikke", "not"], ["altid", "always"], ["aldrig", "never"], ["tit", "often"], ["også", "also"]],
  becauseMain: [["Det er et problem", "It is a problem"], ["Det er synd", "It is a pity"], ["Det er mærkeligt", "It is strange"]],
  // Conjunction gaps: [sentence with ___, answer, English]
  conj: [
    ["Jeg er træt, ___ jeg har arbejdet hele dagen.", "fordi", "I am tired because I have worked all day."],
    ["Jeg vil gerne komme, ___ jeg har ikke tid.", "men", "I would like to come, but I don't have time."],
    ["Det regner, ___ vi bliver hjemme.", "så", "It is raining, so we are staying at home."],
    ["Vil du have kaffe ___ te?", "eller", "Would you like coffee or tea?"],
    ["Vi går en tur, ___ det regner.", "selvom", "We go for a walk, even though it is raining."],
    ["___ det bliver godt vejr, tager vi til stranden.", "Hvis", "If the weather is good, we will go to the beach."],
    ["___ jeg kommer hjem, laver jeg mad.", "Når", "When I come home, I make dinner."],
    ["Hun spiser ikke kød, ___ hun er vegetar.", "fordi", "She doesn't eat meat, because she is a vegetarian."],
    ["Han går på arbejde, ___ han er syg.", "selvom", "He goes to work, even though he is ill."],
    ["Jeg drikker kaffe ___ spiser en bolle.", "og", "I drink coffee and eat a bun."],
    ["Bussen var forsinket, ___ jeg kom for sent.", "så", "The bus was late, so I was late."],
    ["Du kan ringe ___ skrive til mig.", "eller", "You can call or write to me."],
    ["Jeg lærer dansk, ___ jeg gerne vil have et job i Danmark.", "fordi", "I am learning Danish because I would like a job in Denmark."],
    ["___ du har spørgsmål, kan du skrive til mig.", "Hvis", "If you have questions, you can write to me."],
    ["Jeg hører musik, ___ jeg laver mad.", "mens", "I listen to music while I cook."],
    ["Lejligheden er dyr, ___ den er meget flot.", "men", "The flat is expensive, but it is very nice."],
    ["___ jeg var barn, boede jeg på landet.", "Da", "When I was a child, I lived in the countryside."],
    ["Han siger, ___ han kommer i morgen.", "at", "He says that he is coming tomorrow."],
    ["Jeg ved ikke, ___ hun kommer.", "om", "I don't know whether she is coming."],
    ["Vi skal handle ind, ___ vi har ingen mad.", "for", "We have to go shopping, for we have no food."]
  ],
  conjWords: ["og", "men", "eller", "så", "for", "fordi", "selvom", "hvis", "når", "da", "mens", "at", "om"],
  conjEn: { og: "and", men: "but", eller: "or", "så": "so", for: "for (because)", fordi: "because", selvom: "even though", hvis: "if", "når": "when (each time / future)", da: "when (once, in the past)", mens: "while", at: "that", om: "whether" },
  // Adjectives: [base, et-form, e-form, English]
  adjs: [["stor", "stort", "store", "big"], ["ny", "nyt", "nye", "new"], ["gammel", "gammelt", "gamle", "old"], ["dyr", "dyrt", "dyre", "expensive"], ["billig", "billigt", "billige", "cheap"], ["flot", "flot", "flotte", "nice-looking"], ["god", "godt", "gode", "good"], ["dansk", "dansk", "danske", "Danish"], ["varm", "varmt", "varme", "warm"], ["rød", "rødt", "røde", "red"]],
  adjNouns: [["en", "bil", "car"], ["en", "lejlighed", "flat"], ["en", "jakke", "jacket"], ["en", "cykel", "bike"], ["en", "lampe", "lamp"], ["en", "sofa", "sofa"], ["en", "kop", "cup"], ["et", "hus", "house"], ["et", "bord", "table"], ["et", "køkken", "kitchen"], ["et", "ur", "watch"], ["et", "tæppe", "blanket"], ["et", "værelse", "room"], ["et", "billede", "picture"]]
};
