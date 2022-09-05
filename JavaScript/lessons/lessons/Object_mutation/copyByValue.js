//* Мутация примитивных типов

const a = 10

let b = a // Копирование значения (copyByValue)

b = 30

console.log(a)
// 10
console.log(b)
// 30

//* Копирование объекта (мутирование)
const person = {
  name: 'Bob',
  age: 25
}

const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)

//! При таком виде копирования, надо помнить что при изменении копии, так же будет изменён и исходный объект, так как при таком копировании копируется непосредственно ССЫЛКА, а не сам объект