const mergeSort = require('./merge-Sort.js');

describe('Merge Sort', () => {
  test('Sorts an array of integers in ascending order', () => {
    // Example input
    const input = [12, 11, 13, 5, 6, 7];
    // Expected output after sorting
    const expectedOutput = [5, 6, 7, 11, 12, 13];

    // Sorting the input array
    const sortedArray = mergeSort(input);

    // Check if the input array is sorted correctly
    expect(sortedArray).toEqual(expectedOutput);
  });

  test('Sorts an array of negative integers and zeros', () => {
    // Example input
    const input = [-4, 0, -9, -1, -3];
    // Expected output after sorting
    const expectedOutput = [-9, -4, -3, -1, 0];

    // Sorting the input array
    const sortedArray = mergeSort(input);

    // Check if the input array is sorted correctly
    expect(sortedArray).toEqual(expectedOutput);
  });

  test('Sorts an array with repeated elements', () => {
    // Example input
    const input = [3, 1, 2, 1, 3, 2];
    // Expected output after sorting
    const expectedOutput = [1, 1, 2, 2, 3, 3];

    // Sorting the input array
    const sortedArray = mergeSort(input);

    // Check if the input array is sorted correctly
    expect(sortedArray).toEqual(expectedOutput);
  });

  test('Sorts an already sorted array', () => {
    // Example input
    const input = [1, 2, 3, 4, 5];
    // Expected output (should remain the same after sorting)
    const expectedOutput = [1, 2, 3, 4, 5];

    // Sorting the input array
    const sortedArray = mergeSort(input);

    // Check if the input array is sorted correctly
    expect(sortedArray).toEqual(expectedOutput);
  });
});
