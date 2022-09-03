//! Использование IF в функциях

const sumNumbers = (a, b) => {  //стрелочная функция
  if (typeof a !== 'number' || typeof b !== 'number') { // проверка типа данных
    return 'One of the arguments is NOT a number' // если ложно то выполняется этот блок
  }
  if (a <= 0 || b <= 0) { // проверка второго условия
    return 'Numbers are NOT positive' // если ложно, то выполняется этот блок
  }
  return a + b // если везде условия выполнены, то выполняется этот блок функции
}

console.log(sumNumbers(5, 3)) // 8
console.log(sumNumbers(5, 0)) // Numbers are NOT positive
console.log(sumNumbers(5, '2')) // One of the arguments is NOT a number