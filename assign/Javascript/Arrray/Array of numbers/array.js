let arrayOfNumbers = [743, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11,1];
let sum = 0;
for(i = 0, sum = 0; arrayOfNumbers.length > i; sum += arrayOfNumbers[i++]);
console.log(sum);

// hamgiin ih
let first = arrayOfNumbers[0];
for(i = 1; arrayOfNumbers.length>i; i++){
    if(first < arrayOfNumbers[i]){
        first = arrayOfNumbers[i]
    }
}
console.log("hamgiin ih too ",first)

// hamgiin baga
let second = arrayOfNumbers[0];
for(i = 1; arrayOfNumbers.length>i; i++){
    if(second > arrayOfNumbers[i]){
        second = arrayOfNumbers[i]
    }
}
console.log("hamgiin baga too ", second);

// ehend too nemeh
arrayOfNumbers[0] = 12;
console.log(arrayOfNumbers)

// togsgold too nemeh
let add = arrayOfNumbers.length;
arrayOfNumbers[12] = 12;
console.log(arrayOfNumbers)
