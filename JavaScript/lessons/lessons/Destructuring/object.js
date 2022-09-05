//! Используется для присвоения значений переменным используя свойства объектов

const userProfile = { // Объект
  userName: 'Sergey',
  commentsQty: 23,
  hasSignedAgreement: false
}

//* Объявление новых переменных (можно как const так и let) и присваивание значений, на основе значений свойств объекта(userProfile)
const { userName, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile
//* Названия создаваемых переменных должны совпадать с названиями свойств объекта

console.log(userName)
// Sergey
console.log(commentsQty)
// 23