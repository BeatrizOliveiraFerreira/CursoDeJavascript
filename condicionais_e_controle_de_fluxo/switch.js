function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      result = console.log('Não implementado')
      break
  }

  return result
}

console.log(`4 + 8 = ${calculate(4, '+', 8)}`)
console.log(`4 * 8 = ${calculate(4, '*', 8)}`)
console.log(`4 - 8 = ${calculate(4, '-', 8)}`)
console.log(`4 / 8 = ${calculate(4, '/', 8)}`)
console.log(`4 % 8 = ${calculate(4, '%', 8)}`)
