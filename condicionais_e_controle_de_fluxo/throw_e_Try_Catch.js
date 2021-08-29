function sayMyName(name = '') {
  if (name === '') {
    throw new Error('Nome é necessário')
  }

  console.log(name)
}

try {
  sayMyName('Beatriz')
} catch (e) {
  console.log(e)
}

console.log('após o try/catch')
