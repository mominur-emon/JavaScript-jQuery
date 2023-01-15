//arrow function

function display1() {
  //normal function
  console.log("I'm display 1");
}

const display2 = () => {
  //arrow function call system
  console.log("i'm display 2");
};

display1();
display2();

//one line display defference between  normal funtion and arrow function
function display3() {
  console.log("I'm display 3");
} //normal function js without curly brackets print impossible

const display4 = () => console.log("i'm display 4"); //arrow function js without curly brackets print one line possible

display3();
display4();

//value return
function msg1() {
  //normal function return way
  return "hi i'm message 1";
}

const msg2 = () => {
  //arrow function retun way 1st
  return "hi i am message 2";
};
const msg3 = () => "hi i am message 3"; //arrow function retun way another
console.log(msg1());
console.log(msg2());
console.log(msg3());

//parameter passs
function add1(num1, num2) {
  //normal function
  return num1 + num2;
}
const add2 = (num1) => num1 * num1; //arrow function

const add3 = (num1, num2) => {
  //arrow function
  return num1 + num2;
};
console.log(add1(10, 20));
console.log(add2(10));
console.log(add3(20, 20));
