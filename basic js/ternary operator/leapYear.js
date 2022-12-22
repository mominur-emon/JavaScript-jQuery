var yr = Number(prompt("Enter a year: "));

var result =
  yr % 4 == 0
    ? "Leap year"
    : yr % 100 != 0
    ? "not Leap year"
    : yr % 400 == 0
    ? "leap year"
    : "Not leap year";
document.write(result);
