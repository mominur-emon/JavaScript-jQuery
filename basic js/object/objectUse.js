//create onject
//using constructor
function Student(name, age, cgpa, year) {
  //using constructor
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.year = year;
}

var std1 = new Student("Emon", 24, 2.78, 2018);
var std2 = new Student("mihal", 24, 3.25, 2018);
var std3 = new Student("muyeen", 25, 3.4, 2018);

document.write(std1.name + "<br/>");
document.write(std1.age + "<br/>");
document.write(std2.name + "<br/>");
document.write(std2.cgpa + "<br/>");
document.write(std3.name + "<br/>");

//
document.write("---------------------<br/>");
//adding funcion inside a constructor

function Student(name, age, cgpa, year) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.year = year;

  this.display = function () {
    //adding funcion inside a constructor
    document.write(this.name + "<br/>");
    document.write(this.cgpa + "<br/>");
    document.write(this.age + "<br/> <br/>");
  };
}

var std1 = new Student("Emon", 24, 2.78, 2018);
var std2 = new Student("mihal", 24, 3.25, 2018);
var std3 = new Student("muyeen", 25, 3.4, 2018);

std1.display();
std2.display();
std3.display();
