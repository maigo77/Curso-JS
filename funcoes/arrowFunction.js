//Sem Arrow Function
let dobro = function (a){
	return 2 * a
}

//Com Arrow Function
dobro = (a) => { return 2 * a }

dobro = a => 2 * a //retorno implícito (função que só faz uma coisa, 
//sendo assim bem específica, sendo muito útil para reutilizações )

console.log(dobro(Math.PI))
//Retorna o dobro de PI 6.283..

//Sem Arrow Function
let ola = function () {
	return 'Olá'
}

//Com Arrow Function

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola()) //Retorna 'Olá' (e o parâmetro da linha acima foi
// omitido)