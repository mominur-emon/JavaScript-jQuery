/*var num = Number(prompt("enter a number: "));
var result = num > 0 ? "positive" : "negative";
document.write(result);
*/

var num = Number(prompt("enter a number: "));
var result = num > 0 ? "positive" : num < 0 ? "negative" : "Zero";
document.write(result);
