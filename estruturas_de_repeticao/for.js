// Estrutura de repetição
// for

let ate = '============== i até 10: ================ '
console.log(ate)

for (let i = 1; i <= 10; i++) {
  console.log(i)
}

let fechou_o_i = '================== Fechou o i até 10 ================== '
console.log(fechou_o_i)

let cemDecrescente = '=========== 100 descrecente: =============='
console.log(cemDecrescente)

console.log(cemDecrescente)
for (let i = 100; i >= 0; i--) {
  console.log(1)
}

let fechouCemDecrescente = ' ====== Fechou o 100 decrescente ========='
console.log(fechouCemDecrescente)

let parouno50 = '================= parou no 50 ====================== '
console.log(parouno50)
for (let i = 100; i >= 0; i--) {
  if (i === 50) {
    break
  }
  console.log(i)
}

let fechouParouno50 = '====== Fechou o parou no 50 ========= '
console.log(fechouParouno50)

let loopContinue = '====== Loop continue =========== '
console.log(loopContinue)

for (let i = 10; i >= 0; i--) {
  if (i === 5) {
    continue
  }
  console.log(i)
}

let fechouLoopContinue = '====== Fechou o loop continue =========== '
console.log(fechouLoopContinue)
