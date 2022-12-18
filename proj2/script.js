const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).accentColor);

const RGBColor = (selectedValue) => {
  return window.getComputedStyle(selectedValue).backgroundColor;
};

var color = RGBColor(cyan);
// cyan.addEventListener("mouseenter", () => {
//   center.style.background = color;
// });


const colorChanger = (element , color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
      });
};

colorChanger(red,RGBColor(red));
colorChanger(cyan,RGBColor(cyan));
colorChanger(violet,RGBColor(violet));
colorChanger(orange,RGBColor(orange));
colorChanger(pink,RGBColor(pink));