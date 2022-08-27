const person = {
  name: 'Bob',
  age: 25
}

const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)

// Как изменить объект копии, при этом не затрагивая оригинал объекта

                        // Вариант 1
// При 1м варианте, если объект имеет вложенные свойства, то ссылки сохраняются, новые вложенные свойства копируемого объекта не создаются

const person1 = {
  name: 'Sergey',
  age: 38
}

const person3 = Object.assign({}, person1) // копируем объект(не ссылку)
person3.age = 39

console.log(person1.age)
console.log(person3.age)


                        // Вариант 2

const person4 = {
  name: 'Sergey',
  age: 38
}

const person5 = {...person4} // так же копируем объект(не ссылку)
person5.age = 39

console.log(person4.age)
console.log(person5.age)                 

                        // Вариант 3 

// Позволяет избежать мутаций изначального объекта. Копирует так же и вложенные свойства объекта

const person6 = {
  name: 'Bob',
  age: 20
}

const person7 = JSON.parse(JSON.stringify(person6))

person7.age = 25

console.log(person6.age)
console.log(person7.age)