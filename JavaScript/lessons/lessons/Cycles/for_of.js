//! Новый цикл, который появился в ES6. НЕЛЬЗЯ использовать для объектов, так как очерёдность в объетк не важна 

// for (Element of Iterable) {
  //действия с определённым элементом
// }
//? Где Iterable это переменная(которая содержит значение)/объект/массив по которому можно итерироваться иными словами это объект элементы которого можно перебирать, например строка(string)

//* Пример string

const myString = 'Sergey'

for (const letter of myString) {
  console.log(letter)
}

//* Пример array

const myArray = [true, 10, 'abs', null]

for (const el of myArray) {
  console.log(el)
}

