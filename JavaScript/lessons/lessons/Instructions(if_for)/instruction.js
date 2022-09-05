// Инструкции могут быть

// 1. Выражениями
// 2. Инструкциями
// 3. Выражениями-инструкциями

//! Выражение всегда возвращает значение
//? Инструкция выполняет действия и отличается от выражения ; в конце строки

//* Примеры инструкций


let a; // в конце инструкций надо писать ;
// между инструкциями надо оставляеть пустую строку
const b = 5;

if (a > b) {
  console.log('A is larger');
} // строки которые заканчиваются скобками не требуют ;

for (let i = 0; i++; i < 5) {
  console.log(i);
} // строки которые заканчиваются скобками не требуют ;
//! НО можно и не писать ;


//* Примеры выражений-инструкций
//! главной отличительной чертой является написание на ОТДЕЛЬНОЙ СТРОКЕ
//? Инструкция НЕ МОЖЕТ быть трансформирована в ВЫРАЖЕНИЕ 

// 'abc';
// a = a + 3;
// c = a + b;
// d = 'Good ' + 'Evening'; -> без ; это выражение, а с ; уже инструкция

// myFunction(c, d);
// console.log('Hey');

//* ВЫРАЖЕНИЯ могут быть использованы как АРГУМЕНТЫ в вызовах функций, а инструкции НЕТ
//* Примеры

function myFn(a) {
  console.log(a);
}

// const b = true;
let c = 10;

myFn(2 + 3) // 5 --> выражение
myFn(b) // true --> 
myFn(c = c + 1) // 11
// myFn(c = c + 1;) --> инструкций
// myFn(let d) --> инструкция