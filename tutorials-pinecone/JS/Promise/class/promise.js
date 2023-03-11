//pending
//reject
//fullfilled
//resolve -
// promise - amlalt
let boldPay = 5_000_000;

let boldAlbum = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (boldPay > 1_000_000) {
      resolve("success");
    } else {
      reject("not enough funds to release new album");
    }
  }, 2000);
});
boldAlbum
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });
