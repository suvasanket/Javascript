var car = {
  name: "honda",
  model: "city",
  price: "800000",
};
car["tires"] = "4"; //test
car.name = "loda";
var carobj = car.model;
console.log(carobj);

console.log(car.model);
console.log(car.price);
console.log(car.tires);
console.log(car.name);
