//let does not allow to use after scope ends
//console.log(a);
let a = "D";
console.log(a);

if (true) {
    let name = "xyz"
    var nm = "abc"
    console.log(name);
}
//var is accessible after scope ends but let not 
console.log(nm);
//console.log(name);