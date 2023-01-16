// find index and find both are finding way same
//find (callback, value) return the value of the first elelment the pass certain condition
let numbers = [5, 1, 15, 44, 8, 77, 10];
let firstEvenNumber = numbers.find((x) => x % 2 === 0);
console.log(firstEvenNumber);

//findIndex(callback, value) return the index of the first element the pass certain condition
const evenNumber = (value) => {
  if (value % 2 === 0) return value;
};
let firstEvenNumberIndex = numbers.findIndex(evenNumber);
console.log(firstEvenNumberIndex);

//using array object
const stds = [
  {
    id: 101,
    gpa: 4.22,
  },
  {
    id: 102,
    gpa: 4.5,
  },
  {
    id: 103,
    gpa: 3.72,
  },
  {
    id: 104,
    gpa: 5.0,
  },
];
console.log(stds.find((x) => x.gpa > 4));
