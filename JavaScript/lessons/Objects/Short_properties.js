
// Использование коротких записей созданных переменных посредством const в объектахб НЕ рекомендуется использовать переменные которые объявлены посредством let, для избежания проблем с ПЕРЕНАЗНАЧЕНИЕМ

const userName = 'Sergey'
const age = '38'
let gender = 'male'

const userProfile = {
  age,
  userName,
  hasSignedAgreement: false,
  gender
}

