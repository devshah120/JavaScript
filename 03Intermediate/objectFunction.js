var user = {
  firstName: "Dev",
  lastName: "Shah",
  role: "admin",
  loginCount: 33,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(this.courseName);
  },
  courseCount: function () {
    return `${this.firstName} is enroll in total of ${this.courseList.length} courses.`;
  },
};

console.log(user.firstName);
console.log(user.courseCount());
user.buyCourse("React JS");
console.log(user.courseCount());
