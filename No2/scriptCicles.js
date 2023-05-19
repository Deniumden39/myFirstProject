`use strict`;

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

// *
// **
// ***
// ****
// *****
// ******

let result = ``;
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += `*`;
  }

  result += `\n`;
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) console.log(`Third level: ${k}`);
    }
  }
}

//FUNCTIONS//

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage(`HW!`);
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 3));

function ret() {
  let num = 50;
  //
  //

  ///
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log(`hellow!`);
};

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 3));

const calc = (a, b) => {
  return a + b;
};

//CURRENCY RATE

const usdRate = 28;
const eurRate = 32;
const discount = 0.9;

function convert(amount, Rate) {
  return Rate * amount;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(500, usdRate));

convert(500, usdRate);
convert(500, eurRate);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log(`done`);
}

test();

function doNothing() {}
console.log(doNothing() === underfind);

//#1//

function sayHello(name) {
  console.log(`Привет ${name}!`);
}

sayHello(`Денис`);

//#2//

function returnNeiborNumb(i) {
  for (let j = i - 1; j < i + 2; j++) {
    console.log(j);
  }
}
returnNeiborNumb(5);

function returnNeiborNumb(i) {
  return [i - 1, i, i + 1];
}
returnNeiborNumb(5);

//#3//

function getMathResult(base, iterr) {
  let result = ``;
  if (typeof iterr == `number` && iterr > 0) {
    for (let i = 1; i <= iterr; i++) {
      let space = `---`;
      if (i * base < iterr * base) {
        space = `---`;
      } else {
        space = ``;
      }

      result += `${base * i}${space}`;
    }

    console.log(result);
  } else {
    console.log(base);
  }
}

getMathResult(10, `5w`);

const str = `test`;

console.log(str.toUpperCase());
console.log(str);

let fruit = `Some fruit`;

console.log(fruit.indexOf(`fruit`));

const logg = `Hellow world!`;

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.ssubstr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = `12.2px`;
console.log(parseInt(test));
console.log(parseFloat(test));
