let num = [5,6,4,12,19,121,1,7,9,63];
let count = 0;
for(let i = 0; i < num.length; i++){
    if(num[i]%2==0){
        console.log(num[i], " add");
    }else{
        console.log(num[i], " even");
    }
}