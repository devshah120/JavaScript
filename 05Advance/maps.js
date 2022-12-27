var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for (let keys of myMap.keys()) {
  console.log(`key of myMap is ${keys}`);
}

for (let values of myMap.values()) {
  console.log(`value of myMap is ${values}`);
}
//for of loop gives keys first & then after values
for (let [keys, values] of myMap) {
  console.log(`key of myMap is ${keys} & value of myMap is ${values}`);
}

//foreach loop gives values first & then after keys
myMap.forEach((v, k) => {
  console.log(`value is ${v} & key is ${k}`);
});

myMap.delete(2);
console.log(myMap);
console.log(myMap.size);