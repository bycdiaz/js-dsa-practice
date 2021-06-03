/*
Given a string that contains duplicate occurrences of characters,
remove the duplicate occurrences.
*/

// initial solution
function removeDuplicates(string) {
  const letterMap = new Map();

  for (const letter of string) {
    if (!letterMap.has(letter)) {
      letterMap.set(letter);
    }
  }

  return Array.from(letterMap.keys()).join('');
};

console.log(removeDuplicates('dabbac'));
// 'dabc'
