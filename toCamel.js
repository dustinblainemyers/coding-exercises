function toCamelCase(str) {
  let toPrint = "";
  let iterator = 0;
  let hyphen = false;

  Array.prototype.map.call(str, (char) => {
    if (char === "-" || char === "_") {
      hyphen = true;
    }
    if ((char === char.toUpperCase() && iterator === 0) || char === " ") {
      toPrint = toPrint + char.toUpperCase();
    } else if (hyphen === true && char !== "-" && char != "_") {
      toPrint = toPrint + char.toUpperCase();
      hyphen = false;
    } else if (char.match(/[a-zA-Z]/)) {
      toPrint = toPrint + char;
    } else {
    }
    iterator = iterator + 1;
  });
  return toPrint;
}
