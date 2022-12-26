var numOfWon = 0;
var numOfLoss = 0;
for (let i = 1; i <= 5; i++) {
  var guessNumber = parseInt(prompt("Enter a number 1 to 5 : "));

  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessNumber == randomNumber) {
    //document.write("You have Won");
    numOfWon++;
  } else {
    //document.write("You have Loss " + randomNumber);
    numOfLoss++;
  }
}
document.write("<br>Total Number of Won = " + numOfWon + "<br/>");
document.write("Total Number of Loss = " + numOfLoss + "<br/>");
