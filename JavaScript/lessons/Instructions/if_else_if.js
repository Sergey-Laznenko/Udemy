

//if (условия 1) {
  // блок кода, выполняемый однократно, если условие 1 правдиво
//} else if (условие 2){
  // блок кода, выполняемый однократно, если условие 2 правдиво
//} else {
  // блок кода выполняется если предыдущие условия ложны
//}

//* для улучшения читабельности предпочтительней использовать инструкции if

//if (условия 1) {
  // блок кода, выполняемый однократно, если условие 1 правдиво
//}

//if (условия 2) {
  // блок кода, выполняемый однократно, если условие 2 правдиво
//}

//if (условия 3) {
  // блок кода, выполняемый однократно, если условие 3 правдиво
//}

const age = 7

if (age >= 18) {
  console.log('Is adult')
} else if (age >= 12) {
  console.log('Is teenager')
} else {
  console.log('Is child')
}
// Is adult

//! предпочтительней использовать только if, для улучшения читабельности кода

const userAge = 38

if (userAge >= 18) {console.log('Is adult')}

if (userAge >= 12 && userAge < 18) {console.log('Is teenager')}

if (userAge < 12) {console.log('Is child')}