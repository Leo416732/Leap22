let animals = [
  { type: "dog", sound: "woof" },
  { type: "cow", sound: "moo" },
  { type: "cat", sound: "meow" },
];
function sound(list) {
  for (i = 0; i < animals.length; i++) {
    console.log("Animals:", animals[i].type, "\t", "sound:", animals[i].sound);
  }
}
sound(animals);
