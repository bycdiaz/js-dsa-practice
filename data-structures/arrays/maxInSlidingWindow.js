/*
Given a large array of integers and a window of size w,
find the current maximum value in the window as the
window slides through the entire array.
*/

// My initial solution
function findMaxSlidingWindow(array, windowSize) {
  const maximums = [];
  
  for (let index = 0; index < (array.length - windowSize + 1); index++) {
    const currentWindow = array.slice(index, index + windowSize);
    const currentMax = Math.max(...currentWindow);
    maximums.push(currentMax);
  }

  return maximums;
};

console.log(findMaxSlidingWindow([-4, 2, -5, 3, 6], 3));
// [2, 3, 6]
