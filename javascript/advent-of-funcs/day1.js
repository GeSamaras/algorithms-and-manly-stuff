// fetch the puzzle input instead of hardcoding it
const summonPuzzleInput = async () => {
    // since this call is async, it will return a promise
    const response = await fetch("https://adventofcode.com/2022/day/1/input");
    const responseText = await response.text();
    return responseText;
};

const puzzleInput = await summonPuzzleInput();


// function used for convinience to sum the .reduce method
// reduce takes the entire array and compresses it into a single value
// the first argument is the function that will be used to compress the array
// the second argument is the initial value of the sum
const sumReducer = (sum, num) => sum + num; 


// breaking down the group input into their individual strings first
// .map to convert that into an array
// .reduce to sum the array
const getSumOfGroup = (group) => 
    group
        .split("\n")
        .map(Number) // parses the strings into numbers
        .reduce(sumReducer, 0); // adds the array together


// most advent of code puzzles are strings
// using .split is pretty much a given
const numberGroups = puzzleInput.split("\n\n");

// sum of each group
const groupSums = numberGroups.map(getSumOfGroup);

// largest sum
// since its an array of values, we can use the spread operator to get the max value
const maxSum = Math.max(...groupSums); 


//Part 2, finding the top 3 sums

// spread operator to make a copy of the array
const sortedSums = [...groupSums].sort((num1, num2) => num2 - num1);


// using slice to get the top 3 sums
// first index is inclusive, second index is exclusive (0, 2) doesn't work
const top3Sums = sortedSums.slice(0, 3);


const sumOfTop3 = top3Sums.reduce(sumReducer, 0);


console.log(sumOfTop3); 