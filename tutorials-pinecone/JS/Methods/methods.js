//
let a = [1, 2, 2, 3, 7, 5, 5, 80, 454];
console.log(a.join());
console.log(a.includes(1));
console.log(a.at(1));

//pop
console.log(a.pop());
console.log(a);

//push hamgiin svvld nemn
console.log(a.push(9));

//shift
console.log(a.shift(1));
console.log(a);

//sort
console.log(
  a.sort((a, b) => {
    return a - b;
  })
);

//slice
a.slice(1);
console.log(a);
//reverse

//splice

//replace

//replaceAll
