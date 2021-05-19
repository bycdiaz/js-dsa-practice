/*
Given three integer arrays sorted in ascending order, return the smallest
number that is common in all three arrays.
*/

function findLeastCommonNumber(a, b, c) {
  let indexA = 0;
  let indexB = 0;
  let indexC = 0;

  while (indexA <= a.length && indexB <= b.length && indexC <= c.length) {
    const currentA = a[indexA];
    const currentB = b[indexB];
    const currentC = c[indexC];
    const allValuesEqual = currentA === currentB && currentB === currentC;
    const AIsLesser = currentA <= currentB && currentA <= currentC;
    const BIsLesser = currentB <= currentA && currentB <= currentC;
    const CIsLesser = currentC <= currentA && currentC <= currentB;
    
    if (allValuesEqual) {
      return currentA;
    }

    if (AIsLesser) {
      indexA++;
    }

    if (BIsLesser) {
      indexB++;
    }

    if (CIsLesser) {
      indexC++;;
    }
  }

  return -1;
};

console.log(findLeastCommonNumber(
  [6, 7, 10, 25, 30, 63, 64],
  [0, 4, 5, 6, 7, 8, 50],
  [1, 6, 10, 14]
));
