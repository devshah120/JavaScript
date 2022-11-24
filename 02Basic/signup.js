const uid = "abc123";

var fullName = prompt("Enter Your Full Name");
var email = prompt("Enter Your Email id");
var password = prompt("Enter Your Password");
var confirmPassword = prompt("Enter Your Confirm Password");
var courseCount = prompt("Enter How Many Course You have Purchased");
var isLoggedInUsingGoogle = false;

//add string and variable using +(plus) and ,(coma) sign
console.log("Your Full Name is " + fullName);
console.log("Your Email id is ", email);
console.log(password);
console.log(confirmPassword);
console.log(courseCount);

//interpolation method
console.log(`
    Your uid is : ${uid}
    Your fullname is : ${fullName}
    Your email is : ${email}
    Your password is : ${password}
    Your course count is : ${courseCount}
    Have You logged in with google : ${isLoggedInUsingGoogle}
`);

