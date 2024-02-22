// quicksort high-level description
// 1. choose a pivot element
// 2. partition the array to that pivot
// 3. recursive calls
    //3a. recursively sort everything to the left of the array
    //3b. recursively sort  the right


// partitioning a pivot bigO(n) linear time, no extra memory
// picking one element in our array to become the pivot (usually the middle)


// pseudocode for partition
// (called recursively inside the quicksort algo)
// func Partition (A, left, right) [input = A [l, ...r]]
    // pivot = A[left],  we initialize the pivot to be the first element
    // i = left + 1, value of i will be the next index after left
    // for-loop j = left + 1 all the way to right
        // if A[j] is less than the pivot
            // swap A[j] and A[i]
            // i++
    // swap A[left] and A[i-1] 

// by definition, partitioning guarantees the pivot will be in the correct place



// rearrange the array such that 
// everything less than the pivot is in the left side
// everything greater is to the right of the pivot
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

module.exports = quickSort