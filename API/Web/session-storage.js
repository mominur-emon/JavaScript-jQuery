//set item
// sessionStorage.setItem("user", "Emon");

//get item
/*const userName = sessionStorage.getItem("user");
console.log(userName);*/

//remove item
// sessionStorage.removeItem("user");

// sessionStorage.clear();

//use object
const user = { id: "101", name: "Emon" };
sessionStorage.setItem("user", JSON.stringify(user));

const info = JSON.parse(sessionStorage.getItem("user"));
console.log(info);
