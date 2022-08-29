
//? Как изменить объект копии, при этом не затрагивая оригинал объекта

                        
const person = {
  name: 'Sergey',
  age: 38
}

                          //* Вариант 1


//! При 1м варианте, если объект имеет вложенные свойства, то ссылки сохраняются, новые вложенные свойства копируемого объекта не создаются

const personOne = Object.assign({}, person) // копируем объект(не ссылку)
personOne.age = 39


console.log('Вариант 1')// Разделитель 

console.log(person.age)
console.log(personOne.age)


                        //* Вариант 2

//! посредством оператора ... Вложенные обекты НЕ копируются(только ссылки) Просто короче Вариант1

const personTwo = {...personOne} // так же копируем объект(не ссылку)
personTwo.age = 40

console.log('Вариант 2')// Разделитель

console.log(person.age)
console.log(personOne.age)
console.log(personTwo.age)                 

                        //* Вариант 3 

//! Позволяет избежать мутаций изначального объекта. Копирует так же и вложенные свойства объекта

const personThree = JSON.parse(JSON.stringify(personTwo)) // работает справа на лево --> сначала конвертируем объект в строку JSON методом stringify, затем строку JSON конвертируем в объект JavaScript методом parse. Таким образом создаётся полностью НОВЫЙ объект со всеми вложенными объектами, БЕЗ МУТАЦИЙ

personThree.age = 25

console.log('Вариант 3')// Разделитель 

console.log(personOne.age)
console.log(personTwo.age) 
console.log(personThree.age) 