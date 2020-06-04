// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

function sum_pairs(ints, s) {
  let sum_array = [];
  let lastJ = ints.length;

  for (let i = 0; i < ints.length; i++) {
    for (let j = 0; j < ints.length; j++) {
      if (ints[i] + ints[j] === s && i !== j) {
        if (j < lastJ) {
          lastJ = j;
          sum_array = [];
          sum_array.push(ints[i]);
          sum_array.push(ints[j]);
        }

        if (i === ints.length && sum_array.length === 0) {
          return undefined;
        }
      }
    }
  }
  return sum_array;
}

sum_pairs([10, 5, 2, 3, 7, 5], 10);
