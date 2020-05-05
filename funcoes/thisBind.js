const pessoa = {
	saudacao: 'Bom dia',
	falar(){
		console.log(this.saudacao)
	}
}


pessoa.falar()
//Bom dia
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO
//O saudacao não é referenciado pelo falar(), gerando undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
//O bind ajusta esse conflito causado pelo this
falarDePessoa()
//Assim ele aponta para o lugar certo, apresentando a
//mensagem de Bom dia