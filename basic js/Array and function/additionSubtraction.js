function add(n1, n2) {
  var result = n1 + n2;
  return result;
}

function sub(n1, n2) {
  var result = n1 - n2;
  return result;
}
var num1 = Number(prompt("Enter 1st number: "));
var num2 = Number(prompt("Enter 2nd number: "));

document.write("addition   " + add(num1, num2) + "<br />");
document.write("subtraction " + sub(num1, num2) + "<br />");
