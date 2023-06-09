// Whale Talk Project
// June 9, 2023
// JavaScript Syntax Part II

const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = new Array();

for (let i = 0; i < input.length; i++) {
  let letter = input[i];
  if (letter === "e" || letter === "u") {
    resultArray.push(letter);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (letter === vowels[j]) {
      resultArray.push(letter);
    }
  }
}

console.log(resultArray.join("").toUpperCase());
