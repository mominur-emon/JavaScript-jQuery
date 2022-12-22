//IIFEs (Immediately inovkeable function expressions )
(function mul(num1, num2) {
  var result = num1 * num2;
  document.write(result + "<br/>");
})(4, 5);

//function expressions

const display1 = function div(n1, n2) {
  var result = n1 / n2;
  document.write(result);
};
var num1, num2;
num1 = prompt("Enter 1st number: ");
num2 = prompt("Enter 2nd number: ");
display1(num1, num2);
