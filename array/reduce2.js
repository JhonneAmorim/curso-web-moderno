const alunos = [
  { nome: 'João', nota: 7.3, bolsita: false },
  { nome: 'Maria', nota: 9.2, bolsita: true },
  { nome: 'Pedro', nota: 9.8, bolsita: false },
  { nome: 'Ana', nota: 8.7, bolsita: true }
]

// Desafio 1: Todos os alunos sao bolsista?
const todosBolsista = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a => a.bolsita).reduce(todosBolsista))

//Desafio 2: Algum aluno e bolsista?
const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsita).reduce(algumBolsista))