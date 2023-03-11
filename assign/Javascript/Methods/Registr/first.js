const alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "Ө",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ү",
  "Ф",
  "Х",
  "Ц",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];
let register = prompt("Registriin dugaara oruulna uu").toUpperCase;

function isCorrectReg(reg) {
  if (
    true == alphabet.includes(register[0]) &&
    true == alphabet.includes(register[1]) &&
    register.length === 10 &&
    Number.isInteger(Number(register.slice(2, 10))) == true
  ) {
    getRegisterInfo(reg);
  } else {
    alert("RD Buruu baino");
  }
}
isCorrectReg(register);

// gender
function getGender(reg) {
  if (register[8] % 2 == 0) {
    return "Emegtei";
  } else {
    return "Eregtei";
  }
}
getGender(register);

// birthday
function getBirthDay(reg) {
  if (
    Number.isInteger(Number(register[7].slice())) == true &&
    Number.isInteger(Number(register[6].slice())) == true 
  ) {
    return register[6], register[7];
  } else {
    return "HB Buruu baino";
  }
}
getBirthDay(register);

// region
function getBirthRegion(reg) {
  if (register[0] == "А") {
    return "Архангай";
  }
  if (register[0] == "Б") {
    return "Баян-Өлгий";
  }
  if (register[0] == "В") {
    return "Баянхонгор";
  }
  if (register[0] == "Г") {
    return "Булган";
  }
  if (register[0] == "Д") {
    return "Говь-Алтай";
  }
  if (register[0] == "Е") {
    return "Дорноговь";
  }
  if (register[0] == "Ж") {
    return "Дорнод";
  }
  if (register[0] == "И") {
    return "Завхан";
  }
  if (register[0] == "Й") {
    return "Өвөрхангай";
  }
  if (register[0] == "К") {
    return "Өмнөговь";
  }
  if (register[0] == "Л") {
    return "Сүхбаатар";
  }
  if (register[0] == "М") {
    return "Сэлэнгэ";
  }
  if (register[0] == "Н") {
    return "Төв";
  }
  if (register[0] == "О") {
    return "Увс";
  }
  if (register[0] == "П") {
    return "Ховд";
  }
  if (register[0] == "Р") {
    return "Хөвсгөл";
  }
  if (register[0] == "С") {
    return "Хэнтий";
  }
  if (register[0] == "Т") {
    return " Дархан-Уул";
  }
  if (register[0] == "Ф") {
    return "Орхон";
  }
  if (register[0] == "Х") {
    return "Говьсүмбэр";
  }
  if (register[0] == "З") {
    return "Дундговь";
  }
  if (register[0] == "У" || register[0] == "Ц") {
    return "Улаанбаатар";
  }
}
getBirthRegion(register);

//on
function getBirthOn(reg) {
  if (register[4] >= 2) {
    return register[4] + 0;
  }
  if (register[4] < 2) {
    return 9 + register[4];
  }
}
getBirthOn(register);

// all
function getRegisterInfo(reg) {
  const gender = getGender(reg[8]);
  const birthDay = getBirthDay(reg[7], reg[6]);
  const birthRegion = getBirthRegion(reg[0]);
  const birthOn = getBirthOn(reg[4]);
  alert(`Huis: ${gender}`);
  alert(
    "Tursun sar odor: " +
      register[5] +
      " sariin " +
      register[6] +
      register[7] +
      " odor"
  );
  alert(`Tursun aimag: ${birthRegion}`);
  alert("Tursun on: " + getBirthOn(register) + register[2] + register[3]);
}
