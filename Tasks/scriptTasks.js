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

// ===============================================================================================

// Coding Exercise 3: Задания на использование циклов и условий

// Задачи:

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно.
// Цикл можно использовать любой

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).
// Когда цикл дойдет до числа 13 - остановить весь цикл

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

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
// Заполните массив цифрами от 5 до 10 включительно.
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

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
