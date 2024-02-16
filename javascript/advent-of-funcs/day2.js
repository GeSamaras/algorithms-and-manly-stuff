const getPuzzleInput = async () => {
    const response = await fetch("https://adventofcode.com/2022/day/2/input");
    const responseText = await response.text();
    return responseText.trim();
};

const puzzleInput = await getPuzzleInput();

// the input has to columns separated by a space
// player 1 is ABC player 2 is XYZ (rock, paper, scissors, in this order)

const sampleInput = `A Y
B X
C Z`;

// RPS logic
const sampleGame = 'A Y';


const gameValues = {
    A: { X: 3, Y: 6, Z: 0 },
    B: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 }
};


const moveValues = { X: 1, Y: 2, Z: 3 };

const playGame = (game) => {
    const [ oppponentMove, yourMove ] = game.split(" ");

    // win, lose or draw results
    const gameScore = gameValues[yourMove][oppponentMove];

    // get the score for the move 
    const moveScore = moveValues[yourMove];

    // adding the scores
    return gameScore + moveScore;
}

const games = sampleInput.split("\n");
const scores = games.map(playGame);

const totalScore = scores.reduce(sumReducer, 0);


const requireMoves = {
    A: { X: "S", Y: "R", Z: "P" },
    B: { X: "R", Y: "P", Z: "S" },
    C: { X: "P", Y: "S", Z: "R" }
}

const actualMoveValues = { R: 1, P: 2, S: 3 };

const actualGameValues = { X: 0, Y: 3, Z: 6 };

const getActualScore = (game) => {
    const [ opponentMove, gameOutcome ] = game.split(" ");

    const yourMove = requireMoves[opponentMove][gameOutcome];
    const gameScore = actualGameValues[gameOutcome];
    const moveScore = actualMoveValues[yourMove];

    return gameScore + moveScore;
}

const actualScores = games.map(getActualScore);
const actualTotalScore = actualScores.reduce(sumReducer, 0);


const sumReducer = (sum, num) => sum + num;

console.log(actualTotalScore);