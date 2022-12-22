var names = [" emon ", "rifat", "emam", "jamil", 10];
document.write(names.length + "<br/>");
//push is adding element to last position
names.push("Raisha");
names.push("12");
document.write(names.length + "<br/>");
document.write(names + "<br/><br/>");

//pop remove the end element
names.pop();
document.write(names.length + "<br/>");
document.write(names + "<br/><br/>");

//shift method is remove the element of first position
names.shift();
document.write(names.length + "<br/>");
document.write(names + "<br/><br/>");
//unshift method added the element of first position
names.unshift("Mominur");
document.write(names.length + "<br/>");
document.write(names + "<br/><br/>");

//concatenation
var country1 = ["Bangladesh", "pakistan"];
var country2 = ["India", "Chaina"];
var country = country1.concat(country2);
document.write(country + "<br/></br/>");

// new array create
var Names = ["prokiti", "karjon", "sakiba", 50];
document.write(Names.length + "<br/>");

//splice method is use to element add and remove
//add
Names.splice(2, 0, "EMON", "RATUL"); //here 2 is indicate position add to element after 2nd positon and 0 is remove and 2 adding element
document.write(Names.length + "<br/>");
document.write(Names + "<br/>");
//remove
Names.splice(2, 1, "emam", "nahid"); //1 means arry to after 2nd position last element remove
document.write(Names.length + "<br/>");
document.write(Names + "<br/>");

Names.splice(4, 3); //remove 3 element after 4th position
document.write(Names.length + "<br/>");
document.write(Names + "<br/><br/>");

//slice
//slice method created new array with out changing main array and remove element to first position maintainces
var newArr = Names.slice(1); //2 element remove
document.write(newArr.length + "<br/>");
document.write(newArr + "<br/>");

var newArr = Names.slice(1, 2); //after 1 position ,2 element remove
document.write(newArr.length + "<br/>");
document.write(newArr + "<br/>");
document.write(Names + "<br/><br/>");

//sort method
var sortNames = Names.sort();
document.write(sortNames + "<br/><br/>");

//reverse method
var sortNames = Names.sort();
Names.reverse();
document.write(sortNames + "<br/><br/>");

//number sorting
var numbers = [10, 8, 45, 12, 1];
numbers.sort(function (a, b) {
  return a - b;
});
document.write(numbers + "<br/>");

//number sorting reverse
var numbers = [10, 8, 45, 12, 1];
numbers.sort(function (a, b) {
  return b - a;
});
document.write(numbers + "<br/><br/>");
