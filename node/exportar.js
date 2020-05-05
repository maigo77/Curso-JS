console.log(module.exports === this) 
console.log(module.exports === exports)
//o this e o exports são apenas referências para onde o module.exports aponta


this.a = 1
exports.b = 2
module.exports.c = 3

exports = null  // não será retornado
console.log(module.exports)

exports = { // não será retornado
	nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }