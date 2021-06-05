/*
Given a sorted array of integers, return the low and high index of the given key.
*/

// initial approach
// After some thought - despite being O(n), this approach is not efficient.
// Suggested approach uses binary search, which is O(logn)
function keysAndIndices(array, key) {
  const indices = [];

  array.forEach((number, index) => {
    if (number === key) {
      indices.push(index);
    }
  })

  return indices;
}

let findLowIndex = function(arr, key) {
  const resultArray = keysAndIndices(arr, key);
  
  return resultArray.length ? resultArray[0] : -1;
};

let findHighIndex = function(arr, key) {
  const resultIndices = keysAndIndices(arr, key);

  return resultIndices.length ? resultIndices[resultIndices.length - 1] : -1;
};

const input = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
const key = 8;

console.log(findLowIndex(input, key));

console.log(findHighIndex(input, key));
