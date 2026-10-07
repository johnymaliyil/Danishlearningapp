// Content for the mini-games ("Spil & leg"). Written for this app.
// ORDER and DICTATION have one list per exam level; the others are shared.

PD2.GAMES = {
  // Byg sætningen: the words are shuffled into tiles; any sentence in `alt` is also accepted.
  // The first word is shown in lower case, so no sentence may start with a proper name.
  ORDER: {
    pd1: [
      { da: "Om morgenen drikker jeg kaffe.", en: "In the morning I drink coffee.", alt: ["Jeg drikker kaffe om morgenen."] },
      { da: "Jeg bor i en lille lejlighed i Odense.", en: "I live in a small flat in Odense." },
      { da: "Min søster arbejder på et hospital.", en: "My sister works at a hospital." },
      { da: "I weekenden spiller vi fodbold.", en: "At the weekend we play football.", alt: ["Vi spiller fodbold i weekenden."] },
      { da: "Hvad hedder din lærer?", en: "What is your teacher called?" },
      { da: "Vi skal handle ind i morgen.", en: "We are going shopping tomorrow.", alt: ["I morgen skal vi handle ind."] },
      { da: "Bussen kommer klokken otte.", en: "The bus comes at eight o'clock.", alt: ["Klokken otte kommer bussen."] },
      { da: "Jeg kan godt lide at læse bøger.", en: "I like reading books." },
      { da: "Har du en cykel?", en: "Do you have a bike?" },
      { da: "I dag er det koldt og blæsende.", en: "Today it is cold and windy.", alt: ["Det er koldt og blæsende i dag."] }
    ],
    pd2: [
      { da: "I går var jeg til lægen, fordi jeg havde ondt i ryggen.", en: "Yesterday I went to the doctor because my back hurt.", alt: ["Jeg var til lægen i går, fordi jeg havde ondt i ryggen."] },
      { da: "Jeg synes ikke, at det er svært at lære dansk.", en: "I don't think it is hard to learn Danish." },
      { da: "Når jeg kommer hjem fra arbejde, laver jeg aftensmad.", en: "When I come home from work, I make dinner.", alt: ["Jeg laver aftensmad, når jeg kommer hjem fra arbejde."] },
      { da: "Hvis det regner i morgen, bliver vi hjemme.", en: "If it rains tomorrow, we will stay at home.", alt: ["Vi bliver hjemme, hvis det regner i morgen."] },
      { da: "Om sommeren cykler min mand altid på arbejde.", en: "In summer my husband always cycles to work.", alt: ["Min mand cykler altid på arbejde om sommeren."] },
      { da: "Hun spurgte, om jeg ville med i biografen.", en: "She asked if I wanted to come to the cinema." },
      { da: "Vi har boet i Danmark i fem år.", en: "We have lived in Denmark for five years.", alt: ["I fem år har vi boet i Danmark."] },
      { da: "Derfor vil jeg gerne skifte arbejde.", en: "That is why I would like to change jobs.", alt: ["Jeg vil derfor gerne skifte arbejde."] },
      { da: "Jeg ved ikke, hvornår toget kører.", en: "I don't know when the train leaves." },
      { da: "Selvom det var koldt, gik vi en tur ved stranden.", en: "Even though it was cold, we went for a walk by the beach.", alt: ["Vi gik en tur ved stranden, selvom det var koldt."] }
    ],
    pd3: [
      { da: "Det er vigtigt, at man aldrig giver op, selvom det er svært.", en: "It is important never to give up, even when it is hard." },
      { da: "Hvis jeg havde haft mere tid, ville jeg have læst bogen.", en: "If I had had more time, I would have read the book.", alt: ["Jeg ville have læst bogen, hvis jeg havde haft mere tid."] },
      { da: "Mange mener, at regeringen burde gøre mere for klimaet.", en: "Many people think the government ought to do more for the climate." },
      { da: "Efter at have arbejdet i ti år besluttede hun at starte sin egen virksomhed.", en: "After working for ten years, she decided to start her own business.", alt: ["Hun besluttede at starte sin egen virksomhed efter at have arbejdet i ti år."] },
      { da: "Man kan diskutere, om det overhovedet er en god idé.", en: "One can debate whether it is a good idea at all." },
      { da: "Ikke alene er det dyrt, men det er også dårligt for miljøet.", en: "Not only is it expensive, it is also bad for the environment.", alt: ["Det er ikke alene dyrt, men det er også dårligt for miljøet."] },
      { da: "Jo mere man øver sig, desto lettere bliver det.", en: "The more you practise, the easier it gets." },
      { da: "Han påstod, at han aldrig havde set hende før.", en: "He claimed that he had never seen her before." },
      { da: "Det har længe været et problem, som politikerne har ignoreret.", en: "It has long been a problem that the politicians have ignored." },
      { da: "Uanset hvad man mener, må man respektere loven.", en: "Whatever you think, you must respect the law.", alt: ["Man må respektere loven, uanset hvad man mener."] }
    ]
  },

  // Lyt og skriv: read aloud by the browser's Danish voice.
  DICTATION: {
    pd1: [
      { da: "Jeg bor i en lejlighed med min familie.", en: "I live in a flat with my family." },
      { da: "Butikken åbner klokken ni.", en: "The shop opens at nine o'clock." },
      { da: "Vi spiser aftensmad sammen hver dag.", en: "We eat dinner together every day." },
      { da: "Min datter går i børnehave.", en: "My daughter goes to kindergarten." },
      { da: "Det regner meget i Danmark.", en: "It rains a lot in Denmark." },
      { da: "Kan du hjælpe mig?", en: "Can you help me?" },
      { da: "Jeg skal til tandlægen på fredag.", en: "I am going to the dentist on Friday." },
      { da: "Han kører på arbejde i bil.", en: "He drives to work by car." }
    ],
    pd2: [
      { da: "Jeg har lært dansk på sprogskolen i to år.", en: "I have learned Danish at the language school for two years." },
      { da: "Om lørdagen går vi tit en tur i skoven.", en: "On Saturdays we often go for a walk in the woods." },
      { da: "Hun er glad for sit nye arbejde på hospitalet.", en: "She is happy with her new job at the hospital." },
      { da: "Hvis du har tid, kan vi drikke en kop kaffe.", en: "If you have time, we can have a cup of coffee." },
      { da: "Mine børn cykler i skole hver morgen.", en: "My children cycle to school every morning." },
      { da: "Vi skal holde fødselsdag for min mor i weekenden.", en: "We are having a birthday party for my mother at the weekend." },
      { da: "Det er vigtigt at spise sundt og dyrke motion.", en: "It is important to eat healthily and exercise." },
      { da: "Toget til København er desværre forsinket.", en: "The train to Copenhagen is unfortunately delayed." }
    ],
    pd3: [
      { da: "Mange unge flytter til de store byer for at uddanne sig.", en: "Many young people move to the big cities to get an education." },
      { da: "Debatten om klimaet fylder meget i medierne.", en: "The climate debate takes up a lot of space in the media." },
      { da: "Det kræver tålmodighed at lære et nyt sprog.", en: "Learning a new language takes patience." },
      { da: "Arbejdsløsheden er faldet i løbet af det seneste år.", en: "Unemployment has fallen over the past year." },
      { da: "Forældre bør begrænse deres børns skærmtid.", en: "Parents should limit their children's screen time." },
      { da: "Frivilligt arbejde styrker fællesskabet i lokalområdet.", en: "Voluntary work strengthens the community in the local area." },
      { da: "Ifølge undersøgelsen er danskerne et af verdens lykkeligste folk.", en: "According to the survey, the Danes are one of the happiest peoples in the world." },
      { da: "Politikerne er uenige om, hvordan problemet skal løses.", en: "The politicians disagree about how the problem should be solved." }
    ]
  },

  // En eller et? "article noun=English"
  NOUNS: `en bil=car
en bog=book
en by=town
en dag=day
en dør=door
en familie=family
en gade=street
en have=garden
en hund=dog
en kat=cat
en kop=cup
en lampe=lamp
en lærer=teacher
en mand=man
en kvinde=woman
en pige=girl
en dreng=boy
en uge=week
en time=hour; lesson
en måned=month
en stol=chair
en seng=bed
en skole=school
en sko=shoe
en cykel=bike
en telefon=phone
en computer=computer
en avis=newspaper
en ven=friend
en søster=sister
en bror=brother
en nabo=neighbour
en ferie=holiday
en butik=shop
en læge=doctor
en bus=bus
en nøgle=key
en jakke=jacket
en kage=cake
en kartoffel=potato
en tomat=tomato
en gulerod=carrot
en banan=banana
en ost=cheese
en pølse=sausage
en regning=bill
en sang=song
en film=film
en sofa=sofa
en flaske=bottle
en kniv=knife
en gaffel=fork
en ske=spoon
en tallerken=plate
en klasse=class
en kirke=church
en skov=forest
en strand=beach
en lejlighed=flat
en uddannelse=education
en opgave=task
en prøve=test
en eksamen=exam
en idé=idea
et hus=house
et barn=child
et bord=table
et vindue=window
et æble=apple
et år=year
et ord=word
et sprog=language
et land=country
et køkken=kitchen
et værelse=room
et badeværelse=bathroom
et arbejde=job; work
et job=job
et glas=glass
et brød=loaf of bread
et æg=egg
et kort=card; map
et billede=picture
et ur=watch; clock
et tog=train
et fly=plane
et skib=ship
et hospital=hospital
et kontor=office
et museum=museum
et bibliotek=library
et problem=problem
et spørgsmål=question
et svar=answer
et navn=name
et træ=tree
et dyr=animal
et møde=meeting
et kursus=course
et eksempel=example
et firma=company
et sted=place
et øje=eye
et øre=ear
et hoved=head
et ben=leg
et hjerte=heart
et tæppe=blanket; carpet
et slot=castle
et bryllup=wedding
et bjerg=mountain
et minut=minute
et menneske=human being
et ansigt=face
et spil=game
et smil=smile
et hav=sea`,

  // Bøj verbet: "infinitive|present|past|perfect|English"
  VERBS: `at være|er|var|har været|to be
at have|har|havde|har haft|to have
at gå|går|gik|er gået|to go, walk
at komme|kommer|kom|er kommet|to come
at se|ser|så|har set|to see
at sige|siger|sagde|har sagt|to say
at gøre|gør|gjorde|har gjort|to do
at tage|tager|tog|har taget|to take
at give|giver|gav|har givet|to give
at få|får|fik|har fået|to get
at spise|spiser|spiste|har spist|to eat
at drikke|drikker|drak|har drukket|to drink
at skrive|skriver|skrev|har skrevet|to write
at sove|sover|sov|har sovet|to sleep
at ligge|ligger|lå|har ligget|to lie
at sidde|sidder|sad|har siddet|to sit
at stå|står|stod|har stået|to stand
at vide|ved|vidste|har vidst|to know
at bo|bor|boede|har boet|to live
at arbejde|arbejder|arbejdede|har arbejdet|to work
at lære|lærer|lærte|har lært|to learn
at købe|køber|købte|har købt|to buy
at sælge|sælger|solgte|har solgt|to sell
at tænke|tænker|tænkte|har tænkt|to think
at finde|finder|fandt|har fundet|to find
at hjælpe|hjælper|hjalp|har hjulpet|to help
at løbe|løber|løb|har løbet|to run
at lægge|lægger|lagde|har lagt|to put, lay
at sætte|sætter|satte|har sat|to put, set
at vælge|vælger|valgte|har valgt|to choose
at spørge|spørger|spurgte|har spurgt|to ask
at forstå|forstår|forstod|har forstået|to understand
at blive|bliver|blev|er blevet|to become; to stay
at bringe|bringer|bragte|har bragt|to bring
at hedde|hedder|hed|har heddet|to be called
at cykle|cykler|cyklede|har cyklet|to cycle`,

  // Talemåder: the idiom, a word-for-word translation and what it really means.
  IDIOMS: [
    { da: "Der er ingen ko på isen.", lit: "There is no cow on the ice.", en: "There is no problem; don't worry." },
    { da: "At slå to fluer med ét smæk.", lit: "To swat two flies with one smack.", en: "To kill two birds with one stone." },
    { da: "At gå som katten om den varme grød.", lit: "To walk like the cat around the hot porridge.", en: "To beat around the bush." },
    { da: "At have is i maven.", lit: "To have ice in the stomach.", en: "To stay calm and patient." },
    { da: "At være oppe på dupperne.", lit: "To be up on the floats.", en: "To be alert and on your toes." },
    { da: "At købe katten i sækken.", lit: "To buy the cat in the sack.", en: "To buy something without checking it first, and be cheated." },
    { da: "Der er ugler i mosen.", lit: "There are owls in the bog.", en: "Something suspicious is going on." },
    { da: "At skyde papegøjen.", lit: "To shoot the parrot.", en: "To be very lucky; to hit the jackpot." },
    { da: "Det er helt i skoven.", lit: "It is completely in the forest.", en: "It is completely wrong or way off." },
    { da: "At være på herrens mark.", lit: "To be on the Lord's field.", en: "To be lost and not know what to do." },
    { da: "At tale med store bogstaver.", lit: "To speak with capital letters.", en: "To speak very frankly and directly." },
    { da: "Så er den ged barberet.", lit: "Then that goat is shaved.", en: "That job is done." },
    { da: "At have ben i næsen.", lit: "To have bone in the nose.", en: "To be tough and determined." },
    { da: "At sidde med håret i postkassen.", lit: "To sit with your hair in the letterbox.", en: "To be stuck in an embarrassing situation." },
    { da: "Hellere en fugl i hånden end ti på taget.", lit: "Better one bird in the hand than ten on the roof.", en: "Be happy with what you have rather than risk it for more." },
    { da: "At stikke en finger i jorden.", lit: "To stick a finger in the ground.", en: "To stop and think things over." },
    { da: "At tage tyren ved hornene.", lit: "To take the bull by the horns.", en: "To deal with a difficult problem directly." },
    { da: "At få kolde fødder.", lit: "To get cold feet.", en: "To lose your courage just before something." }
  ],

  // Ordle: Danish words of five letters, "word=English"
  ORDLE: `skole=school
kaffe=coffee
hygge=cosiness
cykel=bike
lampe=lamp
tomat=tomato
banan=banana
frugt=fruit
storm=storm
penge=money
kunde=customer
prøve=test
dansk=Danish
sprog=language
bøger=books
flæsk=pork
suppe=soup
pasta=pasta
salat=salad
pizza=pizza
jakke=jacket
hoved=head
onkel=uncle
tante=aunt
dreng=boy
påske=Easter
færge=ferry
lille=small
flink=kind, nice
rolig=calm
travl=busy
ældre=older
spise=to eat
danse=to dance
synge=to sing
vaske=to wash
stege=to fry
rydde=to tidy
cykle=to cycle
smile=to smile
grine=to laugh
tænke=to think
kende=to know (someone)
vente=to wait
rejse=to travel
huske=to remember
lytte=to listen
bager=baker
måned=month
aften=evening
marts=March
april=April
altid=always
måske=maybe
meget=very; much
fordi=because`
};
