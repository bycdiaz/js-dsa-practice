function findSumOfTwo(numbersArray, target) {
  const numbersSet = new Set(numbersArray);

  for (const currentNumber of numbersArray) {
    const currentDifference = target - currentNumber;
    
    if (numbersSet.has(currentDifference)) {
      return true;
    }
  }

  return false;
};

console.log(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 10));
// true
