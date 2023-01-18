//race function promise - find 1st solveing outputing race function
console.log("welcome");
const prms1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("compeleted promise 1");
  }, 2000);
});

const prms2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed promise 2");
  }, 1000);
});

Promise.race([prms1, prms2]).then((res) => console.log(res)); //here race function ptint prms2 because promise 2 time is 1s
