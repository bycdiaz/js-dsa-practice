/*
Given an integer array, move all elements that are 0 to the left while
maintaining the order of other elements in the array. The array has to
be modified in-place.
*/

// initial approach
// function moveZerosToLeft(array) {
//   let zerosObserved = 0;

//   for (let index = 0; index < array.length; index++) {
//     const currentNumber = array[index];

//     if (currentNumber === 0) {
//       zerosObserved++;
//       array.splice(index, 1);
//     }
//   }

//   array.unshift(...new Array(zerosObserved).fill(0))
  
//   return array;
// };

// recommended approach
function moveZerosToLeft(array) {
  let readIndex = array.length - 1;
  let writeIndex = array.length - 1;

  while (readIndex >= 0) {
    if (array[readIndex] !== 0) {
      array[writeIndex] = array[readIndex];
      writeIndex--;
    }

    readIndex--;
  }

  while (writeIndex >= 0) {
    array[writeIndex] = 0;
    writeIndex--;
  }

  return array;
};

console.log(moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]));
// [ 0,  0,  0,  1, 10, 20, 59, 63, 88 ]
