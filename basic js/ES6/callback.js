//callback and higher order function logic
function square(x) {
  console.log(`square of ${x}: ${x * x}`);
}

function higherOrder(number, callback) {
  //here number is 6 and callback is square
  callback(number);
}

higherOrder(6, square);

//problem step by step completing task use callback function
const task1 = (callback) => {
  console.log("task 1");
  callback();
};
const task2 = (callback) => {
  console.log("task 2");
  callback();
};
const task3 = (callback) => {
  setTimeout(() => {
    console.log("task 3, data loading ");
    callback();
  }, 3000);
};
const task4 = (callback) => {
  console.log("task 4");
  callback();
};
const task5 = () => {
  console.log("task 5");
};

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5();
      });
    });
  });
});
