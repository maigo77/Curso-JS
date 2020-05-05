function getPreco(imposto = 0, moeda = 'R$') {
	return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
	nome: 'Notebook',
	preco: 4589,
	desc: 0.15,
	getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) 
//R$ NaN sem o global.preco e desc
//R$ 18 com o global.preco e desc

console.log(produto.getPreco())
//R$ 3900.65

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
//R$ 39992
console.log(getPreco.apply(carro))
//R$ 39992

console.log(getPreco.call(carro, 0.17, '$')) 
//$ 46790.64
//contexto seguido dos parâmetros (carro como contexto 
// e depois o imposto e moeda como parametros)

console.log(getPreco.apply(carro, [0.17, '$']))
//$ 46790.64
//parametros passados dentro de um array 1º o objeto contexto (carro)
//2º os parametros da function dentro de []