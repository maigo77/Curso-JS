//Antes do ES6

//Estratégia 1 para gerar valor padrão

function soma1(a, b, c){
	a = a || 1 // muito usado
	b = b || 1
	c = c || 1
	return a + b + c
}

console.log(soma1(), soma(3), soma1(1, 2, 3), soma1(0, 0, 0))
//3, 5, 6, 3
//No último caso, o 0 retorna falso, então o resultado seria 3

//Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
	a = a !== undefined ? a : 1
	b = 1 in arguments ? b : 1
	c = isNaN(c) ? 1 : c // Essa é a mais segura dentro das anteriores!
	return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
//3, 5, 6, 0

//Valor padrão do ES 2015
function soma3(a = 1, b = 1, c = 1){ //essa é a versão mais apropriada!
	return a + b + c 
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
//3, 5, 6, 0
