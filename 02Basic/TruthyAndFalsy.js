// TODO: Falsy
// undefined - refers to the absence of value
// null -  simply means the value of nothing
// 0
// ''
// NaN

var user = null;
if (user) {
    console.log("Condition is true"); //it does't run because it's falsy value
}

console.log(2 + 2);

console.log("2" + 2);

var num = "2";
// in JS  == means it's take loosely value it might be string , int or whatever
if (num == 2) 
{
    console.log("condition is true");
}

// in JS  === means it's check Strictly value string , int or whatever
if (num === 2) 
{
    console.log("condition is true");
}
else
{
    console.log("condition is false");
}