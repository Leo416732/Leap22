//anhdagch too
let too = 11;
let prime = true;

for (let i = 2; i < too; i++) {
  if (too % i == 0) {
    prime = false;
    break;
  }
}

if (prime) {
  console.log("Anhnii too");
} else {
  console.log("Anhnii too bish");
}