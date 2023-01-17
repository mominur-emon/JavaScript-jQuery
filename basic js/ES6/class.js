//create class with constructor
//set get
class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  set stdName(name) {
    this.name = name;
  }
  get stdInfo() {
    return this.id + " " + this.name;
  }
}
let s1 = new Student(101, "emon");
console.log(s1.id);
console.log(s1.name);

s1.stdName = "mominur rahman"; //set
console.log(s1.name);

let s2 = new Student(102, "rifat");
console.log(s2.stdInfo); //get
