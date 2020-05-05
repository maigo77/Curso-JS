//O this não varia dentro de arrow function!

let comparaComthis = function (param){
	console.log(this === param)
}

comparaComthis(global)//true
comparaComthis(this) //false (no navegador usou window para testar pois
//o navegador não iria reconhecer o global)

const obg = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(global) //False
comparaComthis(obj) //True

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true
comparaComThisArrow(this)//true


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false, não é possível mudar a referência do this
comparaComThisArrow(module.exports)//true