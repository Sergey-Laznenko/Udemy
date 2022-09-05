const userInfo = {
  userName: 'Sergey',
  age: 38
}

function increaseUserAge(x) {
  const update = {...x}
  update.age += 2
  return update
} 

const updatedUserInfo = increaseUserAge(userInfo)
console.log(userInfo)
console.log(updatedUserInfo)

const newUserInfo = increaseUserAge(updatedUserInfo)
console.log(newUserInfo)

const newUser = increaseUserAge(newUserInfo)
console.log(newUser)