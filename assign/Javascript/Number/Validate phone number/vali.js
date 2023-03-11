let phoneNumber = "+9761234554";
let region = phoneNumber.substring(0, 4);
let phoneN = phoneNumber.substr(3, 8);
if(region == +976 && phoneN.length == 8 && phoneNumber.length == 12){
    console.log("та монгол улсын утасны дугаарыг зөв орууллаа")
}else{
    console.log("\b та монгол улсын утасны дугаарыг буруу орууллаа")
}