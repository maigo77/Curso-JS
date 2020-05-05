console.log(soma(3, 4)) 
// vai funcionar pq o interpretador carrega primeiro as funçoes
console.log(sub(3, 4))
// não vai funcionar porque ela ainda não foi declarada, o interpretador
// ainda não leu a função para poder executa-la
console.log(mult(3, 4))
//mesma coisa do último caso


//function declaration 
function soma (x, y){
	return x + y
}

//function expression
const sub = function (x, y){
	return x - y
}

//name function expression - pouco usada (vantagem apenas em debugs)
const mult = function mult(x, y) {
	return x * y
}