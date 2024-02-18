const getPuzzleInput = async (day) => {
    const response = await fetch(`https://adventofcode.com/2022/day/${day}/input`);
    const responseText = await response.text();
    return responseText.trim();
};

const puzzleInput = await getPuzzleInput(3);


const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const rucksacks = sampleInput.split('\n');

const campleRucksack = rucksacks[0];

const findCommonItem = (rucksack) => {
    const halfIndex = rucksack.length / 2;
    const [firstHalf, secondHalf] = [
        rucksack.slice(0, halfIndex), 
        rucksack.slice(halfIndex)
    ];

    const firstHalfSet = new Set(firstHalf);

    const commonItems = [...secondHalf].find(item => 
        firstHalfSet.has(item)
    );
    return commonItems[0];
}

const getItemPrio = (item) => 
    /[a-z]/.test(item) ? item.charCodeAt() - 96 : item.charCodeAt() - 64 + 26;


const prioritySum = rucksacks
    .map(findCommonItem)
    .map(getItemPrio)
    .reduce((sum, prio) => sum + prio, 0);

console.log(rucksacks);