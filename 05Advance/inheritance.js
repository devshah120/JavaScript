class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return { name: this.name, email: this.email };
  }

  courseList = [];

  enrollCourse(name) {
    this.courseList.push(name);
  }

  getCourseInfo() {
    return this.courseList;
  }

  login() {
    return "i am a login";
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  sublogin() {
    return "Hello i am a sub-admin";
  }

  login() {
    return "I am a logged in a subadmin";
  }
}
module.exports = User;

var tom = new User("tom", "tom@gmail.com");
tom.enrollCourse("Java");
console.log(tom.getInfo());
console.log(tom.getCourseInfo());

var sub = new SubAdmin("a", "abc@gmail.com");
console.log(sub.getInfo());
console.log(sub.sublogin());
console.log(sub.login());

// in inheritance you can not access functions who can be static
// by direct it's object if you want to use you want call it directly by it's class name
//example:
// console.log(User.login());
