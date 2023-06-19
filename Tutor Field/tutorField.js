"use strict";
// Динамическая типизация в JS

// to string

// 1)

console.log(typeof String(null)); //string

// 2) Конкатенация

console.log(typeof (5 + " ")); //string

const num = 5;

console.log("https//vk.com/catalog/" + num);

const fontSize = 26 + "px";

// to number

// 1)

console.log(typeof Number("4")); //number

// 2) унарный +

console.log(typeof +"4"); //number

// 3)

console.log(typeof parseInt("15px", 10)); //number

let answ = +prompt("Hellow", "");

// to boolean

// 1)
0, "", null, underind, NaN;
-false;

let switcher = null;

if (switcher) {
  console.log("Working");
}

switcher = 1;
if (switcher) {
  console.log("Working");
}

// 2)

console.log(typeof Boolean("4")); //boolean

// 3)

console.log(typeof !!"4444"); //boolean
