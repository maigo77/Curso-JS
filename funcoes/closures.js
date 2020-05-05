// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular externas à função
// Tem tudo a ver com o contexto léxico, é ele em ação!

const x = 'Global'

function fora() {
	const x = 'Local'
	function dentro(){
		return x
	}
	return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //Local