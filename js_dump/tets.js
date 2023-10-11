const person = { fname: "John", lname: "Doe", age: 25 };

console.log(person.fname);

console.log("\n");
//for in
for (const x in person) {
  console.log(x);
}

console.log("\n");
//for of
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
  console.log(text);
}
