// create an application with following roles
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - get access to consume content 

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You Have Full Access");
        break;

    case "subadmin":
        console.log("gets access to create/delete courses");
        break;

    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    
    case "user":
        console.log("get access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}