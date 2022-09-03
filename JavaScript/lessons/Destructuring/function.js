//! Деструктуризация в функциях, иными словами объявление переменных в блоке параметров функции и присвоение им значений равных значениям свойств какого либо объекта

const userProfile = { // Объект
  userName: 'Sergey',
  commentsQty: 23,
  hasSignedAgreement: false
}

const userInfo = ({userName, commentsQty}) => { // объявление стрелочной функции userInfo, и 
  if (!commentsQty) { // если НЕ commentsQty, то 
    return `User ${userName} has no comments` // возвращаем эту строку
  }
  return `User ${userName} has ${commentsQty} comments` // иначе, эту
}

console.log(userInfo(userProfile))
// User Sergey has 23 comments

//? Вызывая функцию userInfo, в качестве параметров мы осуществляем деструктуризацию свойств объекта (как в случае деструктуризации объектов), иными словами в блоке параметров функции мы объявляем новые переменные userName и commentsQty и присваиваем им значения которые равны значениям указанных свойств(userName и commentsQty) объекта userProfile