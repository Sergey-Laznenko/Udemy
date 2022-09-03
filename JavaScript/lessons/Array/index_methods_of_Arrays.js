// Чтение значений массива через [индек], в тех случаях когда свойства цифровые
//! Порядок элементов в массиве ВАЖЕН, в отличие от объекта

const myArray = [1, true, 'a']

console.log(myArray)
// [ 1, true, 'a' ]
console.log(myArray[0])
// 1
console.log(myArray[1])
// true

//* Добавление значений в массив посредством указания индекса

myArray[3] = 'abc'
console.log(myArray)
// [ 1, true, 'a', 'abc' ]

//* Методы массивов: push, pop, shift, unshift, forEach, map, и т.д. или функции высшего порядка массивов, или функциями/методами прототипов, вызываются посредством точечной записи

//? PUSH  добавляет новый элемент в конец массива. Мутирует объект
myArray.push(false)
console.log(myArray)
// [ 1, true, 'a', 'abc', false ]

//? POP удаляет последний элемент в массиве, вызывается без аргументов. Мутирует объект
myArray.pop()
console.log(myArray)
// [ 1, true, 'a', 'abc' ]

//? так же этот метод при удалении, возвращает последний элемент в массиве, и его можно присвоить переменной. Мутирует объект
const theLast = myArray.pop()
console.log(theLast)
// abc

//? Unshift добавляет элемент в НАЧАЛО массива. Мутирует объект
myArray.unshift(false)
myArray.unshift('Oops')
console.log(myArray)
// [ 'Oops', false, 1, true, 'a' ]

//? shift - удаляет первый элемент в массиве возвращая его по аналогии с pop(). Мутирует объект
myArray.shift()
const myArrayShift = myArray.shift()
console.log(myArray)
//[ 1, true, 'a' ]
console.log(myArrayShift)
// false

