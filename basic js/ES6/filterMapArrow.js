//problem filtering studens cgpa up to 3.00 then mapping (print this student name )
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

function stdName1() {
  //traditional function
  return stds
    .filter(function (x) {
      return x.cgpa > 3;
    })
    .map(function (y) {
      return y.name;
    });
}
const stdName2 = () => {
  //arrow function
  return stds.filter((x) => x.cgpa > 3).map((y) => y.name);
};
const stdName3 = () => stds.filter((x) => x.cgpa > 3).map((y) => y.name); //arrow without retun keyword use but retun its possible

//console.log(stdName1());
console.log(stdName2());
//console.log(stdName3());
