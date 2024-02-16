// fetch the puzzle input instead of hardcoding it
const summonPuzzleInput = async () => {
    // since this call is async, it will return a promise
    const response = await fetch("https://adventofcode.com/2022/day/1/input");
    const responseText = await response.text();
    return responseText;
};

const puzzleInput = await summonPuzzleInput();

const sumReducer = (sum, num) => sum + num;

const getSumOfGroup = (group) => 
    group
        .split("\n")
        .map(Number)
        .reduce(sumReducer, 0);

const numberGroups = puzzleInput.split("\n\n");

// sum of each group
const groupSums = numberGroups.map(getSumOfGroup);

// largest sum
const maxSum = Math.max(...groupSums);


//Part 2, finding the top 3 sums

// spread operator to make a copy of the array
const sortedSums = [...groupSums].sort((num1, num2) => num2 - num1);


// using slice to get the top 3 sums
// first index is inclusive, second index is exclusive (0, 2) doesn't work
const top3Sums = sortedSums.slice(0, 3);


const sumOfTop3 = top3Sums.reduce(sumReducer, 0);


console.log(sumOfTop3); 