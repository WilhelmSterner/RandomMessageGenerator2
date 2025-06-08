
//Funktion för att generera en slumpmässig siffra
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

//Objekt med olika strängar lagrat i tre eller fler arrayer
const collectedWords = {
    adVerb: ["glada", "ledsna", "stora", "minimala", "snabba", "långsamma", "intressanta", "tråkiga", "vackra", "fula", "intelligenta", "dumma", "kloka", "galna", "roliga", "seriösa"],
    
    animal: ["igelkotten", "lejonet", "björnen", "räven", "elefanten", "tigern", "hunden", "katten", "fisken", "fågeln", "ormen", "spindeln", "kaninen", "hästen", "råttan", "sköldpaddan"],

    verb: ["springer", "hoppar", "dansar", "sjunger", "pratar", "skrattar", "gråter", "äter", "sover", "lär sig", "tänker", "drömmer", "jagar", "fångar", "bygger", "förstör"],

    place: ["skogen", "teatern", "savannen", "parken", "sjön", "berget", "staden", "byn", "skolan", "affären", "biblioteket", "restaurangen", "hemmet", "kontoret", "trädgården"],
};


//Skapa en array för att lagra de anpassade strängarna
const customStrings = [];


//Loop som kollar igenom objektet och skriver ut de anpassade strängarna i konsolen
function getRandomWords() {
    for (const key in collectedWords){

        //Genererar en slumpmässig siffra för att välja ett ord från varje array
        const randomIndex = getRandomNumber(collectedWords[key].length);
        
        //Spara den anpassade strängen i customStrings arrayen med det slumpmässigt valda ordet
        customStrings.push(collectedWords[key][randomIndex]);
       
    }
}
getRandomWords();
console.log(customStrings);
const answerString = `Den ${customStrings[0]} ${customStrings[1]} ${customStrings[2]}  i ${customStrings[3]}.`;

console.log(answerString);
