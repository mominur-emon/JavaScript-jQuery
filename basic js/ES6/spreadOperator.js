/*function addnum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];
//console.log(addnum(...numbers));

let numbers1 = [10, ...numbers, 20]; //spread operator using any position posible but rest is not posible

console.log(numbers1);
*/

/*function addnum(x, y, z) {
  return x + y + z;
}

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
//let numbers = num1.concat(num2); //using concatinaton
let numbers = [...num1, ...num2]; //using spread
console.log(numbers);
*/

//work with object spread
let p1 = {
  name: "emon",
  age: "24",
};

let p2 = {
  nationality: "bangladesh",
  occupation: "student",
};

let p = { ...p1, ...p2 };
console.log(p);
