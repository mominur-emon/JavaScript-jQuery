const stds = [
  //create array object
  {
    id: 101,
    name: "emon",
    age: 24,
    cgpa: 2.78,
  },
  {
    id: 102,
    name: "rifat",
    age: 21,
    cgpa: 3.45,
  },
  {
    id: 103,
    name: "jamil",
    age: 21,
    cgpa: 3.02,
  },
  {
    id: 104,
    name: "emam",
    age: 23,
    cgpa: 2.7,
  },
];

function stdName() {
  return stds
    .filter(function (x) {
      return x.cgpa > 3;
    })
    .map(function (y) {
      return y.name;
    });
}
console.log(stdName());
