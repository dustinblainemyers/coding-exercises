function longestSequence(str) {
  let longestLength = 0;
  let workingLength = 0;
  let window = {};
  for (val of str) {
    if (window[val] === true) {
      window = {};
      workingLength = 1;
    } else {
      window[val] = true;
      workingLength++;
    }

    if (workingLength > longestLength) {
      longestLength = workingLength;
    }
  }

  return longestLength;
}

longestSequence("hellothere");
