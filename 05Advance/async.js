const uno = () => {
  console.log("This is One");
};

const dos = () => {
  setTimeout(() => {
    console.log("wohooooo");
  }, 3000);
//   setInterval(() => {
//     let count = 1;
//     if (count < 10) {
//       count++;
//       console.log("wohooooo");
//     }
//   }, 3000);
  console.log("This is Two");
};

const tres = () => {
  console.log("This is Three");
};

dos();
uno();
tres();
