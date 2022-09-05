//! Метода - это свойства объекта, значение которого - функция

const myCity = {  // объект
  city: 'Wroclaw',  //свойство объекта, значение которого string
  cityGreeting: function () { // свойство объекта, значение которого функция
    console.log('Greetings!!')  
  }
}

myCity.cityGreeting() // вызов свойства, значение которого функция
// Greetings!!

//! Если значением свойства объекта является функция, то слово функция можно пропустить

const myCity2 = {
  city: 'Wroclaw',
  cityGreeting() {  // опусаем объявление function
    console.log('Hey There!!')
  }
}

myCity2.cityGreeting()

//* Доступ к значению свойства объекта
myCity.city

//* доступ к вызову метода объекта
myCity.cityGreeting() // вызов мтода посредством ()