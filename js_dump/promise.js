const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("hello world"), 0);
  setTimeout(() => reject("not hello world"), 0);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
