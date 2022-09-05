//! Метод map так же ожидает call back функцию в качестве аргумента, но ВОЗВРАЩАЕТ НОВЫЙ масив, другими словами создаёт НОВЫЙ масив, формируя его из результатов call back функции вызванной методом map применённым к другому массиву

const myArray = [1, 2, 3]
console.log(myArray)
// [ 1, 2, 3 ]

const newArray = myArray.map(el => el * 3) // не явный возврат в сокращенной форме
console.log(newArray)
// [ 3, 6, 9 ]

const updatedArray = myArray.map((el) => { // без сокращений, с явным возвратом, без инструкции return значения вернуться undefined. Так как ничего не возвращается
  return el * 4
})

console.log(updatedArray)
// [ 4, 8, 12 ]

const newUpdatedArray = myArray.map(function (el) { // анонимное функциональное выражение, но сократить до НЕЯВНОГО возврата НЕЛЬЗЯ. Так как невный возврат возможен ТОЛЬКО в стрелочных функциях
  return el * 5
})

console.log(newUpdatedArray)
// [ 5, 10, 15 ]