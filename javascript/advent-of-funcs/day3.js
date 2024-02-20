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


// convert alphabet to number
// lowercase a through z gets subtracted by 96
// otherwise uppercase A through Z gets subtracted by 64 
const getItemPrio = (item) => 
    /[a-z]/.test(item) ? item.charCodeAt() - 96 : item.charCodeAt() - 64 + 26;


const prioritySum = rucksacks
    .map(findCommonItem)
    .map(getItemPrio)
    .reduce((sum, prio) => sum + prio, 0);


// returns a slice of 3 elements from the array
// and the elements that are left will be sliced again
const getGroupsOf3 = (arr) => 
    // if array is empty, return an empty array
    // else return the first 3 elements and the rest of the array, recursively
    arr.length ? [arr.slice(0, 3), ...getGroupsOf3(arr.slice(3))] : [];

const findHalfSet = new Set (firstHalf);

const commonItem = [...secondHalf].find((item) => firstHalfSet.has(item));


const findCommonItemInGroupOf3 = ([sack1, sack2, sack3]) => {
    const [set1, set2] = [new Set(sack1), new Set(sack2)];

    const commonItem = [...sack3].find(
        (item) => set1.has(item) && set2.has(item)
    );
    return commonItem;
};


const prioritySumOfGroups = getGrouopsOf3(rucksacks)
    .map(findCommonItemInGroupOf3)
    .map(getItemPriority)
    .reduce((sum, prio) => sum + prio, 0);

console.log();