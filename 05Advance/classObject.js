//import User from "./class.js";

const User = require("./class.js");
const Dev = new User("Dev", "Dev@gmail.com");

console.log(Dev.getInfo());

Dev.enrollCourse("Javascript Bootcamp");
Dev.enrollCourse("ReactJS Bootcamp");

console.log(Dev.getCourseInfo());

course = Dev.getCourseInfo();

course.forEach((c) => {
  console.log(c);
});
