function init(){
    var firstName = "Dev";
    //console.log(firstName);

    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}
init()();
// var name = init();
// name();

function doAddition(x){
    return function (y){
        return x+y;
    }
}

var add = doAddition(5);
console.log(add(5));

console.log(doAddition(4)(5));