// 1- Declare uma variável de nome weight
// var weight

// 2- Que tipo de dado é a variável acima?
// console.log(typeof weight) // undefined

// 3. Declare uma variável e atribua valores para cada um dos dados:
//     * name: String
//     * age: Number (integer)
//     * stars: Number (float)
//     * isSubscribed: Boolean

// let name, age, stars, isSubscribed
// name = "Beatriz"
// age = 24
// stars = 24.5
// isSubscribed = true

// 4- Que tipo de dado é a variável abaixo?
// let student = {};
// console.log(typeof student)

// 4.1- Atribua a ela os mesmos valores e propriedades do exercício 3
let student = {
    name: "Beatriz",
    age: 24,
    stars: 24.5,
    weight: 100,
    isSubscribed: true
}

console.log(student)

/*
4.2- Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atenção: Substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto 
*/
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
5- Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

// let students = []

/*
6- Reatribua valor para variável acima, colocando dentro dela o objeto student da questão 4.
(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele dentro do Array)
*/

let students = [
    student
]

console.log(students)

// 7- Coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8- Crie um novo student e coloque na posição 1 do Array students
const novo_student = {
    name: "Beatriz",
    age: 24,
    weight: 100,
    isSubscribed: true
}

students = [
    student,
    novo_student
]

console.log(students)

// 9- Qual a resposta do código abaixo e por que?
console.log(a)
var a = 1 

// undefined por que foi gerado um hoisting, a variável não foi definida.



