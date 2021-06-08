// Given an array of integers, rotate the array by 'N' elements.

// initial solution
function rotateArray(array, rotationFactor) {
  let numberOfOverflow = rotationFactor;
  const overflowNumbers = [];

  if (rotationFactor > 0) {
    for (let index = array.length - 1; index >= 0; index--) {
      if (numberOfOverflow) {
        overflowNumbers.push(array[index]);

        numberOfOverflow--;
      }

      const numberToShift = array[index - rotationFactor];
      array[index] = numberToShift;
    }

    for (let index = 0; index < rotationFactor; index++) {
      array[index] = overflowNumbers.pop();
    }
  } else {
    for (let index = 0; index < array.length; index++) {
      if (numberOfOverflow !== 0) {
        overflowNumbers.push(array[index]);

        numberOfOverflow++;
      }

      const numberToShift = array[index + Math.abs(rotationFactor)];
      array[index] = numberToShift;
    }

    for (let index = array.length - 1; index >= array.length + rotationFactor; index--) {
      array[index] = overflowNumbers.pop();
    }
  }

  return array;
};

console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
// [9, 40, 1, 10, 20, 0, 59, 86, 32, 11]

console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -2));
// [20, 0, 59, 86, 32, 11, 9, 40, 1, 10]
