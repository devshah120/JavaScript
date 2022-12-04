function sayHello(name){
    console.log("Hey there, Dev");
    console.log("Hey there, ",name);
    console.log(`Hey there, ${name}. How are you`); 
}
//console.log() directly print value on terminal
sayHello("Dev");
// sayHello("Shah");

// return keyword doesn't directly print value on terminal 
function namstey(){
    return "Hello in india"
}

namstey();

// if you print that value you want to store in any variable or print full function on console.log()
var grettings = namstey()

console.log(grettings);
console.log(namstey());