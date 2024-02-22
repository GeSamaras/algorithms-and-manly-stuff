const quickSort = require('./quicksort.js')


describe('QuickSort', () => {
    it('should sort an array of numbers', () => {
      const unsortedArray = [5, 3, 7, 2, 9, 1, 6, 4, 8];
      const sortedArray = quickSort(unsortedArray);
      expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  
    it('should handle empty array', () => {
      const emptyArray = [];
      const sortedArray = quickSort(emptyArray);
      expect(sortedArray).toEqual([]);
    });
  
    it('should handle array with one element', () => {
      const singleElementArray = [42];
      const sortedArray = quickSort(singleElementArray);
      expect(sortedArray).toEqual([42]);
    });
  
    it('should sort a large array', () => {
      const unsortedArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
      const sortedArray = quickSort(unsortedArray);
      for (let i = 0; i < sortedArray.length - 1; i++) {
        expect(sortedArray[i] <= sortedArray[i + 1]).toBeTruthy();
      }
    });
  });