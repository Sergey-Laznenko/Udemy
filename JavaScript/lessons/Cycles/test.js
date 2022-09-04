const userProfile = {
  userName: 'Sergey',
  userSurname: 'Laznenko',
  userAge: 38,
  userGender: 'male'
}

for (const el in userProfile) {
  console.log(userProfile[el])
}
