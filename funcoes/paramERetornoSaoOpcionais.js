function area(largura, altura){
	const area = largura * altura
	if(area > 20){
		console.log(`Valor acima do permitido: ${area}m2.`)
	}else {
		return area
	}
}

console.log(area(2,2)) //retorna 4
console.log(area(2)) //retorna NaN
console.log(area()) //retorna NaN
console.log(area(2, 3, 17, 22, 44)) //retorna 6
console.log(area(5,5))//retorna mensagem do if > 20
