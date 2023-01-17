//startWith(searchString, position) check a string starts with another string
//endWith(searchString, length) check a string ends with another string
//include(searchString, position) check if a string contains another string
//all these methods are case sensitive
//(true or false retun)

const msg = "Today is friday";
//startsWith
console.log(msg.startsWith("Today")); //true retun here
console.log(msg.startsWith("today")); //false retun here because case sensitive
console.log(msg.startsWith("Today", 10)); //false retun here because 10 index traing search
//endsWiths
console.log(msg.endsWith("Today")); //false retun here because not ending Today string
console.log(msg.endsWith("friday")); //true retun here

//includes
console.log(msg.includes("friday")); //true retun here
console.log(msg.includes("is")); //true retun here
