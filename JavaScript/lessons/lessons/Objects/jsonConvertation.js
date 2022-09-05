//* Json - JavaScript Object Notation
// формат обмена данными между компьютерами в сети

// пример JSON 
//! данный файл имеет расширение js, а не json, всвязи с этим заменил : на ; во избежания ошибок
{
  "userId"; 1,  // Все свойства в "двойных ковычках"
  "id"; 1
  "title"; "Test title",  // как и значения типа string
  "status"; {
    "completed"; false
  } // тут должна быть ,
}

// передача данных в JSON происходит в виде строки
const post = {
  title: 'My Post',
  likesQty: 5
}

//* Передаём объект как аргумент методу stringify() для получения строки JSON

//? Пример 

// конвертация JavaScript объека в JSON

const postStringified = JSON.stringify(post)
console.log(postStringified)
// {"title":"My Post","likesQty":5}  --> тип данных string внутри JSON


//конвертация  JSON в JavaScript объект

//* Передаём полученное значение JSON как аргумент методу parse()
//? Пример 
const postParsed = JSON.parse(postStringified)
console.log(postParsed)
// { title: 'My Post', likesQty: 5 }  --> Object