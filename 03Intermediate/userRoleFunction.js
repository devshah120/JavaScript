/*Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/ delete tests
user - consume all content
other - trial user.
Input: getUserRole(name,role) */

var getUserRole = function(name,role){
    switch (role) {
        case "admin":
            return `Hey, ${name} you are admin you have all access`
            break; //if you are using return keyword so break is not necessary

        case "subadmin":
            return `Hey, ${name} you are subadmin you have access to create/delete courses`
            break;

        case "testprep":
            return `Hey, ${name} you are testprep you have access to create/ delete tests`
            break;

        case "user":
            return `Hey, ${name} you are user you can consume all content`
            break;
    
        default:
            return `Hey, ${name} you are trial user`
            break;
    }
}

console.log(getUserRole("Dev","testprep"));

var getRole = getUserRole("Dev","user")

console.log(getRole);