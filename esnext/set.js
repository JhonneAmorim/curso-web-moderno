// nao aceita repetiçao/ nao indexada
const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nome = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nome)
console.log(nomeSet)
