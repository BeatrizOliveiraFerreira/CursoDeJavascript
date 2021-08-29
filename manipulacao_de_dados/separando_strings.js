let phrase = "Eu quero viver o amor"
console.log("Frase normal: " + phrase)
let myArray = phrase.split(" ")
console.log('Frase com o split() é: ' , myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(`Frase com o join() é: ${phraseWithUnderscore}`)
console.log(`Frase com toLowerCase() é: ${phraseWithUnderscore.toLowerCase()}`)

