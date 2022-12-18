var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is: ${this.courseCount}`);
    }
}

console.log(new User("dev","3"));
console.log(new User("shah","3"));