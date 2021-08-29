console.log("existe x antes do bloco?", x)

{
    var x = 0
}

// // Mas, se for:
var x = 0
console.log("existe x antes do bloco?", x)

{
    let y = 1
    console.log("Existe y depois do bloco?", y)
    // let x = 1
}

let z = 2

{
    z = 0
    console.log("existe z? ", z)
}

console.log("existe z", z)


const w = 3

{
    const w = 4
    console.log("existe w", w)
}

console.log("existe w", w)