function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está" + " andando"
    }
}
const beatriz = new Person("Beatriz")
const joana = new Person('Joana')
console.log(beatriz.walk())
console.log('<br></br>')
console.log(joana.walk())
console.log('<br></br>')

function Numero(conta){
    this.conta = conta
    this.calcular = function() {
        return "esta conta" + " = " + this.conta
        
    }
}
const soma = new Numero(1 + 2)
const subtracao = new Numero(10 -5)
console.log(soma.calcular())
console.log("<br></br>")
console.log(subtracao.calcular())