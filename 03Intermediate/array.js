//procedural oriented 
var countries = ["India", "USA", "Japan", "Russia"];

//object-oriented
var states = new Array("Gujarat", "Mumbai", "Rajasthan", "Delhi")

// console.log(countries);
// console.log(states);
// console.log(states[0]);
// console.log(states.length);

states[2] = "Punjab";

// console.log(states);

var user = ["dev", "devshah@gmail.com",3,34,true];

console.log(user);
//Removes the last element from an array and returns it.
user.pop();
user.pop();
console.log(user);

//if you want to value at end of array
user.push("hi");
console.log(user);

//if you want value at 0th Index(start) of the array
user.unshift("First");
console.log(user);

//Removes the first element from an array and returns it.
user.shift();
console.log(user);

//find index of value
console.log(user.indexOf(3));

//String to array
console.log(Array.from("dev"));