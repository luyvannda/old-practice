function capitalize(string) {
  let lowerCase = string.toLowerCase();
  let firstLetter = lowerCase.charAt().toUpperCase();
  return firstLetter + (lowerCase.slice(1));
}

let result = capitalize("fistOFFury");
console.log(result);



/* Write a function called capitalize that takes a string and returns that string
with only the first letter capitalized. Make sure that it can take strings 
that are lowercase, UPPERCASE or BoTh.
*/