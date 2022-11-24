// Allow user to access course if he is:
// logged in from Email
// logged in from Google
// logged in from Facebook

var email = true;
var google = false;
var facebook = false;

if (email || facebook || google) {
    console.log("Login Success");
}
