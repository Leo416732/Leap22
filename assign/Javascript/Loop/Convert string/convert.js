let input = "Hello World";
let firstLowString =  input.substr(0, 1);
let firstUpString = input.substr(1,6);
let secondLowString =  input.substr(6, 1);
let secondUpString = input.substr(7,11);
for (let i = 0; i < input.length; i++) {
    firstLowString.toLowerCase();
    console.log(firstLowString)
  }