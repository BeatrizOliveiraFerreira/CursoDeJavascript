// Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas escolares em caracteres tipo A B C

// * de 90 para cima - A

// * entre 80 - 89 - B

// * entre 70 - 79 - C

// * entre 60 - 69 - D

// * menor que 60 - F

let notas = 60
let notasA = notas >= 90 && notas <= 100
let notasB = notas >= 80 && notas <= 89
let notasC = notas >= 70 && notas <= 79
let notasD = notas >= 60 && notas <= 69
let notasF = notas < 60 && notas >= 0
if (notasA) {
  console.log('A')
} else if (notasB) {
  console.log('B')
} else if (notasC) {
  console.log('C')
} else if (notasD) {
  console.log('D')
} else if (notasF) {
  console.log('F')
} else {
  console.log('Nota inválida')
}
