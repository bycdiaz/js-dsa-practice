/*
Write a function to sort the objects in-place on their creation sequence number in O(n) and
without any extra space. For simplicity, let’s assume we are passed an integer array
containing only the sequence numbers, though each number is actually an object.
*/

function cyclic_sort(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];

    if (currentNumber === (index + 1)) {
      continue;
    } else {
      const numberToSwap = numbers[currentNumber - 1];
      numbers[currentNumber - 1] = currentNumber;
      numbers[index] = numberToSwap;
      index--;
    }
  }

  return numbers;
}

console.log(cyclic_sort([1,5,6,4,3,2]));
// 1,2,3,4,5,6

// console.log(cyclic_sort([3, 1, 5, 4, 2]))
// [1, 2, 3, 4, 5]
