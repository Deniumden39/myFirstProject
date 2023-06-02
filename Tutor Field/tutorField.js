`use strict`;

// 36. Основы ООП, прототипно-ориентированное наследование
// ------------------------------------------------------

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello!");
  },
};
// const john={
//   health:100
// };
// Object.setPrototypeOf(john, soldier);
const john = Object.create(soldier);
john.sayHello();

// [Running] node "c:\Users\PAVILION\Documents\TUTOR\JavaScript\Tutor Field\tempCodeRunnerFile.js"
// Hello!

// 37. Практика , ч4. Используем объекты
// =============================================================
