//promise chaining

const task1 = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};

const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 is completed");
    }, 2000);
  });
};

const task3 = () => {
  return new Promise((resolve, reject) => {
    resolve("task 3 is completed");
  });
};

const task4 = () => {
  return new Promise((resolve, reject) => {
    reject("task 4 is not completed"); //task 4 is reject so after task 4 another task isn't printed
  });
};
const task5 = () => {
  return new Promise((resolve, reject) => {
    resolve("task 5 is completed");
  });
};

task1()
  .then((x) => console.log(x))
  .then(task2)
  .then((x) => console.log(x))
  .then(task3)
  .then((x) => console.log(x))
  .then(task4)
  .then((x) => console.log(x))
  .then(task5)
  .then((x) => console.log(x))
  .catch((y) => console.log(y)); //reject more then one or one whatever but catch always use one
