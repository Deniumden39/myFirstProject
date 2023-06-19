"use strict";
// 40. Замыкание и лексическое окружение

// let num = 5;
// debugger;

// function logNumber() {
//   console.log(num);
//   debugger;
// }

// num = 6;

// logNumber();
// debugger;

// num = 8;

// logNumber();
// debugger;

// =============== Counter

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    debugger;
    counter = counter + 1;
    debugger;
    return counter;
    debugger;
  };
  return myFunction;
}
debugger;
const increment = createCounter();
debugger;
const c1 = increment();
debugger;
const c2 = increment();
debugger;
const c3 = increment();
debugger;

console.log(c1, c2, c3);

// Цикл в цикле
// ===================================================
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let num = 3;
  }
  console.log(num); //почему код выдает ошибку? Потому что num существует только внутри цикла j
}
