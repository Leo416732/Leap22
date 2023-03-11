let register = "QW12345678";
let registerStr = register.substring(0, 2);
let registerNum = register.substring(2, 10);
if(registerStr.length == 2 && registerNum.length == 8){
    console.log("Та монгол улсын регистрийн дугаарыг зөв орууллаа")
}else{
    console.log("\b Та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа")
}