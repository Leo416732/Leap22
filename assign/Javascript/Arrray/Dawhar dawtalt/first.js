
let n = 5;
let output = "";
//gurwaljin
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (col <= row) {
      output += col + " ";
    }
  }
  output += "\n";
  debugger;
}
console.log(output);
//gurwaljin
let output1 = "";
for (let row1 = 5; row1 >= 1; row1--) {
  for (let col1 = 1; col1 <= n; col1++) {
    if (col1 <= row1) {
      output1 += col1 + " ";
    }
  }
  output1 += "\n";
  debugger;
}
console.log(output1);


