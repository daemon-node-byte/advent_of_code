const fs = require("fs");
const DATA = fs.readFileSync("./inputDay2.txt", "utf-8").split("\n");

// console.log(DATA)

const formatData = (data) =>
  data
    ? data
        .map((str) => str.replace(":", "").split(" "))
        .map((grp) => [grp[0].split("-"), grp[1], grp[2]])
    : null;

// console.log(formatData(DATA));

function partOne(data) {
  if (data) {
    let valid = 0;
    data.forEach((grp) => {
      let low = +grp[0][0];
      let high = +grp[0][1];
      let regexp = new RegExp(grp[1], "g");
      let pass = grp[2];
      if (
        (pass.match(regexp) || []).length >= low &&
        (pass.match(regexp) || []).length <= high
      )
        valid++;
    });
    return valid
  }
  return 'error'
}

console.log(partOne(formatData(DATA)))
