function soma() {
	let soma = 0
	for (i in arguments) {
		soma += arguments[i]
	}
	return soma
}

console.log(soma()) //retorna 0
console.log(soma(1)) //retorna 1
console.log(soma(1.1, 2.2, 3.3)) //retorna 6.6
console.log(soma(1.1, 2.2, "Teste")) //retorna 3.3Teste
console.log(soma('a', 'b', 'c')) //retorna 0abc

//Antes da Versão ES6 (agora possui rest e spread que será visto mais 
//pra frente)