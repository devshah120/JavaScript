// sayHello();

// function sayHello(){
//     console.log("Hello");
// }

if (2 === "2") {
    console.log("This is true");
}

var myName = "Dev";

//node gives error but in global browser it is true 
if (myName === window.myName) {
    console.log("This is again true");
}