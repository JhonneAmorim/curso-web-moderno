const alunos = [
  { nome: 'João', nota: 7.3, bolsita: false },
  { nome: 'Maria', nota: 9.2, bolsita: true },
  { nome: 'Pedro', nota: 9.8, bolsita: false },
  { nome: 'Ana', nota: 8.7, bolsita: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos
  .map(a => a.nota)
  .reduce(function (acumulaor, atual) {
    console.log(acumulaor, atual)
    return acumulaor + atual
  }, 0)

console.log(resultado)
