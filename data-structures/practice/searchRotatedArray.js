/*
Search for a given number in a sorted array that has been rotated
by some arbitrary number.
*/

function binarySearchRotated(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const leftValue = array[leftIndex];
    const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const middleValue = array[middleIndex];
    const rightValue = array[rightIndex];

    if (middleValue === target) return middleIndex;

    if (leftValue <= middleValue) {
      const targetGreaterThanLeftAndLessThanMiddle = target >= leftValue && target < middleValue;
      
      if (targetGreaterThanLeftAndLessThanMiddle) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    } else {
      const targetGreaterThanMiddleAndLessThanRight = target > middleValue && target <= rightValue;

      if (targetGreaterThanMiddleAndLessThanRight) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  }

  return -1;
}

console.log(binarySearchRotated([176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162], 200));
// 3