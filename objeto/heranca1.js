const ferrari = {
	modelo: 'F40',
	velmax: 324
}

const volvo = {
	modelo: 'V40',
	velMax: 200
}

console.log(ferrari.__proto__) 
//ferrari.protoype é diferente de ferrari.__proto__
//no primeiro caso, geraria undefined
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() { }

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)