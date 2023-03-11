//
// Initialize an object
const name = {
  firstName: "Philip",
  lastName: "Fry",
};

// Initialize another object
const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

let a = { job: "as" };
// Merge the object with the spread operator
const character = { ...name, ...details, ...a };

console.log(character);
