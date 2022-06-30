const primeiroElemento = arrayouString => arrayouString[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Calors', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)
