// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
 // { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }

 delete produto.preco
 delete produto['marca do produto']
 console.log(produto)
 // { nome: 'Cadeira' }

 const carro = {
 	modelo: 'A4',
 	valor: 89000,
 	proprietario: {
 		nome: 'Raul',
 		idade: 56,
 		endereco: {
 			logradouro: 'Rua ABC',
 			numero: 123
 		}
 	},
 	condutores: [{
 		nome: 'Junior',
 		idade: 19
 	}, {
 		nome: 'Ana',
 		idade: 42
 	}],
 	calcularValorSeguro: function(){
 		//...
 	}
 }

 carro.proprietario.endereco.numero = 1000
 carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
 console.log(carro)
 //Todas as informações do carro com o numero e logradouro modificados

delete carro.condutores //tudo abaixo será deletado
delete carro.proprietario.endereco //tudo abaixo será deletado
delete carro.calcularValorSeguro
console.log(carro)
//Modelo, valor, proprietario {...}
console.log(carro.condutores)
//undefined
console.log(carro.condutores.length)
//ERRO
//Comentando a linha que deleta o carro.condutores
//2