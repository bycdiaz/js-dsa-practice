function checkIfSorted(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    const prior = numbers[index - 1];
    const current = numbers[index];

    if (prior > current) {
      return false;
    }
  }

  return true;
}

function find_missing_number(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    
    if (currentNumber === index) {
      continue;
    } else {
      if (currentNumber === numbers.length) {
        const temp = numbers[currentNumber - 1];
        numbers[currentNumber - 1] = currentNumber;
        numbers[index] = temp;
        index--;
      } else {
        const temp = numbers[currentNumber];
        numbers[currentNumber] = currentNumber;
        numbers[index] = temp;
        index--;
      }
    }

    const arrayIsSorted = checkIfSorted(numbers);

    if (arrayIsSorted) {
      break;
    } else {
      continue;
    }
  }

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    
    if (currentNumber !== index) {
      return index;
    }
  }
};

console.log(find_missing_number([4, 0, 3, 1]));
// 2
