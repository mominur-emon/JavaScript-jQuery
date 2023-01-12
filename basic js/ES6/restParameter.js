"use strict"; //use for strict mode

function printNum(x, y, ...z) {
  //rest parameter here z is 3 4 5 6
  console.log(`X= ${x}, Y= ${y}, Z=${z}`);
}

printNum(1, 2, 3, 4, 5, 6);
