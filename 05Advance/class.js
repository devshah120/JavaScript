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
}

module.exports = User;
