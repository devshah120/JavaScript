const name = {
    firstName : "Dev",
    lastName : "Shah",
    role : "admin",
    courseCount:3,
    getInfo: function() {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        His role is ${this.role}
        and he is studied ${this.courseCount} Courses.
        `);
    }
}
//name.getInfo();

const dj = {
    firstName : "DJ",
    lastName : "Roak",
    role : "sub-admin",
    courseCount:4,
    
}

//dj.getInfo();
//first (dj) for reffernce(point) to dj and second for call the function 
name.getInfo.bind(dj)();

name.getInfo.call(dj)
