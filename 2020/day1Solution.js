const fs = require("fs");
const DATA = fs
  .readFileSync("./inputDay1.txt", "utf-8")
  .split("\n")
  .map((val) => +val);

// console.log(DATA)
// Part One
function sumTwoFindProductOf(data) {
  for (let num1 of data) {
    for (let num2 of data) {
      if (num1 + num2 == 2020) return num1 * num2;
    }
  }
  return "error";
}

// console.log(sumTwoFindProductOf(DATA))

//Part Two
function sumThreeFindProduct(data) {
  for (let num1 of data) {
    for (let num2 of data) {
      for (let num3 of data) {
        if (num1 + num2 + num3 == 2020) return num1 * num2 * num3;
      }
    }
  }
  return "error";
}

console.log(sumThreeFindProduct(DATA));
