//note : javascript default synchronous function

const task1 = () => {
  console.log("task 1");
};
const task2 = () => {
  console.log("task 2");
};
const dataLoading = () => {
  console.log("task 3, data loading ");
};
const task3 = () => {
  setTimeout(dataLoading, 3000); //asynchronous
};
const task4 = () => {
  console.log("task 4");
};
const task5 = () => {
  console.log("task 5");
};

task1();
task2();
task3();
task4();
task5();
