//Function declarations are scanned and made available

tipper("10");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill+5);
}

//variable declarations are scanned and made undefined
// bigTipper(100); - it's showes error because it's undefined

var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill+15);
}

bigTipper(100);

console.log(name);
var name = "Dev";

function sayName(){
    var name="Mr. D"
    console.log(name);
}
sayName();

console.log(name);