var arr = new Array();
var sum = 0;
var num = Number(prompt("Enter the number of element : "));

for (var i = 0; i < num; i++) {
  arr[i] = parseInt(prompt("Enter a number : "));
}

for (var i = 0; i < num; i++) {
  document.write("Input " + arr[i] + "<br/>");
  sum = sum + arr[i];
}

document.write("sum of array = " + sum);
