//promise chaining use async await

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
    reject("task 4 is not completed");
  });
};
const task5 = () => {
  return new Promise((resolve, reject) => {
    resolve("task 5 is completed");
  });
};

// task1()
//   .then((x) => console.log(x))
//   .then(task2)
//   .then((x) => console.log(x))
//   .then(task3)
//   .then((x) => console.log(x))
//   .then(task4)
//   .then((x) => console.log(x))
//   .then(task5)
//   .then((x) => console.log(x))
//   .catch((y) => console.log(y));

async function callAllTask() {
  try {
    const t1 = await task1();
    console.log(t1);
    const t2 = await task2();
    console.log(t2);
    const t3 = await task3();
    console.log(t3);
    const t4 = await task4();
    console.log(t4);
    const t5 = await task5();
    console.log(t5);
  } catch (e) {
    console.log(e);
  }
}
callAllTask();
