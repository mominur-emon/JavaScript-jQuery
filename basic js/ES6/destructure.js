//array destructure
let numbers = [1, 2, 3, 4, 5, 6];
let [num1, num2, ...num] = numbers;
console.log(num1);
console.log(num);

//swap variables destructure use
let a = 10,
  b = 20;
[a, b] = [b, a]; //swap
console.log(a);
console.log(b);

//object destructure
const stdInfo = {
  id: 101,
  fullName: "Mominur Rahman",
  cgpa: 2.78,
  language: {
    native: "Bangla",
    others: "English",
  },
};
const { id, fullName, language } = stdInfo;

console.log(id);
console.log(fullName);
console.log(language);
console.log(language.native);

//function destructure
const stdinfo = ({ id, name }) => {
  //destructure parameter use to object
  console.log(`${id}, ${name}`);
};

const std = {
  id: 2018,
  name: "Emon",
};
stdinfo(std);
