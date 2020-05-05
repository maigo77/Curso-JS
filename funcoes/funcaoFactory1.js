// Resolver o problema abaixo

// const prod1 = {
// 	nome: '...',
// 	preco: 45
// }

// const prod2 = {
// 	nome: '...',
// 	preco: 50
// }

//Factory Simples - função que retorna um objeto
function criarPessoa(){
	return {
		nome: 'Ana',
		sobrenome: 'Silva'
	}
}

console.log(criarPessoa())