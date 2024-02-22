const getPuzzleInput = async () => {
    const getPuzzle = await fetch("https://adventofcode.com/2022/day/1/input")
    const responseText = await getPuzzle.text()
    return responseText
}

const puzzleInput = await getPuzzleInput()


// map and sum up each group
const sumOfCalories = (group) => { 
    const splitStrList = group.split('\n')
    // all the groups are still strings, .map(Number) to parse them into ints
    const mapGroups = splitStrList.map(Number)
    const sumEachGroup = mapGroups.reduce((sum, num) => sum + num, 0);
    
    return sumEachGroup;
}

// separate the numbers into their respective groups
const splitGroups = puzzleInput.split('\n\n')

const groupingNumbers = splitGroups.map(sumOfCalories) 

const maxCalories = Math.max(...groupingNumbers)


console.log(maxCalories)

