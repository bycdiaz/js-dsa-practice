/*
Given a large array of integers and a window of size w,
find the current maximum value in the window as the
window slides through the entire array.
*/

// My initial solution - runtime of N^2
// function findMaxSlidingWindow(array, windowSize) {
//   const maximums = [];
  
//   for (let index = 0; index < (array.length - windowSize + 1); index++) {
//     const currentWindow = array.slice(index, index + windowSize);
//     const currentMax = Math.max(...currentWindow);
//     maximums.push(currentMax);
//   }

//   return maximums;
// };

// console.log(findMaxSlidingWindow([-4, 2, -5, 3, 6], 3));
// [2, 3, 6]

// Suggested solution
let ffindMaxSlidingWindow = function(array, windowSize) {
  const result = [];
  const window = [];

  if(array.length == 0) return result;
  if (windowSize > array.length) return result;
  
  //find out max for first window
  for (let index = 0; index < windowSize; index++) {
    const currentNumber = array[index];
    const lastInCurrentWindow = array[window[window.length - 1]];

    while (window.length > 0 && currentNumber >= lastInCurrentWindow) {
      window.pop();
    } 
    window.push(index);
  }
  
  result.push(array[window[0]])
  
  for (let index = windowSize; index < array.length; index++) {
    const currentNumber = array[index];
    const lastInCurrentWindow = array[window[window.length - 1]];

    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window.length > 0 && currentNumber >= lastInCurrentWindow) {
      window.pop();
    }

    //remove first number if it doesn't fall in the window anymore
    if (window.length > 0 && (window[0] <= index - windowSize)) {
      window.shift();
    }
    
    window.push(index);
    result.push(array[window[0]]);
  }

  return result;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max = " + ffindMaxSlidingWindow(array, 3));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67]  
console.log("Array = " + array1);
console.log("Max = " + ffindMaxSlidingWindow(array1, 3));