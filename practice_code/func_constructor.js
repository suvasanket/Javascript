//constructor
const func = new Function("a", "b", "c", "return a+b");

console.log(func(1, 2));

//self invoke
(function () {
  console.log("hello");
})();
