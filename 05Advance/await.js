const uno = () => {
  return "This is One";
};

// const dos = async () => {
//   setTimeout(() => {
//     return " I am Two";
//   }, 3000);
// };

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is Two");
    }, 3000);
  });
};

const tres = () => {
  return "This is Three";
};

dos();
uno();
tres();

const callMe = async () => {
  console.log(uno());
  console.log(await dos());
  console.log(tres());
};
callMe();
