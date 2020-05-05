//Class
class Pessoa {
	constructor(nome){
		this.nome = nome
	}

	falar(){
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa('João')
p1.falar() //Meu nome é João 

//Factory
const criarPessoa = nome => {
	return {
		falar: () => console.log(`Meu nome é ${nome}`)
	}
}

const p2 = criarPessoa('José')
p2.falar() //Meu nome é José