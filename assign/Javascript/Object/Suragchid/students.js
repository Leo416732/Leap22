let students = [
    {
    name: "Гончигсумлай",
    birthOfYear: 1999, 
    hobby: "морь", 
    single: false
    },
    {
    name: "Гончиг",
    birthOfYear: 2000, 
    hobby: "хонь", 
    single: true
    },
    {
    name: "Сумлай",
    birthOfYear: 1980, 
    hobby: "морь", 
    single: false
    },
    {
    name: "Сум",
    birthOfYear: 2010, 
    hobby: "морь", 
    single: true
    }
];

//20 oos deesh nasnii suragch
function adult (age){
    console.log(" ");
    console.log("20 oos deesh nastai suragchid:")
    for(i = 0; i < age.length; i++){
        if(2022 - age[i].birthOfYear > 20){
            console.log(age[i].name)
        }
    }
}adult(students);

//nas bodoh
function studentAge (age){
    console.log(" ");
    console.log("suragchdiin nas:")
    for(i = 0; i < age.length; i++){
        console.log(age[i].name ,"\t",2022 - age[i].birthOfYear, "n nastai");
    }
}
studentAge(students);

//single eseh
function GetSingleStudents (name){
    console.log(" ");
    console.log("single suragchid:")
    for(i = 0; i < name.length; i++){
        if(name[i].single == true){
            console.log(name[i].name);
        }
    }
}
GetSingleStudents(students);