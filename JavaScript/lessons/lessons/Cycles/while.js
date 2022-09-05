//! Цикл while позволяет выполнять блок кода, до тех пор, пока условие правдиво
//? Если условие изначально false, то цикл НЕ ЗАПУСТИТСЯ

// while (условие) {
  // Блок кода, выполняемый на КАЖДОЙ итерации
// }

//* Пример

let i = 0

while (i < 5) {
  console.log(i)
  i++ // переменная которая влияет на условие внутри цикла
}