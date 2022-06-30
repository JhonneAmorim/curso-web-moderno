class Lancamento {
  constructor(nome = 'Generico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contaDeAgua = new Lancamento('Agua', -75)
const contaDeNet = new Lancamento('Net', -80)
const contaDeMercado = new Lancamento('Mercado', -500)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, contaDeMercado, contaDeNet)
console.log(contas.sumario())
