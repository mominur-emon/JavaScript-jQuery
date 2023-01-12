//forEach

var num = [10, 20, 30, 40];
num.forEach(myfun); //for each receving a function actually

function myfun(x) {
  console.log(`number is ${x}`);
}

var num = [1, 2, 3, 4];
num.forEach(function (x) {
  console.log(x);
});

//problem solving squre number push
var n = [10, 20, 30];
var sqrNum = [];
n.forEach(function (x) {
  sqrNum.push(x * x);
});
console.log(`square number is ${sqrNum}`);

//problem solving each of array number add 5 like x+5
var numbers = [10, 20, 30, 40];
numbers.forEach(function (x, index, arr) {
  //x access item of array and index access indes of array and arr access full array
  arr[index] = x + 5;
});
console.log(`number is after sum ${numbers}`);
