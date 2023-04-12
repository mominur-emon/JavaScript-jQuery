//localStorage -no expiry date .data never gets lost even if he/she close the browser
//localstorage store data as key value pair - string must present

//console.log(localStorage);

//setItem(key,value)-store data
/*localStorage.setItem("userName", "Emon");
 localStorage.setItem("password", "1234");*/

//getItem(key) -read data
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);

//update data
localStorage.setItem("userName", "Mominur");
localStorage.setItem("password", "2456");

//remove data
localStorage.removeItem("userName");
localStorage.removeItem("password");

//set iteam array to convert string
const citys = ["Rajshahi", "Dhaka", "Natore"];
localStorage.setItem("citys", JSON.stringify(citys));

//get
const ct = JSON.parse(localStorage.getItem("citys"));
console.log(ct);

localStorage.clear();
