/*
Given a large array of integers and a window of size w,
find the current maximum value in the window as the
window slides through the entire array.
*/

function getCurrentWindowMax(window) {
  while (window.length > 1) {
    const firstNumber = window[0];
    const lastNumber = window[window.length - 1];

    firstNumber > lastNumber ? window.pop() : window.shift();
  }

  return window[0];
}

function findMaxSlidingWindow(array, windowSize) {
  const maximums = [];
  const invalidInput = array.length === 0 || windowSize > array.length;

  if (invalidInput) return maximums;

  for (let index = 0; index <= array.length - windowSize; index++) {
    const currentWindow = array.slice(index, index + windowSize);
    const currentWindowMax = getCurrentWindowMax(currentWindow);

    maximums.push(currentWindowMax);
  }

  return maximums;
}

console.log(findMaxSlidingWindow([-4, 2, -5, 3, 6], 3));
// [2, 3, 6]
