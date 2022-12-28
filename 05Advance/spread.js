var myObj = {};

Object.assign(myObj, { a: 1, b: "admin", x: 3, y: 4 });

console.log(myObj);

//spread oprator convert array to single var
function sumOne(a, b) {
  return a + b;
}
var sumA = [5, 4];
console.log(sumOne(...sumA)); //spread oprator

//REST oprator convert single var to Array
function sumTwo(a, b, ...args) {
  console.log(args);
  let sum = 0;
  var multi = a * b;
  for (var arg of args) {
    sum = sum + arg;
  }
  return [multi, sum];
}

console.log(sumTwo(5, 4, 3, 2, 2));
