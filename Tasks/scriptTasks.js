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

Что выведет в консоль код?



console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);

// Задачи на логические операторы
// ______________________________________________________

// Выполняется ли условие?

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}




// Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

// Переменная hamburger задана через let, так как const подразумевает 
// какое-либо начальное значение. С const будет ошибка, можете проверить.
// А без значения там undefined, напоминаю 🙂

// Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')

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

// ===============================================================================================

// Coding Exercise 3: Задания на использование циклов и условий

// Задачи:

// Coding Exercise 3: Задания на использование циклов и условий

// #1
// При помощи цикла выведите числа от 5 до 10 в консоль.
// 5 и 10 включительно. Цикл можно использовать любой

let str = ``;
for (i = 5; i <= 10; i++) {
  str += i;
}
console.log(str);

// #2
// При помощи цикла for вывести числа от 20 до 10 в консоль.
// В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

let str = ``;
for (i = 20; i >= 10; i--) {
  if (i == 13) {
    break;
  } else {
    str += `${i} `;
  }
}
console.log(str);

// #3
// При помощи цикла for выведите чётные числа от 2 до 10 включительно

let str = ``;
for (i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    str += `${i} `;
  } else {
    continue;
  }
}
console.log(str);

// #4
// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }


let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
    
  }
  i++;
}

// #5
// Заполните массив цифрами от 5 до 10 включительно.
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arrOfNum = [];
for (i = 5; i <= 10; i++) {
  arrOfNum[i-5]=i;
}
console.log(arrOfNum);



// Coding Exercise 4: (*) Продвинутые задания на использование циклов и условий
// ===============================================================================================

// #1
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно 
// получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив


function firstTask() {
   
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];
  for (let i in arr){
    result[i] = arr[i];
  }
  return result;
}
console.log(firstTask());

// решение


function firstTask() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
  }

  console.log(result);
  return result;
}

firstTask();

// №2
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  for (let i=0; i<data.length; i++) {
    if (typeof(data[i])==`number`){
      data[i] = data[i] * 2;
    } else {
      data[i] = `${data[i]} - done`;
    }
    
}
  return data;
}
console.log(secondTask());

// Coding Exercise 5: (**) Задача на формирование фигуры
// ===============================================================================================

// необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ
//   СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

let result = ``;
const length = 50;
const space = ` `;
const star = `*`;

for (let i = 1; i < length; i++) {
  for (let k = length; k > i; k--) {
    result += space;
  }
  for (let j = 1; j < i + i; j++) {
    result += star;
  }

  result += `\n`;
}

console.log(result);

// Решение

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)


// ===============================================================================================



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

///////////////Coding Exercise 7: (*) Продвинутые задания на использование функций///////////////

// // Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
// (тоже базовая математика, иногда используется в создании анимаций).
// Эта функция принимает в себя целое число со значением длины ребра куба.
// Ответ выведите в формате строки, который изображен в примерах.

// // Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку
// "При вычислении произошла ошибка"

function calculateVolumeAndArea(length) {
  if (typeof length !== `number` || length <= 0) {
    console.log("При вычислении произошла ошибка");
  } else {
    let cubSquare = length * length * 6;
    let cubVolume = length * length * length;
    console.log(
      `Объем куба: ${cubVolume}, площадь всей поверхности: ${cubSquare}`
    );
  }
}
calculateVolumeAndArea(`w`);

// Решение
function calculateVolumeAndArea(length) {
  if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0,
    area = 0;

  volume = length ** 3;
  // length ** 3 - это тоже самое, что и выше или варианты через цикл.
  // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

// Напишите функцию, которая будет определять номер
// купе по переданному ей номеру места. Наглядно

//

function getCoupeNumber(ticketNum) {
  if (
    typeof ticketNum == `number` &&
    ticketNum > 0 &&
    Number.isInteger(ticketNum)
  ) {
    let result = Math.ceil(ticketNum / 4);
    console.log(result);
  } else {
    if (ticketNum > 36 || ticketNum == 0) {
      console.log(`Таких мест в вагоне не существует`);
    } else {
      console.log(`Ошибка. Проверьте правильность введенного номера места`);
    }
  }
}
getCoupeNumber(0);

// Решение
function getCoupeNumber(seatNumber) {
  if (
    typeof seatNumber !== "number" ||
    seatNumber < 0 ||
    !Number.isInteger(seatNumber)
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seatNumber / 4);
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(33));

///////////////Coding Exercise 8: (*) Продвинутые задания на использование функций///////////////
//  #1 Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
// (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку
// "Ошибка, проверьте данные"
// // Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов).
// Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
// Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(minutesNum) {
  if (
    typeof minutesNum !== "number" ||
    minutesNum < 0 ||
    !Number.isInteger(minutesNum)
  ) {
    return "Ошибка, проверьте данные";
  }
  let hrs = 0;
  mnts = 0;
  hrs = Math.floor(minutesNum / 60);
  mnts = Math.round((minutesNum / 60 - hrs) * 60);

  if (hrs > 4 || hrs == 0) {
    return `Это ${hrs} часов и ${mnts} минут`;
  }
  if (hrs == 1) {
    return `Это ${hrs} час и ${mnts} минут`;
  }
  return `Это ${hrs} часа и ${mnts} минут`;
}
console.log(getTimeFromMinutes(523));

// Пример использования switch (сработавший код выделен):

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }
// Здесь оператор switch последовательно сравнит a со всеми вариантами из case.

// #2 Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
// Если один из аргументов не является числом или их меньше 4 - возвращается 0.
// Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(a, b, c, d) {
  if (typeof (a + b + c + d) !== "number" || a * b * c * d == 0) {
    return 0;
  }

  return Math.max(a, b, c, d);
}
console.log(findMaxNumber(1, 5, 6.6, 11));

// (**) Задача с собеседований на числа Фибоначчи!!!!!!!
// ---------------------------------------------

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
// Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

function fib(fibNum) {
  let strFib = ``;
  let a = 0;
  b = 1;
  firstNum = 0;
  secNum = 1;
  if (typeof fibNum !== "number" || fibNum <= 0 || !Number.isInteger(fibNum)) {
    return "";
  }
  if (fibNum === 1) {
    return firstNum;
  }
  if (fibNum === 2) {
    return `${firstNum} ${secNum}`;
  }
  for (i = 0; i <= fibNum; i++) {
    c = a + b;
    a = b;
    b = c;
    strFib += `${b} `;
  }

  return `0 1 ${strFib}`;
}
console.log(fib(1));

// Coding Exercise 10: Задачи на работу с объектами
// ---------------------------------------------

// №1
// Напишите функцию showExperience, которая будет принимать в
// себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
};

function showExperience(personalPlanPeter) {
  const { exp } = personalPlanPeter.skills;
  return exp;
}
console.log(showExperience(personalPlanPeter));

// №2
// Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми
// данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков.
// Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
};

function showProgrammingLangs(personalPlanPeter) {
  let str = "";
  const { programmingLangs } = personalPlanPeter.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(showExperience(personalPlanPeter));

// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в
// верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (personalPlanPeter) {
    let str = ``;
    const { age } = personalPlanPeter;
    const { languages } = personalPlanPeter.skills;
    str = `Мне ${age} и я владею языками: `;

    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });

    return str;
  },
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// Coding Exercise 11+12: Задачи на работу с массивами
// ---------------------------------------------
// №1
// Напишите функцию showFamily, которая будет принимать в себя массив строк и
// возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то
// выводится сообщение 'Семья пуста'

const family = [`Peter`, `Ann`, `Alex`, `Linda`];

function showFamily(family) {
  let str = ``;
  if (family.length == 0) {
    str += `Семья пуста`;
  } else {
    str += `Семья состоит из: ${family.join(`, `)}`;
    return str;
  }
}

console.log(showFamily(family));

// #2
// напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет
// выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых
// разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в
// один формат для правильной работы.

const favoriteCities = [`Lisbon`, `rOme`, `MILAN`, `duBLin`];

function standardizeStrings(favoriteCities) {
  let str = ``;
  for (let key in favoriteCities) {
    str += `${favoriteCities[key].toLowerCase()}\n`;
  }
  return str;
}

console.log(standardizeStrings(favoriteCities));

// Решение

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
}

standardizeStrings(favoriteCities);

// #3
// Задача с собеседований. Напишите функцию reverse,
// которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке.
// Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

const someString = "This is some strange string";

function reverse(someString) {
  return someString.split(``).reverse().join(``);
}

console.log(reverse(someString));

// Решение

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  // Самый оптимальный вариант решения
  return str.split("").reverse().join("");

  // Решение при помощи цикла
  // let newStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //     newStr += str[i];
  // }
  // return newStr
}

console.log(reverse(someString));

// №4
//  Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги
// из двух разных банков в разных валютах. Один банк основной с базовыми валютами,
// второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два
// аргумента: первый - это массив со всеми доступными валютами из двух банков сразу
// (сейчас представим, что они не могут повторяться), второй - необязательный аргумент,
// который указывает ту валюту, которая сейчас закончилась в банкомате.
// Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
// Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже.
// Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков,
// причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];
const allCurr = [...baseCurrencies, ...additionalCurrencies];
// const nilCurr = ["UAH"];

function availableCurr(allCurr, nilCurr) {
  let str = "";
  if (allCurr.length === 0) {
    str = `Нет доступных валют`;
  } else {
    for (let key in allCurr) {
      if (allCurr[key] == nilCurr) {
        continue;
      } else {
        // str += `\n`;
        str += `\n${allCurr[key]}`;
      }
    }
  }

  return str;
}

console.log(availableCurr(allCurr, `UAH`));

// Решение

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  arr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  arr.forEach(function (curr, i) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });

  // Или
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === missingCurr) {
  //         continue;
  //     }
  //     str += `${arr[i]}\n`;
  // }

  return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");

// Coding Exercise 13: (*) Продвинутая задача на работу с объектами и массивами
// ================================================================================================
// №1
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте
// shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и
// ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и
// бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
// Если бюджета хватает для отопления всего объема торгового центра - выводится
// 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота,
//   бюджет или подставляется вообще другой объект.

const shoppingMallData = {
  shops: [
    {
      wid: 10,
      leng: 5,
    },
    {
      wid: 15,
      leng: 7,
    },
    {
      wid: 20,
      leng: 5,
    },
    {
      wid: 8,
      leng: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};


function isBudgetEnough(data) {
  let ttlSq = 0;
  let ttlBudget = 0;

  data.shops.forEach(shops => {
    ttlSq += shops.wid * shops.leng;
  });


  ttlBudget = ttlSq * data.moneyPer1m3*data.height
  
  if(ttlBudget>=data.budget){
return `Бюджета достаточно. Общая площадь: ${ttlSq}, бюджет: ${ttlBudget}.`;

  }else{
    return `Бюджета недостаточно Общая площадь: ${ttlSq}, бюджет: ${ttlBudget}.`;
  } 
}

console.log(isBudgetEnough(shoppingMallData));

// Coding Exercise 14: (*) Продвинутая задача на работу с объектами и массивами
// ---------------------------------------------Н Е  В Ы П  О Л Н Е Н А!!!!!!!!!!!!!!!!!!!!
// №2
// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups,
// которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека
// в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция
// возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  sortAlphStudents = students.sort();
  let size = 3; //размер подмассива
  let studentsGroup = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(sortAlphStudents.length / size); i++) {
    studentsGroup[i] = sortAlphStudents.slice(i * size, i * size + size);
    if (studentsGroup[i].length == size) {
      studentsGroup[i];
    } else {
      studentsGroup[i] = `Оставшиеся студенты: ${sortAlphStudents.slice(
        i * size,
        i * size + size
      )}`;
    }
  }
  console.log(studentsGroup);
}
sortStudentsByGroups(students);

// Решение
function sortStudentsByGroups(arr) {
  arr.sort();
  const a = [],
    b = [],
    c = [],
    rest = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }
  return [
    a,
    b,
    c,
    `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
  ];
}

sortStudentsByGroups(students);
