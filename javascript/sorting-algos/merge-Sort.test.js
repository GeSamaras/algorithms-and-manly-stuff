const mergeSort = require('./merge-Sort.js');



describe('Merge Sort', () => {
  test('Sorts an array of integers in ascending order', () => {
    const input = [12, 11, 13, 5, 6, 7];
    const expectedOutput = [5, 6, 7, 11, 12, 13];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });

  test('Sorts an array of negative integers and zeros', () => {
    const input = [-4, 0, -9, -1, -3];
    const expectedOutput = [-9, -4, -3, -1, 0];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });

  test('Sorts an array with repeated elements', () => {
    const input = [3, 1, 2, 1, 3, 2];
    const expectedOutput = [1, 1, 2, 2, 3, 3];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });

  test('Sorts an already sorted array', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];

    const sortedArray = mergeSort(input);

    expect(sortedArray).toEqual(expectedOutput);
  });
});
