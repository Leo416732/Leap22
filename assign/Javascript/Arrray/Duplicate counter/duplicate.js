let num = [1,2,3,4,1];
let count = [];
for(i = 0; i<10; i++){
    if(count[num[i]] !=null){
        count[num[i]]++;
    }else{
        count[num[i]] = 1
    }
}
console.log(count)
// Str= [1,2,3,4,1];
// var obj= new Object();

// for(var i = 0; i < 10; i++) {
//  if(obj[Str[i]] != null) {
//     obj[Str[i]] += 1;
// } else {
//     obj[Str[i]] = 1;
//     }
// }
// console.log(obj);