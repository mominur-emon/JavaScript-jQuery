// map and filter

//map
//map exactly receving function as like forEach function but map retun to new array so dont need to declar extra array

//problem solving squre number
var n = [10, 20, 30];
var sqrNum = n.map(function (x) {
  // map itself new array retun so dont need extra array
  return x * x; // dont need to push beacuse map array return itself
});
console.log(`square number is ${sqrNum}`);

//filter
//problem solving value greater than 10 filtering
var n = [101, 6, 74, 8, 20, 30];
var newNumber = n.filter(function (x) {
  return x > 10;
});
console.log(`greater number is ${newNumber}`);
