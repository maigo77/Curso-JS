	//deu erro, sei lá
// middleware pattern (chain of responsability)
const ctx = {}

const passo1 = (ctx, next) => {
	ctx.valor1 = 'mid1'
	next()
}

const passo2 = (ctx, next) => {
	ctx.valor2 = 'mid2'
	next()
}

const passo3 = ctx = ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
	const execPasso = indice => {
		middlewares && indice < middlewares.length && 
			middlewares[indice](ctx, () => execPasso(indice + 1))
	}
	execPasso(0)
}

exec(ctx, passo1, passo2, passo3)
console.log(ctx)

//ctx = contexto, objeto que vai sendo passado de um obj
//(middleware) para o outro

//next = funcao next(), vai disparar o próximo passo

//const exec = ...
//dentro da função terá um 
//array chamado middlewares

//const execPasso
//Aqui, se executa cada um dos passos que foram passados na lista
	//se middlewares for true e o indice for menor que o tamanho
	//máximo do array e executa o middlewares passando o índice,
	//(0, 1, 2), vai retornar uma função, chamando a mesma função
	//passando o contexto atual e a função next, que no caso é
	//inline do tipo arrow "() =>"

