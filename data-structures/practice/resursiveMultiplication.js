/*
Write a recursive function to multiply two positive integers without using the * operator.
You can use addition, subtraction, and bit shifting but you should minimize the number
of those operations.
*/

function recursiveMultiplication(first, second) {
  second--;

  if (second > 0) {
    return first + recursiveMultiplication(first, second);
  } else {
    return first;
  }
}

console.log(recursiveMultiplication(5, 3));
// 15

/*
call (5, 3) (first param) + return of below = 15

call(5, 2) 5 (first param) + return of below = 10
call(5, 1) returns 5
*/