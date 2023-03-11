let itCompanies = ["facebook", "google","microsoft","apple","iBM","oracle","amazon"];
//
console.log(itCompanies);
//
console.log(itCompanies.length);
//
console.log(itCompanies[0], itCompanies[6], itCompanies[3]);
//
let i = 0;
while(i<itCompanies.length){
    console.log(itCompanies[i]);
    i++;
}
//
for (i = 0;i < itCompanies.length; i++){
    let Up = itCompanies[i];
    let Upp = Up.toUpperCase();
    console.log((Upp))
}

