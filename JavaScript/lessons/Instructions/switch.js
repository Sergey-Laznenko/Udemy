//! Альтернатива использования инструкции if/else/if, используется когда много разных условий

// switch (выражение) {
  // case A:
    // Действия если выражение === А
    // break
  // case B:
    // Действия если выражение === B
    // break
  // default:
    // действия по умолчанию


//* Пример

const month = 3

switch (month) {
  case 12: // Если значение month равняется 12, 
    console.log('December') // то будет выполнятся этот блок
    break // если условия выполнены то, инструкция прекращается
  case 1:
    console.log('January')
    break
  case 2:
    console.log('February')
    break
  default:
    console.log('Its NOT a winter month')
}