`use strict`;
// Передача по ссылке или по значению, Spread оператор (ES6-ES9)
// ============================

let a = 5,
  b = a;

b = b + 5;

console.log(b);
console.log(a);

// [Running] node "c:\Users\PAVILION\Documents\TUTOR\JavaScript\Tutor Field\tempCodeRunnerFile.js"
// 10
// 5

const obj = {
  a: 5,
  b: 1,
};
const copy = obj; //Link <==

copy.a = 10;

console.log(copy);
console.log(obj);

// [Running] node "c:\Users\PAVILION\Documents\TUTOR\JavaScript\Tutor Field\tempCodeRunnerFile.js"
// { a: 10, b: 1 }
// { a: 10, b: 1 }

// Поверхностная копия объекта
// =============================
// #1 `for it` method
function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 11;
newNumbers.c.x = 11;

console.log(newNumbers);
console.log(numbers);

// [Running] node "c:\Users\PAVILION\Documents\TUTOR\JavaScript\Tutor Field\tempCodeRunnerFile.js"
// { a: 11, b: 5, c: { x: 11, y: 4 } }
// { a: 2, b: 5, c: { x: 11, y: 4 } }

// #2 `Object.assign` method

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));
// [Running] node "c:\Users\PAVILION\Documents\TUTOR\JavaScript\Tutor Field\tempCodeRunnerFile.js"
// { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }

const oldArray = [`a`, `b`, `c`];
const newArray = oldArray.slice();
newArray[1] = `asd`;
console.log(newArray);
console.log(oldArray);

// [Running] node "c:\Users\PAVILION\Documents\TUTOR\JavaScript\Tutor Field\tempCodeRunnerFile.js"
// [ 'a', 'asd', 'c' ]
// [ 'a', 'b', 'c' ]

// Оператор разворота -spread (...)

const video = [`youtube`, `vimeo`, `rutube`],
  blogs = [`wordpress`, `lifejornal`, `blogger`],
  internet = [...video, ...blogs, `vk`, `fb`];

console.log(internet);

//

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

//

const array = ["a", "b"];

const newArray = [...array];

const q = {
  one: 1,
  two: 2,
};

const newObj = { ...q };
console.log(newObj);
