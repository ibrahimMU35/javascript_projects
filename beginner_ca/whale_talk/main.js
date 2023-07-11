const input = "turpentine and turtles";
const vovels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  //console.log("i is " + i);
  for (let j = 0; j < vovels.length; j++) {
    if (input[i] === vovels[j]) {
      resultArray.push(vovels[j]);
    }
    //console.log('j is ' + j);
  }
}

console.log("Hi, Human " + resultArray.join("").toUpperCase());
