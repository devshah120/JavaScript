var name="Dev";

console.log("Line number 3", name);

function sayName(){
    var name ="Mr. D";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo(){
        var name ="Mr. DS";
        console.log("Line number 12", name);
    }
}

sayName();