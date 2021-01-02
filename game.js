
const game = [
    // Hoofdstuk 1
    {
        id: `start`,
        text: `A-man de game, door Alexander`,
        prompt: `Hoodfstuk 1: de hot-dog`,
        choices: [
            { target: 'hotdog-verkoper', text: 'Begin' },
        ]
    },
    {
        id: `hotdog-verkoper`,
        text: `A-man loopt een eindje om. Dan ziet hij ineens een hot-dog verkoper. Zijn maag begint te rammelen.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'hotdog-kopen', text: 'Koop hot-dog' },
            { target: 'loop-verder', text: 'Loop verder' },
        ]
    },
    {
        id: `loop-verder`,
        text: `A-man loopt wat verder, ziet een wrap verkoper. Zijn maag rammelt luider.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'hotdog-kopen', text: 'Loop terug naar hot-dog verkoper' },
        ]
    },
    {
        id: `hotdog-kopen`,
        text: `Hot-dog verkoper zegt dan: "dat kost twee euro".`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'geef-twee-euro', text: 'Geef hem 2 euro' },
            { target: 'pak-hot-dog-en-smeer-hem', text: 'Pak de hot-dog en smeer hem' },
            { target: 'pak-hot-dog-en-smijt-euro', text: 'Pak de hot-dog en smijt 1 euro in losse muntjes op de balie en smeer hem' },
        ]
    },
    {
        id: `geef-twee-euro`,
        text: `A-man opent zijn portomonee, ai, alles bij elkaar opgeteld heeft hij maar 1 euro aan losse muntjes.`,
        prompt: `Wat nu?`,
        choices: [
            { target: 'pak-hot-dog-en-smeer-hem', text: 'Pak de hot-dog en smeer hem' },
            { target: 'pak-hot-dog-en-smijt-euro', text: 'Pak de hot-dog en smijt 1 euro in losse muntjes op de balie en smeer hem' },
        ]
    },
    {
        id: `pak-hot-dog-en-smeer-hem`,
        text: `A-man word met een reuzen robotarm gepakt en teruggehaald. "Hé gast, je moet wel betalen" zegt de verkoper.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'geef-twee-euro', text: 'Geef hem 2 euro' },
            { target: 'pak-hot-dog-en-smijt-euro', text: 'Pak de hot-dog en smijt 1 euro in losse muntjes op de balie en smeer hem' },
        ]
    },
    {
        id: `pak-hot-dog-en-smijt-euro`,
        text: `De verkoper pakt het geld en telt het na. A-man is de hoek van de straat al om tegen de tijd dat de verkoper erachter komt dat het te weinig is.`,
        prompt: ``,
        choices: [
            { target: 'koets', text: 'Verder' },
        ]
    },
    {
        id: `koets`,
        text: `A-man wil een hap van zijn hot-dog nemen wanneer er opeens een koets, die door draken getrokken wordt, langsscheurd. Hij staart de koets na en merkt dan dat zijn hot-dog gejat is.`,
        prompt: ``,
        choices: [
            { target: 'koningin', text: 'Verder' },
        ]
    },
    {
        id: `koningin`,
        text: `Degene die in de koets zit, is de koningin der heksen. Ze roept "doei mislukkeling, en bedankt voor de hot-dog" naar A-man.`,
        prompt: ``,
        choices: [
            { target: 'hoofdstuk-2', text: 'Verder' },
        ]
    },
    // Hoofdstuk 2
    {
        id: `hoofdstuk-2`,
        text: `Hoodfstuk 2: de achtervolging`,
        prompt: ``,
        choices: [
            { target: 'achtervolging', text: 'Verder' },
        ]
    },
    {
        id: `achtervolging`,
        text: `A-man rent achter de koets aan. Hij komt bij een kruispunt.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'krachtveld', text: 'Ga links' },
            { target: 'weg', text: 'Ga rechts' },
            { target: 'gifpoel', text: 'Ga rechtdoor' },
        ]
    },
    {
        id: `krachtveld`,
        text: `A-man botst tegen een krachtveld en vliegt achteruit. A-man loopt toch maar een andere kant op.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'weg', text: 'Ga rechts' },
            { target: 'gifpoel', text: 'Ga rechtdoor' },
        ]
    },
    {
        id: `gifpoel`,
        text: `Een poel met gif blokkeerd de weg. A-man besluit een andere kant op te gaan.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'krachtveld', text: 'Ga links' },
            { target: 'weg', text: 'Ga rechts' },
        ]
    },


    {
        id: `weg`,
        text: `Na een poosje lopen ziet A-man een man aan de rand van de weg staan. Hij heeft een donkerblauw gewaad aan. En een donkerrode kap bedekt zijn gezicht.`,
        prompt: ``,
        choices: [
            { target: 'snurken', text: 'Verder' },
        ]
    },

    {
        id: `snurken`,
        text: `Wanneer A-man dichterbij komt, hoort hij snurk geluiden. A-man ziet ook een emmer bij een sloot staan.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'water-over-hoofd', text: 'Je vult de emmer met water en gooit hem leeg over het hoofd van de man.' },
            { target: 'schudden', text: 'Je schudt de man flink door elkaar' },
            { target: 'roeien-met-emmer', text: 'Je stapt in de emmer en probeert de overkant van de sloot te bereiken' },
        ]
    },

    {
        id: `schudden`,
        text: `De man snurkt rustig verder...`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'water-over-hoofd', text: 'Je vult de emmer met water en gooit hem leeg over het hoofd van de man.' },
            { target: 'roeien-met-emmer', text: 'Je stapt in de emmer en probeert de overkant van de sloot te bereiken' },
        ]
    },


    {
        id: `roeien-met-emmer`,
        text: `A-man besluit dat de emmer toch te klein is om met hem te blijven drijven.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'water-over-hoofd', text: 'Je vult de emmer met water en gooit hem leeg over het hoofd van de man.' },
            { target: 'schudden', text: 'Je schudt de man flink door elkaar' },
        ]
    },

    {
        id: `water-over-hoofd`,
        text: `De man ontwaakt en springt op. Hij doet een stap opzij en laat A-man iets zien. "Kijk, zie je die sloot. Zou je naar de overkant willen zwemmen?" zegt hij.`,
        prompt: `Wat zeg je?`,
        choices: [
            { target: 'mafkees', text: 'Ben je gek mafkees, dat water is hartstikke koud!' },
            { target: 'zwemmen', text: 'Ja hoor, lekker stukkie borst-crawlen' },
        ]
    },
    {
        id: `mafkees`,
        text: `De man zegt "Dan laat ik je niet verder gaan".`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'zwemmen', text: 'Zeg "Vooruit, dan maar een lekker stukkie borst-crawlen"' },
        ]
    },

    {
        id: `zwemmen`,
        text: `A-man zwemt door de sloot. De man stapt aan de kant en laat A-man verder gaan.`,
        prompt: ``,
        choices: [
            { target: 'waterpoel', text: 'Volg het pad' },
        ]
    },
    {
        id: `waterpoel`,
        text: `A-man vervolgt zijn pad. Opeens valt hij in een poel met water. Naja, ik was toch al nat denkt hij. De stroming is sterk.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'terug-op-de-kant', text: 'Ga snel terug naar de kant' },
            { target: 'verdrink', text: 'Zwem stug door' },
        ]
    },
    {
        id: `verdrink`,
        text: `A-man ploetert tegen de stroming. Uiteindelijk krijgt hij kramp en verdrinkt.`,
        prompt: `GAME OVER`,
        choices: [
            { target: 'start', text: 'Opnieuw spelen' },
        ]
    },
    {
        id: `terug-op-de-kant`,
        text: `Hij klautert uit de poel en ziet dan een man aan de andere kant van de oever staan.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'vraag-touw', text: 'Vraag de man of hij een touw wil aanreiken zodat je kan oversteken' },
            { target: 'verdrink', text: 'Probeer nog eens naar de overkant te zwemmen' },
        ]
    },
    {
        id: `vraag-touw`,
        text: `De man zegt "Natuurlijk geef ik je een touw. Als jij het eerst aan mij geeft.".`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'pech', text: 'Zeg "Ja zeg, moet ik nu eerst uren een touw gaan zoeken?"' },
            { target: 'kijk-in-broekzak', text: 'Kijk in je broekzak' },
        ]
    },
    {
        id: `pech`,
        text: `De man zegt: "Pech voor jou dan, zonder touw kan ik je niet helpen.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'kijk-in-broekzak', text: 'Kijk in je broekzak' },
        ]
    },
    {
        id: `kijk-in-broekzak`,
        text: `A-man pakt een touw uit zijn broekzak en gooit het naar de man. De man zegt "Bedankt, nu kan ik eindelijk mijn kabelbaan maken.". Hij knoopt het ene einde aan een boom en werpt het andere eind terug naar A-man.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'trek-aan-touw', text: 'Trek jezelf aan het touw naar de overkant' },
            { target: 'kabelbaan', text: 'Knoop het touw aan een rots' },
        ]
    },
    {
        id: `kabelbaan`,
        text: `A-man knoopt het touw aan een rots en loopt erover richting de overkant.`,
        prompt: ``,
        choices: [
            { target: 'hoofdstuk-3', text: 'Verder' },
        ]
    },
    {
        id: `trek-aan-touw`,
        text: `A-man trekt zichzelf door het water en modder naar de overkant.`,
        prompt: ``,
        choices: [
            { target: 'hoofdstuk-3', text: 'Verder' },
        ]
    },
    // Hoofdstuk 3
    {
        id: `hoofdstuk-3`,
        text: `Hoofdstuk 3: de heks`,
        prompt: ``,
        choices: [
            { target: 'het-is-een-heks', text: 'Verder' },
        ]
    },
    {
        id: `het-is-een-heks`,
        text: `Bijna aan andere kant gekomen ziet A-man dat de man die hem hielp geen man is. Sterker nog, het is de koningin der heksen die zijn hot-dog gestolen heeft.`,
        prompt: `A-man kijkt haar aan en zegt:`,
        choices: [
            { target: 'modder', text: 'Ik zal je een afranseling geven!' },
            { target: 'modder', text: 'Ik zal je meenemen om je te laten baden in een poel met krokodillen!' },
        ]
    },
    {
        id: `modder`,
        text: `De koningin der heksen zegt, "Zo zo, er is alleen 1 probleempje." en ze laat het touw los waardoor A-man in de modder valt.`,
        prompt: ``,
        choices: [
            { target: 'uitdaging', text: 'Verder' },
        ]
    },
    {
        id: `uitdaging`,
        text: `A-man ploetert zich uit de modder en zegt: "nu niet meer". De koningin zegt: "dan daag ik je uit voor een gevecht".`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'accepteer-uitdaging', text: 'Neem de uitdaging aan' },
            { target: 'weiger-uitdaging', text: 'Weiger, een hot-dog is het niet waard' },
        ]
    },
    {
        id: `weiger-uitdaging`,
        text: `A-man draait zich om en wil teruglopen. De heks tovert krokodillen in het water en die eten A-man op.`,
        prompt: `GAME OVER`,
        choices: [
            { target: 'start', text: 'Opnieuw spelen' },
        ]
    },
    {
        id: `accepteer-uitdaging`,
        text: `De heks zegt "Laten we beginnen". Ze richt haar toverstaf en schiet een spreuk.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'vis', text: 'Doe een dubbeldraaiende vuistslag' },
            { target: 'roep', text: 'Roep hard "Boe!"' },
        ]
    },
    {
        id: `vis`,
        text: `De heks duikt tussen je vuisten door en tovert A-man om tot een vis.`,
        prompt: `GAME OVER`,
        choices: [
            { target: 'start', text: 'Opnieuw spelen' },
        ]
    },
    {
        id: `roep`,
        text: `De heks schrikt en verliest haar balans. Ze glijdt onderuit in de modder en laat haar staf vallen.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'pak-staf', text: 'Pak de staf' },
            { target: 'bereid-je-voor', text: 'Bereid je voor op de volgende aanval' },
        ]
    },
    {
        id: `pak-staf`,
        text: `De heks weet de staf sneller te pakken. Ze betovert A-man in een insect.`,
        prompt: `GAME OVER`,
        choices: [
            { target: 'start', text: 'Opnieuw spelen' },
        ]
    },
    {
        id: `bereid-je-voor`,
        text: `De heks pakt haar staf en zwaait met haar arm voor een spreuk.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'heks-verslagen', text: 'Spring opzij' },
            { target: 'heks-verslagen', text: 'Buk' },
        ]
    },
    {
        id: `heks-verslagen`,
        text: `De spreuk weerkaast op de rots achter A-man en treft de heks. Ze verandert in een insect. A-man pakt haar op en stopt haar in een potje en zegt "de mazzel".`,
        prompt: ``,
        choices: [
            { target: 'grond-dog', text: 'Verder' },
        ]
    },
    {
        id: `grond-dog`,
        text: `A-man ziet de hot-dog op de grond liggen. Hij raapt hem op.`,
        prompt: `Wat doe je?`,
        choices: [
            { target: 'naar-huis', text: 'Eet op' },
            { target: 'eet-alsnog', text: 'Gooi weg' },
        ]
    },
    {
        id: `naar-huis`,
        text: `A-man klopt het zand eraf en eet hem smakelijk op en gaat terug naar huis.`,
        prompt: `EINDE`,
        choices: [
            { target: 'start', text: 'Opnieuw spelen' },
        ]
    },
    {
        id: `eet-alsnog`,
        text: `A-man voelt zijn maag knorren en besluit de hot-dog toch maar op te eten. Voldaan gaat hij terug naar huis.`,
        prompt: `EINDE`,
        choices: [
            { target: 'start', text: 'Opnieuw spelen' },
        ]
    },
];

const changeToTarget = (target) => {
    const screen = game.find((screen) => screen.id === target);

    const gameContainer = document.querySelector("#game");
    gameContainer.innerHTML = "";

    var template = document.querySelector('#screen');
    var screenNode = template.content.cloneNode(true);
    screenNode.querySelector(".text").textContent = screen.text;
    screenNode.querySelector(".prompt").textContent = screen.prompt;

    const choicesNode = screenNode.querySelector(".choices");
    var choiceTemplate = document.querySelector('#choice');
    screen.choices.forEach(choice => {
        const choiceNode = choiceTemplate.content.cloneNode(true);
        const choiceElem = choiceNode.querySelector(".choice")
        choiceElem.textContent = choice.text;
        choiceElem.addEventListener("click", makeChoice, true);
        choiceElem.dataset.targetId = choice.target;
        choicesNode.appendChild(choiceNode);
    });

    gameContainer.appendChild(screenNode);
}

const makeChoice = (event) => {
    changeToTarget(event.target.dataset.targetId)
}

window.addEventListener('DOMContentLoaded', (event) => {
    var start = `start`;
    if (window.location.hash) {
        start = window.location.hash.substring(1);
    }
    changeToTarget(start);
});