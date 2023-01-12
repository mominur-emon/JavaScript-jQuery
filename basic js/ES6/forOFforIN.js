// for of and for in

/*//for of
const names = ["emon", "rifat", "jamil"];
for (let x of names) {
  console.log(x);
}*/

//for in
let std = {
  Id: 136,
  name: "Emon",
  cgpa: 2.78,
};

for (let x in std) {
  //console.log(x); //key print
  //console.log(std[x]); //value print
  console.log(`${x} : ${std[x]}`); //both print
}
