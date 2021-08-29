function sayMyName(name) {
    console.log('Antes de executar uma função callback')
    name()
    console.log('Depois de uma função callback')
}

// sayMyName('Beatriz')

// sayMyName({name: 'Beatriz'})

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)