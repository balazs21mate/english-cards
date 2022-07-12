//create variables
let card = document.getElementById('card');
let enter = document.getElementById('enter');
let words = document.getElementById('word-counter');
let new_card = document.getElementById('new-card');
let new_enter = document.getElementById('new-enter');
let new_words = document.getElementById('new-word-counter');
let choose = document.getElementById('choose');
let learned = document.getElementById('learned-words');
let new_word = document.getElementById('new-words');

var choose_languages = false;

//choose display
function switch_display(change_new_card, change_new_words, change_new_enter, change_card, change_words, change_enter){
    change_new_card.style.display = 'none';
    change_new_words.style.display = 'none';
    change_new_enter.style.display = 'none';
    change_card.style.display = 'flex';
    change_words.style.display = 'flex';
    change_enter.style.display = 'flex';
}

switch_display(new_card, new_words, new_enter, card, words, enter);

learned.addEventListener('click', () => {
    switch_display(new_card, new_words, new_enter, card, words, enter);
})

new_word.addEventListener('click', () => {
    switch_display(card, words, enter, new_card, new_words, new_enter);
})

//add css to elements
card.classList.add("card");
new_card.classList.add("card");
enter.classList.add("enter");
new_enter.classList.add("enter");

// create dictionaries
let card_items = [
    {english : 'Believe',hungarian : "Gondol,vél,hisz"},
    {english : 'Behind',hungarian : "Mögött, mögé"},
    {english : 'Accept',hungarian : "Elfogad, átvesz"},
    {english : 'There',hungarian : "Ott, amott"},
    {english : 'Here',hungarian : "Itt"},
    {english : 'Care (ige)',hungarian : "Törődik, gondol valamivel, érdekli"},
    {english : 'At',hungarian : "-nál, -nél"},
    {english : 'Admit',hungarian : "Bevall, beismer, elismer"},
    {english : 'Discover',hungarian : "Felfed, feltár, leleplez, felfedez"},
    {english : 'Avoid',hungarian : "Elkerül"},
    {english : 'Clean (ige)',hungarian : "Tisztít, kitisztít, lesúrol, takarít, kitakarít"},
    {english : 'Contribute',hungarian : "Hozzájárul, közreműködik, elősegít"},
    {english : 'Carry',hungarian : "(El)visz, hord, cipel"},
    {english : 'Must',hungarian : "Muszály, kell"},
    {english : 'Deliver',hungarian : "Szállít, leszállít"},
    {english : 'Correct (ige)',hungarian : "Helyesbít, kiigazít, korrigál, módosít, kijavít"},
    {english : 'Cut (ige)',hungarian : "Vág, elvág, szétvág"},
    {english : 'Begin',hungarian : "Hozzáfog, megkezd, kezd, elkezd"},
    {english : 'Build (ige)',hungarian : "Épít, megépít, felépít"},
    {english : 'Complain',hungarian : "Panaszkodik, reklamál, kifogásol, elpanaszol, panaszt tesz"},
    {english : 'Complete (ige)',hungarian : "Befejez"},
    {english : 'On the left',hungarian : "Bal oldalon"},
    {english : 'Consist',hungarian : "Fennmarad, fennáll, létezik, áll (Valamiből)"},
    {english : 'Arrive',hungarian : "Érkezik"},
    {english : 'Cost (ige)',hungarian : "Kerül valamibe"},
    {english : 'Call (ige)',hungarian : "Hív"},
    {english : '(Can) afford',hungarian : "Győzi anyagilag, megengedhet magának valamit"},
    {english : 'Come',hungarian : "Jön"},
    {english : 'To',hungarian : "-hoz, -hez, -höz, -ba, -be, -nak, -nek"},
    {english : 'Far',hungarian : "Távol, messze"},
    {english : 'May (ige)',hungarian : "Lehet, szabad"},
    {english : 'Inside',hungarian : "-ban, -ben, valami belsejében"},
    {english : 'Cause (ige)',hungarian : "Okoz, előidéz"},
    {english : 'Outside',hungarian : "Valamin kívül"},
    {english : 'Ask',hungarian : "Kérdez, megkérdez"},
    {english : 'Buy (ige)',hungarian : "Vesz, vásárol, megvesz"},
    {english : 'Catch (ige)',hungarian : "Fog, elfog, megragad, elkap"},
    {english : 'On the right',hungarian : "Jobb oldalon"},
    {english : 'Agree',hungarian : "Egyetért, beleegyezik, hozzájárul, megállapodik"},
    {english : 'Enjoy',hungarian : "Élvez, tetszik neki"},
    {english : 'Drive (ige)',hungarian : "Irányít, működtet, vezet"},
    {english : 'Next to',hungarian : "Valami szomszédságában, valaki/valami mellett"},
    {english : 'Have to (do something)',hungarian : "Valakinek meg kell tenni valamit"},
    {english : 'Eat',hungarian : "Étkezik, eszik"},
    {english : 'Around',hungarian : "Minden oldalon, körül"},
    {english : 'Become',hungarian : "Lesz valamivé, válik valamivé"},
    {english : 'Encourage',hungarian : "Bátorít, buzdít, felbátorít"},
    {english : 'Disappear',hungarian : "Eltűnik, elmúlik, kimegy a divatból"},
    {english : 'In front of',hungarian : "Elé, előtt, átellenben, szemben"},
    {english : 'In',hungarian : "-ban, -ben"},
    {english : 'On',hungarian : "-on, -en, -ön"},
    {english : 'Near/close',hungarian : "Közel valakihez, valami közelében/közeli"},
    {english : 'Under',hungarian : "Alatt"},
    {english : 'Create',hungarian : "Teremt, létrehoz, alkot"},
    {english : 'Change (ige)',hungarian : "Módosít, változtat"},
    {english : 'Allow',hungarian : "Lehetővé tesz, megenged, engedélyez, enged"},
    {english : 'Contain',hungarian : "Tartalmaz, magába foglal"},
    {english : 'Should',hungarian : "Kellene, -na/-ne"},
    {english : 'Achieve',hungarian : "Megvalósít, véghezvisz, elér, kivív"},
    {english : 'Choose',hungarian : "Választ, kiválaszt, megválaszt"},
    {english : 'Check (ige)',hungarian : "Ellenőriz, átvizsgál, megnéz, meggyőződik"},
    {english : 'Would',hungarian : "-na, -ne, -ná, -né"},
    {english : 'By',hungarian : "-val, -vel, -ig, -ra/-re"},
    {english : 'Argue',hungarian : "Vitatkozik"},
    {english : 'Can (ige)',hungarian : "Tud, képes valamire"},
    {english : 'Answer (ige)',hungarian : "Válaszol, felel"},
    {english : 'Describe',hungarian : "Ecsetel, leír"},
    {english : 'Depend',hungarian : "Függ valakitől/valamitől, múlik valamin/valakin"},
    {english : 'Drink (ige)',hungarian : "Vedel, iszik"},
    {english : 'Control (ige)',hungarian : "Felügyel, ellenőriz, szabályoz, irányít"},
    {english : 'Deny',hungarian : "Tagad, letagad, cáfol, megcáfol"},
    {english : 'Deal (ige)',hungarian : "Foglalkozik valamivel, kereskedik"},
    {english : 'Do',hungarian : "Tesz, csinál, elvégez"},
    {english : 'Continue',hungarian : "Folytat"},
    {english : 'Who?',hungarian : "Ki?, kicsoda?, kik?"},
    {english : 'What?',hungarian : "Mi?, micsoda?"},
    {english : 'Where?',hungarian : "Hol?, merre?, hová?"},
    {english : 'When?',hungarian : "Mikor?"},
    {english : 'Why?',hungarian : "Miért?, minek?"},
    {english : 'How?',hungarian : "Hogy?, hogyan?, mi módon?, miként?"},
    {english : 'How many?',hungarian : "Hány?, mennyi? (megszámlálható)"},
    {english : 'How much?',hungarian : "Mennyi? (megszámlálhatatlan)"},
    {english : 'How ...(young)?',hungarian : "Milyen ...(fiatal)?"},
    {english : 'What time?',hungarian : "Hánykor?"},
    {english : 'Expect',hungarian : "Vár, elvár"},
    {english : 'Explain',hungarian : "Indokol, magyaráz, magyarázkodik, megmagyaráz"},
    {english : 'Finish (ige)',hungarian : "Befejeződik, végződik"},
    {english : 'Feel (ige)',hungarian : "Érez, valahogyan érzi magát"},
    {english : 'Express (ige)',hungarian : "Kifejezésre juttat, kifejez"},
    {english : 'Experience (ige)',hungarian : "Megtapasztal, átél, megél"},
    {english : 'Exist',hungarian : "Él, van, fennáll, létezik"},
    {english : 'Find (ige)',hungarian : "Talál, megtalál, rátalál, lel"},
    {english : 'Fall (ige)',hungarian : "Leejt, lehull, leesik, esik"},
    {english : 'Fly (ige)',hungarian : "Repül"},
    {english : 'Follow',hungarian : "Követ"},
    {english : 'Forget',hungarian : "Elfelejt, nem jut eszébe, megfeledkezik"},
    {english : 'Forgive',hungarian : "Megbocsát"},
    {english : 'Get',hungarian : "Kap"},
    {english : 'Give',hungarian : "Ad, odaad, átad"},
    {english : 'Go (ige)',hungarian : "Megy, halad, indul"},
    {english : 'Grow',hungarian : "Nő, növekedik, növekszik"},
    {english : 'Happen',hungarian : "(Meg)történik"},
    {english : 'Handle (ige)',hungarian : "Kezel valakit, hozzányúl, megfog valamit, bánik valamivel"},
    {english : 'Have (ige)',hungarian : "Birtokol, van valamije, van valakinek valamije, valamit bír"},
    {english : 'Hear',hungarian : "Hall"},
    {english : 'Help (ige)',hungarian : "Segít"},
    {english : 'Hide (ige)',hungarian : "Elrejt, eldug, eltakar, elbújtat, eltitkol"},
    {english : 'Hold (ige)',hungarian : "Fog, tart, kézben tart, kézzel fog"},
    {english : 'Hope (ige)',hungarian : "Bízik, remél, reménykedik"},
    {english : 'Imagine',hungarian : "Képzel, vél, gondol, hisz"},
    {english : 'Improve',hungarian : "Javít, tökéletesít, fejleszt"},
    {english : 'Increase (ige)',hungarian : "Fokoz, emel, szaporít, növel"},
    {english : 'Influence (ige)',hungarian : "Rábír valakit/valamit, befolyást gyakorol, befolyásol"},
    {english : 'Invite',hungarian : "Meghív, hív"},
    {english : 'Involve',hungarian : "Magában foglal, vele jár"},
    {english : 'Join (ige)',hungarian : "Összeköt, kapcsol, összekapcsol, illeszt, csatlakozik"},
    {english : 'Keep (ige)',hungarian : "Tart, megtart, eltesz"},
    {english : 'Know (ige)',hungarian : "Tud, ismer"},
    {english : 'Last (ige)',hungarian : "Megmarad, fennmarad, kitart, tart"},
    {english : 'Laugh (ige)',hungarian : "Nevet, kinevet, röhög"},
    {english : 'Learn',hungarian : "Megtanul, tanul"},
    {english : 'Leave (ige)',hungarian : "Elutazik, elmegy, elhagy"},
    {english : 'Lend',hungarian : "Ad, nyújt, biztosít, kölcsönöz, kölcsönad"},
    {english : 'Like (ige)',hungarian : "Szeret, kedvel"},
    {english : 'Limit (ige)',hungarian : "Korlátol, korlátoz, megszorít, elhatárol, meghatároz, határt szab"},
    {english : 'Listen',hungarian : "Hallgat, figyel"},
    {english : 'Live (ige)',hungarian : "Létezik, életben van, él"},
    {english : 'Look (ige)',hungarian : "Néz, megnéz, megtekint, szemlél"},
    {english : 'Love (ige)',hungarian : "Kedvel, szeret, szerelmes valakibe"},
    {english : 'Make (ige)',hungarian : "Készít, csinál, gyárt"},
    {english : 'Matter (ige)',hungarian : "Lényeges valakinek"},
    {english : 'Mean (ige)',hungarian : "Jelent"},
    {english : 'Measure (ige)',hungarian : "Mértéket vesz, lemér, kimér, mér"},
    {english : 'Meet (ige)',hungarian : "Találkozik"},
    {english : 'Mention (ige)',hungarian : "Beszél valakinek valamiről, szóvá tesz, megemlít, említ"},
    {english : 'Mind (ige)',hungarian : "Figyelembe vesz valamit, figyel valakire/valamire"},
    {english : 'Move (ige)',hungarian : "Mozog, mozdít, mozgat"},
    {english : 'Need (ige)',hungarian : "Szüksége van valamire, szükséges"},
    {english : 'Offer (ige)',hungarian : "Felkínál, ajánlkozik, ajánl"},
    {english : 'Open (ige)',hungarian : "Kitár, kinyit"},
    {english : 'Order (ige)',hungarian : "Rendez, elrendez, eligazgat"},
    {english : 'Own (ige)',hungarian : "Tulajdonol, bír"},
    {english : 'Pay (ige)',hungarian : "Fizet"},
    {english : 'Perform (ige)',hungarian : "Előad, játszik, teljesít"},
    {english : 'Play (ige)',hungarian : "Játszik"},
    {english : 'Point (ige)',hungarian : "Megmutat, mutat"},
    {english : 'Prefer',hungarian : "Előnyben részesít, jobban szeret, preferál"},
    {english : 'Prepare',hungarian : "Felkészíti magát, előkészületeket tesz, felkészül"},
    {english : 'Press (ige)',hungarian : "Megszorít, összenyom, megnyom"},
    {english : 'Prevent',hungarian : "Meggátol, meghíúsít, megakadályoz"},
    {english : 'Protect',hungarian : "Véd, megvéd, oltalmaz, óv, biztosít"},
    {english : 'Push (ige)',hungarian : "Tol, lök, taszít"},
    {english : 'Put',hungarian : "Tesz, helyez valahova"},
    {english : 'Reach (ige)',hungarian : "Kinyújt, nyújt, elér"},
    {english : 'Read (ige)',hungarian : "Olvas, elolvas"},
    {english : 'Receive',hungarian : "Megkap, kap, elfogad"},
    {english : 'Record (ige)',hungarian : "Regisztrál, felír, feljegyez, felvételt készít valamiről"},
    {english : 'Relate',hungarian : "Előad, elbeszél, elmesél, elmond, beszámol"},
    {english : 'Remember',hungarian : "Emlékszik, emlékezik"},
    {english : 'Remove (ige)',hungarian : "Eltávolít, elmozdít, leszerel, levesz, leszed"},
    {english : 'Repeat (ige)',hungarian : "Ismétel, megismétel, újra elmond, még egyszer elmond"},
    {english : 'Replace',hungarian : "Visszatesz, visszahelyez, visszarak, kicserél"},
    {english : 'Reply (ige)',hungarian : "Válaszol, választ ad, felel, feleletet ad"},
    {english : 'Return (ige)',hungarian : "Visszajön, visszatér, hazaérkezik, visszaküld"},
    {english : 'Run (ige)',hungarian : "Fut, szalad, rohan"},
    {english : 'Save (ige)',hungarian : "Megvéd, megment, megóv, megspórol"},
    {english : 'Say (ige)',hungarian : "Szól, mond"},
    {english : 'See (ige)',hungarian : "Lát, megnéz, észrevesz"},
    {english : 'Sell (ige)',hungarian : "Árul, értékesít, elad"},
    {english : 'Send',hungarian : "Küld, elküld, eljuttat, felad"},
    {english : 'Set (ige)',hungarian : "Beállít, elhelyez, elrendez, helyre rak, támaszt, letesz"},
    {english : 'Share (ige)',hungarian : "Megoszt, eloszt, feloszt"},
    {english : 'Shoot (ige)',hungarian : "Lő, tüzel, kilő, meglő, vadászik valamire"},
    {english : 'Show (ige)',hungarian : "Mutat, felmutat, bemutat, jelez"},
    {english : 'Sing (ige)',hungarian : "Énekel, elénekel, dalol, eldalol, előad"},
    {english : 'Sit (ige)',hungarian : "Ül"},
    {english : 'Sleep (ige)',hungarian : "Alszik"},
    {english : 'Smile (ige)',hungarian : "Megmosolyog, rámosolyog, mosolyog"},
    {english : 'Sound (ige)',hungarian : "Valamilyennek tűnik, hangzik"},
    {english : 'Speak',hungarian : "Beszél"},
    {english : 'Stand (ige)',hungarian : "Áll"},
    {english : 'Start (ige)',hungarian : "Elkezd, megkezd valamit, kezd"},
    {english : 'State (ige)',hungarian : "Kijelent, állít, megállapít"},
    {english : 'Study (ige)',hungarian : "Tanulmányokat folytat, tanul"},
    {english : 'Succeed',hungarian : "Célt ér, boldogul, sikert ér el, sikerül valakinek valami"},
    {english : 'Suggest',hungarian : "Javasol, ajánl, tanácsol"},
    {english : 'Survive',hungarian : "Túlél, túlél valakit"},
    {english : 'Take (ige)',hungarian : "Vesz, elvesz, elszed"},
    {english : 'Talk (ige)',hungarian : "Beszél, beszélget, cseveg"},
    {english : 'Tell',hungarian : "Mond, elmond, megmond"},
    {english : 'Think (ige)',hungarian : "Elmélkedik, töpreng, gondolkodik"},
    {english : 'Throw (ige)',hungarian : "Vet, hány, hajít, dob"},
    {english : 'Touch (ige)',hungarian : "Érint, megérint, felzárkózik, tapint"},
    {english : 'Train (ige)',hungarian : "Nevel, oktat, betanít, gyakoroltat, idomít, edz, gyakorlatoztat"},
    {english : 'Travel (ige)',hungarian : "Utazik, utazást tesz, utazásokat tesz"},
    {english : 'Treat (ige)',hungarian : "Bánik valakivel/valamivel, kezel"},
    {english : 'Try (ige)',hungarian : "Próbál, kipróbál, megpróbál, megkísérel"},
    {english : 'Turn (ige)',hungarian : "Megfordul, fordul, forog, forgolódik"},
    {english : 'Understand',hungarian : "Megért, felfog, ért"},
    {english : 'Use (ige)',hungarian : "Használ, alkalmaz, igénybe vesz"},
    {english : 'Visit (ige)',hungarian : "Ellátogat valahová, meglátogat"},
    {english : 'Wait (ige)',hungarian : "Várakozik, vár"},
    {english : 'Want (ige)',hungarian : "Kér, kíván, akar, óhajt"},
    {english : 'Walk (ige)',hungarian : "Jár, gyalogol, megy"},
    {english : 'Watch (ige)',hungarian : "Néz, szemmel tart"},
    {english : 'Win (ige)',hungarian : "Nyer"},
    {english : 'Wonder (ige)',hungarian : "Kíváncsi, azon tűnődik, szeretné tudni"},
    {english : 'Write',hungarian : "Ír"},
    {english : 'Nice',hungarian : "Rendes, kellemes, szép, szimpatikus"},
    {english : 'Pregnant',hungarian : "Állapotos, terhes"},
    {english : 'Paint (ige)',hungarian : "Fest, megfest, lefest, befest, mázol"},
    {english : 'Wall (Főnév)',hungarian : "Fal, sorfal"},
    {english : 'Pencil (Főnév)',hungarian : "Ceruza"},
    {english : 'Table (Főnév)',hungarian : "Asztal"},
    {english : 'Pillow (Főnév)',hungarian : "Párna, vánkos"},
    {english : 'Soup',hungarian : "Leves"},
    {english : 'Living room',hungarian : "Nappali"},
    {english : 'Shoe (Főnév)',hungarian : "Cipő, félcipő"},
    {english : 'Past (Főnév)',hungarian : "Múlt"},
    {english : 'Store (Főnév)',hungarian : "Üzlet, áruház, kereskedés, bolt"},
    {english : 'Show (Főnév)',hungarian : "Műsor, előadás"},
    {english : 'Box (Főnév)',hungarian : "Láda, szekrény, doboz"},
    {english : 'Easter',hungarian : "Húsvét"}
]

let card_items_load = [
    {english : 'Believe',hungarian : "Gondol,vél,hisz"},
    {english : 'Behind',hungarian : "Mögött, mögé"},
    {english : 'Accept',hungarian : "Elfogad, átvesz"},
    {english : 'There',hungarian : "Ott, amott"},
    {english : 'Here',hungarian : "Itt"},
    {english : 'Care (ige)',hungarian : "Törődik, gondol valamivel, érdekli"},
    {english : 'At',hungarian : "-nál, -nél"},
    {english : 'Admit',hungarian : "Bevall, beismer, elismer"},
    {english : 'Discover',hungarian : "Felfed, feltár, leleplez, felfedez"},
    {english : 'Avoid',hungarian : "Elkerül"},
    {english : 'Clean (ige)',hungarian : "Tisztít, kitisztít, lesúrol, takarít, kitakarít"},
    {english : 'Contribute',hungarian : "Hozzájárul, közreműködik, elősegít"},
    {english : 'Carry',hungarian : "(El)visz, hord, cipel"},
    {english : 'Must',hungarian : "Muszály, kell"},
    {english : 'Deliver',hungarian : "Szállít, leszállít"},
    {english : 'Correct (ige)',hungarian : "Helyesbít, kiigazít, korrigál, módosít, kijavít"},
    {english : 'Cut (ige)',hungarian : "Vág, elvág, szétvág"},
    {english : 'Begin',hungarian : "Hozzáfog, megkezd, kezd, elkezd"},
    {english : 'Build (ige)',hungarian : "Épít, megépít, felépít"},
    {english : 'Complain',hungarian : "Panaszkodik, reklamál, kifogásol, elpanaszol, panaszt tesz"},
    {english : 'Complete (ige)',hungarian : "Befejez"},
    {english : 'On the left',hungarian : "Bal oldalon"},
    {english : 'Consist',hungarian : "Fennmarad, fennáll, létezik, áll (Valamiből)"},
    {english : 'Arrive',hungarian : "Érkezik"},
    {english : 'Cost (ige)',hungarian : "Kerül valamibe"},
    {english : 'Call (ige)',hungarian : "Hív"},
    {english : '(Can) afford',hungarian : "Győzi anyagilag, megengedhet magának valamit"},
    {english : 'Come',hungarian : "Jön"},
    {english : 'To',hungarian : "-hoz, -hez, -höz, -ba, -be, -nak, -nek"},
    {english : 'Far',hungarian : "Távol, messze"},
    {english : 'May (ige)',hungarian : "Lehet, szabad"},
    {english : 'Inside',hungarian : "-ban, -ben, valami belsejében"},
    {english : 'Cause (ige)',hungarian : "Okoz, előidéz"},
    {english : 'Outside',hungarian : "Valamin kívül"},
    {english : 'Ask',hungarian : "Kérdez, megkérdez"},
    {english : 'Buy (ige)',hungarian : "Vesz, vásárol, megvesz"},
    {english : 'Catch (ige)',hungarian : "Fog, elfog, megragad, elkap"},
    {english : 'On the right',hungarian : "Jobb oldalon"},
    {english : 'Agree',hungarian : "Egyetért, beleegyezik, hozzájárul, megállapodik"},
    {english : 'Enjoy',hungarian : "Élvez, tetszik neki"},
    {english : 'Drive (ige)',hungarian : "Irányít, működtet, vezet"},
    {english : 'Next to',hungarian : "Valami szomszédságában, valaki/valami mellett"},
    {english : 'Have to (do something)',hungarian : "Valakinek meg kell tenni valamit"},
    {english : 'Eat',hungarian : "Étkezik, eszik"},
    {english : 'Around',hungarian : "Minden oldalon, körül"},
    {english : 'Become',hungarian : "Lesz valamivé, válik valamivé"},
    {english : 'Encourage',hungarian : "Bátorít, buzdít, felbátorít"},
    {english : 'Disappear',hungarian : "Eltűnik, elmúlik, kimegy a divatból"},
    {english : 'In front of',hungarian : "Elé, előtt, átellenben, szemben"},
    {english : 'In',hungarian : "-ban, -ben"},
    {english : 'On',hungarian : "-on, -en, -ön"},
    {english : 'Near/close',hungarian : "Közel valakihez, valami közelében/közeli"},
    {english : 'Under',hungarian : "Alatt"},
    {english : 'Create',hungarian : "Teremt, létrehoz, alkot"},
    {english : 'Change (ige)',hungarian : "Módosít, változtat"},
    {english : 'Allow',hungarian : "Lehetővé tesz, megenged, engedélyez, enged"},
    {english : 'Contain',hungarian : "Tartalmaz, magába foglal"},
    {english : 'Should',hungarian : "Kellene, -na/-ne"},
    {english : 'Achieve',hungarian : "Megvalósít, véghezvisz, elér, kivív"},
    {english : 'Choose',hungarian : "Választ, kiválaszt, megválaszt"},
    {english : 'Check (ige)',hungarian : "Ellenőriz, átvizsgál, megnéz, meggyőződik"},
    {english : 'Would',hungarian : "-na, -ne, -ná, -né"},
    {english : 'By',hungarian : "-val, -vel, -ig, -ra/-re"},
    {english : 'Argue',hungarian : "Vitatkozik"},
    {english : 'Can (ige)',hungarian : "Tud, képes valamire"},
    {english : 'Answer (ige)',hungarian : "Válaszol, felel"},
    {english : 'Describe',hungarian : "Ecsetel, leír"},
    {english : 'Depend',hungarian : "Függ valakitől/valamitől, múlik valamin/valakin"},
    {english : 'Drink (ige)',hungarian : "Vedel, iszik"},
    {english : 'Control (ige)',hungarian : "Felügyel, ellenőriz, szabályoz, irányít"},
    {english : 'Deny',hungarian : "Tagad, letagad, cáfol, megcáfol"},
    {english : 'Deal (ige)',hungarian : "Foglalkozik valamivel, kereskedik"},
    {english : 'Do',hungarian : "Tesz, csinál, elvégez"},
    {english : 'Continue',hungarian : "Folytat"},
    {english : 'Who?',hungarian : "Ki?, kicsoda?, kik?"},
    {english : 'What?',hungarian : "Mi?, micsoda?"},
    {english : 'Where?',hungarian : "Hol?, merre?, hová?"},
    {english : 'When?',hungarian : "Mikor?"},
    {english : 'Why?',hungarian : "Miért?, minek?"},
    {english : 'How?',hungarian : "Hogy?, hogyan?, mi módon?, miként?"},
    {english : 'How many?',hungarian : "Hány?, mennyi? (megszámlálható)"},
    {english : 'How much?',hungarian : "Mennyi? (megszámlálhatatlan)"},
    {english : 'How ...(young)?',hungarian : "Milyen ...(fiatal)?"},
    {english : 'What time?',hungarian : "Hánykor?"},
    {english : 'Expect',hungarian : "Vár, elvár"},
    {english : 'Explain',hungarian : "Indokol, magyaráz, magyarázkodik, megmagyaráz"},
    {english : 'Finish (ige)',hungarian : "Befejeződik, végződik"},
    {english : 'Feel (ige)',hungarian : "Érez, valahogyan érzi magát"},
    {english : 'Express (ige)',hungarian : "Kifejezésre juttat, kifejez"},
    {english : 'Experience (ige)',hungarian : "Megtapasztal, átél, megél"},
    {english : 'Exist',hungarian : "Él, van, fennáll, létezik"},
    {english : 'Find (ige)',hungarian : "Talál, megtalál, rátalál, lel"},
    {english : 'Fall (ige)',hungarian : "Leejt, lehull, leesik, esik"},
    {english : 'Fly (ige)',hungarian : "Repül"},
    {english : 'Follow',hungarian : "Követ"},
    {english : 'Forget',hungarian : "Elfelejt, nem jut eszébe, megfeledkezik"},
    {english : 'Forgive',hungarian : "Megbocsát"},
    {english : 'Get',hungarian : "Kap"},
    {english : 'Give',hungarian : "Ad, odaad, átad"},
    {english : 'Go (ige)',hungarian : "Megy, halad, indul"},
    {english : 'Grow',hungarian : "Nő, növekedik, növekszik"},
    {english : 'Happen',hungarian : "(Meg)történik"},
    {english : 'Handle (ige)',hungarian : "Kezel valakit, hozzányúl, megfog valamit, bánik valamivel"},
    {english : 'Have (ige)',hungarian : "Birtokol, van valamije, van valakinek valamije, valamit bír"},
    {english : 'Hear',hungarian : "Hall"},
    {english : 'Help (ige)',hungarian : "Segít"},
    {english : 'Hide (ige)',hungarian : "Elrejt, eldug, eltakar, elbújtat, eltitkol"},
    {english : 'Hold (ige)',hungarian : "Fog, tart, kézben tart, kézzel fog"},
    {english : 'Hope (ige)',hungarian : "Bízik, remél, reménykedik"},
    {english : 'Imagine',hungarian : "Képzel, vél, gondol, hisz"},
    {english : 'Improve',hungarian : "Javít, tökéletesít, fejleszt"},
    {english : 'Increase (ige)',hungarian : "Fokoz, emel, szaporít, növel"},
    {english : 'Influence (ige)',hungarian : "Rábír valakit/valamit, befolyást gyakorol, befolyásol"},
    {english : 'Invite',hungarian : "Meghív, hív"},
    {english : 'Involve',hungarian : "Magában foglal, vele jár"},
    {english : 'Join (ige)',hungarian : "Összeköt, kapcsol, összekapcsol, illeszt, csatlakozik"},
    {english : 'Keep (ige)',hungarian : "Tart, megtart, eltesz"},
    {english : 'Know (ige)',hungarian : "Tud, ismer"},
    {english : 'Last (ige)',hungarian : "Megmarad, fennmarad, kitart, tart"},
    {english : 'Laugh (ige)',hungarian : "Nevet, kinevet, röhög"},
    {english : 'Learn',hungarian : "Megtanul, tanul"},
    {english : 'Leave (ige)',hungarian : "Elutazik, elmegy, elhagy"},
    {english : 'Lend',hungarian : "Ad, nyújt, biztosít, kölcsönöz, kölcsönad"},
    {english : 'Like (ige)',hungarian : "Szeret, kedvel"},
    {english : 'Limit (ige)',hungarian : "Korlátol, korlátoz, megszorít, elhatárol, meghatároz, határt szab"},
    {english : 'Listen',hungarian : "Hallgat, figyel"},
    {english : 'Live (ige)',hungarian : "Létezik, életben van, él"},
    {english : 'Look (ige)',hungarian : "Néz, megnéz, megtekint, szemlél"},
    {english : 'Love (ige)',hungarian : "Kedvel, szeret, szerelmes valakibe"},
    {english : 'Make (ige)',hungarian : "Készít, csinál, gyárt"},
    {english : 'Matter (ige)',hungarian : "Lényeges valakinek"},
    {english : 'Mean (ige)',hungarian : "Jelent"},
    {english : 'Measure (ige)',hungarian : "Mértéket vesz, lemér, kimér, mér"},
    {english : 'Meet (ige)',hungarian : "Találkozik"},
    {english : 'Mention (ige)',hungarian : "Beszél valakinek valamiről, szóvá tesz, megemlít, említ"},
    {english : 'Mind (ige)',hungarian : "Figyelembe vesz valamit, figyel valakire/valamire"},
    {english : 'Move (ige)',hungarian : "Mozog, mozdít, mozgat"},
    {english : 'Need (ige)',hungarian : "Szüksége van valamire, szükséges"},
    {english : 'Offer (ige)',hungarian : "Felkínál, ajánlkozik, ajánl"},
    {english : 'Open (ige)',hungarian : "Kitár, kinyit"},
    {english : 'Order (ige)',hungarian : "Rendez, elrendez, eligazgat"},
    {english : 'Own (ige)',hungarian : "Tulajdonol, bír"},
    {english : 'Pay (ige)',hungarian : "Fizet"},
    {english : 'Perform (ige)',hungarian : "Előad, játszik, teljesít"},
    {english : 'Play (ige)',hungarian : "Játszik"},
    {english : 'Point (ige)',hungarian : "Megmutat, mutat"},
    {english : 'Prefer',hungarian : "Előnyben részesít, jobban szeret, preferál"},
    {english : 'Prepare',hungarian : "Felkészíti magát, előkészületeket tesz, felkészül"},
    {english : 'Press (ige)',hungarian : "Megszorít, összenyom, megnyom"},
    {english : 'Prevent',hungarian : "Meggátol, meghíúsít, megakadályoz"},
    {english : 'Protect',hungarian : "Véd, megvéd, oltalmaz, óv, biztosít"},
    {english : 'Push (ige)',hungarian : "Tol, lök, taszít"},
    {english : 'Put',hungarian : "Tesz, helyez valahova"},
    {english : 'Reach (ige)',hungarian : "Kinyújt, nyújt, elér"},
    {english : 'Read (ige)',hungarian : "Olvas, elolvas"},
    {english : 'Receive',hungarian : "Megkap, kap, elfogad"},
    {english : 'Record (ige)',hungarian : "Regisztrál, felír, feljegyez, felvételt készít valamiről"},
    {english : 'Relate',hungarian : "Előad, elbeszél, elmesél, elmond, beszámol"},
    {english : 'Remember',hungarian : "Emlékszik, emlékezik"},
    {english : 'Remove (ige)',hungarian : "Eltávolít, elmozdít, leszerel, levesz, leszed"},
    {english : 'Repeat (ige)',hungarian : "Ismétel, megismétel, újra elmond, még egyszer elmond"},
    {english : 'Replace',hungarian : "Visszatesz, visszahelyez, visszarak, kicserél"},
    {english : 'Reply (ige)',hungarian : "Válaszol, választ ad, felel, feleletet ad"},
    {english : 'Return (ige)',hungarian : "Visszajön, visszatér, hazaérkezik, visszaküld"},
    {english : 'Run (ige)',hungarian : "Fut, szalad, rohan"},
    {english : 'Save (ige)',hungarian : "Megvéd, megment, megóv, megspórol"},
    {english : 'Say (ige)',hungarian : "Szól, mond"},
    {english : 'See (ige)',hungarian : "Lát, megnéz, észrevesz"},
    {english : 'Sell (ige)',hungarian : "Árul, értékesít, elad"},
    {english : 'Send',hungarian : "Küld, elküld, eljuttat, felad"},
    {english : 'Set (ige)',hungarian : "Beállít, elhelyez, elrendez, helyre rak, támaszt, letesz"},
    {english : 'Share (ige)',hungarian : "Megoszt, eloszt, feloszt"},
    {english : 'Shoot (ige)',hungarian : "Lő, tüzel, kilő, meglő, vadászik valamire"},
    {english : 'Show (ige)',hungarian : "Mutat, felmutat, bemutat, jelez"},
    {english : 'Sing (ige)',hungarian : "Énekel, elénekel, dalol, eldalol, előad"},
    {english : 'Sit (ige)',hungarian : "Ül"},
    {english : 'Sleep (ige)',hungarian : "Alszik"},
    {english : 'Smile (ige)',hungarian : "Megmosolyog, rámosolyog, mosolyog"},
    {english : 'Sound (ige)',hungarian : "Valamilyennek tűnik, hangzik"},
    {english : 'Speak',hungarian : "Beszél"},
    {english : 'Stand (ige)',hungarian : "Áll"},
    {english : 'Start (ige)',hungarian : "Elkezd, megkezd valamit, kezd"},
    {english : 'State (ige)',hungarian : "Kijelent, állít, megállapít"},
    {english : 'Study (ige)',hungarian : "Tanulmányokat folytat, tanul"},
    {english : 'Succeed',hungarian : "Célt ér, boldogul, sikert ér el, sikerül valakinek valami"},
    {english : 'Suggest',hungarian : "Javasol, ajánl, tanácsol"},
    {english : 'Survive',hungarian : "Túlél, túlél valakit"},
    {english : 'Take (ige)',hungarian : "Vesz, elvesz, elszed"},
    {english : 'Talk (ige)',hungarian : "Beszél, beszélget, cseveg"},
    {english : 'Tell',hungarian : "Mond, elmond, megmond"},
    {english : 'Think (ige)',hungarian : "Elmélkedik, töpreng, gondolkodik"},
    {english : 'Throw (ige)',hungarian : "Vet, hány, hajít, dob"},
    {english : 'Touch (ige)',hungarian : "Érint, megérint, felzárkózik, tapint"},
    {english : 'Train (ige)',hungarian : "Nevel, oktat, betanít, gyakoroltat, idomít, edz, gyakorlatoztat"},
    {english : 'Travel (ige)',hungarian : "Utazik, utazást tesz, utazásokat tesz"},
    {english : 'Treat (ige)',hungarian : "Bánik valakivel/valamivel, kezel"},
    {english : 'Try (ige)',hungarian : "Próbál, kipróbál, megpróbál, megkísérel"},
    {english : 'Turn (ige)',hungarian : "Megfordul, fordul, forog, forgolódik"},
    {english : 'Understand',hungarian : "Megért, felfog, ért"},
    {english : 'Use (ige)',hungarian : "Használ, alkalmaz, igénybe vesz"},
    {english : 'Visit (ige)',hungarian : "Ellátogat valahová, meglátogat"},
    {english : 'Wait (ige)',hungarian : "Várakozik, vár"},
    {english : 'Want (ige)',hungarian : "Kér, kíván, akar, óhajt"},
    {english : 'Walk (ige)',hungarian : "Jár, gyalogol, megy"},
    {english : 'Watch (ige)',hungarian : "Néz, szemmel tart"},
    {english : 'Win (ige)',hungarian : "Nyer"},
    {english : 'Wonder (ige)',hungarian : "Kíváncsi, azon tűnődik, szeretné tudni"},
    {english : 'Write',hungarian : "Ír"},
    {english : 'Nice',hungarian : "Rendes, kellemes, szép, szimpatikus"},
    {english : 'Pregnant',hungarian : "Állapotos, terhes"},
    {english : 'Paint (ige)',hungarian : "Fest, megfest, lefest, befest, mázol"},
    {english : 'Wall (Főnév)',hungarian : "Fal, sorfal"},
    {english : 'Pencil (Főnév)',hungarian : "Ceruza"},
    {english : 'Table (Főnév)',hungarian : "Asztal"},
    {english : 'Pillow (Főnév)',hungarian : "Párna, vánkos"},
    {english : 'Soup',hungarian : "Leves"},
    {english : 'Living room',hungarian : "Nappali"},
    {english : 'Shoe (Főnév)',hungarian : "Cipő, félcipő"},
    {english : 'Past (Főnév)',hungarian : "Múlt"},
    {english : 'Store (Főnév)',hungarian : "Üzlet, áruház, kereskedés, bolt"},
    {english : 'Show (Főnév)',hungarian : "Műsor, előadás"},
    {english : 'Box (Főnév)',hungarian : "Láda, szekrény, doboz"},
    {english : 'Easter',hungarian : "Húsvét"}
]

let new_card_items = [
    {english : 'Happily',hungarian : "Boldogan"},
    {english : 'Sadly',hungarian : "Szomorúan"},
    {english : 'Slowly',hungarian : "Lassan"},
    {english : 'Quietly',hungarian : "Halkan"},
    {english : 'Easily',hungarian : "Egyszerűen"},
    {english : 'Frequently',hungarian : "Gyakran"},
    {english : 'Generally',hungarian : "Átlagosan"},
    {english : 'Usually',hungarian : "Általában"},
    {english : 'Gently',hungarian : "Gyengéden, finoman"},
    {english : 'Hardly',hungarian : "Nehezen, alig"}
]

let new_card_items_load = [
    {english : 'Happily',hungarian : "Boldogan"},
    {english : 'Sadly',hungarian : "Szomorúan"},
    {english : 'Slowly',hungarian : "Lassan"},
    {english : 'Quietly',hungarian : "Halkan"},
    {english : 'Easily',hungarian : "Egyszerűen"},
    {english : 'Frequently',hungarian : "Gyakran"},
    {english : 'Generally',hungarian : "Átlagosan"},
    {english : 'Usually',hungarian : "Általában"},
    {english : 'Gently',hungarian : "Gyengéden, finoman"},
    {english : 'Hardly',hungarian : "Nehezen, alig"}
]

//load texts
function add_text_to_body(){
    if (choose_languages === false) {
        choose.innerHTML = 'Magyar -> Angol';
        enter.innerHTML = 'Next';
        new_enter.innerHTML = 'Next';
        words.innerHTML = 'Number of words learned: ' + card_items.length;
        new_words.innerHTML = 'Number of new words: ' + new_card_items.length;
        learned.innerHTML = 'Learned words';
        new_word.innerHTML = 'New words';
    } else {
        choose.innerHTML = 'English -> Hungarian';
        enter.innerHTML = 'Következő';
        new_enter.innerHTML = 'Következő';
        words.innerHTML = 'Megtanult szavak száma: ' + card_items.length;
        new_words.innerHTML = 'Új szavak száma: ' + new_card_items.length;
        learned.innerHTML = 'Megtanult szavak';
        new_word.innerHTML = 'Új szavak';
    }
}

add_text_to_body();

// create counters
let counter = Math.floor(Math.random() * (card_items.length));

let new_counter = Math.floor(Math.random() * (new_card_items.length));

// add english word to cards and create words counter

choose.addEventListener('click', function(){
    choose_languages = !choose_languages;
    add_text(card_items, card, counter);
    add_text(new_card_items, new_card, new_counter);
})

function add_text(array, card_tag, counter_item){
    if(counter_item < array.length){
        if (choose_languages === false) {
            card_tag.innerHTML = array[counter_item].english;
        }else{
            card_tag.innerHTML = array[counter_item].hungarian;
        }
        add_text_to_body();
    }
}

add_text(card_items, card, counter);
add_text(new_card_items, new_card, new_counter);

// add new word to cards
function add_new_word(array){
    if(array === new_card_items){
        if (rotate === true) {
            rotate = false;
        }
        new_card_items = new_card_items.filter(item => item != new_card_items[new_counter]);
        if(new_card_items.length === 0){
            new_card_items = new_card_items_load;
        }
        new_card.style.boxShadow = '5px 5px 15px #7c1b1b';
        new_counter = Math.floor(Math.random() * (new_card_items.length));
        add_text(new_card_items, new_card, new_counter, new_words, 'Új szavak száma: ');
        new_card.style.pointerEvents = 'auto';
    }else if (array === card_items) {
        if (rotate === true) {
            rotate = false;
        }
        card_items = card_items.filter(item => item != card_items[counter]);
        if(card_items.length === 0){
            card_items = card_items_load;
        }
        card.style.boxShadow = '5px 5px 15px #7c1b1b';
        counter = Math.floor(Math.random() * (card_items.length));
        add_text(card_items, card, counter, words, 'Szavak száma: ');
        card.style.pointerEvents = 'auto';
    }
}

enter.addEventListener('click', function(){
    add_new_word(card_items);
})

new_enter.addEventListener('click', function(){
    add_new_word(new_card_items);
})


// add hungarian/english word to cards
let rotate = false;

function change_hungarian(card_items, array, counter_item, button){

    if (rotate === true) {
        card_items.style.transform = 'rotateY(180deg)';
        card_items.style.transitionDuration = '1s';
        card_items.innerHTML= '';
        button.style.pointerEvents = 'none';
        card_items.style.pointerEvents = 'none';
    setTimeout(() => {
        card_items.style.pointerEvents = 'auto';
        button.style.pointerEvents = 'auto';
        card_items.style.transform = 'rotateY(0deg)';
        card_items.style.transitionDuration = '0s';
        card_items.style.boxShadow = '5px 5px 15px #7c1b1b';
        if (choose_languages === false) {
            card_items.innerHTML= array[counter_item].english;
        }else{
            card_items.innerHTML= array[counter_item].hungarian;
        }
        rotate = !rotate;
    }, 1000);
    } else {
        card_items.style.transform = 'rotateY(180deg)';
        card_items.style.transitionDuration = '1s';
        card_items.innerHTML= '';
        button.style.pointerEvents = 'none';
        card_items.style.pointerEvents = 'none';
    setTimeout(() => {
        button.style.pointerEvents = 'auto';
        card_items.style.pointerEvents = 'auto';
        card_items.style.transform = 'rotateY(0deg)';
        card_items.style.transitionDuration = '0s';
        card_items.style.boxShadow = '-5px 5px 15px #7c1b1b';
        if (choose_languages === false) {
            card_items.innerHTML= array[counter_item].hungarian;
        }else{
            card_items.innerHTML= array[counter_item].english;
        }
        rotate = !rotate;
    }, 1000);
    }
}

card.addEventListener('click', function(){
    change_hungarian(card, card_items, counter, enter);
});

new_card.addEventListener('click', function(){
    change_hungarian(new_card, new_card_items, new_counter, new_enter);
});