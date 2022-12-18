var counter = document.getElementById("counter");
var followers = document.getElementById("followers");

counter.innerHTML = "1001";

let count = 1;

 setInterval(() => {
  if (count <= 1000) {
    count++;
    counter.innerHTML = count;
  }
 }, 1);


setTimeout(() => {
    followers.innerHTML = "Followers In Instagram";
}, 10000);
