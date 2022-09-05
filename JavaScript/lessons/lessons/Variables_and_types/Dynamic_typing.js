
//* Динамическая типизация
let a = 'abc' // тип данных strig
console.log(typeof(a)) // вывод на экран типа переменной а, посредством метода typeof

b = 10  // тип данных number
console.log(typeof(b))

b = 'abc' // тип данных string
console.log(typeof(b))

//* Статическая типизация (пример не из JavaScript)

// string a = 'abc' --> тип данных string

// int b = 10  --> тип данных number

// b = 'abc' // Error, нельзя изменить тип данных

//? Поэтому JavaScript считается динмически типизируемым языком

// Пример
let x = 10  // number
x = true  //boolean
x = 'Sergey'  // string
x = undefined // unfefind

// Пример
function e() {
  console.log('Hey There')
}

e() // Hey There

e = 10  // изменение типа данных на тип данных number

e() // Uncaught TypeError, в переменной больше нет функции, теперь это тип данных number

//! Во избежании проблем связанные с динамической типизацией, РЕКОМЕНДУЕТСЯ везде где только можно при объявлении переменных использовать --> const <--

const g = () => { // объявление переменной и присвоение значение стрелочной функции
  console.log('Hey There')
} 

g() // Hey There

// g = 10 // TypeError