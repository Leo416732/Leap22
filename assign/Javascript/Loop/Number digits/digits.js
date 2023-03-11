let num = prompt("Number");
for (let i = 1; i <= num;  row++){
    alert(num.length);
    debugger;
}
let a = prompt("Hvssen too");
let count = 0;

while(a!==0){
    count  = count + 1;
    a = Math.floor(a/10);
}
console.log(count);