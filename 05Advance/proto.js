var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is: ${this.courseCount}`);
    }
}

// console.log(new User("dev","3"));

User.prototype.getFirstName= function(){
    console.log(`Your First Name is: ${this.firstName}`);
}
var dev = new User("dev","3")
dev.getCourseCount();
dev.getFirstName();