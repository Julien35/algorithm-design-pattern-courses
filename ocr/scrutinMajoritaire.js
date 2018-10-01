/* Enoncé :

1) Chaque candidat a une mention entre Excellent et A rejeter.

2) La mention majoritaire de chaque candidat est calculée sur une médiane
et non sur une moyenne.
50% au moins des votants trouvent cette mention valable.

3) En cas d'égalité de mentions majoritaires : celle ou celui ayant
le pourcentage de mentions supérieures à la mention majoritaire le plus important
est le mieux classé.

Mentions :
Excellent [0]
Très bien [1]
Bien [2]
Assez Bien [3]
Passable [4]
Insuffisant [5]
A rejeter [6]
 */


// the initial seed
Math.seed = 6;

// in order to work 'Math.seed' must NOT be undefined,
// so in any case, you HAVE to provide a Math.seed
Math.seededRandom = function (min, max) {
    max = max || 1;
    min = min || 0;

    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;

    return min + rnd * (max - min);
};

//////////////////////////////////////////////////
//////////////////// VOTES SETUP /////////////////
//////////////////////////////////////////////////

const VOTES = 100000;
const MEDIAN = VOTES / 2;

let CANDIDATES = {
    "hermione": "Hermione Granger",
    "balou": "Balou",
    "chuck-norris": "Chuck Norris",
    "elsa": "Elsa",
    "gandalf": "Gandalf",
    "beyonce": "Beyoncé"
};

let MENTIONS = [
    "A rejeter",
    "Insuffisant",
    "Passable",
    "Assez Bien",
    "Bien",
    "Très bien",
    "Excellent"
];

function createVotes(votesNumber) {
    let votes = [];

    for (let i = 0; i < votesNumber; i++) {
        votes.push({
            "hermione": Number.parseInt(Math.seededRandom(3, 6), 10),
            "balou": Number.parseInt(Math.seededRandom(0, 6), 10),
            "chuck-norris": Number.parseInt(Math.seededRandom(0, 2), 10),
            "elsa": Number.parseInt(Math.seededRandom(1, 2), 10),
            "gandalf": Number.parseInt(Math.seededRandom(3, 6), 10),
            "beyonce": Number.parseInt(Math.seededRandom(2, 6), 10)
        });
    }

    return votes;
}

//////////////////////////////////////////////////
//////////////////// FUNCTIONS ///////////////////
//////////////////////////////////////////////////
// Gagnant : Hermione avec 70% de mentions Bien
// Suivants :
// - Balou avec 50% de mentions bien
// - Chuck Norris avec 50% de mentions assez bien
// - Elsa avec 70% de mentions passable
// - Gandalf avec 60% de mentions passable
// - Beyoncé avec 50% de mentions à rejeter

function resultHash(votes) {
    
}


//////////////////////////////////////////////////
//////////////////// MAIN FUNCTION ///////////////
//////////////////////////////////////////////////
votes = createVotes(VOTES);
// console.log(votes);

// nombres de votes par mentions index 0 à rejeter, index 1 à insuffisant...
candidates = {
    'hermione': [0, 0, 0, 0, 0, 0, 0],
    'balou': [0, 0, 0, 0, 0, 0, 0],
    'chuck-norris': [0, 0, 0, 0, 0, 0, 0],
    'elsa': [0, 0, 0, 0, 0, 0, 0],
    'gandalf': [0, 0, 0, 0, 0, 0, 0],
    'beyonce': [0, 0, 0, 0, 0, 0, 0]
};

