const numberGroups = smapleInput.split("\n").map(Number);

const sampleGroup = "1721\n979\n366\n299\n675\n1456";

const getSumOfGroup = (group) => 
    group
        .split("\n")
        .map(Number)
        .reduce((sum, num) => sum + num, 0);

console.log(getSumOfGroup(sampleGroup)); // 4678