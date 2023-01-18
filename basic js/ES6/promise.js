//create promise - resolve reject
console.log("welcome");
const prms1 = new Promise((resolve, reject) => {
  let completedPromise = true; //when true call resolve and when false call reject
  if (completedPromise) {
    resolve("completed promise 1");
  } else {
    reject("not compeleted promise 1");
  }
});
prms1
  .then((x) => {
    //resolve to call then
    console.log(x);
  })
  .catch((error) => {
    //reject to call catch
    console.log(error);
  });
console.log("end");

//without use reject promise
const prms2 = new Promise((resolve, reject) => {
  resolve("completed promise 2");
});
prms2.then((response) => {
  console.log(response);
});

//all promise call
//Promise.all([prms1, prms2]).then((res) => console.log(res));
