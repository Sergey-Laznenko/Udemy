//! Типы переменных зависят от типа присвоенного значения
//? Есть 2 типа переменных - это Примитивные типы и Ссылочный тип

//* Примитивные типы. Особенностью данного типа является то, что значение переменной, хранится непосредственно в самой переменной

// 1. Number - тип переменной число
const a = 10

// 2. String - тип переменной строка
const b = 'abc'

// 3. boolean - данный тип имеет 2 значение, это True и False
let c = true

// 4. null - данный тип переменной имееет только одно значение, это null. Используется когда надо явно и вручную указать что значение данная переменная НЕ ИМЕЕТ и возможно пожже будет присвоено
let d = null

// 5. undefined - данный тип переменной указывает на то, что значение не существует или в данный момент неопределено
let e

// 6. symbol - с помощью данного типа можно создавать уникальные значения


//* Ссылочный тип. Особеннойстью данного типа является то, что в переменной хранится ссылка на объект, а не сам объект

// Object - это ссылочный тип, в таком случае в перенной хранится не значение, а ссылка на какое то значение. 
//! Это позволяет изменять объект, ссылка которого хранится в переменной объявленной посредством const.
const objectUserInfo = {  // создание переменной и объекта objectUserInfo
  name: 'Sergey', // Тело объекта
  age: 38   // Тело объекта
}

const copyOfUserInfo = objectUserInfo // Объявляем переменную сopyOfUserInfo, и присваиваем ей значение в виде ссылки(так как объекты хранятся в виде ссылок) ранее созданной пременной objectUserInfo

// Доступ к свойствам объекта осуществляется посредством оператора '.'
copyOfUserInfo.age = 39 // данная запись посредством обращения к свойству объекта через оператор'.' позволяет присвоить новое значение свойству age
//! Если данного свойства нет, оно будет создано
objectUserInfo.gender = 'male'// добавляем новое свойство объекту
console.log(objectUserInfo) // вывод объекта на экран

