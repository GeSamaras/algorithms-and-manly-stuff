const getPuzzleInput = async () => {
    const response = await fetch ('https://adventofcode.com/2022/day/4/input');
    const responseText = await response.text();
    return responseText.trim();
} 

const samplePair = `2-4, 6-8`

const parseRangePair = (rangePair) => {
    const [start1, end1, start2, end2] = rangePair
        .match(/(\d+)-(\d+), (\d+)-(\d+)/)
        .slice(1)
        .map(Number);
    return [start1, end1, start2, end2];
}


const checkContaining = ([start1, end1, start2, end2]) =>
    (start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1);

    const coordinates = ranges.map(parseRangePair);
    const containing = coordinates.filter(checkContaining);
    const containingCount = containing.length;




console.log(containingCount)