// As found at : https://www.codewars.com/kata/517abf86da9663f1d2000003

// instructions :

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

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
