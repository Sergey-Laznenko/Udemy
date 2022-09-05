//! Для корректной работы импорта надо поменять расширение с js на mjs
// для запуска в терминале просто написать node имя файла

//!ВСЕ импорты пишутся всегда вначале

import printMyName from './moduleOne.mjs'
import sumNumbers from './moduleOne.mjs'
import { // импорт 2х переменных
  one, // названия переменных должны совпадать при импорте
  two as renamedTwo // Если надо переименовать переменную, через as
} from './several_exports.mjs'

printMyName()

const resultOne = sumNumbers(10, 2)
console.log(resultOne)

//! При использовании default, в файле с экспортом мы можем изменить название экспортруемой функции в файле с ипортом

console.log(one)
console.log(renamedTwo)
