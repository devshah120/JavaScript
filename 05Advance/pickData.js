//Destructure the data array to var
const user = ["Dev", 3, "admin"];
// var role = user[2];
// var coursecount = user[1];
// var name = user[0];

//console.log(role);

const [name, coursecount1, role] = user;

console.log(coursecount1);

// Destructure the data var object to var
const val = {
  uname: "dev",
  ucourse: 3,
  urole: "admin",
};

console.log(val.urole);

const { uname,ucourse,urole } = val;
console.log(ucourse);