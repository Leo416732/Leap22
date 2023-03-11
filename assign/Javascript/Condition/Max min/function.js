let a = 10;
let b = 180;
let c = 19;
if(a > b && a > c || a === b && a ===c){
    console.log(a, c)
}else if(b > c ){
    console.log(b, a)
}else{
    console.log(c, a)
}