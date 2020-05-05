// Mapeia um array e transforma em outro array (diferente)
// ele não causa alteração no array utilizado (nums, no caso)

const nums = [1, 2, 3, 4, 5]

//'For' com proprósito
let resultado = nums.map(function(e){
	return e * 2
})
console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)