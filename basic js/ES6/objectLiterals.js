//object literals
/*function stdInfo(name, age) {
  return {
    //name: name,
    //age: age,
    name, //same name cases es6 not need multipul use
    age,
  };
}
console.log(stdInfo("Emon ", 23));
*/

//concise method syntax

function stdInfo(name, age) {
  return {
    name,
    age,
  };
}

let msg = {
  //create object
  //create funcion on the boject
  //body: function () {
  body() {
    //concise method don't need to : and function name work is same
    return `hi I am object function`;
  },
};

console.log(msg.body());

/* //concise space use is posile
let msg = {
  "body name"() {
    //using space to function
    return `hi I am object function space`;
  },
};

console.log(msg["body name"]()); //calling is way
*/
