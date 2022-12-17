console.log(this);

// var game = "basketball";

// function sayName() {
//   var name = "Dev";
//   console.log("hi",this);
// }

// sayName();

//For all regular function calls, this points to window object

var user={
  firstName:"Dev",
  courseCount:4,
  getCourseCount: function(){
    console.log("Line 18",this);
    function sayHello(){
      console.log("Hello");
      console.log("Line 21",this);
    }
    sayHello();
  },
};

user.getCourseCount()